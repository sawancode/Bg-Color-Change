const button = document.querySelectorAll('.box');
const body = document.querySelector('body');

button.forEach(function(box){
  box.addEventListener('click', function(color){
    if(color.target.id === 'box1'){
      body.style.backgroundColor = '#401F71';
    }

    if(color.target.id === 'box2'){
      body.style.backgroundColor = '#59D5E0';
    }

    if(color.target.id === 'box3'){
      body.style.backgroundColor = '#222831';
    }

    if(color.target.id === 'box4'){
      body.style.backgroundColor = '#E178C5';
    }

    if(color.target.id === 'box5'){
      body.style.backgroundColor = '#87A922';
    }
  })
})