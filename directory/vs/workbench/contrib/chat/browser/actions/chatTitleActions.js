define(
			de[1328],
			he([
				1, 0, 14, 27, 434, 199, 4, 11, 8, 43, 572, 402, 208, 207, 218, 283, 257,
				70, 176, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Yb = void 0),
					(e.$8Yb = s),
					(e.$7Yb = "workbench.action.chat.markUnhelpful");
				function s() {
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.markHelpful",
									title: (0, C.localize2)(4615, "Helpful"),
									f1: !1,
									category: a.$3Yb,
									icon: t.$ak.thumbsup,
									toggled: c.$Q1.isEqualTo("up"),
									menu: [
										{
											id: d.$XX.ChatMessageTitle,
											group: "navigation",
											order: 1,
											when: m.$Kj.and(c.$X1, c.$R1, c.$V1.negate()),
										},
										{
											id: p.$kLb,
											group: "navigation",
											order: 1,
											when: m.$Kj.and(c.$X1, c.$R1, c.$V1.negate()),
										},
									],
								});
							}
							run($, ...v) {
								const S = v[0];
								if (!(0, g.$$Tb)(S)) return;
								$.get(n.$J2).notifyUserAction({
									agentId: S.agent?.id,
									command: S.slashCommand?.name,
									sessionId: S.sessionId,
									requestId: S.requestId,
									result: S.result,
									action: {
										kind: "vote",
										direction: n.ChatAgentVoteDirection.Up,
										reason: void 0,
									},
								}),
									S.setVote(n.ChatAgentVoteDirection.Up),
									S.setVoteDownReason(void 0);
							}
						},
					),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: e.$7Yb,
										title: (0, C.localize2)(4616, "Unhelpful"),
										f1: !1,
										category: a.$3Yb,
										icon: t.$ak.thumbsdown,
										toggled: c.$Q1.isEqualTo("down"),
										menu: [
											{
												id: d.$XX.ChatMessageTitle,
												group: "navigation",
												order: 2,
												when: m.$Kj.and(c.$X1, c.$V1.negate()),
											},
											{
												id: p.$kLb,
												group: "navigation",
												order: 2,
												when: m.$Kj.and(c.$X1, c.$V1.negate()),
											},
										],
									});
								}
								run($, ...v) {
									const S = v[0];
									if (!(0, g.$$Tb)(S)) return;
									const I = v[1];
									if (typeof I != "string") return;
									S.setVote(n.ChatAgentVoteDirection.Down),
										S.setVoteDownReason(I),
										$.get(n.$J2).notifyUserAction({
											agentId: S.agent?.id,
											command: S.slashCommand?.name,
											sessionId: S.sessionId,
											requestId: S.requestId,
											result: S.result,
											action: {
												kind: "vote",
												direction: n.ChatAgentVoteDirection.Down,
												reason: S.voteDownReason,
											},
										});
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.reportIssueForBug",
										title: (0, C.localize2)(4617, "Report Issue"),
										f1: !1,
										category: a.$3Yb,
										icon: t.$ak.report,
										menu: [
											{
												id: d.$XX.ChatMessageTitle,
												group: "navigation",
												order: 3,
												when: m.$Kj.and(c.$T1, c.$X1),
											},
											{
												id: p.$kLb,
												group: "navigation",
												order: 3,
												when: m.$Kj.and(c.$T1, c.$X1),
											},
										],
									});
								}
								run($, ...v) {
									const S = v[0];
									if (!(0, g.$$Tb)(S)) return;
									$.get(n.$J2).notifyUserAction({
										agentId: S.agent?.id,
										command: S.slashCommand?.name,
										sessionId: S.sessionId,
										requestId: S.requestId,
										result: S.result,
										action: { kind: "bug" },
									});
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.insertIntoNotebook",
										title: (0, C.localize2)(4618, "Insert into Notebook"),
										f1: !1,
										category: a.$3Yb,
										icon: t.$ak.insert,
										menu: {
											id: d.$XX.ChatMessageTitle,
											group: "navigation",
											isHiddenByDefault: !0,
											when: m.$Kj.and(f.$mJb, c.$X1, c.$U1.negate()),
										},
									});
								}
								async run($, ...v) {
									const S = v[0];
									if (!(0, g.$$Tb)(S)) return;
									const I = $.get(b.$IY);
									if (I.activeEditorPane?.getId() === o.$O6) {
										const T = I.activeEditorPane.getControl();
										if (!T.hasModel() || T.isReadOnly) return;
										const P = S.response.toString(),
											k = l(P),
											L = T.getFocus(),
											D = Math.max(L.end, 0);
										await $.get(E.$rzb).apply(
											[
												new u.$hJb(T.textModel.uri, {
													editType: o.CellEditType.Replace,
													index: D,
													count: 0,
													cells: k.map((N) => {
														const A =
																N.type === "markdown"
																	? o.CellKind.Markup
																	: o.CellKind.Code,
															R =
																N.type === "markdown" ? "markdown" : N.language,
															O =
																N.type === "markdown"
																	? "text/markdown"
																	: `text/x-${N.language}`;
														return {
															cellKind: A,
															language: R,
															mime: O,
															source: N.content,
															outputs: [],
															metadata: {},
														};
													}),
												}),
											],
											{ quotableLabel: "Insert into Notebook" },
										);
									}
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.remove",
										title: (0, C.localize2)(
											4619,
											"Remove Request and Response",
										),
										f1: !1,
										category: a.$3Yb,
										icon: t.$ak.x,
										keybinding: {
											primary: i.KeyCode.Delete,
											mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.Backspace },
											when: m.$Kj.and(c.$41, c.$31.negate()),
											weight: r.KeybindingWeight.WorkbenchContrib,
										},
										menu: {
											id: d.$XX.ChatMessageTitle,
											group: "navigation",
											order: 2,
											when: c.$Y1,
										},
									});
								}
								run($, ...v) {
									let S = v[0];
									(0, g.$0Tb)(S) ||
										(S = $.get(h.$GYb).lastFocusedWidget?.getFocus());
									const I = (0, g.$0Tb)(S)
										? S.id
										: (0, g.$$Tb)(S)
											? S.requestId
											: void 0;
									I && $.get(n.$J2).removeRequest(S.sessionId, I);
								}
							},
						);
				}
				function l(y) {
					const v = new w.marked.Lexer().lex(y),
						S = [];
					let I = "";
					return (
						v.forEach((T) => {
							T.type === "code"
								? (I.trim() &&
										(S.push({ type: "markdown", content: I }), (I = "")),
									S.push({
										type: "code",
										language: T.lang || "",
										content: T.text,
									}))
								: (I += T.raw);
						}),
						I.trim() && S.push({ type: "markdown", content: I }),
						S
					);
				}
			},
		),
		