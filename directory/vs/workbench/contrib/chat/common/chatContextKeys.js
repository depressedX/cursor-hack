define(de[207], he([1, 0, 4, 8]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$1 =
					e.$01 =
					e.$91 =
					e.$81 =
					e.$71 =
					e.$61 =
					e.$51 =
					e.$41 =
					e.$31 =
					e.$21 =
					e.$11 =
					e.$Z1 =
					e.$Y1 =
					e.$X1 =
					e.$W1 =
					e.$V1 =
					e.$U1 =
					e.$T1 =
					e.$S1 =
					e.$R1 =
					e.$Q1 =
						void 0),
				(e.$Q1 = new i.$5j("chatSessionResponseVote", "", {
					type: "string",
					description: (0, t.localize)(4743, null),
				})),
				(e.$R1 = new i.$5j("chatVoteUpEnabled", !1, {
					type: "boolean",
					description: (0, t.localize)(4744, null),
				})),
				(e.$S1 = new i.$5j("chatSessionResponseDetectedAgentOrCommand", !1, {
					type: "boolean",
					description: (0, t.localize)(4745, null),
				})),
				(e.$T1 = new i.$5j("chatResponseSupportsIssueReporting", !1, {
					type: "boolean",
					description: (0, t.localize)(4746, null),
				})),
				(e.$U1 = new i.$5j("chatSessionResponseFiltered", !1, {
					type: "boolean",
					description: (0, t.localize)(4747, null),
				})),
				(e.$V1 = new i.$5j("chatSessionResponseError", !1, {
					type: "boolean",
					description: (0, t.localize)(4748, null),
				})),
				(e.$W1 = new i.$5j("chatSessionRequestInProgress", !1, {
					type: "boolean",
					description: (0, t.localize)(4749, null),
				})),
				(e.$X1 = new i.$5j("chatResponse", !1, {
					type: "boolean",
					description: (0, t.localize)(4750, null),
				})),
				(e.$Y1 = new i.$5j("chatRequest", !1, {
					type: "boolean",
					description: (0, t.localize)(4751, null),
				})),
				(e.$Z1 = new i.$5j("chatEditApplied", !1, {
					type: "boolean",
					description: (0, t.localize)(4752, null),
				})),
				(e.$11 = new i.$5j("chatInputHasText", !1, {
					type: "boolean",
					description: (0, t.localize)(4753, null),
				})),
				(e.$21 = new i.$5j("chatInputHasFocus", !1, {
					type: "boolean",
					description: (0, t.localize)(4754, null),
				})),
				(e.$31 = new i.$5j("inChatInput", !1, {
					type: "boolean",
					description: (0, t.localize)(4755, null),
				})),
				(e.$41 = new i.$5j("inChat", !1, {
					type: "boolean",
					description: (0, t.localize)(4756, null),
				})),
				(e.$51 = new i.$5j("chatIsEnabled", !1, {
					type: "boolean",
					description: (0, t.localize)(4757, null),
				})),
				(e.$61 = new i.$5j("chatPanelParticipantRegistered", !1, {
					type: "boolean",
					description: (0, t.localize)(4758, null),
				})),
				(e.$71 = new i.$5j("chatExtensionInvalid", !1, {
					type: "boolean",
					description: (0, t.localize)(4759, null),
				})),
				(e.$81 = new i.$5j("chatCursorAtTop", !1)),
				(e.$91 = new i.$5j("chatInputHasAgent", !1)),
				(e.$01 = new i.$5j("chatLocation", void 0)),
				(e.$$1 = new i.$5j("quickChatHasFocus", !1, {
					type: "boolean",
					description: (0, t.localize)(4760, null),
				}));
		}),
		define(
			de[153],
			he([
				1, 0, 214, 15, 33, 6, 103, 3, 197, 407, 37, 8, 109, 5, 34, 62, 327, 21,
				207,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g3 =
						e.$f3 =
						e.$e3 =
						e.$d3 =
						e.$c3 =
						e.ChatAgentLocation =
							void 0),
					(e.$h3 = v),
					(e.$i3 = S);
				var s;
				(function (I) {
					(I.Panel = "panel"),
						(I.Terminal = "terminal"),
						(I.Notebook = "notebook"),
						(I.Editor = "editor");
				})(s || (e.ChatAgentLocation = s = {})),
					(function (I) {
						function T(P) {
							switch (P) {
								case "panel":
									return I.Panel;
								case "terminal":
									return I.Terminal;
								case "notebook":
									return I.Notebook;
								case "editor":
									return I.Editor;
							}
							return I.Panel;
						}
						I.fromRaw = T;
					})(s || (e.ChatAgentLocation = s = {})),
					(e.$c3 = (0, c.$Mi)("chatAgentService"));
				let l = class {
					static {
						this.AGENT_LEADER = "@";
					}
					constructor(T) {
						(this.g = T),
							(this.b = new Map()),
							(this.d = new E.$re()),
							(this.onDidChangeAgents = this.d.event),
							(this.h = new Map()),
							(this.j = new Map()),
							(this.e = f.$51.bindTo(this.g)),
							(this.f = f.$61.bindTo(this.g));
					}
					registerAgent(T, P) {
						if (this.getAgent(T))
							throw new Error(`Agent already registered: ${JSON.stringify(T)}`);
						P.isDefault && this.f.set(!0);
						const L = this,
							D = P.slashCommands;
						P = {
							...P,
							get slashCommands() {
								return D.filter(
									(N) =>
										!N.when ||
										L.g.contextMatchesRules(a.$Kj.deserialize(N.when)),
								);
							},
						};
						const M = { data: P };
						return (
							this.b.set(T, M),
							this.d.fire(void 0),
							(0, d.$Yc)(() => {
								this.b.delete(T),
									P.isDefault && this.f.set(!1),
									this.d.fire(void 0);
							})
						);
					}
					registerAgentImplementation(T, P) {
						const k = this.b.get(T);
						if (!k) throw new Error(`Unknown agent: ${JSON.stringify(T)}`);
						if (k.impl)
							throw new Error(
								`Agent already has implementation: ${JSON.stringify(T)}`,
							);
						return (
							k.data.isDefault && this.e.set(!0),
							(k.impl = P),
							this.d.fire(new y(k.data, P)),
							(0, d.$Yc)(() => {
								(k.impl = void 0),
									this.d.fire(void 0),
									k.data.isDefault && this.e.set(!1);
							})
						);
					}
					registerDynamicAgent(T, P) {
						T.isDynamic = !0;
						const k = { data: T, impl: P };
						return (
							this.b.set(T.id, k),
							this.d.fire(new y(T, P)),
							(0, d.$Yc)(() => {
								this.b.delete(T.id), this.d.fire(void 0);
							})
						);
					}
					registerAgentCompletionProvider(T, P) {
						return (
							this.h.set(T, P),
							{
								dispose: () => {
									this.h.delete(T);
								},
							}
						);
					}
					async getAgentCompletionItems(T, P, k) {
						return (await this.h.get(T)?.(P, k)) ?? [];
					}
					updateAgent(T, P) {
						const k = this.b.get(T);
						if (!k?.impl)
							throw new Error(
								`No activated agent with id ${JSON.stringify(T)} registered`,
							);
						(k.data.metadata = { ...k.data.metadata, ...P }),
							this.d.fire(new y(k.data, k.impl));
					}
					getDefaultAgent(T) {
						return (0, t.$jb)(
							this.getActivatedAgents(),
							(P) => !!P.isDefault && P.locations.includes(T),
						);
					}
					getContributedDefaultAgent(T) {
						return this.getAgents().find(
							(P) => !!P.isDefault && P.locations.includes(T),
						);
					}
					getSecondaryAgent() {
						return C.Iterable.find(
							this.b.values(),
							(T) => !!T.data.metadata.isSecondary,
						)?.data;
					}
					getAgent(T) {
						if (this.i(T)) return this.b.get(T)?.data;
					}
					i(T) {
						const P = this.b.get(T);
						return (
							!P?.data.when ||
							this.g.contextMatchesRules(a.$Kj.deserialize(P.data.when))
						);
					}
					getAgentByFullyQualifiedId(T) {
						const P = C.Iterable.find(
							this.b.values(),
							(k) => v(k.data) === T,
						)?.data;
						if (!(P && !this.i(P.id))) return P;
					}
					getAgents() {
						return Array.from(this.b.values())
							.map((T) => T.data)
							.filter((T) => this.i(T.id));
					}
					getActivatedAgents() {
						return Array.from(this.b.values())
							.filter((T) => !!T.impl)
							.filter((T) => this.i(T.data.id))
							.map((T) => new y(T.data, T.impl));
					}
					getAgentsByName(T) {
						return this.getAgents().filter((P) => P.name === T);
					}
					agentHasDupeName(T) {
						const P = this.getAgent(T);
						return P
							? this.getAgentsByName(P.name).filter(
									(k) => k.extensionId.value !== P.extensionId.value,
								).length > 0
							: !1;
					}
					async invokeAgent(T, P, k, L, D) {
						const M = this.b.get(T);
						if (!M?.impl) throw new Error(`No activated agent with id "${T}"`);
						return await M.impl.invoke(P, k, L, D);
					}
					async getFollowups(T, P, k, L, D) {
						const M = this.b.get(T);
						if (!M?.impl) throw new Error(`No activated agent with id "${T}"`);
						return M.impl?.provideFollowups
							? M.impl.provideFollowups(P, k, L, D)
							: [];
					}
					async getChatTitle(T, P, k) {
						const L = this.b.get(T);
						if (!L?.impl) throw new Error(`No activated agent with id "${T}"`);
						if (L.impl?.provideChatTitle) return L.impl.provideChatTitle(P, k);
					}
					registerChatParticipantDetectionProvider(T, P) {
						return (
							this.j.set(T, P),
							(0, d.$Yc)(() => {
								this.j.delete(T);
							})
						);
					}
					hasChatParticipantDetectionProviders() {
						return this.j.size > 0;
					}
					async detectAgentOrCommand(T, P, k, L) {
						const D = C.Iterable.first(this.j.values());
						if (!D) return;
						const M = this.getAgents().reduce((O, B) => {
								O.push({
									participant: B.id,
									disambiguation: B.disambiguation ?? [],
								});
								for (const U of B.slashCommands)
									O.push({
										participant: B.id,
										command: U.name,
										disambiguation: U.disambiguation ?? [],
									});
								return O;
							}, []),
							N = await D.provideParticipantDetection(
								T,
								P,
								{ ...k, participants: M },
								L,
							);
						if (!N) return;
						const A = this.getAgent(N.participant);
						if (!A) return;
						if (!N.command) return { agent: A };
						const R = A?.slashCommands.find((O) => O.name === N.command);
						if (R) return { agent: A, command: R };
					}
				};
				(e.$d3 = l), (e.$d3 = l = Ne([j(0, a.$6j)], l));
				class y {
					constructor(T, P) {
						(this.b = T), (this.d = P);
					}
					get id() {
						return this.b.id;
					}
					get name() {
						return this.b.name ?? "";
					}
					get fullName() {
						return this.b.fullName ?? "";
					}
					get description() {
						return this.b.description ?? "";
					}
					get extensionId() {
						return this.b.extensionId;
					}
					get extensionPublisherId() {
						return this.b.extensionPublisherId;
					}
					get extensionPublisherDisplayName() {
						return this.b.publisherDisplayName;
					}
					get extensionDisplayName() {
						return this.b.extensionDisplayName;
					}
					get isDefault() {
						return this.b.isDefault;
					}
					get metadata() {
						return this.b.metadata;
					}
					get slashCommands() {
						return this.b.slashCommands;
					}
					get locations() {
						return this.b.locations;
					}
					get disambiguation() {
						return this.b.disambiguation;
					}
					async invoke(T, P, k, L) {
						return this.d.invoke(T, P, k, L);
					}
					async provideFollowups(T, P, k, L) {
						return this.d.provideFollowups
							? this.d.provideFollowups(T, P, k, L)
							: [];
					}
					provideWelcomeMessage(T, P) {
						if (this.d.provideWelcomeMessage)
							return this.d.provideWelcomeMessage(T, P);
					}
					provideSampleQuestions(T, P) {
						if (this.d.provideSampleQuestions)
							return this.d.provideSampleQuestions(T, P);
					}
					toJSON() {
						return this.b;
					}
				}
				(e.$e3 = y), (e.$f3 = (0, c.$Mi)("chatAgentNameService"));
				let $ = class {
					static {
						b = this;
					}
					static {
						this.b = "chat.participantNameRegistry";
					}
					constructor(T, P, k, L) {
						if (
							((this.g = P),
							(this.h = k),
							(this.i = L),
							(this.e = (0, r.$_d)(this, Object.create(null))),
							(this.f = !1),
							!T.chatParticipantRegistry)
						)
							return;
						this.d = T.chatParticipantRegistry;
						const D = L.get(b.b, o.StorageScope.APPLICATION);
						try {
							this.e.set(JSON.parse(D ?? "{}"), void 0);
						} catch {
							L.remove(b.b, o.StorageScope.APPLICATION);
						}
						this.j();
					}
					j() {
						this.f ||
							this.k()
								.catch((T) =>
									this.h.warn("Failed to fetch chat participant registry", T),
								)
								.then(() => (0, i.$Nh)(5 * 60 * 1e3))
								.then(() => this.j());
					}
					async k() {
						const T = await this.g.request(
							{ type: "GET", url: this.d },
							w.CancellationToken.None,
						);
						if (T.res.statusCode !== 200)
							throw new Error("Could not get extensions report.");
						const P = await (0, p.$Gq)(T);
						if (!P || P.version !== 1)
							throw new Error("Unexpected chat participant registry response.");
						const k = P.restrictedChatParticipants;
						this.e.set(k, void 0),
							this.i.store(
								b.b,
								JSON.stringify(k),
								o.StorageScope.APPLICATION,
								o.StorageTarget.MACHINE,
							);
					}
					getAgentNameRestriction(T) {
						const P = this.l(T.name, T).get(),
							k = !T.fullName || this.l(T.fullName.replace(/\s/g, ""), T).get();
						return P && k;
					}
					l(T, P) {
						return this.e
							.map((L) => L[T.toLowerCase()])
							.map((L) =>
								L
									? L.some((D) =>
											(0, u.$Mf)(
												D,
												D.includes(".")
													? P.extensionId.value
													: P.extensionPublisherId,
											),
										)
									: !0,
							);
					}
					dispose() {
						this.f = !0;
					}
				};
				(e.$g3 = $),
					(e.$g3 =
						$ =
						b =
							Ne([j(0, g.$Bk), j(1, p.$Aq), j(2, n.$ik), j(3, o.$lq)], $));
				function v(I) {
					return `${I.extensionId.value}.${I.id}`;
				}
				function S(I) {
					const T = "name" in I ? I : { ...I, name: I.id };
					return (
						"extensionPublisherId" in T ||
							(T.extensionPublisherId = T.extensionPublisher ?? ""),
						"extensionDisplayName" in T || (T.extensionDisplayName = ""),
						"extensionId" in T || (T.extensionId = new h.$Gn("")),
						(0, m.$ji)(T)
					);
				}
			},
		),
		