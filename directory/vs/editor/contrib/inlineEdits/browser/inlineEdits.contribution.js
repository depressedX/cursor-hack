define(de[2933], he([1, 0, 46, 2932, 1694]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$qtb)(
					w.$Yjc.ID,
					w.$Yjc,
					t.EditorContributionInstantiation.Eventually,
				),
				(0, t.$ntb)(i.$2jc),
				(0, t.$ntb)(i.$Zjc),
				(0, t.$ntb)(i.$1jc),
				(0, t.$ntb)(i.$3jc),
				(0, t.$ntb)(i.$4jc);
		}),
		define(
			de[1695],
			he([1, 0, 64, 122, 74, 4, 51, 35, 2326]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mPb = f),
					(e.$nPb = b),
					(E = mt(E));
				const m = (0, C.$wP)(
					"editor.wordHighlightBackground",
					{
						dark: "#575757B8",
						light: "#57575740",
						hcDark: null,
						hcLight: null,
					},
					E.localize(1582, null),
					!0,
				);
				(0, C.$wP)(
					"editor.wordHighlightStrongBackground",
					{
						dark: "#004972B8",
						light: "#0e639c40",
						hcDark: null,
						hcLight: null,
					},
					E.localize(1583, null),
					!0,
				),
					(0, C.$wP)(
						"editor.wordHighlightTextBackground",
						m,
						E.localize(1584, null),
						!0,
					);
				const r = (0, C.$wP)(
					"editor.wordHighlightBorder",
					{ light: null, dark: null, hcDark: C.$PP, hcLight: C.$PP },
					E.localize(1585, null),
				);
				(0, C.$wP)(
					"editor.wordHighlightStrongBorder",
					{ light: null, dark: null, hcDark: C.$PP, hcLight: C.$PP },
					E.localize(1586, null),
				),
					(0, C.$wP)(
						"editor.wordHighlightTextBorder",
						r,
						E.localize(1587, null),
					);
				const u = (0, C.$wP)(
						"editorOverviewRuler.wordHighlightForeground",
						"#A0A0A0CC",
						E.localize(1588, null),
						!0,
					),
					a = (0, C.$wP)(
						"editorOverviewRuler.wordHighlightStrongForeground",
						"#C0A0C0CC",
						E.localize(1589, null),
						!0,
					),
					h = (0, C.$wP)(
						"editorOverviewRuler.wordHighlightTextForeground",
						C.$wR,
						E.localize(1590, null),
						!0,
					),
					c = i.$eY.register({
						description: "word-highlight-strong",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "wordHighlightStrong",
						overviewRuler: {
							color: (0, d.$jP)(a),
							position: t.OverviewRulerLane.Center,
						},
						minimap: {
							color: (0, d.$jP)(C.$BR),
							position: t.MinimapPosition.Inline,
						},
					}),
					n = i.$eY.register({
						description: "word-highlight-text",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "wordHighlightText",
						overviewRuler: {
							color: (0, d.$jP)(h),
							position: t.OverviewRulerLane.Center,
						},
						minimap: {
							color: (0, d.$jP)(C.$BR),
							position: t.MinimapPosition.Inline,
						},
					}),
					g = i.$eY.register({
						description: "selection-highlight-overview",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "selectionHighlight",
						overviewRuler: {
							color: (0, d.$jP)(C.$wR),
							position: t.OverviewRulerLane.Center,
						},
						minimap: {
							color: (0, d.$jP)(C.$BR),
							position: t.MinimapPosition.Inline,
						},
					}),
					p = i.$eY.register({
						description: "selection-highlight",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "selectionHighlight",
					}),
					o = i.$eY.register({
						description: "word-highlight",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "wordHighlight",
						overviewRuler: {
							color: (0, d.$jP)(u),
							position: t.OverviewRulerLane.Center,
						},
						minimap: {
							color: (0, d.$jP)(C.$BR),
							position: t.MinimapPosition.Inline,
						},
					});
				function f(s) {
					return s === w.DocumentHighlightKind.Write
						? c
						: s === w.DocumentHighlightKind.Text
							? n
							: o;
				}
				function b(s) {
					return s ? p : g;
				}
				(0, d.$oP)((s, l) => {
					const y = s.getColor(C.$uQ);
					y &&
						l.addRule(
							`.monaco-editor .selectionHighlight { background-color: ${y.transparent(0.5)}; }`,
						);
				});
			},
		),
		define(
			de[964],
			he([
				1, 0, 4, 127, 15, 33, 29, 27, 3, 56, 46, 65, 38, 17, 248, 71, 64, 69,
				1695, 8, 43, 23, 59, 933, 19, 2709, 588,
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
				var T, P;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rPb = void 0),
					(e.$pPb = L),
					(e.$qPb = D),
					(t = mt(t));
				const k = new b.$5j("hasWordHighlights", !1);
				function L(q, V, G, K) {
					const J = q.ordered(V);
					return (0, w.$Qh)(
						J.map(
							(W) => () =>
								Promise.resolve(W.provideDocumentHighlights(V, G, K)).then(
									void 0,
									C.$5,
								),
						),
						(W) => W != null,
					).then((W) => {
						if (W) {
							const X = new y.$Gc();
							return X.set(V.uri, W), X;
						}
						return new y.$Gc();
					});
				}
				function D(q, V, G, K, J, W) {
					const X = q.ordered(V);
					return (0, w.$Qh)(
						X.map((Y) => () => {
							const ie = W.filter((ne) => (0, p.$TN)(ne)).filter(
								(ne) =>
									(0, $.$3L)(
										Y.selector,
										ne.uri,
										ne.getLanguageId(),
										!0,
										void 0,
										void 0,
									) > 0,
							);
							return Promise.resolve(
								Y.provideMultiDocumentHighlights(V, G, ie, J),
							).then(void 0, C.$5);
						}),
						(Y) => Y != null,
					);
				}
				class M {
					constructor(V, G, K) {
						(this.c = V),
							(this.d = G),
							(this.f = K),
							(this.a = this.h(V, G)),
							(this.b = null);
					}
					get result() {
						return (
							this.b ||
								(this.b = (0, w.$zh)((V) => this.g(this.c, this.d, this.f, V))),
							this.b
						);
					}
					h(V, G) {
						const K = V.getWordAtPosition(G.getPosition());
						return K
							? new c.$iL(
									G.startLineNumber,
									K.startColumn,
									G.startLineNumber,
									K.endColumn,
								)
							: null;
					}
					isValid(V, G, K) {
						const J = G.startLineNumber,
							W = G.startColumn,
							X = G.endColumn,
							Y = this.h(V, G);
						let ie = !!(this.a && this.a.equalsRange(Y));
						for (let ne = 0, ee = K.length; !ie && ne < ee; ne++) {
							const _ = K.getRange(ne);
							_ &&
								_.startLineNumber === J &&
								_.startColumn <= W &&
								_.endColumn >= X &&
								(ie = !0);
						}
						return ie;
					}
					cancel() {
						this.result.cancel();
					}
				}
				class N extends M {
					constructor(V, G, K, J) {
						super(V, G, K), (this.j = J);
					}
					g(V, G, K, J) {
						return L(this.j, V, G.getPosition(), J).then(
							(W) => W || new y.$Gc(),
						);
					}
				}
				class A extends M {
					constructor(V, G, K, J, W) {
						super(V, G, K), (this.j = J), (this.k = W);
					}
					g(V, G, K, J) {
						return D(this.j, V, G.getPosition(), K, J, this.k).then(
							(W) => W || new y.$Gc(),
						);
					}
				}
				function R(q, V, G, K, J) {
					return new N(V, G, J, q);
				}
				function O(q, V, G, K, J, W) {
					return new A(V, G, J, q, W);
				}
				(0, u.$ltb)("_executeDocumentHighlights", async (q, V, G) => {
					const K = q.get(o.$k3);
					return (
						await L(K.documentHighlightProvider, V, G, E.CancellationToken.None)
					)?.get(V.uri);
				});
				let B = class {
					static {
						T = this;
					}
					static {
						this.t = new y.$Gc();
					}
					static {
						this.u = null;
					}
					constructor(V, G, K, J, W) {
						(this.g = new m.$Zc()),
							(this.k = 0),
							(this.m = !1),
							(this.n = new y.$Gc()),
							(this.o = 0),
							(this.p = -1),
							(this.s = this.g.add(new w.$Jh(50))),
							(this.a = V),
							(this.b = G),
							(this.c = K),
							(this.h = W),
							(this.q = k.bindTo(J)),
							(this.r = !1),
							(this.j = this.a.getOption(h.EditorOption.occurrencesHighlight)),
							(this.d = this.a.getModel()),
							this.g.add(
								V.onDidChangeCursorPosition((X) => {
									(V.getModel().uri.toString() ===
										"output:anysphere.cursor-always-local.Cursor%20Tab" &&
										X.source !== "mouse") ||
										this.r ||
										(this.j !== "off" &&
											this.s.trigger(() => {
												this.A(X);
											}));
								}),
							),
							this.g.add(
								V.onDidFocusEditorText((X) => {
									this.j !== "off" &&
										(this.l ||
											this.s.trigger(() => {
												this.D();
											}));
								}),
							),
							this.g.add(
								V.onDidChangeModelContent((X) => {
									(0, l.$Vg)(this.d.uri, "output") || this.z();
								}),
							),
							this.g.add(
								V.onDidChangeModel((X) => {
									!X.newModelUrl && X.oldModelUrl ? this.y() : T.u && this.D();
								}),
							),
							this.g.add(
								V.onDidChangeConfiguration((X) => {
									const Y = this.a.getOption(
										h.EditorOption.occurrencesHighlight,
									);
									if (this.j !== Y)
										switch (((this.j = Y), Y)) {
											case "off":
												this.z();
												break;
											case "singleFile":
												this.z(T.u?.modelInfo?.model);
												break;
											case "multiFile":
												T.u && this.D(!0);
												break;
											default:
												console.warn(
													"Unknown occurrencesHighlight setting value:",
													Y,
												);
												break;
										}
								}),
							),
							(this.f = this.a.createDecorationsCollection()),
							(this.k = 0),
							(this.l = null),
							(this.m = !1),
							(this.o = 0),
							(this.p = -1),
							T.u && this.D();
					}
					hasDecorations() {
						return this.f.length > 0;
					}
					restore() {
						this.j !== "off" && (this.s.cancel(), this.D());
					}
					stop() {
						this.j !== "off" && this.z();
					}
					v() {
						return this.f.getRanges().sort(c.$iL.compareRangesUsingStarts);
					}
					moveNext() {
						const V = this.v(),
							K =
								(V.findIndex((W) => W.containsPosition(this.a.getPosition())) +
									1) %
								V.length,
							J = V[K];
						try {
							(this.r = !0),
								this.a.setPosition(J.getStartPosition()),
								this.a.revealRangeInCenterIfOutsideViewport(J);
							const W = this.B();
							if (W) {
								const X = this.a.getModel().getLineContent(J.startLineNumber);
								(0, i.$oib)(`${X}, ${K + 1} of ${V.length} for '${W.word}'`);
							}
						} finally {
							this.r = !1;
						}
					}
					moveBack() {
						const V = this.v(),
							K =
								(V.findIndex((W) => W.containsPosition(this.a.getPosition())) -
									1 +
									V.length) %
								V.length,
							J = V[K];
						try {
							(this.r = !0),
								this.a.setPosition(J.getStartPosition()),
								this.a.revealRangeInCenterIfOutsideViewport(J);
							const W = this.B();
							if (W) {
								const X = this.a.getModel().getLineContent(J.startLineNumber);
								(0, i.$oib)(`${X}, ${K + 1} of ${V.length} for '${W.word}'`);
							}
						} finally {
							this.r = !1;
						}
					}
					w() {
						if (!this.a.hasModel()) return;
						const V = T.t.get(this.a.getModel().uri);
						V &&
							(this.a.removeDecorations(V),
							T.t.delete(this.a.getModel().uri),
							this.f.length > 0 && (this.f.clear(), this.q.set(!1)));
					}
					x(V) {
						const G = this.h.listCodeEditors(),
							K = [];
						for (const J of G) {
							if (!J.hasModel() || (0, v.$gh)(J.getModel().uri, V?.uri))
								continue;
							const W = T.t.get(J.getModel().uri);
							if (!W) continue;
							J.removeDecorations(W), K.push(J.getModel().uri);
							const X = U.get(J);
							X?.wordHighlighter &&
								X.wordHighlighter.f.length > 0 &&
								(X.wordHighlighter.f.clear(),
								(X.wordHighlighter.l = null),
								X.wordHighlighter.q.set(!1));
						}
						for (const J of K) T.t.delete(J);
					}
					y() {
						this.w(),
							this.a.hasTextFocus() &&
								(this.a.getModel()?.uri.scheme !==
									l.Schemas.vscodeNotebookCell &&
								T.u?.modelInfo?.model.uri.scheme !==
									l.Schemas.vscodeNotebookCell
									? ((T.u = null), this.D())
									: T.u?.modelInfo && (T.u.modelInfo = null)),
							this.p !== -1 && (clearTimeout(this.p), (this.p = -1)),
							this.l !== null && (this.l.cancel(), (this.l = null)),
							this.m || (this.k++, (this.m = !0));
					}
					z(V) {
						this.x(V),
							this.p !== -1 && (clearTimeout(this.p), (this.p = -1)),
							this.l !== null && (this.l.cancel(), (this.l = null)),
							this.m || (this.k++, (this.m = !0));
					}
					A(V) {
						if (this.j === "off") {
							this.z();
							return;
						}
						if (
							V.reason !== n.CursorChangeReason.Explicit &&
							this.a.getModel()?.uri.scheme !== l.Schemas.vscodeNotebookCell
						) {
							this.z();
							return;
						}
						this.D();
					}
					B() {
						const V = this.a.getSelection(),
							G = V.startLineNumber,
							K = V.startColumn;
						return this.d.isDisposed()
							? null
							: this.d.getWordAtPosition({ lineNumber: G, column: K });
					}
					C(V) {
						if (!V) return [];
						if (V.uri.scheme === l.Schemas.vscodeNotebookCell) {
							const W = [],
								X = this.h.listCodeEditors();
							for (const Y of X) {
								const ie = Y.getModel();
								ie &&
									ie !== V &&
									ie.uri.scheme === l.Schemas.vscodeNotebookCell &&
									W.push(ie);
							}
							return W;
						}
						const K = [],
							J = this.h.listCodeEditors();
						for (const W of J) {
							if (!(0, r.$$sb)(W)) continue;
							const X = W.getModel();
							X && V === X.modified && K.push(X.modified);
						}
						if (K.length) return K;
						if (this.j === "singleFile") return [];
						for (const W of J) {
							const X = W.getModel();
							X && X !== V && K.push(X);
						}
						return K;
					}
					D(V) {
						let G;
						if (this.a.hasTextFocus()) {
							const J = this.a.getSelection();
							if (!J || J.startLineNumber !== J.endLineNumber) {
								(T.u = null), this.z();
								return;
							}
							const W = J.startColumn,
								X = J.endColumn,
								Y = this.B();
							if (!Y || Y.startColumn > W || Y.endColumn < X) {
								(T.u = null), this.z();
								return;
							}
							(G = this.l && this.l.isValid(this.d, J, this.f)),
								(T.u = { modelInfo: { model: this.d, selection: J }, word: Y });
						} else if (!T.u) {
							this.z();
							return;
						}
						if (((this.o = new Date().getTime()), G))
							this.m &&
								this.p !== -1 &&
								(clearTimeout(this.p), (this.p = -1), this.F());
						else if (
							(0, v.$gh)(this.a.getModel().uri, T.u.modelInfo?.model.uri)
						) {
							if (!V) {
								const X = this.f.getRanges();
								for (const Y of X)
									if (Y.containsPosition(this.a.getPosition())) return;
							}
							this.z(V ? this.d : void 0);
							const J = ++this.k;
							this.m = !1;
							const W = this.C(this.a.getModel());
							if (!T.u || !T.u.modelInfo || T.u.modelInfo.model.isDisposed())
								return;
							(this.l = this.E(
								T.u.modelInfo.model,
								T.u.modelInfo.selection,
								T.u.word,
								W,
							)),
								this.l?.result.then((X) => {
									J === this.k && ((this.m = !0), (this.n = X || []), this.F());
								}, C.$4);
						}
					}
					E(V, G, K, J) {
						return J.length
							? O(
									this.c,
									V,
									G,
									K,
									this.a.getOption(h.EditorOption.wordSeparators),
									J,
								)
							: R(
									this.b,
									V,
									G,
									K,
									this.a.getOption(h.EditorOption.wordSeparators),
								);
					}
					F() {
						const V = new Date().getTime(),
							G = this.o + 250;
						V >= G
							? ((this.p = -1), this.G())
							: (this.p = setTimeout(() => {
									this.G();
								}, G - V));
					}
					G() {
						this.p = -1;
						const V = this.h.listCodeEditors();
						for (const G of V) {
							const K = U.get(G);
							if (!K) continue;
							const J = [],
								W = G.getModel()?.uri;
							if (W && this.n.has(W)) {
								const X = T.t.get(W),
									Y = this.n.get(W);
								if (Y)
									for (const ne of Y)
										ne.range &&
											J.push({
												range: ne.range,
												options: (0, f.$mPb)(ne.kind),
											});
								let ie = [];
								G.changeDecorations((ne) => {
									ie = ne.deltaDecorations(X ?? [], J);
								}),
									(T.t = T.t.set(W, ie)),
									J.length > 0 &&
										(K.wordHighlighter?.f.set(J), K.wordHighlighter?.q.set(!0));
							}
						}
					}
					dispose() {
						this.y(), this.g.dispose();
					}
				};
				B = T = Ne([j(4, a.$dtb)], B);
				let U = class extends m.$1c {
					static {
						P = this;
					}
					static {
						this.ID = "editor.contrib.wordHighlighter";
					}
					static get(V) {
						return V.getContribution(P.ID);
					}
					constructor(V, G, K, J) {
						super(), (this.a = null);
						const W = () => {
							V.hasModel() &&
								!V.getModel().isTooLargeForTokenization() &&
								(this.a = new B(
									V,
									K.documentHighlightProvider,
									K.multiDocumentHighlightProvider,
									G,
									J,
								));
						};
						this.D(
							V.onDidChangeModel((X) => {
								this.a && (this.a.dispose(), (this.a = null)), W();
							}),
						),
							W();
					}
					get wordHighlighter() {
						return this.a;
					}
					saveViewState() {
						return !!(this.a && this.a.hasDecorations());
					}
					moveNext() {
						this.a?.moveNext();
					}
					moveBack() {
						this.a?.moveBack();
					}
					restoreViewState(V) {
						this.a && V && this.a.restore();
					}
					stopHighlighting() {
						this.a?.stop();
					}
					dispose() {
						this.a && (this.a.dispose(), (this.a = null)), super.dispose();
					}
				};
				(e.$rPb = U),
					(e.$rPb = U = P = Ne([j(1, b.$6j), j(2, o.$k3), j(3, a.$dtb)], U));
				class z extends u.$itb {
					constructor(V, G) {
						super(G), (this.d = V);
					}
					run(V, G) {
						const K = U.get(G);
						K && (this.d ? K.moveNext() : K.moveBack());
					}
				}
				class F extends z {
					constructor() {
						super(!0, {
							id: "editor.action.wordHighlight.next",
							label: t.localize(1591, null),
							alias: "Go to Next Symbol Highlight",
							precondition: k,
							kbOpts: {
								kbExpr: g.EditorContextKeys.editorTextFocus,
								primary: d.KeyCode.F7,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				class x extends z {
					constructor() {
						super(!1, {
							id: "editor.action.wordHighlight.prev",
							label: t.localize(1592, null),
							alias: "Go to Previous Symbol Highlight",
							precondition: k,
							kbOpts: {
								kbExpr: g.EditorContextKeys.editorTextFocus,
								primary: d.KeyMod.Shift | d.KeyCode.F7,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				class H extends u.$itb {
					constructor() {
						super({
							id: "editor.action.wordHighlight.trigger",
							label: t.localize(1593, null),
							alias: "Trigger Symbol Highlight",
							precondition: void 0,
							kbOpts: {
								kbExpr: g.EditorContextKeys.editorTextFocus,
								primary: 0,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(V, G, K) {
						const J = U.get(G);
						J && J.restoreViewState(!0);
					}
				}
				(0, u.$qtb)(U.ID, U, u.EditorContributionInstantiation.Eager),
					(0, u.$ntb)(F),
					(0, u.$ntb)(x),
					(0, u.$ntb)(H),
					(0, I.$SBb)(S.$oPb);
			},
		),
		define(
			de[680],
			he([1, 0, 7, 277, 97, 584, 3, 82, 38, 17, 98, 64, 122, 2327]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FLb = e.$ELb = void 0),
					(t = mt(t)),
					(d = mt(d));
				const c = new w.$UL(new w.$RL(0, 122, 204)),
					n = {
						showArrow: !0,
						showFrame: !0,
						className: "",
						frameColor: c,
						arrowColor: c,
						keepEditorSelection: !1,
						moveToLineWhenShown: !0,
					},
					g = "vs.editor.contrib.zoneWidget";
				class p {
					constructor(l, y, $, v, S, I, T, P) {
						(this.id = ""),
							(this.domNode = l),
							(this.afterLineNumber = y),
							(this.afterColumn = $),
							(this.heightInLines = v),
							(this.showInHiddenAreas = T),
							(this.ordinal = P),
							(this.a = S),
							(this.b = I);
					}
					onDomNodeTop(l) {
						this.a(l);
					}
					onComputedHeight(l) {
						this.b(l);
					}
				}
				class o {
					constructor(l, y) {
						(this.a = l), (this.b = y);
					}
					getId() {
						return this.a;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return null;
					}
				}
				e.$ELb = o;
				class f {
					static {
						this.a = new E.$Rdb(".arrow-decoration-");
					}
					constructor(l) {
						(this.g = l),
							(this.b = f.a.nextId()),
							(this.c = this.g.createDecorationsCollection()),
							(this.d = null),
							(this.f = -1);
					}
					dispose() {
						this.hide(), t.$Xgb(this.b);
					}
					set color(l) {
						this.d !== l && ((this.d = l), this.h());
					}
					set height(l) {
						this.f !== l && ((this.f = l), this.h());
					}
					h() {
						t.$Xgb(this.b),
							t.$Wgb(
								`.monaco-editor ${this.b}`,
								`border-style: solid; border-color: transparent; border-bottom-color: ${this.d}; border-width: ${this.f}px; bottom: -${this.f}px !important; margin-left: -${this.f}px; `,
							);
					}
					show(l) {
						l.column === 1 && (l = { lineNumber: l.lineNumber, column: 2 }),
							this.c.set([
								{
									range: r.$iL.fromPositions(l),
									options: {
										description: "zone-widget-arrow",
										className: this.b,
										stickiness:
											a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									},
								},
							]);
					}
					hide() {
						this.c.clear();
					}
				}
				class b {
					constructor(l, y = {}) {
						(this.f = null),
							(this.g = null),
							(this.h = null),
							(this.n = null),
							(this.o = new C.$Zc()),
							(this.container = null),
							(this.x = !1),
							(this.editor = l),
							(this.l = this.editor.createDecorationsCollection()),
							(this.options = d.$vo(y)),
							d.$yo(this.options, n, !1),
							(this.domNode = document.createElement("div")),
							this.options.isAccessible ||
								(this.domNode.setAttribute("aria-hidden", "true"),
								this.domNode.setAttribute("role", "presentation")),
							this.o.add(
								this.editor.onDidLayoutChange(($) => {
									const v = this.t($);
									(this.domNode.style.width = v + "px"),
										(this.domNode.style.left = this.u($) + "px"),
										this.D(v);
								}),
							);
					}
					dispose() {
						this.g &&
							(this.editor.removeOverlayWidget(this.g), (this.g = null)),
							this.n &&
								this.editor.changeViewZones((l) => {
									this.n && l.removeZone(this.n.id), (this.n = null);
								}),
							this.l.clear(),
							this.o.dispose();
					}
					create() {
						this.domNode.classList.add("zone-widget"),
							this.options.className &&
								this.domNode.classList.add(this.options.className),
							(this.container = document.createElement("div")),
							this.container.classList.add("zone-widget-container"),
							this.domNode.appendChild(this.container),
							this.options.showArrow &&
								((this.f = new f(this.editor)), this.o.add(this.f)),
							this.C(this.container),
							this.G(),
							this.q();
					}
					style(l) {
						l.frameColor && (this.options.frameColor = l.frameColor),
							l.arrowColor && (this.options.arrowColor = l.arrowColor),
							this.q();
					}
					q() {
						if (this.container && this.options.frameColor) {
							const l = this.options.frameColor.toString();
							(this.container.style.borderTopColor = l),
								(this.container.style.borderBottomColor = l);
						}
						if (this.f && this.options.arrowColor) {
							const l = this.options.arrowColor.toString();
							this.f.color = l;
						}
					}
					t(l) {
						return l.width - l.minimap.minimapWidth - l.verticalScrollbarWidth;
					}
					u(l) {
						return l.minimap.minimapWidth > 0 && l.minimap.minimapLeft === 0
							? l.minimap.minimapWidth
							: 0;
					}
					v(l) {
						this.domNode.style.top = l + "px";
					}
					w(l) {
						if (((this.domNode.style.height = `${l}px`), this.container)) {
							const y = l - this.y();
							this.container.style.height = `${y}px`;
							const $ = this.editor.getLayoutInfo();
							this.E(y, this.t($));
						}
						this.h?.layout();
					}
					get position() {
						const l = this.l.getRange(0);
						if (l) return l.getStartPosition();
					}
					hasFocus() {
						return this.domNode.contains(t.$Jgb());
					}
					show(l, y) {
						const $ = r.$iL.isIRange(l)
							? r.$iL.lift(l)
							: r.$iL.fromPositions(l);
						(this.x = !0),
							this.z($, y),
							(this.x = !1),
							this.l.set([{ range: $, options: h.$eY.EMPTY }]);
					}
					updatePositionAndHeight(l, y) {
						this.n &&
							((l = r.$iL.isIRange(l) ? r.$iL.getStartPosition(l) : l),
							(this.n.afterLineNumber = l.lineNumber),
							(this.n.afterColumn = l.column),
							(this.n.heightInLines = y ?? this.n.heightInLines),
							this.editor.changeViewZones(($) => {
								$.layoutZone(this.n.id);
							}),
							this.l.set([
								{
									range: r.$iL.isIRange(l) ? l : r.$iL.fromPositions(l),
									options: h.$eY.EMPTY,
								},
							]));
					}
					hide() {
						this.n &&
							(this.editor.changeViewZones((l) => {
								this.n && l.removeZone(this.n.id);
							}),
							(this.n = null)),
							this.g &&
								(this.editor.removeOverlayWidget(this.g), (this.g = null)),
							this.f?.hide(),
							this.l.clear();
					}
					y() {
						const l = this.editor.getOption(m.EditorOption.lineHeight);
						let y = 0;
						if (this.options.showArrow) {
							const $ = Math.round(l / 3);
							y += 2 * $;
						}
						if (this.options.showFrame) {
							const $ = Math.round(l / 9);
							y += 2 * $;
						}
						return y;
					}
					z(l, y) {
						const $ = l.getStartPosition(),
							v = this.editor.getLayoutInfo(),
							S = this.t(v);
						(this.domNode.style.width = `${S}px`),
							(this.domNode.style.left = this.u(v) + "px");
						const I = document.createElement("div");
						I.style.overflow = "hidden";
						const T = this.editor.getOption(m.EditorOption.lineHeight);
						if (!this.options.allowUnlimitedHeight) {
							const M = Math.max(
								12,
								(this.editor.getLayoutInfo().height / T) * 0.8,
							);
							y = Math.min(y, M);
						}
						let P = 0,
							k = 0;
						if (
							(this.f &&
								this.options.showArrow &&
								((P = Math.round(T / 3)), (this.f.height = P), this.f.show($)),
							this.options.showFrame && (k = Math.round(T / 9)),
							this.editor.changeViewZones((M) => {
								this.n && M.removeZone(this.n.id),
									this.g &&
										(this.editor.removeOverlayWidget(this.g), (this.g = null)),
									(this.domNode.style.top = "-1000px"),
									(this.n = new p(
										I,
										$.lineNumber,
										$.column,
										y,
										(N) => this.v(N),
										(N) => this.w(N),
										this.options.showInHiddenAreas,
										this.options.ordinal,
									)),
									(this.n.id = M.addZone(this.n)),
									(this.g = new o(g + this.n.id, this.domNode)),
									this.editor.addOverlayWidget(this.g);
							}),
							this.container && this.options.showFrame)
						) {
							const M = this.options.frameWidth ? this.options.frameWidth : k;
							(this.container.style.borderTopWidth = M + "px"),
								(this.container.style.borderBottomWidth = M + "px");
						}
						const L = y * T - this.y();
						this.container &&
							((this.container.style.top = P + "px"),
							(this.container.style.height = L + "px"),
							(this.container.style.overflow = "hidden")),
							this.E(L, S),
							this.options.keepEditorSelection || this.editor.setSelection(l);
						const D = this.editor.getModel();
						if (D && this.options.moveToLineWhenShown) {
							const M = D.validateRange(
								new r.$iL(l.startLineNumber, 1, l.endLineNumber + 1, 1),
							);
							this.A(M, M.startLineNumber === D.getLineCount());
						}
					}
					A(l, y) {
						y
							? this.editor.revealLineNearTop(
									l.endLineNumber,
									u.ScrollType.Smooth,
								)
							: this.editor.revealRange(l, u.ScrollType.Smooth);
					}
					B(l, y) {
						this.container &&
							(y && this.container.classList.remove(y),
							this.container.classList.add(l));
					}
					D(l) {}
					E(l, y) {}
					F(l) {
						this.n &&
							this.n.heightInLines !== l &&
							this.editor.changeViewZones((y) => {
								this.n && ((this.n.heightInLines = l), y.layoutZone(this.n.id));
							});
					}
					G() {
						if (this.h) return;
						(this.h = this.o.add(
							new i.Sash(this.domNode, this, {
								orientation: i.Orientation.HORIZONTAL,
							}),
						)),
							this.options.isResizeable ||
								(this.h.state = i.SashState.Disabled);
						let l;
						this.o.add(
							this.h.onDidStart((y) => {
								this.n &&
									(l = {
										startY: y.startY,
										heightInLines: this.n.heightInLines,
									});
							}),
						),
							this.o.add(
								this.h.onDidEnd(() => {
									l = void 0;
								}),
							),
							this.o.add(
								this.h.onDidChange((y) => {
									if (l) {
										const $ =
												(y.currentY - l.startY) /
												this.editor.getOption(m.EditorOption.lineHeight),
											v = $ < 0 ? Math.ceil($) : Math.floor($),
											S = l.heightInLines + v;
										S > 5 && S < 35 && this.F(S);
									}
								}),
							);
					}
					getHorizontalSashLeft() {
						return 0;
					}
					getHorizontalSashTop() {
						return (
							(this.domNode.style.height === null
								? 0
								: parseInt(this.domNode.style.height)) -
							this.y() / 2
						);
					}
					getHorizontalSashWidth() {
						const l = this.editor.getLayoutInfo();
						return l.width - l.minimap.minimapWidth;
					}
				}
				e.$FLb = b;
			},
		),
		define(
			de[2934],
			he([1, 0, 58, 38, 61, 388, 533, 290, 947, 680, 10, 35]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wdc = void 0);
				let h = class extends r.$FLb {
					constructor(n, g, p, o, f, b, s, l, y, $) {
						super(g, {
							showFrame: !1,
							showArrow: !1,
							ordinal: 2,
							keepEditorSelection: !0,
							moveToLineWhenShown: !1,
							allowUnlimitedHeight: !0,
						}),
							(this.O = l),
							(this.P = y),
							(this.Q = $),
							(this.K = null),
							(this.L = null),
							(this.M = null),
							(this.id = n),
							(this.a = p),
							(this.b = o),
							(this.c = b),
							(this.p = s),
							(this.d = "inline-diff-removed"),
							(this.m = 1),
							(this.options.ordinal = t.$OX + 1),
							this.Q.getValue(t.$tW) ? (this.N = f) : (this.N = void 0),
							this.create(),
							(this.r = this.editor.onDidScrollChange((S) => {
								S.scrollLeftChanged && this.Y(S.scrollLeft);
							}));
						let v = this.editor.getLayoutInfo().width;
						(this.H = this.editor.onDidLayoutChange((S) => {
							S.width !== v && (this.R(), (v = S.width));
						})),
							(this.I = this.editor.onDidChangeConfiguration((S) => {
								(S.hasChanged(i.EditorOption.wordWrap) ||
									S.hasChanged(i.EditorOption.wordWrapOverride1) ||
									S.hasChanged(i.EditorOption.wordWrapOverride2)) &&
									this.R();
							})),
							(this.J = this.P.onDidColorThemeChange((S) => {
								this.T(S);
							})),
							this.K !== null && (this.K.style.marginLeft = "1px"),
							this.Y(this.editor.getScrollLeft());
					}
					R() {
						if (this.K && this.L && this.M) {
							const n = this.X();
							this.updateBackgroundColor(),
								this.hide(),
								this.K.removeChild(this.L),
								(this.L = n.content),
								(this.m = n.heightInLines);
							const g = this.editor.getLayoutInfo().contentLeft;
							(this.M.style.width = `${g}px`),
								this.K.appendChild(this.L),
								this.showWidget();
						}
					}
					updatePosition(n) {
						(this.c = n), this.showWidget();
					}
					updateInnerChanges(n) {
						this.Q.getValue(t.$tW) &&
							JSON.stringify(this.N) !== JSON.stringify(n) &&
							((this.N = n), this.R());
					}
					updateBackgroundColor() {
						const n = this.Q.getValue(t.$sW),
							g =
								this.N && this.N.length > 0
									? "hsl(348deg 90% 50% / 15%)"
									: "hsl(348deg 90% 50% / 25%)",
							p = n
								? `var(--vscode-diffEditor-removedLineBackground, ${g})`
								: g;
						this.K && (this.K.style.backgroundColor = p);
					}
					C(n) {
						(this.K = n),
							(this.K.style.position = "relative"),
							(this.K.style.width = "1000000px"),
							this.updateBackgroundColor(),
							this.o.add(
								this.Q.onDidChangeConfiguration((o) => {
									o.affectsConfiguration(t.$sW) && this.updateBackgroundColor();
								}),
							);
						const g = this.X();
						(this.L = g.content), (this.m = g.heightInLines);
						const p = this.W();
						(this.M = document.createElement("div")),
							(this.M.style.width = `${p + 1}px`),
							(this.M.style.height = "100%"),
							(this.M.style.position = "absolute"),
							(this.M.style.zIndex = "3"),
							this.T(this.P.getColorTheme()),
							n.appendChild(this.M),
							n.appendChild(this.L),
							this.Y(this.editor.getScrollLeft());
					}
					T(n) {
						if (this.M) {
							let g = "white";
							const p = n.getColor("editor.background");
							p && (g = p.toString()), (this.M.style.backgroundColor = g);
						}
					}
					U() {
						const n = [],
							g = this.editor._getViewModel();
						if (g)
							for (let p = 0; p < this.a.length; p++) {
								const o = this.a[p],
									f = this.b[p],
									b = f
										? new E.$7L(
												new Uint32Array(Object.values(f.tokens)),
												f.text,
												this.O.languageIdCodec,
											)
										: void 0,
									s = g.createLineBreaksComputer();
								s.addRequest(o, null, null);
								const l = s.finalize();
								let y = this.V(p, o);
								if (l.length === 0 || !l[0])
									n.push({ text: o, tokens: b, innerChanges: y });
								else
									for (const $ of l) {
										if (!$ || !$.breakOffsets) continue;
										let v = 0;
										for (let S = 0; S < $.breakOffsets.length; S++) {
											const I =
												S < $.breakOffsets.length
													? $.breakOffsets[S]
													: o.length;
											let T = o.slice(v, I),
												P = 0;
											v !== 0 &&
												((T = " ".repeat($.wrappedTextIndentLength) + T),
												(P = $.wrappedTextIndentLength));
											const k = y
												.filter(
													(D) =>
														D.startColumn > v &&
														(D.startColumn <= I ||
															S === $.breakOffsets.length - 1),
												)
												.map(
													(D) =>
														new C.$Fub(
															Math.max(1, D.startColumn - v + P),
															Math.min(T.length + 1, D.endColumn - v + P),
															D.className,
															D.type,
														),
												);
											let L;
											if (b) {
												const D = b.sliceAndInflate(v, I, 0),
													M = D.getCount(),
													N = [];
												P > 0 &&
													N.push({
														text: " ".repeat(P),
														metadata: D.getMetadata(0),
													});
												for (let A = 0; A < M; A++)
													N.push({
														text: D.getTokenText(A),
														metadata: D.getMetadata(A),
													});
												L = E.$7L.createFromTextAndMetadata(
													N,
													this.O.languageIdCodec,
												);
											}
											n.push({ text: T, tokens: L, innerChanges: k }), (v = I);
										}
									}
							}
						return n;
					}
					V(n, g) {
						if (!this.N) return [];
						const p = [];
						for (const o of this.N)
							o.originalRange.startLineNumber === n + 1
								? p.push(
										new C.$Fub(
											o.originalRange.startColumn,
											o.originalRange.endLineNumber === n + 1
												? o.originalRange.endColumn
												: g.length + 1,
											"inline-diff-inner-change-removed",
											d.InlineDecorationType.Regular,
										),
									)
								: o.originalRange.startLineNumber < n + 1 &&
									o.originalRange.endLineNumber >= n + 1 &&
									p.push(
										new C.$Fub(
											1,
											o.originalRange.endLineNumber === n + 1
												? o.originalRange.endColumn
												: g.length + 1,
											"inline-diff-inner-change-removed",
											d.InlineDecorationType.Regular,
										),
									);
						return p;
					}
					W() {
						return Math.max(this.editor.getLayoutInfo().contentLeft - 1, 0);
					}
					getHeightInLines() {
						return this.m;
					}
					X() {
						const n = document.createElement("div"),
							{ tabSize: g } = this.editor.getModel().getOptions(),
							p = this.U();
						(0, m.$M1b)(
							n,
							g,
							p.map((f) => ({
								content: f.text,
								decorations: f.innerChanges || [],
								lineTokens: f.tokens
									? f.tokens
									: E.$7L.createEmpty(f.text, this.O.languageIdCodec),
							})),
							this.editor.getOptions(),
							!0,
							this.d,
						),
							(n.className = this.d + (this.p ? "-hidden" : ""));
						const o = this.W();
						return (
							(n.style.marginLeft = `${o}px`),
							{ content: n, heightInLines: p.length }
						);
					}
					Y(n) {
						!this.K ||
							!this.M ||
							((this.K.style.marginLeft = `${-n}px`),
							(this.M.style.marginLeft = `${n}px`));
					}
					showWidget() {
						this.hide(), this.show(this.c, this.m);
					}
					dispose() {
						super.dispose(),
							this.r.dispose(),
							this.H.dispose(),
							this.I.dispose(),
							this.J.dispose();
					}
				};
				(e.$wdc = h),
					(e.$wdc = h = Ne([j(7, w.$nM), j(8, a.$iP), j(9, u.$gj)], h));
			},
		),
		define(
			de[255],
			he([
				1, 0, 7, 105, 50, 14, 26, 97, 6, 82, 46, 65, 281, 38, 680, 4, 92, 8, 20,
				5, 51, 2316,
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
					(e.$lNb =
						e.$kNb =
						e.$jNb =
						e.$iNb =
						e.$hNb =
						e.$gNb =
						e.$fNb =
						e.$eNb =
						e.$dNb =
						e.$cNb =
						e.$bNb =
						e.$aNb =
						e.$_Mb =
						e.$$Mb =
						e.$0Mb =
						e.$9Mb =
						e.PeekContext =
						e.$7Mb =
							void 0),
					(e.$8Mb = $),
					(t = mt(t)),
					(r = mt(r)),
					(g = mt(g)),
					(e.$7Mb = (0, b.$Mi)("IPeekViewService")),
					(0, f.$lK)(
						e.$7Mb,
						class {
							constructor() {
								this.a = new Map();
							}
							addExclusiveWidget(I, T) {
								const P = this.a.get(I);
								P && (P.listener.dispose(), P.widget.dispose());
								const k = () => {
									const L = this.a.get(I);
									L &&
										L.widget === T &&
										(L.listener.dispose(), this.a.delete(I));
								};
								this.a.set(I, { widget: T, listener: T.onDidClose(k) });
							}
						},
						f.InstantiationType.Delayed,
					);
				var l;
				(function (I) {
					(I.inPeekEditor = new o.$5j(
						"inReferenceSearchEditor",
						!0,
						g.localize(1343, null),
					)),
						(I.notInPeekEditor = I.inPeekEditor.toNegated());
				})(l || (e.PeekContext = l = {}));
				let y = class {
					static {
						this.ID = "editor.contrib.referenceController";
					}
					constructor(T, P) {
						T instanceof h.$wDb && l.inPeekEditor.bindTo(P);
					}
					dispose() {}
				};
				(y = Ne([j(1, o.$6j)], y)),
					(0, u.$qtb)(y.ID, y, u.EditorContributionInstantiation.Eager);
				function $(I) {
					const T = I.get(a.$dtb).getFocusedCodeEditor();
					return T instanceof h.$wDb ? T.getParentEditor() : T;
				}
				const v = {
					headerBackgroundColor: d.$UL.white,
					primaryHeadingColor: d.$UL.fromHex("#333333"),
					secondaryHeadingColor: d.$UL.fromHex("#6c6c6cb3"),
				};
				let S = class extends n.$FLb {
					constructor(T, P, k) {
						super(T, P),
							(this.M = k),
							(this.j = new m.$re()),
							(this.onDidClose = this.j.event),
							r.$yo(this.options, v, !1);
					}
					dispose() {
						this.k || ((this.k = !0), super.dispose(), this.j.fire(this));
					}
					style(T) {
						const P = this.options;
						T.headerBackgroundColor &&
							(P.headerBackgroundColor = T.headerBackgroundColor),
							T.primaryHeadingColor &&
								(P.primaryHeadingColor = T.primaryHeadingColor),
							T.secondaryHeadingColor &&
								(P.secondaryHeadingColor = T.secondaryHeadingColor),
							super.style(T);
					}
					q() {
						super.q();
						const T = this.options;
						this.p &&
							T.headerBackgroundColor &&
							(this.p.style.backgroundColor =
								T.headerBackgroundColor.toString()),
							this.H &&
								T.primaryHeadingColor &&
								(this.H.style.color = T.primaryHeadingColor.toString()),
							this.I &&
								T.secondaryHeadingColor &&
								(this.I.style.color = T.secondaryHeadingColor.toString()),
							this.L &&
								T.frameColor &&
								(this.L.style.borderColor = T.frameColor.toString());
					}
					C(T) {
						this.B("peekview-widget"),
							(this.p = t.$(".head")),
							(this.L = t.$(".body")),
							this.P(this.p),
							this.T(this.L),
							T.appendChild(this.p),
							T.appendChild(this.L);
					}
					P(T, P) {
						(this.s = t.$(".peekview-title")),
							this.options.supportOnTitleClick &&
								(this.s.classList.add("clickable"),
								t.$$fb(this.s, "click", (D) => this.S(D))),
							t.$fhb(this.p, this.s),
							this.Q(this.s),
							(this.H = t.$("span.filename")),
							(this.I = t.$("span.dirname")),
							(this.J = t.$("span.meta")),
							t.$fhb(this.s, this.H, this.I, this.J);
						const k = t.$(".peekview-actions");
						t.$fhb(this.p, k);
						const L = this.R();
						(this.K = new i.$eib(k, L)),
							this.o.add(this.K),
							P ||
								this.K.push(
									new w.$rj(
										"peekview.close",
										g.localize(1344, null),
										C.ThemeIcon.asClassName(E.$ak.close),
										!0,
										() => (this.dispose(), Promise.resolve()),
									),
									{ label: !1, icon: !0 },
								);
					}
					Q(T) {}
					R() {
						return {
							actionViewItemProvider: p.$Pyb.bind(void 0, this.M),
							orientation: i.ActionsOrientation.HORIZONTAL,
						};
					}
					S(T) {}
					setTitle(T, P) {
						this.H &&
							this.I &&
							((this.H.innerText = T),
							this.H.setAttribute("title", T),
							P ? (this.I.innerText = P) : t.$9fb(this.I));
					}
					setMetaTitle(T) {
						this.J &&
							(T ? ((this.J.innerText = T), t.show(this.J)) : t.hide(this.J));
					}
					E(T, P) {
						if (!this.x && T < 0) {
							this.dispose();
							return;
						}
						const k = Math.ceil(
								this.editor.getOption(c.EditorOption.lineHeight) * 1.2,
							),
							L = Math.round(T - (k + 2));
						this.V(k, P), this.W(L, P);
					}
					V(T, P) {
						this.p &&
							((this.p.style.height = `${T}px`),
							(this.p.style.lineHeight = this.p.style.height));
					}
					W(T, P) {
						this.L && (this.L.style.height = `${T}px`);
					}
				};
				(e.$9Mb = S),
					(e.$9Mb = S = Ne([j(2, b.$Li)], S)),
					(e.$0Mb = (0, s.$wP)(
						"peekViewTitle.background",
						{
							dark: "#252526",
							light: "#F3F3F3",
							hcDark: d.$UL.black,
							hcLight: d.$UL.white,
						},
						g.localize(1345, null),
					)),
					(e.$$Mb = (0, s.$wP)(
						"peekViewTitleLabel.foreground",
						{
							dark: d.$UL.white,
							light: d.$UL.black,
							hcDark: d.$UL.white,
							hcLight: s.$9P,
						},
						g.localize(1346, null),
					)),
					(e.$_Mb = (0, s.$wP)(
						"peekViewTitleDescription.foreground",
						{
							dark: "#ccccccb3",
							light: "#616161",
							hcDark: "#FFFFFF99",
							hcLight: "#292929",
						},
						g.localize(1347, null),
					)),
					(e.$aNb = (0, s.$wP)(
						"peekView.border",
						{ dark: s.$mQ, light: s.$mQ, hcDark: s.$OP, hcLight: s.$OP },
						g.localize(1348, null),
					)),
					(e.$bNb = (0, s.$wP)(
						"peekViewResult.background",
						{
							dark: "#252526",
							light: "#F3F3F3",
							hcDark: d.$UL.black,
							hcLight: d.$UL.white,
						},
						g.localize(1349, null),
					)),
					(e.$cNb = (0, s.$wP)(
						"peekViewResult.lineForeground",
						{
							dark: "#bbbbbb",
							light: "#646465",
							hcDark: d.$UL.white,
							hcLight: s.$9P,
						},
						g.localize(1350, null),
					)),
					(e.$dNb = (0, s.$wP)(
						"peekViewResult.fileForeground",
						{
							dark: d.$UL.white,
							light: "#1E1E1E",
							hcDark: d.$UL.white,
							hcLight: s.$9P,
						},
						g.localize(1351, null),
					)),
					(e.$eNb = (0, s.$wP)(
						"peekViewResult.selectionBackground",
						{
							dark: "#3399ff33",
							light: "#3399ff33",
							hcDark: null,
							hcLight: null,
						},
						g.localize(1352, null),
					)),
					(e.$fNb = (0, s.$wP)(
						"peekViewResult.selectionForeground",
						{
							dark: d.$UL.white,
							light: "#6C6C6C",
							hcDark: d.$UL.white,
							hcLight: s.$9P,
						},
						g.localize(1353, null),
					)),
					(e.$gNb = (0, s.$wP)(
						"peekViewEditor.background",
						{
							dark: "#001F33",
							light: "#F2F8FC",
							hcDark: d.$UL.black,
							hcLight: d.$UL.white,
						},
						g.localize(1354, null),
					)),
					(e.$hNb = (0, s.$wP)(
						"peekViewEditorGutter.background",
						e.$gNb,
						g.localize(1355, null),
					)),
					(e.$iNb = (0, s.$wP)(
						"peekViewEditorStickyScroll.background",
						e.$gNb,
						g.localize(1356, null),
					)),
					(e.$jNb = (0, s.$wP)(
						"peekViewResult.matchHighlightBackground",
						{
							dark: "#ea5c004d",
							light: "#ea5c004d",
							hcDark: null,
							hcLight: null,
						},
						g.localize(1357, null),
					)),
					(e.$kNb = (0, s.$wP)(
						"peekViewEditor.matchHighlightBackground",
						{
							dark: "#ff8f0099",
							light: "#f5d802de",
							hcDark: null,
							hcLight: null,
						},
						g.localize(1358, null),
					)),
					(e.$lNb = (0, s.$wP)(
						"peekViewEditor.matchHighlightBorder",
						{ dark: null, light: null, hcDark: s.$PP, hcLight: s.$PP },
						g.localize(1359, null),
					));
			},
		),
		