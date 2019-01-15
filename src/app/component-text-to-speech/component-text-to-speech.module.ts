import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentTextToSpeechPage } from './component-text-to-speech.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

const routes: Routes = [
  {
    path: '',
    component: ComponentTextToSpeechPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [TextToSpeech],
  declarations: [ComponentTextToSpeechPage]
})
export class ComponentTextToSpeechPageModule { }
