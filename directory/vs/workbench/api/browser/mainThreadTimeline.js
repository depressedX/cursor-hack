define(
			de[3373],
			he([1, 0, 6, 34, 88, 101, 814, 197]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nqc = void 0);
				let m = class {
					constructor(u, a, h) {
						(this.c = a),
							(this.d = h),
							(this.b = new Map()),
							(this.a = u.getProxy(w.$mbb.ExtHostTimeline));
					}
					$registerTimelineProvider(u) {
						this.c.trace(
							`MainThreadTimeline#registerTimelineProvider: id=${u.id}`,
						);
						const a = this.a,
							h = this.b;
						let c = h.get(u.id);
						c === void 0 && ((c = new t.$re()), h.set(u.id, c)),
							this.d.registerTimelineProvider({
								...u,
								onDidChange: c.event,
								async provideTimeline(n, g, p) {
									return (0, d.$ji)(await a.$getTimeline(u.id, n, g, p));
								},
								dispose() {
									h.delete(u.id), c?.dispose();
								},
							});
					}
					$unregisterTimelineProvider(u) {
						this.c.trace(
							`MainThreadTimeline#unregisterTimelineProvider: id=${u}`,
						),
							this.d.unregisterTimelineProvider(u);
					}
					$emitTimelineChangeEvent(u) {
						this.c.trace(
							`MainThreadTimeline#emitChangeEvent: id=${u.id}, uri=${u.uri?.toString(!0)}`,
						),
							this.b.get(u.id)?.fire(u);
					}
					dispose() {}
				};
				(e.$nqc = m),
					(e.$nqc = m =
						Ne(
							[
								(0, E.$tmc)(w.$lbb.MainThreadTimeline),
								j(1, i.$ik),
								j(2, C.$57),
							],
							m,
						));
			},
		),
		