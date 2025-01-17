import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/review_pb.js';
import '../../../../../proto/aiserver/v1/server_config_connectweb.js';
import '../../../../../proto/aiserver/v1/server_config_pb.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../platform/storage/common/storage.js';
import '../../bugbot/browser/constants.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/ai/browser/backendClient.js';
define(
			de[1009],
			he([1, 0, 736, 1489, 1488, 6, 3, 11, 20, 5, 45, 134, 21, 789, 137, 285]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gdc = e.$fdc = void 0),
					(e.$fdc = (0, r.$Mi)("aiServerConfigService"));
				const p = new w.$0ab({
						maxConcurrentUploads: 50,
						absoluteMaxNumberFiles: 1e5,
						maxFileRetries: 20,
						syncConcurrency: 20,
						autoIndexingMaxNumFiles: 1e4,
					}),
					o = new t.$Qab({
						enabled: !1,
						debounceTriggersMs: 1e3,
						waitBetweenTriggersMs: 1e4,
						preventTriggeringWhenLints: !0,
					}),
					f = new w.$abb({
						indexingConfig: p,
						bugConfigResponse: new t.$Oab({ bugBotV1: c.$7cc }),
					}),
					b = "cursorai/serverConfig";
				let s = class extends C.$1c {
					constructor(y, $, v, S) {
						super(),
							(this.c = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.a = this.D(new E.$re())),
							(this.onDidRefreshServerConfig = this.a.event),
							(this.cachedServerConfig = f),
							(this.lastRefreshedServerConfig = new Date(0)),
							(this.b = this.f.createInstance(g.$q6b, { service: i.$bbb })),
							this.q().catch(console.error),
							this.j().catch(console.error),
							this.D(
								this.onDidRefreshServerConfig(async () => {
									this.h.store(
										b,
										this.cachedServerConfig.toJsonString(),
										h.StorageScope.APPLICATION,
										h.StorageTarget.MACHINE,
									);
								}),
							);
					}
					async j() {
						(this.lastRefreshedServerConfig = new Date(
							Date.now() - 5 * 60 * 1e3 + 1e4,
						)),
							this.m();
					}
					m() {
						setTimeout(
							() => {
								this.lastRefreshedServerConfig.getTime() + 5 * 60 * 1e3 <
									Date.now() &&
									((this.lastRefreshedServerConfig = new Date()),
									this.forceRefreshServerConfig().catch(console.error)),
									this.m();
							},
							Math.min(
								30 * 1e3,
								5 * 60 * 1e3 -
									(Date.now() - this.lastRefreshedServerConfig.getTime()),
							),
						);
					}
					n(y) {
						const $ = y ?? this.cachedServerConfig ?? f;
						(this.cachedServerConfig = new w.$abb({
							...$,
							indexingConfig:
								$.indexingConfig ?? this.cachedServerConfig.indexingConfig ?? p,
							bugConfigResponse: new t.$Oab({
								...$.bugConfigResponse,
								linterStrategyV2:
									$.bugConfigResponse?.linterStrategyV2 ??
									this.cachedServerConfig.bugConfigResponse?.linterStrategyV2 ??
									o,
							}),
						})),
							this.a.fire();
					}
					async q() {
						try {
							const y = this.h.get(b, h.StorageScope.APPLICATION);
							y && this.n(w.$abb.fromJsonString(y));
						} catch (y) {
							console.error("Failed to refresh server config from disk:", y);
						}
					}
					async forceRefreshServerConfig() {
						this.lastRefreshedServerConfig = new Date();
						const y = await this.b.get(),
							$ = new AbortController(),
							v = setTimeout(() => $.abort(), 3e4);
						try {
							this.n(
								await y.getServerConfig(
									{
										telemEnabled: this.g.canWeTrackTelem(),
										bugBotDismissedNotificationLast10TimesUnixMs:
											this.c.applicationUserPersistentStorage.bugbotState
												.bugBotDismissedNotificationLast10Times,
										bugBotViewedNotificationLast10TimesUnixMs:
											this.c.applicationUserPersistentStorage.bugbotState
												.bugBotViewedNotificationLast10Times,
									},
									{ signal: $.signal },
								),
							);
						} catch (S) {
							console.error("Failed to refresh server config from server:", S);
						} finally {
							clearTimeout(v);
						}
					}
				};
				(e.$gdc = s),
					(e.$gdc = s =
						Ne([j(0, u.$0zb), j(1, r.$Li), j(2, n.$hfc), j(3, h.$lq)], s)),
					(0, m.$lK)(e.$fdc, s, m.InstantiationType.Delayed),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: a.ConfigServiceActions.GetCachedServerConfig,
									title: {
										original: "Get Cached Server Config",
										value: "Get Cached Server Config",
									},
									f1: !1,
								});
							}
							run(l) {
								return l.get(e.$fdc).cachedServerConfig;
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "aiServerConfigService.forceRefresh",
									title: {
										original: "Force Refresh Server Config",
										value: "Force Refresh Server Config",
									},
									f1: !0,
									category: "Developer",
								});
							}
							run(l, ...y) {
								l.get(e.$fdc).forceRefreshServerConfig().catch(console.error);
							}
						},
					);
			},
		),
		