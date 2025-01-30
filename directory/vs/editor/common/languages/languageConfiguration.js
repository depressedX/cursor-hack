import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../encodedTokenAttributes.js';
define(de[532], he([1, 0, 120, 171]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*encodedTokenAttributes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sM = e.$rM = e.IndentAction = void 0);
			var w;
			(function (m) {
				(m[(m.None = 0)] = "None"),
					(m[(m.Indent = 1)] = "Indent"),
					(m[(m.IndentOutdent = 2)] = "IndentOutdent"),
					(m[(m.Outdent = 3)] = "Outdent");
			})(w || (e.IndentAction = w = {}));
			class E {
				constructor(r) {
					if (
						((this.e = null),
						(this.f = !1),
						(this.open = r.open),
						(this.close = r.close),
						(this.b = !0),
						(this.c = !0),
						(this.d = !0),
						Array.isArray(r.notIn))
					)
						for (let u = 0, a = r.notIn.length; u < a; u++)
							switch (r.notIn[u]) {
								case "string":
									this.b = !1;
									break;
								case "comment":
									this.c = !1;
									break;
								case "regex":
									this.d = !1;
									break;
							}
				}
				isOK(r) {
					switch (r) {
						case i.StandardTokenType.Other:
							return !0;
						case i.StandardTokenType.Comment:
							return this.c;
						case i.StandardTokenType.String:
							return this.b;
						case i.StandardTokenType.RegEx:
							return this.d;
					}
				}
				shouldAutoClose(r, u) {
					if (r.getTokenCount() === 0) return !0;
					const a = r.findTokenIndexAtOffset(u - 2),
						h = r.getStandardTokenType(a);
					return this.isOK(h);
				}
				g(r, u) {
					for (let a = r; a <= u; a++) {
						const h = String.fromCharCode(a);
						if (!this.open.includes(h) && !this.close.includes(h)) return h;
					}
					return null;
				}
				findNeutralCharacter() {
					return (
						this.f ||
							((this.f = !0),
							this.e || (this.e = this.g(t.CharCode.Digit0, t.CharCode.Digit9)),
							this.e || (this.e = this.g(t.CharCode.a, t.CharCode.z)),
							this.e || (this.e = this.g(t.CharCode.A, t.CharCode.Z))),
						this.e
					);
				}
			}
			e.$rM = E;
			class C {
				constructor(r) {
					(this.autoClosingPairsOpenByStart = new Map()),
						(this.autoClosingPairsOpenByEnd = new Map()),
						(this.autoClosingPairsCloseByStart = new Map()),
						(this.autoClosingPairsCloseByEnd = new Map()),
						(this.autoClosingPairsCloseSingleChar = new Map());
					for (const u of r)
						d(this.autoClosingPairsOpenByStart, u.open.charAt(0), u),
							d(
								this.autoClosingPairsOpenByEnd,
								u.open.charAt(u.open.length - 1),
								u,
							),
							d(this.autoClosingPairsCloseByStart, u.close.charAt(0), u),
							d(
								this.autoClosingPairsCloseByEnd,
								u.close.charAt(u.close.length - 1),
								u,
							),
							u.close.length === 1 &&
								u.open.length === 1 &&
								d(this.autoClosingPairsCloseSingleChar, u.close, u);
				}
			}
			e.$sM = C;
			function d(m, r, u) {
				m.has(r) ? m.get(r).push(u) : m.set(r, [u]);
			}
		}),
		