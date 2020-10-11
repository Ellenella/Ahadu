import { Routes } from '@angular/router';
import { StudentregisterComponent } from './student/studentregister/studentregister.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';

import { SelectQuTypeComponent } from './student/select-qu-type/select-qu-type.component';
import { SelectViewResourseComponent } from './student/select-view-resourse/select-view-resourse.component';



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
            path : "quasion" , component : SelectQuTypeComponent,
           // children : [{path : '' , component : RegistorComponent }]
        },
        {
            path : "seresourse" , component : SelectViewResourseComponent,
           // children : [{path : '' , component : RegistorComponent }]
        },
    
    

    {
        path: '',redirectTo: '/login' , pathMatch : 'full'
    }
    
];