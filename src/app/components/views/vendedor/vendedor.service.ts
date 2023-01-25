import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from '/Users/marlonavila/Projects/VendasFrontIATEC/src/app/environments/environment';
import { Vendedor } from './vendedor.model';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Vendedor[]> {
    const url = `${this.baseUrl}Vendedor`
    return this.http.get<Vendedor[]>(url)
  }
/*

  findAllService(): Observable<Venda[]> {
    debugger
    const url = `${this.baseUrl}Vendas`
    return this.http.get<Venda[]>(url)
  }
  findById(id: String): Observable<Vendedor> {
    const url = `${this.baseUrl}/vendedores/${id}`
    return this.http.get<Vendedor>(url)
  }
  */

  create(vendedor: Vendedor): Observable<Vendedor>{
    const url = `${this.baseUrl}/vendedores`
    return this.http.post<Vendedor>(url, vendedor);
  }
  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
