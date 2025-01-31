import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../cppEventLogger.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/instantiation/common/extensions.js';
import '../../../../../editor/contrib/codeAction/browser/codeActionController.js';
import '../../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../../../services/ai/browser/aiMiscServices.js';
import '../../../../../base/common/map.js';
define(
			de[3224],
			he([1, 0, 332, 5, 20, 500, 328, 137, 59]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cppEventLogger*/,
 i /*instantiation*/,
 w /*extensions*/,
 E /*codeActionController*/,
 C /*suggestController*/,
 d /*aiMiscServices*/,
 m /*map*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$U7b = void 0);
				const r = 5,
					u = 50,
					a = 5e3;
				e.$U7b = (0, i.$Mi)("quickActionListenerService");
				let h = class {
					constructor(f, b) {
						(this.g = f), (this.h = b), (this.f = new m.$Jc(u));
					}
					maybeReportNewActions(f, b) {
						const s = f.getModel();
						if (!s) return;
						const l = s.id;
						if (this.h.isModelTooBigFullCheck(s)) return;
						const y = `${f.getId()}|${l}`,
							$ = this.f.get(y) ?? [],
							v = b.filter((S) => JSON.stringify(S).length < a).slice(0, r);
						if (!($.length === 0 && v.length === 0)) {
							if (
								$.length === v.length &&
								$.every((I) => v.some((T) => c(I, T)))
							)
								return;
							this.f.set(y, v);
							const S = v.map(g);
							this.g.recordQuickActionsChange({
								actions: S,
								model: s,
								modelVersion: s.getVersionId(),
							});
						}
					}
					registerQuickActionListener(f) {
						const b = E.$BBb.get(f),
							s = C.$KDb.get(f),
							l = [];
						return (
							b &&
								(l.push(
									b.onDidChangeCodeActions((y) => {
										const $ = y.validActions
											.filter(
												(v) =>
													v.action.isAI !== !0 && v.action.kind === "quickfix",
											)
											.map((v) => v.action)
											.slice(0, 5);
										this.maybeReportNewActions(f, $);
									}),
								),
								l.push(
									b.onDidApplyCodeAction((y) => {
										y.action.isAI !== !0 &&
											y.action.kind === "quickfix" &&
											this.reportFiredAction(f, y.action);
									}),
								)),
							s &&
								l.push(
									s.onFireCommand((y) => {
										this.reportFiredCommand(f, y);
									}),
								),
							{
								dispose: () => {
									l.forEach((y) => y.dispose());
								},
							}
						);
					}
					reportFiredAction(f, b) {
						const s = f.getModel();
						s &&
							(this.h.isModelTooBigFullCheck(s) ||
								this.g.recordQuickActionFired({
									model: s,
									modelVersion: s.getVersionId(),
									action: g(b),
								}));
					}
					reportFiredCommand(f, b) {
						const s = f.getModel();
						s &&
							this.g.recordQuickActionFired({
								model: s,
								modelVersion: s.getVersionId(),
								command: p(b),
							});
					}
				};
				(h = Ne([j(0, t.$V7b), j(1, d.$hfc)], h)),
					(0, w.$lK)(e.$U7b, h, w.InstantiationType.Delayed);
				function c(o, f) {
					return o.command?.id === f.command?.id &&
						o.title === f.title &&
						o.isPreferred === f.isPreferred
						? o.command && f.command
							? n(o.command, f.command)
							: !0
						: !1;
				}
				function n(o, f) {
					return o.id === f.id &&
						o.title === f.title &&
						o.arguments?.length === f.arguments?.length
						? o.arguments && f.arguments
							? o.arguments.every((s, l) => s === f.arguments?.[l])
							: !(o.arguments || f.arguments)
						: !1;
				}
				function g(o) {
					const f = o.edit?.edits,
						b = [];
					return (
						f &&
							f.map((s) => {
								"textEdit" in s &&
									b.push({ text: s.textEdit.text, range: s.textEdit.range });
							}),
						{
							title: o.title,
							edits: b,
							isPreferred: o.isPreferred,
							command: o.command ? p(o.command) : void 0,
						}
					);
				}
				function p(o) {
					return { title: o.title, id: o.id, arguments: o.arguments ?? [] };
				}
			},
		)
