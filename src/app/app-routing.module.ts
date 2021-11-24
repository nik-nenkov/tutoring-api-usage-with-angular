import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatsPageComponent} from "./component/cats-page/cats-page.component";

const routes: Routes = [
  {path: 'cats', component: CatsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
