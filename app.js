// const kit = document.querySelector("#kit")
// const boom = document.querySelector("#boom")
// const clap = document.querySelector("#clap")
// const hihat = document.querySelector("#hihat")
// const kick = document.querySelector("#kick")
// const openhat = document.querySelector("#openhat")
// const ride = document.querySelector("#ride")
// const snare = document.querySelector("#snare")
// const tink = document.querySelector("#tink")
// const tom = document.querySelector("#tom")

//! - Button Constants -
const boomBtn = document.querySelector("#boomBtn")
const clapBtn = document.querySelector("#clapBtn")
const hihatBtn = document.querySelector("#hihatBtn")
const kickBtn = document.querySelector("#kickBtn")
const openhatBtn = document.querySelector("#openhatBtn")
const rideBtn = document.querySelector("#rideBtn")
const snareBtn = document.querySelector("#snareBtn")
const tinkBtn = document.querySelector("#tinkBtn")
const tomBtn = document.querySelector("#tomBtn")

//! - Audio Variables -
let boomSound = new Audio("./sounds/boom.wav");
let clapSound = new Audio("./sounds/clap.wav");
let hihatSound = new Audio("./sounds/hihat.wav");
let kickSound = new Audio("./sounds/kick.wav");
let openhatSound = new Audio("./sounds/openhat.wav");
let rideSound = new Audio("./sounds/ride.wav");
let snareSound = new Audio("./sounds/snare.wav");
let tinkSound = new Audio("./sounds/tink.wav");
let tomSound = new Audio("./sounds/tom.wav");

//! - Button Press -
boomBtn.addEventListener("click", ()=>{
    boomSound.play();
    boomSound.currentTime=0;
});
clapBtn.addEventListener("click", ()=>{
    clapSound.play();
    clapSound.currentTime=0;
});
hihatBtn.addEventListener("click", ()=>{
    hihatSound.play();
    hihatSound.currentTime=0;
});
kickBtn.addEventListener("click", ()=>{
    kickSound.play();
    kickSound.currentTime=0;
});
openhatBtn.addEventListener("click", ()=>{
    openhatSound.play();
    openhatSound.currentTime=0;
});
rideBtn.addEventListener("click", ()=>{
    rideSound.play();
    rideSound.currentTime=0;
});
snareBtn.addEventListener("click", ()=>{
    snareSound.play();
    snareSound.currentTime=0;
});
tinkBtn.addEventListener("click", ()=>{
    tinkSound.play();
    tinkSound.currentTime=0;
});
tomBtn.addEventListener("click", ()=>{
    tomSound.play();
    tomSound.currentTime=0;
});


//! - Keypress Event Listener -
document.addEventListener("keydown", (event)=>{
    if(event.code === "KeyQ"){
        boomSound.play();
        boomSound.currentTime=0;
    }
    else if (event.code === "KeyW"){
        clapSound.play()
        clapSound.currentTime=0;
    }
    else if(event.code === "KeyE"){
        hihatSound.play()
        hihatSound.currentTime=0;
    }
    else if(event.code === "KeyA"){
        kickSound.play();
        kickSound.currentTime=0;
    }
    else if (event.code === "KeyS"){
        openhatSound.play()
        openhatSound.currentTime=0;
    }
    else if(event.code === "KeyD"){
        rideSound.play()
        rideSound.currentTime=0;
    }
    else if(event.code === "KeyZ"){
        snareSound.play();
        snareSound.currentTime=0;
    }
    else if (event.code === "KeyX"){
        tinkSound.play()
        tinkSound.currentTime=0;
    }
    else if(event.code === "KeyC"){
        tomSound.play()
        tomSound.currentTime=0;
    }
})