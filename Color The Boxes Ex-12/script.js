// let colors = ["red","blue","green","orange","yellow"]

// let txt_color =["yellow","green","violet","purple","red"]

// let box = document.querySelectorAll(".box") 

// for(i=0;i<=4;i++){
// box[i].style.backgroundColor = colors[i]
// box[i].style.color = txt_color[i]
//  }

//let boxes = document.getElementByClassName("box")
let boxes = document.querySelector(".container").children

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`

}
Array.from(boxes).forEach(e =>{
    e.style.backgroundColor =getRandomColor()
    e.style.color =getRandomColor()
} )