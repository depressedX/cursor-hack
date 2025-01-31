import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../controlCommon/browser/solid.js';
import './components/errorPopup.js';
define(de[4254], he([1, 0, 2, 36, 4253]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*errorPopup*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6Zc = E);
			function E(C, d, m, r) {
				return (0, i.$ndc)(
					() =>
						(0, t.createComponent)(w.$4Zc, {
							error: C,
							closePopup: () => {
								r?.();
							},
						}),
					d,
					m,
				);
			}
		})
