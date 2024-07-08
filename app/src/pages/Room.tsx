import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoPlayer } from "../components/VideoPlayer";
import { useRoomContext } from "../context/RoomContext";

export const Room = () => {
  const { id } = useParams();
  const { ws, me, peers, stream } = useRoomContext();

  useEffect(() => {
    me?.on("open", () => {
      ws.emit("join-room", { roomId: id, peerId: me._id });
    });
  }, [id, me, ws]);

  return (
    <div className="App">
      <h2>Room id - {id}</h2>
      <div className="room">
        <VideoPlayer key={"me"} stream={stream} />

        {Object.values(peers).map((peer: any, index) => (
          <VideoPlayer key={index} stream={peer.stream} />
        ))}
      </div>
    </div>
  );
};
