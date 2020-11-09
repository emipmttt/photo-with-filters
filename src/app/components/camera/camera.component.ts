import { Component, OnInit } from '@angular/core';

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

  filterSelected = 0

  putFilter(index) {
    this.filterSelected = index
  }

  ngOnInit(): void {

    var video = <HTMLVideoElement>document.getElementById("video")
    var filter = <HTMLImageElement>document.getElementById("filter")
    var canvas = <HTMLCanvasElement>document.getElementById("canvas")
    var context = canvas.getContext("2d");




    const streamWebCam = (stream: any) => {
      video.srcObject = stream;
      video.play()
      video.onplaying = () => {
        console.log(video.clientWidth);
        console.log(video.videoWidth);
        filter.style.marginLeft = ((video.clientWidth / 2) - video.videoWidth) + "px"
      }



    }

    const throwError = (e: any) => {
      console.log(e);
    }

    const snap = () => {
      canvas.style.display = "initial"
      canvas.width = video.clientWidth
      canvas.height = video.clientHeight
      context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight)
      context.drawImage(filter, 0, 0)

      var link = document.getElementById('link');
      link.setAttribute('download', Date.now() + '.png');
      link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
      link.click();

      canvas.style.display = "none"

    }

    document.querySelector("#snap").addEventListener("click", snap)

    navigator.getUserMedia({ video: true }, streamWebCam, throwError)


  }

}
