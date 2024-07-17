import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { TerceiroComponenteComponent } from './components/terceiro-componente/terceiro-componente.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { OnInit } from '@angular/core';
import { TesteComponenteFilhoComponent } from './components/teste-componente-filho/teste-componente-filho.component';
import { ComponentesModule } from './components/componentes/componentes.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ //ao ser colocado nas declarations, a aplicação está CIENTE que este componente criado existe
    AppComponent, HomeComponent,
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgModule, 
    ComponentesModule
    
  ],


  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
