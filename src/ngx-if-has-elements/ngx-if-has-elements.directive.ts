import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import isEmpty from 'lodash/isEmpty'

@Directive({
	selector: "[ngxIfHasElements]"
})
export class NgxIfHasElementsDirective {

	private _context: NgxIfHasElementsContext = new NgxIfHasElementsContext();
	private _thenTemplateRef: TemplateRef<NgxIfHasElementsContext> | null = null;
	private _elseTemplateRef: TemplateRef<NgxIfHasElementsContext> | null = null;
	private _thenViewRef: EmbeddedViewRef<NgxIfHasElementsContext> | null = null;
	private _elseViewRef: EmbeddedViewRef<NgxIfHasElementsContext> | null = null;

	constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<NgxIfHasElementsContext>) {
		this._thenTemplateRef = templateRef;
	}


    @Input()
    set ngxIfHasElements(array: any) {
        this._context.ngxIfHasElements = array;
        this._context.$implicit = !isEmpty(array);
        this._updateView();
    }

	@Input()
	set ngxIfHasElementsThen(templateRef: TemplateRef<NgxIfHasElementsContext> | null) {
		assertTemplate("ngxIfHasElementsThen", templateRef);
		this._thenTemplateRef = templateRef;
		this._thenViewRef = null;  // clear previous view if any.
		this._updateView();
	}

	@Input()
	set ngxIfHasElementsElse(templateRef: TemplateRef<NgxIfHasElementsContext> | null) {
		assertTemplate("ngxIfHasElementsElse", templateRef);
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

export class NgxIfHasElementsContext {
    public $implicit: any = null;
    public ngxIfHasElements: any = null;
}


function assertTemplate(property: string, templateRef: TemplateRef<any> | null): void {
	const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
	if (!isTemplateRefOrNull) {
		throw new Error(`${property} must be a TemplateRef, but received '${(templateRef)}'.`);
	}
}