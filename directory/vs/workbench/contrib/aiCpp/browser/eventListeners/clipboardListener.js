define(de[3223], he([1, 0, 332, 5, 20, 121]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ofd = void 0),
				(e.$ofd = (0, i.$Mi)("clipboardListenerService"));
			let C = class {
				constructor(m, r) {
					(this.b = m), (this.c = r);
				}
				maybeReportClipboardChange(m) {
					const r = m.slice(0, 2e3);
					r !== this.a && ((this.a = r), this.b.recordClipboardChange(r));
				}
				registerClipboardListener(m) {
					this.c.readText().then((h) => this.maybeReportClipboardChange(h));
					const r = [],
						u = async (h) => {
							const c = h.clipboardData?.getData("text/plain");
							let n;
							c === void 0 || c === ""
								? (n = await new Promise((g) =>
										setTimeout(() => {
											this.c.readText().then(g);
										}, 50),
									))
								: (n = c),
								this.maybeReportClipboardChange(n);
						};
					for (const h of m)
						h.window.document.addEventListener("copy", u),
							r.push({
								dispose: () => {
									h.window.document.removeEventListener("copy", u);
								},
							});
					const a = this.c.onDidChangeClipboard((h) => {
						this.maybeReportClipboardChange(h);
					});
					return {
						dispose: () => {
							for (const h of r) h.dispose();
							a.dispose();
						},
					};
				}
			};
			(C = Ne([j(0, t.$V7b), j(1, E.$Vxb)], C)),
				(0, w.$lK)(e.$ofd, C, w.InstantiationType.Delayed);
		}),
		define(
			de[1789],
			he([1, 0, 90, 332, 551, 83, 5, 20, 67, 137, 59, 770]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R7b = void 0),
					(e.$S7b = o),
					(e.$T7b = f);
				const h = 5,
					c = 50,
					n = 2500;
				e.$R7b = (0, C.$Mi)("linterListenerService");
				let g = class {
					constructor(s, l, y, $) {
						(this.c = s),
							(this.d = l),
							(this.f = y),
							(this.g = $),
							(this.cachedLinterErrors = new u.$Jc(c)),
							(this.updateLinterErrorsForUri = (0, w.$v6b)(
								(v) => {
									const I = this.c
										.read({ resource: v })
										.filter((T) => T.severity === t.MarkerSeverity.Error);
									this.maybeUpdateLinterErrors(v, I);
								},
								(v) => v.toString(),
								500,
							));
					}
					maybeUpdateLinterErrors(s, l) {
						const y = l.filter((v) => v.message.length < n).slice(0, h),
							$ = this.cachedLinterErrors.get(s.toString()) ?? [];
						if (!($.length === 0 && y.length === 0)) {
							const v = this.f.getModel(s);
							if (
								v === null ||
								this.g.isModelTooBigFullCheck(v) ||
								($.length === y.length &&
									$.every((T) => y.some((P) => p(T, P))))
							)
								return;
							this.cachedLinterErrors.set(s.toString(), y);
							const S = v.getVersionId(),
								I = y.map(f);
							this.d.recordLinterChange({
								model: v,
								modelVersion: S,
								errors: I,
							});
						}
					}
					registerLinterListener() {
						return this.c.onMarkerChanged((s) => {
							s.map(this.updateLinterErrorsForUri.bind(this));
						});
					}
				};
				g = Ne([j(0, t.$aM), j(1, i.$V7b), j(2, m.$QO), j(3, r.$hfc)], g);
				function p(b, s) {
					return (
						b.code === s.code &&
						b.startLineNumber === s.startLineNumber &&
						b.startColumn === s.startColumn &&
						b.message === s.message &&
						b.source === s.source
					);
				}
				function o(b) {
					return (b ?? []).map(
						(s) =>
							new E.$Ts({
								message: s.message,
								range: {
									startPosition: {
										line: s.startLineNumber,
										column: s.startColumn,
									},
									endPosition: { line: s.endLineNumber, column: s.endColumn },
								},
							}),
					);
				}
				function f(b) {
					return {
						source: b.source,
						message: b.message,
						relatedInformation: (b.relatedInformation ?? []).map((s) => ({
							message: s.message,
							range: {
								startPosition: {
									line: s.startLineNumber,
									column: s.startColumn,
								},
								endPosition: { line: s.endLineNumber, column: s.endColumn },
							},
						})),
						severity: (0, a.$O7b)(b.severity),
						range: {
							startPosition: { line: b.startLineNumber, column: b.startColumn },
							endPosition: { line: b.endLineNumber, column: b.endColumn },
						},
					};
				}
				(0, d.$lK)(e.$R7b, g, d.InstantiationType.Delayed);
			},
		),
		define(
			de[3224],
			he([1, 0, 332, 5, 20, 500, 328, 137, 59]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$U7b = void 0);
				const r = 5,
					u = 50,
					a = 5e3;
				e.$U7b = (0, i.$Mi)("quickActionListenerService");
				let h = class {
					constructor(f, b) {
						(this.g = f), (this.h = b), (this.f = new m.$Jc(u));
					}
					maybeReportNewActions(f, b) {
						const s = f.getModel();
						if (!s) return;
						const l = s.id;
						if (this.h.isModelTooBigFullCheck(s)) return;
						const y = `${f.getId()}|${l}`,
							$ = this.f.get(y) ?? [],
							v = b.filter((S) => JSON.stringify(S).length < a).slice(0, r);
						if (!($.length === 0 && v.length === 0)) {
							if (
								$.length === v.length &&
								$.every((I) => v.some((T) => c(I, T)))
							)
								return;
							this.f.set(y, v);
							const S = v.map(g);
							this.g.recordQuickActionsChange({
								actions: S,
								model: s,
								modelVersion: s.getVersionId(),
							});
						}
					}
					registerQuickActionListener(f) {
						const b = E.$BBb.get(f),
							s = C.$KDb.get(f),
							l = [];
						return (
							b &&
								(l.push(
									b.onDidChangeCodeActions((y) => {
										const $ = y.validActions
											.filter(
												(v) =>
													v.action.isAI !== !0 && v.action.kind === "quickfix",
											)
											.map((v) => v.action)
											.slice(0, 5);
										this.maybeReportNewActions(f, $);
									}),
								),
								l.push(
									b.onDidApplyCodeAction((y) => {
										y.action.isAI !== !0 &&
											y.action.kind === "quickfix" &&
											this.reportFiredAction(f, y.action);
									}),
								)),
							s &&
								l.push(
									s.onFireCommand((y) => {
										this.reportFiredCommand(f, y);
									}),
								),
							{
								dispose: () => {
									l.forEach((y) => y.dispose());
								},
							}
						);
					}
					reportFiredAction(f, b) {
						const s = f.getModel();
						s &&
							(this.h.isModelTooBigFullCheck(s) ||
								this.g.recordQuickActionFired({
									model: s,
									modelVersion: s.getVersionId(),
									action: g(b),
								}));
					}
					reportFiredCommand(f, b) {
						const s = f.getModel();
						s &&
							this.g.recordQuickActionFired({
								model: s,
								modelVersion: s.getVersionId(),
								command: p(b),
							});
					}
				};
				(h = Ne([j(0, t.$V7b), j(1, d.$hfc)], h)),
					(0, w.$lK)(e.$U7b, h, w.InstantiationType.Delayed);
				function c(o, f) {
					return o.command?.id === f.command?.id &&
						o.title === f.title &&
						o.isPreferred === f.isPreferred
						? o.command && f.command
							? n(o.command, f.command)
							: !0
						: !1;
				}
				function n(o, f) {
					return o.id === f.id &&
						o.title === f.title &&
						o.arguments?.length === f.arguments?.length
						? o.arguments && f.arguments
							? o.arguments.every((s, l) => s === f.arguments?.[l])
							: !(o.arguments || f.arguments)
						: !1;
				}
				function g(o) {
					const f = o.edit?.edits,
						b = [];
					return (
						f &&
							f.map((s) => {
								"textEdit" in s &&
									b.push({ text: s.textEdit.text, range: s.textEdit.range });
							}),
						{
							title: o.title,
							edits: b,
							isPreferred: o.isPreferred,
							command: o.command ? p(o.command) : void 0,
						}
					);
				}
				function p(o) {
					return { title: o.title, id: o.id, arguments: o.arguments ?? [] };
				}
			},
		),
		define(
			de[1009],
			he([1, 0, 736, 1489, 1488, 6, 3, 11, 20, 5, 45, 134, 21, 789, 137, 285]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gdc = e.$fdc = void 0),
					(e.$fdc = (0, r.$Mi)("aiServerConfigService"));
				const p = new w.$0ab({
						maxConcurrentUploads: 50,
						absoluteMaxNumberFiles: 1e5,
						maxFileRetries: 20,
						syncConcurrency: 20,
						autoIndexingMaxNumFiles: 1e4,
					}),
					o = new t.$Qab({
						enabled: !1,
						debounceTriggersMs: 1e3,
						waitBetweenTriggersMs: 1e4,
						preventTriggeringWhenLints: !0,
					}),
					f = new w.$abb({
						indexingConfig: p,
						bugConfigResponse: new t.$Oab({ bugBotV1: c.$7cc }),
					}),
					b = "cursorai/serverConfig";
				let s = class extends C.$1c {
					constructor(y, $, v, S) {
						super(),
							(this.c = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.a = this.D(new E.$re())),
							(this.onDidRefreshServerConfig = this.a.event),
							(this.cachedServerConfig = f),
							(this.lastRefreshedServerConfig = new Date(0)),
							(this.b = this.f.createInstance(g.$q6b, { service: i.$bbb })),
							this.q().catch(console.error),
							this.j().catch(console.error),
							this.D(
								this.onDidRefreshServerConfig(async () => {
									this.h.store(
										b,
										this.cachedServerConfig.toJsonString(),
										h.StorageScope.APPLICATION,
										h.StorageTarget.MACHINE,
									);
								}),
							);
					}
					async j() {
						(this.lastRefreshedServerConfig = new Date(
							Date.now() - 5 * 60 * 1e3 + 1e4,
						)),
							this.m();
					}
					m() {
						setTimeout(
							() => {
								this.lastRefreshedServerConfig.getTime() + 5 * 60 * 1e3 <
									Date.now() &&
									((this.lastRefreshedServerConfig = new Date()),
									this.forceRefreshServerConfig().catch(console.error)),
									this.m();
							},
							Math.min(
								30 * 1e3,
								5 * 60 * 1e3 -
									(Date.now() - this.lastRefreshedServerConfig.getTime()),
							),
						);
					}
					n(y) {
						const $ = y ?? this.cachedServerConfig ?? f;
						(this.cachedServerConfig = new w.$abb({
							...$,
							indexingConfig:
								$.indexingConfig ?? this.cachedServerConfig.indexingConfig ?? p,
							bugConfigResponse: new t.$Oab({
								...$.bugConfigResponse,
								linterStrategyV2:
									$.bugConfigResponse?.linterStrategyV2 ??
									this.cachedServerConfig.bugConfigResponse?.linterStrategyV2 ??
									o,
							}),
						})),
							this.a.fire();
					}
					async q() {
						try {
							const y = this.h.get(b, h.StorageScope.APPLICATION);
							y && this.n(w.$abb.fromJsonString(y));
						} catch (y) {
							console.error("Failed to refresh server config from disk:", y);
						}
					}
					async forceRefreshServerConfig() {
						this.lastRefreshedServerConfig = new Date();
						const y = await this.b.get(),
							$ = new AbortController(),
							v = setTimeout(() => $.abort(), 3e4);
						try {
							this.n(
								await y.getServerConfig(
									{
										telemEnabled: this.g.canWeTrackTelem(),
										bugBotDismissedNotificationLast10TimesUnixMs:
											this.c.applicationUserPersistentStorage.bugbotState
												.bugBotDismissedNotificationLast10Times,
										bugBotViewedNotificationLast10TimesUnixMs:
											this.c.applicationUserPersistentStorage.bugbotState
												.bugBotViewedNotificationLast10Times,
									},
									{ signal: $.signal },
								),
							);
						} catch (S) {
							console.error("Failed to refresh server config from server:", S);
						} finally {
							clearTimeout(v);
						}
					}
				};
				(e.$gdc = s),
					(e.$gdc = s =
						Ne([j(0, u.$0zb), j(1, r.$Li), j(2, n.$hfc), j(3, h.$lq)], s)),
					(0, m.$lK)(e.$fdc, s, m.InstantiationType.Delayed),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: a.ConfigServiceActions.GetCachedServerConfig,
									title: {
										original: "Get Cached Server Config",
										value: "Get Cached Server Config",
									},
									f1: !1,
								});
							}
							run(l) {
								return l.get(e.$fdc).cachedServerConfig;
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "aiServerConfigService.forceRefresh",
									title: {
										original: "Force Refresh Server Config",
										value: "Force Refresh Server Config",
									},
									f1: !0,
									category: "Developer",
								});
							}
							run(l, ...y) {
								l.get(e.$fdc).forceRefreshServerConfig().catch(console.error);
							}
						},
					);
			},
		),
		define(
			de[3225],
			he([1, 0, 4, 11, 8, 45, 1679, 1009, 976]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class r extends i.$3X {
					static {
						this.ID = "bugbot.runNewBugBot";
					}
					constructor() {
						super({
							id: r.ID,
							title: {
								value: (0, t.localize)(4460, null),
								original: "Bug Bot: Run New Bug Bot",
							},
							f1: !0,
						});
					}
					async run(a) {
						a.get(E.$0zb).setNonPersistentStorage("isBugBotModalOpen", !0);
					}
				}
				(0, i.$4X)(r),
					C.$qec.registerAction((u, a) => {
						class h extends i.$3X {
							static {
								this.ID = "bugbot.resetBackgroundBugBotInterval";
							}
							constructor() {
								super({
									id: h.ID,
									title: {
										value: (0, t.localize)(4461, null),
										original: "Bug Bot: Trigger Background Bug Bot",
									},
									f1: !0,
									precondition: w.$Kj.function(() =>
										a.invokeFunction(
											(g) =>
												g.get(d.$fdc).cachedServerConfig
													.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers,
										),
									),
								});
							}
							async run(n) {
								n
									.get(E.$0zb)
									.setApplicationUserPersistentStorage(
										"bugbotState",
										"lastBackgroundBugbotAt",
										void 0,
									),
									await n.get(m.$adc).handleBackgroundBugBotInterval();
							}
						}
						(0, i.$4X)(h);
					});
			},
		),
		