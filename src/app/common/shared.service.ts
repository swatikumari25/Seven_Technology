import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private httpclient:HttpClient) { }

  DisplayProduct(): Observable<any> {
    return this.httpclient.get('https://www.mocky.io/v2/5eda4003330000740079ea60'
    )
    .pipe(
       map (res =>   {
           return res;
        }),
    catchError ( ( error: any) =>   {

       return error;
    })

    );
  }
}
