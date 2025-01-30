import '../../../../../../../../require.js';
import '../../../../../../../../exports.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../../../external/lexical/lexical/api.js';
import '../../../../../../../../external/solid/solid.js';
import '../../../../../../../../external/lexical/lexical-solid/LexicalTypeaheadMenuPlugin.js';
import '../../../../../controlCommon/browser/solid.js';
import '../recognizers.js';
import '../InputBoxMenu.js';
import './types.js';
import './SlashCommandNode.js';
import './slashCommandRegistry.js';
import '../../../../../../../css!vs/workbench/contrib/ui/browser/aiInput/plugins/slashCommands/SlashPlugin.js';
define(
			de[4179],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 181, 164, 13, 756, 36, 817, 1069, 1005,
				1270, 3195, 2509,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*web*/,
 u /*LexicalComposerContext*/,
 a /*api*/,
 h /*solid*/,
 c /*LexicalTypeaheadMenuPlugin*/,
 n /*solid*/,
 g /*recognizers*/,
 p /*InputBoxMenu*/,
 o /*types*/,
 f /*SlashCommandNode*/,
 b /*slashCommandRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = S);
				const s = (0, t.template)('<span class="secondary-text">'),
					l = (0, t.template)(
						'<li tabindex="-1" role="option"><span></span><span class="text">',
					),
					y = (0, t.template)("<ul>"),
					$ = (T) => {
						const P = (0, h.createMemo)(() =>
								T.isSelected ? "item selected" : "item",
							),
							L = (0, n.$odc)().themeService.getColorTheme(),
							D = L.getColor("menu.selectionBackground"),
							M = L.getColor("menu.selectionForeground"),
							N = L.getColor("menu.inactiveSelectionForeground"),
							A = L.getColor("editorOverviewRuler.bracketMatchForeground");
						return (() => {
							const R = l(),
								O = R.firstChild,
								B = O.nextSibling;
							R.addEventListener("click", () => {
								T.onClick();
							}),
								R.addEventListener("mouseenter", () => {
									T.onMouseEnter();
								});
							const U = T.option.setRefElement;
							return (
								typeof U == "function"
									? (0, r.use)(U, R)
									: (T.option.setRefElement = R),
								O.style.setProperty("display", "flex"),
								O.style.setProperty("margin-left", "0px"),
								(0, m.insert)(O, () => T.option.picture),
								(0, m.insert)(B, () => T.option.name),
								(0, m.insert)(
									R,
									(0, C.createComponent)(h.Show, {
										get when() {
											return T.option.secondaryText;
										},
										get children() {
											const z = s();
											return (
												(0, m.insert)(z, () => T.option.secondaryText),
												(0, d.effect)(() =>
													(T.isSelected
														? (N?.toString() ?? "")
														: (A?.toString() ?? "")) != null
														? z.style.setProperty(
																"color",
																T.isSelected
																	? (N?.toString() ?? "")
																	: (A?.toString() ?? ""),
															)
														: z.style.removeProperty("color"),
												),
												z
											);
										},
									}),
									null,
								),
								(0, d.effect)(
									(z) => {
										const F = P(),
											x = T.isSelected,
											H = "typeahead-item-" + T.index,
											q = {
												...(T.isSelected
													? {
															"background-color": D?.toString() ?? "",
															color: M?.toString() ?? "",
														}
													: {}),
												cursor:
													T.option.type.case === "staticheading"
														? "default"
														: "pointer",
											},
											V = T.isSelected
												? (N?.toString() ?? "")
												: (A?.toString() ?? "");
										return (
											F !== z._v$ && (0, E.className)(R, (z._v$ = F)),
											x !== z._v$2 &&
												(0, w.setAttribute)(R, "aria-selected", (z._v$2 = x)),
											H !== z._v$3 &&
												(0, w.setAttribute)(R, "id", (z._v$3 = H)),
											(z._v$4 = (0, i.style)(R, q, z._v$4)),
											V !== z._v$5 &&
												((z._v$5 = V) != null
													? O.style.setProperty("color", V)
													: O.style.removeProperty("color")),
											z
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
									},
								),
								R
							);
						})();
					};
				function v(T, P, k, L) {
					const D = T.selections.findIndex((R) => R.uuid === L),
						M = T.fileSelections.findIndex((R) => R.uuid === L),
						N = T.commits.findIndex((R) => R.uuid === L),
						A = T.pullRequests.findIndex((R) => R.uuid === L);
					L === T.gitDiffUuid
						? P.removeGitDiff()
						: L === T.diffToMainUuid
							? P.removeDiffToMain()
							: D !== -1
								? P.removeSelection(D)
								: M !== -1
									? P.removeFileSelection(M)
									: N !== -1
										? P.removeCommit(N)
										: A !== -1
											? P.removePullRequest(A)
											: k in T.lintKeys
												? P.removeLinterErrors()
												: k in T.currentFileKeys
													? P.removeCurrentFile()
													: k in T.codebaseKeys
														? P.removeCodebase()
														: P.removeDocs(k);
				}
				function S(T) {
					const P = (0, n.$odc)(),
						[k] = (0, u.useLexicalComposerContext)(),
						L = new Map(),
						D = k.registerMutationListener(f.$uac, (U) => {
							for (let [z, F] of U)
								F === "created"
									? k.update(() => {
											const x = (0, a.$getNodeByKey)(z);
											x && L.set(z, x);
										})
									: F === "destroyed" && L.get(z) && T.removeCommand();
						});
					(0, h.onCleanup)(() => {
						D();
					});
					const [M, N] = (0, h.createSignal)(null),
						A = (0, h.createMemo)(() =>
							o.$n_b
								.filter((z) => T.commands.includes(z))
								.map((z) => b.$yac[z].typeaheadOption),
						),
						R = (U) => {
							const z = (0, g.$jac)(U),
								F = (0, g.$mac)(U, k);
							return F && !z ? F : null;
						},
						O = (U, z, F) => {
							const x = (0, a.$createTextNode)("");
							z && (z.select(), z.replace(x)), F(), B(U);
						};
					(0, h.createEffect)(() => {
						if (T.delegate !== void 0) {
							const U = T.delegate.onFireEditNode((z) => {
								k.update(() => {
									const F = (0, f.$createSlashCommandNode)("edit"),
										x = (0, a.$createTextNode)(" " + z),
										H = (0, a.$createParagraphNode)(),
										q = (0, a.$getRoot)();
									for (const V of q.getChildren()) V.remove();
									H.append(F, x), q.append(H), T.setCommand("edit");
								});
							});
							(0, h.onCleanup)(U);
						}
					});
					const B = async (U) => {
						k.update(() => {
							if (U.type.case === "staticheading") return;
							const z = (0, f.$createSlashCommandNode)(U.type.command),
								F = (0, a.$createTextNode)(" ");
							(0, a.$getSelection)()?.insertNodes([z, F]),
								T.setCommand(U.type.command);
						});
					};
					return (0, C.createComponent)(c.LexicalTypeaheadMenuPlugin, {
						onQueryChange: N,
						onSelectOption: O,
						triggerFn: R,
						get options() {
							return [...A()].sort((U, z) => z.score - U.score);
						},
						anchorClassName: "lookahead-anchor-element",
						menuRenderFn: I,
						get attachToElement() {
							return P.portalElement;
						},
					});
				}
				const I = (T) => {
					const P = (0, n.$odc)();
					return (0, C.createComponent)(p.$q_b, {
						get show() {
							return T.options.length > 0;
						},
						get anchorElementRef() {
							return T.anchorElementRef;
						},
						get children() {
							const k = y();
							return (
								(0, m.insert)(
									k,
									(0, C.createComponent)(h.For, {
										get each() {
											return T.options;
										},
										children: (L, D) =>
											(0, C.createComponent)($, {
												get index() {
													return D();
												},
												get isSelected() {
													return T.selectedIndex === D();
												},
												onClick: () => {
													T.setHighlightedIndex(D()),
														T.selectOptionAndCleanUp(L);
												},
												onMouseEnter: () => {
													T.setHighlightedIndex(D());
												},
												option: L,
											}),
									}),
								),
								k
							);
						},
					});
				};
			},
		),
		