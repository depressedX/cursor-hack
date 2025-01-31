import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/instantiation/common/extensions.js';
import './bugbotDataCreation.js';
import './constants.js';
import '../../../../base/common/constants.js';
import '../../../../../external/solid/store.js';
define(
			de[977],
			he([1, 0, 3, 5, 21, 25, 45, 20, 3004, 789, 58, 193]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*instantiation*/,
 w /*storage*/,
 E /*workspace*/,
 C /*reactiveStorageService*/,
 d /*extensions*/,
 m /*bugbotDataCreation*/,
 r /*constants*/,
 u /*constants*/,
 a /*store*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$edc = e.$ddc = void 0),
					(e.$ddc = (0, i.$Mi)("bugbotDataService"));
				let h = class extends t.$1c {
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							([
								this.allBugBotsData,
								this.setAllBugBotsData,
								this.resetBugBots,
							] = (0, m.$cdc)(this.c, this.g, this.f, u.$EX)),
							this.D(
								this.c.onWillSaveState(() => {
									this.saveBugBots();
								}),
							);
					}
					getBugBotData(n) {
						return this.allBugBotsData.allBugBots.find((g) => g.bugbotId === n);
					}
					updateBugBotData(n, g) {
						this.setAllBugBotsData(
							"allBugBots",
							(p) => p.bugbotId === n,
							(p) => ({ ...p, ...g }),
						);
					}
					trimFileInPlace(n, g, p, o) {
						if (g[p] === void 0) return;
						const b = new Set(),
							s = n.bugReports?.bugReports ?? [];
						for (const y of s)
							for (const $ of y.locations)
								if ($.file === p) {
									const v = Math.max(0, $.startLine - 1 - 15),
										S = Math.min(o.length - 1, $.endLine - 1 + 15);
									for (let I = v; I <= S; I++) b.add(I);
								}
						if (b.size === 0) {
							g[p] = { type: "partial", lines: [] };
							return;
						}
						const l = Array.from(b).sort((y, $) => y - $);
						g[p] = {
							type: "partial",
							lines: l.map((y) => ({ number: y + 1, content: o[y] })),
						};
					}
					sanitizeLargeFilesInPlace(n, g) {
						if (g < 10)
							for (const p in n.fileSnapshots) {
								const o = n.fileSnapshots[p];
								o !== void 0 &&
									(Array.isArray(o)
										? o.length > 1e4 &&
											(this.trimFileInPlace(n, n.fileSnapshots, p, o),
											delete n.fileSnapshotsPreDiff[p])
										: delete n.fileSnapshotsPreDiff[p]);
							}
						else {
							for (const p in n.fileSnapshots) {
								const o = n.fileSnapshots[p];
								o !== void 0 &&
									Array.isArray(o) &&
									this.trimFileInPlace(n, n.fileSnapshots, p, o);
							}
							n.fileSnapshotsPreDiff = {};
						}
					}
					saveBugBots() {
						let n = this.allBugBotsData.allBugBots
							.filter((o) => o.status.type === "completed")
							.map((o) => (0, a.unwrap)(o));
						n.length > 150 && (n = n.slice(0, 100)),
							n.forEach((o, f) => {
								this.sanitizeLargeFilesInPlace(o, f);
							});
						const g = { allBugBots: n, bugbotDataVersion: r.$9cc },
							p = JSON.stringify(g);
						this.c.store(
							u.$EX,
							p,
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
					}
					deleteBugBot(n) {
						const g = this.getBugBotData(n);
						g?.status.type === "generating" &&
							g?.abortController &&
							g.abortController.abort(),
							this.setAllBugBotsData("allBugBots", (p) =>
								p.filter((o) => o.bugbotId !== n),
							),
							this.saveBugBots();
					}
					deleteAllBugBots() {
						this.allBugBotsData.allBugBots.forEach((g) => {
							this.deleteBugBot(g.bugbotId);
						});
					}
				};
				(e.$edc = h),
					(e.$edc = h = Ne([j(0, w.$lq), j(1, E.$Vi), j(2, C.$0zb)], h)),
					(0, d.$lK)(e.$ddc, h, d.InstantiationType.Eager);
			},
		)
