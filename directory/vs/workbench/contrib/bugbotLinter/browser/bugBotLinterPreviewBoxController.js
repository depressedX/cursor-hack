import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './bugBotLinterPreviewBoxWidget.js';
define(
			de[1989],
			he([1, 0, 149, 3, 8, 5, 4269]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lazy*/,
 i /*lifecycle*/,
 w /*contextkey*/,
 E /*instantiation*/,
 C /*bugBotLinterPreviewBoxWidget*/) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EAc = void 0);
				let m = class extends i.$1c {
					static {
						d = this;
					}
					static {
						this.ID = "editor.contrib.bugBotLinterPreviewBoxController";
					}
					static get(u) {
						return u.getContribution(d.ID);
					}
					constructor(u, a, h) {
						super(),
							(this.b = h),
							(this.a = u),
							(this.widget = new t.$Y(() =>
								this.D(this.b.createInstance(C.$DAc, this.a)),
							)),
							this.D(this.a.onDidChangeModel(() => this.update())),
							this.D(this.a.onDidBlurEditorWidget(() => this.update())),
							this.D(this.a.onDidFocusEditorWidget(() => this.update())),
							this.D(this.a.onDidChangeCursorPosition(() => this.update())),
							this.update();
					}
					update() {
						this.widget.value.update();
					}
				};
				(e.$EAc = m), (e.$EAc = m = d = Ne([j(1, w.$6j), j(2, E.$Li)], m));
			},
		),
		