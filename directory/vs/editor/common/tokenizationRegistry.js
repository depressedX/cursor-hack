import '../../../require.js';
import '../../../exports.js';
import '../../base/common/event.js';
import '../../base/common/lifecycle.js';
import './encodedTokenAttributes.js';
define(de[2571], he([1, 0, 6, 3, 171]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*encodedTokenAttributes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$5L = void 0);
			class E {
				constructor() {
					(this.a = new Map()),
						(this.b = new Map()),
						(this.c = new t.$re()),
						(this.onDidChange = this.c.event),
						(this.d = null);
				}
				handleChange(m) {
					this.c.fire({ changedLanguages: m, changedColorMap: !1 });
				}
				register(m, r) {
					return (
						this.a.set(m, r),
						this.handleChange([m]),
						(0, i.$Yc)(() => {
							this.a.get(m) === r && (this.a.delete(m), this.handleChange([m]));
						})
					);
				}
				get(m) {
					return this.a.get(m) || null;
				}
				registerFactory(m, r) {
					this.b.get(m)?.dispose();
					const u = new C(this, m, r);
					return (
						this.b.set(m, u),
						(0, i.$Yc)(() => {
							const a = this.b.get(m);
							!a || a !== u || (this.b.delete(m), a.dispose());
						})
					);
				}
				async getOrCreate(m) {
					const r = this.get(m);
					if (r) return r;
					const u = this.b.get(m);
					return !u || u.isResolved ? null : (await u.resolve(), this.get(m));
				}
				isResolved(m) {
					if (this.get(m)) return !0;
					const u = this.b.get(m);
					return !!(!u || u.isResolved);
				}
				setColorMap(m) {
					(this.d = m),
						this.c.fire({
							changedLanguages: Array.from(this.a.keys()),
							changedColorMap: !0,
						});
				}
				getColorMap() {
					return this.d;
				}
				getDefaultBackground() {
					return this.d && this.d.length > w.ColorId.DefaultBackground
						? this.d[w.ColorId.DefaultBackground]
						: null;
				}
			}
			e.$5L = E;
			class C extends i.$1c {
				get isResolved() {
					return this.c;
				}
				constructor(m, r, u) {
					super(),
						(this.f = m),
						(this.g = r),
						(this.h = u),
						(this.a = !1),
						(this.b = null),
						(this.c = !1);
				}
				dispose() {
					(this.a = !0), super.dispose();
				}
				async resolve() {
					return this.b || (this.b = this.j()), this.b;
				}
				async j() {
					const m = await this.h.tokenizationSupport;
					(this.c = !0), m && !this.a && this.D(this.f.register(this.g, m));
				}
			}
		})
