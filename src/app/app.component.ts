import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Aria';

  // Step 1: One way binding of data
  person = {
    givenName: 'Aria',
    surName: 'Diamanti',
    age: 24,
    email: 'aria@aueb.gr'
  }

  // Step 3: Component Input
  person0: Person = {
    givenName: "Christodoulos",
    surName: "Poulakis",
    age: 55,
    email: "chpoul@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "Bob",
    surName: "Dylan",
    age: 32,
    email: "bob@example.com",
    address: "New York, USA"
  }

  users: Person[] = [
    {
      "givenName": "Valle",
      "surName": "Cassely",
      "age": 1,
      "email": "vcassely0@booking.com",
      "address": "Room 760"
    }, {
      "givenName": "Jory",
      "surName": "Bulford",
      "age": 2,
      "email": "jbulford1@youtube.com",
      "address": "Apt 68"
    }, {
      "givenName": "Chelsy",
      "surName": "Angerstein",
      "age": 3,
      "email": "cangerstein2@theguardian.com",
      "address": "Room 692"
    }, {
      "givenName": "Veronique",
      "surName": "Doogue",
      "age": 4,
      "email": "vdoogue3@alexa.com",
      "address": "PO Box 88335"
    }, {
      "givenName": "Benson",
      "surName": "Allen",
      "age": 5,
      "email": "ballen4@zimbio.com",
      "address": "4th Floor"
    }, {
      "givenName": "Martainn",
      "surName": "McGookin",
      "age": 6,
      "email": "mmcgookin5@sina.com.cn",
      "address": "18th Floor"
    }, {
      "givenName": "Sheela",
      "surName": "Attwool",
      "age": 7,
      "email": "sattwool6@imdb.com",
      "address": "PO Box 82540"
    }, {
      "givenName": "Angus",
      "surName": "Gillatt",
      "age": 8,
      "email": "agillatt7@alibaba.com",
      "address": "14th Floor"
    }, {
      "givenName": "Lanna",
      "surName": "Ditch",
      "age": 9,
      "email": "lditch8@vistaprint.com",
      "address": "PO Box 90196"
    }, {
      "givenName": "Lurlene",
      "surName": "Hellard",
      "age": 10,
      "email": "lhellard9@china.com.cn",
      "address": "9th Floor"
    }, {
      "givenName": "Bronnie",
      "surName": "Emmerson",
      "age": 11,
      "email": "bemmersona@cyberchimps.com",
      "address": "Apt 1084"
    }, {
      "givenName": "Yasmin",
      "surName": "Barrowcliffe",
      "age": 12,
      "email": "ybarrowcliffeb@usnews.com",
      "address": "Room 291"
    }, {
      "givenName": "Errol",
      "surName": "Convery",
      "age": 13,
      "email": "econveryc@vkontakte.ru",
      "address": "PO Box 80183"
    }, {
      "givenName": "Irma",
      "surName": "Emanuelli",
      "age": 14,
      "email": "iemanuellid@ebay.co.uk",
      "address": "Suite 56"
    }, {
      "givenName": "Lenci",
      "surName": "Gallagher",
      "age": 15,
      "email": "lgallaghere@hexun.com",
      "address": "20th Floor"
    }, {
      "givenName": "Lezlie",
      "surName": "Grizard",
      "age": 16,
      "email": "lgrizardf@webs.com",
      "address": "Suite 81"
    }, {
      "givenName": "Zandra",
      "surName": "Prescote",
      "age": 17,
      "email": "zprescoteg@dell.com",
      "address": "10th Floor"
    }, {
      "givenName": "Bianca",
      "surName": "Cisneros",
      "age": 18,
      "email": "bcisnerosh@apache.org",
      "address": "7th Floor"
    }, {
      "givenName": "Rudy",
      "surName": "Carayol",
      "age": 19,
      "email": "rcarayoli@cdc.gov",
      "address": "Apt 1534"
    }, {
      "givenName": "Horace",
      "surName": "Durie",
      "age": 20,
      "email": "hduriej@booking.com",
      "address": "Room 1568"
    }]
    
}
