import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxPopUpComponent } from './dialog-box-pop-up.component';

describe('DialogBoxPopUpComponent', () => {
  let component: DialogBoxPopUpComponent;
  let fixture: ComponentFixture<DialogBoxPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogBoxPopUpComponent]
    });
    fixture = TestBed.createComponent(DialogBoxPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
