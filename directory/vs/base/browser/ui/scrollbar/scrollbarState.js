import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1128], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Xhb = void 0);
			const t = 20;
			class i {
				constructor(E, C, d, m, r, u) {
					(this.a = Math.round(C)),
						(this.b = Math.round(d)),
						(this.c = Math.round(E)),
						(this.d = m),
						(this.e = r),
						(this.f = u),
						(this.g = 0),
						(this.h = !1),
						(this.i = 0),
						(this.j = 0),
						(this.k = 0),
						this.m();
				}
				clone() {
					return new i(this.c, this.a, this.b, this.d, this.e, this.f);
				}
				setVisibleSize(E) {
					const C = Math.round(E);
					return this.d !== C ? ((this.d = C), this.m(), !0) : !1;
				}
				setScrollSize(E) {
					const C = Math.round(E);
					return this.e !== C ? ((this.e = C), this.m(), !0) : !1;
				}
				setScrollPosition(E) {
					const C = Math.round(E);
					return this.f !== C ? ((this.f = C), this.m(), !0) : !1;
				}
				setScrollbarSize(E) {
					this.a = Math.round(E);
				}
				setOppositeScrollbarSize(E) {
					this.b = Math.round(E);
				}
				static l(E, C, d, m, r) {
					const u = Math.max(0, d - E),
						a = Math.max(0, u - 2 * C),
						h = m > 0 && m > d;
					if (!h)
						return {
							computedAvailableSize: Math.round(u),
							computedIsNeeded: h,
							computedSliderSize: Math.round(a),
							computedSliderRatio: 0,
							computedSliderPosition: 0,
						};
					const c = Math.round(Math.max(t, Math.floor((d * a) / m))),
						n = (a - c) / (m - d),
						g = r * n;
					return {
						computedAvailableSize: Math.round(u),
						computedIsNeeded: h,
						computedSliderSize: Math.round(c),
						computedSliderRatio: n,
						computedSliderPosition: Math.round(g),
					};
				}
				m() {
					const E = i.l(this.b, this.c, this.d, this.e, this.f);
					(this.g = E.computedAvailableSize),
						(this.h = E.computedIsNeeded),
						(this.i = E.computedSliderSize),
						(this.j = E.computedSliderRatio),
						(this.k = E.computedSliderPosition);
				}
				getArrowSize() {
					return this.c;
				}
				getScrollPosition() {
					return this.f;
				}
				getRectangleLargeSize() {
					return this.g;
				}
				getRectangleSmallSize() {
					return this.a;
				}
				isNeeded() {
					return this.h;
				}
				getSliderSize() {
					return this.i;
				}
				getSliderPosition() {
					return this.k;
				}
				getDesiredScrollPositionFromOffset(E) {
					if (!this.h) return 0;
					const C = E - this.c - this.i / 2;
					return Math.round(C / this.j);
				}
				getDesiredScrollPositionFromOffsetPaged(E) {
					if (!this.h) return 0;
					const C = E - this.c;
					let d = this.f;
					return C < this.k ? (d -= this.d) : (d += this.d), d;
				}
				getDesiredScrollPositionFromDelta(E) {
					if (!this.h) return 0;
					const C = this.k + E;
					return Math.round(C / this.j);
				}
			}
			e.$Xhb = i;
		}),
		