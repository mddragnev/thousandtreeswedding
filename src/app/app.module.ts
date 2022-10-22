import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeSectionComponent } from './main/home-section/home-section.component';
import { CountDownComponent } from './main/count-down/count-down.component';
import { IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRadioModule } from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselComponent } from './components/carousel/carousel.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FormComponent } from './components/form/form.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  public override overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeSectionComponent,
    CountDownComponent,
    CarouselComponent,
    CardComponent,
    TimelineComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    HammerModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
