import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../browser/parts/editor/sideBySideEditor.js';
import '../../../common/editor.js';
import '../../../../base/common/controlFlow.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/statusbar/browser/statusbar.js';
define(
			de[3635],
			he([1, 0, 3, 4, 99, 11, 39, 825, 44, 1132, 18, 166]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*nls*/,
 w /*actionCommonCategories*/,
 E /*actions*/,
 C /*keybinding*/,
 d /*sideBySideEditor*/,
 m /*editor*/,
 r /*controlFlow*/,
 u /*editorService*/,
 a /*statusbar*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N2c = void 0);
				let h = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.syncScrolling";
					}
					constructor(n, g) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.a = new Map()),
							(this.b = this.D(new t.$Zc())),
							(this.c = new t.$Zc()),
							(this.f = this.D(new t.$2c())),
							(this.g = !1),
							(this.q = new r.$Lpb()),
							this.y();
					}
					m() {
						this.b.add(this.h.onDidVisibleEditorsChange(() => this.r()));
					}
					n() {
						this.m(), this.r();
					}
					toggle() {
						this.g ? this.u() : this.n(), (this.g = !this.g), this.w(this.g);
					}
					r() {
						this.c.clear(), this.a.clear();
						for (const n of this.t())
							(0, m.$g1)(n) &&
								(this.a.set(n, n.getScrollPosition()),
								this.c.add(
									n.onDidChangeScroll(() =>
										this.q.runExclusivelyOrSkip(() => {
											this.s(n);
										}),
									),
								));
					}
					s(n) {
						const g = this.a.get(n);
						if (g === void 0) throw new Error("Scrolled pane not tracked");
						if (!(0, m.$g1)(n))
							throw new Error("Scrolled pane does not support scrolling");
						const p = n.getScrollPosition(),
							o = {
								scrollTop: p.scrollTop - g.scrollTop,
								scrollLeft:
									p.scrollLeft !== void 0 && g.scrollLeft !== void 0
										? p.scrollLeft - g.scrollLeft
										: void 0,
							};
						for (const f of this.t()) {
							if (f === n || !(0, m.$g1)(f)) continue;
							const b = this.a.get(f);
							if (b === void 0)
								throw new Error("Could not find initial offset for pane");
							const s = f.getScrollPosition(),
								l = {
									scrollTop: b.scrollTop + o.scrollTop,
									scrollLeft:
										b.scrollLeft !== void 0 && o.scrollLeft !== void 0
											? b.scrollLeft + o.scrollLeft
											: void 0,
								};
							(s.scrollTop === l.scrollTop && s.scrollLeft === l.scrollLeft) ||
								f.setScrollPosition(l);
						}
					}
					t() {
						const n = [];
						for (const g of this.h.visibleEditorPanes) {
							if (g instanceof d.$AVb) {
								const p = g.getPrimaryEditorPane(),
									o = g.getSecondaryEditorPane();
								p && n.push(p), o && n.push(o);
								continue;
							}
							n.push(g);
						}
						return n;
					}
					u() {
						this.c.clear(), this.b.clear(), this.a.clear();
					}
					w(n) {
						if (n) {
							if (!this.f.value) {
								const g = (0, i.localize)(9118, null),
									p = (0, i.localize)(9119, null);
								this.f.value = this.j.addEntry(
									{
										name: g,
										text: g,
										tooltip: p,
										ariaLabel: g,
										command: {
											id: "workbench.action.toggleLockedScrolling",
											title: "",
										},
										kind: "prominent",
										showInAllWindows: !0,
									},
									"status.scrollLockingEnabled",
									a.StatusbarAlignment.RIGHT,
									102,
								);
							}
						} else this.f.clear();
					}
					y() {
						const n = this;
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.action.toggleLockedScrolling",
											title: {
												...(0, i.localize2)(
													9123,
													"Toggle Locked Scrolling Across Editors",
												),
												mnemonicTitle: (0, i.localize)(9120, null),
											},
											category: w.$ck.View,
											f1: !0,
											metadata: { description: (0, i.localize)(9121, null) },
										});
									}
									run() {
										n.toggle();
									}
								},
							),
						),
							this.D(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({
												id: "workbench.action.holdLockedScrolling",
												title: {
													...(0, i.localize2)(
														9124,
														"Hold Locked Scrolling Across Editors",
													),
													mnemonicTitle: (0, i.localize)(9122, null),
												},
												category: w.$ck.View,
											});
										}
										run(g) {
											const p = g.get(C.$uZ);
											n.toggle();
											const o = p.enableKeybindingHoldMode(
												"workbench.action.holdLockedScrolling",
											);
											o &&
												o.finally(() => {
													n.toggle();
												});
										}
									},
								),
							);
					}
					dispose() {
						this.u(), super.dispose();
					}
				};
				(e.$N2c = h), (e.$N2c = h = Ne([j(0, u.$IY), j(1, a.$d6b)], h));
			},
		),
		