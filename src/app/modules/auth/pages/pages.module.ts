import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { UsersComponentsModule } from '../components/components.module';

const usersPages = [LoginComponent];

@NgModule({
	declarations: [...usersPages],
	imports: [SharedModule, UsersComponentsModule],
	exports: [...usersPages],
})
export class UsersPagesModule {}
