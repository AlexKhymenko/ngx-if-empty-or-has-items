# ngx-if-array-empty

## Installation

To install this library, run:

```bash
$ npm install ngx-if-empty-or-has-elements --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-if-empty-or-has-elements
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

If you use a SharedModule that you import in multiple other feature modules, you can export the NgxPermissionsModule to make sure you don't have to import it in every module.
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

```xml
<!-- You can now use your library component in app.component.html -->
<h1 *ngIfEmpty="arr">
  {{title}}
</h1>

<h1 *ngIfNotEmpty="arr">
  {{title}}
</h1>

<h1 *ngIfHasElements="arr">
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

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
