import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.scss']
})
export class InfoComponentComponent implements OnInit {

  @Input()
  public label!: string;

  @Input()
  public description!: string;

  @Input()
  public image!: {url: string, alt: string};

  constructor() { }

  ngOnInit(): void {
  }

}
