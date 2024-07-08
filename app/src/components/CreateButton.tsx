import { useRoomContext } from "../context/RoomContext";

export const Join: React.FC = () => {
    const { ws, me } = useRoomContext();
    const createRoom = () => {
        ws.emit("create-room", { peerId: me._id });
    };
    return (
        <button
            onClick={createRoom}
        >
            Start new meeting
        </button>
    );
};
