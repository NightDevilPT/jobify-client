import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobifyBreadcrumbComponent } from './jobify-breadcrumb.component';

describe('JobifyBreadcrumbComponent', () => {
  let component: JobifyBreadcrumbComponent;
  let fixture: ComponentFixture<JobifyBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobifyBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobifyBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
