import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZodiacListComponent } from './zodiac-list/zodiac-list.component';
import { OriginComponent } from './origin/origin.component';
import { WhichComponent } from './which/which.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: 'origin',
      component: OriginComponent
  },
  {
    path: 'which',
    component: WhichComponent
  },
  {
    path: 'zodiac-list',
    component: ZodiacListComponent
  }
];

@NgModule({
  declarations: [
    ZodiacListComponent,
    OriginComponent,
    WhichComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ]
})
export class ZodiacModule { }
