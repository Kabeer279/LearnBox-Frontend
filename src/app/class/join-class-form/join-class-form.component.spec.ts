import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinClassFormComponent } from './join-class-form.component';

describe('JoinClassFormComponent', () => {
  let component: JoinClassFormComponent;
  let fixture: ComponentFixture<JoinClassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinClassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
