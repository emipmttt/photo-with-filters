import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var video = <HTMLVideoElement>document.getElementById("video")
    var filter = <HTMLVideoElement>document.getElementById("filter")
    var canvas = <HTMLCanvasElement>document.getElementById("canvas")
    var context = canvas.getContext("2d");

    const streamWebCam = (stream: any) => {
      video.srcObject = stream;
      video.play()
    }

    const throwError = (e: any) => {
      console.log(e);
    }

    const snap = () => {
      canvas.width = video.clientWidth
      canvas.height = video.clientHeight
      context.drawImage(video, 0, 0)
      context.drawImage(filter, 0, 0)
      var pic = canvas.toDataURL("image/png");
      pic = pic.replace("image/png", "image/octet-stream");
      document.location.href = pic;
    }

    const playButton = () => {
      filter.play()
    }

    document.querySelector("#snap").addEventListener("click", snap)
    document.querySelector("#play").addEventListener("click", playButton)

    navigator.getUserMedia({ video: true }, streamWebCam, throwError)


  }

}
