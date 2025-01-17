import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/keyCodes.js';
import '../../../platform/contextkey/common/contextkey.js';
import '../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../platform/list/browser/listService.js';
import '../../../base/common/lifecycle.js';
import '../../common/contributions.js';
import '../../../platform/log/common/log.js';
import '../../../platform/configuration/common/configuration.js';
define(
			de[518],
			he([1, 0, 27, 8, 43, 93, 3, 55, 34, 10]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$D3b = n);
				function a(g, p, o) {
					const f = new Set();
					return (0, C.$Xc)(
						...g.map((b, s) =>
							(0, C.$Xc)(
								b.onDidFocus(() => {
									o?.(s, "focus"), f.size || p(!0), f.add(s);
								}),
								b.onDidBlur(() => {
									o?.(s, "blur"), f.delete(s), f.size || p(!1);
								}),
							),
						),
					);
				}
				const h = new i.$5j("navigableContainerFocused", !1);
				let c = class {
					static {
						u = this;
					}
					static {
						this.ID = "workbench.contrib.navigableContainerManager";
					}
					constructor(p, o, f) {
						(this.e = o),
							(this.f = f),
							(this.b = new Set()),
							(this.d = h.bindTo(p)),
							(u.a = this);
					}
					dispose() {
						this.b.clear(), this.d.reset(), (u.a = void 0);
					}
					get g() {
						return this.f.getValue("workbench.navigibleContainer.enableDebug");
					}
					h(p, ...o) {
						this.g && this.e.debug(p, ...o);
					}
					static register(p) {
						const o = this.a;
						return o
							? (o.b.add(p),
								o.h("NavigableContainerManager.register", p.name),
								(0, C.$Xc)(
									a(
										p.focusNotifiers,
										(f) => {
											f
												? (o.h("NavigableContainerManager.focus", p.name),
													o.d.set(!0),
													(o.c = p))
												: (o.h(
														"NavigableContainerManager.blur",
														p.name,
														o.c?.name,
													),
													o.c === p && (o.d.set(!1), (o.c = void 0)));
										},
										(f, b) => {
											o.h(
												"NavigableContainerManager.partFocusChange",
												p.name,
												f,
												b,
											);
										},
									),
									(0, C.$Yc)(() => {
										o.b.delete(p),
											o.h(
												"NavigableContainerManager.unregister",
												p.name,
												o.c?.name,
											),
											o.c === p && (o.d.set(!1), (o.c = void 0));
									}),
								))
							: C.$1c.None;
					}
					static getActive() {
						return this.a?.c;
					}
				};
				c = u = Ne([j(0, i.$6j), j(1, m.$ik), j(2, r.$gj)], c);
				function n(g) {
					return c.register(g);
				}
				(0, d.$s6)(c.ID, c, d.WorkbenchPhase.BlockStartup),
					w.$TX.registerCommandAndKeybindingRule({
						id: "widgetNavigation.focusPrevious",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: i.$Kj.and(h, i.$Kj.or(E.$nMb?.negate(), E.$iMb)),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.UpArrow,
						handler: () => {
							c.getActive()?.focusPreviousWidget();
						},
					}),
					w.$TX.registerCommandAndKeybindingRule({
						id: "widgetNavigation.focusNext",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: i.$Kj.and(h, i.$Kj.or(E.$nMb?.negate(), E.$jMb)),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.DownArrow,
						handler: () => {
							c.getActive()?.focusNextWidget();
						},
					});
			},
		),
		