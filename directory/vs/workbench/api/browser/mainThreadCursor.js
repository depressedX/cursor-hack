define(
		de[3944],
		he([
			1, 0, 1478, 76, 3, 45, 134, 32, 88, 788, 2995, 1346, 280, 1010, 3226,
			1281, 619, 226, 627, 232, 101, 1871, 626, 34, 1280, 137, 332, 3233, 33,
			47, 1497, 340, 58, 83, 75, 13, 216, 1211,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
			R,
			O,
			B,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mqc = void 0);
			const U = (x) => {
				const H = x.at(0);
				return H && H === H?.toUpperCase() ? H.toLowerCase() + x.slice(1) : x;
			};
			function z(x) {
				const H = new Headers();
				if (x) for (const q of x.headers) H.append(q.key, q.value);
				return H;
			}
			let F = class extends w.$1c {
				constructor(
					H,
					q,
					V,
					G,
					K,
					J,
					W,
					X,
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
				) {
					super(),
						(this.c = q),
						(this.f = V),
						(this.g = G),
						(this.h = K),
						(this.j = J),
						(this.n = W),
						(this.r = X),
						(this.s = Y),
						(this.t = ie),
						(this.u = ne),
						(this.w = ee),
						(this.y = _),
						(this.z = te),
						(this.C = Q),
						(this.F = Z),
						(this.G = se),
						(this.H = re),
						(this.J = le),
						(this.L = oe),
						(this.M = ae),
						(this.Q = new Map());
					const pe = H.getProxy(m.$mbb.ExtHostCursor);
					this.a = pe;
					const $e = this.D(this.c.createScoped(this));
					$e.createImplicitEffect(() => {
						this.a.$changeCursorCreds(
							this.c.applicationUserPersistentStorage.cursorCreds,
						),
							this.a.$changeShouldIndex(
								this.c.applicationUserPersistentStorage.indexRepository,
							);
					}),
						$e.onChangeEffect({
							deps: [
								() =>
									this.c.workspaceUserPersistentStorage.indexingData
										.preferredEmbeddingModel,
							],
							onChange: ({ deps: [ye] }) => {
								this.a.$changePreferredEmbeddingModel(ye);
							},
						}),
						this.D(
							this.f.onDidPotentiallyChangePrivacyMode((ye) => {
								this.a.$changePrivacyMode(ye);
							}),
						),
						$e.onChangeEffect({
							onChange: () => {
								this.a.$changeFileSyncClientEnabled(
									this.c.applicationUserPersistentStorage
										.isFileSyncClientEnabled,
								),
									this.a.$changeCppEnabled(
										this.c.applicationUserPersistentStorage.cppEnabled,
									),
									this.a.$changeCppConfig(
										this.c.applicationUserPersistentStorage.cppConfig,
									),
									this.a.$changeMembershipType(
										this.c.applicationUserPersistentStorage.membershipType,
									);
							},
							deps: [
								() =>
									this.c.applicationUserPersistentStorage
										.isFileSyncClientEnabled,
								() => this.c.applicationUserPersistentStorage.cppEnabled,
								() => this.c.applicationUserPersistentStorage.cppConfig,
								() => this.c.applicationUserPersistentStorage.membershipType,
							],
						}),
						this.f.refreshMembershipType(),
						(this.authenticationUpdateIntervalId = A.$Bfb.setInterval(
							this.f.refreshMembershipType,
							60 * 1e3,
						)),
						(this.privacyModeForwarderIntervalId = A.$Bfb.setInterval(() => {
							(0, R.untrack)(() => {
								this.a.$changePrivacyMode(this.f.reactivePrivacyMode());
							});
						}, 30 * 1e3)),
						(this.b = async (ye) => {
							this.a.$changeCursorAuthToken(await this.f.getAccessToken());
						}),
						this.f.addLoginChangedListener(this.b),
						this.g.onDidRequestRepoIndex(() => {
							this.a.$triggerCursorIndex();
						}),
						this.g.onDidRequestRepoInterrupt((ye) => {
							this.a.$triggerCursorInterrupt(ye);
						}),
						this.D(
							this.J.onDidChangeCppSessionId((ye) => {
								this.a.$updateCppSessionId(ye);
							}),
						),
						this.a.$updateCppSessionId(this.J.getCurrentSessionId()),
						this.D(
							this.J.onDidChangeCppTelemEnabled((ye) => {
								this.a.$updateCppTelemEnabled(ye);
							}),
						),
						this.a.$updateCppTelemEnabled(this.J.canWeTrackTelem()),
						this.D(this.M.onProcessConfigUpdate(this.a.$processConfigUpdate));
				}
				$processAiReaderMessage(H) {
					return this.C.processAiReaderMessage(H);
				}
				dispose() {
					super.dispose(),
						this.f.removeLoginChangedListener(this.b),
						A.$Bfb.clearInterval(this.authenticationUpdateIntervalId),
						A.$Bfb.clearInterval(this.privacyModeForwarderIntervalId);
				}
				async $onDidChangeIndexingStatus() {
					this.g.fireOnDidChangeIndexingStatus();
				}
				async $unregisterOnDidChangeIndexingStatus() {
					this.g.unregisterOnDidChangeIndexingStatus();
				}
				async $triggerRefreshCursorAuthToken() {
					await this.f.refreshAuthentication();
				}
				async $registerExtHostEventLogger() {
					this.N = this.L.registerExtHostEventLogger({
						recordExtHostEvent: (H) => this.a.$recordExtHostEvent(H),
						forceFlush: () => this.a.$forceFlushExtHostEventLogger(),
					});
				}
				async $unregisterExtHostEventLogger() {
					this.N && (this.N.dispose(), (this.N = void 0));
				}
				async $registerIndexProvider() {
					const H = () => this.a.$getIndexProviderGetStatus(),
						q = () => this.a.$getIndexProviderGetIndexingProgress(),
						V = () => this.a.$getIndexProviderGetCurrentJobs(),
						G = () => this.a.$getIndexProviderGetHighLevelFolderDescription(),
						K = () => this.a.$getIndexProviderGetRepoInfo(),
						J = (X) => this.a.$getIndexProviderDecryptPaths(X),
						W = (X) => this.a.$getIndexProviderCompileGlobFilter(X);
					this.g.registerIndexingProvider({
						getStatus: H,
						getIndexingProgress: q,
						getCurrentJobs: V,
						getHighLevelFolderDescription: G,
						getRepoInfo: K,
						decryptPaths: J,
						compileGlobFilter: W,
					});
				}
				async $unregisterIndexProvider() {
					this.g.unregisterIndexingProvider();
				}
				async $registerIsNewIndexProvider() {
					this.g.registerIsNewIndexProvider(() =>
						this.a.$getIsNewIndexProvider(),
					);
				}
				async $unregisterIsNewIndexProvider() {
					this.g.unregisterIsNewIndexProvider();
				}
				async $registerMetricsProvider() {
					const H = (K) => {
							this.a.$getMetricsProviderIncrement(K);
						},
						q = (K) => {
							this.a.$getMetricsProviderDecrement(K);
						},
						V = (K) => {
							this.a.$getMetricsProviderDistribution(K);
						},
						G = (K) => {
							this.a.$getMetricsProviderGauge(K);
						};
					this.r.registerMetricsProvider({
						increment: H,
						decrement: q,
						distribution: V,
						gauge: G,
					});
				}
				async $callShadowServer(H, q) {
					try {
						const V = this.G.getServer(),
							K = V[H].bind(V),
							W = t.$Bx.methods[H].I.fromBinary(q.buffer),
							X = await K(W);
						return i.$Te.wrap(X.toBinary());
					} catch (V) {
						throw (
							(console.error("Error in $callShadowServer", V, V.stack),
							this.h.error("Error in $callShadowServer", V, V.stack),
							V)
						);
					}
				}
				async $registerShadowServerProvider() {
					const H = this.F.getServerSocketPath();
					H && (await this.a.$getShadowServerProviderStart(H));
				}
				async $unregisterShadowServerProvider() {}
				async $registerShadowClientProvider() {
					this.P = this.F.provideClient(
						async (H) => (
							await this.a.$createShadowClient(H),
							new Proxy(
								{},
								{
									get: (q, V, G) => {
										if (typeof V == "string") {
											const K = t.$Bx.methods[V]?.I;
											if (K === void 0) return;
											const J = t.$Bx.methods[V]?.O;
											if (J === void 0) return;
											const W = V;
											return async (X) => {
												const Y = new K(X),
													ie = await this.a.$callShadowServer(
														W,
														i.$Te.wrap(Y.toBinary()),
													);
												return J.fromBinary(ie.buffer);
											};
										}
									},
								},
							)
						),
					);
				}
				async $unregisterShadowClientProvider() {
					this.P && (this.P.dispose(), (this.P = void 0));
				}
				async $unregisterMetricsProvider() {
					this.r.unregisterMetricsProvider();
				}
				async $registerEditHistoryProvider() {
					const H = (G) => {
							this.a.$getEditHistoryProviderInitModel(G);
						},
						q = (G) =>
							this.a.$getEditHistoryProviderHasProcessedTextModelUptilVersion(
								G,
							),
						V = (G) =>
							this.a.$getEditHistoryProviderCompileGlobalDiffTrajectories(G);
					this.u.registerEditHistoryProvider({
						initModel: H,
						hasProcessedTextModelUptilVersion: q,
						compileGlobalDiffTrajectories: V,
					});
				}
				async $unregisterEditHistoryProvider() {}
				async $registerLspSubgraphProvider() {
					this.y.registerProvider({
						activate: this.a.$callLspSubgraphProviderActivate,
						deactivate: this.a.$callLspSubgraphProviderDeactivate,
						debouncedForceAbort:
							this.a.$callLspSubgraphProviderDebouncedForceAbort,
						retrieve: this.a.$callLspSubgraphProviderRetrieve,
					});
				}
				async $unregisterLspSubgraphProvider() {
					this.y.unregisterProvider();
				}
				async $streamAiConnect(H, q, V, G, K, J, W) {
					const X = { stack: [], error: void 0, hasError: !1 };
					try {
						if (!(H.typeName in T.$ibb))
							throw new Error(
								"Service not recognized in the PROTOBUF_SERVICE_NAME_MAP",
							);
						const Y = ms(X, (0, O.span)(`${H.typeName}.${q.name}`), !1),
							ie = new Headers(K);
						ie.set(O.$HOb, (0, O.$NOb)(Y));
						const ne = (0, k.$9g)(),
							ee = new P.$Ce(),
							_ = () => {
								ee.cancel(), this.a.$cancelAiConnectTransportStreamChunk(ne);
							};
						V?.addEventListener("abort", _);
						const te = G ?? M.$FV,
							Q = new L.$Kpb(te);
						this.Q.set(ne, Q),
							(async () => {
								for await (const pe of J) {
									const $e = new q.I(pe),
										ye = i.$Te.wrap($e.toBinary());
									if (ee.token.isCancellationRequested) {
										console.info(
											"stopped pushing. Cancelled in $streamAiConnect (aiRequestServiceTransport)",
										);
										break;
									}
									this.a
										.$pushAiConnectTransportStreamChunk(ye, ne, G)
										.catch((ue) => {
											console.error(
												"Error in $streamAiConnect (aiRequestServiceTransport)",
												ue,
												ue.stack,
											),
												this.h.error(
													"Error in $streamAiConnect (aiRequestServiceTransport)",
													ue,
													ue.stack,
												);
										});
								}
								this.a.$endAiConnectTransportStreamChunk(ne);
							})();
						const Z = await this.a.$callAiConnectTransportProviderStream(
								ne,
								H.typeName,
								U(q.name),
								G,
								Object.fromEntries(ie),
								W,
								ee.token,
							),
							se = this.Q,
							re = async function* () {
								try {
									for await (const pe of Q) {
										if (ee.token.isCancellationRequested) continue;
										yield q.O.fromBinary(pe.buffer);
									}
								} catch (pe) {
									throw pe;
								} finally {
									se.delete(ne), V?.removeEventListener("abort", _);
								}
							},
							le = N.$ot.fromBinary(Z.buffer);
						if (le.isError) {
							const pe = JSON.parse(le.connectError);
							if (this.R(pe)) {
								const $e = new D.ConnectError(
									pe.rawMessage,
									pe.code,
									pe.metadata,
									pe.details,
									pe.cause,
								);
								throw (this.S($e), $e);
							}
							throw new Error("Error in the connect call." + le.connectError);
						}
						const oe = z(le.header),
							ae = z(le.trailer);
						return {
							stream: !0,
							service: H,
							method: q,
							message: re(),
							header: oe,
							trailer: ae,
						};
					} catch (Y) {
						(X.error = Y), (X.hasError = !0);
					} finally {
						ps(X);
					}
				}
				async $pushAiConnectTransportStreamChunk(H, q) {
					const V = this.Q.get(q);
					return V ? (V.push(H), { success: !0 }) : { success: !1 };
				}
				async $endAiConnectTransportStreamChunk(H) {
					const q = this.Q.get(H);
					q && q.end();
				}
				R(H) {
					return (
						"name" in H &&
						"rawMessage" in H &&
						"code" in H &&
						H.name === "ConnectError"
					);
				}
				S(H) {
					H.details = H.details.map((q) => {
						const V = "value" in q && q.value instanceof Uint8Array;
						if ("value" in q && V === !1) {
							const G = Object.values(q.value);
							q.value = Uint8Array.from(G);
						}
						return q;
					});
				}
				async $endAiConnectTransportReportError(H, q) {
					const V = this.Q.get(H);
					let G;
					this.R(q)
						? ((G = new D.ConnectError(
								q.rawMessage,
								q.code,
								q.metadata,
								q.details,
							)),
							this.S(G))
						: (G = q),
						V && G !== void 0 && V.error(G);
				}
				async $registerAiConnectTransportProvider() {
					const H = this.a,
						q = async (V, G, K, J, W, X) => {
							const Y = { stack: [], error: void 0, hasError: !1 };
							try {
								const ie = new G.I(X),
									ne = i.$Te.wrap(ie.toBinary());
								if (!(V.typeName in T.$ibb))
									throw (
										(console.log(
											"MAJOR ERROR: If you are on dev and your service isnt working. SERVICE DOESNOT EXIST",
											V.typeName,
										),
										new Error(
											"Connect transport provider not initialized. BIG PROBLEM. " +
												V.typeName,
										))
									);
								const ee = ms(Y, (0, O.span)(`${V.typeName}.${G.name}`), !1),
									_ = new Headers(W);
								_.set(O.$HOb, (0, O.$NOb)(ee));
								const te = this.D(new P.$Ce()),
									Q = () => {
										te.cancel();
									};
								K?.addEventListener("abort", Q);
								try {
									const Z = V.typeName,
										se = U(G.name),
										re = await H.$callAiConnectTransportProviderUnary(
											Z,
											se,
											ne,
											J,
											Object.fromEntries(_),
											te.token,
										),
										le = N.$ot.fromBinary(re.buffer);
									if (le.isError) {
										const ye = JSON.parse(le.connectError);
										if (this.R(ye)) {
											const ue = new D.ConnectError(
												ye.rawMessage,
												ye.code,
												ye.metadata,
												ye.details,
												ye.cause,
											);
											throw (this.S(ue), ue);
										}
										throw new Error(
											"Error in the connect call." + le.connectError,
										);
									}
									const oe = le.message,
										ae = le.header,
										pe = le.trailer,
										$e = G.O.fromBinary(oe);
									return {
										service: V,
										method: G,
										message: $e,
										stream: !1,
										header: z(ae),
										trailer: z(pe),
									};
								} finally {
									K?.removeEventListener("abort", Q);
								}
							} catch (ie) {
								(Y.error = ie), (Y.hasError = !0);
							} finally {
								ps(Y);
							}
						};
					this.H.registerConnectTransportProvider({
						unary: q,
						stream: this.$streamAiConnect.bind(this),
					});
				}
				async $registerRequesterProvider() {
					const H = (G, K) => this.a.$request(G, K),
						q = (G) => this.a.$flush(G),
						V = (G) => this.a.$cancel(G);
					this.t.registerRequesterProvider({ request: H, flush: q, cancel: V });
				}
				async $unregisterRequesterProvider() {}
				async $registerDiffingProvider() {
					const H = (V, G) =>
							this.a.$getDiffingProviderWordDiffForPartialCode(V, G),
						q = (V, G) => this.a.$getDiffingProviderWordDiff(V, G);
					this.s.registerDiffingProvider({
						wordDiffForPartialCode: H,
						wordDiff: q,
					});
				}
				async $unregisterDiffingProvider() {
					this.s.unregisterDiffingProvider();
				}
				async $registerEverythingProvider() {
					const H = (q, V) => this.a.$getEverythingProviderRunCommand(q, V);
					this.w.registerEverythingProvider({ runCommand: H });
				}
				async $unregisterEverythingProvider() {
					this.w.unregisterEverythingProvider();
				}
				async $registerEverythingProviderAllLocal() {
					const H = (q, V) =>
						this.a.$getEverythingAllLocalProviderRunCommand(q, V);
					this.w.registerEverythingProviderAllLocal({ runCommand: H });
				}
				async $unregisterEverythingProviderAllLocal() {
					this.w.unregisterEverythingProviderAllLocal();
				}
				async $showWebCmdKInputBox(H) {
					return this.z.showWebCmdKInputBox(H);
				}
				async $updateUploadProgress(H, q, V = !1) {
					V
						? this.c.setNonPersistentStorage("repoProgressBars", (G) =>
								G.filter((K) => K.repoId !== C.LocalRepoId.id),
							)
						: this.c.setNonPersistentStorage("repoProgressBars", (G) =>
								G.find((J) => J.repoId === C.LocalRepoId.id)
									? G.map((J) =>
											J.repoId === C.LocalRepoId.id
												? {
														repoId: C.LocalRepoId.id,
														progress: H,
														uploadType: q,
													}
												: J,
										)
									: [
											...G,
											{ repoId: C.LocalRepoId.id, progress: H, uploadType: q },
										],
							);
				}
				async $getCursorAuthToken() {
					return await this.f.getAccessToken();
				}
				async $getSemanticSearchResultsFromServer(H) {
					return await this.g.parallelSearch(
						H.query,
						H.topK,
						H.finalK,
						H.options,
					);
				}
				async $getCursorCreds() {
					return Promise.resolve(
						this.c.applicationUserPersistentStorage.cursorCreds,
					);
				}
				async $getPrivacyMode() {
					return Promise.resolve(this.f.reactivePrivacyMode());
				}
				async $isFileSyncClientEnabled() {
					return this.c.applicationUserPersistentStorage
						.isFileSyncClientEnabled;
				}
				async $cppEnabled() {
					return this.c.applicationUserPersistentStorage.cppEnabled;
				}
				async $cppConfig() {
					return this.c.applicationUserPersistentStorage.cppConfig;
				}
				async $membershipType() {
					return this.c.applicationUserPersistentStorage.membershipType;
				}
				async $preferredEmbeddingModel() {
					return (
						this.c.workspaceUserPersistentStorage.indexingData
							.preferredEmbeddingModel === N.EmbeddingModel.UNSPECIFIED &&
							this.c.applicationUserPersistentStorage
								.preferredEmbeddingModel !== N.EmbeddingModel.UNSPECIFIED &&
							(this.c.setWorkspaceUserPersistentStorage(
								"indexingData",
								"preferredEmbeddingModel",
								this.c.applicationUserPersistentStorage.preferredEmbeddingModel,
							),
							this.c.setApplicationUserPersistentStorage(
								"preferredEmbeddingModel",
								N.EmbeddingModel.UNSPECIFIED,
							)),
						this.c.workspaceUserPersistentStorage.indexingData
							.preferredEmbeddingModel
					);
				}
				async $getAllFilenames() {
					return (await this.j.getAllFiles()).map((q) => q.absolute.fsPath);
				}
				$publicLogCapture(H) {
					this.n.publicLogCapture(H);
				}
				async $sendEnvelope(H, q) {
					await this.M.sendEnvelope(H, q);
				}
				async $sendScopeUpdate(H, q) {
					await this.M.sendScopeUpdate(H, q);
				}
			};
			(e.$mqc = F),
				(e.$mqc = F =
					Ne(
						[
							(0, s.$tmc)(m.$lbb.MainThreadCursor),
							j(1, E.$0zb),
							j(2, b.$x6b),
							j(3, o.$J6b),
							j(4, $.$ik),
							j(5, f.$O6b),
							j(6, d.$km),
							j(7, p.$wcc),
							j(8, c.$ycc),
							j(9, u.$hqc),
							j(10, n.$jqc),
							j(11, h.$3Db),
							j(12, g.$b0b),
							j(13, a.$Hcc),
							j(14, r.$Jcc),
							j(15, y.$k7b),
							j(16, l.$lqc),
							j(17, v.$o6b),
							j(18, S.$hfc),
							j(19, I.$V7b),
							j(20, B.$jbb),
						],
						F,
					));
		},
	),
		