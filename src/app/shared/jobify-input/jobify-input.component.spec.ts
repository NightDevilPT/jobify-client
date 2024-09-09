import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobifyInputComponent } from './jobify-input.component';

describe('JobifyInputComponent', () => {
  let component: JobifyInputComponent;
  let fixture: ComponentFixture<JobifyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobifyInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobifyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
