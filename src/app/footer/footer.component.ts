import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  public navItems = [
    {
      name: "Начало",
      link: "#home"
    },
    {
      name: "Програма",
      link: "#program"
    },
    {
      name: "Кумове и шафери",
      link: "#ppl"
    },
    {
      name: "За каузата",
      link: "#cause"
    },
    {
      name: "За мястото",
      link: "#place"
    },
    {
      name: "Полезна информация",
      link: "#info"
    },
    {
      name: "Потвърждение",
      link: "#form"
    },
    {
      name: "Контакти",
      link: "#contacts"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
