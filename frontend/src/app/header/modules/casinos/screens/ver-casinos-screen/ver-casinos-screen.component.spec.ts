import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCasinosScreenComponent } from './ver-casinos-screen.component';

describe('VerCasinosScreenComponent', () => {
  let component: VerCasinosScreenComponent;
  let fixture: ComponentFixture<VerCasinosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCasinosScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCasinosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
