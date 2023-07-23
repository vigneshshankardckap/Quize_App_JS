const Questions = [{   
    ques:"1.Which is the longest river in the world?",
    choice1:"kauveri",choice2:"ganga",choice3:"Nile",choice4:"Amazon",
    ans:"Nile"
},
{
    ques:"2.Which is india's first super computer?",
    choice1:"Para80000",choice2:"para800",choice3:"param80000",choice4:"Param8000",
    ans:"Param8000"
},
{
    ques:"3.What is the capital of Gujarat",
    choice1:"surat",choice2:"vadodara",choice3:"gandhinagar",choice4:"rajkot",
    ans:"gandhinagar"

},{
   ques:"4.'OS' computer abbreviation usually means ?",
   choice1:"Open Software",choice2:"order of significance",choice3:"Operating System",choice4:"Optical Sensor",
   ans:"Operating System"
},
{
    ques:"5.The Indian Institute of Science is located at",
    choice1:"Kerala",choice2:"Madras",choice3:"Bangalore",choice4:"New Delhi",
    ans:"Bangalore"    
},
{
    ques:"6.'MOV' extension refers usually to what kind of file?",
    choice1:"image",choice2:"Animation/movie file",choice3:"Audio file",choice4:" MS Office document",
    ans:"Animation/movie file"
}]

let Question=document.querySelector(".question")
let opt1=document.querySelector(".opt1")
let opt2=document.querySelector(".opt2")
let opt3=document.querySelector(".opt3")
let opt4=document.querySelector(".opt4")
let nextbtn=document.querySelector(".nextbtn")
let ending=document.querySelector(".ending")
let quizze=document.querySelector(".quizze")


let increment=0
Question.innerText=Questions[increment].ques
opt1.innerText=Questions[increment].choice1
opt2.innerText=Questions[increment].choice2
opt3.innerText=Questions[increment].choice3
opt4.innerText=Questions[increment].choice4

nextbtn.addEventListener("click",()=>{
   increment++
   if(increment===Questions.length){
    ending.style.display="block"
    quizze.style.display="none"
   }
Question.innerText=Questions[increment].ques
opt1.innerText=Questions[increment].choice1
opt2.innerText=Questions[increment].choice2
opt3.innerText=Questions[increment].choice3
opt4.innerText=Questions[increment].choice4

check.innerText="";
})

let btnchoice=document.querySelectorAll("#btn")
let check=document.querySelector(".trueOrFalse")

for(let b=0;b<btnchoice.length;b++){
    btnchoice[b].addEventListener("click",(e)=>{
        if(e.target.innerText == Questions[increment].ans){
            check.innerText="True"
            check.style.color="green"
        }
        else{
            check.innerText="False"
            check.style.color="red"
         }   

         check.style.display="none" 
    })
}

let reveal=document.querySelector("#revel")

reveal.addEventListener("click",()=>{
    check.style.display="block";
    if(check.innerText ==""){
        alert("please select the choice")
    }
})


