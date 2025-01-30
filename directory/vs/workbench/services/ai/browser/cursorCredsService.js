import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/event.js';
import '../../statusbar/browser/statusbar.js';
import '../../../../base/common/lifecycle.js';
define(
			de[477],
			he([1, 0, 20, 5, 27, 11, 43, 45, 6, 166, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*keyCodes*/,
 E /*actions*/,
 C /*keybindingsRegistry*/,
 d /*reactiveStorageService*/,
 m /*event*/,
 r /*statusbar*/,
 u /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l6b = e.$k6b = e.$j6b = e.$i6b = void 0),
					(e.$i6b = (0, i.$Mi)("cursorCredsService"));
				const a = "https://staging.cursor.sh",
					h = "https://dev-staging.cursor.sh",
					c = "https://dev-staging.cursor.sh",
					n = "OzaBXLClY5CAGxNzUhQ2vlknpi07tGuE",
					g = "dev.authentication.cursor.sh";
				(e.$j6b = "https://localhost:"), (e.$k6b = 8e3);
				const p = "http://localhost:4000";
				e.$l6b = 5;
				const o = {
					PROD: "Prod",
					STAGING: "Staging",
					DEV_STAGING: "DevStaging(w/local-website)`",
					STAGING_LOCAL_WEBSITE: "Staging(w/local-website)",
					LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "DefaultLocal(no cpp/embeddings)",
					STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS:
						"StagingLocal(cpp/embeddings on Staging)",
					LOCAL_EXCEPT_CPP: "Local(except cpp)",
					FULL_LOCAL: "FullLocal",
					LOCAL_EXCEPT_EMBEDDINGS: "Local(except embeddings)",
				};
				let f = class extends u.$1c {
					constructor(v, S) {
						super(),
							(this.c = v),
							(this.f = S),
							(this.a = new m.$re()),
							(this.onDidRequestRelogin = this.a.event),
							(this.b = d.$eAb),
							(this.namingMap = {
								[o.PROD]: () => this.switchToProdServer,
								[o.LOCAL_EXCEPT_CPP]: () => this.switchToLocalExceptCppServer,
								[o.FULL_LOCAL]: () => this.switchToFullLocalServer,
								[o.STAGING]: () => this.switchToStagingServer,
								[o.DEV_STAGING]: () => this.switchToDevStagingServer,
								[o.STAGING_LOCAL_WEBSITE]: () =>
									this.switchToStagingServerLocalWebsite,
								[o.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: () =>
									this.switchToLocalExceptCppAndEmbeddingsServer,
								[o.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: () =>
									this.switchToLocalExceptCppAndEmbeddingsServerStagingProd,
								[o.LOCAL_EXCEPT_EMBEDDINGS]: () =>
									this.switchToLocalExceptEmbeddingsServer,
							}),
							this.switchToProdServer(),
							this.h();
					}
					h() {}
					getAuth0ClientId() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.authClientId;
					}
					reloginIfNeeded(v) {
						const S = this.getAuth0ClientId();
						v !== S && this.a.fire();
					}
					hallucinatedFunctionsDebugUrl() {
						return this.c.workspaceUserPersistentStorage
							.hallucinatedFunctionsWorkspaceState
							?.hallucinatedFunctionsLocalBackend === !0
							? e.$j6b + this.localBackendPort()
							: d.$hAb;
					}
					localBackendPort() {
						return (
							this.c.applicationUserPersistentStorage.localBackendPort || e.$k6b
						);
					}
					switchToProdServer() {
						const v = this.getAuth0ClientId();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: d.$bAb,
							backendUrl: d.$cAb,
							authClientId: d.$jAb,
							authDomain: d.$kAb,
							repoBackendUrl: d.$iAb,
							telemBackendUrl: d.$dAb,
							geoCppBackendUrl: this.b,
							cppConfigBackendUrl: d.$fAb,
							cmdkBackendUrl: d.$gAb,
							hfUrl: d.$hAb,
							credentialsDisplayName: o.PROD,
						}),
							this.reloginIfNeeded(v),
							this.h();
					}
					switchToLocalExceptCppServer() {
						const v = this.localBackendPort();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: e.$j6b + v,
							telemBackendUrl: d.$dAb,
							geoCppBackendUrl: this.b,
							cppConfigBackendUrl: d.$fAb,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.LOCAL_EXCEPT_CPP,
						}),
							this.h();
					}
					switchToFullLocalServer() {
						const v = this.localBackendPort();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: e.$j6b + v,
							telemBackendUrl: e.$j6b + v,
							geoCppBackendUrl: e.$j6b + v,
							cppConfigBackendUrl: e.$j6b + v,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.FULL_LOCAL,
						}),
							this.h();
					}
					switchToLocalExceptCppAndEmbeddingsServerStagingProd() {
						const v = this.localBackendPort();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: h,
							telemBackendUrl: a,
							geoCppBackendUrl: a,
							cppConfigBackendUrl: a,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
						}),
							this.h();
					}
					switchToLocalExceptCppAndEmbeddingsServer() {
						const v = this.localBackendPort();
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: h,
							telemBackendUrl: d.$dAb,
							geoCppBackendUrl: this.b,
							cppConfigBackendUrl: d.$fAb,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
						}),
							this.h();
					}
					switchToStagingServer() {
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: d.$bAb,
							backendUrl: a,
							authClientId: d.$jAb,
							authDomain: d.$kAb,
							repoBackendUrl: a,
							telemBackendUrl: a,
							geoCppBackendUrl: a,
							cppConfigBackendUrl: a,
							cmdkBackendUrl: a,
							hfUrl: a,
							credentialsDisplayName: o.STAGING,
						}),
							this.h();
					}
					switchToDevStagingServer() {
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: c,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: c,
							telemBackendUrl: c,
							geoCppBackendUrl: c,
							cppConfigBackendUrl: c,
							cmdkBackendUrl: c,
							hfUrl: c,
							credentialsDisplayName: o.DEV_STAGING,
						});
					}
					switchToStagingServerLocalWebsite() {
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: a,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: a,
							telemBackendUrl: a,
							geoCppBackendUrl: a,
							cppConfigBackendUrl: a,
							cmdkBackendUrl: a,
							hfUrl: a,
							credentialsDisplayName: o.STAGING_LOCAL_WEBSITE,
						}),
							this.h();
					}
					switchToLocalExceptEmbeddingsServer() {
						const v =
							this.c.applicationUserPersistentStorage.localBackendPort ||
							e.$k6b;
						this.c.setApplicationUserPersistentStorage("cursorCreds", {
							websiteUrl: p,
							backendUrl: e.$j6b + v,
							authClientId: n,
							authDomain: g,
							repoBackendUrl: h,
							telemBackendUrl: d.$dAb,
							geoCppBackendUrl: e.$j6b + v,
							cppConfigBackendUrl: e.$j6b + v,
							cmdkBackendUrl: e.$j6b + v,
							hfUrl: this.hallucinatedFunctionsDebugUrl(),
							credentialsDisplayName: o.LOCAL_EXCEPT_EMBEDDINGS,
						}),
							this.h();
					}
					getCredentials() {
						return this.c.applicationUserPersistentStorage.cursorCreds;
					}
					getLoginUrl() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/loginDeepControl`;
					}
					getLogoutUrl() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/api/auth/logout`;
					}
					getSettingsUrl() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/settings`;
					}
					getCheckoutUrl() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.websiteUrl}/pricing`;
					}
					getPollingEndpoint() {
						return `${this.c.applicationUserPersistentStorage.cursorCreds.backendUrl}/auth/poll`;
					}
					getBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.backendUrl;
					}
					getRepoBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.repoBackendUrl;
					}
					getTelemBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.telemBackendUrl;
					}
					getGeoCppBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.geoCppBackendUrl;
					}
					getCppConfigBackendUrl() {
						return this.c.applicationUserPersistentStorage.cursorCreds
							.cppConfigBackendUrl;
					}
					setGeoCppBackendUrl(v) {
						(v === "" || !v.includes("cursor.sh")) && (v = d.$eAb),
							(this.b = v),
							this.c.setApplicationUserPersistentStorage("cursorCreds", (S) =>
								S.credentialsDisplayName !== o.LOCAL_EXCEPT_EMBEDDINGS &&
								S.credentialsDisplayName !== o.FULL_LOCAL
									? { ...S, geoCppBackendUrl: v }
									: S,
							);
					}
				};
				(f = Ne([j(0, d.$0zb), j(1, r.$d6b)], f)),
					(0, t.$lK)(e.$i6b, f, t.InstantiationType.Delayed);
				var b;
				(function ($) {
					($.Prod = "prod"),
						($.Staging = "staging"),
						($.DevStaging = "devStagingEverything"),
						($.StagingLocalWebsite = "stagingLocalWebsite"),
						($.LocalExceptCppAndEmbeddings = "local"),
						($.LocalExceptCppAndEmbeddingsStaging = "localStaging"),
						($.LocalExceptCPP = "fullLocal"),
						($.LocalExceptEmbeddings = "localExceptEmbeddings"),
						($.FullLocal = "fullLocalincludingcpp");
				})(b || (b = {}));
				const s = {
					[b.Prod]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit1,
					[b.Staging]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit2,
					[b.StagingLocalWebsite]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit3,
					[b.LocalExceptCppAndEmbeddings]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit4,
					[b.LocalExceptCPP]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit5,
					[b.FullLocal]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit6,
					[b.LocalExceptEmbeddings]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit7,
					[b.DevStaging]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit8,
					[b.LocalExceptCppAndEmbeddingsStaging]:
						w.KeyMod.WinCtrl | w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.Digit9,
				};
				function l($, v, ...S) {
					const I = v.get(e.$i6b),
						T = I.getAuth0ClientId();
					switch ($) {
						case b.Prod:
							I.switchToProdServer();
							break;
						case b.Staging:
							I.switchToStagingServer();
							break;
						case b.StagingLocalWebsite:
							I.switchToStagingServerLocalWebsite();
							break;
						case b.LocalExceptCppAndEmbeddings:
							I.switchToLocalExceptCppAndEmbeddingsServer();
							break;
						case b.LocalExceptCPP:
							I.switchToLocalExceptCppServer();
							break;
						case b.FullLocal:
							I.switchToFullLocalServer();
							break;
						case b.LocalExceptEmbeddings:
							I.switchToLocalExceptEmbeddingsServer();
							break;
						case b.DevStaging:
							I.switchToDevStagingServer();
							break;
						case b.LocalExceptCppAndEmbeddingsStaging:
							I.switchToLocalExceptCppAndEmbeddingsServerStagingProd();
							break;
						default: {
							const P = $;
							throw new Error(`Invalid backend: ${P}`);
						}
					}
					I.reloginIfNeeded(T);
				}
				function y() {
					return Object.values(b).map(
						($) =>
							class extends E.$3X {
								constructor() {
									super({
										id: `debug.switchTo${$}Backend`,
										title: {
											value: `Switch to ${$} Backend`,
											original: `Switch to ${$} Backend`,
										},
										f1: !0,
										keybinding: {
											primary: s[$],
											weight: C.KeybindingWeight.WorkbenchContrib,
										},
									});
								}
								run(v, ...S) {
									l($, v, ...S);
								}
							},
					);
				}
			},
		),
		