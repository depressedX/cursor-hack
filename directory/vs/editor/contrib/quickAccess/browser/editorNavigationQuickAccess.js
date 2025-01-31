import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/functional.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/editorCommon.js';
import '../../../common/model.js';
import '../../../common/core/editorColorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../platform/editor/common/editor.js';
define(
			de[1665],
			he([1, 0, 288, 3, 56, 98, 64, 307, 35, 127, 116]),
			function (ce /*require*/,
 e /*exports*/,
 t /*functional*/,
 i /*lifecycle*/,
 w /*editorBrowser*/,
 E /*editorCommon*/,
 C /*model*/,
 d /*editorColorRegistry*/,
 m /*themeService*/,
 r /*aria*/,
 u /*editor*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l9b = void 0);
				class a {
					constructor(c) {
						(this.a = c), (this.j = void 0);
					}
					provide(c, n, g) {
						const p = new i.$Zc();
						(c.canAcceptInBackground = !!this.a?.canAcceptInBackground),
							(c.matchOnLabel =
								c.matchOnDescription =
								c.matchOnDetail =
								c.sortByLabel =
									!1);
						const o = p.add(new i.$2c());
						return (
							(o.value = this.b(c, n, g)),
							p.add(
								this.h(() => {
									(o.value = void 0), (o.value = this.b(c, n));
								}),
							),
							p
						);
					}
					b(c, n, g) {
						const p = new i.$Zc(),
							o = this.i;
						if (o && this.c(o)) {
							const f = { editor: o },
								b = (0, w.$btb)(o);
							if (b) {
								let s = o.saveViewState() ?? void 0;
								p.add(
									b.onDidChangeCursorPosition(() => {
										s = o.saveViewState() ?? void 0;
									}),
								),
									(f.restoreViewState = () => {
										s && o === this.i && o.restoreViewState(s);
									}),
									p.add(
										(0, t.$hb)(n.onCancellationRequested)(() =>
											f.restoreViewState?.(),
										),
									);
							}
							p.add((0, i.$Yc)(() => this.clearDecorations(o))),
								p.add(this.d(f, c, n, g));
						} else p.add(this.e(c, n));
						return p;
					}
					c(c) {
						return !0;
					}
					f({ editor: c }, n) {
						c.setSelection(n.range, u.TextEditorSelectionSource.JUMP),
							c.revealRangeInCenter(n.range, E.ScrollType.Smooth),
							n.preserveFocus || c.focus();
						const g = c.getModel();
						g &&
							"getLineContent" in g &&
							(0, r.$pib)(`${g.getLineContent(n.range.startLineNumber)}`);
					}
					g(c) {
						return (0, w.$$sb)(c) ? c.getModel()?.modified : c.getModel();
					}
					addDecorations(c, n) {
						c.changeDecorations((g) => {
							const p = [];
							this.j &&
								(p.push(this.j.overviewRulerDecorationId),
								p.push(this.j.rangeHighlightId),
								(this.j = void 0));
							const o = [
									{
										range: n,
										options: {
											description: "quick-access-range-highlight",
											className: "rangeHighlight",
											isWholeLine: !0,
										},
									},
									{
										range: n,
										options: {
											description: "quick-access-range-highlight-overview",
											overviewRuler: {
												color: (0, m.$jP)(d.$8T),
												position: C.OverviewRulerLane.Full,
											},
										},
									},
								],
								[f, b] = g.deltaDecorations(p, o);
							this.j = { rangeHighlightId: f, overviewRulerDecorationId: b };
						});
					}
					clearDecorations(c) {
						const n = this.j;
						n &&
							(c.changeDecorations((g) => {
								g.deltaDecorations(
									[n.overviewRulerDecorationId, n.rangeHighlightId],
									[],
								);
							}),
							(this.j = void 0));
					}
				}
				e.$l9b = a;
			},
		)
