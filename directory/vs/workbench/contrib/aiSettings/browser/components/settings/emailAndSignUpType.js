import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import './hooks.js';
import '../../../../../services/cursorAuth/browser/authenticationService.js';
define(
			de[4137],
			he([1, 0, 2, 2, 2, 2, 13, 722, 232]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*hooks*/,
 m /*authenticationService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jDc = u);
				const r = (0, t.template)(
					'<div class="settings__item_description">You are currently signed in with <strong></strong>.',
				);
				function u() {
					const [a, h, c, n, g] = (0, d.$B$b)(),
						p = (0, C.createMemo)(() => {
							switch (g()) {
								case m.SignUpType.AUTH_0:
									return ["Google", "Github"];
								case m.SignUpType.GITHUB:
									return ["your email", "Google"];
								case m.SignUpType.GOOGLE:
									return ["your email", "Github"];
							}
							return [];
						});
					return (0, i.createComponent)(C.Show, {
						get when() {
							return (
								(0, E.memo)(
									() => n() !== "" && g() !== m.SignUpType.UNKNOWN,
								)() && a()
							);
						},
						get children() {
							const o = r(),
								f = o.firstChild,
								b = f.nextSibling;
							return (0, w.insert)(b, n), o;
						},
					});
				}
			},
		)
