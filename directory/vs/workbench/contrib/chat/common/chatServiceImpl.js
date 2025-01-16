define(
			de[3572],
			he([
				1, 0, 15, 33, 163, 29, 6, 94, 103, 3, 197, 162, 9, 4, 10, 8, 5, 34, 84,
				21, 32, 25, 153, 207, 441, 329, 1022, 3013, 829, 503, 1023, 708, 53,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XIc = void 0);
				const N = "interactive.sessions",
					A = "chat.workspaceTransfer",
					R = 1e3 * 60,
					O = 25;
				class B {
					constructor(x, H) {
						(this.cancellationTokenSource = x), (this.requestId = H);
					}
					dispose() {
						this.cancellationTokenSource.dispose();
					}
					cancel() {
						this.cancellationTokenSource.cancel();
					}
				}
				let U = class extends r.$1c {
					get transferredSessionData() {
						return this.j;
					}
					constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(),
							(this.t = x),
							(this.u = H),
							(this.w = q),
							(this.y = V),
							(this.z = G),
							(this.C = K),
							(this.F = J),
							(this.G = W),
							(this.H = X),
							(this.I = ne),
							(this.c = this.D(new r.$0c())),
							(this.f = this.D(new r.$0c())),
							(this.h = new Set()),
							(this.m = this.D(new C.$re())),
							(this.onDidPerformUserAction = this.m.event),
							(this.n = this.D(new C.$re())),
							(this.onDidDisposeSession = this.n.event),
							(this.q = this.D(new r.$0c())),
							(this.s = this.y.createInstance(T.$WIc));
						const ee = !K.getWorkspace().folders.length,
							_ = x.get(
								N,
								ee ? b.StorageScope.APPLICATION : b.StorageScope.WORKSPACE,
								"",
							);
						if (_) {
							this.g = this.O(_);
							const se = Object.keys(this.g).length;
							se > 0 &&
								this.M("constructor", `Restored ${se} persisted sessions`);
						} else this.g = {};
						const te = this.P(),
							Q = te?.chat;
						Q &&
							(this.M("constructor", `Transferred session ${Q.sessionId}`),
							(this.g[Q.sessionId] = Q),
							(this.j = { sessionId: Q.sessionId, inputValue: te.inputValue })),
							this.D(x.onWillSaveState(() => this.J()));
						const Z = $.$R1.bindTo(ie);
						Y.getTreatment("chatVoteUpEnabled").then((se) => Z.set(!!se));
					}
					isEnabled(x) {
						return this.H.getContributedDefaultAgent(x) !== void 0;
					}
					J() {
						const x = Array.from(this.c.values())
							.filter((q) => q.initialLocation === y.ChatAgentLocation.Panel)
							.filter((q) => q.getRequests().length > 0);
						if (!this.C.getWorkspace().folders.length) this.L(x);
						else {
							let q = x;
							(q = q.concat(
								Object.values(this.g)
									.filter((G) => !this.c.has(G.sessionId))
									.filter((G) => G.requests.length),
							)),
								q.sort((G, K) => (K.creationDate ?? 0) - (G.creationDate ?? 0)),
								(q = q.slice(0, O)),
								q.length &&
									this.M("onWillSaveState", `Persisting ${q.length} sessions`);
							const V = JSON.stringify(q);
							q.length &&
								this.M("onWillSaveState", `Persisting ${V.length} chars`),
								this.t.store(
									N,
									V,
									b.StorageScope.WORKSPACE,
									b.StorageTarget.MACHINE,
								);
						}
						this.h.clear();
					}
					L(x) {
						const H = this.t.get(N, b.StorageScope.APPLICATION, ""),
							q = this.g;
						let V;
						if (H) {
							V = this.O(H);
							const W = Object.keys(V).length;
							W > 0 &&
								this.M("constructor", `Restored ${W} persisted sessions`);
						} else V = {};
						this.h.forEach((W) => delete V[W]),
							Object.values(q).forEach((W) => {
								const X = V[W.sessionId];
								X && W.requests.length > X.requests.length
									? (V[W.sessionId] = W)
									: !X && W.isNew && ((W.isNew = !1), (V[W.sessionId] = W));
							}),
							(this.g = V);
						const G = { ...this.g };
						for (const W of x) G[W.sessionId] = W;
						let K = Object.values(G);
						K.sort((W, X) => (X.creationDate ?? 0) - (W.creationDate ?? 0)),
							(K = K.slice(0, O));
						const J = JSON.stringify(K);
						this.t.store(
							N,
							J,
							b.StorageScope.APPLICATION,
							b.StorageTarget.MACHINE,
						);
					}
					notifyUserAction(x) {
						this.s.notifyUserAction(x), this.m.fire(x);
					}
					setChatSessionTitle(x, H) {
						const q = this.c.get(x);
						if (q) {
							q.setCustomTitle(H);
							return;
						}
						const V = this.g[x];
						V && (V.customTitle = H);
					}
					M(x, H) {
						H
							? this.u.trace(`ChatService#${x}: ${H}`)
							: this.u.trace(`ChatService#${x}`);
					}
					N(x, H) {
						this.u.error(`ChatService#${x} ${H}`);
					}
					O(x) {
						try {
							const H = (0, u.$ji)(JSON.parse(x));
							if (!Array.isArray(H)) throw new Error("Expected array");
							return H.reduce((V, G) => {
								for (const K of G.requests)
									Array.isArray(K.response)
										? (K.response = K.response.map((J) =>
												typeof J == "string" ? new d.$cl(J) : J,
											))
										: typeof K.response == "string" &&
											(K.response = [new d.$cl(K.response)]);
								return (V[G.sessionId] = (0, v.$52)(G)), V;
							}, {});
						} catch (H) {
							return (
								this.N(
									"deserializeChats",
									`Malformed session data: ${H}. [${x.substring(0, 20)}${x.length > 20 ? "..." : ""}]`,
								),
								{}
							);
						}
					}
					P() {
						const x = this.t.getObject(A, b.StorageScope.PROFILE, []),
							H = this.C.getWorkspace().folders[0]?.uri;
						if (!H) return;
						const q = H.toString(),
							V = Date.now(),
							G = x.find(
								(J) =>
									h.URI.revive(J.toWorkspace).toString() === q &&
									V - J.timestampInMilliseconds < R,
							),
							K = x.filter(
								(J) =>
									h.URI.revive(J.toWorkspace).toString() !== q &&
									V - J.timestampInMilliseconds < R,
							);
						return (
							this.t.store(
								A,
								JSON.stringify(K),
								b.StorageScope.PROFILE,
								b.StorageTarget.MACHINE,
							),
							G
						);
					}
					getHistory() {
						const H = Object.values(this.g)
							.filter((V) => V.requests.length > 0)
							.filter((V) => !this.c.has(V.sessionId))
							.filter((V) => !V.isImported)
							.map((V) => {
								const G = V.customTitle ?? v.$82.getDefaultTitle(V.requests);
								return {
									sessionId: V.sessionId,
									title: G,
									lastMessageDate: V.lastMessageDate,
									isActive: !1,
								};
							});
						return [
							...Array.from(this.c.values())
								.filter((V) => !V.isImported)
								.map((V) => {
									const G = V.title || (0, c.localize)(4764, null);
									return {
										sessionId: V.sessionId,
										title: G,
										lastMessageDate: V.lastMessageDate,
										isActive: !0,
									};
								}),
							...H,
						];
					}
					removeHistoryEntry(x) {
						this.g[x] && (this.h.add(x), delete this.g[x], this.J());
					}
					clearAllHistoryEntries() {
						Object.values(this.g).forEach((x) => this.h.add(x.sessionId)),
							(this.g = {}),
							this.J();
					}
					startSession(x, H) {
						return this.M("startSession"), this.Q(void 0, x, H);
					}
					Q(x, H, q) {
						const V = this.y.createInstance(v.$82, x, H);
						return this.c.set(V.sessionId, V), this.R(V, q), V;
					}
					async R(x, H) {
						try {
							this.M("initializeSession", `Initialize session ${x.sessionId}`),
								x.startInitialize(),
								await this.w.whenInstalledExtensionsRegistered();
							const q =
								this.H.getContributedDefaultAgent(x.initialLocation) ??
								this.H.getContributedDefaultAgent(y.ChatAgentLocation.Panel);
							if (!q) throw new E.$fb("No default agent contributed");
							await this.w.activateByEvent(`onChatParticipant:${q.id}`);
							const V = this.H.getActivatedAgents().find((J) => J.id === q.id);
							if (!V) throw new E.$fb("No default agent registered");
							const G = x.welcomeMessage
									? void 0
									: ((await V.provideWelcomeMessage?.(x.initialLocation, H)) ??
										void 0),
								K =
									G &&
									this.y.createInstance(
										v.$92,
										G.map((J) => (typeof J == "string" ? new d.$cl(J) : J)),
										(await V.provideSampleQuestions?.(x.initialLocation, H)) ??
											[],
									);
							x.initialize(K);
						} catch (q) {
							this.M("startSession", `initializeSession failed: ${q}`),
								x.setInitializationError(q),
								this.c.deleteAndDispose(x.sessionId),
								this.n.fire({
									sessionId: x.sessionId,
									reason: "initializationFailed",
								});
						}
					}
					getSession(x) {
						return this.c.get(x);
					}
					getOrRestoreSession(x) {
						this.M("getOrRestoreSession", `sessionId: ${x}`);
						const H = this.c.get(x);
						if (H) return H;
						const q = (0, u.$ji)(this.g[x]);
						if (q)
							return (
								x === this.transferredSessionData?.sessionId &&
									(this.j = void 0),
								this.Q(
									q,
									q.initialLocation ?? y.ChatAgentLocation.Panel,
									i.CancellationToken.None,
								)
							);
					}
					loadSessionFromContent(x) {
						return this.Q(
							x,
							x.initialLocation ?? y.ChatAgentLocation.Panel,
							i.CancellationToken.None,
						);
					}
					async resendRequest(x, H) {
						const q = this.c.get(x.session.sessionId);
						if (!q && q !== x.session)
							throw new Error(`Unknown session: ${x.session.sessionId}`);
						await q.waitForInitialization();
						const V = this.f.get(x.session.sessionId);
						V &&
							(this.M(
								"resendRequest",
								`Session ${x.session.sessionId} already has a pending request, cancelling...`,
							),
							V.cancel());
						const G = H?.location ?? q.initialLocation,
							K = H?.attempt ?? 0,
							J = !H?.noCommandDetection,
							W = this.H.getDefaultAgent(G);
						q.removeRequest(x.id, v.ChatRequestRemovalReason.Resend);
						const X = {
							...H,
							locationData: x.locationData,
							attachedContext: x.attachedContext,
						};
						await this.W(q, q.sessionId, x.message, K, J, W, G, X)
							.responseCompletePromise;
					}
					async sendRequest(x, H, q) {
						if (
							(this.M(
								"sendRequest",
								`sessionId: ${x}, message: ${H.substring(0, 20)}${H.length > 20 ? "[...]" : ""}}`,
							),
							!H.trim() && !q?.slashCommand && !q?.agentId)
						) {
							this.M("sendRequest", "Rejected empty message");
							return;
						}
						const V = this.c.get(x);
						if (!V) throw new Error(`Unknown session: ${x}`);
						if ((await V.waitForInitialization(), this.f.has(x))) {
							this.M(
								"sendRequest",
								`Session ${x} already has a pending request`,
							);
							return;
						}
						const G = q?.location ?? V.initialLocation,
							K = q?.attempt ?? 0,
							J = this.H.getDefaultAgent(G),
							W = this.S(x, H, G, q),
							X = W.parts.find((ie) => ie instanceof S.$U2)?.agent ?? J,
							Y = W.parts.find((ie) => ie instanceof S.$V2);
						return {
							...this.W(V, x, W, K, !q?.noCommandDetection, J, G, q),
							agent: X,
							slashCommand: Y?.command,
						};
					}
					S(x, H, q, V) {
						let G = V?.parserContext;
						if (V?.agentId) {
							const J = this.H.getAgent(V.agentId);
							if (!J) throw new Error(`Unknown agent: ${V.agentId}`);
							G = { selectedAgent: J };
							const W = V.slashCommand ? ` ${S.$R2}${V.slashCommand}` : "";
							H = `${S.$Q2}${J.name}${W} ${H}`;
						}
						return this.y.createInstance(I.$G2).parseChatRequest(x, H, q, G);
					}
					U(x) {
						this.q.get(x)?.cancel();
						const H = new i.$Ce();
						return this.q.set(x, H), H.token;
					}
					W(x, H, q, V, G, K, J, W) {
						const X = this.U(H);
						let Y;
						const ie =
								"kind" in q
									? void 0
									: q.parts.find(($e) => $e instanceof S.$U2),
							ne =
								"kind" in q
									? void 0
									: q.parts.find(($e) => $e instanceof S.$V2),
							ee =
								"kind" in q
									? void 0
									: q.parts.find(($e) => $e instanceof S.$W2),
							_ = [...x.getRequests()];
						let te = !1;
						const Q = ee ? "slashCommand" : "string",
							Z = new t.$0h();
						let se = !1;
						function re() {
							!se && Y?.response && (Z.complete(Y.response), (se = !0));
						}
						const le = new i.$Ce(),
							oe = le.token,
							pe = (async () => {
								const $e = (ve) => {
									oe.isCancellationRequested ||
										((te = !0),
										ve.kind === "markdownContent"
											? this.M(
													"sendRequest",
													`Provider returned progress for session ${x.sessionId}, ${ve.content.value.length} chars`,
												)
											: this.M(
													"sendRequest",
													`Provider returned progress: ${JSON.stringify(ve)}`,
												),
										x.acceptResponseProgress(Y, ve),
										re());
								};
								let ye, ue;
								const fe = new a.$le(!1),
									me = oe.onCancellationRequested(() => {
										this.M(
											"sendRequest",
											`Request for session ${x.sessionId} was cancelled`,
										),
											this.z.publicLog2("interactiveSessionProviderInvoked", {
												timeToFirstProgress: void 0,
												totalTime: fe.elapsed(),
												result: "cancelled",
												requestType: Q,
												agent: ie?.agent.id ?? "",
												agentExtensionId: ie?.agent.extensionId.value ?? "",
												slashCommand: ne
													? ne.command.name
													: ee?.slashCommand.command,
												chatSessionId: x.sessionId,
												location: J,
												citations: Y?.response?.codeCitations.length ?? 0,
												numCodeBlocks: z(Y.response?.response.toString() ?? "")
													.length,
												isParticipantDetected: !!ye,
											}),
											x.cancelRequest(Y);
									});
								try {
									let ve, ge, be;
									if (ie || (K && !ee)) {
										const Ce = async (Je, Te, Ee, Ie, Be) => {
											const Se = { variables: [] };
											Y =
												Ie ??
												x.addRequest(
													q,
													Se,
													V,
													Je,
													Te,
													W?.confirmation,
													W?.locationData,
													W?.attachedContext,
												);
											const ke = await this.G.resolveVariables(
												q,
												Y.attachedContext,
												x,
												$e,
												oe,
											);
											x.updateRequest(Y, ke);
											const Ue = (0, S.$N2)(Y.message),
												qe = (0, v.$02)(ke, Ue.diff);
											return {
												sessionId: H,
												requestId: Y.id,
												agentId: Je.id,
												message: Ue.message,
												command: Te?.name,
												variables: qe,
												enableCommandDetection: Ee,
												isParticipantDetected: Be,
												attempt: V,
												location: J,
												locationData: Y.locationData,
												acceptedConfirmationData: W?.acceptedConfirmationData,
												rejectedConfirmationData: W?.rejectedConfirmationData,
											};
										};
										if (
											this.I.getValue(
												"chat.experimental.detectParticipant.enabled",
											) !== !1 &&
											this.H.hasChatParticipantDetectionProviders() &&
											!ie &&
											!ee &&
											G
										) {
											const Je = this.X(_, x.sessionId, J, K.id),
												Te = await Ce(K, ne?.command, G, void 0, !1),
												Ee = await this.H.detectAgentOrCommand(
													Te,
													Je,
													{ location: J },
													oe,
												);
											Ee &&
												this.H.getAgent(Ee.agent.id)?.locations?.includes(J) &&
												(Y.response?.setAgent(Ee.agent, Ee.command),
												(ye = Ee.agent),
												(ue = Ee.command));
										}
										const Le = ye ?? ie?.agent ?? K,
											Fe = ue ?? ne?.command;
										await this.w.activateByEvent(`onChatParticipant:${Le.id}`);
										const Oe = this.X(_, x.sessionId, J, Le.id),
											xe = await Ce(Le, Fe, G, Y, !!ye),
											He = this.f.get(H);
										He && !He.requestId && (He.requestId = xe.requestId), re();
										const Ke = await this.H.invokeAgent(Le.id, xe, $e, Oe, oe);
										(ve = Ke),
											(ge = this.H.getFollowups(Le.id, xe, Ke, Oe, X)),
											(be =
												x.getRequests().length === 1 && !x.customTitle
													? this.H.getChatTitle(
															K.id,
															this.X(x.getRequests(), x.sessionId, J, Le.id),
															i.CancellationToken.None,
														)
													: void 0);
									} else if (ee && this.F.hasCommand(ee.slashCommand.command)) {
										(Y = x.addRequest(q, { variables: [] }, V)), re();
										const Ce = [];
										for (const Oe of x.getRequests())
											Oe.response &&
												(Ce.push({
													role: L.ChatMessageRole.User,
													content: [{ type: "text", value: Oe.message.text }],
												}),
												Ce.push({
													role: L.ChatMessageRole.Assistant,
													content: [
														{
															type: "text",
															value: Oe.response.response.toString(),
														},
													],
												}));
										const Le = q.text,
											Fe = await this.F.executeCommand(
												ee.slashCommand.command,
												Le.substring(
													ee.slashCommand.command.length + 1,
												).trimStart(),
												new f.$0N((Oe) => {
													$e(Oe);
												}),
												Ce,
												J,
												oe,
											);
										(ge = Promise.resolve(Fe?.followUp)), (ve = {});
									} else throw new Error("Cannot handle request");
									if (oe.isCancellationRequested) return;
									{
										ve ||
											(this.M(
												"sendRequest",
												`Provider returned no response for session ${x.sessionId}`,
											),
											(ve = {
												errorDetails: { message: (0, c.localize)(4765, null) },
											}));
										const Ce = ve.errorDetails?.responseIsFiltered
												? "filtered"
												: ve.errorDetails && te
													? "errorWithOutput"
													: ve.errorDetails
														? "error"
														: "success",
											Le = ne ? ne.command.name : ee?.slashCommand.command;
										this.z.publicLog2("interactiveSessionProviderInvoked", {
											timeToFirstProgress: ve.timings?.firstProgress,
											totalTime: ve.timings?.totalElapsed,
											result: Ce,
											requestType: Q,
											agent: ie?.agent.id ?? "",
											agentExtensionId: ie?.agent.extensionId.value ?? "",
											slashCommand: Le,
											chatSessionId: x.sessionId,
											isParticipantDetected: !!ye,
											location: J,
											citations: Y.response?.codeCitations.length ?? 0,
											numCodeBlocks: z(Y.response?.response.toString() ?? "")
												.length,
										}),
											x.setResponse(Y, ve),
											re(),
											this.M(
												"sendRequest",
												`Provider returned response for session ${x.sessionId}`,
											),
											x.completeResponse(Y),
											ge &&
												ge.then((Fe) => {
													x.setFollowups(Y, Fe),
														this.s.retrievedFollowups(
															ie?.agent.id ?? "",
															Le,
															Fe?.length ?? 0,
														);
												}),
											be?.then((Fe) => {
												Fe && x.setCustomTitle(Fe);
											});
									}
								} catch (ve) {
									if (
										(this.z.publicLog2("interactiveSessionProviderInvoked", {
											timeToFirstProgress: void 0,
											totalTime: void 0,
											result: "error",
											requestType: Q,
											agent: ie?.agent.id ?? "",
											agentExtensionId: ie?.agent.extensionId.value ?? "",
											slashCommand: ne
												? ne.command.name
												: ee?.slashCommand.command,
											chatSessionId: x.sessionId,
											location: J,
											citations: 0,
											numCodeBlocks: 0,
											isParticipantDetected: !!ye,
										}),
										this.u.error(
											`Error while handling chat request: ${(0, w.$xj)(ve, !0)}`,
										),
										Y)
									) {
										const be = { errorDetails: { message: ve.message } };
										x.setResponse(Y, be), re(), x.completeResponse(Y);
									}
								} finally {
									me.dispose();
								}
							})();
						return (
							this.f.set(x.sessionId, new B(le)),
							pe.finally(() => {
								this.f.deleteAndDispose(x.sessionId);
							}),
							{ responseCreatedPromise: Z.p, responseCompletePromise: pe }
						);
					}
					X(x, H, q, V) {
						const G = [];
						for (const K of x) {
							if (!K.response) continue;
							const J = this.H.getDefaultAgent(q)?.id;
							if (V !== K.response.agent?.id && V !== J) continue;
							const W = (0, S.$N2)(K.message),
								X = {
									sessionId: H,
									requestId: K.id,
									agentId: K.response.agent?.id ?? "",
									message: W.message,
									command: K.response.slashCommand?.name,
									variables: (0, v.$02)(K.variableData, W.diff),
									location: y.ChatAgentLocation.Panel,
								};
							G.push({
								request: X,
								response: K.response.response.value,
								result: K.response.result ?? {},
							});
						}
						return G;
					}
					async removeRequest(x, H) {
						const q = this.c.get(x);
						if (!q) throw new Error(`Unknown session: ${x}`);
						await q.waitForInitialization();
						const V = this.f.get(x);
						V?.requestId === H && (V.cancel(), this.f.deleteAndDispose(x)),
							q.removeRequest(H);
					}
					async adoptRequest(x, H) {
						if (!(H instanceof v.$22))
							throw new TypeError(
								"Can only adopt requests of type ChatRequestModel",
							);
						const q = this.c.get(x);
						if (!q) throw new Error(`Unknown session: ${x}`);
						await q.waitForInitialization();
						const V = H.session;
						if ((q.adoptRequest(H), H.response && !H.response.isComplete)) {
							const G = this.f.deleteAndLeak(V.sessionId);
							G && ((G.requestId = H.id), this.f.set(q.sessionId, G));
						}
					}
					async addCompleteRequest(x, H, q, V, G) {
						this.M("addCompleteRequest", `message: ${H}`);
						const K = this.c.get(x);
						if (!K) throw new Error(`Unknown session: ${x}`);
						await K.waitForInitialization();
						const J =
								typeof H == "string"
									? this.y.createInstance(I.$G2).parseChatRequest(x, H)
									: H,
							W = K.addRequest(J, q || { variables: [] }, V ?? 0);
						if (typeof G.message == "string")
							K.acceptResponseProgress(W, {
								content: new d.$cl(G.message),
								kind: "markdownContent",
							});
						else for (const X of G.message) K.acceptResponseProgress(W, X, !0);
						K.setResponse(W, G.result || {}),
							G.followups !== void 0 && K.setFollowups(W, G.followups),
							K.completeResponse(W);
					}
					cancelCurrentRequestForSession(x) {
						this.M("cancelCurrentRequestForSession", `sessionId: ${x}`),
							this.f.get(x)?.cancel(),
							this.f.deleteAndDispose(x);
					}
					clearSession(x) {
						this.M("clearSession", `sessionId: ${x}`);
						const H = this.c.get(x);
						if (!H) throw new Error(`Unknown session: ${x}`);
						if (H.initialLocation === y.ChatAgentLocation.Panel) {
							const q = JSON.parse(JSON.stringify(H));
							(q.isNew = !0), (this.g[x] = q);
						}
						this.c.deleteAndDispose(x),
							this.f.get(x)?.cancel(),
							this.f.deleteAndDispose(x),
							this.n.fire({ sessionId: x, reason: "cleared" });
					}
					hasSessions() {
						return !!Object.values(this.g);
					}
					transferChatSession(x, H) {
						const q = m.Iterable.find(
							this.c.values(),
							(G) => G.sessionId === x.sessionId,
						);
						if (!q)
							throw new Error(
								`Failed to transfer session. Unknown session ID: ${x.sessionId}`,
							);
						const V = this.t.getObject(A, b.StorageScope.PROFILE, []);
						V.push({
							chat: q.toJSON(),
							timestampInMilliseconds: Date.now(),
							toWorkspace: H,
							inputValue: x.inputValue,
						}),
							this.t.store(
								A,
								JSON.stringify(V),
								b.StorageScope.PROFILE,
								b.StorageTarget.MACHINE,
							),
							this.M(
								"transferChatSession",
								`Transferred session ${q.sessionId} to workspace ${H.toString()}`,
							);
					}
				};
				(e.$XIc = U),
					(e.$XIc = U =
						Ne(
							[
								j(0, b.$lq),
								j(1, o.$ik),
								j(2, M.$q2),
								j(3, p.$Li),
								j(4, s.$km),
								j(5, l.$Vi),
								j(6, P.$L2),
								j(7, k.$D2),
								j(8, y.$c3),
								j(9, D.$h4b),
								j(10, g.$6j),
								j(11, n.$gj),
							],
							U,
						));
				function z(F) {
					const x = F.split(`
`),
						H = [];
					let q;
					for (let V = 0; V < x.length; V++) {
						const G = x[V];
						if (q)
							new RegExp(`^\\s*${q.delimiter}\\s*$`).test(G) &&
								(H.push(q.languageId), (q = void 0));
						else {
							const K = G.match(/^(\s*)(`{3,}|~{3,})(\w*)/);
							K && (q = { delimiter: K[2], languageId: K[3] });
						}
					}
					return H;
				}
			},
		),
		