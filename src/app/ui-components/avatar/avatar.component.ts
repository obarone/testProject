import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  template: `
    <img src="assets/avatars/{{type}}.png">
  `,
  styles: [
    `
    :host {
      display: block;
      height: 56px;
      width: 56px;
      margin: 16px;
      background: #F0645A;
    }
    `
  ]
})
export class AvatarComponent implements OnInit {
  @Input () type: string;
  constructor() { }

  ngOnInit() {
  }

}
