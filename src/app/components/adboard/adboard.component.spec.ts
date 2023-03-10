import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdboardComponent } from './adboard.component';

describe('AdboardComponent', () => {
  let component: AdboardComponent;
  let fixture: ComponentFixture<AdboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
