import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnoContainerComponent } from './agregar-alumno-container.component';

describe('AgregarAlumnoContainerComponent', () => {
  let component: AgregarAlumnoContainerComponent;
  let fixture: ComponentFixture<AgregarAlumnoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
