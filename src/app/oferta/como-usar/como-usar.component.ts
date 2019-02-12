import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  private ofertaId: number;
  private descricao: string;

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaId = this.route.snapshot.parent.params['id'];

    this.ofertaService.getComoUsarPorIdOferta(this.ofertaId)
      .then((resposta: string) => this.descricao = resposta);
  }

}
