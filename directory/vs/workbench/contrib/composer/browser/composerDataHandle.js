import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/aiAssert/browser/aiAssertService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './composerDataCreation.js';
import '../../../../base/common/uri.js';
define(
			de[3617],
			he([1, 0, 3, 668, 21, 45, 1318, 9]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createComposerDataHandleManager = m);
				function m(h, c, n) {
					return h.createInstance(r, c, n);
				}
				let r = class extends t.$1c {
					constructor(c, n, g, p, o) {
						super(),
							(this.composerWasLoadedHook = c),
							(this.onInlineDiffsLoadedHook = n),
							(this.storageService = g),
							(this.aiAssertService = p),
							(this.reactiveStorageService = o),
							(this.loadedComposers = []),
							this.D(
								this.storageService.cursorDiskKVOnShouldSave(async () => {
									await Promise.allSettled([
										this.persistInlineDiffs(),
										...this.loadedComposers.map((f) =>
											this.persistLoadedComposer(f),
										),
									]);
								}),
							),
							this.loadInlineDiffs().catch((f) => {
								console.error("[composer] Error loading inline diffs:", f);
							});
					}
					async loadInlineDiffs() {
						try {
							const c = await this.storageService.cursorDiskKVGet(
								C.INLINE_DIFF_STORAGE_KEY,
							);
							if (c) {
								const n = JSON.parse(c).map((g) => ({
									composerId: g.composerId,
									version: g.version,
									uri: d.URI.revive(g.uri),
								}));
								await this.onInlineDiffsLoadedHook(n);
							}
						} catch (c) {
							console.error(
								"[composer] Error loading inline diffs from storage:",
								c,
							);
						}
					}
					async persistLoadedComposer(c) {
						await this.storageService.cursorDiskKVSet(
							this.getComposerDataStorageKey(c.data.composerId),
							(0, C.serializeComposerDataToString)(c.data),
						);
					}
					async persistInlineDiffs() {
						const n =
							this.reactiveStorageService.nonPersistentStorage.inlineDiffs
								.filter((g) => !!g.composerMetadata)
								.map((g) => ({
									composerId: g.composerMetadata?.composerId,
									version: g.composerMetadata?.version,
									uri: g.uri,
								}));
						await this.storageService.cursorDiskKVSet(
							C.INLINE_DIFF_STORAGE_KEY,
							JSON.stringify(n),
						);
					}
					getWeakHandleOptimistic(c) {
						const n = this.loadedComposers.find((g) => g.data.composerId === c);
						if (n)
							return new u(
								n.data.composerId,
								this,
								this.reactiveStorageService,
								!0,
							);
					}
					pushComposer(c) {
						const n = new a(c);
						this.loadedComposers.push(n);
						const g = new u(
							n.data.composerId,
							this,
							this.reactiveStorageService,
						);
						return (
							this.composerWasLoadedHook(
								new u(n.data.composerId, this, this.reactiveStorageService, !0),
							).catch((p) => {
								console.error("[composer] Error loading composer data:", p);
							}),
							this.aiAssertService.assert(
								this.loadedComposers.length < 20,
								"More than 20 loaded composers!",
								{ showOnlyOnce: !0 },
							),
							g
						);
					}
					deleteComposer(c) {
						const n = this.loadedComposers.find((g) => g.data.composerId === c);
						n &&
							(this.unloadComposer(n),
							this.storageService
								.cursorDiskKVSet(this.getComposerDataStorageKey(c), void 0)
								.then(() => {})
								.catch((g) => {
									console.error(
										"[composer] Error deleting composer data from disk:",
										g,
									);
								}));
					}
					unloadComposer(c) {
						(this.loadedComposers = this.loadedComposers.filter(
							(n) => n !== c,
						)),
							(0, C.disposeComposerData)(c.data);
					}
					async getHandle(c, n) {
						const g = this.loadedComposers.find((o) => o.data.composerId === c);
						if (g)
							return new u(
								g.data.composerId,
								this,
								this.reactiveStorageService,
							);
						let p = n ? Date.now() + n : Date.now() - 10;
						do {
							try {
								const o = await this.storageService.cursorDiskKVGet(
										this.getComposerDataStorageKey(c),
									),
									f = this.loadedComposers.find((b) => b.data.composerId === c);
								if (f)
									return new u(
										f.data.composerId,
										this,
										this.reactiveStorageService,
									);
								if (o) {
									const b = (0, C.deserializeComposerDataFromString)(o);
									return this.pushComposer(b);
								}
							} catch (o) {
								console.error("[composer] Error loading composer data:", o);
							}
							await new Promise((o) =>
								setTimeout(o, Math.min(100, (n ?? 400) / 4)),
							);
						} while (Date.now() < p);
					}
					getComposerDataStorageKey(c) {
						return (0, C.COMPOSER_DATA_STORAGE_KEY)(c);
					}
					maybeRemoveLoadedComposer(c) {
						c.numHandles === 0 &&
							this.persistLoadedComposer(c)
								.then(() => {
									c.numHandles === 0 && this.unloadComposer(c);
								})
								.catch((n) => {
									console.error(
										"[composer] Error persisting loaded composer data:",
										n,
									);
								});
					}
					addHandle(c, n) {
						const g = this.loadedComposers.find((p) => p.data.composerId === n);
						g && g.addHandle(c);
					}
					removeHandle(c, n) {
						const g = this.loadedComposers.find((p) => p.data.composerId === n);
						g && (g.removeHandle(c), this.maybeRemoveLoadedComposer(g));
					}
					getLoadedComposer(c) {
						return this.loadedComposers.find((n) => n.data.composerId === c);
					}
					getLoadedComposers() {
						return this.loadedComposers.map((c) => c.data.composerId);
					}
				};
				r = Ne([j(2, w.$lq), j(3, i.$kcc), j(4, E.$0zb)], r);
				class u extends t.$1c {
					constructor(c, n, g, p = !1) {
						super(),
							(this.composerId = c),
							(this.composerDataHandleService = n),
							(this.reactiveStorageService = g),
							(this.isWeak = p),
							(this.setData = (...o) => {
								if (this.isDisposed)
									throw new Error(
										"[composer] Composer data handle is disposed",
									);
								const f = this.composerDataHandleService.getLoadedComposer(
									this.composerId,
								);
								if (!f) throw new Error("[composer] No loaded composer found");
								return f.setData(...o);
							}),
							(this.isDisposed = !1),
							p ||
								this.composerDataHandleService.addHandle(this, this.composerId);
					}
					clone() {
						return new u(
							this.composerId,
							this.composerDataHandleService,
							this.reactiveStorageService,
							this.isWeak,
						);
					}
					cloneWeak() {
						return new u(
							this.composerId,
							this.composerDataHandleService,
							this.reactiveStorageService,
							!0,
						);
					}
					get data() {
						if (this.isDisposed)
							throw new Error("[composer] Composer data handle is disposed");
						const c = this.composerDataHandleService.getLoadedComposer(
							this.composerId,
						);
						if (!c) throw new Error("[composer] No loaded composer found");
						return c.data;
					}
					dispose() {
						this.isDisposed ||
							((this.isDisposed = !0),
							super.dispose(),
							this.composerDataHandleService.removeHandle(
								this,
								this.composerId,
							));
					}
				}
				class a {
					addHandle(c) {
						this.handles.push(c);
					}
					removeHandle(c) {
						this.handles = this.handles.filter((n) => n !== c);
					}
					get numHandles() {
						return this.handles.length;
					}
					constructor(c) {
						(this.handles = []),
							([this.data, this.setData] = (0, C.getStore)(c));
					}
				}
			},
		),
		