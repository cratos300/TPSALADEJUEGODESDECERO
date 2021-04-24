import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjedrezComponent } from './ajedrez.component';

describe('AjedrezComponent', () => {
  let component: AjedrezComponent;
  let fixture: ComponentFixture<AjedrezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjedrezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjedrezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
