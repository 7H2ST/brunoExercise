/* --- HEADER IMG ANIM --- */
let dropingImg = document.querySelector('.rightOne');

window.addEventListener('load', () => {
    dropingImg.classList.add('drop');
})

/* --- IFRAMES --- */

// const iframeOne = document.getElementById('iframeOne');
// const iframeTwo = document.getElementById('iframeTwo');
// const iframeThree = document.getElementById('iframeThree');
// // iframeOne.setAttribute( 'src', 'https://player.vimeo.com/video/657468100?h=0f918fb26d&background=1&autoplay=1&loop=1');
// // iframeTwo.setAttribute( 'src', 'https://player.vimeo.com/video/657829202?h=e2abe56085&background=1&autoplay=1&loop=1');
// // iframeThree.setAttribute( 'src', 'https://player.vimeo.com/video/657430573?h=5d5af3bd10&background=1&autoplay=1&loop=1');
// console.log(iframeOne);

let slidingIframes = document.querySelectorAll('.secVid');

window.addEventListener('scroll', () => {
    let {scrollTop, clientHeight} = document.documentElement;
    let topIframes1 = slidingIframes[0].getBoundingClientRect().top;
    let topIframes2 = slidingIframes[1].getBoundingClientRect().top;
    let topIframes3 = slidingIframes[2].getBoundingClientRect().top;
    
    if(scrollTop >(scrollTop+topIframes1).toFixed() - clientHeight){
        slidingIframes[0].classList.add('active');
    }
    if(scrollTop >(scrollTop+topIframes2).toFixed() - clientHeight){
        slidingIframes[1].classList.add('active');
    }
    if(scrollTop >(scrollTop+topIframes3).toFixed() - clientHeight){
        slidingIframes[2].classList.add('active');
    }
})


/* --- LED ANIM --- */

function animLedDropS3(){
    let i = 0;
    while(i<4){
        let ledDropS3 = document.createElement('i');
        let amount = Math.floor((Math.random() * 25) + 4);
        console.log(amount);

        let line = document.querySelector('.sThreeLineVertical:nth-child('+amount+')');

        let delay = Math.random() * -50;
        console.log(delay);
        let duration = Math.random() * 3;
        console.log(duration);

        ledDropS3.style.animationDelay = 5+delay+'s';
        ledDropS3.style.animationDuration = 5+duration+'s';

        line.appendChild(ledDropS3);
        console.log(line);
        i++
    }
}
animLedDropS3();

function animLedDropS1(){
    let i = 0;
    while(i<7){
        let ledDropS1 = document.createElement('b');
        let amount = Math.floor((Math.random() * 20) + 2);
        console.log(amount);

        let line = document.querySelector('.sOneLine45:nth-child('+amount+')');

        let delay = Math.random() * -50;
        console.log(delay);
        let duration = Math.random() * 3;
        console.log(duration);

        ledDropS1.style.animationDelay = 5+delay+'s';
        ledDropS1.style.animationDuration = 15+duration+'s';

        line.appendChild(ledDropS1);
        console.log(line);
        i++
    }
}
animLedDropS1();