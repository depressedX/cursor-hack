define(de[4268], he([1, 0, 2, 36, 4267]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$CAc = E);
			function E(C, d, m, r) {
				return (0, i.$ndc)(
					() => (0, t.createComponent)(w.$BAc, { store: m, editor: r }),
					C,
					d,
				);
			}
		}),
		define(
			de[4269],
			he([1, 0, 7, 3, 56, 5, 850, 4268, 45, 13, 1522]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DAc = void 0),
					(t = mt(t));
				var u;
				(function (h) {
					let c;
					(function (g) {
						(g[(g.Hidden = 0)] = "Hidden"), (g[(g.Showing = 1)] = "Showing");
					})((c = h.Type || (h.Type = {}))),
						(h.Hidden = { type: c.Hidden });
					class n {
						constructor(p, o) {
							(this.editorPosition = p),
								(this.widgetPosition = o),
								(this.type = c.Showing);
						}
					}
					h.Showing = n;
				})(u || (u = {}));
				let a = class extends i.$1c {
					constructor(c, n, g, p) {
						super(),
							(this.g = c),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.allowEditorOverflow = !0),
							(this.f = u.Hidden),
							(this.c = this.D(this.m.createScoped(this))),
							([this.previewBoxStore, this.n] = this.c.createStore({
								bug: void 0,
							})),
							(this.a = t.$("div.bugFinderPreviewBoxWidgetBaseContainer")),
							(this.b = t.$("div")),
							(this.b.tabIndex = -1),
							this.a.appendChild(this.b),
							this.g.addContentWidget(this),
							this.D({
								dispose: () => {
									this.a.remove();
								},
							}),
							this.D(
								this.j.onDidBugsChange((o) => {
									o === this.g.getModel()?.uri.fsPath && this.update();
								}),
							),
							(0, d.$CAc)(this.b, this.h, this.previewBoxStore, this.g);
					}
					update() {
						(0, r.untrack)(() => {
							const c = this.previewBoxStore.bug?.decorationId;
							try {
								const n = this.g.getModel();
								if (!n) {
									(this.f = u.Hidden),
										this.n({ bug: void 0 }),
										this.g.layoutContentWidget(this);
									return;
								}
								if (!this.g.hasWidgetFocus()) {
									(this.f = u.Hidden),
										this.n({ bug: void 0 }),
										this.g.layoutContentWidget(this);
									return;
								}
								const g = this.g.getPosition();
								if (!g) {
									(this.f = u.Hidden),
										this.n({ bug: void 0 }),
										this.g.layoutContentWidget(this);
									return;
								}
								let p;
								for (const f of this.j.activeBugs.get(n.uri.fsPath) ?? []) {
									const b = n.getDecorationRange(f.decorationId);
									if (b && b.containsPosition(g)) {
										p = f;
										break;
									}
								}
								if (!p) {
									(this.f = u.Hidden),
										this.n({ bug: void 0 }),
										this.g.layoutContentWidget(this);
									return;
								}
								(this.previewBoxStore.bug?.bug !== p.bug ||
									this.previewBoxStore.bug?.decorationId !== p.decorationId) &&
									this.n({ bug: { bug: p.bug, decorationId: p.decorationId } });
								const o = n.getDecorationRange(p.decorationId);
								if (!o) return;
								(this.f = new u.Showing(g, {
									position: { lineNumber: o.endLineNumber + 1, column: 1 },
									preference: [w.ContentWidgetPositionPreference.BELOW],
								})),
									this.g.layoutContentWidget(this);
							} finally {
								c &&
									c !== this.previewBoxStore.bug?.decorationId &&
									this.j.markUnviewed(this.g, { decorationId: c }),
									this.previewBoxStore.bug &&
										c !== this.previewBoxStore.bug.decorationId &&
										this.j.markViewed(this.g, {
											decorationId: this.previewBoxStore.bug.decorationId,
										});
							}
						});
					}
					dispose() {
						super.dispose(), this.g.removeContentWidget(this);
					}
					getId() {
						return "BugBotLinterPreviewBoxWidget";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return this.f.type === u.Type.Showing
							? this.f.widgetPosition
							: null;
					}
				};
				(e.$DAc = a),
					(e.$DAc = a = Ne([j(1, E.$Li), j(2, C.$idc), j(3, m.$0zb)], a));
			},
		),
		define(
			de[1989],
			he([1, 0, 149, 3, 8, 5, 4269]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EAc = void 0);
				let m = class extends i.$1c {
					static {
						d = this;
					}
					static {
						this.ID = "editor.contrib.bugBotLinterPreviewBoxController";
					}
					static get(u) {
						return u.getContribution(d.ID);
					}
					constructor(u, a, h) {
						super(),
							(this.b = h),
							(this.a = u),
							(this.widget = new t.$Y(() =>
								this.D(this.b.createInstance(C.$DAc, this.a)),
							)),
							this.D(this.a.onDidChangeModel(() => this.update())),
							this.D(this.a.onDidBlurEditorWidget(() => this.update())),
							this.D(this.a.onDidFocusEditorWidget(() => this.update())),
							this.D(this.a.onDidChangeCursorPosition(() => this.update())),
							this.update();
					}
					update() {
						this.widget.value.update();
					}
				};
				(e.$EAc = m), (e.$EAc = m = d = Ne([j(1, w.$6j), j(2, E.$Li)], m));
			},
		),
		define(
			de[4270],
			he([1, 0, 11, 850, 58, 46, 46, 56, 8, 1051, 43, 27, 71, 27, 179, 1989]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FAc = void 0),
					r.$Bdc.registerEditorAction(w.$TW, (o, f, b) => {
						(0, C.$ntb)(
							class extends E.$itb {
								constructor() {
									super({
										id: w.$TW,
										label: "Dismiss Bug Finder Lint",
										alias: "Dismiss Bug Finder Lint",
										precondition: m.$Kj.function(() => {
											const s = f.activeEditorPane?.getControl();
											if (!(0, d.$0sb)(s)) return !1;
											const l = g.$EAc.get(s);
											return !(
												!l || l.widget.value.previewBoxStore.bug === void 0
											);
										}),
										kbOpts: {
											kbExpr: h.EditorContextKeys.editorTextFocus,
											primary: c.KeyMod.CtrlCmd | a.KeyCode.Backspace,
											weight: u.KeybindingWeight.CursorMaxPriority,
										},
									});
								}
								async run(s, l) {
									s.get(i.$idc).dismissBugBotLinter(l);
								}
							},
						);
					});
				class p extends t.$3X {
					constructor() {
						super({
							id: "bugBotLinter.triggerDummyLint",
							title: {
								value: "Trigger Dummy Lint (Debug)",
								original: "Trigger Dummy Lint (Debug)",
							},
							f1: !0,
							category: "Developer",
							precondition: n.$$Lb,
						});
					}
					async run(f) {
						await f.get(i.$idc).createDummyBug();
					}
				}
				(e.$FAc = p), (0, t.$4X)(p);
			},
		),
		define(
			de[4271],
			he([1, 0, 46, 46, 1989, 850, 4270]),
			function (ce, e, t, i, w) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$qtb)(
						w.$EAc.ID,
						w.$EAc,
						t.EditorContributionInstantiation.Eventually,
					);
			},
		),
		define(
			de[4272],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 134, 1375, 36, 147, 7, 58, 696, 1070,
				135, 41, 116, 177, 2405,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.RepoStep = void 0),
					(e.CodebaseIndexingWarnings = A),
					(e.ComposerGlobalContextAnimation = R),
					(n = mt(n));
				const y = (0, t.template)(
						'<div class="codebase-currently-indexing-hint-in-chat">Currently indexing your codebase (<!>% done). Results will be faster and more accurate if you try once done.',
					),
					$ = (0, t.template)(
						'<div class="tooltip" id="enable-indexing-tooltip"><div class="codebase-not-auto-indexed-hint-in-chat">',
					),
					v = (0, t.template)(
						'<div><div class="codebase-currently-indexing-hint-in-chat"><span>Indexing is disabled. This results in significantly worse									speed and accuracy in codebase chats. </span><span>Turn on indexing</span><span> to fix this</span></div><div class="codebase-not-auto-indexed-hint-in-chat"></div><div><div class="codicon codicon-kebab-vertical" id="enable-indexing-tooltip-button">',
					),
					S = (0, t.template)(
						'<div class="tooltip" id="index-codebase-tooltip"><div class="codebase-not-auto-indexed-hint-in-chat">',
					),
					I = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat"><span>Error indexing codebase</span><div><div class="codicon codicon-kebab-vertical" id="index-codebase-tooltip-button">',
					),
					T = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat-below">Codebase chat is falling back to BM25, which is slower and less accurate than embeddings.',
					),
					P = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat"><span>Codebase not auto-indexed (too many files)</span><div><div class="codicon codicon-kebab-vertical" id="index-codebase-tooltip-button">',
					),
					k = (0, t.template)(
						'<div class="codebase-not-auto-indexed-hint-in-chat-below">Manually enable indexing for this codebase to fix this (codebase chat will be slower and less accurate until you do).',
					),
					L = (0, t.template)("<div>"),
					D = (0, t.template)('<div class="selectable-hover">And <!> others'),
					M = (0, t.template)(
						'<div class="query-list-item"><div class="query-list-item-content"><div class="query-list-item-title"><span class="query-list-item-number">.</span><span class="query-list-item-text"></span></div><div class="query-list-item-subtitle">',
					);
				var N;
				(function (x) {
					(x[(x.None = 0)] = "None"),
						(x[(x.GeneratingQueries = 1)] = "GeneratingQueries"),
						(x[(x.SearchingFiles = 2)] = "SearchingFiles"),
						(x[(x.RerankingFiles = 3)] = "RerankingFiles"),
						(x[(x.GeneratingTokens = 4)] = "GeneratingTokens"),
						(x[(x.Done = 5)] = "Done");
				})(N || (e.RepoStep = N = {}));
				function A(x) {
					const H = (0, h.$odc)(),
						[q, V] = (0, r.createSignal)(!1),
						[G, K] = (0, r.createSignal)(!1),
						[J, W] = (0, r.createSignal)(null),
						X = (ie) => {
							const ne = n.$Ogb(),
								ee = J();
							ee && (ne.removeEventListener("click", ee), W(null));
							const _ = ne.document.getElementById("enable-indexing-tooltip"),
								te = ne.document.getElementById(
									"enable-indexing-tooltip-button",
								),
								Q = ne.document.getElementById("index-codebase-tooltip"),
								Z = ne.document.getElementById("index-codebase-tooltip-button"),
								se =
									ie === "enable-indexing"
										? [_, te]
										: ie === "index-codebase"
											? [Q, Z]
											: [],
								re = (le) => {
									se.includes(le.target) ||
										(ie === "enable-indexing"
											? V(!1)
											: ie === "index-codebase" && K(!1));
								};
							ne.addEventListener("click", re), W(() => re);
						},
						Y = () => {
							const ie = n.$Ogb(),
								ne = J();
							ne && ie.removeEventListener("click", ne);
						};
					return (
						(0, r.createEffect)(
							() => (
								q() ? X("enable-indexing") : G() ? X("index-codebase") : Y(),
								() => {
									Y();
								}
							),
						),
						(0, d.createComponent)(r.Show, {
							get when() {
								return x.searchType === u.SearchType.keyword;
							},
							get children() {
								return (0, d.createComponent)(r.Switch, {
									get children() {
										return [
											(0, d.createComponent)(r.Match, {
												get when() {
													return [
														"loading",
														"indexing-setup",
														"indexing",
													].includes(
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ?? "",
													);
												},
												get children() {
													const ie = y(),
														ne = ie.firstChild,
														ee = ne.nextSibling,
														_ = ee.nextSibling;
													return (
														(0, m.insert)(
															ie,
															() =>
																(
																	(H.reactiveStorageService.nonPersistentStorage
																		.mainLocalRepositoryProgress?.progress ??
																		0) * 100
																).toFixed(1),
															ee,
														),
														ie
													);
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ===
															"not-indexed" &&
														Date.now() -
															H.reactiveStorageService
																.applicationUserPersistentStorage.indexingState
																.lastAskedToIndexTime >
															1e3 * 60 * 60 * 24 * 7 &&
														H.reactiveStorageService
															.applicationUserPersistentStorage.indexingState
															.fullyDisableAskToIndex !== !0
													);
												},
												get children() {
													const ie = v(),
														ne = ie.firstChild,
														ee = ne.firstChild,
														_ = ee.nextSibling,
														te = ne.nextSibling,
														Q = te.nextSibling,
														Z = Q.firstChild;
													return (
														ie.style.setProperty("display", "flex"),
														ie.style.setProperty("align-items", "center"),
														ne.style.setProperty(
															"color",
															"var(--vscode-errorForeground)",
														),
														_.addEventListener("click", () => {
															H.reactiveStorageService.setApplicationUserPersistentStorage(
																"indexingState",
																{ lastAskedToIndexTime: Date.now() },
															),
																H.repositoryService.indexMainRepository(),
																H.reactiveStorageService.setApplicationUserPersistentStorage(
																	"indexRepository",
																	!0,
																);
														}),
														_.style.setProperty("text-decoration", "underline"),
														_.style.setProperty("cursor", "pointer"),
														_.style.setProperty("text-underline-offset", "2px"),
														(0, m.insert)(
															te,
															(0, d.createComponent)(c.$rdc, {
																title: "Ignore",
																type: "secondary",
																onClick: () => {
																	H.reactiveStorageService.setApplicationUserPersistentStorage(
																		"indexingState",
																		{ lastAskedToIndexTime: Date.now() },
																	);
																},
															}),
														),
														Z.addEventListener("click", (se) => {
															se.stopPropagation(), V(!q());
														}),
														Z.style.setProperty("font-size", "12px"),
														Z.style.setProperty("width", "12px"),
														Z.style.setProperty("height", "12px"),
														Z.style.setProperty("text-align", "center"),
														Z.style.setProperty("cursor", "pointer"),
														(0, m.insert)(
															Q,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return q();
																},
																get children() {
																	const se = $(),
																		re = se.firstChild;
																	return (
																		se.style.setProperty("display", "flex"),
																		se.style.setProperty(
																			"align-items",
																			"center",
																		),
																		se.style.setProperty(
																			"background-color",
																			"var(--vscode-editorHoverWidget-background)",
																		),
																		se.style.setProperty(
																			"color",
																			"var(--vscode-editorHoverWidget-foreground)",
																		),
																		se.style.setProperty("padding", "8px"),
																		se.style.setProperty(
																			"border-radius",
																			"4px",
																		),
																		se.style.setProperty(
																			"box-shadow",
																			"0 2px 8px rgba(0, 0, 0, 0.2)",
																		),
																		se.style.setProperty(
																			"position",
																			"absolute",
																		),
																		se.style.setProperty("top", "0"),
																		se.style.setProperty("right", "0"),
																		se.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		se.style.setProperty("font-size", "12px"),
																		se.style.setProperty("z-index", "1000"),
																		(0, m.insert)(
																			re,
																			(0, d.createComponent)(c.$rdc, {
																				title: "Don't show me again",
																				type: "secondary",
																				onClick: () => {
																					H.reactiveStorageService.setApplicationUserPersistentStorage(
																						"indexingState",
																						{ fullyDisableAskToIndex: !0 },
																					);
																				},
																			}),
																		),
																		se
																	);
																},
															}),
															null,
														),
														(0, E.effect)(() =>
															(0, w.setAttribute)(
																Z,
																"data-tooltip",
																q() ? "Don't show me again" : void 0,
															),
														),
														ie
													);
												},
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														H.reactiveStorageService
															.workspaceUserPersistentStorage
															.hasManuallyDisabledAskToIndex !== !0 &&
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case === "error" &&
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus
													);
												},
												children: (ie) => [
													(() => {
														const ne = I(),
															ee = ne.firstChild,
															_ = ee.nextSibling,
															te = _.firstChild;
														return (
															ne.style.setProperty("display", "flex"),
															ne.style.setProperty("align-items", "flex-end"),
															ee.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															(0, m.insert)(
																ne,
																(0, d.createComponent)(c.$rdc, {
																	title: "Open Settings",
																	type: "primary",
																	onClick: () => {
																		H.commandService.executeCommand(
																			g.$QV,
																			"features",
																			"cursor-settings-codebase-indexing",
																		);
																	},
																}),
																_,
															),
															te.addEventListener("click", (Q) => {
																Q.stopPropagation(), K(!G());
															}),
															te.style.setProperty("font-size", "12px"),
															te.style.setProperty("width", "12px"),
															te.style.setProperty("height", "12px"),
															te.style.setProperty("text-align", "center"),
															te.style.setProperty("cursor", "pointer"),
															(0, m.insert)(
																_,
																(0, d.createComponent)(r.Show, {
																	get when() {
																		return G();
																	},
																	get children() {
																		const Q = S(),
																			Z = Q.firstChild;
																		return (
																			Q.style.setProperty("display", "flex"),
																			Q.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Q.style.setProperty(
																				"background-color",
																				"var(--vscode-editorHoverWidget-background)",
																			),
																			Q.style.setProperty(
																				"color",
																				"var(--vscode-editorHoverWidget-foreground)",
																			),
																			Q.style.setProperty("padding", "8px"),
																			Q.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			Q.style.setProperty(
																				"box-shadow",
																				"0 2px 8px rgba(0, 0, 0, 0.2)",
																			),
																			Q.style.setProperty(
																				"position",
																				"absolute",
																			),
																			Q.style.setProperty("top", "0"),
																			Q.style.setProperty("right", "0"),
																			Q.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			Q.style.setProperty("font-size", "12px"),
																			Q.style.setProperty("z-index", "1000"),
																			(0, m.insert)(
																				Z,
																				(0, d.createComponent)(c.$rdc, {
																					title: "Don't show me again",
																					type: "secondary",
																					onClick: () => {
																						H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																							"hasManuallyDisabledAskToIndex",
																							!0,
																						);
																					},
																				}),
																			),
																			Q
																		);
																	},
																}),
																null,
															),
															(0, E.effect)(() =>
																(0, w.setAttribute)(
																	te,
																	"data-tooltip",
																	G() ? "Don't show me again" : void 0,
																),
															),
															ne
														);
													})(),
													(() => {
														const ne = T();
														return (
															ne.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															ne
														);
													})(),
												],
											}),
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														H.reactiveStorageService
															.workspaceUserPersistentStorage
															.hasManuallyDisabledAskToIndex !== !0 &&
														Date.now() -
															(H.reactiveStorageService
																.workspaceUserPersistentStorage
																.lastAskedToIndexTime ?? 0) >
															1e3 * 60 * 60 * 24 * 7 &&
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus?.case ===
															"not-auto-indexing" &&
														H.reactiveStorageService.nonPersistentStorage
															.repositoryIndexingStatus
													);
												},
												children: (ie) => [
													(() => {
														const ne = P(),
															ee = ne.firstChild,
															_ = ee.nextSibling,
															te = _.firstChild;
														return (
															ne.style.setProperty("display", "flex"),
															ne.style.setProperty("align-items", "flex-end"),
															ee.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															(0, m.insert)(
																ne,
																(0, d.createComponent)(c.$rdc, {
																	title: "Enable Indexing",
																	type: "primary",
																	onClick: () => {
																		H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																			"hasAskedToIndex",
																			!0,
																		),
																			H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																				"lastAskedToIndexTime",
																				Date.now(),
																			),
																			H.repositoryService.indexMainRepository();
																	},
																}),
																_,
															),
															(0, m.insert)(
																ne,
																(0, d.createComponent)(c.$rdc, {
																	title: "Ignore",
																	type: "secondary",
																	onClick: () => {
																		H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																			"lastAskedToIndexTime",
																			Date.now(),
																		);
																	},
																}),
																_,
															),
															te.addEventListener("click", (Q) => {
																Q.stopPropagation(), K(!G());
															}),
															te.style.setProperty("font-size", "12px"),
															te.style.setProperty("width", "12px"),
															te.style.setProperty("height", "12px"),
															te.style.setProperty("text-align", "center"),
															te.style.setProperty("cursor", "pointer"),
															(0, m.insert)(
																_,
																(0, d.createComponent)(r.Show, {
																	get when() {
																		return G();
																	},
																	get children() {
																		const Q = S(),
																			Z = Q.firstChild;
																		return (
																			Q.style.setProperty("display", "flex"),
																			Q.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Q.style.setProperty(
																				"background-color",
																				"var(--vscode-editorHoverWidget-background)",
																			),
																			Q.style.setProperty(
																				"color",
																				"var(--vscode-editorHoverWidget-foreground)",
																			),
																			Q.style.setProperty("padding", "8px"),
																			Q.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			Q.style.setProperty(
																				"box-shadow",
																				"0 2px 8px rgba(0, 0, 0, 0.2)",
																			),
																			Q.style.setProperty(
																				"position",
																				"absolute",
																			),
																			Q.style.setProperty("top", "0"),
																			Q.style.setProperty("right", "0"),
																			Q.style.setProperty(
																				"white-space",
																				"nowrap",
																			),
																			Q.style.setProperty("font-size", "12px"),
																			Q.style.setProperty("z-index", "1000"),
																			(0, m.insert)(
																				Z,
																				(0, d.createComponent)(c.$rdc, {
																					title: "Don't show me again",
																					type: "secondary",
																					onClick: () => {
																						H.reactiveStorageService.setWorkspaceUserPersistentStorage(
																							"hasManuallyDisabledAskToIndex",
																							!0,
																						);
																					},
																				}),
																			),
																			Q
																		);
																	},
																}),
																null,
															),
															(0, E.effect)(() =>
																(0, w.setAttribute)(
																	te,
																	"data-tooltip",
																	G() ? "Don't show me again" : void 0,
																),
															),
															ne
														);
													})(),
													(() => {
														const ne = k();
														return (
															ne.style.setProperty(
																"color",
																"var(--vscode-errorForeground)",
															),
															ne
														);
													})(),
												],
											}),
										];
									},
								});
							},
						})
					);
				}
				function R(x) {
					const H = (0, h.$odc)(),
						q = 0.3,
						V = 0.05,
						G = 15,
						[K, J] = (0, r.createSignal)(N.None),
						{ currentComposer: W, updateCurrentComposer: X } = (0,
						l.useComposerDataHandle)(() => x.composerDataHandle),
						[Y, ie] = (0, r.createSignal)(!0),
						ne = (0, r.createMemo)(() => x.hydeResults !== void 0);
					(0, r.createEffect)(() => {
						J(x.repoStep);
					});
					const ee = (0, r.createMemo)(() =>
							x.repoStep > N.GeneratingQueries
								? "Computed Search Queries"
								: "Computing Search Queries",
						),
						_ = (0, r.createMemo)(() =>
							x.textIsGenerated
								? "Search completed (" + x.fileResults.length + " files)"
								: x.repoStep === N.GeneratingTokens && !x.textIsGenerated
									? "Reading files"
									: x.repoStep > N.GeneratingTokens
										? "Read files"
										: x.addFolders.length === 0
											? "Searching for files"
											: x.addFolders.length === 1
												? "Searching for folder"
												: "Searching for folders",
						),
						te = (0, r.createMemo)(() =>
							x.fileResults === void 0 ? [] : x.fileResults,
						),
						Q = (0, r.createMemo)(() =>
							x.hydeResults === void 0
								? { queries: [], reasoning: "" }
								: x.hydeResults,
						),
						Z = (0, r.createMemo)(
							() =>
								ne() &&
								(x.repoStep === N.GeneratingQueries || Q().queries.length > 0),
						),
						se = (0, r.createMemo)(
							() => K() > N.GeneratingQueries && te().length > 0,
						),
						re = (0, r.createMemo)(
							() =>
								(x.repoStep >= N.GeneratingTokens || x.repoStep === N.None) &&
								x.textIsGenerated &&
								x.nextAiBubbleId,
						),
						le = (0, r.createMemo)(() => Z() || se() || re());
					return (0, d.createComponent)(r.Show, {
						get when() {
							return le();
						},
						get children() {
							const oe = L();
							return (
								oe.style.setProperty("padding-top", "10px"),
								oe.style.setProperty("padding-left", "6px"),
								oe.style.setProperty("padding-right", "6px"),
								oe.style.setProperty("display", "flex"),
								oe.style.setProperty("flex-direction", "column"),
								oe.style.setProperty("gap", "6px"),
								(0, m.insert)(
									oe,
									(0, d.createComponent)(r.Show, {
										get when() {
											return Z();
										},
										get children() {
											return (0, d.createComponent)(U, {
												get headerText() {
													return ee();
												},
												get hydeResults() {
													return Q();
												},
												get isLoading() {
													return K() === N.GeneratingQueries;
												},
											});
										},
									}),
									null,
								),
								(0, m.insert)(
									oe,
									(0, d.createComponent)(r.Show, {
										get when() {
											return se();
										},
										get children() {
											return (0, d.createComponent)(O, {
												get fileResults() {
													return te();
												},
												get firstFileResultsRender() {
													return Y();
												},
												setFirstFileResultsRender: ie,
												get isLoading() {
													return (
														K() === N.SearchingFiles ||
														(K() === N.GeneratingTokens && !x.textIsGenerated)
													);
												},
												get headerText() {
													return _();
												},
											});
										},
									}),
									null,
								),
								(0, m.insert)(
									oe,
									(0, d.createComponent)(r.Show, {
										get when() {
											return re();
										},
										get children() {
											return (0, d.createComponent)(F, {
												get composerId() {
													return W().composerId;
												},
												get bubbleId() {
													return x.nextAiBubbleId;
												},
											});
										},
									}),
									null,
								),
								oe
							);
						},
					});
				}
				function O(x) {
					const [H, q] = (0, r.createSignal)(void 0),
						V = (0, r.createMemo)(() => H() ?? !0);
					return (
						(0, r.createEffect)(() => {
							H() === void 0 && !x.isLoading && q(!1),
								x.isLoading || x.setFirstFileResultsRender(!1);
						}),
						(0, d.createComponent)(p.$Zcc, {
							get isOpen() {
								return V();
							},
							setIsOpen: q,
							get title() {
								return x.headerText;
							},
							get isLoading() {
								return x.isLoading;
							},
							get children() {
								return (0, C.memo)(() => !!V())()
									? (0, d.createComponent)(B, {
											cleanupFn: () => x.setFirstFileResultsRender(!1),
											get fileResults() {
												return x.fileResults;
											},
											maxIndex: 20,
											get isFirstView() {
												return x.firstFileResultsRender;
											},
										})
									: (0, d.createComponent)(B, {
											get fileResults() {
												return x.fileResults;
											},
											maxIndex: 5,
											isFirstView: !1,
										});
							},
						})
					);
				}
				function B(x) {
					const H = (0, h.$odc)(),
						[q, V] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						if (x.cleanupFn) {
							const K = x.cleanupFn;
							(0, r.onCleanup)(() => {
								K();
							});
						}
					});
					const G = (0, r.createMemo)(() => {
						const K = q() ? x.fileResults.length : x.maxIndex;
						return x.fileResults.slice(0, K).map((J) => ({
							uri: H.workspaceContextService.resolveRelativePath(
								J.file?.relativeWorkspacePath ?? "",
							),
							score: J.score,
							onClick: (W) => {
								H.openerService.open(W.uri);
							},
						}));
					});
					return (() => {
						const K = L();
						return (
							K.style.setProperty("height", "200px"),
							K.style.setProperty("overflow", "hidden"),
							(0, m.insert)(
								K,
								(0, d.createComponent)(f.$w0b, {
									style: { height: "100%" },
									scrollingDirection: "vertical",
									get children() {
										return [
											(0, d.createComponent)(r.Show, {
												get when() {
													return x.isFirstView;
												},
												get fallback() {
													return (0, d.createComponent)(o.$1cc, {
														get files() {
															return G();
														},
														variant: "compact",
													});
												},
												get children() {
													return (0, d.createComponent)(a.$0$b, {
														index: 0,
														get children() {
															return (0, d.createComponent)(o.$1cc, {
																get files() {
																	return G();
																},
																variant: "compact",
															});
														},
													});
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return !q() && x.fileResults.length > x.maxIndex;
												},
												get children() {
													const J = D(),
														W = J.firstChild,
														X = W.nextSibling,
														Y = X.nextSibling;
													return (
														J.addEventListener("click", () => V(!0)),
														J.style.setProperty("padding", "2px 12px"),
														J.style.setProperty("font-size", "11px"),
														J.style.setProperty("opacity", "0.7"),
														(0, m.insert)(
															J,
															() => x.fileResults.length - x.maxIndex,
															X,
														),
														J
													);
												},
											}),
										];
									},
								}),
							),
							K
						);
					})();
				}
				function U(x) {
					const [H, q] = (0, r.createSignal)(void 0),
						V = (0, r.createMemo)(() => H() ?? !1);
					(0, r.createEffect)(() => {
						H() === void 0 && !x.isLoading && q(!1);
					});
					const G = (0, r.createMemo)(() => x.hydeResults.queries);
					return (0, d.createComponent)(p.$Zcc, {
						get isOpen() {
							return V();
						},
						setIsOpen: q,
						get title() {
							return x.headerText;
						},
						get isLoading() {
							return x.isLoading;
						},
						get children() {
							return [
								(0, d.createComponent)(r.Show, {
									get when() {
										return x.hydeResults.reasoning;
									},
									get children() {
										const K = L();
										return (
											K.style.setProperty("font-style", "italic"),
											K.style.setProperty("opacity", "0.5"),
											K.style.setProperty("padding", "8px 12px"),
											K.style.setProperty(
												"border-left",
												"2px solid var(--vscode-textLink-foreground)",
											),
											K.style.setProperty("margin", "8px 0"),
											K.style.setProperty(
												"background",
												"var(--vscode-textBlockQuote-background)",
											),
											(0, m.insert)(K, () => x.hydeResults.reasoning),
											K
										);
									},
								}),
								(0, d.createComponent)(z, {
									get queries() {
										return G();
									},
								}),
							];
						},
					});
				}
				function z(x) {
					return (() => {
						const H = L();
						return (
							(0, m.insert)(
								H,
								(0, d.createComponent)(r.For, {
									get each() {
										return x.queries;
									},
									children: (q, V) =>
										(() => {
											const G = M(),
												K = G.firstChild,
												J = K.firstChild,
												W = J.firstChild,
												X = W.firstChild,
												Y = W.nextSibling,
												ie = J.nextSibling;
											return (
												(0, m.insert)(W, () => V() + 1, X),
												(0, m.insert)(Y, () => q.text),
												(0, m.insert)(ie, () =>
													q.globsNewLineSeparated
														.split(`
`)
														.join(", "),
												),
												G
											);
										})(),
								}),
							),
							(0, E.effect)(() =>
								(0, i.className)(
									H,
									`query-list ${x.variant === "compact" ? "query-list--compact" : ""}`,
								),
							),
							H
						);
					})();
				}
				function F(x) {
					const H = (0, h.$odc)(),
						[q, V] = (0, r.createSignal)(!1),
						G = (0, r.createMemo)(() =>
							H.composerDataService.getComposerBubble(x.composerId, x.bubbleId),
						),
						K = (0, r.createMemo)(() =>
							(G()?.intermediateChunks ?? []).map((J) => ({
								uri: H.workspaceContextService.resolveRelativePath(
									J.chunkIdentity.fileName,
								),
								selection: {
									startLineNumber: J.chunkIdentity.startLine,
									endLineNumber: J.chunkIdentity.endLine,
									startColumn: 1,
									endColumn: 1,
								},
								onClick: (W) => {
									H.openerService.open(
										(0, b.$8rb)(W.uri, {
											startLineNumber: W.selection?.startLineNumber ?? 0,
											startColumn: 1,
											endLineNumber: W.selection?.endLineNumber ?? 0,
											endColumn: 1e3,
										}),
										{
											openToSide: !1,
											editorOptions: {
												revealIfVisible: !0,
												revealIfOpened: !0,
												source: s.EditorOpenSource.USER,
											},
											fromUserGesture: !0,
										},
									);
								},
							})),
						);
					return (0, d.createComponent)(r.Show, {
						get when() {
							return G()?.intermediateSectionType === "codebase";
						},
						get children() {
							return (0, d.createComponent)(p.$Zcc, {
								get isOpen() {
									return q();
								},
								setIsOpen: V,
								title: "Final Codebase Context",
								isLoading: !1,
								get children() {
									const J = L();
									return (
										J.style.setProperty("height", "200px"),
										(0, m.insert)(
											J,
											(0, d.createComponent)(f.$w0b, {
												style: { height: "100%" },
												scrollingDirection: "vertical",
												get children() {
													return (0, d.createComponent)(o.$1cc, {
														get files() {
															return K();
														},
														variant: "compact",
													});
												},
											}),
										),
										J
									);
								},
							});
						},
					});
				}
			},
		),
		define(
			de[4273],
			he([1, 0, 2, 2, 2, 2, 13, 126, 1986, 242, 36, 1070, 41, 116, 135, 696]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerContextChunkSection = void 0);
				const p = (0, t.template)("<div>Reading <!> <!> <br>"),
					o = (0, t.template)("<div>"),
					f = (b) => {
						const s = (0, u.$odc)(),
							{ composerDataService: l } = s,
							[y, $] = (0, C.createSignal)(!1),
							v = (0, C.createMemo)(() =>
								l.getComposerBubble(b.composerId, b.bubbleId),
							);
						(0, C.createEffect)(() => {
							(v()?.intermediateChunks ?? []).find(
								(A) => A.completeText.length > 100,
							) !== void 0 && $(!0);
						});
						const S = (0, C.createMemo)(() => {
								const N = l.getComposerData(b.composerId);
								return N
									? N.conversation.flatMap((A) =>
											A.type === d.ConversationMessage_MessageType.HUMAN
												? (A.context?.folderSelections ?? [])
												: [],
										)
									: [];
							}),
							[I, T] = (0, C.createSignal)(!1);
						(0, C.createEffect)(() => {
							b.emptyText &&
								y() &&
								v()?.intermediateSectionType === "long-file" &&
								T(!0),
								!b.emptyText &&
									v()?.intermediateSectionType === "long-file" &&
									T(!1);
						});
						const [P, k] = (0, C.createSignal)([]);
						(0, C.createEffect)(() => {
							const N = v()?.intermediateChunks ?? [];
							JSON.stringify(N.map((A) => A.chunkIdentity)) !==
								JSON.stringify(P()) && k(N.map((A) => A.chunkIdentity));
						});
						const L = (0, C.createMemo)(() =>
								P().map((N) => ({
									uri: s.workspaceContextService.resolveRelativePath(
										N.fileName,
									),
									selection: {
										startLineNumber: N.startLine,
										endLineNumber: N.endLine,
										startColumn: 1,
										endColumn: 1,
									},
									onClick: (A) => {
										console.log("[ian] item", A),
											s.openerService.open(
												(0, h.$8rb)(A.uri, {
													startLineNumber: A.selection?.startLineNumber ?? 0,
													startColumn: 1,
													endLineNumber: A.selection?.endLineNumber ?? 0,
													endColumn: 1e3,
												}),
												{
													openToSide: !1,
													editorOptions: {
														revealIfVisible: !0,
														revealIfOpened: !0,
														source: c.EditorOpenSource.USER,
													},
													fromUserGesture: !0,
												},
											);
									},
								})),
							),
							D = (0, C.createMemo)(() => {
								const N = v()?.intermediateSectionType ?? "long-file";
								return {
									codebase:
										S().length == 0
											? "Final Codebase Context"
											: S().length == 1
												? "Final Context in Folder"
												: "Final Context in Folders",
									"long-file": "Long-file Details",
									docs: "Final Documentation Context",
								}[N];
							}),
							M = (0, C.createMemo)(() => {
								const N = v()?.intermediateSectionType,
									A = v()?.intermediateChunks ?? [];
								return N !== void 0 && (N !== "long-file" || A.length > 0);
							});
						return (0, w.createComponent)(C.Show, {
							get when() {
								return M();
							},
							get children() {
								const N = o();
								return (
									N.style.setProperty("display", "flex"),
									N.style.setProperty("flex-direction", "column"),
									N.style.setProperty("margin-bottom", "8px"),
									N.style.setProperty("margin-top", "16px"),
									N.style.setProperty("gap", "2px"),
									(0, i.insert)(
										N,
										(0, w.createComponent)(C.Show, {
											get when() {
												return (
													(0, E.memo)(() => !!b.emptyText)() &&
													v()?.intermediateSectionType === "long-file"
												);
											},
											get children() {
												const A = p(),
													R = A.firstChild,
													O = R.nextSibling,
													B = O.nextSibling,
													U = B.nextSibling,
													z = U.nextSibling;
												return (
													A.style.setProperty(
														"color",
														"var(--vscode-input-placeholderForeground)",
													),
													A.style.setProperty("display", "flex"),
													A.style.setProperty("padding", "0px 4px"),
													(0, i.insert)(
														A,
														() => v()?.intermediateSectionType,
														O,
													),
													(0, i.insert)(
														A,
														(0, w.createComponent)(r.$C$b, { show: !0 }),
														U,
													),
													A
												);
											},
										}),
										null,
									),
									(0, i.insert)(
										N,
										(0, w.createComponent)(C.Show, {
											get when() {
												return !b.emptyText;
											},
											get children() {
												return (0, w.createComponent)(g.$Zcc, {
													get isOpen() {
														return I();
													},
													setIsOpen: T,
													get title() {
														return D();
													},
													get isLoading() {
														return b.emptyText;
													},
													get children() {
														const A = o();
														return (
															A.style.setProperty("height", "200px"),
															(0, i.insert)(
																A,
																(0, w.createComponent)(n.$w0b, {
																	style: { height: "100%" },
																	scrollingDirection: "vertical",
																	get children() {
																		return (0, w.createComponent)(C.Switch, {
																			get children() {
																				return [
																					(0, w.createComponent)(C.Match, {
																						get when() {
																							return (
																								v()?.intermediateSectionType ===
																								"codebase"
																							);
																						},
																						get children() {
																							return (0, w.createComponent)(
																								a.$1cc,
																								{
																									get files() {
																										return L();
																									},
																									variant: "compact",
																								},
																							);
																						},
																					}),
																					(0, w.createComponent)(C.Match, {
																						get when() {
																							return (
																								v()?.intermediateSectionType ===
																								"docs"
																							);
																						},
																						get children() {
																							return (0, w.createComponent)(
																								a.$1cc,
																								{
																									get files() {
																										return L();
																									},
																									variant: "compact",
																								},
																							);
																						},
																					}),
																					(0, w.createComponent)(C.Match, {
																						get when() {
																							return (
																								v()?.intermediateSectionType ===
																								"long-file"
																							);
																						},
																						get children() {
																							return (0, w.createComponent)(
																								C.For,
																								{
																									get each() {
																										return P();
																									},
																									children: (R, O) =>
																										(0, w.createComponent)(
																											m.$e_b,
																											{
																												selection: R,
																												vsContext: s,
																												get belowCodeText() {
																													return (
																														(v()
																															?.intermediateChunks ??
																															[])[O()]
																															?.completeText ??
																														""
																													);
																												},
																											},
																										),
																								},
																							);
																						},
																					}),
																				];
																			},
																		});
																	},
																}),
															),
															A
														);
													},
												});
											},
										}),
										null,
									),
									N
								);
							},
						});
					};
				e.ComposerContextChunkSection = f;
			},
		),
		define(
			de[4274],
			he([1, 0, 2, 2, 2, 13, 41, 338, 36, 696, 1070, 135]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerContextStep = c);
				const h = (0, t.template)("<div>");
				function c(p) {
					const [o, f] = (0, E.createSignal)(void 0),
						b = (0, E.createMemo)(() => o() ?? p.defaultExpanded);
					(0, E.createEffect)(() => {
						o() === void 0 && !p.isStepGenerating && f(!1);
					});
					const s = (0, E.createMemo)(() =>
						p.step.type === "gathering" || p.step.type === "reranking"
							? p.step.files.length > 0
							: !0,
					);
					return (0, w.createComponent)(E.Show, {
						get when() {
							return s();
						},
						get children() {
							const l = h();
							return (
								l.style.setProperty("padding-top", "10px"),
								l.style.setProperty("display", "flex"),
								l.style.setProperty("flex-direction", "column"),
								l.style.setProperty("gap", "6px"),
								(0, i.insert)(
									l,
									(0, w.createComponent)(E.Switch, {
										get children() {
											return [
												(0, w.createComponent)(E.Match, {
													get when() {
														return (
															p.step.type === "gathering" ||
															p.step.type === "reranking"
														);
													},
													get children() {
														return (0, w.createComponent)(n, {
															get step() {
																return p.step;
															},
															get isOpen() {
																return b();
															},
															setIsOpen: f,
															get isLoading() {
																return p.isStepGenerating;
															},
														});
													},
												}),
												(0, w.createComponent)(E.Match, {
													get when() {
														return p.step.type === "reasoning";
													},
													get children() {
														return (0, w.createComponent)(g, {
															get step() {
																return p.step;
															},
															get isOpen() {
																return b();
															},
															setIsOpen: f,
															get isLoading() {
																return p.isStepGenerating;
															},
														});
													},
												}),
											];
										},
									}),
								),
								l
							);
						},
					});
				}
				function n(p) {
					const o = (0, m.$odc)(),
						f = (0, E.createMemo)(() =>
							p.step.files.map((b) => ({
								uri: o.workspaceContextService.resolveRelativePath(
									b.relativeWorkspacePath ?? "",
								),
								score: b.score,
								selection: b.range && {
									startLineNumber: b.range.startLineNumber,
									endLineNumber: b.range.endLineNumberInclusive,
									startColumn: b.range.startColumn,
									endColumn: b.range.endColumn,
								},
								onClick: (s) => {
									const l = (0, C.$8rb)(
										s.uri,
										s.selection ?? {
											startLineNumber: 1,
											startColumn: 1,
											endLineNumber: 1,
											endColumn: 1,
										},
									);
									o.openerService.open(l);
								},
							})),
						);
					return (0, w.createComponent)(r.$Zcc, {
						get isOpen() {
							return p.isOpen;
						},
						get setIsOpen() {
							return p.setIsOpen;
						},
						get title() {
							return p.step.data.title.replace(/...$/, "");
						},
						get isLoading() {
							return p.isLoading;
						},
						get children() {
							const b = h();
							return (
								b.style.setProperty("height", "200px"),
								(0, i.insert)(
									b,
									(0, w.createComponent)(a.$w0b, {
										style: { height: "100%" },
										scrollingDirection: "vertical",
										get children() {
											return (0, w.createComponent)(u.$1cc, {
												get files() {
													return f();
												},
												variant: "compact",
											});
										},
									}),
								),
								b
							);
						},
					});
				}
				function g(p) {
					return (0, w.createComponent)(r.$Zcc, {
						get isOpen() {
							return p.isOpen;
						},
						get setIsOpen() {
							return p.setIsOpen;
						},
						get title() {
							return p.step.data.title.replace(/...$/, "");
						},
						get isLoading() {
							return p.isLoading;
						},
						get children() {
							const o = h();
							return (
								o.style.setProperty("height", "300px"),
								(0, i.insert)(
									o,
									(0, w.createComponent)(a.$w0b, {
										style: { height: "100%", padding: "8px" },
										scrollingDirection: "vertical",
										nonReactiveElementOptions: {
											useShadows: !1,
											verticalScrollbarSize: 6,
										},
										get children() {
											return (0, w.createComponent)(E.For, {
												get each() {
													return p.step.substeps;
												},
												children: (f) =>
													(() => {
														const b = h();
														return (
															b.style.setProperty("padding-bottom", "10px"),
															(0, i.insert)(
																b,
																(0, w.createComponent)(d.$4$b, {
																	get rawText() {
																		return f.markdownExplanation;
																	},
																	finished: !0,
																	codeBlockProps: { shouldRecompute: 0 },
																}),
															),
															b
														);
													})(),
											});
										},
									}),
								),
								o
							);
						},
					});
				}
			},
		),
		define(
			de[4275],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 694, 36, 147]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerControlsAndFeedback = n);
				const c = (0, t.template)("<div><div><div>");
				function n(g) {
					const p = (0, a.$odc)(),
						{ showHover: o, hideHover: f } = (0, u.$G$b)(),
						[b, s] = (0, m.createSignal)(!1),
						l = () => {
							const y = p.clipboardService.writeText(g.getCopyText());
							s(!0),
								p.analyticsService.trackEvent("composer.copy_message"),
								setTimeout(() => s(!1), 2e3);
						};
					return (() => {
						const y = c(),
							$ = y.firstChild,
							v = $.firstChild;
						return (
							$.style.setProperty("display", "flex"),
							$.style.setProperty("flex-direction", "row"),
							$.style.setProperty("width", "fit-content"),
							$.style.setProperty("height", "fit-content"),
							$.style.setProperty("gap", "2px"),
							$.style.setProperty("opacity", "0.4"),
							(0, d.addEventListener)(v, "mouseleave", f),
							v.addEventListener("mouseenter", (S) => {
								o(S, "Copy Message");
							}),
							v.style.setProperty("opacity", "1"),
							(0, E.insert)(
								v,
								(0, C.createComponent)(h.$rdc, {
									style: {
										padding: "4px 4px",
										display: "flex",
										"justify-content": "center",
										"align-items": "center",
									},
									codiconStyle: { "font-size": "14px" },
									type: "secondary",
									onClick: l,
									get disabled() {
										return b();
									},
									get codicon() {
										return b() ? r.$ak.check : r.$ak.copy;
									},
								}),
							),
							(0, w.effect)((S) =>
								(0, i.style)(
									y,
									{
										display: "flex",
										"flex-direction": "row",
										"justify-content": "flex-end",
										overflow: "visible",
										"align-self": "flex-end",
										"margin-left": "auto",
										"flex-shrink": 0,
										...g.style,
									},
									S,
								),
							),
							y
						);
					})();
				}
			},
		),
		define(
			de[4276],
			he([1, 0, 2, 2, 2, 13, 2, 147, 36]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerExampleBubbles = void 0);
				const r = (0, t.template)("<div>"),
					u = (a) => {
						const h = (0, m.$odc)(),
							c = (0, E.createMemo)(() => {
								const n = [
									{ v: "Is there a bug here?", type: "normal" },
									{ v: "Explain this code", type: "normal" },
									{ v: "How do I build a rust CLI?", type: "normal" },
								];
								return (
									h.reactiveStorageService.workspaceUserPersistentStorage
										.exampleCodebaseQuestions !== void 0 &&
										h.reactiveStorageService.workspaceUserPersistentStorage
											.exampleCodebaseQuestions.length > 0 &&
										n.push(
											...h.reactiveStorageService.workspaceUserPersistentStorage.exampleCodebaseQuestions.map(
												(g) => ({ v: g, type: "codebase" }),
											),
										),
									n.slice(-3)
								);
							});
						return (() => {
							const n = r();
							return (
								n.style.setProperty("margin", "16px auto 16px auto"),
								n.style.setProperty("text-align", "center"),
								n.style.setProperty("z-index", "1"),
								n.style.setProperty("display", "flex"),
								n.style.setProperty("flex-wrap", "wrap"),
								n.style.setProperty("gap", "12px 8px"),
								n.style.setProperty("justify-content", "center"),
								(0, i.insert)(
									n,
									(0, w.createComponent)(C.For, {
										get each() {
											return c();
										},
										children: (g) =>
											(() => {
												const p = r();
												return (
													p.style.setProperty("display", "inline-block"),
													(0, i.insert)(
														p,
														(0, w.createComponent)(d.$rdc, {
															get title() {
																return g.v;
															},
															get type() {
																return g.type === "codebase", "tertiary";
															},
															extras: {
																style: {
																	"max-width": "400px",
																	padding: "4px 6px",
																	"font-size": "12px",
																},
															},
															onClick: () => {
																h.composerService.insertIntoChat(a.composerId, {
																	message: g.v,
																	isCodebaseContext: g.type === "codebase",
																});
															},
														}),
													),
													p
												);
											})(),
									}),
								),
								n
							);
						})();
					};
				e.ComposerExampleBubbles = u;
			},
		),
		define(
			de[4277],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 7, 160, 14, 26, 397, 4276, 177, 169, 36,
				385, 422, 135, 2406,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerBelowChatHistory = void 0);
				const y = (0, t.template)("<span>(<!>)"),
					$ = (0, t.template)(
						'<a href="#" class="composer-below-chat-history-view-all"><span>View all',
					),
					v = (0, t.template)("<div><div><span></span><span>"),
					S = (0, t.template)("<div>"),
					I = (0, t.template)('<div tabindex="0">'),
					T = (0, t.template)(
						'<div tabindex="0"><div><div></div><div></div></div><div>',
					),
					P = "New composer",
					k = "New chat",
					L = 6,
					D = (M) => {
						const N = (0, f.$odc)(),
							[A, R] = (0, r.createSignal)(0),
							{ showHover: O, hideHover: B } = (0, s.$z$b)(600),
							{
								composerDataHandle: U,
								currentComposer: z,
								forceMode: F,
								updateCurrentComposer: x,
							} = (0, p.useComposerDataHandle)(() => M.composerDataHandle),
							H = (0, r.createMemo)(() =>
								N.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification
									? "edit"
									: F() || "edit",
							),
							q = (0, r.createMemo)(() =>
								N.composerDataService.allComposersData.allComposers.filter(
									(te) => {
										const Q = N.composerDataService.getComposerForceMode(te);
										return Q === H() || (H() === "edit" && !Q);
									},
								),
							),
							V = (0, r.createMemo)(() =>
								N.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification
									? N.composerDataService.allComposersData.allComposers
									: q().filter((te) => te.composerId !== U().data.composerId),
							),
							G = (0, r.createMemo)(() => (H() === "chat" ? k : P)),
							K = (0, r.createMemo)(() =>
								V()
									.filter((Q) => Q.composerId !== U().data.composerId)
									.sort(
										(Q, Z) =>
											(Z.lastUpdatedAt ?? Z.createdAt) -
											(Q.lastUpdatedAt ?? Q.createdAt),
									)
									.slice(0, L),
							),
							J = (0, r.createMemo)(
								() =>
									N.reactiveStorageService.nonPersistentStorage.composerState
										.shouldRenderExampleBubbles ||
									(z()?.conversation.length === 1 &&
										N.reactiveStorageService.applicationUserPersistentStorage
											.bubbleTimesLeft > 0),
							),
							W = (0, r.createMemo)(() => K().length > 0),
							X = (0, r.createMemo)(() =>
								A() >= 450 ? 3 : A() >= 300 ? 2 : 1,
							);
						let Y;
						const ie = (0, u.$Ogb)().ResizeObserver;
						(0, r.onMount)(() => {
							if (!Y) return;
							const te = new ie((Q) => {
								for (let Z of Q) R(Z.contentRect.width);
							});
							te.observe(Y),
								(0, r.onCleanup)(() => {
									te.disconnect();
								});
						});
						const ne = (te) => {
								N.composerService.openComposer(te);
							},
							ee = (0, b.$5$b)(o.SHOW_COMPOSER_HISTORY_ACTION_ID);
						(0, r.createEffect)(() => {
							const te = M.selectedPreviousComposerIndex,
								Q = M.isRenderingSuggestedPillsBelowInputBox,
								Z = M.setSelectedPreviousComposerIndex,
								se = (re) => {
									if (te === -1 || z()?.conversation.length !== 0) return;
									const le = () => {
										Z(-1),
											Q
												? N.composerDataService.updateComposerData(
														U().data.composerId,
														{ selectInputBoxSuggestedPillSignal: !0 },
													)
												: N.composerService.focus(U().data.composerId, !0);
									};
									switch (re.key) {
										case "ArrowLeft": {
											const oe = te - 1;
											if (oe < 0) {
												le();
												break;
											}
											Z(oe);
											break;
										}
										case "ArrowRight": {
											const oe = te + 1;
											if (oe >= K().length) {
												Z(K().length - 1);
												break;
											}
											Z(oe);
											break;
										}
										case "ArrowUp": {
											const ae = te - X();
											if (ae < 0) {
												re.stopImmediatePropagation(), le();
												break;
											}
											Z(ae);
											break;
										}
										case "ArrowDown": {
											const ae = te + X();
											if (ae >= K().length) {
												Z(K().length - 1);
												break;
											}
											Z(ae);
											break;
										}
										case "Escape": {
											Z(-1), N.composerService.focus(U().data.composerId);
											break;
										}
										case "Enter": {
											const oe = K()[te];
											oe && ne(oe.composerId);
											break;
										}
									}
								};
							Y?.addEventListener("keydown", se),
								(0, r.onCleanup)(() => {
									Y?.removeEventListener("keydown", se);
								});
						});
						const _ = (0, r.createMemo)(
							() =>
								M.selectedPreviousComposerIndex !== -1 ||
								(F() === "chat"
									? N.reactiveStorageService.applicationUserPersistentStorage
											.chatHistoryIsCollapsed !== !0
									: N.reactiveStorageService.applicationUserPersistentStorage
											.composerHistoryIsCollapsed !== !0),
						);
						return (0, E.createComponent)(r.Show, {
							get when() {
								return W();
							},
							get children() {
								const te = I();
								te.addEventListener("focusout", () => {
									const Z = M.setSelectedPreviousComposerIndex;
									setTimeout(() => {
										(!Y || !Y.contains((0, u.$Ogb)().document.activeElement)) &&
											Z(-1);
									});
								});
								const Q = Y;
								return (
									typeof Q == "function" ? (0, m.use)(Q, te) : (Y = te),
									te.style.setProperty("padding", "0.5rem 10px"),
									te.style.setProperty("display", "flex"),
									te.style.setProperty("flex-direction", "column"),
									te.style.setProperty("gap", "0.25rem"),
									te.style.setProperty("height", "100%"),
									te.style.setProperty("outline", "none"),
									te.style.setProperty("flex", "1"),
									(0, C.insert)(
										te,
										(0, E.createComponent)(r.Show, {
											get when() {
												return !J();
											},
											get fallback() {
												return (0, E.createComponent)(
													g.ComposerExampleBubbles,
													{
														get composerId() {
															return U().data.composerId;
														},
													},
												);
											},
											get children() {
												return [
													(() => {
														const Z = v(),
															se = Z.firstChild,
															re = se.firstChild,
															le = re.nextSibling;
														return (
															Z.style.setProperty("display", "flex"),
															Z.style.setProperty(
																"justify-content",
																"space-between",
															),
															Z.style.setProperty("align-items", "center"),
															Z.style.setProperty("padding", "0px 0.25rem"),
															se.addEventListener("click", () => {
																M.selectedPreviousComposerIndex !== -1 &&
																(F() === "chat"
																	? N.reactiveStorageService
																			.applicationUserPersistentStorage
																			.chatHistoryIsCollapsed
																	: N.reactiveStorageService
																			.applicationUserPersistentStorage
																			.composerHistoryIsCollapsed)
																	? M.setSelectedPreviousComposerIndex(-1)
																	: N.reactiveStorageService.setApplicationUserPersistentStorage(
																			F() === "chat"
																				? "chatHistoryIsCollapsed"
																				: "composerHistoryIsCollapsed",
																			(oe) => !oe,
																		);
															}),
															se.style.setProperty("display", "flex"),
															se.style.setProperty("align-items", "center"),
															se.style.setProperty("cursor", "pointer"),
															re.style.setProperty("font-size", "0.75rem"),
															re.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															re.style.setProperty("font-weight", "400"),
															re.style.setProperty("flex-shrink", "0"),
															re.style.setProperty("margin-right", "0.25rem"),
															(0, C.insert)(re, () =>
																H() === "chat"
																	? "Previous chats"
																	: "Previous composers",
															),
															le.style.setProperty("font-size", "0.75rem"),
															le.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															(0, C.insert)(
																Z,
																(0, E.createComponent)(r.Show, {
																	get when() {
																		return (
																			(0, d.memo)(() => !!_())() && A() > 260
																		);
																	},
																	get children() {
																		const oe = $(),
																			ae = oe.firstChild,
																			pe = ae.firstChild;
																		return (
																			oe.addEventListener("click", ($e) => {
																				$e.preventDefault(),
																					H() === "chat"
																						? N.commandService.executeCommand(
																								o.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID,
																							)
																						: N.commandService.executeCommand(
																								o.SHOW_COMPOSER_HISTORY_ACTION_ID,
																							);
																			}),
																			oe.style.setProperty(
																				"font-size",
																				"0.75rem",
																			),
																			oe.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			oe.style.setProperty(
																				"text-decoration",
																				"none",
																			),
																			oe.style.setProperty("display", "flex"),
																			oe.style.setProperty(
																				"align-items",
																				"center",
																			),
																			oe.style.setProperty("flex-shrink", "0"),
																			ae.style.setProperty(
																				"font-size",
																				"0.75rem",
																			),
																			ae.style.setProperty("flex-shrink", "0"),
																			(0, C.insert)(
																				ae,
																				(0, E.createComponent)(r.Show, {
																					get when() {
																						return (
																							(0, d.memo)(
																								() =>
																									M.selectedPreviousComposerIndex !==
																									-1,
																							)() && ee()
																						);
																					},
																					get children() {
																						const $e = y(),
																							ye = $e.firstChild,
																							ue = ye.nextSibling,
																							fe = ue.nextSibling;
																						return (
																							$e.style.setProperty(
																								"margin-left",
																								"4px",
																							),
																							$e.style.setProperty(
																								"color",
																								"var(--vscode-input-placeholderForeground)",
																							),
																							(0, C.insert)($e, ee, ue),
																							$e
																						);
																					},
																				}),
																				null,
																			),
																			oe
																		);
																	},
																}),
																null,
															),
															(0, w.effect)(
																(oe) => {
																	const ae = _() ? 1 : 0.5,
																		pe = _() ? 1 : 0.5,
																		$e = c.ThemeIcon.asClassName(
																			_()
																				? h.$ak.chevronDown
																				: h.$ak.chevronRight,
																		);
																	return (
																		ae !== oe._v$ &&
																			((oe._v$ = ae) != null
																				? re.style.setProperty("opacity", ae)
																				: re.style.removeProperty("opacity")),
																		pe !== oe._v$2 &&
																			((oe._v$2 = pe) != null
																				? le.style.setProperty("opacity", pe)
																				: le.style.removeProperty("opacity")),
																		$e !== oe._v$3 &&
																			(0, i.className)(le, (oe._v$3 = $e)),
																		oe
																	);
																},
																{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
															),
															Z
														);
													})(),
													(0, E.createComponent)(r.Show, {
														get when() {
															return _();
														},
														get children() {
															const Z = S();
															return (
																Z.style.setProperty("flex", "1"),
																(0, C.insert)(
																	Z,
																	(0, E.createComponent)(l.$w0b, {
																		scrollingDirection: "vertical",
																		style: { height: "100%" },
																		get children() {
																			const se = S();
																			return (
																				se.style.setProperty("display", "grid"),
																				se.style.setProperty("gap", "0.4rem"),
																				(0, C.insert)(
																					se,
																					(0, E.createComponent)(r.For, {
																						get each() {
																							return K();
																						},
																						children: (re, le) => {
																							const oe = (0, r.createMemo)(
																								() =>
																									le() ===
																									M.selectedPreviousComposerIndex,
																							);
																							let ae;
																							(0, r.createEffect)(() => {
																								oe() && ae?.focus();
																							});
																							const pe = (0, r.createMemo)(
																								() =>
																									oe()
																										? "var(--vscode-editorGutter-modifiedBackground)"
																										: "var(--vscode-widget-border, transparent)",
																							);
																							return (() => {
																								const $e = T(),
																									ye = $e.firstChild,
																									ue = ye.firstChild,
																									fe = ue.nextSibling,
																									me = ye.nextSibling;
																								$e.addEventListener(
																									"mouseleave",
																									() => B(),
																								),
																									$e.addEventListener(
																										"mouseenter",
																										(ge) =>
																											O({
																												target: ge.target,
																												content: `${
																													re.name
																														? re.name.split(`
`)[0]
																														: G()
																												}${re.composerId === U().data.composerId ? " (current)" : ""}`,
																												appearance: {
																													compact: !0,
																													showPointer: !0,
																												},
																												position: {
																													hoverPosition:
																														a.HoverPosition
																															.BELOW,
																												},
																											}),
																									),
																									$e.addEventListener(
																										"click",
																										() => ne(re.composerId),
																									);
																								const ve = ae;
																								return (
																									typeof ve == "function"
																										? (0, m.use)(ve, $e)
																										: (ae = $e),
																									$e.style.setProperty(
																										"display",
																										"flex",
																									),
																									$e.style.setProperty(
																										"outline",
																										"none",
																									),
																									$e.style.setProperty(
																										"align-items",
																										"center",
																									),
																									$e.style.setProperty(
																										"padding",
																										"0.3rem 0.4rem",
																									),
																									$e.style.setProperty(
																										"padding-left",
																										"calc(0.4rem - 1.5px)",
																									),
																									$e.style.setProperty(
																										"border-width",
																										"1px",
																									),
																									$e.style.setProperty(
																										"border-style",
																										"solid",
																									),
																									$e.style.setProperty(
																										"border-radius",
																										"0.25rem",
																									),
																									$e.style.setProperty(
																										"background-color",
																										"var(--vscode-input-background)",
																									),
																									$e.style.setProperty(
																										"cursor",
																										"pointer",
																									),
																									$e.style.setProperty(
																										"justify-content",
																										"space-between",
																									),
																									$e.style.setProperty(
																										"transition",
																										"background-color 0.2s ease",
																									),
																									$e.style.setProperty(
																										"min-width",
																										"0",
																									),
																									ye.style.setProperty(
																										"display",
																										"flex",
																									),
																									ye.style.setProperty(
																										"align-items",
																										"center",
																									),
																									ye.style.setProperty(
																										"min-width",
																										"0",
																									),
																									ye.style.setProperty(
																										"flex-grow",
																										"1",
																									),
																									ue.style.setProperty(
																										"margin-right",
																										"0.25rem",
																									),
																									ue.style.setProperty(
																										"font-size",
																										"0.75rem",
																									),
																									ue.style.setProperty(
																										"flex-shrink",
																										"0",
																									),
																									fe.style.setProperty(
																										"flex-grow",
																										"1",
																									),
																									fe.style.setProperty(
																										"flex-shrink",
																										"1",
																									),
																									fe.style.setProperty(
																										"min-width",
																										"0",
																									),
																									fe.style.setProperty(
																										"font-size",
																										"0.75rem",
																									),
																									fe.style.setProperty(
																										"white-space",
																										"nowrap",
																									),
																									fe.style.setProperty(
																										"overflow",
																										"hidden",
																									),
																									fe.style.setProperty(
																										"text-overflow",
																										"ellipsis",
																									),
																									(0, C.insert)(
																										fe,
																										() => re.name || G(),
																									),
																									me.style.setProperty(
																										"font-size",
																										"0.65rem",
																									),
																									me.style.setProperty(
																										"color",
																										"var(--vscode-input-placeholderForeground)",
																									),
																									me.style.setProperty(
																										"margin-left",
																										"0.6rem",
																									),
																									me.style.setProperty(
																										"flex-shrink",
																										"0",
																									),
																									(0, C.insert)(me, () =>
																										(0, n.$bgc)(
																											re.lastUpdatedAt ??
																												re.createdAt,
																										),
																									),
																									(0, w.effect)(
																										(ge) => {
																											const be = `composer-below-chat-history-item ${re.composerId === U().data.composerId ? "current-chat" : ""}`,
																												Ce = pe(),
																												Le = pe(),
																												Fe = pe(),
																												Oe = oe()
																													? "var(--vscode-editorGutter-modifiedBackground)"
																													: re.composerId ===
																															U().data
																																.composerId
																														? "var(--vscode-textLink-activeForeground)"
																														: "var(--vscode-widget-border, transparent)",
																												xe = re.name
																													? "var(--vscode-foreground)"
																													: "var(--vscode-input-placeholderForeground)",
																												He =
																													c.ThemeIcon.asClassName(
																														H() === "chat"
																															? h.$ak.comment
																															: h.$ak.notebook,
																													),
																												Ke = re.name
																													? "var(--vscode-foreground)"
																													: "var(--vscode-input-placeholderForeground)";
																											return (
																												be !== ge._v$4 &&
																													(0, i.className)(
																														$e,
																														(ge._v$4 = be),
																													),
																												Ce !== ge._v$5 &&
																													((ge._v$5 = Ce) !=
																													null
																														? $e.style.setProperty(
																																"border-top-color",
																																Ce,
																															)
																														: $e.style.removeProperty(
																																"border-top-color",
																															)),
																												Le !== ge._v$6 &&
																													((ge._v$6 = Le) !=
																													null
																														? $e.style.setProperty(
																																"border-bottom-color",
																																Le,
																															)
																														: $e.style.removeProperty(
																																"border-bottom-color",
																															)),
																												Fe !== ge._v$7 &&
																													((ge._v$7 = Fe) !=
																													null
																														? $e.style.setProperty(
																																"border-right-color",
																																Fe,
																															)
																														: $e.style.removeProperty(
																																"border-right-color",
																															)),
																												Oe !== ge._v$8 &&
																													((ge._v$8 = Oe) !=
																													null
																														? $e.style.setProperty(
																																"border-left-color",
																																Oe,
																															)
																														: $e.style.removeProperty(
																																"border-left-color",
																															)),
																												xe !== ge._v$9 &&
																													((ge._v$9 = xe) !=
																													null
																														? ue.style.setProperty(
																																"color",
																																xe,
																															)
																														: ue.style.removeProperty(
																																"color",
																															)),
																												He !== ge._v$10 &&
																													(0, i.className)(
																														ue,
																														(ge._v$10 = He),
																													),
																												Ke !== ge._v$11 &&
																													((ge._v$11 = Ke) !=
																													null
																														? fe.style.setProperty(
																																"color",
																																Ke,
																															)
																														: fe.style.removeProperty(
																																"color",
																															)),
																												ge
																											);
																										},
																										{
																											_v$4: void 0,
																											_v$5: void 0,
																											_v$6: void 0,
																											_v$7: void 0,
																											_v$8: void 0,
																											_v$9: void 0,
																											_v$10: void 0,
																											_v$11: void 0,
																										},
																									),
																									$e
																								);
																							})();
																						},
																					}),
																				),
																				(0, w.effect)(() =>
																					`repeat(${X()}, 1fr)` != null
																						? se.style.setProperty(
																								"grid-template-columns",
																								`repeat(${X()}, 1fr)`,
																							)
																						: se.style.removeProperty(
																								"grid-template-columns",
																							),
																				),
																				se
																			);
																		},
																	}),
																),
																Z
															);
														},
													}),
												];
											},
										}),
									),
									te
								);
							},
						});
					};
				e.ComposerBelowChatHistory = D;
			},
		),
		define(
			de[4278],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 397, 135, 36, 7, 794, 135, 47,
				246, 177, 564, 322, 818, 216, 858, 565, 147, 385, 169, 2411,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerHistory = q);
				const D = (0, t.template)(
						'<div class="composer-history-search"><input type="text" placeholder="Search for past composers..." class="composer-history-input">',
					),
					M = (0, t.template)(
						'<div class="composer-history-search-no-results">No composers found',
					),
					N = (0, t.template)(
						'<div tabindex="0" class="previous-composers-list">',
					),
					A = (0, t.template)("<div>"),
					R = (0, t.template)('<div class="chat-timestamp">'),
					O = (0, t.template)("<input autofocus>"),
					B = (0, t.template)("<div><span></span><span>"),
					U = (0, t.template)(
						'<div class="composer-tabs-item-container"><div class="composer-tabs-item">',
					),
					z = (0, t.template)('<span class="composer-title">'),
					F = (0, t.template)(
						'<div class="composer-history-pane"><div class="composer-history-header"><span>Chats & Composers</span><div><span class="composer-button-secondary"><span>',
					),
					x = (0, t.template)('<div class="composer-history-pane-wrapper">');
				function H() {
					var V =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (W, X) {
										var Y = Error();
										return (
											(Y.name = "SuppressedError"),
											(Y.error = W),
											(Y.suppressed = X),
											Y
										);
									},
						G = {},
						K = [];
					function J(W, X) {
						if (X != null) {
							if (Object(X) !== X)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (W)
								var Y =
									X[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								Y === void 0 &&
								((Y = X[Symbol.dispose || Symbol.for("Symbol.dispose")]), W)
							)
								var ie = Y;
							if (typeof Y != "function")
								throw new TypeError("Object is not disposable.");
							ie &&
								(Y = function () {
									try {
										ie.call(X);
									} catch (ne) {
										return Promise.reject(ne);
									}
								}),
								K.push({ v: X, d: Y, a: W });
						} else W && K.push({ d: X, a: W });
						return X;
					}
					return {
						e: G,
						u: J.bind(null, !1),
						a: J.bind(null, !0),
						d: function () {
							var W,
								X = this.e,
								Y = 0;
							function ie() {
								for (; (W = K.pop()); )
									try {
										if (!W.a && Y === 1)
											return (Y = 0), K.push(W), Promise.resolve().then(ie);
										if (W.d) {
											var ee = W.d.call(W.v);
											if (W.a)
												return (Y |= 2), Promise.resolve(ee).then(ie, ne);
										} else Y |= 1;
									} catch (_) {
										return ne(_);
									}
								if (Y === 1)
									return X !== G ? Promise.reject(X) : Promise.resolve();
								if (X !== G) throw X;
							}
							function ne(ee) {
								return (X = X !== G ? new V(ee, X) : ee), ie();
							}
							return ie();
						},
					};
				}
				function q(V) {
					try {
						var G = H();
						const K = G.u((0, S.span)("ComposerHistory")),
							J = (0, g.$odc)(),
							{ composerDataService: W } = J,
							{
								composerDataHandle: X,
								currentComposer: Y,
								updateCurrentComposer: ie,
								forceMode: ne,
							} = (0, l.useComposerDataHandle)(() => V.composerDataHandle),
							ee = (0, u.createMemo)(() =>
								J.composerViewsService.getComposerLocation(X().data.composerId),
							),
							_ = (0, b.$9g)(),
							[te, Q] = (0, u.createSignal)(""),
							[Z, se] = (0, u.createSignal)(void 0),
							[re, le] = (0, u.createSignal)(void 0),
							[oe, ae] = (0, u.createSignal)(-1),
							pe = () => {
								J.reactiveStorageService.setNonPersistentStorage(
									"composerState",
									ne() === "chat"
										? "shouldShowChatHistory"
										: "shouldShowComposerHistory",
									!1,
								);
							},
							$e = (0, u.createMemo)(() =>
								ne() === "chat"
									? J.reactiveStorageService.nonPersistentStorage.composerState
											.shouldShowChatHistory
									: J.reactiveStorageService.nonPersistentStorage.composerState
											.shouldShowComposerHistory,
							),
							ye = (0, u.createMemo)(() => {
								const Oe = J.composerDataService.allComposersData.allComposers;
								return (0, s.sortComposers)(Oe);
							}),
							ue = (0, u.createMemo)(() => {
								const Oe = { chat: [], edit: [] };
								return (
									ye().forEach((xe) => {
										Oe[J.composerDataService.getComposerForceMode(xe)].push(xe);
									}),
									Oe
								);
							}),
							fe = (0, u.createMemo)(() => {
								const Oe = (0, $.$hs)(te().toLowerCase());
								if (Oe.normalized === "")
									return ye().map((Ke) => ({
										composer: Ke,
										score: Number.MAX_SAFE_INTEGER,
										labelMatch: [],
									}));
								const xe = {
										getItemLabel: (Ke) => Ke.name || "",
										getItemDescription: () => {},
										getItemPath: () => {},
									},
									He = {};
								return ye()
									.map((Ke) => {
										const Je = (0, $.$fs)(Ke, Oe, !0, xe, He);
										return {
											composer: Ke,
											score: Je.score || 0,
											labelMatch: Je.labelMatch || [],
										};
									})
									.filter(({ score: Ke }) => Ke > 0)
									.sort((Ke, Je) => Je.score - Ke.score);
							}),
							me = (0, u.createMemo)(
								() => V.composerDataHandle.data.composerId,
							);
						(0, u.createEffect)(() => {
							const Oe = pe,
								xe = (He) => {
									$e() &&
										He.key === "Escape" &&
										(J.composerService.focus(me()), Oe());
								};
							(0, p.$Ogb)().document.addEventListener("keydown", xe),
								(0, u.onCleanup)(() =>
									(0, p.$Ogb)().document.removeEventListener("keydown", xe),
								);
						});
						const ve = (Oe = {}) => {
								let xe, He;
								const Ke = (0, f.$y0b)();
								let Je;
								const Te = (Se) => `composer-${Se}-${_}`;
								(0, o.useAutoVerticalScroll)(
									Ke,
									() => Je,
									() => {
										const Se = fe(),
											ke = oe();
										return ke >= 0 && ke < Se.length
											? Te(Se[ke].composer.composerId)
											: "";
									},
									() => [oe()],
									{ paddingToEdge: 6 },
								),
									(0, u.createEffect)(() => {
										const Se = (ke) => {
											if (ke.key === "ArrowUp")
												ke.preventDefault(),
													ae((Ue) => (Ue - 1 + fe().length) % fe().length);
											else if (ke.key === "ArrowDown")
												ke.preventDefault(), ae((Ue) => (Ue + 1) % fe().length);
											else if (ke.key === "Enter")
												if (Z()) {
													if (re()?.trim() === "") return;
													ke.preventDefault(),
														ke.stopImmediatePropagation(),
														Le(Z(), re() ?? ""),
														se(void 0);
												} else {
													ke.preventDefault();
													const Ue = oe();
													Ue !== -1 && ge(fe()[Ue].composer.composerId);
												}
										};
										He?.addEventListener("keydown", Se),
											(0, u.onCleanup)(() =>
												He?.removeEventListener("keydown", Se),
											);
									});
								const Ee = { value: void 0 },
									Ie = (0, k.$5$b)(L.NEW_COMPOSER_CHAT_ACTION_ID),
									Be = (0, k.$5$b)(L.COMPOSER_EDIT_ACTION_ID);
								return (
									(0, u.onMount)(() => {
										if (xe) {
											xe.focus();
											let Se = 0;
											const ke = () => {
												(0, p.$Ogb)().document.activeElement !== xe &&
													Se < 3 &&
													(xe.focus(), Se++, setTimeout(ke, 100));
											};
											setTimeout(ke, 100), Q("");
										}
									}),
									[
										(() => {
											const Se = D(),
												ke = Se.firstChild;
											ke.addEventListener("keydown", (qe) => {
												if (qe.key === "Escape") {
													pe(), J.composerService.focus(me());
													return;
												}
												if (qe.key === "ArrowUp")
													qe.preventDefault(),
														ae((Ae) => (Ae - 1 + fe().length) % fe().length);
												else if (qe.key === "ArrowDown")
													qe.preventDefault(),
														ae((Ae) => (Ae + 1) % fe().length);
												else if (qe.key === "Enter") {
													qe.preventDefault();
													const Ae = oe();
													Ae !== -1 &&
														(ge(fe()[Ae].composer.composerId),
														pe(),
														J.composerService.focus(
															fe()[Ae].composer.composerId,
														));
												}
											}),
												ke.addEventListener("input", (qe) =>
													Q(qe.currentTarget.value),
												);
											const Ue = xe;
											return (
												typeof Ue == "function"
													? (0, r.use)(Ue, ke)
													: (xe = ke),
												ke.style.setProperty("width", "calc(100% - 12px)"),
												ke.style.setProperty("margin", "6px"),
												ke.style.setProperty("padding", "4px 6px"),
												ke.style.setProperty("border-radius", "3px"),
												ke.style.setProperty(
													"background",
													"var(--vscode-input-background)",
												),
												ke.style.setProperty(
													"border",
													"1px solid var(--vscode-commandCenter-activeBorder)",
												),
												ke.style.setProperty(
													"color",
													"var(--vscode-input-foreground)",
												),
												ke.style.setProperty("outline", "none"),
												ke.style.setProperty("font-size", "12px"),
												(0, m.effect)(() =>
													Oe.paddingTop != null
														? Se.style.setProperty("padding-top", Oe.paddingTop)
														: Se.style.removeProperty("padding-top"),
												),
												(0, m.effect)(() => (ke.value = te())),
												Se
											);
										})(),
										(() => {
											const Se = A(),
												ke = Je;
											return (
												typeof ke == "function"
													? (0, r.use)(ke, Se)
													: (Je = Se),
												Se.style.setProperty("overflow", "hidden"),
												Se.style.setProperty("flex-grow", "1"),
												Se.style.setProperty("min-height", "0px"),
												(0, C.insert)(
													Se,
													(0, d.createComponent)(n.$w0b, {
														scrollable: Ke,
														scrollingDirection: "vertical",
														style: { height: "100%" },
														get children() {
															const Ue = N(),
																qe = He;
															return (
																typeof qe == "function"
																	? (0, r.use)(qe, Ue)
																	: (He = Ue),
																Ue.style.setProperty("outline", "none"),
																Ue.style.setProperty("width", "100%"),
																Ue.style.setProperty(
																	"padding-bottom",
																	"0.75rem",
																),
																(0, C.insert)(
																	Ue,
																	(0, d.createComponent)(u.Show, {
																		get when() {
																			return fe().length === 0;
																		},
																		get children() {
																			return M();
																		},
																	}),
																	null,
																),
																(0, C.insert)(
																	Ue,
																	(0, d.createComponent)(u.For, {
																		get each() {
																			return fe();
																		},
																		children: (
																			{ composer: Ae, labelMatch: Me },
																			De,
																		) => {
																			const Re = () =>
																					(0, c.$bgc)(
																						(0, s.getComposerTimestamp)(
																							ye()[De() - 1],
																						),
																					),
																				je = () =>
																					(0, c.$bgc)(
																						(0, s.getComposerTimestamp)(Ae),
																					),
																				Ve = () => je() !== Re(),
																				[Ze, et] = (0, u.createSignal)(!1),
																				rt = (0, u.createMemo)(() =>
																					J.composerDataService.getWeakHandleOptimistic(
																						Ae.composerId,
																					),
																				),
																				ft = (0, u.createMemo)(() => {
																					const nt = rt();
																					return nt
																						? (0, I.useComposerChatStatus)(
																								() => nt,
																							)()
																						: "none";
																				}),
																				bt = (0, u.createMemo)(() =>
																					J.composerDataService.getComposerForceMode(
																						Ae,
																					),
																				);
																			return [
																				(0, d.createComponent)(u.Show, {
																					get when() {
																						return Ve();
																					},
																					get children() {
																						const nt = R();
																						return (0, C.insert)(nt, je), nt;
																					},
																				}),
																				(() => {
																					const nt = U(),
																						lt = nt.firstChild;
																					return (
																						nt.addEventListener(
																							"mouseleave",
																							() => et(!1),
																						),
																						nt.addEventListener(
																							"mouseenter",
																							() => et(!0),
																						),
																						lt.addEventListener(
																							"click",
																							async () => {
																								ge(Ae.composerId), He?.focus();
																							},
																						),
																						(0, C.insert)(
																							lt,
																							(0, d.createComponent)(u.Show, {
																								get when() {
																									return Z() === Ae.composerId;
																								},
																								get fallback() {
																									return (() => {
																										const ct = z();
																										return (
																											ct.style.setProperty(
																												"display",
																												"flex",
																											),
																											ct.style.setProperty(
																												"align-items",
																												"center",
																											),
																											(0, C.insert)(
																												ct,
																												(0, d.createComponent)(
																													v.$tbc,
																													{
																														get text() {
																															return (
																																Ae.name ||
																																(ne() === "chat"
																																	? "New chat"
																																	: "New composer")
																															);
																														},
																														highlights: Me,
																													},
																												),
																												null,
																											),
																											(0, C.insert)(
																												ct,
																												(0, d.createComponent)(
																													u.Show,
																													{
																														get when() {
																															return (
																																ft() ===
																																	"generating" ||
																																ft() ===
																																	"running" ||
																																ft() ===
																																	"applying"
																															);
																														},
																														get children() {
																															return (0,
																															d.createComponent)(
																																T.ComposerGeneralStatusIndicator,
																																{
																																	status:
																																		"applying",
																																	pulse: !0,
																																	style: {
																																		margin:
																																			"4px 6px",
																																	},
																																},
																															);
																														},
																													},
																												),
																												null,
																											),
																											(0, m.effect)(() =>
																												(Ae.name ? 1 : 0.6) !=
																												null
																													? ct.style.setProperty(
																															"opacity",
																															Ae.name ? 1 : 0.6,
																														)
																													: ct.style.removeProperty(
																															"opacity",
																														),
																											),
																											ct
																										);
																									})();
																								},
																								get children() {
																									const ct = O();
																									return (
																										ct.addEventListener(
																											"keydown",
																											(gt) => {
																												gt.key === "Enter" &&
																												gt.isComposing === !1
																													? gt.currentTarget.blur()
																													: gt.key ===
																															"Escape" &&
																														(gt.preventDefault(),
																														gt.stopImmediatePropagation(),
																														se(void 0),
																														le(void 0),
																														He?.focus());
																											},
																										),
																										ct.addEventListener(
																											"blur",
																											async (gt) => {
																												const ht =
																													gt.currentTarget.value.trim();
																												Le(Ae.composerId, ht),
																													se(void 0);
																											},
																										),
																										ct.addEventListener(
																											"click",
																											(gt) => {
																												gt.stopPropagation();
																											},
																										),
																										ct.addEventListener(
																											"focus",
																											(gt) => {
																												gt.currentTarget.select();
																											},
																										),
																										ct.addEventListener(
																											"input",
																											(gt) => {
																												le(
																													gt.currentTarget
																														.value,
																												);
																											},
																										),
																										(0, r.use)(
																											(gt) => (Ee.value = gt),
																											ct,
																										),
																										ct.style.setProperty(
																											"background",
																											"transparent",
																										),
																										ct.style.setProperty(
																											"width",
																											"100%",
																										),
																										ct.style.setProperty(
																											"outline",
																											"none",
																										),
																										ct.style.setProperty(
																											"border",
																											"none",
																										),
																										ct.style.setProperty(
																											"padding",
																											"0px",
																										),
																										(0, m.effect)(
																											() =>
																												(ct.value =
																													re() ?? Ae.name),
																										),
																										ct
																									);
																								},
																							}),
																							null,
																						),
																						(0, C.insert)(
																							lt,
																							(0, d.createComponent)(u.Show, {
																								get when() {
																									return Ze();
																								},
																								get children() {
																									const ct = B(),
																										gt = ct.firstChild,
																										ht = gt.nextSibling;
																									return (
																										ct.style.setProperty(
																											"display",
																											"flex",
																										),
																										ct.style.setProperty(
																											"gap",
																											"4px",
																										),
																										gt.addEventListener(
																											"click",
																											(Rt) => {
																												Rt.stopPropagation(),
																													se(Ae.composerId),
																													le(Ae.name ?? ""),
																													setTimeout(() => {
																														Ee.value?.focus();
																													}, 100);
																											},
																										),
																										gt.style.setProperty(
																											"margin-left",
																											"auto",
																										),
																										gt.style.setProperty(
																											"font-size",
																											"14px",
																										),
																										gt.style.setProperty(
																											"padding",
																											"2px",
																										),
																										ht.addEventListener(
																											"click",
																											(Rt) => {
																												Rt.stopPropagation(),
																													ue()[bt()].length > 1
																														? be(Ae.composerId)
																														: Ce(Ae.composerId);
																											},
																										),
																										ht.style.setProperty(
																											"margin-left",
																											"auto",
																										),
																										ht.style.setProperty(
																											"font-size",
																											"14px",
																										),
																										ht.style.setProperty(
																											"padding",
																											"2px",
																										),
																										(0, m.effect)(
																											(Rt) => {
																												const Nt = [
																														h.ThemeIcon.asClassName(
																															a.$ak.edit,
																														),
																														"composer-tabs-remove-composer-icon",
																														"composer-button-secondary",
																													].join(" "),
																													jt = [
																														h.ThemeIcon.asClassName(
																															ue()[bt()]
																																.length > 1
																																? a.$ak.trash
																																: a.$ak.sync,
																														),
																														"composer-tabs-remove-composer-icon",
																														"composer-button-secondary",
																													].join(" ");
																												return (
																													Nt !== Rt._v$ &&
																														(0, w.className)(
																															gt,
																															(Rt._v$ = Nt),
																														),
																													jt !== Rt._v$2 &&
																														(0, w.className)(
																															ht,
																															(Rt._v$2 = jt),
																														),
																													Rt
																												);
																											},
																											{
																												_v$: void 0,
																												_v$2: void 0,
																											},
																										),
																										ct
																									);
																								},
																							}),
																							null,
																						),
																						(0, C.insert)(
																							lt,
																							(0, d.createComponent)(u.Show, {
																								get when() {
																									return !J
																										.reactiveStorageService
																										.applicationUserPersistentStorage
																										.composerState.unification;
																								},
																								get children() {
																									return (0, d.createComponent)(
																										y.$nac,
																										{
																											get text() {
																												return J.composerDataService.getComposerForceMode(
																													Ae,
																												) === "edit"
																													? "Composer"
																													: "Chat";
																											},
																											type: "subtle",
																											size: "small",
																										},
																									);
																								},
																							}),
																							null,
																						),
																						(0, m.effect)(
																							(ct) => {
																								const gt = Te(Ae.composerId),
																									ht =
																										Ae.composerId ===
																										Y().composerId,
																									Rt = Z() === Ae.composerId,
																									Nt = De() === oe();
																								return (
																									gt !== ct._v$3 &&
																										(0, i.setAttribute)(
																											nt,
																											"id",
																											(ct._v$3 = gt),
																										),
																									ht !== ct._v$4 &&
																										lt.classList.toggle(
																											"selected",
																											(ct._v$4 = ht),
																										),
																									Rt !== ct._v$5 &&
																										lt.classList.toggle(
																											"editing",
																											(ct._v$5 = Rt),
																										),
																									Nt !== ct._v$6 &&
																										lt.classList.toggle(
																											"highlighted",
																											(ct._v$6 = Nt),
																										),
																									ct
																								);
																							},
																							{
																								_v$3: void 0,
																								_v$4: void 0,
																								_v$5: void 0,
																								_v$6: void 0,
																							},
																						),
																						nt
																					);
																				})(),
																			];
																		},
																	}),
																	null,
																),
																Ue
															);
														},
													}),
												),
												(0, m.effect)(() =>
													Oe.listHeight != null
														? Se.style.setProperty("height", Oe.listHeight)
														: Se.style.removeProperty("height"),
												),
												Se
											);
										})(),
										(0, d.createComponent)(u.Show, {
											get when() {
												return V.renderOpenComposerButton;
											},
											get children() {
												const Se = A();
												return (
													Se.style.setProperty("padding", "4px"),
													(0, C.insert)(
														Se,
														(0, d.createComponent)(P.$rdc, {
															get title() {
																return `Open ${Y().forceMode === "chat" ? "chat" : "composer"}`;
															},
															type: "true-secondary",
															style: {
																"font-size": "11px",
																padding: "2px 6px",
															},
															get keyboardShortcut() {
																return (0, E.memo)(
																	() => Y().forceMode === "chat",
																)()
																	? Ie()
																	: Be();
															},
															onClick: () => {
																J.composerService.openComposer(me());
															},
														}),
													),
													Se
												);
											},
										}),
									]
								);
							},
							ge = async (Oe) => {
								await J.composerService.openComposer(Oe);
							},
							be = async (Oe) => {
								await J.composerService.deleteComposer(Oe);
							},
							Ce = async (Oe) => {
								try {
									await J.composerService.resetComposer(Oe);
								} catch (xe) {
									console.error(xe);
								}
							},
							Le = async (Oe, xe) => {
								await J.composerDataService.updateComposerDataAsync(Oe, (He) =>
									He("name", xe),
								);
							};
						let Fe;
						return (0, d.createComponent)(u.Switch, {
							get fallback() {
								return (() => {
									const Oe = A();
									return (
										Oe.style.setProperty("flex", "1"),
										Oe.style.setProperty("overflow", "hidden"),
										Oe.style.setProperty("display", "flex"),
										Oe.style.setProperty("height", "100%"),
										Oe.style.setProperty("flex-direction", "column"),
										(0, C.insert)(Oe, () => ve({ listHeight: "100%" })),
										Oe
									);
								})();
							},
							get children() {
								return (0, d.createComponent)(u.Match, {
									get when() {
										return ee() === "pane";
									},
									get children() {
										const Oe = x(),
											xe = Fe;
										return (
											typeof xe == "function" ? (0, r.use)(xe, Oe) : (Fe = Oe),
											(0, C.insert)(
												Oe,
												(0, d.createComponent)(u.Show, {
													get when() {
														return $e();
													},
													get children() {
														const He = F(),
															Ke = He.firstChild,
															Je = Ke.firstChild,
															Te = Je.nextSibling,
															Ee = Te.firstChild,
															Ie = Ee.firstChild;
														return (
															Je.style.setProperty("padding-left", "0.25rem"),
															Ee.addEventListener("click", () => {
																pe();
															}),
															(0, C.insert)(
																He,
																() => ve({ listHeight: "30vh" }),
																null,
															),
															(0, m.effect)(() =>
																(0, w.className)(
																	Ie,
																	h.ThemeIcon.asClassName(a.$ak.x),
																),
															),
															He
														);
													},
												}),
											),
											Oe
										);
									},
								});
							},
						});
					} catch (K) {
						G.e = K;
					} finally {
						G.d();
					}
				}
			},
		),
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
		define(
			de[4280],
			he([1, 0, 2, 2, 13, 338, 36, 696, 177, 2417]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerThoughtMessage = u);
				const r = (0, t.template)(
					'<span class="composer-thought-pulsing">Thinking',
				);
				function u(a) {
					const h = (0, C.$odc)(),
						[c, n] = (0, w.createSignal)(!1),
						{ currentComposer: g } = (0, m.useComposerDataHandle)(
							() => a.composerDataHandle,
						),
						p = (0, w.createMemo)(() =>
							g().generatingBubbleIds?.includes(a.message.bubbleId),
						);
					return (0, i.createComponent)(d.$Zcc, {
						get isOpen() {
							return c();
						},
						setIsOpen: n,
						headerClass: "composer-thought-message-header",
						get title() {
							return (0, i.createComponent)(w.Show, {
								get when() {
									return p();
								},
								get fallback() {
									return "Thought";
								},
								get children() {
									return r();
								},
							});
						},
						get children() {
							return (0, i.createComponent)(E.$4$b, {
								get rawText() {
									return a.message.text;
								},
								codeBlockProps: { shouldRecompute: 0 },
								shouldFade: !1,
								get finished() {
									return !p();
								},
							});
						},
					});
				}
			},
		),
		