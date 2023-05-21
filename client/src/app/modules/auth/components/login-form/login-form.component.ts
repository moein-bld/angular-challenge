import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'mb-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
	constructor() {
		this.error = '';
	}

	form: FormGroup = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});

	submit() {
		if (this.form.valid) {
			this.submitEM.emit(this.form.value);
		}
	}
	@Input() error: string | null;

	@Output() submitEM = new EventEmitter();
}
