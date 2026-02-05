//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

// Create and add the Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', () => {
    stopSongs();
});
document.getElementById('buttons').appendChild(stopBtn);

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0; // Resets the audio to the beginning
    });
}