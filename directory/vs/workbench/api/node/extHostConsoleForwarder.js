import '../../../../require.js';
import '../../../../exports.js';
import '../common/extHostConsoleForwarder.js';
import '../common/extHostInitDataService.js';
import '../common/extHostRpcService.js';
import '../../services/extensions/common/extensionHostProtocol.js';
define(Pe[553], Ne([1, 0, 542, 34, 21, 142]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Wjd = void 0);
			const P = 1024 * 1024;
			let I = class extends e.$jjd {
				constructor(n, p) {
					super(n, p),
						(this.g = !1),
						this.j("stderr", "error"),
						this.j("stdout", "log");
				}
				f(n, p, y) {
					const d =
						n === "error" || n === "warn" ? process.stderr : process.stdout;
					(this.g = !0),
						d.write(`
${N.NativeLogMarkers.Start}
`),
						p.apply(console, y),
						d.write(`
${N.NativeLogMarkers.End}
`),
						(this.g = !1);
				}
				j(n, p) {
					const y = process[n],
						d = y.write;
					let k = "";
					Object.defineProperty(y, "write", {
						set: () => {},
						get: () => (g, c, h) => {
							if (!this.g) {
								k += g.toString(c);
								const $ =
									k.length > P
										? k.length
										: k.lastIndexOf(`
`);
								$ !== -1 && (console[p](k.slice(0, $)), (k = k.slice($ + 1)));
							}
							d.call(y, g, c, h);
						},
					});
				}
			};
			(t.$Wjd = I), (t.$Wjd = I = wt([rt(0, S.$08), rt(1, r.$98)], I));
		}),
		