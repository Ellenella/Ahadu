import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrComponent } from './viewr.component';

describe('ViewrComponent', () => {
  let component: ViewrComponent;
  let fixture: ComponentFixture<ViewrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
