define(
			de[3193],
			he([1, 0, 2, 2, 2, 228, 14, 26, 47, 310]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$D_b = void 0);
				const u = (0, t.template)("<i>");
				e.$D_b = new r.$u_b(
					"Definitions",
					(() => {
						const a = u();
						return (
							(0, w.effect)(() =>
								(0, i.className)(a, d.ThemeIcon.asClassName(C.$ak.repo)),
							),
							a
						);
					})(),
					{
						case: "simple_mentions_handler",
						contextIntent: () => ({
							uuid: (0, m.$9g)(),
							type: E.ContextIntent_Type.USER_ADDED,
							intent: { case: "commitNotes", value: {} },
						}),
					},
					9.7,
				);
			},
		),
		