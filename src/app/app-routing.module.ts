import { NgModule } from '@angular/core/src/metadata';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';

const routes: Routes = [{
    path: 'admin',
    component: AdminComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
