define(de[1294], he([1, 0, 517]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$h2 = e.$g2 = e.$f2 = void 0);
			class i {
				constructor(d) {
					(this.affinity = d), (this.kind = t.ExtensionHostKind.LocalProcess);
				}
				equals(d) {
					return this.kind === d.kind && this.affinity === d.affinity;
				}
				asString() {
					return this.affinity === 0
						? "LocalProcess"
						: `LocalProcess${this.affinity}`;
				}
			}
			e.$f2 = i;
			class w {
				constructor(d) {
					(this.affinity = d), (this.kind = t.ExtensionHostKind.LocalWebWorker);
				}
				equals(d) {
					return this.kind === d.kind && this.affinity === d.affinity;
				}
				asString() {
					return this.affinity === 0
						? "LocalWebWorker"
						: `LocalWebWorker${this.affinity}`;
				}
			}
			e.$g2 = w;
			class E {
				constructor() {
					(this.kind = t.ExtensionHostKind.Remote), (this.affinity = 0);
				}
				equals(d) {
					return this.kind === d.kind;
				}
				asString() {
					return "Remote";
				}
			}
			e.$h2 = E;
		}),
		define(
			de[3304],
			he([1, 0, 29, 113, 677, 22, 34, 21, 68, 129, 25]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$roc = a);
				async function a(h, c, n, g) {
					return g.invokeFunction(async (p) => {
						const o = p.get(i.$Ti),
							f = p.get(r.$Xl),
							b = p.get(w.$1N),
							s = p.get(d.$lq),
							l = p.get(m.$Vl),
							y = p.get(E.$ll),
							$ = p.get(u.$Vi),
							v = p.get(C.$ik),
							S = `extensionStorage.migrate.${h}-${c}`,
							I =
								h.toLowerCase() === c.toLowerCase()
									? `extension.storage.migrateFromLowerCaseKey.${h.toLowerCase()}`
									: void 0;
						if (h === c) return;
						const T = (k, L) =>
								L
									? l.extUri.joinPath(
											f.defaultProfile.globalStorageHome,
											k.toLowerCase(),
										)
									: l.extUri.joinPath(
											o.workspaceStorageHome,
											$.getWorkspace().id,
											k,
										),
							P = n ? d.StorageScope.PROFILE : d.StorageScope.WORKSPACE;
						if (!s.getBoolean(S, P, !1) && !(I && s.getBoolean(I, P, !1))) {
							v.info(
								`Migrating ${n ? "global" : "workspace"} extension storage from ${h} to ${c}...`,
							);
							const k = b.getExtensionState(h, n);
							k &&
								(b.setExtensionState(c, k, n),
								b.setExtensionState(h, void 0, n));
							const L = T(h, n),
								D = T(c, n);
							if (!l.extUri.isEqual(L, D))
								try {
									await y.move(L, D, !0);
								} catch (M) {
									M.code !== E.FileSystemProviderErrorCode.FileNotFound &&
										v.info(
											`Error while migrating ${n ? "global" : "workspace"} file storage from '${h}' to '${c}'`,
											(0, t.$bb)(M),
										);
								}
							v.info(
								`Migrated ${n ? "global" : "workspace"} extension storage from ${h} to ${c}`,
							),
								s.store(S, !0, P, d.StorageTarget.MACHINE);
						}
					});
				}
			},
		),
		define(
			de[53],
			he([1, 0, 6, 9, 154, 1200, 109, 5]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$z2 =
						e.ActivationKind =
						e.$w2 =
						e.$v2 =
						e.$s2 =
						e.ExtensionHostStartup =
						e.$r2 =
						e.$q2 =
						e.$p2 =
						e.$o2 =
							void 0),
					(e.$t2 = h),
					(e.$u2 = c),
					(e.$x2 = o),
					(e.$y2 = f),
					(e.$o2 = Object.freeze({
						identifier: new C.$Gn("nullExtensionDescription"),
						name: "Null Extension Description",
						version: "0.0.0",
						publisher: "vscode",
						engines: { vscode: "" },
						extensionLocation: i.URI.parse("void:location"),
						isBuiltin: !1,
						targetPlatform: C.TargetPlatform.UNDEFINED,
						isUserBuiltin: !1,
						isUnderDevelopment: !1,
					})),
					(e.$p2 = "extensions.webWorker"),
					(e.$q2 = (0, d.$Mi)("extensionService"));
				class m {
					constructor(l) {
						this.dependency = l;
					}
				}
				e.$r2 = m;
				var r;
				(function (s) {
					(s[(s.EagerAutoStart = 1)] = "EagerAutoStart"),
						(s[(s.EagerManualStart = 2)] = "EagerManualStart"),
						(s[(s.Lazy = 3)] = "Lazy");
				})(r || (e.ExtensionHostStartup = r = {}));
				class u {
					get versionId() {
						return this.c;
					}
					get allExtensions() {
						return this.d;
					}
					get myExtensions() {
						return this.e;
					}
					constructor(l, y, $) {
						(this.c = l),
							(this.d = y.slice(0)),
							(this.e = $.slice(0)),
							(this.f = null);
					}
					toSnapshot() {
						return {
							versionId: this.c,
							allExtensions: this.d,
							myExtensions: this.e,
							activationEvents: E.$a2.createActivationEventsMap(this.d),
						};
					}
					set(l, y, $) {
						if (this.c > l)
							throw new Error(
								`ExtensionHostExtensions: invalid versionId ${l} (current: ${this.c})`,
							);
						const v = [],
							S = [],
							I = [],
							T = [],
							P = a(this.d),
							k = a(y),
							L = (R, O) =>
								R.extensionLocation.toString() ===
									O.extensionLocation.toString() ||
								R.isBuiltin === O.isBuiltin ||
								R.isUserBuiltin === O.isUserBuiltin ||
								R.isUnderDevelopment === O.isUnderDevelopment;
						for (const R of this.d) {
							const O = k.get(R.identifier);
							if (!O) {
								v.push(R.identifier), P.delete(R.identifier);
								continue;
							}
							if (!L(R, O)) {
								v.push(R.identifier), P.delete(R.identifier);
								continue;
							}
						}
						for (const R of y) {
							const O = P.get(R.identifier);
							if (!O) {
								S.push(R);
								continue;
							}
							if (!L(O, R)) {
								v.push(O.identifier), P.delete(O.identifier);
								continue;
							}
						}
						const D = new C.$Hn(this.e),
							M = new C.$Hn($);
						for (const R of this.e) M.has(R) || I.push(R);
						for (const R of $) D.has(R) || T.push(R);
						const N = E.$a2.createActivationEventsMap(S),
							A = {
								versionId: l,
								toRemove: v,
								toAdd: S,
								addActivationEvents: N,
								myToRemove: I,
								myToAdd: T,
							};
						return this.delta(A), A;
					}
					delta(l) {
						if (this.c >= l.versionId) return null;
						const { toRemove: y, toAdd: $, myToRemove: v, myToAdd: S } = l,
							I = new C.$Hn(y),
							T = new C.$Hn(v);
						for (let P = 0; P < this.d.length; P++)
							I.has(this.d[P].identifier) && (this.d.splice(P, 1), P--);
						for (let P = 0; P < this.e.length; P++)
							T.has(this.e[P]) && (this.e.splice(P, 1), P--);
						for (const P of $) this.d.push(P);
						for (const P of S) this.e.push(P);
						return (this.f = null), l;
					}
					containsExtension(l) {
						for (const y of this.e) if (C.$Gn.equals(y, l)) return !0;
						return !1;
					}
					containsActivationEvent(l) {
						return this.f || (this.f = this.g()), this.f.has(l);
					}
					g() {
						const l = new Set();
						for (const y of this.d) {
							if (!this.containsExtension(y.identifier)) continue;
							const $ = E.$a2.readActivationEvents(y);
							for (const v of $) l.add(v);
						}
						return l;
					}
				}
				e.$s2 = u;
				function a(s) {
					const l = new C.$In();
					for (const y of s) l.set(y.identifier, y);
					return l;
				}
				function h(s, l) {
					return ((l === "control" || l === "cursor" || l === "cursorNoDeps") &&
						!s.isBuiltin) ||
						!s.enabledApiProposals
						? !1
						: s.enabledApiProposals.includes(l);
				}
				function c(s, l) {
					if (!h(s, l))
						throw new Error(`Extension '${s.identifier.value}' CANNOT use API proposal: ${l}.
Its package.json#enabledApiProposals-property declares: ${s.enabledApiProposals?.join(", ") ?? "[]"} but NOT ${l}.
 The missing proposal MUST be added and you must start in extension development mode or use the following command line switch: --enable-proposed-api ${s.identifier.value}. Note that the cursor and control proposals are only available for built-in extensions`);
				}
				class n {
					constructor(l, y, $, v) {
						(this.codeLoadingTime = l),
							(this.activateCallTime = y),
							(this.activateResolvedTime = $),
							(this.activationReason = v);
					}
				}
				e.$v2 = n;
				class g {
					constructor(l, y) {
						(this.description = l), (this.value = y);
					}
				}
				e.$w2 = g;
				var p;
				(function (s) {
					(s[(s.Normal = 0)] = "Normal"), (s[(s.Immediate = 1)] = "Immediate");
				})(p || (e.ActivationKind = p = {}));
				function o(s) {
					return {
						type: s.isBuiltin ? C.ExtensionType.System : C.ExtensionType.User,
						isBuiltin: s.isBuiltin || s.isUserBuiltin,
						identifier: { id: (0, w.$_p)(s.publisher, s.name), uuid: s.uuid },
						manifest: s,
						location: s.extensionLocation,
						targetPlatform: s.targetPlatform,
						validations: [],
						isValid: !0,
					};
				}
				function f(s, l) {
					const y = (0, w.$0p)(s.manifest.publisher, s.manifest.name);
					return {
						id: y,
						identifier: new C.$Gn(y),
						isBuiltin: s.type === C.ExtensionType.System,
						isUserBuiltin: s.type === C.ExtensionType.User && s.isBuiltin,
						isUnderDevelopment: !!l,
						extensionLocation: s.location,
						uuid: s.identifier.uuid,
						targetPlatform: s.targetPlatform,
						publisherDisplayName: s.publisherDisplayName,
						...s.manifest,
					};
				}
				class b {
					constructor() {
						(this.onDidRegisterExtensions = t.Event.None),
							(this.onDidChangeExtensionsStatus = t.Event.None),
							(this.onDidChangeExtensions = t.Event.None),
							(this.onWillActivateByEvent = t.Event.None),
							(this.onDidChangeResponsiveChange = t.Event.None),
							(this.onWillStop = t.Event.None),
							(this.extensions = []);
					}
					registerHotfixExtensionsProvider(l) {}
					activateByEvent(l) {
						return Promise.resolve(void 0);
					}
					activateById(l, y) {
						return Promise.resolve(void 0);
					}
					activationEventIsDone(l) {
						return !1;
					}
					whenInstalledExtensionsRegistered() {
						return Promise.resolve(!0);
					}
					getExtension() {
						return Promise.resolve(void 0);
					}
					readExtensionPointContributions(l) {
						return Promise.resolve(Object.create(null));
					}
					getExtensionsStatus() {
						return Object.create(null);
					}
					getInspectPorts(l, y) {
						return Promise.resolve([]);
					}
					stopExtensionHosts() {}
					async startExtensionHosts() {}
					async setRemoteEnvironment(l) {}
					canAddExtension() {
						return !1;
					}
					canRemoveExtension() {
						return !1;
					}
				}
				e.$z2 = b;
			},
		),
		define(
			de[3305],
			he([1, 0, 275, 3, 4, 11, 57, 5, 62, 63, 621, 822, 357, 53]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$a1c = void 0);
				class n extends E.$3X {
					constructor() {
						super({
							id: "_manageTrustedExtensionsForAccount",
							title: (0, w.localize2)(
								4443,
								"Manage Trusted Extensions For Account",
							),
							category: (0, w.localize2)(4444, "Accounts"),
							f1: !0,
						});
					}
					run(o, f) {
						return o.get(d.$Li).createInstance(g).run(f);
					}
				}
				e.$a1c = n;
				let g = class {
					constructor(o, f, b, s, l, y, $) {
						(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $);
					}
					async run(o) {
						const { providerId: f, accountLabel: b } = await this.k(
							o?.providerId,
							o?.accountLabel,
						);
						if (!f || !b) return;
						const s = await this.l(f, b);
						if (!s.length) return;
						const l = new i.$Zc(),
							y = this.n(l, f, b);
						(y.items = s),
							(y.selectedItems = s.filter(
								($) => $.type !== "separator" && !!$.picked,
							)),
							y.show();
					}
					async k(o, f) {
						if (!o || !f) {
							const b = new Array();
							for (const l of this.g.getProviderIds()) {
								const y = this.g.getProvider(l).label,
									$ = await this.g.getSessions(l),
									v = new Set();
								for (const S of $)
									v.has(S.account.label) ||
										(v.add(S.account.label),
										b.push({
											providerId: l,
											providerLabel: y,
											accountLabel: S.account.label,
										}));
							}
							const s = await this.f.pick(
								b.map((l) => ({
									providerId: l.providerId,
									label: l.accountLabel,
									description: l.providerLabel,
								})),
								{
									placeHolder: (0, w.localize)(4434, null),
									matchOnDescription: !0,
								},
							);
							if (s) (o = s.providerId), (f = s.label);
							else return { providerId: void 0, accountLabel: void 0 };
						}
						return { providerId: o, accountLabel: f };
					}
					async l(o, f) {
						const b = this.j.readAllowedExtensions(o, f),
							s = this.c.trustedExtensionAuthAccess,
							l = Array.isArray(s)
								? s
								: typeof s == "object"
									? (s[o] ?? [])
									: [];
						for (const T of l) {
							const P = b.find((k) => k.id === T);
							if (P) (P.allowed = !0), (P.trusted = !0);
							else {
								const k = await this.d.getExtension(T);
								k &&
									b.push({
										id: T,
										name: k.displayName || k.name,
										allowed: !0,
										trusted: !0,
									});
							}
						}
						if (!b.length) return this.e.info((0, w.localize)(4435, null)), [];
						const y = this.h.readAccountUsages(o, f),
							$ = [],
							v = [];
						for (const T of b) {
							const P = y.find((k) => T.id === k.extensionId);
							(T.lastUsed = P?.lastUsed), T.trusted ? $.push(T) : v.push(T);
						}
						const S = (T, P) => (P.lastUsed || 0) - (T.lastUsed || 0);
						return [
							...v.sort(S).map(this.m),
							{ type: "separator", label: (0, w.localize)(4436, null) },
							...$.sort(S).map(this.m),
						];
					}
					m(o) {
						const f = o.lastUsed,
							b = f
								? (0, w.localize)(4437, null, (0, t.$dn)(f, !0))
								: (0, w.localize)(4438, null);
						let s, l;
						return (
							o.trusted && ((s = (0, w.localize)(4439, null)), (l = !0)),
							{
								label: o.name,
								extension: o,
								description: b,
								tooltip: s,
								disabled: l,
								picked: o.allowed === void 0 || o.allowed,
							}
						);
					}
					n(o, f, b) {
						const s = o.add(this.f.createQuickPick({ useSeparators: !0 }));
						return (
							(s.canSelectMany = !0),
							(s.customButton = !0),
							(s.customLabel = (0, w.localize)(4440, null)),
							(s.title = (0, w.localize)(4441, null)),
							(s.placeholder = (0, w.localize)(4442, null)),
							o.add(
								s.onDidAccept(() => {
									const l = s.items
											.filter(($) => $.type !== "separator")
											.map(($) => $.extension),
										y = new Set(s.selectedItems.map(($) => $.extension));
									l.forEach(($) => {
										$.allowed = y.has($);
									}),
										this.j.updateAllowedExtensions(f, b, l),
										s.hide();
								}),
							),
							o.add(
								s.onDidHide(() => {
									o.dispose();
								}),
							),
							o.add(
								s.onDidCustom(() => {
									s.hide();
								}),
							),
							s
						);
					}
				};
				g = Ne(
					[
						j(0, m.$Bk),
						j(1, c.$q2),
						j(2, C.$GO),
						j(3, r.$DJ),
						j(4, h.$$7),
						j(5, a.$dqc),
						j(6, u.$dsb),
					],
					g,
				);
			},
		),
		