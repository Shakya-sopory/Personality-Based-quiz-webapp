import { useState } from "react";

function LOTRQuiz({ setResult }) {

const questions = [
{
question:"What is your role in a group",
answers:[
{ text:"Leader", character:"aragorn"},
{ text:"Wise guide", character:"gandalf"},
{ text:"Loyal friend", character:"frodo"},
{ text:"Sharp shooter", character:"legolas"},
{ text:"Bold fighter", character:"gimli"}
]
},

{
question:"Pick a strength of yours",
answers:[
{ text:"Leadership", character:"aragorn"},
{ text:"Wisdom", character:"gandalf"},
{ text:"Resilience", character:"frodo"},
{ text:"Precision", character:"legolas"},
{ text:"Strength", character:"gimli"}
]
},

{
question:"Your personality type",
answers:[
{ text:"Noble", character:"aragorn"},
{ text:"Mysterious", character:"gandalf"},
{ text:"Kind", character:"frodo"},
{ text:"Calm", character:"legolas"},
{ text:"Loyal", character:"gimli"}
]
},

{
question:"which one of these is your weakness",
answers:[
{ text:"Self doubt", character:"aragorn"},
{ text:"Secretive", character:"gandalf"},
{ text:"Burdened", character:"frodo"},
{ text:"Detached", character:"legolas"},
{ text:"Stubborn", character:"gimli"}
]
},

{
question:"Pick a weapon to use in comabat",
answers:[
{ text:"Sword", character:"aragorn"},
{ text:"Staff", character:"gandalf"},
{ text:"Ring", character:"frodo"},
{ text:"Bow", character:"legolas"},
{ text:"Axe", character:"gimli"}
]
}
];

const results = {
aragorn:{
title:"Aragorn",
desc:"Brave and noble leader.",
img:"/images/LOTR/aragorn.jpeg",
traits:{
strength:"Leadership",
weakness:"Self doubt",
type:"King"
}
},

gandalf:{
title:"Gandalf",
desc:"Wise and powerful.",
img:"/images/LOTR/gandalf.jpeg",
traits:{
strength:"Wisdom",
weakness:"Secretive",
type:"Mentor"
}
},

frodo:{
title:"Frodo",
desc:"Kind and resilient.",
img:"/images/LOTR/frodo.jpeg",
traits:{
strength:"Resilience",
weakness:"Burdened",
type:"Bearer"
}
},

legolas:{
title:"Legolas",
desc:"Sharp and observant.",
img:"/images/LOTR/legolas.jpeg",
traits:{
strength:"Precision",
weakness:"Detached",
type:"Archer"
}
},

gimli:{
title:"Gimli",
desc:"Loyal and fierce.",
img:"/images/LOTR/gimli.jpeg",
traits:{
strength:"Loyalty",
weakness:"Stubborn",
type:"Warrior"
}
}
};

const [index,setIndex]=useState(0);
const [scores,setScores]=useState({
aragorn:0,gandalf:0,frodo:0,legolas:0,gimli:0
});

const handleAnswer=(char)=>{
const newScores={...scores,[char]:scores[char]+1};
setScores(newScores);

if(index+1===questions.length){
const winner=Object.keys(newScores).reduce((a,b)=>
newScores[a]>newScores[b]?a:b
);
setResult(results[winner]);
}else{
setIndex(index+1);
}
};

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
onClick={()=>handleAnswer(a.character)}
className="w-full text-left p-4 border rounded-xl hover:bg-purple-50 hover:border-purple-400 transition font-medium"
>
{a.text}
</button>
))}

</div>

<div className="mt-6 text-center text-sm text-gray-500">
Question {index + 1} / {questions.length}
</div>

</div>
</div>
);
}

export default LOTRQuiz;