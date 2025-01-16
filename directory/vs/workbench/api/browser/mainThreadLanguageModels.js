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
		