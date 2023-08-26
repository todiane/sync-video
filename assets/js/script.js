
video.addEventListener('loadedmetadata', () => {
    // Get elements
    const video = document.getElementById('video');
    const transcript = document.getElementById('transcript');

    // Highlight transcript on timeupdate 
    video.addEventListener('timeupdate', highlightTranscript);

    function highlightTranscript() {

        const currentTime = video.currentTime;

        // Remove any existing highlight
        transcript.querySelector('.highlighted')?.classList.remove('highlighted');

        // Highlight current paragraph
        transcript.querySelector(`p[data-time="${currentTime}"]`).classList.add('highlighted');

    }

    // Handle clicks on transcript
    transcript.addEventListener('click', goToParagraph);

    function goToParagraph(e) {
        if (e.target.tagName === 'P') {
            const time = e.target.getAttribute('data-time');
            video.currentTime = time;
        }
    }


    // const transcript = document.getElementById('transcript');
    // const video = document.getElementById('video');

    // video.addEventListener('timeupdate', () => {
    //     const currentTime = video.currentTime;

    //     const currentParagraph = transcript.querySelector('p.current');
    //     if (currentParagraph) {
    //         currentParagraph.classList.remove('current');
    //     }

    //     const newParagraph = transcript.querySelector(`p[data-time="${currentTime}"]`);
    //     if (newParagraph) {
    //         newParagraph.classList.add('current');
    //         newParagraph.scrollIntoView();
    //     }
    // });

    // transcript.addEventListener('click', (event) => {
    //     if (event.target.tagName === 'p') {
    //         const time = parseFloat(event.target.getAttribute('data-time'));
    //         video.currentTime = time;
    //         event.target.scrollIntoView(); // Scroll the clicked paragraph into view
    //     }
    // });

}); 