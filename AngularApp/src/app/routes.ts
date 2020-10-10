import { Routes } from '@angular/router';
import { StudentregisterComponent } from './student/studentregister/studentregister.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';



export const appRoutes : Routes = [
  
        {
            path : "main" , component : StudentregisterComponent,
           // children : [{path : '' , component : RegistorComponent }]
        },
        {
            path : "login" , component : StudentloginComponent,
           // children : [{path : '' , component : RegistorComponent }]
        },
        {
            path : "home" , component : StudenthomeComponent,
           // children : [{path : '' , component : RegistorComponent }]
        },
    

    {
        path: '',redirectTo: '/login' , pathMatch : 'full'
    }
    
];