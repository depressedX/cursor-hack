define(de[1640], he([1, 0, 12, 344, 47]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Op = C),
				(e.$Pp = d);
			function E(m) {
				if (t.$x === t.Platform.Linux && /^penguin(\.|$)/i.test(m))
					return "chromebook";
			}
			function C(m, r, u, a, h, c, n, g, p, o, f) {
				const b = Object.create(null);
				(b["common.machineId"] = c),
					(b["common.macMachineId"] = n),
					(b["common.sqmId"] = g),
					(b["common.devDeviceId"] = p),
					(b.sessionID = (0, w.$9g)() + Date.now()),
					(b.commitHash = a),
					(b.version = h),
					(b["common.platformVersion"] = (m || "").replace(
						/^(\d+)(\.\d+)?(\.\d+)?(.*)/,
						"$1$2$3",
					)),
					(b["common.platform"] = (0, t.$k)(t.$x)),
					(b["common.nodePlatform"] = i.$ic),
					(b["common.nodeArch"] = u),
					(b["common.product"] = f || "desktop"),
					o && (b["common.msftInternal"] = o);
				let s = 0;
				const l = Date.now();
				Object.defineProperties(b, {
					timestamp: { get: () => new Date(), enumerable: !0 },
					"common.timesincesessionstart": {
						get: () => Date.now() - l,
						enumerable: !0,
					},
					"common.sequence": { get: () => s++, enumerable: !0 },
				}),
					t.$o && (b["common.snap"] = "true");
				const y = E(r);
				return y && (b["common.platformDetail"] = y), b;
			}
			function d(m) {
				const r = i.env.USERDNSDOMAIN;
				if (!r) return !1;
				const u = r.toLowerCase();
				return m.some((a) => u === a);
			}
		}),
		define(
			de[2794],
			he([1, 0, 24, 29, 3, 82, 22]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ErrorEvent = void 0);
				var d;
				(function (r) {
					function u(a, h) {
						return a.callstack < h.callstack
							? -1
							: a.callstack > h.callstack
								? 1
								: 0;
					}
					r.compare = u;
				})(d || (e.ErrorEvent = d = {}));
				class m {
					static {
						this.ERROR_FLUSH_TIMEOUT = 5 * 1e3;
					}
					constructor(u, a = m.ERROR_FLUSH_TIMEOUT) {
						(this.f = -1),
							(this.g = []),
							(this.h = new w.$Zc()),
							(this.c = u),
							(this.d = a);
						const h = i.$1.addListener((c) => this.j(c));
						this.h.add((0, w.$Yc)(h)), this.i();
					}
					dispose() {
						clearTimeout(this.f), this.l(), this.h.dispose();
					}
					i() {}
					j(u) {
						if (
							!u ||
							u.code ||
							(u.detail && u.detail.stack && (u = u.detail),
							i.$fb.isErrorNoTelemetry(u) ||
								u instanceof C.$Gl ||
								(typeof u?.message == "string" &&
									u.message.includes("Unable to read file")))
						)
							return;
						const a = Array.isArray(u.stack)
								? u.stack.join(`
`)
								: u.stack,
							h = u.message ? u.message : (0, E.$Ao)(u);
						a && this.k({ msg: h, callstack: a });
					}
					k(u) {
						const a = (0, t.$Ab)(this.g, u, d.compare);
						a < 0
							? ((u.count = 1), this.g.splice(~a, 0, u))
							: (this.g[a].count || (this.g[a].count = 0),
								(this.g[a].count += 1)),
							this.f === -1 &&
								(this.f = setTimeout(() => {
									this.l(), (this.f = -1);
								}, this.d));
					}
					l() {
						for (const u of this.g) this.c.publicLogError2("UnhandledError", u);
						this.g.length = 0;
					}
				}
				e.default = m;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	