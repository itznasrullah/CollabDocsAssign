const http = require('http');
const socketio = require('socket.io');
const app = require("./app.js");
const Document = require("./models/documentModel.js");

const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('get-documentId', async (id) => {
        if (!id) return;

        let initialData = '';
        try {
            const document = await Document.findById(id);

            if (!document) {
                // Creating New Document
                await Document.create({ _id: id, data: '' });
                console.log('Document created');
            } else {
                // Getting Old Document
                initialData = document.data;
                console.log('Document loaded:', initialData);
            }

            socket.join(id);
            socket.emit('on-load-docs', initialData);

            socket.on('message', async (data) => {
                try {
                    await Document.findByIdAndUpdate(id, { data });
                    socket.broadcast.to(id).emit('rev-changes', data);

                    console.log('Message from client id:', id, 'data:', data);
                } catch (error) {
                    console.error('Error updating document:', error.message);
                }
            });
        } catch (error) {
            console.error('Error finding or creating document:', error.message);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));