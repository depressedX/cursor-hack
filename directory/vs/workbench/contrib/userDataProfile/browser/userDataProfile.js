import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/uri.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../tags/common/workspaceTags.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import '../../../common/editor.js';
import './userDataProfilesEditor.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/url/common/url.js';
import '../../../services/environment/browser/environmentService.js';
define(
			de[3893],
			he([
				1, 0, 3, 12, 4, 11, 8, 129, 52, 133, 63, 40, 9, 32, 25, 1260, 99, 41,
				30, 192, 44, 3892, 102, 66, 5, 87, 465, 286,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*platform*/,
				w /*nls*/,
				E /*actions*/,
				C /*contextkey*/,
				d /*userDataProfile*/,
				m /*lifecycle*/,
				r /*userDataProfile*/,
				u /*quickInput*/,
				a /*notification*/,
				h /*uri*/,
				c /*telemetry*/,
				n /*workspace*/,
				g /*workspaceTags*/,
				p /*actionCommonCategories*/,
				o /*opener*/,
				f /*platform*/,
				b /*editor*/,
				s /*editor*/,
				l /*userDataProfilesEditor*/,
				y /*descriptors*/,
				$ /*editorGroupsService*/,
				v /*instantiation*/,
				S /*host*/,
				I /*url*/,
				T /*environmentService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w1c = e.$v1c = void 0),
					(e.$v1c = new E.$XX("OpenProfile"));
				let P = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.userDataProfiles";
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F, x) {
						super(),
							(this.h = L),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.s = B),
							(this.t = U),
							(this.u = z),
							(this.w = F),
							(this.G = this.D(new t.$2c())),
							(this.c = r.$48.bindTo(O)),
							r.$38.bindTo(O).set(this.j.isEnabled()),
							(this.f = r.$58.bindTo(O)),
							this.c.set(this.h.currentProfile.id),
							this.f.set(!!this.h.currentProfile.isTransient),
							this.D(
								this.h.onDidChangeCurrentProfile((H) => {
									this.c.set(this.h.currentProfile.id),
										this.f.set(!!this.h.currentProfile.isTransient);
								}),
							),
							(this.g = r.$68.bindTo(O)),
							this.g.set(this.j.profiles.length > 1),
							this.D(
								this.j.onDidChangeProfiles((H) =>
									this.g.set(this.j.profiles.length > 1),
								),
							),
							this.z(),
							this.C(),
							this.D(this.w.registerHandler(this)),
							i.$r &&
								z.when(m.LifecyclePhase.Eventually).then(() => D.cleanUp()),
							this.S(),
							x.options?.profileToPreview &&
								z
									.when(m.LifecyclePhase.Restored)
									.then(() =>
										this.handleURL(h.URI.revive(x.options.profileToPreview)),
									);
					}
					async handleURL(L) {
						if ((0, r.$V8)(L)) {
							const D = await this.y();
							if (D) return D.createNewProfile(L), !0;
						}
						return !1;
					}
					async y() {
						return await this.s.activeGroup.openEditor(new l.$t1c(this.t));
					}
					z() {
						f.$Io
							.as(s.$a1.EditorPane)
							.registerEditorPane(
								b.$vVb.create(l.$s1c, l.$s1c.ID, (0, w.localize)(11127, null)),
								[new y.$Ji(l.$t1c)],
							),
							f.$Io
								.as(s.$a1.EditorFactory)
								.registerEditorSerializer(l.$t1c.ID, l.$u1c);
					}
					C() {
						this.D(this.M()),
							this.D(this.L()),
							this.F(),
							this.I(),
							this.H(),
							this.D(this.j.onDidChangeProfiles(() => this.H())),
							this.D(this.N()),
							this.O(),
							this.P(),
							this.Q(),
							this.R();
					}
					F() {
						E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
							title: (0, w.localize)(11128, null),
							submenu: e.$v1c,
							group: "1_new",
							order: 4,
						});
					}
					H() {
						this.G.value = new t.$Zc();
						for (const L of this.j.profiles)
							L.isTransient || this.G.value.add(this.J(L));
					}
					I() {
						return (0, E.$4X)(
							class extends E.$3X {
								constructor() {
									super({
										id: "workbench.profiles.actions.newWindowWithProfile",
										title: (0, w.localize2)(
											11136,
											"New Window with Profile...",
										),
										category: r.$Z8,
										precondition: r.$68,
										f1: !0,
									});
								}
								async run(D) {
									const M = D.get(u.$DJ),
										N = D.get(d.$Xl),
										A = D.get(S.$asb),
										R = await M.pick(
											N.profiles.map((O) => ({ label: O.name, profile: O })),
											{
												title: (0, w.localize)(11129, null),
												placeHolder: (0, w.localize)(11130, null),
												canPickMany: !1,
											},
										);
									if (R)
										return A.openWindow({
											remoteAuthority: null,
											forceProfile: R.profile.name,
										});
								}
							},
						);
					}
					J(L) {
						const D = new t.$Zc(),
							M = `workbench.action.openProfile.${L.name.replace("/s+/", "_")}`;
						return (
							D.add(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({
												id: M,
												title: (0, w.localize2)(11137, "{0}", L.name),
												menu: { id: e.$v1c, group: "0_profiles", when: r.$68 },
											});
										}
										run(A) {
											return A.get(S.$asb).openWindow({
												remoteAuthority: null,
												forceProfile: L.name,
											});
										}
									},
								),
							),
							D.add(
								E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
									command: {
										id: M,
										category: r.$Z8,
										title: (0, w.localize2)(11138, "Open {0} Profile", L.name),
										precondition: r.$68,
									},
								}),
							),
							D
						);
					}
					L() {
						const L = this;
						return (0, E.$4X)(
							class extends E.$3X {
								constructor() {
									super({
										id: "workbench.profiles.actions.switchProfile",
										title: (0, w.localize2)(11139, "Switch Profile..."),
										category: r.$Z8,
										f1: !0,
										precondition: r.$38,
									});
								}
								async run(M) {
									const N = M.get(u.$DJ),
										A = [];
									for (const O of L.j.profiles)
										A.push({
											id: O.id,
											label:
												O.id === L.h.currentProfile.id
													? `$(check) ${O.name}`
													: O.name,
											profile: O,
										});
									const R = await N.pick(
										A.sort((O, B) =>
											O.profile.name.localeCompare(B.profile.name),
										),
										{ placeHolder: (0, w.localize)(11131, null) },
									);
									R && (await L.m.switchProfile(R.profile));
								}
							},
						);
					}
					M() {
						const L = new t.$Zc();
						return (
							L.add(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({
												id: "workbench.profiles.actions.manageProfiles",
												title: {
													...(0, w.localize2)(11140, "Profiles"),
													mnemonicTitle: (0, w.localize)(11132, null),
												},
												menu: [
													{
														id: E.$XX.GlobalActivity,
														group: "2_configuration",
														order: 1,
													},
													{
														id: E.$XX.MenubarPreferencesMenu,
														group: "2_configuration",
														order: 1,
													},
												],
											});
										}
										run(M) {
											const N = M.get($.$EY),
												A = M.get(v.$Li);
											return N.activeGroup.openEditor(new l.$t1c(A));
										}
									},
								),
							),
							L.add(
								E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
									command: {
										id: "workbench.profiles.actions.manageProfiles",
										category: p.$ck.Preferences,
										title: (0, w.localize2)(11141, "Open Profiles (UI)"),
									},
								}),
							),
							L
						);
					}
					N() {
						const L = this,
							D = new t.$Zc(),
							M = "workbench.profiles.actions.exportProfile";
						return (
							D.add(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({
												id: M,
												title: (0, w.localize2)(11142, "Export Profile..."),
												category: r.$Z8,
												f1: !0,
											});
										}
										async run() {
											(await L.y())?.selectProfile(L.h.currentProfile);
										}
									},
								),
							),
							D.add(
								E.$ZX.appendMenuItem(E.$XX.MenubarShare, {
									command: {
										id: M,
										title: (0, w.localize2)(
											11143,
											"Export Profile ({0})...",
											L.h.currentProfile.name,
										),
										precondition: r.$38,
									},
								}),
							),
							D
						);
					}
					O() {
						const L = this;
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.profiles.actions.createFromCurrentProfile",
											title: (0, w.localize2)(
												11144,
												"Save Current Profile As...",
											),
											category: r.$Z8,
											f1: !0,
											precondition: r.$38,
										});
									}
									async run() {
										(await L.y())?.createNewProfile(L.h.currentProfile);
									}
								},
							),
						);
					}
					P() {
						const L = this;
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.profiles.actions.createProfile",
											title: (0, w.localize2)(11145, "New Profile..."),
											category: r.$Z8,
											precondition: r.$38,
											f1: !0,
											menu: [
												{ id: e.$v1c, group: "1_manage_profiles", order: 1 },
											],
										});
									}
									async run(M) {
										return (await L.y())?.createNewProfile();
									}
								},
							),
						);
					}
					Q() {
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.profiles.actions.deleteProfile",
											title: (0, w.localize2)(11146, "Delete Profile..."),
											category: r.$Z8,
											f1: !0,
											precondition: C.$Kj.and(r.$38, r.$68),
										});
									}
									async run(D) {
										const M = D.get(u.$DJ),
											N = D.get(r.$P8),
											A = D.get(d.$Xl),
											R = D.get(r.$Q8),
											O = D.get(a.$4N),
											B = A.profiles.filter(
												(U) => !U.isDefault && !U.isTransient,
											);
										if (B.length) {
											const U = await M.pick(
												B.map((z) => ({
													label: z.name,
													description:
														z.id === N.currentProfile.id
															? (0, w.localize)(11133, null)
															: void 0,
													profile: z,
												})),
												{
													title: (0, w.localize)(11134, null),
													placeHolder: (0, w.localize)(11135, null),
													canPickMany: !0,
												},
											);
											if (U)
												try {
													await Promise.all(
														U.map((z) => R.removeProfile(z.profile)),
													);
												} catch (z) {
													O.error(z);
												}
										}
									}
								},
							),
						);
					}
					R() {
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.profiles.actions.help",
											title: r.$Y8,
											category: p.$ck.Help,
											menu: [{ id: E.$XX.CommandPalette }],
										});
									}
									run(D) {
										return D.get(o.$7rb).open(
											h.URI.parse("https://aka.ms/vscode-profiles-help"),
										);
									}
								},
							),
						);
					}
					async S() {
						await this.u.when(m.LifecyclePhase.Eventually);
						const L = await this.r.getTelemetryWorkspaceId(
							this.q.getWorkspace(),
							this.q.getWorkbenchState(),
						);
						this.n.publicLog2("workspaceProfileInfo", {
							workspaceId: L,
							defaultProfile: this.h.currentProfile.isDefault,
						});
					}
				};
				(e.$w1c = P),
					(e.$w1c = P =
						Ne(
							[
								j(0, r.$P8),
								j(1, d.$Xl),
								j(2, r.$Q8),
								j(3, c.$km),
								j(4, n.$Vi),
								j(5, g.$j1c),
								j(6, C.$6j),
								j(7, $.$EY),
								j(8, v.$Li),
								j(9, m.$n6),
								j(10, I.$2rb),
								j(11, T.$5rb),
							],
							P,
						));
			},
		)
