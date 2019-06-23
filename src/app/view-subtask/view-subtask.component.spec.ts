import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubtaskComponent } from './view-subtask.component';

describe('ViewSubtaskComponent', () => {
  let component: ViewSubtaskComponent;
  let fixture: ComponentFixture<ViewSubtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
