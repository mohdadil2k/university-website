const closeIcon=document.getElementById('closeIcon');
const menuIcon=document.getElementById('menuIcon');
const ulContainer=document.getElementById('ulContainer');
closeIcon.addEventListener('click',()=>close());
menuIcon.addEventListener('click',()=>open());

function open(){
    ulContainer.style.right='0';
}
function close(){
    ulContainer.style.right='-230px'
}