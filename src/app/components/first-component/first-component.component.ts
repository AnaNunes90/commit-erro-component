import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

    @Input() nome: string = '';
    idade: string = '';
    profissao: string = ''
  constructor(){}

  ngOnInit(): void {
      
  }
  
}
