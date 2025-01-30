import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/async.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/commands/common/commands.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/hover/browser/hover.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../../platform/list/browser/listService.js';
import '../../../../../../platform/opener/common/opener.js';
import '../../../../../../platform/quickinput/common/quickInput.js';
import '../../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../../platform/theme/common/themeService.js';
import '../../../../../browser/parts/views/viewPane.js';
import '../../../../../common/views.js';
import '../../../../debug/common/debug.js';
import './notebookVariablesDataSource.js';
import './notebookVariablesTree.js';
import '../../notebookBrowser.js';
import '../../../common/notebookExecutionStateService.js';
import '../../../common/notebookKernelService.js';
import '../../../../../services/editor/common/editorService.js';
define(
			de[3831],
			he([
				1, 0, 15, 4, 92, 11, 31, 10, 8, 49, 72, 5, 39, 93, 41, 63, 32, 35, 146,
				60, 112, 3113, 3830, 108, 190, 243, 18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*nls*/,
				w /*menuEntryActionViewItem*/,
				E /*actions*/,
				C /*commands*/,
				d /*configuration*/,
				m /*contextkey*/,
				r /*contextView*/,
				u /*hover*/,
				a /*instantiation*/,
				h /*keybinding*/,
				c /*listService*/,
				n /*opener*/,
				g /*quickInput*/,
				p /*telemetry*/,
				o /*themeService*/,
				f /*viewPane*/,
				b /*views*/,
				s /*debug*/,
				l /*notebookVariablesDataSource*/,
				y /*notebookVariablesTree*/,
				$ /*notebookBrowser*/,
				v /*notebookExecutionStateService*/,
				S /*notebookKernelService*/,
				I /*editorService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lIc = void 0),
					(i = mt(i));
				let T = class extends f.$TMb {
					static {
						this.ID = "notebookVariablesView";
					}
					static {
						this.TITLE = i.localize2(7800, "Notebook Variables");
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(k, N, A, O, R, U, B, z, H, q, V),
							(this.g = L),
							(this.h = D),
							(this.j = M),
							(this.m = F),
							(this.n = x),
							(this.r = G),
							this.D(this.g.onDidActiveEditorChange(this.sb.bind(this))),
							this.D(this.h.onDidNotebookVariablesUpdate(this.dc.bind(this))),
							this.D(this.j.onDidChangeExecution(this.cc.bind(this))),
							this.ab(),
							(this.c = new l.$UGc(this.h)),
							(this.f = new t.$Yh(() => this.a?.updateChildren(), 100));
					}
					W(k) {
						super.W(k),
							this.element.classList.add("debug-pane"),
							(this.a = this.Db.createInstance(
								c.$FMb,
								"notebookVariablesTree",
								k,
								new y.$iIc(),
								[new y.$jIc(this.Hb)],
								this.c,
								{
									accessibilityProvider: new y.$kIc(),
									identityProvider: { getId: (L) => L.id },
								},
							)),
							this.a.layout(),
							this.b && this.a.setInput({ kind: "root", notebook: this.b }),
							this.D(this.a.onContextMenu((L) => this.t(L)));
					}
					t(k) {
						if (!k.element) return;
						const L = k.element,
							D = {
								source: L.notebook.uri.toString(),
								name: L.name,
								value: L.value,
								type: L.type,
								expression: L.expression,
								language: L.language,
								extensionId: L.extensionId,
							},
							M = [],
							N = this.Bb.createOverlay([
								[s.$O5.key, L.name],
								[s.$L5.key, L.value],
								[s.$M5.key, L.type],
								[s.$N5.key, L.interfaces],
								[s.$P5.key, L.language],
								[s.$Q5.key, L.extensionId],
							]),
							A = this.r.getMenuActions(E.$XX.NotebookVariablesContext, N, {
								arg: D,
								shouldForwardArgs: !0,
							});
						(0, w.$Jyb)(A, M),
							this.zb.showContextMenu({
								getAnchor: () => k.anchor,
								getActions: () => M,
							});
					}
					X(k, L) {
						super.X(k, L), this.a?.layout(k, L);
					}
					ab() {
						const k = this.b,
							L = this.g.activeEditorPane;
						if (
							L?.getId() === "workbench.editor.notebook" ||
							L?.getId() === "workbench.editor.interactive"
						) {
							const D = (0, $.$eJb)(L)?.getViewModel()?.notebookDocument;
							this.b = D;
						}
						return k !== this.b;
					}
					sb() {
						this.ab() &&
							this.b &&
							(this.a?.setInput({ kind: "root", notebook: this.b }),
							this.f.schedule());
					}
					cc(k) {
						this.b &&
							k.affectsNotebook(this.b.uri) &&
							(this.c.cancel(),
							k.changed === void 0 ? this.f.schedule() : this.f.cancel());
					}
					dc(k) {
						this.b &&
							k.toString() === this.b.uri.toString() &&
							(this.a?.setInput({ kind: "root", notebook: this.b }),
							this.f.schedule());
					}
				};
				(e.$lIc = T),
					(e.$lIc = T =
						Ne(
							[
								j(1, I.$IY),
								j(2, S.$f6),
								j(3, v.$d6),
								j(4, h.$uZ),
								j(5, r.$Xxb),
								j(6, m.$6j),
								j(7, d.$gj),
								j(8, a.$Li),
								j(9, b.$K1),
								j(10, n.$7rb),
								j(11, g.$DJ),
								j(12, C.$ek),
								j(13, o.$iP),
								j(14, p.$km),
								j(15, u.$Uyb),
								j(16, E.$YX),
							],
							T,
						));
			},
		),
		