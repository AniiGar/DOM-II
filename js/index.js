// Click
const heading = document.querySelector('.logo-heading');

heading.addEventListener('click', (object) => { 

    let busName = ()=> {
        let getName = prompt('Name that bus!', 'Enter bus name')
        return getName;
    };
    object.target.textContent = busName();
});

// Mouseover
const subs4 = document.querySelectorAll('h4');

subs4.forEach((object)=> {
    object.addEventListener('mouseover', (object) => { 
        object.target.style.textDecoration = "underline";
    });
});

// Doubleclick
const aTag = document.querySelectorAll('a');

aTag.forEach((object)=> {
    object.addEventListener('dblclick', (object)=>{
        object.target.style.color = 'blue';
    });
  });

// Alternate code 
    // function eachTag(object) {
    //     object.addEventListener('dblclick', (object)=>{
    //             object.target.style.color = 'blue';
    //     });
    //   }

    // aTag.forEach(eachTag);

// Resize
const resize = document.querySelector('.content-destination img');

window.addEventListener('resize', function(){
   resize.src = 'img/fun-bus.jpg';
});

