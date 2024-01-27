import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import './JoinRoom.css'

const JoinRoom = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleClick = (id) => {
    if(id === '') return;
    navigate(`/document/${id}`);
  };
  
  return (
    <div className="container">
      <h1>Join a Room</h1>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={() => handleClick(roomId)}>Join Room</button>
      <button onClick={() => handleClick(uuidV4())}>Create New Room</button>
    </div>
  );
}

export default JoinRoom;