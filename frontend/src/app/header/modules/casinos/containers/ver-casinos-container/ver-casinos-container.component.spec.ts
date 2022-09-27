import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCasinosContainerComponent } from './ver-casinos-container.component';

describe('VerCasinosContainerComponent', () => {
  let component: VerCasinosContainerComponent;
  let fixture: ComponentFixture<VerCasinosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCasinosContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCasinosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
