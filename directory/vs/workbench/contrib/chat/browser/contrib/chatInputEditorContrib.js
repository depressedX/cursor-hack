import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/htmlContent.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/browser/services/codeEditorService.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../platform/theme/common/themeService.js';
import '../chatWidget.js';
import './chatDynamicVariables.js';
import '../../common/chatAgents.js';
import '../../common/chatColors.js';
import '../../common/chatParserTypes.js';
import '../../common/chatRequestParser.js';
define(
			de[4073],
			he([1, 0, 94, 3, 65, 17, 5, 51, 35, 481, 1060, 153, 980, 329, 1022]),
			function (ce /*require*/,
 e /*exports*/,
 t /*htmlContent*/,
 i /*lifecycle*/,
 w /*codeEditorService*/,
 E /*range*/,
 C /*instantiation*/,
 d /*colorRegistry*/,
 m /*themeService*/,
 r /*chatWidget*/,
 u /*chatDynamicVariables*/,
 a /*chatAgents*/,
 h /*chatColors*/,
 c /*chatParserTypes*/,
 n /*chatRequestParser*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const g = "chat",
					p = "chat-session-detail",
					o = "chat-session-text",
					f = "chat-variable-text";
				function b($, v) {
					return v ? `${$.id}__${v}` : $.id;
				}
				let s = class extends i.$1c {
					constructor(v, S, I, T) {
						super(),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.id = "inputEditorDecorations"),
							(this.a = new Set()),
							(this.b = this.D(new i.$2c())),
							this.f.registerDecorationType(g, p, {}),
							this.D(this.g.onDidColorThemeChange(() => this.m())),
							this.m(),
							this.q(),
							this.D(
								this.c.inputEditor.onDidChangeModelContent(() => this.q()),
							),
							this.D(this.c.onDidChangeParsedInput(() => this.q())),
							this.D(
								this.c.onDidChangeViewModel(() => {
									this.j(), this.a.clear(), this.q();
								}),
							),
							this.D(
								this.c.onDidSubmitAgent((P) => {
									this.a.add(b(P.agent, P.slashCommand?.name));
								}),
							),
							this.D(this.h.onDidChangeAgents(() => this.q())),
							this.j();
					}
					j() {
						this.b.value = this.c.viewModel?.onDidChange((v) => {
							(v?.kind === "changePlaceholder" || v?.kind === "initialize") &&
								this.q();
						});
					}
					m() {
						this.f.removeDecorationType(f),
							this.f.removeDecorationType(u.$Bmc),
							this.f.removeDecorationType(o);
						const v = this.g.getColorTheme();
						this.f.registerDecorationType(g, o, {
							color: v.getColor(h.$lUb)?.toString(),
							backgroundColor: v.getColor(h.$kUb)?.toString(),
							borderRadius: "3px",
						}),
							this.f.registerDecorationType(g, f, {
								color: v.getColor(h.$lUb)?.toString(),
								backgroundColor: v.getColor(h.$kUb)?.toString(),
								borderRadius: "3px",
							}),
							this.f.registerDecorationType(g, u.$Bmc, {
								color: v.getColor(h.$lUb)?.toString(),
								backgroundColor: v.getColor(h.$kUb)?.toString(),
								borderRadius: "3px",
							}),
							this.q();
					}
					n() {
						return this.g.getColorTheme().getColor(d.$1R)?.toString();
					}
					async q() {
						const v = this.c.inputEditor.getValue(),
							S = this.c.viewModel;
						if (!S) return;
						if (!v) {
							const F = this.h.getDefaultAgent(this.c.location),
								x = [
									{
										range: {
											startLineNumber: 1,
											endLineNumber: 1,
											startColumn: 1,
											endColumn: 1e3,
										},
										renderOptions: {
											after: {
												contentText:
													S.inputPlaceholder || (F?.description ?? ""),
												color: this.n(),
											},
										},
									},
								];
							this.c.inputEditor.setDecorationsByType(g, p, x);
							return;
						}
						const I = this.c.parsedInput.parts;
						let T;
						const P = I.find((F) => F instanceof c.$U2),
							k = I.find((F) => F instanceof c.$V2),
							L = I.find((F) => F instanceof c.$W2),
							D = (F) => {
								const x = I.indexOf(F);
								if (I.length > x + 2) return !1;
								const H = I[x + 1];
								return H && H instanceof c.$O2 && H.text === " ";
							},
							M = (F) => ({
								startLineNumber: F.editorRange.startLineNumber,
								endLineNumber: F.editorRange.endLineNumber,
								startColumn: F.editorRange.endColumn + 1,
								endColumn: 1e3,
							});
						if (
							P &&
							I.every(
								(F) =>
									(F instanceof c.$O2 && !F.text.trim().length) ||
									F instanceof c.$U2,
							)
						) {
							const x =
								this.a.has(b(P.agent, void 0)) &&
								P.agent.metadata.followupPlaceholder;
							P.agent.description &&
								D(P) &&
								(T = [
									{
										range: M(P),
										renderOptions: {
											after: {
												contentText: x
													? P.agent.metadata.followupPlaceholder
													: P.agent.description,
												color: this.n(),
											},
										},
									},
								]);
						}
						if (
							P &&
							k &&
							I.every(
								(F) =>
									(F instanceof c.$O2 && !F.text.trim().length) ||
									F instanceof c.$U2 ||
									F instanceof c.$V2,
							)
						) {
							const x =
								this.a.has(b(P.agent, k.command.name)) &&
								k.command.followupPlaceholder;
							k?.command.description &&
								D(k) &&
								(T = [
									{
										range: M(k),
										renderOptions: {
											after: {
												contentText: x
													? k.command.followupPlaceholder
													: k.command.description,
												color: this.n(),
											},
										},
									},
								]);
						}
						k &&
							I.every(
								(F) =>
									(F instanceof c.$O2 && !F.text.trim().length) ||
									F instanceof c.$V2,
							) &&
							k?.command.description &&
							D(k) &&
							(T = [
								{
									range: M(k),
									renderOptions: {
										after: {
											contentText: k.command.description,
											color: this.n(),
										},
									},
								},
							]),
							this.c.inputEditor.setDecorationsByType(g, p, T ?? []);
						const O = [];
						P && O.push({ range: P.editorRange }),
							k &&
								O.push({
									range: k.editorRange,
									hoverMessage: new t.$cl(k.command.description),
								}),
							L && O.push({ range: L.editorRange }),
							this.c.inputEditor.setDecorationsByType(g, o, O);
						const B = [],
							U = I.filter((F) => F instanceof c.$S2);
						for (const F of U) B.push({ range: F.editorRange });
						const z = I.filter((F) => F instanceof c.$T2);
						for (const F of z) B.push({ range: F.editorRange });
						this.c.inputEditor.setDecorationsByType(g, f, B);
					}
				};
				s = Ne([j(1, w.$dtb), j(2, m.$iP), j(3, a.$c3)], s);
				class l extends i.$1c {
					constructor(v) {
						super(),
							(this.a = v),
							(this.id = "InputEditorSlashCommandMode"),
							this.D(
								this.a.onDidChangeAgent((S) => {
									((S.slashCommand && S.slashCommand.isSticky) ||
										(!S.slashCommand && S.agent.metadata.isSticky)) &&
										this.b(S.agent, S.slashCommand);
								}),
							),
							this.D(
								this.a.onDidSubmitAgent((S) => {
									this.b(S.agent, S.slashCommand);
								}),
							);
					}
					async b(v, S) {
						if (this.a.inputEditor.getValue().trim()) return;
						let I;
						S && S.isSticky
							? (I = `${c.$Q2}${v.name} ${c.$R2}${S.name} `)
							: v.metadata.isSticky && (I = `${c.$Q2}${v.name} `),
							I &&
								(this.a.inputEditor.setValue(I),
								this.a.inputEditor.setPosition({
									lineNumber: 1,
									column: I.length + 1,
								}));
					}
				}
				r.$XYb.CONTRIBS.push(s, l);
				let y = class extends i.$1c {
					constructor(v, S) {
						super(), (this.a = v), (this.b = S), (this.id = "chatTokenDeleter");
						const I = this.b.createInstance(n.$G2),
							T = this.a.inputEditor.getValue();
						let P, k;
						this.D(
							this.a.inputEditor.onDidChangeModelContent((L) => {
								P || ((P = T), (k = this.a.lastSelectedAgent));
								const D = L.changes[0];
								!D.text &&
									this.a.viewModel &&
									I.parseChatRequest(
										this.a.viewModel.sessionId,
										P,
										v.location,
										{ selectedAgent: k },
									)
										.parts.filter(
											(A) =>
												A instanceof c.$U2 ||
												A instanceof c.$V2 ||
												A instanceof c.$W2 ||
												A instanceof c.$S2 ||
												A instanceof c.$T2,
										)
										.forEach((A) => {
											const R = E.$iL.intersectRanges(A.editorRange, D.range);
											if (
												R &&
												E.$iL.compareRangesUsingStarts(A.editorRange, D.range) <
													0
											) {
												const O = R.endColumn - R.startColumn,
													B = new E.$iL(
														A.editorRange.startLineNumber,
														A.editorRange.startColumn,
														A.editorRange.endLineNumber,
														A.editorRange.endColumn - O,
													);
												this.a.inputEditor.executeEdits(this.id, [
													{ range: B, text: "" },
												]);
											}
										}),
									(P = this.a.inputEditor.getValue()),
									(k = this.a.lastSelectedAgent);
							}),
						);
					}
				};
				(y = Ne([j(1, C.$Li)], y)), r.$XYb.CONTRIBS.push(y);
			},
		)
