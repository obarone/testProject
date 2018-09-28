import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'persona-toolbar',
  templateUrl: './persona-toolbar.component.html',
  styleUrls: ['./persona-toolbar.component.css']
})
export class PersonaToolbarComponent implements OnInit {

  @Input () name:string;
  constructor() { }

  ngOnInit() {
  }

}
