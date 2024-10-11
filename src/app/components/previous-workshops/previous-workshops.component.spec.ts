import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousWorkshopsComponent } from './previous-workshops.component';

describe('PreviousWorkshopsComponent', () => {
  let component: PreviousWorkshopsComponent;
  let fixture: ComponentFixture<PreviousWorkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousWorkshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
