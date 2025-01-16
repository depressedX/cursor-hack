define(de[904], he([1, 0, 75, 6, 47, 320]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$lrb = C);
			async function C(d, m, r = (0, w.$9g)()) {
				E.$Q.acquire(m, r), typeof d == "string" && E.$P.send(d, r);
				const u = i.Event.fromDOMEventEmitter(t.$Bfb, "message", (h) => ({
						nonce: h.data,
						port: h.ports[0],
						source: h.source,
					})),
					{ port: a } = await i.Event.toPromise(
						i.Event.once(
							i.Event.filter(u, (h) => h.nonce === r && h.source === t.$Bfb),
						),
					);
				return a;
			}
		}),
		