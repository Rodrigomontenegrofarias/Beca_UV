import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCasinosComponent } from './agregar-casinos.component';

describe('AgregarCasinosComponent', () => {
  let component: AgregarCasinosComponent;
  let fixture: ComponentFixture<AgregarCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCasinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
