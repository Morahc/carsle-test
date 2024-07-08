import { useEffect, useRef } from "react";

export const VideoPlayer: React.FC<{
    stream: MediaStream;
}> = ({ stream }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.srcObject = stream;
    }, [stream]);
    return (
        <div>
            <video playsInline ref={videoRef} autoPlay muted={true} />
        </div>
    );
};
