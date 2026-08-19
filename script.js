
/* =====================================================
   PASSWORD
===================================================== */

const SECRET_PASSWORD = "Gulabo";

function unlockWebsite(){

    const input =
        document.getElementById("passwordInput");

    const error =
        document.getElementById("passwordError");

    if(input.value === SECRET_PASSWORD){

        document.getElementById("lockScreen")
            .style.display = "none";

        document.getElementById("mainWebsite")
            .style.display = "block";

        sessionStorage.setItem(
            "birthdayUnlocked",
            "true"
        );

    }else{

        error.innerHTML =
            "Wrong password 😜 Try again ❤️";

        input.value = "";

    }

}


/* ENTER KEY */

document.getElementById(
    "passwordInput"
).addEventListener(
    "keydown",
    function(event){

        if(event.key === "Enter"){
            unlockWebsite();
        }

    }
);


/* REMEMBER UNLOCK */

if(
    sessionStorage.getItem("birthdayUnlocked")
    === "true"
){

    document.getElementById("lockScreen")
        .style.display = "none";

    document.getElementById("mainWebsite")
        .style.display = "block";

}


/* =====================================================
   BIRTHDAY TIME
   04 BHADAU 2083
   = AUGUST 20, 2026
   NEPAL TIME
===================================================== */

const BIRTHDAY =
    new Date(
        "2026-08-20T00:00:00+05:45"
    ).getTime();


/* =====================================================
   MAIN COUNTDOWN
===================================================== */

function updateMainCountdown(){

    const now =
        new Date().getTime();

    const distance =
        BIRTHDAY - now;


    if(distance <= 0){

        document.getElementById("days")
            .innerText = "00";

        document.getElementById("hours")
            .innerText = "00";

        document.getElementById("minutes")
            .innerText = "00";

        document.getElementById("seconds")
            .innerText = "00";

        document.querySelector(
            ".countdown-title"
        ).innerText =
            "🎉 IT'S YOUR BIRTHDAY! 🎉";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000*60*60*24)
        );

    const hours =
        Math.floor(
            (distance %
            (1000*60*60*24)) /
            (1000*60*60)
        );

    const minutes =
        Math.floor(
            (distance %
            (1000*60*60)) /
            (1000*60)
        );

    const seconds =
        Math.floor(
            (distance %
            (1000*60)) /
            1000
        );


    document.getElementById("days")
        .innerText =
        String(days).padStart(2,"0");

    document.getElementById("hours")
        .innerText =
        String(hours).padStart(2,"0");

    document.getElementById("minutes")
        .innerText =
        String(minutes).padStart(2,"0");

    document.getElementById("seconds")
        .innerText =
        String(seconds).padStart(2,"0");
}

updateMainCountdown();

setInterval(
    updateMainCountdown,
    1000
);


/* =====================================================
   LETTER COUNTDOWN
===================================================== */

function updateLetter(){

    const now =
        new Date().getTime();

    const remaining =
        BIRTHDAY - now;

    const locked =
        document.getElementById(
            "letterLocked"
        );

    const letter =
        document.getElementById(
            "actualLetter"
        );

    const counter =
        document.getElementById(
            "letterCountdown"
        );


    if(remaining <= 0){

        locked.style.display = "none";

        letter.style.display = "block";

        return;
    }


    locked.style.display = "block";

    letter.style.display = "none";


    const days =
        Math.floor(
            remaining /
            (1000*60*60*24)
        );

    const hours =
        Math.floor(
            (remaining %
            (1000*60*60*24)) /
            (1000*60*60)
        );

    const minutes =
        Math.floor(
            (remaining %
            (1000*60*60)) /
            (1000*60)
        );

    const seconds =
        Math.floor(
            (remaining %
            (1000*60)) /
            1000
        );


    counter.innerHTML =
        `${String(days).padStart(2,"0")}d : ` +
        `${String(hours).padStart(2,"0")}h : ` +
        `${String(minutes).padStart(2,"0")}m : ` +
        `${String(seconds).padStart(2,"0")}s`;

}

updateLetter();

setInterval(
    updateLetter,
    1000
);


/* =====================================================
   GO TO LETTER
===================================================== */

function goToLetter(){

    document.getElementById(
        "birthdayLetter"
    ).scrollIntoView({
        behavior:"smooth"
    });

}


/* =====================================================
   MUSIC
===================================================== */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

function toggleMusic(){

    if(!playing){

        music.play();

        musicBtn.innerHTML = "🔊";

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    }

}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart(){

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💘",
        "🌹"
    ];

    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random()*emojis.length
            )
        ];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (15+Math.random()*20)+"px";

    heart.style.animationDuration =
        (5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(
        ()=>heart.remove(),
        10000
    );

}

setInterval(
    createHeart,
    500
);


/* =====================================================
   STARS
===================================================== */

const stars =
    document.getElementById("stars");

for(let i=0;i<100;i++){

    const star =
        document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random()*100+"%";

    star.style.top =
        Math.random()*100+"%";

    star.style.animationDelay =
        Math.random()*2+"s";

    stars.appendChild(star);

}


/* =====================================================
   FINAL SURPRISE
===================================================== */

function showSurprise(){

    const surprise =
        document.getElementById(
            "finalSurprise"
        );

    surprise.style.display = "block";

    heartExplosion();

    setTimeout(()=>{

        surprise.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

    },200);

}


/* =====================================================
   HEART EXPLOSION
===================================================== */

function heartExplosion(){

    for(let i=0;i<60;i++){

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            (15+Math.random()*25)+"px";

        heart.style.zIndex = "99999";

        heart.style.pointerEvents = "none";

        const x =
            (Math.random()-.5) *
            window.innerWidth;

        const y =
            (Math.random()-.5) *
            window.innerHeight;


        const animation =
            heart.animate(

                [
                    {
                        transform:
                        "translate(-50%,-50%) scale(0)",
                        opacity:1
                    },

                    {
                        transform:
                        `translate(${x}px,${y}px) scale(1.5)`,
                        opacity:0
                    }
                ],

                {
                    duration:
                    1200+
                    Math.random()*1000,

                    easing:"ease-out"
                }

            );


        document.body.appendChild(heart);

        animation.onfinish =
            ()=>heart.remove();

    }

}