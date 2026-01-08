import { useState } from "react";

export function useScreenRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [videoBlob, setVideoBlob] = useState(null);
    const [error, setError] = useState(null);

    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [stream, setStream] = useState(null);
    const [chunks, setChunks] = useState([]);

    const startRecording = async () => {
        try {
            setError(null);
            setChunks([]);
            setVideoBlob(null);

            const displayStream = await navigator.mediaDevices.getDisplayMedia({
                video: true
            });

            const recorder = new MediaRecorder(displayStream);

            let localChunks = [];

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    localChunks.push(event.data);
                    setChunks((prev) => [...prev, event.data]); // optional للـ UI
                }
            };

            recorder.onstop = () => {
                if (localChunks.length === 0) {
                    setError("Recording failed: no data collected");
                    return;
                }
                const blob = new Blob(localChunks, { type: "video/webm" });
                setVideoBlob(blob);
            };

            setStream(displayStream);
            setMediaRecorder(recorder);
            setIsRecording(true);

            recorder.start();
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("User denied screen recording permission");
        }
    };

    const stopRecording = () => {
        if (!mediaRecorder || !stream) return;

        mediaRecorder.stop();

        stream.getTracks().forEach((track) => track.stop());

        setIsRecording(false);
    };

    return {
        startRecording,
        stopRecording,
        isRecording,
        videoBlob,
        error
    };
}
