import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
