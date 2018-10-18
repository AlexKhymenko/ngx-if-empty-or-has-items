import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import isEmpty from 'lodash/isEmpty'

@Directive({
    selector: '[ngxIfEmpty]'
})
export class NgxIfEmptyDirective {
    private _context: NgxIfEmptyContext = new NgxIfEmptyContext();
    private _thenTemplateRef: TemplateRef<NgxIfEmptyContext> | null = null;
    private _elseTemplateRef: TemplateRef<NgxIfEmptyContext> | null = null;
    private _thenViewRef: EmbeddedViewRef<NgxIfEmptyContext> | null = null;
    private _elseViewRef: EmbeddedViewRef<NgxIfEmptyContext> | null = null;

    constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<NgxIfEmptyContext>) {
        this._thenTemplateRef = templateRef;
    }

    @Input()
    set ngxIfEmpty(array: any) {
        this._context.ngxIfEmpty = array;
        this._context.$implicit = isEmpty(array);
        this._updateView();
    }

    @Input()
    set ngxIfEmptyThen(templateRef: TemplateRef<NgxIfEmptyContext> | null) {
        assertTemplate("ngxIfEmptyThen", templateRef);
        this._thenTemplateRef = templateRef;
        this._thenViewRef = null;  // clear previous view if any.
        this._updateView();
    }

    @Input()
    set ngxIfEmptyElse(templateRef: TemplateRef<NgxIfEmptyContext> | null) {
        assertTemplate("ngxIfEmptyElse", templateRef);
        this._elseTemplateRef = templateRef;
        this._elseViewRef = null;  // clear previous view if any.
        this._updateView();
    }

    private _updateView() {
        if (this._context.$implicit) {
            if (!this._thenViewRef) {
                this._viewContainer.clear();
                this._elseViewRef = null;
                if (this._thenTemplateRef) {
                    this._thenViewRef =
                        this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                }
            }
        } else {
            if (!this._elseViewRef) {
                this._viewContainer.clear();
                this._thenViewRef = null;
                if (this._elseTemplateRef) {
                    this._elseViewRef =
                        this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
                }
            }
        }
    }

}


export class NgxIfEmptyContext {
    public $implicit: any = null;
    public ngxIfEmpty: any = null;
}


function assertTemplate(property: string, templateRef: TemplateRef<any> | null): void {
    const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
    if (!isTemplateRefOrNull) {
        throw new Error(`${property} must be a TemplateRef, but received '${(templateRef)}'.`);
    }
}