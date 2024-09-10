import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobifyModalComponent } from './jobify-modal.component';

describe('JobifyModalComponent', () => {
  let component: JobifyModalComponent;
  let fixture: ComponentFixture<JobifyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobifyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
