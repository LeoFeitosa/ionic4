import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'instalacao', loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
  { path: 'layout-header-footer', loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
  { path: 'layout-tabs', loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layout-menu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layout-split', loadChildren: './layout-split/layout-split.module#LayoutSplitPageModule' },
  { path: 'layout-grid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },
  { path: 'layout-css-utilities', loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'component-action-sheet', loadChildren: './component-action-sheet/component-action-sheet.module#ComponentActionSheetPageModule' },
  { path: 'component-alert', loadChildren: './component-alert/component-alert.module#ComponentAlertPageModule' },
  { path: 'component-alert', loadChildren: './component-alert/component-alert.module#ComponentAlertPageModule' },
  { path: 'component-badges', loadChildren: './component-badges/component-badges.module#ComponentBadgesPageModule' },
  { path: 'component-button', loadChildren: './component-button/component-button.module#ComponentButtonPageModule' },
  { path: 'component-card', loadChildren: './component-card/component-card.module#ComponentCardPageModule' },
  { path: 'component-checkbox', loadChildren: './component-checkbox/component-checkbox.module#ComponentCheckboxPageModule' },
  { path: 'component-radio', loadChildren: './component-radio/component-radio.module#ComponentRadioPageModule' },
  { path: 'component-datetime', loadChildren: './component-datetime/component-datetime.module#ComponentDatetimePageModule' },
  { path: 'component-fab', loadChildren: './component-fab/component-fab.module#ComponentFabPageModule' },
  { path: 'component-input', loadChildren: './component-input/component-input.module#ComponentInputPageModule' },
  { path: 'component-list', loadChildren: './component-list/component-list.module#ComponentListPageModule' },
  { path: 'component-loading', loadChildren: './component-loading/component-loading.module#ComponentLoadingPageModule' },
  { path: 'component-modal', loadChildren: './component-modal/component-modal.module#ComponentModalPageModule' },
  { path: 'component-modal-interno', loadChildren: './component-modal-interno/component-modal-interno.module#ComponentModalInternoPageModule' },
  { path: 'component-range', loadChildren: './component-range/component-range.module#ComponentRangePageModule' },
  { path: 'component-select', loadChildren: './component-select/component-select.module#ComponentSelectPageModule' },
  { path: 'component-slide', loadChildren: './component-slide/component-slide.module#ComponentSlidePageModule' },  { path: 'component-spinner', loadChildren: './component-spinner/component-spinner.module#ComponentSpinnerPageModule' },
  { path: 'component-toast', loadChildren: './component-toast/component-toast.module#ComponentToastPageModule' },
  { path: 'component-infinit-scroll', loadChildren: './component-infinit-scroll/component-infinit-scroll.module#ComponentInfinitScrollPageModule' },
  { path: 'component-popover', loadChildren: './component-popover/component-popover.module#ComponentPopoverPageModule' },
  { path: 'component-refresher', loadChildren: './component-refresher/component-refresher.module#ComponentRefresherPageModule' },
  { path: 'component-searchbar', loadChildren: './component-searchbar/component-searchbar.module#ComponentSearchbarPageModule' },
  { path: 'component-toggle', loadChildren: './component-toggle/component-toggle.module#ComponentTogglePageModule' },
  { path: 'api-externa', loadChildren: './api-externa/api-externa.module#ApiExternaPageModule' },
  { path: 'animacoes', loadChildren: './animacoes/animacoes.module#AnimacoesPageModule' },
  { path: 'componentes-nativos', loadChildren: './componentes-nativos/componentes-nativos.module#ComponentesNativosPageModule' },
  { path: 'component-nativo-camera', loadChildren: './component-nativo-camera/component-nativo-camera.module#ComponentNativoCameraPageModule' },
  { path: 'component-text-to-speech', loadChildren: './component-text-to-speech/component-text-to-speech.module#ComponentTextToSpeechPageModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
