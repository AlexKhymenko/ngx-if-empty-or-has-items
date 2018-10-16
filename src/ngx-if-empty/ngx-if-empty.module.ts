import { NgxIfEmptyDirective } from './ngx-if-empty.directive';
import { NgModule } from '@angular/core';

export * from './ngx-if-empty.directive';


@NgModule({
    imports: [
    ],
    declarations: [
        NgxIfEmptyDirective

    ],
    exports: [
        NgxIfEmptyDirective
    ]
})
export class NgxIfEmptyModule {

}
