import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './viewsWelcomeExtensionPoint.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/views.js';
import '../../../services/extensions/common/extensions.js';
define(
			de[3316],
			he([1, 0, 4, 3, 8, 1786, 30, 60, 53]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BYc = void 0),
					(t = mt(t));
				const r = C.$Io.as(d.Extensions.ViewsRegistry);
				class u extends i.$1c {
					constructor(c) {
						super(),
							(this.a = new Map()),
							c.setHandler((n, { added: g, removed: p }) => {
								for (const f of p)
									for (const b of f.value) this.a.get(b)?.dispose();
								const o = new Map();
								for (const f of g)
									for (const b of f.value) {
										const { group: s, order: l } = a(b, f),
											y = w.$Kj.deserialize(b.enablement),
											$ = E.$zYc[b.view] ?? b.view;
										let v = o.get($);
										v || ((v = new Map()), o.set($, v)),
											v.set(b, {
												content: b.contents,
												when: w.$Kj.deserialize(b.when),
												precondition: y,
												group: s,
												order: l,
											});
									}
								for (const [f, b] of o) {
									const s = r.registerViewWelcomeContent2(f, b);
									for (const [l, y] of s) this.a.set(l, y);
								}
							});
					}
				}
				e.$BYc = u;
				function a(h, c) {
					let n, g;
					if (h.group) {
						if (!(0, m.$t2)(c.description, "contribViewsWelcome"))
							return (
								c.collector.warn(
									t.localize(11648, null, c.description.identifier.value),
								),
								{ group: n, order: g }
							);
						const p = h.group.lastIndexOf("@");
						p > 0
							? ((n = h.group.substr(0, p)),
								(g = Number(h.group.substr(p + 1)) || void 0))
							: (n = h.group);
					}
					return { group: n, order: g };
				}
			},
		),
		