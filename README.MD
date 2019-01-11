# ngx-if-empty-or-has-items
This is support library just to help You answer this question 'in angular template how to check if object is empty', 
'in angular template how to check if array is empty'.

**_This is stable version_** and will change only if angular makes changes to ngIf

**_ngxIfEmpty_** - It Checks if value is an empty object, collection, map, or set.

**_ngxIfNotEmpty_**, _**ngxIfHasItems**_ - It Checks if value is an _**NOT**_ empty object, collection, map, or set.

Also This directives have the same functionality as *ngIf so 'then' 'else' and 'as' syntax also working

[ngIf Documentation](https://angular.io/api/common/NgIf)

## Installation

To install this library, run:

```bash
$ npm install ngx-if-empty-or-has-items --save

```

## Consuming your library

You can import your library in any Angular application by running:

```bash
$ npm install ngx-if-empty-or-has-items --save
```

and then from your Angular `AppModule`:

You can import all 3 modules at the same time or pick one that You need;

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Import your library all 3 at the same time:
import { NgxIfEmptyOrHasItemsModule } from 'ngx-if-empty-or-has-items';

//Or import them separately: 
import { NgxIfEmptyModule } from 'ngx-if-empty-or-has-items';
import { NgxIfNotEmptyModule } from 'ngx-if-empty-or-has-items';
import { NgxIfHasItemsModule } from 'ngx-if-empty-or-has-items';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgxIfEmptyOrHasItemsModule,
    
    //Or import separately 
     NgxIfEmptyModule,
     NgxIfNotEmptyModule,
     NgxIfHasItemsModule
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
        // Load all 3 modules at once
        NgxIfEmptyOrHasItemsModule,
        
        //Or import separately 
         NgxIfEmptyModule,
         NgxIfNotEmptyModule,
         NgxIfHasItemsModule    ]
})
export class SharedModule { }
```

This is helper library it uses the same functionality as ngIf but under the hood it uses isEmpty from lodash.

It Checks if value is an empty object, collection, map, or set.

```xml
<!-- You can now use your library component in app.component.html -->
arr = [] || {}
arrayOrObjWithData = ['1'] || {id: 1}

<h1 *ngxIfEmpty="arr">
   You will see this text
</h1>

<!-- You can also use 'as' syntax to store data in variable -->
<h1 *ngxIfNotEmpty="object$ | async as obj">
    {{obj.name}}
</h1>
<h1 *ngxIfNotEmpty="arrayOrObjWithData">
  You will see it
</h1>

<h1 *ngxIfHasItems="arrayOrObjWithData">
   You will see it
</h1>
 <div *ngxIfEmpty="arr; then thenBlock; else elseBlock">this is ignored</div>
    <ng-template #primaryBlock>Primary text to show</ng-template>
    <ng-template #secondaryBlock>Secondary text to show</ng-template>
    <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>

```

## License

MIT © [Oleksandr Khymenko](mailto:alexanderkhymenko@gmail.com)
