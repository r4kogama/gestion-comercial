import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSupplierComponent } from './to-supplier.component';

describe('ToSupplierComponent', () => {
  let component: ToSupplierComponent;
  let fixture: ComponentFixture<ToSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
