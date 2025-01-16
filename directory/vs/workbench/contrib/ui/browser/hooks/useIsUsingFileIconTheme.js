define(de[428], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$b$b = w);
			function w() {
				const E = (0, i.$odc)(),
					[C, d] = (0, t.createSignal)(!1),
					m = () => {
						const u = E.themeService.getFileIconTheme();
						d(u.hasFileIcons);
					};
				m();
				const r = E.themeService.onDidFileIconThemeChange(() => {
					m();
				});
				return (0, t.onCleanup)(() => r.dispose()), C;
			}
		}),
		define(
			de[4182],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 312, 9, 3, 36, 14, 26, 156, 54, 299, 632,
				47, 642, 27, 1269, 4180, 428,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1zc = void 0);
				const I = (0, t.template)("<div>"),
					T = (0, t.template)('<div class="bugbot-clickable"><div>'),
					P = (0, t.template)(
						'<div><div></div><div></div><div class="bugbot-clickable"><div></div>Open',
					),
					k = (0, t.template)('<div class="bugbot-bug-location-code">'),
					L = (0, t.template)('<div tabindex="0">'),
					D = (A) => {
						const R = (0, c.$odc)(),
							O = {
								display: "flex",
								"align-items": "center",
								gap: "4px",
								padding: "0px 6px",
								cursor: "pointer",
								"font-size": "0.8em",
								"border-left":
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								"white-space": "nowrap",
							},
							B = (F) => {
								console.log("show diff"),
									A.showDiffCallback(),
									F.stopImmediatePropagation(),
									F.stopPropagation();
							},
							U = (F) => {
								R.bugbotService.openInEditorSideEffects(
									A.bugbotId,
									A.report.id,
									new l.$tv(A.location),
								),
									F.stopImmediatePropagation(),
									F.stopPropagation(),
									(0, f.$9gc)(R, {
										filePathOrUri:
											R.workspaceContextService.resolveRelativePath(
												A.location.file,
											),
										selection: {
											startLineNumber: A.location.startLine,
											startColumn: 1,
											endLineNumber: A.location.endLine,
											endColumn: 1e3,
										},
										openToSide: !0,
										fromGroup: A.delegate.group,
										preserveFocus: !1,
									});
							},
							z = (0, S.$b$b)();
						return (() => {
							const F = P(),
								x = F.firstChild,
								H = x.nextSibling,
								q = H.nextSibling,
								V = q.firstChild;
							return (
								F.addEventListener("click", U),
								F.style.setProperty("display", "flex"),
								F.style.setProperty("flex-direction", "row"),
								F.style.setProperty("align-items", "center"),
								F.style.setProperty(
									"border-bottom",
									"1px solid var(--vscode-editorWidget-border)",
								),
								F.style.setProperty("box-sizing", "border-box"),
								F.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								F.style.setProperty("width", "100%"),
								F.style.setProperty("height", "22px"),
								F.style.setProperty("cursor", "pointer"),
								(0, d.insert)(
									F,
									(0, m.createComponent)(r.Show, {
										get when() {
											return z();
										},
										get children() {
											const G = I();
											return (
												G.style.setProperty("display", "flex"),
												G.style.setProperty("align-items", "center"),
												G.style.setProperty("padding-left", "2px"),
												G.style.setProperty("margin-right", "-4px"),
												(0, d.insert)(
													G,
													(0, m.createComponent)(p.$k$b, {
														get fileName() {
															return (0, o.$sc)(A.location.file);
														},
														get workspaceContextService() {
															return R.workspaceContextService;
														},
														get modelService() {
															return R.modelService;
														},
														get languageService() {
															return R.languageService;
														},
													}),
												),
												G
											);
										},
									}),
									x,
								),
								x.style.setProperty("font-size", "0.8em"),
								x.style.setProperty("margin-left", "4px"),
								x.style.setProperty("overflow", "hidden"),
								x.style.setProperty("text-overflow", "ellipsis"),
								(0, d.insert)(x, () =>
									(0, b.$K9b)(
										R.labelService.getUriLabel(
											R.workspaceContextService.resolveRelativePath(
												A.location.file,
											),
											{ relative: !0 },
										),
									),
								),
								H.style.setProperty("flex-grow", "1"),
								(0, d.insert)(
									F,
									(0, m.createComponent)(r.Show, {
										get when() {
											return A.canShowDiff;
										},
										get children() {
											const G = T(),
												K = G.firstChild;
											return (
												G.addEventListener("click", B),
												(0, C.style)(G, O),
												K.style.setProperty("font-size", "1em"),
												(0, d.insert)(
													G,
													() => (A.showDiff ? "Hide Diff" : "Show Diff"),
													null,
												),
												(0, E.effect)(() =>
													(0, w.className)(
														K,
														g.ThemeIcon.asClassName(n.$ak.diff),
													),
												),
												G
											);
										},
									}),
									q,
								),
								q.addEventListener("click", U),
								(0, C.style)(q, O),
								V.style.setProperty("font-size", "1em"),
								(0, E.effect)(() =>
									(0, w.className)(V, g.ThemeIcon.asClassName(n.$ak.goToFile)),
								),
								F
							);
						})();
					},
					M = (A) => {
						const [R, O] = (0, r.createSignal)(!1),
							B = () =>
								U.workspaceContextService.resolveRelativePath(A.location.file),
							U = (0, c.$odc)(),
							[z, F] = (0, r.createSignal)(300),
							[x, H] = (0, r.createSignal)(1),
							[q, V] = (0, r.createSignal)(1);
						return (() => {
							const G = k();
							return (
								(0, d.insert)(
									G,
									(0, m.createComponent)(D, {
										get bugbotId() {
											return A.bugbotId;
										},
										get report() {
											return A.report;
										},
										get location() {
											return A.location;
										},
										get delegate() {
											return A.delegate;
										},
										get showDiff() {
											return R();
										},
										showDiffCallback: () => O((K) => !K),
										get canShowDiff() {
											return (
												A.fileSnapshotPreDiff !== void 0 &&
												A.fileSnapshot !== void 0
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									G,
									(0, m.createComponent)(r.Show, {
										get when() {
											return R();
										},
										get fallback() {
											return (0, m.createComponent)(N, {
												get content() {
													return ((0, $.$Pyc)(A.fileSnapshot) ?? []).join(`
`);
												},
												get startLine() {
													return A.location.startLine;
												},
												get endLine() {
													return A.location.endLine;
												},
												get uri() {
													return B();
												},
												setContainerHeight: F,
												setStartLine: H,
												setEndLine: V,
											});
										},
										get children() {
											return (0, m.createComponent)(v.$nzc, {
												get original() {
													return (
														(0, $.$Pyc)(A.fileSnapshotPreDiff) ?? []
													).join(`
`);
												},
												get modified() {
													return ((0, $.$Pyc)(A.fileSnapshot) ?? []).join(`
`);
												},
												get language() {
													return U.languageService.createByLanguageNameOrFilepathOrFirstLine(
														null,
														B(),
														void 0,
													).languageId;
												},
												get style() {
													return { height: `${z()}px` };
												},
												diffEditorOptions: {
													renderSideBySide: !0,
													scrollBeyondLastLine: !1,
													hideUnchangedRegions: { enabled: !1 },
												},
												get startLine() {
													return x();
												},
												get endLine() {
													return q();
												},
												shouldNotCollapse: !0,
												editorCallback: ({
													editor: K,
													modifiedModel: J,
													originalModel: W,
												}) => {},
												enableScrollOnFocus: !0,
											});
										},
									}),
									null,
								),
								G
							);
						})();
					};
				e.$1zc = M;
				const N = (A) => {
					let R;
					const [O, B] = (0, r.createSignal)(),
						U = new h.$Zc(),
						z = (0, c.$odc)(),
						F = async (V) => {
							if (((R = V), !R || O())) return;
							const G = 4,
								K = Math.max(1, A.startLine - G),
								J = A.endLine + G;
							try {
								const W = a.URI.parse(A.uri + (0, s.$9g)() + "-anysphere"),
									X = A.content,
									Y =
										z.languageService.createByLanguageNameOrFilepathOrFirstLine(
											null,
											A.uri,
											void 0,
										),
									ie = U.add(z.modelService.createModel(X, Y, W, !0)),
									ne = 19,
									ee = 10,
									_ = J - K + 1,
									te = Math.min(800, Math.max(300, _ * ne + ee * 2));
								R.style.height = `${te}px`;
								const Q = U.add(
									z.instantiationService.createInstance(
										u.$X0b,
										R,
										{
											lineNumbers: "on",
											lineNumbersMinChars: 6,
											scrollBeyondLastLine: !1,
											readOnly: !0,
											minimap: { enabled: !1 },
											scrollbar: {
												vertical: "hidden",
												horizontal: "hidden",
												handleMouseWheel: !1,
												useShadows: !1,
												verticalHasArrows: !1,
												horizontalHasArrows: !1,
												ignoreHorizontalScrollbarInContentHeight: !0,
											},
										},
										{ overwriteIsSimpleWidget: !1 },
									),
								);
								B(Q),
									Q.setModel(ie),
									Q.revealLinesNearTop(K, J),
									A.setStartLine(K),
									A.setEndLine(J),
									H(Q, ie),
									q(Q),
									x(R, Q),
									U.add(ie);
							} catch (W) {
								console.error("Failed to load file:", W);
							}
						},
						x = (V, G) => {
							const K = new ResizeObserver(() => {
								G.layout(),
									A.setContainerHeight((J) => Math.max(J, V.offsetHeight));
							});
							K.observe(V), U.add({ dispose: () => K.disconnect() });
						},
						H = (V, G) => {
							const K = Math.min(A.endLine, G.getLineCount()),
								J = Math.min(A.startLine, K),
								W = V.deltaDecorations(
									[],
									[
										{
											range: {
												startLineNumber: J,
												endLineNumber: K,
												startColumn: 1,
												endColumn: G.getLineMaxColumn(K),
											},
											options: {
												isWholeLine: !0,
												className: "bugbot-bug-highlight-line",
												description: "Bug Location",
											},
										},
									],
								);
							U.add({
								dispose: () => {
									V.deltaDecorations(W, []);
								},
							});
						},
						q = (V) => {
							U.add(
								V.onDidFocusEditorWidget(() => {
									V.updateOptions({
										scrollbar: {
											vertical: "visible",
											horizontal: "visible",
											handleMouseWheel: !0,
										},
									});
								}),
							),
								U.add(
									V.onDidBlurEditorWidget(() => {
										V.updateOptions({
											scrollbar: {
												vertical: "hidden",
												horizontal: "hidden",
												handleMouseWheel: !1,
											},
										});
									}),
								),
								U.add(
									V.onKeyDown((G) => {
										G.keyCode === y.KeyCode.Escape &&
											(R?.focus(),
											V.updateOptions({
												scrollbar: {
													vertical: "hidden",
													horizontal: "hidden",
													handleMouseWheel: !1,
												},
											}));
									}),
								);
						};
					return (
						(0, r.onCleanup)(() => {
							U.dispose();
						}),
						(() => {
							const V = L();
							return (
								(0, i.use)((G) => F(G), V),
								V.style.setProperty("outline", "none"),
								V
							);
						})()
					);
				};
			},
		),
		define(
			de[1974],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 54, 26, 565, 36, 156, 169, 295, 177,
				246, 428,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageCodePill = $);
				const s = (0, t.template)("<span>/"),
					l = (0, t.template)("<span>"),
					y = (0, t.template)(
						'<div class="composer-message-code-pill"><span></span><span>',
					);
				function $(v) {
					const S = (0, c.$odc)(),
						{ currentComposer: I } = (0, o.useComposerDataHandle)(
							() => v.composerDataHandle,
						),
						T = (0, m.createMemo)(() => I().composerId),
						P = (0, m.createMemo)(() =>
							v.forceStatus
								? v.forceStatus
								: v.codeBlock.uri
									? (S.composerDataService.getCodeBlockStatus(
											T(),
											v.codeBlock.uri,
											v.codeBlock.version,
										) ?? "none")
									: "none",
						),
						k = (0, m.createMemo)(() =>
							v.codeBlock.uri ? (0, u.$sc)(v.codeBlock.uri.toString()) : "",
						),
						L = (0, m.createMemo)(() =>
							v.codeBlock.uri
								? S.composerDataService.getLatestCodeBlockVersion(
										T(),
										v.codeBlock.uri,
									)
								: 0,
						),
						D = (() => {
							const N = s(),
								A = N.firstChild;
							return (
								N.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								N.style.setProperty("line-height", "120%"),
								N.style.setProperty("font-size", "10px"),
								N.style.setProperty("font-feature-settings", "tnum"),
								N.style.setProperty("font-variant-numeric", "tabular-nums"),
								(0, d.insert)(N, () => v.codeBlock.version + 1, A),
								(0, d.insert)(N, () => L() + 1, null),
								N
							);
						})(),
						M = (0, b.$b$b)();
					return (() => {
						const N = y(),
							A = N.firstChild,
							R = A.nextSibling;
						return (
							N.addEventListener("click", (O) => {
								const B = S.composerDataService.getInlineDiff(
									T(),
									v.codeBlock.uri,
									v.codeBlock.version,
								);
								if (B) {
									const U = B.changes[0];
									(0, f.openCodeSelectionInEditor)(
										{
											uri: B.uri,
											range: {
												selectionStartLineNumber:
													B.currentRange.startLineNumber +
													U.addedRange.startLineNumber -
													1,
												positionLineNumber:
													B.currentRange.startLineNumber +
													U.addedRange.startLineNumber -
													1,
												selectionStartColumn: 1,
												positionColumn: 1,
											},
											text: "",
										},
										S.workspaceContextService,
										S.openerService,
									);
									return;
								}
								(0, f.openFileInEditorIfExists)(
									v.codeBlock.uri,
									S.fileService,
									S.openerService,
									O.altKey,
								);
							}),
							(0, d.insert)(
								N,
								(0, C.createComponent)(m.Show, {
									get when() {
										return M();
									},
									get children() {
										const O = l();
										return (
											O.style.setProperty("margin-right", "-4px"),
											O.style.setProperty("scale", "0.8"),
											O.style.setProperty("height", "14px"),
											O.style.setProperty("display", "flex"),
											O.style.setProperty("align-items", "center"),
											(0, d.insert)(
												O,
												(0, C.createComponent)(n.$k$b, {
													get fileName() {
														return k();
													},
													get workspaceContextService() {
														return S.workspaceContextService;
													},
													get modelService() {
														return S.modelService;
													},
													get languageService() {
														return S.languageService;
													},
												}),
											),
											O
										);
									},
								}),
								A,
							),
							A.style.setProperty("line-height", "120%"),
							A.style.setProperty("font-size", "10px"),
							A.style.setProperty("white-space", "nowrap"),
							A.style.setProperty("overflow", "hidden"),
							A.style.setProperty("text-overflow", "ellipsis"),
							(0, d.insert)(A, k),
							R.style.setProperty("margin-left", "4px"),
							R.style.setProperty("display", "flex"),
							R.style.setProperty("align-items", "center"),
							R.style.setProperty("gap", "4px"),
							(0, d.insert)(
								R,
								(0, C.createComponent)(m.Show, {
									get when() {
										return P() === "generating" || P() === "applying";
									},
									get fallback() {
										return (0, C.createComponent)(m.Show, {
											get when() {
												return P() === "completed" || P() === "accepted";
											},
											get fallback() {
												return [
													D,
													(0, C.createComponent)(
														h.ComposerGeneralStatusIndicator,
														{
															get status() {
																return P();
															},
														},
													),
												];
											},
											get children() {
												return [
													D,
													(0, C.createComponent)(m.Show, {
														get when() {
															return P() === "accepted";
														},
														get fallback() {
															return (0, C.createComponent)(
																h.ComposerGeneralStatusIndicator,
																{ status: "completed" },
															);
														},
														get children() {
															const O = l();
															return (
																O.style.setProperty("font-size", "10px"),
																O.style.setProperty(
																	"color",
																	"var(--vscode-testing-iconPassed)",
																),
																(0, E.effect)(() =>
																	(0, i.className)(
																		O,
																		a.ThemeIcon.asClassName(r.$ak.check),
																	),
																),
																O
															);
														},
													}),
												];
											},
										});
									},
									get children() {
										return [
											(() => {
												const O = l();
												return (
													O.style.setProperty(
														"color",
														"var(--vscode-input-placeholderForeground)",
													),
													O.style.setProperty("font-size", "10px"),
													(0, d.insert)(
														O,
														() => g.composerCodeBlockStatusLabelMap[P()],
													),
													O
												);
											})(),
											(() => {
												const O = l();
												return (
													O.style.setProperty("transform", "scale(0.75)"),
													O.style.setProperty("display", "flex"),
													O.style.setProperty("align-items", "center"),
													O.style.setProperty("justify-content", "center"),
													O.style.setProperty("max-height", "10px"),
													(0, d.insert)(O, (0, C.createComponent)(p.$Z8b, {})),
													O
												);
											})(),
										];
									},
								}),
							),
							(0, E.effect)((O) =>
								(0, w.style)(
									N,
									{
										display: "flex",
										"align-items": "center",
										height: "20px",
										"min-width": "0",
										"padding-left": "2px",
										"padding-right": "4px",
										"border-radius": "4px",
										cursor: "pointer",
										"user-select": "none",
										border:
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										width: "fit-content",
										margin: "4px 0",
										...v.style,
									},
									O,
								),
							),
							N
						);
					})();
				}
			},
		),
		define(
			de[1975],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 54, 26, 14, 156, 36, 216, 428]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDocsReferenceComponent =
						e.ComposerCodeReferenceComponent =
						e.ComposerWebReferenceComponent =
							void 0);
				const o = (0, t.template)("<div><div></div><div>"),
					f = (0, t.template)("<span>"),
					b = (0, t.template)("<div><div>");
				function s() {
					var S =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (k, L) {
										var D = Error();
										return (
											(D.name = "SuppressedError"),
											(D.error = k),
											(D.suppressed = L),
											D
										);
									},
						I = {},
						T = [];
					function P(k, L) {
						if (L != null) {
							if (Object(L) !== L)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (k)
								var D =
									L[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								D === void 0 &&
								((D = L[Symbol.dispose || Symbol.for("Symbol.dispose")]), k)
							)
								var M = D;
							if (typeof D != "function")
								throw new TypeError("Object is not disposable.");
							M &&
								(D = function () {
									try {
										M.call(L);
									} catch (N) {
										return Promise.reject(N);
									}
								}),
								T.push({ v: L, d: D, a: k });
						} else k && T.push({ d: L, a: k });
						return L;
					}
					return {
						e: I,
						u: P.bind(null, !1),
						a: P.bind(null, !0),
						d: function () {
							var k,
								L = this.e,
								D = 0;
							function M() {
								for (; (k = T.pop()); )
									try {
										if (!k.a && D === 1)
											return (D = 0), T.push(k), Promise.resolve().then(M);
										if (k.d) {
											var A = k.d.call(k.v);
											if (k.a) return (D |= 2), Promise.resolve(A).then(M, N);
										} else D |= 1;
									} catch (R) {
										return N(R);
									}
								if (D === 1)
									return L !== I ? Promise.reject(L) : Promise.resolve();
								if (L !== I) throw L;
							}
							function N(A) {
								return (L = L !== I ? new S(A, L) : A), M();
							}
							return M();
						},
					};
				}
				const l = {
						"background-color": "var(--vscode-editor-background)",
						"flex-shrink": 0,
						"font-size": "12px",
						display: "flex",
						"align-items": "center",
						"justify-content": "center",
						gap: "2px",
						"border-radius": "4px",
						"user-select": "none",
						cursor: "pointer",
					},
					y = (S) => {
						try {
							var I = s();
							const T = I.u((0, g.span)("ComposerWebReferenceComponent")),
								P = (0, n.$odc)();
							return (() => {
								const k = o(),
									L = k.firstChild,
									D = L.nextSibling;
								return (
									k.addEventListener("click", () => {
										P.openerService.open(S.url);
									}),
									L.style.setProperty("font-size", "10px"),
									D.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									(0, d.insert)(
										D,
										(() => {
											const M = (0, m.memo)(() => S.title.length > 30);
											return () =>
												M() ? S.title.substring(0, 30) + "..." : S.title;
										})(),
									),
									(0, C.effect)(
										(M) => {
											const N = { ...l, padding: "0px 4px", gap: "4px" },
												A = a.ThemeIcon.asClassName(h.$ak.globe);
											return (
												(M._v$ = (0, E.style)(k, N, M._v$)),
												A !== M._v$2 && (0, w.className)(L, (M._v$2 = A)),
												M
											);
										},
										{ _v$: void 0, _v$2: void 0 },
									),
									k
								);
							})();
						} catch (T) {
							I.e = T;
						} finally {
							I.d();
						}
					};
				e.ComposerWebReferenceComponent = y;
				const $ = (S) => {
					const I = (0, n.$odc)(),
						T = (0, r.createMemo)(() => (0, u.$sc)(S.relativePath)),
						P = (0, p.$b$b)();
					return (() => {
						const k = b(),
							L = k.firstChild;
						return (
							k.addEventListener("click", () => {
								I.openerService.open(
									I.workspaceContextService.resolveRelativePath(S.relativePath),
								);
							}),
							(0, d.insert)(
								k,
								(0, i.createComponent)(r.Show, {
									get when() {
										return P();
									},
									get children() {
										const D = f();
										return (
											D.style.setProperty("margin-right", "-4px"),
											D.style.setProperty("scale", "0.8"),
											D.style.setProperty("height", "14px"),
											D.style.setProperty("display", "flex"),
											D.style.setProperty("align-items", "center"),
											(0, d.insert)(
												D,
												(0, i.createComponent)(c.$k$b, {
													get fileName() {
														return T();
													},
													get workspaceContextService() {
														return I.workspaceContextService;
													},
													get modelService() {
														return I.modelService;
													},
													get languageService() {
														return I.languageService;
													},
												}),
											),
											D
										);
									},
								}),
								L,
							),
							L.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							(0, d.insert)(
								L,
								(() => {
									const D = (0, m.memo)(() => T().length > 30);
									return () => (D() ? T().substring(0, 30) + "..." : T());
								})(),
							),
							(0, C.effect)((D) =>
								(0, E.style)(
									k,
									{
										...l,
										padding: "1px 2px",
										"padding-right": "4px",
										border:
											"1px solid var(--vscode-list-inactiveSelectionBackground)",
									},
									D,
								),
							),
							k
						);
					})();
				};
				e.ComposerCodeReferenceComponent = $;
				const v = (S) => {
					const I = (0, n.$odc)();
					return (() => {
						const T = o(),
							P = T.firstChild,
							k = P.nextSibling;
						return (
							T.addEventListener("click", () => {
								S.url && I.openerService.open(S.url), S.onClick?.();
							}),
							T.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							T.style.setProperty("padding", "0px 6px"),
							T.style.setProperty("gap", "4px"),
							T.style.setProperty("font-size", "12px"),
							T.style.setProperty("display", "inline-flex"),
							T.style.setProperty("align-items", "center"),
							T.style.setProperty("justify-content", "center"),
							T.style.setProperty("border-radius", "4px"),
							T.style.setProperty("user-select", "none"),
							T.style.setProperty("cursor", "pointer"),
							P.style.setProperty("font-size", "10px"),
							k.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							(0, d.insert)(
								k,
								(() => {
									const L = (0, m.memo)(() => S.title.length > 30);
									return () =>
										L() ? S.title.substring(0, 30) + "..." : S.title;
								})(),
							),
							(0, C.effect)(() =>
								(0, w.className)(
									P,
									S.iconReplace ?? a.ThemeIcon.asClassName(h.$ak.notebook),
								),
							),
							T
						);
					})();
				};
				e.ComposerDocsReferenceComponent = v;
			},
		),
		