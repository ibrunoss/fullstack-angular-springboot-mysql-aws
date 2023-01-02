import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
})
export class AppMaterialModule { }
