import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/views.js';
import '../../../../nls.js';
import '../../../browser/parts/views/treeView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/uri.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/userDataSync/common/userDataSync.js';
import '../../../../base/common/resources.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../common/editor.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../services/accessibility/common/accessibleViewInformationService.js';
define(
			de[4049],
			he([
				1, 0, 60, 4, 854, 5, 150, 11, 8, 9, 18, 522, 19, 7, 39, 49, 10, 41, 35,
				32, 40, 14, 129, 44, 72, 1278,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*views*/,
				i /*nls*/,
				w /*treeView*/,
				E /*instantiation*/,
				C /*userDataSync*/,
				d /*actions*/,
				m /*contextkey*/,
				r /*uri*/,
				u /*editorService*/,
				a /*userDataSync*/,
				h /*resources*/,
				c /*dom*/,
				n /*keybinding*/,
				g /*contextView*/,
				p /*configuration*/,
				o /*opener*/,
				f /*themeService*/,
				b /*telemetry*/,
				s /*notification*/,
				l /*codicons*/,
				y /*userDataProfile*/,
				$ /*editor*/,
				v /*hover*/,
				S /*accessibleViewInformationService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c1c = void 0),
					(c = mt(c));
				let I = class extends w.$Ptc {
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(P, L, D, M, N, A, R, O, B, U, z, F, G),
							(this.ab = k),
							(this.sb = x),
							(this.cc = H),
							(this.dc = q),
							(this.ec = V),
							this.D(this.sb.onDidChangeConflicts(() => this.f.refresh())),
							this.ic();
					}
					n(P) {
						super.n(c.$fhb(P, c.$("")));
						const k = this;
						(this.f.message = (0, i.localize)(11320, null)),
							(this.f.dataProvider = {
								getChildren() {
									return k.gc();
								},
							});
					}
					async gc() {
						const P = [],
							k = this.sb.conflicts
								.map((D) =>
									D.conflicts.map((M) => ({
										...M,
										syncResource: D.syncResource,
										profile: D.profile,
									})),
								)
								.flat()
								.sort((D, M) =>
									D.profile.id === M.profile.id
										? 0
										: D.profile.isDefault
											? -1
											: M.profile.isDefault
												? 1
												: D.profile.name.localeCompare(M.profile.name),
								),
							L = [];
						for (const D of k) {
							let M =
								L[L.length - 1]?.[0].id === D.profile.id
									? L[L.length - 1][1]
									: void 0;
							M || L.push([D.profile, (M = [])]), M.push(D);
						}
						for (const [D, M] of L) {
							const N = [];
							for (const A of M) {
								const R = JSON.stringify(A),
									O = {
										handle: R,
										resourceUri: A.remoteResource,
										label: {
											label: (0, h.$kh)(A.remoteResource),
											strikethrough:
												A.mergeState === C.MergeState.Accepted &&
												(A.localChange === C.Change.Deleted ||
													A.remoteChange === C.Change.Deleted),
										},
										description: (0, a.$Oxc)(A.syncResource),
										collapsibleState: t.TreeItemCollapsibleState.None,
										command: {
											id: "workbench.actions.sync.openConflicts",
											title: "",
											arguments: [{ $treeViewId: "", $treeItemHandle: R }],
										},
										contextValue: "sync-conflict-resource",
									};
								N.push(O);
							}
							P.push({
								handle: D.id,
								label: { label: D.name },
								collapsibleState: t.TreeItemCollapsibleState.Expanded,
								children: N,
							});
						}
						return L.length === 1 && L[0][0].isDefault
							? (P[0].children ?? [])
							: P;
					}
					hc(P) {
						const k = JSON.parse(P);
						return {
							syncResource: k.syncResource,
							profile: (0, y.$Yl)(k.profile, this.ec.profilesHome.scheme),
							localResource: r.URI.revive(k.localResource),
							remoteResource: r.URI.revive(k.remoteResource),
							baseResource: r.URI.revive(k.baseResource),
							previewResource: r.URI.revive(k.previewResource),
							acceptedResource: r.URI.revive(k.acceptedResource),
							localChange: k.localChange,
							remoteChange: k.remoteChange,
							mergeState: k.mergeState,
						};
					}
					ic() {
						const P = this;
						this.D(
							(0, d.$4X)(
								class extends d.$3X {
									constructor() {
										super({
											id: "workbench.actions.sync.openConflicts",
											title: (0, i.localize)(11321, null),
										});
									}
									async run(L, D) {
										const M = P.hc(D.$treeItemHandle);
										return P.open(M);
									}
								},
							),
						),
							this.D(
								(0, d.$4X)(
									class extends d.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.acceptRemote",
												title: (0, i.localize)(11322, null),
												icon: l.$ak.cloudDownload,
												menu: {
													id: d.$XX.ViewItemContext,
													when: m.$Kj.and(
														m.$Kj.equals("view", a.$1xc),
														m.$Kj.equals("viewItem", "sync-conflict-resource"),
													),
													group: "inline",
													order: 1,
												},
											});
										}
										async run(L, D) {
											const M = P.hc(D.$treeItemHandle);
											await P.cc.accept(
												{ syncResource: M.syncResource, profile: M.profile },
												M.remoteResource,
												void 0,
												P.dc.isEnabled(),
											);
										}
									},
								),
							),
							this.D(
								(0, d.$4X)(
									class extends d.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.acceptLocal",
												title: (0, i.localize)(11323, null),
												icon: l.$ak.cloudUpload,
												menu: {
													id: d.$XX.ViewItemContext,
													when: m.$Kj.and(
														m.$Kj.equals("view", a.$1xc),
														m.$Kj.equals("viewItem", "sync-conflict-resource"),
													),
													group: "inline",
													order: 2,
												},
											});
										}
										async run(L, D) {
											const M = P.hc(D.$treeItemHandle);
											await P.cc.accept(
												{ syncResource: M.syncResource, profile: M.profile },
												M.localResource,
												void 0,
												P.dc.isEnabled(),
											);
										}
									},
								),
							);
					}
					async open(P) {
						if (
							!this.sb.conflicts.some(({ conflicts: D }) =>
								D.some(({ localResource: M }) =>
									(0, h.$gh)(M, P.localResource),
								),
							)
						)
							return;
						const k = (0, i.localize)(
								11324,
								null,
								(0, h.$kh)(P.remoteResource),
							),
							L = (0, i.localize)(11325, null, (0, h.$kh)(P.remoteResource));
						await this.ab.openEditor({
							input1: {
								resource: P.remoteResource,
								label: (0, i.localize)(11326, null),
								description: k,
							},
							input2: {
								resource: P.localResource,
								label: (0, i.localize)(11327, null),
								description: L,
							},
							base: { resource: P.baseResource },
							result: { resource: P.previewResource },
							options: {
								preserveFocus: !0,
								revealIfVisible: !0,
								pinned: !0,
								override: $.$b1.id,
							},
						});
					}
				};
				(e.$c1c = I),
					(e.$c1c = I =
						Ne(
							[
								j(1, u.$IY),
								j(2, n.$uZ),
								j(3, g.$Xxb),
								j(4, p.$gj),
								j(5, m.$6j),
								j(6, t.$K1),
								j(7, E.$Li),
								j(8, o.$7rb),
								j(9, f.$iP),
								j(10, b.$km),
								j(11, s.$4N),
								j(12, v.$Uyb),
								j(13, C.$5Rb),
								j(14, a.$Nxc),
								j(15, C.$4Rb),
								j(16, y.$Xl),
								j(17, S.$QMb),
							],
							I,
						));
			},
		),
		