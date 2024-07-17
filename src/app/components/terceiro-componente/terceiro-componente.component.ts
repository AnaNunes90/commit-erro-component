import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  templateUrl: './terceiro-componente.component.html',
  styleUrls: ['./terceiro-componente.component.scss']
})
export class TerceiroComponenteComponent {
    nome: string = "José";
    idade: number = 22;
    cidade: string = "João Pessoa"
}
