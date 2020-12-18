import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareResourcesComponent } from './software-resources.component';

describe('SoftwareResourcesComponent', () => {
  let component: SoftwareResourcesComponent;
  let fixture: ComponentFixture<SoftwareResourcesComponent>;

  beforeEach(async(() => {
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
