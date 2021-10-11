import { Component, OnInit } from '@angular/core';

class Persona {
  nombre?: String;
  apellido?: String;
  dni?: String;
  estado?: String;
}

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {
  personas: Persona[] = [];
  constructor() {}

  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Benjamin',
        apellido: 'Huamani',
        dni: '72040645',
        estado: 'Soltero',
      },
      {
        nombre: 'Daniel',
        apellido: 'Bailon',
        dni: '12345678',
        estado: 'Soltero',
      },
      {
        nombre: 'Keyla',
        apellido: 'Montes',
        dni: '12312312',
        estado: 'Soltero',
      },
    ];
  }

  agregar(nombre: String, apellido: String, dni: String, estado: String) {
    this.personas.push({
      nombre,
      apellido,
      dni,
      estado,
    });

    console.log(this.personas);
    this.resetear();
  }
  resetear() {
    (document.getElementById('n') as HTMLInputElement).value = '';
    (document.getElementById('a') as HTMLInputElement).value = '';
    (document.getElementById('d') as HTMLInputElement).value = '';
    (document.getElementById('e') as HTMLInputElement).value = '';
  }
}
