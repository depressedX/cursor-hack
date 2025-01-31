import '../../../../../require.js';
import '../../../../../exports.js';
import './debug.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/configuration/common/configuration.js';
import './debugModel.js';
define(
			de[3682],
			he([1, 0, 112, 3, 34, 91, 10, 300]),
			function (ce /*require*/,
 e /*exports*/,
 t /*debug*/,
 i /*lifecycle*/,
 w /*log*/,
 E /*accessibility*/,
 C /*configuration*/,
 d /*debugModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qRc = void 0);
				let m = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.debugWatchAccessibilityAnnouncer";
					}
					constructor(u, a, h, c) {
						super(),
							(this.b = u),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.a = this.D(new i.$2c())),
							this.h(),
							this.D(
								c.onDidChangeConfiguration((n) => {
									n.affectsConfiguration(
										"accessibility.debugWatchVariableAnnouncements",
									) && this.h();
								}),
							);
					}
					h() {
						this.g.getValue("accessibility.debugWatchVariableAnnouncements") &&
						!this.a.value
							? (this.a.value = this.b
									.getModel()
									.onDidChangeWatchExpressionValue((a) => {
										!a ||
											a.value === d.$J3.DEFAULT_VALUE ||
											(this.f.alert(`${a.name} = ${a.value}`),
											this.c.trace(
												`debugAccessibilityAnnouncerValueChanged ${a.name} ${a.value}`,
											));
									}))
							: this.a.clear();
					}
				};
				(e.$qRc = m),
					(e.$qRc = m =
						Ne([j(0, t.$75), j(1, w.$ik), j(2, E.$XK), j(3, C.$gj)], m));
			},
		)
