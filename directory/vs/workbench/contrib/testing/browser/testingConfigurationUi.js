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
		