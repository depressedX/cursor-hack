import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/codeRenderers/diffCodeRender.js';
define(
			de[4180],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 9, 309, 36, 27, 2513]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nzc = p);
				const c = (0, t.template)("<div>"),
					n = (0, t.template)('<div class="diff-code-render">');
				function g() {
					let o = "abcdefghijklmnopqrstuvwxyz",
						f = "";
					for (let b = 0; b < 10; b++)
						f += o.charAt(Math.floor(Math.random() * o.length));
					return f;
				}
				function p(o) {
					const f = (0, a.$odc)(),
						[b, s] = (0, m.createSignal)(null),
						[l, y] = (0, m.createSignal)(null),
						$ = (() => {
							const v = c();
							return (
								(0, d.use)(y, v),
								v.style.setProperty("width", "100%"),
								v.style.setProperty("height", "100%"),
								v.style.setProperty("box-sizing", "border-box"),
								v
							);
						})();
					return (
						(0, m.createEffect)(() => {
							if (!b() && l()) {
								const v = f.instantiationService.createInstance(
										u.$3yb,
										l(),
										{
											renderSideBySide: !1,
											readOnly: !0,
											stickyScroll: { enabled: !1 },
											renderIndicators: !1,
											renderMarginRevertIcon: !1,
											renderGutterMenu: !1,
											glyphMargin: !1,
											hideUnchangedRegions: { enabled: !0 },
											disableLayerHinting: !0,
											...o.diffEditorOptions,
											automaticLayout: !0,
											diffAlgorithm: "legacy",
											scrollbar: o.enableScrollOnFocus
												? {
														vertical: "hidden",
														horizontal: "hidden",
														handleMouseWheel: !1,
													}
												: void 0,
										},
										{
											originalEditor: { isSimpleWidget: !0, contributions: [] },
											modifiedEditor: { isSimpleWidget: !0, contributions: [] },
										},
									),
									S =
										f.languageService.createByLanguageNameOrFilepathOrFirstLine(
											o.language,
											null,
											void 0,
										),
									I = f.modelService.createModel(
										o.original,
										S,
										r.URI.parse(`diff-code-render-original-anysphere://${g()}`),
									),
									T = f.modelService.createModel(
										o.modified,
										S,
										r.URI.parse(`diff-code-render-modified-anysphere://${g()}`),
									);
								v.setModel({ original: I, modified: T }),
									o.enableScrollOnFocus &&
										(v.getModifiedEditor().onDidFocusEditorText(() => {
											v.updateOptions({
												scrollbar: {
													vertical: "visible",
													horizontal: "visible",
													handleMouseWheel: !0,
												},
											});
										}),
										v.getModifiedEditor().onDidBlurEditorText(() => {
											v.updateOptions({
												scrollbar: {
													vertical: "hidden",
													horizontal: "hidden",
													handleMouseWheel: !1,
												},
											});
										}),
										v.getModifiedEditor().onKeyDown((D) => {
											D.keyCode === h.KeyCode.Escape &&
												(l()?.focus(),
												v.updateOptions({
													scrollbar: {
														vertical: "hidden",
														horizontal: "hidden",
														handleMouseWheel: !1,
													},
												}));
										})),
									s(v);
								const P = o.startLine,
									k = o.endLine,
									L = o.shouldNotCollapse;
								v.waitForDiff().then(() => {
									L || v.collapseAllUnchangedRegions(),
										P
											? v.revealRangeAtTop({
													startLineNumber: P,
													endLineNumber: k ?? P,
													startColumn: 1,
													endColumn: 1,
												})
											: v.revealFirstDiff(),
										v.layout();
								}),
									o.editorCallback?.({
										editor: v,
										modifiedModel: T,
										originalModel: I,
									});
							} else if (b()) {
								const v = b(),
									S = v.getOriginalEditor().getModel(),
									I = v.getModifiedEditor().getModel();
								if (S && I) {
									S.setValue(o.original), I.setValue(o.modified);
									const T =
										f.languageService.createByLanguageNameOrFilepathOrFirstLine(
											o.language,
											null,
											void 0,
										);
									S.setLanguage(T), I.setLanguage(T);
									const P = o.shouldNotCollapse;
									v.waitForDiff().then(() => {
										P || v.collapseAllUnchangedRegions(), v.layout();
									});
								}
							}
						}),
						(0, m.onCleanup)(() => {
							const v = b();
							v &&
								(v.dispose(),
								v.getOriginalEditor().getModel()?.dispose(),
								v.getModifiedEditor().getModel()?.dispose());
						}),
						(() => {
							const v = n();
							return (
								(0, C.insert)(v, $),
								(0, E.effect)(
									(S) => {
										const I = o.style,
											T = o.enableScrollOnFocus ? 0 : void 0;
										return (
											(S._v$ = (0, w.style)(v, I, S._v$)),
											T !== S._v$2 &&
												(0, i.setAttribute)(v, "tabindex", (S._v$2 = T)),
											S
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								v
							);
						})()
					);
				}
			},
		),
		