import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  private ofertaId: number;
  private descricao: string;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertaId = this.route.parent.snapshot.params['id'];
    this.ofertasService.getOndeFicaPorIdOferta(this.ofertaId)
    .then((resposta: string) => this.descricao = resposta);
  }

}
