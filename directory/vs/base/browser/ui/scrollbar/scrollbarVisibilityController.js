import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/async.js';
import '../../../common/lifecycle.js';
import '../../../common/scrollable.js';
define(de[2676], he([1, 0, 15, 3, 195]), function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*lifecycle*/,
 w /*scrollable*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Yhb = void 0);
			class E extends i.$1c {
				constructor(d, m, r) {
					super(),
						(this.a = d),
						(this.b = m),
						(this.c = r),
						(this.f = null),
						(this.m = !1),
						(this.j = !1),
						(this.g = !1),
						(this.h = !1),
						(this.n = this.D(new t.$Wh()));
				}
				setVisibility(d) {
					this.a !== d && ((this.a = d), this.r());
				}
				setShouldBeVisible(d) {
					(this.g = d), this.r();
				}
				q() {
					return this.a === w.ScrollbarVisibility.Hidden
						? !1
						: this.a === w.ScrollbarVisibility.Visible
							? !0
							: this.g;
				}
				r() {
					const d = this.q();
					this.h !== d && ((this.h = d), this.ensureVisibility());
				}
				setIsNeeded(d) {
					this.j !== d && ((this.j = d), this.ensureVisibility());
				}
				setDomNode(d) {
					(this.f = d),
						this.f.setClassName(this.c),
						this.setShouldBeVisible(!1);
				}
				ensureVisibility() {
					if (!this.j) {
						this.t(!1);
						return;
					}
					this.h ? this.s() : this.t(!0);
				}
				s() {
					this.m ||
						((this.m = !0),
						this.n.setIfNotSet(() => {
							this.f?.setClassName(this.b);
						}, 0));
				}
				t(d) {
					this.n.cancel(),
						this.m &&
							((this.m = !1),
							this.f?.setClassName(this.c + (d ? " fade" : "")));
				}
			}
			e.$Yhb = E;
		}),
		