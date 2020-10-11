import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuTypeComponent } from './select-qu-type.component';

describe('SelectQuTypeComponent', () => {
  let component: SelectQuTypeComponent;
  let fixture: ComponentFixture<SelectQuTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectQuTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQuTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
