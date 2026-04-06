import { useState } from "react";
import MarvelQuiz from "./components/marvel_quiz";
import DCQuiz from "./components/DC_quiz";
import LOTRQuiz from "./components/lotr_quiz";
import Result from "./result";

function App() {
  const [quiz, setQuiz] = useState(null);
  const [result, setResult] = useState(null);

  if (result) {
    return (
      <Result
        result={result}
        goHome={() => {
          setQuiz(null);
          setResult(null);
        }}
      />
    );
  }

  if (quiz === "marvel")
    return <MarvelQuiz setResult={setResult} />;

  if (quiz === "dc")
    return <DCQuiz setResult={setResult} />;

  if (quiz === "lotr")
    return <LOTRQuiz setResult={setResult} />;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-200 via-cyan-200 to-orange-200 p-10"
style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive" }}
>

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-300 opacity-60 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-300 opacity-60 blur-3xl rounded-full"></div>
      <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-orange-300 opacity-50 blur-3xl rounded-full"></div>

      <div className="relative z-10">

        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Personality Quiz Hub
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Pick a quiz and discover your personality match
        </p>
        <button
        onClick={()=>{
        const quizzes=["marvel","dc","lotr"]
        setQuiz(quizzes[Math.floor(Math.random()*quizzes.length)])
        }}
        className="mx-auto block mb-8 bg-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
        > 
        🎲 Random Quiz
        </button>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div 
          onClick={()=>setQuiz("marvel")}
          className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <img src="/images/Marvel/marvel_cover.webp" className="h-48 w-full object-cover"/>
            <div className="p-4 font-semibold">
              Which Marvel Character Are You?
            </div>
          </div>

          <div 
          onClick={()=>setQuiz("dc")}
          className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <img src="/images/DC/DC_cover.jpeg" className="h-48 w-full object-cover"/>
            <div className="p-4 font-semibold">
              Which DC Character Are You?
            </div>
          </div>

          <div 
          onClick={()=>setQuiz("lotr")}
          className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <img src="/images/LOTR/LOTR_cover.jpeg" className="h-48 w-full object-cover"/>
            <div className="p-4 font-semibold">
              Which LOTR Character Are You?
            </div>
          </div>
        <footer className="text-center mt-16 text-sm font-semibold">
  <span className="text-red-500">Made by 24BCE0371</span>
  <span className="text-gray-500"> --- Shakya Sopory</span>
</footer>
        </div>
      </div>
    </div>
  );
}

export default App;