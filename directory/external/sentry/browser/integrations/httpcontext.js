import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../helpers.js';
define(de[1457], he([1, 0, 144, 386]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*helpers*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.httpContextIntegration = void 0),
				(e.httpContextIntegration = (0, t.defineIntegration)(() => ({
					name: "HttpContext",
					preprocessEvent(w) {
						if (!i.WINDOW.navigator && !i.WINDOW.location && !i.WINDOW.document)
							return;
						const E =
								(w.request && w.request.url) ||
								(i.WINDOW.location && i.WINDOW.location.href),
							{ referrer: C } = i.WINDOW.document || {},
							{ userAgent: d } = i.WINDOW.navigator || {},
							m = {
								...(w.request && w.request.headers),
								...(C && { Referer: C }),
								...(d && { "User-Agent": d }),
							},
							r = { ...w.request, ...(E && { url: E }), headers: m };
						w.request = r;
					},
				})));
		}),
		