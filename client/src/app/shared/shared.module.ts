import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';

@NgModule({
	imports: [
        MaterialModule
    ],
	declarations: [],
	providers: [],
	exports: [ 
        MaterialModule
    ],
})
export class SharedModule {}
