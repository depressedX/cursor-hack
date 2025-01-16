define(de[884], he([1, 0, 366]), function (ce, e, t) {
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
		}),
		define(
			de[637],
			he([1, 0, 366, 2056, 728, 883]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.initMetric = void 0);
				const C = (d, m) => {
					const r = (0, E.getNavigationEntry)();
					let u = "navigate";
					return (
						r &&
							((t.WINDOW.document && t.WINDOW.document.prerendering) ||
							(0, w.getActivationStart)() > 0
								? (u = "prerender")
								: t.WINDOW.document && t.WINDOW.document.wasDiscarded
									? (u = "restore")
									: r.type && (u = r.type.replace(/_/g, "-"))),
						{
							name: d,
							value: typeof m > "u" ? -1 : m,
							rating: "good",
							delta: 0,
							entries: [],
							id: (0, i.generateUniqueID)(),
							navigationType: u,
						}
					);
				};
				e.initMetric = C;
			},
		),
		