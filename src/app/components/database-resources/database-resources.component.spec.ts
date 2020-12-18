import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseResourcesComponent } from './database-resources.component';

describe('DatabaseResourcesComponent', () => {
  let component: DatabaseResourcesComponent;
  let fixture: ComponentFixture<DatabaseResourcesComponent>;

  beforeEach(async(() => {
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
