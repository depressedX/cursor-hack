import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
define(de[1094], he([1, 0, 80]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getEnvelopeEndpointWithUrlEncodedAuth = d),
				(e.getReportDialogEndpoint = m);
			const i = "7";
			function w(r) {
				const u = r.protocol ? `${r.protocol}:` : "",
					a = r.port ? `:${r.port}` : "";
				return `${u}//${r.host}${a}${r.path ? `/${r.path}` : ""}/api/`;
			}
			function E(r) {
				return `${w(r)}${r.projectId}/envelope/`;
			}
			function C(r, u) {
				return (0, t.urlEncode)({
					sentry_key: r.publicKey,
					sentry_version: i,
					...(u && { sentry_client: `${u.name}/${u.version}` }),
				});
			}
			function d(r, u, a) {
				return u || `${E(r)}?${C(r, a)}`;
			}
			function m(r, u) {
				const a = (0, t.makeDsn)(r);
				if (!a) return "";
				const h = `${w(a)}embed/error-page/`;
				let c = `dsn=${(0, t.dsnToString)(a)}`;
				for (const n in u)
					if (n !== "dsn" && n !== "onClose")
						if (n === "user") {
							const g = u.user;
							if (!g) continue;
							g.name && (c += `&name=${encodeURIComponent(g.name)}`),
								g.email && (c += `&email=${encodeURIComponent(g.email)}`);
						} else c += `&${encodeURIComponent(n)}=${encodeURIComponent(u[n])}`;
				return `${h}?${c}`;
			}
		}),
		