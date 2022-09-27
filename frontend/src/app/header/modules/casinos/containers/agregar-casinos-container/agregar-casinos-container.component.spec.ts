import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCasinosContainerComponent } from './agregar-casinos-container.component';

describe('AgregarCasinosContainerComponent', () => {
  let component: AgregarCasinosContainerComponent;
  let fixture: ComponentFixture<AgregarCasinosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCasinosContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCasinosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
