// Start OUR SKILLS & Our Awesome Stats
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal );
}

let spanProgress = document.querySelectorAll(".skills .prog span.progress");
let sectionProgress = document.querySelector(".skills");


let nums = document.querySelectorAll(".stats .box span.counter");
let section = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop - 100) {
        if (!started) {
            nums.forEach(el => {
                startCount(el)
            });
        }
        started = true;
    }
    if(window.scrollY >= sectionProgress.offsetTop - 100) {
        spanProgress.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}
// Start OUR SKILLS & Our Awesome Stats

// Start LATEST EVENTS

// The End Of The Year To CountDown Date
let countDownDate = new Date("31 dec 2023 23:59:59").getTime();

let  counter = setInterval(() => {
    //get Date Now
    let DateNow = new Date().getTime();

    //Find the difference between now and countDown date
    let diff = countDownDate - DateNow;

    //get time units
    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(diff % (1000*60*60) / (1000*60));
    let seconds = Math.floor(diff % (1000*60) / 1000);


    document.querySelector(".days").innerHTML = days < 10? `0${days}`: days;
    document.querySelector(".hours").innerHTML = hours < 10? `0${hours}`: hours;
    document.querySelector(".minutes").innerHTML = minutes < 10? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10? `0${seconds}`: seconds;
}, 1000);

// End LATEST EVENTS