const Video = document.getElementById('video');
const Play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');

function playpausevideo() {
    if ( Video.paused ) {
        Video.play();
    } else {
        Video.pause();
    }
};

function updateicons() {
    if ( Video.paused ) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
};

function updateprogress() {
    progress.value = (Video.currentTime / Video.duration) * 100;
    let minutes = Math.floor(video.currentTime / 60)
    if ( minutes < 10 ) {
        minutes = '0' + String(minutes);
    }
    let seconds = Math.floor(video.currentTime % 60) 
    if ( seconds< 10) {
        seconds = '0' + String(seconds);
    }
    time.innerHTML = `${minutes}:${seconds}`;
};

function stopvideo() {
    Video.currentTime = 0;
    Video.pause();
};

function updatevideoprogress() {
    Video.currentTime = (progress.value * Video.duration) / 100;
};

Video.addEventListener('click', playpausevideo);
Video.addEventListener('pause', updateicons);
Video.addEventListener('play', updateicons);
Video.addEventListener('timeupdate', updateprogress);
play.addEventListener('click', playpausevideo);
stop.addEventListener('click', stopvideo);
progress.addEventListener('change', updatevideoprogress);
