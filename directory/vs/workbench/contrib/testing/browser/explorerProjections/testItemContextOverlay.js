define(de[1267], he([1, 0, 420, 259, 380]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$UKc = void 0);
			const E = (C, d) => {
				if (!C) return [];
				const m = i.$k4.fromString(C.item.extId);
				return [
					[w.TestingContextKeys.testItemExtId.key, m.localId],
					[w.TestingContextKeys.controllerId.key, C.controllerId],
					[w.TestingContextKeys.testItemHasUri.key, !!C.item.uri],
					...(0, t.$Dqc)(d),
				];
			};
			e.$UKc = E;
		}),
		define(
			de[3182],
			he([1, 0, 24, 28, 4, 31, 63, 26, 470, 353, 420, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				function h(
					n,
					{
						onlyGroup: g,
						showConfigureButtons: p = !0,
						onlyForTest: o,
						onlyConfigurable: f,
						placeholder: b = (0, w.localize)(10754, null),
					},
				) {
					const s = n.get(u.$Bqc),
						l = [],
						y = (v, S) => {
							for (const I of (0, t.$Db)(v, (T, P) => T.group - P.group)) {
								let T = !1;
								if (g) {
									if (I[0].group !== g) continue;
									T = !0;
								}
								for (const P of I)
									(f && !P.hasConfigurationHandler) ||
										(T ||
											(l.push({ type: "separator", label: r.$Aqc[I[0].group] }),
											(T = !0)),
										l.push({
											type: "item",
											profile: P,
											label: P.label,
											description: S,
											alwaysShow: !0,
											buttons:
												P.hasConfigurationHandler && p
													? [
															{
																iconClass: d.ThemeIcon.asClassName(m.$GKc),
																tooltip: (0, w.localize)(10755, null),
															},
														]
													: [],
										}));
							}
						};
					if (o !== void 0)
						y(
							s
								.getControllerProfiles(o.controllerId)
								.filter((v) => (0, u.$Cqc)(v, o)),
						);
					else
						for (const { profiles: v, controller: S } of s.all())
							y(v, S.label.get());
					const $ = n.get(C.$DJ).createQuickPick({ useSeparators: !0 });
					return ($.items = l), ($.placeholder = b), $;
				}
				const c = (n, g) => (p) => {
					const o = p.item.profile;
					o && (n.configure(o.controllerId, o.profileId), g(void 0));
				};
				E.$fk.registerCommand({
					id: "vscode.pickMultipleTestProfiles",
					handler: async (n, g) => {
						const p = n.get(u.$Bqc),
							o = h(n, g);
						if (!o) return;
						const f = new a.$Zc();
						f.add(o),
							(o.canSelectMany = !0),
							g.selected &&
								(o.selectedItems = o.items
									.filter((s) => s.type === "item")
									.filter((s) =>
										g.selected.some(
											(l) =>
												l.controllerId === s.profile.controllerId &&
												l.profileId === s.profile.profileId,
										),
									));
						const b = await new Promise((s) => {
							f.add(
								o.onDidAccept(() => {
									const l = o.selectedItems;
									s(l.map((y) => y.profile).filter(i.$tg));
								}),
							),
								f.add(o.onDidHide(() => s(void 0))),
								f.add(o.onDidTriggerItemButton(c(p, s))),
								o.show();
						});
						return f.dispose(), b;
					},
				}),
					E.$fk.registerCommand({
						id: "vscode.pickTestProfile",
						handler: async (n, g) => {
							const p = n.get(u.$Bqc),
								o = h(n, g);
							if (!o) return;
							const f = new a.$Zc();
							f.add(o);
							const b = await new Promise((s) => {
								f.add(o.onDidAccept(() => s(o.selectedItems[0]?.profile))),
									f.add(o.onDidHide(() => s(void 0))),
									f.add(o.onDidTriggerItemButton(c(p, s))),
									o.show();
							});
							return f.dispose(), b;
						},
					});
			},
		),
		define(
			de[1268],
			he([1, 0, 33, 3, 8, 5, 21, 515, 380, 379, 6, 259, 743, 420, 24]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NLc = e.$MLc = void 0),
					(n = mt(n)),
					(e.$MLc = (0, E.$Mi)("testingContinuousRunService"));
				let g = class extends i.$1c {
					get lastRunProfileIds() {
						return this.g.get(new Set());
					}
					constructor(o, f, b, s) {
						super(),
							(this.j = o),
							(this.m = s),
							(this.a = new u.$re()),
							(this.f = new h.$j4()),
							(this.onDidChange = this.a.event),
							(this.h = m.TestingContextKeys.isContinuousModeOn.bindTo(b)),
							(this.g = this.D(
								new d.$oqc(
									{
										key: "lastContinuousRunProfileIds",
										scope: C.StorageScope.WORKSPACE,
										target: C.StorageTarget.MACHINE,
										serialization: {
											deserialize: (l) => new Set(JSON.parse(l)),
											serialize: (l) => JSON.stringify([...l]),
										},
									},
									f,
								),
							)),
							this.D(
								(0, i.$Yc)(() => {
									this.b?.dispose();
									for (const l of this.f.values()) l.dispose();
								}),
							);
					}
					isSpecificallyEnabledFor(o) {
						return this.f.size > 0 && this.f.hasKey(a.$k4.fromString(o).path);
					}
					isEnabledForAParentOf(o) {
						return this.b
							? !0
							: this.f.size > 0 &&
									this.f.hasKeyOrParent(a.$k4.fromString(o).path);
					}
					isEnabledForAChildOf(o) {
						return (
							this.f.size > 0 &&
							this.f.hasKeyOrChildren(a.$k4.fromString(o).path)
						);
					}
					isEnabled() {
						return !!this.b || this.f.size > 0;
					}
					start(o, f) {
						const b = new i.$Zc(),
							s = new t.$Ce();
						b.add((0, i.$Yc)(() => s.dispose(!0))),
							f === void 0 && this.h.set(!0),
							f
								? this.f.mutate(
										a.$k4.fromString(f).path,
										(y) => (y?.dispose(), b),
									)
								: (this.b?.dispose(), (this.b = b));
						let l;
						if (o instanceof Array) l = o;
						else {
							const y = () =>
								this.m
									.getGroupDefaultProfiles(o)
									.filter(
										($) =>
											$.supportsContinuousRun &&
											(!f || a.$k4.root(f) === $.controllerId),
									);
							(l = y()),
								b.add(
									this.m.onDidChange(() => {
										n.$yb(y(), l) || this.start(o, f);
									}),
								);
						}
						this.g.store(new Set(l.map((y) => y.profileId))),
							l.length &&
								this.j.startContinuousRun(
									{
										continuous: !0,
										group: l[0].group,
										targets: l.map((y) => ({
											testIds: [f ?? y.controllerId],
											controllerId: y.controllerId,
											profileId: y.profileId,
										})),
									},
									s.token,
								),
							this.a.fire(f);
					}
					stop(o) {
						if (!o) this.b?.dispose(), (this.b = void 0);
						else {
							const f = [...this.f.deleteRecursive(a.$k4.fromString(o).path)];
							for (let b = f.length - 1; b >= 0; b--) f[b].dispose();
						}
						o === void 0 && this.h.set(!1), this.a.fire(o);
					}
				};
				(e.$NLc = g),
					(e.$NLc = g =
						Ne([j(0, r.$sqc), j(1, C.$lq), j(2, w.$6j), j(3, c.$Bqc)], g));
			},
		),
		