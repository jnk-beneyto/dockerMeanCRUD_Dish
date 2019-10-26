import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from '../models/dish';
import { glob } from './global';

@Injectable({
    providedIn: 'root'
})

export class DishService {
    public url: string;
    public selectedDish: Dish;
    public dishes: Dish[];

    constructor(private _http: HttpClient) {
        this.url = glob.url;
    }

    saveDish(dish: Dish): Observable<any> {
        let params = JSON.stringify(dish);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http
            .post(this.url + 'setDish', params, { headers: headers });
    }

    getDishes(): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http
            .get(this.url + 'getDishes', { headers: headers });
    }

    deleteDish(dish: Dish) {
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http
            .delete(this.url + 'deleteDish/' + dish._id, { headers: headers });
    }

    updateDish(dish: Dish) : Observable<any>  {
        let data = JSON.stringify(dish);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http
            .put(this.url + 'updateDish/' + `${dish._id}`, data, { headers: headers });
    }
}