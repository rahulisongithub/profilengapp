import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable, combineLatest, EMPTY, from, merge, Subject, throwError, of } from 'rxjs';
import { catchError, filter, map, mergeMap, scan, shareReplay, tap, toArray, switchMap } from 'rxjs/operators';

//import {Headers,RequestOptions,RequestMethod} from '@angular/http';
import { IProduct } from './product';


@Injectable({
    providedIn: 'root'
})
export class ProductService {


    //private productUrl = 'https://azurecosapi.azurewebsites.net/api/products/';
    //private productUrl = 'http://corpserviceapi.southeastasia.azurecontainer.io/api/crops/';
      private productUrl = 'https://corpserviceapi.azurewebsites.net/api/crops/';
    //private productUrl = 'https://rsaazurewebapi.azurewebsites.net/api/products';

    constructor(private http:HttpClient){
    }

    getProducts(): Observable<IProduct[]> {

       return this.http.get<IProduct[]>(this.productUrl)
            .pipe(
                tap(data => JSON.stringify(data)),
                catchError(this.handleError)
            );
    }

    getProduct(id:number):Observable<IProduct> {
        return this.http.get<IProduct>(this.productUrl + id)
          .pipe(catchError(this.handleError))
    }

    saveProduct(product) {
          console.log("Product to be added is " + product);
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post<IProduct>(this.productUrl, product, options)
          .pipe(catchError(this.handleError))
    }

    updateProduct(product:IProduct):Observable<IProduct>{
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.put<IProduct>(this.productUrl + product.productID,product,options)
        .pipe(catchError(this.handleError))
    }

    deleteProduct(id:number):Observable<IProduct>{
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.delete<IProduct>(this.productUrl + id,options)
        .pipe(catchError(this.handleError))
    }

    private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `Ann Error occurred:${err.status},err message is : ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
