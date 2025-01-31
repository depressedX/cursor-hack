import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/observable.js';
import '../../../browser/widget/diffEditor/features/hideUnchangedRegionsFeature.js';
import '../../../browser/widget/diffEditor/utils.js';
import '../../../common/services/languageFeatures.js';
import '../../documentSymbols/browser/outlineModel.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
define(
			de[2805],
			he([1, 0, 24, 77, 1641, 370, 69, 204, 3, 6]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*observable*/,
 w /*hideUnchangedRegionsFeature*/,
 E /*utils*/,
 C /*languageFeatures*/,
 d /*outlineModel*/,
 m /*lifecycle*/,
 r /*event*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let u = class extends m.$1c {
					constructor(h, c, n) {
						super(),
							(this.b = h),
							(this.c = c),
							(this.f = n),
							(this.a = (0, i.observableValue)(this, void 0));
						const g = (0, i.observableSignalFromEvent)(
								"documentSymbolProvider.onDidChange",
								this.c.documentSymbolProvider.onDidChange,
							),
							p = (0, i.observableSignalFromEvent)(
								"_textModel.onDidChangeContent",
								r.Event.debounce(
									(o) => this.b.onDidChangeContent(o),
									() => {},
									100,
								),
							);
						this.D(
							(0, i.autorunWithStore)(async (o, f) => {
								g.read(o), p.read(o);
								const b = f.add(new E.$Iwb()),
									s = await this.f.getOrCreate(this.b, b.token);
								f.isDisposed || this.a.set(s, void 0);
							}),
						);
					}
					getBreadcrumbItems(h, c) {
						const n = this.a.read(c);
						if (!n) return [];
						const g = n
							.asListOfDocumentSymbols()
							.filter(
								(p) =>
									h.contains(p.range.startLineNumber) &&
									!h.contains(p.range.endLineNumber),
							);
						return (
							g.sort(
								(0, t.$bc)(
									(0, t.$0b)(
										(p) => p.range.endLineNumber - p.range.startLineNumber,
										t.$_b,
									),
								),
							),
							g.map((p) => ({
								name: p.name,
								kind: p.kind,
								startLineNumber: p.range.startLineNumber,
							}))
						);
					}
				};
				(u = Ne([j(1, C.$k3), j(2, d.$9Db)], u)),
					w.$Yyb.setBreadcrumbsSourceFactory((a, h) => h.createInstance(u, a));
			},
		)
