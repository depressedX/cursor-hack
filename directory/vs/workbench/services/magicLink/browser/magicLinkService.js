define(
			de[241],
			he([1, 0, 3, 59, 9, 69, 42, 22, 20, 5, 45, 465, 25, 337]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r8b = e.$q8b = void 0);
				const n = 15 * 60 * 1e3,
					g = 5e3;
				e.$q8b = (0, r.$Mi)("magicLinkService");
				let p = class extends t.$1c {
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.n = new i.$Jc(50)),
							(this.q = new i.$Jc(5)),
							(this.r = new i.$Jc(5));
					}
					async getMagicURIForText(f, b) {
						const s = await this.m(f, b);
						if (b !== void 0) {
							const l = s === void 0 ? void 0 : s.toString();
							this.f.setChatData(
								"tabs",
								(y, $) => y.tabId === b,
								"symbolToURI",
								(y) => ({ ...y, [f]: l }),
							);
						}
						return s;
					}
					async m(f, b) {
						const s = f.split(":")[0],
							l = this.b.resolveRelativePath(s);
						if ((await this.c.exists(l)) && (await this.c.stat(l)).isFile) {
							const $ = f.split(":")[1];
							return $ ? l.with({ fragment: `L${$}:1` }) : l;
						}
						if (b !== void 0) return await this.s(b, f);
					}
					linkGenerationToTab(f, b) {
						this.n.set(f, b);
					}
					registerReferenceableCodeBlocksForGeneration(f, b) {
						const s = this.n.get(f);
						s !== void 0 && this.q.set(s, b);
					}
					async s(f, b) {
						const s = this.f.chatData.tabs.find(($) => $.tabId === f);
						if (!s) return;
						const l = s.symbolToURI;
						if (l && Object.hasOwn(l, b)) {
							const $ = l[b];
							if ($ === void 0) return;
							const v = w.URI.parse($);
							if (v) return v;
						}
						const y = this.r.get(b);
						if (y) return y;
						{
							const $ = this.q.get(f);
							return $ ? await this.u(b, $) : void 0;
						}
					}
					async u(f, b) {}
				};
				(e.$r8b = p),
					(e.$r8b = p =
						Ne(
							[
								j(0, a.$2rb),
								j(1, h.$Vi),
								j(2, d.$ll),
								j(3, c.$kgc),
								j(4, C.$MO),
								j(5, E.$k3),
								j(6, u.$0zb),
							],
							p,
						)),
					(0, m.$lK)(e.$q8b, p, m.InstantiationType.Delayed);
			},
		),
		