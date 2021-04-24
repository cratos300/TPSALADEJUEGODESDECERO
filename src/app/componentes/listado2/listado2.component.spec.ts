import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listado2Component } from './listado2.component';

describe('Listado2Component', () => {
  let component: Listado2Component;
  let fixture: ComponentFixture<Listado2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listado2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
