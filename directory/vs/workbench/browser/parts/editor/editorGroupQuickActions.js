import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../services/editor/common/editorService.js';
import '../../../common/editor.js';
import './renderEditorEmptyScreen.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[4224],
			he([1, 0, 3, 39, 32, 25, 52, 10, 7, 31, 8, 143, 18, 44, 4223, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*keybinding*/,
 w /*telemetry*/,
 E /*workspace*/,
 C /*lifecycle*/,
 d /*configuration*/,
 m /*dom*/,
 r /*commands*/,
 u /*contextkey*/,
 a /*remoteAgentService*/,
 h /*editorService*/,
 c /*editor*/,
 n /*renderEditorEmptyScreen*/,
 g /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Duc = void 0);
				let p = class extends t.$1c {
					constructor(f, b, s, l, y, $, v, S, I, T, P) {
						super(),
							(this.c = b),
							(this.f = s),
							(this.g = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.q = S),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.a = (0, m.h)(".editorCursorMainDiv").root),
							(this.a.style.height = "100%"),
							(0, m.$fhb)(f, this.a),
							this.D((0, n.$Cuc)(this.a, this.t)),
							(this.b = l.getWorkbenchState()),
							this.u(),
							this.w();
					}
					u() {
						this.D(this.c.onDidShutdown(() => this.dispose())),
							this.D(
								this.g.onDidChangeWorkbenchState((f) => {
									this.b !== f && ((this.b = f), this.w());
								}),
							),
							this.D(
								this.s.onDidEditorsChange((f) => {
									this.w();
								}),
							);
					}
					w() {
						this.b !== E.WorkbenchState.EMPTY ||
						this.s.getEditors(c.EditorsOrder.SEQUENTIAL).length > 0
							? (this.a.style.display = "none")
							: (this.a.style.display = "block"),
							this.n.publicLog("actionMenu open");
					}
					dispose() {
						super.dispose();
					}
				};
				(e.$Duc = p),
					(e.$Duc = p =
						Ne(
							[
								j(1, C.$n6),
								j(2, i.$uZ),
								j(3, E.$Vi),
								j(4, u.$6j),
								j(5, d.$gj),
								j(6, w.$km),
								j(7, r.$ek),
								j(8, a.$$m),
								j(9, h.$IY),
								j(10, g.$Li),
							],
							p,
						));
			},
		)
