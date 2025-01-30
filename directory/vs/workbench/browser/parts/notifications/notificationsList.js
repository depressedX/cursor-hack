import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/theme.js';
import './notificationsViewer.js';
import './notificationsActions.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/common/types.js';
import '../../../common/contextkeys.js';
import '../../../../base/common/lifecycle.js';
import './notificationsCommands.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../css!vs/workbench/browser/parts/notifications/media/notificationsList.js';
define(
			de[1702],
			he([
				1, 0, 4, 7, 93, 5, 123, 2951, 1227, 49, 28, 100, 3, 682, 39, 10, 2351,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*dom*/,
 w /*listService*/,
 E /*instantiation*/,
 C /*theme*/,
 d /*notificationsViewer*/,
 m /*notificationsActions*/,
 r /*contextView*/,
 u /*types*/,
 a /*contextkeys*/,
 h /*lifecycle*/,
 c /*notificationsCommands*/,
 n /*keybinding*/,
 g /*configuration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g3c = void 0);
				let p = class extends h.$1c {
					constructor(b, s, l, y) {
						super(),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.n = y),
							(this.f = []);
					}
					show() {
						this.g || (this.b || this.q(), (this.g = !0));
					}
					q() {
						(this.a = document.createElement("div")),
							this.a.classList.add("notifications-list-container");
						const b = this.D(this.m.createInstance(c.$52c)),
							s = this.m.createInstance(d.$e3c, b),
							l = (this.c = new d.$d3c(this.a)),
							y = this.j,
							$ = (this.b = this.D(
								this.m.createInstance(
									w.$yMb,
									"NotificationsList",
									this.a,
									l,
									[s],
									{
										...y,
										setRowLineHeight: !1,
										horizontalScrolling: !1,
										overrideStyles: { listBackground: C.$3Gb },
										accessibilityProvider: this.m.createInstance(o, y),
									},
								),
							)),
							v = this.D(
								this.m.createInstance(m.$c3c, m.$c3c.ID, m.$c3c.LABEL),
							);
						this.D(
							$.onContextMenu((I) => {
								I.element &&
									this.n.showContextMenu({
										getAnchor: () => I.anchor,
										getActions: () => [v],
										getActionsContext: () => I.element,
										actionRunner: b,
									});
							}),
						),
							this.D($.onMouseDblClick((I) => I.element.toggle()));
						const S = this.D((0, i.$dhb)($.getHTMLElement()));
						this.D(
							S.onDidBlur(() => {
								(0, i.getWindow)(this.a).document.hasFocus() && $.setFocus([]);
							}),
						),
							a.$nQb.bindTo($.contextKeyService),
							this.D(
								$.onDidChangeSelection((I) => {
									I.indexes.length > 0 && $.setSelection([]);
								}),
							),
							this.h.appendChild(this.a);
					}
					updateNotificationsList(b, s, l = []) {
						const [y, $] = (0, u.$xg)(this.b, this.a),
							v = (0, i.$Lgb)($),
							S = y.getFocus()[0],
							I = this.f[S];
						let T = null;
						if (
							(typeof S == "number" && (T = y.getRelativeTop(S)),
							this.f.splice(b, s, ...l),
							y.splice(b, s, l),
							y.layout(),
							this.f.length === 0)
						)
							this.hide();
						else if (typeof S == "number") {
							let P = 0;
							if (I) {
								let k = this.f.indexOf(I);
								k === -1 && (k = S - 1), k < this.f.length && k >= 0 && (P = k);
							}
							typeof T == "number" && y.reveal(P, T), y.setFocus([P]);
						}
						this.g && v && y.domFocus();
					}
					updateNotificationHeight(b) {
						const s = this.f.indexOf(b);
						if (s === -1) return;
						const [l, y] = (0, u.$xg)(this.b, this.c);
						l.updateElementHeight(s, y.getHeight(b)), l.layout();
					}
					hide() {
						!this.g ||
							!this.b ||
							((this.g = !1), this.b.splice(0, this.f.length), (this.f = []));
					}
					focusFirst() {
						this.b && (this.b.focusFirst(), this.b.domFocus());
					}
					hasFocus() {
						return this.a ? (0, i.$Lgb)(this.a) : !1;
					}
					layout(b, s) {
						this.a &&
							this.b &&
							((this.a.style.width = `${b}px`),
							typeof s == "number" &&
								(this.b.getHTMLElement().style.maxHeight = `${s}px`),
							this.b.layout());
					}
					dispose() {
						this.hide(), super.dispose();
					}
				};
				(e.$g3c = p), (e.$g3c = p = Ne([j(2, E.$Li), j(3, r.$Xxb)], p));
				let o = class {
					constructor(b, s, l) {
						(this.a = b), (this.b = s), (this.c = l);
					}
					getAriaLabel(b) {
						let s;
						const l = this.b
							.lookupKeybinding("editor.action.accessibleView")
							?.getAriaLabel();
						return (
							this.c.getValue("accessibility.verbosity.notification") &&
								(s = l
									? (0, t.localize)(3609, null, l)
									: (0, t.localize)(3610, null)),
							b.source
								? s
									? (0, t.localize)(3613, null, b.message.raw, b.source, s)
									: (0, t.localize)(3614, null, b.message.raw, b.source)
								: s
									? (0, t.localize)(3611, null, b.message.raw, s)
									: (0, t.localize)(3612, null, b.message.raw)
						);
					}
					getWidgetAriaLabel() {
						return this.a.widgetAriaLabel ?? (0, t.localize)(3615, null);
					}
					getRole() {
						return "dialog";
					}
				};
				o = Ne([j(1, n.$uZ), j(2, g.$gj)], o);
			},
		),
		