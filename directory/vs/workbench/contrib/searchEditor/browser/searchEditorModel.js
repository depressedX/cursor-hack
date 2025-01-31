import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './searchEditorSerialization.js';
import '../../../services/workingCopy/common/workingCopyBackup.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/model/textModel.js';
import './constants.js';
import '../../../../base/common/event.js';
import '../../../../base/common/map.js';
import '../../../services/search/common/search.js';
define(
			de[4170],
			he([1, 0, 67, 61, 5, 1067, 335, 28, 122, 615, 6, 59, 186]),
			function (ce /*require*/,
 e /*exports*/,
 t /*model*/,
 i /*language*/,
 w /*instantiation*/,
 E /*searchEditorSerialization*/,
 C /*workingCopyBackup*/,
 d /*types*/,
 m /*textModel*/,
 r /*constants*/,
 u /*event*/,
 a /*map*/,
 h /*search*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QOc = e.$POc = e.$OOc = void 0);
				class c {
					constructor(o) {
						(this.config = o),
							(this.a = new u.$re()),
							(this.onConfigDidUpdate = this.a.event);
					}
					updateConfig(o) {
						(this.config = o), this.a.fire(o);
					}
				}
				e.$OOc = c;
				class n {
					constructor(o) {
						this.a = o;
					}
					async resolve() {
						return (0, d.$wg)(e.$QOc.models.get(this.a)).resolve();
					}
				}
				e.$POc = n;
				class g {
					constructor() {
						this.models = new a.$Gc();
					}
					initializeModelFromExistingModel(o, f, b) {
						if (this.models.has(f))
							throw Error(
								"Unable to contruct model for resource that already exists",
							);
						const s = o.get(i.$nM),
							l = o.get(t.$QO),
							y = o.get(w.$Li),
							$ = o.get(C.$WO);
						let v;
						this.models.set(f, {
							resolve: () => (
								v ||
									(v = (async () => {
										const S = await this.a(f, s, l, $, y);
										return (
											S ||
											Promise.resolve({
												resultsModel:
													l.getModel(f) ??
													l.createModel("", s.createById(h.$m7), f),
												configurationModel: new c(b),
											})
										);
									})()),
								v
							),
						});
					}
					initializeModelFromRawData(o, f, b, s) {
						if (this.models.has(f))
							throw Error(
								"Unable to contruct model for resource that already exists",
							);
						const l = o.get(i.$nM),
							y = o.get(t.$QO),
							$ = o.get(w.$Li),
							v = o.get(C.$WO);
						let S;
						this.models.set(f, {
							resolve: () => (
								S ||
									(S = (async () => {
										const I = await this.a(f, l, y, v, $);
										return (
											I ||
											Promise.resolve({
												resultsModel: y.createModel(
													s ?? "",
													l.createById(h.$m7),
													f,
												),
												configurationModel: new c(b),
											})
										);
									})()),
								S
							),
						});
					}
					initializeModelFromExistingFile(o, f, b) {
						if (this.models.has(f))
							throw Error(
								"Unable to contruct model for resource that already exists",
							);
						const s = o.get(i.$nM),
							l = o.get(t.$QO),
							y = o.get(w.$Li),
							$ = o.get(C.$WO);
						let v;
						this.models.set(f, {
							resolve: async () => (
								v ||
									(v = (async () => {
										const S = await this.a(f, s, l, $, y);
										if (S) return S;
										const { text: I, config: T } = await y.invokeFunction(
											E.$MOc,
											b,
										);
										return {
											resultsModel: l.createModel(
												I ?? "",
												s.createById(h.$m7),
												f,
											),
											configurationModel: new c(T),
										};
									})()),
								v
							),
						});
					}
					async a(o, f, b, s, l) {
						const y = await s.resolve({ resource: o, typeId: r.$xOc });
						let $ = b.getModel(o);
						if (!$ && y) {
							const v = await (0, m.$8X)(y.value);
							$ = b.createModel(v, f.createById(h.$m7), o);
						}
						if ($) {
							const v = $.getValue(),
								{ text: S, config: I } = (0, E.$NOc)(v);
							return (
								b.destroyModel(o),
								{
									resultsModel: b.createModel(S ?? "", f.createById(h.$m7), o),
									configurationModel: new c(I),
								}
							);
						} else return;
					}
				}
				e.$QOc = new g();
			},
		)
