import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import { Persona } from '../../models/persona.model';
@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // @TODO: make persona a Model;
  persona: Persona = new Persona;
  constructor(private _api: ApiService) { }

  ngOnInit() {
    console.log(this.persona);
    // this._api.getPersona().subscribe(success => {
    //   this.persona = success;
    //   this._api.getPersonaColumns().subscribe(success => {
    //     this.persona.columns = success;
    //     this._api.getPersonaFields().subscribe(success => {
    //       this.persona.fields = success;
    //     });
    //   });
    // });
  }

}
