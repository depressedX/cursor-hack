import '../../../require.js';
import '../../../exports.js';
define(de[1427], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.parseUrl = t),
				(e.stripUrlQueryAndFragment = i),
				(e.getNumberOfUrlSegments = w),
				(e.getSanitizedUrlString = E);
			function t(C) {
				if (!C) return {};
				const d = C.match(
					/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
				);
				if (!d) return {};
				const m = d[6] || "",
					r = d[8] || "";
				return {
					host: d[4],
					path: d[5],
					protocol: d[2],
					search: m,
					hash: r,
					relative: d[5] + m + r,
				};
			}
			function i(C) {
				return C.split(/[?#]/, 1)[0];
			}
			function w(C) {
				return C.split(/\\?\//).filter((d) => d.length > 0 && d !== ",").length;
			}
			function E(C) {
				const { protocol: d, host: m, path: r } = C,
					u =
						(m &&
							m
								.replace(/^.*@/, "[filtered]:[filtered]@")
								.replace(/(:80)$/, "")
								.replace(/(:443)$/, "")) ||
						"";
				return `${d ? `${d}://` : ""}${u}${r}`;
			}
		}),
		