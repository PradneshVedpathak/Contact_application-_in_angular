import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxPopUpComponent } from '../dialog-box-pop-up/dialog-box-pop-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) { }
  openDialogBox() {
    this.dialog.open(DialogBoxPopUpComponent, {
      width: '30%'
    });
  }
}
