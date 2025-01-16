define(de[188], he([1, 0, 17]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jL = void 0);
			class i {
				static insert(E, C) {
					return {
						range: new t.$iL(E.lineNumber, E.column, E.lineNumber, E.column),
						text: C,
						forceMoveMarkers: !0,
					};
				}
				static delete(E) {
					return { range: E, text: null };
				}
				static replace(E, C) {
					return { range: E, text: C };
				}
				static replaceMove(E, C) {
					return { range: E, text: C, forceMoveMarkers: !0 };
				}
			}
			e.$jL = i;
		}),
		