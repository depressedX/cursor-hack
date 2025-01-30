import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../browser/editorBrowser.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../base/browser/dom.js';
import './renderBackgroundContextWidget.js';
import '../../../../../platform/instantiation/common/instantiation.js';
define(
			de[4117],
			he([1, 0, 56, 3, 45, 7, 4116, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorBrowser*/,
 i /*lifecycle*/,
 w /*reactiveStorageService*/,
 E /*dom*/,
 C /*renderBackgroundContextWidget*/,
 d /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vlc = void 0),
					(E = mt(E));
				let m = class extends i.$1c {
					constructor(u, a, h, c) {
						super(),
							(this.id = u),
							(this.b = a),
							(this._reactiveStorageService = h),
							(this.c = c),
							(this.f = !1),
							(this.a = E.$("div.background-context-widget")),
							(this.a.style.height = "18.195px"),
							this.D((0, C.$Ulc)(this.a, this.c, () => this.forceHide())),
							this.b.addOverlayWidget(this),
							this.a.addEventListener("mouseover", () => {
								this.f = !0;
							}),
							this.a.addEventListener("mouseout", () => {
								this.f = !1;
							});
					}
					hide() {
						this.f || (this.a.style.display = "none");
					}
					forceHide() {
						(this.f = !1), this.hide();
					}
					show() {
						this.a.style.display = "block";
					}
					getId() {
						return this.id;
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return {
							preference: t.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER,
						};
					}
				};
				(e.$Vlc = m), (e.$Vlc = m = Ne([j(2, w.$0zb), j(3, d.$Li)], m));
			},
		),
		