import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../../../base/common/map.js';
import './characterClassifier.js';
define(de[747], he([1, 0, 120, 59, 654]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*map*/,
 w /*characterClassifier*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$PL = e.WordCharacterClass = void 0),
				(e.$QL = m);
			var E;
			(function (r) {
				(r[(r.Regular = 0)] = "Regular"),
					(r[(r.Whitespace = 1)] = "Whitespace"),
					(r[(r.WordSeparator = 2)] = "WordSeparator");
			})(E || (e.WordCharacterClass = E = {}));
			class C extends w.$NL {
				constructor(u, a) {
					super(E.Regular),
						(this.e = null),
						(this.f = null),
						(this.g = []),
						(this.intlSegmenterLocales = a),
						this.intlSegmenterLocales.length > 0
							? (this.e = new Intl.Segmenter(this.intlSegmenterLocales, {
									granularity: "word",
								}))
							: (this.e = null);
					for (let h = 0, c = u.length; h < c; h++)
						this.set(u.charCodeAt(h), E.WordSeparator);
					this.set(t.CharCode.Space, E.Whitespace),
						this.set(t.CharCode.Tab, E.Whitespace);
				}
				findPrevIntlWordBeforeOrAtOffset(u, a) {
					let h = null;
					for (const c of this.h(u)) {
						if (c.index > a) break;
						h = c;
					}
					return h;
				}
				findNextIntlWordAtOrAfterOffset(u, a) {
					for (const h of this.h(u)) if (!(h.index < a)) return h;
					return null;
				}
				h(u) {
					return this.e
						? this.f === u
							? this.g
							: ((this.f = u), (this.g = this.j(this.e.segment(u))), this.g)
						: [];
				}
				j(u) {
					const a = [];
					for (const h of u) this.k(h) && a.push(h);
					return a;
				}
				k(u) {
					return !!u.isWordLike;
				}
			}
			e.$PL = C;
			const d = new i.$Jc(10);
			function m(r, u) {
				const a = `${r}/${u.join(",")}`;
				let h = d.get(a);
				return h || ((h = new C(r, u)), d.set(a, h)), h;
			}
		})
