import { Routes } from '@angular/router';
import { ClassComponent } from '../class/class.component';
import { ClassdetailComponent } from '../classdetail/classdetail.component';



export const routes: Routes = [

  { path: 'classess',  component: ClassComponent },
  { path: 'classdetail',   component: ClassdetailComponent},
  { path: '', redirectTo: '/classdetail', pathMatch: 'full' }
  
];