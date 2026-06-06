import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroSuv } from './carro-suv';

describe('CarroSuv', () => {
  let component: CarroSuv;
  let fixture: ComponentFixture<CarroSuv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroSuv],
    }).compileComponents();

    fixture = TestBed.createComponent(CarroSuv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
