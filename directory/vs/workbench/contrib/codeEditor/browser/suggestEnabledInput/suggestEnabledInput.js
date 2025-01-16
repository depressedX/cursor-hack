define(
			de[1043],
			he([
				1, 0, 7, 661, 235, 6, 647, 27, 82, 12, 9, 46, 206, 188, 48, 17, 409, 74,
				69, 67, 375, 254, 328, 10, 8, 413, 5, 128, 51, 394, 504, 521, 2402,
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
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Bc = e.$4Bc = e.$3Bc = void 0),
					(o = mt(o));
				let M = class extends w.$Uhb {
					constructor(B, U, z, F, x, H, q, V, G, K, J) {
						super(),
							(this.b = new E.$re()),
							(this.onShouldFocusResults = this.b.event),
							(this.c = new E.$re()),
							(this.onInputDidChange = this.c.event),
							(this.g = this.D(new E.$re())),
							(this.onDidFocus = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onDidBlur = this.h.event),
							(this.r = (0, t.$fhb)(U, (0, t.$)(".suggest-input-container"))),
							(this.element = U),
							(this.s = (0, t.$fhb)(
								this.r,
								(0, t.$)(
									".suggest-input-placeholder",
									void 0,
									H.placeholderText || "",
								),
							));
						const W = (0, m.$yo)((0, D.$xYb)(J), R(F));
						W.overflowWidgetsDomNode = H.overflowWidgetsDomNode;
						const X = this.t(G),
							Y = X ? this.D(q.createChild(new T.$Ki([v.$6j, X]))) : q;
						(this.inputWidget = this.D(
							Y.createInstance(h.$rwb, this.r, W, {
								contributions:
									a.EditorExtensionsRegistry.getSomeEditorContributions([
										y.$KDb.ID,
										l.$aDb.ID,
										s.$2Mb.ID,
										k.$_Xb.ID,
										L.$aYb,
									]),
								isSimpleWidget: !0,
							}),
						)),
							this.D(
								J.onDidChangeConfiguration((te) => {
									if (
										te.affectsConfiguration("editor.accessibilitySupport") ||
										te.affectsConfiguration("editor.cursorBlinking")
									) {
										const Q = J.getValue("editor.accessibilitySupport"),
											Z = J.getValue("editor.cursorBlinking");
										this.inputWidget.updateOptions({
											accessibilitySupport: Q,
											cursorBlinking: Z,
										});
									}
								}),
							),
							this.D(
								this.inputWidget.onDidFocusEditorText(() => this.g.fire()),
							),
							this.D(this.inputWidget.onDidBlurEditorText(() => this.h.fire()));
						const ie = u.URI.parse(x);
						(this.n = V.createModel("", null, ie, !0)),
							this.D(this.n),
							this.inputWidget.setModel(this.n),
							this.D(
								this.inputWidget.onDidPaste(() =>
									this.setValue(this.getValue()),
								),
							),
							this.D(
								this.inputWidget.onDidFocusEditorText(() => {
									H.focusContextKey && H.focusContextKey.set(!0),
										this.r.classList.add("synthetic-focus");
								}),
							),
							this.D(
								this.inputWidget.onDidBlurEditorText(() => {
									H.focusContextKey && H.focusContextKey.set(!1),
										this.r.classList.remove("synthetic-focus");
								}),
							),
							this.D(
								E.Event.chain(this.inputWidget.onKeyDown, (te) =>
									te.filter((Q) => Q.keyCode === d.KeyCode.Enter),
								)((te) => {
									te.preventDefault();
								}, this),
							),
							this.D(
								E.Event.chain(this.inputWidget.onKeyDown, (te) =>
									te.filter(
										(Q) =>
											Q.keyCode === d.KeyCode.DownArrow &&
											(r.$m ? Q.metaKey : Q.ctrlKey),
									),
								)(() => this.b.fire(), this),
							);
						let ne = this.getValue();
						const ee = this.inputWidget.getModel();
						ee &&
							this.D(
								ee.onDidChangeContent(() => {
									const te = this.getValue();
									(this.s.style.visibility = te ? "hidden" : "visible"),
										ne.trim() !== te.trim() && (this.c.fire(void 0), (ne = te));
								}),
							);
						const _ = {
							provideResults: z.provideResults,
							sortKey: z.sortKey || ((te) => te),
							triggerCharacters: z.triggerCharacters || [],
							wordDefinition: z.wordDefinition
								? (0, p.$UK)(z.wordDefinition)
								: void 0,
							alwaysShowSuggestions: !!z.alwaysShowSuggestions,
						};
						this.setValue(H.value || ""),
							this.D(
								K.completionProvider.register(
									{
										scheme: ie.scheme,
										pattern: "**/" + ie.path,
										hasAccessToAllModels: !0,
									},
									{
										_debugDisplayName: `suggestEnabledInput/${B}`,
										triggerCharacters: _.triggerCharacters,
										provideCompletionItems: (te, Q, Z) => {
											const se = te.getValue(),
												re = Q.column - 1;
											let le = 0,
												oe = 0;
											if (_.wordDefinition) {
												const ae = (0, p.$WK)(
													Q.column,
													_.wordDefinition,
													se,
													0,
												);
												(le = ae?.word.length ?? 0),
													(oe = ae ? ae.startColumn - 1 : 0);
											} else
												(oe = se.lastIndexOf(" ", re - 1) + 1), (le = re - oe);
											return !_.alwaysShowSuggestions &&
												le > 0 &&
												_.triggerCharacters?.indexOf(se[oe]) === -1
												? { suggestions: [] }
												: {
														suggestions: z.provideResults(se).map((ae) => {
															let pe, $e;
															return (
																typeof ae == "string"
																	? (pe = ae)
																	: ((pe = ae.label), ($e = ae)),
																{
																	label: pe,
																	insertText: pe,
																	range: g.$iL.fromPositions(
																		Q.delta(0, -le),
																		Q,
																	),
																	sortText: _.sortKey(pe),
																	kind: o.CompletionItemKind.Keyword,
																	...$e,
																}
															);
														}),
													};
										},
									},
								),
							),
							this.w(H.styleOverrides || {});
					}
					t(B) {}
					updateAriaLabel(B) {
						this.inputWidget.updateOptions({ ariaLabel: B });
					}
					setValue(B) {
						B = B.replace(/\s/g, " ");
						const U = this.n.getFullModelRange();
						this.inputWidget.executeEdits("suggestEnabledInput.setValue", [
							c.$jL.replace(U, B),
						]),
							this.inputWidget.setScrollTop(0),
							this.inputWidget.setPosition(new n.$hL(1, B.length + 1));
					}
					getValue() {
						return this.inputWidget.getValue();
					}
					w(B) {
						(this.r.style.backgroundColor = (0, P.$rP)(
							B.inputBackground ?? P.$TR,
						)),
							(this.r.style.color = (0, P.$rP)(B.inputForeground ?? P.$UR)),
							(this.s.style.color = (0, P.$rP)(
								B.inputPlaceholderForeground ?? P.$1R,
							)),
							(this.r.style.borderWidth = "1px"),
							(this.r.style.borderStyle = "solid"),
							(this.r.style.borderColor = (0, P.$sP)(
								B.inputBorder ?? P.$VR,
								"transparent",
							));
						const U = this.r.getElementsByClassName("cursor")[0];
						U &&
							(U.style.backgroundColor = (0, P.$rP)(
								B.inputForeground ?? P.$UR,
							));
					}
					focus(B) {
						this.inputWidget.focus(),
							B && this.inputWidget.getValue() && this.y();
					}
					onHide() {
						this.inputWidget.onHide();
					}
					layout(B) {
						this.inputWidget.layout(B),
							(this.s.style.width = `${B.width - 2}px`);
					}
					y() {
						this.inputWidget.setSelection(
							new g.$iL(1, 1, 1, this.getValue().length + 1),
						);
					}
				};
				(e.$3Bc = M),
					(e.$3Bc = M =
						Ne(
							[
								j(6, I.$Li),
								j(7, b.$QO),
								j(8, v.$6j),
								j(9, f.$k3),
								j(10, $.$gj),
							],
							M,
						));
				let N = class extends M {
					constructor(
						{
							id: B,
							parent: U,
							ariaLabel: z,
							suggestionProvider: F,
							resourceHandle: x,
							suggestOptions: H,
							history: q,
						},
						V,
						G,
						K,
						J,
						W,
					) {
						super(B, U, F, z, x, H, V, G, K, J, W),
							(this.J = new C.$Job(q, 100));
					}
					addToHistory() {
						const B = this.getValue();
						B && B !== this.L() && this.J.add(B);
					}
					getHistory() {
						return this.J.getHistory();
					}
					showNextValue() {
						this.J.has(this.getValue()) || this.addToHistory();
						let B = this.N();
						B && (B = B === this.getValue() ? this.N() : B),
							this.setValue(B ?? "");
					}
					showPreviousValue() {
						this.J.has(this.getValue()) || this.addToHistory();
						let B = this.M();
						B && (B = B === this.getValue() ? this.M() : B),
							B &&
								(this.setValue(B),
								this.inputWidget.setPosition({ lineNumber: 0, column: 0 }));
					}
					clearHistory() {
						this.J.clear();
					}
					L() {
						let B = this.J.current();
						return B || ((B = this.J.last()), this.J.next()), B;
					}
					M() {
						return this.J.previous() || this.J.first();
					}
					N() {
						return this.J.next();
					}
				};
				(e.$4Bc = N),
					(e.$4Bc = N =
						Ne(
							[j(1, I.$Li), j(2, b.$QO), j(3, v.$6j), j(4, f.$k3), j(5, $.$gj)],
							N,
						));
				let A = class extends N {
					constructor(B, U, z, F, x, H) {
						super(B, U, z, F, x, H);
						const {
							historyNavigationBackwardsEnablement: q,
							historyNavigationForwardsEnablement: V,
						} = this.O;
						this.D(
							this.inputWidget.onDidChangeCursorPosition(({ position: G }) => {
								const K = this.inputWidget._getViewModel(),
									J = K.getLineCount(),
									W = K.getLineLength(J) + 1,
									X =
										K.coordinatesConverter.convertModelPositionToViewPosition(
											G,
										);
								q.set(X.lineNumber === 1 && X.column === 1),
									V.set(X.lineNumber === J && X.column === W);
							}),
						);
					}
					t(B) {
						const U = this.D(B.createScoped(this.element));
						return (this.O = this.D((0, S.$UCb)(U, this))), U;
					}
				};
				(e.$5Bc = A),
					(e.$5Bc = A =
						Ne(
							[j(1, I.$Li), j(2, b.$QO), j(3, v.$6j), j(4, f.$k3), j(5, $.$gj)],
							A,
						)),
					(0, D.$zYb)(".suggest-input-container");
				function R(O) {
					return {
						fontSize: 13,
						lineHeight: 20,
						wordWrap: "off",
						scrollbar: { vertical: "hidden" },
						roundedSelection: !1,
						guides: { indentation: !1 },
						cursorWidth: 1,
						fontFamily: i.$njb,
						ariaLabel: O || "",
						snippetSuggestions: "none",
						suggest: { filterGraceful: !1, showIcons: !1 },
						autoClosingBrackets: "never",
					};
				}
			},
		),
		