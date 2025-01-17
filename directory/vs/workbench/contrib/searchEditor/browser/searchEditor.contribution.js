import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../editor/contrib/find/browser/findModel.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import '../../../common/contextkeys.js';
import '../../../services/views/common/viewsService.js';
import '../../search/browser/searchActionsBase.js';
import '../../search/browser/searchIcons.js';
import '../../search/common/constants.js';
import './constants.js';
import './searchEditor.js';
import './searchEditorActions.js';
import './searchEditorInput.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/search/common/search.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../services/workingCopy/common/workingCopyEditorService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/dom.js';
define(
			de[4174],
			he([
				1, 0, 27, 19, 9, 547, 4, 11, 31, 8, 102, 5, 43, 30, 192, 55, 44, 100,
				89, 483, 561, 377, 615, 4169, 1971, 1368, 18, 186, 231, 403, 3, 7,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(l = mt(l)),
					(y = mt(y));
				const M = "search.action.openInEditor",
					N = "search.action.openNewEditorToSide",
					A = "search.action.focusQueryEditorWidget",
					R = "search.action.focusFilesToInclude",
					O = "search.action.focusFilesToExclude",
					B = "toggleSearchEditorCaseSensitive",
					U = "toggleSearchEditorWholeWord",
					z = "toggleSearchEditorRegex",
					F = "increaseSearchEditorContextLines",
					x = "decreaseSearchEditorContextLines",
					H = "rerunSearchEditorSearch",
					q = "cleanSearchEditorState",
					V = "selectAllSearchEditorMatches";
				c.$Io
					.as(p.$a1.EditorPane)
					.registerEditorPane(
						n.$vVb.create($.$VOc, $.$VOc.ID, (0, C.localize)(9378, null)),
						[new u.$Ji(S.$SOc)],
					);
				let G = class {
					static {
						this.ID = "workbench.contrib.searchEditor";
					}
					constructor(ne, ee) {
						ne.registerEditor(
							"*" + S.$ROc,
							{
								id: S.$SOc.ID,
								label: (0, C.localize)(9379, null),
								detail: p.$b1.providerDisplayName,
								priority: P.RegisteredEditorPriority.default,
							},
							{
								singlePerResource: !0,
								canSupportResource: (_) => (0, i.$lh)(_) === S.$ROc,
							},
							{
								createEditorInput: ({ resource: _ }) => ({
									editor: ee.invokeFunction(S.$TOc, {
										from: "existingFile",
										fileUri: _,
									}),
								}),
							},
						);
					}
				};
				(G = Ne([j(0, P.$E6), j(1, a.$Li)], G)),
					(0, g.$s6)(G.ID, G, g.WorkbenchPhase.BlockStartup);
				class K {
					canSerialize(ne) {
						return !!ne.tryReadConfigSync();
					}
					serialize(ne) {
						if (!this.canSerialize(ne)) return;
						if (ne.isDisposed())
							return JSON.stringify({
								modelUri: void 0,
								dirty: !1,
								config: ne.tryReadConfigSync(),
								name: ne.getName(),
								matchRanges: [],
								backingUri: ne.backingUri?.toString(),
							});
						let ee;
						(ne.modelUri.path || (ne.modelUri.fragment && ne.isDirty())) &&
							(ee = ne.modelUri.toString());
						const _ = ne.tryReadConfigSync(),
							te = ne.isDirty(),
							Q = te ? ne.getMatchRanges() : [],
							Z = ne.backingUri;
						return JSON.stringify({
							modelUri: ee,
							dirty: te,
							config: _,
							name: ne.getName(),
							matchRanges: Q,
							backingUri: Z?.toString(),
						});
					}
					deserialize(ne, ee) {
						const {
							modelUri: _,
							dirty: te,
							config: Q,
							matchRanges: Z,
							backingUri: se,
						} = JSON.parse(ee);
						if (Q && Q.query !== void 0)
							if (_) {
								const re = ne.invokeFunction(S.$TOc, {
									from: "model",
									modelUri: w.URI.parse(_),
									config: Q,
									backupOf: se ? w.URI.parse(se) : void 0,
								});
								return re.setDirty(te), re.setMatchRanges(Z), re;
							} else
								return se
									? ne.invokeFunction(S.$TOc, {
											from: "existingFile",
											fileUri: w.URI.parse(se),
										})
									: ne.invokeFunction(S.$TOc, {
											from: "rawData",
											resultsContents: "",
											config: Q,
										});
					}
				}
				c.$Io.as(p.$a1.EditorFactory).registerEditorSerializer(S.$SOc.ID, K),
					m.$fk.registerCommand(q, (ie) => {
						const ne = ie.get(I.$IY).activeEditorPane;
						ne instanceof $.$VOc && ne.cleanState();
					});
				const J = (0, C.localize2)(9381, "Search Editor"),
					W = (ie = {}) => {
						const ne = {},
							ee = {
								includes: "filesToInclude",
								excludes: "filesToExclude",
								wholeWord: "matchWholeWord",
								caseSensitive: "isCaseSensitive",
								regexp: "isRegexp",
								useIgnores: "useExcludeSettingsAndIgnoreFiles",
							};
						return (
							Object.entries(ie).forEach(([_, te]) => {
								ne[ee[_] ?? _] = te;
							}),
							ne
						);
					},
					X = {
						description:
							"Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.",
						args: [
							{
								name: "Open new Search Editor args",
								schema: {
									properties: {
										query: { type: "string" },
										filesToInclude: { type: "string" },
										filesToExclude: { type: "string" },
										contextLines: { type: "number" },
										matchWholeWord: { type: "boolean" },
										isCaseSensitive: { type: "boolean" },
										isRegexp: { type: "boolean" },
										useExcludeSettingsAndIgnoreFiles: { type: "boolean" },
										showIncludesExcludes: { type: "boolean" },
										triggerSearch: { type: "boolean" },
										focusResults: { type: "boolean" },
										onlyOpenEditors: { type: "boolean" },
									},
								},
							},
						],
					};
				(0, d.$4X)(
					class extends d.$3X {
						constructor() {
							super({
								id: "search.searchEditor.action.deleteFileResults",
								title: (0, C.localize2)(9382, "Delete File Results"),
								keybinding: {
									weight: h.KeybindingWeight.EditorContrib,
									primary:
										t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backspace,
								},
								precondition: y.$vOc,
								category: J,
								f1: !0,
							});
						}
						async run(ie) {
							ie
								.get(r.$6j)
								.getContext((0, D.$Jgb)())
								.getValue(y.$vOc.serialize()) &&
								ie.get(I.$IY).activeEditorPane.deleteResultBlock();
						}
					},
				),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: y.$AOc,
									title: (0, C.localize2)(9383, "New Search Editor"),
									category: J,
									f1: !0,
									metadata: X,
								});
							}
							async run(ie, ne) {
								await ie
									.get(a.$Li)
									.invokeFunction(v.$4Oc, W({ location: "new", ...ne }));
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: y.$BOc,
									title: (0, C.localize2)(9384, "Open Search Editor"),
									category: J,
									f1: !0,
									metadata: X,
								});
							}
							async run(ie, ne) {
								await ie
									.get(a.$Li)
									.invokeFunction(v.$4Oc, W({ location: "reuse", ...ne }));
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: N,
									title: (0, C.localize2)(
										9385,
										"Open New Search Editor to the Side",
									),
									category: J,
									f1: !0,
									metadata: X,
								});
							}
							async run(ie, ne) {
								await ie.get(a.$Li).invokeFunction(v.$4Oc, W(ne), !0);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: M,
									title: (0, C.localize2)(9386, "Open Results in Editor"),
									category: J,
									f1: !0,
									keybinding: {
										primary: t.KeyMod.Alt | t.KeyCode.Enter,
										when: r.$Kj.and(
											l.$ooc.HasSearchResults,
											l.$ooc.SearchViewFocusedKey,
										),
										weight: h.KeybindingWeight.WorkbenchContrib,
										mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Enter },
									},
								});
							}
							async run(ie) {
								const ne = ie.get(f.$HMb),
									ee = ie.get(a.$Li),
									_ = (0, b.$rOc)(ne);
								_ &&
									(await ee.invokeFunction(
										v.$5Oc,
										_.searchResult,
										_.searchIncludePattern.getValue(),
										_.searchExcludePattern.getValue(),
										_.searchIncludePattern.onlySearchInOpenEditors(),
									));
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: H,
									title: (0, C.localize2)(9387, "Search Again"),
									category: J,
									keybinding: {
										primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyR,
										when: y.$vOc,
										weight: h.KeybindingWeight.EditorContrib,
									},
									icon: s.$_Nc,
									menu: [
										{
											id: d.$XX.EditorTitle,
											group: "navigation",
											when: o.$TPb.isEqualTo(y.$zOc),
										},
										{
											id: d.$XX.CommandPalette,
											when: o.$TPb.isEqualTo(y.$zOc),
										},
									],
								});
							}
							async run(ie) {
								const ne = ie.get(I.$IY);
								ne.activeEditor instanceof S.$SOc &&
									ne.activeEditorPane.triggerSearch({ resetCursor: !1 });
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: A,
									title: (0, C.localize2)(9388, "Focus Search Editor Input"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										primary: t.KeyCode.Escape,
										weight: h.KeybindingWeight.EditorContrib,
									},
								});
							}
							async run(ie) {
								const ne = ie.get(I.$IY);
								ne.activeEditor instanceof S.$SOc &&
									ne.activeEditorPane.focusSearchInput();
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: R,
									title: (0, C.localize2)(
										9389,
										"Focus Search Editor Files to Include",
									),
									category: J,
									f1: !0,
									precondition: y.$vOc,
								});
							}
							async run(ie) {
								const ne = ie.get(I.$IY);
								ne.activeEditor instanceof S.$SOc &&
									ne.activeEditorPane.focusFilesToIncludeInput();
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: O,
									title: (0, C.localize2)(
										9390,
										"Focus Search Editor Files to Exclude",
									),
									category: J,
									f1: !0,
									precondition: y.$vOc,
								});
							}
							async run(ie) {
								const ne = ie.get(I.$IY);
								ne.activeEditor instanceof S.$SOc &&
									ne.activeEditorPane.focusFilesToExcludeInput();
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: B,
									title: (0, C.localize2)(9391, "Toggle Match Case"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: Object.assign(
										{
											weight: h.KeybindingWeight.WorkbenchContrib,
											when: l.$ooc.SearchInputBoxFocusedKey,
										},
										E.$d2b,
									),
								});
							}
							run(ie) {
								(0, v.$WOc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: U,
									title: (0, C.localize2)(9392, "Toggle Match Whole Word"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: Object.assign(
										{
											weight: h.KeybindingWeight.WorkbenchContrib,
											when: l.$ooc.SearchInputBoxFocusedKey,
										},
										E.$e2b,
									),
								});
							}
							run(ie) {
								(0, v.$XOc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: z,
									title: (0, C.localize2)(
										9393,
										"Toggle Use Regular Expression",
									),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: Object.assign(
										{
											weight: h.KeybindingWeight.WorkbenchContrib,
											when: l.$ooc.SearchInputBoxFocusedKey,
										},
										E.$f2b,
									),
								});
							}
							run(ie) {
								(0, v.$YOc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: y.$COc,
									title: (0, C.localize2)(9394, "Toggle Context Lines"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.Alt | t.KeyCode.KeyL,
										mac: {
											primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyL,
										},
									},
								});
							}
							run(ie) {
								(0, v.$ZOc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: F,
									title: (0, C.localize2)(9395, "Increase Context Lines"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.Alt | t.KeyCode.Equal,
									},
								});
							}
							run(ie) {
								(0, v.$1Oc)(ie, !0);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: x,
									title: (0, C.localize2)(9396, "Decrease Context Lines"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.Alt | t.KeyCode.Minus,
									},
								});
							}
							run(ie) {
								(0, v.$1Oc)(ie, !1);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: V,
									title: (0, C.localize2)(9397, "Select All Matches"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyL,
									},
								});
							}
							run(ie) {
								(0, v.$2Oc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "search.action.openNewEditorFromView",
									title: (0, C.localize)(9380, null),
									category: J,
									icon: s.$hOc,
									menu: [
										{
											id: d.$XX.ViewTitle,
											group: "navigation",
											order: 2,
											when: r.$Kj.equals("view", T.$l7),
										},
									],
								});
							}
							run(ne, ...ee) {
								return (0, v.$3Oc)(ne);
							}
						},
					);
				let Y = class extends L.$1c {
					static {
						this.ID = "workbench.contrib.searchEditorWorkingCopyEditorHandler";
					}
					constructor(ne, ee) {
						super(), (this.a = ne), this.D(ee.registerHandler(this));
					}
					handles(ne) {
						return ne.resource.scheme === y.$wOc;
					}
					isOpen(ne, ee) {
						return this.handles(ne)
							? ee instanceof S.$SOc && (0, i.$gh)(ne.resource, ee.modelUri)
							: !1;
					}
					createEditor(ne) {
						const ee = this.a.invokeFunction(S.$TOc, {
							from: "model",
							modelUri: ne.resource,
						});
						return ee.setDirty(!0), ee;
					}
				};
				(Y = Ne([j(0, a.$Li), j(1, k.$bZ)], Y)),
					(0, g.$s6)(Y.ID, Y, g.WorkbenchPhase.BlockRestore);
			},
		),
		