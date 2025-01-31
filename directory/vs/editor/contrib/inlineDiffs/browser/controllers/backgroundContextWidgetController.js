import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../browser/editorExtensions.js';
import '../widgets/backgroundContextWidget.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[4118],
			he([1, 0, 3, 46, 4117, 5, 45]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editorExtensions*/,
 w /*backgroundContextWidget*/,
 E /*instantiation*/,
 C /*reactiveStorageService*/) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wlc = void 0);
				let m = class extends t.$1c {
					static {
						d = this;
					}
					static {
						this.ID = "editor.contrib.backgroundContextWidgetController";
					}
					static get(u) {
						return u.getContribution(d.ID);
					}
					constructor(u, a, h) {
						super(),
							(this.c = u),
							(this.f = a),
							(this.g = h),
							(this.a = new t.$Zc()),
							(this.reactiveStorageRoot = this.D(this.g.createScoped(this))),
							(this.b = this.f.createInstance(w.$Vlc, this.j(), this.c)),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() =>
										this.g.nonPersistentStorage.cmdkBackgroundContextSelections,
								],
								onChange: () => {
									this.h();
								},
							}),
							this.h(),
							this.a.add(this.c.onDidBlurEditorWidget(() => this.h())),
							this.a.add(this.c.onDidFocusEditorWidget(() => this.h()));
					}
					h() {
						const u =
							this.g.nonPersistentStorage.cmdkBackgroundContextSelections
								.length;
						this.c.hasTextFocus() && u > 0 ? this.b.show() : this.b.hide();
					}
					j() {
						return (
							"aiCmdk.backgroundContextWidget." +
							Math.random().toString(36).substring(2, 8)
						);
					}
					dispose() {
						super.dispose(), this.a.dispose();
					}
				};
				(e.$Wlc = m),
					(e.$Wlc = m = d = Ne([j(1, E.$Li), j(2, C.$0zb)], m)),
					(0, i.$qtb)(m.ID, m, i.EditorContributionInstantiation.Eventually);
			},
		)
