import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name = 'Aria';

  // // Step 1: One way binding of data
  // person = {
  //   givenName: 'Aria',
  //   surName: 'Diamanti',
  //   age: 24,
  //   email: 'aria@aueb.gr'
  // }

  // // Step 3: Component Input
  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surName: "Poulakis",
  //   age: 55,
  //   email: "chpoul@aueb.gr",
  //   address: "Athens, Greece"
  // }
    
}
