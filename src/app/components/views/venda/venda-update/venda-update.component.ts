import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Venda } from "../venda.model";
import { VendaService } from "../venda.service";

@Component({
  selector: 'app-venda-update',
  templateUrl: './venda-update.component.html',
  styleUrls: ['./venda-update.component.css']
})
export class VendaUpdateComponent implements OnInit {

  listaStatus?: String[];
  novoStatus : String = "";
  venda: Venda = {
    id: "",
    itensVenda: "",
    status: "",
    dataVenda: "",
    idVendedor: ""
  };

  itensVenda = new FormControl("", [Validators.minLength(3)]);
  status = new FormControl("", [Validators.minLength(3)]);
  dataVenda = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: VendaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.venda.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`vendas`]);
  }

  findById(): void {
    this.service.findById(this.venda.id!).subscribe((resposta) => {
      this.venda = resposta
      if(this.venda.status == "Aguardando pagamento"){
        this.listaStatus= ['Pagamento Aprovado', 'Cancelada']
      }
      else if(this.venda.status == "Pagamento Aprovado"){
        this.listaStatus = ['Enviado', 'Cancelada']
      }
      else if(this.venda.status == "Enviado"){
        this.listaStatus = ['Entregue']
      }
    })
  }

  update():void {
    debugger
    this.venda.status = this.novoStatus
    this.service.update(this.venda).subscribe((resposta) => {
      this.router.navigate([`/vendas`]);
      this.service.mensagem('Venda atualizado com sucesso!')
    }, err => {
      this.service.mensagem('Falha ao atualizar venda! Tente mais tarde..')
    })
  }

}