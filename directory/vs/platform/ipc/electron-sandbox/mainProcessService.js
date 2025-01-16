define(de[2732], he([1, 0, 3, 2688, 320]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$X8c = void 0);
			class E extends t.$1c {
				constructor(d) {
					super(), (this.a = this.D(new i.$krb(`window:${d}`)));
				}
				getChannel(d) {
					return this.a.getChannel(d);
				}
				registerChannel(d, m) {
					this.a.registerChannel(d, m);
				}
				sendRawMessage(d, m) {
					w.$P.invoke(d);
				}
			}
			e.$X8c = E;
		}),
		define(
			de[230],
			he([1, 0, 305, 102, 20, 5, 371]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vbd = void 0),
					(e.$Ubd = u),
					(e.$Wbd = h);
				class d {
					constructor(n, g, p, o) {
						const f = p.getChannel(n);
						return m(g)
							? o.createInstance(new i.$Ji(g.channelClientCtor, [f]))
							: t.ProxyChannel.toService(f, g?.proxyOptions);
					}
				}
				function m(c) {
					return !!c?.channelClientCtor;
				}
				let r = class extends d {
					constructor(n, g, p, o) {
						super(n, g, p, o);
					}
				};
				r = Ne([j(2, C.$V8c), j(3, E.$Li)], r);
				function u(c, n, g) {
					(0, w.$lK)(c, new i.$Ji(r, [n, g], !0));
				}
				e.$Vbd = (0, E.$Mi)("sharedProcessService");
				let a = class extends d {
					constructor(n, g, p, o) {
						super(n, g, p, o);
					}
				};
				a = Ne([j(2, e.$Vbd), j(3, E.$Li)], a);
				function h(c, n, g) {
					(0, w.$lK)(c, new i.$Ji(a, [n, g], !0));
				}
			},
		),
		