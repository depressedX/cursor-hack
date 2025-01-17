import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/contributions.js';
import '../../../../platform/markers/common/markers.js';
import '../../../services/decorations/common/decorations.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3431],
			he([1, 0, 55, 90, 472, 3, 4, 30, 51, 10, 81, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class h {
					constructor(g) {
						(this.a = g),
							(this.label = (0, C.localize)(7484, null)),
							(this.onDidChange = g.onMarkerChanged);
					}
					provideDecorations(g) {
						const p = this.a.read({
							resource: g,
							severities: i.MarkerSeverity.Error | i.MarkerSeverity.Warning,
						});
						let o;
						for (const f of p) (!o || f.severity > o.severity) && (o = f);
						if (o)
							return {
								weight: 100 * o.severity,
								bubble: !0,
								tooltip:
									p.length === 1
										? (0, C.localize)(7485, null)
										: (0, C.localize)(7486, null, p.length),
								letter: p.length < 10 ? p.length.toString() : "9+",
								color: o.severity === i.MarkerSeverity.Error ? m.$TS : m.$US,
							};
					}
				}
				let c = class {
					constructor(g, p, o) {
						(this.d = g),
							(this.f = p),
							(this.g = o),
							(this.a = [
								this.g.onDidChangeConfiguration((f) => {
									f.affectsConfiguration("problems.visibility") && this.h();
								}),
							]),
							this.h();
					}
					dispose() {
						(0, E.$Vc)(this.b), (0, E.$Vc)(this.a);
					}
					h() {
						const g = this.g.getValue("problems.visibility");
						if (g === void 0) return;
						const p = this.g.getValue("problems"),
							o = g && p.decorations.enabled;
						if (o === this.c) {
							(!g || !p.decorations.enabled) &&
								(this.b?.dispose(), (this.b = void 0));
							return;
						}
						if (((this.c = o), this.c)) {
							const f = new h(this.d);
							this.b = this.f.registerDecorationsProvider(f);
						} else this.b && this.b.dispose();
					}
				};
				(c = Ne([j(0, i.$aM), j(1, w.$sPb), j(2, r.$gj)], c)),
					d.$Io
						.as(u.$No.Configuration)
						.registerConfiguration({
							id: "problems",
							order: 101,
							type: "object",
							properties: {
								"problems.decorations.enabled": {
									markdownDescription: (0, C.localize)(
										7487,
										null,
										"`#problems.visibility#`",
									),
									type: "boolean",
									default: !0,
								},
							},
						}),
					d.$Io
						.as(t.Extensions.Workbench)
						.registerWorkbenchContribution(c, a.LifecyclePhase.Restored);
			},
		),
		