define(de[1620], he([1, 0, 9, 6, 34, 3]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$2J = e.$1J = e.$ZJ = void 0);
			class C extends w.$tk {
				constructor(a, h, c, n, g) {
					super(h, c, n),
						(this.r = a),
						(this.s = g),
						this.D(
							g.listen(
								"onDidChangeLogLevel",
								a,
							)((p) => {
								(0, w.$kk)(p)
									? super.setLogLevel(p)
									: super.setLogLevel(t.URI.revive(p[0]), p[1]);
							}),
						),
						this.D(
							g.listen(
								"onDidChangeVisibility",
								a,
							)(([p, o]) => super.setVisibility(t.URI.revive(p), o)),
						),
						this.D(
							g.listen(
								"onDidChangeLoggers",
								a,
							)(({ added: p, removed: o }) => {
								for (const f of p)
									super.registerLogger({
										...f,
										resource: t.URI.revive(f.resource),
									});
								for (const f of o) super.deregisterLogger(f.resource);
							}),
						);
				}
				createConsoleMainLogger() {
					return new w.$rk({
						log: (a, h) => {
							this.s.call("consoleLog", [a, h]);
						},
					});
				}
				registerLogger(a) {
					super.registerLogger(a), this.s.call("registerLogger", [a, this.r]);
				}
				deregisterLogger(a) {
					super.deregisterLogger(a),
						this.s.call("deregisterLogger", [a, this.r]);
				}
				setLogLevel(a, h) {
					super.setLogLevel(a, h), this.s.call("setLogLevel", [a, h]);
				}
				setVisibility(a, h) {
					super.setVisibility(a, h),
						this.s.call("setVisibility", [this.n(a), h]);
				}
				q(a, h, c) {
					return new d(this.s, a, h, c, this.r);
				}
				static setLogLevel(a, h, c) {
					return a.call("setLogLevel", [h, c]);
				}
			}
			e.$ZJ = C;
			class d extends w.$ok {
				constructor(a, h, c, n, g) {
					super(n?.logLevel === "always"),
						(this.q = a),
						(this.r = h),
						(this.m = !1),
						(this.n = []),
						this.setLevel(c),
						this.q.call("createLogger", [h, n, g]).then(() => {
							this.t(this.n), (this.m = !0);
						});
				}
				g(a, h) {
					const c = [[a, h]];
					this.m ? this.t(c) : this.n.push(...c);
				}
				t(a) {
					this.q.call("log", [this.r, a]);
				}
			}
			class m {
				constructor(a, h) {
					(this.a = a), (this.b = h);
				}
				listen(a, h) {
					const c = this.b(a);
					switch (h) {
						case "onDidChangeLoggers":
							return i.Event.map(this.a.onDidChangeLoggers, (n) => ({
								added: [...n.added].map((g) => this.c(g, c)),
								removed: [...n.removed].map((g) => this.c(g, c)),
							}));
						case "onDidChangeVisibility":
							return i.Event.map(this.a.onDidChangeVisibility, (n) => [
								c.transformOutgoingURI(n[0]),
								n[1],
							]);
						case "onDidChangeLogLevel":
							return i.Event.map(this.a.onDidChangeLogLevel, (n) =>
								(0, w.$kk)(n) ? n : [c.transformOutgoingURI(n[0]), n[1]],
							);
					}
					throw new Error(`Event not found: ${h}`);
				}
				async call(a, h, c) {
					const n = this.b(a);
					switch (h) {
						case "setLogLevel":
							return (0, w.$kk)(c[0])
								? this.a.setLogLevel(c[0])
								: this.a.setLogLevel(
										t.URI.revive(n.transformIncoming(c[0][0])),
										c[0][1],
									);
						case "getRegisteredLoggers":
							return Promise.resolve(
								[...this.a.getRegisteredLoggers()].map((g) => this.c(g, n)),
							);
					}
					throw new Error(`Call not found: ${h}`);
				}
				c(a, h) {
					return { ...a, resource: h.transformOutgoingURI(a.resource) };
				}
			}
			e.$1J = m;
			class r extends E.$1c {
				constructor(a, h) {
					super(),
						h.call("setLogLevel", [a.getLogLevel()]),
						this.D(a.onDidChangeLogLevel((c) => h.call("setLogLevel", [c]))),
						h.call("getRegisteredLoggers").then((c) => {
							for (const n of c)
								a.registerLogger({ ...n, resource: t.URI.revive(n.resource) });
						}),
						this.D(
							h.listen("onDidChangeVisibility")(([c, n]) =>
								a.setVisibility(t.URI.revive(c), n),
							),
						),
						this.D(
							h.listen("onDidChangeLoggers")(({ added: c, removed: n }) => {
								for (const g of c)
									a.registerLogger({
										...g,
										resource: t.URI.revive(g.resource),
									});
								for (const g of n) a.deregisterLogger(g.resource);
							}),
						);
				}
			}
			e.$2J = r;
		}),
		