document.addEventListener("DOMContentLoaded", function () {
    const showVideoButtons = document.querySelectorAll(".show-video");
    const videoPopup = document.getElementById("videoPopup");
    const closePopupButton = document.getElementById("closePopup");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const popupVideo = document.getElementById("popupVideo");

    showVideoButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const videoUrl = this.getAttribute("data-video-url");
            popupVideo.src = videoUrl;
            videoPopup.style.display = "flex";
        });
    });

    closePopupButton.addEventListener("click", closePopup);
    closePopupBtn.addEventListener("click", closePopup);

    function closePopup() {
        videoPopup.style.display = "none";
        popupVideo.pause();
        popupVideo.currentTime = 0;
    }
});
