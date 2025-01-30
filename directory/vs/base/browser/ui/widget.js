import '../../../../require.js';
import '../../../../exports.js';
import '../dom.js';
import '../keyboardEvent.js';
import '../mouseEvent.js';
import '../touch.js';
import '../../common/lifecycle.js';
define(
			de[235],
			he([1, 0, 7, 114, 168, 159, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*keyboardEvent*/,
 w /*mouseEvent*/,
 E /*touch*/,
 C /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uhb = void 0),
					(t = mt(t));
				class d extends C.$1c {
					f(r, u) {
						this.D(
							t.$0fb(r, t.$$gb.CLICK, (a) => u(new w.$2fb(t.getWindow(r), a))),
						);
					}
					j(r, u) {
						this.D(
							t.$0fb(r, t.$$gb.MOUSE_DOWN, (a) =>
								u(new w.$2fb(t.getWindow(r), a)),
							),
						);
					}
					m(r, u) {
						this.D(
							t.$0fb(r, t.$$gb.MOUSE_OVER, (a) =>
								u(new w.$2fb(t.getWindow(r), a)),
							),
						);
					}
					q(r, u) {
						this.D(
							t.$0fb(r, t.$$gb.MOUSE_LEAVE, (a) =>
								u(new w.$2fb(t.getWindow(r), a)),
							),
						);
					}
					u(r, u) {
						this.D(t.$0fb(r, t.$$gb.KEY_DOWN, (a) => u(new i.$7fb(a))));
					}
					z(r, u) {
						this.D(t.$0fb(r, t.$$gb.KEY_UP, (a) => u(new i.$7fb(a))));
					}
					C(r, u) {
						this.D(t.$0fb(r, t.$$gb.INPUT, u));
					}
					F(r, u) {
						this.D(t.$0fb(r, t.$$gb.BLUR, u));
					}
					G(r, u) {
						this.D(t.$0fb(r, t.$$gb.FOCUS, u));
					}
					H(r, u) {
						this.D(t.$0fb(r, t.$$gb.CHANGE, u));
					}
					I(r) {
						return E.$Qhb.ignoreTarget(r);
					}
				}
				e.$Uhb = d;
			},
		),
		