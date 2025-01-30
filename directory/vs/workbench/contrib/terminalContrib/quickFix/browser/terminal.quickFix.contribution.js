import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/extensions.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../terminal/browser/terminalActions.js';
import '../../../terminal/browser/terminalExtensions.js';
import '../../../terminal/common/terminalContextKey.js';
import './quickFix.js';
import './quickFixAddon.js';
import './terminalQuickFixBuiltinActions.js';
import './terminalQuickFixService.js';
import '../../../../../css!vs/workbench/contrib/terminalContrib/quickFix/browser/media/terminalQuickFix.js';
define(
			de[4044],
			he([
				1, 0, 27, 3, 4, 20, 5, 43, 363, 378, 237, 998, 3315, 3164, 3332, 2499,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*lifecycle*/,
 w /*nls*/,
 E /*extensions*/,
 C /*instantiation*/,
 d /*keybindingsRegistry*/,
 m /*terminalActions*/,
 r /*terminalExtensions*/,
 u /*terminalContextKey*/,
 a /*quickFix*/,
 h /*quickFixAddon*/,
 c /*terminalQuickFixBuiltinActions*/,
 n /*terminalQuickFixService*/) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, E.$lK)(a.$Eoc, n.$OWc, E.InstantiationType.Delayed);
				let p = class extends i.$Zc {
					static {
						g = this;
					}
					static {
						this.ID = "quickFix";
					}
					static get(b) {
						return b.getContribution(g.ID);
					}
					get addon() {
						return this.a;
					}
					constructor(b, s, l, y) {
						super(), (this.b = b), (this.c = y);
					}
					xtermReady(b) {
						(this.a = this.c.createInstance(
							h.$uWc,
							void 0,
							this.b.capabilities,
						)),
							b.raw.loadAddon(this.a),
							this.add(
								this.a.onDidRequestRerunCommand((s) =>
									this.b.runCommand(s.command, s.shouldExecute || !1),
								),
							);
						for (const s of [
							(0, c.$IWc)(),
							(0, c.$HWc)(),
							(0, c.$JWc)((l, y) => this.b.freePortKillProcess(l, y)),
							(0, c.$GWc)(),
							(0, c.$KWc)(),
							(0, c.$LWc)(),
							(0, c.$NWc)(),
							(0, c.$MWc)(),
						])
							this.a.registerCommandFinishedListener(s);
					}
				};
				(p = g = Ne([j(3, C.$Li)], p)), (0, r.$qLc)(p.ID, p);
				var o;
				(function (f) {
					f.ShowQuickFixes = "workbench.action.terminal.showQuickFixes";
				})(o || (o = {})),
					(0, m.$GUc)({
						id: o.ShowQuickFixes,
						title: (0, w.localize2)(10558, "Show Terminal Quick Fixes"),
						precondition: u.TerminalContextKeys.focus,
						keybinding: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.Period,
							weight: d.KeybindingWeight.WorkbenchContrib,
						},
						run: (f) => p.get(f)?.addon?.showMenu(),
					});
			},
		),
		