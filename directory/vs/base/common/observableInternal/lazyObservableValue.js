import '../../../../require.js';
import '../../../../exports.js';
import './base.js';
define(de[2220], he([1, 0, 407]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$je = void 0);
			class i extends t.$6d {
				get debugName() {
					return this.h.getDebugName(this) ?? "LazyObservableValue";
				}
				constructor(E, C, d) {
					super(),
						(this.h = E),
						(this.j = d),
						(this.e = !0),
						(this.g = []),
						(this.l = 0),
						(this.d = C);
				}
				get() {
					return this.k(), this.d;
				}
				k() {
					if (!this.e)
						if (((this.e = !0), this.g.length > 0)) {
							for (const E of this.b)
								for (const C of this.g) E.handleChange(this, C);
							this.g.length = 0;
						} else for (const E of this.b) E.handleChange(this, void 0);
				}
				m() {
					if ((this.l++, this.l === 1))
						for (const E of this.b) E.beginUpdate(this);
				}
				n() {
					if ((this.l--, this.l === 0)) {
						this.k();
						const E = [...this.b];
						for (const C of E) C.endUpdate(this);
					}
				}
				addObserver(E) {
					const C = !this.b.has(E) && this.l > 0;
					super.addObserver(E), C && E.beginUpdate(this);
				}
				removeObserver(E) {
					const C = this.b.has(E) && this.l > 0;
					super.removeObserver(E), C && E.endUpdate(this);
				}
				set(E, C, d) {
					if (d === void 0 && this.j(this.d, E)) return;
					let m;
					C ||
						(C = m =
							new t.$$d(
								() => {},
								() => `Setting ${this.debugName}`,
							));
					try {
						if (
							((this.e = !1),
							this.o(E),
							d !== void 0 && this.g.push(d),
							C.updateObserver(
								{
									beginUpdate: () => this.m(),
									endUpdate: () => this.n(),
									handleChange: (r, u) => {},
									handlePossibleChange: (r) => {},
								},
								this,
							),
							this.l > 1)
						)
							for (const r of this.b) r.handlePossibleChange(this);
					} finally {
						m && m.finish();
					}
				}
				toString() {
					return `${this.debugName}: ${this.d}`;
				}
				o(E) {
					this.d = E;
				}
			}
			e.$je = i;
		}),
		