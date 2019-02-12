import { Oferta } from './shared/oferta.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService{

    private apiUrlOfertas: string;
    private apiUrlComoUsar: string;
    private apiUrlOndeFica: string;

    constructor(private http: Http){
        this.apiUrlOfertas = URL_API + 'ofertas/';
        this.apiUrlComoUsar = URL_API + 'como-usar/';
        this.apiUrlOndeFica = URL_API + 'onde-fica/';
    }

    public getOfertas(): Promise<Array<Oferta>>{

        return this.http.get(`${this.apiUrlOfertas}?destaque=true`).toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Array<Oferta>>{
        return this.http.get(`${this.apiUrlOfertas}?categoria=${categoria}`).toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertaPorId(id: number) : Promise<Oferta>{
        return this.http.get(`${this.apiUrlOfertas}?id=${id}`).toPromise()
        .then((resposta: any) => resposta.json()[0]);
    }

    public getComoUsarPorIdOferta(id: number): Promise<string>{
        return this.http.get(`${this.apiUrlComoUsar}?id=${id}`).toPromise()
        .then((resposta: any) => {
            return resposta.json()[0].descricao;
        });
    }

    public getOndeFicaPorIdOferta(id:number): Promise<string>{
        return this.http.get(`${this.apiUrlOndeFica}?id=${id}`).toPromise()
        .then((resposta: any) => {
            return resposta.json()[0].descricao;
        });
    }
}