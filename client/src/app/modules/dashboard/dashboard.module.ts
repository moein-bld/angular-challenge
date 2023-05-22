import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './dashboard-router.module';
import { PagesModule } from './pages/pages.module'

@NgModule({
	declarations: [],
	imports: [CommonModule, SharedModule, AuthRoutingModule, PagesModule],
})
export class DashboardModule {}
