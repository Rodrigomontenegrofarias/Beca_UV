import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCasinosComponent } from './ver-casinos.component';

describe('VerCasinosComponent', () => {
  let component: VerCasinosComponent;
  let fixture: ComponentFixture<VerCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCasinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
