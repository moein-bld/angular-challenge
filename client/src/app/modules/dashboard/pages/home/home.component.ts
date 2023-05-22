import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface UserData {
	id: string;
	username: string;
	email: string;
	status: boolean;
	date: string;
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

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(public dialog: MatDialog) {
		// Create 100 users
		const users = Array.from({ length: 10 }, (_, k) => createNewUser(k + 1));

		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(users);
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

}

function createNewUser(id: number): UserData {
	const startDate = new Date('2022-01-01');
	const endDate = new Date('2023-01-01');
	const randomTime = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())).toLocaleDateString();
	return {
		id: id.toString(),
		username: NAMES[Math.round(Math.random() * (FRUITS.length - 1))],
		email: `test-${id}@gmail.com`,
		status: Boolean(Math.round(Math.random())),
		date: randomTime,
	};
}
