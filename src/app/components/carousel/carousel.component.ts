import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() sliderInterval = 3000;

  public selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages()
    }
  }

  public selectImage(index: number) {
    this.selectedIndex = index;
  }

  public onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  public onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex++;
    }
  }

  public autoSlideImages(): void {
    interval(this.sliderInterval)
      .subscribe(() => {
        this.onNextClick();
      });
  }

}
