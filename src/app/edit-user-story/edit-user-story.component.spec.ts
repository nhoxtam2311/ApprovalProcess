import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserStoryComponent } from './edit-user-story.component';

describe('EditUserStoryComponent', () => {
  let component: EditUserStoryComponent;
  let fixture: ComponentFixture<EditUserStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
