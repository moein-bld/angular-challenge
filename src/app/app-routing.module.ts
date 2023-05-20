import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// () => import('./login/login.module').then(m => m.LoginModule)
const routes: Routes = [
	{
		path: '',
		canActivate: [],
		children: [
			{
				path: 'auth',
				loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
