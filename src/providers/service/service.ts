import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ServiceProvider {
    url:string = "http://sunat360.tk:8000/";//cuando se agregen los servicios aqui debe ir la direccion http
    prueba:string = "http://10.100.120.241:8000/mostrarTotales/?id_cliente=3";
    constructor(public http: Http) {}
    
    public login(credentials) {
        if (credentials.username == null || credentials.password === null || credentials.ruc == null) {
          return Observable.throw("por favor ingrese los campos ");
        }else{
            return Observable.create(observer => {
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');
                //console.log("ir a providers/service/service.ts para cambiar la direccion url");
                let data = {
                  ruc: credentials.ruc,
                  username: credentials.username,
                  password: credentials.password
                };
                console.log(data);
                this.http.post(this.url+'login/', JSON.stringify(data), {headers: headers})
                  .subscribe(dat => {
                    console.log(dat);
                    let response = dat.json();
                    if (response.success) {
                        window.localStorage.setItem("credentials", JSON.stringify(response));
                    }
                    observer.next(response);
                    observer.complete();
                  });
              });
        }
      }

      public metodo(){
        return Observable.create(observer => {
                this.http.get(this.url+"mostrarTotales/?id_cliente=3")
                  .subscribe(dat => {
                    let response = dat.json();
                    observer.next(response);
                    observer.complete();
                  });
              });
      }
}