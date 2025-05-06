import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | EPerson | undefined;

  name = "Lakis"
  addressOReducation: string = '';

  // person = {
  //   givenName:"Lakis",
  //   surName: "Lalakis",
  //   age: 20,
  //   email:'lakis@aueb.gr'
  // }
  
  isPerson():boolean {
    if (this.personInput && 'address' in this.personInput) {
      this.addressOReducation = this.personInput.address
      return 'address' in this.personInput;
    }
    return false;
  }

  isEPerson():boolean {
    if (this.personInput && 'education'in this.personInput){ 
      this.addressOReducation = this.personInput.education
      return 'education'in this.personInput;
    }  
    return false
  }
}


// <tr>
//       <td class="fw-semibold text-end">
//         {{ (isPerson() && "Address") || "Education" }}
//       </td>
//       <td class="ps-2">{{ addressOrEducation }}</td>
//     </tr><tr>
//     <td class="fw-semibold text-end">
//       {{ (isPerson() && "Address") || "Education" }}
//     </td>
//     <td class="ps-2">{{ addressOrEducation }}</td>
//   </tr>