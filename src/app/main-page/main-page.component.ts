import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import { Persona } from '../../models/persona.model';
import { Field } from '../../models/field.model';
import { Column } from '../../models/column.model';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // @TODO: make persona a Model;
  persona: any = new Persona;
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getPersona().subscribe(persona => {
      this._api.getPersonaColumns().subscribe(columns => {
        this._api.getPersonaFields().subscribe(fields => {
          this.persona = persona;
          this.persona.columns = columns;
          this.persona.fields = fields;
        });
      });
    });
  }

}
