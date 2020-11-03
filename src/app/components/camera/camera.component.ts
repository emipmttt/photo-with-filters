import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var video = document.getElementById("video")
    var canvas = document.getElementById("canvas")
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
      context.drawImage(document.querySelector("#video"), 0, 0)
      context.drawImage(document.querySelector("#filter"), 0, 0)
    }

    document.querySelector("#snap").addEventListener("click", snap)

    navigator.getUserMedia({ video: true }, streamWebCam, throwError)


  }

}
