import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'folder/Alimentos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./pages/alimentos/alimentos.module').then( m => m.AlimentosPageModule)
  }
=======
    redirectTo: 'alimentos',
    pathMatch: 'full'
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./pages/alimentos/alimentos.module').then( m => m.AlimentosPageModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./pages/receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
  {
    path: 'estoque',
    loadChildren: () => import('./pages/estoque/estoque.module').then( m => m.EstoquePageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pages/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'perdas',
    loadChildren: () => import('./pages/perdas/perdas.module').then( m => m.PerdasPageModule)
  },
>>>>>>> c8f2db6fee223d5edbde9cb1ee35b07b9596a8d3
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
