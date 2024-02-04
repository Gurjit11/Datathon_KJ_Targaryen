import { useEffect, useState } from "react";
import axios from "axios";
import Transcript from "../components/Transcript";
import "core-js/stable";
import "core-js/es/array";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Newsai() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answering, setAnswering] = useState(false);
  const [answer, setAnswer] = useState("");
  const [clearing, setClearing] = useState(false);
  const [clear, setClear] = useState("");
  const [image, setImage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  useEffect(() => {
    setInput(transcript);
  }, [transcript]);

  // const togglePlay = () => {
  //   const audioElement = document.getElementById("audioPlayer");

  //   if (isPlaying) {
  //     audioElement.pause();
  //   } else {
  //     audioElement.play();
  //   }

  //   setIsPlaying(!isPlaying);
  // };

  // const getAudio = () => {
  //   setLoading(true);
  //   fetch(`http://localhost:5000/textaudio`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       text: text,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data)

  //       // Save the audio file with .flac extension
  //       const saveAudio = (audioUrl) => {
  //         const link = document.createElement("a");
  //         link.href = audioUrl;
  //         link.download = "audio.flac";
  //         link.click();
  //       };

  //       // Play the audio
  //       const playAudio = () => {
  //         const audioElement = new Audio(audio);
  //         audioElement.play();
  //       };

  //       // Call the saveAudio and playAudio functions
  //       saveAudio("http://localhost:5000/audio.flac");
  //       playAudio();
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.error(err);
  //     });
  // };
  const sendText = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(`https://datathon-kj-targaryen.onrender.com/textprompt`, {
      method: "POST",
      body: JSON.stringify({
        text: input,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setData(data)
        setText(data.script);
        // getAudio();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
  const sendImage = async (e) => {
    console.log(e);
    const responseCloud = await axios.post(
      `https://api.cloudinary.com/v1_1/dtzaypqns/image/upload`,
      {
        file: e.dataURL,
        upload_preset: "byjazovy",
      }
    );

    console.log(responseCloud.data.secure_url);
    console.log(image);
    setImage(responseCloud.data.secure_url);
    fetch(`https://datathon-kj-targaryen.onrender.com/imageprompt`, {
      method: "POST",
      body: JSON.stringify({
        url: responseCloud.data.secure_url,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setData(data)
        setText(data.script);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
  // console.log(text)

  // const fetchTranscript = (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   fetch(`${process.env.REACT_APP_BACKEND_input}/text`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       video_input: input,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data)
  //       setText(data.script);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.error(err);
  //     });
  // };
  // // console.log(text)

  // const fetchAnswer = (e) => {
  //   setAnswering(true);
  //   e.preventDefault();
  //   fetch(`${process.env.REACT_APP_BACKEND_input}/query`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       query: question,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data)
  //       setAnswer(data.ans);
  //       setAnswering(false);
  //     })
  //     .catch((err) => {
  //       setAnswering(false);
  //       console.error(err);
  //     });
  // };
  // // console.log(text)

  // const fetchClear = (e) => {
  //   setClearing(true);
  //   e.preventDefault();
  //   fetch(`${process.env.REACT_APP_BACKEND_input}/clear`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       query: question,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data)
  //       setClear(data.ans);
  //       setClearing(false);
  //     });
  // };
  // // console.log(text)

  return (
    <div className="">
      <div className="sm:p-20 py-12 px-2 bg-[url('../public/bg.jpeg')] h-[400px] bg-cover">
        <div className=" mt-12 mb-24">
          <div className="text-white ">
            <p className="text-3xl font-bold">AI News Generating Tool</p>
            <p className="mt-3">Give a prompt or audio input or a photo</p>
            <p> and AI is to give latest news</p>
            <p> about that topic</p>
          </div>
        </div>
        <div className="pb-3">
          <div className="pb-20 pt-10 sm:px-20 sm:mx-20 px-3 mx-2 mb-20 rounded-xl bg-gradient-to-br from-black to-blue-950 border-[0.1px] border-gray-700 shadow-blue-900 shadow-[0px_10px_50px_3px_rgba(0,0,0,0.1)] text-white ">
            <div className="bg-gradient-to-br from-blue-500 mb-8 to-cyan-400 bg-clip-text text-transparent text-3xl flex justify-center font-bold">
              Generate content using AI
            </div>

            <form onSubmit={sendText}>
              <div className="mb-4">
                <label className="block  font-semibold  mb-2">
                  Input Topic :{" "}
                  {/* <span className="text-blue-500 text-sm font-semibold">
                    ( Please take videos shorter than 5 mins as the api is
                    limited )
                  </span> */}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter the input..."
                  name="video_input"
                  id="video_input"
                  required
                />
              </div>
              <button
                className="bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Text
              </button>
            </form>
            <input
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  const imageData = reader.result;
                  const uploadedImage = {
                    file: file,
                    dataURL: imageData,
                  };
                  sendImage(uploadedImage);
                };
                reader.readAsDataURL(file);
              }}
              className="bg-gradient-to-r mt-4 from-indigo-500 via-blue-600 to-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="file"
            ></input>
            {loading ? "AI is working on it..." : null}
            {text ? (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-4">
                  Transcription
                </h2>
                <div className="shadow-[0px_0px_25px_rgba(0,0,0,0.35)] rounded-lg p-2 bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-y-auto max-h-[300px] w-full">
                  <code className=" p-1">{text}</code>
                </div>
                {/* <button onClick={togglePlay}>
                  {isPlaying ? "Pause" : "Play"}
                </button> */}
                {/* <audio id="audioPlayer" controls>
                  <source src={audio} type="audio/flac" />
                  Your browser does not support the audio tag.
                </audio> */}
              </>
            ) : null}

            {/* <>
              <form
              // onSubmit={fetchAnswer}
              >
                <div className="mb-4 mt-20">
                  <label className="block text-white font-semibold mb-2">
                    Question about video:{" "}
                    <span className="text-blue-500 text-sm font-semibold">
                      ( AI may take some time... )
                    </span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter the question..."
                    name="video_input"
                    id="video_input"
                    required
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {answering ? "Thinking..." : "Get Answer"}
                </button>
              </form>
            </>

            {answer ? (
              <>
                <h2 className="text-xl font-semibold mt-8 mb-4">Answer</h2>
                <div className="shadow-[0px_0px_25px_rgba(0,0,0,0.35)] rounded-lg p-2 bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-y-auto max-h-[300px] w-full">
                  <code className=" p-1">{answer}</code>
                </div>
              </>
            ) : null}

            {text ? (
              <button
                className="bg-red-500 hover:bg-gradient-to-r from-orange-500 via-red-600 to-pink-400 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                // onClick={fetchClear}
              >
                {clearing ? "Clearing..." : "Clear DB"}
              </button>
            ) : null}
            {text ? (
              clear ? (
                <span className="text-blue-500 ml-3">( {clear} )</span>
              ) : (
                <span className="text-blue-500 ml-3">
                  ( Please Clear DB after use )
                </span>
              )
            ) : null} */}
            {/* {clear ? <Confetti /> : null} */}
            <div>
              <p className="text-xl font-semibold">
                Microphone: {listening ? "on" : "off"}
              </p>
              <button
                className="bg-gradient-to-r mt-2 from-indigo-500 via-blue-600 to-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={SpeechRecognition.startListening}
              >
                Start
              </button>
              <button
                className="bg-gradient-to-r mt-2 mx-2 from-indigo-500 via-blue-600 to-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={SpeechRecognition.stopListening}
              >
                Stop
              </button>
              <button
                className="bg-gradient-to-r mt-2 from-indigo-500 via-blue-600 to-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={resetTranscript}
              >
                Reset
              </button>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default Newsai;
