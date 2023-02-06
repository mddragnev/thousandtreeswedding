import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter, Observable, Subject } from 'rxjs';
import { ImageService } from './services/image-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'thousandtreeswedding';
  private sub!: any;

  constructor(private spinner: NgxSpinnerService, private imageSerivce: ImageService) {
  }

  public ngOnInit(): void {
    this.spinner.show();
    this.sub = this.imageSerivce.imagesLoading$.pipe(filter(r => r === 0)).subscribe(_ => {
      setTimeout(() => {
        this.spinner.hide();
        document.getElementById('start')?.classList.remove('hide');
        document.getElementById('start')?.classList.add('show');
      }, 500);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
