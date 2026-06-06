import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroClassico } from './carro-classico';

describe('CarroClassico', () => {
  let component: CarroClassico;
  let fixture: ComponentFixture<CarroClassico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroClassico],
    }).compileComponents();

    fixture = TestBed.createComponent(CarroClassico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
