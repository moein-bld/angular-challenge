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
}

export interface UserGroup {
	users: UserData[];
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = ['blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'];
const NAMES: string[] = [
	'Maia',
	'Asher',
	'Olivia',
	'Atticus',
	'Amelia',
	'Jack',
	'Charlotte',
	'Theodore',
	'Isla',
	'Oliver',
	'Isabella',
	'Jasper',
	'Cora',
	'Levi',
	'Violet',
	'Arthur',
	'Mia',
	'Thomas',
	'Elizabeth',
];

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
	displayedColumns: string[] = ['id', 'username', 'email', 'status', 'date'];
	dataSource: MatTableDataSource<UserData>;
	type: string;
	show: boolean;
	userGroupForm: FormGroup;
	conditions = [
		{
			value: true,
			viewValue: 'active',
		},
		{
			value: false,
			viewValue: 'Inactive',
		},
	];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(public dialog: MatDialog, private fb: FormBuilder) {
		// Create 10 users
		const users = Array.from({ length: 12 }, (_, k) => createNewUser(k + 1));

		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(users);

		this.type = '';

		this.show = false;

		this.userGroupForm = this.fb.group({
			users: this.fb.array([this.createUser()]),
		});
	}

	createUser(): FormGroup {
		return this.fb.group({
			id: Math.floor(Math.random() * 100),
			username: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			status: true,
			date: new Date().toLocaleDateString(),
		});
	}

	get usersForm(): FormArray {
		return this.userGroupForm.get('users') as FormArray;
	}

	resetItems() {
		const items = this.userGroupForm.get('users') as FormArray;
		items.clear()
		items.push(this.createUser())
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	openCreate() {
		this.type = 'create';
		this.show = true;
	}

	addRow(event: Event) {
		event.preventDefault();
		if (this.usersForm.length < 20) this.usersForm.push(this.createUser());
	}

	createOrUpdate() {
		if (this.usersForm.valid) {
			this.usersForm.value.forEach((item: UserData) => {
				this.dataSource.data.push(item);
			});
			this.dataSource._updateChangeSubscription();
			this.resetItems()
		}
	}
}

function createNewUser(id: number): UserData {
	const startDate = new Date('2022-01-01');
	const endDate = new Date('2023-01-01');
	const randomTime = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())).toLocaleDateString();
	return {
		id: id,
		username: NAMES[Math.round(Math.random() * (FRUITS.length - 1))],
		email: `test-${id}@gmail.com`,
		status: Boolean(Math.round(Math.random())),
		date: randomTime,
	};
}
