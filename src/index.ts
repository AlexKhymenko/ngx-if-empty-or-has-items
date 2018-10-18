import { NgModule } from '@angular/core';
import { NgxIfEmptyModule } from './ngx-if-empty/ngx-if-empty.module';
import { NgxIfHasItemsModule } from './ngx-if-has-elements/ngx-if-has-items.module';
import { NgxIfNotEmptyModule } from './ngx-if-not-empty/ngx-if-not-empty.module';


export * from './ngx-if-empty/ngx-if-empty.module';
export * from './ngx-if-has-elements/ngx-if-has-items.module';
export * from './ngx-if-not-empty/ngx-if-not-empty.module';


@NgModule({
    imports: [
        NgxIfEmptyModule,
        NgxIfHasItemsModule,
        NgxIfNotEmptyModule
    ],
    exports: [
        NgxIfEmptyModule,
        NgxIfHasItemsModule,
        NgxIfNotEmptyModule
    ]
})
export class NgxIfEmptyOrHasItemsModule {
}
