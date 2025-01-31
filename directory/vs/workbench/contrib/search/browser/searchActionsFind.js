import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/list/browser/listService.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../common/constants.js';
import '../../searchEditor/browser/constants.js';
import './searchModel.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../services/search/common/queryBuilder.js';
import '../../files/browser/files.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../files/common/files.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../../base/common/errors.js';
import './searchActionsBase.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/history/common/history.js';
import '../../../../base/common/network.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
define(
			de[1970],
			he([
				1, 0, 19, 4, 31, 10, 93, 60, 89, 377, 615, 405, 8, 11, 43, 27, 361, 382,
				22, 25, 220, 142, 29, 483, 358, 245, 23, 66, 18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*resources*/,
				i /*nls*/,
				w /*commands*/,
				E /*configuration*/,
				C /*listService*/,
				d /*views*/,
				m /*viewsService*/,
				r /*constants*/,
				u /*constants*/,
				a /*searchModel*/,
				h /*contextkey*/,
				c /*actions*/,
				n /*keybindingsRegistry*/,
				g /*keyCodes*/,
				p /*queryBuilder*/,
				o /*files*/,
				f /*files*/,
				b /*workspace*/,
				s /*files*/,
				l /*panecomposite*/,
				y /*errors*/,
				$ /*searchActionsBase*/,
				v /*configurationResolver*/,
				S /*history*/,
				I /*network*/,
				T /*editorGroupsService*/,
				P /*editorService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Oc = M),
					(i = mt(i)),
					(r = mt(r)),
					(u = mt(u)),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.RestrictSearchToFolderId,
									title: i.localize2(9234, "Restrict Search to Folder"),
									category: $.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: h.$Kj.and(
											r.$ooc.SearchViewVisibleKey,
											r.$ooc.ResourceFolderFocusKey,
										),
										primary: g.KeyMod.Shift | g.KeyMod.Alt | g.KeyCode.KeyF,
									},
									menu: [
										{
											id: c.$XX.SearchContext,
											group: "search",
											order: 3,
											when: h.$Kj.and(r.$ooc.ResourceFolderFocusKey),
										},
									],
								});
							}
							async run(A, R) {
								await L(A, !1, !0, void 0, R);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.ExpandRecursivelyCommandId,
									title: i.localize(9230, null),
									category: $.$oOc,
									menu: [
										{
											id: c.$XX.SearchContext,
											when: h.$Kj.and(
												r.$ooc.FolderFocusKey,
												r.$ooc.HasSearchResults,
											),
											group: "search",
											order: 4,
										},
									],
								});
							}
							run(A) {
								k(A);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.ExcludeFolderFromSearchId,
									title: i.localize2(9235, "Exclude Folder from Search"),
									category: $.$oOc,
									menu: [
										{
											id: c.$XX.SearchContext,
											group: "search",
											order: 4,
											when: h.$Kj.and(r.$ooc.ResourceFolderFocusKey),
										},
									],
								});
							}
							async run(A, R) {
								await L(A, !1, !1, void 0, R);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.RevealInSideBarForSearchResults,
									title: i.localize2(9236, "Reveal in Explorer View"),
									category: $.$oOc,
									menu: [
										{
											id: c.$XX.SearchContext,
											when: h.$Kj.and(
												r.$ooc.FileFocusKey,
												r.$ooc.HasSearchResults,
											),
											group: "search_3",
											order: 1,
										},
									],
								});
							}
							async run(A, R) {
								const O = A.get(l.$6Sb),
									B = A.get(o.$LWb),
									U = A.get(b.$Vi),
									z = (0, $.$rOc)(A.get(m.$HMb));
								if (!z) return;
								let F;
								if (
									(R instanceof a.$INc || (R = z.getControl().getFocus()[0]),
									R instanceof a.$INc)
								)
									F = R;
								else return;
								O.openPaneComposite(
									s.$vUb,
									d.ViewContainerLocation.Sidebar,
									!1,
								).then((x) => {
									if (!x) return;
									const H = x.getViewPaneContainer(),
										q = F.resource;
									if (q && U.isInsideWorkspace(q)) {
										const V = H.getExplorerView();
										V.setExpanded(!0),
											B.select(q, !0).then(() => V.focus(), y.$4);
									}
								});
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.FindInFilesActionId,
									title: {
										...i.localize2(9237, "Find in Files"),
										mnemonicTitle: i.localize(9231, null),
									},
									metadata: {
										description: i.localize(9232, null),
										args: [
											{
												name: i.localize(9233, null),
												schema: {
													type: "object",
													properties: {
														query: { type: "string" },
														replace: { type: "string" },
														preserveCase: { type: "boolean" },
														triggerSearch: { type: "boolean" },
														filesToInclude: { type: "string" },
														filesToExclude: { type: "string" },
														isRegex: { type: "boolean" },
														isCaseSensitive: { type: "boolean" },
														matchWholeWord: { type: "boolean" },
														useExcludeSettingsAndIgnoreFiles: {
															type: "boolean",
														},
														onlyOpenEditors: { type: "boolean" },
														showIncludesExcludes: { type: "boolean" },
													},
												},
											},
										],
									},
									category: $.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										primary: g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.KeyF,
									},
									menu: [
										{
											id: c.$XX.MenubarEditMenu,
											group: "4_find_global",
											order: 1,
										},
									],
									f1: !0,
								});
							}
							async run(A, R = {}) {
								M(A, R);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.FindInFolderId,
									title: i.localize2(9238, "Find in Folder..."),
									category: $.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: h.$Kj.and(s.$NUb, s.$zUb),
										primary: g.KeyMod.Shift | g.KeyMod.Alt | g.KeyCode.KeyF,
									},
									menu: [
										{
											id: c.$XX.ExplorerContext,
											group: "4_search",
											order: 10,
											when: h.$Kj.and(s.$zUb),
										},
									],
								});
							}
							async run(A, R) {
								await L(A, !0, !0, R);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.FindInWorkspaceId,
									title: i.localize2(9239, "Find in Workspace..."),
									category: $.$oOc,
									menu: [
										{
											id: c.$XX.ExplorerContext,
											group: "4_search",
											order: 10,
											when: h.$Kj.and(s.$DUb, s.$zUb.toNegated()),
										},
									],
								});
							}
							async run(A) {
								const O = A.get(E.$gj).getValue().search.mode;
								if (O === "view")
									(await (0, $.$uOc)(A.get(m.$HMb), !0))?.searchInFolders();
								else
									return A.get(w.$ek).executeCommand(u.$BOc, {
										location: O === "newEditor" ? "new" : "reuse",
										filesToInclude: "",
									});
							}
						},
					);
				function k(N) {
					const A = N.get(m.$HMb),
						R = (0, $.$rOc)(A);
					if (R) {
						const O = R.getControl(),
							B = O.getFocus()[0];
						O.expand(B, !0);
					}
				}
				async function L(N, A, R, O, B) {
					const U = N.get(f.$ll),
						z = N.get(m.$HMb),
						F = N.get(b.$Vi),
						x = N.get(w.$ek),
						H = N.get(E.$gj).getValue().search,
						q = H.mode;
					let V;
					if (A)
						V = (0, o.$NWb)(
							O,
							N.get(C.$fMb),
							N.get(P.$IY),
							N.get(T.$EY),
							N.get(o.$LWb),
						);
					else {
						const K = (0, $.$rOc)(z);
						if (!K) return;
						V = D(K.getControl(), B, H);
					}
					const G = U.resolveAll(V.map((K) => ({ resource: K }))).then((K) => {
						const J = [];
						return (
							K.forEach((W) => {
								W.success &&
									W.stat &&
									J.push(
										W.stat.isDirectory
											? W.stat.resource
											: (0, t.$mh)(W.stat.resource),
									);
							}),
							(0, p.$N8)(J, F)
						);
					});
					if (q === "view") {
						const K = await (0, $.$uOc)(z, !0);
						V &&
							V.length &&
							K &&
							(R
								? K.searchInFolders(await G)
								: K.searchOutsideOfFolders(await G));
						return;
					} else
						return R
							? x.executeCommand(u.$BOc, {
									filesToInclude: (await G).join(", "),
									showIncludesExcludes: !0,
									location: q === "newEditor" ? "new" : "reuse",
								})
							: x.executeCommand(u.$BOc, {
									filesToExclude: (await G).join(", "),
									showIncludesExcludes: !0,
									location: q === "newEditor" ? "new" : "reuse",
								});
				}
				function D(N, A, R) {
					return (0, $.$sOc)(N, A, R)
						.map((O) => (O instanceof a.$FNc ? null : O.resource))
						.filter((O) => O !== null);
				}
				async function M(N, A = {}) {
					const R = N.get(E.$gj).getValue().search,
						O = N.get(m.$HMb),
						B = N.get(w.$ek),
						U = {};
					if (Object.keys(A).length !== 0) {
						const F = N.get(v.$zeb),
							x = N.get(S.$Feb),
							H = N.get(b.$Vi),
							q = x.getLastActiveWorkspaceRoot(),
							V =
								q?.scheme === I.Schemas.file ||
								q?.scheme === I.Schemas.vscodeRemote
									? q
									: void 0,
							G = V ? (H.getWorkspaceFolder(V) ?? void 0) : void 0;
						for (const K of Object.entries(A)) {
							const J = K[0],
								W = K[1];
							W !== void 0 &&
								(U[J] = typeof W == "string" ? await F.resolveAsync(G, W) : W);
						}
					}
					const z = R.mode;
					if (z === "view")
						(0, $.$uOc)(O, !1).then((F) => {
							if (F) {
								F.searchAndReplaceWidget.toggleReplace(
									typeof U.replace == "string",
								);
								let H = !1;
								typeof U.query != "string" &&
									(H = F.updateTextFromFindWidgetOrSelection({
										allowUnselectedWord: typeof U.replace != "string",
									})),
									F.setSearchParameters(U),
									typeof U.showIncludesExcludes == "boolean" &&
										F.toggleQueryDetails(!1, U.showIncludesExcludes),
									F.searchAndReplaceWidget.focus(void 0, H, H);
							}
						});
					else {
						const F = (x) => ({
							location: z === "newEditor" ? "new" : "reuse",
							query: x.query,
							filesToInclude: x.filesToInclude,
							filesToExclude: x.filesToExclude,
							matchWholeWord: x.matchWholeWord,
							isCaseSensitive: x.isCaseSensitive,
							isRegexp: x.isRegex,
							useExcludeSettingsAndIgnoreFiles:
								x.useExcludeSettingsAndIgnoreFiles,
							onlyOpenEditors: x.onlyOpenEditors,
							showIncludesExcludes: !!(
								x.filesToExclude ||
								x.filesToExclude ||
								!x.useExcludeSettingsAndIgnoreFiles
							),
						});
						B.executeCommand(u.$BOc, F(U));
					}
				}
			},
		)
