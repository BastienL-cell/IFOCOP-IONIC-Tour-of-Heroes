import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesPageRoutingModule } from './heroes-routing.module';

import { HeroesPage } from './heroes.page';
import { IonHeaderComponent } from '../ion-header/ion-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesPageRoutingModule
  ],
  declarations: [HeroesPage, IonHeaderComponent]
})
export class HeroesPageModule {}
