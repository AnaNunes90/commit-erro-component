import { Component, Input, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-teste-componente-filho',
  templateUrl: './teste-componente-filho.component.html',
  styleUrls: ['./teste-componente-filho.component.scss']
})
export class TesteComponenteFilhoComponent implements OnInit {

    // @Input() name: string = ''; 

  constructor(){}

  ngOnInit(): void {
      
  }
}
