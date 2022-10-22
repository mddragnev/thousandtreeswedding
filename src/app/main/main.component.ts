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

  public texts = [
  `Скъпи близки и приятели,
  ние,
  Силвана и Радослав,
  изминахме 2 085 км, за да се открием.
  Настъпи моментът, ние, заедно с нашите родители, да ви поканим да попътувате до
  сърцето на Предбалкана,
  за да отпразнуваме заедно нашия сватбен ден! 
  Нека си кажем "Наздраве!" и да
  поставим началото на нашето съвместно приключение!
  `, "fasdfdsafs"];

  constructor() { }

  ngOnInit(): void {
  }

}
