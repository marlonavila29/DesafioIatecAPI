import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from '/Users/marlonavila/Projects/VendasFrontIATEC/src/app/environments/environment';
import { Venda } from './venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllService(): Observable<Venda[]> {
    debugger
    const url = `${this.baseUrl}Vendas`
    return this.http.get<Venda[]>(url)
  }

  findById(id: String):Observable<Venda>{
    const url = `${this.baseUrl}Vendas/${id}`
    return this.http.get<Venda>(url)
  }
  findByIdOutra(id: String):Observable<Venda[]>{
    const url = `${this.baseUrl}Vendas/${id}`
    return this.http.get<Venda[]>(url)
  }

  update(venda: Venda):Observable<Venda> {
    debugger
    const url = `${this.baseUrl}Vendas/AtualizarVenda/${venda.id}`
    return this.http.put<Venda>(url, venda)
  }

  create(venda: Venda): Observable<Venda> {
    debugger
    const url = `${this.baseUrl}Vendas/AdicionarVenda/`
    return this.http.post<Venda>(url, venda)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
