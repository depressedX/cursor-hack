import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../nls.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/instantiation/common/descriptors.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../../common/views.js';
import '../../../../debug/common/debug.js';
import './notebookVariableContextKeys.js';
import './notebookVariablesView.js';
import '../../notebookBrowser.js';
import '../../notebookIcons.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookExecutionStateService.js';
import '../../../common/notebookKernelService.js';
import '../../../common/notebookService.js';
import '../../../../../services/editor/common/editorService.js';
define(
			de[3832],
			he([
				1, 0, 3, 4, 10, 8, 102, 30, 60, 112, 3090, 3831, 108, 284, 70, 190, 243,
				161, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mIc = void 0),
					(i = mt(i));
				let b = class extends t.$1c {
					constructor(l, y, $, v, S, I) {
						super(),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.m = S),
							(this.n = I),
							(this.a = []),
							(this.c = !1),
							(this.f = u.$TGc.bindTo(l)),
							this.a.push(this.h.onDidActiveEditorChange(() => this.r())),
							this.a.push(
								this.j.onDidChangeExecution((T) => this.r(T.notebook)),
							),
							(this.b = y.onDidChangeConfiguration((T) => this.q(T)));
					}
					q(l) {
						l.affectsConfiguration(n.$56.notebookVariablesView) &&
							(this.g.getValue(n.$56.notebookVariablesView)
								? this.c
									? this.f.set(!0)
									: this.r()
								: this.f.set(!1));
					}
					r(l) {
						this.g.getValue(n.$56.notebookVariablesView) &&
							(l ||
								this.h.activeEditorPane?.getId() ===
									"workbench.editor.notebook") &&
							this.s(l) &&
							!this.c &&
							this.t() &&
							(this.f.set(!0),
							(this.c = !0),
							this.a.forEach((y) => y.dispose()));
					}
					s(l) {
						const y = l
							? this.n.getNotebookTextModel(l)
							: (0, h.$eJb)(this.h.activeEditorPane)?.getViewModel()
									?.notebookDocument;
						return (
							y && this.m.getMatchingKernel(y).selected?.hasVariableProvider
						);
					}
					t() {
						const l = d.$Io.as("workbench.registry.view.containers").get(r.$Q4);
						if (l) {
							const y = d.$Io.as(m.Extensions.ViewsRegistry),
								$ = {
									id: "NOTEBOOK_VARIABLES",
									name: i.localize2(7796, "Notebook Variables"),
									containerIcon: c.$uOb,
									ctorDescriptor: new C.$Ji(a.$lIc),
									order: 50,
									weight: 5,
									canToggleVisibility: !0,
									canMoveView: !0,
									collapsed: !0,
									when: u.$TGc,
								};
							return y.registerViews([$], l), !0;
						}
						return !1;
					}
					dispose() {
						super.dispose(),
							this.a.forEach((l) => l.dispose()),
							this.b.dispose();
					}
				};
				(e.$mIc = b),
					(e.$mIc = b =
						Ne(
							[
								j(0, E.$6j),
								j(1, w.$gj),
								j(2, f.$IY),
								j(3, g.$d6),
								j(4, p.$f6),
								j(5, o.$MIb),
							],
							b,
						));
			},
		),
		