import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/constants.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/services/codeEditorService.js';
import '../../../common/editorContextKeys.js';
import '../../../common/services/languageFeatures.js';
import '../../gotoSymbol/browser/goToSymbol.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../workbench/contrib/composer/browser/constants.js';
import '../../../common/core/position.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../common/services/resolverService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/workspace/common/workspace.js';
define(
			de[1241],
			he([1, 0, 33, 58, 46, 65, 71, 69, 414, 11, 31, 169, 48, 126, 42, 3, 25]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*constants*/,
 w /*editorExtensions*/,
 E /*codeEditorService*/,
 C /*editorContextKeys*/,
 d /*languageFeatures*/,
 m /*goToSymbol*/,
 r /*actions*/,
 u /*commands*/,
 a /*constants*/,
 h /*position*/,
 c /*chat_pb*/,
 n /*resolverService*/,
 g /*lifecycle*/,
 p /*workspace*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gmc =
						e.$fmc =
						e.$emc =
						e.$dmc =
						e.$cmc =
						e.$bmc =
						e.$amc =
						e.$_lc =
							void 0),
					(e.$$lc = o);
				async function o($, v, S) {
					const I = $.getPosition(),
						T = $.getModel();
					return T === null || I === null
						? []
						: (
								await (0, m.$UOb)(() =>
									(0, m.$POb)(
										S.definitionProvider,
										T,
										I,
										!1,
										t.CancellationToken.None,
									),
								)
							).slice(0, v);
				}
				e.$_lc = "editor.action.addSymbolToChat";
				class f extends w.$ktb {
					static {
						this.id = e.$_lc;
					}
					static {
						this.LABEL = "Add Symbol to Current Chat";
					}
					constructor() {
						super({
							id: e.$_lc,
							precondition: C.EditorContextKeys.hasCodeActionsProvider,
							title: f.LABEL,
							menu: [
								{ id: r.$XX.EditorContext, group: "navigation", order: 1.5 },
								{
									id: r.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 5,
								},
							],
							metadata: { description: "Add Symbol to Current Chat..." },
						});
					}
					async runEditorCommand(v, S, I) {
						const T = v.get(u.$ek),
							P = v.get(d.$k3),
							k = await o(S, 3, P);
						await T.executeCommand(
							a.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID,
							{ locationLinks: k },
							"chat",
						);
					}
				}
				(e.$amc = f),
					(0, r.$4X)(f),
					(e.$bmc = "editor.action.addSymbolToNewChat");
				class b extends w.$ktb {
					static {
						this.id = e.$bmc;
					}
					static {
						this.LABEL = "Add Symbol to New Chat";
					}
					constructor() {
						super({
							id: e.$bmc,
							precondition: C.EditorContextKeys.hasCodeActionsProvider,
							title: b.LABEL,
							menu: [
								{ id: r.$XX.EditorContext, group: "navigation", order: 1.6 },
								{
									id: r.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 6,
								},
							],
							metadata: { description: "Add Symbol to New Chat..." },
						});
					}
					async runEditorCommand(v, S, I) {
						const T = v.get(u.$ek),
							P = v.get(d.$k3),
							k = await o(S, 3, P);
						await T.executeCommand(
							a.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID,
							{ locationLinks: k },
							"chat",
						);
					}
				}
				(e.$cmc = b),
					(0, r.$4X)(b),
					(e.$dmc = "editor.action.addSymbolToComposer");
				class s extends w.$ktb {
					static {
						this.id = e.$dmc;
					}
					static {
						this.LABEL = "Add Symbol to Current Composer";
					}
					constructor() {
						super({
							id: e.$dmc,
							precondition: C.EditorContextKeys.hasCodeActionsProvider,
							title: s.LABEL,
							menu: [
								{ id: r.$XX.EditorContext, group: "navigation", order: 1.5 },
								{
									id: r.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 5,
								},
							],
							metadata: { description: "Add Symbol to Current Composer..." },
						});
					}
					async runEditorCommand(v, S, I) {
						const T = v.get(u.$ek),
							P = v.get(d.$k3),
							k = await o(S, 3, P);
						await T.executeCommand(a.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID, {
							locationLinks: k,
						});
					}
				}
				(e.$emc = s),
					(0, r.$4X)(s),
					(e.$fmc = "editor.action.addSymbolToNewComposer");
				class l extends w.$ktb {
					static {
						this.id = e.$fmc;
					}
					static {
						this.LABEL = "Add Symbol to New Composer";
					}
					constructor() {
						super({
							id: e.$fmc,
							precondition: C.EditorContextKeys.hasCodeActionsProvider,
							title: l.LABEL,
							menu: [
								{ id: r.$XX.EditorContext, group: "navigation", order: 1.6 },
								{
									id: r.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 6,
								},
							],
							metadata: { description: "Add Symbol to New Composer..." },
						});
					}
					async runEditorCommand(v, S, I) {
						const T = v.get(u.$ek),
							P = v.get(d.$k3),
							k = await o(S, 3, P);
						await T.executeCommand(a.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID, {
							locationLinks: k,
						});
					}
				}
				(e.$gmc = l),
					(0, r.$4X)(l),
					(0, r.$4X)(
						class Da extends r.$3X {
							static {
								this.id = i.$BV;
							}
							constructor() {
								super({
									id: Da.id,
									title: {
										value: "Go to Definition From Chat Response",
										original: "Go to Definition From Chat Response",
									},
								}),
									(this.a = []);
							}
							async run(v, S, I, T) {
								const P = v.get(E.$dtb),
									k = v.get(d.$k3),
									L = v.get(n.$MO),
									D = v.get(p.$Vi);
								if (T) {
									await y(P, S);
									return;
								}
								const M = (async () => {
										let B, U;
										const z = new g.$Zc();
										try {
											for (; this.a.length > 2; ) {
												const J = this.a.shift();
												J?.cancel(), J?.dispose();
											}
											const F = new t.$Ce();
											this.a.push(F),
												(U = setTimeout(() => F.cancel(), 5e3)),
												(B = await L.createModelReference(S.uri));
											const x = B.object.textEditorModel,
												q = await (0, m.$POb)(
													k.definitionProvider,
													x,
													new h.$hL(
														S.range.startLineNumber,
														S.range.endColumn - 1,
													),
													!1,
													F.token,
												),
												[V] = q;
											if (V === void 0) return;
											let G = await L.createModelReference(V.uri);
											z.add(G);
											const K = G.object.textEditorModel;
											return { location: V, value: K.getValueInRange(V.range) };
										} catch {
											return;
										} finally {
											B?.dispose(), z.dispose(), clearTimeout(U);
										}
									})(),
									N = await Promise.race([
										M,
										new Promise((B) => setTimeout(() => B("timeout"), 500)),
									]);
								N === "timeout" || N === void 0
									? await y(P, S)
									: await y(P, N.location);
								let A;
								if (
									(N !== "timeout" && N !== void 0
										? (A = N)
										: N === "timeout" && (A = await M),
									A === void 0)
								)
									return;
								let R = A.location.range.startLineNumber,
									O = A.value;
								if (
									A.value.includes(" ") ||
									A.value.includes(`
`)
								) {
									const B = A.value.split(`
`);
									let U = !1;
									for (let z = 0; z < B.length; z++)
										if (B[z].includes(I.symbolSearchString)) {
											(O = I.symbolSearchString), (R += z), (U = !0);
											break;
										}
									U || (O = B[0]);
								}
								return new c.$JA({
									relativeWorkspacePath: D.asRelativePath(A.location.uri),
									roughLineNumber: R,
									symbolSearchString: O,
								});
							}
						},
					);
				async function y($, v) {
					await $.openCodeEditor(
						{
							resource: v.uri,
							options: {
								selection: {
									startColumn: v.range.startColumn,
									startLineNumber: v.range.startLineNumber,
								},
							},
						},
						null,
					);
				}
			},
		)
