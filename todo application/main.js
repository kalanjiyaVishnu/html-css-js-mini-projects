const todo = document.getElementById('Entered');
const btn = document.getElementById('add');
const todoItem = document.getElementById('todoItems');
const topcontainer = document.querySelector('.todo-container');
const todos = {};
var countID = 1;
var errorcount = 0;
todo.addEventListener('keyup',(e)=>{
if(e.keyCode==13)
{
    e.preventDefault();
    btn.click();
}
});
btn.addEventListener('click',addthevalue);

if(localStorage)
{
	var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
	var j=1;
    while ( i-- ) {
     //    values.push( localStorage.getItem(keys[i]) );
	addthels(localStorage.getItem(keys[i]),j);
	j=j+1;

}
//     console.log('yes im there', values, localStorage);
    countID = j;
    console.log(countID);

}
else 
{

}

function addthels(value,id)
{
	// addthevalue()
	topcontainer.classList.add('show');//toggle the show cls
        // console.log(text); text-input
        let item = document.createElement('li');
        item.innerHTML=(`
        <div class="todo-item" id="${id}"> 
        <button id="${id}" class="btn-done" onclick="strikercls(this)"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></button>  
        
        <div class="text" id="${value}">
        ${value}
        </div>
        <button id="${id}" onclick="deleteItem(this)" class="delbtn btn">del</button></li>
        </div>`);
        todoItem.appendChild(item);

}
function addthevalue()
{
	console.log(countID);
    
    const text = todo.value;
    todo.value="";
    if(text)
    {

        topcontainer.classList.add('show');//toggle the show cls
        // console.log(text); text-input
        let item = document.createElement('li');
        item.innerHTML=(`
        <div class="todo-item" id="${countID}"> 
        <button id="${countID}" class="btn-done" onclick="strikercls(this)"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></button>  
        
        <div class="text" id="${text}">
        ${text}
        </div>
        <button id="${countID}" onclick="deleteItem(this)" class="delbtn btn">del</button></li>
        </div>`);
        
        
        todoItem.appendChild(item);

	   updateLS(countID,text)
        todos[countID]=text;
        console.log(`added --${text}`);
        countID++;
    }
    else
    {
        if(errorcount>=1)
        {
            errorcount=0;

        alert(`Again🤨`);
        
        }
        else
        {
            
    todo.placeholder="Put some text first";
    
    setInterval(alertremover,3000);
    errorcount = errorcount+1;
        }
    }
}




function alertremover()
{
    todo.placeholder="Type..";
}
function updateLS(countID,text)
{
	localStorage.setItem(countID,text);
}

// delete side
const delbtn = document.querySelectorAll('.delbtn');
delbtn.forEach(x=>x.addEventListener('click',deleteItem));
function deleteItem(e)
{
    
    // if(topcontainer.)
    // {
    //     topcontainer.classList.remove('show');
    // }
    const theid = e.id;
    console.log(`deleted id - ${theid}`);
    remover(theid);
    

}
function remover(theid)
{
    var delit = document.getElementById(theid).remove();
    delete todos[theid];
    localStorage.removeItem(theid);
   console.log('   ');
    console.log(todos);
   console.log('   ');


    // delit.innerHTML="";
    // const todoIt = document.querySelectorAll('.todo-item');
    if(localStorage.length==0)
    {
        // console.log(`the length of items ${todoIt.length}`); 
        topcontainer.classList.remove('show');
    }
}

// const striker=document.querySelectorAll('.strike');
// striker.forEach(x=> x.addEventListener('click', strikercls));
function strikercls(e)
{
    const theid = e.id;
    const same = localStorage.getItem(theid);
    document.getElementById(same).classList.toggle('striker');
}
