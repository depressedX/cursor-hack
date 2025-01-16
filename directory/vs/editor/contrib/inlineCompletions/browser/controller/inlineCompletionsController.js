define(
			de[501],
			he([
				1, 0, 2658, 127, 15, 33, 3, 77, 319, 457, 28, 498, 542, 38, 48, 248,
				391, 69, 1154, 947, 765, 1215, 2922, 2928, 4, 91, 184, 31, 10, 8, 5, 39,
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
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O1b = void 0);
				let N = class extends C.$1c {
					static {
						M = this;
					}
					static {
						this.ID = "editor.contrib.inlineCompletionsController";
					}
					static get(O) {
						return O.getContribution(M.ID);
					}
					constructor(O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.editor = O),
							(this.y = B),
							(this.z = U),
							(this.C = z),
							(this.F = F),
							(this.G = x),
							(this.H = H),
							(this.I = q),
							(this.J = V),
							(this.L = G),
							(this.a = (0, h.$Uwb)(this.editor)),
							(this.b = (0, d.derived)(
								this,
								(J) =>
									this.a.selections.read(J)?.map((W) => W.getEndPosition()) ?? [
										new n.$hL(1, 1),
									],
							)),
							(this.c = this.D(
								new $.$MDb(
									this.editor,
									() => (
										this.a.forceUpdate(),
										this.model
											.get()
											?.selectedInlineCompletion.get()
											?.toSingleTextEdit(void 0)
									),
									(J) =>
										this.a.forceUpdate((W) => {
											this.model.get()?.handleSuggestAccepted(J);
										}),
								),
							)),
							(this.f = (0, d.observableFromEvent)(
								this,
								(J) =>
									this.c.onDidSelectedItemChange(() => {
										this.a.forceUpdate((W) => J(void 0));
									}),
								() => this.c.selectedItem,
							)),
							(this.g = (0, d.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() =>
									this.editor.getOption(c.EditorOption.inlineSuggest).enabled,
							)),
							(this.h = (0, d.observableFromEvent)(
								this,
								this.L.onDidChangeScreenReaderOptimized,
								() => this.L.isScreenReaderOptimized(),
							)),
							(this.j = (0, d.observableFromEvent)(
								this,
								this.z.onDidChangeContext,
								() =>
									this.z
										.getContext(this.editor.getDomNode())
										.getValue("editorDictation.inProgress") === !0,
							)),
							(this.m = (0, d.derived)(
								this,
								(J) => this.g.read(J) && (!this.h.read(J) || !this.j.read(J)),
							)),
							(this.n = this.G.for(
								this.H.inlineCompletionsProvider,
								"InlineCompletionsDebounce",
								{ min: 50, max: 50 },
							)),
							(this.model = (0, m.$Yd)(this, (J) => {
								if (this.a.isReadonly.read(J)) return;
								const W = this.a.model.read(J);
								return W
									? this.y.createInstance(
											y.$ODb,
											W,
											this.f,
											this.a.versionId,
											this.b,
											this.n,
											(0, d.observableFromEvent)(
												this.editor.onDidChangeConfiguration,
												() =>
													this.editor.getOption(c.EditorOption.suggest).preview,
											),
											(0, d.observableFromEvent)(
												this.editor.onDidChangeConfiguration,
												() =>
													this.editor.getOption(c.EditorOption.suggest)
														.previewMode,
											),
											(0, d.observableFromEvent)(
												this.editor.onDidChangeConfiguration,
												() =>
													this.editor.getOption(c.EditorOption.inlineSuggest)
														.mode,
											),
											this.m,
										)
									: void 0;
							}).recomputeInitiallyAndOnChange(this.B)),
							(this.q = (0, d.derived)(
								this,
								(J) => this.model.read(J)?.ghostTexts.read(J) ?? [],
							)),
							(this.r = A(this.q, this.B)),
							(this.t = (0, r.$Ld)(this, this.r, (J, W) =>
								W.add(
									this.y.createInstance(b.$J1b, this.editor, {
										ghostText: J,
										minReservedLineCount: (0, d.constObservable)(0),
										targetTextModel: this.model.map((X) => X?.textModel),
									}),
								),
							).recomputeInitiallyAndOnChange(this.B)),
							(this.u = (0, d.observableSignal)(this)),
							(this.w = (0, d.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() =>
									this.editor.getOption(c.EditorOption.inlineSuggest)
										.fontFamily,
							)),
							this.D(new s.$_Cb(this.z, this.model)),
							this.D(
								(0, h.$Wwb)(this.a.onDidType, (J, W) => {
									this.m.get() && this.model.get()?.trigger();
								}),
							),
							this.D(
								this.F.onDidExecuteCommand((J) => {
									new Set([
										a.CoreEditingCommands.Tab.id,
										a.CoreEditingCommands.DeleteLeft.id,
										a.CoreEditingCommands.DeleteRight.id,
										f.$tCb,
										"acceptSelectedSuggestion",
									]).has(J.commandId) &&
										O.hasTextFocus() &&
										this.m.get() &&
										this.a.forceUpdate((X) => {
											this.model.get()?.trigger(X);
										});
								}),
							),
							this.D(
								(0, h.$Wwb)(this.a.selections, (J, W) => {
									W.some(
										(X) =>
											X.reason === g.CursorChangeReason.Explicit ||
											X.source === "api",
									) && this.model.get()?.stop();
								}),
							),
							this.D(
								this.editor.onDidBlurEditorWidget(() => {
									this.z.getContextKeyValue("accessibleViewIsShown") ||
										this.C.getValue("editor.inlineSuggest.keepOnBlur") ||
										O.getOption(c.EditorOption.inlineSuggest).keepOnBlur ||
										l.$RDb.dropDownVisible ||
										(0, d.transaction)((J) => {
											this.model.get()?.stop(J);
										});
								}),
							),
							this.D(
								(0, d.autorun)((J) => {
									const W = this.model.read(J)?.state.read(J);
									W?.suggestItem
										? W.primaryGhostText.lineCount >= 2 &&
											this.c.forceRenderingAbove()
										: this.c.stopForceRenderingAbove();
								}),
							),
							this.D(
								(0, C.$Yc)(() => {
									this.c.stopForceRenderingAbove();
								}),
							);
						const K = (0, r.$Jd)(this, (J, W) => {
							const Y = this.model.read(J)?.state.read(J);
							return this.f.get() ? W : Y?.inlineCompletion?.semanticId;
						});
						this.D(
							(0, h.$Xwb)(
								(0, d.derived)((J) => (this.u.read(J), K.read(J), {})),
								async (J, W, X) => {
									const Y = this.model.get(),
										ie = Y?.state.get();
									if (!ie || !Y) return;
									const ne = Y.textModel.getLineContent(
										ie.primaryGhostText.lineNumber,
									);
									await (0, w.$Nh)(50, (0, E.$De)(X)),
										await (0, d.waitForState)(
											this.f,
											u.$sg,
											() => !1,
											(0, E.$De)(X),
										),
										await this.I.playSignal(I.$Twb.inlineSuggestion),
										this.editor.getOption(
											c.EditorOption.screenReaderAnnounceInlineSuggestion,
										) && this.M(ie.primaryGhostText.renderForScreenReader(ne));
								},
							),
						),
							this.D(new l.$QDb(this.editor, this.model, this.y)),
							this.D(
								(0, t.$mjb)(
									(0, d.derived)((J) => {
										const W = this.w.read(J);
										return W === "" || W === "default"
											? ""
											: `
.monaco-editor .ghost-text-decoration,
.monaco-editor .ghost-text-decoration-preview,
.monaco-editor .ghost-text {
	font-family: ${W};
}`;
									}),
								),
							),
							this.D(
								this.C.onDidChangeConfiguration((J) => {
									J.affectsConfiguration(
										"accessibility.verbosity.inlineCompletions",
									) &&
										this.editor.updateOptions({
											inlineCompletionsAccessibilityVerbose: this.C.getValue(
												"accessibility.verbosity.inlineCompletions",
											),
										});
								}),
							),
							this.editor.updateOptions({
								inlineCompletionsAccessibilityVerbose: this.C.getValue(
									"accessibility.verbosity.inlineCompletions",
								),
							});
					}
					playAccessibilitySignal(O) {
						this.u.trigger(O);
					}
					M(O) {
						const B = this.z.getContextKeyValue("accessibleViewIsShown"),
							U = this.J.lookupKeybinding("editor.action.accessibleView");
						let z;
						!B &&
							U &&
							this.editor.getOption(
								c.EditorOption.inlineCompletionsAccessibilityVerbose,
							) &&
							(z = (0, v.localize)(1252, null, U.getAriaLabel())),
							(0, i.$oib)(z ? O + ", " + z : O);
					}
					shouldShowHoverAt(O) {
						const B = this.model.get()?.primaryGhostText.get();
						return B
							? B.parts.some((U) =>
									O.containsPosition(new n.$hL(B.lineNumber, U.column)),
								)
							: !1;
					}
					shouldShowHoverAtViewZone(O) {
						return this.t.get()[0]?.ownsViewZone(O) ?? !1;
					}
					hide() {
						(0, d.transaction)((O) => {
							this.model.get()?.stop(O);
						});
					}
				};
				(e.$O1b = N),
					(e.$O1b =
						N =
						M =
							Ne(
								[
									j(1, L.$Li),
									j(2, k.$6j),
									j(3, P.$gj),
									j(4, T.$ek),
									j(5, p.$PBb),
									j(6, o.$k3),
									j(7, I.$Owb),
									j(8, D.$uZ),
									j(9, S.$XK),
								],
								N,
							));
				function A(R, O) {
					const B = (0, d.observableValue)("result", []),
						U = [];
					return (
						O.add(
							(0, d.autorun)((z) => {
								const F = R.read(z);
								(0, d.transaction)((x) => {
									if (F.length !== U.length) {
										U.length = F.length;
										for (let H = 0; H < U.length; H++)
											U[H] || (U[H] = (0, d.observableValue)("item", F[H]));
										B.set([...U], x);
									}
									U.forEach((H, q) => H.set(F[q], x));
								});
							}),
						),
						B
					);
				}
			},
		),
		