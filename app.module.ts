
import { LoginUser } from './login-user.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



import { StarterModule } from './starter/starter.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { EventComponent } from 'src/app/event/event.component';
import { TablelockComponent } from 'src/app/tablelock/tablelock.component';
//import { ModalComponent } from './_modal/modal.component';
import { ModalModule } from 'src/app/_modal';



import { LocksComponent } from './locks/locks.component';
import { GooutComponent } from './goout/goout.component';

import { UnderconComponent } from './undercon/undercon.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { DepartComponent } from './depart/depart.component';
import { NewempComponent } from './newemp/newemp.component';
import { PwdchangeComponent } from './pwdchange/pwdchange.component';
import { Dwr016Component } from './IE/dwr016/dwr016.component';
import { NorightsComponent } from './norights/norights.component';
import { GoogleChartsModule,GoogleChartsConfig } from 'angular-google-charts';
import { Hr803Component } from './dashboard/hr803/hr803.component';
import { CostsComponent } from './dashboard/costs/costs.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { PmmainComponent } from './pmsystem/pmmain/pmmain.component';
import { CaleventComponent } from './calevent/calevent.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CaleditComponent } from './calevent/caledit/caledit.component';
import { PmschComponent } from './pmsystem/pmsch/pmsch.component';
import { PmscheditComponent } from './pmsystem/pmsch/pmschedit/pmschedit.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatExpansionModule} from '@angular/material/expansion';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DataTablesModule } from "angular-datatables";
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

import { MdePopoverModule } from '@material-extended/mde';
import { PmprogComponent } from './pmsystem/pmprog/pmprog.component';
import { SvserverComponent } from './event/svserver/svserver.component';
import { SveditComponent } from './event/svedit/svedit.component';
import { MpstockComponent } from './mpsystem/mpstock/mpstock.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { PersonalComponent } from './personal/personal.component';
import { AdminComponent } from './login/admin/admin.component';
import { PmvietComponent } from './pmsystem/pmviet/pmviet.component';
//import { ToastrModule } from 'ngx-toastr';  //這個不能用
import { NgDragDropModule } from 'ng-drag-drop';
import { PmsubsysComponent } from './pmsystem/pmsubsys/pmsubsys.component';
import { PmsubeditComponent } from './pmsystem/pmsubsys/pmsubedit/pmsubedit.component';
import { PmsubdelComponent } from './pmsystem/pmsubsys/pmsubdel/pmsubdel.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { Woi111Component } from './pmsystem/pmprog/woi111/woi111.component';
import { PmcarouselComponent } from './pmsystem/pmcarousel/pmcarousel.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

//import { ModalComponent } from './service/modal/modal.component';  //@angular/common/https 爬文的語法, 但找不到
const modules = [
  FormsModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,ModalModule,
  MatTooltipModule,MatTabsModule,

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SpinnerComponent,
    EventComponent,
    LocksComponent,
    GooutComponent,
    UnderconComponent,
    AddPostDialogComponent,
    DepartComponent,
    NewempComponent,
    PwdchangeComponent,
    Dwr016Component,
    NorightsComponent,
    Hr803Component,
    CostsComponent,
    ChartsComponent,
    PmmainComponent,
    CaleventComponent,
    CaleditComponent,
    PmschComponent,
    PmscheditComponent,
    PmprogComponent,
    SvserverComponent,
    SveditComponent,
    TablelockComponent,
    MpstockComponent,
    ProfileComponent,
    TestComponent,
    PersonalComponent,
    AdminComponent,
    PmvietComponent,
    PmsubsysComponent,
    PmsubeditComponent,
    PmsubdelComponent,
    Woi111Component,
    PmcarouselComponent,







    //ModalComponent, //1026

  //  ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StarterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,ModalModule,MatSelectModule,BrowserAnimationsModule,MatButtonModule,
    MatTooltipModule,GoogleChartsModule,MatTabsModule,MatCardModule,
    FullCalendarModule,DragDropModule ,MatButtonToggleModule,CdkTableModule,MatTableModule
    ,OverlayModule,DataTablesModule,MatExpansionModule, MatMenuModule,MatIconModule,NgDragDropModule.forRoot(),
    MdePopoverModule,InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true })
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,BrowserAnimationsModule,MatButtonModule,AddPostDialogComponent,MatTabsModule,MatCardModule,DragDropModule
    ,FullCalendarModule ,MatButtonToggleModule,CdkTableModule,MatTableModule
    ,OverlayModule,DataTablesModule,MatExpansionModule, MatMenuModule,MatIconModule ,GoogleChartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true,
    }
  ],
  bootstrap: [AppComponent],


})
export class AppModule {


}
