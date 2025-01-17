import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/arrays.js';
define(de[3676], he([1, 0, 15, 34, 3, 24]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q4c = void 0);
			let C = class extends w.$1c {
				constructor(m) {
					super(), (this.b = m), (this.a = []);
				}
				addSaveParticipant(m) {
					const r = (0, E.$Xb)(this.a, m);
					return (0, w.$Yc)(() => r());
				}
				async participate(m, r, u, a) {
					m.textEditorModel?.pushStackElement();
					for (const h of this.a) {
						if (a.isCancellationRequested || !m.textEditorModel) break;
						try {
							const c = h.participate(m, r, u, a);
							await (0, t.$Ah)(c, a);
						} catch (c) {
							this.b.error(c);
						}
					}
					m.textEditorModel?.pushStackElement();
				}
				dispose() {
					this.a.splice(0, this.a.length), super.dispose();
				}
			};
			(e.$q4c = C), (e.$q4c = C = Ne([j(0, i.$ik)], C));
		}),
		