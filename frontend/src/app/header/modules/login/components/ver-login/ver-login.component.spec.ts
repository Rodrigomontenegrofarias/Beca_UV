import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLoginComponent } from './ver-login.component';

describe('VerLoginComponent', () => {
  let component: VerLoginComponent;
  let fixture: ComponentFixture<VerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
