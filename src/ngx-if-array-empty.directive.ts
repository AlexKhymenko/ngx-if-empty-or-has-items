import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[ngxIfArrayEmpty]'
})
export class NgxIfArrayEmptyDirective {
	private _context: NgxIfArrayEmptyContext = new NgxIfArrayEmptyContext();
	private _thenTemplateRef: TemplateRef<NgxIfArrayEmptyContext> | null = null;
	private _elseTemplateRef: TemplateRef<NgxIfArrayEmptyContext> | null = null;
	private _thenViewRef: EmbeddedViewRef<NgxIfArrayEmptyContext> | null = null;
	private _elseViewRef: EmbeddedViewRef<NgxIfArrayEmptyContext> | null = null;

	constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<NgxIfArrayEmptyContext>) {
		this._thenTemplateRef = templateRef;
	}

	@Input()
	set ngxIfArrayEmpty(array: any) {
		const isArrayEmpty = !array || (!!array && Array.isArray(array) && !array.length);
		this._context.$implicit = this._context.ngIf = isArrayEmpty;
		this._updateView();
	}

	@Input()
	set ngxIfArrayEmptyThen(templateRef: TemplateRef<NgxIfArrayEmptyContext> | null) {
		assertTemplate("ngxIfArrayEmptyThen", templateRef);
		this._thenTemplateRef = templateRef;
		this._thenViewRef = null;  // clear previous view if any.
		this._updateView();
	}

	@Input()
	set ngxIfArrayEmptyElse(templateRef: TemplateRef<NgxIfArrayEmptyContext> | null) {
		assertTemplate("ngxIfArrayEmptyElse", templateRef);
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


export class NgxIfArrayEmptyContext {
	public $implicit: any = null;
	public ngIf: any = null;
}

function assertTemplate(property: string, templateRef: TemplateRef<any> | null): void {
	const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
	if (!isTemplateRefOrNull) {
		throw new Error(`${property} must be a TemplateRef, but received '${(templateRef)}'.`);
	}
}