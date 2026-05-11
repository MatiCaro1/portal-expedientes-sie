import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

export type EstadoExpediente = 'tramite' | 'resuelto' | 'cerrado';
export type TabActivo = 'activos' | 'cerrados';

export interface Expediente {
  id: string;
  titulo: string;
  tipoTramite: string;
  fechaIngreso: string;
  ultActuacion: string;
  estado: EstadoExpediente;
}

interface Filtros {
  titulo: string;
  estado: string;
  fechaIngreso: string;
  tipoProcedimiento: string;
  tipoTramite: string;
  ultActuacion: string;
}

const MOCK_ACTIVOS: Expediente[] = [
  {
    id: 'SIE-PACA-2026-001',
    titulo: 'Autorización Canon de Arriendo',
    tipoTramite: 'ACTO_ADMINISTRATIVO',
    fechaIngreso: '01-04-2026',
    ultActuacion: '01-04-2026',
    estado: 'tramite',
  },
  {
    id: 'SIE-PACA-2026-002',
    titulo: 'Tramitación de Legalidad de Uso de Recursos',
    tipoTramite: 'ACTO_ADMINISTRATIVO',
    fechaIngreso: '01-04-2026',
    ultActuacion: '01-04-2026',
    estado: 'resuelto',
  },
  {
    id: 'SIE-PACA-2026-003',
    titulo: 'Solicitud de Dictamen Normativo Fiscalía',
    tipoTramite: 'ACTO_ADMINISTRATIVO',
    fechaIngreso: '01-04-2026',
    ultActuacion: '01-04-2026',
    estado: 'resuelto',
  },
];

const MOCK_CERRADOS: Expediente[] = [
  {
    id: 'SIE-PACA-2025-123',
    titulo: 'Autorización Canon de Arriendo',
    tipoTramite: 'ACTO_ADMINISTRATIVO',
    fechaIngreso: '10-11-2025',
    ultActuacion: '22-12-2025',
    estado: 'cerrado',
  },
];

@Component({
  selector: 'app-mis-expedientes',
  imports: [FormsModule, NgClass],
  templateUrl: './mis-expedientes.html',
  styleUrl: './mis-expedientes.css',
})
export class MisExpedientes {
  constructor(private router: Router) {}

  filtroVisible = signal(true);

  filtros: Filtros = {
    titulo: '',
    estado: '',
    fechaIngreso: '',
    tipoProcedimiento: '',
    tipoTramite: '',
    ultActuacion: '',
  };

  tabActivo = signal<TabActivo>('activos');

  paginaActual = signal(1);
  readonly itemsPorPagina = 10;

  private readonly todosActivos = signal(MOCK_ACTIVOS);
  private readonly todosCerrados = signal(MOCK_CERRADOS);

  expedientesFiltrados = computed(() => {
    const lista = this.tabActivo() === 'activos' ? this.todosActivos() : this.todosCerrados();
    return lista.filter((e) => {
      const matchTitulo = !this.filtros.titulo || e.titulo.toLowerCase().includes(this.filtros.titulo.toLowerCase());
      const matchEstado = !this.filtros.estado || e.estado === this.filtros.estado;
      return matchTitulo && matchEstado;
    });
  });

  expedientesPagina = computed(() => {
    const inicio = (this.paginaActual() - 1) * this.itemsPorPagina;
    return this.expedientesFiltrados().slice(inicio, inicio + this.itemsPorPagina);
  });

  totalPaginas = computed(() => Math.max(1, Math.ceil(this.expedientesFiltrados().length / this.itemsPorPagina)));

  paginas = computed(() => Array.from({ length: this.totalPaginas() }, (_, i) => i + 1));

  finPagina = computed(() => Math.min(this.paginaActual() * this.itemsPorPagina, this.expedientesFiltrados().length));

  toggleFiltro(): void {
    this.filtroVisible.set(!this.filtroVisible());
  }

  limpiarFiltros(): void {
    this.filtros = { titulo: '', estado: '', fechaIngreso: '', tipoProcedimiento: '', tipoTramite: '', ultActuacion: '' };
    this.paginaActual.set(1);
  }

  cambiarTab(tab: TabActivo): void {
    this.tabActivo.set(tab);
    this.paginaActual.set(1);
  }

  irPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas()) {
      this.paginaActual.set(pagina);
    }
  }

  verDetalle(expediente: Expediente): void {
    this.router.navigate(['/app/verExpediente'], { state: { expediente } });
  }

  estadoLabel(estado: EstadoExpediente): string {
    const labels: Record<EstadoExpediente, string> = {
      tramite: 'En Trámite',
      resuelto: 'Resuelto',
      cerrado: 'Cerrado',
    };
    return labels[estado];
  }

  estadoClass(estado: EstadoExpediente): string {
    const classes: Record<EstadoExpediente, string> = {
      tramite: 's--tramite',
      resuelto: 's--resuelto',
      cerrado: 's--cerrado',
    };
    return classes[estado];
  }
}
