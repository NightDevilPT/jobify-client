import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobifyToastComponent } from './jobify-toast.component';

describe('JobifyToastComponent', () => {
  let component: JobifyToastComponent;
  let fixture: ComponentFixture<JobifyToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobifyToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobifyToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
