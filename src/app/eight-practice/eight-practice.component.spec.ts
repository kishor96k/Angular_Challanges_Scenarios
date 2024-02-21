import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightPracticeComponent } from './eight-practice.component';

describe('EightPracticeComponent', () => {
  let component: EightPracticeComponent;
  let fixture: ComponentFixture<EightPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EightPracticeComponent]
    });
    fixture = TestBed.createComponent(EightPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
