const pawn = document.getElementById('pawn')

const moveLine = () =>{

    let num = Math.floor(Math.random()* (56 - 0 +1))
    return num
}

const moveUp = () =>{

    let num = Math.floor(Math.random()* (1 - 558 +1))
    return num
}

const moveFunc = () =>{

    const newNum= parseInt(moveLine())
    pawn.style.left= `${newNum}rem` 
    const newUp= parseInt(moveUp())
    pawn.style.bottom= `${newUp}px` 
}



 pawn.addEventListener( 'click', function(){
    moveFunc();

 })



