import { NgModule } from '@angular/core';

// @angular/materials modules
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	imports: [
		// @angular/materials
		MatSnackBarModule,
		MatGridListModule
	],
	exports: [
		// @angular/materials
		MatSnackBarModule,
		MatGridListModule
	],
})
export class MaterialModule {}
