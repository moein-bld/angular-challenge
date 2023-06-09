import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface UserData {
	id: number;
	username: string;
	email: string;
	status: boolean;
	date: string;
	role: 'User' | 'Admin';
}

export interface UserGroup {
	users: UserData[];
}

const userDataSource: UserData[] = [
	{ id: 1, username: 'Maia', email: 'test-1@gmail.com', status: false, date: '11/9/2022', role: 'User' },
	{ id: 2, username: 'Olivia', email: 'test-2@gmail.com', status: false, date: '1/10/2022', role: 'User' },
	{ id: 3, username: 'Amelia', email: 'test-3@gmail.com', status: true, date: '11/6/2022', role: 'User' },
	{ id: 4, username: 'Jack', email: 'test-4@gmail.com', status: false, date: '6/19/2022', role: 'User' },
	{ id: 5, username: 'Isla', email: 'test-5@gmail.com', status: true, date: '9/11/2022', role: 'User' },
	{ id: 6, username: 'Oliver', email: 'test-6@gmail.com', status: false, date: '3/1/2022', role: 'User' },
	{ id: 7, username: 'Jasper', email: 'test-7@gmail.com', status: true, date: '3/2/2022', role: 'User' },
	{ id: 8, username: 'Violet', email: 'test-8@gmail.com', status: false, date: '4/17/2022', role: 'User' },
	{ id: 9, username: 'Mia', email: 'test-9@gmail.com', status: false, date: '9/9/2022', role: 'User' },
	{ id: 10, username: 'Elizabeth', email: 'test-10@gmail.com', status: false, date: '1/9/2022', role: 'User' },
];

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
	displayedColumns: string[] = ['id', 'username', 'email', 'role', 'status', 'date', 'actions'];
	dataSource: MatTableDataSource<UserData>;
	type: string;
	show: boolean;
	userGroupForm: FormGroup;
	counter: number;

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(public dialog: MatDialog, private fb: FormBuilder) {
		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(userDataSource);

		this.type = '';

		this.show = false;

		this.counter = 10;

		this.userGroupForm = this.fb.group({
			users: this.fb.array([this.createForm()]),
		});
	}

	get usersForm(): FormArray {
		return this.userGroupForm.get('users') as FormArray;
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(value: string) {
		
		this.dataSource.filter = value.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	filterWithEmail(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.applyFilter(filterValue)
	}

	filterWithRole(value: 'User' | 'Admin' | '') {
		this.applyFilter(value)
	}

	filterWithDatePicker(event: any) {
		let date = new Date((event.target as HTMLInputElement).value).toLocaleDateString()
		this.applyFilter(date)
	}

	goToTop() {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	}

	openCreate() {
		this.type = 'create';
		this.show = true;
		this.resetItems();
	}

	openEdit(row: UserData) {
		const isExist = this.usersForm.controls.some(item => item.value.id === row.id);
		if (isExist) return;

		if (this.type === 'create' || this.type === '') this.usersForm.clear();

		this.type = 'edit';
		this.show = true;
		this.usersForm.push(this.createForm(row));

		this.goToTop()
	}

	addRow(event: Event) {
		event.preventDefault();
		if (this.usersForm.length < 20) this.usersForm.push(this.createForm());
	}

	deleteRowInForm(i: number) {
		this.usersForm.removeAt(i)
	}

	createForm(row?: UserData): FormGroup {
		if (row)
			return this.fb.group({
				id: row.id,
				username: [row.username, Validators.required],
				email: [row.email, [Validators.required, Validators.email]],
				status: row.status,
				date: row.date,
				role: row.role,
			});

		this.counter++;
		return this.fb.group({
			id: this.counter,
			username: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			status: true,
			date: new Date().toLocaleDateString(),
			role: 'User',
		});
	}

	resetItems() {
		this.usersForm.clear();
		this.usersForm.push(this.createForm());
	}

	createOrUpdate(type: string) {
		if (this.usersForm.valid) {
			if (type === 'edit') {
				const map = new Map();

				this.dataSource.data = this.dataSource.data.concat(this.usersForm.value);

				for (const tag of this.dataSource.data) {
					map.set(tag.id, tag);
				}

				const final = [...map.values()];
				this.dataSource.data = final;

				this.dataSource._updateChangeSubscription();

				this.resetItems()
			} else if (type === 'create') {
				this.usersForm.value.forEach((item: UserData) => {
					this.dataSource.data.push(item);
				});
				this.dataSource._updateChangeSubscription();
				this.resetItems();
			}
		}
	}

	deleteRow(row: UserData) {
		this.dataSource.data = this.dataSource.data.filter(item => item.id !== row.id)
		this.dataSource._updateChangeSubscription();
	}
}
