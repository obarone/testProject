import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-button',
  template: `
    <div id="icon"></div>
  `,
  styles: [
    `
      :host {
        display: flex;
        height: 24px;
        width: 16px;
      }

      #icon {
        align-self: flex-end;
        display: block;
        width: 16px;
        height: 19px;
        background: #3C4646;
      }
    `
  ]
})
export class EditButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
