import { Routes } from '@angular/router';
import { ClassComponent } from '../class/class.component';
import { ClassdetailComponent } from '../classdetail/classdetail.component';
import { CoverpageComponent } from '../coverpage/coverpage.component';
import { DashBoardComponent } from '../dash-board/dash-board.component';


export const routes: Routes = [
  { path:'learn-box',component:CoverpageComponent},
  { path: 'dashboard',  component: DashBoardComponent },
  { path: 'class',component:ClassComponent},
  { path: 'classdetail/:id',   component: ClassdetailComponent},
  { path: '', redirectTo: '/learn-box', pathMatch: 'full' }
  
];