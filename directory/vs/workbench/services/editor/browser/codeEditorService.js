import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/services/abstractCodeEditorService.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../platform/theme/common/themeService.js';
import '../common/editorService.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/resources.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/editor/editorOptions.js';
define(
			de[3274],
			he([1, 0, 56, 2842, 98, 35, 18, 65, 20, 19, 10, 549]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ovc = void 0);
				let h = class extends i.$kvc {
					constructor(n, g, p) {
						super(g),
							(this.I = n),
							(this.J = p),
							this.D(this.registerCodeEditorOpenHandler(this.M.bind(this))),
							this.D(this.registerCodeEditorOpenHandler(this.L.bind(this)));
					}
					getActiveCodeEditor() {
						const n = this.I.activeTextEditorControl;
						if ((0, t.$0sb)(n)) return n;
						if ((0, t.$$sb)(n)) return n.getModifiedEditor();
						const g = this.I.activeEditorPane?.getControl();
						return (0, t.$atb)(g) && (0, t.$0sb)(g.activeCodeEditor)
							? g.activeCodeEditor
							: null;
					}
					async L(n, g, p) {
						const o = this.I.activeTextEditorControl;
						if (
							!p &&
							(0, t.$$sb)(o) &&
							n.options &&
							n.resource &&
							g === o.getModifiedEditor() &&
							o.getModel() &&
							(0, r.$gh)(n.resource, o.getModel()?.modified.uri)
						) {
							const f = o.getModifiedEditor();
							return (
								(0, a.applyTextEditorOptions)(
									n.options,
									f,
									w.ScrollType.Smooth,
								),
								f
							);
						}
						return null;
					}
					async M(n, g, p) {
						if (
							!this.J.getValue().workbench?.editor
								?.enablePreviewFromCodeNavigation &&
							g &&
							!n.options?.pinned &&
							!p &&
							!(0, r.$gh)(g.getModel()?.uri, n.resource)
						) {
							for (const b of this.I.visibleEditorPanes)
								if ((0, t.$btb)(b.getControl()) === g) {
									b.group.pinEditor();
									break;
								}
						}
						const f = await this.I.openEditor(n, p ? C.$KY : C.$JY);
						if (f) {
							const b = f.getControl();
							if ((0, t.$0sb)(b)) return b;
							if ((0, t.$atb)(b) && (0, t.$0sb)(b.activeCodeEditor))
								return b.activeCodeEditor;
						}
						return null;
					}
				};
				(e.$ovc = h),
					(e.$ovc = h = Ne([j(0, C.$IY), j(1, E.$iP), j(2, u.$gj)], h)),
					(0, m.$lK)(d.$dtb, h, m.InstantiationType.Delayed);
			},
		),
		