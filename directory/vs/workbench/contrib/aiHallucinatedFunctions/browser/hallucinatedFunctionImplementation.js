define(de[2972], he([1, 0, 13, 47]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Mcc = void 0);
			class w {
				constructor(C, d, m) {
					(this.source = C),
						(this.taskUuid = d),
						(this.delegate = m),
						(this.uuid = (0, i.$9g)()),
						(this.a = (0, t.createSignal)(void 0)),
						(this.b = (0, t.createSignal)(void 0)),
						(this.c = (0, t.createSignal)(void 0)),
						(this.d = (0, t.createSignal)(void 0)),
						(this.e = (0, t.createSignal)(!1)),
						(this.g = (0, t.createSignal)("none")),
						(this.h = (0, t.createSignal)("none")),
						(this.i = (0, t.createSignal)(void 0)),
						(this.j = (0, t.createSignal)("none")),
						(this.k = (0, t.createSignal)(!1)),
						(this.l = (0, t.createSignal)(void 0)),
						(this.m = (0, t.createSignal)(void 0)),
						(this.n = (0, t.createSignal)(void 0));
				}
				getPlan() {
					return (0, t.untrack)(() => this.a[0]());
				}
				getPlanReactive() {
					return this.a[0]();
				}
				setPlan(C) {
					this.a[1](C);
				}
				getPlanGenerationUUID() {
					return (0, t.untrack)(() => this.b[0]());
				}
				getPlanGenerationUUIDReactive() {
					return this.b[0]();
				}
				setPlanGenerationUUID(C) {
					this.b[1](C);
				}
				getImplementationGenerationUUID() {
					return (0, t.untrack)(() => this.c[0]());
				}
				getImplementationGenerationUUIDReactive() {
					return this.c[0]();
				}
				setImplementationGenerationUUID(C) {
					this.c[1](C);
				}
				getReflectionGenerationUUID() {
					return (0, t.untrack)(() => this.d[0]());
				}
				getReflectionGenerationUUIDReactive() {
					return this.d[0]();
				}
				setReflectionGenerationUUID(C) {
					this.d[1](C);
				}
				getIsEditable() {
					return (0, t.untrack)(() => this.e[0]());
				}
				getIsEditableReactive() {
					return this.e[0]();
				}
				f(C) {
					this.e[1](C);
				}
				setHasBeenShown() {
					this.getImplementationStatus() === "finished" && this.f(!0);
				}
				getPlanStatus() {
					return (0, t.untrack)(() => this.g[0]());
				}
				getPlanStatusReactive() {
					return this.g[0]();
				}
				setPlanStatus(C) {
					this.g[1](C);
				}
				getReflectionStatus() {
					return (0, t.untrack)(() => this.h[0]());
				}
				getReflectionStatusReactive() {
					return this.h[0]();
				}
				setReflectionStatus(C) {
					this.h[1](C);
				}
				getImplementation() {
					return (0, t.untrack)(() => this.i[0]());
				}
				getImplementationReactive() {
					return this.i[0]();
				}
				setImplementation(C) {
					this.i[1](C);
				}
				getImplementationStatus() {
					return (0, t.untrack)(() => this.j[0]());
				}
				getImplementationStatusReactive() {
					return this.j[0]();
				}
				setImplementationStatus(C) {
					this.j[1](C), C === "finished" && this.delegate.onDidFinish();
				}
				getIsRejected() {
					return (0, t.untrack)(() => this.k[0]());
				}
				getIsRejectedReactive() {
					return this.k[0]();
				}
				setIsRejected(C) {
					this.k[1](C);
				}
				getLints() {
					return (0, t.untrack)(() => this.l[0]());
				}
				getLintsReactive() {
					return this.l[0]();
				}
				setLints(C) {
					this.l[1](C);
				}
				getReflection() {
					return (0, t.untrack)(() => this.m[0]());
				}
				getReflectionReactive() {
					return this.m[0]();
				}
				setReflection(C) {
					this.m[1](C);
				}
				getReflectionDecision() {
					return (0, t.untrack)(() => this.n[0]());
				}
				getReflectionDecisionReactive() {
					return this.n[0]();
				}
				setReflectionDecision(C) {
					this.n[1](C);
				}
			}
			e.$Mcc = w;
		}),
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
		define(
			de[2973],
			he([1, 0, 3, 56, 7, 35, 51, 47, 10, 38, 45]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hfd = void 0),
					(w = mt(w));
				let h = class extends t.$1c {
					static {
						a = this;
					}
					static {
						this.a = [i.ContentWidgetPositionPreference.EXACT];
					}
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.n = o),
							(this.q = b),
							(this.r = s),
							(this.g = !1),
							(this.f = "importPredictionWidget." + (0, d.$9g)()),
							(this.b = w.$("div.importPredictionWidgetBackground")),
							(this.c = w.$("span", {}, "")),
							w.$fhb(this.b, this.c);
						const l = f.getColorTheme().getColor(C.$8P),
							y = ($) => {
								$ &&
									((this.b.style.backgroundColor = $.toString()),
									(this.b.style.zIndex = "1"),
									(this.b.style.width = "1000px"),
									(this.b.style.marginLeft = "0px"),
									(this.b.style.whiteSpace = "pre"),
									(this.b.style.fontFamily = "monospace"),
									(this.b.style.zIndex = "4"),
									(this.b.className = "import-prediction-widget"),
									this.s(),
									this.b.classList.add("fancy"));
							};
						this.D(
							f.onDidColorThemeChange(($) => {
								const v = $.getColor(C.$8P);
								y(v);
							}),
						),
							y(l),
							(this.c.style.fontSize =
								this.h.getOption(r.EditorOption.fontSize) + "px"),
							this.D(
								this.q.onDidChangeConfiguration(($) => {
									$.affectsConfiguration("editor.fontSize") &&
										(this.c.style.fontSize =
											this.q.getValue("editor.fontSize") + "px");
								}),
							),
							this.h.addContentWidget(this),
							this.D(this.h.onDidChangeModelContent(() => this.t())),
							this.D(this.h.onDidChangeCursorPosition(() => this.t())),
							this.b.addEventListener("mouseenter", () => {
								(this.g = !0), this.s();
							}),
							this.b.addEventListener("mouseleave", () => {
								(this.g = !1), this.s();
							});
					}
					s() {
						const n = this.m.match(
								/import from "([^"]*)"|"from ((?:\w|\.|:)+) import |"import ((?:\w|\.|:)+)"|"import ((?:\w|\.|:)+) as ((?:\w|\.|:)+)"/,
							),
							g = n ? (n[1] ?? n[2] ?? n[3] ?? n[4] ?? "") : "",
							p =
								this.r.applicationUserPersistentStorage
									.howManyTimesHasUserAcceptedImportPrediction ?? 0;
						this.g || p < 3
							? this.n
								? (this.c.textContent = `import ${this.n} (press TAB or ESC)`)
								: g.length > 0
									? (this.c.textContent = `import from "${g}" (press TAB or ESC)`)
									: (this.c.textContent = "import (press TAB or ESC)")
							: g.length > 0
								? (this.c.textContent = `\u2191 import from "${g}"`)
								: (this.c.textContent = "\u2191 import");
					}
					dispose() {
						super.dispose(), this.h.removeContentWidget(this), this.b.remove();
					}
					hide() {
						this.h.removeContentWidget(this);
					}
					show() {
						this.h.addContentWidget(this);
					}
					getId() {
						return this.f;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						const n = this.h.getModel();
						if (n === null) return null;
						const g = n.getDecorationRange(this.j);
						if (
							g === null ||
							(g.startLineNumber === g.endLineNumber &&
								g.startColumn === g.endColumn)
						)
							return this.hide(), null;
						const p = n.getLineMaxColumn(g.startLineNumber);
						return {
							position: { lineNumber: g.startLineNumber, column: p },
							preference: a.a,
						};
					}
					t() {
						this.getPosition() && this.h.layoutContentWidget(this);
					}
				};
				(e.$hfd = h),
					(e.$hfd = h = a = Ne([j(4, E.$iP), j(5, m.$gj), j(6, u.$0zb)], h));
			},
		),
		