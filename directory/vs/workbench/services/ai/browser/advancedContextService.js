define(
			de[1931],
			he([
				1, 0, 20, 148, 340, 5, 126, 45, 32, 620, 401, 669, 516, 118, 567, 341,
				191, 315,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r0b = void 0),
					(e.$r0b = (0, E.$Mi)("advancedContextService"));
				let f = class {
					constructor(s, l, y, $, v, S, I, T) {
						(this.a = s),
							(this.b = l),
							(this.c = y),
							(this.d = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.i = T);
					}
					async taskStreamChatContext(s, l, y, $, v) {
						let S;
						for (const [R, O] of [...s.entries()].reverse())
							if (
								O.type === C.ConversationMessage_MessageType.HUMAN &&
								O.text !== ""
							) {
								S = s[R].text;
								break;
							}
						if (S === void 0)
							return (async function* () {
								yield "You don't seem to have provided any request in your last message. Please type something and try again.";
							})();
						const [I, T] = this.b.registerNewGeneration({
							metadata: l,
							generationUUID: y,
						});
						this.c.useCodebaseContext(l.bubbleId, l.tabId),
							this.d.publicLogCapture("Submitted advanced context");
						const P = $?.overrideModelDetails || this.b.getModelDetails(),
							k = this.i.getChatDesiredTokenLimit(),
							L = new i.$OF({
								conversation: s,
								repositories: this.b.repositories.map((R) => R.repoInfo),
								explicitContext: await this.b.getExplicitContext(),
								workspaceRootPath: this.a.getWorkspaceRootPath(),
								modelDetails: P,
								advancedCodebaseContext: v,
								isEval: l.isEval,
								...(await this.b.addAdditionalContext(l)),
								requestId: y,
								desiredTokenLimit: k,
							});
						this.b.addToPromptHistory({
							prompt: S,
							commandType: r.CommandType.CHAT,
						});
						const M = (await this.b.aiClient()).taskStreamChatContext(L, {
								signal: T.signal,
								headers: (0, p.$m6b)(y),
							}),
							N =
								g.$q0.typeName + "/" + g.$q0.methods.taskStreamChatContext.name,
							A = this.f.handleTaskGetStream(M, T.signal);
						return this.wrapper(A, N, y, P, l);
					}
					async *wrapper(s, l, y, $, v) {
						try {
							for await (const S of s)
								switch (S.response.case) {
									case "output": {
										yield S.response.value.text;
										break;
									}
									case "gatheringStep": {
										this.c.addStepToNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "gathering", step: S.response.value },
										);
										break;
									}
									case "rerankingStep": {
										this.c.addStepToNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "reranking", step: S.response.value },
										);
										break;
									}
									case "reasoningStep": {
										this.c.addStepToNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "reasoning", step: S.response.value },
										);
										break;
									}
									case "reasoningSubstep": {
										this.c.addSubstepToStepInNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "reasoning", substep: S.response.value },
										);
										break;
									}
									case "gatheringFile": {
										this.c.addFileToStepInNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "gathering", file: S.response.value },
										);
										break;
									}
									case "rerankingFile": {
										this.c.addFileToStepInNonPersistentChatMetadata(
											v.bubbleId,
											v.tabId,
											{ type: "reranking", file: S.response.value },
										);
										break;
									}
								}
						} catch (S) {
							if (
								(S.code !== w.Code.Canceled && console.error(S),
								!(S instanceof w.ConnectError) || S.code !== w.Code.Canceled)
							)
								throw S;
						} finally {
							this.g.setNonPersistentStorage("inprogressAIGenerations", (S) =>
								S.filter((I) => I.generationUUID !== y),
							);
						}
					}
				};
				(f = Ne(
					[
						j(0, n.$36b),
						j(1, c.$Nfc),
						j(2, a.$Z6b),
						j(3, m.$km),
						j(4, h.$a9b),
						j(5, d.$0zb),
						j(6, u.$W6b),
						j(7, o.$S6b),
					],
					f,
				)),
					(0, t.$lK)(e.$r0b, f, t.InstantiationType.Delayed);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	