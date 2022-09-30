import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from './component/dictionary/dictionary.component';
import {DictionaryDetailComponent} from './component/dictionary-detail/dictionary-detail.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductUpdateComponent} from './component/product-update/product-update.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';

const routes: Routes = [
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'dictionary/:word', component: DictionaryDetailComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/edit/:id', component: ProductUpdateComponent},
  {path: 'product/create', component:ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
