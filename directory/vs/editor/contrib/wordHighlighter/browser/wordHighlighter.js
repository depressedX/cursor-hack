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
		