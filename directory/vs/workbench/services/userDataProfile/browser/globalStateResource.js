import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/userDataProfile/common/userDataProfileStorageService.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../common/views.js';
define(
			de[3890],
			he([1, 0, 4, 5, 34, 21, 68, 129, 681, 247, 60]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jxc = e.$ixc = e.$hxc = e.$gxc = e.$fxc = void 0);
				let a = class {
					constructor(o) {
						this.a = o;
					}
					async initialize(o) {
						const f = JSON.parse(o),
							b = Object.keys(f.storage);
						if (b.length) {
							const s = [];
							for (const l of b)
								s.push({
									key: l,
									value: f.storage[l],
									scope: E.StorageScope.PROFILE,
									target: E.StorageTarget.USER,
								});
							this.a.storeAll(s, !0);
						}
					}
				};
				(e.$fxc = a), (e.$fxc = a = Ne([j(0, E.$lq)], a));
				let h = class {
					constructor(o, f, b) {
						(this.a = o), (this.b = f), (this.c = b);
					}
					async getContent(o) {
						const f = await this.getGlobalState(o);
						return JSON.stringify(f);
					}
					async apply(o, f) {
						const b = JSON.parse(o);
						await this.d(b, f);
					}
					async getGlobalState(o) {
						const f = {},
							b = await this.b.readStorageData(o);
						for (const [s, l] of b)
							l.value !== void 0 &&
								l.target === E.StorageTarget.USER &&
								(f[s] = l.value);
						return { storage: f };
					}
					async d(o, f) {
						const b = Object.keys(o.storage);
						if (b.length) {
							const s = new Map(),
								l = [
									...this.a.keys(
										E.StorageScope.APPLICATION,
										E.StorageTarget.MACHINE,
									),
									...this.a.keys(
										E.StorageScope.WORKSPACE,
										E.StorageTarget.USER,
									),
									...this.a.keys(
										E.StorageScope.WORKSPACE,
										E.StorageTarget.MACHINE,
									),
								];
							for (const y of b)
								l.includes(y)
									? this.c.info(
											`Importing Profile (${f.name}): Ignoring global state key '${y}' because it is not a profile key.`,
										)
									: s.set(y, o.storage[y]);
							await this.b.updateStorageData(f, s, E.StorageTarget.USER);
						}
					}
				};
				(e.$gxc = h),
					(e.$gxc = h = Ne([j(0, E.$lq), j(1, m.$0wc), j(2, w.$ik)], h));
				class c {
					constructor(o, f) {
						(this.a = o),
							(this.b = f),
							(this.type = d.ProfileResourceType.GlobalState),
							(this.handle = d.ProfileResourceType.GlobalState),
							(this.label = { label: (0, t.localize)(12907, null) }),
							(this.collapsibleState = u.TreeItemCollapsibleState.Collapsed);
					}
					async getChildren() {
						return [
							{
								handle: this.a.toString(),
								resourceUri: this.a,
								collapsibleState: u.TreeItemCollapsibleState.None,
								accessibilityInformation: {
									label: this.b.extUri.basename(this.a),
								},
								parent: this,
								command: {
									id: r.$zWb,
									title: "",
									arguments: [this.a, void 0, void 0],
								},
							},
						];
					}
				}
				e.$hxc = c;
				let n = class extends c {
					constructor(o, f, b, s) {
						super(f, b), (this.c = o), (this.d = s);
					}
					async hasContent() {
						const o = await this.d.createInstance(h).getGlobalState(this.c);
						return Object.keys(o.storage).length > 0;
					}
					async getContent() {
						return this.d.createInstance(h).getContent(this.c);
					}
					isFromDefaultProfile() {
						return !this.c.isDefault && !!this.c.useDefaultFlags?.globalState;
					}
				};
				(e.$ixc = n), (e.$ixc = n = Ne([j(2, C.$Vl), j(3, i.$Li)], n));
				let g = class extends c {
					constructor(o, f, b) {
						super(f, b), (this.c = o);
					}
					async getContent() {
						return this.c;
					}
					isFromDefaultProfile() {
						return !1;
					}
				};
				(e.$jxc = g), (e.$jxc = g = Ne([j(2, C.$Vl)], g));
			},
		),
		