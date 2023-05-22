import { NgModule } from '@angular/core';

// @angular/materials modules
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

const modules = [
	// @angular/materials
	MatSnackBarModule,
	MatGridListModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatTableModule,
	MatPaginatorModule,
	MatDialogModule,
	MatSelectModule
];
@NgModule({
	imports: modules,
	exports: modules,
})
export class MaterialModule {}
