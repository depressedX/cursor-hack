import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/browser/ui/actionbar/actionbar.js';
import '../../common/activity.js';
import '../../services/activity/common/activity.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/theme/common/themeService.js';
import '../../../platform/storage/common/storage.js';
import '../../services/extensions/common/extensions.js';
import './compositeBarActions.js';
import '../../../base/common/codicons.js';
import '../../../base/common/themables.js';
import '../../../platform/theme/common/iconRegistry.js';
import '../../../base/common/actions.js';
import '../../../platform/actions/common/actions.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/keyboardEvent.js';
import '../../../base/browser/mouseEvent.js';
import '../../../base/browser/touch.js';
import '../../../base/browser/ui/contextview/contextview.js';
import '../../../base/common/lazy.js';
import '../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/contextkey/common/contextkey.js';
import '../../../platform/contextview/browser/contextView.js';
import '../../../platform/keybinding/common/keybinding.js';
import '../../../platform/log/common/log.js';
import '../../../platform/product/common/productService.js';
import '../../../platform/secrets/common/secrets.js';
import '../../services/authentication/browser/authenticationService.js';
import '../../services/authentication/common/authentication.js';
import '../../services/environment/common/environmentService.js';
import '../../../platform/hover/browser/hover.js';
import '../../services/lifecycle/common/lifecycle.js';
import '../../services/userDataProfile/common/userDataProfile.js';
import '../../services/userDataProfile/common/userDataProfileIcons.js';
import '../../../base/common/types.js';
import '../../../base/common/keyCodes.js';
import '../../common/theme.js';
import '../../../platform/commands/common/commands.js';
define(
			de[1936],
			he([
				1, 0, 4, 105, 968, 260, 5, 3, 35, 21, 53, 1349, 14, 26, 79, 50, 11, 7,
				114, 168, 159, 276, 149, 92, 10, 8, 49, 39, 34, 62, 783, 830, 357, 78,
				72, 52, 133, 1903, 28, 27, 123, 31,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
			) {
				"use strict";
				var H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lrc = e.$krc = e.$jrc = e.$irc = e.$hrc = void 0),
					(e.$mrc = Y);
				let q = class extends d.$1c {
					static {
						H = this;
					}
					static {
						this.b = 0;
					}
					static {
						this.ACCOUNTS_ICON = (0, n.$$O)(
							"accounts-view-bar-icon",
							h.$ak.account,
							(0, t.localize)(3554, null),
						);
					}
					constructor(ee, _, te, Q, Z, se, re) {
						super(),
							(this.h = ee),
							(this.j = _),
							(this.m = te),
							(this.n = Z),
							(this.q = se),
							(this.r = re),
							(this.c = this.D(new g.$rj(w.$5qc))),
							(this.f = this.D(new g.$rj(w.$6qc))),
							(this.element = document.createElement("div"));
						const le = () => ({
							anchorAlignment:
								Q.getValue("workbench.sideBar.location") === "left"
									? l.AnchorAlignment.RIGHT
									: l.AnchorAlignment.LEFT,
							anchorAxisAlignment: l.AnchorAxisAlignment.HORIZONTAL,
						});
						(this.g = this.D(
							new i.$eib(this.element, {
								actionViewItemProvider: (oe, ae) => {
									if (oe.id === w.$5qc)
										return this.n.createInstance(
											K,
											this.h,
											{ ...ae, colors: this.j, hoverOptions: this.m },
											le,
										);
									if (oe.id === w.$6qc)
										return this.n.createInstance(
											G,
											this.h,
											{ ...ae, colors: this.j, hoverOptions: this.m },
											le,
											(pe) => {
												pe.unshift(
													(0, g.$wj)({
														id: "hideAccounts",
														label: (0, t.localize)(3555, null),
														run: () => ie(se, !1),
													}),
													new g.$tj(),
												);
											},
										);
									throw new Error(`No view item for action '${oe.id}'`);
								},
								orientation: i.ActionsOrientation.VERTICAL,
								ariaLabel: (0, t.localize)(3556, null),
								preventLoopNavigation: !0,
							}),
						)),
							this.w && this.g.push(this.f, { index: H.b }),
							this.g.push(this.c),
							this.t();
					}
					t() {
						this.r.whenInstalledExtensionsRegistered().then(() => {
							this.B.isDisposed ||
								this.D(
									this.q.onDidChangeValue(
										r.StorageScope.PROFILE,
										G.ACCOUNTS_VISIBILITY_PREFERENCE_KEY,
										this.B,
									)(() => this.u()),
								);
						});
					}
					create(ee) {
						ee.appendChild(this.element);
					}
					focus() {
						this.g.focus(!0);
					}
					size() {
						return this.g.viewItems.length;
					}
					getContextMenuActions() {
						return [
							(0, g.$wj)({
								id: "toggleAccountsVisibility",
								label: (0, t.localize)(3557, null),
								checked: this.w,
								run: () => (this.w = !this.w),
							}),
						];
					}
					u() {
						(this.g.length() === 2 && this.w) ||
							(this.g.length() === 2
								? this.g.pull(H.b)
								: this.g.push(this.f, { index: H.b }));
					}
					get w() {
						return Y(this.q);
					}
					set w(ee) {
						ie(this.q, ee);
					}
				};
				(e.$hrc = q),
					(e.$hrc =
						q =
						H =
							Ne([j(3, v.$gj), j(4, C.$Li), j(5, r.$lq), j(6, u.$q2)], q));
				let V = class extends a.$_qc {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye) {
						super(
							_,
							{ draggable: !1, icon: !0, hasPopup: !0, ...te },
							() => !0,
							se,
							re,
							pe,
							$e,
						),
							(this.gb = ee),
							(this.hb = Q),
							(this.ib = Z),
							(this.jb = le),
							(this.kb = oe),
							(this.lb = ae),
							(this.mb = ye),
							this.nb(),
							this.D(
								this.mb.onDidChangeActivity((ue) => {
									(0, U.$lg)(ue) && ue === this.W.id && this.nb();
								}),
							);
					}
					nb() {
						const ee = this.mb.getActivity(this.W.id);
						let _ = ee[0];
						if (_) {
							const { badge: te, priority: Q } = _;
							te instanceof E.$8qc &&
								ee.length > 1 &&
								(_ = { badge: this.ob(ee, Q ?? 0) });
						}
						this.action.activity = _;
					}
					ob(ee, _) {
						const te = ee.filter(
								(se) => se.badge instanceof E.$8qc && (se.priority ?? 0) === _,
							),
							Q = te.reduce((se, re) => se + re.badge.number, 0),
							Z = () =>
								te.reduce(
									(se, re, le) => (
										(se = se + re.badge.getDescription()),
										le < te.length - 1 &&
											(se = `${se}
`),
										se
									),
									"",
								);
						return new E.$8qc(Q, Z);
					}
					render(ee) {
						super.render(ee),
							this.D(
								(0, o.$0fb)(this.c, o.$$gb.MOUSE_DOWN, async (_) => {
									o.$ahb.stop(_, !0), _?.button !== 2 && this.qb();
								}),
							),
							this.D(
								(0, o.$0fb)(this.c, o.$$gb.CONTEXT_MENU, async (_) => {
									_.stopPropagation();
									const te = new d.$Zc(),
										Q = await this.pb(te),
										Z = new b.$2fb((0, o.getWindow)(this.c), _);
									this.kb.showContextMenu({
										getAnchor: () => Z,
										getActions: () => Q,
										onHide: () => te.dispose(),
									});
								}),
							),
							this.D(
								(0, o.$0fb)(this.c, o.$$gb.KEY_UP, (_) => {
									const te = new f.$7fb(_);
									(te.equals(z.KeyCode.Enter) || te.equals(z.KeyCode.Space)) &&
										(o.$ahb.stop(_, !0), this.qb());
								}),
							),
							this.D(
								(0, o.$0fb)(this.c, s.EventType.Tap, (_) => {
									o.$ahb.stop(_, !0), this.qb();
								}),
							);
					}
					async pb(ee) {
						return this.hb();
					}
					async qb() {
						const ee = new d.$Zc(),
							_ = ee.add(this.jb.createMenu(this.gb, this.lb)),
							te = await this.rb(_, ee),
							{ anchorAlignment: Q, anchorAxisAlignment: Z } = this.ib() ?? {
								anchorAlignment: void 0,
								anchorAxisAlignment: void 0,
							};
						this.kb.showContextMenu({
							getAnchor: () => this.g,
							anchorAlignment: Q,
							anchorAxisAlignment: Z,
							getActions: () => te,
							onHide: () => ee.dispose(),
							menuActionOptions: { renderShortTitle: !0 },
						});
					}
					async rb(ee, _) {
						const te = [];
						return (
							(0, $.$Kyb)(
								ee,
								{ renderShortTitle: !0 },
								{ primary: [], secondary: te },
							),
							te
						);
					}
				};
				V = Ne(
					[
						j(5, m.$iP),
						j(6, A.$Uyb),
						j(7, p.$YX),
						j(8, I.$Xxb),
						j(9, S.$6j),
						j(10, v.$gj),
						j(11, T.$uZ),
						j(12, E.$7qc),
					],
					V,
				);
				let G = class extends V {
					static {
						this.ACCOUNTS_VISIBILITY_PREFERENCE_KEY =
							"workbench.activity.showAccounts";
					}
					constructor(
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
					) {
						const Le = be.createInstance(a.$$qc, {
							id: w.$6qc,
							name: (0, t.localize)(3558, null),
							classNames: c.ThemeIcon.asClassNameArray(q.ACCOUNTS_ICON),
						});
						super(
							p.$XX.AccountsContext,
							Le,
							_,
							ee,
							te,
							Z,
							re,
							oe,
							le,
							ae,
							ue,
							fe,
							ge,
						),
							(this.wb = Q),
							(this.xb = se),
							(this.yb = pe),
							(this.zb = ye),
							(this.Ab = me),
							(this.Bb = ve),
							(this.Cb = Ce),
							(this.sb = new Map()),
							(this.tb = new Set()),
							(this.ub = !1),
							(this.vb = new y.$Y(() => (0, D.$gsb)(this.Ab, this.zb))),
							this.D(Le),
							this.Db(),
							this.Eb();
					}
					Db() {
						this.D(
							this.yb.onDidRegisterAuthenticationProvider(async (ee) => {
								await this.Kb(ee.id);
							}),
						),
							this.D(
								this.yb.onDidUnregisterAuthenticationProvider((ee) => {
									this.sb.delete(ee.id), this.tb.delete(ee.id);
								}),
							),
							this.D(
								this.yb.onDidChangeSessions(async (ee) => {
									if (ee.event.removed)
										for (const _ of ee.event.removed)
											this.Jb(ee.providerId, _.account);
									for (const _ of [
										...(ee.event.changed ?? []),
										...(ee.event.added ?? []),
									])
										try {
											await this.Ib(ee.providerId, _.account);
										} catch (te) {
											this.Bb.error(te);
										}
								}),
							);
					}
					async Eb() {
						if (
							(await this.xb.when(R.LifecyclePhase.Restored), this.B.isDisposed)
						)
							return;
						const ee = this.D(
							(0, o.$egb)((0, o.getWindow)(this.element), async () => {
								await this.Fb(), ee.dispose();
							}),
						);
					}
					async Fb() {
						const ee = this.yb.getProviderIds(),
							_ = await Promise.allSettled(ee.map((te) => this.Kb(te)));
						for (const te of _)
							te.status === "rejected" && this.Bb.error(te.reason);
						this.ub = !0;
					}
					async rb(ee, _) {
						await super.rb(ee, _);
						const te = this.yb.getProviderIds(),
							Q = ee.getActions();
						let Z = [];
						for (const se of te) {
							if (!this.ub) {
								const oe = _.add(
									new g.$rj(
										"noAccountsAvailable",
										(0, t.localize)(3559, null),
										void 0,
										!1,
									),
								);
								Z.push(oe);
								break;
							}
							const re = this.yb.getProvider(se).label,
								le = this.sb.get(se);
							if (!le) {
								if (this.tb.has(se)) {
									const oe = _.add(
										new g.$rj(
											"providerUnavailable",
											(0, t.localize)(3560, null, re),
											void 0,
											!1,
										),
									);
									Z.push(oe);
									try {
										await this.Kb(se);
									} catch (ae) {
										this.Bb.error(ae);
									}
								}
								continue;
							}
							for (const oe of le) {
								const pe = [
									(0, g.$wj)({
										id: `configureSessions${oe.label}`,
										label: (0, t.localize)(3561, null),
										enabled: !0,
										run: () =>
											this.Cb.executeCommand(
												"_manageTrustedExtensionsForAccount",
												{ providerId: se, accountLabel: oe.label },
											),
									}),
								];
								oe.canSignOut &&
									pe.push(
										(0, g.$wj)({
											id: "signOut",
											label: (0, t.localize)(3562, null),
											enabled: !0,
											run: () =>
												this.Cb.executeCommand("_signOutOfAccount", {
													providerId: se,
													accountLabel: oe.label,
												}),
										}),
									);
								const $e = new g.$uj(
									"activitybar.submenu",
									`${oe.label} (${re})`,
									pe,
								);
								Z.push($e);
							}
						}
						if (te.length && !Z.length) {
							const se = _.add(
								new g.$rj(
									"noAccountsAvailable",
									(0, t.localize)(3563, null),
									void 0,
									!1,
								),
							);
							Z.push(se);
						}
						return (
							Z.length && Q.length && Z.push(new g.$tj()),
							Q.forEach((se, re) => {
								const le = se[1];
								(Z = Z.concat(le)), re !== Q.length - 1 && Z.push(new g.$tj());
							}),
							Z
						);
					}
					async pb(ee) {
						const _ = await super.pb(ee);
						return this.wb(_), _;
					}
					async Ib(ee, _) {
						let te = this.sb.get(ee);
						te || ((te = []), this.sb.set(ee, te));
						const Q = await this.vb.value;
						let Z = !0;
						Q &&
							!Q.canSignOut &&
							(await this.yb.getSessions(ee)).some(
								(re) => re.id === Q.id && re.account.id === _.id,
							) &&
							(Z = !1);
						const se = te.find((re) => re.label === _.label);
						se ? Z || (se.canSignOut = Z) : te.push({ ..._, canSignOut: Z });
					}
					Jb(ee, _) {
						const te = this.sb.get(ee);
						if (!te) return;
						const Q = te.findIndex((Z) => Z.id === _.id);
						Q !== -1 &&
							(te.splice(Q, 1), te.length === 0 && this.sb.delete(ee));
					}
					async Kb(ee) {
						try {
							const _ = await this.yb.getSessions(ee);
							this.tb.delete(ee);
							for (const te of _)
								try {
									await this.Ib(ee, te.account);
								} catch (Q) {
									this.Bb.error(Q);
								}
						} catch (_) {
							this.Bb.error(_), this.tb.add(ee);
						}
					}
				};
				(e.$irc = G),
					(e.$irc = G =
						Ne(
							[
								j(4, m.$iP),
								j(5, R.$n6),
								j(6, A.$Uyb),
								j(7, I.$Xxb),
								j(8, p.$YX),
								j(9, S.$6j),
								j(10, M.$$7),
								j(11, N.$r8),
								j(12, k.$Bk),
								j(13, v.$gj),
								j(14, T.$uZ),
								j(15, L.$Yrb),
								j(16, P.$ik),
								j(17, E.$7qc),
								j(18, C.$Li),
								j(19, x.$ek),
							],
							G,
						));
				let K = class extends V {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						const fe = ye.createInstance(a.$$qc, {
							id: w.$5qc,
							name: (0, t.localize)(3564, null),
							classNames: c.ThemeIcon.asClassNameArray(
								Q.currentProfile.icon
									? c.ThemeIcon.fromId(Q.currentProfile.icon)
									: B.$frc,
							),
						});
						super(
							p.$XX.GlobalActivity,
							fe,
							_,
							ee,
							te,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							$e,
							ue,
						),
							(this.ub = Q),
							this.D(fe),
							this.D(
								this.ub.onDidChangeCurrentProfile((me) => {
									fe.compositeBarActionItem = {
										...fe.compositeBarActionItem,
										classNames: c.ThemeIcon.asClassNameArray(
											Q.currentProfile.icon
												? c.ThemeIcon.fromId(Q.currentProfile.icon)
												: B.$frc,
										),
									};
								}),
							);
					}
					render(ee) {
						super.render(ee),
							(this.sb = (0, o.$fhb)(ee, (0, o.$)(".profile-badge"))),
							(this.tb = (0, o.$fhb)(
								this.sb,
								(0, o.$)(".profile-badge-content"),
							)),
							this.vb();
					}
					vb() {
						!this.sb ||
							!this.tb ||
							((0, o.$9fb)(this.tb),
							(0, o.hide)(this.sb),
							!this.ub.currentProfile.isDefault &&
								((this.ub.currentProfile.icon &&
									this.ub.currentProfile.icon !== B.$frc.id) ||
									this.action.activity ||
									((0, o.show)(this.sb),
									this.tb.classList.toggle("profile-text-overlay", !0),
									this.tb.classList.toggle("profile-icon-overlay", !1),
									(this.tb.textContent = this.ub.currentProfile.name
										.substring(0, 2)
										.toUpperCase()))));
					}
					ab() {
						super.ab(), this.vb();
					}
					db() {
						return this.ub.currentProfile.isDefault
							? super.db()
							: (0, t.localize)(3565, null, this.ub.currentProfile.name);
					}
				};
				(e.$jrc = K),
					(e.$jrc = K =
						Ne(
							[
								j(3, O.$P8),
								j(4, m.$iP),
								j(5, A.$Uyb),
								j(6, p.$YX),
								j(7, I.$Xxb),
								j(8, S.$6j),
								j(9, v.$gj),
								j(10, N.$r8),
								j(11, T.$uZ),
								j(12, C.$Li),
								j(13, E.$7qc),
							],
							K,
						));
				let J = class extends G {
					constructor(
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
					) {
						super(
							() => X(fe, !0),
							{
								..._,
								colors: (Ce) => ({
									badgeBackground: Ce.getColor(F.$cGb),
									badgeForeground: Ce.getColor(F.$dGb),
								}),
								hoverOptions: ee,
								compact: !0,
							},
							() => {},
							(Ce) => Ce,
							te,
							Q,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
							ue,
							me,
							ve,
							ge,
							be,
						);
					}
				};
				(e.$krc = J),
					(e.$krc = J =
						Ne(
							[
								j(2, m.$iP),
								j(3, R.$n6),
								j(4, A.$Uyb),
								j(5, I.$Xxb),
								j(6, p.$YX),
								j(7, S.$6j),
								j(8, M.$$7),
								j(9, N.$r8),
								j(10, k.$Bk),
								j(11, v.$gj),
								j(12, T.$uZ),
								j(13, L.$Yrb),
								j(14, r.$lq),
								j(15, P.$ik),
								j(16, E.$7qc),
								j(17, C.$Li),
								j(18, x.$ek),
							],
							J,
						));
				let W = class extends K {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(
							() => X(ue, !1),
							{
								..._,
								colors: (fe) => ({
									badgeBackground: fe.getColor(F.$cGb),
									badgeForeground: fe.getColor(F.$dGb),
								}),
								hoverOptions: ee,
								compact: !0,
							},
							() => {},
							te,
							Q,
							Z,
							se,
							re,
							le,
							oe,
							ae,
							pe,
							$e,
							ye,
						);
					}
				};
				(e.$lrc = W),
					(e.$lrc = W =
						Ne(
							[
								j(2, O.$P8),
								j(3, m.$iP),
								j(4, A.$Uyb),
								j(5, p.$YX),
								j(6, I.$Xxb),
								j(7, S.$6j),
								j(8, v.$gj),
								j(9, N.$r8),
								j(10, T.$uZ),
								j(11, C.$Li),
								j(12, E.$7qc),
								j(13, r.$lq),
							],
							W,
						));
				function X(ne, ee) {
					const _ = [];
					return (
						ee &&
							_.push(
								(0, g.$wj)({
									id: "hideAccounts",
									label: (0, t.localize)(3566, null),
									run: () => ie(ne, !1),
								}),
								new g.$tj(),
							),
						[
							..._,
							(0, g.$wj)({
								id: "toggle.hideAccounts",
								label: (0, t.localize)(3567, null),
								checked: Y(ne),
								run: () => ie(ne, !Y(ne)),
							}),
							(0, g.$wj)({
								id: "toggle.hideManage",
								label: (0, t.localize)(3568, null),
								checked: !0,
								enabled: !1,
								run: () => {
									throw new Error('"Manage" can not be hidden');
								},
							}),
						]
					);
				}
				function Y(ne) {
					return ne.getBoolean(
						G.ACCOUNTS_VISIBILITY_PREFERENCE_KEY,
						r.StorageScope.PROFILE,
						!0,
					);
				}
				function ie(ne, ee) {
					ne.store(
						G.ACCOUNTS_VISIBILITY_PREFERENCE_KEY,
						ee,
						r.StorageScope.PROFILE,
						r.StorageTarget.USER,
					);
				}
			},
		),
		