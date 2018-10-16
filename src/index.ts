import { NgModule } from '@angular/core';
import { NgxIfArrayEmptyDirective } from './ngx-if-array-empty.directive';
import { NgxIfArrayNotEmptyDirective } from './ngx-if-array-not-empty.directive';


export * from './ngx-if-array-empty.directive';
export * from './ngx-if-array-not-empty.directive';


@NgModule({
    imports: [],
    declarations: [
        NgxIfArrayEmptyDirective,
        NgxIfArrayNotEmptyDirective
    ],
    exports: [
        NgxIfArrayEmptyDirective,
        NgxIfArrayNotEmptyDirective
    ]
})
export class NgxIfArrayEmptyOrNotEmptyModule {
}
