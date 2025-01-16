define(
			de[315],
			he([1, 0, 58, 3, 11, 20, 5, 180, 45, 134, 21, 232, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$V6b = e.$U6b = e.$T6b = e.$S6b = e.$R6b = void 0),
					(e.$R6b = [
						{ name: "gpt-4o", defaultOn: !0 },
						{ name: "gpt-4", defaultOn: !1 },
						{ name: "claude-3-opus", defaultOn: !1 },
						{ name: "claude-3.5-sonnet", defaultOn: !0 },
						{ name: "cursor-small", defaultOn: !1 },
						{
							name: "claude-3-5-sonnet-200k",
							defaultOn: !0,
							isLongContextOnly: !0,
						},
						{
							name: "claude-3-haiku-200k",
							defaultOn: !0,
							isLongContextOnly: !0,
						},
						{
							name: "gemini-1.5-flash-500k",
							defaultOn: !0,
							isLongContextOnly: !0,
						},
						{ name: "gpt-4o-128k", defaultOn: !0, isLongContextOnly: !0 },
					]);
				const c = [
					"gpt-3.5-turbo",
					"gpt-4-32k",
					"gpt-4-1106-preview",
					"gpt-4-0125-preview",
					"gpt-3.5-turbo-1106",
					"gpt-4",
					"gpt-4o",
					"claude-3.5-sonnet",
				];
				e.$S6b = (0, C.$Mi)("AISettingsService");
				const n = {
						"regular-chat": "regularChatModel",
						"cmd-k": "cmdKModel",
						"terminal-cmd-k": "terminalCmdKModel",
						composer: "composerModel",
					},
					g = (b, s) =>
						b === void 0 ? "openAIModel" : s ? "longContextOpenAIModel" : n[b];
				e.$T6b = g;
				const p = (b, s, l, y) => {
					const $ = (0, e.$T6b)(y, l);
					let v = b.applicationUserPersistentStorage.aiSettings[$];
					if (v === null) return "cursor-small";
					if (!s.includes(v)) {
						if (s.length === 0) return v;
						(v = s[0]),
							b.setApplicationUserPersistentStorage("aiSettings", $, v);
					}
					return v;
				};
				e.$U6b = p;
				let o = class extends i.$1c {
					constructor(s, l, y) {
						super(),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.a = "aisettings.service"),
							(this.b = new h.$re()),
							(this.saveData = () => {}),
							(this.loadData = () => {
								if (
									this.f.applicationUserPersistentStorage
										.havePerformedSettingsServiceMigration !== !0
								) {
									this.f.setApplicationUserPersistentStorage(
										"havePerformedSettingsServiceMigration",
										!0,
									);
									const v = this.c.get(this.a, u.StorageScope.APPLICATION);
									if (v) {
										const S = JSON.parse(v);
										S.useOpenAIKey !== void 0 &&
											this.f.setApplicationUserPersistentStorage(
												"useOpenAIKey",
												S.useOpenAIKey,
											),
											S.availableModels !== void 0 &&
												this.f.setApplicationUserPersistentStorage(
													"availableAPIKeyModels",
													S.availableModels,
												),
											S.noStorageMode !== void 0 &&
												this.f.setApplicationUserPersistentStorage(
													"noStorageMode",
													S.noStorageMode ||
														(this.g.membershipType() ===
															r.MembershipType.ENTERPRISE &&
															this.g.shouldHaveGhostModeFromEnterprise()),
												),
											S.watcherEnabled !== void 0 &&
												this.f.setApplicationUserPersistentStorage(
													"watcherEnabled",
													S.watcherEnabled,
												);
									}
								}
							}),
							(this.getUseOpenAIKey = () =>
								this.f.applicationUserPersistentStorage.useOpenAIKey ?? !1),
							(this.getModel = () =>
								this.f.applicationUserPersistentStorage.aiSettings
									.openAIModel ?? m.$aAb),
							(this.getLongContextModel = () =>
								this.f.applicationUserPersistentStorage.aiSettings
									.longContextOpenAIModel ?? m.$aAb),
							(this.getRegularChatModel = () =>
								this.f.applicationUserPersistentStorage.aiSettings
									.regularChatModel ?? m.$aAb),
							(this.getCmdKModel = () =>
								this.f.applicationUserPersistentStorage.aiSettings.cmdKModel ??
								m.$aAb),
							(this.getComposerModel = () =>
								this.f.applicationUserPersistentStorage.aiSettings
									.composerModel ?? m.$aAb),
							(this.getTerminalCmdKModel = () =>
								this.f.applicationUserPersistentStorage.aiSettings
									.terminalCmdKModel ?? m.$aAb),
							(this.getAvailableAPIKeyModels = () =>
								this.f.applicationUserPersistentStorage.availableAPIKeyModels ??
								[]),
							(this.enableModel = (v) => {
								this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(
									v,
								) &&
									this.f.setApplicationUserPersistentStorage(
										"aiSettings",
										"modelOverrideDisabled",
										this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(
											(S) => S !== v,
										),
									),
									this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(
										v,
									) ||
										this.f.setApplicationUserPersistentStorage(
											"aiSettings",
											"modelOverrideEnabled",
											[
												...(this.f.applicationUserPersistentStorage.aiSettings
													.modelOverrideEnabled ?? []),
												v,
											],
										),
									this._didChangeAvailableModels();
							}),
							(this.isDefaultModel = (v) => {
								let S = [];
								return (
									this.getUseOpenAIKey()
										? (S = this.getAvailableAPIKeyModels())
										: (S = this.getAvailableDefaultModels()
												.filter((I) => !I.isLongContextOnly)
												.map((I) => I.name)),
									S.includes(v)
								);
							}),
							(this.removeModel = (v) => {
								this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(
									v,
								) &&
									this.f.setApplicationUserPersistentStorage(
										"aiSettings",
										"modelOverrideEnabled",
										this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter(
											(S) => S !== v,
										),
									),
									this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(
										v,
									) &&
										this.f.setApplicationUserPersistentStorage(
											"aiSettings",
											"modelOverrideDisabled",
											this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(
												(S) => S !== v,
											),
										),
									this._didChangeAvailableModels();
							}),
							(this.disableModel = (v) => {
								this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(
									v,
								) &&
									this.f.setApplicationUserPersistentStorage(
										"aiSettings",
										"modelOverrideEnabled",
										this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter(
											(S) => S !== v,
										),
									),
									this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(
										v,
									) ||
										this.f.setApplicationUserPersistentStorage(
											"aiSettings",
											"modelOverrideDisabled",
											[
												...(this.f.applicationUserPersistentStorage.aiSettings
													.modelOverrideDisabled ?? []),
												v,
											],
										),
									this._didChangeAvailableModels();
							}),
							(this.getAllPotentialModelsReactive = () => {
								let v = [];
								this.getUseOpenAIKey()
									? (v = [...c])
									: (v = [
											...this.getAvailableDefaultModels()
												.filter(
													(T) =>
														!T.isLongContextOnly &&
														!this.getHardcodedLongContextOnlyModelNames().includes(
															T.name,
														),
												)
												.map((T) => T.name),
										]);
								const S =
									this.f.applicationUserPersistentStorage.aiSettings
										.modelOverrideEnabled;
								if (S !== void 0) for (const T of S) v.push(T);
								const I =
									this.f.applicationUserPersistentStorage.aiSettings
										.modelOverrideDisabled;
								if (I !== void 0) for (const T of I) v.push(T);
								return (v = [...new Set(v)]), v.sort(), v;
							}),
							(this.setChatDesiredTokenLimit = (v) => {}),
							(this.getChatDesiredTokenLimit = () => {}),
							(this.setPrivateModel = (v) => (
								this.f.setApplicationUserPersistentStorage("aiSettings", {
									...this.f.applicationUserPersistentStorage.aiSettings,
									privateFTOpenAIModel: v,
								}),
								!0
							)),
							(this.setWatcherEnabled = (v) => {
								this.f.setApplicationUserPersistentStorage("watcherEnabled", v);
								for (let S of this.watcherEnabledListeners) S(v);
								this.f.applicationUserPersistentStorage.watcherEnabled ||
									this.f.setApplicationUserPersistentStorage(
										"hasSilencedLinter",
										!0,
									);
							}),
							(this.watcherEnabledListeners = []),
							(this.onWatcherEnabledChanged = (v) => (
								this.watcherEnabledListeners.push(v),
								{
									dispose: () => {
										this.watcherEnabledListeners =
											this.watcherEnabledListeners.filter((S) => S !== v);
									},
								}
							)),
							(this.useOpenAIKeyListeners = []),
							(this.openAIModelListeners = []),
							(this.longContextOpenAIModelListeners = []),
							(this.availableModelsListeners = []),
							(this.popupListeners = []),
							(this.closePopupListeners = []),
							(this.addOpenAIKeyListener = (v) => {
								this.useOpenAIKeyListeners.push(v);
							}),
							(this.removeOpenAIKeyListener = (v) => {
								this.useOpenAIKeyListeners = this.useOpenAIKeyListeners.filter(
									(S) => S !== v,
								);
							}),
							(this.addOpenAIModelListener = (v) => {
								this.openAIModelListeners.push(v);
							}),
							(this.removeOpenAIModelListener = (v) => {
								this.openAIModelListeners = this.openAIModelListeners.filter(
									(S) => S !== v,
								);
							}),
							(this.addAvailableModelsListener = (v) => {
								this.availableModelsListeners.push(v);
							}),
							(this.removeAvailableModelsListener = (v) => {
								this.availableModelsListeners =
									this.availableModelsListeners.filter((S) => S !== v);
							}),
							(this.addLongContextOpenAIModelListener = (v) => {
								this.longContextOpenAIModelListeners.push(v);
							}),
							(this.removeLongContextOpenAIModelListener = (v) => {
								this.longContextOpenAIModelListeners =
									this.longContextOpenAIModelListeners.filter((S) => S !== v);
							}),
							(this.onDidChangeUseOpenAIKey = this.b.event),
							(this.addPopupListener = (v) => {
								this.popupListeners.push(v);
							}),
							(this.addClosePopupListener = (v) => {
								this.closePopupListeners.push(v);
							}),
							this.loadData(),
							this.c.onWillSaveState(() => this.saveData()),
							this.D(this.f.createScoped(this)).onChangeEffect({
								deps: [
									() => {
										const v =
												this.f.applicationUserPersistentStorage
													.isLongContextMode ||
												this.f.applicationUserPersistentStorage.isDebuggerMode,
											S = this.getAvailableModelsReactive({
												isLongContextOrDebuggerMode: v,
												isChat: !0,
											}),
											I = this.getAvailableModelsReactive({
												isLongContextOrDebuggerMode: v,
												isChat: !1,
											});
										return {
											availableModelsChat: S,
											availableModelsNonChat: I,
											isLongContextOrDebuggerMode: v,
										};
									},
								],
								onChange: ({
									deps: [{ availableModelsChat: v, availableModelsNonChat: S }],
								}) => {
									(0, e.$U6b)(this.f, v, !1, "regular-chat"),
										(0, e.$U6b)(this.f, S, !1, "cmd-k"),
										(0, e.$U6b)(this.f, S, !1, "terminal-cmd-k"),
										(0, e.$U6b)(this.f, S, !1);
								},
								runNowToo: !0,
							});
					}
					getUseApiKeyForModel(s) {
						return (0, a.$F6b)(s) &&
							this.f.applicationUserPersistentStorage.useClaudeKey
							? this.f.applicationUserPersistentStorage.useClaudeKey
							: (0, a.$G6b)(s) &&
									this.f.applicationUserPersistentStorage.useGoogleKey
								? !0
								: this.getUseOpenAIKey();
					}
					getAvailableDefaultModels() {
						const s =
							this.f.applicationUserPersistentStorage.availableDefaultModels2 ??
							[];
						return s.length === 0 ? [...e.$R6b] : s;
					}
					getHardcodedLongContextOnlyModelNames() {
						return e.$R6b.filter((s) => s.isLongContextOnly).map((s) => s.name);
					}
					getAvailableModelsReactive(s) {
						let l = [];
						this.getUseOpenAIKey()
							? (l = [...this.getAvailableAPIKeyModels()])
							: (l = [
									...this.getAvailableDefaultModels()
										.filter((v) => {
											if (!v.defaultOn) return !1;
											const S = s?.isLongContextOrDebuggerMode ?? !1;
											if (v.isLongContextOnly && !S) return !1;
											const I = s?.isChat ?? !1;
											return !(v.isChatOnly && !I);
										})
										.map((v) => v.name),
								]);
						const y =
							this.f.applicationUserPersistentStorage.aiSettings
								.modelOverrideEnabled;
						if (y !== void 0) for (const v of y) l.includes(v) || l.push(v);
						const $ =
							this.f.applicationUserPersistentStorage.aiSettings
								.modelOverrideDisabled;
						return (
							$ !== void 0 && (l = l.filter((v) => !$.includes(v))),
							s?.isLongContextOrDebuggerMode
								? (l = l.filter((v) => this.h(v)))
								: (l = l.filter(
										(v) =>
											!this.getHardcodedLongContextOnlyModelNames().includes(v),
									)),
							l
						);
					}
					h(s) {
						return (
							[
								...this.getAvailableDefaultModels()
									.filter((y) => y.isLongContextOnly)
									.map((y) => y.name),
							].includes(s) ||
							s.startsWith("gemini-1.5") ||
							s.match(/-\d+k$/) ||
							s.match(/-\d+m$/)
						);
					}
					getPrivateModel() {
						return this.f.applicationUserPersistentStorage.aiSettings
							.privateFTOpenAIModel;
					}
					getPrivateModels() {
						return [
							{
								type: "edit",
								modelName:
									"ft:gpt-4-0613-alpha:anysphere:clean-v1-small:87hixoOS",
								displayName: "edits-ft-s1",
								promptType: "edits-v1",
							},
							{
								type: "edit",
								modelName:
									"ft:gpt-4-0613-alpha:anysphere:clean-v1-small:87rqZ4uE",
								displayName: "edits-ft-s2",
								promptType: "edits-v1",
							},
							{
								type: "edit",
								modelName:
									"ft:gpt-4-0613-alpha:anysphere:v2-batch6-lr1:87en0lwl",
								displayName: "edits-ft-b1",
								promptType: "edits-v1",
							},
							{
								type: "edit",
								modelName: "ft:gpt-4-0613-alpha:anysphere::87Zucd13",
								displayName: "edits-ft-b2",
								promptType: "edits-v1",
							},
							{
								type: "edit",
								modelName: "ft:gpt-4-0613-alpha:anysphere::86cjNLZc",
								displayName: "edits-ft-b3",
								promptType: "edits-v1",
							},
						];
					}
					_setUseOpenAIKey(s) {
						this.f.setApplicationUserPersistentStorage("useOpenAIKey", s);
						for (let l of this.useOpenAIKeyListeners) l(s);
						this.b.fire(s);
					}
					_setOpenAIModel(s) {
						for (let l of this.openAIModelListeners) l(s);
						this.f.setApplicationUserPersistentStorage(
							"aiSettings",
							"openAIModel",
							s,
						);
					}
					_setLongContextOpenAIModel(s, l) {
						for (let y of this.longContextOpenAIModelListeners) y(s);
						this.f.setApplicationUserPersistentStorage(
							"aiSettings",
							"longContextOpenAIModel",
							s,
						);
					}
					_setAvailableModels(s) {
						this.f.setApplicationUserPersistentStorage(
							"availableAPIKeyModels",
							s,
						),
							this._didChangeAvailableModels();
					}
					handleAvailableModelsChange() {
						this._didChangeAvailableModels();
					}
					_didChangeAvailableModels() {
						const s = this.getAvailableModelsReactive();
						for (let l of this.availableModelsListeners) l(s);
						if (s.includes(this.getModel()) === !1)
							if (s.includes(m.$aAb)) this._setOpenAIModel(m.$aAb);
							else {
								if (s.length === 0) return;
								this._setOpenAIModel(s[s.length - 1]);
							}
					}
				};
				o = Ne([j(0, u.$lq), j(1, m.$0zb), j(2, a.$x6b)], o);
				let f = class extends o {
					constructor(s, l, y, $, v) {
						super($, v, y),
							(this.j = s),
							(this.n = l),
							(this.openPopup = (S, I) => {
								for (let T of this.popupListeners) T(this.j, this.n, S, I);
							}),
							(this.closePopup = () => {
								for (let S of this.closePopupListeners) S();
							}),
							this.g.addLoginChangedListener((S) => {
								this.g.membershipType() === r.MembershipType.PRO &&
									this.setUseOpenAIKey(!1);
							}),
							this.g.addSubscriptionChangedListener((S) => {
								S !== r.MembershipType.FREE && this.setUseOpenAIKey(!1);
							});
					}
					setModel(s) {
						return (
							this._setOpenAIModel(s),
							this.setRegularChatModel(s),
							this.setCmdKModel(s),
							this.setTerminalCmdKModel(s),
							this.setLongContextModel(s),
							!0
						);
					}
					setRegularChatModel(s) {
						return (
							this.f.setApplicationUserPersistentStorage(
								"aiSettings",
								"regularChatModel",
								s,
							),
							!0
						);
					}
					setCmdKModel(s) {
						return (
							this.f.setApplicationUserPersistentStorage(
								"aiSettings",
								"cmdKModel",
								s,
							),
							!0
						);
					}
					setTerminalCmdKModel(s) {
						return (
							this.f.setApplicationUserPersistentStorage(
								"aiSettings",
								"terminalCmdKModel",
								s,
							),
							!0
						);
					}
					setComposerModel(s) {
						return (
							this.f.setApplicationUserPersistentStorage(
								"aiSettings",
								"composerModel",
								s,
							),
							!0
						);
					}
					setLongContextModel(s) {
						const l = this.getLongContextModel();
						return this._setLongContextOpenAIModel(s), !0;
					}
					async getApiKey() {
						return await this.g.openAIKey();
					}
					async refreshAPIKeyModels() {
						try {
							if (!this.getUseOpenAIKey()) return;
							const s = await this.g.openAIKey();
							if (!s) return;
							const { models: l } = await this.q(s);
							this._setAvailableModels(l);
						} catch (s) {
							console.error("Error refreshing API key models:", s);
						}
					}
					async setUseOpenAIKey(s) {
						if (s === !1)
							return (
								this._setUseOpenAIKey(!1), this._didChangeAvailableModels(), !1
							);
						{
							this._setUseOpenAIKey(!0);
							const l = await this.g.openAIKey();
							if (l) {
								const { models: y } = await this.q(l);
								return this._setAvailableModels(y), !0;
							} else
								return (
									this._setUseOpenAIKey(!1),
									this._didChangeAvailableModels(),
									!1
								);
						}
					}
					async setOpenAIKey(s) {
						const l = await this.r(s);
						if (l !== !0) return l;
						const { models: y } = await this.q(s);
						return (
							this._setAvailableModels(y),
							this._setUseOpenAIKey(!0),
							y.length !== 0 && this._setOpenAIModel(y[y.length - 1]),
							this.g.storeOpenAIKey(s),
							!0
						);
					}
					async q(s) {
						const l =
							this.f.applicationUserPersistentStorage.openAIBaseUrl ??
							"https://api.openai.com/v1";
						return await fetch(`${l}/models`, {
							headers: { Authorization: `Bearer ${s}` },
						}).then(async (y) => {
							if (y.status === 401) return { models: [] };
							try {
								return {
									models: (await y.json()).data
										.filter((v) => c.includes(v.id))
										.map((v) => v.id),
								};
							} catch {
								return { models: [] };
							}
						});
					}
					getModelForChallenge() {
						let s = "gpt-4o-mini";
						const l = this.getAvailableModelsReactive();
						return (
							l.includes(s) || (s = l.at(0) ?? "please-enable-some-models"), s
						);
					}
					async r(s) {
						const l =
							this.f.applicationUserPersistentStorage.openAIBaseUrl ??
							"https://api.openai.com/v1";
						try {
							const y = await fetch(`${l}/chat/completions`, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									Authorization: `Bearer ${s}`,
								},
								body: JSON.stringify({
									model: this.getModelForChallenge(),
									messages: [
										{ role: "system", content: "You are a helpful assistant." },
										{
											role: "user",
											content: "Test prompt using gpt-3.5-turbo",
										},
									],
									temperature: 1,
									max_tokens: 10,
									stream: !1,
								}),
							});
							if (y.status === 200) return !0;
							{
								const $ = await Promise.race([
									y.text(),
									new Promise((v, S) =>
										setTimeout(
											() => v("Request timed out after 10 seconds"),
											1e4,
										),
									),
								]);
								return { code: y.status, error: $ };
							}
						} catch (y) {
							return { code: 0, error: y.toString() };
						}
					}
				};
				(f = Ne(
					[j(0, d.$jEb), j(1, C.$Li), j(2, a.$x6b), j(3, u.$lq), j(4, m.$0zb)],
					f,
				)),
					(0, E.$lK)(e.$S6b, f, E.InstantiationType.Delayed),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: t.$9V,
									title: {
										value: "Toggle AI model",
										original: "Toggle AI model",
									},
								});
							}
							async run(
								b,
								{
									isLongContextOrDebuggerMode: s,
									specificModelField: l,
									isChat: y,
									direction: $,
								},
							) {
								const v = b.get(e.$S6b),
									S = $ ?? "forward",
									I = s
										? v.getLongContextModel()
										: l === "regular-chat"
											? v.getRegularChatModel()
											: l === "cmd-k"
												? v.getCmdKModel()
												: l === "terminal-cmd-k"
													? v.getTerminalCmdKModel()
													: l === "composer"
														? v.getComposerModel()
														: v.getModel(),
									T = v.getAvailableModelsReactive({
										isLongContextOrDebuggerMode: s,
										isChat: y,
									}),
									P =
										S === "forward"
											? (T.indexOf(I) + 1) % T.length
											: (T.indexOf(I) - 1 + T.length) % T.length,
									k = T[P];
								s
									? v.setLongContextModel(k)
									: l === "regular-chat"
										? v.setRegularChatModel(k)
										: l === "cmd-k"
											? v.setCmdKModel(k)
											: l === "terminal-cmd-k"
												? v.setTerminalCmdKModel(k)
												: l === "composer"
													? v.setComposerModel(k)
													: v.setModel(k);
							}
						},
					),
					(e.$V6b = "switchToPrivateFTModels"),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: e.$V6b,
									title: {
										value: "Toggle Private FT models",
										original: "Toggle Private FT models",
									},
								});
							}
							async run(b) {
								const s = b.get(e.$S6b),
									l = s.getPrivateModel(),
									y = s.getPrivateModels();
								if (l === null) {
									s.setPrivateModel(y[0]);
									return;
								}
								const v =
										(y.map((I) => I.modelName).indexOf(l.modelName) + 1) %
										y.length,
									S = y[v];
								s.setPrivateModel(S);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: t.$0V,
									title: {
										value: "Switch to model",
										original: "Switch to model",
									},
									f1: !1,
								});
							}
							async run(b, s, l, y) {
								const $ = b.get(e.$S6b);
								l
									? $.setLongContextModel(s)
									: y === "regular-chat"
										? $.setRegularChatModel(s)
										: y === "cmd-k"
											? $.setCmdKModel(s)
											: y === "terminal-cmd-k"
												? $.setTerminalCmdKModel(s)
												: y === "composer"
													? $.setComposerModel(s)
													: $.setModel(s);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: t.$0V + ".gpt4",
									title: {
										value: "Switch to gpt-4",
										original: "Switch to gpt-4",
									},
									f1: !0,
								});
							}
							async run(b) {
								b.get(e.$S6b).setModel("gpt-4");
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: t.$0V + ".gpt3",
									title: {
										value: "Switch to cursor-small",
										original: "Switch to cursor-small",
									},
									f1: !1,
								});
							}
							async run(b) {
								b.get(e.$S6b).setModel("cursor-small");
							}
						},
					);
			},
		),
		