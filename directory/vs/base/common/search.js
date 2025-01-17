import '../../../require.js';
import '../../../exports.js';
import './strings.js';
define(de[1507], he([1, 0, 37]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$7pb = i),
				(t = mt(t));
			function i(C, d) {
				if (C && C[0] !== "") {
					const m = w(C, d, "-"),
						r = w(C, d, "_");
					return m && !r
						? E(C, d, "-")
						: !m && r
							? E(C, d, "_")
							: C[0].toUpperCase() === C[0]
								? d.toUpperCase()
								: C[0].toLowerCase() === C[0]
									? d.toLowerCase()
									: t.$cg(C[0][0]) && d.length > 0
										? d[0].toUpperCase() + d.substr(1)
										: C[0][0].toUpperCase() !== C[0][0] && d.length > 0
											? d[0].toLowerCase() + d.substr(1)
											: d;
				} else return d;
			}
			function w(C, d, m) {
				return (
					C[0].indexOf(m) !== -1 &&
					d.indexOf(m) !== -1 &&
					C[0].split(m).length === d.split(m).length
				);
			}
			function E(C, d, m) {
				const r = d.split(m),
					u = C[0].split(m);
				let a = "";
				return (
					r.forEach((h, c) => {
						a += i([u[c]], h) + m;
					}),
					a.slice(0, -1)
				);
			}
		}),
		