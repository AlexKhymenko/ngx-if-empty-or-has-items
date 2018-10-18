import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import isEmpty from 'lodash/isEmpty'

@Directive({
	selector: "[ngxIfHasItems]"
})
export class NgxIfHasItemsDirective {

	private _context: NgxIfHasItemsContext = new NgxIfHasItemsContext();
	private _thenTemplateRef: TemplateRef<NgxIfHasItemsContext> | null = null;
	private _elseTemplateRef: TemplateRef<NgxIfHasItemsContext> | null = null;
	private _thenViewRef: EmbeddedViewRef<NgxIfHasItemsContext> | null = null;
	private _elseViewRef: EmbeddedViewRef<NgxIfHasItemsContext> | null = null;

	constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<NgxIfHasItemsContext>) {
		this._thenTemplateRef = templateRef;
	}


    @Input()
    set ngxIfHasItems(array: any) {
        this._context.ngxIfHasItems = array;
        this._context.$implicit = !isEmpty(array);
        this._updateView();
    }

	@Input()
	set ngxIfHasItemsThen(templateRef: TemplateRef<NgxIfHasItemsContext> | null) {
		assertTemplate("ngxIfHasItemsThen", templateRef);
		this._thenTemplateRef = templateRef;
		this._thenViewRef = null;  // clear previous view if any.
		this._updateView();
	}

	@Input()
	set ngxIfHasItemsElse(templateRef: TemplateRef<NgxIfHasItemsContext> | null) {
		assertTemplate("ngxIfHasItemsElse", templateRef);
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

export class NgxIfHasItemsContext {
    public $implicit: any = null;
    public ngxIfHasItems: any = null;
}


function assertTemplate(property: string, templateRef: TemplateRef<any> | null): void {
	const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
	if (!isTemplateRefOrNull) {
		throw new Error(`${property} must be a TemplateRef, but received '${(templateRef)}'.`);
	}
}