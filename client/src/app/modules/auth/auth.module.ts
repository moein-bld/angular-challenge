import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-router.module';
import { UsersPagesModule } from './pages/pages.module';

@NgModule({
	imports: [SharedModule, AuthRoutingModule, UsersPagesModule],
	declarations: [],
})
export class AuthModule {}
