import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
@Component({
  selector: 'persona-view',
  templateUrl: './persona-view.component.html',
  styleUrls: ['./persona-view.component.css']
})
export class PersonaViewComponent implements OnInit {

  @Input () persona: any;

  lastField: any;
  constructor(private _api: ApiService) { }

  ngOnInit() {
    document.addEventListener('click', (event) => {
      this.clickOn(undefined, event);
    })

  }

  clickOn (fieldId, event) {
    if (this.lastField) {
      if (this.lastField === 'persona') {
        this.persona.initials = this.persona.name.slice(0, 3);
        console.log(`UPDATE PERSONA, data: ${this.persona}`);
          this._api.updatePersona(this.persona).subscribe(success => console.log(success), error => console.log(`error: ${error}`));
      } else {
        const update = this.persona.fields.find(field => field.id === this.lastField);
        console.log(`UPDATE FIELDS, data: ${update}`);
        if (update) {
          this._api.updatePersonaField(this.lastField, update)
          .subscribe(success => console.log(success), error => console.log(`error: ${error}`));
        }
      }
    }
    this.lastField = fieldId
    event.stopPropagation();
    console.log('edit');
  }

  deleteField (fieldId, event) {
    console.log('delete');
    event.stopPropagation();
    const del = this.persona.fields.find(field => field.id === fieldId);
    if (del) {
      console.log(`DELETE FIELD, data: ${fieldId}`)
      this._api.deletePersonaField(fieldId)
        .subscribe(success => {
          this.persona.fields = this.persona.fields.filter(el => el.id !== fieldId);
        }, error => console.log(`error: ${error}`));
    }
  }



}
