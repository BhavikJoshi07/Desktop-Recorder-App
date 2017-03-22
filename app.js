document.getElementById('startRecording').addEventListener('click',recordClick,false);

function recordClick() {
    chrome.desktopCapture.chooseDesktopMedia(["screen","window"], recordFunction);
}

function recordFunction(screenID) {
    console.log("id : "+id);
}