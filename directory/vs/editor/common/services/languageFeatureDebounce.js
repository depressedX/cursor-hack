import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/hash.js';
import '../../../base/common/map.js';
import '../../../base/common/numbers.js';
import '../../../platform/environment/common/environment.js';
import '../../../platform/instantiation/common/extensions.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/network.js';
define(
			de[391],
			he([1, 0, 136, 59, 201, 113, 20, 5, 34, 23]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hash*/,
 i /*map*/,
 w /*numbers*/,
 E /*environment*/,
 C /*extensions*/,
 d /*instantiation*/,
 m /*log*/,
 r /*network*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QBb = e.$PBb = void 0),
					(e.$PBb = (0, d.$Mi)("ILanguageFeatureDebounceService"));
				var u;
				(function (n) {
					const g = new WeakMap();
					let p = 0;
					function o(f) {
						let b = g.get(f);
						return b === void 0 && ((b = ++p), g.set(f, b)), b;
					}
					n.of = o;
				})(u || (u = {}));
				class a {
					constructor(g) {
						this.a = g;
					}
					get(g) {
						return this.a;
					}
					update(g, p) {
						return this.a;
					}
					default() {
						return this.a;
					}
				}
				class h {
					constructor(g, p, o, f, b, s) {
						(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.f = b),
							(this.g = s),
							(this.a = new i.$Jc(50, 0.7));
					}
					h(g) {
						return (
							g.id + this.d.all(g).reduce((p, o) => (0, t.$Bj)(u.of(o), p), 0)
						);
					}
					get(g) {
						const p = this.h(g),
							o = this.a.get(p);
						return o ? (0, w.$Zm)(o.value, this.f, this.g) : this.default();
					}
					update(g, p) {
						const o = this.h(g);
						let f = this.a.get(o);
						f || ((f = new w.$4m(6)), this.a.set(o, f));
						const b = (0, w.$Zm)(f.update(p), this.f, this.g);
						return (
							(0, r.$Vg)(g.uri, "output") ||
								this.b.trace(
									`[DEBOUNCE: ${this.c}] for ${g.uri.toString()} is ${b}ms`,
								),
							b
						);
					}
					i() {
						const g = new w.$3m();
						for (const [, p] of this.a) g.update(p.value);
						return g.value;
					}
					default() {
						const g = this.i() | 0 || this.e;
						return (0, w.$Zm)(g, this.f, this.g);
					}
				}
				let c = class {
					constructor(g, p) {
						(this.c = g),
							(this.a = new Map()),
							(this.b = p.isExtensionDevelopment || !p.isBuilt);
					}
					for(g, p, o) {
						const f = o?.min ?? 50,
							b = o?.max ?? f ** 2,
							s = o?.key ?? void 0,
							l = `${u.of(g)},${f}${s ? "," + s : ""}`;
						let y = this.a.get(l);
						return (
							y ||
								(this.b
									? (this.c.debug(
											`[DEBOUNCE: ${p}] is disabled in developed mode`,
										),
										(y = new a(f * 1.5)))
									: (y = new h(this.c, p, g, this.d() | 0 || f * 1.5, f, b)),
								this.a.set(l, y)),
							y
						);
					}
					d() {
						const g = new w.$3m();
						for (const p of this.a.values()) g.update(p.default());
						return g.value;
					}
				};
				(e.$QBb = c),
					(e.$QBb = c = Ne([j(0, m.$ik), j(1, E.$Ti)], c)),
					(0, C.$lK)(e.$PBb, c, C.InstantiationType.Delayed);
			},
		),
		