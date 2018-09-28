import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaToolbarComponent } from './persona-toolbar.component';

describe('PersonaToolbarComponent', () => {
  let component: PersonaToolbarComponent;
  let fixture: ComponentFixture<PersonaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
