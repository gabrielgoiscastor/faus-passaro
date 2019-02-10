import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  private ofertaId: number;
  private oferta: Oferta;
  private imagemAtual: string;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {
    this.imagemAtual = "";
  }

  ngOnInit() {
    //this.ofertaId = this.route.snapshot.params['id'];

    this.route.params.subscribe((parametro: any) => this.ofertaId = parametro.id);

    this.ofertasService.getOfertaPorId(this.ofertaId).then((retorno: Oferta) => {
      this.oferta = retorno;
      this.imagemAtual = this.oferta.imagens[0].url;
    });

  }

  mudarFull(imagem: string){
    this.imagemAtual = imagem;
  }

}
