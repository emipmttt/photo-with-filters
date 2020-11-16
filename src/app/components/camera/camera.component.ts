import { Component, OnInit } from '@angular/core';

import api from "../../../services/api";
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  filters = [
    {
      title: "Santa Claus",
      url: "https://media.tenor.com/images/8b360df95045a73b283fab18cdda9ea7/tenor.gif"
    },
    {
      title: "Santa Claus",
      url: "https://media.tenor.com/images/cd870e19bed53868c0419ad65bdbbdf9/tenor.gif"
    }
  ]

  filterSelected = 0;

  x = 0
  y = 0
  pulsed = false
  unselectable = false

  alertMessage = ""

  putFilter(index) {
    this.filterSelected = index
  }

  currentStream: any;

  ngOnInit(): void {

    var video = <HTMLVideoElement>document.getElementById("video")
    var filter = <HTMLImageElement>document.getElementById("filter")
    var canvas = <HTMLCanvasElement>document.getElementById("canvas")
    var context = canvas.getContext("2d");

    const streamWebCam = (stream: any) => {

      this.currentStream = stream;
      if (stream) {

        video.srcObject = stream;
        vm.alertMessage = ""
      } else {
        vm.alertMessage = "No pudimos acceder a tu camara :("
      }
      video.play()
    }

    const throwError = (e: any) => {
      console.log(e);
    }

    const snap = async () => {
      canvas.style.display = "initial"
      canvas.width = video.clientWidth
      canvas.height = video.clientHeight
      context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight)

      context.drawImage(filter,
        parseInt(filter.style.left.replace(/px/, "")),
        parseInt(filter.style.top.replace(/px/, "")),
        // parseInt(filter.style.left.replace(/px/, "")) + filter.clientWidth,
        // parseInt(filter.style.top.replace(/px/, "")) + filter.clientHeight
        filter.clientWidth,
        filter.clientHeight
      )

      console.log(parseInt(filter.style.left.replace(/px/, "")),
        parseInt(filter.style.top.replace(/px/, "")),
        parseInt(filter.style.left.replace(/px/, "")) + filter.clientWidth,
        parseInt(filter.style.top.replace(/px/, "")) + filter.clientHeight);

      const imageData = canvas.toDataURL("image/png")

      const response = await api.post("/file", {
        image: imageData
      })

      const audioPath = 'https://photo-filter-backend.herokuapp.com' + response.data.data.replace(/storage/g, "")

      console.log(audioPath);
      console.log(response.data.data.replace(/storage/g, ""));
      console.log(response.data);

      try {

        var link = document.getElementById('link');
        link.setAttribute('href', audioPath);
        link.setAttribute('target', "_blank");
        link.click();

      } catch (error) {
        console.log(error);

      }

      // if (os() == "iOS") {

      //   console.log("ios");

      //   canvas.toBlob((blob => {

      //     console.log(blob);

      //     var reader = new FileReader();

      //     reader.onload = function (e) {
      //       var link = document.getElementById('link');
      //       link.setAttribute('download', Date.now() + '.png');
      //       // link.setAttribute('href', reader.result.replace("image/png", "image/octet-stream"));
      //       // link.click();
      //     }
      //     reader.readAsDataURL(blob);

      //   }))

      // } else {

      //   var link = document.getElementById('link');
      //   // link.setAttribute('download', Date.now() + '.png');
      //   link.setAttribute('href', canvas.toDataURL());
      //   // link.click();

      //   canvas.style.display = "none"
      // }

    }

    document.querySelector("#snap").addEventListener("click", snap)

    // navigator.getUserMedia({ video: true }, streamWebCam, throwError)
    var vm = this;
    const constraints = { video: { facingMode: "user" }, audio: false }
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        streamWebCam(stream)
        vm.alertMessage = ""
      })
      .catch(function (error) {
        vm.alertMessage = "No pudimos acceder a tu camara :("
        console.error("Oops. Something is broken.", error);
      });

    // navigator.mediaDevices.getUserMedia().then(function (mediaStream) {
    // }).catch(throwError);

    // drag filter

    window.onload = addListeners;

    function addListeners() {
      document.getElementById('filter').addEventListener('mousedown', mouseDown, false);
      document.getElementById('filter').addEventListener('touchstart', mouseDown, false);
      window.addEventListener('mouseup', mouseUp, false);
      window.addEventListener('touchleave', mouseUp, false);

      document.querySelector("#video").addEventListener('click', divMove)
    }

    function mouseUp() {
      window.removeEventListener('mousemove', divMove, true);
      window.removeEventListener('touchmove', divMove, true);
    }

    function mouseDown(e) {
      window.addEventListener('mousemove', divMove, true);
      window.addEventListener('touchmove', divMove, true);
    }

    function divMove(e) {
      var div = document.getElementById('filter');
      div.style.position = 'absolute';
      div.style.top = e.clientY - (div.clientHeight / 2) + 'px';
      div.style.left = e.clientX - (div.clientWidth / 2) + 'px';
    }

  }

}
