define(de[285], he([1, 0, 340, 3, 45, 1280]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q6b = void 0);
			let C = class extends i.$1c {
				constructor(m, r, u) {
					super(),
						(this.c = m),
						(this.f = r),
						(this.g = u),
						(this.b = !1),
						(this.a = this.D(this.f.createScoped(this))),
						this.D(
							this.g.onDidChangeTransport(() => {
								this.createServer();
							}),
						);
				}
				async get() {
					const m = this.h;
					(!this.b || m === void 0) && (this.createServer(), (this.b = !0));
					const r = await this.h;
					if (r === void 0)
						throw new Error("Invariant violated! server did not get created.");
					return r;
				}
				createServer() {
					this.h = this.createSingleServer();
				}
				async createSingleServer() {
					const m = await this.g.transport();
					return (0, t.createPromiseClient)(this.c.service, m);
				}
			};
			(e.$q6b = C), (e.$q6b = C = Ne([j(1, w.$0zb), j(2, E.$o6b)], C));
		}),
		define(
			de[332],
			he([1, 0, 20, 5, 551, 971, 137, 32, 25, 367, 3, 1108, 285, 42]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$V7b = void 0),
					(e.$V7b = (0, i.$Mi)("cppEventLoggerService"));
				let n = class {
					cppClient() {
						return this.b.get();
					}
					constructor(p, o, f, b, s) {
						(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.f = b),
							(this.g = s),
							(this.editorChangedTimeoutMap = {}),
							(this.recordDebouncedCursorPosition = (0, w.$s6b)((l, y) => {
								if (l.isDisposed()) return;
								const $ = {
									case: "debouncedCursorPosition",
									position: y,
									modelVersion: l.getVersionId(),
									model: l,
								};
								this.c.recordCppSessionEvent($);
							}, 150)),
							(this.recordCppSessionEvent = this.c.recordCppSessionEvent.bind(
								this.c,
							)),
							(this.b = this.f.createInstance(h.$q6b, { service: a.$K0 }));
					}
					async forceFlushExtHostEventLogger() {
						await this.a?.forceFlush();
					}
					h(p) {
						const f = this.e.asRelativePath(p).split(".").pop();
						if (f !== void 0 && f.length > 0 && f.length < 8)
							return f.toLowerCase();
					}
					registerExtHostEventLogger(p) {
						return (
							(this.a = p),
							{
								dispose: () => {
									this.a = void 0;
								},
							}
						);
					}
					recordExtHostEvent(p) {
						this.c.canWeTrackTelem() && this.a?.recordExtHostEvent(p);
					}
					recordScrollEvent(p, o, f) {
						this.c.recordCppSessionEvent({
							case: "scrollEvent",
							editorId: f,
							visibleRanges: o,
							modelVersion: p.getVersionId(),
							model: p,
						});
					}
					recordEditorCloseEvent(p) {
						this.c.recordCppSessionEvent({ case: "editorClose", editorId: p });
					}
					recordAiEvent(p, o) {
						this.c.recordCppSessionEvent({
							case: "aiEvent",
							requestId: p,
							startOrEnd: o,
						});
					}
					recordCmdKEvent(p, o) {
						this.c.recordCppSessionEvent({
							case: "cmdKEvent",
							event: o,
							model: p,
							modelVersion: p.getVersionId(),
						});
					}
					recordChatEvent(p) {
						this.c.recordCppSessionEvent({ case: "chatEvent", event: p });
					}
					recordBugBotEvent(p) {
						this.c.recordCppSessionEvent({ case: "bugBotEvent", event: p });
					}
					recordChangedEditor(p, o, f, b) {
						const s = {
							case: "editorChanged",
							modelVersion: p.getVersionId(),
							model: p,
							position: o,
							visibleRanges: f,
							editorId: b,
						};
						this.c.recordCppSessionEvent(s);
					}
					recordPartialAcceptSuggestionEvent(p, o, f) {
						const b = (0, E.$87)(p, o),
							s = {
								case: "acceptCppPartial",
								currentlyShownCppSuggestion: {
									modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:
										o.modelVersionWhenCreated,
									originalText: o.originalText ?? "",
									suggestionId: o.monotonicallyIncreasingSuggestionId,
									suggestionText: o.replaceText,
									rangeOfSuggestionInCurrentModel: b
										? {
												endColumn: b.endColumn,
												endLineNumber: b.endLineNumber,
												startColumn: b.startColumn,
												startLineNumber: b.startLineNumber,
											}
										: void 0,
								},
								edit: f,
								modelVersion: p.getVersionId(),
								model: p,
							};
						this.c.recordCppSessionEvent(s),
							this.d.publicLogCapture("cursor.acceptcppsuggestionpartial");
						const l = o.uri.path.split("/").pop();
						this.recordCppFate(
							o.requestId,
							r.CppFate.PARTIAL_ACCEPT,
							l,
							performance.now(),
						);
					}
					recordAcceptSuggestionEvent(p, o) {
						const f = (0, E.$87)(p, o),
							b = {
								case: "acceptCpp",
								currentlyShownCppSuggestion: {
									modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:
										o.modelVersionWhenCreated,
									originalText: o.originalText ?? "",
									suggestionId: o.monotonicallyIncreasingSuggestionId,
									suggestionText: o.replaceText,
									rangeOfSuggestionInCurrentModel: f
										? {
												endColumn: f.endColumn,
												endLineNumber: f.endLineNumber,
												startColumn: f.startColumn,
												startLineNumber: f.startLineNumber,
											}
										: void 0,
								},
								modelVersion: p.getVersionId(),
								model: p,
							};
						this.c.recordCppSessionEvent(b),
							this.d.publicLogCapture("cursor.acceptcppsuggestion");
						const s = this.h(o.uri);
						this.recordCppFate(
							o.requestId,
							r.CppFate.ACCEPT,
							s,
							performance.now(),
						);
					}
					recordRejectSuggestionEvent(p, o) {
						const f = (0, E.$87)(p, o),
							b = {
								case: "rejectCpp",
								currentlyShownCppSuggestion: {
									modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:
										o.modelVersionWhenCreated,
									originalText: o.originalText ?? "",
									suggestionId: o.monotonicallyIncreasingSuggestionId,
									suggestionText: o.replaceText,
									rangeOfSuggestionInCurrentModel: f
										? {
												endColumn: f.endColumn,
												endLineNumber: f.endLineNumber,
												startColumn: f.startColumn,
												startLineNumber: f.startLineNumber,
											}
										: void 0,
								},
								modelVersion: p.getVersionId(),
								model: p,
							};
						this.c.recordCppSessionEvent(b),
							this.d.publicLogCapture("cursor.rejectcppsuggestion");
						const s = this.h(o.uri);
						this.recordCppFate(
							o.requestId,
							r.CppFate.REJECT,
							s,
							performance.now(),
						);
					}
					recordFinishedCppGeneration(p, o) {
						const f = {
							case: "finishedCppGeneration",
							model: p,
							recoverableData: o,
							modelVersion: p.getVersionId(),
						};
						this.c.recordCppSessionEvent(f),
							this.d.publicLogCapture("cursor.fullcppsuggestion");
					}
					recordCppSuggestionEvent(p, o, f) {
						const b = (0, E.$87)(p, o),
							s = {
								case: "suggestCpp",
								currentlyShownCppSuggestion: {
									modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:
										o.modelVersionWhenCreated,
									originalText: o.originalText ?? "",
									suggestionId: o.monotonicallyIncreasingSuggestionId,
									suggestionText: o.replaceText,
									rangeOfSuggestionInCurrentModel: b
										? {
												endColumn: b.endColumn,
												endLineNumber: b.endLineNumber,
												startColumn: b.startColumn,
												startLineNumber: b.startLineNumber,
											}
										: void 0,
								},
								recoverableData: f,
								modelVersion: p.getVersionId(),
								model: p,
							};
						this.c.recordCppSessionEvent(s),
							this.d.publicLogCapture("cursor.suggestcpp");
					}
					recordCppTriggerEvent(p, o, f, b) {
						this.c.recordCppSessionEvent({
							case: "cppTrigger",
							generationUUID: o,
							cursorPosition: f,
							modelVersion: p.getVersionId(),
							model: p,
							source: b,
						});
					}
					recordAcceptCursorPredictionEvent(p, o) {
						const f = {
							case: "acceptCursorPredictionEvent",
							prediction: o,
							model: p,
							modelVersion: p.getVersionId(),
						};
						this.c.recordCppSessionEvent(f);
					}
					recordRejectCursorPredictionEvent(p, o) {
						const f = {
							case: "rejectCursorPredictionEvent",
							prediction: o,
							model: p,
							modelVersion: p.getVersionId(),
						};
						this.c.recordCppSessionEvent(f);
					}
					recordSuggestCursorPredictionEvent(p, o) {
						const f = {
							case: "suggestCursorPredictionEvent",
							prediction: o,
							model: p,
							modelVersion: p.getVersionId(),
						};
						this.c.recordCppSessionEvent(f);
					}
					recordModelOpenedEvent(p) {
						const o = {
							case: "modelOpened",
							model: p,
							modelVersion: p.getVersionId(),
						};
						this.c.recordCppSessionEvent(o),
							this.d.publicLogCapture("cursor.modelopened");
					}
					recordLinterChange(p) {
						const o = {
							case: "linterError",
							errors: p.errors,
							model: p.model,
							modelVersion: p.modelVersion,
						};
						this.c.recordCppSessionEvent(o);
					}
					recordClipboardChange(p) {
						const o = { case: "clipboardChange", text: p };
						this.c.recordCppSessionEvent(o);
					}
					recordQuickActionsChange(p) {
						const o = { case: "quickActionsChange", ...p };
						this.c.recordCppSessionEvent(o);
					}
					recordQuickActionFired(p) {
						const o = { case: "quickActionFired", ...p };
						this.c.recordCppSessionEvent(o);
					}
					recordCppFate(p, o, f, b) {
						const s = new r.$Bv({
								requestId: p,
								fate: o,
								performanceNowTime: b,
								extension: f,
							}),
							l = new Promise((y, $) => {
								setTimeout(
									() => $(new Error("Timeout recording CPP fate event")),
									2e3,
								);
							});
						this.cppClient().then((y) => {
							Promise.race([y.recordCppFate(s, {}), l])
								.then(() => {})
								.catch(($) => {
									console.error("Error recording CPP fate event:", $);
								});
						});
					}
					recordBugBotLinterEvent({ model: p, requestId: o, eventType: f }) {
						this.c.recordCppSessionEvent({
							case: "bugBotLinterEvent",
							requestId: o,
							eventType: f,
							model: p,
							modelVersion: p.getVersionId(),
						});
					}
					recordAnythingQuickAccessSelectionEvent(p, o, f) {
						const b = new u.$Zc(),
							s = new Set(),
							l = o.map(($) => {
								if (
									$.type === "separator" ||
									(s.size > 16 && !s.has($.resource.toString()))
								)
									return $;
								s.add($.resource.toString());
								const v = this.g.createModelReference($.resource);
								return (
									b.add(
										(0, u.$Yc)(async () => {
											(await v).dispose();
										}),
									),
									{ ...$, textModelPromise: v }
								);
							}),
							y = {
								case: "anythingQuickAccessSelectionEvent",
								query: p,
								items: l,
								selectedIndices: f,
							};
						this.c.recordCppSessionEvent(y, b);
					}
				};
				(n = Ne(
					[j(0, C.$hfc), j(1, d.$km), j(2, m.$Vi), j(3, i.$Li), j(4, c.$MO)],
					n,
				)),
					(0, t.$lK)(e.$V7b, n, t.InstantiationType.Delayed);
			},
		),
		