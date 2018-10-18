import { NgModule } from '@angular/core';
import { NgxIfEmptyModule } from './ngx-if-empty/ngx-if-empty.module';
import { NgxIfHasElementsModule } from './ngx-if-has-elements/ngx-if-has-elements.module';
import { NgxIfNotEmptyModule } from './ngx-if-not-empty/ngx-if-not-empty.module';


export * from './ngx-if-empty/ngx-if-empty.module';
export * from './ngx-if-has-elements/ngx-if-has-elements.module';
export * from './ngx-if-not-empty/ngx-if-not-empty.module';


@NgModule({
    imports: [
        NgxIfEmptyModule,
        NgxIfHasElementsModule,
        NgxIfNotEmptyModule
    ],
    exports: [
        NgxIfEmptyModule,
        NgxIfHasElementsModule,
        NgxIfNotEmptyModule
    ]
})
export class NgxIfEmptyOrHasElementsModule {
}
