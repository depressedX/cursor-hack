import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import './extHost.protocol.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/buffer.js';
import '../../../../proto/aiserver/v1/shadow_workspace_connectweb.js';
import '../../services/ai/common/connectRequestServiceTypes.js';
import '../../../base/common/asyncPromiseQueue.js';
import '../../../base/common/constants.js';
import '../../../../proto/aiserver/v1/utils_pb.js';
import '../../../platform/tracing/common/register.js';
define(
			Pe[543],
			Ne([1, 0, 4, 6, 3, 22, 251, 531, 437, 438, 28, 509]),
			function (we, t, e, r, S, N, P, I, l, n, p, y) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$shd = void 0);
				function d(c) {
					const h = [];
					for (const [T, a] of Object.entries(c))
						h.push(new p.$mt({ key: T, value: a }));
					return new p.$nt({ headers: h });
				}
				class k {
					async $updateCppSessionId(h) {
						this.S = h;
					}
					async $updateCppTelemEnabled(h) {
						this.U = h;
					}
					async $changePreferredEmbeddingModel(h) {
						this.w = h;
					}
					constructor(h, $) {
						(this.V = $),
							(this.b = new e.$re()),
							(this.onDidChangeCursorCreds = this.b.event),
							(this.c = new e.$re()),
							(this.onDidChangePrivacyMode = this.c.event),
							(this.d = new e.$re()),
							(this.onDidChangeCursorAuthToken = this.d.event),
							(this.f = new e.$re()),
							(this.onDidRequestRepoIndex = this.f.event),
							(this.g = new e.$re()),
							(this.onDidRequestRepoInterrupt = this.g.event),
							(this.h = new e.$re()),
							(this.onDidChangeFileSyncClientEnabled = this.h.event),
							(this.i = new e.$re()),
							(this.onDidChangeCppEnabled = this.i.event),
							(this.j = new e.$re()),
							(this.onDidChangeCppConfig = this.j.event),
							(this.l = new e.$re()),
							(this.onDidChangeMembershipType = this.l.event),
							(this.n = new e.$re()),
							(this.onProcessConfigUpdate = this.n.event),
							(this.p = !0),
							(this.s = !0),
							(this.t = !0),
							(this.x = !0),
							(this.Q = []),
							(this.R = []),
							(this.W = void 0),
							(this.$ = n.$FV),
							(this.ab = new Map()),
							(this.cb = void 0),
							(this.db = void 0),
							(this.eb = void 0),
							(this.a = h.getProxy(r.$lbb.MainThreadCursor)),
							(0, y.$p3c)("extension", this.V),
							this.a.$getCursorCreds().then((T) => {
								(this.o = T), this.b.fire(T);
							}),
							this.a.$getPrivacyMode().then((T) => {
								(this.p = T), this.c.fire(T);
							}),
							this.a.$getCursorAuthToken().then((T) => {
								(this.r = T), this.d.fire(T);
							}),
							this.a.$isFileSyncClientEnabled().then((T) => {
								this.s = T;
							}),
							this.a.$cppEnabled().then((T) => {
								this.t = T;
							}),
							this.a.$cppConfig().then((T) => {
								(this.u = T), this.j.fire(T);
							}),
							this.a.$membershipType().then((T) => {
								(this.v = T), this.l.fire(T);
							}),
							this.a.$preferredEmbeddingModel().then((T) => {
								this.w = T;
							});
					}
					getCursorCreds() {
						return this.o;
					}
					getPrivacyMode() {
						return this.p;
					}
					isFileSyncClientEnabled() {
						return this.s;
					}
					cppEnabled() {
						return this.t;
					}
					cppConfig() {
						return this.u;
					}
					membershipType() {
						return this.v;
					}
					preferredEmbeddingModel() {
						return this.w;
					}
					shouldIndex() {
						return this.x;
					}
					getCursorAuthToken() {
						return this.r;
					}
					getSemanticSearchResultsFromServer(h) {
						return this.a.$getSemanticSearchResultsFromServer(h);
					}
					$changeCursorCreds(h) {
						return (this.o = h), this.b.fire(h), Promise.resolve();
					}
					$changePrivacyMode(h) {
						const $ = this.p;
						return (this.p = h), $ !== h && this.c.fire(h), Promise.resolve();
					}
					$changeShouldIndex(h) {
						return (this.x = h), Promise.resolve();
					}
					$changeCursorAuthToken(h) {
						return (this.r = h), this.d.fire(h), Promise.resolve();
					}
					$triggerCursorIndex() {
						return this.f.fire(), Promise.resolve();
					}
					$triggerCursorInterrupt(h) {
						return this.g.fire(h), Promise.resolve();
					}
					$changeFileSyncClientEnabled(h) {
						return (this.s = h), this.h.fire(h), Promise.resolve();
					}
					$changeCppEnabled(h) {
						return (this.t = h), this.i.fire(h), Promise.resolve();
					}
					$changeCppConfig(h) {
						return (this.u = h), this.j.fire(h), Promise.resolve();
					}
					$changeMembershipType(h) {
						return (this.v = h), this.l.fire(h), Promise.resolve();
					}
					updateUploadProgress(h, $, T = !1) {
						this.a.$updateUploadProgress(h, $, T);
					}
					showWebCmdKInputBox(h) {
						return this.a.$showWebCmdKInputBox(h);
					}
					processAiReaderMessage(h) {
						return this.a.$processAiReaderMessage(h);
					}
					$getIndexProviderGetStatus() {
						const h = this.y?.();
						return h || Promise.resolve(void 0);
					}
					$getIndexProviderGetRepoInfo() {
						return this.C ? this.C.getRepoInfo() : Promise.resolve(void 0);
					}
					$getIndexProviderDecryptPaths(h) {
						return this.C ? this.C.decryptPaths(h) : Promise.resolve(h);
					}
					$getIndexProviderCompileGlobFilter(h) {
						return this.C
							? this.C.compileGlobFilter(h)
							: Promise.resolve({ globFilter: void 0, notGlobFilter: void 0 });
					}
					$getIndexProviderGetIndexingProgress() {
						const h = this.z;
						return h ? h() : Promise.resolve(void 0);
					}
					$getIndexProviderGetCurrentJobs() {
						const h = this.A;
						return h ? h() : Promise.resolve(void 0);
					}
					$getIndexProviderGetHighLevelFolderDescription() {
						const h = this.B;
						return h ? h() : Promise.resolve(void 0);
					}
					async $getIsNewIndexProvider() {
						return this.D && (await this.D());
					}
					async $forceFlushExtHostEventLogger() {
						return this.W?.forceFlush();
					}
					async $recordExtHostEvent(h) {
						return this.W?.recordExtHostEvent(h);
					}
					$getMetricsProviderIncrement(h) {
						const $ = this.E;
						return $ && $(h), Promise.resolve();
					}
					$getMetricsProviderDecrement(h) {
						const $ = this.F;
						return $ && $(h), Promise.resolve();
					}
					$getMetricsProviderDistribution(h) {
						const $ = this.G;
						return $ && $(h), Promise.resolve();
					}
					$getMetricsProviderGauge(h) {
						const $ = this.H;
						return $ && $(h), Promise.resolve();
					}
					$getDiffingProviderWordDiffForPartialCode(h, $) {
						const T = this.J;
						return T
							? T(h, $)
							: Promise.resolve({
									finalText: $,
									changes: [
										{ value: $, added: !0 },
										{ value: h, removed: !0 },
									],
									fullLineChanges: [
										{ value: h, removed: !0 },
										{ value: $, added: !0 },
									],
								});
					}
					$request(h, $) {
						return this.L ? this.L(h, $) : Promise.resolve("");
					}
					$flush(h) {
						return this.M?.(h) ?? Promise.resolve([]);
					}
					$cancel(h) {
						this.N?.(h);
					}
					$getDiffingProviderWordDiff(h, $) {
						const T = this.P;
						return T
							? T(h, $)
							: Promise.resolve({
									changes: [
										{ value: $, added: !0 },
										{ value: h, removed: !0 },
									],
								});
					}
					async $getEverythingProviderRunCommand(h, $) {
						const T = this.Q;
						if (T.length > 0) {
							const a = [];
							for (const s of T) a.push(s(h, $));
							const u = await Promise.allSettled(a);
							for (const s of u)
								if (s.status === "fulfilled" && s.value !== void 0)
									return s.value;
						}
					}
					async $getEverythingAllLocalProviderRunCommand(h, $) {
						const T = this.R;
						if (T.length > 0) {
							const a = [];
							for (const s of T) a.push(s(h, $));
							const u = await Promise.allSettled(a);
							for (const s of u)
								if (s.status === "fulfilled" && s.value !== void 0)
									return s.value;
						}
					}
					getCppSessionId() {
						return this.S;
					}
					getCppTelemEnabled() {
						return (this.U ?? !1) && this.getPrivacyMode() !== !0;
					}
					onDidChangeIndexingStatus() {
						return (
							this.a.$onDidChangeIndexingStatus(),
							(0, S.$Yc)(() => {
								this.a.$unregisterOnDidChangeIndexingStatus();
							})
						);
					}
					async triggerRefreshCursorAuthToken() {
						await this.a.$triggerRefreshCursorAuthToken(),
							(this.r = await this.a.$getCursorAuthToken());
					}
					registerExtHostEventLogger(h) {
						return (
							(this.W = h),
							this.a.$registerExtHostEventLogger(),
							(0, S.$Yc)(() => {
								this.a.$unregisterExtHostEventLogger(), (this.W = void 0);
							})
						);
					}
					registerIndexProvider(h) {
						return (
							(this.A = h.getCurrentJobs),
							(this.z = h.getIndexingProgress),
							(this.y = h.getStatus),
							(this.B = h.getHighLevelFolderDescription),
							(this.C = h),
							this.a.$registerIndexProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterIndexProvider(),
									(this.A = void 0),
									(this.z = void 0),
									(this.y = void 0),
									(this.B = void 0),
									(this.C = void 0);
							})
						);
					}
					registerRequesterProvider(h) {
						return (
							(this.L = h.request),
							(this.M = h.flush),
							(this.N = h.cancel),
							this.a.$registerRequesterProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterRequesterProvider();
							})
						);
					}
					registerIsNewIndexProvider(h) {
						return (
							(this.D = h),
							this.a.$registerIsNewIndexProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterIsNewIndexProvider(), (this.D = void 0);
							})
						);
					}
					registerShadowClientProvider(h) {
						return (
							(this.Y = h.get),
							this.a.$registerShadowClientProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterShadowClientProvider(), (this.Y = void 0);
							})
						);
					}
					registerShadowServerProvider(h) {
						return (
							(this.X = h.start),
							this.a.$registerShadowServerProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterShadowServerProvider(), (this.X = void 0);
							})
						);
					}
					$getShadowServerProviderStart(h) {
						return (
							this.X &&
								this.X(
									h,
									new Proxy(
										{},
										{
											get: ($, T, a) => {
												if (typeof T == "string") {
													const u = P.$Bx.methods[T]?.I;
													if (u === void 0) return;
													const s = P.$Bx.methods[T]?.O;
													if (s === void 0) return;
													const f = T;
													return async (o) => {
														const w = new u(o),
															m = await this.a.$callShadowServer(
																f,
																N.$Te.wrap(w.toBinary()),
															);
														return s.fromBinary(m.buffer);
													};
												}
											},
										},
									),
								),
							Promise.resolve()
						);
					}
					async $createShadowClient(h) {
						this.Y && (this.Z = await this.Y(h));
					}
					async $callShadowServer(h, $) {
						if (this.Z === void 0)
							throw new Error("Shadow client not initialized");
						const T = this.Z,
							u = T[h].bind(T),
							f = P.$Bx.methods[h].I.fromBinary($.buffer),
							o = await u(f);
						return N.$Te.wrap(o.toBinary());
					}
					async $callAiConnectTransportProviderUnary(h, $, T, a, u, s) {
						if (this.eb) {
							const f = I.$ibb[h],
								o = f.methods[$],
								w = new AbortController();
							s.onCancellationRequested(() => {
								w.abort();
							});
							const m = w.signal;
							let E;
							try {
								E = o.I.fromBinary(T.buffer);
							} catch (R) {
								throw (
									(console.error(
										"CONCERNING!!! PLEASE REPORT TO SUALEH",
										"ERROR IN THE EXTHOST",
										R,
									),
									R)
								);
							}
							try {
								const R = await this.eb.unary(f, o, m, a, u, E),
									C = Object.fromEntries(R.header),
									O = Object.fromEntries(R.trailer),
									A = d(C),
									J = d(O),
									L = new p.$ot({
										message: R.message.toBinary(),
										header: A,
										trailer: J,
										isError: !1,
									});
								return N.$Te.wrap(L.toBinary());
							} catch (R) {
								const C = new p.$ot({
									message: new Uint8Array(0),
									isError: !0,
									connectError: JSON.stringify(R),
								});
								return N.$Te.wrap(C.toBinary());
							}
						}
						throw new Error(
							"BIG PROBLEM. BIG PROBLEM. BIG PROBLEM. BIG PROBLEM. BIG PROBLEM. BIG PROBLEM. Connect transport provider not initialized. BIG PROBLEM.",
						);
					}
					bb(h) {
						const $ = h ?? this.$,
							T = new l.$Kpb($),
							a = new AbortController();
						return { promiseQueue: T, canceller: a };
					}
					async $callAiConnectTransportProviderStream(h, $, T, a, u, s, f) {
						if (this.eb) {
							const o = I.$ibb[$],
								w = o.methods[T];
							if (!this.ab.get(h)) {
								const { promiseQueue: L, canceller: b } = this.bb(a);
								this.ab.set(h, { promiseQueue: L, canceller: b });
							}
							const E = this.ab.get(h);
							if (E === void 0)
								throw new Error("Stream ID not found. BIG PROBLEM.");
							const R = E.canceller;
							f.onCancellationRequested(() => {
								R.abort();
							});
							const C = R.signal,
								O = E.promiseQueue,
								A = this.ab,
								J = async function* () {
									try {
										for await (const L of O) {
											if (A.get(h)?.canceller.signal.aborted) break;
											yield w.I.fromBinary(L.buffer);
										}
									} finally {
									}
								};
							try {
								const L = await this.eb.stream(o, w, C, a, u, J(), s);
								Promise.resolve()
									.then(async () => {
										for await (const Q of L.message) {
											if (A.get(h)?.canceller.signal.aborted) break;
											const H = N.$Te.wrap(Q.toBinary());
											this.a.$pushAiConnectTransportStreamChunk(H, h);
										}
										this.a.$endAiConnectTransportStreamChunk(h);
									})
									.catch((Q) => {
										this.a.$endAiConnectTransportReportError(h, Q);
									})
									.finally(() => {
										A.delete(h);
									});
								const b = Object.fromEntries(L.header),
									F = Object.fromEntries(L.trailer),
									D = d(b),
									M = d(F),
									z = new p.$ot({
										message: new Uint8Array(0),
										header: D,
										trailer: M,
										isError: !1,
									});
								return N.$Te.wrap(z.toBinary());
							} catch (L) {
								const b = new p.$ot({
									message: new Uint8Array(0),
									isError: !0,
									connectError: JSON.stringify(L),
								});
								return N.$Te.wrap(b.toBinary());
							}
						}
						throw new Error(
							"Connect transport provider not initialized. BIG PROBLEM.",
						);
					}
					async $pushAiConnectTransportStreamChunk(h, $, T) {
						const a = this.ab.get($);
						if (a) return a.promiseQueue.push(h), { success: !0 };
						{
							const { promiseQueue: u, canceller: s } = this.bb(T);
							return (
								this.ab.set($, { promiseQueue: u, canceller: s }),
								u.push(h),
								{ success: !0 }
							);
						}
					}
					$endAiConnectTransportStreamChunk(h) {
						const $ = this.ab.get(h);
						if ($) $.promiseQueue.end();
						else {
							const { promiseQueue: T, canceller: a } = this.bb(this.$);
							this.ab.set(h, { promiseQueue: T, canceller: a }), T.end();
						}
					}
					$cancelAiConnectTransportStreamChunk(h) {
						const $ = this.ab.get(h);
						if ($) $.canceller.abort();
						else {
							const { promiseQueue: T, canceller: a } = this.bb(this.$);
							this.ab.set(h, { promiseQueue: T, canceller: a }), a.abort();
						}
					}
					registerMetricsProvider(h) {
						return (
							(this.E = h.increment),
							(this.F = h.decrement),
							(this.G = h.distribution),
							(this.H = h.gauge),
							this.a.$registerMetricsProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterMetricsProvider(),
									(this.E = void 0),
									(this.F = void 0),
									(this.G = void 0),
									(this.H = void 0);
							})
						);
					}
					registerDiffingProvider(h) {
						return (
							(this.J = h.wordDiffForPartialCode),
							(this.P = h.wordDiff),
							this.a.$registerDiffingProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterDiffingProvider();
							})
						);
					}
					registerEverythingProvider(h) {
						return (
							this.Q.push(h.runCommand),
							this.a.$registerEverythingProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterEverythingProvider();
							})
						);
					}
					registerEverythingProviderAllLocal(h) {
						return (
							this.R.push(h.runCommand),
							this.a.$registerEverythingProviderAllLocal(),
							(0, S.$Yc)(() => {
								this.a.$unregisterEverythingProviderAllLocal();
							})
						);
					}
					registerEditHistoryProvider(h) {
						return (
							(this.cb = h),
							this.a.$registerEditHistoryProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterEditHistoryProvider(), (this.cb = void 0);
							})
						);
					}
					async $getEditHistoryProviderCompileGlobalDiffTrajectories(h) {
						const $ = this.cb;
						if ($) return $.compileGlobalDiffTrajectories(h);
					}
					async $getEditHistoryProviderHasProcessedTextModelUptilVersion(h) {
						const $ = this.cb;
						if ($) return $.hasProcessedTextModelUptilVersion(h);
					}
					async $getEditHistoryProviderInitModel(h) {
						const $ = this.cb;
						if ($) return $.initModel(h);
					}
					registerLspSubgraphProvider(h) {
						return (
							(this.db = h),
							this.a.$registerLspSubgraphProvider(),
							(0, S.$Yc)(() => {
								this.a.$unregisterLspSubgraphProvider(), (this.db = void 0);
							})
						);
					}
					registerConnectTransportProvider(h) {
						(this.eb = h), this.a.$registerAiConnectTransportProvider();
					}
					$callLspSubgraphProviderActivate() {
						const h = this.db;
						h && h.activate();
					}
					$callLspSubgraphProviderDeactivate() {
						const h = this.db;
						h && h.deactivate();
					}
					$callLspSubgraphProviderDebouncedForceAbort() {
						const h = this.db;
						h && h.debouncedForceAbort();
					}
					$callLspSubgraphProviderRetrieve(h, $, T, a, u, s) {
						const f = this.db;
						return f ? f.retrieve(h, $, T, a, u, s) : Promise.resolve(void 0);
					}
					getRepoFiles() {
						return this.a.$getAllFilenames();
					}
					publicLogCapture(h) {
						this.a.$publicLogCapture(h);
					}
					async $processConfigUpdate(h) {
						await this.V.processConfigUpdate(h);
					}
				}
				t.$shd = k;
				class g {
					constructor() {
						this.a = new Map();
					}
					getOrCreate(h, $) {
						const T = this.a.get(h);
						if (T) return T;
						const a = $().finally(() => this.a.delete(h));
						return this.a.set(h, a), a;
					}
				}
			},
		),
		