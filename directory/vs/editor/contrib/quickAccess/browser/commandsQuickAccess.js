import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/iconLabels.js';
import '../../../../platform/action/common/action.js';
import '../../../../platform/quickinput/browser/commandsQuickAccess.js';
define(de[2900], he([1, 0, 274, 599, 679]), function (ce /*require*/,
 e /*exports*/,
 t /*iconLabels*/,
 i /*action*/,
 w /*commandsQuickAccess*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$NMc = void 0);
			class E extends w.$P0b {
				constructor(d, m, r, u, a, h) {
					super(d, m, r, u, a, h);
				}
				L() {
					const d = this.J;
					if (!d) return [];
					const m = [];
					for (const r of d.getSupportedActions()) {
						let u;
						r.metadata?.description &&
							((0, i.$gk)(r.metadata.description)
								? (u = r.metadata.description)
								: (u = {
										original: r.metadata.description,
										value: r.metadata.description,
									})),
							m.push({
								commandId: r.id,
								commandAlias: r.alias,
								commandDescription: u,
								label: (0, t.$$k)(r.label) || r.id,
							});
					}
					return m;
				}
			}
			e.$NMc = E;
		})
