import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../browser/parts/views/viewPane.js';
import '../../../../browser/dnd.js';
import '../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../common/views.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/browser/dom.js';
import '../../../../../platform/hover/browser/hover.js';
define(
			de[4021],
			he([
				1, 0, 4, 5, 35, 39, 49, 25, 10, 146, 362, 51, 73, 8, 60, 41, 32, 12, 7,
				72,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*instantiation*/,
 w /*themeService*/,
 E /*keybinding*/,
 C /*contextView*/,
 d /*workspace*/,
 m /*configuration*/,
 r /*viewPane*/,
 u /*dnd*/,
 a /*colorRegistry*/,
 h /*label*/,
 c /*contextkey*/,
 n /*views*/,
 g /*opener*/,
 p /*telemetry*/,
 o /*platform*/,
 f /*dom*/,
 b /*hover*/) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oAc = void 0),
					(t = mt(t));
				let l = class extends r.$TMb {
					static {
						s = this;
					}
					static {
						this.ID = "workbench.explorer.emptyView";
					}
					static {
						this.NAME = t.localize2(6982, "No Folder Opened");
					}
					constructor($, v, S, I, T, P, k, L, D, M, N, A, R) {
						super($, T, P, L, M, S, I, N, v, A, R),
							(this.b = k),
							(this.c = D),
							(this.a = !1),
							this.D(this.b.onDidChangeWorkbenchState(() => this.g())),
							this.D(this.c.onDidChangeFormatters(() => this.g()));
					}
					shouldShowWelcome() {
						return !0;
					}
					W($) {
						super.W($),
							this.D(
								new f.$Hhb($, {
									onDrop: (v) => {
										($.style.backgroundColor = ""),
											this.Db.createInstance(u.$OSb, {
												allowWorkspaceOpen:
													!o.$r || (0, d.$bj)(this.b.getWorkspace()),
											}).handleDrop(v, (0, f.getWindow)($));
									},
									onDragEnter: () => {
										const v = this.Fb.getColorTheme().getColor(a.$OS);
										$.style.backgroundColor = v ? v.toString() : "";
									},
									onDragEnd: () => {
										$.style.backgroundColor = "";
									},
									onDragLeave: () => {
										$.style.backgroundColor = "";
									},
									onDragOver: (v) => {
										v.dataTransfer && (v.dataTransfer.dropEffect = "copy");
									},
								}),
							),
							this.g();
					}
					g() {
						this.a ||
							(this.b.getWorkbenchState() === d.WorkbenchState.WORKSPACE
								? this.Sb(s.NAME.value)
								: this.Sb(this.title));
					}
					dispose() {
						(this.a = !0), super.dispose();
					}
				};
				(e.$oAc = l),
					(e.$oAc =
						l =
						s =
							Ne(
								[
									j(1, w.$iP),
									j(2, n.$K1),
									j(3, i.$Li),
									j(4, E.$uZ),
									j(5, C.$Xxb),
									j(6, d.$Vi),
									j(7, m.$gj),
									j(8, h.$3N),
									j(9, c.$6j),
									j(10, g.$7rb),
									j(11, p.$km),
									j(12, b.$Uyb),
								],
								l,
							));
			},
		),
		