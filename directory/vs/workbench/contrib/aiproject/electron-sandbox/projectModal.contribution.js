define(de[4323], he([1, 0, 4252, 3228, 1995, 3227]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[1996],
			he([1, 0, 13, 33, 3, 54, 36, 1381]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1bc = r);
				const m = !1;
				function r(a) {
					const h = (0, C.$odc)(),
						[c, n] = (0, t.createSignal)([]),
						[g, p] = (0, t.createSignal)(!1),
						[o, f] = (0, t.createSignal)(null),
						b = (0, t.createRoot)(() => (0, t.createSignal)(a()));
					(0, t.onMount)(() => {
						h.anythingQuickAccessProvider.initializeCaches();
					});
					const s = async ($) =>
							(
								await Promise.all(
									$.map(async (S) => {
										try {
											return (await h.fileService.exists(S.uri)) ? S : null;
										} catch (I) {
											return (
												console.error(`Error checking file existence: ${I}`),
												null
											);
										}
									}),
								)
							).filter((S) => S !== null),
						l = async () => {
							const $ = Date.now();
							let v = 0,
								S = 0,
								I = 0;
							const T = b[0](),
								P = new i.$Ce();
							p(!0), f(null);
							try {
								const k = Date.now(),
									L = h.anythingQuickAccessProvider.doGetPicksPublic(
										T,
										{
											enableEditorSymbolSearch: !0,
											excludeNotepads: !0,
											excludeSemanticSearch: !0,
											excludeCursorIgnore: !0,
										},
										new w.$Zc(),
										P.token,
									);
								v = Date.now() - k;
								let D = [];
								const M = Date.now();
								if ((0, d.$7_b)(L)) {
									const [N, A] = await Promise.all([
										Promise.resolve(L.picks),
										L.additionalPicks,
									]);
									D = [...u(N), ...u(A)];
								} else if (L instanceof Promise) {
									const N = await L;
									D = u(N);
								} else D = u(L);
								if (((S = Date.now() - M), !P.token.isCancellationRequested)) {
									const N = Date.now(),
										A = await s(D);
									(I = Date.now() - N), n(A);
								}
							} catch (k) {
								console.log("[ian]", k),
									P.token.isCancellationRequested ||
										f(k instanceof Error ? k.message : "An error occurred");
							} finally {
								if (
									(P.token.isCancellationRequested || p(!1), P.dispose(), m)
								) {
									const k = Date.now() - $;
									console.log(`Timing for fetchFiles:
Total time: ${k}ms
Picks fetch time: ${v}ms
Extract time: ${S}ms
Existence check time: ${I}ms`);
								}
							}
						};
					let y;
					return (
						(0, t.createEffect)(() => {
							const $ = a();
							b[1]($), clearTimeout(y), (y = setTimeout(l, 150));
						}),
						(0, t.onMount)(() => {
							l();
						}),
						{ allFiles: c, isLoading: g, error: o }
					);
				}
				function u(a) {
					return (
						(0, d.$8_b)(a) && (a = a.items),
						a
							.filter((h) => h.resource !== void 0)
							.map((h) => ({
								uri: h.resource,
								fileName: (0, E.$sc)(h.resource.fsPath),
								isCurrentFile: !1,
								labelMatches: h.highlights?.label || [],
								descriptionMatches: h.highlights?.description || [],
							}))
					);
				}
			},
		),
		define(
			de[4324],
			he([1, 0, 2, 13, 54, 9, 36, 1982, 156, 1996, 476, 860, 1071, 444]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$kAc = n);
				function n(g) {
					const p = (0, C.$odc)(),
						[o, f] = (0, i.createSignal)(""),
						{ options: b } = (0, h.$1_b)(o, () => [
							c.EverythingSearchOptionType.File,
						]),
						[s, l] = (0, i.createSignal)(-1),
						{ allFiles: y, error: $ } = (0, r.$1bc)(() => o()),
						[v, S] = (0, i.createSignal)([]);
					(0, i.createEffect)(() => {
						const k = g.notepadData.context.fileSelections ?? [],
							L = new Set(k.map((N) => E.URI.revive(N.uri).toString())),
							D = b()
								.filter(
									(N) =>
										N.type === c.EverythingSearchOptionType.File &&
										N.uri &&
										!L.has(N.uri.toString()),
								)
								.map((N) => ({
									uri: E.URI.from(N.uri),
									fileName: (0, w.$sc)(E.URI.revive(N.uri)?.fsPath ?? ""),
									labelMatches: N.labelMatches,
									descriptionMatches: N.descriptionMatches,
								})),
							M = [
								...k.map((N) => ({
									uri: E.URI.revive(N.uri),
									fileName: (0, w.$sc)(E.URI.revive(N.uri).fsPath),
								})),
								...D,
							];
						S(M);
					});
					const I = (0, i.createMemo)(() => {
							const k = v(),
								L = g.notepadData.context.fileSelections ?? [];
							return k.map((D) => ({
								id: D.uri.toString(),
								item: D,
								title: D.fileName,
								subtitle: p.workspaceContextService.asRelativePath(D.uri),
								isAdded: L.some(
									(M) => E.URI.revive(M.uri).toString() === D.uri.toString(),
								),
								icon: (0, t.createComponent)(m.$k$b, {
									get fileName() {
										return D.fileName;
									},
									get workspaceContextService() {
										return p.workspaceContextService;
									},
									get modelService() {
										return p.modelService;
									},
									get languageService() {
										return p.languageService;
									},
								}),
								titleHighlights: D.labelMatches,
								subtitleHighlights: D.descriptionMatches,
								renderPreview: () => (0, a.$7bc)(D.uri),
							}));
						}),
						T = (k) => {
							p.notepadService.addContext(g.notepadData.id, "fileSelections", {
								uri: k.uri,
							});
						},
						P = (k) => {
							const L = g.notepadData.context.fileSelections?.findIndex((D) =>
								(0, E.$Ac)(D.uri, k.uri),
							);
							p.notepadService.removeContext(
								g.notepadData.id,
								"fileSelections",
								L,
							);
						};
					return (0, t.createComponent)(d.$ubc, {
						get position() {
							return g.position;
						},
						get close() {
							return g.close;
						},
						get nonBlockingRoot() {
							return g.nonBlockingRoot;
						},
						get items() {
							return I();
						},
						onItemAdd: T,
						onItemRemove: P,
						onSearch: f,
						get selectedIndex() {
							return s();
						},
						setSelectedIndex: l,
						anchor: "bottom-right",
						get error() {
							return $() ?? "";
						},
						get height() {
							return (0, u.$Kac)() ? 300 : void 0;
						},
					});
				}
			},
		),
		define(
			de[4325],
			he([
				1, 0, 2, 2, 2, 2, 13, 193, 27, 19, 9, 47, 373, 36, 1369, 817, 298, 17,
				1996, 2505,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hAc = l);
				const b = (0, t.template)("<div>"),
					s = (0, t.template)('<div class="ai-editor-box-render">');
				function l(y) {
					const $ = (0, c.$odc)(),
						v = [],
						S = (() => {
							const q = b();
							return (
								q.style.setProperty("width", "100%"),
								q.style.setProperty("height", "100%"),
								q.style.setProperty("box-sizing", "border-box"),
								q
							);
						})(),
						[I, T] = (0, C.createSignal)(null),
						[P, k] = (0, C.createSignal)(null),
						[L, D] = (0, C.createSignal)(!1);
					(0, C.createEffect)(() => {
						y.mentionDecorationIdsToRemove &&
							y.mentionDecorationIdsToRemove.length > 0 &&
							y.mentionDecorationIdsToRemove.forEach((q) => {
								const V = P();
								V && V.removeDecorationByDecorationId(q, !1);
							});
					});
					const {
							allFiles: M,
							isLoading: N,
							error: A,
						} = (0, f.$1bc)(() => I() ?? ""),
						R = (0, C.createMemo)(() => {
							const q = M();
							return q.length > 0 && I() !== null ? q : [];
						}),
						O = async (q, V) => {
							const G = P();
							G && (G.focus(), V && x(q, V));
						},
						B = () => {
							const q = y.getContext();
							if (!q) throw new Error("[notepad] No current context available");
							return q;
						};
					function U(q, V, G, K) {
						$.selectedContextService.addContext({
							contextType: q,
							value: V,
							setContext: y.setContext,
							getContext: y.getContext,
							mention: G,
							undoRedoUri: K ? y.undoRedoUri : void 0,
						});
					}
					const z = (q, V) => {
							$.selectedContextService.removeMention({
								uuid: q,
								setContext: y.setContext,
								getContext: y.getContext,
								undoRedoUri: V ? y.undoRedoUri : void 0,
							});
						},
						F = () => {
							const q = P();
							if (!q) return;
							const V = q.getModel();
							if (!V) return;
							const G = B().fileSelections;
							if (!(!G || G.length === 0))
								for (let K = 0; K < G.length; K++) {
									const J = G[K],
										W =
											B().mentions.fileSelections?.[
												(0, p.$Zgc)("fileSelections", J)
											] ?? [];
									for (const X of W) {
										const Y = V.getDecorationRange(X.uuid);
										Y &&
											U("fileSelections", J, { uuid: X.uuid, defaultRange: Y });
									}
								}
						},
						x = (q, V) => {
							U(
								"fileSelections",
								{ uri: q },
								{ uuid: V, defaultRange: void 0 },
							),
								F();
						},
						H = (q) => {
							const V = B(),
								G = (0, C.untrack)(() => V.fileSelections ?? []);
							if (G.length !== 0)
								for (let K = 0; K < G.length; K++) {
									const J = G[K],
										W =
											V.mentions.fileSelections?.[
												(0, p.$Zgc)("fileSelections", J)
											] ?? [],
										X = (0, d.unwrap)(W);
									for (const Y of X) {
										if (!Y.defaultRange) continue;
										const ie = q.addDecoration(new o.$iL(Y.defaultRange), {
											uri: u.URI.revive(J.uri),
											range: {
												startLineNumber: 1,
												startColumn: 1,
												endLineNumber: 1,
												endColumn: 1,
											},
										});
										ie && (Y.uuid = ie);
									}
									y.setContext(
										"mentions",
										"fileSelections",
										(0, p.$Zgc)("fileSelections", J),
										X,
									);
								}
						};
					return (
						(0, C.createEffect)(
							(0, C.on)([R], () => {
								const q = P();
								if (q && q.hasTextFocus()) {
									const V = R().map(
											(K) =>
												new n.$fAc(
													(0, r.$kh)(K.uri),
													$.workspaceContextService.asRelativePath(K.uri),
													(J) => {
														O(K.uri, J);
													},
													{
														uri: K.uri,
														range: {
															startColumn: 1,
															startLineNumber: 1,
															endColumn: 1,
															endLineNumber: 1,
														},
													},
												),
										),
										G = !q.isSuggestionMenuVisible() && R().length > 0;
									q.updateSuggestions(V, G);
								}
							}),
						),
						(0, C.createEffect)(
							(0, C.on)([() => y.forceRerender], () => {
								if (y.forceRerender !== void 0) {
									const q = P();
									q && (q.dispose(), q.getModel()?.dispose()), k(null);
								}
							}),
						),
						(0, C.createEffect)(() => {
							if (!P()) {
								const q = {
										...n.$gAc.getEditorOptions($.configurationService),
										...y.nonReactiveEditorOptions,
									},
									V = $.instantiationService.createInstance(
										n.$gAc,
										S,
										q,
										{
											customContributions: y.extraControllers,
											disableGoToDefinition: y.disableGoToDefinition,
										},
										y.placeholder,
									),
									G = (re) => {
										if (y.commandListeners) {
											for (const {
												command: le,
												listener: oe,
											} of y.commandListeners)
												if (re.equals(le) && oe(re, V)) {
													re.preventDefault(), re.stopPropagation();
													return;
												}
										}
										if (re.keyCode === m.KeyCode.Escape && y.onEscape) {
											y.onEscape(re);
											return;
										}
										if (re.keyCode === m.KeyCode.Enter) {
											if (re.shiftKey) return;
											y.onSubmit &&
												((y.enterToSubmit &&
													!h.$YCb.Visible.getValue(V.contextKeyService)) ||
													((re.ctrlKey || re.metaKey) &&
														!h.$YCb.Visible.getValue(V.contextKeyService))) &&
												(re.preventDefault(), y.onSubmit(V.getValue(), re));
										}
										y.onKeyDown?.(re);
									};
								V.onKeyDown(G);
								const K =
										$.languageService.createByLanguageNameOrFilepathOrFirstLine(
											y.language || "markdown",
											null,
											void 0,
										),
									J = u.URI.from({
										scheme: "aiEditorBox-anysphere",
										path: y.customId,
										fragment: (0, a.$9g)(),
									});
								let W = !1;
								const X = n.$gAc.getOrCreateModel(
									$.modelService,
									y.customId,
									y.text,
									K,
									J,
									() => {
										W = !0;
									},
								);
								if ((V.setModel(X), W)) H(V);
								else if (!y.disableGoToDefinition) {
									const re = B(),
										le = (0, C.untrack)(() => re.fileSelections ?? []);
									for (let oe = 0; oe < le.length; oe++) {
										const ae = le[oe],
											pe =
												re.mentions.fileSelections?.[
													(0, p.$Zgc)("fileSelections", ae)
												] ?? [];
										for (const $e of (0, d.unwrap)(pe))
											$e.defaultRange &&
												V.setDecorationDefinitions($e.uuid, {
													uri: u.URI.revive(ae.uri),
													range: {
														startLineNumber: 1,
														startColumn: 1,
														endLineNumber: 1,
														endColumn: 1,
													},
												});
									}
								}
								k(V);
								const Y = y.setText,
									ie = y.onDidChangeModelContent,
									ne = F,
									ee = V.onDidChangeModelContent((re) => {
										Y(V.getValue()), ie?.(re), ne();
									});
								v.push(ee);
								const _ = y.onBlur,
									te = V.onDidBlurEditorText(() => {
										_?.(), D(!1);
									});
								v.push(te);
								const Q = V.onDidChangeModelContent(() => {
									const re = V.getPosition();
									re &&
										setTimeout(() => {
											const le = X.getLineContent(re.lineNumber),
												oe = X.getDecorationsInRange({
													startLineNumber: re.lineNumber,
													startColumn: 0,
													endLineNumber: re.lineNumber,
													endColumn: re.column - 1,
												}),
												ae = oe[oe.length - 1],
												pe = le
													.slice(ae?.range.endColumn - 1 || 0, re.column)
													.trimEnd(),
												$e = (0, g.$jac)(pe);
											T($e ? $e.matchingString : null);
										});
								});
								v.push(Q);
								const Z = (re) => {
										z(re);
									},
									se = V.onDidRemoveDecoration(Z);
								if ((v.push(se), y.autofocus)) {
									const re = () => {
										V.hasTextFocus() ||
											(V.focus(), V.setPosition({ lineNumber: 1, column: 1 }));
									};
									setTimeout(() => {
										re();
									});
								}
							}
						}),
						(0, C.createEffect)(() => {
							const q = P();
							if (q) {
								const V = y.onFocus,
									G = y.text,
									K = q.onDidFocusEditorText(() => {
										V?.(), D(!0);
									});
								(0, C.onCleanup)(() => {
									K.dispose();
								});
							}
						}),
						(0, C.createEffect)(() => {
							const q = P();
							y.setEditor?.(q);
						}),
						(0, C.onCleanup)(() => {
							for (const V of v) V.dispose();
							const q = P();
							q && q.dispose();
						}),
						(() => {
							const q = s();
							return (
								(0, E.insert)(q, S),
								(0, w.effect)((V) => (0, i.style)(q, y.style, V)),
								q
							);
						})()
					);
				}
			},
		),
		define(
			de[4326],
			he([1, 0, 2, 13, 36, 4325, 476]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$iAc = d);
				function d(m) {
					const r = (0, w.$odc)(),
						[u, a] = (0, i.createSignal)(null),
						h = (0, i.createMemo)(() => m.text);
					let c = !1;
					return (
						(0, i.createEffect)(async () => {
							c = await (0, C.$Lac)(r.extensionManagementService);
						}),
						(0, t.createComponent)(E.$hAc, {
							get text() {
								return h();
							},
							get customId() {
								return m.customId;
							},
							setText: (n) => {
								m.setText(n);
							},
							get disableGoToDefinition() {
								return m.disableGoToDefinition;
							},
							language: "markdown",
							style: { width: "100%" },
							autofocus: !0,
							onSubmit: (n) => console.log("Submitted:", n),
							get placeholder() {
								return m.placeholder ?? "What do you want to build?";
							},
							setEditor: (n) => {
								m.setEditor?.(n), a(n);
							},
							extraControllers: [],
							get mentionDecorationIdsToRemove() {
								return m.mentionDecorationIdsToRemove;
							},
							get commandListeners() {
								return m.commandListeners;
							},
							onEscape: (n) => {
								if (!m.onEscape) return;
								const { didFindVimStatusbar: g, isInNormalMode: p } = (0,
								C.$Mac)(r);
								(c && g && !p) ||
									u()?.isSuggestionMenuVisible() ||
									(n.preventDefault(), n.stopPropagation(), m.onEscape?.(n));
							},
							get forceRerender() {
								return m.forceRerender?.();
							},
							get nonReactiveEditorOptions() {
								return {
									glyphMargin: !0,
									padding: {
										top: m.paddingTop ?? 12,
										bottom: m.paddingBottom ?? 12,
									},
								};
							},
							get getContext() {
								return m.getContext;
							},
							get setContext() {
								return m.setContext;
							},
							get undoRedoUri() {
								return m.undoRedoUri;
							},
						})
					);
				}
			},
		),
		define(
			de[4327],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 276, 14, 58, 27, 12, 26, 123, 311, 36,
				4326, 558, 693, 331, 364, 3204, 4324, 2469,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$lAc = N);
				const T = (0, t.template)("<div><div>"),
					P = (0, t.template)("<div>"),
					k = (0, t.template)(
						"<div><div><div></div><div></div></div><div><div><div>",
					),
					L = (0, t.template)('<div><input type="text">'),
					D = (0, t.template)("<div><span>"),
					M = !1;
				function N(A) {
					const R = (0, b.$odc)(),
						[O, B] = (0, u.createSignal)([]),
						{
							notepadDataService: U,
							notepadService: z,
							contextMenuService: F,
							composerService: x,
						} = R,
						H = (0, u.createMemo)(() => {
							const Ie = U.getNotepadData(A.notepadId);
							if (!Ie) throw new Error("[notepad] Notepad not found");
							return Ie;
						});
					let q;
					const V = (0, u.createMemo)(() => H()?.text),
						[G, K] = (0, u.createSignal)(0),
						[J, W] = (0, u.createSignal)(0),
						[X, Y] = (0, u.createSignal)(!1),
						[ie, ne] = (0, u.createSignal)(!1),
						[ee, _, te] = (0, v.$A0b)(),
						[Q, Z] = (0, u.createSignal)(!1),
						[se, re] = (0, u.createSignal)(""),
						{ showHover: le, hideHover: oe } = (0, f.useComposerHoverTooltip)();
					let ae, pe, $e;
					const ye = (0, y.$A$b)(() => pe),
						ue = (0, u.createMemo)(() => ye().width > 450),
						fe = () => {
							se() && U.setNotepadsData("notepads", H().id, "name", se()),
								Z(!1),
								$e && $e.focus();
						};
					(0, u.createEffect)(() => {
						Q() && ae && ae.focus();
					}),
						(0, u.createEffect)(() => {
							const Ie = A.notepadId;
							K((Be) => Be + 1), W((Be) => Be + 1);
						}),
						(0, u.createEffect)(
							(0, u.on)(
								() =>
									R.reactiveStorageService.nonPersistentStorage.notepadState
										.notepadEditorFocusSignal,
								(Ie) => {
									$e && Ie !== void 0 && $e.focus();
								},
							),
						),
						(0, u.createEffect)(() => {
							const Ie = A.notepadId;
							(0, u.onMount)(() => {
								const Be = z.onContextRemoved((Se) => {
									const { notepadId: ke, removedMentionIds: Ue } = Se;
									ke === Ie && B(Ue);
								});
								(0, u.onCleanup)(() => {
									Be.dispose();
								});
							});
						});
					const me = async () => {
							await z.openNotepadAsEditor(A.notepadId);
						},
						ve = () => {
							const Ie = !H().shouldShowBottomPane;
							U.setNotepadsData("notepads", H().id, "shouldShowBottomPane", Ie);
						},
						ge = () => {
							const Ie = A.notepadId;
							R.commandService.executeCommand(c.$dX, void 0, !0).then(() => {
								const Be = R.chatDataService.selectedTab,
									Se = Be.bubbles.find(
										(ke) => ke.id === Be.lastFocusedBubbleId,
									);
								R.aiChatService.addContext({
									tabId: Be.tabId,
									bubbleId: Se.id,
									contextType: "notepads",
									value: { notepadId: Ie },
								});
							}),
								A.onEscape?.();
						},
						be = (Ie) => {
							if (!Ie.getModel()) return !1;
							const Se = A.notepadId;
							return (
								R.composerService
									.openComposer(R.composerDataService.selectedComposerId)
									.then(() => {
										const ke = R.composerDataService.selectedComposerId;
										R.composerService.addContext({
											composerId: ke,
											contextType: "notepads",
											value: { notepadId: Se },
										});
									}),
								!0
							);
						},
						Ce = (0, u.createMemo)(() => [
							{
								command: n.KeyMod.CtrlCmd | n.KeyCode.KeyI,
								listener: (Ie, Be) => (Ie.stopPropagation(), be(Be)),
							},
							{
								command: n.KeyMod.CtrlCmd | n.KeyCode.KeyP,
								listener: (Ie, Be) =>
									A.isInEditor
										? !1
										: (Ie.stopPropagation(), q && q.click(), !0),
							},
							{
								command: n.KeyMod.CtrlCmd | n.KeyCode.KeyL,
								listener: (Ie, Be) => (Ie.stopPropagation(), ge(), !0),
							},
							{
								command: n.KeyMod.CtrlCmd | n.KeyCode.KeyW,
								listener: (Ie, Be) =>
									A.onClose ? (Ie.stopPropagation(), A.onClose(), !0) : !1,
							},
							...(A.commandListeners ?? []),
						]),
						Le = {
							cursor: "pointer",
							color: "var(--vscode-editor-foreground)",
							"border-radius": "3px",
							"font-size": "10px",
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
						},
						Fe = (() => {
							const Ie = T(),
								Be = Ie.firstChild;
							return (
								Ie.style.setProperty("padding", "1px 3px"),
								Ie.style.setProperty("position", "absolute"),
								Ie.style.setProperty("left", "50%"),
								Ie.style.setProperty("top", "100%"),
								Ie.style.setProperty(
									"transform",
									"translateX(-50%) translateY(-50%)",
								),
								Ie.style.setProperty("display", "flex"),
								Ie.style.setProperty("justify-content", "center"),
								Ie.style.setProperty("align-items", "center"),
								Ie.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								Ie.style.setProperty(
									"background",
									"var(--vscode-editor-background)",
								),
								Ie.style.setProperty("border-radius", "4px"),
								Ie.style.setProperty("overflow", "hidden"),
								Ie.style.setProperty("z-index", "100"),
								Be.addEventListener("click", (Se) => {
									Se.stopPropagation(), ve();
								}),
								(0, r.effect)(
									(Se) => {
										const ke = X() && !ie() ? 1 : 0,
											Ue =
												p.ThemeIcon.asClassName(h.$ak.chevronDown) +
												" notepad-chevron",
											qe = { "z-index": "1", ...Le };
										return (
											ke !== Se._v$ &&
												((Se._v$ = ke) != null
													? Ie.style.setProperty("opacity", ke)
													: Ie.style.removeProperty("opacity")),
											Ue !== Se._v$2 && (0, m.className)(Be, (Se._v$2 = Ue)),
											(Se._v$3 = (0, d.style)(Be, qe, Se._v$3)),
											Se
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								Ie
							);
						})(),
						[Oe, xe] = (0, u.createSignal)(
							H()?.verticalTopPanePercentage ?? 75,
						);
					(0, u.createEffect)(() => {
						const Ie = Oe();
						Ie !== H()?.verticalTopPanePercentage &&
							U.setNotepadsData(
								"notepads",
								H().id,
								"verticalTopPanePercentage",
								Ie,
							);
					});
					const [He, Ke] = (0, u.createSignal)(!1),
						Je = (Ie) => {
							Ie.stopPropagation(),
								F.showContextMenu({
									getAnchor: () => Ie.target,
									anchorAlignment: a.AnchorAlignment.LEFT,
									getActions: () => [
										{
											id: "placeholder-action",
											label: "Placeholder Action",
											class: "",
											enabled: !0,
											tooltip: "This is a placeholder action",
											run: () => {
												console.log("Placeholder action clicked");
											},
										},
									],
								});
						},
						Te = (0, $.$h$b)(o.$BGb, R.themeService),
						Ee = (0, $.$h$b)(o.$wGb, R.themeService);
					return (() => {
						const Ie = k(),
							Be = Ie.firstChild,
							Se = Be.firstChild,
							ke = Se.nextSibling,
							Ue = Be.nextSibling,
							qe = Ue.firstChild,
							Ae = qe.firstChild,
							Me = pe;
						return (
							typeof Me == "function" ? (0, C.use)(Me, Ie) : (pe = Ie),
							Ie.style.setProperty("width", "100%"),
							Ie.style.setProperty("height", "100%"),
							Ie.style.setProperty(
								"background",
								"var(--vscode-editor-background)",
							),
							Ie.style.setProperty("display", "flex"),
							Ie.style.setProperty("flex-direction", "column"),
							Ie.style.setProperty("position", "relative"),
							Ie.style.setProperty("overflow", "hidden"),
							(0, i.insert)(
								Ie,
								(0, E.createComponent)(u.Show, {
									get when() {
										return ee();
									},
									children: (De) =>
										(0, E.createComponent)(I.$kAc, {
											get position() {
												return De();
											},
											close: (Re) => {
												te(), Re || $e?.focus();
											},
											get nonBlockingRoot() {
												return `#${ue() ? l.$E9b : l.$D9b}`;
											},
											get notepadData() {
												return H();
											},
										}),
								}),
								Be,
							),
							Be.addEventListener("mouseleave", () => Ke(!1)),
							Be.addEventListener("mouseenter", () => Ke(!0)),
							(0, i.insert)(
								Se,
								(() => {
									const De = (0, w.memo)(() => !!Q());
									return () =>
										De()
											? (() => {
													const Re = L(),
														je = Re.firstChild;
													return (
														Re.style.setProperty("width", "240px"),
														Re.style.setProperty("max-width", "80%"),
														Re.style.setProperty("position", "relative"),
														(0, C.use)((Ve) => {
															(ae = Ve),
																Ve &&
																	setTimeout(() => {
																		Ve.focus();
																	});
														}, je),
														je.addEventListener("keydown", (Ve) => {
															Ve.key === "Enter"
																? fe()
																: Ve.key === "Escape" &&
																	(Z(!1),
																	Ve.preventDefault(),
																	Ve.stopPropagation());
														}),
														je.addEventListener("blur", fe),
														je.addEventListener("input", (Ve) =>
															re(Ve.currentTarget.value),
														),
														je.style.setProperty("width", "100%"),
														je.style.setProperty("height", "24px"),
														je.style.setProperty(
															"background-color",
															"var(--vscode-input-background)",
														),
														je.style.setProperty(
															"color",
															"var(--vscode-input-foreground)",
														),
														je.style.setProperty(
															"border",
															"1px solid var(--vscode-input-border)",
														),
														je.style.setProperty("border-radius", "2px"),
														je.style.setProperty("padding", "0 6px"),
														je.style.setProperty("font-size", "13px"),
														je.style.setProperty(
															"font-family",
															"var(--vscode-font-family)",
														),
														je.style.setProperty("outline", "none"),
														(0, r.effect)(() => (je.value = se())),
														Re
													);
												})()
											: (() => {
													const Re = D(),
														je = Re.firstChild;
													return (
														Re.addEventListener("dblclick", (Ve) => {
															Ve.stopImmediatePropagation(),
																Ve.preventDefault(),
																re(H().name || ""),
																Z(!0);
														}),
														je.style.setProperty("font-size", "13px"),
														je.style.setProperty("line-height", "22px"),
														je.style.setProperty("overflow", "hidden"),
														je.style.setProperty("text-overflow", "ellipsis"),
														je.style.setProperty("white-space", "nowrap"),
														je.style.setProperty("max-width", "400px"),
														(0, i.insert)(
															je,
															() => H().name || "Untitled Notepad",
														),
														(0, i.insert)(
															Re,
															(0, E.createComponent)(u.Show, {
																get when() {
																	return He();
																},
																get children() {
																	const Ve = P();
																	return (
																		Ve.addEventListener("mouseleave", () =>
																			oe(),
																		),
																		Ve.addEventListener("mouseenter", (Ze) =>
																			le(Ze, "Rename notepad"),
																		),
																		Ve.addEventListener("click", (Ze) => {
																			Ze.stopPropagation(),
																				Ze.preventDefault(),
																				re(H().name || ""),
																				Z(!0);
																		}),
																		Ve.style.setProperty("padding", "2px"),
																		Ve.style.setProperty("cursor", "pointer"),
																		Ve.style.setProperty("display", "flex"),
																		Ve.style.setProperty(
																			"align-items",
																			"center",
																		),
																		Ve.style.setProperty(
																			"position",
																			"absolute",
																		),
																		Ve.style.setProperty("left", "100%"),
																		Ve.style.setProperty("top", "50%"),
																		Ve.style.setProperty(
																			"transform",
																			"translateY(-50%)",
																		),
																		Ve.style.setProperty("margin-left", "4px"),
																		(0, r.effect)(() =>
																			(0, m.className)(
																				Ve,
																				p.ThemeIcon.asClassName(h.$ak.edit) +
																					" tabs-button",
																			),
																		),
																		Ve
																	);
																},
															}),
															null,
														),
														(0, r.effect)(
															(Ve) => {
																const Ze = {
																		display: "flex",
																		"align-items": "center",
																		position: "relative",
																		...(A.isWindow
																			? { "margin-right": "30px" }
																			: {}),
																	},
																	et = A.isInEditor
																		? "var(--vscode-descriptionForeground)"
																		: "var(--vscode-input-placeholderForeground)",
																	rt = A.isInEditor ? (He() ? 0.8 : 0.6) : 1;
																return (
																	(Ve._v$6 = (0, d.style)(Re, Ze, Ve._v$6)),
																	et !== Ve._v$7 &&
																		((Ve._v$7 = et) != null
																			? je.style.setProperty("color", et)
																			: je.style.removeProperty("color")),
																	rt !== Ve._v$8 &&
																		((Ve._v$8 = rt) != null
																			? je.style.setProperty("opacity", rt)
																			: je.style.removeProperty("opacity")),
																	Ve
																);
															},
															{ _v$6: void 0, _v$7: void 0, _v$8: void 0 },
														),
														Re
													);
												})();
								})(),
							),
							(0, i.insert)(
								Be,
								(0, E.createComponent)(u.Show, {
									get when() {
										return A.isWindow && !A.isInEditor;
									},
									get children() {
										const De = P();
										return (
											De.style.setProperty("flex", "1"),
											De.style.setProperty("width", "1px"),
											De.style.setProperty("height", "100%"),
											De.style.setProperty("-webkit-app-region", "drag"),
											De
										);
									},
								}),
								ke,
							),
							ke.style.setProperty("display", "flex"),
							ke.style.setProperty("gap", "6px"),
							ke.style.setProperty("align-items", "center"),
							(0, i.insert)(
								ke,
								(0, E.createComponent)(u.Show, {
									get when() {
										return A.isInEditor && M;
									},
									get children() {
										const De = P();
										return (
											De.addEventListener("click", Je),
											De.style.setProperty("padding", "2px"),
											De.style.setProperty("transform", "rotate(90deg)"),
											(0, r.effect)(() =>
												(0, m.className)(
													De,
													p.ThemeIcon.asClassName(h.$ak.ellipsis) +
														" tabs-button",
												),
											),
											De
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								ke,
								(0, E.createComponent)(u.Show, {
									get when() {
										return !A.isInEditor;
									},
									get children() {
										return [
											(() => {
												const De = P();
												return (
													De.addEventListener("mouseleave", () => oe()),
													De.addEventListener("mouseenter", (Re) =>
														le(Re, "Open as editor"),
													),
													De.addEventListener("click", () => {
														me(), A.onClose?.();
													}),
													De.style.setProperty("padding", "2px"),
													(0, r.effect)(() =>
														(0, m.className)(
															De,
															p.ThemeIcon.asClassName(h.$ak.chromeMinimize) +
																" tabs-button",
														),
													),
													De
												);
											})(),
											(() => {
												const De = P();
												return (
													De.addEventListener("mouseleave", () => oe()),
													De.addEventListener("mouseenter", (Re) =>
														le(Re, "Use in AI chat"),
													),
													De.addEventListener("click", () => {
														ge();
													}),
													De.style.setProperty("padding", "2px"),
													De.style.setProperty("font-size", "12px"),
													(0, r.effect)(() =>
														(0, m.className)(
															De,
															p.ThemeIcon.asClassName(h.$ak.comment) +
																" tabs-button",
														),
													),
													De
												);
											})(),
											(() => {
												const De = P();
												return (
													De.addEventListener("mouseleave", () => oe()),
													De.addEventListener("mouseenter", (Re) =>
														le(
															Re,
															`Use in composer (${g.$m ? "\u2318" : "^"}B)`,
														),
													),
													De.addEventListener("click", () => {
														const Re = $e;
														Re && be(Re);
													}),
													De.style.setProperty("padding", "2px"),
													De.style.setProperty(
														"color",
														"var(--vscode-editor-foreground)",
													),
													De.style.setProperty("font-size", "13px"),
													(0, r.effect)(() =>
														(0, m.className)(
															De,
															p.ThemeIcon.asClassName(h.$ak.symbolMethod) +
																" tabs-button",
														),
													),
													De
												);
											})(),
										];
									},
								}),
								null,
							),
							Ue.style.setProperty("flex", "1"),
							Ue.style.setProperty("display", "flex"),
							Ue.style.setProperty("flex-direction", "column"),
							Ue.style.setProperty("overflow", "hidden"),
							Ue.style.setProperty("position", "relative"),
							qe.style.setProperty("width", "100%"),
							qe.style.setProperty("height", "100%"),
							qe.style.setProperty("display", "flex"),
							qe.style.setProperty("position", "relative"),
							(0, i.insert)(
								qe,
								(0, E.createComponent)(s.$iAc, {
									get customId() {
										return A.notepadId;
									},
									get disableGoToDefinition() {
										return !A.isInEditor;
									},
									get commandListeners() {
										return Ce();
									},
									get mentionDecorationIdsToRemove() {
										return O();
									},
									get text() {
										return V();
									},
									setText: (De) => U.updateNotepadData(H().id, { text: De }),
									placeholder: "Type your thoughts, use @ to mention files",
									getContext: () => H().context,
									setContext: (...De) => {
										U.setNotepadsData("notepads", H().id, "context", ...De);
									},
									forceRerender: G,
									get onEscape() {
										return A.onEscape;
									},
									get paddingTop() {
										return A.isInEditor ? 0 : 18;
									},
									setEditor: (De) => {
										De && A.setEditor?.(De), ($e = De ?? void 0);
									},
								}),
								Ae,
							),
							Ae.style.setProperty("position", "absolute"),
							Ae.style.setProperty("bottom", "8px"),
							Ae.style.setProperty("right", "8px"),
							Ae.style.setProperty("z-index", "10"),
							(0, i.insert)(
								Ae,
								(0, E.createComponent)(S.$jAc, {
									setRef: (De) => (q = De),
									id: "notepad-add-context-button-in-top-pane",
									get notepadData() {
										return H();
									},
									openFilePickerMenu: _,
									style: { background: "var(--vscode-editor-background)" },
								}),
							),
							(0, r.effect)(
								(De) => {
									const Re = {
											display: "flex",
											height: "20px",
											position: "relative",
											...(A.isInEditor
												? {
														"justify-content": "center",
														"align-items": "center",
														"border-bottom": "none",
														padding: "8px 6px",
													}
												: {
														"justify-content": "space-between",
														"align-items": "center",
														"border-bottom":
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														padding: "4px 6px",
														background: Ee(),
													}),
										},
										je = {
											padding: A.isInEditor ? "0px 4px" : "0px 12px",
											display: "flex",
											"align-items": "center",
											gap: "6px",
											...(A.isInEditor
												? { "flex-grow": 1, "justify-content": "center" }
												: {}),
										};
									return (
										(De._v$4 = (0, d.style)(Be, Re, De._v$4)),
										(De._v$5 = (0, d.style)(Se, je, De._v$5)),
										De
									);
								},
								{ _v$4: void 0, _v$5: void 0 },
							),
							Ie
						);
					})();
				}
			},
		),
		