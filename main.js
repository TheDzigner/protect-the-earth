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

var move = 0 

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

start_btn.addEventListener('click', function(){

   setTimeout(function(){

      meteor.classList.add('anim')

   },700)

  

meteor.addEventListener('animationiteration',function(){

  var randomPos = Math.floor((Math.random() * 3))

  var left = randomPos * 126

  meteor.style.left = left + 'px'

})

})

var checkDead = setInterval(function(){

  var meteorTop = parseInt(window.getComputedStyle(meteor).getPropertyValue('top'))

  var meteorLeft = parseInt(window.getComputedStyle(meteor).getPropertyValue('left'))

  

  var earthLeft = parseInt(window.getComputedStyle(earth).getPropertyValue('left'))

  

  if (earthLeft == meteorLeft && meteorTop < 570 && meteorTop > 380 ) {

    alert('The earth has been destroyed🥺')

    meteor.classList.remove('anim')

  }

  

},1)

