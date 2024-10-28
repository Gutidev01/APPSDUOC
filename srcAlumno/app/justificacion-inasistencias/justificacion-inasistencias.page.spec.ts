import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JustificacionInasistenciasPage } from './justificacion-inasistencias.page';

describe('JustificacionInasistenciasPage', () => {
  let component: JustificacionInasistenciasPage;
  let fixture: ComponentFixture<JustificacionInasistenciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificacionInasistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
