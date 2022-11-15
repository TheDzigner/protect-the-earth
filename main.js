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

var innerGift = 

document.querySelector('header p')

var gifts = 

['👽','👽👽','👽👽👽','👽👽👽👽','👽👽👽👽👽']

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

  earth.classList.add('smooth')

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

  if (score == '100') {

    innerGift.innerHTML = gifts[0]

    localStorage.setItem('gift', gifts[0])

    meteor.classList.add('levels')

  }else if(score == '200'){

   innerGift.innerHTML = gifts[1]

   localStorage.setItem('gift', gifts[1])

  }else if(score == '300'){ 

   innerGift.innerHTML = gifts[2]

   localStorage.setItem('gift', gifts[2])

  }else if(score == '400'){

   innerGift.innerHTML = gifts[3]

   localStorage.setItem('gift', gifts[3])

  }else if(score == '500'){

   innerGift.innerHTML = gifts[4]

   localStorage.setItem('gift', gifts[4])

  }

  myscore.innerHTML = score

  localStorage.setItem('score',score)

},500)

var checkDead = setInterval(function(){

  var meteorTop = parseInt(window.getComputedStyle(meteor).getPropertyValue('top'))

  var meteorLeft = parseInt(window.getComputedStyle(meteor).getPropertyValue('left'))

  

  var earthLeft = parseInt(window.getComputedStyle(earth).getPropertyValue('left'))

  

  if (earthLeft == meteorLeft && meteorTop < 570 && meteorTop > 380 ) {

    alert('The earth has been destroyed🥺')

    navigator.vibrate(20)

    meteor.classList.remove('anim')

    window.location.reload()

    clearInterval(myScore)

  }

  

},1)

}

start_btn.onclick = start_game

var getScore = localStorage.getItem('score')

myscore.innerHTML = getScore

var checkGift = localStorage.getItem('gift')

innerGift.innerHTML = checkGift

 

Draggable.create

('.ovni1,.ovni2,.meteor1,.meteor2,.moon',{

type : 'x, y', 

throwProps : true, 

inertia : true, 

  bounds : space

})

