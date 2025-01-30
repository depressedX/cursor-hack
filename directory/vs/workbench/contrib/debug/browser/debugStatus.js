import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../common/debug.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/statusbar/browser/statusbar.js';
define(
			de[3629],
			he([1, 0, 4, 3, 112, 10, 166]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*lifecycle*/,
 w /*debug*/,
 E /*configuration*/,
 C /*statusbar*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Qc = void 0),
					(t = mt(t));
				let d = class {
					constructor(r, u, a) {
						(this.d = r), (this.f = u), (this.b = []);
						const h = () => {
								this.c = this.d.addEntry(
									this.g,
									"status.debug",
									C.StatusbarAlignment.LEFT,
									30,
								);
							},
							c = () => {
								(this.a = a.getValue("debug").showInStatusBar),
									this.a === "always" && !this.c && h();
							};
						c(),
							this.b.push(
								this.f.onDidChangeState((n) => {
									n !== w.State.Inactive &&
										this.a === "onFirstSessionStart" &&
										!this.c &&
										h();
								}),
							),
							this.b.push(
								a.onDidChangeConfiguration((n) => {
									n.affectsConfiguration("debug.showInStatusBar") &&
										(c(),
										this.c &&
											this.a === "never" &&
											(this.c.dispose(), (this.c = void 0)));
								}),
							),
							this.b.push(
								this.f
									.getConfigurationManager()
									.onDidSelectConfiguration((n) => {
										this.c?.update(this.g);
									}),
							);
					}
					get g() {
						let r = "";
						const u = this.f.getConfigurationManager(),
							a = u.selectedConfiguration.name || "";
						return (
							a &&
								u.selectedConfiguration.launch &&
								(r =
									u.getLaunches().length > 1
										? `${a} (${u.selectedConfiguration.launch.name})`
										: a),
							{
								name: t.localize(5635, null),
								text: "$(debug-alt-small) " + r,
								ariaLabel: t.localize(5636, null, r),
								tooltip: t.localize(5637, null),
								command: "workbench.action.debug.selectandstart",
							}
						);
					}
					dispose() {
						this.c?.dispose(), (0, i.$Vc)(this.b);
					}
				};
				(e.$5Qc = d),
					(e.$5Qc = d = Ne([j(0, C.$d6b), j(1, w.$75), j(2, E.$gj)], d));
			},
		),
		