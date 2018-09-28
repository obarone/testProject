import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'short-text',
  templateUrl: './short-text.component.html',
  styles: [`
    :host {
      background: #FFFFFF;
      display: block;
      margin: 16px;
    }

    .title, .text {
      margin: 8px 12px;
    }

    .title {
      color: #B1B6B6;
      text-transform: uppercase;
      font-size: 12px;
      line-height: 15px;
      font-weigth: bold;
    }

    .text {
      color: #3C4646;
      font-size: 16px;
      line-heigth: 22px;
      font-weigth: normal;
    }

    #delete {
      float: right;
      display: block;
      height: 15px;
      width: 15px;
      background: #000000;
    }
    `]
})
export class ShortTextComponent implements OnInit {
  @Input () title: string;
  @Input () text: string;
  @Input () editable: boolean;
  @Input () field: any;
  constructor() { }

  ngOnInit() {
  }

}
