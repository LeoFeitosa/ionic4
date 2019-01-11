import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutTabsPage } from './layout-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: LayoutTabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../tabs/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'mapa',
        children: [
          {
            path: '',
            loadChildren: '../tabs/mapa/mapa.module#MapaPageModule'
          }
        ]
      },
      {
        path: 'notificacao',
        children: [
          {
            path: '',
            loadChildren: '../tabs/notificacao/notificacao.module#NotificacaoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutTabsPageRoutingModule {}
