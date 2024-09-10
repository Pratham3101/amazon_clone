const imgs = document.querySelectorAll('.headerslider ul img');
const previous = document.querySelector('.slider1');
const next = document.querySelector('.slider2');

let  a = 0;
function changeSlide(){
    for( let i=0; i< imgs.length; i++){
        imgs [i].style.display = 'none';
    }
    imgs [a].style.display = 'block';
}
changeSlide();



previous.addEventListener('click',(s)=>{
     if(a > 0){
        a--;
     }
     else{
        a = imgs.length -1;
     }
     changeSlide();
})


next.addEventListener('click',(s)=>{
    if(a < imgs.length -1){
       a++;
    }
    else{
       a = 0;
    }
    changeSlide();
})




const scroll = document.querySelectorAll('.products');

for(const item of scroll){
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}