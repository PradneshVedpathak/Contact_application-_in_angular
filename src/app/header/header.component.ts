import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxPopUpComponent } from '../dialog-box-pop-up/dialog-box-pop-up.component';
import { ShowContactsService } from '../services/show-contacts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog, private api: ShowContactsService) { }
  openDialogBox() {
    this.dialog.open(DialogBoxPopUpComponent, {
      width: '30%'
    }).afterClosed().subscribe({
      next: (val) => {
        if(val){
          
        }
      }
    })
      
  }
}
