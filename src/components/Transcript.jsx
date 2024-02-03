// import React from "react";
// import useSpeechRecognition from "react-speech-recognition";

// const Transcript = () => {
//   // Use the React Speech Recognition hook to get the transcript and other properties
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();

//   // If the browser does not support speech recognition, display a message
//   if (!browserSupportsSpeechRecognition) {
//     return <p>Sorry, your browser does not support speech recognition.</p>;
//   }

//   // Call the audioToReact function with the transcript and store the result in a variable
//   //   const reactElement = audioToReact(transcript);

//   return (
//     <div>
//       <h1>Audio to React</h1>
//       <p>Speak the keywords and the text to generate React elements.</p>
//       <p>
//         For example, say "heading hello" to create a{" "}
//         <code>
//           <h1>Hello</h1>
//         </code>{" "}
//         element.
//       </p>
//       <p>The keywords are: heading, paragraph, button, and image.</p>
//       <p>For image, you need to provide a valid image URL as the source.</p>
//       <p>Press the button to start or stop listening.</p>
//       <button
//         onClick={listening ? resetTranscript : SpeechRecognition.startListening}
//       >
//         {listening ? "Stop" : "Start"}
//       </button>
//       <p>Transcript: {transcript}</p>
//       <p>React element:</p>
//       {/* {reactElement} */}
//     </div>
//   );
// };

// export default Transcript;
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Transcript = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Transcript;
