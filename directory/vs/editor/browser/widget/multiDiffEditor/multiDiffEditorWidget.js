import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/hotReloadHelpers.js';
import './multiDiffEditorWidgetImpl.js';
import './multiDiffEditorViewModel.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './diffEditorItemTemplate.js';
import '../../../../base/common/event.js';
import './colors.js';
define(
			de[1683],
			he([1, 0, 3, 77, 755, 2906, 1681, 5, 1682, 6, 2832]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IGc = void 0);
				let u = class extends t.$1c {
					constructor(h, c, n) {
						super(),
							(this.f = h),
							(this.g = c),
							(this.h = n),
							(this.a = (0, i.observableValue)(this, void 0)),
							(this.b = (0, i.observableValue)(this, void 0)),
							(this.c = (0, i.derivedWithStore)(
								this,
								(g, p) => (
									(0, w.$Tpb)(m.$DGc, g),
									p.add(
										this.h.createInstance(
											(0, w.$Tpb)(E.$EGc, g),
											this.f,
											this.a,
											this.b,
											this.g,
										),
									)
								),
							)),
							(this.j = (0, i.derived)(this, (g) =>
								this.c.read(g).activeControl.read(g),
							)),
							(this.onDidChangeActiveControl = r.Event.fromObservableLight(
								this.j,
							)),
							this.D((0, i.recomputeInitiallyAndOnChange)(this.c));
					}
					reveal(h, c) {
						this.c.get().reveal(h, c);
					}
					createViewModel(h) {
						return new C.$Fnc(h, this.h);
					}
					setViewModel(h) {
						this.b.set(h, void 0);
					}
					layout(h) {
						this.a.set(h, void 0);
					}
					getActiveControl() {
						return this.j.get();
					}
					getViewState() {
						return this.c.get().getViewState();
					}
					setViewState(h) {
						this.c.get().setViewState(h);
					}
					tryGetCodeEditor(h) {
						return this.c.get().tryGetCodeEditor(h);
					}
					findDocumentDiffItem(h) {
						return this.c.get().findDocumentDiffItem(h);
					}
				};
				(e.$IGc = u), (e.$IGc = u = Ne([j(2, d.$Li)], u));
			},
		),
		