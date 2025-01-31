import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arraysFind.js';
import './offsetRange.js';
import './position.js';
import './range.js';
import './textLength.js';
define(
			de[2549],
			he([1, 0, 214, 289, 48, 17, 458]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arraysFind*/,
 i /*offsetRange*/,
 w /*position*/,
 E /*range*/,
 C /*textLength*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$uL = void 0);
				class d {
					constructor(r) {
						(this.text = r), (this.a = []), this.a.push(0);
						for (let u = 0; u < r.length; u++)
							r.charAt(u) ===
								`
` && this.a.push(u + 1);
					}
					getOffset(r) {
						return this.a[r.lineNumber - 1] + r.column - 1;
					}
					getOffsetRange(r) {
						return new i.$pL(
							this.getOffset(r.getStartPosition()),
							this.getOffset(r.getEndPosition()),
						);
					}
					getPosition(r) {
						const u = (0, t.$mb)(this.a, (c) => c <= r),
							a = u + 1,
							h = r - this.a[u] + 1;
						return new w.$hL(a, h);
					}
					getRange(r) {
						return E.$iL.fromPositions(
							this.getPosition(r.start),
							this.getPosition(r.endExclusive),
						);
					}
					getTextLength(r) {
						return C.$tL.ofRange(this.getRange(r));
					}
					get textLength() {
						const r = this.a.length - 1;
						return new C.$tL(r, this.text.length - this.a[r]);
					}
				}
				e.$uL = d;
			},
		)
