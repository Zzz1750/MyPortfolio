var greet = document.getElementById('greeting');
var intro = document.getElementById('intro');
var star = document.getElementsByClassName('star');

var heading_displayer = document.getElementById('heading_displayer');
var front_page_button = document.getElementById('front_page_button');

var front_page = document.getElementById('front_page');
var rocket_design = document.getElementById('rocket_design');
var rocket_design_mover = document.getElementById('rocket_design_mover');

var home_button = document.getElementById('home');

// intro
var i = 0;
const ar = ["Hola","Bonjour","হ্যালো","ഹലോ","Ciao","Привіт","안녕하세요","مرحبا","नमस्ते", "こんにちは", "Olá","Hello"];

function playintro(i) {
    if (i < ar.length) {
        greet.innerHTML = ar[i];
        setTimeout(() => playintro(i + 1), 130);
    }
}
playintro(i);

setTimeout(intro_remover,2000);
function intro_remover() {
        intro.style.transition = '0.3s';
        intro.style.opacity = 0;
        setTimeout(star_displayer,500);

        function star_displayer(){
            for (let i = 0; i < star.length; i++) {
                star[i].style.opacity = 0.8;
                star[i].style.transition ='0.3s';
            }
        }
        
    }

// name
setTimeout(function(){
    heading_displayer.style.display='block'
    front_page_button.style.opacity='0'
    front_page_button.style.display='block'
    setTimeout(function(){
        if (document.getElementById("rocket_design_mover")) {
            document.getElementById("rocket_design_mover").classList.add("animate_rocket_mover");
        }    },400)
    setTimeout(function(){
        front_page_button.style.opacity='1'
    },600)
    setTimeout(function(){
        if (document.getElementById("rocket_design")) {
            document.getElementById("rocket_design").classList.add("animate_rocket");
        }    })
},1600)


front_page_button.addEventListener('click', function() {
    dimmer(front_page);
    document.getElementById("rocket_design_mover").classList.add("animate_rocket_exit");
    setTimeout(function() {
        dimmer(rocket_design_mover)
    }, 430);

    setTimeout(function(){
        window.location.href = 'page22.html';
    },500);
});



//common function
function dimmer(element) {
    element.style.transition = 'opacity 1s ease';
    element.style.opacity = '0';
}