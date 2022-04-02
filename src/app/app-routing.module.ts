import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'topico1',
    loadChildren: () => import('./components/topico1/topico1/topico1.module').then( m => m.Topico1PageModule)
  }
];

@NgModule({
  imports: [
    //useHash true is necessary for ghpages - IMPORTANT
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
