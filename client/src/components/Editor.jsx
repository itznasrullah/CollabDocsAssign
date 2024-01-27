import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

import JoditEditor from 'jodit-react';

const Editor = () => {
    const { id } = useParams();
    const editor = useRef(null);

    const [socket, setSocket] = useState(null);
    const [content, setContent] = useState("");

    useEffect(() => {
        const s = io('http://localhost:5000');
        setSocket(s);

        return () => {
            s.disconnect();
        }
    }, [])

    useEffect(() => {
        if (socket == null) return;
        socket.emit("get-documentId", id);

    }, [socket, id])

    
    useEffect(() => {
        if (socket == null) return;
        socket.on("on-load-docs", (data) => { setContent(data) })

        return () => {
            socket.off("on-load-docs", (data) => { setContent(data); });
        }

    }, [socket])

    useEffect(() => {
        if (socket == null) return;
        socket.on("rev-changes", (data) => { setContent(data) })

        return () => {
            socket.off("rev-changes", (data) => { setContent(data); });
        }
    }, [socket]);

    const handleChange = (e) => {
        setContent(e);
        socket.emit("message", e);
        console.log(e);
    }

    return (
        // <textarea name="document" id="document" cols="80" rows="20" value={content} onChange={handleChange}></textarea>
        <JoditEditor
            ref={editor}
            value={content}
            // config={{readonly: false, placeholder: ""}}
            onChange={handleChange}
        />
    )
}

export default Editor