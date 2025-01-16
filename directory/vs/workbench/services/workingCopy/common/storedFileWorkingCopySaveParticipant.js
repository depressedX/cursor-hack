define(de[3853], he([1, 0, 15, 34, 3, 24]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hZ = void 0);
			let C = class extends w.$1c {
				get length() {
					return this.a.length;
				}
				constructor(m) {
					super(), (this.b = m), (this.a = []);
				}
				addSaveParticipant(m) {
					const r = (0, E.$Xb)(this.a, m);
					return (0, w.$Yc)(() => r());
				}
				async participate(m, r, u, a) {
					m.model?.pushStackElement();
					for (const h of this.a) {
						if (a.isCancellationRequested || m.isDisposed()) break;
						try {
							const c = h.participate(m, r, u, a);
							await (0, t.$Ah)(c, a);
						} catch (c) {
							this.b.warn(c);
						}
					}
					m.model?.pushStackElement();
				}
				dispose() {
					this.a.splice(0, this.a.length), super.dispose();
				}
			};
			(e.$hZ = C), (e.$hZ = C = Ne([j(0, i.$ik)], C));
		}),
		