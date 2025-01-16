define(de[3354], he([1, 0, 3, 88, 569, 101]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hmc = void 0);
			let C = class extends t.$1c {
				constructor(m, r) {
					super(),
						(this.f = r),
						(this.b = this.D(new t.$0c())),
						(this.c = new Map()),
						(this.a = m.getProxy(i.$mbb.ExtHostLanguageModelTools)),
						this.D(
							this.f.onDidChangeTools((u) =>
								this.a.$onDidChangeTools([...this.f.getTools()]),
							),
						);
				}
				async $getTools() {
					return Array.from(this.f.getTools());
				}
				$invokeTool(m, r) {
					return this.f.invokeTool(
						m,
						(u, a) => this.a.$countTokensForInvocation(m.callId, u, a),
						r,
					);
				}
				$countTokensForInvocation(m, r, u) {
					const a = this.c.get(m);
					if (!a) throw new Error(`Tool invocation call ${m} not found`);
					return a(r, u);
				}
				$registerTool(m) {
					const r = this.f.registerToolImplementation(m, {
						invoke: async (u, a, h) => {
							try {
								return this.c.set(u.callId, a), await this.a.$invokeTool(u, h);
							} finally {
								this.c.delete(u.callId);
							}
						},
					});
					this.b.set(m, r);
				}
				$unregisterTool(m) {
					this.b.deleteAndDispose(m);
				}
			};
			(e.$Hmc = C),
				(e.$Hmc = C =
					Ne(
						[(0, E.$tmc)(i.$lbb.MainThreadLanguageModelTools), j(1, w.$E2)],
						C,
					));
		}),
		define(
			de[3355],
			he([1, 0, 15, 29, 6, 3, 4, 34, 88, 1807, 1023, 621, 357, 101, 53]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Amc = void 0);
				let g = class {
					constructor(f, b, s, l, y, $, v) {
						(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.i = y),
							(this.j = $),
							(this.k = v),
							(this.b = new E.$Zc()),
							(this.c = new E.$0c()),
							(this.d = new Map()),
							(this.a = f.getProxy(m.$mbb.ExtHostChatProvider)),
							this.a.$acceptChatModelMetadata({
								added: b
									.getLanguageModelIds()
									.map((S) => ({
										identifier: S,
										metadata: b.lookupLanguageModel(S),
									})),
							}),
							this.b.add(
								b.onDidChangeLanguageModels(
									this.a.$acceptChatModelMetadata,
									this.a,
								),
							);
					}
					dispose() {
						this.c.dispose(), this.b.dispose();
					}
					$registerLanguageModelProvider(f, b, s) {
						const l = new E.$Zc();
						l.add(
							this.f.registerLanguageModelChat(b, {
								metadata: s,
								sendChatRequest: async (y, $, v, S) => {
									const I = (Math.random() * 1e6) | 0,
										T = new t.$0h(),
										P = new t.$di();
									try {
										this.d.set(I, { defer: T, stream: P }),
											await this.a.$startChatRequest(f, I, $, y, v, S);
									} catch (k) {
										throw (this.d.delete(I), k);
									}
									return { result: T.p, stream: P.asyncIterable };
								},
								provideTokenCount: (y, $) =>
									this.a.$provideTokenLength(f, y, $),
							}),
						),
							s.auth && l.add(this.l(s.extension, s.auth)),
							this.c.set(f, l);
					}
					async $reportResponsePart(f, b) {
						const s = this.d.get(f);
						this.h.trace("[LM] report response PART", !!s, f, b),
							s && s.stream.emitOne(b);
					}
					async $reportResponseDone(f, b) {
						const s = this.d.get(f);
						if ((this.h.trace("[LM] report response DONE", !!s, f, b), s))
							if ((this.d.delete(f), b)) {
								const l = (0, i.$7)(b);
								s.stream.reject(l), s.defer.error(l);
							} else s.stream.resolve(), s.defer.complete(void 0);
					}
					$unregisterProvider(f) {
						this.c.deleteAndDispose(f);
					}
					$selectChatModels(f) {
						return this.f.selectLanguageModels(f);
					}
					$whenLanguageModelChatRequestMade(f, b, s, l) {
						this.g.update(f, b, s, l);
					}
					async $tryStartChatRequest(f, b, s, l, y, $) {
						this.h.trace("[CHAT] request STARTED", f.value, s);
						const v = await this.f.sendChatRequest(b, f, l, y, $),
							S = (async () => {
								try {
									for await (const I of v.stream)
										this.h.trace("[CHAT] request PART", f.value, s, I),
											await this.a.$acceptResponsePart(s, I);
									this.h.trace("[CHAT] request DONE", f.value, s);
								} catch (I) {
									this.h.error(
										"[CHAT] extension request ERRORED in STREAM",
										I,
										f.value,
										s,
									),
										this.a.$acceptResponseDone(s, (0, i.$6)(I));
								}
							})();
						Promise.allSettled([v.result, S]).then(
							() => {
								this.h.debug("[CHAT] extension request DONE", f.value, s),
									this.a.$acceptResponseDone(s, void 0);
							},
							(I) => {
								this.h.error("[CHAT] extension request ERRORED", I, f.value, s),
									this.a.$acceptResponseDone(s, (0, i.$6)(I));
							},
						);
					}
					$countTokens(f, b, s) {
						return this.f.computeTokenLength(f, b, s);
					}
					l(f, b) {
						const s = h.$07 + f.value;
						if (this.i.getProviderIds().includes(s)) return E.$1c.None;
						const l = b.accountLabel ?? (0, C.localize)(2571, null),
							y = new E.$Zc();
						return (
							this.i.registerAuthenticationProvider(
								s,
								new p(s, b.providerLabel, l),
							),
							y.add(
								(0, E.$Yc)(() => {
									this.i.unregisterAuthenticationProvider(s);
								}),
							),
							y.add(
								this.j.onDidChangeExtensionSessionAccess(async ($) => {
									const v = this.j.readAllowedExtensions(s, l),
										S = [];
									for (const I of v) {
										const T = await this.k.getExtension(I.id);
										T &&
											S.push({
												from: T.identifier,
												to: f,
												enabled: I.allowed ?? !0,
											});
									}
									this.a.$updateModelAccesslist(S);
								}),
							),
							y
						);
					}
				};
				(e.$Amc = g),
					(e.$Amc = g =
						Ne(
							[
								(0, c.$tmc)(m.$lbb.MainThreadLanguageModels),
								j(1, u.$A2),
								j(2, r.$ymc),
								j(3, d.$ik),
								j(4, h.$$7),
								j(5, a.$dsb),
								j(6, n.$q2),
							],
							g,
						));
				class p {
					constructor(f, b, s) {
						(this.id = f),
							(this.label = b),
							(this.c = s),
							(this.supportsMultipleAccounts = !1),
							(this.a = new w.$re()),
							(this.onDidChangeSessions = this.a.event);
					}
					async getSessions(f) {
						return f === void 0 && !this.b
							? []
							: this.b
								? [this.b]
								: [await this.createSession(f || [])];
					}
					async createSession(f) {
						return (
							(this.b = this.d(f)),
							this.a.fire({ added: [this.b], changed: [], removed: [] }),
							this.b
						);
					}
					removeSession(f) {
						return (
							this.b &&
								(this.a.fire({ added: [], changed: [], removed: [this.b] }),
								(this.b = void 0)),
							Promise.resolve()
						);
					}
					d(f) {
						return {
							id: "fake-session",
							account: { id: this.id, label: this.c },
							accessToken: "fake-access-token",
							scopes: f,
						};
					}
				}
			},
		),
		define(
			de[3356],
			he([1, 0, 88, 101, 9, 22, 3, 672]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vmc = void 0);
				let m = class extends C.$1c {
					constructor(u, a, h) {
						super(), (this.a = a), (this.b = h);
					}
					async $fetchBuiltInBundleUri(u, a) {
						try {
							return await this.b.getBuiltInExtensionTranslationsUri(u, a);
						} catch {
							return;
						}
					}
					async $fetchBundleContents(u) {
						return (await this.a.readFile(w.URI.revive(u))).value.toString();
					}
				};
				(e.$vmc = m),
					(e.$vmc = m =
						Ne(
							[
								(0, i.$tmc)(t.$lbb.MainThreadLocalization),
								j(1, E.$ll),
								j(2, d.$FJ),
							],
							m,
						));
			},
		),
		define(
			de[3357],
			he([1, 0, 101, 34, 3, 88, 9, 31, 113]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0nc = void 0);
				let r = class {
					constructor(a, h) {
						(this.b = h), (this.a = new w.$Zc());
						const c = a.getProxy(E.$mbb.ExtHostLogLevelServiceShape);
						this.a.add(
							h.onDidChangeLogLevel((n) => {
								(0, i.$kk)(n) ? c.$setLogLevel(n) : c.$setLogLevel(n[1], n[0]);
							}),
						);
					}
					$log(a, h) {
						const c = this.b.getLogger(C.URI.revive(a));
						if (!c) throw new Error("Create the logger before logging");
						for (const [n, g] of h) (0, i.log)(c, n, g);
					}
					async $createLogger(a, h) {
						this.b.createLogger(C.URI.revive(a), h);
					}
					async $registerLogger(a) {
						this.b.registerLogger({ ...a, resource: C.URI.revive(a.resource) });
					}
					async $deregisterLogger(a) {
						this.b.deregisterLogger(C.URI.revive(a));
					}
					async $setVisibility(a, h) {
						this.b.setVisibility(C.URI.revive(a), h);
					}
					$flush(a) {
						const h = this.b.getLogger(C.URI.revive(a));
						if (!h) throw new Error("Create the logger before flushing");
						h.flush();
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$0nc = r),
					(e.$0nc = r =
						Ne([(0, t.$tmc)(E.$lbb.MainThreadLogger), j(1, i.$jk)], r)),
					d.$fk.registerCommand("_extensionTests.setLogLevel", function (u, a) {
						const h = u.get(i.$jk),
							c = u.get(m.$Ti);
						if (c.isExtensionDevelopment && c.extensionTestsLocationURI) {
							const n = (0, i.$zk)(a);
							n !== void 0 && h.setLogLevel(n);
						}
					}),
					d.$fk.registerCommand("_extensionTests.getLogLevel", function (u) {
						const a = u.get(i.$ik);
						return (0, i.$xk)(a.getLevel());
					});
			},
		),
		define(
			de[3358],
			he([1, 0, 6, 3, 760, 2784, 211, 773, 88, 101]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eoc = e.$doc = void 0);
				let u = class extends i.$1c {
					constructor(c, n) {
						super(),
							(this.f = n),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.a = c.getProxy(m.$mbb.ExtHostManagedSockets));
					}
					async $registerSocketFactory(c) {
						const n = this,
							g = new (class {
								supports(p) {
									return p.id === c;
								}
								connect(p, o, f, b) {
									return new Promise((s, l) => {
										if (p.id !== c) return l(new Error("Invalid connectTo"));
										const y = p.id;
										n.a
											.$openRemoteSocket(y)
											.then(($) => {
												const v = {
													onClose: new t.$re(),
													onData: new t.$re(),
													onEnd: new t.$re(),
												};
												n.c.set($, v),
													a.connect($, n.a, o, f, b, v).then(
														(S) => {
															S.onDidDispose(() => n.c.delete($)), s(S);
														},
														(S) => {
															n.c.delete($), l(S);
														},
													);
											})
											.catch(l);
									});
								}
							})();
						this.b.set(c, this.f.register(C.RemoteConnectionType.Managed, g));
					}
					async $unregisterSocketFactory(c) {
						this.b.get(c)?.dispose();
					}
					$onDidManagedSocketHaveData(c, n) {
						this.c.get(c)?.onData.fire(n);
					}
					$onDidManagedSocketClose(c, n) {
						this.c
							.get(c)
							?.onClose.fire({
								type: w.SocketCloseEventType.NodeSocketCloseEvent,
								error: n ? new Error(n) : void 0,
								hadError: !!n,
							}),
							this.c.delete(c);
					}
					$onDidManagedSocketEnd(c) {
						this.c.get(c)?.onEnd.fire();
					}
				};
				(e.$doc = u),
					(e.$doc = u =
						Ne([(0, r.$tmc)(m.$lbb.MainThreadManagedSockets), j(1, d.$8l)], u));
				class a extends E.$coc {
					static connect(c, n, g, p, o, f) {
						const b = new a(c, n, o, f);
						return (0, E.$boc)(b, g, p, o, f);
					}
					constructor(c, n, g, p) {
						super(g, p), (this.c = c), (this.j = n);
					}
					write(c) {
						this.j.$remoteSocketWrite(this.c, c);
					}
					h() {
						this.j.$remoteSocketEnd(this.c);
					}
					drain() {
						return this.j.$remoteSocketDrain(this.c);
					}
				}
				e.$eoc = a;
			},
		),
		define(
			de[3359],
			he([1, 0, 4, 50, 88, 101, 57, 40, 6, 31, 45, 53]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$nc = void 0),
					(t = mt(t));
				let h = class {
					constructor(n, g, p, o, f, b) {
						(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.f = b),
							(this.a = f.onDidChangeExtensions((s) => {
								for (const l of s.removed)
									this.b.removeFilter(l.identifier.value);
							}));
					}
					dispose() {
						this.a.dispose();
					}
					$showMessage(n, g, p, o) {
						return p.modal
							? this.h(n, g, p.detail, o, p.useCustom)
							: this.g(n, g, o, p);
					}
					g(n, g, p, o) {
						return new Promise((f) => {
							const b = p.map(($) =>
								(0, i.$wj)({
									id: `_extension_message_handle_${$.handle}`,
									label: $.title,
									enabled: !0,
									run: () => (f($.handle), Promise.resolve()),
								}),
							);
							let s;
							o.source &&
								(s = { label: o.source.label, id: o.source.identifier.value }),
								s || (s = t.localize(2572, null));
							const l = [];
							o.source &&
								l.push(
									(0, i.$wj)({
										id: o.source.identifier.value,
										label: t.localize(2573, null),
										run: () =>
											this.c.executeCommand(
												"_extensions.manage",
												o.source.identifier.value,
											),
									}),
								);
							const y = this.b.notify({
								severity: n,
								message: g,
								actions: { primary: b, secondary: l },
								source: s,
							});
							m.Event.once(y.onDidClose)(() => {
								f(void 0);
							});
						});
					}
					async h(n, g, p, o, f) {
						const b = [];
						let s;
						for (const y of o) {
							const $ = { label: y.title, run: () => y.handle };
							y.isCloseAffordance ? (s = $) : b.push($);
						}
						s ||
							(b.length > 0
								? (s = { label: t.localize(2574, null), run: () => {} })
								: (s = { label: t.localize(2575, null), run: () => {} }));
						const { result: l } = await this.d.prompt({
							type: n,
							message: g,
							detail: p,
							buttons: b,
							cancelButton: s,
							custom: f,
						});
						return l;
					}
				};
				(e.$$nc = h),
					(e.$$nc = h =
						Ne(
							[
								(0, E.$tmc)(w.$lbb.MainThreadMessageService),
								j(1, d.$4N),
								j(2, r.$ek),
								j(3, C.$GO),
								j(4, a.$q2),
								j(5, u.$0zb),
							],
							h,
						));
			},
		),
		define(
			de[3360],
			he([1, 0, 3, 88, 101, 1255]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hpc = void 0);
				let C = class extends t.$1c {
					constructor(m, r) {
						super(),
							(this.b = r),
							(this.a = m.getProxy(i.$mbb.ExtHostNotebookRenderers)),
							this.D(
								r.onShouldPostMessage((u) => {
									this.a.$postRendererMessage(
										u.editorId,
										u.rendererId,
										u.message,
									);
								}),
							);
					}
					$postMessage(m, r, u) {
						return this.b.receiveMessage(m, r, u);
					}
				};
				(e.$Hpc = C),
					(e.$Hpc = C =
						Ne(
							[(0, w.$tmc)(i.$lbb.MainThreadNotebookRenderers), j(1, E.$Q2b)],
							C,
						));
			},
		),
		define(
			de[3361],
			he([1, 0, 84, 88, 101, 50, 31, 4]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$goc = void 0);
				class m extends E.$rj {
					constructor(a, h, c) {
						super(a, h, void 0, !0, () =>
							c.executeCommand("_extensions.manage", a),
						);
					}
				}
				let r = class {
					constructor(a, h, c) {
						(this.d = c),
							(this.b = new Map()),
							(this.c = a.getProxy(i.$mbb.ExtHostProgress)),
							(this.a = h);
					}
					dispose() {
						this.b.forEach((a) => a.resolve()), this.b.clear();
					}
					async $startProgress(a, h, c) {
						const n = this.e(a);
						h.location === t.ProgressLocation.Notification &&
							c &&
							(h = {
								...h,
								location: t.ProgressLocation.Notification,
								secondaryActions: [
									new m(c, (0, d.localize)(2577, null), this.d),
								],
							}),
							this.a.withProgress(h, n, () =>
								this.c.$acceptProgressCanceled(a),
							);
					}
					$progressReport(a, h) {
						this.b.get(a)?.progress.report(h);
					}
					$progressEnd(a) {
						const h = this.b.get(a);
						h && (h.resolve(), this.b.delete(a));
					}
					e(a) {
						return (h) =>
							new Promise((c) => {
								this.b.set(a, { resolve: c, progress: h });
							});
					}
				};
				(e.$goc = r),
					(e.$goc = r =
						Ne(
							[
								(0, w.$tmc)(i.$lbb.MainThreadProgress),
								j(1, t.$8N),
								j(2, C.$ek),
							],
							r,
						));
			},
		),
		define(
			de[3362],
			he([1, 0, 33, 3, 9, 88, 803, 101]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hoc = void 0);
				let m = class {
					constructor(u, a) {
						(this.c = a),
							(this.b = new i.$0c()),
							(this.a = u.getProxy(E.$mbb.ExtHostQuickDiff));
					}
					async $registerQuickDiffProvider(u, a, h, c) {
						const n = {
								label: h,
								rootUri: w.URI.revive(c),
								selector: a,
								isSCM: !1,
								getOriginalResource: async (p) =>
									w.URI.revive(
										await this.a.$provideOriginalResource(
											u,
											p,
											t.CancellationToken.None,
										),
									),
							},
							g = this.c.addQuickDiffProvider(n);
						this.b.set(u, g);
					}
					async $unregisterQuickDiffProvider(u) {
						this.b.has(u) && this.b.deleteAndDispose(u);
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$hoc = m),
					(e.$hoc = m =
						Ne([(0, d.$tmc)(E.$lbb.MainThreadQuickDiff), j(1, C.$8mc)], m));
			},
		),
		define(
			de[3363],
			he([1, 0, 63, 88, 101, 9, 3]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ioc = void 0);
				function d(r) {
					(r.dark = E.URI.revive(r.dark)),
						r.light && (r.light = E.URI.revive(r.light));
				}
				let m = class {
					constructor(u, a) {
						(this.c = {}),
							(this.d = new Map()),
							(this.a = u.getProxy(i.$mbb.ExtHostQuickOpen)),
							(this.b = a);
					}
					dispose() {
						for (const [u, a] of this.d) a.store.dispose();
					}
					$show(u, a, h) {
						const c = new Promise((n, g) => {
							this.c[u] = { resolve: n, reject: g };
						});
						return (
							(a = {
								...a,
								onDidFocus: (n) => {
									n && this.a.$onItemSelected(n.handle);
								},
							}),
							a.canPickMany
								? this.b.pick(c, a, h).then((n) => {
										if (n) return n.map((g) => g.handle);
									})
								: this.b.pick(c, a, h).then((n) => {
										if (n) return n.handle;
									})
						);
					}
					$setItems(u, a) {
						return (
							this.c[u] && (this.c[u].resolve(a), delete this.c[u]),
							Promise.resolve()
						);
					}
					$setError(u, a) {
						return (
							this.c[u] && (this.c[u].reject(a), delete this.c[u]),
							Promise.resolve()
						);
					}
					$input(u, a, h) {
						const c = Object.create(null);
						return (
							u &&
								((c.title = u.title),
								(c.password = u.password),
								(c.placeHolder = u.placeHolder),
								(c.valueSelection = u.valueSelection),
								(c.prompt = u.prompt),
								(c.value = u.value),
								(c.ignoreFocusLost = u.ignoreFocusOut)),
							a && (c.validateInput = (n) => this.a.$validateInput(n)),
							this.b.input(c, h)
						);
					}
					$createOrUpdate(u) {
						const a = u.id;
						let h = this.d.get(a);
						if (!h) {
							const g = new C.$Zc(),
								p =
									u.type === "quickPick"
										? this.b.createQuickPick()
										: this.b.createInputBox();
							if (
								(g.add(p),
								g.add(
									p.onDidAccept(() => {
										this.a.$onDidAccept(a);
									}),
								),
								g.add(
									p.onDidTriggerButton((o) => {
										this.a.$onDidTriggerButton(a, o.handle);
									}),
								),
								g.add(
									p.onDidChangeValue((o) => {
										this.a.$onDidChangeValue(a, o);
									}),
								),
								g.add(
									p.onDidHide(() => {
										this.a.$onDidHide(a);
									}),
								),
								u.type === "quickPick")
							) {
								const o = p;
								g.add(
									o.onDidChangeActive((f) => {
										this.a.$onDidChangeActive(
											a,
											f.map((b) => b.handle),
										);
									}),
								),
									g.add(
										o.onDidChangeSelection((f) => {
											this.a.$onDidChangeSelection(
												a,
												f.map((b) => b.handle),
											);
										}),
									),
									g.add(
										o.onDidTriggerItemButton((f) => {
											this.a.$onDidTriggerItemButton(
												a,
												f.item.handle,
												f.button.handle,
											);
										}),
									);
							}
							(h = { input: p, handlesToItems: new Map(), store: g }),
								this.d.set(a, h);
						}
						const { input: c, handlesToItems: n } = h;
						for (const g in u)
							g === "id" ||
								g === "type" ||
								(g === "visible"
									? u.visible
										? c.show()
										: c.hide()
									: g === "items"
										? (n.clear(),
											u[g].forEach((p) => {
												p.type !== "separator" &&
													(p.buttons &&
														(p.buttons = p.buttons.map(
															(o) => (o.iconPath && d(o.iconPath), o),
														)),
													n.set(p.handle, p));
											}),
											(c[g] = u[g]))
										: g === "activeItems" || g === "selectedItems"
											? (c[g] = u[g]
													.filter((p) => n.has(p))
													.map((p) => n.get(p)))
											: g === "buttons"
												? (c[g] = u.buttons.map((p) =>
														p.handle === -1
															? this.b.backButton
															: (p.iconPath && d(p.iconPath), p),
													))
												: (c[g] = u[g]));
						return Promise.resolve(void 0);
					}
					$dispose(u) {
						const a = this.d.get(u);
						return (
							a && (a.store.dispose(), this.d.delete(u)),
							Promise.resolve(void 0)
						);
					}
				};
				(e.$ioc = m),
					(e.$ioc = m =
						Ne([(0, w.$tmc)(i.$lbb.MainThreadQuickOpen), j(1, t.$DJ)], m));
			},
		),
		define(
			de[3364],
			he([1, 0, 101, 88, 211, 3, 78]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$joc = void 0);
				let d = class extends E.$1c {
					constructor(r, u, a) {
						super(),
							(this.b = u),
							(this.a = r.getProxy(i.$mbb.ExtHostExtensionService));
						const h = this.b.remoteAuthority;
						h &&
							this.D(
								a.onDidChangeConnectionData(() => {
									const c = a.getConnectionData(h);
									c && this.a.$updateRemoteConnectionData(c);
								}),
							);
					}
				};
				(e.$joc = d), (e.$joc = d = Ne([t.$umc, j(1, C.$r8), j(2, w.$3l)], d));
			},
		),
		define(
			de[3365],
			he([1, 0, 3, 101, 88, 34, 15, 783, 286]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nqc = void 0);
				let r = class extends t.$1c {
					constructor(a, h, c, n) {
						super(),
							(this.c = h),
							(this.f = c),
							(this.b = new C.$Ih()),
							(this.a = a.getProxy(w.$mbb.ExtHostSecretState)),
							this.D(
								this.c.onDidChangeSecret((g) => {
									try {
										const { extensionId: p, key: o } = this.n(g);
										p &&
											o &&
											this.a.$onDidChangePassword({ extensionId: p, key: o });
									} catch {}
								}),
							);
					}
					$getPassword(a, h) {
						return (
							this.f.trace(
								`[mainThreadSecretState] Getting password for ${a} extension: `,
								h,
							),
							this.b.queue(a, () => this.g(a, h))
						);
					}
					async g(a, h) {
						const c = this.m(a, h),
							n = await this.c.get(c);
						return (
							this.f.trace(
								`[mainThreadSecretState] ${n ? "P" : "No p"}assword found for: `,
								a,
								h,
							),
							n
						);
					}
					$setPassword(a, h, c) {
						return (
							this.f.trace(
								`[mainThreadSecretState] Setting password for ${a} extension: `,
								h,
							),
							this.b.queue(a, () => this.h(a, h, c))
						);
					}
					async h(a, h, c) {
						const n = this.m(a, h);
						await this.c.set(n, c),
							this.f.trace("[mainThreadSecretState] Password set for: ", a, h);
					}
					$deletePassword(a, h) {
						return (
							this.f.trace(
								`[mainThreadSecretState] Deleting password for ${a} extension: `,
								h,
							),
							this.b.queue(a, () => this.j(a, h))
						);
					}
					async j(a, h) {
						const c = this.m(a, h);
						await this.c.delete(c),
							this.f.trace(
								"[mainThreadSecretState] Password deleted for: ",
								a,
								h,
							);
					}
					m(a, h) {
						return JSON.stringify({ extensionId: a, key: h });
					}
					n(a) {
						return JSON.parse(a);
					}
				};
				(e.$Nqc = r),
					(e.$Nqc = r =
						Ne(
							[
								(0, i.$tmc)(w.$lbb.MainThreadSecretState),
								j(1, d.$Yrb),
								j(2, E.$ik),
								j(3, m.$5rb),
							],
							r,
						));
			},
		),
		define(
			de[3366],
			he([1, 0, 33, 3, 9, 88, 1751, 101]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pqc = void 0);
				let m = class {
					constructor(u, a) {
						(this.d = a),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.a = u.getProxy(E.$mbb.ExtHostShare));
					}
					$registerShareProvider(u, a, h, c, n) {
						const g = {
							id: h,
							label: c,
							selector: a,
							priority: n,
							provideShare: async (o) => {
								const f = await this.a.$provideShare(
									u,
									o,
									t.CancellationToken.None,
								);
								return typeof f == "string" ? f : w.URI.revive(f);
							},
						};
						this.b.set(u, g);
						const p = this.d.registerShareProvider(g);
						this.c.set(u, p);
					}
					$unregisterShareProvider(u) {
						this.b.has(u) && this.b.delete(u),
							this.c.has(u) && this.c.delete(u);
					}
					dispose() {
						this.b.clear(), (0, i.$Vc)(this.c.values()), this.c.clear();
					}
				};
				(e.$Pqc = m),
					(e.$Pqc = m =
						Ne([(0, d.$tmc)(E.$lbb.MainThreadShare), j(1, C.$Oqc)], m));
			},
		),
		define(
			de[3367],
			he([1, 0, 15, 6, 3, 34, 88, 511, 101]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$loc = void 0);
				let r = class {
					constructor(a, h, c) {
						(this.g = h),
							(this.h = c),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new Map()),
							(this.a = a.getProxy(C.$mbb.ExtHostSpeech));
					}
					$registerProvider(a, h, c) {
						this.h.trace(
							"[Speech] extension registered provider",
							c.extension.value,
						);
						const n = this.g.registerSpeechProvider(h, {
							metadata: c,
							createSpeechToTextSession: (g, p) => {
								if (g.isCancellationRequested)
									return { onDidChange: i.Event.None };
								const o = new w.$Zc(),
									f = Math.random();
								this.a.$createSpeechToTextSession(a, f, p?.language);
								const b = o.add(new i.$re());
								return (
									this.c.set(f, { onDidChange: b }),
									o.add(
										g.onCancellationRequested(() => {
											this.a.$cancelSpeechToTextSession(f),
												this.c.delete(f),
												o.dispose();
										}),
									),
									{ onDidChange: b.event }
								);
							},
							createTextToSpeechSession: (g, p) => {
								if (g.isCancellationRequested)
									return {
										onDidChange: i.Event.None,
										synthesize: async () => {},
									};
								const o = new w.$Zc(),
									f = Math.random();
								this.a.$createTextToSpeechSession(a, f, p?.language);
								const b = o.add(new i.$re());
								return (
									this.d.set(f, { onDidChange: b }),
									o.add(
										g.onCancellationRequested(() => {
											this.a.$cancelTextToSpeechSession(f),
												this.d.delete(f),
												o.dispose();
										}),
									),
									{
										onDidChange: b.event,
										synthesize: async (s) => {
											await this.a.$synthesizeSpeech(f, s),
												await (0, t.$Ah)(
													i.Event.toPromise(
														i.Event.filter(
															b.event,
															(l) => l.status === d.TextToSpeechStatus.Stopped,
														),
													),
													g,
												);
										},
									}
								);
							},
							createKeywordRecognitionSession: (g) => {
								if (g.isCancellationRequested)
									return { onDidChange: i.Event.None };
								const p = new w.$Zc(),
									o = Math.random();
								this.a.$createKeywordRecognitionSession(a, o);
								const f = p.add(new i.$re());
								return (
									this.f.set(o, { onDidChange: f }),
									p.add(
										g.onCancellationRequested(() => {
											this.a.$cancelKeywordRecognitionSession(o),
												this.f.delete(o),
												p.dispose();
										}),
									),
									{ onDidChange: f.event }
								);
							},
						});
						this.b.set(a, {
							dispose: () => {
								n.dispose();
							},
						});
					}
					$unregisterProvider(a) {
						const h = this.b.get(a);
						h && (h.dispose(), this.b.delete(a));
					}
					$emitSpeechToTextEvent(a, h) {
						this.c.get(a)?.onDidChange.fire(h);
					}
					$emitTextToSpeechEvent(a, h) {
						this.d.get(a)?.onDidChange.fire(h);
					}
					$emitKeywordRecognitionEvent(a, h) {
						this.f.get(a)?.onDidChange.fire(h);
					}
					dispose() {
						this.b.forEach((a) => a.dispose()),
							this.b.clear(),
							this.c.forEach((a) => a.onDidChange.dispose()),
							this.c.clear(),
							this.d.forEach((a) => a.onDidChange.dispose()),
							this.d.clear(),
							this.f.forEach((a) => a.onDidChange.dispose()),
							this.f.clear();
					}
				};
				(e.$loc = r),
					(e.$loc = r =
						Ne(
							[(0, m.$tmc)(C.$lbb.MainThreadSpeech), j(1, d.$V7), j(2, E.$ik)],
							r,
						));
			},
		),
		define(
			de[3368],
			he([1, 0, 21, 88, 101, 3, 12, 677, 3304, 5, 34]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$soc = void 0);
				let a = class {
					constructor(c, n, g, p, o) {
						(this.d = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.b = new E.$Zc()),
							(this.c = new Map()),
							(this.a = c.getProxy(i.$mbb.ExtHostStorage)),
							this.b.add(
								this.f.onDidChangeValue(
									t.StorageScope.PROFILE,
									void 0,
									this.b,
								)((f) => {
									if (this.c.has(f.key)) {
										const b = this.d.getExtensionStateRaw(f.key, !0);
										typeof b == "string" && this.a.$acceptValue(!0, f.key, b);
									}
								}),
							);
					}
					dispose() {
						this.b.dispose();
					}
					async $initializeExtensionStorage(c, n) {
						return (
							await this.i(n, c),
							c && this.c.set(n, !0),
							this.d.getExtensionStateRaw(n, c)
						);
					}
					async $setValue(c, n, g) {
						this.d.setExtensionState(n, g, c);
					}
					$registerExtensionStorageKeysToSync(c, n) {
						this.d.setKeysForSync(c, n);
					}
					async i(c, n) {
						try {
							let g = this.d.getSourceExtensionToMigrate(c);
							!g && C.$r && c !== c.toLowerCase() && (g = c.toLowerCase()),
								g &&
									(C.$r &&
										g !== g.toLowerCase() &&
										this.d.getExtensionState(g.toLowerCase(), n) &&
										!this.d.getExtensionState(g, n) &&
										(g = g.toLowerCase()),
									await (0, m.$roc)(g, c, n, this.g));
						} catch (g) {
							this.h.error(g);
						}
					}
				};
				(e.$soc = a),
					(e.$soc = a =
						Ne(
							[
								(0, w.$tmc)(i.$lbb.MainThreadStorage),
								j(1, d.$1N),
								j(2, t.$lq),
								j(3, r.$Li),
								j(4, u.$ik),
							],
							a,
						));
			},
		),
		define(
			de[3369],
			he([1, 0, 4, 9, 47, 28, 12, 3, 25, 424, 419, 101, 88, 358, 29]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1pc = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(C = mt(C));
				var g;
				(function (M) {
					function N(A) {
						return { id: A.id, task: P.from(A.task) };
					}
					M.from = N;
				})(g || (g = {}));
				var p;
				(function (M) {
					function N(A, R) {
						return { id: A.id, processId: R };
					}
					M.from = N;
				})(p || (p = {}));
				var o;
				(function (M) {
					function N(A, R) {
						return { id: A.id, exitCode: R };
					}
					M.from = N;
				})(o || (o = {}));
				var f;
				(function (M) {
					function N(R) {
						const O = Object.assign(Object.create(null), R);
						return delete O._key, O;
					}
					M.from = N;
					function A(R, O) {
						let B = r.TaskDefinition.createTaskIdentifier(R, console);
						return (
							B === void 0 &&
								O &&
								(B = { _key: (0, w.$9g)(), type: "$executeOnly" }),
							B
						);
					}
					M.to = A;
				})(f || (f = {}));
				var b;
				(function (M) {
					function N(R) {
						if (R != null) return Object.assign(Object.create(null), R);
					}
					M.from = N;
					function A(R) {
						return R == null
							? r.PresentationOptions.defaults
							: Object.assign(
									Object.create(null),
									r.PresentationOptions.defaults,
									R,
								);
					}
					M.to = A;
				})(b || (b = {}));
				var s;
				(function (M) {
					function N(R) {
						if (R != null) return Object.assign(Object.create(null), R);
					}
					M.from = N;
					function A(R) {
						return R == null
							? r.RunOptions.defaults
							: Object.assign(Object.create(null), r.RunOptions.defaults, R);
					}
					M.to = A;
				})(s || (s = {}));
				var l;
				(function (M) {
					function N(R) {
						if (R != null) return { cwd: R.cwd, env: R.env };
					}
					M.from = N;
					function A(R) {
						return R == null
							? r.CommandOptions.defaults
							: { cwd: R.cwd || r.CommandOptions.defaults.cwd, env: R.env };
					}
					M.to = A;
				})(l || (l = {}));
				var y;
				(function (M) {
					function N(O) {
						const B = O;
						return B && !!B.process;
					}
					M.is = N;
					function A(O) {
						const B = E.$lg(O.name) ? O.name : O.name.value,
							U = O.args ? O.args.map((F) => (E.$lg(F) ? F : F.value)) : [],
							z = { process: B, args: U };
						return O.options && (z.options = l.from(O.options)), z;
					}
					M.from = A;
					function R(O) {
						const B = {
							runtime: r.RuntimeType.Process,
							name: O.process,
							args: O.args,
							presentation: void 0,
						};
						return (B.options = l.to(O.options)), B;
					}
					M.to = R;
				})(y || (y = {}));
				var $;
				(function (M) {
					function N(R) {
						if (R == null) return;
						const O = {
							cwd: R.cwd || r.CommandOptions.defaults.cwd,
							env: R.env,
						};
						return (
							R.shell &&
								((O.executable = R.shell.executable),
								(O.shellArgs = R.shell.args),
								(O.shellQuoting = R.shell.quoting)),
							O
						);
					}
					M.from = N;
					function A(R) {
						if (R == null) return;
						const O = { cwd: R.cwd, env: R.env };
						return (
							R.executable &&
								((O.shell = { executable: R.executable }),
								R.shellArgs && (O.shell.args = R.shellArgs),
								R.shellQuoting && (O.shell.quoting = R.shellQuoting)),
							O
						);
					}
					M.to = A;
				})($ || ($ = {}));
				var v;
				(function (M) {
					function N(O) {
						const B = O;
						return B && (!!B.commandLine || !!B.command);
					}
					M.is = N;
					function A(O) {
						const B = {};
						return (
							O.name &&
							E.$lg(O.name) &&
							(O.args === void 0 || O.args === null || O.args.length === 0)
								? (B.commandLine = O.name)
								: ((B.command = O.name), (B.args = O.args)),
							O.options && (B.options = $.from(O.options)),
							B
						);
					}
					M.from = A;
					function R(O) {
						const B = {
							runtime: r.RuntimeType.Shell,
							name: O.commandLine ? O.commandLine : O.command,
							args: O.args,
							presentation: void 0,
						};
						return O.options && (B.options = $.to(O.options)), B;
					}
					M.to = R;
				})(v || (v = {}));
				var S;
				(function (M) {
					function N(O) {
						const B = O;
						return B && B.customExecution === "customExecution";
					}
					M.is = N;
					function A(O) {
						return { customExecution: "customExecution" };
					}
					M.from = A;
					function R(O) {
						return {
							runtime: r.RuntimeType.CustomExecution,
							presentation: void 0,
						};
					}
					M.to = R;
				})(S || (S = {}));
				var I;
				(function (M) {
					function N(R) {
						const O = { label: R.label };
						return (
							R.kind === r.TaskSourceKind.Extension
								? ((O.extensionId = R.extension),
									R.workspaceFolder
										? (O.scope = R.workspaceFolder.uri)
										: (O.scope = R.scope))
								: R.kind === r.TaskSourceKind.Workspace &&
									((O.extensionId = "$core"),
									(O.scope = R.config.workspaceFolder
										? R.config.workspaceFolder.uri
										: r.TaskScope.Global)),
							O
						);
					}
					M.from = N;
					function A(R, O) {
						let B, U;
						return (
							R.scope === void 0 ||
							(typeof R.scope == "number" && R.scope !== r.TaskScope.Global)
								? O.getWorkspace().folders.length === 0
									? ((B = r.TaskScope.Global), (U = void 0))
									: ((B = r.TaskScope.Folder),
										(U = O.getWorkspace().folders[0]))
								: typeof R.scope == "number"
									? (B = R.scope)
									: ((B = r.TaskScope.Folder),
										(U =
											O.getWorkspaceFolder(i.URI.revive(R.scope)) ?? void 0)),
							{
								kind: r.TaskSourceKind.Extension,
								label: R.label,
								extension: R.extensionId,
								scope: B,
								workspaceFolder: U,
							}
						);
					}
					M.to = A;
				})(I || (I = {}));
				var T;
				(function (M) {
					function N(A) {
						const R = A;
						return R && E.$lg(R.id) && !!R.workspaceFolder;
					}
					M.is = N;
				})(T || (T = {}));
				var P;
				(function (M) {
					function N(R) {
						if (R == null || (!r.$e4.is(R) && !r.$g4.is(R) && !r.$f4.is(R)))
							return;
						const O = {
							_id: R._id,
							name: R.configurationProperties.name,
							definition: f.from(R.getDefinition(!0)),
							source: I.from(R._source),
							execution: void 0,
							presentationOptions:
								!r.$f4.is(R) && R.command
									? b.from(R.command.presentation)
									: void 0,
							isBackground: R.configurationProperties.isBackground,
							problemMatchers: [],
							hasDefinedMatchers: r.$g4.is(R) ? R.hasDefinedMatchers : !1,
							runOptions: s.from(R.runOptions),
						};
						if (
							((O.group = k.from(R.configurationProperties.group)),
							R.configurationProperties.detail &&
								(O.detail = R.configurationProperties.detail),
							!r.$f4.is(R) && R.command)
						)
							switch (R.command.runtime) {
								case r.RuntimeType.Process:
									O.execution = y.from(R.command);
									break;
								case r.RuntimeType.Shell:
									O.execution = v.from(R.command);
									break;
								case r.RuntimeType.CustomExecution:
									O.execution = S.from(R.command);
									break;
							}
						if (R.configurationProperties.problemMatchers)
							for (const B of R.configurationProperties.problemMatchers)
								E.$lg(B) && O.problemMatchers.push(B);
						return O;
					}
					M.from = N;
					function A(R, O, B, U, z) {
						if (!R || typeof R.name != "string") return;
						let F;
						if (
							(R.execution &&
								(v.is(R.execution)
									? (F = v.to(R.execution))
									: y.is(R.execution)
										? (F = y.to(R.execution))
										: S.is(R.execution) && (F = S.to(R.execution))),
							!F)
						)
							return;
						F.presentation = b.to(R.presentationOptions);
						const x = I.to(R.source, O),
							H = t.localize(2579, null, x.label, R.name),
							q = f.to(R.definition, B),
							V =
								S.is(R.execution) && R._id
									? R._id
									: `${R.source.extensionId}.${q._key}`;
						return new r.$g4(
							V,
							x,
							H,
							q.type,
							q,
							F,
							R.hasDefinedMatchers,
							s.to(R.runOptions),
							{
								name: R.name,
								identifier: H,
								group: R.group,
								isBackground: !!R.isBackground,
								problemMatchers: R.problemMatchers.slice(),
								detail: R.detail,
								icon: U,
								hide: z,
							},
						);
					}
					M.to = A;
				})(P || (P = {}));
				var k;
				(function (M) {
					function N(A) {
						if (A !== void 0)
							return {
								_id: typeof A == "string" ? A : A._id,
								isDefault:
									typeof A == "string" || typeof A.isDefault == "string"
										? !1
										: A.isDefault,
							};
					}
					M.from = N;
				})(k || (k = {}));
				var L;
				(function (M) {
					function N(R) {
						return R;
					}
					M.from = N;
					function A(R) {
						return R;
					}
					M.to = A;
				})(L || (L = {}));
				let D = class extends d.$1c {
					constructor(N, A, R, O) {
						super(),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.b = N.getProxy(h.$mbb.ExtHostTask)),
							(this.c = new Map()),
							this.D(
								this.f.onDidStateChange(async (B) => {
									if (B.kind === r.TaskEventKind.Changed) return;
									const U = B.__task;
									if (B.kind === r.TaskEventKind.Start) {
										const z = g.from(U.getTaskExecution());
										let F = z.task.definition;
										if (
											z.task?.execution &&
											S.is(z.task.execution) &&
											B.resolvedVariables
										) {
											const x = {};
											for (const [H, q] of B.resolvedVariables.entries())
												x[H] = q;
											F = await this.h.resolveAnyAsync(
												U.getWorkspaceFolder(),
												z.task.definition,
												x,
											);
										}
										this.b.$onDidStartTask(z, B.terminalId, F);
									} else
										B.kind === r.TaskEventKind.ProcessStarted
											? this.b.$onDidStartTaskProcess(
													p.from(U.getTaskExecution(), B.processId),
												)
											: B.kind === r.TaskEventKind.ProcessEnded
												? this.b.$onDidEndTaskProcess(
														o.from(U.getTaskExecution(), B.exitCode),
													)
												: B.kind === r.TaskEventKind.End &&
													this.b.$OnDidEndTask(g.from(U.getTaskExecution()));
								}),
							);
					}
					dispose() {
						for (const N of this.c.values()) N.disposable.dispose();
						this.c.clear(), super.dispose();
					}
					$createTaskId(N) {
						return new Promise((A, R) => {
							const O = P.to(N, this.g, !0);
							O ? A(O._id) : R(new Error("Task could not be created from DTO"));
						});
					}
					$registerTaskProvider(N, A) {
						const R = {
								provideTasks: (B) =>
									Promise.resolve(this.b.$provideTasks(N, B)).then((U) => {
										const z = [];
										for (const F of U.tasks) {
											const x = P.to(F, this.g, !0);
											x
												? z.push(x)
												: console.error(
														`Task System: can not convert task: ${JSON.stringify(F.definition, void 0, 0)}. Task will be dropped`,
													);
										}
										return { tasks: z, extension: U.extension };
									}),
								resolveTask: (B) => {
									const U = P.from(B);
									return U
										? ((U.name = U.name === void 0 ? "" : U.name),
											Promise.resolve(this.b.$resolveTask(N, U)).then((z) => {
												if (z)
													return P.to(
														z,
														this.g,
														!0,
														B.configurationProperties.icon,
														B.configurationProperties.hide,
													);
											}))
										: Promise.resolve(void 0);
								},
							},
							O = this.f.registerTaskProvider(R, A);
						return (
							this.c.set(N, { disposable: O, provider: R }),
							Promise.resolve(void 0)
						);
					}
					$unregisterTaskProvider(N) {
						const A = this.c.get(N);
						return (
							A && (A.disposable.dispose(), this.c.delete(N)),
							Promise.resolve(void 0)
						);
					}
					$fetchTasks(N) {
						return this.f.tasks(L.to(N)).then((A) => {
							const R = [];
							for (const O of A) {
								const B = P.from(O);
								B && R.push(B);
							}
							return R;
						});
					}
					j(N) {
						let A;
						if (typeof N == "string") A = N;
						else {
							const R = this.g.getWorkspace(),
								O = i.URI.revive(N);
							R.configuration?.toString() === O.toString()
								? (A = R)
								: (A = this.g.getWorkspaceFolder(O));
						}
						return A;
					}
					async $getTaskExecution(N) {
						if (T.is(N)) {
							const A = this.j(N.workspaceFolder);
							if (A) {
								const R = await this.f.getTask(A, N.id, !0);
								if (R) return { id: R._id, task: P.from(R) };
								throw new Error("Task not found");
							} else throw new Error("No workspace folder");
						} else {
							const A = P.to(N, this.g, !0);
							return { id: A._id, task: P.from(A) };
						}
					}
					$executeTask(N) {
						return new Promise((A, R) => {
							if (T.is(N)) {
								const O = this.j(N.workspaceFolder);
								O
									? this.f.getTask(O, N.id, !0).then(
											(B) => {
												if (!B) R(new Error("Task not found"));
												else {
													const U = { id: N.id, task: P.from(B) };
													this.f.run(B).then(
														(z) => {
															(z?.exitCode === void 0 || z.exitCode !== 0) &&
																this.b.$OnDidEndTask(U);
														},
														(z) => {},
													),
														A(U);
												}
											},
											(B) => {
												R(new Error("Task not found"));
											},
										)
									: R(new Error("No workspace folder"));
							} else {
								const O = P.to(N, this.g, !0);
								this.f.run(O).then(void 0, (U) => {});
								const B = { id: O._id, task: P.from(O) };
								A(B);
							}
						});
					}
					$customExecutionComplete(N, A) {
						return new Promise((R, O) => {
							this.f.getActiveTasks().then((B) => {
								for (const U of B)
									if (N === U._id) {
										this.f.extensionCallbackTaskComplete(U, A).then(
											(z) => {
												R(void 0);
											},
											(z) => {
												O(z);
											},
										);
										return;
									}
								O(new Error("Task to mark as complete not found"));
							});
						});
					}
					$terminateTask(N) {
						return new Promise((A, R) => {
							this.f.getActiveTasks().then((O) => {
								for (const B of O)
									if (N === B._id) {
										this.f.terminate(B).then(
											(U) => {
												A(void 0);
											},
											(U) => {
												R(void 0);
											},
										);
										return;
									}
								R(new n.$fb("Task to terminate not found"));
							});
						});
					}
					$registerTaskSystem(N, A) {
						let R;
						switch (A.platform) {
							case "Web":
								R = C.Platform.Web;
								break;
							case "win32":
								R = C.Platform.Windows;
								break;
							case "darwin":
								R = C.Platform.Mac;
								break;
							case "linux":
								R = C.Platform.Linux;
								break;
							default:
								R = C.$x;
						}
						this.f.registerTaskSystem(N, {
							platform: R,
							uriProvider: (O) =>
								i.URI.from({
									scheme: A.scheme,
									authority: A.authority,
									path: O,
								}),
							context: this.a,
							resolveVariables: (O, B, U) => {
								const z = [];
								return (
									B.variables.forEach((F) => z.push(F)),
									Promise.resolve(
										this.b.$resolveVariables(O.uri, {
											process: B.process,
											variables: z,
										}),
									).then((F) => {
										const x = Array.from(Object.values(F.variables));
										return new Promise((H, q) => {
											this.h
												.resolveWithInteraction(O, x, "tasks", void 0, U)
												.then(
													(V) => {
														V || H(void 0);
														const G = { process: void 0, variables: new Map() };
														for (let K = 0; K < x.length; K++) {
															const J = z[K].substring(2, z[K].length - 1);
															if (V && F.variables[z[K]] === z[K]) {
																const W = V.get(J);
																typeof W == "string" && G.variables.set(J, W);
															} else G.variables.set(J, x[K]);
														}
														E.$lg(F.process) && (G.process = F.process), H(G);
													},
													(V) => {
														q(V);
													},
												);
										});
									})
								);
							},
							findExecutable: (O, B, U) => this.b.$findExecutable(O, B, U),
						});
					}
					async $registerSupportedExecutions(N, A, R) {
						return this.f.registerSupportedExecutions(N, A, R);
					}
				};
				(e.$1pc = D),
					(e.$1pc = D =
						Ne(
							[
								(0, a.$tmc)(h.$lbb.MainThreadTask),
								j(1, u.$Zpc),
								j(2, m.$Vi),
								j(3, c.$zeb),
							],
							D,
						));
			},
		),
		define(
			de[3370],
			he([1, 0, 3, 10, 113, 62, 32, 269, 101, 88]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$toc = void 0);
				let a = class extends t.$1c {
					static {
						u = this;
					}
					static {
						this.b = "pluginHostTelemetry";
					}
					constructor(c, n, g, p, o) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.a = c.getProxy(r.$mbb.ExtHostTelemetry)),
							(0, d.$Xp)(this.h, this.g) &&
								this.D(
									this.f.onDidChangeConfiguration((f) => {
										(f.affectsConfiguration(C.$wm) ||
											f.affectsConfiguration(C.$ym)) &&
											this.a.$onDidChangeTelemetryLevel(this.j);
									}),
								),
							this.a.$initializeTelemetryLevel(
								this.j,
								(0, d.$Xp)(this.h, this.g),
								this.h.enabledTelemetryLevels,
							);
					}
					get j() {
						return (0, d.$Xp)(this.h, this.g)
							? this.c.telemetryLevel
							: C.TelemetryLevel.NONE;
					}
					$publicLog(c, n = Object.create(null)) {
						(n[u.b] = !0), this.c.publicLog(c, n);
					}
					$publicLog2(c, n) {
						this.$publicLog(c, n);
					}
				};
				(e.$toc = a),
					(e.$toc =
						a =
						u =
							Ne(
								[
									(0, m.$tmc)(r.$lbb.MainThreadTelemetry),
									j(1, C.$km),
									j(2, i.$gj),
									j(3, w.$Ti),
									j(4, E.$Bk),
								],
								a,
							));
			},
		),
		define(
			de[3371],
			he([
				1, 0, 6, 3, 77, 743, 9, 17, 68, 1e3, 259, 420, 421, 381, 379, 185, 101,
				88,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mqc = void 0);
				let f = class extends i.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.b = this.D(new i.$2c())),
							(this.c = new Map()),
							(this.a = s.getProxy(o.$mbb.ExtHostTesting)),
							this.D(
								this.g.registerExtHost({
									provideTestFollowups: (S, I) =>
										this.a.$provideTestFollowups(S, I),
									executeTestFollowup: (S) => this.a.$executeTestFollowup(S),
									disposeTestFollowups: (S) => this.a.$disposeTestFollowups(S),
									getTestsRelatedToCode: (S, I, T) =>
										this.a.$getTestsRelatedToCode(S, I, T),
								}),
							),
							this.D(
								this.g.onDidCancelTestRun(({ runId: S, taskId: I }) => {
									this.a.$cancelExtensionTestRun(S, I);
								}),
							),
							this.D(
								t.Event.debounce(
									$.onDidChange,
									(S, I) => I,
								)(() => {
									const S = {};
									for (const I of [
										g.TestRunProfileBitset.Run,
										g.TestRunProfileBitset.Debug,
										g.TestRunProfileBitset.Coverage,
									])
										for (const T of this.h.getGroupDefaultProfiles(I))
											(S[T.controllerId] ??= []),
												S[T.controllerId].push(T.profileId);
									this.a.$setDefaultRunProfiles(S);
								}),
							),
							this.D(
								v.onResultsChanged((S) => {
									if ("completed" in S) {
										const I = S.completed.toJSONWithMessages();
										I && this.a.$publishTestResults([I]);
									} else
										"removed" in S &&
											S.removed.forEach((I) => {
												I instanceof h.$O4 && this.a.$disposeRun(I.id);
											});
								}),
							);
					}
					$markTestRetired(s) {
						let l;
						if (s) {
							l = new E.$j4();
							for (const y of s) l.insert(u.$k4.fromString(y).path, void 0);
						}
						for (const y of this.j.results)
							y instanceof h.$O4 && y.markRetired(l);
					}
					$publishTestRunProfile(s) {
						const l = this.c.get(s.controllerId);
						l && this.h.addProfile(l.instance, s);
					}
					$updateTestRunConfig(s, l, y) {
						this.h.updateProfile(s, l, y);
					}
					$removeTestProfile(s, l) {
						this.h.removeProfile(s, l);
					}
					$addTestsToRun(s, l, y) {
						this.m(l, ($) =>
							$.addTestChainToRun(
								s,
								y.map((v) => g.ITestItem.deserialize(this.f, v)),
							),
						);
					}
					$appendCoverage(s, l, y) {
						this.m(s, ($) => {
							const v = $.tasks.find((I) => I.id === l);
							if (!v) return;
							const S = g.IFileCoverage.deserialize(this.f, y);
							(0, w.transaction)((I) => {
								let T = v.coverage.read(void 0);
								T
									? T.append(S, I)
									: ((T = new r.$E4($, l, this.f, {
											getCoverageDetails: (P, k, L) =>
												this.a
													.$getCoverageDetails(P, k, L)
													.then((D) => D.map(g.CoverageDetails.deserialize)),
										})),
										T.append(S, I),
										v.coverage.set(T, I));
							});
						});
					}
					$startedExtensionTestRun(s) {
						this.j.createLiveResult(s);
					}
					$startedTestRunTask(s, l) {
						this.m(s, (y) => y.addTask(l));
					}
					$finishedTestRunTask(s, l) {
						this.m(s, (y) => y.markTaskComplete(l));
					}
					$finishedExtensionTestRun(s) {
						this.m(s, (l) => l.markComplete());
					}
					$updateTestStateInRun(s, l, y, $, v) {
						this.m(s, (S) => S.updateState(y, l, $, v));
					}
					$appendOutputToRun(s, l, y, $, v) {
						const S = $ && {
							uri: C.URI.revive($.uri),
							range: d.$iL.lift($.range),
						};
						this.m(s, (I) => I.appendOutput(y, l, S, v));
					}
					$appendTestMessagesInRun(s, l, y, $) {
						const v = this.j.getResult(s);
						if (v && v instanceof h.$O4)
							for (const S of $)
								v.appendMessage(y, l, g.ITestMessage.deserialize(this.f, S));
					}
					$registerTestController(s, l, y) {
						const $ = new i.$Zc(),
							v = (0, w.observableValue)(`${s}.label`, l),
							S = (0, w.observableValue)(`${s}.cap`, y),
							I = {
								id: s,
								label: v,
								capabilities: S,
								syncTests: () => this.a.$syncTests(),
								refreshTests: (T) => this.a.$refreshTests(s, T),
								configureRunProfile: (T) => this.a.$configureRunProfile(s, T),
								runTests: (T, P) => this.a.$runControllerTests(T, P),
								startContinuousRun: (T, P) => this.a.$startContinuousRun(T, P),
								expandTest: (T, P) =>
									this.a.$expandTest(T, isFinite(P) ? P : -1),
								getRelatedCode: (T, P) =>
									this.a
										.$getCodeRelatedToTest(T, P)
										.then((k) =>
											k.map((L) => ({
												uri: C.URI.revive(L.uri),
												range: d.$iL.lift(L.range),
											})),
										),
							};
						$.add((0, i.$Yc)(() => this.h.removeProfile(s))),
							$.add(this.g.registerTestController(s, I)),
							this.c.set(s, {
								instance: I,
								label: v,
								capabilities: S,
								disposable: $,
							});
					}
					$updateController(s, l) {
						const y = this.c.get(s);
						y &&
							(0, w.transaction)(($) => {
								l.label !== void 0 && y.label.set(l.label, $),
									l.capabilities !== void 0 &&
										y.capabilities.set(l.capabilities, $);
							});
					}
					$unregisterTestController(s) {
						this.c.get(s)?.disposable.dispose(), this.c.delete(s);
					}
					$subscribeToDiffs() {
						this.a.$acceptDiff(
							this.g.collection.getReviverDiff().map(g.TestsDiffOp.serialize),
						),
							(this.b.value = this.g.onDidProcessDiff(
								this.a.$acceptDiff,
								this.a,
							));
					}
					$unsubscribeFromDiffs() {
						this.b.clear();
					}
					$publishDiff(s, l) {
						this.g.publishDiff(
							s,
							l.map((y) => g.TestsDiffOp.deserialize(this.f, y)),
						);
					}
					async $runTests(s, l) {
						return (await this.g.runResolvedTests(s, l)).id;
					}
					async $getCoverageDetails(s, l, y, $) {
						return (
							(await this.j
								.getResult(s)
								?.tasks[l]?.coverage.get()
								?.getUri(C.URI.from(y))
								?.details($)) || []
						);
					}
					dispose() {
						super.dispose();
						for (const s of this.c.values()) s.disposable.dispose();
						this.c.clear();
					}
					m(s, l) {
						const y = this.j.getResult(s);
						return y && y instanceof h.$O4 ? l(y) : void 0;
					}
				};
				(e.$Mqc = f),
					(e.$Mqc = f =
						Ne(
							[
								(0, p.$tmc)(o.$lbb.MainThreadTesting),
								j(1, m.$Vl),
								j(2, n.$sqc),
								j(3, a.$Bqc),
								j(4, c.$Kqc),
							],
							f,
						));
			},
		),
		