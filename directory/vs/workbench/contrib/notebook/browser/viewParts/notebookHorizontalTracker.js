import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/platform.js';
define(de[3109], he([1, 0, 7, 3, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Z4b = void 0);
			class E extends i.$1c {
				constructor(d, m) {
					super(),
						(this.a = d),
						(this.b = m),
						this.D(
							(0, t.$0fb)(this.b, t.$$gb.MOUSE_WHEEL, (r) => {
								if (r.deltaX === 0) return;
								const u = this.a.codeEditors.find((c) => {
									const n = c[1].getLayoutInfo();
									if (n.contentWidth === n.width) return !1;
									const g = c[1].getDomNode();
									return !!(g && g.contains(r.target));
								});
								if (!u) return;
								const a = (0, t.getWindow)(r),
									h = {
										deltaMode: r.deltaMode,
										deltaX: r.deltaX,
										deltaY: 0,
										deltaZ: 0,
										wheelDelta:
											r.wheelDelta && w.$H
												? r.wheelDelta / a.devicePixelRatio
												: r.wheelDelta,
										wheelDeltaX:
											r.wheelDeltaX && w.$H
												? r.wheelDeltaX / a.devicePixelRatio
												: r.wheelDeltaX,
										wheelDeltaY: 0,
										detail: r.detail,
										shiftKey: r.shiftKey,
										type: r.type,
										defaultPrevented: !1,
										preventDefault: () => {},
										stopPropagation: () => {},
									};
								u[1].delegateScrollFromMouseWheelEvent(h);
							}),
						);
				}
			}
			e.$Z4b = E;
		})
