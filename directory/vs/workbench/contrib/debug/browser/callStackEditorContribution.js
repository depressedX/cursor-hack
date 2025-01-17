import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uint.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model.js';
import '../../../../nls.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import './debugIcons.js';
import '../common/debug.js';
import '../../../../css!vs/workbench/contrib/debug/browser/media/callStackEditorContribution.js';
define(
			de[796],
			he([1, 0, 24, 6, 3, 210, 17, 64, 4, 34, 51, 35, 26, 68, 352, 112, 2426]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iGc = e.$gGc = e.$fGc = e.$eGc = e.$dGc = e.$cGc = void 0),
					(e.$hGc = s),
					(e.$cGc = (0, u.$wP)(
						"editor.stackFrameHighlightBackground",
						{
							dark: "#ffff0033",
							light: "#ffff6673",
							hcDark: "#ffff0033",
							hcLight: "#ffff6673",
						},
						(0, m.localize)(5263, null),
					)),
					(e.$dGc = (0, u.$wP)(
						"editor.focusedStackFrameHighlightBackground",
						{
							dark: "#7abd7a4d",
							light: "#cee7ce73",
							hcDark: "#7abd7a4d",
							hcLight: "#cee7ce73",
						},
						(0, m.localize)(5264, null),
					));
				const p = d.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					o = {
						description: "top-stack-frame-margin",
						glyphMarginClassName: h.ThemeIcon.asClassName(n.$dKb),
						glyphMargin: { position: d.GlyphMarginLane.Right },
						zIndex: 9999,
						stickiness: p,
						overviewRuler: {
							position: d.OverviewRulerLane.Full,
							color: (0, a.$jP)(e.$cGc),
						},
					},
					f = {
						description: "focused-stack-frame-margin",
						glyphMarginClassName: h.ThemeIcon.asClassName(n.$eKb),
						glyphMargin: { position: d.GlyphMarginLane.Right },
						zIndex: 9999,
						stickiness: p,
						overviewRuler: {
							position: d.OverviewRulerLane.Full,
							color: (0, a.$jP)(e.$dGc),
						},
					};
				(e.$eGc = {
					description: "top-stack-frame-decoration",
					isWholeLine: !0,
					className: "debug-top-stack-frame-line",
					stickiness: p,
				}),
					(e.$fGc = {
						description: "focused-stack-frame-decoration",
						isWholeLine: !0,
						className: "debug-focused-stack-frame-line",
						stickiness: p,
					});
				const b = (y) => ({
					description: "top-stack-frame-inline-decoration",
					before: {
						content: "\uEB8B",
						inlineClassName: y
							? "debug-top-stack-frame-column start-of-line"
							: "debug-top-stack-frame-column",
						inlineClassNameAffectsLetterSpacing: !0,
					},
				});
				e.$gGc = b;
				function s(y, $, v) {
					const S = [],
						I = new C.$iL(
							y.range.startLineNumber,
							y.range.startColumn,
							y.range.startLineNumber,
							E.Constants.MAX_SAFE_SMALL_INTEGER,
						),
						T = new C.$iL(
							y.range.startLineNumber,
							y.range.startColumn,
							y.range.startLineNumber,
							y.range.startColumn + 1,
						),
						P = y.thread.getTopStackFrame();
					return (
						y.getId() === P?.getId()
							? ($ && S.push({ options: o, range: T }),
								S.push({ options: e.$eGc, range: I }),
								y.range.startColumn > 1 &&
									S.push({ options: (0, e.$gGc)(v), range: I }))
							: ($ && S.push({ options: f, range: T }),
								S.push({ options: e.$fGc, range: I })),
						S
					);
				}
				let l = class extends w.$1c {
					constructor($, v, S, I) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.a = this.b.createDecorationsCollection());
						const T = () => this.a.set(this.h());
						this.D(
							i.Event.any(
								this.c.getViewModel().onDidFocusStackFrame,
								this.c.getModel().onDidChangeCallStack,
							)(() => {
								T();
							}),
						),
							this.D(
								this.b.onDidChangeModel((P) => {
									P.newModelUrl && T();
								}),
							),
							T();
					}
					h() {
						const $ = this.b;
						if (!$.hasModel()) return [];
						const v = this.c.getViewModel().focusedStackFrame,
							S = [];
						return (
							this.c
								.getModel()
								.getSessions()
								.forEach((I) => {
									const T = I === v?.thread.session;
									I.getAllThreads().forEach((P) => {
										if (P.stopped) {
											const k = P.getCallStack(),
												L = [];
											k.length > 0 &&
												(v && !v.equals(k[0]) && L.push(v), L.push(k[0])),
												L.forEach((D) => {
													if (
														D &&
														this.f.extUri.isEqual(
															D.source.uri,
															$.getModel()?.uri,
														)
													) {
														if (
															D.range.startLineNumber >
																$.getModel()?.getLineCount() ||
															D.range.startLineNumber < 1
														) {
															this.g.warn(
																`CallStackEditorContribution: invalid stack frame line number: ${D.range.startLineNumber}`,
															);
															return;
														}
														const M =
															$.getModel().getLineFirstNonWhitespaceColumn(
																D.range.startLineNumber,
															) >= D.range.startColumn;
														S.push(...s(D, T, M));
													}
												});
										}
									});
								}),
							(0, t.$Qb)(
								S,
								(I) =>
									`${I.options.className} ${I.options.glyphMarginClassName} ${I.range.startLineNumber} ${I.range.startColumn}`,
							)
						);
					}
					dispose() {
						super.dispose(), this.a.clear();
					}
				};
				(e.$iGc = l),
					(e.$iGc = l = Ne([j(1, g.$75), j(2, c.$Vl), j(3, r.$ik)], l));
			},
		),
		