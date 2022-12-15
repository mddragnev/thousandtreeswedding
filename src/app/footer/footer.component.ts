import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
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
      name: "Потвърждение",
      link: "#form"
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
      name: "Контакти",
      link: "contancts"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
