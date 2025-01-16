define(
			de[3136],
			he([1, 0, 65, 933, 4, 8, 73, 63, 32]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$M2c = e.$L2c = void 0),
					(e.$L2c = new E.$5j(
						"shareProviderCount",
						0,
						(0, w.localize)(9427, null),
					));
				let r = class {
					constructor(a, h, c, n, g) {
						(this.d = a),
							(this.e = h),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.c = new Set()),
							(this.providerCount = e.$L2c.bindTo(this.d));
					}
					registerShareProvider(a) {
						return (
							this.c.add(a),
							this.providerCount.set(this.c.size),
							{
								dispose: () => {
									this.c.delete(a), this.providerCount.set(this.c.size);
								},
							}
						);
					}
					getShareActions() {
						return [];
					}
					async provideShare(a, h) {
						const c =
								this.g.getActiveCodeEditor()?.getModel()?.getLanguageId() ?? "",
							n = [...this.c.values()]
								.filter(
									(o) =>
										(0, i.$3L)(
											o.selector,
											a.resourceUri,
											c,
											!0,
											void 0,
											void 0,
										) > 0,
								)
								.sort((o, f) => o.priority - f.priority);
						if (n.length === 0) return;
						if (n.length === 1)
							return (
								this.h.publicLog2("shareService.share", {
									providerId: n[0].id,
								}),
								n[0].provideShare(a, h)
							);
						const g = n.map((o) => ({ label: o.label, provider: o })),
							p = await this.f.pick(
								g,
								{
									canPickMany: !1,
									placeHolder: (0, w.localize)(
										9428,
										null,
										this.e.getUriLabel(a.resourceUri),
									),
								},
								h,
							);
						if (p !== void 0)
							return (
								this.h.publicLog2("shareService.share", {
									providerId: p.provider.id,
								}),
								p.provider.provideShare(a, h)
							);
					}
				};
				(e.$M2c = r),
					(e.$M2c = r =
						Ne(
							[
								j(0, E.$6j),
								j(1, C.$3N),
								j(2, d.$DJ),
								j(3, t.$dtb),
								j(4, m.$km),
							],
							r,
						));
			},
		),
		