import { NgModule } from '@angular/core';
import {  MatButtonModule,
          MatCheckboxModule,
          MatInputModule,
          MatTableModule,
          MatPaginatorModule,
          MatSortModule,
          MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatCardModule,
            MatListModule
            ],

  exports: [MatButtonModule,
           MatCheckboxModule,
           MatInputModule,
           MatTableModule,
           MatPaginatorModule,
           MatSortModule,
           MatCardModule,
           MatListModule
            ]
})
export class MaterialModule { }
