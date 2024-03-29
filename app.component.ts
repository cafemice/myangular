import { AppModule } from './app.module';


import { tokenName } from '@angular/compiler';
import { Component, OnInit, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { GetuxsService } from 'src/app/services/getuxs.service';
import { TouchSequence } from 'selenium-webdriver';
import { SharedataService } from './services/sharedata.service';

import { ViewChild, TemplateRef } from '@angular/core';  //20221129
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('secondDialog') secondDialog: TemplateRef<any>;
  title = '';
  observable = Observable.create((observer) => {
    observer.next('Begin subscription to observer')

    setTimeout(() => {
      observer.next('Update in data')
    }, 3000)

    setTimeout(() => {
      observer.complete()
    }, 5000)

  })
 data:any;

  constructor(private dialog:MatDialog,private service:GetuxsService ,public sharedatasvr:SharedataService,private router:Router){}


  ngOnInit() {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
    localStorage.removeItem('UserName');
    localStorage.clear();
   // this.sharedatasvr.setmenu=this.listmenu()
     //console.log('app_component'+this.listmenu())
   // GlobalComponent.menucontent=this.listmenu();
  //  console.log('GlobalComponent.menucontent:'+GlobalComponent.menucontent)



  }

  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }

  openOtherDialog() {
    this.dialog.open(this.secondDialog);
  }

}


