import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private shouldHide = false;
  private scrollDelta = 20;
  public isOpen = false;
  private lastScroll = window.scrollY;
  public mobileNavItems = [
    {
      name: "НАЧАЛО",
      link: "#home"
    },
    {
      name: "ПРОГРАМА",
      link: "#program"
    },
    {
      name: "ПОТВЪРЖДЕНИЕ",
      link: "#form"
    },
    {
      name: "КУМОВЕ И ШАФЕРИ",
      link: "#ppl"
    },
    {
      name: "ЗА КАУЗАТА",
      link: "#cause"
    },
    {
      name: "ЗА МЯСТОТО",
      link: "#place"
    },
    {
      name: "ПОЛЕЗНА ИНФОРМАЦИЯ",
      link: "#info"
    },
    {
      name: "КОНТАКТИ",
      link: "#contancts"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public openMobileNav() {
    this.isOpen = true;
    document.body.style['overflow'] = 'hidden';
  }

  public closeMobileNav() {
    this.isOpen = false;
    document.body.style['overflow'] = 'visible';
  }

  @HostBinding('class.mobile-nav__hidden')
  public get hidden() {
    return this.shouldHide;
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(event: any) {
    if (window.scrollY <= 0) {
      this.shouldHide = false;
      this.lastScroll = window.scrollY;
      return;
    }
    if (this.lastScroll < window.scrollY && window.scrollY > 60) {
      // console.log("down");
      this.shouldHide = true;
    } else {
      // console.log("up");
      this.shouldHide = false;
    }
    this.lastScroll = window.scrollY;
  }

}
