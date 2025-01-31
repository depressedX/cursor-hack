import '../../../../require.js';
import '../../../../exports.js';
import '../assert.js';
import '../equals.js';
import '../lifecycle.js';
import './base.js';
import './debugName.js';
import './logging.js';
define(
			de[319],
			he([1, 0, 229, 433, 3, 407, 648, 742]),
			function (ce /*require*/,
 e /*exports*/,
 t /*assert*/,
 i /*equals*/,
 w /*lifecycle*/,
 E /*base*/,
 C /*debugName*/,
 d /*logging*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1d = e.$Zd = void 0),
					(e.$Td = m),
					(e.$Ud = r),
					(e.$Vd = u),
					(e.$Wd = a),
					(e.$Xd = h),
					(e.$Yd = c);
				function m(o, f) {
					return f !== void 0
						? new g(new C.$gd(o, void 0, f), f, void 0, void 0, void 0, i.$_c)
						: new g(
								new C.$gd(void 0, void 0, o),
								o,
								void 0,
								void 0,
								void 0,
								i.$_c,
							);
				}
				function r(o, f, b) {
					return new p(
						new C.$gd(o, void 0, f),
						f,
						void 0,
						void 0,
						void 0,
						i.$_c,
						b,
					);
				}
				function u(o, f) {
					return new g(
						new C.$gd(o.owner, o.debugName, o.debugReferenceFn),
						f,
						void 0,
						void 0,
						o.onLastObserverRemoved,
						o.equalsFn ?? i.$_c,
					);
				}
				(0, E.$4d)(u);
				function a(o, f) {
					return new g(
						new C.$gd(o.owner, o.debugName, void 0),
						f,
						o.createEmptyChangeSummary,
						o.handleChange,
						void 0,
						o.equalityComparer ?? i.$_c,
					);
				}
				function h(o, f) {
					let b, s;
					f === void 0 ? ((b = o), (s = void 0)) : ((s = o), (b = f));
					const l = new w.$Zc();
					return new g(
						new C.$gd(s, void 0, b),
						(y) => (l.clear(), b(y, l)),
						void 0,
						void 0,
						() => l.dispose(),
						i.$_c,
					);
				}
				function c(o, f) {
					let b, s;
					f === void 0 ? ((b = o), (s = void 0)) : ((s = o), (b = f));
					let l;
					return new g(
						new C.$gd(s, void 0, b),
						(y) => {
							l ? l.clear() : (l = new w.$Zc());
							const $ = b(y);
							return $ && l.add($), $;
						},
						void 0,
						void 0,
						() => {
							l && (l.dispose(), (l = void 0));
						},
						i.$_c,
					);
				}
				var n;
				(function (o) {
					(o[(o.initial = 0)] = "initial"),
						(o[(o.dependenciesMightHaveChanged = 1)] =
							"dependenciesMightHaveChanged"),
						(o[(o.stale = 2)] = "stale"),
						(o[(o.upToDate = 3)] = "upToDate");
				})(n || (n = {}));
				class g extends E.$6d {
					get debugName() {
						return this._debugNameData.getDebugName(this) ?? "(anonymous)";
					}
					constructor(f, b, s, l, y = void 0, $) {
						super(),
							(this._debugNameData = f),
							(this._computeFn = b),
							(this.m = s),
							(this.n = l),
							(this.p = y),
							(this.q = $),
							(this.e = n.initial),
							(this.g = void 0),
							(this.h = 0),
							(this.j = new Set()),
							(this.k = new Set()),
							(this.l = void 0),
							(this.l = this.m?.()),
							(0, d.$Rd)()?.handleDerivedCreated(this);
					}
					f() {
						(this.e = n.initial), (this.g = void 0);
						for (const f of this.j) f.removeObserver(this);
						this.j.clear(), this.p?.();
					}
					get() {
						if (this.b.size === 0) {
							const f = this._computeFn(this, this.m?.());
							return this.f(), f;
						} else {
							do {
								if (this.e === n.dependenciesMightHaveChanged) {
									for (const f of this.j)
										if ((f.reportChanges(), this.e === n.stale)) break;
								}
								this.e === n.dependenciesMightHaveChanged &&
									(this.e = n.upToDate),
									this.t();
							} while (this.e !== n.upToDate);
							return this.g;
						}
					}
					t() {
						if (this.e === n.upToDate) return;
						const f = this.k;
						(this.k = this.j), (this.j = f);
						const b = this.e !== n.initial,
							s = this.g;
						this.e = n.upToDate;
						const l = this.l;
						this.l = this.m?.();
						try {
							this.g = this._computeFn(this, l);
						} finally {
							for (const $ of this.k) $.removeObserver(this);
							this.k.clear();
						}
						const y = b && !this.q(s, this.g);
						if (
							((0, d.$Rd)()?.handleDerivedRecomputed(this, {
								oldValue: s,
								newValue: this.g,
								change: void 0,
								didChange: y,
								hadValue: b,
							}),
							y)
						)
							for (const $ of this.b) $.handleChange(this, void 0);
					}
					toString() {
						return `LazyDerived<${this.debugName}>`;
					}
					beginUpdate(f) {
						this.h++;
						const b = this.h === 1;
						if (
							this.e === n.upToDate &&
							((this.e = n.dependenciesMightHaveChanged), !b)
						)
							for (const s of this.b) s.handlePossibleChange(this);
						if (b) for (const s of this.b) s.beginUpdate(this);
					}
					endUpdate(f) {
						if ((this.h--, this.h === 0)) {
							const b = [...this.b];
							for (const s of b) s.endUpdate(this);
						}
						(0, t.$nd)(() => this.h >= 0);
					}
					handlePossibleChange(f) {
						if (this.e === n.upToDate && this.j.has(f) && !this.k.has(f)) {
							this.e = n.dependenciesMightHaveChanged;
							for (const b of this.b) b.handlePossibleChange(this);
						}
					}
					handleChange(f, b) {
						if (this.j.has(f) && !this.k.has(f)) {
							const s = this.n
									? this.n(
											{
												changedObservable: f,
												change: b,
												didChange: (y) => y === f,
											},
											this.l,
										)
									: !0,
								l = this.e === n.upToDate;
							if (
								s &&
								(this.e === n.dependenciesMightHaveChanged || l) &&
								((this.e = n.stale), l)
							)
								for (const y of this.b) y.handlePossibleChange(this);
						}
					}
					readObservable(f) {
						f.addObserver(this);
						const b = f.get();
						return this.j.add(f), this.k.delete(f), b;
					}
					addObserver(f) {
						const b = !this.b.has(f) && this.h > 0;
						super.addObserver(f), b && f.beginUpdate(this);
					}
					removeObserver(f) {
						const b = this.b.has(f) && this.h > 0;
						super.removeObserver(f), b && f.endUpdate(this);
					}
				}
				e.$Zd = g;
				class p extends g {
					constructor(f, b, s, l, y = void 0, $, v) {
						super(f, b, s, l, y, $), (this.set = v);
					}
				}
				e.$1d = p;
			},
		)
