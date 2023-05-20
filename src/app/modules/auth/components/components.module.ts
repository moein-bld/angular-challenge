import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const usersComponents = [LoginFormComponent];

@NgModule({
	imports: [
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [...usersComponents],
	exports: [...usersComponents],
})
export class UsersComponentsModule {}
