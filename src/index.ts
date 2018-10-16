import { NgModule } from '@angular/core';
import { NgxIfEmptyModule } from './ngx-if-empty/ngx-if-empty.module';
import { NgxIfHasElementsModule } from './ngx-if-not-empty/ngx-if-has-elements.module';


export * from './ngx-if-empty/ngx-if-empty.module';
export * from './ngx-if-not-empty/ngx-if-has-elements.module';


@NgModule({
    imports: [
        NgxIfEmptyModule,
        NgxIfHasElementsModule
    ],
    declarations: [],
    exports: [
        NgxIfEmptyModule,
        NgxIfHasElementsModule
    ]
})
export class NgxIfEmptyOrHasElementsModule {
}
