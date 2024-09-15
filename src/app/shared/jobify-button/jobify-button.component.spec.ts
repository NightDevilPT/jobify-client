import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobifyButtonComponent } from './jobify-button.component';

describe('JobifyButtonComponent', () => {
  let component: JobifyButtonComponent;
  let fixture: ComponentFixture<JobifyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobifyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobifyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
