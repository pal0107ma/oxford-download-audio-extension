import { useEffect, useState } from "react";
import "./App.css";
import Phon from "./components/Phon";

function App() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const [activeTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    const data = await chrome.tabs.sendMessage(activeTab.id, {
      message: "start",
    });

    setData(data);
  }, []);

  return (
    <div className=" w-96 px-4 py-10 flex flex-col gap-3 text-slate-800">
      {data?.phons_br && data?.phons_n_am ? (
        <>
          <div className=" text-lg">
            <h2>British</h2>
          </div>
          <div className="flex flex-col gap-3">
            {data.phons_br.map((phon, i) => (
              <Phon key={i} {...phon} />
            ))}
          </div>

          <div className=" text-lg">
            <h2>North American</h2>
          </div>
          <div className="flex flex-col gap-3">
            {data.phons_n_am.map((phon) => (
              <Phon key={1} {...phon} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" stroke-slate-800 w-32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7v4a1 1 0 0 0 1 1h3" />
            <path d="M7 7v10" />
            <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" />
            <path d="M17 7v4a1 1 0 0 0 1 1h3" />
            <path d="M21 7v10" />
          </svg>

          <span className=" text-sm uppercase italic">nothing here...</span>
        </div>
      )}
    </div>
  );
}

export default App;
