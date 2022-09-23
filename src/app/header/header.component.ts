import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOpen = false;

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
