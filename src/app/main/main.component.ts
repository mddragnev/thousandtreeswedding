import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public images = [
    {

      imageSrc: "assets/images/IMG_45991.png",
      imageAlt: 'kuche'
    },
    {
      imageSrc: "assets/images/IMG_61421.png",
      imageAlt: 'kircho'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
