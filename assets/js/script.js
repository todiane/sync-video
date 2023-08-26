const transcript = document.getElementById('transcript');
const video = document.getElementById('video');

transcript.addEventListener('click', (event) => {
    if (event.target.tagName === 'P') {
        const time = parseFloat(event.target.getAttribute('data-time'));
        video.currentTime = time;
    }
});

// Bold current paragraph
video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;

    const currentParagraph = transcript.querySelector('p.current');
    if (currentParagraph) {
        currentParagraph.classList.remove('current');
    }

    const newParagraph = transcript.querySelector(`p[data-time="${currentTime}"]`);
    if (newParagraph) {
        newParagraph.classList.add('current');
    }
});

// Scroll transcript to current line
video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;

    const currentParagraph = transcript.querySelector('p.current');
    if (currentParagraph) {
        currentParagraph.classList.remove('current');
    }

    const newParagraph = transcript.querySelector(`p[data-time="${currentTime}"]`);
    if (newParagraph) {
        newParagraph.classList.add('current');
        newParagraph.scrollIntoView();
    }
});