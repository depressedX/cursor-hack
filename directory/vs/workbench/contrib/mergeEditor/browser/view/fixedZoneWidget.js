define(de[3083], he([1, 0, 7, 3, 6]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$IZb = void 0);
			class E extends i.$1c {
				static {
					this.a = 0;
				}
				constructor(d, m, r, u, a) {
					super(),
						(this.j = d),
						(this.b = `fixedZoneWidget-${E.a++}`),
						(this.f = (0, t.h)("div.fixed-zone-widget").root),
						(this.g = {
							getId: () => this.b,
							getDomNode: () => this.f,
							getPosition: () => null,
						}),
						(this.c = m.addZone({
							domNode: document.createElement("div"),
							afterLineNumber: r,
							heightInPx: u,
							ordinal: 50001,
							onComputedHeight: (h) => {
								this.f.style.height = `${h}px`;
							},
							onDomNodeTop: (h) => {
								this.f.style.top = `${h}px`;
							},
						})),
						a.push(this.c),
						this.D(
							w.Event.runAndSubscribe(this.j.onDidLayoutChange, () => {
								this.f.style.left = this.j.getLayoutInfo().contentLeft + "px";
							}),
						),
						this.j.addOverlayWidget(this.g),
						this.D({
							dispose: () => {
								this.j.removeOverlayWidget(this.g);
							},
						});
				}
			}
			e.$IZb = E;
		}),
		define(
			de[1740],
			he([1, 0, 7, 182, 136, 3, 77, 38, 4, 1250, 3083]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k1b = e.$j1b = void 0);
				class a extends E.$1c {
					constructor(p) {
						super(),
							(this.c = p),
							this.D(
								this.c.onDidChangeConfiguration((o) => {
									(o.hasChanged(d.EditorOption.fontInfo) ||
										o.hasChanged(d.EditorOption.codeLensFontSize) ||
										o.hasChanged(d.EditorOption.codeLensFontFamily)) &&
										this.f();
								}),
							),
							(this.a =
								"_conflictActionsFactory_" +
								(0, w.$Aj)(this.c.getId()).toString(16)),
							(this.b = (0, t.$Rgb)(
								(0, t.$Hgb)(this.c.getContainerDomNode())
									? this.c.getContainerDomNode()
									: void 0,
								void 0,
								this.B,
							)),
							this.f();
					}
					f() {
						const { codeLensHeight: p, fontSize: o } = this.g(),
							f = this.c.getOption(d.EditorOption.codeLensFontFamily),
							b = this.c.getOption(d.EditorOption.fontInfo),
							s = `--codelens-font-family${this.a}`,
							l = `--codelens-font-features${this.a}`;
						let y = `
		.${this.a} { line-height: ${p}px; font-size: ${o}px; padding-right: ${Math.round(o * 0.5)}px; font-feature-settings: var(${l}) }
		.monaco-workbench .${this.a} span.codicon { line-height: ${p}px; font-size: ${o}px; }
		`;
						f &&
							(y += `${this.a} { font-family: var(${s}), ${d.EDITOR_FONT_DEFAULTS.fontFamily}}`),
							(this.b.textContent = y),
							this.c
								.getContainerDomNode()
								.style?.setProperty(s, f ?? "inherit"),
							this.c
								.getContainerDomNode()
								.style?.setProperty(l, b.fontFeatureSettings);
					}
					g() {
						const p = Math.max(
							1.3,
							this.c.getOption(d.EditorOption.lineHeight) /
								this.c.getOption(d.EditorOption.fontSize),
						);
						let o = this.c.getOption(d.EditorOption.codeLensFontSize);
						return (
							(!o || o < 5) &&
								(o = (this.c.getOption(d.EditorOption.fontSize) * 0.9) | 0),
							{ fontSize: o, codeLensHeight: (o * p) | 0 }
						);
					}
					createWidget(p, o, f, b) {
						const s = this.g();
						return new n(this.c, p, o, s.codeLensHeight + 2, this.a, f, b);
					}
				}
				e.$j1b = a;
				class h {
					constructor(p, o) {
						(this.a = p),
							(this.b = o),
							(this.itemsInput1 = this.c(1)),
							(this.itemsInput2 = this.c(2)),
							(this.resultItems = (0, C.derived)(this, (f) => {
								const b = this.a,
									s = this.b,
									l = b.model.getState(s).read(f),
									y = b.model,
									$ = [];
								if (l.kind === r.ModifiedBaseRangeStateKind.unrecognized)
									$.push({
										text: (0, m.localize)(7650, null),
										tooltip: (0, m.localize)(7651, null),
									});
								else if (l.kind === r.ModifiedBaseRangeStateKind.base)
									$.push({
										text: (0, m.localize)(7652, null),
										tooltip: (0, m.localize)(7653, null),
									});
								else {
									const S = [];
									l.includesInput1 && S.push(y.input1.title),
										l.includesInput2 && S.push(y.input2.title),
										l.kind === r.ModifiedBaseRangeStateKind.both &&
											l.firstInput === 2 &&
											S.reverse(),
										$.push({ text: `${S.join(" + ")}` });
								}
								const v = [];
								return (
									l.includesInput1 &&
										v.push(
											c(
												(0, m.localize)(7654, null, y.input1.title),
												async () => {
													(0, C.transaction)((S) => {
														y.setState(s, l.withInputValue(1, !1), !0, S),
															y.telemetry.reportRemoveInvoked(
																1,
																l.includesInput(2),
															);
													});
												},
												(0, m.localize)(7655, null, y.input1.title),
											),
										),
									l.includesInput2 &&
										v.push(
											c(
												(0, m.localize)(7656, null, y.input2.title),
												async () => {
													(0, C.transaction)((S) => {
														y.setState(s, l.withInputValue(2, !1), !0, S),
															y.telemetry.reportRemoveInvoked(
																2,
																l.includesInput(1),
															);
													});
												},
												(0, m.localize)(7657, null, y.input2.title),
											),
										),
									l.kind === r.ModifiedBaseRangeStateKind.both &&
										l.firstInput === 2 &&
										v.reverse(),
									$.push(...v),
									l.kind === r.ModifiedBaseRangeStateKind.unrecognized &&
										$.push(
											c(
												(0, m.localize)(7658, null),
												async () => {
													(0, C.transaction)((S) => {
														y.setState(s, r.ModifiedBaseRangeState.base, !0, S),
															y.telemetry.reportResetToBaseInvoked();
													});
												},
												(0, m.localize)(7659, null),
											),
										),
									$
								);
							})),
							(this.isEmpty = (0, C.derived)(
								this,
								(f) =>
									this.itemsInput1.read(f).length +
										this.itemsInput2.read(f).length +
										this.resultItems.read(f).length ===
									0,
							)),
							(this.inputIsEmpty = (0, C.derived)(
								this,
								(f) =>
									this.itemsInput1.read(f).length +
										this.itemsInput2.read(f).length ===
									0,
							));
					}
					c(p) {
						return (0, C.derived)((o) => {
							const f = this.a,
								b = this.b;
							if (!f.model.hasBaseRange(b)) return [];
							const s = f.model.getState(b).read(o),
								l = f.model.isHandled(b).read(o),
								y = f.model,
								$ = [],
								v = p === 1 ? f.model.input1 : f.model.input2,
								S = f.showNonConflictingChanges.read(o);
							if (!b.isConflicting && l && !S) return [];
							const I = p === 1 ? 2 : 1;
							if (
								s.kind !== r.ModifiedBaseRangeStateKind.unrecognized &&
								!s.isInputIncluded(p)
							) {
								if (
									!s.isInputIncluded(I) ||
									!this.a.shouldUseAppendInsteadOfAccept.read(o)
								) {
									if (
										($.push(
											c(
												(0, m.localize)(7639, null, v.title),
												async () => {
													(0, C.transaction)((T) => {
														y.setState(b, s.withInputValue(p, !0, !1), p, T),
															y.telemetry.reportAcceptInvoked(
																p,
																s.includesInput(I),
															);
													});
												},
												(0, m.localize)(7640, null, v.title),
											),
										),
										b.canBeCombined)
									) {
										const T = b.isOrderRelevant
											? (0, m.localize)(7641, null, v.title)
											: (0, m.localize)(7642, null);
										$.push(
											c(
												T,
												async () => {
													(0, C.transaction)((P) => {
														y.setState(
															b,
															r.ModifiedBaseRangeState.base
																.withInputValue(p, !0)
																.withInputValue(I, !0, !0),
															!0,
															P,
														),
															y.telemetry.reportSmartCombinationInvoked(
																s.includesInput(I),
															);
													});
												},
												(0, m.localize)(7643, null),
											),
										);
									}
								} else
									$.push(
										c(
											(0, m.localize)(7644, null, v.title),
											async () => {
												(0, C.transaction)((T) => {
													y.setState(b, s.withInputValue(p, !0, !1), p, T),
														y.telemetry.reportAcceptInvoked(
															p,
															s.includesInput(I),
														);
												});
											},
											(0, m.localize)(7645, null, v.title),
										),
									),
										b.canBeCombined &&
											$.push(
												c(
													(0, m.localize)(7646, null, v.title),
													async () => {
														(0, C.transaction)((T) => {
															y.setState(b, s.withInputValue(p, !0, !0), p, T),
																y.telemetry.reportSmartCombinationInvoked(
																	s.includesInput(I),
																);
														});
													},
													(0, m.localize)(7647, null),
												),
											);
								y.isInputHandled(b, p).read(o) ||
									$.push(
										c(
											(0, m.localize)(7648, null),
											async () => {
												(0, C.transaction)((T) => {
													y.setInputHandled(b, p, !0, T);
												});
											},
											(0, m.localize)(7649, null),
										),
									);
							}
							return $;
						});
					}
				}
				e.$k1b = h;
				function c(g, p, o) {
					return { text: g, action: p, tooltip: o };
				}
				class n extends u.$IZb {
					constructor(p, o, f, b, s, l, y) {
						super(p, o, f, b, y),
							(this.m = (0, t.h)("div.merge-editor-conflict-actions").root),
							this.f.appendChild(this.m),
							this.m.classList.add(s),
							this.D(
								(0, C.autorun)(($) => {
									const v = l.read($);
									this.n(v);
								}),
							);
					}
					n(p) {
						const o = [];
						let f = !0;
						for (const b of p) {
							f ? (f = !1) : o.push((0, t.$)("span", void 0, "\xA0|\xA0"));
							const s = (0, i.$Sib)(b.text);
							b.action
								? o.push(
										(0, t.$)(
											"a",
											{
												title: b.tooltip,
												role: "button",
												onclick: () => b.action(),
											},
											...s,
										),
									)
								: o.push((0, t.$)("span", { title: b.tooltip }, ...s));
						}
						(0, t.$hhb)(this.m, ...o);
					}
				}
			},
		),
		define(
			de[3084],
			he([1, 0, 24, 229, 28, 48, 17, 458, 686, 1739]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$PRc = u);
				function u(c) {
					const n = a(
							c.input1Diffs.flatMap((s) => s.rangeMappings),
							c.baseRange.toRange(),
							c.input1Range.toRange(),
						),
						g = a(
							c.input2Diffs.flatMap((s) => s.rangeMappings),
							c.baseRange.toRange(),
							c.input2Range.toRange(),
						),
						p = h(n, g);
					let o = [];
					o.push([
						c.input1Range.startLineNumber - 1,
						c.baseRange.startLineNumber - 1,
						c.input2Range.startLineNumber - 1,
					]);
					function f(s) {
						return s.every((l) => l !== void 0);
					}
					for (const s of p) {
						const l = [
								s.output1Pos?.lineNumber,
								s.inputPos.lineNumber,
								s.output2Pos?.lineNumber,
							],
							y = f(l);
						let $ = !0;
						if (y) {
							const v = !o.some(
								(S) => f(S) && S.some((I, T) => I !== void 0 && I === l[T]),
							);
							v &&
								(o = o.filter(
									(S) => !S.some((I, T) => I !== void 0 && I === l[T]),
								)),
								($ = v);
						} else
							$ = !o.some((S) => S.some((I, T) => I !== void 0 && I === l[T]));
						$
							? o.push(l)
							: s.length.isGreaterThan(new d.$tL(1, 0)) &&
								o.push([
									s.output1Pos ? s.output1Pos.lineNumber + 1 : void 0,
									s.inputPos.lineNumber + 1,
									s.output2Pos ? s.output2Pos.lineNumber + 1 : void 0,
								]);
					}
					const b = [
						c.input1Range.endLineNumberExclusive,
						c.baseRange.endLineNumberExclusive,
						c.input2Range.endLineNumberExclusive,
					];
					return (
						(o = o.filter((s) => s.every((l, y) => l !== b[y]))),
						o.push(b),
						(0, i.$nd)(
							() =>
								(0, i.$od)(o.map((s) => s[0]).filter(w.$tg), (s, l) => s < l) &&
								(0, i.$od)(
									o.map((s) => s[1]).filter(w.$tg),
									(s, l) => s <= l,
								) &&
								(0, i.$od)(o.map((s) => s[2]).filter(w.$tg), (s, l) => s < l) &&
								o.every((s) => s.filter(w.$tg).length >= 2),
						),
						o
					);
				}
				function a(c, n, g) {
					const p = [];
					let o = n.getStartPosition(),
						f = g.getStartPosition();
					for (const s of c) {
						const l = new m.$yZb(
							C.$iL.fromPositions(o, s.inputRange.getStartPosition()),
							C.$iL.fromPositions(f, s.outputRange.getStartPosition()),
						);
						(0, i.$nd)(() =>
							(0, r.$qZb)(l.inputRange).equals((0, r.$qZb)(l.outputRange)),
						),
							l.inputRange.isEmpty() || p.push(l),
							(o = s.inputRange.getEndPosition()),
							(f = s.outputRange.getEndPosition());
					}
					const b = new m.$yZb(
						C.$iL.fromPositions(o, n.getEndPosition()),
						C.$iL.fromPositions(f, g.getEndPosition()),
					);
					return (
						(0, i.$nd)(() =>
							(0, r.$qZb)(b.inputRange).equals((0, r.$qZb)(b.outputRange)),
						),
						b.inputRange.isEmpty() || p.push(b),
						p
					);
				}
				function h(c, n) {
					const g = [],
						p = [];
					for (const [b, s] of [
						[0, c],
						[1, n],
					])
						for (const l of s)
							p.push({
								input: b,
								start: !0,
								inputPos: l.inputRange.getStartPosition(),
								outputPos: l.outputRange.getStartPosition(),
							}),
								p.push({
									input: b,
									start: !1,
									inputPos: l.inputRange.getEndPosition(),
									outputPos: l.outputRange.getEndPosition(),
								});
					p.sort((0, t.$0b)((b) => b.inputPos, E.$hL.compare));
					const o = [void 0, void 0];
					let f;
					for (const b of p) {
						if (f && o.some((s) => !!s)) {
							const s = (0, r.$rZb)(f, b.inputPos);
							s.isZero() ||
								(g.push({
									inputPos: f,
									length: s,
									output1Pos: o[0],
									output2Pos: o[1],
								}),
								o[0] && (o[0] = (0, r.$sZb)(o[0], s)),
								o[1] && (o[1] = (0, r.$sZb)(o[1], s)));
						}
						(o[b.input] = b.start ? b.outputPos : void 0), (f = b.inputPos);
					}
					return g;
				}
			},
		),
		define(
			de[3085],
			he([1, 0, 3, 77, 98, 686, 1132]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ORc = void 0);
				class d extends t.$1c {
					get a() {
						return this.h.get()?.model;
					}
					get f() {
						return this.r.get().kind === "columns";
					}
					get g() {
						return this.r.get().kind === "mixed" && !this.r.get().showBaseAtTop;
					}
					constructor(r, u, a, h, c, n) {
						super(),
							(this.h = r),
							(this.j = u),
							(this.m = a),
							(this.n = h),
							(this.q = c),
							(this.r = n),
							(this.b = new C.$Lpb());
						const g = (this.updateScrolling = () => {
							if (!this.a) return;
							if (
								(this.m.editor.setScrollTop(
									this.j.editor.getScrollTop(),
									w.ScrollType.Immediate,
								),
								this.f)
							)
								this.q.editor.setScrollTop(
									this.j.editor.getScrollTop(),
									w.ScrollType.Immediate,
								);
							else {
								const o = this.a.input1ResultMapping.get();
								this.s(this.j.editor, this.q.editor, o);
							}
							const p = this.n.get();
							if (p)
								if (this.g)
									this.n
										.get()
										?.editor.setScrollTop(
											this.j.editor.getScrollTop(),
											w.ScrollType.Immediate,
										);
								else {
									const o = new E.$vZb(
										this.a.baseInput1Diffs.get(),
										-1,
									).reverse();
									this.s(this.j.editor, p.editor, o);
								}
						});
						this.B.add(
							this.j.editor.onDidScrollChange(
								this.b.makeExclusiveOrSkip((p) => {
									p.scrollTopChanged && g(),
										p.scrollLeftChanged &&
											(this.n
												.get()
												?.editor.setScrollLeft(
													p.scrollLeft,
													w.ScrollType.Immediate,
												),
											this.m.editor.setScrollLeft(
												p.scrollLeft,
												w.ScrollType.Immediate,
											),
											this.q.editor.setScrollLeft(
												p.scrollLeft,
												w.ScrollType.Immediate,
											));
								}),
							),
						),
							this.B.add(
								this.m.editor.onDidScrollChange(
									this.b.makeExclusiveOrSkip((p) => {
										if (this.a) {
											if (p.scrollTopChanged) {
												if (
													(this.j.editor.setScrollTop(
														p.scrollTop,
														w.ScrollType.Immediate,
													),
													this.f)
												)
													this.q.editor.setScrollTop(
														this.m.editor.getScrollTop(),
														w.ScrollType.Immediate,
													);
												else {
													const f = this.a.input2ResultMapping.get();
													this.s(this.m.editor, this.q.editor, f);
												}
												const o = this.n.get();
												if (o && this.a)
													if (this.g)
														this.n
															.get()
															?.editor.setScrollTop(
																p.scrollTop,
																w.ScrollType.Immediate,
															);
													else {
														const f = new E.$vZb(
															this.a.baseInput2Diffs.get(),
															-1,
														).reverse();
														this.s(this.m.editor, o.editor, f);
													}
											}
											p.scrollLeftChanged &&
												(this.n
													.get()
													?.editor.setScrollLeft(
														p.scrollLeft,
														w.ScrollType.Immediate,
													),
												this.j.editor.setScrollLeft(
													p.scrollLeft,
													w.ScrollType.Immediate,
												),
												this.q.editor.setScrollLeft(
													p.scrollLeft,
													w.ScrollType.Immediate,
												));
										}
									}),
								),
							),
							this.B.add(
								this.q.editor.onDidScrollChange(
									this.b.makeExclusiveOrSkip((p) => {
										if (p.scrollTopChanged) {
											if (this.f)
												this.j.editor.setScrollTop(
													p.scrollTop,
													w.ScrollType.Immediate,
												),
													this.m.editor.setScrollTop(
														p.scrollTop,
														w.ScrollType.Immediate,
													);
											else {
												const b = this.a?.resultInput1Mapping.get();
												this.s(this.q.editor, this.j.editor, b);
												const s = this.a?.resultInput2Mapping.get();
												this.s(this.q.editor, this.m.editor, s);
											}
											const o = this.a?.resultBaseMapping.get(),
												f = this.n.get();
											f && this.a && this.s(this.q.editor, f.editor, o);
										}
										p.scrollLeftChanged &&
											(this.n
												.get()
												?.editor?.setScrollLeft(
													p.scrollLeft,
													w.ScrollType.Immediate,
												),
											this.j.editor.setScrollLeft(
												p.scrollLeft,
												w.ScrollType.Immediate,
											),
											this.m.editor.setScrollLeft(
												p.scrollLeft,
												w.ScrollType.Immediate,
											));
									}),
								),
							),
							this.B.add(
								(0, i.autorunWithStore)((p, o) => {
									const f = this.n.read(p);
									f &&
										o.add(
											f.editor.onDidScrollChange(
												this.b.makeExclusiveOrSkip((b) => {
													if (b.scrollTopChanged) {
														if (!this.a) return;
														if (this.g)
															this.j.editor.setScrollTop(
																b.scrollTop,
																w.ScrollType.Immediate,
															),
																this.m.editor.setScrollTop(
																	b.scrollTop,
																	w.ScrollType.Immediate,
																);
														else {
															const l = new E.$vZb(
																this.a.baseInput1Diffs.get(),
																-1,
															);
															this.s(f.editor, this.j.editor, l);
															const y = new E.$vZb(
																this.a.baseInput2Diffs.get(),
																-1,
															);
															this.s(f.editor, this.m.editor, y);
														}
														const s = this.a?.baseResultMapping.get();
														this.s(f.editor, this.q.editor, s);
													}
													b.scrollLeftChanged &&
														(this.q.editor.setScrollLeft(
															b.scrollLeft,
															w.ScrollType.Immediate,
														),
														this.j.editor.setScrollLeft(
															b.scrollLeft,
															w.ScrollType.Immediate,
														),
														this.m.editor.setScrollLeft(
															b.scrollLeft,
															w.ScrollType.Immediate,
														));
												}),
											),
										);
								}),
							);
					}
					s(r, u, a) {
						if (!a) return;
						const h = r.getVisibleRanges();
						if (h.length === 0) return;
						const c = h[0].startLineNumber - 1,
							n = a.project(c),
							g = n.inputRange,
							p = n.outputRange,
							o = u.getTopForLineNumber(p.startLineNumber),
							f = u.getTopForLineNumber(p.endLineNumberExclusive),
							b = r.getTopForLineNumber(g.startLineNumber),
							s = r.getTopForLineNumber(g.endLineNumberExclusive),
							l = Math.min((r.getScrollTop() - b) / (s - b), 1),
							y = o + (f - o) * l;
						u.setScrollTop(y, w.ScrollType.Immediate);
					}
				}
				e.$ORc = d;
			},
		),
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
		define(
			de[3087],
			he([1, 0, 7, 24, 507, 508, 1740, 3084]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SRc = e.$RRc = e.$QRc = void 0);
				class m {
					constructor(g, p, o) {
						(this.e = g),
							(this.f = p),
							(this.g = o),
							(this.b = new C.$j1b(this.e)),
							(this.c = new C.$j1b(this.f)),
							(this.d = new C.$j1b(this.g));
					}
					computeViewZones(g, p, o) {
						let f = 0,
							b = 0,
							s = 0,
							l = 0;
						const y = [],
							$ = [],
							v = [],
							S = [],
							I = p.model,
							T = I.baseResultDiffs.read(g),
							P = (0, E.join)(I.modifiedBaseRanges.read(g), T, (N, A) =>
								N.baseRange.touches(A.inputRange)
									? i.CompareResult.neitherLessOrGreaterThan
									: w.$bZb.compareByStart(N.baseRange, A.inputRange),
							),
							k = o.codeLensesVisible,
							L = o.showNonConflictingChanges;
						let D, M;
						for (const N of P) {
							if (
								k &&
								N.left &&
								(N.left.isConflicting || L || !I.isHandled(N.left).read(g))
							) {
								const O = new C.$k1b(p, N.left);
								(o.shouldAlignResult || !O.inputIsEmpty.read(g)) &&
									(y.push(
										new c(
											this.b,
											N.left.input1Range.startLineNumber - 1,
											O.itemsInput1,
										),
									),
									$.push(
										new c(
											this.c,
											N.left.input2Range.startLineNumber - 1,
											O.itemsInput2,
										),
									),
									o.shouldAlignBase &&
										v.push(new h(N.left.baseRange.startLineNumber - 1, 16)));
								const B =
									N.left.baseRange.startLineNumber +
									(M?.resultingDeltaFromOriginalToModified ?? 0) -
									1;
								S.push(new c(this.d, B, O.resultItems));
							}
							const A = (0, i.$Tb)(N.rights);
							A && (M = A);
							let R;
							N.left
								? ((R = (0, d.$PRc)(N.left).map((O) => ({
										input1Line: O[0],
										baseLine: O[1],
										input2Line: O[2],
										resultLine: void 0,
									}))),
									(D = N.left),
									(R[R.length - 1].resultLine =
										N.left.baseRange.endLineNumberExclusive +
										(M ? M.resultingDeltaFromOriginalToModified : 0)))
								: (R = [
										{
											baseLine: A.inputRange.endLineNumberExclusive,
											input1Line:
												A.inputRange.endLineNumberExclusive +
												(D
													? D.input1Range.endLineNumberExclusive -
														D.baseRange.endLineNumberExclusive
													: 0),
											input2Line:
												A.inputRange.endLineNumberExclusive +
												(D
													? D.input2Range.endLineNumberExclusive -
														D.baseRange.endLineNumberExclusive
													: 0),
											resultLine: A.outputRange.endLineNumberExclusive,
										},
									]);
							for (const {
								input1Line: O,
								baseLine: B,
								input2Line: U,
								resultLine: z,
							} of R) {
								if (!o.shouldAlignBase && (O === void 0 || U === void 0))
									continue;
								const F = O !== void 0 ? O + f : -1,
									x = U !== void 0 ? U + b : -1,
									H = B + s,
									q = z !== void 0 ? z + l : -1,
									V = Math.max(
										o.shouldAlignBase ? H : 0,
										F,
										x,
										o.shouldAlignResult ? q : 0,
									);
								if (O !== void 0) {
									const G = V - F;
									G > 0 && (y.push(new a(O - 1, G)), (f += G));
								}
								if (U !== void 0) {
									const G = V - x;
									G > 0 && ($.push(new a(U - 1, G)), (b += G));
								}
								if (o.shouldAlignBase) {
									const G = V - H;
									G > 0 && (v.push(new a(B - 1, G)), (s += G));
								}
								if (o.shouldAlignResult && z !== void 0) {
									const G = V - q;
									G > 0 && (S.push(new a(z - 1, G)), (l += G));
								}
							}
						}
						return new r(y, $, v, S);
					}
				}
				e.$QRc = m;
				class r {
					constructor(g, p, o, f) {
						(this.input1ViewZones = g),
							(this.input2ViewZones = p),
							(this.baseViewZones = o),
							(this.resultViewZones = f);
					}
				}
				e.$RRc = r;
				class u {}
				e.$SRc = u;
				class a extends u {
					constructor(g, p) {
						super(), (this.b = g), (this.c = p);
					}
					create(g, p, o) {
						p.push(
							g.addZone({
								afterLineNumber: this.b,
								heightInLines: this.c,
								domNode: (0, t.$)("div.diagonal-fill"),
							}),
						);
					}
				}
				class h extends u {
					constructor(g, p) {
						super(), (this.b = g), (this.c = p);
					}
					create(g, p, o) {
						p.push(
							g.addZone({
								afterLineNumber: this.b,
								heightInPx: this.c,
								domNode: (0, t.$)("div.conflict-actions-placeholder"),
							}),
						);
					}
				}
				class c extends u {
					constructor(g, p, o) {
						super(), (this.b = g), (this.c = p), (this.d = o);
					}
					create(g, p, o) {
						o.add(this.b.createWidget(g, this.c, this.d, p));
					}
				}
			},
		),
		