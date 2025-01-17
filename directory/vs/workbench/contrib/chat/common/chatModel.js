import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/marshalling.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/common/core/offsetRange.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import './chatAgents.js';
import './chatParserTypes.js';
import './chatService.js';
define(
			de[441],
			he([
				1, 0, 24, 15, 6, 94, 3, 197, 82, 19, 9, 47, 289, 4, 5, 34, 153, 329,
				218,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b, s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$92 =
						e.$82 =
						e.ChatModelInitState =
						e.ChatRequestRemovalReason =
						e.$42 =
						e.$32 =
						e.$22 =
							void 0),
					(e.$52 = v),
					(e.$62 = T),
					(e.$72 = P),
					(e.$02 = N),
					(e.$$2 = A),
					(e.$_2 = R),
					(e.$a3 = O);
				class l {
					static {
						this.a = 0;
					}
					get session() {
						return this.b;
					}
					get username() {
						return this.session.requesterUsername;
					}
					get avatarIconUri() {
						return this.session.requesterAvatarIconUri;
					}
					get attempt() {
						return this.e;
					}
					get variableData() {
						return this.d;
					}
					set variableData(U) {
						this.d = U;
					}
					get confirmation() {
						return this.f;
					}
					get locationData() {
						return this.g;
					}
					get attachedContext() {
						return this.h;
					}
					constructor(U, z, F, x = 0, H, q, V) {
						(this.b = U),
							(this.message = z),
							(this.d = F),
							(this.e = x),
							(this.f = H),
							(this.g = q),
							(this.h = V),
							(this.id = "request_" + l.a++);
					}
					adoptTo(U) {
						this.b = U;
					}
				}
				e.$22 = l;
				class y extends C.$1c {
					get onDidChangeValue() {
						return this.a.event;
					}
					get value() {
						return this.b;
					}
					constructor(U) {
						super(),
							(this.a = this.D(new w.$re())),
							(this.f = ""),
							(this.g = ""),
							(this.h = []),
							(this.b = (0, t.$6b)(U).map((z) =>
								(0, E.$el)(z)
									? { content: z, kind: "markdownContent" }
									: "kind" in z
										? z
										: { kind: "treeData", treeData: z },
							)),
							this.j(!0);
					}
					toString() {
						return this.f;
					}
					toMarkdown() {
						return this.g;
					}
					clear() {
						(this.b = []), this.j(!0);
					}
					updateContent(U, z) {
						if (U.kind === "markdownContent") {
							const F = this.b.length - 1,
								x = this.b[F];
							!x || x.kind !== "markdownContent" || !A(x.content, U.content)
								? this.b.push(U)
								: (x.content = R(x.content, U.content)),
								this.j(z);
						} else if (U.kind === "textEdit") {
							if (U.edits.length > 0) {
								let F = !1;
								for (let x = 0; !F && x < this.b.length; x++) {
									const H = this.b[x];
									H.kind === "textEditGroup" &&
										(0, r.$gh)(H.uri, U.uri) &&
										(H.edits.push(U.edits), (F = !0));
								}
								F ||
									this.b.push({
										kind: "textEditGroup",
										uri: U.uri,
										edits: [U.edits],
									}),
									this.j(z);
							}
						} else if (U.kind === "progressTask") {
							const F = this.b.push(U) - 1;
							this.j(z);
							const x = U.onDidAddProgress(() => {
								this.j(!1);
							});
							U.task?.().then((H) => {
								x.dispose(),
									typeof H == "string" && (this.b[F].content = new E.$cl(H)),
									this.j(!1);
							});
						} else this.b.push(U), this.j(z);
					}
					addCitation(U) {
						this.h.push(U), this.j();
					}
					j(U) {
						(this.f = this.b
							.map((z) =>
								z.kind === "treeData"
									? ""
									: z.kind === "inlineReference"
										? (0, r.$kh)(
												"uri" in z.inlineReference
													? z.inlineReference.uri
													: z.inlineReference,
											)
										: z.kind === "command"
											? z.command.title
											: z.kind === "textEditGroup"
												? (0, c.localize)(4761, null)
												: z.kind === "progressMessage"
													? ""
													: z.kind === "confirmation"
														? `${z.title}
${z.message}`
														: z.content.value,
							)
							.filter((z) => z.length > 0)
							.join(`

`)),
							(this.f += this.h.length
								? `

` + O(this.h)
								: ""),
							(this.g = this.b
								.map((z) =>
									z.kind === "inlineReference"
										? (0, r.$kh)(
												"uri" in z.inlineReference
													? z.inlineReference.uri
													: z.inlineReference,
											)
										: z.kind === "markdownContent" || z.kind === "markdownVuln"
											? z.content.value
											: "",
								)
								.filter((z) => z.length > 0)
								.join(`

`)),
							U || this.a.fire();
					}
				}
				e.$32 = y;
				class $ extends C.$1c {
					static {
						this.b = 0;
					}
					get session() {
						return this.u;
					}
					get isComplete() {
						return this.z;
					}
					get isCanceled() {
						return this.C;
					}
					get vote() {
						return this.F;
					}
					get voteDownReason() {
						return this.G;
					}
					get followups() {
						return this.g;
					}
					get response() {
						return this.f;
					}
					get result() {
						return this.H;
					}
					get username() {
						return this.session.responderUsername;
					}
					get avatarIcon() {
						return this.session.responderAvatarIcon;
					}
					get agent() {
						return this.w;
					}
					get slashCommand() {
						return this.y;
					}
					get agentOrSlashCommandDetected() {
						return this.h ?? !1;
					}
					get usedContext() {
						return this.j;
					}
					get contentReferences() {
						return this.m;
					}
					get codeCitations() {
						return this.n;
					}
					get progressMessages() {
						return this.q;
					}
					get isStale() {
						return this.t;
					}
					constructor(U, z, F, x, H, q = !1, V = !1, G, K, J, W) {
						super(),
							(this.u = z),
							(this.w = F),
							(this.y = x),
							(this.requestId = H),
							(this.z = q),
							(this.C = V),
							(this.F = G),
							(this.G = K),
							(this.H = J),
							(this.a = this.D(new w.$re())),
							(this.onDidChange = this.a.event),
							(this.m = []),
							(this.n = []),
							(this.q = []),
							(this.t = !1),
							(this.t =
								Array.isArray(U) &&
								(U.length !== 0 || ((0, E.$el)(U) && U.value.length !== 0))),
							(this.g = W ? [...W] : void 0),
							(this.f = this.D(new y(U))),
							this.D(this.f.onDidChangeValue(() => this.a.fire())),
							(this.id = "response_" + $.b++);
					}
					updateContent(U, z) {
						this.f.updateContent(U, z);
					}
					applyReference(U) {
						U.kind === "usedContext"
							? (this.j = U)
							: U.kind === "reference" && (this.m.push(U), this.a.fire());
					}
					applyCodeCitation(U) {
						this.n.push(U), this.f.addCitation(U), this.a.fire();
					}
					setAgent(U, z) {
						(this.w = U), (this.y = z), (this.h = !0), this.a.fire();
					}
					setResult(U) {
						(this.H = U), this.a.fire();
					}
					complete() {
						this.H?.errorDetails?.responseIsRedacted && this.f.clear(),
							(this.z = !0),
							this.a.fire();
					}
					cancel() {
						(this.z = !0), (this.C = !0), this.a.fire();
					}
					setFollowups(U) {
						(this.g = U), this.a.fire();
					}
					setVote(U) {
						(this.F = U), this.a.fire();
					}
					setVoteDownReason(U) {
						(this.G = U), this.a.fire();
					}
					setEditApplied(U, z) {
						return !this.response.value.includes(U) || !U.state
							? !1
							: ((U.state.applied = z), this.a.fire(), !0);
					}
					adoptTo(U) {
						(this.u = U), this.a.fire();
					}
				}
				e.$42 = $;
				function v(B) {
					return (
						S(B),
						"version" in B
							? B.version === 2
								? { ...B, version: 3, customTitle: B.computedTitle }
								: B
							: {
									version: 3,
									...B,
									lastMessageDate: B.creationDate,
									customTitle: void 0,
								}
					);
				}
				function S(B) {
					B.sessionId || (B.sessionId = (0, a.$9g)()),
						B.creationDate || (B.creationDate = I()),
						"version" in B &&
							(B.version === 2 || B.version === 3) &&
							(B.lastMessageDate || (B.lastMessageDate = I()));
				}
				function I() {
					const B = new Date();
					return B.setFullYear(B.getFullYear() - 1), B.getTime();
				}
				function T(B) {
					const U = B;
					return typeof U == "object" && typeof U.requesterUsername == "string";
				}
				function P(B) {
					const U = B;
					return (
						T(B) &&
						typeof U.creationDate == "number" &&
						typeof U.sessionId == "string" &&
						B.requests.every((z) => !z.usedContext || (0, f.$I2)(z.usedContext))
					);
				}
				var k;
				(function (B) {
					(B[(B.Removal = 0)] = "Removal"),
						(B[(B.Resend = 1)] = "Resend"),
						(B[(B.Adoption = 2)] = "Adoption");
				})(k || (e.ChatRequestRemovalReason = k = {}));
				var L;
				(function (B) {
					(B[(B.Created = 0)] = "Created"),
						(B[(B.Initializing = 1)] = "Initializing"),
						(B[(B.Initialized = 2)] = "Initialized");
				})(L || (e.ChatModelInitState = L = {}));
				let D = (b = class extends C.$1c {
					static getDefaultTitle(U) {
						const z = (0, t.$Sb)(U)?.message ?? "";
						return (typeof z == "string" ? z : z.text)
							.split(`
`)[0]
							.substring(0, 50);
					}
					get welcomeMessage() {
						return this.j;
					}
					get sessionId() {
						return this.m;
					}
					get requestInProgress() {
						const U = this.lastRequest;
						return !!U?.response && !U.response.isComplete;
					}
					get hasRequests() {
						return this.f.length > 0;
					}
					get lastRequest() {
						return this.f.at(-1);
					}
					get creationDate() {
						return this.n;
					}
					get lastMessageDate() {
						return this.q;
					}
					get t() {
						return this.H.getDefaultAgent(p.ChatAgentLocation.Panel);
					}
					get requesterUsername() {
						return (
							(this.t
								? this.t.metadata.requester?.name
								: this.C?.requesterUsername) ?? ""
						);
					}
					get responderUsername() {
						return (this.t ? this.t.fullName : this.C?.responderUsername) ?? "";
					}
					get requesterAvatarIconUri() {
						return this.t ? this.t.metadata.requester?.icon : this.u;
					}
					get responderAvatarIcon() {
						return this.t ? this.t?.metadata.themeIcon : this.w;
					}
					get initState() {
						return this.g;
					}
					get isImported() {
						return this.y;
					}
					get customTitle() {
						return this.z;
					}
					get title() {
						return this.z || b.getDefaultTitle(this.f);
					}
					get initialLocation() {
						return this.F;
					}
					constructor(U, z, F, x, H) {
						super(),
							(this.C = U),
							(this.F = z),
							(this.G = F),
							(this.H = x),
							(this.I = H),
							(this.a = this.D(new w.$re())),
							(this.onDidDispose = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidChange = this.b.event),
							(this.g = L.Created),
							(this.h = new i.$0h()),
							(this.y = !1),
							(this.y = (!!U && !P(U)) || (U?.isImported ?? !1)),
							(this.m = (P(U) && U.sessionId) || (0, a.$9g)()),
							(this.f = U ? this.J(U) : []),
							(this.n = (P(U) && U.creationDate) || Date.now()),
							(this.q = (P(U) && U.lastMessageDate) || this.n),
							(this.z = P(U) ? U.customTitle : void 0),
							(this.u =
								U?.requesterAvatarIconUri &&
								u.URI.revive(U.requesterAvatarIconUri)),
							(this.w = (0, u.$Bc)(U?.responderAvatarIconUri)
								? u.URI.revive(U.responderAvatarIconUri)
								: U?.responderAvatarIconUri);
					}
					J(U) {
						const z = U.requests;
						if (!Array.isArray(z))
							return (
								this.G.error(
									`Ignoring malformed session data: ${JSON.stringify(U)}`,
								),
								[]
							);
						if (U.welcomeMessage) {
							const F = U.welcomeMessage.map((x) =>
								typeof x == "string" ? new E.$cl(x) : x,
							);
							this.j = this.I.createInstance(M, F, []);
						}
						try {
							return z.map((F) => {
								const x =
										typeof F.message == "string"
											? this.M(F.message)
											: (0, o.$Y2)(F.message),
									H = this.L(F.variableData),
									q = new l(this, x, H);
								if (F.response || F.result || F.responseErrorDetails) {
									const V =
											F.agent && "metadata" in F.agent
												? (0, p.$i3)(F.agent)
												: void 0,
										G =
											"responseErrorDetails" in F
												? { errorDetails: F.responseErrorDetails }
												: F.result;
									(q.response = new $(
										F.response ?? [new E.$cl(F.response)],
										this,
										V,
										F.slashCommand,
										q.id,
										!0,
										F.isCanceled,
										F.vote,
										F.voteDownReason,
										G,
										F.followups,
									)),
										F.usedContext &&
											q.response.applyReference((0, d.$ji)(F.usedContext)),
										F.contentReferences?.forEach((K) =>
											q.response.applyReference((0, d.$ji)(K)),
										),
										F.codeCitations?.forEach((K) =>
											q.response.applyCodeCitation((0, d.$ji)(K)),
										);
								}
								return q;
							});
						} catch (F) {
							return this.G.error("Failed to parse chat data", F), [];
						}
					}
					L(U) {
						const z = U && Array.isArray(U.variables) ? U : { variables: [] };
						return (
							(z.variables = z.variables.map((F) =>
								F && "values" in F && Array.isArray(F.values)
									? {
											id: F.id ?? "",
											name: F.name,
											value: F.values[0]?.value,
											range: F.range,
											modelDescription: F.modelDescription,
											references: F.references,
										}
									: F,
							)),
							z
						);
					}
					M(U) {
						const z = [
							new o.$O2(
								new h.$pL(0, U.length),
								{
									startColumn: 1,
									startLineNumber: 1,
									endColumn: 1,
									endLineNumber: 1,
								},
								U,
							),
						];
						return { text: U, parts: z };
					}
					startInitialize() {
						if (this.initState !== L.Created)
							throw new Error(
								`ChatModel is in the wrong state for startInitialize: ${L[this.initState]}`,
							);
						this.g = L.Initializing;
					}
					deinitialize() {
						(this.g = L.Created), (this.h = new i.$0h());
					}
					initialize(U) {
						if (this.initState !== L.Initializing)
							throw new Error(
								`ChatModel is in the wrong state for initialize: ${L[this.initState]}`,
							);
						(this.g = L.Initialized),
							this.j || (this.j = U),
							this.h.complete(),
							this.b.fire({ kind: "initialize" });
					}
					setInitializationError(U) {
						if (this.initState !== L.Initializing)
							throw new Error(
								`ChatModel is in the wrong state for setInitializationError: ${L[this.initState]}`,
							);
						this.h.isSettled || this.h.error(U);
					}
					waitForInitialization() {
						return this.h.p;
					}
					getRequests() {
						return this.f;
					}
					addRequest(U, z, F, x, H, q, V, G) {
						const K = new l(this, U, z, F, q, V, G);
						return (
							(K.response = new $([], this, x, H, K.id)),
							this.f.push(K),
							(this.q = Date.now()),
							this.b.fire({ kind: "addRequest", request: K }),
							K
						);
					}
					setCustomTitle(U) {
						this.z = U;
					}
					updateRequest(U, z) {
						(U.variableData = z),
							this.b.fire({ kind: "changedRequest", request: U });
					}
					adoptRequest(U) {
						const z = U.session,
							F = z.f.findIndex((x) => x.id === U.id);
						F !== -1 &&
							(z.f.splice(F, 1),
							U.adoptTo(this),
							U.response?.adoptTo(this),
							this.f.push(U),
							z.b.fire({
								kind: "removeRequest",
								requestId: U.id,
								responseId: U.response?.id,
								reason: k.Adoption,
							}),
							this.b.fire({ kind: "addRequest", request: U }));
					}
					acceptResponseProgress(U, z, F) {
						if (
							(U.response ||
								(U.response = new $([], this, void 0, void 0, U.id)),
							U.response.isComplete)
						)
							throw new Error(
								"acceptResponseProgress: Adding progress to a completed response",
							);
						if (
							z.kind === "markdownContent" ||
							z.kind === "treeData" ||
							z.kind === "inlineReference" ||
							z.kind === "markdownVuln" ||
							z.kind === "progressMessage" ||
							z.kind === "command" ||
							z.kind === "textEdit" ||
							z.kind === "warning" ||
							z.kind === "progressTask" ||
							z.kind === "confirmation"
						)
							U.response.updateContent(z, F);
						else if (z.kind === "usedContext" || z.kind === "reference")
							U.response.applyReference(z);
						else if (z.kind === "agentDetection") {
							const x = this.H.getAgent(z.agentId);
							x &&
								(U.response.setAgent(x, z.command),
								this.b.fire({
									kind: "setAgent",
									agent: x,
									command: z.command,
								}));
						} else
							z.kind === "codeCitation"
								? U.response.applyCodeCitation(z)
								: z.kind === "move"
									? this.b.fire({ kind: "move", target: z.uri, range: z.range })
									: this.G.error(
											`Couldn't handle progress: ${JSON.stringify(z)}`,
										);
					}
					removeRequest(U, z = k.Removal) {
						const F = this.f.findIndex((H) => H.id === U),
							x = this.f[F];
						F !== -1 &&
							(this.b.fire({
								kind: "removeRequest",
								requestId: x.id,
								responseId: x.response?.id,
								reason: z,
							}),
							this.f.splice(F, 1),
							x.response?.dispose());
					}
					cancelRequest(U) {
						U.response && U.response.cancel();
					}
					setResponse(U, z) {
						U.response || (U.response = new $([], this, void 0, void 0, U.id)),
							U.response.setResult(z);
					}
					completeResponse(U) {
						if (!U.response)
							throw new Error("Call setResponse before completeResponse");
						U.response.complete();
					}
					setFollowups(U, z) {
						U.response && U.response.setFollowups(z);
					}
					setResponseModel(U, z) {
						(U.response = z), this.b.fire({ kind: "addResponse", response: z });
					}
					toExport() {
						return {
							requesterUsername: this.requesterUsername,
							requesterAvatarIconUri: this.requesterAvatarIconUri,
							responderUsername: this.responderUsername,
							responderAvatarIconUri: this.responderAvatarIcon,
							initialLocation: this.initialLocation,
							welcomeMessage: this.j?.content.map((U) =>
								Array.isArray(U) ? U : U.value,
							),
							requests: this.f.map((U) => {
								const z = {
										...U.message,
										parts: U.message.parts.map((H) =>
											H && "toJSON" in H ? H.toJSON() : H,
										),
									},
									F = U.response?.agent,
									x = F && "toJSON" in F ? F.toJSON() : F ? { ...F } : void 0;
								return {
									message: z,
									variableData: U.variableData,
									response: U.response
										? U.response.response.value.map((H) =>
												H.kind === "treeData"
													? H.treeData
													: H.kind === "markdownContent"
														? H.content
														: H,
											)
										: void 0,
									result: U.response?.result,
									followups: U.response?.followups,
									isCanceled: U.response?.isCanceled,
									vote: U.response?.vote,
									voteDownReason: U.response?.voteDownReason,
									agent: x,
									slashCommand: U.response?.slashCommand,
									usedContext: U.response?.usedContext,
									contentReferences: U.response?.contentReferences,
									codeCitations: U.response?.codeCitations,
								};
							}),
						};
					}
					toJSON() {
						return {
							version: 3,
							...this.toExport(),
							sessionId: this.sessionId,
							creationDate: this.n,
							isImported: this.y,
							lastMessageDate: this.q,
							customTitle: this.z,
						};
					}
					dispose() {
						this.f.forEach((U) => U.response?.dispose()),
							this.a.fire(),
							super.dispose();
					}
				});
				(e.$82 = D),
					(e.$82 = D = b = Ne([j(2, g.$ik), j(3, p.$c3), j(4, n.$Li)], D));
				let M = class {
					static {
						s = this;
					}
					static {
						this.a = 0;
					}
					get id() {
						return this.b;
					}
					constructor(U, z, F) {
						(this.content = U),
							(this.sampleQuestions = z),
							(this.d = F),
							(this.b = "welcome_" + s.a++);
					}
					get username() {
						return (
							this.d.getContributedDefaultAgent(p.ChatAgentLocation.Panel)
								?.fullName ?? ""
						);
					}
					get avatarIcon() {
						return this.d.getDefaultAgent(p.ChatAgentLocation.Panel)?.metadata
							.themeIcon;
					}
				};
				(e.$92 = M), (e.$92 = M = s = Ne([j(2, p.$c3)], M));
				function N(B, U) {
					return {
						variables: B.variables.map((z) => ({
							...z,
							range: z.range && {
								start: z.range.start - U,
								endExclusive: z.range.endExclusive - U,
							},
						})),
					};
				}
				function A(B, U) {
					if (B.baseUri && U.baseUri) {
						if (
							!(
								B.baseUri.scheme === U.baseUri.scheme &&
								B.baseUri.authority === U.baseUri.authority &&
								B.baseUri.path === U.baseUri.path &&
								B.baseUri.query === U.baseUri.query &&
								B.baseUri.fragment === U.baseUri.fragment
							)
						)
							return !1;
					} else if (B.baseUri || U.baseUri) return !1;
					return (
						(0, m.$zo)(B.isTrusted, U.isTrusted) &&
						B.supportHtml === U.supportHtml &&
						B.supportThemeIcons === U.supportThemeIcons
					);
				}
				function R(B, U) {
					const z = typeof U == "string" ? U : U.value;
					return {
						value: B.value + z,
						isTrusted: B.isTrusted,
						supportThemeIcons: B.supportThemeIcons,
						supportHtml: B.supportHtml,
						baseUri: B.baseUri,
					};
				}
				function O(B) {
					if (B.length === 0) return "";
					const U = B.reduce((F, x) => F.add(x.license), new Set());
					return U.size === 1
						? (0, c.localize)(4762, null, U.size)
						: (0, c.localize)(4763, null, U.size);
				}
			},
		),
		