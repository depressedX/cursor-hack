define(de[3050], he([1, 0, 3, 77, 184, 112]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$w2c = void 0);
			let C = class extends t.$1c {
				constructor(m, r) {
					super(), (this.a = r);
					const u = (0, i.observableFromEvent)(
						this,
						r.onSoundEnabledChanged(w.$Twb.onDebugBreak),
						() => r.isSoundEnabled(w.$Twb.onDebugBreak),
					);
					this.D(
						(0, i.autorunWithStore)((a, h) => {
							if (!u.read(a)) return;
							const c = new Map();
							h.add(
								(0, t.$Yc)(() => {
									c.forEach((n) => n.dispose()), c.clear();
								}),
							),
								h.add(m.onDidNewSession((n) => c.set(n, this.b(n)))),
								h.add(
									m.onDidEndSession(({ session: n }) => {
										c.get(n)?.dispose(), c.delete(n);
									}),
								),
								m
									.getModel()
									.getSessions()
									.forEach((n) => c.set(n, this.b(n)));
						}),
					);
				}
				b(m) {
					return m.onDidChangeState((r) => {
						const u = m.getStoppedDetails();
						u &&
							u.reason === "breakpoint" &&
							this.a.playSignal(w.$Twb.onDebugBreak);
					});
				}
			};
			(e.$w2c = C), (e.$w2c = C = Ne([j(0, E.$75), j(1, w.$Owb)], C));
		}),
		