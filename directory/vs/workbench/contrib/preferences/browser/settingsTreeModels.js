define(
			de[1042],
			he([
				1, 0, 24, 37, 28, 9, 10, 1745, 468, 131, 78, 261, 3, 6, 81, 61, 30, 133,
				62,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GCc =
						e.SearchResultIdx =
						e.$CCc =
						e.$BCc =
						e.$ACc =
						e.$zCc =
						e.$yCc =
						e.$xCc =
							void 0),
					(e.$DCc = S),
					(e.$ECc = T),
					(e.$FCc = N),
					(e.$HCc = V),
					(t = mt(t)),
					(e.$xCc = "usesOnlineServices");
				class b extends h.$1c {
					constructor(K) {
						super(),
							(this.c = !1),
							(this.f = new c.$re()),
							(this.onDidChangeTabbable = this.f.event),
							(this.id = K);
					}
					get tabbable() {
						return this.c;
					}
					set tabbable(K) {
						(this.c = K), this.f.fire();
					}
				}
				e.$yCc = b;
				class s extends b {
					get children() {
						return this.h;
					}
					set children(K) {
						(this.h = K),
							(this.g = new Set()),
							this.h.forEach((J) => {
								J instanceof y && this.g.add(J.setting.key);
							});
					}
					constructor(K, J, W, X, Y) {
						super(K),
							(this.g = new Set()),
							(this.h = []),
							(this.count = J),
							(this.label = W),
							(this.level = X),
							(this.isFirstGroup = Y);
					}
					containsSetting(K) {
						return this.g.has(K);
					}
				}
				e.$zCc = s;
				class l extends b {
					constructor(K, J) {
						super(K), (this.extensionIds = J);
					}
				}
				e.$ACc = l;
				class y extends b {
					static {
						this.g = 20;
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _) {
						super(I(J.id + "_" + K.key)),
							(this.settingsTarget = W),
							(this.n = X),
							(this.q = Y),
							(this.r = ie),
							(this.t = ne),
							(this.u = ee),
							(this.w = _),
							(this.h = null),
							(this.j = null),
							(this.isConfigured = !1),
							(this.isUntrusted = !1),
							(this.hasPolicyValue = !1),
							(this.overriddenScopeList = []),
							(this.overriddenDefaultsLanguageList = []),
							(this.languageOverrideValues = new Map()),
							(this.setting = K),
							(this.parent = J),
							this.z(),
							this.C();
					}
					get displayCategory() {
						return this.h || this.y(), this.h;
					}
					get displayLabel() {
						return this.j || this.y(), this.j;
					}
					y() {
						if (this.setting.title) {
							(this.j = this.setting.title),
								(this.h = this.setting.categoryLabel ?? null);
							return;
						}
						const K = T(
							this.setting.key,
							this.parent.id,
							this.setting.isLanguageTagSetting,
						);
						(this.j = K.label), (this.h = K.category);
					}
					z() {
						if (this.setting.description.length > y.g) {
							const K = this.setting.description.slice(0, y.g);
							K.push("[...]"),
								(this.description = K.join(`
`));
						} else
							this.description = this.setting.description.join(`
`);
					}
					C() {
						L(this.setting, this.t)
							? (this.valueType = r.SettingValueType.ExtensionToggle)
							: this.setting.enum &&
									(!this.setting.type || O(this.setting.type))
								? (this.valueType = r.SettingValueType.Enum)
								: this.setting.type === "string"
									? this.setting.editPresentation ===
										n.EditPresentationTypes.Multiline
										? (this.valueType = r.SettingValueType.MultilineString)
										: (this.valueType = r.SettingValueType.String)
									: D(this.setting)
										? (this.valueType = r.SettingValueType.Exclude)
										: M(this.setting)
											? (this.valueType = r.SettingValueType.Include)
											: this.setting.type === "integer"
												? (this.valueType = r.SettingValueType.Integer)
												: this.setting.type === "number"
													? (this.valueType = r.SettingValueType.Number)
													: this.setting.type === "boolean"
														? (this.valueType = r.SettingValueType.Boolean)
														: this.setting.type === "array" &&
																this.setting.arrayItemType &&
																[
																	"string",
																	"enum",
																	"number",
																	"integer",
																].includes(this.setting.arrayItemType)
															? (this.valueType = r.SettingValueType.Array)
															: Array.isArray(this.setting.type) &&
																	this.setting.type.includes(
																		r.SettingValueType.Null,
																	) &&
																	this.setting.type.length === 2
																? this.setting.type.includes(
																		r.SettingValueType.Integer,
																	)
																	? (this.valueType =
																			r.SettingValueType.NullableInteger)
																	: this.setting.type.includes(
																				r.SettingValueType.Number,
																			)
																		? (this.valueType =
																				r.SettingValueType.NullableNumber)
																		: (this.valueType =
																				r.SettingValueType.Complex)
																: R(this.setting)
																	? this.setting.allKeysAreBoolean
																		? (this.valueType =
																				r.SettingValueType.BooleanObject)
																		: (this.valueType =
																				r.SettingValueType.Object)
																	: this.setting.isLanguageTagSetting
																		? (this.valueType =
																				r.SettingValueType.LanguageTag)
																		: (this.valueType =
																				r.SettingValueType.Complex);
					}
					inspectSelf() {
						const K = this.F(this.setting),
							J = S(this.setting.key, K, this.q, this.w);
						this.G(J, this.n);
					}
					F(K) {
						return !this.u.currentProfile.isDefault &&
							!this.u.currentProfile.useDefaultFlags?.settings &&
							(K.scope === n.ConfigurationScope.APPLICATION ||
								(this.w.isSettingAppliedForAllProfiles(K.key) &&
									this.settingsTarget === C.ConfigurationTarget.USER_LOCAL))
							? C.ConfigurationTarget.APPLICATION
							: this.settingsTarget;
					}
					G(K, J) {
						let {
							isConfigured: W,
							inspected: X,
							targetSelector: Y,
							inspectedLanguageOverrides: ie,
							languageSelector: ne,
						} = K;
						switch (Y) {
							case "workspaceFolderValue":
							case "workspaceValue":
								this.isUntrusted = !!this.setting.restricted && !J;
								break;
						}
						let ee = W ? X[Y] : X.defaultValue;
						const _ = [],
							te = [];
						if (
							((ne || Y !== "workspaceValue") &&
								typeof X.workspaceValue < "u" &&
								_.push("workspace:"),
							(ne || Y !== "userRemoteValue") &&
								typeof X.userRemoteValue < "u" &&
								_.push("remote:"),
							(ne || Y !== "userLocalValue") &&
								typeof X.userLocalValue < "u" &&
								_.push("user:"),
							X.overrideIdentifiers)
						)
							for (const Q of X.overrideIdentifiers) {
								const Z = ie.get(Q);
								Z &&
									(this.r.isRegisteredLanguageId(Q) &&
										(ne !== Q && typeof Z.default?.override < "u" && te.push(Q),
										(ne !== Q || Y !== "workspaceValue") &&
											typeof Z.workspace?.override < "u" &&
											_.push(`workspace:${Q}`),
										(ne !== Q || Y !== "userRemoteValue") &&
											typeof Z.userRemote?.override < "u" &&
											_.push(`remote:${Q}`),
										(ne !== Q || Y !== "userLocalValue") &&
											typeof Z.userLocal?.override < "u" &&
											_.push(`user:${Q}`)),
									this.languageOverrideValues.set(Q, Z));
							}
						if (
							((this.overriddenScopeList = _),
							(this.overriddenDefaultsLanguageList = te),
							(this.defaultValueSource =
								this.setting.nonLanguageSpecificDefaultValueSource),
							X.policyValue)
						)
							(this.hasPolicyValue = !0),
								(W = !1),
								(ee = X.policyValue),
								(this.scopeValue = X.policyValue),
								(this.defaultValue = X.defaultValue);
						else if (ne && this.languageOverrideValues.has(ne)) {
							const Q = this.languageOverrideValues.get(ne);
							(ee = (W ? Q[Y] : Q.defaultValue) ?? ee),
								(this.scopeValue = W && Q[Y]),
								(this.defaultValue = Q.defaultValue ?? X.defaultValue);
							const se = p.$Io
									.as(n.$No.Configuration)
									.getConfigurationDefaultsOverrides()
									.get(`[${ne}]`)?.source,
								re = se instanceof Map ? se.get(this.setting.key) : void 0;
							re && (this.defaultValueSource = re);
						} else
							(this.scopeValue = W && X[Y]),
								(this.defaultValue = X.defaultValue);
						(this.value = ee),
							(this.isConfigured = W),
							(W ||
								this.setting.tags ||
								this.tags ||
								this.setting.restricted ||
								this.hasPolicyValue) &&
								((this.tags = new Set()),
								W && this.tags.add(m.$OBc),
								this.setting.tags?.forEach((Q) => this.tags.add(Q)),
								this.setting.restricted && this.tags.add(m.$WBc),
								this.hasPolicyValue && this.tags.add(m.$UBc));
					}
					matchesAllTags(K) {
						return K?.size
							? (this.tags || this.inspectSelf(),
								!!this.tags?.size &&
									Array.from(K).every((J) => this.tags.has(J)))
							: !0;
					}
					matchesScope(K, J) {
						const W = E.URI.isUri(K)
							? C.ConfigurationTarget.WORKSPACE_FOLDER
							: K;
						return this.setting.scope
							? W === C.ConfigurationTarget.APPLICATION
								? a.$GZ.includes(this.setting.scope)
								: W === C.ConfigurationTarget.WORKSPACE_FOLDER
									? a.$MZ.includes(this.setting.scope)
									: W === C.ConfigurationTarget.WORKSPACE
										? a.$LZ.includes(this.setting.scope)
										: W === C.ConfigurationTarget.USER_REMOTE
											? a.$KZ.includes(this.setting.scope)
											: W === C.ConfigurationTarget.USER_LOCAL && J
												? a.$JZ.includes(this.setting.scope)
												: !0
							: !0;
					}
					matchesAnyExtension(K) {
						return !K || !K.size
							? !0
							: this.setting.extensionInfo
								? Array.from(K).some(
										(J) =>
											J.toLowerCase() ===
											this.setting.extensionInfo.id.toLowerCase(),
									)
								: !1;
					}
					matchesAnyFeature(K) {
						if (!K || !K.size) return !0;
						const J = d.$uCc.children.find((W) => W.id === "features");
						return Array.from(K).some((W) => {
							if (J && J.children) {
								const X = J.children.find((Y) => "features/" + W === Y.id);
								if (X) {
									const Y = X.settings?.map((ie) => $(ie));
									return (
										Y &&
										!this.setting.extensionInfo &&
										Y.some((ie) => ie.test(this.setting.key.toLowerCase()))
									);
								} else return !1;
							} else return !1;
						});
					}
					matchesAnyId(K) {
						return !K || !K.size ? !0 : K.has(this.setting.key);
					}
					matchesAllLanguages(K) {
						return K
							? this.r.isRegisteredLanguageId(K)
								? this.setting.scope ===
									n.ConfigurationScope.LANGUAGE_OVERRIDABLE
								: !1
							: !0;
					}
				}
				e.$BCc = y;
				function $(G) {
					return (
						(G = (0, i.$of)(G).replace(/\\\*/g, ".*")),
						new RegExp(`^${G}$`, "i")
					);
				}
				let v = class {
					constructor(K, J, W, X, Y, ie) {
						(this.f = K),
							(this.g = J),
							(this.h = W),
							(this.i = X),
							(this.j = Y),
							(this.l = ie),
							(this.e = new Map());
					}
					get root() {
						return this.c;
					}
					update(K = this.d) {
						this.e.clear();
						const J = this.r(K);
						J.children[0] instanceof s && (J.children[0].isFirstGroup = !0),
							this.c
								? (this.n(this.c.children), (this.c.children = J.children))
								: (this.c = J);
					}
					updateWorkspaceTrust(K) {
						(this.g = K), this.p();
					}
					n(K) {
						for (const J of K) this.o(J);
					}
					o(K) {
						K instanceof s && this.n(K.children), K.dispose();
					}
					getElementsByName(K) {
						return this.e.get(K) ?? null;
					}
					updateElementsByName(K) {
						this.e.has(K) && this.q(this.e.get(K));
					}
					p() {
						this.q([...this.e.values()].flat().filter((K) => K.isUntrusted));
					}
					q(K) {
						for (const J of K) J.inspectSelf();
					}
					r(K, J) {
						const W = J ? this.t(J) + 1 : 0,
							X = new s(K.id, void 0, K.label, W, !1);
						X.parent = J;
						const Y = [];
						if (K.settings) {
							const ie = K.settings
								.map((ne) => this.u(ne, X))
								.filter((ne) =>
									ne.setting.deprecationMessage ? ne.isConfigured : !0,
								);
							Y.push(...ie);
						}
						if (K.children) {
							const ie = K.children.map((ne) => this.r(ne, X));
							Y.push(...ie);
						}
						return (X.children = Y), X;
					}
					t(K) {
						return K.parent ? 1 + this.t(K.parent) : 0;
					}
					u(K, J) {
						const W = new y(
								K,
								J,
								this.f.settingsTarget,
								this.g,
								this.f.languageFilter,
								this.i,
								this.l,
								this.j,
								this.h,
							),
							X = this.e.get(K.key) || [];
						return X.push(W), this.e.set(K.key, X), W;
					}
				};
				(e.$CCc = v),
					(e.$CCc = v =
						Ne([j(2, a.$RZ), j(3, g.$nM), j(4, o.$P8), j(5, f.$Bk)], v));
				function S(G, K, J, W) {
					const X = E.URI.isUri(K) ? { resource: K } : void 0,
						Y = W.inspect(G, X),
						ie =
							K === C.ConfigurationTarget.APPLICATION
								? "applicationValue"
								: K === C.ConfigurationTarget.USER_LOCAL
									? "userLocalValue"
									: K === C.ConfigurationTarget.USER_REMOTE
										? "userRemoteValue"
										: K === C.ConfigurationTarget.WORKSPACE
											? "workspaceValue"
											: "workspaceFolderValue",
						ne =
							K === C.ConfigurationTarget.APPLICATION
								? "application"
								: K === C.ConfigurationTarget.USER_LOCAL
									? "userLocal"
									: K === C.ConfigurationTarget.USER_REMOTE
										? "userRemote"
										: K === C.ConfigurationTarget.WORKSPACE
											? "workspace"
											: "workspaceFolder";
					let ee = typeof Y[ie] < "u";
					const _ = Y.overrideIdentifiers,
						te = new Map();
					if ((J && (ee = !1), _)) {
						for (const Q of _)
							te.set(Q, W.inspect(G, { overrideIdentifier: Q }));
						J && te.has(J) && typeof te.get(J)[ne]?.override < "u" && (ee = !0);
					}
					return {
						isConfigured: ee,
						inspected: Y,
						targetSelector: ie,
						inspectedLanguageOverrides: te,
						languageSelector: J,
					};
				}
				function I(G) {
					return G.replace(/[\.\/]/, "_");
				}
				function T(G, K = "", J = !1) {
					const W = G.lastIndexOf(".");
					let X = "";
					W >= 0 && ((X = G.substring(0, W)), (G = G.substring(W + 1))),
						(K = K.replace(/\//g, ".")),
						(X = k(X, K)),
						(X = P(X)),
						J && ((G = G.replace(/[\[\]]/g, "")), (G = "$(bracket) " + G));
					const Y = P(G);
					return { category: X, label: Y };
				}
				function P(G) {
					G = G.replace(/\.([a-z0-9])/g, (K, J) => ` \u203A ${J.toUpperCase()}`)
						.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
						.replace(/^[a-z]/g, (K) => K.toUpperCase())
						.replace(/\b\w+\b/g, (K) =>
							d.$vCc.has(K.toLowerCase()) ? K.toUpperCase() : K,
						);
					for (const [K, J] of d.$wCc)
						G = G.replace(new RegExp(`\\b${K}\\b`, "gi"), J);
					return G;
				}
				function k(G, K) {
					const J = (X) => {
						/insiders$/i.test(G) || (K = K.replace(/-?insiders$/i, ""));
						const Y = K.split(".").map((ie) =>
							ie.replace(/-/g, "").toLowerCase() === G.toLowerCase()
								? ie.replace(/-/g, "")
								: ie,
						);
						for (; Y.length; ) {
							const ie = new RegExp(`^${Y.join("\\.")}(\\.|$)`, "i");
							if (ie.test(G)) return G.replace(ie, "");
							X ? Y.pop() : Y.shift();
						}
						return null;
					};
					let W = J(!0);
					return W === null && (W = J(!1)), W === null && (W = G), W;
				}
				function L(G, K) {
					return (
						m.$ZBc && !!K.extensionRecommendations && !!G.displayExtensionId
					);
				}
				function D(G) {
					return (
						G.key === "files.exclude" ||
						G.key === "search.exclude" ||
						G.key === "workbench.localHistory.exclude" ||
						G.key === "explorer.autoRevealExclude" ||
						G.key === "files.readonlyExclude" ||
						G.key === "files.watcherExclude"
					);
				}
				function M(G) {
					return G.key === "files.readonlyInclude";
				}
				function N(G) {
					return G === "workbench.editor.customLabels.patterns";
				}
				function A({ type: G }, K) {
					return G === "string" ||
						G === "boolean" ||
						G === "integer" ||
						G === "number"
						? !0
						: N(K) && Array.isArray(G) && G.length === 2
							? G.includes("null") &&
								(G.includes("string") ||
									G.includes("boolean") ||
									G.includes("integer") ||
									G.includes("number"))
							: !1;
				}
				function R({
					key: G,
					type: K,
					objectProperties: J,
					objectPatternProperties: W,
					objectAdditionalProperties: X,
				}) {
					if (
						K !== "object" ||
						((0, w.$ug)(J) && (0, w.$ug)(W) && (0, w.$ug)(X)) ||
						((X === !0 || X === void 0) && !Object.keys(W ?? {}).includes(".*"))
					)
						return !1;
					const Y = [...Object.values(J ?? {}), ...Object.values(W ?? {})];
					return (
						X && typeof X == "object" && Y.push(X),
						Y.map((ne) => (Array.isArray(ne.anyOf) ? ne.anyOf : [ne]))
							.flat()
							.every((ne) => A(ne, G))
					);
				}
				function O(G) {
					const K = ["string", "boolean", "null", "integer", "number"];
					return (Array.isArray(G) ? G : [G]).every((W) => K.includes(W));
				}
				var B;
				(function (G) {
					(G[(G.Local = 0)] = "Local"),
						(G[(G.Remote = 1)] = "Remote"),
						(G[(G.NewExtensions = 2)] = "NewExtensions");
				})(B || (e.SearchResultIdx = B = {}));
				let U = class extends v {
					constructor(K, J, W, X, Y, ie, ne, ee) {
						super(K, W, X, ie, ne, ee),
							(this.B = Y),
							(this.w = null),
							(this.x = null),
							(this.y = null),
							(this.z = null),
							(this.id = "searchResultModel"),
							(this.A = J),
							this.update({ id: "searchResultModel", label: "" });
					}
					C(K) {
						if (this.A)
							for (const J of K)
								J.setting.internalOrder = this.A.get(J.setting.key);
						return this.f.query
							? (K.sort((J, W) =>
									J.matchType !== W.matchType
										? W.matchType - J.matchType
										: J.matchType === r.SettingMatchType.RemoteMatch
											? W.score - J.score
											: (0, m.$2Bc)(
													J.setting.internalOrder,
													W.setting.internalOrder,
												),
								),
								t.$Qb(K, (J) => J.setting.key))
							: K.sort((J, W) =>
									(0, m.$2Bc)(J.setting.internalOrder, W.setting.internalOrder),
								);
					}
					getUniqueResults() {
						if (this.x) return this.x;
						if (!this.w) return null;
						let K = [];
						const J = new Set(),
							W = this.w[B.Local];
						W &&
							(W.filterMatches.forEach((Y) => J.add(Y.setting.key)),
							(K = W.filterMatches));
						const X = this.w[B.Remote];
						return (
							X &&
								((X.filterMatches = X.filterMatches.filter(
									(Y) => !J.has(Y.setting.key),
								)),
								(K = K.concat(X.filterMatches)),
								(this.y = this.w[B.NewExtensions])),
							(K = this.C(K)),
							(this.x = {
								filterMatches: K,
								exactMatch: W?.exactMatch || X?.exactMatch,
							}),
							this.x
						);
					}
					getRawResults() {
						return this.w || [];
					}
					setResult(K, J) {
						if (
							((this.x = null), (this.y = null), (this.w = this.w || []), !J)
						) {
							delete this.w[K];
							return;
						}
						J.exactMatch && (this.w = []),
							(this.w[K] = J),
							this.updateChildren();
					}
					updateChildren() {
						this.update({
							id: "searchResultModel",
							label: "searchResultModel",
							settings: this.D(),
						});
						const K = !!this.B.remoteAuthority;
						if (
							((this.root.children = this.root.children.filter(
								(J) =>
									J instanceof y &&
									J.matchesAllTags(this.f.tagFilters) &&
									J.matchesScope(this.f.settingsTarget, K) &&
									J.matchesAnyExtension(this.f.extensionFilters) &&
									J.matchesAnyId(this.f.idFilters) &&
									J.matchesAnyFeature(this.f.featureFilters) &&
									J.matchesAllLanguages(this.f.languageFilter),
							)),
							(this.z = this.root.children.length),
							this.y?.filterMatches.length)
						) {
							let J = this.y.filterMatches
								.map((W) => W.setting)
								.filter((W) => W.extensionName && W.extensionPublisher)
								.map((W) => `${W.extensionPublisher}.${W.extensionName}`);
							if (((J = t.$Qb(J)), J.length)) {
								const W = new l("newExtensions", J);
								(W.parent = this.c), this.c.children.push(W);
							}
						}
					}
					getUniqueResultsCount() {
						return this.z ?? 0;
					}
					D() {
						return (
							this.getUniqueResults()?.filterMatches.map((K) => K.setting) ?? []
						);
					}
				};
				(e.$GCc = U),
					(e.$GCc = U =
						Ne(
							[j(3, a.$RZ), j(4, u.$r8), j(5, g.$nM), j(6, o.$P8), j(7, f.$Bk)],
							U,
						));
				const z = /(^|\s)@tag:("([^"]*)"|[^"]\S*)/g,
					F = /(^|\s)@ext:("([^"]*)"|[^"]\S*)?/g,
					x = /(^|\s)@feature:("([^"]*)"|[^"]\S*)?/g,
					H = /(^|\s)@id:("([^"]*)"|[^"]\S*)?/g,
					q = /(^|\s)@lang:("([^"]*)"|[^"]\S*)?/g;
				function V(G) {
					function K(ne, ee, _) {
						return ne.replace(ee, (te, Q, Z, se) => {
							const re = se || Z;
							return (
								re &&
									_.push(
										...re
											.split(",")
											.map((le) => le.trim())
											.filter((le) => !(0, i.$jf)(le)),
									),
								""
							);
						});
					}
					const J = [];
					(G = G.replace(z, (ne, ee, _, te) => (J.push(te || _), ""))),
						(G = G.replace(`@${m.$OBc}`, () => (J.push(m.$OBc), ""))),
						(G = G.replace(`@${m.$UBc}`, () => (J.push(m.$UBc), "")));
					const W = [],
						X = [],
						Y = [],
						ie = [];
					return (
						(G = K(G, F, W)),
						(G = K(G, x, X)),
						(G = K(G, H, Y)),
						m.$YBc && (G = K(G, q, ie)),
						(G = G.trim()),
						{
							tags: J,
							extensionFilters: W,
							featureFilters: X,
							idFilters: Y,
							languageFilter: ie.length ? ie[0] : void 0,
							query: G,
						}
					);
				}
			},
		),
		