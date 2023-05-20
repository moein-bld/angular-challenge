import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'angular-challenge';
	isOnline: boolean;

	constructor(private _snackBar: MatSnackBar) {
		this.isOnline = false;
	}

	public ngOnInit(): void {
		this.updateOnlineStatus();

		window.addEventListener('online', this.updateOnlineStatus.bind(this));
		window.addEventListener('offline', this.updateOnlineStatus.bind(this));

		window.addEventListener('beforeinstallprompt', () => {
			console.log('show add to home screen button');
		});
		window.addEventListener('appinstalled', () => {
			console.log('app installed');
		});
	}

	public updateOnlineStatus(): void {
		this.isOnline = window.navigator.onLine;
		console.info(`isOnline=[${this.isOnline}]`);

		if (!this.isOnline) {
			this._snackBar.open('Check internet access', 'OK', {
				horizontalPosition: 'center',
				verticalPosition: 'top',
				duration: 50000,
				panelClass: ['red-snackbar'],
			});
		}
	}
}
