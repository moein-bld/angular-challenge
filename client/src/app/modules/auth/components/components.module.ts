import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { CommonModule } from '@angular/common';

const usersComponents = [LoginFormComponent];

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [...usersComponents],
	exports: [...usersComponents],
})
export class UsersComponentsModule {}
