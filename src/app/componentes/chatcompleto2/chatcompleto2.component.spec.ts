import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatcompleto2Component } from './chatcompleto2.component';

describe('Chatcompleto2Component', () => {
  let component: Chatcompleto2Component;
  let fixture: ComponentFixture<Chatcompleto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chatcompleto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chatcompleto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
