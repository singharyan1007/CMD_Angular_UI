import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentListComponent } from './appointment_feature/appointment-list/appointment-list.component';
import { AppointmentDetailComponent } from './appointment_feature/appointment-detail/appointment-detail.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'appointments',component:AppointmentListComponent,title:"All appointments"},
    {path:'appointments/:id',component:AppointmentDetailComponent}
];
