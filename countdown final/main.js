const dayse = document.getElementById("days");
const hourse = document.getElementById("hours");
const minse = document.getElementById("mins");
const secse = document.getElementById("secs");
const head = document.getElementById("heading");
var chr = new Date("25 dec 2021");

const id=setInterval(countdown,1000);
 
function setdate(result)
{
    chr = new Date(result);
    console.log(chr);
    setInterval(countdown,1000);
}
function countdown()
{
    let date = new Date();
    const tsecs = (chr - date)/1000;
    const esecs = Math.floor(tsecs)%60;
    const emins = Math.floor(tsecs/60)%60;
    const ehours = Math.floor(tsecs/3600)%24;
    const edays = Math.floor(tsecs/3600/24);
    console.log(esecs,emins,ehours,edays);
    dayse.innerHTML =edays;
    hourse.innerHTML=ehours;
    minse.innerHTML=emins;
    secse.innerHTML =esecs;
}
function aler()
{
    let result =prompt(`Set your date: (like-25 dec 2021)`);
    
    if(result)
    {
        clearInterval(id);
        setdate(result);
        let result1 =prompt(`what day is it?`);
        if(result1)
        {head.innerHTML="Days Till "+result1+"!";
        alert("All set 😃 Wait For "+result1);
    }
        else{
            head.innerHTML="Days Till "+result+"!";
            alert("All set 😃 Wait For "+result);
        }
    
    }
    else
    {
        alert(`👋Wait for chritmas`);
    }
}
setTimeout(aler,2000);