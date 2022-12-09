import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcbworkshopComponent } from './ccbworkshop.component';

describe('CcbworkshopComponent', () => {
  let component: CcbworkshopComponent;
  let fixture: ComponentFixture<CcbworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcbworkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcbworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
