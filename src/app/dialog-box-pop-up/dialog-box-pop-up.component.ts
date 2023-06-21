import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowContactsService } from '../services/show-contacts.service';

@Component({
  selector: 'app-dialog-box-pop-up',
  templateUrl: './dialog-box-pop-up.component.html',
  styleUrls: ['./dialog-box-pop-up.component.css']
})
export class DialogBoxPopUpComponent {
  dataForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private api : ShowContactsService) {
    this.dataForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    })
  }

  onFormSubmit(){
      if(this.dataForm.valid){
        this.api.addContact(this.dataForm.value).subscribe({
          next:(res) =>{
            alert("Contact added successfully!!!");
            this.api.allContacts();
          },
          error:() => {
            alert("Something went wrong!!!");
          }
        })
        
      }
  }
}
