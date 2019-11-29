const webcamjs = require('webcamjs');

  export async function getVideo() {
    
  webcamjs.set({width: 320, height: 240});
  webcamjs.attach('#my_camera');
  const cameraEl = document.getElementById('my_camera');
  const videoEl = document.querySelector('#video');
  let isFrozen = false;
  cameraEl.addEventListener('click', function(event) {
    if (isFrozen) {
      webcamjs.unfreeze();
      videoEl.style.display = 'block';
      isFrozen = false;
    }  else {
      webcamjs.freeze();
      videoEl.style.display = 'none';
      isFrozen = true;
    }
  })

 }