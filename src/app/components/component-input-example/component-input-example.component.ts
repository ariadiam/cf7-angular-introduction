import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Lana',
    surName: 'Del Rey',
    age: 30,
    email: 'lana@example.com',
    address: 'Los Angeles, USA'
  }

  person1: Person = {
    givenName: 'Bob',
    surName: 'Dylan',
    age: 45,
    email: 'bob@example.com',
    address: 'New York, USA'
  }
}
