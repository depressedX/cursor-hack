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
		