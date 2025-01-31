import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/common/actions.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../actions/browser/menuEntryActionViewItem.js';
import '../../actions/common/actions.js';
import '../../contextkey/common/contextkey.js';
import '../../keybinding/common/keybinding.js';
import '../../notification/common/notification.js';
import '../../telemetry/common/telemetry.js';
import './contextMenuHandler.js';
import './contextView.js';
define(
			de[2896],
			he([1, 0, 7, 50, 6, 3, 92, 11, 8, 39, 40, 32, 2835, 49]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*actions*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*menuEntryActionViewItem*/,
 d /*actions*/,
 m /*contextkey*/,
 r /*keybinding*/,
 u /*notification*/,
 a /*telemetry*/,
 h /*contextMenuHandler*/,
 c /*contextView*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContextMenuMenuDelegate = e.$Q5c = void 0);
				let n = class extends E.$1c {
					get b() {
						return (
							this.a || (this.a = new h.$P5c(this.j, this.g, this.h, this.m)),
							this.a
						);
					}
					constructor(o, f, b, s, l, y) {
						super(),
							(this.g = o),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.q = y),
							(this.a = void 0),
							(this.c = this.B.add(new w.$re())),
							(this.onDidShowContextMenu = this.c.event),
							(this.f = this.B.add(new w.$re())),
							(this.onDidHideContextMenu = this.f.event);
					}
					configure(o) {
						this.b.configure(o);
					}
					showContextMenu(o) {
						(o = g.transform(o, this.n, this.q)),
							this.b.showContextMenu({
								...o,
								onHide: (f) => {
									o.onHide?.(f), this.f.fire();
								},
							}),
							t.$Fhb.getInstance().resetKeyStatus(),
							this.c.fire();
					}
				};
				(e.$Q5c = n),
					(e.$Q5c = n =
						Ne(
							[
								j(0, a.$km),
								j(1, u.$4N),
								j(2, c.$Wxb),
								j(3, r.$uZ),
								j(4, d.$YX),
								j(5, m.$6j),
							],
							n,
						));
				var g;
				(function (p) {
					function o(b) {
						return b && b.menuId instanceof d.$XX;
					}
					function f(b, s, l) {
						if (!o(b)) return b;
						const { menuId: y, menuActionOptions: $, contextKeyService: v } = b;
						return {
							...b,
							getActions: () => {
								const S = [];
								if (y) {
									const I = s.getMenuActions(y, v ?? l, $);
									(0, C.$Jyb)(I, S);
								}
								return b.getActions ? i.$tj.join(b.getActions(), S) : S;
							},
						};
					}
					p.transform = f;
				})(g || (e.ContextMenuMenuDelegate = g = {}));
			},
		)
