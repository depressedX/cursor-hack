import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3713], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Vvc = t);
			function t(E, C, d) {
				const m = w(E);
				let r = m.next();
				for (; r !== null; ) {
					let c = 0;
					if (r.length === 2 && r.charAt(1) === ":") {
						switch (r.charAt(0)) {
							case "R":
								c = 1;
								break;
							case "L":
								c = -1;
								break;
							default:
								console.log(`Unknown priority ${r} in scope selector`);
						}
						r = m.next();
					}
					const n = a();
					if ((n && d.push({ matcher: n, priority: c }), r !== ",")) break;
					r = m.next();
				}
				function u() {
					if (r === "-") {
						r = m.next();
						const c = u();
						return c ? (n) => (c(n) < 0 ? 0 : -1) : null;
					}
					if (r === "(") {
						r = m.next();
						const c = h();
						return r === ")" && (r = m.next()), c;
					}
					if (i(r)) {
						const c = [];
						do c.push(r), (r = m.next());
						while (i(r));
						return (n) => C(c, n);
					}
					return null;
				}
				function a() {
					let c = u();
					if (!c) return null;
					const n = [];
					for (; c; ) n.push(c), (c = u());
					return (g) => {
						let p = n[0](g);
						for (let o = 1; p >= 0 && o < n.length; o++)
							p = Math.min(p, n[o](g));
						return p;
					};
				}
				function h() {
					let c = a();
					if (!c) return null;
					const n = [];
					for (; c && (n.push(c), r === "|" || r === ","); ) {
						do r = m.next();
						while (r === "|" || r === ",");
						c = a();
					}
					return (g) => {
						let p = n[0](g);
						for (let o = 1; o < n.length; o++) p = Math.max(p, n[o](g));
						return p;
					};
				}
			}
			function i(E) {
				return !!E && !!E.match(/[\w\.:]+/);
			}
			function w(E) {
				const C = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
				let d = C.exec(E);
				return {
					next: () => {
						if (!d) return null;
						const m = d[0];
						return (d = C.exec(E)), m;
					},
				};
			}
		}),
		