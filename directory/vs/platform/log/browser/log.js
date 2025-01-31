import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/window.js';
import '../../../base/common/resources.js';
import '../common/log.js';
define(de[2743], he([1, 0, 75, 19, 34]), function (ce /*require*/,
 e /*exports*/,
 t /*window*/,
 i /*resources*/,
 w /*log*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vEb = void 0),
				(e.$uEb = E);
			async function E(r, u) {
				const a = [];
				return await C(r, a, u.logsHome, u.logsHome), a;
			}
			async function C(r, u, a, h) {
				const c = await r.resolve(a);
				for (const { resource: n, isDirectory: g } of c.children || [])
					if (g) await C(r, u, n, h);
					else {
						const p = (await r.readFile(n)).value.toString();
						if (p) {
							const o = (0, i.$ph)(h, n);
							o && u.push({ relativePath: o, contents: p });
						}
					}
			}
			function d(r) {
				switch (r) {
					case w.LogLevel.Trace:
						return "trace";
					case w.LogLevel.Debug:
						return "debug";
					case w.LogLevel.Info:
						return "info";
					case w.LogLevel.Warning:
						return "warn";
					case w.LogLevel.Error:
						return "error";
				}
				return "info";
			}
			class m extends w.$rk {
				constructor(u = w.$lk) {
					super({ log: (a, h) => this.j(d(a), h) }, u);
				}
				j(u, a) {
					const h = t.$Bfb;
					if (typeof h.codeAutomationLog == "function")
						try {
							h.codeAutomationLog(u, a);
						} catch (c) {
							console.error("Problems writing to codeAutomationLog", c);
						}
				}
			}
			e.$vEb = m;
		})
