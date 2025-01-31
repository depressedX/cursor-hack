import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lazy.js';
import './loadingIndicatorWidget.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[2858],
			he([1, 0, 3, 5, 149, 2857, 45, 8]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*instantiation*/,
 w /*lazy*/,
 E /*loadingIndicatorWidget*/,
 C /*reactiveStorageService*/,
 d /*contextkey*/) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tlc = void 0);
				let r = class extends t.$1c {
					static {
						m = this;
					}
					static {
						this.ID = "editor.contrib.loadingIndicatorController";
					}
					static get(a) {
						return a.getContribution(m.ID);
					}
					constructor(a, h, c, n) {
						super(),
							(this.c = h),
							(this.f = n),
							this.D(
								c.onDidChangeContext((g) => {
									this.g();
								}),
							),
							(this.a = a),
							setTimeout(() => {
								this.g();
							}, 200),
							this.D(this.a.onDidChangeModel(() => this.g())),
							this.D(this.a.onDidChangeModelLanguage(() => this.g())),
							this.D(this.a.onDidChangeCursorPosition(() => this.g())),
							(this.b = new w.$Y(() =>
								this.D(h.createInstance(E.$Slc, this.a)),
							)),
							(this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [() => this.f.nonPersistentStorage.runningGeneration],
								onChange: () => {
									this.g();
								},
								runNowToo: !0,
							});
					}
					g() {
						const a = this.a.getSelection(),
							h = a ? a.getStartPosition() : this.a.getPosition();
						this.f.nonPersistentStorage.runningGeneration
							? this.b.value.update(h)
							: this.b.value.hide();
					}
				};
				(e.$Tlc = r),
					(e.$Tlc = r = m = Ne([j(1, i.$Li), j(2, d.$6j), j(3, C.$0zb)], r));
			},
		)
