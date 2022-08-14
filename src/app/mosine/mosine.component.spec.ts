import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosineComponent } from './mosine.component';

describe('MosineComponent', () => {
  let component: MosineComponent;
  let fixture: ComponentFixture<MosineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
