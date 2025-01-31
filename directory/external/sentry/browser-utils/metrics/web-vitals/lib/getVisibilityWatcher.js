import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../types.js';
define(de[884], he([1, 0, 366]), function (ce /*require*/,
 e /*exports*/,
 t /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getVisibilityWatcher = void 0);
			let i = -1;
			const w = () => {
					i =
						t.WINDOW.document.visibilityState === "hidden" &&
						!t.WINDOW.document.prerendering
							? 0
							: 1 / 0;
				},
				E = (m) => {
					t.WINDOW.document.visibilityState === "hidden" &&
						i > -1 &&
						((i = m.type === "visibilitychange" ? m.timeStamp : 0),
						removeEventListener("visibilitychange", E, !0),
						removeEventListener("prerenderingchange", E, !0));
				},
				C = () => {
					addEventListener("visibilitychange", E, !0),
						addEventListener("prerenderingchange", E, !0);
				},
				d = () => (
					t.WINDOW.document && i < 0 && (w(), C()),
					{
						get firstHiddenTime() {
							return i;
						},
					}
				);
			e.getVisibilityWatcher = d;
		})
