const list_ul = document.getElementById('list_drag');
const list_data = ['mark','zuck','elon','jeff'];
const check = document.getElementById('check');
const draggable_list = [];
var drag_start_i;
var drag_end_i;

createList();
function createList(){
    [...list_data].map(x=>({name:x,sort:Math.random()}))
    .sort((a,b)=>{
        
        return a.sort-b.sort
    })
   .map(a=>a.name)
    .forEach((person,index)=>{
        const list_item = document.createElement('li');
        list_item.setAttribute('data-index',index);
        list_item.innerHTML=`<span class='number'>${index+1}</span><div class='draggable' draggable = "true"><p class='user_p'>${person}</p></div>`;
        list_item.classList.add('list_item');
        

{/* <i>👊</i> */}

        // add to the array for manipulating
        draggable_list.push(list_item);
        // add to dom 
        list_ul.appendChild(list_item);
        console.log(person);
        addEventListener();
    });
}
function dragstart(e){
    drag_start_i = +this.closest('li').getAttribute('data-index')
    console.log('dragging start',drag_start_i);
}

function dragenter(){
    console.log('dragging enter');
}

function dragleave(){
    console.log('dragging leaving');
    this.classList.remove('over');

}

function dragover(e){
    e.preventDefault();
    this.classList.add('over');
    console.log('dragging over');
}
function dragdrop(){
    drag_end_i =+ this.getAttribute('data-index');
    console.log('dragging drop',drag_end_i);
    swapem(drag_start_i,drag_end_i);
}
function swapem(start,end){
    const first = draggable_list[start].querySelector('.draggable');
    const second = draggable_list[end].querySelector('.draggable');

    console.log(first,second);
    draggable_list[start].appendChild (second);
    draggable_list[end].appendChild(first);
console.log(draggable_list);

} 
function addEventListener(){
    const draggables = document.querySelectorAll('.draggable');
    const all_list_item = document.querySelectorAll('.list_items li') 
    draggables.forEach(x=>{x.addEventListener('dragstart',dragstart)});
    all_list_item.forEach(x=>{x.addEventListener('dragenter',dragenter)});
    all_list_item.forEach(x=>{x.addEventListener('dragleave',dragleave)});
    all_list_item.forEach(x=>{x.addEventListener('dragover',dragover)});
    all_list_item.forEach(x=>{x.addEventListener('drop',dragdrop)});
}
check.addEventListener('click',()=>{
    draggable_list.forEach(
        (listitem,index)=>{
            const person = listitem.querySelector('.draggable').innerText.trim();
            console.log(person.substring(0,person.length-1));
            if(list_data[index].trim() !== person) {

                listitem.classList.add('wrong')
            }  else {
                listitem.classList.remove('wrong')
                listitem.classList.add('right')
            }
        }
    )
    console.log('clicked');
})