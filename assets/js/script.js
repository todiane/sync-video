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
      paragraph.style.fontWeight = 'bold'; // Add this line to make text bold
    } else {
      paragraph.classList.remove('highlight');
      paragraph.style.fontWeight = 'normal'; // Add this line to reset text weight
    }
  });
});

// code for button to hide and show transcript

document.addEventListener("DOMContentLoaded", function () {
    var showButton = document.getElementById("showTranscript");
    var hideButton = document.getElementById("hideTranscript");
    var transcript = document.getElementById("transcript");

    showButton.addEventListener("click", function () {
        transcript.style.display = "block";
        showButton.style.display = "none";
        hideButton.style.display = "inline";
    });

    hideButton.addEventListener("click", function () {
        transcript.style.display = "none";
        hideButton.style.display = "none";
        showButton.style.display = "inline";
    });
});

