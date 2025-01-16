define(
			de[4215],
			he([
				1, 0, 2, 2, 13, 4214, 36, 33, 56, 17, 64, 307, 35, 54, 156, 860, 2, 215,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DZc = f),
					(o = mt(o));
				function f() {
					console.log("creating floatingsemanticsearchpicker");
					const b = (0, C.$odc)(),
						s = b.semSearchService,
						l = b.repositoryService,
						y = b.codeEditorService,
						$ = b.workspaceContextService,
						[v, S] = (0, w.createSignal)(0),
						[I, T] = (0, w.createSignal)(0),
						[P, k] = (0, w.createSignal)([]),
						[L, D] = (0, w.createSignal)(),
						[M, N] = (0, w.createSignal)([]),
						[A, R] = (0, w.createSignal)(),
						O = (H) => {
							N((V) =>
								V.filter((K) =>
									K.query.split(" ").length === H.split(" ").length ||
									K.startTime < Date.now() - 2e3
										? (K.abortC.abort(), !1)
										: !0,
								),
							);
						},
						B = (H, q) => {
							A()?.editor !== H && U(A()?.editor),
								H.changeDecorations((V) => {
									const G = [],
										K = A();
									K?.editor === H &&
										(G.push(K.overviewRulerDecorationId),
										G.push(K.rangeHighlightId));
									const J = [
											{
												range: q,
												options: {
													description: "quick-access-range-highlight",
													className: "rangeHighlight",
													isWholeLine: !0,
												},
											},
											{
												range: q,
												options: {
													description: "quick-access-range-highlight-overview",
													overviewRuler: {
														color: (0, h.$jP)(a.$8T),
														position: u.OverviewRulerLane.Full,
													},
												},
											},
										],
										[W, X] = V.deltaDecorations(G, J);
									R({
										editor: H,
										rangeHighlightId: W,
										overviewRulerDecorationId: X,
									});
								});
						},
						U = (H) => {
							const q = A();
							q?.editor === H &&
								(H?.changeDecorations((V) => {
									q &&
										V.deltaDecorations(
											[q.overviewRulerDecorationId, q.rangeHighlightId],
											[],
										);
								}),
								R(void 0));
						},
						z = async (H) => {
							L()?.cancel();
							const q = new d.$Ce();
							if ((D(q), H.length === 0)) {
								k([]);
								return;
							}
							O(H);
							try {
								const V = new AbortController();
								N((ne) => [
									...ne,
									{ abortC: V, query: H, startTime: Date.now() },
								]);
								const G = s.state.selectedFile;
								let K;
								if (G) {
									const ne = $.asRelativePath(G);
									K = o.$Pk({ globsNewLineSeparated: ne });
								}
								const J = performance.now(),
									W = await l.searchNewLocalFast(H, 30, {
										globFilter: K,
										raceNRequests: 10,
										abortSignal: V.signal,
									}),
									X = performance.now();
								console.log("search time:", X - J);
								const Y = new Map();
								W.forEach((ne) => {
									const ee = ne.codeResult,
										{ codeBlock: _ } = ee;
									if (!_ || !_.range) return;
									const te = _.relativeWorkspacePath,
										Q = _.range &&
											_.range.startPosition &&
											_.range.endPosition && {
												startLineNumber: _.range.startPosition.line,
												endLineNumber: _.range.endPosition.line,
											};
									if (Q === void 0) return;
									const Z = ee.score,
										se = Y.get(te);
									se
										? (se.subItems.push({ range: Q, score: Z }),
											(se.maxScore = Math.max(se.maxScore, Z)))
										: Y.set(te, {
												subItems: [{ range: Q, score: Z }],
												maxScore: Z,
											});
								});
								const ie = Array.from(Y.entries())
									.sort((ne, ee) => ee[1].maxScore - ne[1].maxScore)
									.map(([ne, { subItems: ee }]) => ({
										id: ne,
										item: {
											relativeWorkspacePath: ne,
											subItems: ee
												.sort((_, te) => te.score - _.score)
												.slice(0, 5),
										},
										render: (_, te) => ({
											title: (0, c.$sc)(_.relativeWorkspacePath),
											subtitle: _.relativeWorkspacePath,
											isAdded: !1,
											icon: (0, i.createComponent)(n.$k$b, {
												get fileName() {
													return (0, c.$sc)(_.relativeWorkspacePath);
												},
												workspaceContextService: $,
												get modelService() {
													return b.modelService;
												},
												get languageService() {
													return b.languageService;
												},
											}),
											subItemIndicators: {
												count: _.subItems.length,
												selectedIndex: te ?? 0,
											},
										}),
										renderPreview: (_) =>
											(0, g.$7bc)(
												$.resolveRelativePath(_.relativeWorkspacePath),
											),
									}));
								k(ie), console.log("ITEMS:", ie);
							} catch (V) {
								console.error("Error searching:", V), k([]);
							}
						},
						F = async (H, q) => {
							try {
								const V = $.resolveRelativePath(H.relativeWorkspacePath),
									K = (
										await b.editorService.openEditor({
											resource: V,
											options: { preserveFocus: !0, revealIfVisible: !0 },
										})
									)?.getControl();
								if ((0, m.$0sb)(K)) {
									const J = r.$iL.lift({
										startLineNumber: q.range.startLineNumber,
										startColumn: 1,
										endLineNumber: q.range.endLineNumber,
										endColumn: 1,
									});
									K.revealRangeInCenter(J, 1), B(K, J);
								}
							} catch (V) {
								console.error("Error opening file:", V);
							}
						},
						x = async (H, q) => {
							try {
								const V = $.resolveRelativePath(H.relativeWorkspacePath),
									K = (
										await b.editorService.openEditor({
											resource: V,
											options: { preserveFocus: !1, revealIfVisible: !0 },
										})
									)?.getControl();
								if ((0, m.$0sb)(K)) {
									const J = r.$iL.lift({
										startLineNumber: q.range.startLineNumber,
										startColumn: 1,
										endLineNumber: q.range.endLineNumber,
										endColumn: 1,
									});
									K.revealRangeInCenter(J, 1), B(K, J);
								}
							} catch (V) {
								console.error("Error opening file:", V);
							}
							s.hide(), U(A()?.editor);
						};
					return (
						(0, w.onCleanup)(() => {
							console.log("CLEANUP"), U(A()?.editor);
						}),
						(0, i.createComponent)(p.Portal, {
							get mount() {
								return b.portalElement;
							},
							get children() {
								return (0, i.createComponent)(E.$CZc, {
									get placeholder() {
										return (0, t.memo)(() => s.state.selectedFile === void 0)()
											? "Search codebase"
											: "Search in " +
													(0, c.$sc)($.asRelativePath(s.state.selectedFile));
									},
									get codeSelection() {
										return s.state.codeSelection;
									},
									position: { x: 0, y: 0 },
									close: () => {
										U(A()?.editor), s.hide();
									},
									nonBlockingRoot: ".statusbar",
									get items() {
										return P();
									},
									onItemAdd: x,
									onItemRemove: (H) => {},
									onSearch: z,
									get selectedIndexY() {
										return v();
									},
									get selectedIndexX() {
										return I();
									},
									setSelectedIndexY: S,
									setSelectedIndexX: T,
									onActiveItemChange: F,
									style: {
										position: "fixed",
										bottom: "10px",
										left: "50%",
										transform: "translateX(-50%)",
										width: "400px",
										"max-width": "90vw",
										"z-index": 2500,
									},
									height: 200,
								});
							},
						})
					);
				}
			},
		),
		