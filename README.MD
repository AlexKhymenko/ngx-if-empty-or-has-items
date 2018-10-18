# ngx-if-empty-or-has-items
This is support library just to help You answer this question 'in angular template how to check if object is empty', 
'in angular template how to check if array is empty'.

**_ngxIfEmpty_** - It Checks if value is an empty object, collection, map, or set.

**_ngxIfNotEmpty_**, _**ngxIfHasItems**_ - It Checks if value is an NOT empty object, collection, map, or set.

Also This directives have the same functionality as *ngIf so 'then' 'else' is also working

## Installation

To install this library, run:

```bash
$ npm install ngx-if-empty-or-has-items --save



make sure You have lodash installed also
```

## Consuming your library

You can import your library in any Angular application by running:

```bash
$ npm install ngx-if-empty-or-has-items


 make sure You have lodash installed also

```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxIfEmptyOrHasItemsModule } from 'ngx-if-empty-or-has-items';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgxIfEmptyOrHasItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


SharedModule

If you use a SharedModule that you import in multiple other feature modules, you can export the NgxIfEmptyOrHasItemsModule to make sure you don't have to import it in every module.
```typescript
@NgModule({
    exports: [
        CommonModule,
        NgxIfEmptyOrHasItemsModule
    ]
})
export class SharedModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:
This is helper library it uses the same functionality as ngIf but under the hood it uses isEmpty from lodash.

It Checks if value is an empty object, collection, map, or set.

```xml
<!-- You can now use your library component in app.component.html -->
arr = [] || {}
arrayWithData = ['1'] || {id: 1}

<h1 *ngxIfEmpty="arr">
   You will see this text
</h1>

<!-- You can also use 'as' syntax to store data in variable -->
<h1 *ngxIfNotEmpty="object$ | async as obj">
    {{obj.name}}
</h1>
<h1 *ngxIfNotEmpty="arrayWithData">
  You will see it
</h1>

<h1 *ngxIfHasItems="arrayWithData">
   You will see it
</h1>
```


You can also load only ngxIfEmptyModule or NgxIfHasItemsModule separately 
```typescript

@NgModule({
    exports: [
        CommonModule,
        
        NgxIfEmptyModule,
        NgxIfNotEmptyModule,
        NgxIfHasItemsModule
    ]
})
export class SharedModule { }
```

## License

MIT © [Oleksandr Khymenko](mailto:alexanderkhymenko@gmail.com)
