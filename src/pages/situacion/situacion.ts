import { Component } from '@angular/core';
import {IonicPage,NavController,NavParams} from 'ionic-angular';
import {BarPage} from "../barchar/barpage";
import {ServiceProvider} from '../../providers/service/service';
@IonicPage()
@Component({
  selector: 'page-situacion',
  templateUrl: 'situacion.html',
})
export class Situacion{
    data: string;
    facturacion:number = 0;
    nombreComercial: string  ="";
    resultadoFac:number = 0;
    resultadoPer:number = 0;
    preguntas:any = ["1","2","3"];
    constructor(public navCtrl: NavController,private navParams: NavParams,public service:ServiceProvider){
        this.data = this.navParams.get('data');
        //this.nombreComercial = this.data["data"]["nombreComercial"];
        this.metodo();

    }
    gotobar(){
        this.navCtrl.setRoot('BarPage');
    }
    metodo(){
        this.service.metodo().subscribe(data=>{
            if(data["cfacturacion"]<0){
                document.getElementById("tf").setAttribute("class","invert");
                document.getElementById("resultado").setAttribute("class","nega");
            }
                document.getElementById("resultado").innerHTML  = Math.floor(data["cfacturacion"])+"%";
                this.resultadoFac = data["tfacturacion"];
                this.resultadoPer = data["tpersona"];
            console.log(data);
        },ex =>{
            console.log(ex);
        })
    }
}