import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

const usersPages = [HomeComponent];

@NgModule({
	declarations: [...usersPages],
	imports: [CommonModule, SharedModule, ReactiveFormsModule],
	exports: [...usersPages],
})
export class PagesModule {}
