import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectViewResourseComponent } from './select-view-resourse.component';

describe('SelectViewResourseComponent', () => {
  let component: SelectViewResourseComponent;
  let fixture: ComponentFixture<SelectViewResourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectViewResourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectViewResourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
