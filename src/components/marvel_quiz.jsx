import { useState } from "react";

function MarvelQuiz({ setResult }) {

const questions = [
{
question:"How do your friends describe you",
answers:[
{ text:"Leader", character:"cap"},
{ text:"Genius", character:"ironman"},
{ text:"Funny", character:"spiderman"},
{ text:"Bold", character:"thor"},
{ text:"Calm", character:"strange"}
]
},

{
question:"Pick a strength of yours",
answers:[
{ text:"Leadership", character:"cap"},
{ text:"Intelligence", character:"ironman"},
{ text:"Agility", character:"spiderman"},
{ text:"Power", character:"thor"},
{ text:"Strategy", character:"strange"}
]
},

{
question:"which one of these is your weakness",
answers:[
{ text:"Too selfless", character:"cap"},
{ text:"Arrogant", character:"ironman"},
{ text:"Overthinking", character:"spiderman"},
{ text:"Impulsive", character:"thor"},
{ text:"Detached", character:"strange"}
]
},

{
question:"Pick a weapon to use in combat",
answers:[
{ text:"Shield", character:"cap"},
{ text:"Suit", character:"ironman"},
{ text:"Webs", character:"spiderman"},
{ text:"Hammer", character:"thor"},
{ text:"Magic", character:"strange"}
]
},

{
question:"Your personality type",
answers:[
{ text:"Honorable", character:"cap"},
{ text:"Sarcastic", character:"ironman"},
{ text:"Friendly", character:"spiderman"},
{ text:"Bold", character:"thor"},
{ text:"Wise", character:"strange"}
]
}
];

const results = {
ironman:{
title:"Iron Man",
desc:"Genius and sarcastic.",
img:"/images/Marvel/iron_man.webp",
traits:{
strength:"Intelligence",
weakness:"Arrogance",
type:"Innovator"
}
},

cap:{
title:"Captain America",
desc:"Honorable leader.",
img:"/images/Marvel/captain_america.webp",
traits:{
strength:"Leadership",
weakness:"Self-sacrifice",
type:"Leader"
}
},

thor:{
title:"Thor",
desc:"Bold and powerful.",
img:"/images/Marvel/thor.jpg",
traits:{
strength:"Raw power",
weakness:"Impulsive",
type:"Warrior"
}
},

spiderman:{
title:"Spider-Man",
desc:"Funny and kind.",
img:"/images/Marvel/spiderman.jpg",
traits:{
strength:"Agility",
weakness:"Overthinking",
type:"Friendly Hero"
}
},

strange:{
title:"Doctor Strange",
desc:"Calm and strategic.",
img:"/images/Marvel/dr_strange.avif",
traits:{
strength:"Wisdom",
weakness:"Detached",
type:"Strategist"
}
}
};

const [index,setIndex]=useState(0);
const [scores,setScores]=useState({
ironman:0,cap:0,thor:0,spiderman:0,strange:0
});


const [selected,setSelected]=useState(null)
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
export default MarvelQuiz;