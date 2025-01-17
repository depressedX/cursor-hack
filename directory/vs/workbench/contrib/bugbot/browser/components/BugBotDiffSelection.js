import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/browser/ui/progressbar/progressbar.js';
import '../../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../../../../../editor/contrib/hover/browser/diffCodeBlock.js';
import '../../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../../platform/progress/common/progress.js';
import '../../../aichat/browser/components/utilities.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../services/progress/browser/progressIndicator.js';
define(
			de[4146],
			he([1, 0, 2, 2, 2, 2, 13, 436, 309, 1689, 128, 84, 1232, 36, 707]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ozc = o);
				const g = (0, t.template)("<div>"),
					p = (0, t.template)(
						'<div class="bugbot-diff-selection input-box-code-selection"><div>',
					);
				function o(f) {
					const b = (0, c.$odc)(),
						s = (() => {
							const S = g();
							return (
								S.style.setProperty("width", "100%"),
								S.style.setProperty("height", "100%"),
								S.style.setProperty("box-sizing", "border-box"),
								S
							);
						})(),
						y = b.instantiationService
							.createChild(new u.$Ki([a.$bO, new n.$JMb(new d.$bpb(s))]))
							.createInstance(
								m.$3yb,
								s,
								{
									...r.$zbc.getEditorOptions(b.configurationService),
									scrollbar: {
										vertical: "auto",
										horizontal: "auto",
										handleMouseWheel: !0,
										alwaysConsumeMouseWheel: !1,
										useShadows: !0,
										verticalHasArrows: !1,
										horizontalHasArrows: !1,
										horizontalScrollbarSize: 8,
										verticalScrollbarSize: 8,
									},
								},
								{
									originalEditor: { isSimpleWidget: !0 },
									modifiedEditor: { isSimpleWidget: !0 },
								},
							);
					let $ = (0, h.$vbc)(),
						v = (0, h.$vbc)();
					return (
						(0, C.createEffect)(() => {
							let S = [],
								I = [];
							for (const L of f.diff.diffs) {
								S.push(`--- a/${L.from}`),
									S.push(`+++ b/${L.to}`),
									I.push(`--- a/${L.from}`),
									I.push(`+++ b/${L.to}`);
								for (const D of L.chunks) {
									S.push(D.content), I.push(D.content);
									for (const M of D.lines)
										M[0] === "+"
											? I.push(M)
											: (M[0] === "-" || I.push(M), S.push(M));
								}
							}
							const T = b.languageService.createById("diff"),
								P = b.modelService.createModel(
									S.join(`
`),
									T,
									$,
									!0,
								),
								k = b.modelService.createModel(
									I.join(`
`),
									T,
									v,
									!0,
								);
							y.setModel({ original: P, modified: k }),
								y.waitForDiff().then(() => {
									y.layout();
								}),
								(0, C.onCleanup)(() => {
									P.dispose(), k.dispose();
								});
						}),
						(0, C.onMount)(() => {
							y.layout();
						}),
						(0, C.createEffect)(() => {
							y.layout();
						}),
						(0, C.onCleanup)(() => {
							y.dispose(), s.remove();
						}),
						(() => {
							const S = p(),
								I = S.firstChild;
							return (
								I.style.setProperty("white-space", "pre"),
								I.style.setProperty("height", "100%"),
								I.style.setProperty("box-sizing", "border-box"),
								(0, E.insert)(I, s),
								(0, w.effect)((T) =>
									(0, i.style)(
										S,
										{
											position: "relative",
											overflow: "hidden",
											width: "100%",
											height: "100%",
											...f.style,
										},
										T,
									),
								),
								S
							);
						})()
					);
				}
			},
		),
		