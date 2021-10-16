const btn = document.getElementById('btn');
btn.addEventListener('change',(e)=>
{
    if(e.target.checked) 
    {
        document.body.classList.add('Body-dark');
        
        console.log('DArk Mode');
    }
    else
    {
        document.body.classList.remove('Body-dark');
        console.log('Light =Mode');
    }

});
