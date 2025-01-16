define(
			de[3086],
			he([1, 0, 214, 3, 77, 17, 98, 4, 10, 40, 507, 326]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i1b = void 0);
				let h = class extends i.$1c {
					constructor(g, p, o, f, b, s, l, y) {
						super(),
							(this.model = g),
							(this.inputCodeEditorView1 = p),
							(this.inputCodeEditorView2 = o),
							(this.resultCodeEditorView = f),
							(this.baseCodeEditorView = b),
							(this.showNonConflictingChanges = s),
							(this.c = l),
							(this.f = y),
							(this.a = (0, w.observableValue)(this, {
								range: void 0,
								counter: 0,
							})),
							(this.b = this.D(new c(this.model.resultTextModel))),
							(this.shouldUseAppendInsteadOfAccept = (0, a.$Mwb)(
								"mergeEditor.shouldUseAppendInsteadOfAccept",
								!1,
								this.c,
							)),
							(this.g = 0),
							(this.h = (0, w.derivedObservableWithWritableCache)(
								this,
								($, v) => {
									const I = [
										this.inputCodeEditorView1,
										this.inputCodeEditorView2,
										this.resultCodeEditorView,
										this.baseCodeEditorView.read($),
									].find((T) => T && T.isFocused.read($));
									return I
										? { view: I, counter: this.g++ }
										: v || { view: void 0, counter: this.g++ };
								},
							)),
							(this.baseShowDiffAgainst = (0, w.derived)(this, ($) => {
								const v = this.h.read($);
								if (v.view === this.inputCodeEditorView1) return 1;
								if (v.view === this.inputCodeEditorView2) return 2;
							})),
							(this.selectionInBase = (0, w.derived)(this, ($) => {
								const v = this.h.read($).view;
								return v
									? {
											rangesInBase: (v.selection.read($) || []).map((T) =>
												v === this.inputCodeEditorView1
													? this.model.translateInputRangeToBase(1, T)
													: v === this.inputCodeEditorView2
														? this.model.translateInputRangeToBase(2, T)
														: v === this.resultCodeEditorView
															? this.model.translateResultRangeToBase(T)
															: (v === this.baseCodeEditorView.read($), T),
											),
											sourceEditor: v,
										}
									: void 0;
							})),
							(this.activeModifiedBaseRange = (0, w.derived)(this, ($) => {
								const v = this.h.read($),
									S = this.a.read($);
								if (S.counter > v.counter) return S.range;
								if (!v.view) return;
								const I = v.view.cursorLineNumber.read($);
								return I
									? this.model.modifiedBaseRanges.read($).find((P) => {
											const k = this.j(v.view, P, $);
											return k.isEmpty
												? k.startLineNumber === I
												: k.contains(I);
										})
									: void 0;
							})),
							this.D(
								f.editor.onDidChangeModelContent(($) => {
									if (
										this.model.isApplyingEditInResult ||
										$.isRedoing ||
										$.isUndoing
									)
										return;
									const v = [];
									for (const I of $.changes) {
										const T = this.model.translateResultRangeToBase(
												E.$iL.lift(I.range),
											),
											P = this.model.findModifiedBaseRangesInRange(
												new u.$bZb(
													T.startLineNumber,
													T.endLineNumber - T.startLineNumber,
												),
											);
										P.length === 1 &&
											(this.model.isHandled(P[0]).get() || v.push(P[0]));
									}
									if (v.length === 0) return;
									const S = {
										model: this.model,
										redo() {
											(0, w.transaction)((I) => {
												for (const T of v) this.model.setHandled(T, !0, I);
											});
										},
										undo() {
											(0, w.transaction)((I) => {
												for (const T of v) this.model.setHandled(T, !1, I);
											});
										},
									};
									this.b.pushAttachedHistoryElement(S), S.redo();
								}),
							);
					}
					j(g, p, o) {
						if (g === this.resultCodeEditorView)
							return this.model.getLineRangeInResult(p.baseRange, o);
						if (g === this.baseCodeEditorView.get()) return p.baseRange;
						{
							const f = g === this.inputCodeEditorView1 ? 1 : 2;
							return p.getInputRange(f);
						}
					}
					setActiveModifiedBaseRange(g, p) {
						this.a.set({ range: g, counter: this.g++ }, p);
					}
					setState(g, p, o, f) {
						this.a.set({ range: g, counter: this.g++ }, o),
							this.model.setState(g, p, f, o),
							this.h.clearCache(o);
					}
					n(g) {
						let p = this.h.get().view;
						p || (p = this.resultCodeEditorView);
						const o = p.editor.getPosition()?.lineNumber;
						if (o === void 0) return;
						const f = g(p, o);
						if (f) {
							const b = this.j(p, f, void 0);
							p.editor.focus();
							let s = b.startLineNumber,
								l = b.endLineNumberExclusive;
							b.startLineNumber > p.editor.getModel().getLineCount() &&
								((0, w.transaction)((y) => {
									this.setActiveModifiedBaseRange(f, y);
								}),
								(s = l = p.editor.getModel().getLineCount())),
								p.editor.setPosition({
									lineNumber: s,
									column: p.editor
										.getModel()
										.getLineFirstNonWhitespaceColumn(s),
								}),
								p.editor.revealLinesNearTop(s, l, C.ScrollType.Smooth);
						}
					}
					goToNextModifiedBaseRange(g) {
						this.n(
							(p, o) =>
								this.model.modifiedBaseRanges
									.get()
									.find(
										(f) => g(f) && this.j(p, f, void 0).startLineNumber > o,
									) || this.model.modifiedBaseRanges.get().find((f) => g(f)),
						);
					}
					goToPreviousModifiedBaseRange(g) {
						this.n(
							(p, o) =>
								(0, t.$jb)(
									this.model.modifiedBaseRanges.get(),
									(f) =>
										g(f) && this.j(p, f, void 0).endLineNumberExclusive < o,
								) ||
								(0, t.$jb)(this.model.modifiedBaseRanges.get(), (f) => g(f)),
						);
					}
					toggleActiveConflict(g) {
						const p = this.activeModifiedBaseRange.get();
						if (!p) {
							this.f.error((0, d.localize)(7680, null));
							return;
						}
						(0, w.transaction)((o) => {
							this.setState(p, this.model.getState(p).get().toggle(g), o, g);
						});
					}
					acceptAll(g) {
						(0, w.transaction)((p) => {
							for (const o of this.model.modifiedBaseRanges.get())
								this.setState(
									o,
									this.model.getState(o).get().withInputValue(g, !0),
									p,
									g,
								);
						});
					}
				};
				(e.$i1b = h), (e.$i1b = h = Ne([j(6, m.$gj), j(7, r.$4N)], h));
				class c extends i.$1c {
					constructor(g) {
						super(),
							(this.c = g),
							(this.a = []),
							(this.b = this.c.getAlternativeVersionId()),
							this.D(
								g.onDidChangeContent((p) => {
									const o = g.getAlternativeVersionId();
									if (p.isRedoing)
										for (const f of this.a)
											this.b < f.altId && f.altId <= o && f.element.redo();
									else if (p.isUndoing)
										for (let f = this.a.length - 1; f >= 0; f--) {
											const b = this.a[f];
											o < b.altId && b.altId <= this.b && b.element.undo();
										}
									else
										for (
											;
											this.a.length > 0 &&
											this.a[this.a.length - 1].altId > this.b;
										)
											this.a.pop();
									this.b = o;
								}),
							);
					}
					pushAttachedHistoryElement(g) {
						this.a.push({
							altId: this.c.getAlternativeVersionId(),
							element: g,
						});
					}
				}
			},
		),
		