import { Component } from '@angular/core'; //importados para a classe

@Component({ //dados do componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //classe 
  
  userName = 'Joaquim';
  title = 'angular-basic';
  
}
