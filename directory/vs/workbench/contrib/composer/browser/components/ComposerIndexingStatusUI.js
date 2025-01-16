define(
			de[4279],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 36, 242, 58, 2413]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerIndexingStatusUI = b);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)(
						'<span>Note: codebase not indexed yet. Results are much better when indexed. <a href="#" class="indexing-status-link">Index now</a>.',
					),
					p = (0, t.template)(
						'<span>Note: codebase not indexed yet. Results are much better when indexed. <span class="indexing-status-currently">Currently indexing',
					),
					o = (0, t.template)('<div class="indexing-status-container">'),
					f = { showAll: !1, showNotIndexed: !1, showIndexing: !1 };
				function b(s) {
					const l = (0, a.$odc)(),
						y = (0, m.createMemo)(
							() =>
								l.reactiveStorageService.nonPersistentStorage
									.repositoryIndexingStatus?.case,
						),
						$ = (0, m.createMemo)(
							() => l.composerDataService.selectedComposer?.isAgentic ?? !1,
						),
						v = (0, m.createMemo)(() =>
							l.repositoryService.isIndexedMainLocalRepository(),
						),
						S = (0, m.createMemo)(
							() =>
								f.showAll ||
								(($() || !!s.message?.context?.usesCodebase) && !v()),
						),
						I = (0, m.createMemo)(
							() =>
								f.showNotIndexed || y() === "not-indexed" || y() === "paused",
						),
						T = (0, m.createMemo)(
							() =>
								f.showIndexing ||
								y() === "indexing" ||
								y() === "indexing-setup",
						);
					return (0, w.createComponent)(m.Show, {
						get when() {
							return (0, d.memo)(() => !!S())() && (I() || T());
						},
						get children() {
							const P = o();
							return (
								P.style.setProperty("margin-top", "8px"),
								P.style.setProperty("padding", "8px 8px"),
								P.style.setProperty("font-size", "12px"),
								P.style.setProperty("border-radius", "4px"),
								P.style.setProperty(
									"background-color",
									"var(--vscode-commandCenter-background)",
								),
								P.style.setProperty(
									"color",
									"var(--vscode-commandCenter-foreground)",
								),
								P.style.setProperty("display", "flex"),
								P.style.setProperty("flex-direction", "row"),
								P.style.setProperty("gap", "8px"),
								P.style.setProperty("align-items", "center"),
								(0, i.insert)(
									P,
									(0, w.createComponent)(m.Show, {
										get when() {
											return I();
										},
										get children() {
											return [
												(() => {
													const k = n();
													return (
														(0, C.effect)(() =>
															(0, E.className)(
																k,
																`${u.ThemeIcon.asClassName(r.$ak.warning)} indexing-status-warning-icon`,
															),
														),
														k
													);
												})(),
												(() => {
													const k = g();
													return (
														k.firstChild.nextSibling.addEventListener(
															"click",
															(M) => {
																M.preventDefault(),
																	l.commandService.executeCommand(
																		"cursorai.action.repo.indexMainRepository",
																	);
															},
														),
														k
													);
												})(),
											];
										},
									}),
									null,
								),
								(0, i.insert)(
									P,
									(0, w.createComponent)(m.Show, {
										get when() {
											return T();
										},
										get children() {
											return [
												(() => {
													const k = n();
													return (
														(0, C.effect)(() =>
															(0, E.className)(
																k,
																`${u.ThemeIcon.asClassName(r.$ak.warning)} indexing-status-warning-icon`,
															),
														),
														k
													);
												})(),
												(() => {
													const k = p(),
														L = k.firstChild,
														D = L.nextSibling,
														M = D.firstChild;
													return (
														D.addEventListener("click", () => {
															l.commandService.executeCommand(
																c.$QV,
																"features",
																"cursor-settings-codebase-indexing",
															);
														}),
														D.style.setProperty("display", "inline-flex"),
														D.style.setProperty("align-items", "center"),
														(0, i.insert)(
															D,
															(0, w.createComponent)(h.$C$b, {
																show: !0,
																speed: "slow",
																style: { width: "3ch", "flex-shrink": 0 },
															}),
															null,
														),
														k
													);
												})(),
											];
										},
									}),
									null,
								),
								P
							);
						},
					});
				}
			},
		),
		