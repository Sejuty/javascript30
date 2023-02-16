const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

let height, width;

// async function getVideo() {
//   const myVideo = new Promise(navigator.mediaDevices.getUserMedia({ video: true, audio: false })
//   .then(localMediaStream=>{
//     video.srcObject = localMediaStream;
//     video.play();
//   })
//   .catch(err=>{
//     console.log("Please give access to your webcam", err)
//   }))
// }

// const getVideo = async () => {
//   try {
//     video.srcObject = await navigator.mediaDevices.getUserMedia({
//       video: true,
//       audio: false,
//     });
//     video.play();
//     console.log(video);
//   } catch (err) {
//     console.log("Please give access to your webcam", err);
//   }
// };
// async function getVideo() {
//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: false })
//     .then((localMediaStream) => {
//       if ("srcObject" in video) {
//         video.srcObject = localMediaStream;
//       }else{
//         video.src = window.URL.createObjectURL(localMediaStream)
//       }
//      video.play()
//     })
//     .catch((err) => {
//       console.error(`OH NO!!!`, err);
//     });
// }

// async function getVideo() {
//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: false })
//     .then(function (mediaStreamObj) {
//       if ("srcObject" in video) {
//         video.srcObject = mediaStreamObj;
//       } else {
//         //old version
//         video.src = window.URL.createObjectURL(mediaStreamObj);
//       }
//         video.play();

//       //add listeners for saving video/audio;
//       let mediaRecorder = new MediaRecorder(mediaStreamObj);
//       console.log(mediaRecorder)
//     })
//     .catch(function (err) {
//       console.log(err.name, err.message);
//     });
// }

// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

//     // request video from user's camera
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then((stream) => {
//         // set the video element's source to the stream
//         video.srcObject = stream;
//         video.play();
//       })
//       .catch((error) => {
//         console.error('Error accessing user media', error);
//       });

//   } else {
//     console.error('getUserMedia is not supported by this browser');
//   }
// function startMediaStream() {
//   // check if getUserMedia is supported by the browser
//   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     try {
//       // request video from user's camera
//       const stream = navigator.mediaDevices.getUserMedia({ video: true });

//       // set the video element's source to the stream
//       video.srcObject = stream;
//       video.play();

//       const videoTrack = stream.getVideoTracks()[0];
//       // console.log(videoTrack.getSettings()
//       const { height, width } = videoTrack.getSettings();
//       console.log(`Video height: ${width} ${height}px`);
//     } catch (error) {
//       console.error("Error accessing user media", error);
//     }
//   } else {
//     console.error("getUserMedia is not supported by this browser");
//   }
// }
// startMediaStream();

// const startMediaStream = () => {
//   // check if getUserMedia is supported by the browser
//   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     // request video from user's camera
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         // set the video element's source to the stream
//         video.srcObject = stream;
//         video.play();
//         const videoTrack = stream.getVideoTracks()[0];

//         videoHeight = videoTrack.getSettings().height;
//         videoWidth = videoTrack.getSettings().width;

//         canvas.width = videoWidth;
//         canvas.height = videoHeight;
//       })
//       .catch((error) => {
//         console.error("Error accessing user media", error);
//       });
//   } else {
//     console.error("getUserMedia is not supported by this browser");
//   }
// };

// startMediaStream();

function captureMediaStream() {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        video.srcObject = stream;
        video.onplaying = () => {
          resolve({ height: video.videoHeight, width: video.videoWidth });
        };
        video.play();
        video.onerror = (e) => {
          reject(console.log(e));
        };
      })
      .catch((e) => {
        reject(e);
      });
  });
}
captureMediaStream()
  .then((size) => {
    console.log(size);
    width = size.width;
    height = size.height;
    canvas.width = width;
    canvas.height = height;
  })
  .catch((e) => {
    console.error(e);
  });


function paintCanvas() {
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);


}

function takePhoto() {

    //played the sound
  snap.currentTime = 0;
  snap.play();

  //take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg')
  console.log(data)

  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download','pic')
//   link.textContent = 'Download Image'
link.innerHTML=`<img src="${data}" alt="pic"/>`
  strip.insertBefore(link,strip.firstChild)

}

video.addEventListener("canplay", paintCanvas);
