import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/objects.js';
import '../../services/codeEditorService.js';
import './diffEditorWidget.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/progress/common/progress.js';
define(
			de[784],
			he([1, 0, 82, 65, 309, 184, 8, 5, 84]),
			function (ce /*require*/,
 e /*exports*/,
 t /*objects*/,
 i /*codeEditorService*/,
 w /*diffEditorWidget*/,
 E /*accessibilitySignalService*/,
 C /*contextkey*/,
 d /*instantiation*/,
 m /*progress*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7mc = void 0),
					(t = mt(t));
				let r = class extends w.$3yb {
					constructor(a, h, c, n, g, p, o, f, b) {
						super(a, n.getRawOptions(), c, g, p, o, f, b),
							(this.db = n),
							(this.eb = h),
							super.updateOptions(this.eb),
							this.D(n.onDidChangeConfiguration((s) => this.fb(s)));
					}
					getParentEditor() {
						return this.db;
					}
					fb(a) {
						super.updateOptions(this.db.getRawOptions()),
							super.updateOptions(this.eb);
					}
					updateOptions(a) {
						t.$yo(this.eb, a, !0), super.updateOptions(this.eb);
					}
				};
				(e.$7mc = r),
					(e.$7mc = r =
						Ne(
							[
								j(4, C.$6j),
								j(5, d.$Li),
								j(6, i.$dtb),
								j(7, E.$Owb),
								j(8, m.$bO),
							],
							r,
						));
			},
		),
		