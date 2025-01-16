define(de[3141], he([1, 0, 43, 107]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$MUc = w);
			function w() {
				E();
			}
			function E() {
				for (let C = 0; C < 9; C++) {
					const d = C,
						m = C + 1;
					t.$TX.registerCommandAndKeybindingRule({
						id: `workbench.action.terminal.focusAtIndex${m}`,
						weight: t.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: 0,
						handler: (r) => (
							r.get(i.$lIb).setActiveInstanceByIndex(d),
							r.get(i.$lIb).showPanel(!0)
						),
					});
				}
			}
		}),
		define(
			de[616],
			he([1, 0, 168, 50, 24, 221, 92]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yUc = e.$xUc = void 0),
					(e.$zUc = r);
				class d {
					constructor(a) {
						this.instanceId = a.instanceId;
					}
					toJSON() {
						return {
							$mid: E.MarshalledId.TerminalContext,
							instanceId: this.instanceId,
						};
					}
				}
				e.$xUc = d;
				class m extends i.$sj {
					async q(a, h) {
						if (Array.isArray(h) && h.every((c) => c instanceof d)) {
							await a.run(h?.[0], h);
							return;
						}
						return super.q(a, h);
					}
				}
				e.$yUc = m;
				function r(u, a, h, c, n, g) {
					const p = new t.$2fb(u, a),
						o = [];
					(0, C.$Jyb)(c, { shouldForwardArgs: !0 }, o), g && o.push(...g);
					const f = h ? (0, w.$6b)(h).map((b) => new d(b)) : [];
					n.showContextMenu({
						actionRunner: new m(),
						getAnchor: () => p,
						getActions: () => o,
						getActionsContext: () => f,
					});
				}
			},
		),
		