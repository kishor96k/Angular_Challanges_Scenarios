import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPracticeComponent } from './six-practice.component';

describe('SixPracticeComponent', () => {
  let component: SixPracticeComponent;
  let fixture: ComponentFixture<SixPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixPracticeComponent]
    });
    fixture = TestBed.createComponent(SixPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
