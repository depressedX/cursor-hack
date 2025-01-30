import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/collections.js';
import '../../../base/common/event.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHost.protocol.js';
import './extHostRpcService.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
define(
			Pe[117],
			Ne([1, 0, 129, 4, 19, 2, 5, 6, 21, 17, 11]),
			function (we, t, e, r, S, N, P, I, l, n, p) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Fhd = t.$Ehd = void 0),
					(n = tt(n)),
					(t.$Ehd = (0, P.$Mi)("IExtHostEditorTabs"));
				class y {
					constructor(h, $, T) {
						(this.e = T), (this.d = $), this.acceptDtoUpdate(h);
					}
					get apiObject() {
						if (!this.a) {
							const h = this,
								$ = {
									get isActive() {
										return h.b.id === h.e();
									},
									get label() {
										return h.b.label;
									},
									get input() {
										return h.c;
									},
									get isDirty() {
										return h.b.isDirty;
									},
									get isPinned() {
										return h.b.isPinned;
									},
									get isPreview() {
										return h.b.isPreview;
									},
									get group() {
										return h.d.apiObject;
									},
								};
							this.a = Object.freeze($);
						}
						return this.a;
					}
					get tabId() {
						return this.b.id;
					}
					acceptDtoUpdate(h) {
						(this.b = h), (this.c = this.f());
					}
					f() {
						switch (this.b.input.kind) {
							case I.TabInputKind.TextInput:
								return new p.$bdb(N.URI.revive(this.b.input.uri));
							case I.TabInputKind.TextDiffInput:
								return new p.$cdb(
									N.URI.revive(this.b.input.original),
									N.URI.revive(this.b.input.modified),
								);
							case I.TabInputKind.TextMergeInput:
								return new p.$ddb(
									N.URI.revive(this.b.input.base),
									N.URI.revive(this.b.input.input1),
									N.URI.revive(this.b.input.input2),
									N.URI.revive(this.b.input.result),
								);
							case I.TabInputKind.CustomEditorInput:
								return new p.$edb(
									N.URI.revive(this.b.input.uri),
									this.b.input.viewType,
								);
							case I.TabInputKind.WebviewEditorInput:
								return new p.$fdb(this.b.input.viewType);
							case I.TabInputKind.NotebookInput:
								return new p.$gdb(
									N.URI.revive(this.b.input.uri),
									this.b.input.notebookType,
								);
							case I.TabInputKind.NotebookDiffInput:
								return new p.$hdb(
									N.URI.revive(this.b.input.original),
									N.URI.revive(this.b.input.modified),
									this.b.input.notebookType,
								);
							case I.TabInputKind.TerminalEditorInput:
								return new p.$idb();
							case I.TabInputKind.InteractiveEditorInput:
								return new p.$jdb(
									N.URI.revive(this.b.input.uri),
									N.URI.revive(this.b.input.inputBoxUri),
								);
							case I.TabInputKind.ChatEditorInput:
								return new p.$kdb();
							case I.TabInputKind.MultiDiffEditorInput:
								return new p.$ldb(
									this.b.input.diffEditors.map(
										(h) =>
											new p.$cdb(
												N.URI.revive(h.original),
												N.URI.revive(h.modified),
											),
									),
								);
							default:
								return;
						}
					}
				}
				class d {
					constructor(h, $) {
						(this.c = []), (this.d = ""), (this.b = h), (this.e = $);
						for (const T of h.tabs)
							T.isActive && (this.d = T.id),
								this.c.push(new y(T, this, () => this.activeTabId()));
					}
					get apiObject() {
						if (!this.a) {
							const h = this,
								$ = {
									get isActive() {
										return h.b.groupId === h.e();
									},
									get viewColumn() {
										return n.ViewColumn.to(h.b.viewColumn);
									},
									get activeTab() {
										return h.c.find((T) => T.tabId === h.d)?.apiObject;
									},
									get tabs() {
										return Object.freeze(h.c.map((T) => T.apiObject));
									},
								};
							this.a = Object.freeze($);
						}
						return this.a;
					}
					get groupId() {
						return this.b.groupId;
					}
					get tabs() {
						return this.c;
					}
					acceptGroupDtoUpdate(h) {
						this.b = h;
					}
					acceptTabOperation(h) {
						if (h.kind === I.TabModelOperationKind.TAB_OPEN) {
							const T = new y(h.tabDto, this, () => this.activeTabId());
							return (
								this.c.splice(h.index, 0, T),
								h.tabDto.isActive && (this.d = T.tabId),
								T
							);
						} else if (h.kind === I.TabModelOperationKind.TAB_CLOSE) {
							const T = this.c.splice(h.index, 1)[0];
							if (!T)
								throw new Error(
									`Tab close updated received for index ${h.index} which does not exist`,
								);
							return T.tabId === this.d && (this.d = ""), T;
						} else if (h.kind === I.TabModelOperationKind.TAB_MOVE) {
							if (h.oldIndex === void 0)
								throw new Error("Invalid old index on move IPC");
							const T = this.c.splice(h.oldIndex, 1)[0];
							if (!T)
								throw new Error(
									`Tab move updated received for index ${h.oldIndex} which does not exist`,
								);
							return this.c.splice(h.index, 0, T), T;
						}
						const $ = this.c.find((T) => T.tabId === h.tabDto.id);
						if (!$) throw new Error("INVALID tab");
						return (
							h.tabDto.isActive
								? (this.d = h.tabDto.id)
								: this.d === h.tabDto.id && !h.tabDto.isActive && (this.d = ""),
							$.acceptDtoUpdate(h.tabDto),
							$
						);
					}
					activeTabId() {
						return this.d;
					}
				}
				let k = class {
					constructor(h) {
						(this.b = new r.$re()),
							(this.c = new r.$re()),
							(this.e = []),
							(this.a = h.getProxy(I.$lbb.MainThreadEditorTabs));
					}
					get tabGroups() {
						if (!this.f) {
							const h = this,
								$ = {
									onDidChangeTabGroups: h.c.event,
									onDidChangeTabs: h.b.event,
									get all() {
										return Object.freeze(h.e.map((T) => T.apiObject));
									},
									get activeTabGroup() {
										const T = h.d;
										return (0, S.$wg)(
											h.e.find((u) => u.groupId === T)?.apiObject,
										);
									},
									close: async (T, a) => {
										const u = Array.isArray(T) ? T : [T];
										return u.length
											? g(u[0])
												? this.j(u, a)
												: this.i(u, a)
											: !0;
									},
								};
							this.f = Object.freeze($);
						}
						return this.f;
					}
					$acceptEditorTabModel(h) {
						const $ = new Set(this.e.map((w) => w.groupId)),
							T = new Set(h.map((w) => w.groupId)),
							a = (0, e.$f)($, T),
							u = this.e
								.filter((w) => a.removed.includes(w.groupId))
								.map((w) => w.apiObject),
							s = [],
							f = [];
						this.e = h.map((w) => {
							const m = new d(w, () => this.d);
							return (
								a.added.includes(m.groupId)
									? s.push(m.apiObject)
									: f.push(m.apiObject),
								m
							);
						});
						const o = (0, S.$wg)(h.find((w) => w.isActive === !0)?.groupId);
						o !== void 0 && this.d !== o && (this.d = o),
							this.c.fire(Object.freeze({ opened: s, closed: u, changed: f }));
					}
					$acceptTabGroupUpdate(h) {
						const $ = this.e.find((T) => T.groupId === h.groupId);
						if (!$)
							throw new Error(
								"Update Group IPC call received before group creation.",
							);
						$.acceptGroupDtoUpdate(h),
							h.isActive && (this.d = h.groupId),
							this.c.fire(
								Object.freeze({
									changed: [$.apiObject],
									opened: [],
									closed: [],
								}),
							);
					}
					$acceptTabOperation(h) {
						const $ = this.e.find((a) => a.groupId === h.groupId);
						if (!$)
							throw new Error(
								"Update Tabs IPC call received before group creation.",
							);
						const T = $.acceptTabOperation(h);
						switch (h.kind) {
							case I.TabModelOperationKind.TAB_OPEN:
								this.b.fire(
									Object.freeze({
										opened: [T.apiObject],
										closed: [],
										changed: [],
									}),
								);
								return;
							case I.TabModelOperationKind.TAB_CLOSE:
								this.b.fire(
									Object.freeze({
										opened: [],
										closed: [T.apiObject],
										changed: [],
									}),
								);
								return;
							case I.TabModelOperationKind.TAB_MOVE:
							case I.TabModelOperationKind.TAB_UPDATE:
								this.b.fire(
									Object.freeze({
										opened: [],
										closed: [],
										changed: [T.apiObject],
									}),
								);
								return;
						}
					}
					g(h) {
						for (const $ of this.e)
							for (const T of $.tabs) if (T.apiObject === h) return T;
					}
					h(h) {
						return this.e.find(($) => $.apiObject === h);
					}
					async i(h, $) {
						const T = [];
						for (const a of h) {
							const u = this.g(a);
							if (!u) throw new Error("Tab close: Invalid tab not found!");
							T.push(u.tabId);
						}
						return this.a.$closeTab(T, $);
					}
					async j(h, $) {
						const T = [];
						for (const a of h) {
							const u = this.h(a);
							if (!u) throw new Error("Group close: Invalid group not found!");
							T.push(u.groupId);
						}
						return this.a.$closeGroup(T, $);
					}
				};
				(t.$Fhd = k), (t.$Fhd = k = wt([rt(0, l.$08)], k));
				function g(c) {
					return c.tabs !== void 0;
				}
			},
		),
		