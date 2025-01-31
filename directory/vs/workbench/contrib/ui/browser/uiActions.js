import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/position.js';
import '../../../../platform/actions/common/actions.js';
import '../common/constants.js';
import './aiEditorBox/aiEditorCodeBlock.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/opener/common/opener.js';
define(
			de[4357],
			he([1, 0, 65, 48, 11, 1780, 1369, 41, 69, 33, 41]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codeEditorService*/,
 i /*position*/,
 w /*actions*/,
 E /*constants*/,
 C /*aiEditorCodeBlock*/,
 d /*opener*/,
 m /*languageFeatures*/,
 r /*cancellation*/,
 u /*opener*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZAc = void 0);
				class a extends w.$3X {
					constructor() {
						super({ id: E.$8zc, title: "Accept Suggestion" }), (this.a = []);
					}
					run(c, n) {
						n();
					}
				}
				(e.$ZAc = a),
					(0, w.$4X)(a),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "aiEditorBox.goToDefinition",
									title: "Go to Definition",
								});
							}
							async run(c, n) {
								const g = c.get(t.$dtb),
									p = c.get(m.$k3),
									o = c.get(d.$7rb),
									f = g.getActiveCodeEditor();
								if (f instanceof C.$gAc) {
									const b = f.getModel(),
										s = b?.getDecorationRange(n.decorationId);
									if (s && b) {
										const l = new i.$hL(s.startLineNumber, s.startColumn),
											y = p.definitionProvider.ordered(b);
										for (const $ of y)
											if ($.provideDefinition) {
												const v = await $.provideDefinition(
													b,
													l,
													r.CancellationToken.None,
												);
												if (v) {
													let S;
													if ((Array.isArray(v) ? (S = v[0]) : (S = v), S)) {
														if ("uri" in S) {
															const I = (0, u.$8rb)(S.uri, {
																startLineNumber: S.range.startLineNumber,
																startColumn: S.range.startColumn,
																endLineNumber: S.range.endLineNumber,
																endColumn: S.range.endColumn,
															});
															o.open(I);
														} else
															console.log(
																"[ian] definition is not a Location",
																S,
															);
														break;
													}
												}
											}
									}
								}
							}
						},
					);
			},
		)
