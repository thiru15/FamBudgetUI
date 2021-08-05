import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryUsersComponent } from './secondary-users.component';

describe('SecondaryUsersComponent', () => {
  let component: SecondaryUsersComponent;
  let fixture: ComponentFixture<SecondaryUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
