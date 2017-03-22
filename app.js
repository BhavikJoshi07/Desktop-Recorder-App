document.getElementById('startRecording').addEventListener('click',recordClick,false);

function recordClick() {
    chrome.desktopCapture.chooseDesktopMedia(["screen","window"], recordFunction);
}

function recordFunction(screenID) {
      navigator.webkitGetUserMedia({
          audio : true,
          video : {
              mandatory : {
                  chromeMediaSource : "desktop",
                  chromeMediaSourceId : screenID
              }
          }
      }, startStream, failedStream);
}
function startStream(stream) {
    console.log('Stream Started');
    var video = document.getElementById('videoID');
    video.src = URL.createObjectURL(stream);
    stream.onended = function() {
        console.log('Stream Ended');
    }
}
function failedStream() {
    console.log('Got some Errors.');
}