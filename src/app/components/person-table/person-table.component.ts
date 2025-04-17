import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = 'Lakis'

  person = {
    givenName: 'Lakis',
    surName: 'Lalakis',
    age: 30,
    email: 'lalakis@aueb.gr'
  }
}
