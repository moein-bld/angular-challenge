import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let snackBar: MatSnackBar;

	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, MatSnackBarModule],
			declarations: [AppComponent],
		}),
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		snackBar = TestBed.inject(MatSnackBar);
		fixture.detectChanges();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should call updateOnlineStatus on ngOnInit', () => {
		spyOn(component, 'updateOnlineStatus');
		component.ngOnInit();
		expect(component.updateOnlineStatus).toHaveBeenCalled();
	});

	it('should update isOnline to true when online', () => {
		spyOnProperty(window.navigator, 'onLine').and.returnValue(true);
		component.updateOnlineStatus();
		expect(component.isOnline).toBeTrue();
	});

	it('should update isOnline to false when offline and show snackbar', fakeAsync(() => {
		spyOnProperty(window.navigator, 'onLine').and.returnValue(false);
		spyOn(snackBar, 'open');
		component.updateOnlineStatus();
		tick();
		expect(component.isOnline).toBeFalse();
		expect(snackBar.open).toHaveBeenCalledWith('Check internet access', 'OK', {
			horizontalPosition: 'center',
			verticalPosition: 'top',
			duration: 50000,
			panelClass: ['red-snackbar'],
		});
	}));

	it('should add event listeners on ngOnInit', () => {
		spyOn(window, 'addEventListener');
		component.ngOnInit();
		expect(window.addEventListener).toHaveBeenCalledTimes(4);
		expect(window.addEventListener).toHaveBeenCalledWith('online', jasmine.any(Function));
		expect(window.addEventListener).toHaveBeenCalledWith('offline', jasmine.any(Function));
		expect(window.addEventListener).toHaveBeenCalledWith('beforeinstallprompt', jasmine.any(Function));
		expect(window.addEventListener).toHaveBeenCalledWith('appinstalled', jasmine.any(Function));
	});

	it(`should have as title 'angular-challenge'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('angular-challenge');
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.content span')?.textContent).toContain('angular-challenge app is running!');
	});
});
