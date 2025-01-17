import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/htmlContent.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../platform/log/common/log.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../chatWidget.js';
import '../../common/chatVariables.js';
define(
			de[1060],
			he([1, 0, 24, 94, 3, 19, 9, 17, 42, 4, 11, 31, 73, 34, 63, 481, 503]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Emc = e.$Dmc = e.$Cmc = e.$Bmc = void 0),
					(e.$Bmc = "chat-dynamic-variable");
				let f = class extends w.$1c {
					static {
						o = this;
					}
					static {
						this.ID = "chatDynamicVariableModel";
					}
					get variables() {
						return [...this.a];
					}
					get id() {
						return o.ID;
					}
					constructor(v, S) {
						super(),
							(this.b = v),
							(this.f = S),
							(this.a = []),
							this.D(
								v.inputEditor.onDidChangeModelContent((I) => {
									I.changes.forEach((T) => {
										this.a = (0, t.$Lb)(
											this.a.map((P) => {
												const k = d.$iL.intersectRanges(P.range, T.range);
												if (k && !k.isEmpty()) {
													if (!d.$iL.containsRange(T.range, P.range)) {
														const L = new d.$iL(
															P.range.startLineNumber,
															P.range.startColumn,
															P.range.endLineNumber,
															P.range.endColumn - 1,
														);
														this.b.inputEditor.executeEdits(this.id, [
															{ range: L, text: "" },
														]);
													}
													return null;
												} else if (
													d.$iL.compareRangesUsingStarts(P.range, T.range) > 0
												) {
													const L = T.text.length - T.rangeLength;
													return {
														...P,
														range: {
															startLineNumber: P.range.startLineNumber,
															startColumn: P.range.startColumn + L,
															endLineNumber: P.range.endLineNumber,
															endColumn: P.range.endColumn + L,
														},
													};
												}
												return P;
											}),
										);
									}),
										this.g();
								}),
							);
					}
					getInputState() {
						return this.variables;
					}
					setInputState(v) {
						Array.isArray(v) || (v = []), (this.a = v), this.g();
					}
					addReference(v) {
						this.a.push(v), this.g();
					}
					g() {
						this.b.inputEditor.setDecorationsByType(
							"chat",
							e.$Bmc,
							this.a.map((v) => ({ range: v.range, hoverMessage: this.h(v) })),
						);
					}
					h(v) {
						const S = v.data;
						if (C.URI.isUri(S))
							return new i.$cl(this.f.getUriLabel(S, { relative: !0 }));
					}
				};
				(e.$Cmc = f),
					(e.$Cmc = f = o = Ne([j(1, h.$3N)], f)),
					g.$XYb.CONTRIBS.push(f);
				function b($) {
					return "widget" in $ && "range" in $;
				}
				class s extends u.$3X {
					static {
						this.Name = "files";
					}
					static {
						this.Item = {
							label: (0, r.localize)(4733, null),
							description: (0, r.localize)(4734, null),
						};
					}
					static {
						this.ID = "workbench.action.chat.selectAndInsertFile";
					}
					constructor() {
						super({ id: s.ID, title: "" });
					}
					async run(v, ...S) {
						const I = v.get(m.$MO),
							T = v.get(c.$ik),
							P = v.get(n.$DJ),
							k = v.get(p.$D2),
							L = S[0];
						if (!b(L)) return;
						const D = () => {
							L.widget.inputEditor.executeEdits("chatInsertFile", [
								{ range: L.range, text: "" },
							]);
						};
						let M;
						k.hasVariable(s.Name) &&
							(M = {
								providerOptions: {
									additionPicks: [s.Item, { type: "separator" }],
								},
							});
						const N = await P.quickAccess.pick("", M);
						if (!N?.length) {
							T.trace("SelectAndInsertFileAction: no file selected"), D();
							return;
						}
						const A = L.widget.inputEditor,
							R = L.range;
						if (N[0] === s.Item) {
							const F = `#${s.Name}`;
							A.executeEdits("chatInsertFile", [{ range: R, text: F + " " }]) ||
								(T.trace(`SelectAndInsertFileAction: failed to insert "${F}"`),
								D());
							return;
						}
						const O = N[0].resource;
						if (!I.canHandleResource(O)) {
							T.trace("SelectAndInsertFileAction: non-text resource selected"),
								D();
							return;
						}
						const U = `#file:${(0, E.$kh)(O)}`;
						if (
							!A.executeEdits("chatInsertFile", [{ range: R, text: U + " " }])
						) {
							T.trace(`SelectAndInsertFileAction: failed to insert "${U}"`),
								D();
							return;
						}
						L.widget
							.getContrib(f.ID)
							?.addReference({
								id: "vscode.file",
								range: {
									startLineNumber: R.startLineNumber,
									startColumn: R.startColumn,
									endLineNumber: R.endLineNumber,
									endColumn: R.startColumn + U.length,
								},
								data: O,
							});
					}
				}
				(e.$Dmc = s), (0, u.$4X)(s);
				function l($) {
					return "widget" in $ && "range" in $ && "variableData" in $;
				}
				class y extends u.$3X {
					static {
						this.ID = "workbench.action.chat.addDynamicVariable";
					}
					constructor() {
						super({ id: y.ID, title: "" });
					}
					async run(v, ...S) {
						const I = S[0];
						if (!l(I)) return;
						let T = I.range;
						const P = I.variableData,
							k = () => {
								I.widget.inputEditor.executeEdits(
									"chatInsertDynamicVariableWithArguments",
									[{ range: I.range, text: "" }],
								);
							};
						if (I.command) {
							const D = await v
								.get(a.$ek)
								.executeCommand(I.command.id, ...(I.command.arguments ?? []));
							if (!D) {
								k();
								return;
							}
							const M = ":" + D,
								N = new d.$iL(
									T.startLineNumber,
									T.endColumn,
									T.endLineNumber,
									T.endColumn + M.length,
								);
							if (
								((T = new d.$iL(
									T.startLineNumber,
									T.startColumn,
									T.endLineNumber,
									T.endColumn + M.length,
								)),
								!I.widget.inputEditor.executeEdits(
									"chatInsertDynamicVariableWithArguments",
									[{ range: N, text: M + " " }],
								))
							) {
								k();
								return;
							}
						}
						I.widget
							.getContrib(f.ID)
							?.addReference({ id: I.id, range: T, data: P });
					}
				}
				(e.$Emc = y), (0, u.$4X)(y);
			},
		),
		