import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroEsportivo } from './carro-esportivo';

describe('CarroEsportivo', () => {
  let component: CarroEsportivo;
  let fixture: ComponentFixture<CarroEsportivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroEsportivo],
    }).compileComponents();

    fixture = TestBed.createComponent(CarroEsportivo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
