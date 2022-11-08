var move_left = 

document.querySelector('#move_left')

var move_right = 

document.querySelector('#move_right')

var meteor = 

document.querySelector('.meteor')

var space = 

document.querySelector('.space')

var start_btn = 

document.querySelector('#start')

var earth = 

document.querySelector('#earth')

var myscore = 

document.querySelector('#score')

var move = 0 

var score = 0 

function moveRight(){

  

if (move < 252) {

    move += 126

    earth.style.left = move + 'px'

}  

}

move_right.onclick = moveRight

function moveLeft() {

  

  if (move > 0) {

      move -= 126 

    earth.style.left = move + 'px'

  }

}

move_left.onclick = moveLeft

var start_game = () =>{

   setTimeout(function(){

     meteor.classList.add('anim')

   },200)

  

meteor.addEventListener('animationiteration',function(){

  var randomPos = Math.floor((Math.random() * 3))

  var left = randomPos * 126

  meteor.style.left = left + 'px'

})

var myScore = setInterval(()=>{

  score++

  if (score == 100) {

    meteor.classList.add('levels')

  }

    myscore.innerHTML = score

  localStorage.setItem('score',score)

  console.log(score)

},1000)

var checkDead = setInterval(function(){

  var meteorTop = parseInt(window.getComputedStyle(meteor).getPropertyValue('top'))

  var meteorLeft = parseInt(window.getComputedStyle(meteor).getPropertyValue('left'))

  

  var earthLeft = parseInt(window.getComputedStyle(earth).getPropertyValue('left'))

  

  if (earthLeft == meteorLeft && meteorTop < 570 && meteorTop > 380 ) {

    alert('The earth has been destroyed🥺')

    meteor.classList.remove('anim')

    window.location.reload()

    clearInterval(myScore)

  }

  

},1)

}

start_btn.onclick = start_game

var getScore = localStorage.getItem('score')

myscore.innerHTML = getScore

 

