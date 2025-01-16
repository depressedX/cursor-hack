define(
			de[118],
			he([
				1, 0, 3, 20, 148, 126, 624, 108, 70, 258, 340, 10, 5, 21, 18, 341, 148,
				83, 272, 893, 1113, 83, 47, 17, 74, 61, 69, 62, 134, 45, 21, 32, 25,
				477, 620, 226, 627, 401, 315, 232, 286, 356, 90, 669, 735, 23, 66, 400,
				567, 1485, 684, 58, 31, 67, 191, 285, 644, 1116, 1484, 1487, 126, 42,
				337, 140, 1481, 59, 112, 65, 54, 22, 332, 359, 715, 204, 241, 837, 397,
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
				U,
				z,
				F,
				x,
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
				pe,
				$e,
				ye,
				ue,
				fe,
				me,
				ve,
				ge,
				be,
				Ce,
				Le,
				Fe,
				Oe,
				xe,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sfc = e.$Rfc = e.$Nfc = e.AIContextConfigKeys = void 0),
					(e.$Lfc = Je),
					(e.$Mfc = Ee),
					(e.$Ofc = Be),
					(e.$Pfc = Se),
					(e.$Qfc = ke);
				var He;
				(function (Me) {
					(Me.personalContext = "aicontext.personalContext"),
						(Me.additionalFiles = "aicontext.additionalFiles");
				})(He || (e.AIContextConfigKeys = He = {}));
				async function* Ke() {}
				function Je(Me) {
					const De = {};
					for (const je of Me) {
						const Ve = je.codeBlock?.relativeWorkspacePath ?? "";
						De[Ve] || (De[Ve] = 0), (De[Ve] = Math.max(De[Ve], je.score));
					}
					return Object.entries(De)
						.map(
							([je, Ve]) =>
								new f.$Uu({ file: { relativeWorkspacePath: je }, score: Ve }),
						)
						.sort((je, Ve) => Ve.score - je.score);
				}
				function Te(Me) {
					const De = new Map();
					for (const je of Me.topNodes) {
						const Ve = je.file?.relativeWorkspacePath;
						Ve !== void 0 &&
							(De.has(Ve) || De.set(Ve, 0),
							De.set(Ve, Math.max(De.get(Ve), je.score)));
					}
					return Array.from(De.entries())
						.map(
							([je, Ve]) =>
								new f.$Uu({ file: { relativeWorkspacePath: je }, score: Ve }),
						)
						.sort((je, Ve) => Ve.score - je.score);
				}
				async function* Ee(Me) {
					for await (const De of Me) yield De;
				}
				e.$Nfc = (0, h.$Mi)("aiService");
				var Ie;
				(function (Me) {
					(Me[(Me.context = 0)] = "context"), (Me[(Me.chat = 1)] = "chat");
				})(Ie || (Ie = {}));
				async function* Be(Me) {
					if (Me.headers.get("content-type")?.includes("text/event-stream")) {
						const De = Me.body.getReader(),
							Re = new TextDecoder("utf-8");
						for (;;) {
							const { value: je, done: Ve } = await De.read();
							if (Ve) break;
							const et = Re.decode(je).split(`
`);
							for (const rt of et)
								if (rt.startsWith("data: ")) {
									const ft = rt.slice(6);
									if (ft === "[DONE]") return;
									yield JSON.parse(ft);
								}
						}
					} else throw new Error("Response is not an event-stream");
				}
				async function Se(Me, De = "") {
					let Re = [];
					for await (const je of Me) Re.push(je);
					return Re.join(De);
				}
				function ke(Me, De) {
					const Re = `<${De}>`,
						je = `</${De}>`;
					return Me.includes(Re)
						? Me.slice(Me.indexOf(Re) + Re.length, Me.indexOf(je))
						: null;
				}
				const Ue = !0;
				let qe = class extends t.$1c {
					constructor(
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
						xt,
						Vt,
						Bt,
						Gt,
						Mt,
						Ut,
						ei,
						mi,
						ii,
						Dt,
						Jt,
					) {
						super(),
							(this.C = De),
							(this.F = Re),
							(this.G = je),
							(this.H = Ve),
							(this.I = Ze),
							(this.J = et),
							(this.L = rt),
							(this.M = ft),
							(this.N = bt),
							(this.O = nt),
							(this.Q = lt),
							(this.R = ct),
							(this.S = gt),
							(this.U = ht),
							(this.W = Rt),
							(this.X = Nt),
							(this.Y = jt),
							(this.Z = ti),
							(this.$ = kt),
							(this.ab = hi),
							(this.bb = Kt),
							(this.cb = di),
							(this.db = Ye),
							(this.eb = ze),
							(this.fb = Xe),
							(this.gb = It),
							(this.hb = Lt),
							(this.ib = xt),
							(this.jb = Vt),
							(this.kb = Bt),
							(this.lb = Gt),
							(this.mb = Mt),
							(this.nb = Ut),
							(this.ob = ei),
							(this.pb = mi),
							(this.qb = ii),
							(this.rb = Dt),
							(this.sb = Jt),
							(this.h = "aiService.prompts"),
							(this.streamingAbortControllers = new Map()),
							(this.repositories = []),
							(this.tb = new ye.$Jc(100)),
							(this.wb = new Map()),
							(this.y = this.D(this.ab.createScoped(this))),
							(this.j = this.mb.createInstance(te.$q6b, { service: g.$q0 })),
							(this.n = this.mb.createInstance(te.$q6b, { service: b.$6_ })),
							(this.q = this.mb.createInstance(te.$q6b, { service: s.$J0 })),
							(this.w = this.mb.createInstance(te.$q6b, { service: Z.$N_ })),
							(this.t = this.mb.createInstance(te.$q6b, { service: se.$$9 })),
							(this.u = this.mb.createInstance(te.$q6b, { service: re.$H_ })),
							this.y.createImplicitEffect(() => {
								this.ab.workspaceUserPersistentStorage
									.exampleCodebaseQuestions === void 0 &&
									this.ab.applicationUserPersistentStorage.bubbleTimesLeft >
										0 &&
									this.ab.nonPersistentStorage.repositoryIndexingStatus
										?.case === "synced" &&
									(this.ab.setWorkspaceUserPersistentStorage(
										"exampleCodebaseQuestions",
										[],
									),
									this.computeExampleCodebaseQuestions()
										.then((si) =>
											this.ab.setWorkspaceUserPersistentStorage(
												"exampleCodebaseQuestions",
												si,
											),
										)
										.catch((si) => console.error(si)));
							}),
							this.y.createImplicitEffect(() => {
								const Zt =
										this.ab.nonPersistentStorage.inprogressAIGenerations.map(
											(ri) => ri.generationUUID,
										),
									ci = [];
								for (const [ri, $i] of this.streamingAbortControllers)
									Zt.includes(ri) || ($i.abort(), ci.push(ri));
								for (const ri of ci)
									this.streamingAbortControllers.get(ri)?.abort(),
										this.streamingAbortControllers.delete(ri);
							}),
							(this.repositories = []);
						for (const si of this.N.repositories) this.addRepository(si);
						this.D(
							this.N.onDidAddRepository((si) => {
								this.addRepository(si);
							}),
						),
							this.D(
								this.N.onDidRemoveRepository((si) => {
									for (const Zt of this.repositories)
										Zt.vscodeId === si.id &&
											Zt.disposables.forEach((ci) => ci.dispose());
									this.repositories = this.repositories.filter(
										(Zt) => Zt.vscodeId !== si.id,
									);
								}),
							),
							(this.f = this.vb()),
							this.D(this.$.onWillSaveState(() => this.ub()));
					}
					async getHighLevelFolderDescription() {
						return this.db.indexingProvider?.getHighLevelFolderDescription();
					}
					getPastGenerations() {
						return Array.from(this.tb.values()).sort(
							(De, Re) => Re.unixMs - De.unixMs,
						);
					}
					registerNewGeneration(De) {
						this.streamingAbortControllers.size > 100 &&
							(console.warn(
								"There are more than 100 streaming abort controllers. This should not happen unless the user is starting a massive amount of generations in parallel. Clearing all of them.",
							),
							this.streamingAbortControllers.clear());
						const Re = De.generationUUID ?? (0, y.$9g)(),
							je = new AbortController();
						return (
							this.streamingAbortControllers.set(Re, je),
							this.ab.setNonPersistentStorage(
								"inprogressAIGenerations",
								(Ve) => [
									...Ve,
									{
										generationUUID: Re,
										metadata: De.metadata ?? { type: void 0 },
										queuePositionResponse: void 0,
									},
								],
							),
							this.tb.set(Re, {
								unixMs: Date.now(),
								generationUUID: Re,
								type: De.metadata?.type,
								textDescription:
									De.metadata !== void 0 && "textDescription" in De.metadata
										? De.metadata.textDescription
										: void 0,
							}),
							[Re, je]
						);
					}
					async availableDocs(De) {
						return (
							await (
								await this.aiClient()
							).availableDocs(De, { headers: (0, _.$m6b)((0, y.$9g)()) })
						).docs;
					}
					async refreshDefaultModels() {
						try {
							const De = this.X.getModel(),
								Ve = (
									await (
										await this.aiClient()
									).availableModels(
										new w.$aG({
											isNightly: this.L.version.includes("nightly"),
										}),
										{ headers: (0, _.$m6b)((0, y.$9g)()) },
									)
								).models;
							this.ab.setApplicationUserPersistentStorage(
								"availableDefaultModels2",
								Ve,
							),
								this.ab.applicationUserPersistentStorage.oneTimeSettings
									.shouldMigrateFromGpt4ToGpt4o === !0 &&
									this.migrateFromGpt4ToGpt4o(),
								this.ab.applicationUserPersistentStorage.oneTimeSettings
									.shouldMigrateFromGpt4oToClaudeSonnet === !0 &&
									this.migrateFromGpt4oToClaudeSonnet(),
								this.maybeMigrateBackToGpt4oIfUsingOpenAIApiKey();
						} catch (De) {
							console.error("Error refreshing default models:", De);
						}
						this.X.handleAvailableModelsChange();
					}
					migrateFromGpt4ToGpt4o() {
						if (
							this.ab.applicationUserPersistentStorage.oneTimeSettings
								.shouldMigrateFromGpt4ToGpt4o === !1
						)
							return;
						this.ab.setApplicationUserPersistentStorage(
							"oneTimeSettings",
							"shouldMigrateFromGpt4ToGpt4o",
							!1,
						),
							this.X.enableModel("gpt-4o");
						const De =
								this.ab.applicationUserPersistentStorage.aiSettings.openAIModel,
							Re =
								this.ab.applicationUserPersistentStorage.aiSettings
									.regularChatModel,
							je =
								this.ab.applicationUserPersistentStorage.aiSettings.cmdKModel,
							Ve =
								this.ab.applicationUserPersistentStorage.aiSettings
									.terminalCmdKModel;
						this.X.disableModel("gpt-4"),
							De === "gpt-4" &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"openAIModel",
									"gpt-4o",
								),
							Re === "gpt-4" &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"regularChatModel",
									"gpt-4o",
								),
							je === "gpt-4" &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"cmdKModel",
									"gpt-4o",
								),
							Ve === "gpt-4" &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"terminalCmdKModel",
									"gpt-4o",
								);
					}
					migrateFromGpt4oToClaudeSonnet() {
						if (
							this.ab.applicationUserPersistentStorage.oneTimeSettings
								.shouldMigrateFromGpt4oToClaudeSonnet === !1 ||
							this.X.getUseOpenAIKey() === !0
						)
							return;
						this.ab.setApplicationUserPersistentStorage(
							"oneTimeSettings",
							"shouldMigrateFromGpt4oToClaudeSonnet",
							!1,
						),
							this.X.enableModel("claude-3.5-sonnet");
						const De =
								this.ab.applicationUserPersistentStorage.aiSettings.openAIModel,
							Re =
								this.ab.applicationUserPersistentStorage.aiSettings
									.regularChatModel,
							je =
								this.ab.applicationUserPersistentStorage.aiSettings.cmdKModel,
							Ve =
								this.ab.applicationUserPersistentStorage.aiSettings
									.terminalCmdKModel;
						(De === "gpt-4o" || De === "gpt-4") &&
							this.ab.setApplicationUserPersistentStorage(
								"aiSettings",
								"openAIModel",
								"claude-3.5-sonnet",
							),
							(Re === "gpt-4o" || Re === "gpt-4") &&
								(this.ab.setApplicationUserPersistentStorage(
									"oneTimeSettings",
									"didMigrateFromGpt4oToClaudeSonnet",
									!0,
								),
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"regularChatModel",
									"claude-3.5-sonnet",
								)),
							(je === "gpt-4o" || je === "gpt-4") &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"cmdKModel",
									"claude-3.5-sonnet",
								),
							(Ve === "gpt-4o" || Ve === "gpt-4") &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"terminalCmdKModel",
									"claude-3.5-sonnet",
								);
					}
					maybeMigrateBackToGpt4oIfUsingOpenAIApiKey() {
						this.X.getUseOpenAIKey() === !0 &&
							this.maybeMigrateBackFromClaudeSonnetToGpt4o();
					}
					maybeMigrateBackFromClaudeSonnetToGpt4o() {
						if (
							this.ab.applicationUserPersistentStorage.oneTimeSettings
								.didMigrateBackFromClaudeSonnetToGpt4o ||
							!this.ab.applicationUserPersistentStorage.oneTimeSettings
								.didMigrateFromGpt4oToClaudeSonnet
						)
							return;
						this.ab.setApplicationUserPersistentStorage(
							"oneTimeSettings",
							"didMigrateBackFromClaudeSonnetToGpt4o",
							!0,
						);
						const De =
								this.ab.applicationUserPersistentStorage.aiSettings.openAIModel,
							Re =
								this.ab.applicationUserPersistentStorage.aiSettings
									.regularChatModel,
							je =
								this.ab.applicationUserPersistentStorage.aiSettings.cmdKModel,
							Ve =
								this.ab.applicationUserPersistentStorage.aiSettings
									.terminalCmdKModel;
						this.X.enableModel("gpt-4o"),
							De === "claude-3.5-sonnet" &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"openAIModel",
									"gpt-4o",
								),
							Re === "claude-3.5-sonnet" &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"regularChatModel",
									"gpt-4o",
								),
							je === "claude-3.5-sonnet" &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"cmdKModel",
									"gpt-4o",
								),
							Ve === "claude-3.5-sonnet" &&
								this.ab.setApplicationUserPersistentStorage(
									"aiSettings",
									"terminalCmdKModel",
									"gpt-4o",
								);
					}
					setLastDraftMessage(De) {
						this.z = De;
					}
					getLastDraftMessage() {
						return this.z;
					}
					getPreviousPrompts(De) {
						return [
							...this.f
								.filter((Re) => De === void 0 || Re.commandType === De)
								.map((Re) => Re.text),
						].concat(this.z != null ? [this.z] : []);
					}
					addToPromptHistory({ prompt: De, commandType: Re }) {
						this.f.length > 300 && this.f.splice(0, 50),
							(this.f.length === 0 || this.f[this.f.length - 1].text !== De) &&
								this.f.push({ text: De, commandType: Re });
					}
					ub() {
						const De = this.f.map((Re) => ({
							text: Re.text,
							commandType: Re.commandType,
						}));
						this.$.store(
							this.h,
							JSON.stringify(De),
							c.StorageScope.WORKSPACE,
							c.StorageTarget.MACHINE,
						);
					}
					vb() {
						return JSON.parse(
							this.$.get(this.h, c.StorageScope.WORKSPACE, "[]"),
						);
					}
					getModelDetails({
						longContextModeEnabled: De,
						specificModelField: Re,
					} = {}) {
						let je = De
							? this.X.getLongContextModel()
							: Re === "regular-chat"
								? this.X.getRegularChatModel()
								: Re === "cmd-k"
									? this.X.getCmdKModel()
									: Re === "terminal-cmd-k"
										? this.X.getTerminalCmdKModel()
										: Re === "composer"
											? this.X.getComposerModel()
											: this.X.getModel();
						je = je ?? void 0;
						let Ve = this.W.getApiKeyForModel(je);
						const Ze = this.X.getUseApiKeyForModel(je),
							et = this.ab.applicationUserPersistentStorage.azureState;
						return (
							(!Ze || !Ve) && (Ve = void 0),
							new l.$Zs({
								apiKey: Ve,
								modelName: je,
								azureState: et,
								openaiApiBaseUrl:
									this.ab.applicationUserPersistentStorage.openAIBaseUrl,
							})
						);
					}
					async *streamResponse({
						modelDetails: De,
						streamer: Re,
						streamerURL: je,
						generationUUID: Ve,
						rethrowCancellation: Ze,
						rerun: et,
						failSilently: rt = !1,
						source: ft = "other",
						startTime: bt,
					}) {
						const nt = await this.aiClient();
						let lt = !0,
							ct;
						const gt = () => {
							!lt ||
								De === void 0 ||
								nt
									.checkQueuePosition(
										new w.$rH({ origRequestId: Ve, modelDetails: De }),
									)
									.then((ht) => {
										this.ab.setNonPersistentStorage(
											"inprogressAIGenerations",
											(Rt) => Rt.generationUUID === Ve,
											(Rt) => ({ ...Rt, queuePositionResponse: ht }),
										),
											(ct = setTimeout(gt, 1e3));
									})
									.catch((ht) => {});
						};
						ct = setTimeout(gt, 1e3);
						try {
							try {
								let ht = 0;
								for await (const Rt of Re)
									ht++,
										yield Rt,
										lt &&
											(Rt instanceof Q.$KC
												? Rt.response.case === "editStream" && (lt = !1)
												: typeof Rt != "object" || Rt === null
													? (lt = !1)
													: "text" in Rt
														? Rt.text !== "" && (lt = !1)
														: (lt = !1));
								this.streamingAbortControllers.delete(Ve);
							} catch (ht) {
								if (
									((lt = !1),
									ht.code !== u.Code.Canceled && console.error(ht),
									!(ht instanceof u.ConnectError) ||
										(ht.code === u.Code.Canceled ||
											rt ||
											this.Y.handleError(ht, De, Ve, je, ft, et),
										Ze))
								)
									throw ht;
							}
						} finally {
							(lt = !1),
								this.ab.setNonPersistentStorage(
									"inprogressAIGenerations",
									(ht) => ht.filter((Rt) => Rt.generationUUID !== Ve),
								);
						}
					}
					async *streamResponseText(De) {
						const Re = this.streamResponse(De);
						for await (const { text: je } of Re) yield je;
					}
					buildMultiEditUserRequest({
						prompt: De,
						commandType: Re,
						chunk: je,
					}) {
						let Ve;
						this.getPersonalContext() && (Ve = this.getPersonalContext());
						let Ze;
						switch (Re) {
							case A.CommandType.GENERATE:
								Ze = "generate";
								break;
							case A.CommandType.EDIT:
								Ze = "edit";
								break;
							case A.CommandType.CHAT:
								Ze = "freeform";
								break;
							default:
								throw new Error("Invalid command type");
						}
						const et = this.Q.getWorkspace().folders,
							rt = et.length > 0 ? et[0].uri.path : "";
						return {
							message: De,
							currentRootPath: rt,
							currentFileName: je.path ?? "",
							currentFileContents: je.fileContents ?? "",
							precedingCode: je.precedingCode,
							suffixCode: je.suffixCode,
							currentSelection: je.currentSelection,
							copilotCodeBlocks: [],
							customCodeBlocks: [],
							codeBlockIdentifiers: [],
							system: Ve,
							msgType: Ze,
						};
					}
					buildMultiEditMessage({
						prompt: De,
						commandType: Re,
						userMessages: je,
						botMessages: Ve,
						chunks: Ze,
						apiKey: et,
						model: rt,
					}) {
						const ft = this.Q.getWorkspace().folders,
							bt = ft.length > 0 ? ft[0].uri.path : "";
						return {
							userMessages: je,
							botMessages: Ve,
							userRequests: Ze.map((lt) =>
								this.buildMultiEditUserRequest({
									prompt: De,
									chunk: lt,
									commandType: Re,
								}),
							),
							rootPath: bt,
							apiKey: et ?? void 0,
							customModel: rt ?? void 0,
							noStorageMode: this.W.reactivePrivacyMode() ?? void 0,
						};
					}
					decrementBubbleTimesLeft() {
						this.ab.applicationUserPersistentStorage.bubbleTimesLeft > 0 &&
							this.ab.setApplicationUserPersistentStorage(
								"bubbleTimesLeft",
								this.ab.applicationUserPersistentStorage.bubbleTimesLeft - 1,
							);
					}
					updatePersonalContext(De) {
						this.$.store(
							He.personalContext,
							De,
							c.StorageScope.APPLICATION,
							c.StorageTarget.MACHINE,
						);
					}
					updateAdditionalFiles(De) {
						this.R.updateValue(
							He.additionalFiles,
							De,
							a.ConfigurationTarget.USER,
						);
					}
					getPersonalContext() {
						return this.$.get(
							He.personalContext,
							c.StorageScope.APPLICATION,
							"",
						);
					}
					getAdditionalFiles() {
						return this.R.getValue(He.additionalFiles);
					}
					addRepository(De) {
						const Re = [],
							je = [],
							Ve = [];
						De.provider.remotes &&
							De.provider.remotes.forEach((et) => {
								const rt = et.fetchUrl ?? et.pushUrl;
								rt && (Re.push(rt), je.push(et.name));
							}),
							De.provider.onDidChangeRemotes &&
								Ve.push(
									De.provider.onDidChangeRemotes(() => {
										(Re.length = 0),
											(je.length = 0),
											De.provider.remotes &&
												De.provider.remotes.forEach((et) => {
													const rt = et.fetchUrl ?? et.pushUrl;
													rt && (Re.push(rt), je.push(et.name));
												});
									}),
								);
						const Ze = De.provider.rootUri
							? this.Q.asRelativePath(De.provider.rootUri)
							: "";
						this.repositories.push({
							repoInfo: new f.$mv({
								relativeWorkspacePath: Ze,
								remoteUrls: Re,
								remoteNames: je,
							}),
							vscodeId: De.provider.id,
							disposables: Ve,
						});
					}
					aiClient() {
						return this.j.get();
					}
					uploadClient() {
						return this.n.get();
					}
					cmdKClient() {
						return this.q.get();
					}
					interpreterClient() {
						return this.w.get();
					}
					aiBranchClient() {
						return this.t.get();
					}
					hallucinatedFunctionsClient() {
						return this.u.get();
					}
					getLastActiveFileEditor() {
						return this.Z.getLastActiveFileEditor();
					}
					async getCurrentFileInfoFromRawWithScrubbingAndNotebookHandling(
						De,
						Re,
						je,
						Ve,
						Ze,
					) {
						let et = je;
						if (De.scheme === G.Schemas.aiChat) return;
						let rt = await this.gb.cleanText(Re, De.path);
						if (Ve) {
							const bt = rt.split(`
`),
								nt = et.startLineNumber - 1,
								lt = et.endLineNumber - 1;
							bt.splice(nt, lt - nt + 1, Ve),
								(rt = bt.join(`
`)),
								(et = new $.$iL(
									et.startLineNumber,
									et.startColumn,
									et.startLineNumber +
										Ve.split(`
`).length -
										1,
									et.startColumn,
								));
						}
						const ft = (0, d.$eJb)(this.F.activeEditorPane);
						if (ft && Ze !== void 0) {
							const bt = ft.getCellsInRange();
							let nt = bt.findIndex((ti) => ti.id === Ze);
							const lt = bt.map((ti) => ti.getText()),
								gt = bt
									.map((ti) => ti.model.outputs)
									.map((ti) => {
										const kt = ti
											.map((hi) =>
												hi.outputs
													.map((di) => {
														if (di.mime === "text/plain")
															return di.data.toString();
														if (
															di.mime === "application/vnd.code.notebook.error"
														) {
															const Ye = di.data.toString();
															let ze = JSON.parse(Ye);
															const Xe = ze.stack
																.replace(
																	/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g,
																	"",
																)
																.replace(/\u001b\[0/g, "");
															return (
																(ze = { ...ze, stack: Xe }),
																JSON.stringify(ze, null, 2)
															);
														} else if (
															di.mime === "application/vnd.code.notebook.stderr"
														)
															return di.data.toString();
														return "";
													})
													.join(`

`),
											)
											.join(`

`);
										return kt.length > 400
											? kt.slice(0, 200) +
													`
...output cropped...
` +
													kt.slice(-200)
											: kt;
									}),
								ht = lt.map((ti, kt) => {
									if (ti === "" || ti === void 0) return "";
									const hi = `in[${kt}]: ${ti}`;
									if (gt[kt] === "" || gt[kt] === void 0) return hi;
									const Kt = `out[${kt}]: ${gt[kt]}`;
									return `${hi}

${Kt}`;
								}),
								Rt =
									ht.slice(0, nt).join(`

`) +
									`

`,
								Nt =
									`

` +
									ht.slice(nt + 1).join(`

`);
							rt = Rt + rt + Nt;
							const jt =
								Rt.split(`
`).length - 1;
							(et = new $.$iL(
								jt + et.startLineNumber,
								et.startColumn,
								jt + et.endLineNumber,
								et.endColumn,
							)),
								(De = ft.textModel?.uri ?? De);
						}
						return new o.$Ws({
							relativeWorkspacePath: this.Q.asRelativePath(De),
							contents: rt,
							cursorPosition: new l.$ys({
								line: et.startLineNumber - 1,
								column: et.startColumn - 1,
							}),
							selection: new l.$Ns({
								startPosition: new l.$ys({
									line: et.startLineNumber - 1,
									column: et.startColumn - 1,
								}),
								endPosition: new l.$ys({
									line: et.endLineNumber - 1,
									column: et.endColumn - 1,
								}),
							}),
							languageId: "",
						});
					}
					async getCurrentFileInfo(De, Re) {
						return await this.Z.getCurrentFileInfo(De, Re);
					}
					async getCursorRulesFile() {
						if (this.ab.workspaceUserPersistentStorage.ignoreCursorRules === !0)
							return;
						const De = performance.now();
						let Re;
						try {
							const je = await this.Q.resolveRelativePath(".cursorrules");
							return (
								(Re = await this.eb.createModelReference(je)),
								Re.object.textEditorModel.getValue()
							);
						} catch {
							return;
						} finally {
							const je = performance.now();
							console.log(`[Explicit context] took ${je - De}ms`),
								Re?.dispose();
						}
					}
					async getExplicitContext() {
						return new o.$6s({
							context: this.getPersonalContext(),
							repoContext: await this.getCursorRulesFile(),
						});
					}
					async rerankSearch(De, Re, je, Ve = P.SearchType.keyword) {
						const Ze = await this.aiClient(),
							et = this.getModelDetails();
						switch (Ve) {
							case P.SearchType.keyword: {
								const rt = await this.fb.search(De, Re ?? 16),
									ft = Ze.rerankResults(
										new p.$KF({
											query: De,
											numBlocks: je,
											contextResults: {
												case: "fileSearchResults",
												value: { results: rt },
											},
											apiDetails: et,
										}),
									).then((bt) => bt.results);
								return { origResults: rt, rerankedResults: ft };
							}
							case P.SearchType.vector: {
								const rt = await this.db.parallelSearch(De, Re),
									ft = Ze.rerankResults(
										new p.$KF({
											query: De,
											numBlocks: je,
											contextResults: {
												case: "codeSearchResults",
												value: { results: rt },
											},
											apiDetails: et,
										}),
									).then((nt) => nt.results);
								return { origResults: Je(rt), rerankedResults: ft };
							}
						}
					}
					docsCitationsMiddleware(De, Re, je) {
						this.ab.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							(et) => et.bubbleId === Re && et.tabId === je,
							"docsCitations",
							[],
						);
						const Ve = (et) => {
							this.ab.setWorkspaceUserPersistentStorage(
								"persistentChatMetadata",
								(rt) => rt.bubbleId === Re && rt.tabId === je,
								"docsCitations",
								(rt) => [...(rt ?? []), et],
							);
						};
						return (async function* () {
							for await (const et of De)
								et !== null &&
									typeof et == "object" &&
									"docsReference" in et &&
									et.docsReference !== void 0 &&
									Ve(et.docsReference),
									yield et;
						})();
					}
					commitNotesMiddleware(De, Re, je, Ve) {
						try {
							const Ze = this.pb,
								et = this.aiClient();
							return (async function* () {
								for await (const ft of De) {
									if (
										ft !== null &&
										typeof ft == "object" &&
										"statusUpdates" in ft &&
										ft.statusUpdates !== void 0 &&
										ft.statusUpdates !== null
									) {
										console.log("[Status Updates]", ft.statusUpdates);
										const bt = ft.statusUpdates.updates.at(0);
										if (
											bt !== void 0 &&
											bt.message.startsWith("Opening commits: ")
										) {
											const lt = bt.message
												.split("Opening commits: ")[1]
												.split(",")
												.map((Nt) => Nt.trim())
												.filter((Nt) => Nt.length > 0);
											console.log("[Fetching commits]", lt);
											let ct = [];
											try {
												ct = await Promise.all(
													lt.map(async (Nt) => {
														try {
															return await Ze.getCommitRawByCommitHash(Nt, 10);
														} catch (jt) {
															console.error(
																`Error fetching commit diff for ${Nt}:`,
																jt,
															);
															return;
														}
													}),
												);
											} catch (Nt) {
												console.error("[Error fetching commit diffs]", Nt),
													(ct = []);
											}
											const ht = lt
												.map(
													(Nt, jt) =>
														new w.$IE({ commitHash: Nt, diff: ct[jt] }),
												)
												.filter((Nt) => Nt.diff !== void 0);
											(await et).continueChatRequestWithCommits({
												requestId: Ve,
												commits: ht,
											});
										}
									}
									yield ft;
								}
							})();
						} catch (Ze) {
							return (
								console.error("[AI SERVICE ERROR]", Ze),
								(async function* () {})()
							);
						}
					}
					webCitationsAndStatusMiddleware(De, Re, je) {
						this.ab.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							(rt) => rt.bubbleId === Re && rt.tabId === je,
							"webCitations",
							[],
						);
						const Ve = (rt) => {
								console.log("[Adding Web Citations]", rt),
									this.ab.setWorkspaceUserPersistentStorage(
										"persistentChatMetadata",
										(ft) => ft.bubbleId === Re && ft.tabId === je,
										"webCitations",
										(ft) => [...(ft ?? []), ...rt.references],
									);
							},
							Ze = (rt) => {
								this.ab.setWorkspaceUserPersistentStorage(
									"persistentChatMetadata",
									(ft) => ft.bubbleId === Re && ft.tabId === je,
									"statusUpdates",
									rt,
								);
							};
						return (async function* () {
							for await (const rt of De)
								rt !== null &&
									typeof rt == "object" &&
									"webCitation" in rt &&
									rt.webCitation !== void 0 &&
									rt.webCitation !== null &&
									Ve(rt.webCitation),
									rt !== null &&
										typeof rt == "object" &&
										"statusUpdates" in rt &&
										rt.statusUpdates !== void 0 &&
										rt.statusUpdates !== null &&
										Ze(rt.statusUpdates),
									yield rt;
						})();
					}
					intermediateChunkMiddleware(De, Re, je) {
						const Ve = () => {
							this.ab.setWorkspaceUserPersistentStorage(
								"persistentChatMetadata",
								(ft) => ft.bubbleId === Re && ft.tabId === je,
								"intermediateChunks",
								[],
							);
						};
						Ve();
						const Ze = (ft) => {
							this.ab.setWorkspaceUserPersistentStorage(
								"persistentChatMetadata",
								(bt) => bt.bubbleId === Re && bt.tabId === je,
								"intermediateSectionType",
								ft,
							);
						};
						Ze();
						const et = (ft, bt) => {
							const nt =
									this.ab.workspaceUserPersistentStorage.persistentChatMetadata.find(
										(ti) => ti.bubbleId === Re && ti.tabId === je,
									)?.intermediateSectionType,
								lt =
									bt.chunkType === E.ChunkType.CODEBASE
										? "codebase"
										: bt.chunkType === E.ChunkType.LONG_FILE
											? "long-file"
											: "docs";
							nt !== lt && Ve(), Ze(lt);
							const ct =
								this.ab.workspaceUserPersistentStorage.persistentChatMetadata.find(
									(ti) => ti.bubbleId === Re && ti.tabId === je,
								);
							if (ct === void 0) return;
							let gt = ct.intermediateChunks ?? [];
							const ht = (ti, kt) =>
								ti.startLine === kt.startLine && ti.fileName === kt.fileName;
							let Rt = gt.findIndex((ti) => ht(ti.chunkIdentity, bt));
							Rt === -1 && (Rt = gt.length);
							const Nt = gt.find((ti) => ht(ti.chunkIdentity, bt));
							gt = [...gt.filter((ti) => !ht(ti.chunkIdentity, bt))];
							const jt = {
								chunkIdentity: Nt?.chunkIdentity ?? bt,
								completeText: (Nt?.completeText ?? "") + ft,
							};
							gt.splice(Rt, 0, jt),
								this.ab.setWorkspaceUserPersistentStorage(
									"persistentChatMetadata",
									(ti) => ti.bubbleId === Re && ti.tabId === je,
									"intermediateChunks",
									gt,
								);
						};
						return (async function* () {
							for await (const ft of De)
								ft !== null &&
									typeof ft == "object" &&
									"isBigFile" in ft &&
									ft.isBigFile &&
									Ze("long-file"),
									ft !== null &&
										typeof ft == "object" &&
										"chunkIdentity" in ft &&
										ft.chunkIdentity !== void 0 &&
										et(ft.intermediateText ?? "", ft.chunkIdentity),
									yield ft;
						})();
					}
					updateRepoQueryWithStreamedResults(De, Re) {
						return ({ response: je, removeHyde: Ve = !1 }) => {
							this.nb.setChatData(
								"tabs",
								(Ze, et) => Ze.tabId === De,
								"bubbles",
								(Ze, et) => Ze.id === Re,
								(Ze) => {
									if (Ze.type === pe.BubbleType.USER_CHAT) return Ze;
									let et;
									if (
										(Ze?.contextData?.hydeResults !== void 0
											? (et = JSON.parse(
													JSON.stringify(Ze.contextData.hydeResults),
												))
											: (et = { reasoning: "", queries: [] }),
										Ve)
									)
										return {
											...Ze,
											contextData: { ...Ze.contextData, hydeResults: void 0 },
										};
									if (je === void 0)
										return {
											...Ze,
											contextData: {
												...Ze.contextData,
												hydeResults: { reasoning: "", queries: [] },
											},
										};
									if (
										(je.queryOrReasoning.case === "reasoning" &&
											(et.reasoning += je.queryOrReasoning.value),
										je.queryOrReasoning.case === "query")
									) {
										const { index: rt, partialQuery: ft } =
											je.queryOrReasoning.value;
										rt == et.queries.length &&
											et.queries.push({ text: "", globsNewLineSeparated: "" }),
											ft.case === "glob"
												? (et.queries[rt].globsNewLineSeparated += ft.value)
												: ft.case === "text" &&
													(et.queries[rt].text += ft.value);
									}
									return {
										...Ze,
										contextData: { ...Ze.contextData, hydeResults: et },
									};
								},
							);
						};
					}
					getLongContextTokenLimit(De, Re) {
						return De ?? (Re === "cursor-long-context" ? 14e4 : void 0);
					}
					async reportGenerationFeedback(De, Re, je) {
						await (await this.aiClient()).reportGenerationFeedback({
							requestId: De,
							feedbackType: Re,
							comment: je,
						});
					}
					async useCodebaseContext(
						De,
						Re,
						je,
						Ve,
						Ze = P.SearchType.keyword,
						et = (rt) => {},
					) {
						let rt;
						Re !== void 0 && this.bb.useCodebaseContext(Re.bubbleId, Re.tabId);
						const ft = Ze === P.SearchType.keyword,
							nt = this.xb(De).length === 0 && De.length > 2;
						let lt;
						for (const [Kt, di] of [...De.entries()].reverse())
							if (
								di.type === le.ConversationMessage_MessageType.HUMAN &&
								di.text !== ""
							) {
								lt = De[Kt].text;
								break;
							}
						if (lt === void 0) {
							const Kt = this.ab;
							return (async function* () {
								yield "You don't seem to have provided any request in your last message. Please type something and try again.",
									Kt.setNonPersistentStorage("inprogressAIGenerations", (di) =>
										di.filter((Ye) => Ye.generationUUID !== je),
									);
							})();
						}
						this.I.publicLogCapture("Submitted freeform context"),
							this.I.publicLogCapture("Submitted Prompt context");
						const ct =
							Ve?.overrideModelDetails ||
							this.getModelDetails({ specificModelField: "regular-chat" });
						this.I.publicLogCapture("submitted.freeformcontext", {
							model: ct.modelName,
						});
						let gt = De.map((Kt, di) => (Kt.text !== "" ? Kt.text : null))
							.filter((Kt) => Kt !== null)
							.join(`
`);
						const ht = 4e3 * 3;
						gt.length > ht && (gt = gt.slice(gt.length - ht));
						const Rt = De.filter(
							(Kt) => Kt.type === le.ConversationMessage_MessageType.HUMAN,
						).reverse()[0];
						let Nt = [];
						Ze === P.SearchType.vector
							? (Nt = [{ text: gt, globsNewLineSeparated: "" }])
							: (Nt = [{ text: Rt.text, globsNewLineSeparated: "" }]);
						let jt,
							ti = [];
						this.decrementBubbleTimesLeft();
						const kt =
							ct.modelName === "cursor-long-context" ||
							((Re && Re.longContextModeEnabled) ?? !1);
						if (ft && Re !== void 0) {
							const Kt = this.updateRepoQueryWithStreamedResults(
								Re.tabId,
								Re.aiBubbleId ?? "",
							);
							Kt({}), et(pe.RepoStep.GeneratingQueries);
							try {
								for await (const ze of this.aiQueryV2(De, Ze, nt, Re))
									Kt({ response: ze });
							} catch (ze) {
								throw (Kt({ removeHyde: !0 }), ze);
							}
							const Ye = this.nb.chatData.tabs
								.find(({ tabId: ze }) => ze === Re.tabId)
								?.bubbles.find(({ id: ze }) => ze === Re.aiBubbleId)
								?.contextData?.hydeResults;
							Ye?.queries !== void 0 &&
								Ye?.queries.length > 0 &&
								(Nt = Ye.queries.map((ze) => ({
									...ze,
									text: ze.text.trim(),
								})));
						}
						et(pe.RepoStep.SearchingFiles);
						let hi = [];
						if (Ze === P.SearchType.keyword) {
							this.I.publicLogCapture("Context Chat - Keyword Search");
							const Kt = this.xb(De),
								di = await this.fb.searchMultipleQueries(
									Nt,
									{ topK: kt ? 100 : 16, minK: 4, finalK: kt ? 100 : 16 },
									void 0,
									Kt,
								);
							(hi = di
								.map((xt) => {
									if (xt.file !== void 0)
										return new o.$Ps({
											relativeWorkspacePath: xt.file?.relativeWorkspacePath,
											contents: xt.file?.contents,
											range: {
												startPosition: { line: 1, column: 1 },
												endPosition: {
													line:
														xt.file?.contents.split(`
`).length + 1,
													column: 1,
												},
											},
										});
								})
								.filter((xt) => xt !== void 0)),
								(rt = performance.now()),
								(ti = di.sort((xt, Vt) => Vt.score - xt.score));
							const Ye = { case: "fileSearchResults", value: { results: ti } },
								ze = this.nb.getRescorerFromEmbeddingsResults(Ye),
								Xe = this.getLongContextTokenLimit(
									Re?.tokenLimit,
									ct.modelName,
								),
								{ contextResults: It, conversationHistory: Lt } = kt
									? await this.nb.fitLongContextDataIntoTokenLimit(
											{ conversationHistory: De, contextResults: Ye },
											Xe,
											() => ze,
										)
									: { contextResults: Ye, conversationHistory: De };
							jt = new p.$ZF({
								canHandleFilenamesAfterLanguageIds: !0,
								workspaceRootPath: this.C.getWorkspaceRootPath(),
								conversation: Lt,
								modelDetails: ct,
								explicitContext: await this.getExplicitContext(),
								rerankResults: !0,
								rerankResultsV2:
									this.ab.workspaceUserPersistentStorage.shouldRerankByDefault,
								contextResults: It,
								longContextMode: kt,
								isEval: Re?.isEval,
								requestId: je,
								...(Re !== void 0 ? await this.addAdditionalContext(Re) : {}),
							});
						} else if (Ze === P.SearchType.vector) {
							this.I.publicLogCapture("Context Chat - Vector Search");
							const Kt = kt
									? { topK: 1e3, minK: 80, finalK: 1e3 }
									: { topK: 100, minK: 20, finalK: 200 },
								Ye =
									this.xb(De).length > 0
										? "{" +
											this.xb(De)
												.map((Bt) => `${Bt}`)
												.join(",") +
											"}"
										: void 0,
								ze = await this.db.searchMultipleQueries(Nt, Kt, {
									newlineSepGlobFilter: Ve?.globFilter ?? Ye,
								});
							(hi = ze
								.map((Bt) => Bt.codeBlock)
								.filter((Bt) => Bt !== void 0 && Bt.contents.length < 2e4)),
								(ti = kt
									? await this.getLongContextFileSearchResults(ze, De)
									: Je(ze)),
								(rt = performance.now());
							const Xe = kt
									? { case: "fileSearchResults", value: { results: ti } }
									: {
											case: "codeSearchResults",
											value: { results: ze, allFiles: [] },
										},
								It = this.nb.getRescorerFromEmbeddingsResults(Xe),
								Lt = this.getLongContextTokenLimit(
									Re?.tokenLimit,
									ct.modelName,
								),
								{ contextResults: xt, conversationHistory: Vt } = kt
									? await this.nb.fitLongContextDataIntoTokenLimit(
											{ conversationHistory: De, contextResults: Xe },
											Lt,
											() => It,
										)
									: { contextResults: Xe, conversationHistory: De };
							jt = new p.$ZF({
								canHandleFilenamesAfterLanguageIds: !0,
								workspaceRootPath: this.C.getWorkspaceRootPath(),
								conversation: Vt,
								modelDetails: ct,
								explicitContext: await this.getExplicitContext(),
								rerankResults: !0,
								rerankResultsV2:
									this.ab.workspaceUserPersistentStorage.shouldRerankByDefault,
								contextResults: xt,
								longContextMode: kt,
								...(Re !== void 0 ? await this.addAdditionalContext(Re) : {}),
								isEval: Re?.isEval,
								requestId: je,
							});
						} else throw new Error("Invalid search type");
						if (
							(Re !== void 0 &&
								(this.O.executeCommand(ie.$iX, Re.tabId, Re.bubbleId, hi),
								this.bb.updateGlobalContext(Re, ti)),
							this.addToPromptHistory({
								prompt: lt,
								commandType: A.CommandType.CHAT,
							}),
							this.ab.applicationUserPersistentStorage.checklistState
								?.doneCommandEnter !== !0)
						) {
							const Kt =
								this.ab.applicationUserPersistentStorage.checklistState;
							this.ab.setApplicationUserPersistentStorage(
								"checklistState",
								(di) => ({ ...(di ?? {}), doneCommandEnter: !0 }),
							);
						}
						return { request: jt, modelDetails: ct, codeBlockResults: hi };
					}
					async streamChatContext(De, Re, je, Ve, Ze = P.SearchType.keyword) {
						const [et, rt] = this.registerNewGeneration({
							metadata: Re,
							generationUUID: je,
						});
						let ft = !1;
						rt.signal.addEventListener("abort", () => {
							ft = !0;
						});
						const bt = await this.getCurrentFileInfo();
						this.ab.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							({ bubbleId: Ut, tabId: ei }) =>
								Ut === Re.bubbleId && ei === Re.tabId,
							(Ut) => {
								const ei = { ...Ut };
								return (
									(ei.predictedContext = {
										usedDocs: [],
										usedCodebase: {},
										usedCurrentFile:
											bt && Ve?.removeAllContext !== !0
												? { relativeFilePath: bt.relativeWorkspacePath }
												: void 0,
									}),
									ei
								);
							},
						);
						const nt = this.X.getChatDesiredTokenLimit(),
							lt = (Ut) => {
								this.nb.setChatData(
									"tabs",
									(ei, mi) => ei.tabId === Re.tabId,
									"bubbles",
									(ei, mi) => ei.id === Re.aiBubbleId,
									(ei) => ({
										...ei,
										repoStep: Ut,
										searchTypeIfCodebaseQuery: Ze,
									}),
								);
							};
						let ct = performance.now();
						this.bb.useCodebaseContext(Re.bubbleId, Re.tabId);
						const gt = Ze === P.SearchType.keyword,
							Rt = this.xb(De).length === 0 && De.length > 2;
						let Nt;
						for (const [Ut, ei] of [...De.entries()].reverse())
							if (
								ei.type === le.ConversationMessage_MessageType.HUMAN &&
								ei.text !== ""
							) {
								Nt = De[Ut].text;
								break;
							}
						if (Nt === void 0) {
							const Ut = this.ab;
							return (async function* () {
								yield "You don't seem to have provided any request in your last message. Please type something and try again.",
									Ut.setNonPersistentStorage("inprogressAIGenerations", (ei) =>
										ei.filter((mi) => mi.generationUUID !== je),
									);
							})();
						}
						this.I.publicLogCapture("Submitted freeform context"),
							this.I.publicLogCapture("Submitted Prompt context");
						const jt =
							Ve?.overrideModelDetails ||
							this.getModelDetails({ specificModelField: "regular-chat" });
						this.I.publicLogCapture("submitted.freeformcontext", {
							model: jt.modelName,
						});
						let ti = De.map((Ut, ei) => (Ut.text !== "" ? Ut.text : null))
							.filter((Ut) => Ut !== null)
							.join(`
`);
						const kt = 4e3 * 3;
						ti.length > kt && (ti = ti.slice(ti.length - kt));
						const hi = De.filter(
							(Ut) => Ut.type === le.ConversationMessage_MessageType.HUMAN,
						).reverse()[0];
						let Kt = [];
						Ze === P.SearchType.vector
							? (Kt = [{ text: ti, globsNewLineSeparated: "" }])
							: (Kt = [{ text: hi.text, globsNewLineSeparated: "" }]);
						let di,
							Ye = [];
						this.decrementBubbleTimesLeft();
						const ze =
							jt.modelName === "cursor-long-context" ||
							(Re.longContextModeEnabled ?? !1);
						if (
							(console.info(
								"Time to get model details",
								performance.now() - ct,
							),
							(ct = performance.now()),
							gt)
						) {
							const Ut = this.updateRepoQueryWithStreamedResults(
								Re.tabId,
								Re.aiBubbleId ?? "",
							);
							Ut({}), lt(pe.RepoStep.GeneratingQueries);
							try {
								for await (const ii of this.aiQueryV2(De, Ze, Rt, Re)) {
									if (ft) throw new Error("Aborted");
									Ut({ response: ii });
								}
							} catch (ii) {
								throw (Ut({ removeHyde: !0 }), ii);
							}
							const mi = this.nb.chatData.tabs
								.find(({ tabId: ii }) => ii === Re.tabId)
								?.bubbles.find(({ id: ii }) => ii === Re.aiBubbleId)
								?.contextData?.hydeResults;
							mi?.queries !== void 0 &&
								mi?.queries.length > 0 &&
								(Kt = mi.queries.map((ii) => ({
									...ii,
									text: ii.text.trim(),
								})));
						}
						if (
							(console.info("Time to get hyde results", performance.now() - ct),
							(ct = performance.now()),
							ft)
						)
							throw new Error("Aborted");
						lt(pe.RepoStep.SearchingFiles);
						let Xe = [];
						if (Ze === P.SearchType.keyword) {
							let Ut = ze ? 100 : 16;
							this.I.publicLogCapture("Context Chat - Keyword Search");
							const ei = this.xb(De),
								mi = await this.fb.searchMultipleQueries(
									Kt,
									{ topK: Ut, minK: 4, finalK: Ut },
									void 0,
									ei,
								);
							if (ft) throw new Error("Aborted");
							(Xe = mi
								.map((ci) => {
									if (ci.file !== void 0)
										return new o.$Ps({
											relativeWorkspacePath: ci.file?.relativeWorkspacePath,
											contents: ci.file?.contents,
											range: {
												startPosition: { line: 1, column: 1 },
												endPosition: {
													line:
														ci.file?.contents.split(`
`).length + 1,
													column: 1,
												},
											},
										});
								})
								.filter((ci) => ci !== void 0)),
								(ct = performance.now()),
								(Ye = mi.sort((ci, ri) => ri.score - ci.score));
							const ii = { case: "fileSearchResults", value: { results: Ye } },
								Dt = this.nb.getRescorerFromEmbeddingsResults(ii),
								Jt = this.getLongContextTokenLimit(Re.tokenLimit, jt.modelName),
								{ contextResults: si, conversationHistory: Zt } = ze
									? await this.nb.fitLongContextDataIntoTokenLimit(
											{ conversationHistory: De, contextResults: ii },
											Jt,
											() => Dt,
										)
									: { contextResults: ii, conversationHistory: De };
							if (ft) throw new Error("Aborted");
							di = new p.$ZF({
								canHandleFilenamesAfterLanguageIds: !0,
								workspaceRootPath: this.C.getWorkspaceRootPath(),
								conversation: Zt,
								modelDetails: jt,
								explicitContext: await this.getExplicitContext(),
								rerankResults: !0,
								rerankResultsV2:
									this.ab.workspaceUserPersistentStorage.shouldRerankByDefault,
								contextResults: si,
								longContextMode: ze,
								isEval: Re.isEval,
								runnableCodeBlocks:
									this.ab.applicationUserPersistentStorage
										.runnableCodeBlocksEnabled ?? !1,
								requestId: je,
								...(await this.addAdditionalContext(Re)),
							});
						} else if (Ze === P.SearchType.vector) {
							this.I.publicLogCapture("Context Chat - Vector Search");
							const ei = ze
									? { topK: 1e3, minK: 80, finalK: 1e3 }
									: {
											topK: Math.max(100, 0 / 100),
											minK: Math.max(20, 0 / 500),
											finalK: Math.max(200, 0 / 50),
										},
								ii =
									this.xb(De).length > 0
										? "{" +
											this.xb(De)
												.map(($i) => `${$i}`)
												.join(",") +
											"}"
										: void 0,
								Dt = await this.db.searchMultipleQueries(Kt, ei, {
									newlineSepGlobFilter: Ve?.globFilter ?? ii,
								});
							if (ft) throw new Error("Aborted");
							if (
								((Xe = Dt.map(($i) => $i.codeBlock).filter(
									($i) => $i !== void 0 && $i.contents.length < 2e4,
								)),
								(Ye = ze
									? await this.getLongContextFileSearchResults(Dt, De)
									: Je(Dt)),
								ft)
							)
								throw new Error("Aborted");
							ct = performance.now();
							const Jt = ze
									? { case: "fileSearchResults", value: { results: Ye } }
									: {
											case: "codeSearchResults",
											value: { results: Dt, allFiles: [] },
										},
								si = this.nb.getRescorerFromEmbeddingsResults(Jt),
								Zt = this.getLongContextTokenLimit(Re.tokenLimit, jt.modelName),
								{ contextResults: ci, conversationHistory: ri } = ze
									? await this.nb.fitLongContextDataIntoTokenLimit(
											{ conversationHistory: De, contextResults: Jt },
											Zt,
											() => si,
										)
									: { contextResults: Jt, conversationHistory: De };
							di = new p.$ZF({
								canHandleFilenamesAfterLanguageIds: !0,
								workspaceRootPath: this.C.getWorkspaceRootPath(),
								conversation: ri,
								modelDetails: jt,
								explicitContext: await this.getExplicitContext(),
								rerankResults: !0,
								rerankResultsV2:
									this.ab.workspaceUserPersistentStorage.shouldRerankByDefault,
								contextResults: ci,
								longContextMode: ze,
								...(await this.addAdditionalContext(Re)),
								isEval: Re.isEval,
								runnableCodeBlocks:
									this.ab.applicationUserPersistentStorage
										.runnableCodeBlocksEnabled ?? !1,
								requestId: je,
							});
						} else throw new Error("Invalid search type");
						if (
							(console.info("Time to search", performance.now() - ct),
							(ct = performance.now()),
							this.O.executeCommand(ie.$iX, Re.tabId, Re.bubbleId, Xe),
							this.bb.updateGlobalContext(Re, Ye),
							this.addToPromptHistory({
								prompt: Nt,
								commandType: A.CommandType.CHAT,
							}),
							console.info("Time to set file results", performance.now() - ct),
							(ct = performance.now()),
							this.ab.applicationUserPersistentStorage.checklistState
								?.doneCommandEnter !== !0)
						) {
							const Ut =
								this.ab.applicationUserPersistentStorage.checklistState;
							this.ab.setApplicationUserPersistentStorage(
								"checklistState",
								(ei) => ({ ...(ei ?? {}), doneCommandEnter: !0 }),
							);
						}
						if (ft) throw new Error("Aborted");
						lt(pe.RepoStep.GeneratingTokens);
						const It = await this.aiClient();
						if (ft) throw new Error("Aborted");
						let Lt = It.streamChatContext(di, {
							signal: rt.signal,
							headers: (0, _.$m6b)(je),
						});
						const xt =
							g.$q0.typeName + "/" + g.$q0.methods.streamChatContext.name;
						this.nb.setChatData(
							"tabs",
							({ tabId: Ut }) => Ut === Re.tabId,
							"bubbles",
							({ id: Ut }) => Ut === Re.aiBubbleId,
							(Ut) =>
								Ut.text && Ut.text === pe.BubbleType.USER_CHAT
									? Ut
									: { ...Ut, requestId: je },
						),
							(ct = performance.now());
						const Vt = this.streamContextResponse({
							modelDetails: jt,
							generationUUID: je,
							streamer: this.webCitationsAndStatusMiddleware(
								this.commitNotesMiddleware(
									this.docsCitationsMiddleware(
										this.intermediateChunkMiddleware(
											Ee(Lt),
											Re.bubbleId,
											Re.tabId,
										),
										Re.bubbleId,
										Re.tabId,
									),
									Re.bubbleId,
									Re.tabId,
									je,
								),
								Re.bubbleId,
								Re.tabId,
							),
							rethrowCancellation: !0,
							rerun: Ve?.rerun,
							streamerURL: xt,
						});
						if (ft) throw new Error("Aborted");
						const Mt = [
							...di.conversation.flatMap(
								(Ut) => Ut.codebaseContextChunks ?? [],
							),
							...Xe,
						].flatMap((Ut) => ({
							relativeWorkspacePath: Ut.relativeWorkspacePath,
							lines: Ut.detailedLines.flatMap((ei) => ({
								value: ei.text,
								lineNumber: ei.lineNumber,
							})),
						}));
						if (
							(Mt.push(
								...di.conversation
									.map((Ut) =>
										Ut.attachedCodeChunks ? Ut.attachedCodeChunks : [],
									)
									.flat()
									.map((Ut) => ({
										relativeWorkspacePath: Ut.relativeWorkspacePath,
										lines: Ut.lines.map((ei, mi) => ({
											value: ei,
											lineNumber: mi + Ut.startLineNumber,
										})),
									})),
							),
							di.currentFile &&
								Mt.push({
									relativeWorkspacePath: di.currentFile.relativeWorkspacePath,
									lines: di.currentFile.contents
										.split(`
`)
										.map((Ut, ei) => ({ value: Ut, lineNumber: ei + 1 })),
								}),
							this.sb.registerReferenceableCodeBlocksForGeneration(je, Mt),
							ft)
						)
							throw new Error("Aborted");
						return Vt;
					}
					async getLongContextFileSearchResults(De, Re) {
						const je = {};
						for (const et of De) {
							const rt = et.codeBlock?.relativeWorkspacePath ?? "";
							je[rt] || (je[rt] = 0), (je[rt] = Math.max(je[rt], et.score));
						}
						const Ve = async (et) => {
							try {
								return (
									await this.U.readFile(this.Q.resolveRelativePath(et))
								).value.toString();
							} catch {
								return "<error reading file>";
							}
						};
						return (
							await Promise.all(
								Object.entries(je).map(
									async ([et, rt]) =>
										new f.$Uu({
											file: {
												relativeWorkspacePath: et,
												contents: await Ve(et),
											},
											score: rt,
										}),
								),
							)
						).sort((et, rt) => rt.score - et.score);
					}
					async *streamContextResponse({
						modelDetails: De,
						streamer: Re,
						generationUUID: je,
						rethrowCancellation: Ve,
						rerun: Ze,
						streamerURL: et,
						failSilently: rt = !1,
					}) {
						let ft = [];
						try {
							const bt = await Re.next().then((ct) => ct.value),
								nt = "usedCode" in bt ? bt.usedCode : void 0;
							nt !== void 0 && (ft = nt.codeResults),
								yield* this.streamResponseText({
									streamer: Re,
									streamerURL: et,
									generationUUID: je,
									modelDetails: De,
									rethrowCancellation: Ve,
									rerun: Ze,
									failSilently: rt,
									source: "chat",
								});
						} catch (bt) {
							if (
								(this.ab.setNonPersistentStorage(
									"inprogressAIGenerations",
									(nt) => nt.filter((lt) => lt.generationUUID !== je),
								),
								bt.code !== u.Code.Canceled && console.error(bt),
								!(bt instanceof u.ConnectError) ||
									(bt.code === u.Code.Canceled ||
										rt ||
										this.Y.handleError(bt, De, je, et, "chat", Ze),
									Ve))
							)
								throw bt;
						}
					}
					async streamCursorTutor(De, Re, je) {
						let Ve;
						for (const [ct, gt] of [...De.entries()].reverse())
							if (
								gt.type === le.ConversationMessage_MessageType.HUMAN &&
								gt.text !== ""
							) {
								Ve = De[ct].text;
								break;
							}
						if (Ve === void 0)
							return (async function* () {
								yield "You don't seem to have provided any request in your last message. Please type something and try again.";
							})();
						this.decrementBubbleTimesLeft(),
							this.I.publicLogCapture("Submitted cursor tutor freeform"),
							this.I.publicLogCapture("Submitted Prompt");
						const Ze =
							je?.overrideModelDetails ||
							this.getModelDetails({ specificModelField: "regular-chat" });
						this.I.publicLogCapture("submitted.freeform", {
							model: Ze.modelName,
						});
						const [et, rt] = this.registerNewGeneration({ metadata: Re }),
							ft = new w.$AF({ conversation: De, modelDetails: Ze });
						this.addToPromptHistory({
							prompt: Ve,
							commandType: A.CommandType.CHAT,
						});
						const nt = (await this.aiClient()).streamCursorTutor(ft, {
								signal: rt.signal,
								headers: (0, _.$m6b)(et),
							}),
							lt = g.$q0.typeName + "/" + g.$q0.methods.streamCursorTutor.name;
						return this.streamResponseText({
							modelDetails: Ze,
							generationUUID: et,
							streamer: Ee(nt),
							streamerURL: lt,
							rethrowCancellation: !0,
							rerun: je?.rerun,
							source: "chat",
						});
					}
					async streamPriomptPrompt(De, Re, je, Ve) {
						const Ze = JSON.stringify(Re),
							et = await this.aiClient(),
							rt = new w.$gF({
								promptProps: Ze,
								promptPropsTypeName: je.typeName,
							}),
							[ft, bt] = this.registerNewGeneration({ metadata: Ve }),
							nt = et.streamPriomptPrompt(rt, {
								signal: bt.signal,
								headers: (0, _.$m6b)(ft),
							}),
							lt =
								g.$q0.typeName + "/" + g.$q0.methods.streamPriomptPrompt.name;
						return this.streamResponseText({
							streamer: Ee(nt),
							streamerURL: lt,
							generationUUID: ft,
							source: "other",
							modelDetails: this.getModelDetails({
								specificModelField: "regular-chat",
							}),
							rethrowCancellation: !0,
						});
					}
					async addAdditionalContext(De) {
						const Re =
								this.ab.workspaceUserPersistentStorage.persistentChatMetadata.find(
									(ft) => ft.bubbleId === De.bubbleId && ft.tabId === De.tabId,
								),
							je = Re?.predictedContext,
							Ve = Re?.injectedContext,
							Ze = this.nb.getBubbleData(De.tabId, De.bubbleId),
							et = {};
						if (
							((je === void 0 && Ve === void 0) ||
								(je?.usedCurrentFile || Ve?.usedCurrentFile,
								je?.usedDocs &&
									(et.documentationIdentifiers = je.usedDocs.map(
										(ft) => ft.docId,
									))),
							Ve !== void 0 && Ve.usedDocs)
						) {
							const ft = new Set([
								...(et.documentationIdentifiers || []),
								...Ve.usedDocs.map((bt) => bt.docId),
							]);
							et.documentationIdentifiers = [...ft];
						}
						return (
							Ze?.type === pe.BubbleType.USER_CHAT &&
								Ze?.useLinterErrors &&
								(et.linterErrors = await (0, xe.$0fc)(this.hb, this.Q, this)),
							(et.currentFile = De.currentFile),
							(et.summary = De.summaryText),
							(et.summaryUpUntilIndex = De.summaryUpUntilIndex),
							(et.codeBlocks = De.codeBlocks),
							(et.isBash = De.isBash),
							(et.conversationId = De.tabId),
							(et.canHandleFilenamesAfterLanguageIds = !0),
							et
						);
					}
					async getEffectiveTokenLimit(De) {
						const Ve = De.modelName;
						if (!Ve) return 2e5;
						const Ze = this.wb.get(Ve);
						if (Ze) {
							const [rt, ft] = Ze;
							if (ft > new Date()) return rt;
						}
						const et = await this.aiClient();
						try {
							const ft = (
								await et.getEffectiveTokenLimit(new w.$jF({ modelDetails: De }))
							).tokenLimit;
							return this.wb.set(Ve, [ft, new Date(Date.now() + 864e5)]), ft;
						} catch (rt) {
							return console.error(rt), 2e5;
						}
					}
					async getChatSummary(De) {
						const Re =
							De.options?.overrideModelDetails ||
							this.getModelDetails({ specificModelField: "regular-chat" });
						this.I.publicLogCapture("submitted.freeform", {
							model: Re.modelName,
						});
						const je = new p.$aH({
							workspaceRootPath: this.C.getWorkspaceRootPath(),
							conversation: De.conversationHistory,
							modelDetails: Re,
							explicitContext: await this.getExplicitContext(),
							requestId: De.generationUUID,
							...(await this.addAdditionalContext(De.generationMetadata)),
						});
						return await (await this.aiClient()).summarizeConversation(je, {
							headers: (0, _.$m6b)(De.generationUUID),
						});
					}
					async makeStreamChatRequest(De, Re) {
						const je =
								De.options?.overrideModelDetails ||
								this.getModelDetails({ specificModelField: "regular-chat" }),
							Ze = !0 && De.options?.useWeb ? "full_search" : void 0,
							{ chatType: et } = De.generationMetadata,
							rt =
								De.generationMetadata.longContextModeEnabled &&
								(et === "chat" ||
									et === "intentChat" ||
									et === "followUp" ||
									et === "context"),
							{ conversationHistory: ft, generationMetadata: bt } = De,
							nt = async () => {
								let Nt;
								if (rt) {
									let ti = ft
										.map((ze, Xe) => (ze.text !== "" ? ze.text : null))
										.filter((ze) => ze !== null)
										.join(`
`);
									const kt = 4e3 * 3;
									ti.length > kt && (ti = ti.slice(ti.length - kt));
									const hi = [{ text: ti, globsNewLineSeparated: "" }],
										Kt = rt
											? { topK: 1e3, minK: 80, finalK: 1e3 }
											: { topK: 100, minK: 20, finalK: 200 },
										di = await this.db.searchMultipleQueries(hi, Kt, {}),
										Ye = lt
											? await this.getLongContextFileSearchResults(di, ft)
											: Je(di);
									Nt = lt
										? { case: "fileSearchResults", value: { results: Ye } }
										: {
												case: "codeSearchResults",
												value: { results: di, allFiles: [] },
											};
								}
								return this.nb.getRescorerFromEmbeddingsResults(Nt);
							},
							lt =
								je.modelName === "cursor-long-context" ||
								bt.longContextModeEnabled,
							ct = this.getLongContextTokenLimit(bt.tokenLimit, je.modelName);
						if (lt && !Re.isForActualRequestSoCanBeSlow)
							return "wouldBeTooSlow";
						const { conversationHistory: gt } = lt
								? await this.nb.fitLongContextDataIntoTokenLimit(
										{ conversationHistory: ft },
										ct,
										nt,
									)
								: { conversationHistory: ft },
							ht = await this.addAdditionalContext(De.generationMetadata);
						return new p.$aH({
							workspaceRootPath: this.C.getWorkspaceRootPath(),
							conversation: gt,
							modelDetails: je,
							explicitContext: await this.getExplicitContext(),
							requestId: De.generationUUID,
							allowLongFileScan: De.options?.allowLongFileScan ?? !1,
							canHandleFilenamesAfterLanguageIds: !0,
							...ht,
							useWeb: Ze,
							debugInfo: De.generationMetadata.debugInfo,
							quotes: De.generationMetadata.quotes,
							externalLinks: De.generationMetadata.externalLinks,
							longContextMode: rt,
							commitNotes: De.generationMetadata.commitNotes,
							isEval: De.generationMetadata.isEval,
							runnableCodeBlocks:
								this.ab.applicationUserPersistentStorage
									.runnableCodeBlocksEnabled ?? !1,
							shouldCache: De.generationMetadata.shouldCache,
						});
					}
					getFilteredOutline(De, Re, je) {
						const Ve = [
							v.SymbolKind.Class,
							v.SymbolKind.Method,
							v.SymbolKind.Field,
							v.SymbolKind.Constructor,
							v.SymbolKind.Enum,
							v.SymbolKind.Interface,
							v.SymbolKind.Function,
							v.SymbolKind.Constant,
							v.SymbolKind.EnumMember,
						];
						return De.map((Ze) => {
							if (
								!(
									Ze.kind === v.SymbolKind.Function &&
									Ze.name.includes("callback")
								) &&
								Ve.includes(Ze.kind) &&
								!je.has(Ze)
							) {
								je.add(Ze);
								let et = Re.getLineContent(Ze.range.startLineNumber);
								if (
									!et.endsWith("{") &&
									(Ze.kind === v.SymbolKind.Method ||
										Ze.kind === v.SymbolKind.Constructor ||
										Ze.kind === v.SymbolKind.Function ||
										Ze.kind === v.SymbolKind.Class)
								) {
									let bt = Ze.range.startLineNumber;
									for (
										;
										bt <= Ze.range.endLineNumber &&
										!Re.getLineContent(bt).endsWith("{");
									)
										bt++;
									if (bt <= Ze.range.endLineNumber) {
										const nt = {
											startLineNumber: Ze.range.startLineNumber,
											startColumn: 1,
											endLineNumber: bt,
											endColumn: Re.getLineMaxColumn(bt),
										};
										et = Re.getValueInRange(nt);
									}
								}
								const rt = et.match(/^\s*/)?.[0] ?? "",
									ft = et.endsWith("{") ? `${rt}}` : void 0;
								return {
									...Ze,
									children: this.getFilteredOutline(Ze.children ?? [], Re, je),
									text: et,
									endingBrace: ft,
								};
							}
						}).filter((Ze) => Ze !== void 0);
					}
					async _streamChat(De) {
						const [Re, je] = this.registerNewGeneration({
							metadata: De.generationMetadata,
							generationUUID: De.generationUUID,
						});
						let Ve = "";
						for (const [Rt, Nt] of [
							...De.conversationHistory.entries(),
						].reverse())
							if (
								Nt.type === le.ConversationMessage_MessageType.HUMAN &&
								Nt.text !== ""
							) {
								Ve = De.conversationHistory[Rt].text;
								break;
							}
						this.decrementBubbleTimesLeft(),
							this.I.publicLogCapture("Submitted freeform"),
							this.I.publicLogCapture("Submitted Prompt");
						const Ze =
								De.options?.overrideModelDetails?.modelName ===
									"cursor-long-context" ||
								De.generationMetadata.longContextModeEnabled,
							et =
								De.options?.overrideModelDetails ||
								this.getModelDetails({
									longContextModeEnabled: Ze,
									specificModelField: "regular-chat",
								});
						this.I.publicLogCapture("submitted.freeform", {
							model: et.modelName,
						});
						const rt = {
								...De.generationMetadata,
								shouldCache:
									this.ab.applicationUserPersistentStorage.cacheChatPrompts,
							},
							ft = await this.makeStreamChatRequest(
								{ ...De, generationMetadata: rt },
								{ isForActualRequestSoCanBeSlow: !0 },
							);
						if (ft === "wouldBeTooSlow")
							throw new Error("should never happen!!");
						this.addToPromptHistory({
							prompt: Ve,
							commandType: A.CommandType.CHAT,
						}),
							this.J.recordChatEvent({
								requestId: De.generationUUID,
								eventType: {
									case: "submitPrompt",
									value: {
										prompt: ft.conversation[ft.conversation.length - 1].text,
									},
								},
							});
						const bt = await this.aiClient();
						let nt;
						ft.useWeb === "full_search"
							? (nt = bt.streamChatWeb(ft, {
									signal: je.signal,
									headers: (0, _.$m6b)(De.generationUUID),
								}))
							: (nt = bt.streamChat(ft, {
									signal: je.signal,
									headers: (0, _.$m6b)(De.generationUUID),
								}));
						const lt = g.$q0.typeName + "/" + g.$q0.methods.streamChat.name;
						this.nb.setChatData(
							"tabs",
							({ tabId: Rt }) => Rt === De.generationMetadata.tabId,
							"bubbles",
							({ id: Rt }) => Rt === De.generationMetadata.aiBubbleId,
							(Rt) =>
								Rt.text === pe.BubbleType.USER_CHAT
									? Rt
									: { ...Rt, requestId: De.generationUUID },
						);
						const ct = this.streamResponseText({
								modelDetails: et,
								generationUUID: De.generationUUID,
								source: "chat",
								streamer: this.webCitationsAndStatusMiddleware(
									this.commitNotesMiddleware(
										this.docsCitationsMiddleware(
											this.intermediateChunkMiddleware(
												Ee(nt),
												De.generationMetadata.bubbleId,
												De.generationMetadata.tabId,
											),
											De.generationMetadata.bubbleId,
											De.generationMetadata.tabId,
										),
										De.generationMetadata.bubbleId,
										De.generationMetadata.tabId,
										De.generationUUID,
									),
									De.generationMetadata.bubbleId,
									De.generationMetadata.tabId,
								),
								streamerURL: lt,
								rethrowCancellation: !0,
								rerun: De.options?.rerun,
								failSilently: De.options?.failSilently,
							}),
							ht = ft.conversation
								.flatMap((Rt) => Rt.codebaseContextChunks ?? [])
								.flatMap((Rt) => ({
									relativeWorkspacePath: Rt.relativeWorkspacePath,
									lines: Rt.detailedLines.flatMap((Nt) => ({
										value: Nt.text,
										lineNumber: Nt.lineNumber,
									})),
								}));
						return (
							ht.push(
								...ft.conversation
									.map((Rt) =>
										Rt.attachedCodeChunks ? Rt.attachedCodeChunks : [],
									)
									.flat()
									.map((Rt) => ({
										relativeWorkspacePath: Rt.relativeWorkspacePath,
										lines: Rt.lines.map((Nt, jt) => ({
											value: Nt,
											lineNumber: jt + Rt.startLineNumber,
										})),
									})),
							),
							ft.currentFile &&
								ht.push({
									relativeWorkspacePath: ft.currentFile.relativeWorkspacePath,
									lines: ft.currentFile.contents
										.split(`
`)
										.map((Rt, Nt) => ({ value: Rt, lineNumber: Nt + 1 })),
								}),
							this.sb.registerReferenceableCodeBlocksForGeneration(
								De.generationUUID,
								ht,
							),
							ct
						);
					}
					async streamInlineLongCompletion(De, Re, je, Ve, Ze) {
						this.I.publicLogCapture("Submitted Long Completion"),
							this.I.publicLogCapture("Submitted Prompt");
						const et = Ze ?? this.Z.getCurrentFileInfoSyncWithoutDataframes(),
							rt =
								Ve?.overrideModelDetails ||
								this.getModelDetails({ specificModelField: "cmd-k" }),
							[ft, bt] = this.registerNewGeneration({
								metadata: { type: void 0 },
								generationUUID: je,
							});
						let nt = await this.jb.getFilteredRecentChunks(10);
						const lt = new X.$a0({
							currentFile: Ve?.removeAllContext !== !0 ? et : void 0,
							contextBlocks:
								nt.length === 0
									? []
									: [
											{
												contextType:
													X
														.StreamInlineLongCompletionRequest_ContextBlock_ContextType
														.RECENT_LOCATIONS,
												blocks: nt.map((Nt) => (0, e.$Sfc)(Nt)),
											},
										],
							modelDetails: rt,
						});
						this.decrementBubbleTimesLeft();
						const gt = (await this.aiClient()).streamInlineLongCompletion(lt, {
								signal: bt.signal,
								headers: (0, _.$m6b)(je),
							}),
							ht =
								g.$q0.typeName +
								"/" +
								g.$q0.methods.streamInlineLongCompletion.name,
							Rt = this.streamResponseText({
								streamer: Ee(gt),
								streamerURL: ht,
								generationUUID: je,
								source: "other",
								modelDetails: rt,
								rethrowCancellation: !0,
							});
						return this.splitStreamSeparateNewLineChars(Rt);
					}
					async streamBackgroundEdit(De, Re, je, Ve, Ze, et) {
						this.I.publicLogCapture("Submitted background edit");
						const rt =
							et?.overrideModelDetails ||
							this.getModelDetails({ specificModelField: "cmd-k" });
						this.I.publicLogCapture("submitted.backgroundedit", {
							model: rt.modelName,
						});
						const [ft, bt] = this.registerNewGeneration({
								metadata: { type: void 0 },
								generationUUID: Ze,
							}),
							nt = new p.$7G({
								currentFile: De,
								workspaceRootPath: this.C.getWorkspaceRootPath(),
								explicitContext: await this.getExplicitContext(),
								gitDiff: Re,
								modelDetails: rt,
								stop: je,
								importLineInDiff: Ve,
							}),
							ct = (await this.aiClient()).streamBackgroundEdit(nt, {
								signal: bt.signal,
								headers: (0, _.$m6b)(Ze),
							}),
							gt =
								g.$q0.typeName + "/" + g.$q0.methods.streamBackgroundEdit.name,
							ht = this.streamResponseText({
								streamer: Ee(ct),
								streamerURL: gt,
								generationUUID: Ze,
								modelDetails: rt,
								source: "other",
								rethrowCancellation: !0,
								failSilently: !0,
							});
						return this.streamLines(ht);
					}
					async streamNewLintRule(De) {
						const Re = this.ab.applicationUserPersistentStorage.lintRules,
							je = new p.$KG({ dismissedBug: De, currentRules: Re }),
							Ve = await this.aiClient(),
							Ze = (0, y.$9g)(),
							[et, rt] = this.registerNewGeneration({
								metadata: void 0,
								generationUUID: Ze,
							}),
							ft = Ve.streamNewLintRule(je, {
								signal: rt.signal,
								headers: (0, _.$m6b)(Ze),
							}),
							bt = "/aiserver.v1.AiService/" + Ve.streamNewLintRule.name;
						return this.streamResponseText({
							streamer: Ee(ft),
							streamerURL: bt,
							generationUUID: Ze,
							rethrowCancellation: !0,
							source: "other",
							failSilently: !0,
						});
					}
					async streamLint(De, Re, je, Ve, Ze) {
						const et =
							Ze?.overrideModelDetails ||
							this.getModelDetails({ specificModelField: "cmd-k" });
						this.I.publicLogCapture("submitted.lint", { model: et.modelName });
						const [rt, ft] = this.registerNewGeneration({
								metadata: void 0,
								generationUUID: Ve,
							}),
							bt = new p.$8I({
								currentFile: De,
								workspaceRootPath: this.C.getWorkspaceRootPath(),
								explicitContext: await this.getExplicitContext(),
								modelDetails: et,
								badNotifications: Re,
								lintRules: je,
							}),
							lt = (await this.aiClient()).streamLint(bt, {
								signal: ft.signal,
								headers: (0, _.$m6b)(Ve),
							}),
							ct = g.$q0.typeName + "/" + g.$q0.methods.streamLint.name;
						return this.streamResponseText({
							streamer: Ee(lt),
							streamerURL: ct,
							generationUUID: Ve,
							modelDetails: et,
							rethrowCancellation: !0,
							source: "other",
							failSilently: !0,
						});
					}
					async streamAiPreviewSummary({ realContext: De, isDetailed: Re }) {
						const je = this.getModelDetails({
								specificModelField: "regular-chat",
							}),
							Ve = await this.getCurrentFileInfo(),
							Ze = (0, y.$9g)(),
							et = new $e.$d0({
								currentFile: Ve,
								modelDetails: je,
								intent: {
									mainSymbolsToAnalyzeFromGoToDef: De?.definitions,
									mainSymbolHoverDetails: De?.hoverDetails,
									mainSymbolsToAnalyzeFromImplementations: De?.implementations,
								},
								isDetailed: Re,
							}),
							[rt, ft] = this.registerNewGeneration({
								metadata: void 0,
								generationUUID: Ze,
							}),
							nt = (await this.aiClient()).streamAiPreviews(et, {
								signal: ft.signal,
								headers: (0, _.$m6b)(Ze),
							}),
							lt = g.$q0.typeName + "/" + g.$q0.methods.streamAiPreviews.name;
						return this.streamResponseText({
							streamer: Ee(nt),
							streamerURL: lt,
							generationUUID: Ze,
							modelDetails: je,
							source: "other",
							rethrowCancellation: !0,
						});
					}
					async *streamLines(De) {
						let Re = "";
						for await (const je of De)
							for (
								Re += je;
								Re.includes(`
`) ||
								Re.includes(`\r
`);
							) {
								let Ve = Re.search(/\r?\n/);
								yield Re.slice(0, Ve),
									(Re = Re.slice(Ve + (Re[Ve] === "\r" ? 2 : 1)));
							}
						for (
							;
							Re.includes(`
`) ||
							Re.includes(`\r
`);
						) {
							let je = Re.search(/\r?\n/);
							yield Re.slice(0, je),
								(Re = Re.slice(je + (Re[je] === "\r" ? 2 : 1)));
						}
						yield Re.replace("\r", "");
					}
					async *splitStreamSeparateNewLineChars(De) {
						for await (let Re of De)
							if (Re !== "") {
								for (
									;
									Re.includes(`
`) ||
									Re.includes(`\r
`);
								) {
									let je = Re.search(/\r?\n/);
									yield Re.slice(0, je),
										yield Re[je] === "\r"
											? `\r
`
											: `
`,
										(Re = Re.slice(je + (Re[je] === "\r" ? 2 : 1)));
								}
								yield Re;
							}
					}
					async streamGPTFourEdit(De, Re, je, Ve, Ze, et, rt) {
						const ft = Ve ?? this.Z.getCurrentFileInfoSyncWithoutDataframes(),
							bt =
								je?.overrideModelDetails ||
								this.getModelDetails({ specificModelField: "cmd-k" });
						this.I.publicLogCapture("submitted.gpt4edit", {
							model: bt.modelName,
						});
						const [nt, lt] = this.registerNewGeneration({
							metadata: void 0,
							generationUUID: Re,
						});
						De =
							(Ze ?? []).map(
								(jt) => `\`\`\`${jt.uri.path}
${jt.rawText}
\`\`\`
`,
							) + De;
						const ct = new p.$LG({
							query: De,
							currentFile: ft,
							workspaceRootPath: this.C.getWorkspaceRootPath(),
							modelDetails: bt,
							explicitContext: await this.getExplicitContext(),
							linterErrors: rt,
							codeBlocks: [],
						});
						this.addToPromptHistory({
							prompt: De,
							commandType: A.CommandType.GPT_FOUR_EDIT,
						});
						const ht = (await this.aiClient()).streamGPTFourEdit(ct, {
								signal: lt.signal,
								headers: (0, _.$m6b)(Re),
							}),
							Rt = g.$q0.typeName + "/" + g.$q0.methods.streamGPTFourEdit.name,
							Nt = this.streamResponseText({
								streamer: Ee(ht),
								streamerURL: Rt,
								generationUUID: Re,
								modelDetails: bt,
								source: "other",
								rethrowCancellation: !0,
							});
						return this.streamLines(Nt);
					}
					async fakeInlineStreamEdits() {
						return {
							[Symbol.asyncIterator]() {
								let Re = 0;
								return {
									next() {
										return Re < 3
											? Promise.resolve({
													value: { newLine: "hi" + Re },
													done: !1,
												})
											: Promise.resolve({
													value: { newLine: "hi done" },
													done: !0,
												});
									},
								};
							},
						};
					}
					async getSearch(De) {
						return (
							await (
								await this.aiClient()
							).getSearch({
								repositories: this.repositories.map((Ve) => Ve.repoInfo),
								query: De,
								topK: 15,
							})
						).results;
					}
					async insertCodeCellAndRun(De) {
						const Re = (0, d.$eJb)(this.F.activeEditorPane);
						if (!Re || !Re.hasModel()) return;
						let je = null;
						Re.focus();
						const Ve = Re.getActiveCell();
						if (Ve) {
							const Ze = Re.getCellIndex(Ve);
							je = (0, C.$M5b)(
								this.H,
								Re,
								Ze,
								m.CellKind.Code,
								"below",
								De,
								!0,
							);
						} else {
							const Ze = Re.getFocus(),
								et = Math.max(Ze.end - 1, 0);
							je = (0, C.$M5b)(
								this.H,
								Re,
								et,
								m.CellKind.Code,
								"below",
								De,
								!0,
							);
						}
						je &&
							(await Re.focusNotebookCell(je, "container"),
							await Re.executeNotebookCells([je]));
					}
					get controlProvider() {
						return this.Z.controlProvider;
					}
					registerControlProvider(De, Re) {
						return this.Z.registerControlProvider(De, Re);
					}
					xb(De) {
						return De.flatMap((je) => je.attachedFolders).map(
							(je) => `${je.startsWith("/") ? je.substring(1) : je}/**`,
						);
					}
					async setChatInjectedContext(De, Re) {
						this.bb.addPersistentChatMetadataIfNotExists(De.bubbleId, De.tabId);
						const je = await this.getCurrentFileInfo(),
							Ve = this.nb.chatData.tabs.find((et) => et.tabId === De.tabId),
							Ze = Ve?.bubbles.find(
								(et) => et.id === De.bubbleId && et.type === "user",
							);
						if (!Ve || !Ze) throw new Error("Tab or bubble not found");
						this.ab.setWorkspaceUserPersistentStorage(
							"persistentChatMetadata",
							({ bubbleId: et, tabId: rt }) =>
								et === De.bubbleId && rt === De.tabId,
							(et) => {
								const rt = { ...et };
								(rt.predictedContext = { usedDocs: [] }),
									Ze.usesCodebase && (rt.predictedContext.usedCodebase = {}),
									Re?.removeAllContext !== !0 &&
										je !== void 0 &&
										(rt.predictedContext.usedCurrentFile = {
											relativeFilePath: je.relativeWorkspacePath,
										});
								const ft = Ze.selectedDocs;
								return ft !== void 0 && (rt.predictedContext.usedDocs = ft), rt;
							},
						),
							this.bb.setIntentDetermined(De.bubbleId, De.tabId);
					}
					async streamChat(De, Re, je, Ve) {
						return (
							await this.setChatInjectedContext(Re, Ve),
							this._streamChat({
								conversationHistory: De,
								generationMetadata: Re,
								generationUUID: je,
								options: Ve,
							})
						);
					}
					async warmChatCache(De, Re, je, Ve) {
						await this.setChatInjectedContext(Re, Ve);
						const Ze = await this.makeStreamChatRequest(
							{
								conversationHistory: De,
								generationMetadata: Re,
								generationUUID: je,
								options: Ve,
							},
							{ isForActualRequestSoCanBeSlow: !1 },
						);
						if (Ze === "wouldBeTooSlow") return;
						await (await this.aiClient()).warmChatCache(
							new w.$NH({ request: Ze }),
							{ headers: (0, _.$m6b)(je) },
						);
					}
					async getSimplePrompt(De, Re) {
						const je = await this.aiClient(),
							Ve = new w.$yH({ query: De, answerPlaceholder: Re });
						return (
							await je.getSimplePrompt(Ve, {
								headers: (0, _.$m6b)((0, y.$9g)()),
							})
						).result;
					}
					async getUsageData() {
						return (
							await (
								await this.aiClient()
							).getUserInfo({}, { headers: (0, _.$m6b)((0, y.$9g)()) })
						).usage;
					}
					async uploadDocumentation(De) {
						return await (await this.uploadClient()).uploadDocumentation(De, {
							headers: (0, _.$m6b)((0, y.$9g)()),
						});
					}
					async uploadDocumentationStatus(De) {
						return await (await this.uploadClient()).uploadDocumentationStatus(
							De,
							{ headers: (0, _.$m6b)((0, y.$9g)()) },
						);
					}
					async getPages(De) {
						const Re = await this.uploadClient(),
							je = new V.$U_(De);
						return await Re.getPages(je, {
							headers: (0, _.$m6b)((0, y.$9g)()),
						});
					}
					async computeExampleCodebaseQuestions() {
						if (
							this.ab.nonPersistentStorage.repositoryIndexingStatus?.case !==
							"synced"
						)
							return [];
						try {
							const De = `what's a good and concise question to ask about this codebase? it should be something specific, like "where is X defined and how is it being used". do not use the actual name of X but rewrite it in your own, simple words, concisely. include three completely different questions, about different parts of the codebase, in a markdown numbered list, and say nothing else`,
								Re = this.lb.getModels().map((gt) => (0, me.$tc)(gt.uri.path)),
								Ve = [...new Set(Re)].slice(0, 10);
							Ve.push("ts"), Ve.push("py"), Ve.push("go");
							const Ze = `{${Ve.map((gt) => `*.${gt}`).join(",")}}`,
								et = await this.db.parallelSearch(
									`what's a good question to ask about this codebase? it should be something specific, like "where is X defined and how is it being used"`,
									100,
									100,
									{ globFilter: Ze },
								);
							if (et.length < 3) return [];
							const rt = new p.$ZF({
									canHandleFilenamesAfterLanguageIds: !0,
									workspaceRootPath: this.C.getWorkspaceRootPath(),
									conversation: [
										new le.$SA({
											text: De,
											type: le.ConversationMessage_MessageType.HUMAN,
										}),
									],
									modelDetails: this.getModelDetails({
										specificModelField: "regular-chat",
									}),
									explicitContext: await this.getExplicitContext(),
									rerankResults: !1,
									rerankResultsV2: !1,
									contextResults: {
										case: "codeSearchResults",
										value: { results: et },
									},
								}),
								bt = (await this.aiClient()).streamChatContext(rt, {
									headers: (0, _.$m6b)((0, y.$9g)()),
								});
							let nt = "";
							for await (const gt of bt) nt += gt.text;
							return ((gt) => {
								const ht = /^\d+\.\s+(.*)$/gm;
								let Rt;
								const Nt = [];
								for (; (Rt = ht.exec(gt)) !== null; ) {
									Rt.index === ht.lastIndex && ht.lastIndex++;
									const jt = Rt[1] || Rt[0];
									Nt.push(jt.trim());
								}
								return Nt;
							})(nt);
						} catch {
							return [];
						}
					}
					async *aiQueryV2(De, Re, je, Ve) {
						const Ze = await this.aiClient(),
							et = this.getModelDetails({ specificModelField: "regular-chat" }),
							rt = (0, y.$9g)(),
							ft = await this.getCurrentFileInfo(),
							bt = await this.db.getNewRepoInfo(),
							nt = new p.$CF({
								currentFile: ft,
								repositoryInfo: bt,
								conversation: De,
								workspaceRootPath: this.C.getWorkspaceRootPath(),
								modelDetails: et,
								fasterAndStupider: !1,
								useGlobs: je,
								queryType:
									Re === P.SearchType.keyword
										? p.ModelQueryRequest_QueryType.KEYWORDS
										: p.ModelQueryRequest_QueryType.EMBEDDINGS,
							}),
							[lt, ct] = this.registerNewGeneration({
								metadata: Ve,
								generationUUID: rt,
							}),
							gt = g.$q0.typeName + "/" + g.$q0.methods.modelQueryV2.name;
						yield* this.streamResponse({
							streamer: Ee(
								Ze.modelQueryV2(nt, {
									signal: ct.signal,
									headers: (0, _.$m6b)(rt),
								}),
							),
							modelDetails: et,
							streamerURL: gt,
							generationUUID: rt,
							rethrowCancellation: !0,
							source: "chat",
						});
					}
					async generateCommitMessage(De) {
						return (
							await (
								await this.aiClient()
							).writeGitCommitMessage(De, {
								headers: (0, _.$m6b)((0, y.$9g)()),
							})
						).commitMessage;
					}
					async aiQuery(De, Re) {
						const je = await this.aiClient(),
							Ve = this.getModelDetails({ specificModelField: "regular-chat" }),
							Ze = (0, y.$9g)(),
							et = await this.getCurrentFileInfo(),
							rt = new p.$CF({
								currentFile: et,
								repositories: this.repositories.map((lt) => lt.repoInfo),
								conversation: De,
								workspaceRootPath: this.C.getWorkspaceRootPath(),
								modelDetails: Ve,
								queryType:
									Re === P.SearchType.keyword
										? p.ModelQueryRequest_QueryType.KEYWORDS
										: p.ModelQueryRequest_QueryType.EMBEDDINGS,
							}),
							[ft, bt] = this.registerNewGeneration({
								metadata: void 0,
								generationUUID: Ze,
							});
						return (
							await je.modelQuery(rt, {
								signal: bt.signal,
								headers: (0, _.$m6b)(Ze),
							})
						).queries;
					}
				};
				(e.$Rfc = qe),
					(e.$Rfc = qe =
						Ne(
							[
								j(0, W.$36b),
								j(1, n.$IY),
								j(2, fe.$dtb),
								j(3, S.$nM),
								j(4, D.$km),
								j(5, ge.$V7b),
								j(6, T.$Bk),
								j(7, F.$5rb),
								j(8, r.$c7),
								j(9, ne.$ek),
								j(10, M.$Vi),
								j(11, a.$gj),
								j(12, I.$k3),
								j(13, ve.$ll),
								j(14, z.$x6b),
								j(15, U.$S6b),
								j(16, B.$W6b),
								j(17, Oe.$N9b),
								j(18, L.$lq),
								j(19, k.$0zb),
								j(20, q.$Z6b),
								j(21, N.$i6b),
								j(22, R.$J6b),
								j(23, oe.$MO),
								j(24, O.$O6b),
								j(25, x.$zIb),
								j(26, H.$aM),
								j(27, K.$EY),
								j(28, J.$26b),
								j(29, Y.$06b),
								j(30, ee.$QO),
								j(31, h.$Li),
								j(32, ae.$kgc),
								j(33, ue.$75),
								j(34, be.$$Db),
								j(35, Ce.$cEb),
								j(36, Le.$9Db),
								j(37, Fe.$q8b),
							],
							qe,
						)),
					(0, i.$lK)(e.$Nfc, qe, i.InstantiationType.Delayed);
				const Ae = (Me) =>
					Me.range
						? new o.$Ps({
								relativeWorkspacePath: Me.relativeWorkspacePath,
								contents: Me.contents,
								range: {
									startPosition: {
										line: Me.range.startLineNumber,
										column: Me.range.startColumn,
									},
									endPosition: {
										line: Me.range.endLineNumber,
										column: Me.range.endColumn,
									},
								},
							})
						: new o.$Ps({
								relativeWorkspacePath: Me.relativeWorkspacePath,
								contents: Me.contents,
							});
				e.$Sfc = Ae;
			},
		),
		