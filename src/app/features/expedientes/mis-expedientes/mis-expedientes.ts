import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Expediente, EstadoExpediente, ExpedienteService } from '../../../core/services/expediente.service';

export type TabActivo = 'activos' | 'cerrados';

interface Filtros {
  titulo: string;
  estado: string;
  fechaIngreso: string;
  tipoProcedimiento: string;
  tipoTramite: string;
  ultActuacion: string;
}

const FILTROS_VACIOS: Filtros = {
  titulo: '',
  estado: '',
  fechaIngreso: '',
  tipoProcedimiento: '',
  tipoTramite: '',
  ultActuacion: '',
};

@Component({
  selector: 'app-mis-expedientes',
  imports: [FormsModule, NgClass],
  templateUrl: './mis-expedientes.html',
  styleUrl: './mis-expedientes.css',
})
export class MisExpedientes implements OnInit {
  private expedienteService = inject(ExpedienteService);
  private router = inject(Router);

  filtroVisible = signal(true);
  filtros = signal<Filtros>({ ...FILTROS_VACIOS });
  tabActivo = signal<TabActivo>('activos');
  paginaActual = signal(1);
  readonly itemsPorPagina = 10;

  private readonly todosActivos = signal<Expediente[]>([]);
  private readonly todosCerrados = signal<Expediente[]>([]);

  ngOnInit(): void {
    this.cargarExpedientes();
  }

  cargarExpedientes(): void {
    // En un escenario real, cargarías ambos o solo el activo
    this.expedienteService.getExpedientes('activos').subscribe(data => {
      this.todosActivos.set(data);
    });
    this.expedienteService.getExpedientes('cerrados').subscribe(data => {
      this.todosCerrados.set(data);
    });
  }

  expedientesFiltrados = computed(() => {
    const lista = this.tabActivo() === 'activos' ? this.todosActivos() : this.todosCerrados();
    const f = this.filtros();
    return lista.filter((e) => {
      const matchTitulo = !f.titulo || e.titulo.toLowerCase().includes(f.titulo.toLowerCase());
      const matchEstado = !f.estado || e.estado === f.estado;
      const matchProcedimiento = !f.tipoProcedimiento || e.tipoProcedimiento === f.tipoProcedimiento;
      const matchTipoTramite = !f.tipoTramite || e.tipoTramite === f.tipoTramite;
      const matchFechaIngreso = !f.fechaIngreso || e.fechaIngreso === this.formatoFiltroFecha(f.fechaIngreso);
      const matchUltActuacion = !f.ultActuacion || e.ultActuacion === this.formatoFiltroFecha(f.ultActuacion);
      return matchTitulo && matchEstado && matchProcedimiento && matchTipoTramite && matchFechaIngreso && matchUltActuacion;
    });
  });

  expedientesPagina = computed(() => {
    const inicio = (this.paginaActual() - 1) * this.itemsPorPagina;
    return this.expedientesFiltrados().slice(inicio, inicio + this.itemsPorPagina);
  });

  totalPaginas = computed(() => Math.max(1, Math.ceil(this.expedientesFiltrados().length / this.itemsPorPagina)));

  paginas = computed(() => Array.from({ length: this.totalPaginas() }, (_, i) => i + 1));

  finPagina = computed(() => Math.min(this.paginaActual() * this.itemsPorPagina, this.expedientesFiltrados().length));

  updateFiltro<K extends keyof Filtros>(key: K, value: Filtros[K]): void {
    this.filtros.update((f) => ({ ...f, [key]: value }));
    this.paginaActual.set(1);
  }

  toggleFiltro(): void {
    this.filtroVisible.set(!this.filtroVisible());
  }

  limpiarFiltros(): void {
    this.filtros.set({ ...FILTROS_VACIOS });
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

  // Convierte 'YYYY-MM-DD' (input type=date) a 'DD-MM-YYYY' (formato de los datos)
  private formatoFiltroFecha(fechaInput: string): string {
    if (!fechaInput) return '';
    const [y, m, d] = fechaInput.split('-');
    return `${d}-${m}-${y}`;
  }
}
