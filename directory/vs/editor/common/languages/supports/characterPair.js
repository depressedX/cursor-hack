define(de[2560], he([1, 0, 532]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3M = void 0);
			class i {
				static {
					this.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES = `;:.,=}])> 
	`;
				}
				static {
					this.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS = `'"\`;:.,=}])> 
	`;
				}
				static {
					this.DEFAULT_AUTOCLOSE_BEFORE_WHITESPACE = ` 
	`;
				}
				constructor(E) {
					if (
						(E.autoClosingPairs
							? (this.a = E.autoClosingPairs.map((C) => new t.$rM(C)))
							: E.brackets
								? (this.a = E.brackets.map(
										(C) => new t.$rM({ open: C[0], close: C[1] }),
									))
								: (this.a = []),
						E.__electricCharacterSupport &&
							E.__electricCharacterSupport.docComment)
					) {
						const C = E.__electricCharacterSupport.docComment;
						this.a.push(new t.$rM({ open: C.open, close: C.close || "" }));
					}
					(this.d =
						typeof E.autoCloseBefore == "string"
							? E.autoCloseBefore
							: i.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES),
						(this.e =
							typeof E.autoCloseBefore == "string"
								? E.autoCloseBefore
								: i.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS),
						(this.c = E.surroundingPairs || this.a);
				}
				getAutoClosingPairs() {
					return this.a;
				}
				getAutoCloseBeforeSet(E) {
					return E ? this.d : this.e;
				}
				getSurroundingPairs() {
					return this.c;
				}
			}
			e.$3M = i;
		}),
		