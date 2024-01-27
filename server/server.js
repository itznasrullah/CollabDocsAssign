const Model = require("./Model");

const io = require('socket.io')(5000, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on("get-documentId", async (id) => {
        if(id == null) return;

        let initialData = "";
        const findId = await Model.findById(id);

        if(findId == null){
            // Creating New Document
            await Model.create({ _id: id, data: "" });
            console.log("Doc Created");
        } else{
            // Getting Old Document
            initialData = (await Model.findById(id)).data;
            console.log(initialData);
        }

        socket.join(id);

        socket.emit('on-load-docs', initialData);

        socket.on('message', async (data) => {
            await Model.findByIdAndUpdate(id, {data: data});

            socket.broadcast.to(id).emit('rev-changes', data);
            console.log('Message from client id:', id, "data:", data);
        });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
