import { Component, OnInit } from "@angular/core";
import { FormControl, Validators,FormGroupDirective, NgForm, } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Venda } from "../venda.model";
import { VendaService } from "../venda.service";
import { Vendedor } from "/Users/marlonavila/Projects/VendasFrontIATEC/src/app/components/views/vendedor/vendedor.model";
import { VendedorService } from "/Users/marlonavila/Projects/VendasFrontIATEC/src/app/components/views/vendedor/vendedor.service";

@Component({
  selector: "app-venda-create",
  templateUrl: "./venda-create.component.html",
  styleUrls: ["./venda-create.component.css"],
})

export class VendaCreateComponent implements OnInit {
  id_vendedorSelected: String = "";
  itemSelected?: String[];
  toppingsVendedor = new FormControl('');
  toppingsItensVenda = new FormControl('');
  itensAVenda: string[] = ['Mochila', 'Barraca', 'Mesa', 'Cadeira', 'Lanterna', 'Bíblia'];
  vendedores: Vendedor[] = [];

  venda: Venda = {
    id: "",
    itensVenda: "",
    status: "",
    dataVenda: "",  
    idVendedor: "",
  };

  itensVenda = new FormControl("", [Validators.minLength(3)]);
  status = new FormControl("", [Validators.minLength(3)]);
  dataVenda = new FormControl("", [Validators.minLength(10)]);

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
    this.vendedorService.findAll().subscribe((resposta) => {
      this.vendedores = resposta;
    });

  }

  create(): void {
    debugger
    if(this.itemSelected == null || this.id_vendedorSelected == ""){
      this.service.mensagem("Por favor, selecione pelomenos um item e/ou vendedor");
    }
    else{
      this.venda.idVendedor = this.id_vendedorSelected
      this.venda.itensVenda = this.itemSelected!.join(";"); 
      this.service.create(this.venda).subscribe((resposta) => {
        this.router.navigate([`vendas`]);
        this.service.mensagem("Venda criado com sucesso!");
      }, err => {
        this.router.navigate([`vendas/create`]);
        this.service.mensagem("Erro ao criar novo venda! Tente novamente!");
      });
   }
  }

  
  cancel(): void {
    this.router.navigate([`vendas`]);
  }

}
