import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './renderBugbotEditor.js';
define(
			de[4262],
			he([1, 0, 217, 32, 35, 21, 5, 4261]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorPane*/,
 i /*telemetry*/,
 w /*themeService*/,
 E /*storage*/,
 C /*instantiation*/,
 d /*renderBugbotEditor*/) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4zc = void 0);
				let r = class extends t.$JEb {
					static {
						m = this;
					}
					static {
						this.ID = "bugbotEditor";
					}
					constructor(a, h, c, n, g) {
						super(m.ID, a, h, c, n), (this.b = g);
					}
					Y(a) {}
					async setInput(a, h, c, n) {
						await super.setInput(a, h, c, n), this.a && this.a.dispose();
						const g = this.getContainer();
						g &&
							((g.tabIndex = 0),
							g.setAttribute("role", "document"),
							(g.style.outline = "none"),
							(this.a = (0, d.$3zc)(g, this.b, a.bugbot, this, {
								onClose: () => {
									this.group.closeEditor(this.input);
								},
							})));
					}
					clearInput() {
						super.clearInput(), this.a?.dispose(), (this.a = void 0);
					}
					layout(a) {}
					focus() {
						super.focus();
						const a = this.getContainer();
						a && a.focus();
					}
					dispose() {
						this.a?.dispose(), (this.a = void 0), super.dispose();
					}
				};
				(e.$4zc = r),
					(e.$4zc =
						r =
						m =
							Ne([j(1, i.$km), j(2, w.$iP), j(3, E.$lq), j(4, C.$Li)], r));
			},
		),
		