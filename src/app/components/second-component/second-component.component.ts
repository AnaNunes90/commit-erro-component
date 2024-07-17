import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent {
  nome: string = "João";
  idade: number = 21;
  profissao: string= "Médico"

}
