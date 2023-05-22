import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard/home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
