import { Directive, ElementRef, HostListener } from '@angular/core';
import { ImageService } from './image-service.service';

@Directive({
  selector: '[appImgLoadingDirective]'
})
export class ImgLoadingDirective {

  constructor(private el: ElementRef, private imageService: ImageService) {
    imageService.imageLoading(el.nativeElement);
  }

  @HostListener('load')
  onLoad() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }

  @HostListener('error')
  onError() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }
}
