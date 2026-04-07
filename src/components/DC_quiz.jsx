import { useState } from "react";


function DCQuiz({ setResult }) {
const [selected,setSelected] = useState(null)
const questions = [
{
question:"What is your mindset like",
answers:[
{ text:"Planning ahead", character:"batman"},
{ text:"Chaos is fun", character:"joker"},
{ text:"Fight for justice", character:"wonderwoman"},
{ text:"Help everyone", character:"superman"},
{ text:"Outsmart others", character:"riddler"}
]
},

{
question:"Pick a strength of yours",
answers:[
{ text:"Intelligence", character:"batman"},
{ text:"Unpredictability", character:"joker"},
{ text:"Courage", character:"wonderwoman"},
{ text:"Compassion", character:"superman"},
{ text:"Wit", character:"riddler"}
]
},

{
question:"Which one these is your weakness",
answers:[
{ text:"Trust issues", character:"batman"},
{ text:"Reckless", character:"joker"},
{ text:"Too honorable", character:"wonderwoman"},
{ text:"Too selfless", character:"superman"},
{ text:"Ego", character:"riddler"}
]
},

{
question:"Pick a weapon to use in combat",
answers:[
{ text:"Gadgets", character:"batman"},
{ text:"Mind games", character:"joker"},
{ text:"Lasso", character:"wonderwoman"},
{ text:"Raw strength", character:"superman"},
{ text:"Riddles", character:"riddler"}
]
},

{
question:"Your personality type",
answers:[
{ text:"Silent and strategic", character:"batman"},
{ text:"Chaotic and funny", character:"joker"},
{ text:"Brave and bold", character:"wonderwoman"},
{ text:"Kind and hopeful", character:"superman"},
{ text:"Smart and tricky", character:"riddler"}
]
}
];

const results = {
batman:{
title:"Batman",
desc:"Strategic and mysterious.",
img:"/images/DC/batman.jpeg",
traits:{
strength:"Intelligence",
weakness:"Trust issues",
type:"Lone Wolf"
}
},

joker:{
title:"Joker",
desc:"Chaotic and unpredictable.",
img:"/images/DC/joker.webp",
traits:{
strength:"Unpredictability",
weakness:"Recklessness",
type:"Agent of Chaos"
}
},

wonderwoman:{
title:"Wonder Woman",
desc:"Brave and powerful.",
img:"/images/DC/wonderwoman.jpg",
traits:{
strength:"Courage",
weakness:"Stubbornness",
type:"Warrior"
}
},

superman:{
title:"Superman",
desc:"Kind and hopeful.",
img:"/images/DC/superman.avif",
traits:{
strength:"Compassion",
weakness:"Too selfless",
type:"Protector"
}
},

riddler:{
title:"Riddler",
desc:"Clever and witty.",
img:"/images/DC/riddler.jpeg",
traits:{
strength:"Intellect",
weakness:"Ego",
type:"Mastermind"
}
}
};

const [index,setIndex]=useState(0);
const [scores,setScores]=useState({
batman:0,joker:0,wonderwoman:0,superman:0,riddler:0
});



return (
<div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-6">

<div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl">

<h2 className="text-2xl font-bold mb-6 text-center">
{questions[index].question}
</h2>

<div className="grid gap-3">

{questions[index].answers.map((a,i)=>(
<button
key={i}
onClick={()=>setSelected(a.character)}
className={`w-full text-left p-4 rounded-xl border transition font-medium
${selected===a.character ? "bg-purple-100 border-purple-400" : "hover:bg-purple-50"}
`}
>
{a.text}
</button>
))}

</div>

<div className="flex gap-3 mt-6">

<button
onClick={()=>setIndex(index-1)}
disabled={index===0}
className="flex-1 border py-2 rounded-xl disabled:opacity-40"
>
Previous
</button>

{index === questions.length-1 ? (

<button
className="flex-1 bg-green-600 text-white py-2 rounded-xl"
onClick={()=>{
if(!selected){
alert("Please select an option")
return
}

if(!confirm("Are you sure you want to submit?")) return

const newScores={...scores,[selected]:scores[selected]+1}

const winner=Object.keys(newScores).reduce((a,b)=>
newScores[a]>newScores[b]?a:b
)

setResult(results[winner])
}}
>
Submit
</button>

) : (

<button
className="flex-1 bg-purple-600 text-white py-2 rounded-xl"
onClick={()=>{
if(!selected){
alert("Please select an option")
return
}

const newScores={...scores,[selected]:scores[selected]+1}
setScores(newScores)
setSelected(null)
setIndex(index+1)
}}
>
Next
</button>

)}

</div>

<div className="mt-4 text-center text-sm text-gray-500">
Question {index + 1} / {questions.length}
</div>

</div>
</div>
);
}
export default DCQuiz;