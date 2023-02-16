const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

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

async function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function (mediaStreamObj) {
      if ("srcObject" in video) {
        video.srcObject = mediaStreamObj;
      } else {
        //old version
        video.src = window.URL.createObjectURL(mediaStreamObj);
      }
        video.play();

      //add listeners for saving video/audio;
      let mediaRecorder = new MediaRecorder(mediaStreamObj);
      console.log(mediaRecorder)
    })
    .catch(function (err) {
      console.log(err.name, err.message);
    });
}
function paintToCanvas() {
  console.log(video.videoHeight);
}
getVideo();
paintToCanvas();
