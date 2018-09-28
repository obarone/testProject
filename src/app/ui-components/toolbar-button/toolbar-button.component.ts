import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toolbar-button',
  template: `
    <div class='icon {{type}}'></div>
    <div class="text">{{text}}</div>
  `,
  styles: [
    `
      :host {
        display: flex;
        height: 64px;
        width: 72px;
        flex-direction: column;
        flex-wrap: nowrap;
      }

      .text {
        font-size: 12px;
        line-height: 8px;
        color: #646E6E;
        text-align: center;
      }

      .icon {
        display: block;
        height:36px;
        width: 36px;
        background: #646E6E;
        margin: 10px auto;
      }
    `

  ]
})
export class ToolbarButtonComponent implements OnInit {
  @Input () type: string;
  @Input () text: string;
  constructor() { }

  ngOnInit() {
  }

}
