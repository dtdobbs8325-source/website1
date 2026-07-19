document.addEventListener("DOMContentLoaded", () => {
    // 1. Grab all video elements on the page
    const videos = document.querySelectorAll("video");

    // 2. Loop through each video and listen for the "play" event
    videos.forEach(video => {
        video.addEventListener("play", () => {
            
            // 3. When this video plays, pause all OTHER videos
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
            
        });
    });
});