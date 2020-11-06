import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSingleComponent } from './feedback-single.component';

describe('FeedbackSingleComponent', () => {
  let component: FeedbackSingleComponent;
  let fixture: ComponentFixture<FeedbackSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
