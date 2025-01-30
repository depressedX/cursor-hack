import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/objects.js';
import './extHost.protocol.js';
import './extHostInitDataService.js';
import './extHostRpcService.js';
define(Pe[542], Ne([1, 0, 27, 6, 34, 21]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$jjd = void 0);
			let P = class {
				constructor(p, y) {
					(this.a = p.getProxy(r.$lbb.MainThreadConsole)),
						(this.b = y.consoleForward.includeStack),
						(this.c = y.consoleForward.logNative),
						this.d("info", "log"),
						this.d("log", "log"),
						this.d("warn", "warn"),
						this.d("debug", "debug"),
						this.d("error", "error");
				}
				d(p, y) {
					const d = this,
						k = console[p];
					Object.defineProperty(console, p, {
						set: () => {},
						get: () =>
							function () {
								d.e(p, y, k, arguments);
							},
					});
				}
				e(p, y, d, k) {
					this.a.$logExtensionHostMessage({
						type: "__$console",
						severity: y,
						arguments: l(k, this.b),
					}),
						this.c && this.f(p, d, k);
				}
			};
			(t.$jjd = P), (t.$jjd = P = wt([rt(0, N.$08), rt(1, S.$98)], P));
			const I = 1e5;
			function l(n, p) {
				const y = [];
				if (n.length)
					for (let d = 0; d < n.length; d++) {
						let k = n[d];
						if (typeof k > "u") k = "undefined";
						else if (k instanceof Error) {
							const g = k;
							g.stack ? (k = g.stack) : (k = g.toString());
						}
						y.push(k);
					}
				if (p) {
					const d = new Error().stack;
					d &&
						y.push({
							__$stack: d
								.split(`
`)
								.slice(3)
								.join(`
`),
						});
				}
				try {
					const d = (0, e.$Ao)(y);
					return d.length > I
						? "Output omitted for a large object that exceeds the limits"
						: d;
				} catch (d) {
					return `Output omitted for an object that cannot be inspected ('${d.toString()}')`;
				}
			}
		}),
		