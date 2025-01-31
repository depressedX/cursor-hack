import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/registry/common/platform.js';
define(
			de[1236],
			he([1, 0, 50, 3, 12, 56, 46, 11, 8, 49, 116, 5, 30]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*lifecycle*/,
 w /*platform*/,
 E /*editorBrowser*/,
 C /*editorExtensions*/,
 d /*actions*/,
 m /*contextkey*/,
 r /*contextView*/,
 u /*editor*/,
 a /*instantiation*/,
 h /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bGc = e.$aGc = e.$_Fc = void 0);
				class c {
					constructor() {
						this.c = new Set();
					}
					registerGutterActionsGenerator(p) {
						return (
							this.c.add(p),
							{
								dispose: () => {
									this.c.delete(p);
								},
							}
						);
					}
					getGutterActionsGenerators() {
						return Array.from(this.c.values());
					}
				}
				(e.$_Fc = c),
					h.$Io.add("gutterActionsRegistry", new c()),
					(e.$aGc = h.$Io.as("gutterActionsRegistry"));
				let n = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.editorLineNumberContextMenu";
					}
					constructor(p, o, f, b, s) {
						super(),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							this.D(this.c.onMouseDown((l) => this.m(l, !1)));
					}
					show(p) {
						this.m(p, !0);
					}
					m(p, o) {
						const f = this.c.getModel();
						if (
							(!p.event.rightButton &&
								!(w.$m && p.event.leftButton && p.event.ctrlKey) &&
								!o) ||
							(p.target.type !== E.MouseTargetType.GUTTER_LINE_NUMBERS &&
								p.target.type !== E.MouseTargetType.GUTTER_GLYPH_MARGIN) ||
							!p.target.position ||
							!f
						)
							return;
						const b = p.target.position.lineNumber,
							s = this.h.createOverlay([["editorLineNumber", b]]),
							l = this.g.createMenu(d.$XX.EditorLineNumberContext, s),
							y = [];
						this.j.invokeFunction(($) => {
							for (const S of e.$aGc.getGutterActionsGenerators()) {
								const I = new Map();
								S(
									{ lineNumber: b, editor: this.c, accessor: $ },
									{
										push: (T, P = "navigation") => {
											const k = I.get(P) ?? [];
											k.push(T), I.set(P, k);
										},
									},
								);
								for (const [T, P] of I.entries()) y.push([T, P]);
							}
							y.sort((S, I) => S[0].localeCompare(I[0]));
							const v = l.getActions({
								arg: { lineNumber: b, uri: f.uri },
								shouldForwardArgs: !0,
							});
							if (
								(y.push(...v),
								p.target.type === E.MouseTargetType.GUTTER_LINE_NUMBERS)
							) {
								const S = this.c.getSelections(),
									I = {
										startLineNumber: b,
										endLineNumber: b,
										startColumn: 1,
										endColumn: f.getLineLength(b) + 1,
									};
								S?.some((P) => !P.isEmpty() && P.intersectRanges(I) !== null) ||
									this.c.setSelection(
										I,
										u.TextEditorSelectionSource.PROGRAMMATIC,
									);
							}
							this.f.showContextMenu({
								getAnchor: () => p.event,
								getActions: () => t.$tj.join(...y.map((S) => S[1])),
								onHide: () => l.dispose(),
							});
						});
					}
				};
				(e.$bGc = n),
					(e.$bGc = n =
						Ne([j(1, r.$Xxb), j(2, d.$YX), j(3, m.$6j), j(4, a.$Li)], n)),
					(0, C.$qtb)(
						n.ID,
						n,
						C.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		)
