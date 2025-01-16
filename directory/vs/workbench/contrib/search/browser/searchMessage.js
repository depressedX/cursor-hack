define(
		de[1863],
		he([1, 0, 4, 7, 488, 111, 673, 1862, 23, 497, 9]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$UOc = void 0),
				(t = mt(t)),
				(i = mt(i)),
				(E = xi(E));
			const a = (h, c, n, g, p, o, f) => {
				const b = i.$("div.providerMessage"),
					s = (0, w.$Zpb)(h.text);
				i.$fhb(
					b,
					i.$(
						"." +
							C.SeverityIcon.className(
								h.type === d.TextSearchCompleteMessageType.Information
									? E.default.Info
									: E.default.Warning,
							)
								.split(" ")
								.join("."),
					),
				);
				for (const l of s.nodes)
					if (typeof l == "string") i.$fhb(b, document.createTextNode(l));
					else {
						const y = c.createInstance(r.Link, b, l, {
							opener: async ($) => {
								if (!h.trusted) return;
								const v = u.URI.parse($, !0);
								v.scheme === m.Schemas.command && h.trusted
									? (await p.executeCommand(v.path))?.triggerSearch && f()
									: v.scheme === m.Schemas.https
										? g.open(v)
										: v.scheme === m.Schemas.command && !h.trusted
											? n.error(t.localize(9295, null, $))
											: n.error(t.localize(9296, null, $));
							},
						});
						o.add(y);
					}
				return b;
			};
			e.$UOc = a;
		},
	),
		