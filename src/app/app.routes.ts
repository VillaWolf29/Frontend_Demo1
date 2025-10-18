import { Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer-component/customer-componente';
import { SupplierComponent } from './pages/supplier-component/supplier-componente';
import { ProjectComponent } from './pages/project-component/project-component';
import { ProjectEditComponent } from './pages/project-component/project-edit-componente/project-edit-componente';
import { CustomerEditComponent } from './pages/customer-component/customer-edit-componente/customer-edit-componente';

export const routes: Routes = [
    {
        path: 'pages/customer', component: CustomerComponent,
        children: [
            { path: 'new', component: CustomerEditComponent },
            { path: 'edit/:id', component: CustomerEditComponent }
        ]
    },
    { path: 'pages/supplier', component: SupplierComponent },
    {
        path: 'pages/project', component: ProjectComponent,
        children: [
            { path: 'new', component: ProjectEditComponent },
            { path: 'edit/:id', component: ProjectEditComponent }
        ]
    }
];
