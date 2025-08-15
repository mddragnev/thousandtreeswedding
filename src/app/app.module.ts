import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // ✅ for NgIf, NgFor, NgClass, etc.
import * as Hammer from 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CountDownComponent } from './main/count-down/count-down.component';

import {
  IgxButtonModule,
  IgxCardModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRadioModule,
  IgxSelectModule,
  IgxTooltipModule
} from 'igniteui-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { LandingComponent } from './components/landing/landing.component';
import { CauseComponent } from './components/cause/cause.component';
import { PlaceComponent } from './components/place/place.component';
import { InfoComponent } from './components/info/info.component';
import { InfoComponentComponent } from './components/info-component/info-component.component';
import { PeopleComponent } from './components/people/people.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ImgLoadingDirective } from './services/img-loading-directive.directive';

import { RouterModule, Routes } from '@angular/router';

// ✅ Firebase modular imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';

// ✅ Custom Hammer config (manual now)
@Injectable()
export class MyHammerConfig {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer.Manager(element);
    mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_ALL }));
    return mc;
  }
}

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CountDownComponent,
    CarouselComponent,
    CardComponent,
    TimelineComponent,
    FormComponent,
    GridComponent,
    LandingComponent,
    CauseComponent,
    PlaceComponent,
    InfoComponent,
    InfoComponentComponent,
    PeopleComponent,
    ContactComponent,
    FooterComponent,
    ImgLoadingDirective
  ],
  imports: [
    BrowserModule,
    CommonModule, // ✅ Needed for NgClass/NgIf/NgFor
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxSelectModule,
    IgxTooltipModule,
    IgxGridModule,
    IgxCardModule,
    NgxSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MyHammerConfig,
    // ✅ Firebase provider functions moved here
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
