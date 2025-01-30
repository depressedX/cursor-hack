import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../nls.js';
import './testResultService.js';
import './testTypes.js';
import './testingUri.js';
define(
			de[3186],
			he([1, 0, 76, 3, 37, 61, 67, 42, 4, 381, 185, 813]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*lifecycle*/,
 w /*strings*/,
 E /*language*/,
 C /*model*/,
 d /*resolverService*/,
 m /*nls*/,
 r /*testResultService*/,
 u /*testTypes*/,
 a /*testingUri*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FMc = void 0);
				let h = class {
					constructor(n, g, p, o) {
						(this.a = g),
							(this.b = p),
							(this.c = o),
							n.registerTextModelContentProvider(a.$1Kc, this);
					}
					async provideTextContent(n) {
						const g = this.b.getModel(n);
						if (g && !g.isDisposed()) return g;
						const p = (0, a.$2Kc)(n);
						if (!p) return null;
						const o = this.c.getResult(p.resultId);
						if (!o) return null;
						if (p.type === a.TestUriType.TaskOutput) {
							const l = o.tasks[p.taskIndex],
								y = this.b.createModel("", null, n, !1),
								$ = (T) =>
									y.applyEdits([
										{
											range: {
												startColumn: 1,
												endColumn: 1,
												startLineNumber: 1 / 0,
												endLineNumber: 1 / 0,
											},
											text: T,
										},
									]),
								v = t.$Te.concat(l.output.buffers, l.output.length).toString();
							$((0, w.$9f)(v));
							let S = v.length > 0;
							const I = new i.$Zc();
							return (
								I.add(
									l.output.onDidWriteData((T) => {
										(S ||= T.byteLength > 0), $((0, w.$9f)(T.toString()));
									}),
								),
								l.output.endPromise.then(() => {
									I.isDisposed ||
										S ||
										($((0, m.localize)(10915, null)), I.dispose());
								}),
								y.onWillDispose(() => I.dispose()),
								y
							);
						}
						const f = o?.getStateById(p.testExtId);
						if (!f) return null;
						let b,
							s = null;
						switch (p.type) {
							case a.TestUriType.ResultActualOutput: {
								const l = f.tasks[p.taskIndex].messages[p.messageIndex];
								l?.type === u.TestMessageType.Error && (b = l.actual);
								break;
							}
							case a.TestUriType.TestOutput: {
								b = "";
								const l = o.tasks[p.taskIndex].output;
								for (const y of f.tasks[p.taskIndex].messages)
									y.type === u.TestMessageType.Output &&
										(b += (0, w.$9f)(
											l.getRange(y.offset, y.length).toString(),
										));
								break;
							}
							case a.TestUriType.ResultExpectedOutput: {
								const l = f.tasks[p.taskIndex].messages[p.messageIndex];
								l?.type === u.TestMessageType.Error && (b = l.expected);
								break;
							}
							case a.TestUriType.ResultMessage: {
								const l = f.tasks[p.taskIndex].messages[p.messageIndex];
								if (!l) break;
								if (l.type === u.TestMessageType.Output) {
									const y = o.tasks[p.taskIndex].output.getRange(
										l.offset,
										l.length,
									);
									b = (0, w.$9f)(y.toString());
								} else
									typeof l.message == "string"
										? (b = (0, w.$9f)(l.message))
										: ((b = l.message.value),
											(s = this.a.createById("markdown")));
							}
						}
						return b === void 0 ? null : this.b.createModel(b, s, n, !1);
					}
				};
				(e.$FMc = h),
					(e.$FMc = h =
						Ne([j(0, d.$MO), j(1, E.$nM), j(2, C.$QO), j(3, r.$Kqc)], h));
			},
		),
		