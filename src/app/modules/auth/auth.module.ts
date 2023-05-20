import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-router.module';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
