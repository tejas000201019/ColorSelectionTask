import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeColorComponent } from './randomize-color.component';

describe('RandomizeColorComponent', () => {
  let component: RandomizeColorComponent;
  let fixture: ComponentFixture<RandomizeColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomizeColorComponent]
    });
    fixture = TestBed.createComponent(RandomizeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
