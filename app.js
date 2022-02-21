const pawn = document.getElementById('pawn')

const moveLine = () =>{

    let num = Math.floor(Math.random()* (58 - 0 +1))
    return num
}

const moveUp = () =>{

    let num = Math.floor(Math.random()* (19 - 539 +1))
    return num
}

 pawn.addEventListener( 'click', function(){
    const newNum= parseInt(moveLine())
     pawn.style.left= `${newNum}rem` 
     const newUp= parseInt(moveUp())
     pawn.style.bottom= `${newUp}px` 
   
 })



