import '../../../../../require.js';
import '../../../../../exports.js';
import '../list/listWidget.js';
import './selectBoxCustom.js';
import './selectBoxNative.js';
import '../widget.js';
import '../../../common/platform.js';
import '../../../../css!vs/base/browser/ui/selectBox/selectBox.js';
define(
			de[596],
			he([1, 0, 278, 2684, 2677, 235, 12, 2252]),
			function (ce /*require*/,
 e /*exports*/,
 t /*listWidget*/,
 i /*selectBoxCustom*/,
 w /*selectBoxNative*/,
 E /*widget*/,
 C /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5ib = e.$4ib = void 0),
					(e.$4ib = {
						...t.$Qib,
						selectBackground: "#3C3C3C",
						selectForeground: "#F0F0F0",
						selectBorder: "#3C3C3C",
						decoratorRightForeground: void 0,
						selectListBackground: void 0,
						selectListBorder: void 0,
						focusBorder: void 0,
					});
				class d extends E.$Uhb {
					constructor(r, u, a, h, c) {
						super(),
							C.$m && !c?.useCustomDrawn
								? (this.a = new w.$3ib(r, u, h, c))
								: (this.a = new i.$2ib(r, u, a, h, c)),
							this.D(this.a);
					}
					get onDidSelect() {
						return this.a.onDidSelect;
					}
					setOptions(r, u) {
						this.a.setOptions(r, u);
					}
					select(r) {
						this.a.select(r);
					}
					setAriaLabel(r) {
						this.a.setAriaLabel(r);
					}
					focus() {
						this.a.focus();
					}
					blur() {
						this.a.blur();
					}
					setFocusable(r) {
						this.a.setFocusable(r);
					}
					setEnabled(r) {
						this.a.setEnabled(r);
					}
					render(r) {
						this.a.render(r);
					}
				}
				e.$5ib = d;
			},
		),
		