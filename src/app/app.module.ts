import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';


import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassComponent } from './class/class.component';
import { ClassdetailComponent } from './classdetail/classdetail.component';
import { ClassHeaderComponent } from './classdetail/class-header/class-header.component';
import { StreamComponent } from './classdetail/stream/stream.component';
import { ClassService } from './services/class.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserAccountService } from './services/userAccount.service';
import { SignupComponent } from './signup/signup.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CreateclassformComponent } from './class/createclassform/createclassform.component';
import { JoinClassFormComponent } from './class/join-class-form/join-class-form.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { HeaderComponent } from './dash-board/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ClassdetailComponent,
    ClassHeaderComponent,
    StreamComponent,
    LoginComponent,
    SignupComponent,
    DashBoardComponent,
    CreateclassformComponent,
    JoinClassFormComponent,
    CoverpageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule ,
    FormsModule ,
    ReactiveFormsModule ,

    BrowserAnimationsModule
  ],
  providers: [ClassService,UserAccountService],
  bootstrap: [AppComponent],
  entryComponents:
   [
    ClassComponent
   ],
})
export class AppModule { }
