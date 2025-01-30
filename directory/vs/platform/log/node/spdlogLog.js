import '../../../../require.js';
import '../../../../exports.js';
import '../../files/common/files.js';
import '../common/log.js';
define(Pe[490], Ne([1, 0, 32, 14]), function (we, t, e, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$1eb = void 0);
			var S;
			(function (n) {
				(n[(n.Trace = 0)] = "Trace"),
					(n[(n.Debug = 1)] = "Debug"),
					(n[(n.Info = 2)] = "Info"),
					(n[(n.Warning = 3)] = "Warning"),
					(n[(n.Error = 4)] = "Error"),
					(n[(n.Critical = 5)] = "Critical"),
					(n[(n.Off = 6)] = "Off");
			})(S || (S = {}));
			async function N(n, p, y, d, k) {
				try {
					const g = await new Promise((h, $) => {
						we(["@vscode/spdlog"], h, $);
					}).then(tt);
					g.setFlushOn(S.Trace);
					const c = await g.createAsyncRotatingLogger(n, p, y, d);
					return (
						k
							? c.clearFormatters()
							: c.setPattern("%Y-%m-%d %H:%M:%S.%e [%l] %v"),
						c
					);
				} catch (g) {
					console.error(g);
				}
				return null;
			}
			function P(n, p, y) {
				switch (p) {
					case r.LogLevel.Trace:
						n.trace(y);
						break;
					case r.LogLevel.Debug:
						n.debug(y);
						break;
					case r.LogLevel.Info:
						n.info(y);
						break;
					case r.LogLevel.Warning:
						n.warn(y);
						break;
					case r.LogLevel.Error:
						n.error(y);
						break;
					case r.LogLevel.Off:
						break;
					default:
						throw new Error(`Invalid log level ${p}`);
				}
			}
			function I(n, p) {
				switch (p) {
					case r.LogLevel.Trace:
						n.setLevel(S.Trace);
						break;
					case r.LogLevel.Debug:
						n.setLevel(S.Debug);
						break;
					case r.LogLevel.Info:
						n.setLevel(S.Info);
						break;
					case r.LogLevel.Warning:
						n.setLevel(S.Warning);
						break;
					case r.LogLevel.Error:
						n.setLevel(S.Error);
						break;
					case r.LogLevel.Off:
						n.setLevel(S.Off);
						break;
					default:
						throw new Error(`Invalid log level ${p}`);
				}
			}
			class l extends r.$ok {
				constructor(p, y, d, k, g) {
					super(),
						(this.m = []),
						this.setLevel(g),
						(this.n = this.r(p, y, d, k)),
						this.D(
							this.onDidChangeLogLevel((c) => {
								this.q && I(this.q, c);
							}),
						);
				}
				async r(p, y, d, k) {
					const g = d ? 6 : 1,
						c = (30 / g) * e.$Tl.MB,
						h = await N(p, y, c, g, k);
					if (h) {
						(this.q = h), I(this.q, this.getLevel());
						for (const { level: $, message: T } of this.m) P(this.q, $, T);
						this.m = [];
					}
				}
				g(p, y) {
					this.q
						? P(this.q, p, y)
						: this.getLevel() <= p && this.m.push({ level: p, message: y });
				}
				flush() {
					this.q ? this.q.flush() : this.n.then(() => this.flush());
				}
				dispose() {
					this.q ? this.t() : this.n.then(() => this.t()), super.dispose();
				}
				t() {
					this.q && (this.q.drop(), (this.q = void 0));
				}
			}
			t.$1eb = l;
		});
	var On =
		(this && this.__importDefault) ||
		function (we) {
			return we && we.__esModule ? we : { default: we };
		};
	