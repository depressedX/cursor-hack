import '../../../require.js';
import '../../../exports.js';
import '../../../fs.js';
import '../common/path.js';
import '../common/platform.js';
import '../common/process.js';
import '../common/processes.js';
import '../common/types.js';
import './pfs.js';
define(
			Pe[177],
			Ne([1, 0, 59, 18, 13, 80, 174, 19, 43]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.win32 = t.TerminateResponseCode = t.Source = void 0),
					(t.$Mm = n),
					(t.$Nm = p),
					(r = tt(r)),
					(S = tt(S)),
					(N = tt(N)),
					(I = tt(I)),
					(l = tt(l)),
					Object.defineProperty(t, "Source", {
						enumerable: !0,
						get: function () {
							return P.Source;
						},
					}),
					Object.defineProperty(t, "TerminateResponseCode", {
						enumerable: !0,
						get: function () {
							return P.TerminateResponseCode;
						},
					});
				function n(d = N.env) {
					return d.comspec || "cmd.exe";
				}
				function p(d) {
					let k = [],
						g = !1;
					const c = function (h) {
						if (g) {
							k.push(h);
							return;
						}
						(!d.send(h, (T) => {
							if ((T && console.error(T), (g = !1), k.length > 0)) {
								const a = k.slice(0);
								(k = []), a.forEach((u) => c(u));
							}
						}) ||
							S.$l) &&
							(g = !0);
					};
					return { send: c };
				}
				var y;
				(function (d) {
					async function k(g, c, h) {
						if (r.$nc(g)) return g;
						if (
							(c === void 0 && (c = N.cwd()),
							r.$rc(g) !== "." ||
								(h === void 0 &&
									I.$lg(N.env.PATH) &&
									(h = N.env.PATH.split(r.$yc)),
								h === void 0 || h.length === 0))
						)
							return r.$oc(c, g);
						async function T(a) {
							if (await l.Promises.exists(a)) {
								let u;
								try {
									u = await e.promises.stat(a);
								} catch (s) {
									s.message.startsWith("EACCES") &&
										(u = await e.promises.lstat(a));
								}
								return u ? !u.isDirectory() : !1;
							}
							return !1;
						}
						for (const a of h) {
							let u;
							if (
								(r.$nc(a) ? (u = r.$oc(a, g)) : (u = r.$oc(c, a, g)),
								await T(u))
							)
								return u;
							let s = u + ".com";
							if ((await T(s)) || ((s = u + ".exe"), await T(s))) return s;
						}
						return r.$oc(c, g);
					}
					d.findExecutable = k;
				})(y || (t.win32 = y = {}));
			},
		);
	var wt =
		(this && this.__decorate) ||
		function (we, t, e, r) {
			var S = arguments.length,
				N =
					S < 3
						? t
						: r === null
							? (r = Object.getOwnPropertyDescriptor(t, e))
							: r,
				P;
			if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
				N = Reflect.decorate(we, t, e, r);
			else
				for (var I = we.length - 1; I >= 0; I--)
					(P = we[I]) &&
						(N = (S < 3 ? P(N) : S > 3 ? P(t, e, N) : P(t, e)) || N);
			return S > 3 && N && Object.defineProperty(t, e, N), N;
		};
	