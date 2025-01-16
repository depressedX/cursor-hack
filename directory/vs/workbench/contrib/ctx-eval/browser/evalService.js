define(
			de[3927],
			he([1, 0, 272, 83, 3, 47, 5, 45, 418, 140, 337, 3045, 1729, 246]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$q0b = e.$p0b = void 0);
				const n = (f) => {
						switch (f) {
							case h.ChatKind.normalChat:
								return "norm";
							case h.ChatKind.advancedContextChat:
								return "adv";
							case h.ChatKind.longContextChat:
								return "long";
						}
					},
					g = (f) => {
						switch (f) {
							case t.RerankerAlgorithm.UMEA:
								return "umea";
							case t.RerankerAlgorithm.VOYAGE:
								return "voyage";
							case t.RerankerAlgorithm.VOYAGE_EMBEDS:
								return "voy_emb";
							case t.RerankerAlgorithm.COHERE:
								return "cohere";
							case t.RerankerAlgorithm.LULEA:
								return "lulea";
							case t.RerankerAlgorithm.LULEA_HAIKU:
								return "lul_hku";
							case t.RerankerAlgorithm.NONE:
								return "none";
							case t.RerankerAlgorithm.IDENTITY:
								return "ident";
							case t.RerankerAlgorithm.UNSPECIFIED:
								return "unspec";
						}
						return "<unk>";
					};
				class p {
					constructor(b) {
						(this.d = b), (this.b = 0), (this.c = []);
					}
					async acquire() {
						if (this.b < this.d) {
							this.b++;
							return;
						}
						await new Promise((b) => {
							this.c.push(b);
						});
					}
					release() {
						this.b--, this.c.length > 0 && this.c.shift()();
					}
				}
				e.$p0b = (0, C.$Mi)("evalService");
				let o = class extends w.$1c {
					constructor(b, s, l) {
						super(), (this.b = b), (this.c = s), (this.f = l);
					}
					g() {
						return this.c.applicationUserPersistentStorage.isEvalMode;
					}
					h(b, s, l) {
						const y = (0, E.$9g)(),
							$ = (0, c.createUserBubble)({ text: s });
						return (
							($.advancedCodebaseContextOptions = {
								numResultsPerSearch: 1200,
								reranker: l.reranker ?? t.RerankerAlgorithm.NONE,
								reasoningStep: !1,
								rechunker:
									l.rechunker ?? t.RechunkerChoice.RECHUNKER_CHOICE_IDENTITY,
							}),
							($.text = s),
							this.f.setChatData("tabs", (v) => [
								{
									tabId: y,
									chatTitle: `${JSON.stringify(s.slice(0, 10))} - ${l.model} - ${n(l.chatKind)} - ${g(l.reranker ?? t.RerankerAlgorithm.NONE)}`,
									bubbles: [$],
									lastSendTime: Date.now(),
									tabState: r.TabState.chat,
									additionalData: void 0,
									longContextModeEnabled:
										l.chatKind === h.ChatKind.longContextChat,
									evalInfo: {
										task: b,
										chatConfig: l,
										query: s,
										chatHasRun: !1,
									},
									lastFocusedBubbleId: $.id,
								},
								...v,
							]),
							y
						);
					}
					j(b, s) {
						return b.queries.map((y) => s.map(($) => this.h(b, y, $)));
					}
					m(b, s) {
						this.f.setChatData("tabs", (y) =>
							y.filter(($) => !$.evalInfo?.chatConfig),
						);
						const l = b.map((y) => this.j(y, s));
						return console.log("tabs", this.f.chatData.tabs), l;
					}
					loadDefaultTasks() {
						if (!this.g()) return [];
						const b = this.m(a.$n0b, a.$o0b);
						return (
							fetch("http://localhost:7999/evals/writeEvalTasks", {
								method: "POST",
								body: JSON.stringify(a.$n0b),
							}),
							b
						);
					}
					async n(b) {
						const s = await Promise.all(b.map(async (v) => this.s(v))),
							l = b.filter((v, S) => !s[S]),
							y = new p(5);
						let $ = !1;
						return (
							await Promise.allSettled(
								l.map(async (v, S) => {
									try {
										if ((await y.acquire(), !this.s(v) && (await this.s(v)))) {
											console.log(
												"SKIPPING TAB",
												v.chatTitle,
												"requestId",
												this.q(v),
											);
											return;
										}
										console.log(
											"running chat",
											S,
											"/",
											l.length,
											"time",
											new Date().toLocaleTimeString(),
										),
											await this.t(v);
										const I = this.r(v.tabId);
										this.s(I) ||
											(console.log("Chat did not run", I?.chatTitle), ($ = !0));
									} finally {
										y.release();
									}
								}),
							),
							$
						);
					}
					q(b) {
						if (b) return b.evalInfo?.requestId;
					}
					r(b) {
						return this.f.chatData.tabs.find((s) => s.tabId === b);
					}
					async s(b) {
						try {
							if (!b) return !1;
							const s = this.r(b.tabId);
							if (s?.evalInfo?.chatHasRun) return s.evalInfo.chatHasRun;
							const l = this.q(s);
							if (!l) return !1;
							const v = (
								await (
									await fetch(
										"http://localhost:7999/evals/hasContextEval?requestId=" + l,
									)
								).json()
							).hasContextEval;
							return (
								v &&
									s &&
									this.f.setChatData(
										"tabs",
										(S) => S.tabId === s.tabId,
										"evalInfo",
										(S) => S && { ...S, chatHasRun: v },
									),
								v
							);
						} catch {
							return !1;
						}
					}
					async runRecentEvalChats() {
						if (!this.g()) return;
						const b = this.f.chatData.tabs.filter((s) => s.evalInfo);
						for (let s = 0; s < 20; s++) {
							await this.n(b);
							const l = (v) =>
									Array.isArray(v)
										? v.map(l)
										: typeof v == "object"
											? Object.fromEntries(
													Object.entries(v)
														.filter(([S]) => S !== "codebaseResults")
														.map(([S, I]) => [S, l(I)]),
												)
											: v,
								y = l(
									JSON.parse(
										JSON.stringify(
											this.f.chatData.tabs.filter(
												(v) => v.evalInfo?.chatHasRun,
											),
										),
									),
								);
							let $ = !1;
							for (let v of this.f.chatData.tabs)
								if (v.evalInfo && !(await this.s(v))) {
									$ = !0;
									break;
								}
							if (
								(await fetch("http://localhost:7999/evals/writeEvalTabData", {
									method: "POST",
									body: JSON.stringify(y),
								}),
								!$)
							)
								break;
							await new Promise((v) => setTimeout(v, 3e4));
						}
					}
					async t(b) {
						if (!b) return;
						const s = b.bubbles[0],
							l = b.evalInfo;
						if (!l || s.type !== "user") return;
						const { chatConfig: y, task: $, query: v } = l;
						s.text = v;
						const { model: S, chatKind: I, reranker: T } = y,
							P = {
								[h.ChatKind.normalChat]: { chatType: "context" },
								[h.ChatKind.advancedContextChat]: {
									chatType: "context",
									useAdvancedContext: !0,
								},
								[h.ChatKind.longContextChat]: {
									chatType: "context",
									longContextModeEnabled: !0,
								},
							};
						await this.b.submitUnifiedChat({
							bubbleID: s.id,
							tabID: b.tabId,
							overrideModelDetails: new i.$Zs({ modelName: S }),
							...P[I],
						}),
							await this.f.setChatData(
								"tabs",
								(k) => k.tabId === b.tabId && !!k.evalInfo,
								"bubbles",
								(k, L) => k.type === "user" && L === 0,
								(k) => ({ ...k, rawText: b.evalInfo?.query ?? "" }),
							),
							console.log("SAVING CACHED STATUS", await this.s(b));
					}
				};
				(e.$q0b = o),
					(e.$q0b = o = Ne([j(0, m.$qgc), j(1, d.$0zb), j(2, u.$kgc)], o));
			},
		),
		