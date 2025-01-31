import '../../../require.js';
import '../../../exports.js';
import './event.js';
import './lifecycle.js';
import '../../nls.js';
define(de[50], he([1, 0, 6, 3, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vj = e.$uj = e.$tj = e.$sj = e.$rj = void 0),
				(e.$wj = u),
				(w = mt(w));
			class E extends i.$1c {
				constructor(h, c = "", n = "", g = !0, p) {
					super(),
						(this.j = this.D(new t.$re())),
						(this.onDidChange = this.j.event),
						(this.w = !0),
						(this.m = h),
						(this.n = c),
						(this.u = n),
						(this.w = g),
						(this.C = p);
				}
				get id() {
					return this.m;
				}
				get label() {
					return this.n;
				}
				set label(h) {
					this.F(h);
				}
				F(h) {
					this.n !== h && ((this.n = h), this.j.fire({ label: h }));
				}
				get tooltip() {
					return this.q || "";
				}
				set tooltip(h) {
					this.G(h);
				}
				G(h) {
					this.q !== h && ((this.q = h), this.j.fire({ tooltip: h }));
				}
				get class() {
					return this.u;
				}
				set class(h) {
					this.H(h);
				}
				H(h) {
					this.u !== h && ((this.u = h), this.j.fire({ class: h }));
				}
				get enabled() {
					return this.w;
				}
				set enabled(h) {
					this.I(h);
				}
				I(h) {
					this.w !== h && ((this.w = h), this.j.fire({ enabled: h }));
				}
				get checked() {
					return this.z;
				}
				set checked(h) {
					this.J(h);
				}
				J(h) {
					this.z !== h && ((this.z = h), this.j.fire({ checked: h }));
				}
				async run(h, c) {
					this.C && (await this.C(h));
				}
			}
			e.$rj = E;
			class C extends i.$1c {
				constructor() {
					super(...arguments),
						(this.f = this.D(new t.$re())),
						(this.onWillRun = this.f.event),
						(this.m = this.D(new t.$re())),
						(this.onDidRun = this.m.event);
				}
				async run(h, c) {
					if (!h.enabled) return;
					this.f.fire({ action: h });
					let n;
					try {
						await this.q(h, c);
					} catch (g) {
						n = g;
					}
					this.m.fire({ action: h, error: n });
				}
				async q(h, c) {
					await h.run(c);
				}
			}
			e.$sj = C;
			class d {
				constructor() {
					(this.id = d.ID),
						(this.label = ""),
						(this.tooltip = ""),
						(this.class = "separator"),
						(this.enabled = !1),
						(this.checked = !1);
				}
				static join(...h) {
					let c = [];
					for (const n of h)
						n.length && (c.length ? (c = [...c, new d(), ...n]) : (c = n));
					return c;
				}
				static {
					this.ID = "vs.actions.separator";
				}
				async run() {}
			}
			e.$tj = d;
			class m {
				get actions() {
					return this.a;
				}
				constructor(h, c, n, g) {
					(this.tooltip = ""),
						(this.enabled = !0),
						(this.checked = void 0),
						(this.id = h),
						(this.label = c),
						(this.class = g),
						(this.a = n);
				}
				async run() {}
			}
			e.$uj = m;
			class r extends E {
				static {
					this.ID = "vs.actions.empty";
				}
				constructor() {
					super(r.ID, w.localize(41, null), void 0, !1);
				}
			}
			e.$vj = r;
			function u(a) {
				return {
					id: a.id,
					label: a.label,
					tooltip: a.tooltip ?? a.label,
					class: a.class,
					enabled: a.enabled ?? !0,
					checked: a.checked,
					run: async (...h) => a.run(...h),
				};
			}
		})
