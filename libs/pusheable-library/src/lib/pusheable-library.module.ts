import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class PusheableLibraryModule {
  library = 'new change to v2';
  breakingChange = 'breaking change';
}
