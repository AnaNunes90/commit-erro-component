import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { ParentDataComponent } from '../parent-data/parent-data.component';
import { SecondComponentComponent } from '../second-component/second-component.component';
import { TerceiroComponenteComponent } from '../terceiro-componente/terceiro-componente.component';
import { TesteComponenteFilhoComponent } from '../teste-componente-filho/teste-componente-filho.component';



@NgModule({
  declarations: [
    FirstComponentComponent,
    ParentDataComponent,
    SecondComponentComponent,
    TerceiroComponenteComponent,
    TesteComponenteFilhoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstComponentComponent,
    ParentDataComponent,
    SecondComponentComponent,
    TerceiroComponenteComponent,
    TesteComponenteFilhoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentesModule { }
