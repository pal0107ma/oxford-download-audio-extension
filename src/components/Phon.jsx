import DownloadAudioBtn from "./DownloadAudioBtn";

function Phon({ mp3, ogg, prefix, phon }) {
 

  return (
    <div className="flex  flex-auto">
      <div className=" flex-1">
        <p>
          {phon}{prefix && <span>, {prefix}</span>}
        </p>
      </div>

      <div className="flex gap-3">
        <DownloadAudioBtn src={mp3} />
        <DownloadAudioBtn src={ogg} />
      </div>
    </div>
  );
}

export default Phon;
