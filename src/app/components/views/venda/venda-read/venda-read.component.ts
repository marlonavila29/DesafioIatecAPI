import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Venda } from "../venda.model";
import { VendaService } from "../venda.service";

@Component({
  selector: 'app-venda-read',
  templateUrl: './venda-read.component.html',
  styleUrls: ['./venda-read.component.css']
})
export class VendaReadComponent implements OnInit {

  id_vendedor: String = "";

  venda: Venda = {
    id: "",
    itensVenda: "",
    status: "",
    dataVenda: "",
    idVendedor: "",
  };

  constructor(
    private service: VendaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_vendedor = this.route.snapshot.paramMap.get("id_vendedor")!;
    this.venda.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`vendas/${this.id_vendedor}/vendas`]);
  }

  findById(): void {
    this.service.findById(this.venda.id!).subscribe((resposta) => {
      this.venda = resposta
    })
  }

}
