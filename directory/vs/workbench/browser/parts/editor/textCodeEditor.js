import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/types.js';
import '../../../common/editor/editorOptions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/resources.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../editor/common/editorCommon.js';
import './textEditor.js';
define(
			de[1337],
			he([1, 0, 4, 28, 549, 8, 19, 206, 98, 718]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lec = void 0);
				class u extends r.$BVb {
					constructor() {
						super(...arguments), (this.a = void 0);
					}
					get scopedContextKeyService() {
						return this.a?.invokeWithinContext((h) => h.get(E.$6j));
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(3549, null);
					}
					Lb(h, c) {
						this.a = this.D(this.m.createInstance(d.$rwb, h, c, this.Sb()));
					}
					Sb() {
						return Object.create(null);
					}
					Mb(h) {
						this.a?.updateOptions(h);
					}
					Nb() {
						return this.a;
					}
					getControl() {
						return this.a;
					}
					mb(h) {
						if (!this.a) return;
						const c = this.a.getModel();
						if (!c) return;
						const n = c.uri;
						if (n && (0, C.$gh)(n, h)) return this.a.saveViewState() ?? void 0;
					}
					setOptions(h) {
						super.setOptions(h),
							h &&
								(0, w.applyTextEditorOptions)(
									h,
									(0, i.$wg)(this.a),
									m.ScrollType.Smooth,
								);
					}
					focus() {
						super.focus(), this.a?.focus();
					}
					hasFocus() {
						return this.a?.hasTextFocus() || super.hasFocus();
					}
					Z(h) {
						super.Z(h), h ? this.a?.onVisible() : this.a?.onHide();
					}
					layout(h) {
						this.a?.layout(h);
					}
				}
				e.$lec = u;
			},
		),
		