import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditDialogComponent } from './dashboard-edit-dialog.component';

describe('DashboardEditDialogComponent', () => {
  let component: DashboardEditDialogComponent;
  let fixture: ComponentFixture<DashboardEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
