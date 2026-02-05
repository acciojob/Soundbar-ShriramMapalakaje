//your JS code here. If required.
// Use a block scope to prevent global variable collision
{
    const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

    const stopSongs = () => {
        sounds.forEach(sound => {
            const song = document.getElementById(sound);
            if (song) {
                song.pause();
                song.currentTime = 0;
            }
        });
    };

    sounds.forEach(sound => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = sound;

        btn.addEventListener('click', () => {
            stopSongs();
            const audio = document.getElementById(sound);
            if (audio) audio.play();
        });

        document.getElementById('buttons').appendChild(btn);
    });

    const stopBtn = document.createElement('button');
    stopBtn.classList.add('btn', 'stop');
    stopBtn.innerText = 'stop';
    stopBtn.addEventListener('click', stopSongs);
    document.getElementById('buttons').appendChild(stopBtn);
}