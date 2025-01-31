import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/uri.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/extensionManagement/common/implicitActivationEvents.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[53],
			he([1, 0, 6, 9, 154, 1200, 109, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*uri*/,
 w /*extensionManagementUtil*/,
 E /*implicitActivationEvents*/,
 C /*extensions*/,
 d /*instantiation*/) {
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
		)
