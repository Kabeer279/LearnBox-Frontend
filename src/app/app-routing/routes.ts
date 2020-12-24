import { Routes } from '@angular/router';
import { ClassComponent } from '../class/class.component';
import { ClassdetailComponent } from '../classdetail/classdetail.component';
import { DashBoardComponent } from '../dash-board/dash-board.component';



export const routes: Routes = [

  { path: 'dashboard',  component: DashBoardComponent },
  { path: 'classdetail/:id',   component: ClassdetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  
];