import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/editor.js';
import '../../../services/views/common/viewsService.js';
import '../../search/browser/searchActionsBase.js';
import './searchEditorInput.js';
import './searchEditorSerialization.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/history/common/history.js';
import '../../../../css!vs/workbench/contrib/searchEditor/browser/media/searchEditor.js';
define(
			de[1971],
			he([
				1, 0, 23, 56, 10, 5, 73, 32, 25, 44, 89, 483, 1368, 1067, 358, 66, 18,
				245, 908,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*network*/,
 i /*editorBrowser*/,
 w /*configuration*/,
 E /*instantiation*/,
 C /*label*/,
 d /*telemetry*/,
 m /*workspace*/,
 r /*editor*/,
 u /*viewsService*/,
 a /*searchActionsBase*/,
 h /*searchEditorInput*/,
 c /*searchEditorSerialization*/,
 n /*configurationResolver*/,
 g /*editorGroupsService*/,
 p /*editorService*/,
 o /*history*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Oc =
						e.$4Oc =
						e.$2Oc =
						e.$1Oc =
						e.$ZOc =
						e.$YOc =
						e.$XOc =
						e.$WOc =
							void 0),
					(e.$3Oc = v);
				const f = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc &&
						P.activeEditorPane.toggleCaseSensitive();
				};
				e.$WOc = f;
				const b = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc &&
						P.activeEditorPane.toggleWholeWords();
				};
				e.$XOc = b;
				const s = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc && P.activeEditorPane.toggleRegex();
				};
				e.$YOc = s;
				const l = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc &&
						P.activeEditorPane.toggleContextLines();
				};
				e.$ZOc = l;
				const y = (T, P) => {
					const k = T.get(p.$IY);
					k.activeEditor instanceof h.$SOc &&
						k.activeEditorPane.modifyContextLines(P);
				};
				e.$1Oc = y;
				const $ = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc &&
						P.activeEditorPane.focusAllResults();
				};
				e.$2Oc = $;
				async function v(T) {
					const P = T.get(u.$HMb),
						k = T.get(E.$Li),
						L = (0, a.$rOc)(P);
					L
						? await k.invokeFunction(e.$4Oc, {
								filesToInclude: L.searchIncludePattern.getValue(),
								onlyOpenEditors:
									L.searchIncludePattern.onlySearchInOpenEditors(),
								filesToExclude: L.searchExcludePattern.getValue(),
								isRegexp: L.searchAndReplaceWidget.searchInput?.getRegex(),
								isCaseSensitive:
									L.searchAndReplaceWidget.searchInput?.getCaseSensitive(),
								matchWholeWord:
									L.searchAndReplaceWidget.searchInput?.getWholeWords(),
								useExcludeSettingsAndIgnoreFiles:
									L.searchExcludePattern.useExcludesAndIgnoreFiles(),
								showIncludesExcludes: !!(
									L.searchIncludePattern.getValue() ||
									L.searchExcludePattern.getValue() ||
									!L.searchExcludePattern.useExcludesAndIgnoreFiles()
								),
							})
						: await k.invokeFunction(e.$4Oc);
				}
				const S = async (T, P = {}, k = !1) => {
					const L = T.get(p.$IY),
						D = T.get(g.$EY),
						M = T.get(d.$km),
						N = T.get(E.$Li),
						A = T.get(w.$gj),
						R = T.get(n.$zeb),
						O = T.get(m.$Vi),
						U = T.get(o.$Feb).getLastActiveWorkspaceRoot(t.Schemas.file),
						z = U ? (O.getWorkspaceFolder(U) ?? void 0) : void 0,
						F = L.activeTextEditorControl;
					let x,
						H = "";
					if (F) {
						(0, i.$$sb)(F)
							? F.getOriginalEditor().hasTextFocus()
								? (x = F.getOriginalEditor())
								: (x = F.getModifiedEditor())
							: (x = F);
						const W = x?.getSelection();
						if (
							((H = (W && x?.getModel()?.getValueInRange(W)) ?? ""),
							W?.isEmpty() && A.getValue("search").seedWithNearestWord)
						) {
							const X = x.getModel()?.getWordAtPosition(W.getStartPosition());
							X && (H = X.word);
						}
					} else
						L.activeEditor instanceof h.$SOc &&
							(H = L.activeEditorPane.getSelected());
					M.publicLog2("searchEditor/openNewSearchEditor");
					const V = {
						query:
							P.location === "new" ||
							A.getValue("editor").find.seedSearchStringFromSelection
								? H
								: void 0,
					};
					for (const W of Object.entries(P)) {
						const X = W[0],
							Y = W[1];
						Y !== void 0 &&
							(V[X] = typeof Y == "string" ? await R.resolveAsync(z, Y) : Y);
					}
					const G = L.getEditors(r.EditorsOrder.MOST_RECENTLY_ACTIVE).find(
						(W) => W.editor.typeId === h.$SOc.ID,
					);
					let K;
					if (G && V.location === "reuse") {
						const W = D.getGroup(G.groupId);
						if (!W) throw new Error("Invalid group id for search editor");
						const X = G.editor;
						(K = await W.openEditor(X)),
							H ? K.setQuery(H) : K.selectQuery(),
							K.setSearchConfig(V);
					} else {
						const W = N.invokeFunction(h.$TOc, {
							config: V,
							resultsContents: "",
							from: "rawData",
						});
						K = await L.openEditor(W, { pinned: !0 }, k ? p.$KY : p.$JY);
					}
					const J = A.getValue("search").searchOnType;
					(V.triggerSearch === !0 ||
						(V.triggerSearch !== !1 && J && V.query)) &&
						K.triggerSearch({ focusResults: V.focusResults }),
						V.focusResults || K.focusSearchInput();
				};
				e.$4Oc = S;
				const I = async (T, P, k, L, D) => {
					if (!P.query) {
						console.error("Expected searchResult.query to be defined. Got", P);
						return;
					}
					const M = T.get(p.$IY),
						N = T.get(d.$km),
						A = T.get(E.$Li),
						R = T.get(C.$3N),
						O = T.get(w.$gj),
						B = O.getValue("search").sortOrder;
					N.publicLog2("searchEditor/createEditorFromSearchResult");
					const U = (q) => R.getUriLabel(q, { relative: !0 }),
						{
							text: z,
							matchRanges: F,
							config: x,
						} = (0, c.$LOc)(P, k, L, 0, U, B);
					x.onlyOpenEditors = D;
					const H =
						O.getValue("search").searchEditor.defaultNumberOfContextLines;
					if (P.isDirty || H === 0 || H === null) {
						const q = A.invokeFunction(h.$TOc, {
							resultsContents: z,
							config: x,
							from: "rawData",
						});
						await M.openEditor(q, { pinned: !0 }), q.setMatchRanges(F);
					} else {
						const q = A.invokeFunction(h.$TOc, {
							from: "rawData",
							resultsContents: "",
							config: { ...x, contextLines: H },
						});
						(await M.openEditor(q, { pinned: !0 })).triggerSearch();
					}
				};
				e.$5Oc = I;
			},
		),
		