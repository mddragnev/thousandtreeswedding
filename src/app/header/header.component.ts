import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOpen = false;
  public mobileNavItems = ["НАЧАЛО", "ПРОГРАМА", "ПОТВЪРЖДЕНИЕ", "ЗА КАУЗАТА", "ЗА МЯСТОТО", "ПОЛЕЗНА ИНФОРМАЦИЯ", "КУМОВЕ И ШАФЕРИ", "КОНТАКТИ"]

  constructor() { }

  ngOnInit(): void {
  }

  public openMobileNav() {
    this.isOpen = true;
  }

  public closeMobileNav() {
    this.isOpen = false;
  }

}
