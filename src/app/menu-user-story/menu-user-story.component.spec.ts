import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUserStoryComponent } from './menu-user-story.component';

describe('MenuUserStoryComponent', () => {
  let component: MenuUserStoryComponent;
  let fixture: ComponentFixture<MenuUserStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuUserStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
