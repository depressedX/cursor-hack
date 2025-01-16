define(de[775], he([1, 0, 12]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Beb = i),
				(e.$Ceb = w),
				(e.$Deb = E),
				(e.$Eeb = C);
			function i(d) {
				let m = d;
				m.includes("\\") && (m = m.replace(/\\/g, "\\\\"));
				const r = /[\`\$\|\&\>\~\#\!\^\*\;\<\"\']/g;
				return (m = m.replace(r, "")), `'${m}'`;
			}
			function w(d, m, r) {
				if (!d) return "";
				if (!m) return d;
				m.match(/[\/\\]$/) && (m = m.slice(0, m.length - 1));
				const u = d.replace(/\\/g, "/").toLowerCase(),
					a = m.replace(/\\/g, "/").toLowerCase();
				return u.includes(a) ? `~${r}${d.slice(m.length + 1)}` : d;
			}
			function E(d) {
				return (
					d.match(/^['"].*['"]$/) && (d = d.substring(1, d.length - 1)),
					t.OS === t.OperatingSystem.Windows && d && d[1] === ":"
						? d[0].toUpperCase() + d.substring(1)
						: d
				);
			}
			function C(d) {
				return !d.strictEnv;
			}
		}),
		