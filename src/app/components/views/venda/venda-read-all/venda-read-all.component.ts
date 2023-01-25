import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Venda } from "../venda.model";
import { VendaService } from "../venda.service";

@Component({
  selector: "app-venda-read-all",
  templateUrl: "./venda-read-all.component.html",
  styleUrls: ["./venda-read-all.component.css"],
})
export class VendaReadAllComponent implements OnInit {
  
  //displayedColumns: string[] = ["id", "itensVenda", "status", "acoes"];
  displayedColumns: string[] = ["id", "itensVenda", "status", "dataVenda","idVendedor","acoes"];

  id_vendedor: String = "";
  vendas: Venda[] = [];

  constructor(
    private service: VendaService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAllService().subscribe((resposta) => {
      debugger
      this.vendas = resposta;
      console.log("Vendas"+this.vendas);
    });
  }

  navegarParaCriarVenda(): void {
    this.router.navigate([`vendas/create`])
  }
  buscarVendaPorId(): void {
    this.router.navigate([`vendas/buscaId`])
  }
}
