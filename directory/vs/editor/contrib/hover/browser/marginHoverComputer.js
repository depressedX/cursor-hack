import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/htmlContent.js';
import '../../../common/model.js';
define(de[2769], he([1, 0, 24, 94, 64]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*htmlContent*/,
 w /*model*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ZOb = void 0);
			class E {
				get lineNumber() {
					return this.a;
				}
				set lineNumber(d) {
					this.a = d;
				}
				get lane() {
					return this.b;
				}
				set lane(d) {
					this.b = d;
				}
				constructor(d) {
					(this.c = d), (this.a = -1), (this.b = w.GlyphMarginLane.Center);
				}
				computeSync() {
					const d = (a) => ({ value: a }),
						m = this.c.getLineDecorations(this.a),
						r = [],
						u = this.b === "lineNo";
					if (!m) return r;
					for (const a of m) {
						const h =
							a.options.glyphMargin?.position ?? w.GlyphMarginLane.Center;
						if (!u && h !== this.b) continue;
						const c = u
							? a.options.lineNumberHoverMessage
							: a.options.glyphMarginHoverMessage;
						!c || (0, i.$dl)(c) || r.push(...(0, t.$6b)(c).map(d));
					}
					return r;
				}
			}
			e.$ZOb = E;
		}),
		