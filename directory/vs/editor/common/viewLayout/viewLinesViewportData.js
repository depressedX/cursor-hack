import '../../../../require.js';
import '../../../../exports.js';
import '../core/range.js';
define(de[2578], he([1, 0, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$pub = void 0);
			class i {
				constructor(E, C, d, m) {
					(this.selections = E),
						(this.startLineNumber = C.startLineNumber | 0),
						(this.endLineNumber = C.endLineNumber | 0),
						(this.relativeVerticalOffset = C.relativeVerticalOffset),
						(this.bigNumbersDelta = C.bigNumbersDelta | 0),
						(this.lineHeight = C.lineHeight | 0),
						(this.whitespaceViewportData = d),
						(this.a = m),
						(this.visibleRange = new t.$iL(
							C.startLineNumber,
							this.a.getLineMinColumn(C.startLineNumber),
							C.endLineNumber,
							this.a.getLineMaxColumn(C.endLineNumber),
						));
				}
				getViewLineRenderingData(E) {
					return this.a.getViewportViewLineRenderingData(this.visibleRange, E);
				}
				getDecorationsInViewport() {
					return this.a.getDecorationsInViewport(this.visibleRange);
				}
			}
			e.$pub = i;
		}),
		