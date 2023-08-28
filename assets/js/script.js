const videoPlayer = document.getElementById('videoPlayer');
const transcriptParagraphs = document.querySelectorAll('.transcript p');

transcriptParagraphs.forEach(paragraph => {
  paragraph.addEventListener('click', () => {
    const startTime = parseFloat(paragraph.getAttribute('data-time'));
    videoPlayer.currentTime = startTime;
    videoPlayer.play();
  });
});

videoPlayer.addEventListener('timeupdate', () => {
  const currentTime = videoPlayer.currentTime;
  transcriptParagraphs.forEach(paragraph => {
    const startTime = parseFloat(paragraph.getAttribute('data-time'));
    const endTime = parseFloat(paragraph.nextElementSibling?.getAttribute('data-time')) || videoPlayer.duration;
    if (currentTime >= startTime && currentTime < endTime) {
      paragraph.classList.add('highlight');
    } else {
      paragraph.classList.remove('highlight');
    }
  });
});
