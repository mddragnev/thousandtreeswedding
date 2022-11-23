import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public info = [
    {
      title: "Нощувка",
      description: "Вашата нощувка в сватбения ден ще бъде осигурена на територията на Ваканционно селище „Балканъ“",
      image: {
        url: '../../../assets/images/bed.png',
        alt: 'bed'
      }
    },
    {
      title: "Удобства",
      description: "Комплексът разполага с футболно игрище, тенис игрище, малък басейн, детска площадка и външен фитнес, които ще бъдат на разположение за Вас и вашите деца в сватбения ден.",
      image: {
        url: '../../../assets/images/convenient.png',
        alt: 'convenient'
      }
    },
    {
      title: "Връхни дрехи",
      description: "Моля подгответе връхна дреха за Вас и вашите деца, в случай че захладнее.",
      image: {
        url: '../../../assets/images/jacket.png',
        alt: 'jacket'
      }
    },
    {
      title: "Цветя",
      description: "Моля НЕ носете букети с цветя. За съжаление, те губят красотата си в рамките на часове. Вместо това ще имате възможност да направите дарение в подкрепа на нашата сватбена кауза за засаждане на 1000 дръвчета.",
      image: {
        url: '../../../assets/images/bucket.png',
        alt: 'bucket'
      }
    },
    {
      title: "Пиротехника",
      description: "Ние, както и нашето кученце Джаки, не подкрепяме използването на пиротехника. За това Ви молим да не предвиждате такава в нашия сватбен ден.",
      image: {
        url: '../../../assets/images/fireworks.png',
        alt: 'fireworks'
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
