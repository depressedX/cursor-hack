import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/severity.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/dialogs/common/dialogs.js';
import '../../../../services/authentication/browser/authenticationAccessService.js';
import '../../../../services/authentication/browser/authenticationUsageService.js';
import '../../../../services/authentication/common/authentication.js';
define(
		de[3245],
		he([1, 0, 111, 4, 11, 57, 621, 822, 357]),
		function (ce /*require*/,
 e /*exports*/,
 t /*severity*/,
 i /*nls*/,
 w /*actions*/,
 E /*dialogs*/,
 C /*authenticationAccessService*/,
 d /*authenticationUsageService*/,
 m /*authentication*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_Zc = void 0),
				(t = xi(t));
			class r extends w.$3X {
				constructor() {
					super({
						id: "_signOutOfAccount",
						title: (0, i.localize)(4445, null),
						f1: !1,
					});
				}
				async run(a, { providerId: h, accountLabel: c }) {
					const n = a.get(m.$$7),
						g = a.get(d.$dqc),
						p = a.get(C.$dsb),
						o = a.get(E.$GO);
					if (!h || !c)
						throw new Error(
							"Invalid arguments. Expected: { providerId: string; accountLabel: string }",
						);
					const b = (await n.getSessions(h)).filter(
							(y) => y.account.label === c,
						),
						s = g.readAccountUsages(h, c),
						{ confirmed: l } = await o.confirm({
							type: t.default.Info,
							message: s.length
								? (0, i.localize)(
										4446,
										null,
										c,
										s
											.map((y) => y.extensionName)
											.join(`
`),
									)
								: (0, i.localize)(4447, null, c),
							primaryButton: (0, i.localize)(4448, null),
						});
					if (l) {
						const y = b.map(($) => n.removeSession(h, $.id));
						await Promise.all(y),
							g.removeAccountUsage(h, c),
							p.removeAllowedExtensions(h, c);
					}
				}
			}
			e.$_Zc = r;
		},
	),
		