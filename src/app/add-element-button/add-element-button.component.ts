import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-element-button',
  template: `
    <div class="icon {{type}}"></div>
    <span>{{text}}</span>
  `,
  styles: [
    `
      :host {
        background: #FFFFFF;
        display: block;
        width: 163px;
        height: 112px;
        margin: 16px;
      }

      div.icon {
        display: block;
        width: 90%;
        margin: 10px 5%;
        background: #F0F0F0;
        height: 82px;
      }

      span {
        display: block;
        text-align: center;
      }
    `
  ]
})
export class AddElementButtonComponent implements OnInit {

  @Input () text: string;
  @Input () type: string;
  constructor() { }

  ngOnInit() {
  }

}
