import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/uri.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../base/common/constants.js';
import '../../../../editor/contrib/cCppGhostText/browser/cppDiffPeekView.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../external/solid/store.js';
import '../common/cppUtils.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/contrib/cCppGhostText/browser/cppGhostTextController.js';
import '../../../../platform/opener/common/opener.js';
define(
			de[3938],
			he([
				1, 0, 11, 18, 9, 137, 67, 61, 58, 1799, 79, 14, 45, 193, 971, 65, 1345,
				41,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nfd = e.$mfd = e.$lfd = e.$kfd = e.$jfd = void 0);
				class f extends t.$3X {
					static {
						this.ID = "editor.action.showDiffHistory";
					}
					static {
						this.LABEL = "Show Diff History";
					}
					constructor() {
						super({
							id: f.ID,
							title: { value: f.LABEL, original: "Show Diff History" },
							f1: !0,
						});
					}
					async run(k) {
						const L = k.get(E.$jfc),
							D = k.get(i.$IY),
							M = k.get(d.$nM),
							N = k.get(C.$QO),
							R = (await L.getGlobalDiffTrajectories())
								.map(
									(z) => `File: ${z.fileName}

${z.diffHistory.join(`
------------------
`)}
		`,
								)
								.join(`

---------------------------------------------------------

`),
							O = M.createById("plaintext"),
							U = {
								resource: N.createModel(R, O).uri,
								options: { preserveFocus: !1, pinned: !0, revealIfVisible: !0 },
							};
						D.openEditor(U);
					}
				}
				(e.$jfd = f), (0, t.$4X)(f);
				class b extends t.$3X {
					static {
						this.ID = m.$YV;
					}
					static {
						this.LABEL = "Get Diff History";
					}
					constructor() {
						super({
							id: b.ID,
							title: { value: b.LABEL, original: "Get Diff History" },
							f1: !1,
						});
					}
					async run(k) {
						return await k.get(E.$jfc).getGlobalDiffTrajectories();
					}
				}
				(e.$kfd = b), (0, t.$4X)(b);
				class s extends t.$3X {
					static {
						this.ID = "editor.action.acceptCppSuggestion";
					}
					static {
						this.LABEL = "Accept Cursor Tab Suggestion";
					}
					constructor() {
						super({
							id: s.ID,
							title: {
								value: s.LABEL,
								original: "Accept Cursor Tab Suggestion",
							},
							icon: (0, u.$$O)(
								"accept-cpp-suggestion",
								a.$ak.check,
								"Accept Cursor Tab Suggestion",
							),
							menu: { id: r.$zlc.TitleMenu, order: 1 },
						});
					}
					async run(k) {
						const L = k.get(E.$jfc),
							D = k.get(h.$0zb),
							M = D.nonPersistentStorage.cppState?.peekViewSuggestion;
						(
							await L.acceptFullSuggestion(
								void 0,
								M ? (0, c.unwrap)(M) : void 0,
							)
						).type,
							n.AcceptResult.NotAccepted,
							D.setNonPersistentStorage(
								"cppState",
								"peekViewSuggestion",
								void 0,
							);
					}
				}
				(e.$lfd = s), (0, t.$4X)(s);
				function l(P) {
					const k = P.get(g.$dtb),
						L = k.getActiveCodeEditor() || k.getFocusedCodeEditor();
					return (L && p.$Jlc.get(L)) || void 0;
				}
				function y(P) {
					return l(P)?.cppPeekView;
				}
				class $ extends t.$3X {
					static {
						this.ID = "editor.action.configureCppDiffPeekView";
					}
					static {
						this.LABEL = "Configure Cursor Tab Diff Peek View";
					}
					constructor() {
						super({
							id: $.ID,
							title: {
								value: $.LABEL,
								original: "Configure Cursor Tab Diff Peek View",
							},
						});
					}
					async run(k, L) {
						const D = y(k);
						D && D.diffEditor?.updateOptions(L);
					}
				}
				(e.$mfd = $), (0, t.$4X)($);
				class v extends t.$3X {
					static {
						this.ID = "editor.action.setCppDiffPeekView";
					}
					static {
						this.LABEL = "Set Cursor Tab Diff Peek View";
					}
					constructor() {
						super({
							id: v.ID,
							title: {
								value: v.LABEL,
								original: "Set Cursor Tab Diff Peek View",
							},
						});
					}
					async run(k, L) {
						const D = l(k);
						D && (D.cppPeekView = L);
					}
				}
				(e.$nfd = v), (0, t.$4X)(v);
				class S extends t.$3X {
					static {
						this.LABEL = "Enable Cursor Tab";
					}
					constructor() {
						super({
							id: m.$MX,
							title: { value: S.LABEL, original: S.LABEL },
							f1: !0,
						});
					}
					async run(k, ...L) {
						k.get(h.$0zb).setApplicationUserPersistentStorage("cppEnabled", !0);
					}
				}
				(0, t.$4X)(S);
				class I extends t.$3X {
					static {
						this.LABEL = "Disable Cursor Tab";
					}
					constructor() {
						super({
							id: "editor.cpp.disableenabled",
							title: { value: I.LABEL, original: I.LABEL },
							f1: !0,
						});
					}
					async run(k, ...L) {
						k.get(h.$0zb).setApplicationUserPersistentStorage("cppEnabled", !1);
					}
				}
				(0, t.$4X)(I);
				class T extends t.$3X {
					static {
						this.ID = "editor.cpp.openPro";
					}
					static {
						this.LABEL = "Open Cursor Tab Pro Pricing";
					}
					constructor() {
						super({
							id: T.ID,
							title: { value: T.LABEL, original: T.LABEL },
							f1: !1,
						});
					}
					async run(k) {
						k.get(o.$7rb).open(w.URI.parse("https://cursor.com/pricing"));
					}
				}
				(0, t.$4X)(T);
			},
		),
		