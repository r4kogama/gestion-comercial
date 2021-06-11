import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromSupplierComponent } from './from-supplier.component';

describe('FromSupplierComponent', () => {
  let component: FromSupplierComponent;
  let fixture: ComponentFixture<FromSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
