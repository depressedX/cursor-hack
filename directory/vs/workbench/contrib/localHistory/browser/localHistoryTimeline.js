define(
			de[3880],
			he([
				1, 0, 4, 6, 3, 814, 717, 9, 165, 247, 22, 1737, 78, 44, 10, 1341, 94,
				1246, 23, 25, 349,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l2c = void 0);
				let y = class extends w.$1c {
					static {
						l = this;
					}
					static {
						this.ID = "workbench.contrib.localHistoryTimeline";
					}
					static {
						this.a = "workbench.localHistory.enabled";
					}
					constructor(v, S, I, T, P, k, L) {
						super(),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = P),
							(this.n = k),
							(this.q = L),
							(this.id = "timeline.localHistory"),
							(this.label = (0, t.localize)(7391, null)),
							(this.scheme = "*"),
							(this.b = this.D(new i.$re())),
							(this.onDidChange = this.b.event),
							(this.c = this.D(new w.$2c())),
							this.r(),
							this.t();
					}
					r() {
						this.s(),
							this.D(
								this.j.registerProvider(a.$c2c.SCHEMA, new a.$c2c(this.j)),
							);
					}
					s() {
						this.n.getValue(l.a)
							? (this.c.value = this.f.registerTimelineProvider(this))
							: this.c.clear();
					}
					t() {
						this.D(this.g.onDidAddEntry((v) => this.u(v.entry))),
							this.D(this.g.onDidChangeEntry((v) => this.u(v.entry))),
							this.D(this.g.onDidReplaceEntry((v) => this.u(v.entry))),
							this.D(this.g.onDidRemoveEntry((v) => this.u(v.entry))),
							this.D(this.g.onDidRemoveEntries(() => this.u(void 0))),
							this.D(this.g.onDidMoveEntries(() => this.u(void 0))),
							this.D(
								this.n.onDidChangeConfiguration((v) => {
									v.affectsConfiguration(l.a) && this.s();
								}),
							);
					}
					u(v) {
						this.b.fire({
							id: this.id,
							uri: v?.workingCopy.resource,
							reset: !0,
						});
					}
					async provideTimeline(v, S, I) {
						const T = [];
						let P;
						if (
							(v.scheme === a.$c2c.SCHEMA
								? (P = a.$c2c.fromLocalHistoryFileSystem(v).associatedResource)
								: v.scheme === this.h.defaultUriScheme ||
										v.scheme === f.Schemas.vscodeUserData
									? (P = v)
									: this.j.hasProvider(v) &&
										(P = d.URI.from({
											scheme: this.h.defaultUriScheme,
											authority:
												this.m.remoteAuthority ??
												(0, s.$G8)(this.q.getWorkspace()),
											path: v.path,
										})),
							P)
						) {
							const k = await this.g.getEntries(P, I);
							for (const L of k) T.push(this.w(L));
						}
						return { source: this.id, items: T };
					}
					w(v) {
						return {
							handle: v.id,
							label: c.$p1.getSourceLabel(v.source),
							tooltip: new p.$cl(
								`$(history) ${(0, o.$d2c)().format(v.timestamp)}

${c.$p1.getSourceLabel(v.source)}${v.sourceDescription ? ` (${v.sourceDescription})` : ""}`,
								{ supportThemeIcons: !0 },
							),
							source: this.id,
							timestamp: v.timestamp,
							themeIcon: o.$g2c,
							contextValue: o.$e2c,
							command: {
								id: r.$AWb,
								title: g.$i2c.value,
								arguments: (0, g.$j2c)(v, v.workingCopy.resource),
							},
						};
					}
				};
				(e.$l2c = y),
					(e.$l2c =
						y =
						l =
							Ne(
								[
									j(0, E.$57),
									j(1, C.$a2c),
									j(2, m.$I8),
									j(3, u.$ll),
									j(4, h.$r8),
									j(5, n.$gj),
									j(6, b.$Vi),
								],
								y,
							));
			},
		),
		