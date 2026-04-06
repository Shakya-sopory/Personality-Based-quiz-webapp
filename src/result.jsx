function Result({ result, goHome }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">

        <img 
        src={result.img}
        className="w-40 h-40 object-contain mx-auto mb-4"
        />

        <h1 className="text-3xl font-bold mb-2">
          You got...
        </h1>

        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          {result.title}
        </h2>

        <p className="text-gray-600 mb-6">
          {result.desc}
        </p>

        {/* Personality traits */}
        <div className="bg-gray-100 rounded-xl p-4 mb-6 text-left">
          <p><span className="font-semibold">Strength:</span> {result.traits.strength}</p>
          <p><span className="font-semibold">Weakness:</span> {result.traits.weakness}</p>
          <p><span className="font-semibold">Type:</span> {result.traits.type}</p>
        </div>

        {/* Share button */}
        <button
        onClick={()=>{
          navigator.clipboard.writeText(
            `I got ${result.title}! Try this quiz: ${window.location.href}`
          )
          alert("Result copied to clipboard!")
        }}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold mb-3 hover:bg-blue-700 transition"
        >
        Share Result
        </button>

        <button
        onClick={goHome}
        className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
        >
        Take Another Quiz
        </button>

      </div>
    </div>
  );
}

export default Result;