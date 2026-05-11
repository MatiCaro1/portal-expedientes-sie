import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerExpediente } from './ver-expediente';

describe('VerExpediente', () => {
  let component: VerExpediente;
  let fixture: ComponentFixture<VerExpediente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerExpediente],
    }).compileComponents();

    fixture = TestBed.createComponent(VerExpediente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
