import '../../../../require.js';
import '../../../../exports.js';
import '../equals.js';
import './debugName.js';
import './logging.js';
define(de[407], he([1, 0, 433, 648, 742]), function (ce /*require*/,
 e /*exports*/,
 t /*equals*/,
 i /*debugName*/,
 w /*logging*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ce = e.$ae = e.$$d = e.$6d = e.$5d = void 0),
				(e.$2d = C),
				(e.$3d = m),
				(e.$4d = u),
				(e.$7d = c),
				(e.$8d = g),
				(e.$9d = p),
				(e.$0d = o),
				(e.$_d = b),
				(e.$be = l);
			let E;
			function C($) {
				E = $;
			}
			let d;
			function m($) {
				d = $;
			}
			let r;
			function u($) {
				r = $;
			}
			class a {
				get TChange() {
					return null;
				}
				reportChanges() {
					this.get();
				}
				read(v) {
					return v ? v.readObservable(this) : this.get();
				}
				map(v, S) {
					const I = S === void 0 ? void 0 : v,
						T = S === void 0 ? v : S;
					return r(
						{
							owner: I,
							debugName: () => {
								const P = (0, i.$id)(T);
								if (P !== void 0) return P;
								const L =
									/^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(
										T.toString(),
									);
								if (L) return `${this.debugName}.${L[2]}`;
								if (!I) return `${this.debugName} (mapped)`;
							},
							debugReferenceFn: T,
						},
						(P) => T(this.read(P), P),
					);
				}
				flatten() {
					return r(
						{ owner: void 0, debugName: () => `${this.debugName} (flattened)` },
						(v) => this.read(v).read(v),
					);
				}
				recomputeInitiallyAndOnChange(v, S) {
					return v.add(E(this, S)), this;
				}
				keepObserved(v) {
					return v.add(d(this)), this;
				}
				get a() {
					return this.get();
				}
			}
			e.$5d = a;
			class h extends a {
				constructor() {
					super(...arguments), (this.b = new Set());
				}
				addObserver(v) {
					const S = this.b.size;
					this.b.add(v), S === 0 && this.c();
				}
				removeObserver(v) {
					this.b.delete(v) && this.b.size === 0 && this.f();
				}
				c() {}
				f() {}
			}
			e.$6d = h;
			function c($, v) {
				const S = new f($, v);
				try {
					$(S);
				} finally {
					S.finish();
				}
			}
			let n;
			function g($) {
				if (n) $(n);
				else {
					const v = new f($, void 0);
					n = v;
					try {
						$(v);
					} finally {
						v.finish(), (n = void 0);
					}
				}
			}
			async function p($, v) {
				const S = new f($, v);
				try {
					await $(S);
				} finally {
					S.finish();
				}
			}
			function o($, v, S) {
				$ ? v($) : c(v, S);
			}
			class f {
				constructor(v, S) {
					(this._fn = v),
						(this.b = S),
						(this.a = []),
						(0, w.$Rd)()?.handleBeginTransaction(this);
				}
				getDebugName() {
					return this.b ? this.b() : (0, i.$id)(this._fn);
				}
				updateObserver(v, S) {
					this.a.push({ observer: v, observable: S }), v.beginUpdate(S);
				}
				finish() {
					const v = this.a;
					for (let S = 0; S < v.length; S++) {
						const { observer: I, observable: T } = v[S];
						I.endUpdate(T);
					}
					(this.a = null), (0, w.$Rd)()?.handleEndTransaction();
				}
			}
			e.$$d = f;
			function b($, v) {
				let S;
				return (
					typeof $ == "string"
						? (S = new i.$gd(void 0, $, void 0))
						: (S = new i.$gd($, void 0, void 0)),
					new s(S, v, t.$_c)
				);
			}
			class s extends h {
				get debugName() {
					return this.e.getDebugName(this) ?? "ObservableValue";
				}
				constructor(v, S, I) {
					super(), (this.e = v), (this.g = I), (this.d = S);
				}
				get() {
					return this.d;
				}
				set(v, S, I) {
					if (I === void 0 && this.g(this.d, v)) return;
					let T;
					S ||
						(S = T =
							new f(
								() => {},
								() => `Setting ${this.debugName}`,
							));
					try {
						const P = this.d;
						this.h(v),
							(0, w.$Rd)()?.handleObservableChanged(this, {
								oldValue: P,
								newValue: v,
								change: I,
								didChange: !0,
								hadValue: !0,
							});
						for (const k of this.b)
							S.updateObserver(k, this), k.handleChange(this, I);
					} finally {
						T && T.finish();
					}
				}
				toString() {
					return `${this.debugName}: ${this.d}`;
				}
				h(v) {
					this.d = v;
				}
			}
			e.$ae = s;
			function l($, v) {
				let S;
				return (
					typeof $ == "string"
						? (S = new i.$gd(void 0, $, void 0))
						: (S = new i.$gd($, void 0, void 0)),
					new y(S, v, t.$_c)
				);
			}
			class y extends s {
				h(v) {
					this.d !== v && (this.d && this.d.dispose(), (this.d = v));
				}
				dispose() {
					this.d?.dispose();
				}
			}
			e.$ce = y;
		})
