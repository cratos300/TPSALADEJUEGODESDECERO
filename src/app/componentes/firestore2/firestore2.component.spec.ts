import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firestore2Component } from './firestore2.component';

describe('Firestore2Component', () => {
  let component: Firestore2Component;
  let fixture: ComponentFixture<Firestore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Firestore2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Firestore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
