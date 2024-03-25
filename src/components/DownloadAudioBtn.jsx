import { useEffect, useState } from "react";

function DownloadAudioBtn({ src = "" }) {
  const [blob, setBlob] = useState(null);

  useEffect(async () => {
    const res = await fetch(src);

    const blob = await res.blob();

    setBlob(blob);
  }, []);

  return (
    <>
      {blob ? (
        <button
          className={" flex-auto w-20 h-8 rounded-full flex bg-blue-600 "}
          onClick={() => {

            if(!blob) return

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;

            link.setAttribute("download", src.split("/").pop());

            document.body.appendChild(link);

            link.click();

            link.remove();
          }}
        >
          <div className="h-8 w-8 flex items-center justify-center">
            <svg
              className=" w-4 stroke-white"
              width={44}
              height={44}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
          </div>
          <span className="h-8 flex items-center flex-1 text-white justify-center">
            {src.endsWith(".mp3") ? ".mp3" : ".ogg"}
          </span>
        </button>
      ) : (
        <div className=" w-20 h-8 bg-slate-300 animate-pulse rounded-full"></div>
      )}
    </>
  );
}

export default DownloadAudioBtn;
