define(de[2779], he([1, 0, 4, 99, 11, 34]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$avc = void 0);
			class C extends w.$3X {
				constructor() {
					super({
						id: "menu.resetHiddenStates",
						title: (0, t.localize2)(1660, "Reset All Menus"),
						category: i.$ck.View,
						f1: !0,
					});
				}
				run(m) {
					m.get(w.$YX).resetHiddenStates(),
						m.get(E.$ik).info("did RESET all menu hidden states");
				}
			}
			e.$avc = C;
		}),
		define(
			de[413],
			he([1, 0, 932, 2687, 292, 27, 8, 43, 4, 3, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XCb = e.$WCb = e.$VCb = e.$TCb = void 0),
					(e.$UCb = p),
					(e.$TCb = new C.$5j(
						"suggestWidgetVisible",
						!1,
						(0, m.localize)(1920, null),
					));
				const a = "historyNavigationWidgetFocus",
					h = "historyNavigationForwardsEnabled",
					c = "historyNavigationBackwardsEnabled";
				let n;
				const g = [];
				function p(s, l) {
					if (g.includes(l))
						throw new Error("Cannot register the same widget multiple times");
					g.push(l);
					const y = new r.$Zc(),
						$ = new C.$5j(a, !1).bindTo(s),
						v = new C.$5j(h, !0).bindTo(s),
						S = new C.$5j(c, !0).bindTo(s),
						I = () => {
							$.set(!0), (n = l);
						},
						T = () => {
							$.set(!1), n === l && (n = void 0);
						};
					return (
						(0, u.$Kgb)(l.element) && I(),
						y.add(l.onDidFocus(() => I())),
						y.add(l.onDidBlur(() => T())),
						y.add(
							(0, r.$Yc)(() => {
								g.splice(g.indexOf(l), 1), T();
							}),
						),
						{
							historyNavigationForwardsEnablement: v,
							historyNavigationBackwardsEnablement: S,
							dispose() {
								y.dispose();
							},
						}
					);
				}
				let o = class extends w.$Nob {
					constructor(l, y, $, v) {
						super(l, y, $);
						const S = this.D(v.createScoped(this.element));
						this.D(p(S, this));
					}
				};
				(e.$VCb = o), (e.$VCb = o = Ne([j(3, C.$6j)], o));
				let f = class extends t.$Uob {
					constructor(l, y, $, v) {
						super(l, y, $);
						const S = this.D(v.createScoped(this.inputBox.element));
						this.D(p(S, this.inputBox));
					}
				};
				(e.$WCb = f), (e.$WCb = f = Ne([j(3, C.$6j)], f));
				let b = class extends i.$Vob {
					constructor(l, y, $, v, S = !1) {
						super(l, y, S, $);
						const I = this.D(v.createScoped(this.inputBox.element));
						this.D(p(I, this.inputBox));
					}
				};
				(e.$XCb = b),
					(e.$XCb = b = Ne([j(3, C.$6j)], b)),
					d.$TX.registerCommandAndKeybindingRule({
						id: "history.showPrevious",
						weight: d.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							C.$Kj.has(a),
							C.$Kj.equals(c, !0),
							C.$Kj.not("isComposing"),
							e.$TCb.isEqualTo(!1),
						),
						primary: E.KeyCode.UpArrow,
						secondary: [E.KeyMod.Alt | E.KeyCode.UpArrow],
						handler: (s) => {
							n?.showPreviousValue();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "history.showNext",
						weight: d.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							C.$Kj.has(a),
							C.$Kj.equals(h, !0),
							C.$Kj.not("isComposing"),
							e.$TCb.isEqualTo(!1),
						),
						primary: E.KeyCode.DownArrow,
						secondary: [E.KeyMod.Alt | E.KeyCode.DownArrow],
						handler: (s) => {
							n?.showNextValue();
						},
					});
			},
		),
		define(
			de[373],
			he([
				1, 0, 33, 29, 132, 3, 162, 28, 9, 48, 17, 74, 42, 389, 4, 11, 31, 8, 69,
				413, 171,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Cb =
						e.$5Cb =
						e.$2Cb =
						e.SnippetSortOrder =
						e.$1Cb =
						e.$ZCb =
						e.$YCb =
							void 0),
					(e.$3Cb = S),
					(e.$4Cb = I),
					(e.$6Cb = P),
					(e.$7Cb = N),
					(e.$8Cb = A),
					(a = mt(a)),
					(e.$YCb = {
						Visible: b.$TCb,
						HasFocusedSuggestion: new o.$5j(
							"suggestWidgetHasFocusedSuggestion",
							!1,
							(0, n.localize)(1477, null),
						),
						DetailsVisible: new o.$5j(
							"suggestWidgetDetailsVisible",
							!1,
							(0, n.localize)(1478, null),
						),
						MultipleSuggestions: new o.$5j(
							"suggestWidgetMultipleSuggestions",
							!1,
							(0, n.localize)(1479, null),
						),
						MakesTextEdit: new o.$5j(
							"suggestionMakesTextEdit",
							!0,
							(0, n.localize)(1480, null),
						),
						AcceptSuggestionsOnEnter: new o.$5j(
							"acceptSuggestionOnEnter",
							!0,
							(0, n.localize)(1481, null),
						),
						HasInsertAndReplaceRange: new o.$5j(
							"suggestionHasInsertAndReplaceRange",
							!1,
							(0, n.localize)(1482, null),
						),
						InsertMode: new o.$5j("suggestionInsertMode", void 0, {
							type: "string",
							description: (0, n.localize)(1483, null),
						}),
						CanResolve: new o.$5j(
							"suggestionCanResolve",
							!1,
							(0, n.localize)(1484, null),
						),
					}),
					(e.$ZCb = new g.$XX("suggestWidgetStatusBar"));
				class l {
					constructor(B, U, z, F) {
						(this.position = B),
							(this.completion = U),
							(this.container = z),
							(this.provider = F),
							(this.isInvalid = !1),
							(this.score = w.FuzzyScore.Default),
							(this.distance = 0),
							(this.textLabel =
								typeof U.label == "string" ? U.label : U.label?.label),
							(this.labelLow = this.textLabel.toLowerCase()),
							(this.isInvalid = !this.textLabel),
							(this.sortTextLow = U.sortText && U.sortText.toLowerCase()),
							(this.filterTextLow = U.filterText && U.filterText.toLowerCase()),
							(this.extensionId = U.extensionId),
							u.$iL.isIRange(U.range)
								? ((this.editStart = new r.$hL(
										U.range.startLineNumber,
										U.range.startColumn,
									)),
									(this.editInsertEnd = new r.$hL(
										U.range.endLineNumber,
										U.range.endColumn,
									)),
									(this.editReplaceEnd = new r.$hL(
										U.range.endLineNumber,
										U.range.endColumn,
									)),
									(this.isInvalid =
										this.isInvalid ||
										u.$iL.spansMultipleLines(U.range) ||
										U.range.startLineNumber !== B.lineNumber))
								: ((this.editStart = new r.$hL(
										U.range.insert.startLineNumber,
										U.range.insert.startColumn,
									)),
									(this.editInsertEnd = new r.$hL(
										U.range.insert.endLineNumber,
										U.range.insert.endColumn,
									)),
									(this.editReplaceEnd = new r.$hL(
										U.range.replace.endLineNumber,
										U.range.replace.endColumn,
									)),
									(this.isInvalid =
										this.isInvalid ||
										u.$iL.spansMultipleLines(U.range.insert) ||
										u.$iL.spansMultipleLines(U.range.replace) ||
										U.range.insert.startLineNumber !== B.lineNumber ||
										U.range.replace.startLineNumber !== B.lineNumber ||
										U.range.insert.startColumn !==
											U.range.replace.startColumn)),
							typeof F.resolveCompletionItem != "function" &&
								((this.d = Promise.resolve()), (this.c = 0));
					}
					get isResolved() {
						return this.c !== void 0;
					}
					get resolveDuration() {
						return this.c !== void 0 ? this.c : -1;
					}
					async resolve(B) {
						if (!this.d) {
							const U = B.onCancellationRequested(() => {
									(this.d = void 0), (this.c = void 0);
								}),
								z = new C.$le(!0);
							this.d = Promise.resolve(
								this.provider.resolveCompletionItem(this.completion, B),
							)
								.then(
									(F) => {
										Object.assign(this.completion, F), (this.c = z.elapsed());
									},
									(F) => {
										(0, i.$8)(F) && ((this.d = void 0), (this.c = void 0));
									},
								)
								.finally(() => {
									U.dispose();
								});
						}
						return this.d;
					}
				}
				e.$1Cb = l;
				var y;
				(function (O) {
					(O[(O.Top = 0)] = "Top"),
						(O[(O.Inline = 1)] = "Inline"),
						(O[(O.Bottom = 2)] = "Bottom");
				})(y || (e.SnippetSortOrder = y = {}));
				class $ {
					static {
						this.default = new $();
					}
					constructor(
						B = y.Bottom,
						U = new Set(),
						z = new Set(),
						F = new Map(),
						x = !0,
					) {
						(this.snippetSortOrder = B),
							(this.kindFilter = U),
							(this.providerFilter = z),
							(this.providerItemsToReuse = F),
							(this.showDeprecated = x);
					}
				}
				e.$2Cb = $;
				let v;
				function S() {
					return v;
				}
				function I(O) {
					const B = v;
					return (v = O), B;
				}
				class T {
					constructor(B, U, z, F) {
						(this.items = B),
							(this.needsClipboard = U),
							(this.durations = z),
							(this.disposable = F);
					}
				}
				e.$5Cb = T;
				async function P(
					O,
					B,
					U,
					z = $.default,
					F = { triggerKind: a.CompletionTriggerKind.Invoke },
					x = t.CancellationToken.None,
				) {
					const H = new C.$le();
					U = U.clone();
					const q = B.getWordAtPosition(U),
						V = q
							? new u.$iL(
									U.lineNumber,
									q.startColumn,
									U.lineNumber,
									q.endColumn,
								)
							: u.$iL.fromPositions(U),
						G = {
							replace: V,
							insert: V.setEndPosition(U.lineNumber, U.column),
						},
						K = [],
						J = new E.$Zc(),
						W = [];
					let X = !1;
					const Y = (ne, ee, _) => {
							let te = !1;
							if (!ee) return te;
							for (const Q of ee.suggestions)
								if (!z.kindFilter.has(Q.kind)) {
									if (
										!z.showDeprecated &&
										Q?.tags?.includes(a.CompletionItemTag.Deprecated)
									)
										continue;
									Q.range || (Q.range = G),
										Q.sortText ||
											(Q.sortText =
												typeof Q.label == "string" ? Q.label : Q.label.label),
										!X &&
											Q.insertTextRules &&
											Q.insertTextRules &
												a.CompletionItemInsertTextRule.InsertAsSnippet &&
											(X = c.$Izb.guessNeedsClipboard(Q.insertText)),
										K.push(new l(U, Q, ee, ne)),
										(te = !0);
								}
							return (
								(0, E.$Uc)(ee) && J.add(ee),
								W.push({
									providerName: ne._debugDisplayName ?? "unknown_provider",
									elapsedProvider: ee.duration ?? -1,
									elapsedOverall: _.elapsed(),
								}),
								te
							);
						},
						ie = (async () => {
							if (!v || z.kindFilter.has(a.CompletionItemKind.Snippet)) return;
							const ne = z.providerItemsToReuse.get(v);
							if (ne) {
								ne.forEach((te) => K.push(te));
								return;
							}
							if (z.providerFilter.size > 0 && !z.providerFilter.has(v)) return;
							const ee = new C.$le(),
								_ = await v.provideCompletionItems(B, U, F, x);
							Y(v, _, ee);
						})();
					for (const ne of O.orderedGroups(B)) {
						let ee = !1;
						if (
							(await Promise.all(
								ne.map(async (_) => {
									if (z.providerItemsToReuse.has(_)) {
										const te = z.providerItemsToReuse.get(_);
										te.forEach((Q) => K.push(Q)), (ee = ee || te.length > 0);
										return;
									}
									if (!(z.providerFilter.size > 0 && !z.providerFilter.has(_)))
										try {
											const te = new C.$le(),
												Q = await _.provideCompletionItems(B, U, F, x);
											ee = Y(_, Q, te) || ee;
										} catch (te) {
											(0, i.$5)(te);
										}
								}),
							),
							ee || x.isCancellationRequested)
						)
							break;
					}
					return (
						await ie,
						x.isCancellationRequested
							? (J.dispose(), Promise.reject(new i.$9()))
							: new T(
									K.sort(N(z.snippetSortOrder)),
									X,
									{ entries: W, elapsed: H.elapsed() },
									J,
								)
					);
				}
				function k(O, B) {
					if (O.sortTextLow && B.sortTextLow) {
						if (O.sortTextLow < B.sortTextLow) return -1;
						if (O.sortTextLow > B.sortTextLow) return 1;
					}
					return O.textLabel < B.textLabel
						? -1
						: O.textLabel > B.textLabel
							? 1
							: O.completion.kind - B.completion.kind;
				}
				function L(O, B) {
					if (O.completion.kind !== B.completion.kind) {
						if (O.completion.kind === a.CompletionItemKind.Snippet) return -1;
						if (B.completion.kind === a.CompletionItemKind.Snippet) return 1;
					}
					return k(O, B);
				}
				function D(O, B) {
					if (O.completion.kind !== B.completion.kind) {
						if (O.completion.kind === a.CompletionItemKind.Snippet) return 1;
						if (B.completion.kind === a.CompletionItemKind.Snippet) return -1;
					}
					return k(O, B);
				}
				const M = new Map();
				M.set(y.Top, L), M.set(y.Bottom, D), M.set(y.Inline, k);
				function N(O) {
					return M.get(O);
				}
				p.$fk.registerCommand(
					"_executeCompletionItemProvider",
					async (O, ...B) => {
						const [U, z, F, x] = B;
						(0, d.$vg)(m.URI.isUri(U)),
							(0, d.$vg)(r.$hL.isIPosition(z)),
							(0, d.$vg)(typeof F == "string" || !F),
							(0, d.$vg)(typeof x == "number" || !x);
						const { completionProvider: H } = O.get(f.$k3),
							q = await O.get(h.$MO).createModelReference(U);
						try {
							const V = { incomplete: !1, suggestions: [] },
								G = [],
								K = q.object.textEditorModel.validatePosition(z),
								J = await P(H, q.object.textEditorModel, K, void 0, {
									triggerCharacter: F ?? void 0,
									triggerKind: F
										? a.CompletionTriggerKind.TriggerCharacter
										: a.CompletionTriggerKind.Invoke,
								});
							for (const W of J.items)
								G.length < (x ?? 0) &&
									G.push(W.resolve(t.CancellationToken.None)),
									(V.incomplete = V.incomplete || W.container.incomplete),
									V.suggestions.push(W.completion);
							try {
								return await Promise.all(G), V;
							} finally {
								setTimeout(() => J.disposable.dispose(), 100);
							}
						} finally {
							q.dispose();
						}
					},
				);
				function A(O, B) {
					O.getContribution("editor.contrib.suggestController")?.triggerSuggest(
						new Set().add(B),
						void 0,
						!0,
					);
				}
				class R {
					static isAllOff(B) {
						return (
							B.other === "off" && B.comments === "off" && B.strings === "off"
						);
					}
					static isAllOn(B) {
						return (
							B.other === "on" && B.comments === "on" && B.strings === "on"
						);
					}
					static valueFor(B, U) {
						switch (U) {
							case s.StandardTokenType.Comment:
								return B.comments;
							case s.StandardTokenType.String:
								return B.strings;
							default:
								return B.other;
						}
					}
				}
				e.$9Cb = R;
			},
		),
		