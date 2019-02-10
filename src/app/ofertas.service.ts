import { Oferta } from './shared/oferta.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService{

    constructor(private http: Http){
        this.apiUrl += "ofertas/"
    }

    private apiUrl: string = URL_API;

    public getOfertas(): Promise<Array<Oferta>>{

        return this.http.get(`${this.apiUrl}?destaque=true`).toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Array<Oferta>>{
        return this.http.get(`${this.apiUrl}?categoria=${categoria}`).toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertaPorId(id: number) : Promise<Oferta>{

        return this.http.get(`${this.apiUrl}?id=${id}`).toPromise()
        .then((resposta: any) => resposta.json()[0]);

    }
}