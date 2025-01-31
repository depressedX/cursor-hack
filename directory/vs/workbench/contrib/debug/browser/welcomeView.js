import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../nls.js';
import '../common/debug.js';
import '../../../services/editor/common/editorService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/views.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/opener/common/opener.js';
import '../../../common/contextkeys.js';
import '../../../browser/actions/workspaceActions.js';
import '../../../../base/common/platform.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/lifecycle.js';
import './debugCommands.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[1942],
			he([
				1, 0, 35, 39, 49, 10, 8, 4, 112, 18, 146, 5, 60, 30, 41, 100, 853, 12,
				56, 21, 32, 3, 425, 72,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*themeService*/,
				i /*keybinding*/,
				w /*contextView*/,
				E /*configuration*/,
				C /*contextkey*/,
				d /*nls*/,
				m /*debug*/,
				r /*editorService*/,
				u /*viewPane*/,
				a /*instantiation*/,
				h /*views*/,
				c /*platform*/,
				n /*opener*/,
				g /*contextkeys*/,
				p /*workspaceActions*/,
				o /*platform*/,
				f /*editorBrowser*/,
				b /*storage*/,
				s /*telemetry*/,
				l /*lifecycle*/,
				y /*debugCommands*/,
				$ /*hover*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Qc = void 0);
				const v = "debugStartLanguage",
					S = new C.$5j(v, void 0),
					I = new C.$5j("debuggerInterestedInActiveEditor", !1);
				let T = class extends u.$TMb {
					static {
						this.ID = "workbench.debug.welcome";
					}
					static {
						this.LABEL = (0, d.localize2)(5767, "Run");
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V) {
						super(D, N, A, R, O, F, z, x, M, q, V),
							(this.c = B),
							(this.f = U),
							(this.a = S.bindTo(O)),
							(this.b = I.bindTo(O));
						const G = H.get(v, b.StorageScope.WORKSPACE);
						this.a.set(G);
						const K = () => {
								let X = this.f.activeTextEditorControl;
								if (
									((0, f.$$sb)(X) && (X = X.getModifiedEditor()),
									(0, f.$0sb)(X))
								) {
									const Y = X.getModel(),
										ie = Y ? Y.getLanguageId() : void 0;
									if (
										ie &&
										this.c
											.getAdapterManager()
											.someDebuggerInterestedInLanguage(ie)
									) {
										this.a.set(ie),
											this.b.set(!0),
											H.store(
												v,
												ie,
												b.StorageScope.WORKSPACE,
												b.StorageTarget.MACHINE,
											);
										return;
									}
								}
								this.b.set(!1);
							},
							J = new l.$Zc();
						this.D(J),
							this.D(
								U.onDidActiveEditorChange(() => {
									J.clear();
									let X = this.f.activeTextEditorControl;
									(0, f.$$sb)(X) && (X = X.getModifiedEditor()),
										(0, f.$0sb)(X) && J.add(X.onDidChangeModelLanguage(K)),
										K();
								}),
							),
							this.D(this.c.getAdapterManager().onDidRegisterDebugger(K)),
							this.D(
								this.onDidChangeBodyVisibility((X) => {
									X && K();
								}),
							),
							K();
						const W = this.yb.lookupKeybinding(y.$lHc);
						k = W ? ` (${W.getLabel()})` : "";
					}
					shouldShowWelcome() {
						return !0;
					}
				};
				(e.$7Qc = T),
					(e.$7Qc = T =
						Ne(
							[
								j(1, t.$iP),
								j(2, i.$uZ),
								j(3, w.$Xxb),
								j(4, E.$gj),
								j(5, C.$6j),
								j(6, m.$75),
								j(7, r.$IY),
								j(8, a.$Li),
								j(9, h.$K1),
								j(10, n.$7rb),
								j(11, b.$lq),
								j(12, s.$km),
								j(13, $.$Uyb),
							],
							T,
						));
				const P = c.$Io.as(h.Extensions.ViewsRegistry);
				P.registerViewWelcomeContent(T.ID, {
					content: (0, d.localize)(
						5761,
						null,
						o.$m && !o.$r ? p.$Jtc.ID : p.$Gtc.ID,
					),
					when: C.$Kj.and(m.$y5, I.toNegated()),
					group: h.ViewContentGroups.Open,
				});
				let k = "";
				P.registerViewWelcomeContent(T.ID, {
					content: `[${(0, d.localize)(5762, null)}${k}](command:${y.$lHc})`,
					when: m.$y5,
					group: h.ViewContentGroups.Debug,
					order: 1,
				}),
					P.registerViewWelcomeContent(T.ID, {
						content: `[${(0, d.localize)(5763, null)}](command:${y.$hHc}).`,
						when: m.$y5,
						group: h.ViewContentGroups.Debug,
						order: 10,
					}),
					P.registerViewWelcomeContent(T.ID, {
						content: (0, d.localize)(5764, null, y.$kHc),
						when: C.$Kj.and(m.$y5, g.$wPb.notEqualsTo("empty")),
						group: h.ViewContentGroups.Debug,
					}),
					P.registerViewWelcomeContent(T.ID, {
						content: (0, d.localize)(
							5765,
							null,
							o.$m && !o.$r ? p.$Jtc.ID : p.$Htc.ID,
						),
						when: C.$Kj.and(m.$y5, g.$wPb.isEqualTo("empty")),
						group: h.ViewContentGroups.Debug,
					}),
					P.registerViewWelcomeContent(T.ID, {
						content: (0, d.localize)(5766, null),
						when: m.$z5.toNegated(),
						group: h.ViewContentGroups.Debug,
					});
			},
		)
