import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatabaseResourcesComponent } from './database-resources.component';

describe('DatabaseResourcesComponent', () => {
  let component: DatabaseResourcesComponent;
  let fixture: ComponentFixture<DatabaseResourcesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
