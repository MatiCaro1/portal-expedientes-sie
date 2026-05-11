import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  // ── Renderizado base ──────────────────────────

  it('debería crearse correctamente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('debería usar variante "main" por defecto', () => {
    fixture.detectChanges();
    expect(component.variant).toBe('main');
  });

  it('debería mostrar el año actual en el copyright', () => {
    fixture.detectChanges();
    const copy = fixture.nativeElement.querySelector('.footer__copy');
    expect(copy.textContent).toContain(new Date().getFullYear().toString());
  });

  it('debería mostrar la versión del sistema', () => {
    fixture.detectChanges();
    const version = fixture.nativeElement.querySelector('.footer__version-label');
    expect(version.textContent).toContain(component.systemVersion);
  });

  // ── Variante MAIN ─────────────────────────────

  it('[main] debería aplicar la clase footer--main', () => {
    component.variant = 'main';
    fixture.detectChanges();
    const footer = fixture.nativeElement.querySelector('footer');
    expect(footer.classList).toContain('footer--main');
  });

  it('[main] debería mostrar el nombre del sistema', () => {
    component.variant = 'main';
    fixture.detectChanges();
    const name = fixture.nativeElement.querySelector('.footer__system-name');
    expect(name.textContent).toContain(component.systemName);
  });

  it('[main] debería mostrar exactamente 4 links', () => {
    component.variant = 'main';
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll('.footer__link');
    expect(links.length).toBe(4);
  });

  it('[main] debería mostrar el copyright con el año actual', () => {
    component.variant = 'main';
    fixture.detectChanges();
    const copy = fixture.nativeElement.querySelector('.footer__copy');
    expect(copy.textContent).toContain(new Date().getFullYear().toString());
  });

  // ── Accesibilidad ─────────────────────────────

  it('debería tener aria-label en el nav de links', () => {
    fixture.detectChanges();
    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav.getAttribute('aria-label')).toBeTruthy();
  });

  it('los separadores deberían tener aria-hidden="true"', () => {
    fixture.detectChanges();
    const separators = fixture.nativeElement.querySelectorAll('.footer__separator');
    separators.forEach((sep: HTMLElement) => {
      expect(sep.getAttribute('aria-hidden')).toBe('true');
    });
  });

  // ── Getter ────────────────────────────────────

  it('isMain debería ser true cuando variant es "main"', () => {
    component.variant = 'main';
    expect(component.isMain).toBe(true);
  });
  // ── Variante AUTH ─────────────────────────────

  it('[auth] debería aplicar la clase footer--auth', () => {
    component.variant = 'auth';
    fixture.detectChanges();
    const footer = fixture.nativeElement.querySelector('footer');
    expect(footer.classList).toContain('footer--auth');
  });

  it('[auth] debería mostrar el texto informativo', () => {
    component.variant = 'auth';
    fixture.detectChanges();
    const info = fixture.nativeElement.querySelector('.footer__info-text');
    expect(info.textContent).toContain('Para mayor información');
  });

  it('[auth] debería mostrar el link a sie.cl', () => {
    component.variant = 'auth';
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('.footer__link');
    expect(link.textContent).toContain(component.siteName);
  });

  it('[auth] debería mostrar la versión a la derecha', () => {
    component.variant = 'auth';
    fixture.detectChanges();
    const version = fixture.nativeElement.querySelector('.footer__version-label');
    expect(version.textContent).toContain(component.systemVersion);
  });

  // ── Getter ────────────────────────────────────

  it('isAuth debería ser true cuando variant es "auth"', () => {
    component.variant = 'auth';
    expect(component.isAuth).toBe(true);
  });
});
