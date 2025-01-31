import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import './colorDetector.js';
import './colorHoverParticipant.js';
import '../../hover/browser/contentHoverController2.js';
import '../../hover/browser/hoverOperation.js';
import '../../hover/browser/hoverTypes.js';
define(
			de[3607],
			he([1, 0, 3, 56, 46, 38, 17, 785, 1218, 448, 601, 368]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editorBrowser*/,
 w /*editorExtensions*/,
 E /*editorOptions*/,
 C /*range*/,
 d /*colorDetector*/,
 m /*colorHoverParticipant*/,
 r /*contentHoverController2*/,
 u /*hoverOperation*/,
 a /*hoverTypes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xhc = void 0);
				class h extends t.$1c {
					static {
						this.ID = "editor.contrib.colorContribution";
					}
					static {
						this.RECOMPUTE_TIME = 1e3;
					}
					constructor(n) {
						super(), (this.a = n), this.D(n.onMouseDown((g) => this.b(g)));
					}
					dispose() {
						super.dispose();
					}
					b(n) {
						const g = this.a.getOption(
							E.EditorOption.colorDecoratorsActivatedOn,
						);
						if (g !== "click" && g !== "clickAndHover") return;
						const p = n.target;
						if (
							p.type !== i.MouseTargetType.CONTENT_TEXT ||
							!p.detail.injectedText ||
							p.detail.injectedText.options.attachedData !== d.$XBb ||
							!p.range
						)
							return;
						const o = this.a.getContribution(r.$whc.ID);
						if (o && !o.isColorPickerVisible) {
							const f = new C.$iL(
								p.range.startLineNumber,
								p.range.startColumn + 1,
								p.range.endLineNumber,
								p.range.endColumn + 1,
							);
							o.showContentHover(
								f,
								u.HoverStartMode.Immediate,
								u.HoverStartSource.Mouse,
								!1,
								!0,
							);
						}
					}
				}
				(e.$xhc = h),
					(0, w.$qtb)(
						h.ID,
						h,
						w.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					a.$5Bb.register(m.$$Bb);
			},
		)
