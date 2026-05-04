import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioViewComponent } from './inicio-view';

describe('InicioViewComponent', () => {
  let component: InicioViewComponent;
  let fixture: ComponentFixture<InicioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
