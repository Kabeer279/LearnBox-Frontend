import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclassformComponent } from './createclassform.component';

describe('CreateclassformComponent', () => {
  let component: CreateclassformComponent;
  let fixture: ComponentFixture<CreateclassformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateclassformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateclassformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
