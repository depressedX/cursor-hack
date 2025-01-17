import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../services/cursorAuth/browser/authenticationService.js';
define(de[722], he([1, 0, 13, 134, 36, 232]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$B$b = C);
			function C() {
				const d = (0, w.$odc)(),
					m = d.aiSettingsService,
					r = d.cursorAuthenticationService,
					[u, a] = (0, t.createSignal)(!1),
					[h, c] = (0, t.createSignal)(i.MembershipType.FREE),
					[n, g] = (0, t.createSignal)(m.getUseOpenAIKey()),
					[p, o] = (0, t.createSignal)(""),
					[f, b] = (0, t.createSignal)(E.SignUpType.UNKNOWN);
				return (
					(0, t.createEffect)(() => {
						d.cursorAuthenticationService
							.getEmailAndSignUpType()
							.then(({ email: s, signUpType: l }) => {
								s && o(s), l && b(l);
							});
					}),
					(0, t.createEffect)(() => {
						const s = ($) => {
								a($);
							},
							l = ($) => {
								c($);
							},
							y = () => {
								d.cursorAuthenticationService.refreshAuthService(),
									d.cursorAuthenticationService
										.getEmailAndSignUpType()
										.then(({ email: $, signUpType: v }) => {
											$ && o($), v && b(v);
										});
							};
						r.addLoginChangedListener(s),
							r.addSubscriptionChangedListener(l),
							r.addLoginChangedListener(y),
							m.addOpenAIKeyListener(g),
							a(r.isAuthenticated()),
							c(r.membershipType()),
							(0, t.onCleanup)(() => {
								m.removeOpenAIKeyListener(g),
									r.removeLoginChangedListener(s),
									r.removeSubscriptionChangedListener(l),
									r.removeLoginChangedListener(y);
							});
					}),
					[u, h, n, p, f]
				);
			}
		}),
		