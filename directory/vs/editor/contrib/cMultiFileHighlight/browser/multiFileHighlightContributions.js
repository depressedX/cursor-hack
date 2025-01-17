import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './multiFileHighlightWidget.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../inlineDiffs/browser/utils.js';
define(
			de[2860],
			he([1, 0, 46, 3, 5, 2859, 45, 1554]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rlc = void 0);
				let r = class extends i.$1c {
					static {
						m = this;
					}
					static {
						this.ID = "editor.contrib.multiFileHighlightController";
					}
					static get(a) {
						return a.getContribution(m.ID);
					}
					constructor(a, h, c) {
						super(),
							(this.c = h),
							(this.f = c),
							(this.a = a),
							setTimeout(() => {
								this.g();
							}, 200),
							this.D(this.a.onDidChangeModel(() => this.g())),
							this.D(this.a.onDidChangeModelLanguage(() => this.g())),
							this.D(this.a.onDidChangeCursorPosition(() => this.g())),
							(this.b = []),
							(this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() => (0, d.$Nlc)(this.f),
									() => this.f.nonPersistentStorage.multiEditState.chunks,
								],
								onChange: () => {
									this.g();
								},
								runNowToo: !0,
							});
					}
					g() {
						const h = (
							(0, d.$Nlc)(this.f)
								? this.f.nonPersistentStorage.multiEditState.chunks
								: []
						).filter((c) => c.fsPath === this.a.getModel()?.uri.fsPath);
						if (h.length < this.b.length) {
							for (let c = h.length; c < this.b.length; c++)
								this.b[c].dispose();
							this.b = this.b.slice(0, h.length);
						} else if (h.length > this.b.length)
							for (let c = this.b.length; c < h.length; c++)
								this.b.push(this.D(this.c.createInstance(E.$Qlc, this.a, c)));
						for (let c = 0; c < h.length; c++) {
							const n = h[c];
							this.b[c].update(n.startLineNumber, n.endLineNumber);
						}
					}
				};
				(e.$Rlc = r),
					(e.$Rlc = r = m = Ne([j(1, w.$Li), j(2, C.$0zb)], r)),
					(0, t.$qtb)(r.ID, r, t.EditorContributionInstantiation.Eventually);
			},
		),
		