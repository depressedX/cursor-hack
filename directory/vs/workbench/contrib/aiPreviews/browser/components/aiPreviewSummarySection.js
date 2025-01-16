define(
			de[4235],
			he([1, 0, 2, 2, 2, 2, 2, 13, 14, 26, 338, 1272, 972, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$eZc = g);
				const n = (0, t.template)(
					'<div><div class="ai-preview-summary-toolbar-item"><div>',
				);
				function g(p) {
					const o = (0, c.$odc)(),
						[f, b] = (0, d.createSignal)(""),
						[s, l] = (0, d.createSignal)(!1),
						[y, $] = (0, d.createSignal)(!1);
					(0, d.createEffect)(() => {
						p.isRunning && ($(!y()), p.stopRunning());
					});
					const v = (0, d.createMemo)(
						() =>
							o.reactiveStorageService.applicationUserPersistentStorage
								.aiPreviewSettings,
					);
					return (
						(0, d.createEffect)(async () => {
							const S = await o.aiService.streamAiPreviewSummary({
								realContext: p.realContext,
								isDetailed: y(),
							});
							b(""), l(!1);
							const I = v()?.summary?.isExpanded;
							o.reactiveStorageService.setApplicationUserPersistentStorage(
								"aiPreviewSettings",
								{ ...v(), summary: { ...v()?.summary, isExpanded: !1 } },
							);
							for await (const T of S) b((P) => P + T);
							l(!0),
								I &&
									o.reactiveStorageService.setApplicationUserPersistentStorage(
										"aiPreviewSettings",
										{ ...v(), summary: { ...v()?.summary, isExpanded: !0 } },
									);
						}),
						(0, C.createComponent)(a.$$Yc, {
							get title() {
								return h.$bZc.summary;
							},
							get isSelected() {
								return p.isSelected;
							},
							get iconClass() {
								return r.ThemeIcon.asClassName(m.$ak.book);
							},
							get isLoading() {
								return !s();
							},
							get isOpen() {
								return v()?.summary?.isExpanded ?? !0;
							},
							get setIsOpen() {
								return p.setIsOpen;
							},
							get toolbarContent() {
								return (() => {
									const S = n(),
										I = S.firstChild,
										T = I.firstChild;
									return (
										S.style.setProperty("display", "flex"),
										S.style.setProperty("align-items", "center"),
										T.addEventListener("click", (P) => {
											P.stopPropagation(), $(!y());
										}),
										T.style.setProperty("cursor", "pointer"),
										T.style.setProperty(
											"color",
											"var(--vscode-list-deemphasizedForeground)",
										),
										(0, E.effect)(
											(P) => {
												const k = y()
														? "Hide detailed summary"
														: "Show detailed summary",
													L =
														(y()
															? r.ThemeIcon.asClassName(m.$ak.collapseAll)
															: r.ThemeIcon.asClassName(m.$ak.expandAll)) +
														" ai-preview-clickable";
												return (
													k !== P._v$ &&
														(0, w.setAttribute)(I, "data-tooltip", (P._v$ = k)),
													L !== P._v$2 && (0, i.className)(T, (P._v$2 = L)),
													P
												);
											},
											{ _v$: void 0, _v$2: void 0 },
										),
										S
									);
								})();
							},
							get children() {
								return (0, C.createComponent)(d.Show, {
									get when() {
										return f().length > 0;
									},
									get children() {
										return (0, C.createComponent)(u.$4$b, {
											class: "ai-preview-summary fade-in",
											get rawText() {
												return f();
											},
											get finished() {
												return s();
											},
											codeBlockProps: { shouldRecompute: 1 },
										});
									},
								});
							},
						})
					);
				}
			},
		),
		