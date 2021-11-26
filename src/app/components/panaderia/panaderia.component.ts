import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-panaderia',
  templateUrl: './panaderia.component.html',
  styleUrls: ['./panaderia.component.css']
})
export class PanaderiaComponent implements OnInit {
  public nombre!: String;
  constructor(private _activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params ) => {
      //PREGUNTAMOS SI EXISTE EL PARAMETRO numero
      if (params['nombre'] != null){
        //ASIGNAMOS LA PROPIEDAD PARA LA PAGINA
        //SIEMPRE VIENEN COMO STRING
        this.nombre = params['nombre'];
       
      }
    });
  }
}
