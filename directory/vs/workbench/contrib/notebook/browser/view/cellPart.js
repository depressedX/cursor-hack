import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/lifecycle.js';
define(de[294], he([1, 0, 7, 29, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*errors*/,
 w /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$C1b = e.$B1b = e.$A1b = void 0),
				(t = mt(t));
			class E extends w.$1c {
				constructor() {
					super(), (this.f = this.D(new w.$Zc()));
				}
				prepareRenderCell(u) {}
				renderCell(u) {
					(this.c = u), d(() => this.didRenderCell(u));
				}
				didRenderCell(u) {}
				unrenderCell(u) {
					(this.c = void 0), this.f.clear();
				}
				prepareLayout() {}
				updateInternalLayoutNow(u) {}
				updateState(u, a) {}
				updateForExecutionState(u, a) {}
			}
			e.$A1b = E;
			class C extends w.$1c {
				constructor() {
					super(), (this.b = this.D(new w.$Zc()));
				}
				prepareRenderCell(u) {}
				renderCell(u) {
					(this.a = u), this.didRenderCell(u);
				}
				didRenderCell(u) {}
				unrenderCell(u) {
					(this.a = void 0), this.b.clear();
				}
				updateInternalLayoutNow(u) {}
				updateState(u, a) {}
				updateForExecutionState(u, a) {}
			}
			e.$B1b = C;
			function d(r) {
				try {
					return r();
				} catch (u) {
					return (0, i.$4)(u), null;
				}
			}
			class m extends w.$1c {
				constructor(u, a, h) {
					super(),
						(this.f = u),
						(this.g = a),
						(this.h = h),
						(this.a = this.D(new w.$2c())),
						(this.b = this.D(new w.$2c())),
						(this.c = this.D(new w.$2c()));
				}
				concatContentPart(u, a) {
					return new m(a, this.g.concat(u), this.h);
				}
				concatOverlayPart(u, a) {
					return new m(a, this.g, this.h.concat(u));
				}
				scheduleRenderCell(u) {
					for (const a of this.g) d(() => a.prepareRenderCell(u));
					for (const a of this.h) d(() => a.prepareRenderCell(u));
					for (const a of this.g) d(() => a.renderCell(u));
					this.a.value = t.$lgb(this.f, () => {
						for (const a of this.h) d(() => a.renderCell(u));
					});
				}
				unrenderCell(u) {
					for (const a of this.g) d(() => a.unrenderCell(u));
					(this.a.value = void 0),
						(this.b.value = void 0),
						(this.c.value = void 0);
					for (const a of this.h) d(() => a.unrenderCell(u));
				}
				updateInternalLayoutNow(u) {
					for (const a of this.g) d(() => a.updateInternalLayoutNow(u));
					for (const a of this.h) d(() => a.updateInternalLayoutNow(u));
				}
				prepareLayout() {
					for (const u of this.g) d(() => u.prepareLayout());
				}
				updateState(u, a) {
					for (const h of this.g) d(() => h.updateState(u, a));
					this.b.value = t.$lgb(this.f, () => {
						for (const h of this.h) d(() => h.updateState(u, a));
					});
				}
				updateForExecutionState(u, a) {
					for (const h of this.g) d(() => h.updateForExecutionState(u, a));
					this.c.value = t.$lgb(this.f, () => {
						for (const h of this.h) d(() => h.updateForExecutionState(u, a));
					});
				}
			}
			e.$C1b = m;
		})
