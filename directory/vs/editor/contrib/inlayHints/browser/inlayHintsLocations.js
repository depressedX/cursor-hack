import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/uuid.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/services/resolverService.js';
import '../../gotoSymbol/browser/goToCommands.js';
import '../../peekView/browser/peekView.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
define(
			de[1867],
			he([1, 0, 7, 50, 33, 47, 38, 17, 42, 1036, 255, 11, 31, 8, 49, 5, 40]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*actions*/,
 w /*cancellation*/,
 E /*uuid*/,
 C /*editorOptions*/,
 d /*range*/,
 m /*resolverService*/,
 r /*goToCommands*/,
 u /*peekView*/,
 a /*actions*/,
 h /*commands*/,
 c /*contextkey*/,
 n /*contextView*/,
 g /*instantiation*/,
 p /*notification*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ohc = o),
					(e.$phc = f),
					(t = mt(t));
				async function o(b, s, l, y) {
					const $ = b.get(m.$MO),
						v = b.get(n.$Xxb),
						S = b.get(h.$ek),
						I = b.get(g.$Li),
						T = b.get(p.$4N);
					if (
						(await y.item.resolve(w.CancellationToken.None), !y.part.location)
					)
						return;
					const P = y.part.location,
						k = [],
						L = new Set(
							a.$ZX
								.getMenuItems(a.$XX.EditorContext)
								.map((M) => ((0, a.$VX)(M) ? M.command.id : (0, E.$9g)())),
						);
					for (const M of r.$WOb.all())
						L.has(M.desc.id) &&
							k.push(
								new i.$rj(
									M.desc.id,
									a.$2X.label(M.desc, { renderShortTitle: !0 }),
									void 0,
									!0,
									async () => {
										const N = await $.createModelReference(P.uri);
										try {
											const A = new r.$VOb(
													N.object.textEditorModel,
													d.$iL.getStartPosition(P.range),
												),
												R = y.item.anchor.range;
											await I.invokeFunction(
												M.runEditorCommand.bind(M),
												s,
												A,
												R,
											);
										} finally {
											N.dispose();
										}
									},
								),
							);
					if (y.part.command) {
						const { command: M } = y.part;
						k.push(new i.$tj()),
							k.push(
								new i.$rj(M.id, M.title, void 0, !0, async () => {
									try {
										await S.executeCommand(M.id, ...(M.arguments ?? []));
									} catch (N) {
										T.notify({
											severity: p.Severity.Error,
											source: y.item.provider.displayName,
											message: N,
										});
									}
								}),
							);
					}
					const D = s.getOption(C.EditorOption.useShadowDOM);
					v.showContextMenu({
						domForShadowRoot: D ? (s.getDomNode() ?? void 0) : void 0,
						getAnchor: () => {
							const M = t.$tgb(l);
							return { x: M.left, y: M.top + M.height + 8 };
						},
						getActions: () => k,
						onHide: () => {
							s.focus();
						},
						autoSelectFirstItem: !0,
					});
				}
				async function f(b, s, l, y) {
					const v = await b.get(m.$MO).createModelReference(y.uri);
					await l.invokeWithinContext(async (S) => {
						const I = s.hasSideBySideModifier,
							T = S.get(c.$6j),
							P = u.PeekContext.inPeekEditor.getValue(T),
							k =
								!I &&
								l.getOption(C.EditorOption.definitionLinkOpensInPeek) &&
								!P;
						return new r.$XOb(
							{ openToSide: I, openInPeek: k, muteMessage: !0 },
							{
								title: { value: "", original: "" },
								id: "",
								precondition: void 0,
							},
						).run(
							S,
							new r.$VOb(
								v.object.textEditorModel,
								d.$iL.getStartPosition(y.range),
							),
							d.$iL.lift(y.range),
						);
					}),
						v.dispose();
				}
			},
		)
