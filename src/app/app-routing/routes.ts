import { Routes } from '@angular/router';
import { ClassComponent } from '../class/class.component';



export const routes: Routes = [
  { path: 'class',  component: ClassComponent },
  
  { path: '', redirectTo: '/class', pathMatch: 'full' }
  
];