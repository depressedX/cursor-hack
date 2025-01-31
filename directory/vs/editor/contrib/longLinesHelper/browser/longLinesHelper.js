import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
define(de[2811], he([1, 0, 3, 56, 46, 38]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editorBrowser*/,
 w /*editorExtensions*/,
 E /*editorOptions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			class C extends t.$1c {
				static {
					this.ID = "editor.contrib.longLinesHelper";
				}
				static get(m) {
					return m.getContribution(C.ID);
				}
				constructor(m) {
					super(),
						(this.a = m),
						this.D(
							this.a.onMouseDown((r) => {
								const u = this.a.getOption(
									E.EditorOption.stopRenderingLineAfter,
								);
								u >= 0 &&
									r.target.type === i.MouseTargetType.CONTENT_TEXT &&
									r.target.position.column >= u &&
									this.a.updateOptions({ stopRenderingLineAfter: -1 });
							}),
						);
				}
			}
			(0, w.$qtb)(
				C.ID,
				C,
				w.EditorContributionInstantiation.BeforeFirstInteraction,
			);
		})
