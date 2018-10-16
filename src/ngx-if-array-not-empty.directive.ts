import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
	selector: "[ngxIfArrayNotEmpty][ngxIfArrayHasElements]"
})
export class NgxIfArrayNotEmptyDirective {

	private _context: NgxIfArrayNotEmptyContext = new NgxIfArrayNotEmptyContext();
	private _thenTemplateRef: TemplateRef<NgxIfArrayNotEmptyContext> | null = null;
	private _elseTemplateRef: TemplateRef<NgxIfArrayNotEmptyContext> | null = null;
	private _thenViewRef: EmbeddedViewRef<NgxIfArrayNotEmptyContext> | null = null;
	private _elseViewRef: EmbeddedViewRef<NgxIfArrayNotEmptyContext> | null = null;

	constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<NgxIfArrayNotEmptyContext>) {
		this._thenTemplateRef = templateRef;
	}

	@Input()
	set ngxIsArrayEmpty(array: any) {
		const isArrayEmpty = !array || (!!array && Array.isArray(array) && !array.length);
		this._context.$implicit = this._context.ngIf = !isArrayEmpty;
		this._updateView();
	}

	@Input()
	set ngxIsArrayNotEmptyThen(templateRef: TemplateRef<NgxIfArrayNotEmptyContext> | null) {
		assertTemplate("ngxIfArrayNotEmptyThen", templateRef);
		this._thenTemplateRef = templateRef;
		this._thenViewRef = null;  // clear previous view if any.
		this._updateView();
	}

	@Input()
	set ngxIsArrayNotEmptyElse(templateRef: TemplateRef<NgxIfArrayNotEmptyContext> | null) {
		assertTemplate("ngxIfArrayNotEmptyElse", templateRef);
		this._elseTemplateRef = templateRef;
		this._elseViewRef = null;  // clear previous view if any.
		this._updateView();
	}

	@Input()
	set ngxIfArrayHasElementsThen(templateRef: TemplateRef<NgxIfArrayNotEmptyContext> | null) {
		assertTemplate("ngxIfArrayHasElementsThen", templateRef);
		this._thenTemplateRef = templateRef;
		this._thenViewRef = null;  // clear previous view if any.
		this._updateView();
	}

	@Input()
	set ngxIfArrayHasElementsElse(templateRef: TemplateRef<NgxIfArrayNotEmptyContext> | null) {
		assertTemplate("ngxIfArrayHasElementsElse", templateRef);
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


export class NgxIfArrayNotEmptyContext {
	public $implicit: any = null;
	public ngIf: any = null;
}

function assertTemplate(property: string, templateRef: TemplateRef<any> | null): void {
	const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
	if (!isTemplateRefOrNull) {
		throw new Error(`${property} must be a TemplateRef, but received '${(templateRef)}'.`);
	}
}