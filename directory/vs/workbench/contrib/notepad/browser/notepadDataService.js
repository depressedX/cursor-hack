import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import './constants.js';
import './notepad.js';
import './notepadData.js';
define(
			de[3618],
			he([1, 0, 3, 20, 21, 25, 558, 467, 1870]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zAc = void 0);
				let r = class extends t.$1c {
					get notepadDataStorageID() {
						return C.$A9b;
					}
					constructor(a, h) {
						super(),
							(this.a = a),
							(this.b = h),
							([this.notepadsData, this.setNotepadsData] = (0, m.$v9b)(
								this.a,
								this.b,
								this.notepadDataStorageID,
							)),
							this.D(
								this.a.onWillSaveState(() => {
									this.saveNotepads();
								}),
							),
							(0, m.$w9b)(
								this.notepadsData,
								this.setNotepadsData,
								this.a,
								this.b,
							);
					}
					get selectedNotepad() {
						const a = this.selectedNotepadId;
						if (a) return this.getNotepadData(a);
					}
					get selectedNotepadId() {}
					updateSelectedNotepad(a) {
						this.selectedNotepadId &&
							this.updateNotepadData(this.selectedNotepadId, a);
					}
					get selectedTab() {
						const a = this.selectedNotepad;
						if (a && a.selectedTabId)
							return this.getTabData(a.id, a.selectedTabId);
					}
					get selectedTabId() {
						return this.selectedNotepad?.selectedTabId;
					}
					updateSelectedTab(a) {
						const h = this.selectedNotepad;
						h &&
							h.selectedTabId &&
							this.updateTabData(h.id, h.selectedTabId, a);
					}
					resetNotepads() {
						const a = (0, m.$u9b)();
						return this.setNotepadsData({ notepads: { [a.id]: a } }), a;
					}
					getNotepadData(a) {
						return this.notepadsData.notepads[a];
					}
					updateNotepadData(a, h) {
						this.setNotepadsData("notepads", a, (c) => ({ ...c, ...h }));
					}
					getTabData(a, h) {
						return this.getNotepadData(a)?.tabs.find((n) => n.tabId === h);
					}
					updateTabData(a, h, c) {
						this.setNotepadsData(
							"notepads",
							a,
							"tabs",
							(n) => n.tabId === h,
							(n) => ({ ...n, ...c }),
						);
					}
					getBubbleData(a, h, c) {
						return this.getTabData(a, h)?.bubbles.find((g) => g.id === c);
					}
					updateBubbleData(a, h, c, n) {
						this.setNotepadsData(
							"notepads",
							a,
							"tabs",
							(g) => g.tabId === h,
							"bubbles",
							(g) => g.id === c,
							(g) => ({ ...g, ...n }),
						);
					}
					saveNotepads() {
						const a = JSON.stringify({
							...this.notepadsData,
							notepadDataVersion: m.$q9b,
						});
						this.a.store(
							this.notepadDataStorageID,
							a,
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
					}
				};
				(e.$zAc = r),
					(e.$zAc = r = Ne([j(0, w.$lq), j(1, E.$Vi)], r)),
					(0, i.$lK)(d.$y9b, r, i.InstantiationType.Delayed);
			},
		),
		