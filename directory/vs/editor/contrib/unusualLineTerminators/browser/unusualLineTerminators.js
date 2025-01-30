import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/services/codeEditorService.js';
import '../../../common/config/editorOptions.js';
import '../../../../nls.js';
import '../../../../platform/dialogs/common/dialogs.js';
define(
			de[1647],
			he([1, 0, 3, 19, 46, 65, 38, 4, 57]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*resources*/,
 w /*editorExtensions*/,
 E /*codeEditorService*/,
 C /*editorOptions*/,
 d /*nls*/,
 m /*dialogs*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jkc = void 0),
					(d = mt(d));
				const r = "ignoreUnusualLineTerminators";
				function u(c, n, g) {
					c.setModelProperty(n.uri, r, g);
				}
				function a(c, n) {
					return c.getModelProperty(n.uri, r);
				}
				let h = class extends t.$1c {
					static {
						this.ID = "editor.contrib.unusualLineTerminatorsDetector";
					}
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.b = !1),
							(this.a = this.c.getOption(
								C.EditorOption.unusualLineTerminators,
							)),
							this.D(
								this.c.onDidChangeConfiguration((o) => {
									o.hasChanged(C.EditorOption.unusualLineTerminators) &&
										((this.a = this.c.getOption(
											C.EditorOption.unusualLineTerminators,
										)),
										this.h());
								}),
							),
							this.D(
								this.c.onDidChangeModel(() => {
									this.h();
								}),
							),
							this.D(
								this.c.onDidChangeModelContent((o) => {
									o.isUndoing || this.h();
								}),
							),
							this.h();
					}
					async h() {
						if (this.a === "off" || !this.c.hasModel()) return;
						const n = this.c.getModel();
						if (
							!n.mightContainUnusualLineTerminators() ||
							a(this.g, n) === !0 ||
							this.c.getOption(C.EditorOption.readOnly)
						)
							return;
						if (this.a === "auto") {
							n.removeUnusualLineTerminators(this.c.getSelections());
							return;
						}
						if (this.b) return;
						let p;
						try {
							(this.b = !0),
								(p = await this.f.confirm({
									title: d.localize(1577, null),
									message: d.localize(1578, null),
									detail: d.localize(1579, null, (0, i.$kh)(n.uri)),
									primaryButton: d.localize(1580, null),
									cancelButton: d.localize(1581, null),
								}));
						} finally {
							this.b = !1;
						}
						if (!p.confirmed) {
							u(this.g, n, !0);
							return;
						}
						n.removeUnusualLineTerminators(this.c.getSelections());
					}
				};
				(e.$Jkc = h),
					(e.$Jkc = h = Ne([j(1, m.$GO), j(2, E.$dtb)], h)),
					(0, w.$qtb)(
						h.ID,
						h,
						w.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		