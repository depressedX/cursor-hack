import '../../../../require.js';
import '../../../../exports.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/lifecycle.js';
import './statusBarExtensionPoint.js';
import '../../services/statusbar/browser/statusbar.js';
define(
			de[3622],
			he([1, 0, 88, 101, 3, 1872, 166]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extHost.protocol*/,
 i /*extHostCustomers*/,
 w /*lifecycle*/,
 E /*statusBarExtensionPoint*/,
 C /*statusbar*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qoc = void 0);
				let d = class {
					constructor(r, u) {
						(this.b = u), (this.a = new w.$Zc());
						const a = r.getProxy(t.$mbb.ExtHostStatusBar),
							h = [];
						for (const [n, g] of u.getEntries()) h.push(c(n, g));
						a.$acceptStaticEntries(h),
							this.a.add(
								u.onDidChange((n) => {
									n.added &&
										a.$acceptStaticEntries([c(n.added[0], n.added[1])]);
								}),
							);
						function c(n, g) {
							return {
								entryId: n,
								name: g.entry.name,
								text: g.entry.text,
								tooltip: g.entry.tooltip,
								command:
									typeof g.entry.command == "string"
										? g.entry.command
										: typeof g.entry.command == "object"
											? g.entry.command.id
											: void 0,
								priority: g.priority,
								alignLeft: g.alignment === C.StatusbarAlignment.LEFT,
								accessibilityInformation: g.entry.ariaLabel
									? { label: g.entry.ariaLabel, role: g.entry.role }
									: void 0,
							};
						}
					}
					dispose() {
						this.a.dispose();
					}
					$setEntry(r, u, a, h, c, n, g, p, o, f, b, s) {
						this.b.setOrUpdateEntry(r, u, a, h, c, n, g, p, o, f, b, s) ===
							E.StatusBarUpdateKind.DidDefine &&
							this.a.add((0, w.$Yc)(() => this.b.unsetEntry(r)));
					}
					$disposeEntry(r) {
						this.b.unsetEntry(r);
					}
				};
				(e.$qoc = d),
					(e.$qoc = d =
						Ne([(0, i.$tmc)(t.$lbb.MainThreadStatusBar), j(1, E.$rmc)], d));
			},
		),
		