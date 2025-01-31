import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../services/ai/browser/aiService.js';
define(
			de[287],
			he([1, 0, 3, 20, 5, 45, 118]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*extensions*/,
 w /*instantiation*/,
 E /*reactiveStorageService*/,
 C /*aiService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$I7b = e.$H7b = e.$G7b = void 0),
					(e.$G7b = "shouldComposerTakeOverCmdKGenerate"),
					(e.$H7b = (0, w.$Mi)("aiFeatureStatusService"));
				let d = class extends t.$1c {
					constructor(r, u) {
						super(),
							(this.a = r),
							(this.b = u),
							(this.lastPollTimeCache = new Map()),
							(this.shouldEnableCache = new Map()),
							(this.lastPollTimeCacheConfig = new Map()),
							(this.cachedConfigs = new Map());
					}
					async maybeRefreshFeatureStatus(r) {
						if (
							!(
								Date.now() - (this.lastPollTimeCache.get(r) ?? 0) <
								5 * 60 * 1e3
							)
						) {
							this.lastPollTimeCache.set(r, Date.now());
							try {
								const a = await (await this.b.aiClient()).checkFeatureStatus({
									featureName: r,
								});
								this.shouldEnableCache.set(r, a.enabled);
							} catch (u) {
								console.error(u);
							}
						}
					}
					getCachedFeatureStatus(r) {
						return this.shouldEnableCache.get(r);
					}
					async maybeRefreshConfig(r) {
						if (
							!(
								Date.now() - (this.lastPollTimeCacheConfig.get(r) ?? 0) <
								5 * 60 * 1e3
							)
						) {
							this.lastPollTimeCacheConfig.set(r, Date.now());
							try {
								const a = await (await this.b.aiClient()).checkNumberConfig({
									key: r,
								});
								this.cachedConfigs.set(r, a.value);
							} catch (u) {
								console.error(u);
							}
						}
					}
					getCachedConfig(r) {
						return this.cachedConfigs.get(r);
					}
				};
				(e.$I7b = d),
					(e.$I7b = d = Ne([j(0, E.$0zb), j(1, C.$Nfc)], d)),
					(0, i.$lK)(e.$H7b, d, i.InstantiationType.Delayed);
			},
		)
