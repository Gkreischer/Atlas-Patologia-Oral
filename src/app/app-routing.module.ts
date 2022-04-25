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
  },  {
    path: 'topico2',
    loadChildren: () => import('./components/topico2/topico2.module').then( m => m.Topico2PageModule)
  },
  {
    path: 'topico3',
    loadChildren: () => import('./components/topico3/topico3.module').then( m => m.Topico3PageModule)
  },
  {
    path: 'topico4',
    loadChildren: () => import('./components/topico4/topico4.module').then( m => m.Topico4PageModule)
  },
  {
    path: 'topico5',
    loadChildren: () => import('./components/topico5/topico5.module').then( m => m.Topico5PageModule)
  },
  {
    path: 'topico6',
    loadChildren: () => import('./components/topico6/topico6.module').then( m => m.Topico6PageModule)
  },
  {
    path: 'topico7',
    loadChildren: () => import('./components/topico7/topico7.module').then( m => m.Topico7PageModule)
  },
  {
    path: 'topico8',
    loadChildren: () => import('./components/topico8/topico8.module').then( m => m.Topico8PageModule)
  },
  {
    path: 'topico9',
    loadChildren: () => import('./components/topico9/topico9.module').then( m => m.Topico9PageModule)
  },
  {
    path: 'topico10',
    loadChildren: () => import('./components/topico10/topico10.module').then( m => m.Topico10PageModule)
  },
  {
    path: 'topico11',
    loadChildren: () => import('./components/topico11/topico11.module').then( m => m.Topico11PageModule)
  },
  {
    path: 'topico12',
    loadChildren: () => import('./components/topico12/topico12.module').then( m => m.Topico12PageModule)
  },
  {
    path: 'topico13',
    loadChildren: () => import('./components/topico13/topico13.module').then( m => m.Topico13PageModule)
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
