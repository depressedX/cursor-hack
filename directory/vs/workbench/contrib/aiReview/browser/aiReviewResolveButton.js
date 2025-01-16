define(
			de[4134],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wzc = void 0);
				const h = (0, t.template)("<span>"),
					c = (0, t.template)("<button>"),
					n = (g) => {
						const p = (0, a.$odc)(),
							[o, f] = (0, m.createSignal)(!1);
						return (() => {
							const b = c();
							return (
								b.addEventListener("click", (s) => {
									s.stopPropagation(),
										p.aiReviewService.toggleThreadResolveStatus(
											g.chunkId,
											g.thread.id,
											!g.thread.isResolved,
										),
										g.onClick?.();
								}),
								b.addEventListener("mouseleave", () => f(!1)),
								b.addEventListener("mouseenter", () => f(!0)),
								(0, w.insert)(
									b,
									(0, E.createComponent)(m.Show, {
										get when() {
											return g.thread.isResolved;
										},
										get fallback() {
											return [
												"resolve",
												(0, E.createComponent)(m.Show, {
													get when() {
														return o();
													},
													get children() {
														const s = h();
														return (
															s.style.setProperty("font-size", "10px"),
															(0, d.effect)(() =>
																(0, C.className)(
																	s,
																	u.ThemeIcon.asClassName(r.$ak.check),
																),
															),
															s
														);
													},
												}),
											];
										},
										get children() {
											return [
												"resolved",
												(0, E.createComponent)(m.Show, {
													get when() {
														return o();
													},
													get children() {
														const s = h();
														return (
															s.style.setProperty("font-size", "10px"),
															(0, d.effect)(() =>
																(0, C.className)(
																	s,
																	u.ThemeIcon.asClassName(r.$ak.x),
																),
															),
															s
														);
													},
												}),
											];
										},
									}),
								),
								(0, d.effect)(
									(s) => {
										const l =
												"ai-review-chunk-thread-button" +
												(g.thread.isResolved ? " resolved" : ""),
											y = { ...(g.showAnyways ? { display: "flex" } : {}) };
										return (
											l !== s._v$ && (0, C.className)(b, (s._v$ = l)),
											(s._v$2 = (0, i.style)(b, y, s._v$2)),
											s
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								b
							);
						})();
					};
				e.$wzc = n;
			},
		),
		