let stageEle = document.querySelector('.stage');
let houseEle = document.querySelector('.house');
let maxScrollValue; //실제스크롤이 움직이는 높이값
let mousePos={x:0, y:0};

function resizeHandler() {
    maxScrollValue=document.body.offsetHeight - window.innerHeight;
}


window.addEventListener('scroll',function(){
    let scrollPer = pageYOffset / maxScrollValue;
    let zMove = scrollPer * 970 - 480;
    houseEle.style.transform=`translateZ(${zMove}vw)`;

})

window.addEventListener("mousemove", function(e){
    // console.log(e)

    //e.clientX : 현재화면에서 마우스의 x값을 추출
    //e.clientY : 현재화면에서 마우스의 y값을 추출
    //window.innerWidth : 현재화면의 넓이값
    //window.innerHeight : 현재화면의 높이값
    mousePos.x= (e.clientX / this.window.innerWidth) * 5;
    mousePos.y= -(e.clientY / this.window.innerHeight) * 5;

    stageEle.style.transform= `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`;
})

window.addEventListener('resize', resizeHandler)
resizeHandler();