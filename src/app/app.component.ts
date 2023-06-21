import { Component } from '@angular/core';
import { ShowContactsService } from './services/show-contacts.service';
import { DialogBoxPopUpComponent } from './dialog-box-pop-up/dialog-box-pop-up.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD_Appliction';
  public displayedColumns : string[] = ['id', 'firstName', 'lastName', 'phoneNumber', 'action'];
  public dataSource: any = [];

  constructor(private contact: ShowContactsService, private dialog: DialogBoxPopUpComponent) {
    contact.allContacts().subscribe((data) => this.dataSource = data)
  }

  applyFilter(event: Event) {
    console.log("ok")
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // editContact(){
  //   this.dialog.open(DialogBoxPopUpComponent)
  // }

  deleteContact(id: number){
    this.contact.deleteContact(id).subscribe({
      next: (res) => {
        alert("Contact deleted!!!");
      },
      error: console.log,
    });
  }

}

