import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private ofertaId: number;
  private oferta: Oferta;
  private imagemAtual: string;

  private tempoSubscription: Subscription;
  private meuSubscription: Subscription;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {
    this.imagemAtual = "";
  }

  ngOnInit() {
    //this.ofertaId = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (parametro: any) =>{ this.ofertaId = parametro.id; this.loadOferta() },
      (erro: any) => {console.log(erro)},
      () => { console.log('ACABOOOU!!! É TETRA!!!!') }
    );

    let intervalObs = interval(500);

    this.tempoSubscription = intervalObs.subscribe(
      (tempo: any) => console.log(tempo),
      () => console.log('erro'),
      () => console.log('end')
    );

    //observable gerador
    let meuObs = Observable.create((observer: Observer<string>) =>{
      observer.next('passo1');
    });

    //observer
    this.meuSubscription = meuObs.subscribe(
      (a: any) => console.log(a)
    );

  }

  loadOferta(){
    this.ofertasService.getOfertaPorId(this.ofertaId).then((retorno: Oferta) => {
      this.oferta = retorno;
      this.imagemAtual = this.oferta.imagens[0].url;
    });
  }

  mudarFull(imagem: string){
    this.imagemAtual = imagem;
  }

  ngOnDestroy(){
    this.tempoSubscription.unsubscribe();
    this.meuSubscription.unsubscribe();
  }

}
