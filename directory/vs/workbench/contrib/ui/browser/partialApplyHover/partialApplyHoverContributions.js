import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/browser/editorExtensions.js';
import '../../../../../base/common/lazy.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../platform/configuration/common/configuration.js';
import './partialApplyHoverWidget.js';
import '../../../../../base/common/network.js';
define(
			de[1934],
			he([1, 0, 46, 149, 3, 69, 8, 5, 90, 45, 10, 3987, 23]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K$b = void 0);
				let n = class extends w.$1c {
					static {
						c = this;
					}
					static {
						this.ID = "editor.contrib.partialApplyHoverController";
					}
					static get(p) {
						return p.getContribution(c.ID);
					}
					constructor(p, o, f, b, s, l, y) {
						super(),
							(this.j = b),
							(this.m = l),
							(this.n = y),
							(this.f = !1),
							(this.a = p),
							(this.b = new i.$Y(() =>
								this.D(b.createInstance(a.$J$b, this.a)),
							)),
							this.D(this.a.onDidChangeModel(() => this.r())),
							this.D(this.a.onDidChangeModelLanguage(() => this.r())),
							this.D(this.a.onDidBlurEditorText(() => this.r())),
							this.D(this.a.onDidChangeCursorPosition(() => this.r())),
							this.D(
								this.a.onMouseDown(() => {
									(this.f = !0), this.r();
								}),
							),
							this.D(
								this.a.onMouseUp(() => {
									(this.f = !1), this.r();
								}),
							),
							(this.c = this.D(this.m.createScoped(this))),
							this.r();
					}
					q() {
						return this.a.hasModel() ? this.a.getSelection() : void 0;
					}
					updateUri(p) {
						(this.g = p), this.b.hasValue && this.b.value.updateUri(p);
					}
					updateSlashEditOptions(p) {
						(this.h = p),
							this.b.hasValue && this.b.value.updateSlashEditOptions(p);
					}
					r() {
						const p = this.a.getModel();
						if (!(!p || !p.uri || !this.g)) {
							if (!(0, h.$Vg)(p.uri, "aichat-code-block-anysphere")) {
								this.b.value.hide();
								return;
							}
							if (p) {
								const o = this.q();
								!this.f && o
									? (this.b.value.updateUri(this.g),
										this.h && this.b.value.updateSlashEditOptions(this.h),
										this.b.value.update())
									: this.b.value.hide();
							}
						}
					}
				};
				(e.$K$b = n),
					(e.$K$b =
						n =
						c =
							Ne(
								[
									j(1, m.$aM),
									j(2, C.$6j),
									j(3, d.$Li),
									j(4, E.$k3),
									j(5, r.$0zb),
									j(6, u.$gj),
								],
								n,
							)),
					(0, t.$qtb)(n.ID, n, t.EditorContributionInstantiation.Eventually);
			},
		),
		