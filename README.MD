# ngx-if-empty-or-has-elements

ngxIfEmpty - It Checks if value is an empty object, collection, map, or set.

ngxIfNotEmpty, ngxIfHasElements - It Checks if value is an NOT empty object, collection, map, or set.

## Installation

To install this library, run:

```bash
$ npm install ngx-if-empty-or-has-elements --save



make sure You have lodash installed also
```

## Consuming your library

You can import your library in any Angular application by running:

```bash
$ npm install ngx-if-empty-or-has-elements


 make sure You have lodash installed also

```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxIfEmptyOrHasElementsModule } from 'ngx-if-empty-or-has-elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgxIfEmptyOrHasElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


SharedModule

If you use a SharedModule that you import in multiple other feature modules, you can export the NgxIfEmptyOrHasElementsModule to make sure you don't have to import it in every module.
```typescript
@NgModule({
    exports: [
        CommonModule,
        NgxIfEmptyOrHasElementsModule
    ]
})
export class SharedModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:
This is helper library it uses the same functionality as ngIf but under the hood it uses isEmpty from lodash.

It Checks if value is an empty object, collection, map, or set.

```xml
<!-- You can now use your library component in app.component.html -->
arr = []
arrayWithData = []

<h1 *ngxIfEmpty="arr">
   You will see this text
</h1>

<h1 *ngxIfNotEmpty="arrayWithData">
  You will see it
</h1>

<h1 *ngxIfHasElements="arrayWithData">
   You will see it
</h1>
```

You can also load only ngxIfEmptyModule or ngxIfHasElementsModule seperately 
@NgModule({
    exports: [
        CommonModule,
        NgxIfEmptyModule,
        NgxIfHasElementsModule
    ]
})
export class SharedModule { }

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Oleksandr Khymenko](mailto:alexanderkhymenko@gmail.com)
