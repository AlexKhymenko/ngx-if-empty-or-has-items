import { NgModule } from '@angular/core';
import { NgxIfHasElementsDirective } from './ngx-if-has-elements.directive';
import { NgxIfNotEmptyDirective } from './ngx-if-not-empty.directive';


export * from './ngx-if-not-empty.directive'
@NgModule({
    imports: [
    ],
    declarations: [
        NgxIfNotEmptyDirective

    ],
    exports: [
        NgxIfNotEmptyDirective
    ]
})
export class NgxIfNotEmptyModule {

}
