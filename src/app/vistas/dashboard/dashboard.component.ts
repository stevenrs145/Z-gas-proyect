import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Todo } from '../../modelos/todo.interfase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  datosEnviados: Todo[] = [];
  datosSearch: Todo[] = [];
  datosCompletos : Todo[] = [];
  datosIncomplee : Todo[] = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.dataTodo().subscribe((data)=> {
      console.log(data.length);
      this.datosEnviados = data;
      this.datosSearch = data;
      this.ngCompleteData();
    });
  }

  ngSearchData(event: any){
    var text = event.target.value;
    var datafilter = this.datosSearch;
    var results = this.datosSearch;
    if(text !== null || text !== '' || text !== undefined){
      let texFilter = text.toUpperCase();
      results = datafilter.filter(function(entry) {
          return entry.title.toUpperCase().indexOf(texFilter) !== -1;
      }); 
    }

   this.datosEnviados = results;
  }

  ngCompleteData(){
    console.log("entro");
    var resultsComplete = this.datosEnviados.filter(function(entry) {
      return entry.completed !== false;
    }); 

    var resultsIncomplete = this.datosEnviados.filter(function(entry) {
      return entry.completed !== true;
    }); 

   this.datosCompletos = resultsComplete;
   this.datosIncomplee = resultsIncomplete;
  }
 
  ngDelete(event: any){
    let idTodo = event.target.value;
    console.log("Eliminar", idTodo);
    var results = this.datosEnviados.filter(function(entry) {
      return entry.id != idTodo;
  }); 

   this.datosEnviados = results;
   this.ngCompleteData()
  }

}
