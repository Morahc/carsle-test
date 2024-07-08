const { v4 } = require("uuid");

const rooms = {};

const roomHandler = (socket) => {
  const createRoom = ({ peerId }) => {
    const roomId = v4();
    rooms[roomId] = [];
    socket.emit("room-created", { roomId });
    joinRoom({ roomId, peerId });
};
const joinRoom = ({ roomId, peerId }) => {
    if (rooms[roomId]) {
        rooms[roomId].push(peerId);
        socket.join(roomId);
        socket.to(roomId).emit("user-joined", { roomId, peerId });
        socket.emit("get-users", {
            roomId,
            users: rooms[roomId],
        });
    } else {
        createRoom({ peerId });
    }

    socket.on("disconnect", () => {
        console.log("user disconnected ", peerId);
        leaveRoom({ roomId, peerId });
    });
};

  const leaveRoom = ({ roomId, peerId }) => {
    rooms[roomId] = rooms[roomId]?.filter((id) => id !== peerId);
    socket.to(roomId).emit("user-disconnected", peerId)
  };

  socket.on("create-room", createRoom);
  socket.on("join-room", joinRoom);
  socket.on("leave-room", leaveRoom);
};

module.exports = roomHandler;
