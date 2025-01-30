import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../debug/browser/callStackWidget.js';
define(de[3699], he([1, 0, 6, 3, 5, 1880]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*instantiation*/,
 E /*callStackWidget*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oLc = void 0);
			let C = class extends i.$1c {
				constructor(m, r, u) {
					super(),
						(this.c = m),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeStackFrame = this.b.event),
						(this.a = this.D(u.createInstance(E.$nLc, m, r)));
				}
				collapseAll() {
					this.a.collapseAll();
				}
				update(m, r) {
					this.a.setFrames([
						m,
						...r.map(
							(u) =>
								new E.$kLc(
									u.label,
									u.uri,
									u.position?.lineNumber,
									u.position?.column,
								),
						),
					]);
				}
				layout(m, r) {
					this.a.layout(m ?? this.c.clientHeight, r);
				}
			};
			(e.$oLc = C), (e.$oLc = C = Ne([j(2, w.$Li)], C));
		}),
		