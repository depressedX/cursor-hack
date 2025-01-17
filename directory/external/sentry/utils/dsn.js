import '../../../require.js';
import '../../../exports.js';
import './debug-build.js';
import './logger.js';
define(de[1431], he([1, 0, 577, 527]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.dsnToString = C),
				(e.dsnFromString = d),
				(e.makeDsn = u);
			const w =
				/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
			function E(a) {
				return a === "http" || a === "https";
			}
			function C(a, h = !1) {
				const {
					host: c,
					path: n,
					pass: g,
					port: p,
					projectId: o,
					protocol: f,
					publicKey: b,
				} = a;
				return `${f}://${b}${h && g ? `:${g}` : ""}@${c}${p ? `:${p}` : ""}/${n && `${n}/`}${o}`;
			}
			function d(a) {
				const h = w.exec(a);
				if (!h) {
					(0, i.consoleSandbox)(() => {
						console.error(`Invalid Sentry Dsn: ${a}`);
					});
					return;
				}
				const [c, n, g = "", p = "", o = "", f = ""] = h.slice(1);
				let b = "",
					s = f;
				const l = s.split("/");
				if (
					(l.length > 1 && ((b = l.slice(0, -1).join("/")), (s = l.pop())), s)
				) {
					const y = s.match(/^\d+/);
					y && (s = y[0]);
				}
				return m({
					host: p,
					pass: g,
					path: b,
					projectId: s,
					port: o,
					protocol: c,
					publicKey: n,
				});
			}
			function m(a) {
				return {
					protocol: a.protocol,
					publicKey: a.publicKey || "",
					pass: a.pass || "",
					host: a.host,
					port: a.port || "",
					path: a.path || "",
					projectId: a.projectId,
				};
			}
			function r(a) {
				if (!t.DEBUG_BUILD) return !0;
				const { port: h, projectId: c, protocol: n } = a;
				return ["protocol", "publicKey", "host", "projectId"].find((o) =>
					a[o] ? !1 : (i.logger.error(`Invalid Sentry Dsn: ${o} missing`), !0),
				)
					? !1
					: c.match(/^\d+$/)
						? E(n)
							? h && isNaN(parseInt(h, 10))
								? (i.logger.error(`Invalid Sentry Dsn: Invalid port ${h}`), !1)
								: !0
							: (i.logger.error(`Invalid Sentry Dsn: Invalid protocol ${n}`),
								!1)
						: (i.logger.error(`Invalid Sentry Dsn: Invalid projectId ${c}`),
							!1);
			}
			function u(a) {
				const h = typeof a == "string" ? d(a) : m(a);
				if (!(!h || !r(h))) return h;
			}
		}),
		