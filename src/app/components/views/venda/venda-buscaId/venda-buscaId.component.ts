import { Component, OnInit } from "@angular/core";
import { FormControl, Validators,FormGroupDirective, NgForm, } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Venda } from "../venda.model";
import { VendaService } from "../venda.service";
import { Vendedor } from "/Users/marlonavila/Projects/VendasFrontIATEC/src/app/components/views/vendedor/vendedor.model";
import { VendedorService } from "/Users/marlonavila/Projects/VendasFrontIATEC/src/app/components/views/vendedor/vendedor.service";

@Component({
  selector: "app-venda-buscaId",
  templateUrl: "./venda-buscaId.component.html",
  styleUrls: ["./venda-buscaId.component.css"],
})

export class VendaBuscaIdComponent implements OnInit {
  vendas: Venda[] = [];
  displayedColumns: string[] = ["id", "itensVenda", "status", "dataVenda","idVendedor","acoes"];
  venda: Venda = {
    id: "",
    itensVenda: "",
    status: "",
    dataVenda: "",  
    idVendedor: "",
  };


  constructor(
    private service: VendaService,
    private vendedorService: VendedorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  ngOnInit(): void {
  }

  buscarPorId(): void {
    this.service.findByIdOutra(this.venda.id!).subscribe((resposta) => {
      debugger
      this.vendas = resposta
    })
  }

  
  cancel(): void {
    this.router.navigate([`vendas`]);
  }

}
