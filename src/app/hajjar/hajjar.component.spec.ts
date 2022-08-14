import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HajjarComponent } from './hajjar.component';

describe('HajjarComponent', () => {
  let component: HajjarComponent;
  let fixture: ComponentFixture<HajjarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HajjarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HajjarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
