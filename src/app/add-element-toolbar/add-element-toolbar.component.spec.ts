import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementToolbarComponent } from './add-element-toolbar.component';

describe('AddElementToolbarComponent', () => {
  let component: AddElementToolbarComponent;
  let fixture: ComponentFixture<AddElementToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddElementToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElementToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
