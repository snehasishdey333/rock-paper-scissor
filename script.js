let arr=['rock','paper','scissor'];

function computerTake(){
  //  console.log(arr[Math.floor(Math.random()*arr.length)]);
    return arr[Math.floor(Math.random()*arr.length)]; 
}

// const rock=document.getElementById("rock");
// const paper=document.getElementById("paper");
// const scissor=document.getElementById("scissor");

function rockTaken(){
    let x=computerTake();
   console.log(x);
    if(x=='rock'){
      //  console.log('draw');
        return drawResult();
    }
    else if(x=='paper'){
       // console.log('lost');
        return looseResult();
    }
    else if(x=='scissor'){
      //  console.log('won');
        return winResult();
    }
}
function paperTaken(){
    let x=computerTake();
    console.log(x);
    if(x=='rock'){
        return winResult();
    }
    else if(x=='paper'){
        return drawResult();
    }
    else if(x=='scissor'){
        return looseResult();
    }
}

function scissorTaken(){
    let x=computerTake();
    console.log(x);
    if(x=='rock'){
        return looseResult();
    }
    else if(x=='paper'){
        return winResult();
    }
    else if(x=='scissor'){
        return drawResult();
    }
}

function winResult(){
    document.getElementById("result").innerHTML=`<h1>You Win</h1>`
}
function looseResult(){
    document.getElementById("result").innerHTML=`<h1>You Loose</h1>`
}
function drawResult(){
    document.getElementById("result").innerHTML=`<h1>Draw</h1>`
}

function restart(){
    document.getElementById("result").innerText=``;
}
