import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LayoutTabsPageRoutingModule } from './layout-tabs.router.module';

import { LayoutTabsPage } from './layout-tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LayoutTabsPageRoutingModule
  ],
  declarations: [LayoutTabsPage]
})
export class LayoutTabsPageModule {}
