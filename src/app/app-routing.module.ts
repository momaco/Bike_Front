import { NgModule } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {

    path: 'admin',
    component: AdminComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
