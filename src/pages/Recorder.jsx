import AppNavbar from "../components/AppNavbar";
import RecorderControls from "../components/RecorderControls";
import Timer from "../components/Timer";
import VideoPreview from "../components/VideoPreview";
import { useScreenRecorder } from "../hooks/useScreenRecorder";

const Recorder = () => {
  const { startRecording, stopRecording, isRecording, videoBlob, error } =
    useScreenRecorder();
  return (
    <div>
      <AppNavbar />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <RecorderControls
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
      />

      {isRecording && <Timer isRecording={isRecording} />}

      <VideoPreview videoBlob={videoBlob} />

      {videoBlob && (
        <a href={URL.createObjectURL(videoBlob)} download="recording.webm">
          <button>Download Video</button>
        </a>
      )}
    </div>
  );
};

export default Recorder;