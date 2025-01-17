import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/common/model.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/resources.js';
import './hallucinatedFunctionImplementation.js';
import './hallucinatedFunctionChatMessage.js';
import './hallucinatedFunction.js';
define(
			de[1706],
			he([1, 0, 3, 6, 5, 20, 17, 47, 64, 45, 19, 2972, 2971, 2970]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ucc = e.$Tcc = void 0),
					(e.$Tcc = (0, w.$Mi)("hallucinatedFunctionsDataService"));
				let n = class extends t.$1c {
					constructor(p) {
						super(),
							(this.w = p),
							(this.g = []),
							(this.h = []),
							(this.j = []),
							(this.m = this.D(new i.$re())),
							(this.onDidCreateHallucinatedFunction = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidUpdateHallucinatedFunctionImplementationRange =
								this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidDeleteHallucinatedFunction = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidChangeHallucinatedFunction = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidFinishHallucinatedFunctionImplementation =
								this.s.event),
							(this.u = this.D(new i.$re())),
							(this.onDidPushTask = this.u.event);
					}
					newOrFocusPrompt(p) {
						const o = this.getHallucinatedFunction(p);
						if (!o) {
							console.error("Hallucinated function not found for UUID:", p);
							return;
						}
						o.getPrompt() === void 0 &&
							(o.setPrompt(new h.$Rcc((0, d.$9g)())), this.r.fire(o)),
							o.getPrompt()?.inputBoxDelegate.focus();
					}
					deleteCandidate(p, o) {
						const f = this.g.findIndex((b) => b.uuid === p);
						if (f !== -1) {
							const b = this.g[f];
							this.g.splice(f, 1), o.deltaDecorations([b.decorationId], []);
						}
					}
					abortTasks(p) {
						this.j.forEach((o) => {
							p(o) && o.abortController.abort();
						});
					}
					cleanCandidates() {
						const p = Math.floor(Date.now() / 1e3);
						for (let o = this.g.length - 1; o >= 0; o--)
							this.g[o].createdAtUnixSeconds <= p - 2 && this.g.splice(o, 1);
					}
					addCandidate(p) {
						this.g.push({
							...p,
							createdAtUnixSeconds: Math.floor(Date.now() / 1e3),
							isCreating: !1,
							uuid: (0, d.$9g)(),
						}),
							setTimeout(() => {
								this.cleanCandidates();
							}, 2100);
					}
					getCandidates() {
						return this.g;
					}
					getHallucinatedFunctions(p) {
						const o = this.h;
						return p
							? o.filter((f) => !p.uri || u.$dh.isEqual(f.uri, p.uri))
							: o;
					}
					getHallucinatedFunction(p) {
						return this.h.find((o) => o.uuid === p);
					}
					getHallucinatedFunctionAtPosition(p, o) {
						if (!p) return;
						const f = [];
						for (const b of this.h) {
							const s = o.getDecorationRange(b.implementationDecorationId);
							s && s.containsPosition(p) && f.push({ hf: b, range: s });
						}
						return f
							.sort(
								(b, s) => -(b.range.startLineNumber - s.range.startLineNumber),
							)
							.at(0)?.hf;
					}
					getHallucinatedFunctionAtPositionOnlyIdentifier(p, o) {
						if (!p) return;
						const f = [];
						for (const b of this.h) {
							const s = o.getDecorationRange(b.implementationDecorationId);
							if (s && s.isEmpty() && b.callSiteDecorationId) {
								const l = o.getDecorationRange(b.callSiteDecorationId);
								l && l.containsPosition(p) && f.push({ hf: b, range: s });
								continue;
							}
							s &&
								s.startLineNumber === p.lineNumber &&
								f.push({ hf: b, range: s });
						}
						return f.at(0)?.hf;
					}
					getHallucinatedFunctionAtCallPosition(p, o) {
						if (p)
							for (const f of this.h) {
								if (f.callSiteDecorationId === void 0) continue;
								const b = o.getDecorationRange(f.callSiteDecorationId);
								if (b && b.containsPosition(p)) return f;
							}
					}
					getHallucinatedFunctionName(p, o) {
						const f = p.callSiteDecorationId
							? o.getDecorationRange(p.callSiteDecorationId)
							: void 0;
						if (!f) {
							const s = ($) => $.slice(0, 100),
								l = o.getDecorationRange(p.implementationDecorationId);
							if (!l) return "";
							const y = o.getValueInRange(l);
							return s(y);
						}
						return o.getValueInRange(f);
					}
					getHallucinatedFunctionImplementation(p, o, f) {
						const b = p.implementations.findIndex((l) => l.uuid === o.uuid),
							s = f.getDecorationRange(p.implementationDecorationId);
						return p.currentImplementationIndex === b && s
							? f.getValueInRange(s)
							: this.getHallucinatedFunctionImplementationDirect(p, o, f);
					}
					getHallucinatedFunctionImplementationDirect(p, o, f) {
						let b = o.getImplementation() ?? "";
						const s = f.getDecorationRange(p.implementationDecorationId);
						return s && s.isEmpty() && (b += f.getEOL()), b;
					}
					getHallucinatedFunctionReferenceImplementation(p, o) {
						const f = p.implementations.at(0);
						return f === void 0
							? ""
							: this.getHallucinatedFunctionImplementation(p, f, o);
					}
					addImplementation(p, o) {
						const f = this.h.findIndex((l) => l.uuid === p);
						if (f === -1) throw new Error("Hallucinated function not found");
						const b = this.h[f],
							s = new a.$Mcc(o.source, o.taskUuid, {
								onDidFinish: () => {
									this.s.fire(b);
								},
							});
						return b.implementations.push(s), this.r.fire(b), s;
					}
					previousImplementation(p, o) {
						this.nextImplementation(p, o, "negative");
					}
					nextImplementation(p, o, f = "positive") {
						const b = this.h.findIndex((s) => s.uuid === p);
						if (b === -1) throw new Error("Hallucinated function not found");
						try {
							const s = this.h[b].currentImplementationIndex;
							let l = 0;
							do
								f === "positive"
									? this.h[b].currentImplementationIndex++
									: this.h[b].currentImplementationIndex--,
									this.h[b].currentImplementationIndex >=
									this.h[b].implementations.length
										? (this.h[b].currentImplementationIndex = 0)
										: this.h[b].currentImplementationIndex < 0 &&
											(this.h[b].currentImplementationIndex =
												this.h[b].implementations.length - 1),
									l++;
							while (!1);
							if (l > this.h[b].implementations.length)
								throw new Error("No implementation found");
							const y = o.getDecorationRange(
								this.h[b].implementationDecorationId,
							);
							if (!y) throw new Error("Decoration range not found");
							const $ = this.h[b].implementations[s];
							$.getIsEditable() && $.setImplementation(o.getValueInRange(y));
							const v =
								this.h[b].implementations[this.h[b].currentImplementationIndex];
							o.pushEditOperations(
								null,
								[
									{
										range: y,
										text:
											v.getImplementation() ??
											this.h[b].implementations[0].getImplementation() +
												"     /* no implementation yet, just a plan*/",
									},
								],
								() => null,
							),
								v.setHasBeenShown();
						} finally {
							this.r.fire(this.h[b]);
						}
					}
					getImplementation(p, o) {
						const f = this.getHallucinatedFunction(p);
						if (f) return f.implementations.find((b) => b.uuid === o);
					}
					getShowingImplementation(p) {
						const o = this.getHallucinatedFunction(p);
						if (o)
							return o.showingImplementationIndex !== void 0
								? o.implementations.at(o.showingImplementationIndex)
								: void 0;
					}
					nextShowingImplementation(p) {
						const o = this.getHallucinatedFunction(p);
						if (o) {
							if (o.showingImplementationIndex === void 0)
								o.showingImplementationIndex = o.showingIndices.at(0);
							else {
								const f = o.showingIndices.indexOf(
									o.showingImplementationIndex,
								);
								if (f === -1)
									o.showingImplementationIndex = o.showingIndices.at(0);
								else {
									let b = (f + 1) % o.showingIndices.length;
									o.showingImplementationIndex = o.showingIndices.at(b);
								}
							}
							this.r.fire(o);
						}
					}
					previousShowingImplementation(p) {
						const o = this.getHallucinatedFunction(p);
						if (o) {
							if (o.showingImplementationIndex === void 0)
								o.showingImplementationIndex = o.showingIndices.at(0);
							else {
								const f = o.showingIndices.indexOf(
									o.showingImplementationIndex,
								);
								if (f === -1)
									o.showingImplementationIndex = o.showingIndices.at(0);
								else {
									let b =
										(f - 1 + o.showingIndices.length) % o.showingIndices.length;
									o.showingImplementationIndex = o.showingIndices.at(b);
								}
							}
							this.r.fire(o);
						}
					}
					setHallucinatedFunctionShowingIndices(p, o) {
						(p.showingIndices = o),
							(p.showingImplementationIndex = o.at(0)),
							this.r.fire(p);
					}
					rejectImplementation(p, o) {
						o.setIsRejected(!0);
						const f = p.implementations.indexOf(o);
						this.setHallucinatedFunctionShowingIndices(
							p,
							p.showingIndices.filter((b) => b !== f),
						);
					}
					showImplementation(p, o, f) {
						const b = this.getHallucinatedFunction(p);
						if (!b) return;
						const s = b.implementations.findIndex((l) => l.uuid === o);
						if (s !== -1)
							try {
								const l = b.currentImplementationIndex;
								b.currentImplementationIndex = s;
								const y = f.getDecorationRange(b.implementationDecorationId);
								if (!y) return;
								if (
									b.implementations[l].getImplementation() !==
										f.getValueInRange(y) &&
									this.w.applicationUserPersistentStorage
										.hallucinatedFunctionsPersistentState.noninvasiveUI !== !0
								) {
									b.currentImplementationIndex = l;
									return;
								}
								const $ = b.implementations[s],
									v = this.getHallucinatedFunctionImplementationDirect(b, $, f);
								if (
									(f.pushEditOperations(
										null,
										[{ range: y, text: v }],
										() => null,
									),
									y.isEmpty())
								) {
									let S = C.$iL.inverseEditRange(y, v);
									(S = {
										...S,
										endLineNumber: S.endLineNumber - 1,
										endColumn: f.getLineMaxColumn(S.endLineNumber - 1),
									}),
										(b.implementationDecorationId = f.deltaDecorations(
											[b.implementationDecorationId],
											[{ range: S, options: this.y() }],
										)[0]);
								}
								if (
									((b.currentImplementationIndex = s),
									$.setHasBeenShown(),
									this.w.applicationUserPersistentStorage
										?.hallucinatedFunctionsPersistentState?.instantAccept ===
										!0)
								) {
									if (!b.callSiteDecorationId) return;
									const S = f.getDecorationRange(b.callSiteDecorationId);
									if (!S) return;
									b.callSiteDecorationId = f.deltaDecorations(
										[b.callSiteDecorationId],
										[
											{
												range: S,
												options: {
													className: "hallucinated-function-call-site-done",
													description: "hallucinated function call site",
												},
											},
										],
									)[0];
								}
							} finally {
								this.r.fire(b);
							}
					}
					deleteHallucinatedFunctionNoModelChanges(p) {
						this.deleteHallucinatedFunction(p, void 0);
					}
					deleteHallucinatedFunction(p, o) {
						this.j.forEach((b) => {
							b.hallucinatedFunctionUuid === p && b.abortController.abort();
						});
						const f = this.h.findIndex((b) => b.uuid === p);
						if (f !== -1) {
							const b = this.h[f];
							if ((this.h.splice(f, 1), o !== void 0)) {
								const s = o.getDecorationRange(b.implementationDecorationId);
								o.deltaDecorations(
									[
										...(b.callSiteDecorationId ? [b.callSiteDecorationId] : []),
										b.implementationDecorationId,
									],
									[],
								),
									s &&
										!s.isEmpty() &&
										o.pushEditOperations(
											null,
											[
												...(s
													? [
															{
																range: {
																	...s,
																	endLineNumber: s.endLineNumber + 1,
																	endColumn: 1,
																},
																text: "",
															},
														]
													: []),
											],
											() => null,
										);
							}
							this.q.fire(b);
						}
					}
					markCandidateCreating(p) {
						const o = this.g.findIndex((f) => f.uuid === p);
						o !== -1 && (this.g[o].isCreating = !0);
					}
					removeCandidate(p) {
						const o = this.g.findIndex((f) => f.uuid === p);
						o !== -1 && this.g.splice(o, 1);
					}
					updateHallucinatedFunctionImplementationRange(p, o, f) {
						const b = this.h.findIndex(($) => $.uuid === p);
						if (b === -1) throw new Error("Hallucinated function not found");
						const s = this.h[b],
							l = f.deltaDecorations(
								[s.implementationDecorationId],
								[{ range: o, options: this.y() }],
							);
						s.implementationDecorationId = l[0];
						const y = f.getValueInRange(o);
						s.implementations[s.currentImplementationIndex].setImplementation(
							y,
						),
							this.n.fire(s),
							this.r.fire(s);
					}
					y() {
						return {
							description: "hallucinated function implementation",
							className: "hallucinated-function-implementation",
							collapseOnReplaceEdit: !1,
							stickiness: m.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							isWholeLine: !0,
						};
					}
					createHallucinatedFunction(p, o, f) {
						let b;
						if (
							f?.callSiteDecorationId !== void 0 ||
							f?.callSiteRange !== void 0
						) {
							const v =
								f?.callSiteRange ??
								p.getDecorationRange(f.callSiteDecorationId);
							if (!v) throw new Error("Decoration range not found");
							for (const S of this.h) {
								if (S.callSiteDecorationId === void 0) continue;
								const I = p.getDecorationRange(S.callSiteDecorationId);
								if (I && I.intersectRanges(v))
									throw new Error("Intersecting callsite");
							}
							b = p.deltaDecorations(
								f?.callSiteDecorationId ? [f.callSiteDecorationId] : [],
								[
									{
										range: v,
										options: { description: "hallucinated function call site" },
									},
								],
							)[0];
						}
						const s = p.deltaDecorations(
								[],
								[{ range: o, options: this.y() }],
							)[0],
							l = f?.initialImplementation ?? p.getValueInRange(o),
							y = new c.$Scc(
								f?.uuid ?? (0, d.$9g)(),
								p.uri,
								new Date(),
								b,
								s,
								f?.initialImplementation !== void 0 ? 1 : 0,
								void 0,
								[],
								!1,
								[],
							);
						if (f?.prompt !== void 0) {
							const v = new h.$Rcc((0, d.$9g)());
							v.setRichText(f.prompt.richText),
								v.setText(f.prompt.plainText),
								y.setPrompt(v);
						}
						const $ = new a.$Mcc("initial", void 0, {
							onDidFinish: () => {
								this.s.fire(y);
							},
						});
						if (
							($.setImplementation(l),
							$.setImplementationStatus("finished"),
							$.setHasBeenShown(),
							$.setIsRejected(!0),
							y.implementations.push($),
							f?.initialImplementation !== void 0)
						) {
							const v = new a.$Mcc("initial", void 0, {
								onDidFinish: () => {
									this.s.fire(y);
								},
							});
							v.setImplementation(p.getValueInRange(o)),
								v.setImplementationStatus("finished"),
								v.setHasBeenShown(),
								v.setIsRejected(!0),
								y.implementations.push(v);
						}
						this.h.push(y), this.m.fire(y);
					}
					transitionCandidate(p, o, f) {
						const b = this.g.findIndex((l) => l.uuid === p);
						if (b === -1) throw new Error("Candidate not found");
						const s = this.g[b];
						this.g.splice(b, 1),
							this.createHallucinatedFunction(o, f, {
								callSiteDecorationId: s.decorationId,
								uuid: s.uuid,
							});
					}
					pushTask(p) {
						if (p.fuel < 0) {
							console.log("not appending task because fuel is less than 0");
							return;
						}
						const o = {
							...p,
							uuid: (0, d.$9g)(),
							status: "pending",
							abortController: new AbortController(),
						};
						this.j.push(o), this.u.fire(o);
					}
					setTaskStatus(p, o, f) {
						const b = this.j.findIndex((s) => s.uuid === p);
						if (b === -1) throw new Error("Task not found");
						if (this.j[b].status !== f)
							throw new Error("Task status did not match expected value");
						this.j[b].status = o;
					}
				};
				(e.$Ucc = n),
					(e.$Ucc = n = Ne([j(0, r.$0zb)], n)),
					(0, E.$lK)(e.$Tcc, n, E.InstantiationType.Delayed);
			},
		),
		