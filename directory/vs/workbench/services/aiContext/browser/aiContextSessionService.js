define(
			de[3996],
			he([1, 0, 5, 20, 3, 45, 47, 3995, 13, 471, 3236, 193, 529, 191]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let n = !0;
				n = !1;
				let g = class extends w.$1c {
					constructor(o, f) {
						super(),
							(this.h = o),
							(this.m = f),
							(this.g = this.D(this.h.createScoped(this))),
							([this.c, this.f] = this.g.createStore({ sessions: [] })),
							this.cleanOldContextSessions({
								maxSecondsOld: 60 * 60 * 24 * 28,
								maxNumber: 1e3,
							});
					}
					getReactiveReadonlyContextSession(o) {
						return this.c.sessions.find((f) => f.uuid === o);
					}
					freeContextSession(o) {
						const f = this.getReactiveReadonlyContextSession(o);
						f &&
							(f.intents.forEach((b) => {
								b.handler && b.handler.dispose();
							}),
							(0, m.batch)(() => {
								this.f(
									"sessions",
									(b) => b.uuid === o,
									"intents",
									() => !0,
									"handler",
									void 0,
								),
									this.f(
										"sessions",
										(b) => b.uuid === o,
										"intents",
										() => !0,
										"items",
										[],
									);
							}));
					}
					freezeContextSession(o) {
						const f = this.getReactiveReadonlyContextSession(o);
						f &&
							(f.frozen ||
								(this.f("sessions", (b) => b.uuid === o, "frozen", !0),
								f.intents.forEach((b) => {
									b.handler && b.handler.freeze();
								})));
					}
					n(o) {
						const f = this.getReactiveReadonlyContextSession(o);
						f &&
							f.frozen &&
							(this.f(
								"sessions",
								(b) => b.uuid === o,
								"rerankingMetadata",
								"updatesEnabled",
								!0,
							),
							this.f("sessions", (b) => b.uuid === o, "frozen", !1),
							f.intents.forEach((b) => {
								b.handler && b.handler.unfreeze();
							}));
					}
					createContextSession(o) {
						return (0, m.untrack)(() => this.q(o));
					}
					q(o) {
						const f = o.explicitUuid ?? (0, C.$9g)();
						if (n) return { uuid: (0, C.$9g)() };
						if (this.getReactiveReadonlyContextSession(f) !== void 0)
							return { uuid: f };
						const b = {
							uuid: f,
							createdAtUnixSeconds: Date.now() / 1e3,
							case: o.case,
							lastInput: void 0,
							rerankingMetadata: void 0,
							frozen: !1,
							intents: o.defaultIntents.map((s) => ({
								intent: s,
								handler: void 0,
								items: [],
								error: void 0,
								rerankedItems: [],
							})),
						};
						return (
							this.f("sessions", [...(0, a.unwrap)(this.c.sessions), b]),
							{ uuid: f }
						);
					}
					removeContextSession(o) {
						this.freeContextSession(o),
							this.f(
								"sessions",
								(0, a.unwrap)(this.c.sessions.filter((f) => f.uuid !== o)),
							);
					}
					cleanOldContextSessions({ maxSecondsOld: o, maxNumber: f }) {
						const b = Date.now() / 1e3,
							s = [];
						let l = 0;
						const y = [...this.c.sessions].sort(
							($, v) => $.createdAtUnixSeconds - v.createdAtUnixSeconds,
						);
						for (const $ of y)
							b - $.createdAtUnixSeconds >= o || l >= f ? s.push($.uuid) : l++;
						(0, m.batch)(() => {
							for (const $ of s) this.removeContextSession($);
						});
					}
					r(o) {
						this.f("sessions", (f) => f.uuid === o, "rerankingMetadata", {
							inFlightRerankingRequest: !1,
							isWaitingForInFlightRerankingRequest: !1,
							lastRerankCallTime: void 0,
							earliestUnattendedRerankCallTime: void 0,
							rerankingEnabled: !0,
							updatesEnabled: !0,
						});
					}
					async rerank(o) {
						const f = this.getReactiveReadonlyContextSession(o);
						if (!f || f.frozen) return;
						const b = f.rerankingMetadata?.rerankEndpoint;
						if (!b) {
							console.error("RERANKING CALLED WITHOUT RERANK ENDPOINT", f);
							return;
						}
						const s = 20,
							l = 200;
						let y = Date.now();
						if (
							(this.f(
								"sessions",
								($) => $.uuid === o,
								"rerankingMetadata",
								"lastRerankCallTime",
								y === f.rerankingMetadata?.lastRerankCallTime ? ++y : y,
							),
							f.rerankingMetadata?.earliestUnattendedRerankCallTime ===
								void 0 &&
								this.f(
									"sessions",
									($) => $.uuid === o,
									"rerankingMetadata",
									"earliestUnattendedRerankCallTime",
									y,
								),
							await new Promise(($) => {
								setTimeout($, s);
							}),
							f.rerankingMetadata?.rerankingEnabled !== !1 &&
								!(
									f.rerankingMetadata?.lastRerankCallTime !== y &&
									!(
										f.rerankingMetadata?.earliestUnattendedRerankCallTime !==
											void 0 &&
										Date.now() -
											f.rerankingMetadata.earliestUnattendedRerankCallTime >
											l
									)
								))
						) {
							if (f.rerankingMetadata.inFlightRerankingRequest === !0) {
								this.f(
									"sessions",
									($) => $.uuid === o,
									"rerankingMetadata",
									"isWaitingForInFlightRerankingRequest",
									!0,
								);
								return;
							}
							this.f("sessions", ($) => $.uuid === o, "rerankingMetadata", {
								inFlightRerankingRequest: !0,
								isWaitingForInFlightRerankingRequest: !1,
								earliestUnattendedRerankCallTime: void 0,
							});
							try {
								let $ = 0;
								for (; $ < 3; ) {
									$ += 1;
									const [v, S] = this.getPotentiallyCachedContextItems(o),
										I = await b(v);
									if (I.response.case === "missingContextItems") {
										this.handleMissingContextItems(o, I.response.value);
										continue;
									}
									if (I.response.case === "contextStatusUpdate") {
										this.handleContextStatusUpdate(o, I.response.value, S);
										break;
									}
									console.error("RERANKING RESPONSE CASE IS UNDEFINED", I);
									break;
								}
							} catch ($) {
								console.error("ERROR IN RERANKING", $);
							} finally {
								this.f(
									"sessions",
									($) => $.uuid === o,
									"rerankingMetadata",
									"inFlightRerankingRequest",
									!1,
								),
									f.rerankingMetadata.isWaitingForInFlightRerankingRequest ===
										!0 &&
										(this.f(
											"sessions",
											($) => $.uuid === o,
											"rerankingMetadata",
											"isWaitingForInFlightRerankingRequest",
											!1,
										),
										this.rerank(o));
							}
						}
					}
					getPotentiallyCachedContextItems(o) {
						const f = this.getReactiveReadonlyContextSession(o);
						return f
							? [
									f.intents.flatMap((s) =>
										s.items.map((l) =>
											l.status !== void 0
												? {
														item: {
															case: "contextItemHash",
															value: l.itemHash,
														},
													}
												: { item: { case: "contextItem", value: l.item } },
										),
									),
									f.intents.map((s) => ({
										intent: s.intent,
										items: s.items.map((l) => ({
											item: l.item,
											itemHash: l.itemHash,
										})),
									})),
								]
							: (console.error(
									"No context session found for uuid. Something is weird!!!",
									o,
								),
								[[], []]);
					}
					updateContextSession(o, f) {
						(0, m.untrack)(() => {
							this.updateContextSessionInternal(o, f);
						});
					}
					t(o) {
						const f = [];
						for (const [b, s] of o.intents.entries())
							if (s.handler === void 0) {
								const y = s.intent.intent;
								if (y.case === void 0) {
									console.warn(
										"Intent case is undefined. This should not happen!",
									);
									continue;
								}
								const $ = d.$WZc[y.case](this.m, {
									newItems: async (v) => {
										if (o.frozen)
											return (
												console.warn(
													"Tried to add items to a dead context session!",
												),
												(0, h.Err)("frozen")
											);
										this.f(
											"sessions",
											(I) => I.uuid === o.uuid,
											"intents",
											(I) => s.intent.uuid === I.intent.uuid,
											"error",
											void 0,
										);
										let S = v.filter(u.$r7b);
										return (
											S.length > 1e3 && (S = S.slice(0, 1e3)),
											S.length === 0
												? (this.f(
														"sessions",
														(I) => I.uuid === o.uuid,
														"intents",
														(I) => s.intent.uuid === I.intent.uuid,
														"error",
														{
															message:
																"All context items were filtered out because they are too big.",
														},
													),
													this.f(
														"sessions",
														(I) => I.uuid === o.uuid,
														"intents",
														(I) => s.intent.uuid === I.intent.uuid,
														"items",
														[],
													),
													(0, h.Ok)("ok"))
												: (await Promise.all(S.map(u.$q7b)).then((I) => {
														const T = S.map((P, k) => ({
															item: P,
															itemHash: I[k],
														}));
														this.f(
															"sessions",
															(P) => P.uuid === o.uuid,
															"intents",
															(P) => s.intent.uuid === P.intent.uuid,
															"items",
															(P) => [
																...P.filter((k) =>
																	I.some((L) => L === k.itemHash),
																),
																...T.filter(
																	(k) =>
																		!P.some((L) => L.itemHash === k.itemHash),
																).map((k) => ({
																	item: k.item,
																	itemHash: k.itemHash,
																	status: void 0,
																})),
															],
														),
															this.rerank(o.uuid);
													}),
													(0, h.Ok)("ok"))
										);
									},
									error: (v) =>
										o.frozen
											? (console.warn(
													"Tried to add items to a dead context session!",
												),
												(0, h.Err)("frozen"))
											: (this.f(
													"sessions",
													(S) => S.uuid === o.uuid,
													"intents",
													(S) => s.intent.uuid === S.intent.uuid,
													"error",
													{ message: v.message },
												),
												(0, h.Ok)("ok")),
								});
								f.push({ index: b, handler: $, intent: s.intent, isNew: !0 });
							} else
								f.push({
									index: b,
									handler: s.handler,
									intent: s.intent,
									isNew: !1,
								});
						(0, m.batch)(() => {
							for (const { index: b, handler: s, isNew: l } of f)
								l &&
									this.f(
										"sessions",
										(y) => y.uuid === o.uuid,
										"intents",
										b,
										"handler",
										s,
									);
						});
					}
					updateContextSessionInternal(o, f) {
						const b = this.getReactiveReadonlyContextSession(o);
						if (!b) {
							console.error(
								"No context session found for uuid. Something is weird!!!",
								o,
							);
							return;
						}
						if (b.frozen) {
							console.warn(
								"Unsuccessfully trying to update frozen context session with uuid ",
								o,
							);
							return;
						}
						if (f.input && f.input.case !== b.case)
							throw new Error(
								"IMPLEMENTATION ERROR: Input case does not match context session case!",
							);
						if (
							(b.rerankingMetadata === void 0 && this.r(o),
							b.rerankingMetadata?.updatesEnabled === !1)
						)
							return;
						f.rerankEndpoint &&
							this.f("sessions", (l) => l.uuid === o, "rerankingMetadata", {
								rerankingEnabled: !0,
								rerankEndpoint: f.rerankEndpoint,
							}),
							(0, m.batch)(() => {
								this.f(
									"sessions",
									(l) => l.uuid === o,
									"intents",
									(l) => {
										const { remainingIntents: y, removedIntents: $ } = l.reduce(
											(v, S) => (
												f.removedIntentUuids.some((I) => S.intent.uuid === I)
													? v.removedIntents.push(S)
													: v.remainingIntents.push(S),
												v
											),
											{ remainingIntents: [], removedIntents: [] },
										);
										return (
											$.forEach((v) => {
												v.handler && v.handler.dispose();
											}),
											[
												...y,
												...f.upsertedIntents
													.filter(
														(v) => !l.some((S) => S.intent.uuid === v.uuid),
													)
													.map((v) => ({
														intent: v,
														handler: void 0,
														items: [],
														error: void 0,
														rerankedItems: [],
													})),
											]
										);
									},
								),
									this.f(
										"sessions",
										(l) => l.uuid === o,
										"intents",
										(l) =>
											f.upsertedIntents.some((y) => l.intent.uuid === y.uuid),
										"intent",
										(l) =>
											f.upsertedIntents.find((y) => l.uuid === y.uuid) ?? l,
									);
							}),
							this.t(b);
						const s = f.input ?? b.lastInput;
						if (s)
							for (const l of b.intents)
								try {
									l.handler?.update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(
										s,
										l.intent,
									);
								} catch (y) {
									console.warn(
										"Context session threw. We're giving a warning; please report any errors to the delegate.",
										y,
									);
								}
						this.f("sessions", (l) => l.uuid === o, "lastInput", s),
							this.rerank(o);
					}
					handleMissingContextItems(o, f) {
						const b = f.missingContextItemHashes;
						this.f(
							"sessions",
							(s) => s.uuid === o,
							(0, a.produce)((s) => {
								for (let l = 0; l < s.intents.length; l++)
									for (let y = 0; y < s.intents[l].items.length; y++) {
										const $ = s.intents[l].items[y];
										b.includes($.itemHash) &&
											(s.intents[l].items[y].status = void 0);
									}
							}),
						);
					}
					handleContextStatusUpdate(o, f, b) {
						const s = f.contextItemStatuses;
						this.f(
							"sessions",
							(l) => l.uuid === o,
							(0, a.produce)((l) => {
								for (let y = 0; y < l.intents.length; y++) {
									for (let v = 0; v < l.intents[y].items.length; v++) {
										const S = l.intents[y].items[v],
											I = s.find((T) => T.contextItemHash === S.itemHash);
										I && (l.intents[y].items[v].status = I);
									}
									const $ = b.find(
										(v) => v.intent.uuid === l.intents[y].intent.uuid,
									);
									$ &&
										(l.intents[y].rerankedItems = $.items.flatMap((v) => {
											const S = s.find((I) => I.contextItemHash === v.itemHash);
											return S
												? [{ item: v.item, itemHash: v.itemHash, status: S }]
												: [];
										}));
								}
							}),
						);
					}
					async streamRequestWithContextWrapped(o, f) {
						const b = this.getReactiveReadonlyContextSession(o);
						if (!b)
							throw new Error(
								`No context session found for uuid. Something is weird!!! ${o}`,
							);
						this.n(o),
							b.rerankingMetadata === void 0 && this.r(o),
							this.f(
								"sessions",
								($) => $.uuid === o,
								"rerankingMetadata",
								"rerankingEnabled",
								!1,
							),
							this.f(
								"sessions",
								($) => $.uuid === o,
								"rerankingMetadata",
								"updatesEnabled",
								!1,
							),
							this.t(b);
						const s = Promise.all(
								b.intents.map(($) =>
									$.handler
										? $.handler
												.blockForFinalInput(f.finalInput, $.intent)
												.catch(
													(v) => (
														console.warn(
															"Context session threw. We're giving a warning; please report any errors to the delegate.",
															v,
														),
														"fallBackToCachedReranked"
													),
												)
										: Promise.resolve(),
								),
							),
							l = new Promise(($) => {
								f.abortSignal.onabort = () => {
									$(void 0);
								};
							}),
							y = await Promise.race([s, l]);
						return y === void 0
							? (0, h.Err)("aborted")
							: (this.f(
									"sessions",
									($) => $.uuid === o,
									(0, a.produce)(($) => {
										if ($.intents.length !== y.length)
											throw (
												(console.error(
													"VERY SERIOUS ERROR: intents lengths are different",
													$.intents,
													y,
												),
												new Error(
													"VERY SERIOUS ERROR: intents lengths are different",
												))
											);
										for (let v = 0; v < $.intents.length; v++)
											y[v] === "fallBackToCachedReranked" &&
												$.intents[v].items.some((S) => S.status === void 0) &&
												($.intents[v].items = [...$.intents[v].rerankedItems]);
									}),
								),
								this.freezeContextSession(o),
								(0, h.Ok)(this.u(o, f)));
					}
					async *u(o, f) {
						try {
							let b = 0;
							for (; b < 3; ) {
								(b += 1),
									b > 1 && console.log("STREAM CONTEXT WRAPPED RETRY", b);
								let s = !1;
								try {
									const [l, y] = this.getPotentiallyCachedContextItems(o),
										$ = { ...f.request, contextItems: l },
										v = await f.endpoint($, {
											signal: f.abortSignal,
											headers: (0, c.$m6b)(f.generationUUID),
										});
									let S = !1;
									for await (const I of v) {
										if (I.response.case === "missingContextItems")
											if (S)
												console.error(
													"STREAM CONTEXT WRAPPED MISSING CONTEXT ITEMS COMES AFTER YIELD. WE DO NOT RESPECT THAT. BUG ON SERVER.",
													I,
												);
											else {
												this.handleMissingContextItems(o, I.response.value),
													(s = !0);
												break;
											}
										if (I.response.case === "contextStatusUpdate") {
											this.handleContextStatusUpdate(o, I.response.value, y);
											continue;
										}
										if (I.response.case === "realResponse") {
											(S = !0), yield I.response.value;
											continue;
										}
										console.warn(
											"STREAM CONTEXT WRAPPED RESPONSE CASE IS UNDEFINED",
											I,
										);
									}
								} catch (l) {
									throw (console.warn("STREAM CONTEXT WRAPPED ERROR", l), l);
								}
								if (!s) break;
							}
						} finally {
							f.frozenDesire === "unfreezeOnStreamCompletion" && this.n(o);
						}
					}
				};
				(g = Ne([j(0, E.$0zb), j(1, t.$Li)], g)),
					(0, i.$lK)(r.$B7b, g, i.InstantiationType.Delayed);
			},
		),
		