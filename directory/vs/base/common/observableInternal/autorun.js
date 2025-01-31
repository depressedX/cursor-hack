import '../../../../require.js';
import '../../../../exports.js';
import '../assert.js';
import '../lifecycle.js';
import './debugName.js';
import './logging.js';
define(
			de[1133],
			he([1, 0, 229, 3, 648, 742]),
			function (ce /*require*/,
 e /*exports*/,
 t /*assert*/,
 i /*lifecycle*/,
 w /*debugName*/,
 E /*logging*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vd = void 0),
					(e.$pd = C),
					(e.$qd = d),
					(e.$rd = m),
					(e.$sd = r),
					(e.$td = u),
					(e.$ud = a);
				function C(n) {
					return new c(new w.$gd(void 0, void 0, n), n, void 0, void 0);
				}
				function d(n, g) {
					return new c(
						new w.$gd(n.owner, n.debugName, n.debugReferenceFn ?? g),
						g,
						void 0,
						void 0,
					);
				}
				function m(n, g) {
					return new c(
						new w.$gd(n.owner, n.debugName, n.debugReferenceFn ?? g),
						g,
						n.createEmptyChangeSummary,
						n.handleChange,
					);
				}
				function r(n, g) {
					const p = new i.$Zc(),
						o = m(
							{
								owner: n.owner,
								debugName: n.debugName,
								debugReferenceFn: n.debugReferenceFn ?? g,
								createEmptyChangeSummary: n.createEmptyChangeSummary,
								handleChange: n.handleChange,
							},
							(f, b) => {
								p.clear(), g(f, b, p);
							},
						);
					return (0, i.$Yc)(() => {
						o.dispose(), p.dispose();
					});
				}
				function u(n) {
					const g = new i.$Zc(),
						p = d(
							{ owner: void 0, debugName: void 0, debugReferenceFn: n },
							(o) => {
								g.clear(), n(o, g);
							},
						);
					return (0, i.$Yc)(() => {
						p.dispose(), g.dispose();
					});
				}
				function a(n, g) {
					let p;
					return d({ debugReferenceFn: g }, (o) => {
						const f = n.read(o),
							b = p;
						(p = f), g({ lastValue: b, newValue: f });
					});
				}
				var h;
				(function (n) {
					(n[(n.dependenciesMightHaveChanged = 1)] =
						"dependenciesMightHaveChanged"),
						(n[(n.stale = 2)] = "stale"),
						(n[(n.upToDate = 3)] = "upToDate");
				})(h || (h = {}));
				class c {
					get debugName() {
						return this._debugNameData.getDebugName(this) ?? "(anonymous)";
					}
					constructor(g, p, o, f) {
						(this._debugNameData = g),
							(this._runFn = p),
							(this.h = o),
							(this.i = f),
							(this.a = h.stale),
							(this.b = 0),
							(this.c = !1),
							(this.e = new Set()),
							(this.f = new Set()),
							(this.g = this.h?.()),
							(0, E.$Rd)()?.handleAutorunCreated(this),
							this.j(),
							(0, i.$Rc)(this);
					}
					dispose() {
						this.c = !0;
						for (const g of this.e) g.removeObserver(this);
						this.e.clear(), (0, i.$Sc)(this);
					}
					j() {
						if (this.a === h.upToDate) return;
						const g = this.f;
						(this.f = this.e), (this.e = g), (this.a = h.upToDate);
						const p = this.c;
						try {
							if (!p) {
								(0, E.$Rd)()?.handleAutorunTriggered(this);
								const o = this.g;
								(this.g = this.h?.()), this._runFn(this, o);
							}
						} finally {
							p || (0, E.$Rd)()?.handleAutorunFinished(this);
							for (const o of this.f) o.removeObserver(this);
							this.f.clear();
						}
					}
					toString() {
						return `Autorun<${this.debugName}>`;
					}
					beginUpdate() {
						this.a === h.upToDate && (this.a = h.dependenciesMightHaveChanged),
							this.b++;
					}
					endUpdate() {
						if (this.b === 1)
							do {
								if (this.a === h.dependenciesMightHaveChanged) {
									this.a = h.upToDate;
									for (const g of this.e)
										if ((g.reportChanges(), this.a === h.stale)) break;
								}
								this.j();
							} while (this.a !== h.upToDate);
						this.b--, (0, t.$nd)(() => this.b >= 0);
					}
					handlePossibleChange(g) {
						this.a === h.upToDate &&
							this.e.has(g) &&
							!this.f.has(g) &&
							(this.a = h.dependenciesMightHaveChanged);
					}
					handleChange(g, p) {
						this.e.has(g) &&
							!this.f.has(g) &&
							(!this.i ||
								this.i(
									{
										changedObservable: g,
										change: p,
										didChange: (f) => f === g,
									},
									this.g,
								)) &&
							(this.a = h.stale);
					}
					readObservable(g) {
						if (this.c) return g.get();
						g.addObserver(this);
						const p = g.get();
						return this.e.add(g), this.f.delete(g), p;
					}
				}
				(e.$vd = c),
					(function (n) {
						n.Observer = c;
					})(C || (e.$pd = C = {}));
			},
		)
