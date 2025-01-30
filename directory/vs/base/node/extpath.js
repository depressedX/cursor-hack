import '../../../require.js';
import '../../../exports.js';
import '../../../fs.js';
import '../common/path.js';
import '../common/platform.js';
import '../common/strings.js';
import './pfs.js';
define(
			Pe[176],
			Ne([1, 0, 59, 18, 13, 15, 43]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Nr = I),
					(t.$Or = l),
					(t.$Pr = n),
					(t.$Qr = p),
					(e = tt(e));
				function I(d) {
					if (S.$n) return d;
					const k = (0, r.$rc)(d);
					if (d === k) return d;
					const g = ((0, r.$sc)(d) || d).toLowerCase();
					try {
						const h = (0, P.readdirSync)(k).filter(
							($) => $.toLowerCase() === g,
						);
						if (h.length === 1) {
							const $ = I(k);
							if ($) return (0, r.$oc)($, h[0]);
						} else if (h.length > 1) {
							const $ = h.indexOf(g);
							if ($ >= 0) {
								const T = I(k);
								if (T) return (0, r.$oc)(T, h[$]);
							}
						}
					} catch {}
					return null;
				}
				async function l(d, k) {
					if (S.$n) return d;
					const g = (0, r.$rc)(d);
					if (d === g) return d;
					const c = ((0, r.$sc)(d) || d).toLowerCase();
					try {
						if (k?.isCancellationRequested) return null;
						const $ = (await P.Promises.readdir(g)).filter(
							(T) => T.toLowerCase() === c,
						);
						if ($.length === 1) {
							const T = await l(g, k);
							if (T) return (0, r.$oc)(T, $[0]);
						} else if ($.length > 1) {
							const T = $.indexOf(c);
							if (T >= 0) {
								const a = await l(g, k);
								if (a) return (0, r.$oc)(a, $[T]);
							}
						}
					} catch {}
					return null;
				}
				async function n(d) {
					try {
						return await P.Promises.realpath(d);
					} catch {
						const g = y(d);
						return await e.promises.access(g, e.constants.R_OK), g;
					}
				}
				function p(d) {
					try {
						return e.realpathSync(d);
					} catch {
						const g = y(d);
						return e.accessSync(g, e.constants.R_OK), g;
					}
				}
				function y(d) {
					return (0, N.$uf)((0, r.$mc)(d), r.sep);
				}
			},
		),
		