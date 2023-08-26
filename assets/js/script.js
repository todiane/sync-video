
video.addEventListener('loadedmetadata', () => {
 
    const transcript = document.getElementById('transcript');
    const video = document.getElementById('video');

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

    transcript.addEventListener('click', (event) => {
        if (event.target.tagName === 'p') {
            const time = parseFloat(event.target.getAttribute('data-time'));
            video.currentTime = time;
            event.target.scrollIntoView(); // Scroll the clicked paragraph into view
        }
    });

}); 