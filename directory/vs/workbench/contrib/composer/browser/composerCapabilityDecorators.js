import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
define(de[395], he([1, 0, 29]), function (ce /*require*/,
 e /*exports*/,
 t /*errors*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.cancellable = i),
				(e.autoCancellableAndStatusUpdater = w);
			function i() {
				return function (E, C, d) {
					const m = d.value;
					return (
						typeof m == "function" &&
							(d.value = function (...r) {
								const u = this.getAbortSignal();
								return new Promise((a, h) => {
									(async () => {
										try {
											const n = await m.apply(this, r);
											u.aborted || a(n);
										} catch (n) {
											u.aborted || h(n);
										}
									})(),
										u.addEventListener("abort", () => {
											h(new t.$9());
										});
								});
							}),
						d
					);
				};
			}
			function w() {
				return function (E) {
					const C = {
						onStartSubmitChatReturnShouldStop: "start-submit-chat",
						onBeforeSubmitChat: "before-submit-chat",
						runInPlaceMutateRequestBeforeSubmit: "mutate-request",
						processCodeBlock: "process-codeblock",
						onAfterSubmitChat: "after-submit-chat",
						onAfterApply: "after-apply",
						onComposerSettledReturnShouldLoop: "composer-settled",
						onComposerDone: "composer-done",
						processStream: "process-stream",
					};
					for (const d of Object.keys(C)) {
						const m = C[d],
							r = Object.getOwnPropertyDescriptor(E.prototype, d);
						if (r && typeof r.value == "function") {
							const u = i()(E.prototype, d, r) || r,
								a = u.value;
							(u.value = async function (...h) {
								const c = this.type;
								let n = h[0];
								m === "mutate-request" && (n = h[1]);
								const { composerId: g } = n,
									p = "aiBubbleId" in n ? n.aiBubbleId : n.humanBubbleId;
								let o;
								switch (d) {
									case "onBeforeSubmitChat":
										o = this.silentOnBeforeSubmitChat?.(n);
										break;
									case "runInPlaceMutateRequestBeforeSubmit":
										o = this.silentRunInPlaceMutateRequestBeforeSubmit?.(n);
										break;
									case "onAfterSubmitChat":
										o = this.silentOnAfterSubmitChat?.(n);
										break;
									case "onComposerSettledReturnShouldLoop":
										o = this.silentOnComposerSettled?.(n);
										break;
									case "onComposerDone":
										o = this.silentOnComposerDone?.(n);
										break;
									case "processStream":
										o = this.silentProcessStream?.(n);
										break;
									default:
										break;
								}
								if (m === "process-codeblock") {
									const b = n.capabilityCodeBlock.codeBlockIdx;
									this.composerDataService.updateComposerCapabilityCodeBlock(
										g,
										p,
										b,
										{ status: "loading" },
									);
								} else
									o === !1 &&
										(this.composerDataService.addTypesToCapabilityStatuses(
											g,
											p,
											m,
											[c],
										),
										this.composerDataService.setCapabilityStatus(
											g,
											p,
											m,
											c,
											"generating",
										));
								try {
									const f = await a.apply(this, h);
									if (m === "process-codeblock") {
										const s = n.capabilityCodeBlock.codeBlockIdx;
										this.composerDataService.updateComposerCapabilityCodeBlock(
											g,
											p,
											s,
											{ status: "completed" },
										);
									} else
										o === !1 &&
											(m === "composer-settled"
												? f === !1
													? this.composerDataService.removeTypesFromCapabilityStatuses(
															g,
															p,
															"composer-settled",
															[c],
														)
													: this.composerDataService.setCapabilityStatus(
															g,
															p,
															m,
															c,
															"completed",
														)
												: this.composerDataService.setCapabilityStatus(
														g,
														p,
														m,
														c,
														"completed",
													));
									return f;
								} catch (f) {
									if ((this.onAborted(f), m === "process-codeblock")) {
										const s = n.capabilityCodeBlock.codeBlockIdx;
										this.composerDataService.updateComposerCapabilityCodeBlock(
											g,
											p,
											s,
											{ status: "failed" },
										);
									} else
										o === !1 &&
											(m === "composer-settled"
												? this.composerDataService.removeTypesFromCapabilityStatuses(
														g,
														p,
														"composer-settled",
														[c],
													)
												: this.composerDataService.setCapabilityStatus(
														g,
														p,
														m,
														c,
														"aborted",
													));
									throw f;
								} finally {
									this.composerDataService.addCapabilityRan(g, p, m, c);
								}
							}),
								Object.defineProperty(E.prototype, d, u);
						}
					}
				};
			}
		})
