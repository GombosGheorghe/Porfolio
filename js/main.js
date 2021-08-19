const app= document.getElementById("typewriter");
const typewriter = new Typewriter (app,{
    loop:true,
    delay:250
});

typewriter
    .typeString("A little bit of my story...")
    .pauseFor(5000)
    .start();


/* ScrollReveal().reveal('.last_img_item', {
        rotate: {
            x: 120,
            z: 20
        }
    }); */