import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
