import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../hover/hoverDelegate2.js';
import '../hover/hoverDelegateFactory.js';
import '../iconLabel/iconLabels.js';
import '../../../common/lifecycle.js';
import '../../../common/objects.js';
define(
			de[410],
			he([1, 0, 7, 317, 95, 182, 3, 82]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*hoverDelegate2*/,
 w /*hoverDelegateFactory*/,
 E /*iconLabels*/,
 C /*lifecycle*/,
 d /*objects*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wob = void 0),
					(t = mt(t)),
					(d = mt(d));
				class m extends C.$1c {
					constructor(u, a) {
						super(),
							(this.m = a),
							(this.b = ""),
							(this.c = ""),
							(this.f = []),
							(this.h = !1),
							(this.g = a?.supportIcons ?? !1),
							(this.a = t.$fhb(u, t.$("span.monaco-highlighted-label")));
					}
					get element() {
						return this.a;
					}
					set(u, a = [], h = "", c) {
						u || (u = ""),
							c && (u = m.escapeNewLines(u, a)),
							!(this.h && this.b === u && this.c === h && d.$zo(this.f, a)) &&
								((this.b = u), (this.c = h), (this.f = a), this.n());
					}
					n() {
						const u = [];
						let a = 0;
						for (const h of this.f) {
							if (h.end === h.start) continue;
							if (a < h.start) {
								const g = this.b.substring(a, h.start);
								this.g ? u.push(...(0, E.$Sib)(g)) : u.push(g), (a = h.start);
							}
							const c = this.b.substring(a, h.end),
								n = t.$(
									"span.highlight",
									void 0,
									...(this.g ? (0, E.$Sib)(c) : [c]),
								);
							h.extraClasses && n.classList.add(...h.extraClasses),
								u.push(n),
								(a = h.end);
						}
						if (a < this.b.length) {
							const h = this.b.substring(a);
							this.g ? u.push(...(0, E.$Sib)(h)) : u.push(h);
						}
						if ((t.$hhb(this.a, ...u), this.m?.hoverDelegate?.showNativeHover))
							this.a.title = this.c;
						else if (!this.j && this.c !== "") {
							const h = this.m?.hoverDelegate ?? (0, w.$cib)("mouse");
							this.j = this.D(
								(0, i.$1ib)().setupManagedHover(h, this.a, this.c),
							);
						} else this.j && this.j.update(this.c);
						this.h = !0;
					}
					static escapeNewLines(u, a) {
						let h = 0,
							c = 0;
						return u.replace(/\r\n|\r|\n/g, (n, g) => {
							(c =
								n ===
								`\r
`
									? -1
									: 0),
								(g += h);
							for (const p of a)
								p.end <= g ||
									(p.start >= g && (p.start += c), p.end >= g && (p.end += c));
							return (h += c), "\u23CE";
						});
					}
				}
				e.$Wob = m;
			},
		),
		