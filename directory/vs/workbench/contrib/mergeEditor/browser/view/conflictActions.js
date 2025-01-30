import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../base/common/hash.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../editor/common/config/editorOptions.js';
import '../../../../../nls.js';
import '../model/modifiedBaseRange.js';
import './fixedZoneWidget.js';
define(
			de[1740],
			he([1, 0, 7, 182, 136, 3, 77, 38, 4, 1250, 3083]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*iconLabels*/,
 w /*hash*/,
 E /*lifecycle*/,
 C /*observable*/,
 d /*editorOptions*/,
 m /*nls*/,
 r /*modifiedBaseRange*/,
 u /*fixedZoneWidget*/) {
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
		