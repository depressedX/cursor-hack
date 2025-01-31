import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
define(de[1274], he([1, 0, 7, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$R2b = void 0),
				(t = mt(t));
			class w extends i.$1c {
				constructor(C, d) {
					super();
					const m = () => {
							d()?.windowDidDragStart();
						},
						r = () => {
							d()?.windowDidDragEnd();
						};
					this.D(
						t.$0fb(C, t.$$gb.DRAG_START, () => {
							m();
						}),
					),
						this.D(t.$0fb(C, t.$$gb.DRAG_END, r)),
						this.D(
							t.$0fb(C, t.$$gb.MOUSE_MOVE, (u) => {
								u.buttons === 0 && r();
							}),
						),
						this.D(
							t.$0fb(C, t.$$gb.DRAG, (u) => {
								u.shiftKey ? r() : m();
							}),
						),
						this.D(
							t.$0fb(C, t.$$gb.DRAG_OVER, (u) => {
								u.shiftKey ? r() : m();
							}),
						);
				}
			}
			e.$R2b = w;
		})
