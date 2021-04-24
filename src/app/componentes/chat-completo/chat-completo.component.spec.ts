import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCompletoComponent } from './chat-completo.component';

describe('ChatCompletoComponent', () => {
  let component: ChatCompletoComponent;
  let fixture: ComponentFixture<ChatCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatCompletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
