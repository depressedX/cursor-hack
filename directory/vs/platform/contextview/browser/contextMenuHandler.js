import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/mouseEvent.js';
import '../../../base/browser/ui/menu/menu.js';
import '../../../base/common/actions.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../theme/browser/defaultStyles.js';
define(
			de[2835],
			he([1, 0, 7, 168, 1168, 50, 29, 3, 106]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*mouseEvent*/,
 w /*menu*/,
 E /*actions*/,
 C /*errors*/,
 d /*lifecycle*/,
 m /*defaultStyles*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P5c = void 0);
				class r {
					constructor(a, h, c, n) {
						(this.g = a),
							(this.h = h),
							(this.i = c),
							(this.j = n),
							(this.a = null),
							(this.b = null),
							(this.c = null),
							(this.d = null),
							(this.f = { blockMouse: !0 });
					}
					configure(a) {
						this.f = a;
					}
					showContextMenu(a) {
						const h = a.getActions();
						if (!h.length) return;
						this.a = (0, t.$Jgb)();
						let c;
						const n = (0, t.$Ygb)(a.domForShadowRoot)
							? a.domForShadowRoot
							: void 0;
						this.g.showContextView(
							{
								getAnchor: () => a.getAnchor(),
								canRelayout: !1,
								anchorAlignment: a.anchorAlignment,
								anchorAxisAlignment: a.anchorAxisAlignment,
								render: (g) => {
									this.b = g;
									const p = a.getMenuClassName ? a.getMenuClassName() : "";
									p && (g.className += " " + p),
										this.f.blockMouse &&
											((this.c = g.appendChild(
												(0, t.$)(".context-view-block"),
											)),
											(this.c.style.position = "fixed"),
											(this.c.style.cursor = "initial"),
											(this.c.style.left = "0"),
											(this.c.style.top = "0"),
											(this.c.style.width = "100%"),
											(this.c.style.height = "100%"),
											(this.c.style.zIndex = "-1"),
											this.d?.dispose(),
											(this.d = (0, t.$0fb)(this.c, t.$$gb.MOUSE_DOWN, (s) =>
												s.stopPropagation(),
											)));
									const o = new d.$Zc(),
										f = a.actionRunner || new E.$sj();
									f.onWillRun((s) => this.k(s, !a.skipTelemetry), this, o),
										f.onDidRun(this.l, this, o),
										(c = new w.Menu(
											g,
											h,
											{
												actionViewItemProvider: a.getActionViewItem,
												context: a.getActionsContext
													? a.getActionsContext()
													: null,
												actionRunner: f,
												getKeyBinding: a.getKeyBinding
													? a.getKeyBinding
													: (s) => this.j.lookupKeybinding(s.id),
											},
											m.$Hyb,
										)),
										c.onDidCancel(() => this.g.hideContextView(!0), null, o),
										c.onDidBlur(() => this.g.hideContextView(!0), null, o);
									const b = (0, t.getWindow)(g);
									return (
										o.add(
											(0, t.$0fb)(b, t.$$gb.BLUR, () =>
												this.g.hideContextView(!0),
											),
										),
										o.add(
											(0, t.$0fb)(b, t.$$gb.MOUSE_DOWN, (s) => {
												if (s.defaultPrevented) return;
												const l = new i.$2fb(b, s);
												let y = l.target;
												if (!l.rightButton) {
													for (; y; ) {
														if (y === g) return;
														y = y.parentElement;
													}
													this.g.hideContextView(!0);
												}
											}),
										),
										(0, d.$Xc)(o, c)
									);
								},
								focus: () => {
									c?.focus(!!a.autoSelectFirstItem);
								},
								onHide: (g) => {
									a.onHide?.(!!g),
										this.c && (this.c.remove(), (this.c = null)),
										this.d?.dispose(),
										(this.d = null),
										this.b &&
											((0, t.$Jgb)() === this.b ||
												(0, t.$Bgb)((0, t.$Jgb)(), this.b)) &&
											this.a?.focus(),
										(this.b = null);
								},
							},
							n,
							!!n,
						);
					}
					k(a, h) {
						h &&
							this.h.publicLog2("workbenchActionExecuted", {
								id: a.action.id,
								from: "contextMenu",
							}),
							this.g.hideContextView(!1);
					}
					l(a) {
						a.error && !(0, C.$8)(a.error) && this.i.error(a.error);
					}
				}
				e.$P5c = r;
			},
		),
		