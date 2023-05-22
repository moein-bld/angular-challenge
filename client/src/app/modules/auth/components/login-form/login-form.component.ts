import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'mb-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
	constructor(private router: Router) {
		this.error = '';
	}

	form: FormGroup = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});

	submit() {
		// if (this.form.valid) {
		// 	this.submitEM.emit(this.form.value);
		// }
		console.log('login');
		this.router.navigate(['/forgot-password'])
	}
	@Input() error: string | null;

	@Output() submitEM = new EventEmitter();
}
