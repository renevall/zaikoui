import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { LoggerService } from './logger.service';



@NgModule({
    imports: [
        CommonModule // we use ngFor
    ],
    exports: [],
    declarations: [],
    providers: [LoggerService],
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
      }
 }
