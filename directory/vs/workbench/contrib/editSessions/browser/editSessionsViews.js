import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/parts/views/treeView.js';
import '../../../common/views.js';
import '../common/editSessions.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/date.js';
import '../../../../base/common/codicons.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/resources.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/path.js';
define(
			de[4020],
			he([
				1, 0, 3, 4, 102, 5, 30, 854, 60, 685, 9, 275, 14, 247, 11, 8, 31, 57,
				25, 19, 22, 54,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*nls*/,
				w /*descriptors*/,
				E /*instantiation*/,
				C /*platform*/,
				d /*treeView*/,
				m /*views*/,
				r /*editSessions*/,
				u /*uri*/,
				a /*date*/,
				h /*codicons*/,
				c /*editorCommands*/,
				n /*actions*/,
				g /*contextkey*/,
				p /*commands*/,
				o /*dialogs*/,
				f /*workspace*/,
				b /*resources*/,
				s /*files*/,
				l /*path*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R1c = void 0);
				const y = "editSessionsCount",
					$ = new g.$5j(y, 0);
				let v = class extends t.$1c {
					constructor(T, P) {
						super(), (this.a = P), this.b(T);
					}
					b(T) {
						const P = r.$H1c,
							k = this.a.createInstance(d.$Stc, P, r.$I1c.value);
						(k.showCollapseAllAction = !0),
							(k.showRefreshAction = !0),
							(k.dataProvider = this.a.createInstance(S));
						const L = C.$Io.as(m.Extensions.ViewsRegistry);
						L.registerViews(
							[
								{
									id: P,
									name: r.$I1c,
									ctorDescriptor: new w.$Ji(d.$Ptc),
									canToggleVisibility: !0,
									canMoveView: !1,
									treeView: k,
									collapsed: !1,
									when: g.$Kj.and(r.$K1c),
									order: 100,
									hideByDefault: !0,
								},
							],
							T,
						),
							L.registerViewWelcomeContent(P, {
								content: (0, i.localize)(
									5977,
									null,
									`[${(0, i.localize)(5978, null)}](command:workbench.editSessions.actions.store)`,
								),
								when: g.$Kj.equals(y, 0),
								order: 1,
							}),
							this.D(
								(0, n.$4X)(
									class extends n.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.resume",
												title: (0, i.localize)(5979, null),
												icon: h.$ak.desktopDownload,
												menu: {
													id: n.$XX.ViewItemContext,
													when: g.$Kj.and(
														g.$Kj.equals("view", P),
														g.$Kj.regex("viewItem", /edit-session/i),
													),
													group: "inline",
												},
											});
										}
										async run(D, M) {
											const N = u.URI.parse(M.$treeItemHandle).path.substring(
												1,
											);
											await D.get(p.$ek).executeCommand(
												"workbench.editSessions.actions.resumeLatest",
												N,
												!0,
											),
												await k.refresh();
										}
									},
								),
							),
							this.D(
								(0, n.$4X)(
									class extends n.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.store",
												title: (0, i.localize)(5980, null),
												icon: h.$ak.cloudUpload,
											});
										}
										async run(D, M) {
											await D.get(p.$ek).executeCommand(
												"workbench.editSessions.actions.storeCurrent",
											),
												await k.refresh();
										}
									},
								),
							),
							this.D(
								(0, n.$4X)(
									class extends n.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.delete",
												title: (0, i.localize)(5981, null),
												icon: h.$ak.trash,
												menu: {
													id: n.$XX.ViewItemContext,
													when: g.$Kj.and(
														g.$Kj.equals("view", P),
														g.$Kj.regex("viewItem", /edit-session/i),
													),
													group: "inline",
												},
											});
										}
										async run(D, M) {
											const N = u.URI.parse(M.$treeItemHandle).path.substring(
													1,
												),
												A = D.get(o.$GO),
												R = D.get(r.$z1c);
											(
												await A.confirm({
													message: (0, i.localize)(5982, null, N),
													detail: (0, i.localize)(5983, null),
													type: "warning",
													title: r.$I1c.value,
												})
											).confirmed &&
												(await R.delete("editSessions", N), await k.refresh());
										}
									},
								),
							),
							this.D(
								(0, n.$4X)(
									class extends n.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.deleteAll",
												title: (0, i.localize)(5984, null),
												icon: h.$ak.trash,
												menu: {
													id: n.$XX.ViewTitle,
													when: g.$Kj.and(
														g.$Kj.equals("view", P),
														g.$Kj.greater(y, 0),
													),
												},
											});
										}
										async run(D) {
											const M = D.get(o.$GO),
												N = D.get(r.$z1c);
											(
												await M.confirm({
													message: (0, i.localize)(5985, null),
													detail: (0, i.localize)(5986, null),
													type: "warning",
													title: r.$I1c.value,
												})
											).confirmed &&
												(await N.delete("editSessions", null),
												await k.refresh());
										}
									},
								),
							);
					}
				};
				(e.$R1c = v), (e.$R1c = v = Ne([j(1, E.$Li)], v));
				let S = class {
					constructor(T, P, k, L) {
						(this.b = T),
							(this.c = P),
							(this.d = k),
							(this.e = L),
							(this.a = $.bindTo(this.c));
					}
					async getChildren(T) {
						if (!T) return this.f();
						const [P, k, L] = u.URI.parse(T.handle)
							.path.substring(1)
							.split("/");
						return P && !k ? this.g(P) : P && k && !L ? this.h(P, k) : [];
					}
					async f() {
						const T = await this.b.list("editSessions");
						this.a.set(T.length);
						const P = [];
						for (const k of T) {
							const L = u.URI.from({
									scheme: r.$L1c,
									authority: "remote-session-content",
									path: `/${k.ref}`,
								}),
								D = await this.b.read("editSessions", k.ref);
							if (!D) continue;
							const M = JSON.parse(D.content),
								N = M.folders.map((B) => B.name).join(", ") ?? k.ref,
								A = M.machine,
								R = A ? await this.b.getMachineById(A) : void 0,
								O =
									R === void 0
										? (0, a.$dn)(k.created, !0)
										: `${(0, a.$dn)(k.created, !0)}\xA0\xA0\u2022\xA0\xA0${R}`;
							P.push({
								handle: L.toString(),
								collapsibleState: m.TreeItemCollapsibleState.Collapsed,
								label: { label: N },
								description: O,
								themeIcon: h.$ak.repo,
								contextValue: "edit-session",
							});
						}
						return P;
					}
					async g(T) {
						const P = await this.b.read("editSessions", T);
						if (!P) return [];
						const k = JSON.parse(P.content);
						if (k.folders.length === 1) {
							const L = k.folders[0];
							return this.h(T, L.name);
						}
						return k.folders.map((L) => ({
							handle: u.URI.from({
								scheme: r.$L1c,
								authority: "remote-session-content",
								path: `/${P.ref}/${L.name}`,
							}).toString(),
							collapsibleState: m.TreeItemCollapsibleState.Collapsed,
							label: { label: L.name },
							themeIcon: h.$ak.folder,
						}));
					}
					async h(T, P) {
						const k = await this.b.read("editSessions", T);
						if (!k) return [];
						const L = JSON.parse(k.content),
							D = this.d.getWorkspace().folders.find((N) => N.name === P),
							M = L.folders.find((N) => N.name === P);
						return M
							? Promise.all(
									M.workingChanges.map(async (N) => {
										const A = u.URI.from({
											scheme: r.$L1c,
											authority: "remote-session-content",
											path: `/${k.ref}/${P}/${N.relativeFilePath}`,
										});
										if (D?.uri) {
											const R = (0, b.$nh)(D.uri, N.relativeFilePath);
											if (
												N.type === r.ChangeType.Addition &&
												(await this.e.exists(R))
											)
												return {
													handle: A.toString(),
													resourceUri: A,
													collapsibleState: m.TreeItemCollapsibleState.None,
													label: { label: N.relativeFilePath },
													themeIcon: h.$ak.file,
													command: {
														id: "vscode.diff",
														title: (0, i.localize)(5987, null),
														arguments: [
															R,
															A,
															`${(0, l.$sc)(N.relativeFilePath)} (${(0, i.localize)(5988, null)} \u2194 ${(0, i.localize)(5989, null)})`,
															void 0,
														],
													},
												};
										}
										return {
											handle: A.toString(),
											resourceUri: A,
											collapsibleState: m.TreeItemCollapsibleState.None,
											label: { label: N.relativeFilePath },
											themeIcon: h.$ak.file,
											command: {
												id: c.$zWb,
												title: (0, i.localize)(5990, null),
												arguments: [A, void 0, void 0],
											},
										};
									}),
								)
							: [];
					}
				};
				S = Ne([j(0, r.$z1c), j(1, g.$6j), j(2, f.$Vi), j(3, s.$ll)], S);
			},
		)
