import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type EstadoExpediente = 'tramite' | 'resuelto' | 'cerrado';

export interface Expediente {
  id: string;
  titulo: string;
  tipoProcedimiento: string;
  tipoTramite: string;
  fechaIngreso: string;
  ultActuacion: string;
  estado: EstadoExpediente;
}

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  private readonly apiUrl = `${environment.apiUrl}/expedientes`;

  constructor(private http: HttpClient) {}

  getExpedientes(tipo: 'activos' | 'cerrados' = 'activos'): Observable<Expediente[]> {
    // Prism devolverá los datos basados en tu YAML
    // Podrías pasar parámetros de búsqueda o filtros aquí
    return this.http.get<Expediente[]>(this.apiUrl, {
      params: { tipo }
    });
  }

  getExpedienteById(id: string): Observable<Expediente> {
    return this.http.get<Expediente>(`${this.apiUrl}/${id}`);
  }
}
