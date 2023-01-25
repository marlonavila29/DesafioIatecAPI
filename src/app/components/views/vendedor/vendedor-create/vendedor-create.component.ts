import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from '../vendedor.model';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-vendedor-create',
  templateUrl: './vendedor-create.component.html',
  styleUrls: ['./vendedor-create.component.css']
})
export class VendedorCreateComponent implements OnInit {

  vendedor: Vendedor = {
    name: '',
    cpf: ''
  }

  constructor(private service: VendedorService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.vendedor).subscribe((resposta) => {
      this.router.navigate(['vendedores'])
      this.service.mensagem('Vendedor criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['vendedores'])
  }

}
