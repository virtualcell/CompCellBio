import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SoftwareResourcesComponent } from './software-resources.component';

describe('SoftwareResourcesComponent', () => {
  let component: SoftwareResourcesComponent;
  let fixture: ComponentFixture<SoftwareResourcesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
