import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[SearchService]
})
export class SharedModule { }
