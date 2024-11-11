const music = document.getElementById("background-music");

const lastPlayTime = localStorage.getItem("musicPlayTime");
if (lastPlayTime) {
    music.currentTime = parseFloat(lastPlayTime);
}

const playPromise = music.play();
if (playPromise !== undefined) {
    playPromise.catch(() => {
        console.log("Autoplay was prevented. Waiting for user interaction.");
        document.body.addEventListener("click", playAudio);
    });
}

setInterval(() => {
    localStorage.setItem("musicPlayTime", music.currentTime);
}, 1000);

function playAudio() {
    music.play();
    document.body.removeEventListener("click", playAudio);
}
