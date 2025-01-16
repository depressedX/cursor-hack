define(
			de[3847],
			he([1, 0, 6, 34, 814, 89, 10, 8]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$51c = e.$41c = void 0),
					(e.$41c = new d.$5j("timelineHasProvider", !1));
				let m = class {
					constructor(u, a, h, c) {
						(this.j = u),
							(this.k = a),
							(this.l = h),
							(this.m = c),
							(this.c = new t.$re()),
							(this.onDidChangeProviders = this.c.event),
							(this.d = new t.$re()),
							(this.onDidChangeTimeline = this.d.event),
							(this.f = new t.$re()),
							(this.onDidChangeUri = this.f.event),
							(this.h = new Map()),
							(this.i = new Map()),
							(this.g = e.$41c.bindTo(this.m)),
							this.n();
					}
					getSources() {
						return [...this.h.values()].map((u) => ({
							id: u.id,
							label: u.label,
						}));
					}
					getTimeline(u, a, h, c) {
						this.j.trace(
							`TimelineService#getTimeline(${u}): uri=${a.toString()}`,
						);
						const n = this.h.get(u);
						if (n !== void 0) {
							if (typeof n.scheme == "string") {
								if (n.scheme !== "*" && n.scheme !== a.scheme) return;
							} else if (!n.scheme.includes(a.scheme)) return;
							return {
								result: n.provideTimeline(a, h, c.token).then((g) => {
									if (g !== void 0)
										return (
											(g.items = g.items.map((p) => ({ ...p, source: n.id }))),
											g.items.sort(
												(p, o) =>
													o.timestamp - p.timestamp ||
													o.source.localeCompare(p.source, void 0, {
														numeric: !0,
														sensitivity: "base",
													}),
											),
											g
										);
								}),
								options: h,
								source: n.id,
								tokenSource: c,
								uri: a,
							};
						}
					}
					registerTimelineProvider(u) {
						this.j.trace(
							`TimelineService#registerTimelineProvider: id=${u.id}`,
						);
						const a = u.id,
							h = this.h.get(a);
						if (h)
							try {
								h?.dispose();
							} catch {}
						return (
							this.h.set(a, u),
							this.n(),
							u.onDidChange &&
								this.i.set(
									a,
									u.onDidChange((c) => this.d.fire(c)),
								),
							this.c.fire({ added: [a] }),
							{
								dispose: () => {
									this.h.delete(a), this.c.fire({ removed: [a] });
								},
							}
						);
					}
					unregisterTimelineProvider(u) {
						this.j.trace(`TimelineService#unregisterTimelineProvider: id=${u}`),
							this.h.has(u) &&
								(this.h.delete(u),
								this.i.delete(u),
								this.n(),
								this.c.fire({ removed: [u] }));
					}
					setUri(u) {
						this.k.openView(w.$47, !0), this.f.fire(u);
					}
					n() {
						this.g.set(this.h.size !== 0);
					}
				};
				(e.$51c = m),
					(e.$51c = m =
						Ne([j(0, i.$ik), j(1, E.$HMb), j(2, C.$gj), j(3, d.$6j)], m));
			},
		),
		