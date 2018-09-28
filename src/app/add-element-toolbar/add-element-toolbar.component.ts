import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../services/api/api.service';

import { Field } from '../../models/field.model';

@Component({
  selector: 'add-element-toolbar',
  templateUrl: './add-element-toolbar.component.html',
  styleUrls: ['./add-element-toolbar.component.css']
})
export class AddElementToolbarComponent implements OnInit {

  @Input () persona: any;
  movingButton: any;
  columns: any;
  colPosition: any;
  ghost: any;
  position: any = { x: 0, y:0 };

  colGhost: number;
  prevGhost: number;
  constructor(private _api: ApiService) { }

  ngOnInit() {
  }

  startMoving(name, event) {
    this.movingButton = document.querySelector(`add-element-button[type='${name}']`);
    this.columns = Array.from(document.querySelectorAll(`.content > .col`));
    if (this.columns) {
      this.colPosition = this.columns.map(col => col.getBoundingClientRect());
      this.ghost = document.createElement('div');
      this.ghost.className = 'ghost';
      this.ghost.innerText = 'ghost';
    }
  }

  onMoving(event) {
    if (document.querySelector('.ghost')) {
      document.querySelector('.ghost').remove();
    }
    if (this.columns) {
      const btnPos = this.movingButton.getBoundingClientRect();

      let distances = this.colPosition.map(col =>
        Math.hypot(col.x-btnPos.x, col.y-btnPos.y));

        const colIndex = (distances.indexOf(Math.min(...distances)));
        this.colGhost = colIndex;

        let fields = Array.from(this.columns[colIndex].children);
        if (fields.length) {
          let fieldPosition = fields.map(field => field.getBoundingClientRect());

          let fieldDistances = fieldPosition.map(field =>
            Math.hypot(field.x-btnPos.x, field.y-btnPos.y));

            let fieldIndex = fieldDistances.indexOf(Math.min(...fieldDistances));
            if (fields[fieldIndex] !== {}) {
              fields[fieldIndex].insertAdjacentElement('afterend', this.ghost);
            }

            this.prevGhost = fieldIndex;
          }
    }
  }

  stopMoving(event) {
    console.log(this.persona);
    const ghost = document.querySelector('.ghost');
    const ghostPosition = ghost.getBoundingClientRect();

    const btnPos = this.movingButton.getBoundingClientRect();

    const dist1 = Math.hypot(ghostPosition.x-btnPos.x, ghostPosition.y-btnPos.y);
    const dist2 = Math.hypot(event.x, event.y);
    console.log(this.position);
    if(dist1<dist2) {
      const col_id = this.columns[this.colGhost].getAttribute('id');
      this.addField('short_text', col_id, this.prevGhost);
      ghost.remove();
    } else {
      ghost.remove();
    }
  }

  addField (field_type, column_id, prev_id) {
    let form = {}
    if (this.persona.fields.some(field => field.column_id === column_id)) {
      const previousField = this.persona.fields.find(el => el.id === prev_id);
      form = {
        next_id: previousField.next_id,
        prev_id,
        column_id,
        field_type,
        title: 'Text field'
      };
    } else {
      form = {
        next_id: null,
        prev_id: null,
        column_id,
        field_type,
        title: 'Text field'
      };
    }
    this._api.createPersonaField(form).subscribe(success => {
      this.persona.fields.push(success);
    }, error => console.log(error));


  //   if (prev_id !== 0) {
  //     let otherId = this.persona.fields.indexOf(field => field.id === prev_id);
  //
  //     const form = {
  //       next_id: this.persona.fields[otherId].next_id,
  //       prev_id,
  //       column_id,
  //       field_type,
  //       title: 'Text field'
  //     }
  //
  //     // let field = new Field;
  //     // field.column_id = column;
  //     //
  //     // field.data = 'new Element';
  //     // field.title = 'new Title';
  //   }
  //
  // } else {
  //   const form = {
  //     next_id: this.persona.fields[otherId].next_id,
  //     prev_id: null,
  //     column_id,
  //     field_type,
  //     title: 'Text field'
  //   }
  //
  // }

  }

}
