define(
			de[4037],
			he([1, 0, 23, 4, 113, 211, 363, 145, 245]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$kgd = r);
				function r() {
					(0, C.$EUc)({
						id: d.TerminalCommandId.NewLocal,
						title: (0, i.localize2)(
							10428,
							"Create New Integrated Terminal (Local)",
						),
						run: async (u, a) => {
							const h = a.get(m.$Feb),
								c = a.get(E.$3l),
								n = a.get(w.$Ui);
							let g;
							try {
								const o = h.getLastActiveWorkspaceRoot(t.Schemas.vscodeRemote);
								if (o) {
									const f = await c.getCanonicalURI(o);
									f.scheme === t.Schemas.file && (g = f);
								}
							} catch {}
							g || (g = n.userHome);
							const p = await u.service.createTerminal({ cwd: g });
							return p
								? (u.service.setActiveInstance(p), u.groupService.showPanel(!0))
								: Promise.resolve(void 0);
						},
					});
				}
			},
		),
		