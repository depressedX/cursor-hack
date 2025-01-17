import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/types.js';
import '../../../nls.js';
import '../../configuration/common/configurationRegistry.js';
import '../../extensionManagement/common/extensionManagement.js';
import '../../instantiation/common/instantiation.js';
import '../../jsonschemas/common/jsonContributionRegistry.js';
import '../../registry/common/platform.js';
define(
			de[150],
			he([1, 0, 24, 28, 4, 81, 119, 5, 250, 30]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Rb =
						e.$$Rb =
						e.$0Rb =
						e.$9Rb =
						e.$8Rb =
						e.$7Rb =
						e.$6Rb =
						e.$5Rb =
						e.$4Rb =
						e.$2Rb =
						e.MergeState =
						e.Change =
						e.SyncStatus =
						e.$1Rb =
						e.$ZRb =
						e.$YRb =
						e.UserDataSyncErrorCode =
						e.$WRb =
						e.$VRb =
						e.$URb =
						e.$TRb =
						e.$SRb =
						e.$PRb =
						e.SyncResource =
						e.$MRb =
						e.$LRb =
							void 0),
					(e.$IRb = u),
					(e.$JRb = a),
					(e.$KRb = h),
					(e.$NRb = n),
					(e.$ORb = g),
					(e.$QRb = o),
					(e.$RRb = f),
					(e.$XRb = b),
					(e.$3Rb = T);
				function u() {
					const P = r.$Io.as(E.$No.Configuration).getConfigurationProperties();
					return Object.keys(P).filter((k) => !!P[k].disallowSyncIgnore);
				}
				function a(P = !1) {
					const k = r.$Io.as(E.$No.Configuration).getConfigurationProperties(),
						L = c(k, P),
						D = u();
					return (0, t.$Qb)([...L, ...D]);
				}
				function h(P) {
					if (!P.contributes?.configuration) return [];
					const k = Array.isArray(P.contributes.configuration)
						? P.contributes.configuration
						: [P.contributes.configuration];
					if (!k.length) return [];
					const L = (0, E.$4o)(k);
					return c(L, !1);
				}
				function c(P, k) {
					const L = new Set();
					for (const D in P) {
						if (k && P[D].source) continue;
						const M = (0, i.$lg)(P[D].scope)
							? (0, E.$5o)(P[D].scope)
							: P[D].scope;
						(P[D].ignoreSync ||
							M === E.ConfigurationScope.MACHINE ||
							M === E.ConfigurationScope.MACHINE_OVERRIDABLE) &&
							L.add(D);
					}
					return [...L.values()];
				}
				(e.$LRb = "settingsSync"),
					(e.$MRb = "settingsSync.keybindingsPerPlatform");
				function n() {
					const P = "vscode://schemas/ignoredSettings",
						k = r.$Io.as(E.$No.Configuration);
					k.registerConfiguration({
						id: "settingsSync",
						order: 30,
						title: (0, w.localize)(2459, null),
						type: "object",
						properties: {
							[e.$MRb]: {
								type: "boolean",
								description: (0, w.localize)(2460, null),
								default: !0,
								scope: E.ConfigurationScope.APPLICATION,
								tags: ["sync", "usesOnlineServices"],
							},
							"settingsSync.ignoredExtensions": {
								type: "array",
								markdownDescription: (0, w.localize)(2461, null),
								items: [
									{
										type: "string",
										pattern: C.$rp,
										errorMessage: (0, w.localize)(2462, null),
									},
								],
								default: [],
								scope: E.ConfigurationScope.APPLICATION,
								uniqueItems: !0,
								disallowSyncIgnore: !0,
								tags: ["sync", "usesOnlineServices"],
							},
							"settingsSync.ignoredSettings": {
								type: "array",
								description: (0, w.localize)(2463, null),
								default: [],
								scope: E.ConfigurationScope.APPLICATION,
								$ref: P,
								additionalProperties: !0,
								uniqueItems: !0,
								disallowSyncIgnore: !0,
								tags: ["sync", "usesOnlineServices"],
							},
						},
					});
					const L = r.$Io.as(m.$Jo.JSONContribution),
						D = () => {
							const M = u(),
								N = a(),
								A = Object.keys(E.$Oo.properties).filter((B) => !N.includes(B)),
								R = N.filter((B) => !M.includes(B)),
								O = {
									items: {
										type: "string",
										enum: [...A, ...R.map((B) => `-${B}`)],
									},
								};
							L.registerSchema(P, O);
						};
					return k.onDidUpdateConfiguration(() => D());
				}
				function g(P) {
					return (
						P && (0, i.$ng)(P) && (0, i.$lg)(P.id) && Array.isArray(P.scopes)
					);
				}
				var p;
				(function (P) {
					(P.Settings = "settings"),
						(P.Keybindings = "keybindings"),
						(P.Snippets = "snippets"),
						(P.Tasks = "tasks"),
						(P.Extensions = "extensions"),
						(P.GlobalState = "globalState"),
						(P.Profiles = "profiles"),
						(P.WorkspaceState = "workspaceState");
				})(p || (e.SyncResource = p = {})),
					(e.$PRb = [
						p.Settings,
						p.Keybindings,
						p.Snippets,
						p.Tasks,
						p.Extensions,
						p.GlobalState,
						p.Profiles,
					]);
				function o(P, ...k) {
					return P ? [P, ...k] : k;
				}
				function f(P, k, L, D) {
					return D.joinPath(
						L.userDataSyncHome,
						...o(P, k, `lastSync${k}.json`),
					);
				}
				(e.$SRb = (0, d.$Mi)("IUserDataSyncStoreManagementService")),
					(e.$TRb = (0, d.$Mi)("IUserDataSyncStoreService")),
					(e.$URb = (0, d.$Mi)("IUserDataSyncLocalStoreService")),
					(e.$VRb = "x-operation-id"),
					(e.$WRb = "X-Execution-Id");
				function b(P) {
					const k = {};
					return (k[e.$WRb] = P), k;
				}
				var s;
				(function (P) {
					(P.Unauthorized = "Unauthorized"),
						(P.Forbidden = "Forbidden"),
						(P.NotFound = "NotFound"),
						(P.MethodNotFound = "MethodNotFound"),
						(P.Conflict = "Conflict"),
						(P.Gone = "Gone"),
						(P.PreconditionFailed = "PreconditionFailed"),
						(P.TooLarge = "TooLarge"),
						(P.UpgradeRequired = "UpgradeRequired"),
						(P.PreconditionRequired = "PreconditionRequired"),
						(P.TooManyRequests = "RemoteTooManyRequests"),
						(P.TooManyRequestsAndRetryAfter = "TooManyRequestsAndRetryAfter"),
						(P.RequestFailed = "RequestFailed"),
						(P.RequestCanceled = "RequestCanceled"),
						(P.RequestTimeout = "RequestTimeout"),
						(P.RequestProtocolNotSupported = "RequestProtocolNotSupported"),
						(P.RequestPathNotEscaped = "RequestPathNotEscaped"),
						(P.RequestHeadersNotObject = "RequestHeadersNotObject"),
						(P.NoCollection = "NoCollection"),
						(P.NoRef = "NoRef"),
						(P.EmptyResponse = "EmptyResponse"),
						(P.TurnedOff = "TurnedOff"),
						(P.SessionExpired = "SessionExpired"),
						(P.ServiceChanged = "ServiceChanged"),
						(P.DefaultServiceChanged = "DefaultServiceChanged"),
						(P.LocalTooManyProfiles = "LocalTooManyProfiles"),
						(P.LocalTooManyRequests = "LocalTooManyRequests"),
						(P.LocalPreconditionFailed = "LocalPreconditionFailed"),
						(P.LocalInvalidContent = "LocalInvalidContent"),
						(P.LocalError = "LocalError"),
						(P.IncompatibleLocalContent = "IncompatibleLocalContent"),
						(P.IncompatibleRemoteContent = "IncompatibleRemoteContent"),
						(P.Unknown = "Unknown");
				})(s || (e.UserDataSyncErrorCode = s = {}));
				class l extends Error {
					constructor(k, L, D, M) {
						super(k),
							(this.code = L),
							(this.resource = D),
							(this.operationId = M),
							(this.name = `${this.code} (UserDataSyncError) syncResource:${this.resource || "unknown"} operationId:${this.operationId || "unknown"}`);
					}
				}
				e.$YRb = l;
				class y extends l {
					constructor(k, L, D, M, N) {
						super(k, D, void 0, N), (this.url = L), (this.serverCode = M);
					}
				}
				e.$ZRb = y;
				class $ extends l {
					constructor(k, L) {
						super(k, L);
					}
				}
				(e.$1Rb = $),
					(function (P) {
						function k(L) {
							if (L instanceof P) return L;
							const D =
								/^(.+) \(UserDataSyncError\) syncResource:(.+) operationId:(.+)$/.exec(
									L.name,
								);
							if (D && D[1]) {
								const M = D[2] === "unknown" ? void 0 : D[2],
									N = D[3] === "unknown" ? void 0 : D[3];
								return new P(L.message, D[1], M, N);
							}
							return new P(L.message, s.Unknown);
						}
						P.toUserDataSyncError = k;
					})(l || (e.$YRb = l = {}));
				var v;
				(function (P) {
					(P.Uninitialized = "uninitialized"),
						(P.Idle = "idle"),
						(P.Syncing = "syncing"),
						(P.HasConflicts = "hasConflicts");
				})(v || (e.SyncStatus = v = {}));
				var S;
				(function (P) {
					(P[(P.None = 0)] = "None"),
						(P[(P.Added = 1)] = "Added"),
						(P[(P.Modified = 2)] = "Modified"),
						(P[(P.Deleted = 3)] = "Deleted");
				})(S || (e.Change = S = {}));
				var I;
				(function (P) {
					(P.Preview = "preview"),
						(P.Conflict = "conflict"),
						(P.Accepted = "accepted");
				})(I || (e.MergeState = I = {})),
					(e.$2Rb = "sync.store.url.type");
				function T(P) {
					return `sync.enable.${P}`;
				}
				(e.$4Rb = (0, d.$Mi)("IUserDataSyncEnablementService")),
					(e.$5Rb = (0, d.$Mi)("IUserDataSyncService")),
					(e.$6Rb = (0, d.$Mi)("IUserDataSyncResourceProviderService")),
					(e.$7Rb = (0, d.$Mi)("IUserDataAutoSyncService")),
					(e.$8Rb = (0, d.$Mi)("IUserDataSyncUtilService")),
					(e.$9Rb = (0, d.$Mi)("IUserDataSyncLogService")),
					(e.$0Rb = "userDataSync"),
					(e.$$Rb = "vscode-userdata-sync"),
					(e.$_Rb = "preview");
			},
		),
		