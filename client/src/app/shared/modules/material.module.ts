import { NgModule } from '@angular/core';

// @angular/materials modules
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const modules = [
	// @angular/materials
	MatSnackBarModule,
	MatGridListModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
];
@NgModule({
	imports: modules,
	exports: modules,
})
export class MaterialModule {}
