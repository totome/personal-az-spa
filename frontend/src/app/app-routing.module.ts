import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContentViewComponent } from './content-view/content-view.component';


const routes: Routes = [
    { path: '', redirectTo: '/main-view/bio', pathMatch: 'full' },
    { path: 'main-view/:id', component: ContentViewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
