import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
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

Настъпи моментът, заедно с нашите родители, да ви поканим да попътувате до сърцето на Предбалкана, за да отпразнуваме заедно нашия сватбен ден! Нека си кажем "Наздраве!" и да поставим началото на нашето съвместно приключение!`,
  `Не е вярно,
  че с времето любовта избледнява,
   че всичко се превръща в рутина,
   скука
   и отегчение.
  
   Не бой се.
   Не е така.
   Няма да е така.
   Напротив.
   Ще градим,
   ще надграждаме,
   ще израстваме
   един до друг.
  
   Най-вълнуващото
   предстои.
   Да остареем.
   Заедно.`];

  constructor() { }

  ngOnInit(): void {
  }

}
