import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeSectionComponent } from './main/home-section/home-section.component';
import { CountDownComponent } from './main/count-down/count-down.component';
import { IgxButtonModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRadioModule, IgxSelectModule } from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselComponent } from './components/carousel/carousel.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/grid/grid.component'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth'
import { environment } from 'src/environments/environment.prod';
import { LandingComponent } from './components/landing/landing.component';



const routes: Routes = [
  {
    path: 'grid', component: GridComponent
  },
  {
    path: '', pathMatch: 'full', component: MainComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

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
    GridComponent,
    LandingComponent,
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
    IgxSelectModule,
    IgxGridModule,
    HammerModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
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
