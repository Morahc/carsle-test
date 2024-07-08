import { useRoomContext } from "../context/RoomContext";

export const Join: React.FC = () => {
    const { ws, me } = useRoomContext();
    const createRoom = () => {
        ws.emit("create-room", { peerId: me._id });
    };
    return (
        <button
            onClick={createRoom}
            className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white"
        >
            Start new meeting
        </button>
    );
};
