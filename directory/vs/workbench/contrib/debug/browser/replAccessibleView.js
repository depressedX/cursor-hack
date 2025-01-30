import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import './repl.js';
import '../../../services/views/common/viewsService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/position.js';
define(
			de[3826],
			he([1, 0, 178, 130, 847, 89, 8, 6, 3, 48]),
			function (ce /*require*/,
 e /*exports*/,
 t /*accessibleView*/,
 i /*accessibilityConfiguration*/,
 w /*repl*/,
 E /*viewsService*/,
 C /*contextkey*/,
 d /*event*/,
 m /*lifecycle*/,
 r /*position*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pQc = void 0);
				class u {
					constructor() {
						(this.priority = 70),
							(this.name = "debugConsole"),
							(this.when = C.$Kj.equals(
								"focusedView",
								"workbench.panel.repl.view",
							)),
							(this.type = t.AccessibleViewType.View);
					}
					getProvider(c) {
						const n = c.get(E.$HMb),
							g = c.get(t.$HLb),
							p = (0, w.$OJc)(n);
						if (!p) return;
						const o = p.getFocusedElement();
						return new a(p, o, g);
					}
				}
				e.$pQc = u;
				let a = class extends m.$1c {
					constructor(c, n, g) {
						super(),
							(this.h = c),
							(this.j = n),
							(this.m = g),
							(this.id = t.AccessibleViewProviderId.Repl),
							(this.b = this.D(new d.$re())),
							(this.onDidChangeContent = this.b.event),
							(this.c = this.D(new d.$re())),
							(this.onDidResolveChildren = this.c.event),
							(this.verbositySettingKey =
								i.AccessibilityVerbositySettingId.Debug),
							(this.options = { type: t.AccessibleViewType.View }),
							(this.f = new Map()),
							(this.g = !1),
							(this.g = !!n);
					}
					provideContent() {
						const c = this.h.getDebugSession();
						if (!c) return "No debug session available.";
						const n = c.getReplElements();
						return n.length
							? (this.a || this.n(n),
								this.a ??
									n
										.map((g) => g.toString(!0))
										.join(`
`))
							: "No output in the debug console.";
					}
					onClose() {
						if (((this.a = void 0), this.f.clear(), this.g))
							return this.h.focusTree();
						this.h.getReplInput().focus();
					}
					onOpen() {
						this.D(
							this.onDidResolveChildren(() => {
								this.b.fire(),
									queueMicrotask(() => {
										if (this.j) {
											const c = this.f.get(this.j.getId());
											c && this.m.setPosition(c, !0);
										}
									});
							}),
						);
					}
					async n(c) {
						const n = this.h.getReplDataSource();
						if (!n) return;
						let g = 1;
						const p = [];
						for (const o of c)
							if (
								(p.push(o.toString().replace(/\n/g, "")),
								this.f.set(o.getId(), new r.$hL(g, 1)),
								g++,
								n.hasChildren(o))
							) {
								const f = [],
									b = await n.getChildren(o);
								for (const s of b) {
									const l = s.getId();
									this.f.has(l) || this.f.set(l, new r.$hL(g, 1)),
										f.push("  " + s.toString()),
										g++;
								}
								p.push(
									f.join(`
`),
								);
							}
						(this.a = p.join(`
`)),
							this.c.fire();
					}
				};
				a = Ne([j(2, t.$HLb)], a);
			},
		),
		