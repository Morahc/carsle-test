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
    <div>
      <>Room id {id}</>
      <div className="grid grid-cols-4 gap-4">
        <VideoPlayer className="me" key={"me"} stream={stream} />

        {Object.values(peers).map((peer: any, index) => (
          <VideoPlayer key={index} stream={peer.stream} />
        ))}
      </div>
    </div>
  );
};
