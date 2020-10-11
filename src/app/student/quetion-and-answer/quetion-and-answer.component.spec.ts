import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuetionAndAnswerComponent } from './quetion-and-answer.component';

describe('QuetionAndAnswerComponent', () => {
  let component: QuetionAndAnswerComponent;
  let fixture: ComponentFixture<QuetionAndAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuetionAndAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuetionAndAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
