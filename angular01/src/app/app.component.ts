import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nombre del componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // propiedades / atributos
  nombre: string = 'Franco';
  apellido: string = 'Di Leo';
  edad: number = 26;
  lenguajes: Array<any> = ['Python', 'Typescript', 'javascript', '...'];
  date: any = '1994-11-05T13:15:30Z';
}
