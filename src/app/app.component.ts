import { Component, Inject, ViewChild, inject } from '@angular/core';
import { ShowContactsService } from './services/show-contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxPopUpComponent } from './dialog-box-pop-up/dialog-box-pop-up.component';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD_Appliction';
  public displayedColumns: string[] = ['firstName', 'lastName', 'phoneNumber', 'action'];
  public dataSource: any = [];

  constructor(private contact: ShowContactsService, private dialog: MatDialog) {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contact.allContacts().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }

  openDialogBox() {
    const dialogRef = this.dialog.open(DialogBoxPopUpComponent, {
      width: '30%'
    }).afterClosed().subscribe({
      next: () => { this.getAllContacts() }
    });

  }


  deleteContact(id: number) {
    this.contact.deleteContact(id).subscribe({
      next: (res) => {
        alert("Contact deleted!!!");
        this.getAllContacts();
      },
      error: console.log,
    });
  }

  editContact(data: any) {
    const dialogRef = this.dialog.open(DialogBoxPopUpComponent, {
      width: '30%',
      data
    }).afterClosed().subscribe({
      next: () => { this.getAllContacts() }
    });
  }

}

