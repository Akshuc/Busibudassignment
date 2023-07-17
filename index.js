console.log("hello world")

let element = document.getElementById('ele').addEventListener('mouseover',changeColor);

function changeColor (){

    let ele = document.getElementById('ele');
    ele.style.color = "white";
}


let x = document.getElementById("ele").addEventListener('mouseleave',change);

function change (){
    let y = document.getElementById('ele')

    y.style.color="blue"
}
