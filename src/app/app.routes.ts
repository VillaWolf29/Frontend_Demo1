import { Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer-component/customer-componente';
import { SupplierComponent } from './pages/supplier-component/supplier-componente';
import { ProjectComponent } from './pages/project-component/project-component';
import { MaterialComponente } from './pages/material-component/material-componente';
import { ProjectEditComponent } from './pages/project-component/project-edit-componente/project-edit-componente';
import { CustomerEditComponent } from './pages/customer-component/customer-edit-componente/customer-edit-componente';
import { SupplierEditComponent } from './pages/supplier-component/supplier-edit-componente/supplier-edit-componente';
import { MaterialEditComponent } from './pages/material-component/material-edit-componente/material-edit-componente';



export const routes: Routes = [
    {
        path: 'pages/customer', component: CustomerComponent,
        children: [
            { path: 'new', component: CustomerEditComponent },
            { path: 'edit/:id', component: CustomerEditComponent }
        ]
    },
    { path: 'pages/supplier', component: SupplierComponent,
        children: [
            { path: 'new', component: SupplierEditComponent },
            { path: 'edit/:id', component: SupplierEditComponent }
        ]
    },
    {
        path: 'pages/project', component: ProjectComponent,
        children: [
            { path: 'new', component: ProjectEditComponent },
            { path: 'edit/:id', component: ProjectEditComponent }
        ]
    },
    {
        path: 'pages/material', component: MaterialComponente,
        children: [
            { path: 'new', component: MaterialEditComponent },
            { path: 'edit/:id', component: MaterialEditComponent }
        ]
    }
];
