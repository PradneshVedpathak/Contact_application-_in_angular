import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowContactsService } from '../services/show-contacts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box-pop-up',
  templateUrl: './dialog-box-pop-up.component.html',
  styleUrls: ['./dialog-box-pop-up.component.css']
})
export class DialogBoxPopUpComponent implements OnInit {
  dataForm: FormGroup;
  public actionBtn: string = 'Save';
  @Input() dataSource: any;


  constructor(private formbuilder: FormBuilder,
    private api: ShowContactsService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public dialogRef: MatDialogRef<DialogBoxPopUpComponent>) {
    this.dataForm = this.formbuilder.group({
      _id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    if (this.editData) {
      this.actionBtn = 'Update'
      this.dataForm.patchValue(this.editData)
    }
  }


  onFormSubmit() {
    if (!this.editData) {
      if (this.dataForm.valid) {
        this.api.addContact(this.dataForm.value).subscribe({
          next: (res) => {
            alert("Contact added successfully!!!");
            this.dataForm.reset();
            this.dialogRef.close(true);
          },
          error: () => {
            alert("Something went wrong!!!");
          }
        })

      }
    }
    else {
      this.updateData();
    }
  }

  updateData() {
    this.api.updateData(this.dataForm.value).subscribe({
      next: (res) => {
        alert("Contact updated successfully");
        this.dataForm.reset();
        this.dialogRef.close(true);
      }, error: () => {
        alert("Error while updating contact")
      }
    })
  }
}
