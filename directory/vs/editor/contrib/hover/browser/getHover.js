import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../browser/editorExtensions.js';
import '../../../common/services/languageFeatures.js';
define(
			de[1643],
			he([1, 0, 15, 33, 29, 46, 69]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZDb = void 0),
					(e.$1Db = r),
					(e.$2Db = u);
				class d {
					constructor(c, n, g) {
						(this.provider = c), (this.hover = n), (this.ordinal = g);
					}
				}
				e.$ZDb = d;
				async function m(h, c, n, g, p) {
					const o = await Promise.resolve(h.provideHover(n, g, p)).catch(w.$5);
					if (!(!o || !a(o))) return new d(h, o, c);
				}
				function r(h, c, n, g, p = !1) {
					const f = h.ordered(c, p).map((b, s) => m(b, s, c, n, g));
					return t.$ai.fromPromises(f).coalesce();
				}
				function u(h, c, n, g, p = !1) {
					return r(h, c, n, g, p)
						.map((o) => o.hover)
						.toPromise();
				}
				(0, E.$ltb)("_executeHoverProvider", (h, c, n) => {
					const g = h.get(C.$k3);
					return u(g.hoverProvider, c, n, i.CancellationToken.None);
				}),
					(0, E.$ltb)("_executeHoverProvider_recursive", (h, c, n) => {
						const g = h.get(C.$k3);
						return u(g.hoverProvider, c, n, i.CancellationToken.None, !0);
					});
				function a(h) {
					const c = typeof h.range < "u",
						n = typeof h.contents < "u" && h.contents && h.contents.length > 0;
					return c && n;
				}
			},
		),
		