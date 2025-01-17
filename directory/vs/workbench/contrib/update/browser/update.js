import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../services/activity/common/activity.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/update/common/update.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../services/environment/browser/environmentService.js';
import './releaseNotesEditor.js';
import '../../../../base/common/platform.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../../base/common/async.js';
import '../../../services/userDataSync/common/userDataSync.js';
import '../../../../base/common/event.js';
import '../../../../base/common/actions.js';
define(
		de[3793],
		he([
			1, 0, 4, 111, 3, 9, 260, 5, 41, 21, 415, 40, 57, 286, 3777, 12, 10, 8, 11,
			31, 87, 62, 150, 179, 15, 522, 6, 50,
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
		) {
			"use strict";
			var P;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hYc = e.$gYc = e.$fYc = e.$dYc = e.$cYc = e.$bYc = e.$aYc = void 0),
				(e.$eYc = L),
				(t = mt(t)),
				(i = xi(i)),
				(e.$aYc = new o.$5j("updateState", u.StateType.Uninitialized)),
				(e.$bYc = new o.$5j("majorMinorUpdateAvailable", !1)),
				(e.$cYc = new o.$5j("releaseNotesUrl", "")),
				(e.$dYc = new o.$5j("downloadUrl", ""));
			let k;
			function L(U, z, F) {
				return k || (k = U.createInstance(n.$_Xc)), k.show(z, F);
			}
			async function D(U) {
				const z = U.get(m.$7rb),
					F = U.get(l.$Bk);
				if (F.releaseNotesUrl) {
					const x = E.URI.parse(F.releaseNotesUrl);
					await z.open(x);
				} else throw new Error(t.localize(11073, null, F.nameLong));
			}
			async function M(U, z) {
				const F = U.get(d.$Li);
				try {
					await L(F, z, !1);
				} catch (x) {
					try {
						await F.invokeFunction(D);
					} catch (H) {
						throw new Error(`${x.message} and ${H.message}`);
					}
				}
			}
			function N(U) {
				const z = /([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(U);
				if (z)
					return {
						major: parseInt(z[1]),
						minor: parseInt(z[2]),
						patch: parseInt(z[3]),
					};
			}
			function A(U, z) {
				return U.major < z.major || U.minor < z.minor;
			}
			let R = class {
				static {
					P = this;
				}
				static {
					this.a = "releaseNotes/lastVersion";
				}
				constructor(z, F, x, H, q, V, G, K, J) {
					K.releaseNotesUrl && e.$cYc.bindTo(J).set(K.releaseNotesUrl),
						K.downloadUrl && e.$dYc.bindTo(J).set(K.downloadUrl),
						!g.$r &&
							G.hadLastFocus().then(async (W) => {
								if (!W) return;
								const X = N(z.get(P.a, r.StorageScope.APPLICATION, "")),
									Y = N(K.version),
									ie = V.getValue("update.showReleaseNotes"),
									ne = K.releaseNotesUrl;
								ie &&
									!H.skipReleaseNotes &&
									ne &&
									X &&
									Y &&
									A(X, Y) &&
									L(F, K.version, !1).then(void 0, () => {
										x.prompt(
											i.default.Info,
											t.localize(11074, null, K.nameLong, K.version),
											[
												{
													label: t.localize(11075, null),
													run: () => {
														const ee = E.URI.parse(ne);
														q.open(ee);
													},
												},
											],
										);
									}),
									z.store(
										P.a,
										K.version,
										r.StorageScope.APPLICATION,
										r.StorageTarget.MACHINE,
									);
							});
				}
			};
			(e.$fYc = R),
				(e.$fYc =
					R =
					P =
						Ne(
							[
								j(0, r.$lq),
								j(1, d.$Li),
								j(2, a.$4N),
								j(3, c.$5rb),
								j(4, m.$7rb),
								j(5, p.$gj),
								j(6, s.$asb),
								j(7, l.$Bk),
								j(8, o.$6j),
							],
							R,
						));
			let O = class extends w.$1c {
				constructor(z, F, x, H, q, V, G, K, J, W, X) {
					super(),
						(this.g = z),
						(this.h = F),
						(this.j = x),
						(this.m = H),
						(this.n = q),
						(this.q = V),
						(this.r = G),
						(this.s = K),
						(this.t = J),
						(this.u = W),
						(this.w = X),
						(this.b = this.D(new w.$2c())),
						(this.a = q.state),
						(this.c = e.$aYc.bindTo(this.r)),
						(this.f = e.$bYc.bindTo(this.r)),
						this.D(q.onStateChange(this.y, this)),
						this.y(this.n.state);
					const Y = this.s.commit,
						ie = this.g.get(
							"update/lastKnownVersion",
							r.StorageScope.APPLICATION,
						);
					Y !== ie &&
						(this.g.remove(
							"update/lastKnownVersion",
							r.StorageScope.APPLICATION,
						),
						this.g.remove(
							"update/updateNotificationTime",
							r.StorageScope.APPLICATION,
						)),
						this.J();
				}
				async y(z) {
					switch ((this.c.set(z.type), z.type)) {
						case u.StateType.Disabled:
							z.reason === u.DisablementReason.RunningAsAdmin &&
								this.j.notify({
									severity: a.Severity.Info,
									message: t.localize(11076, null, this.s.nameLong),
									actions: {
										primary: [
											new T.$rj(
												"",
												t.localize(11077, null),
												void 0,
												void 0,
												() => {
													this.t.open("https://aka.ms/vscode-windows-setup");
												},
											),
										],
									},
									neverShowAgain: { id: "no-updates-running-as-admin" },
								});
							break;
						case u.StateType.Idle:
							z.error
								? this.z(z.error)
								: this.a.type === u.StateType.CheckingForUpdates &&
									this.a.explicit &&
									(await this.w.hadLastFocus()) &&
									this.C();
							break;
						case u.StateType.AvailableForDownload:
							this.F(z.update);
							break;
						case u.StateType.Downloaded:
							this.G(z.update);
							break;
						case u.StateType.Ready: {
							const H = z.update.productVersion;
							if (H) {
								const q = N(this.s.version),
									V = N(H);
								this.f.set(!!(q && V && A(q, V))), this.H(z.update);
							}
							break;
						}
					}
					let F, x;
					z.type === u.StateType.AvailableForDownload ||
					z.type === u.StateType.Downloaded ||
					z.type === u.StateType.Ready
						? (F = new C.$8qc(1, () =>
								t.localize(11078, null, this.s.nameShort),
							))
						: z.type === u.StateType.CheckingForUpdates
							? ((F = new C.$0qc(() => t.localize(11079, null))), (x = 1))
							: z.type === u.StateType.Downloading
								? ((F = new C.$0qc(() => t.localize(11080, null))), (x = 1))
								: z.type === u.StateType.Updating &&
									((F = new C.$0qc(() => t.localize(11081, null))), (x = 1)),
						this.b.clear(),
						F &&
							(this.b.value = this.q.showGlobalActivity({
								badge: F,
								priority: x,
							})),
						(this.a = z);
				}
				z(z) {
					/The request timed out|The network connection was lost/i.test(z) ||
						((z = z.replace(
							/See https:\/\/github\.com\/Squirrel\/Squirrel\.Mac\/issues\/182 for more information/,
							"This might mean the application was put on quarantine by macOS. See [this link](https://github.com/microsoft/vscode/issues/7426#issuecomment-425093469) for more information",
						)),
						this.j.notify({
							severity: a.Severity.Error,
							message: z,
							source: t.localize(11082, null),
						}));
				}
				C() {
					this.m.info(t.localize(11083, null));
				}
				F(z) {
					if (!this.I()) return;
					const F = z.productVersion;
					F &&
						this.j.prompt(i.default.Info, t.localize(11084, null), [
							{
								label: t.localize(11085, null),
								run: () => this.n.downloadUpdate(),
							},
							{ label: t.localize(11086, null), run: () => {} },
							{
								label: t.localize(11087, null),
								run: () => {
									this.h.invokeFunction((x) => M(x, F));
								},
							},
						]);
				}
				G(z) {
					if (
						g.$m ||
						(this.u.getValue("update.enableWindowsBackgroundUpdates") &&
							this.s.target === "user") ||
						!this.I()
					)
						return;
					const F = z.productVersion;
					F &&
						this.j.prompt(
							i.default.Info,
							t.localize(11088, null, this.s.nameLong, F),
							[
								{
									label: t.localize(11089, null),
									run: () => this.n.applyUpdate(),
								},
								{ label: t.localize(11090, null), run: () => {} },
								{
									label: t.localize(11091, null),
									run: () => {
										this.h.invokeFunction((x) => M(x, F));
									},
								},
							],
						);
				}
				H(z) {
					if (!(g.$l && this.s.target !== "user") && !this.I()) return;
					const F = [
							{
								label: t.localize(11092, null),
								run: () => this.n.quitAndInstall(),
							},
							{ label: t.localize(11093, null), run: () => {} },
						],
						x = z.productVersion;
					x &&
						F.push({
							label: t.localize(11094, null),
							run: () => {
								this.h.invokeFunction((H) => M(H, x));
							},
						}),
						this.j.prompt(
							i.default.Info,
							t.localize(11095, null, this.s.nameLong),
							F,
							{ sticky: !0 },
						);
				}
				I() {
					const z = this.s.commit,
						F = new Date().getTime(),
						x = this.g.get(
							"update/lastKnownVersion",
							r.StorageScope.APPLICATION,
						);
					z !== x &&
						(this.g.store(
							"update/lastKnownVersion",
							z,
							r.StorageScope.APPLICATION,
							r.StorageTarget.MACHINE,
						),
						this.g.store(
							"update/updateNotificationTime",
							F,
							r.StorageScope.APPLICATION,
							r.StorageTarget.MACHINE,
						));
					const H = this.g.getNumber(
						"update/updateNotificationTime",
						r.StorageScope.APPLICATION,
						F,
					);
					return (F - H) / (1e3 * 60 * 60 * 24) > 5;
				}
				J() {
					b.$fk.registerCommand("update.check", () =>
						this.n.checkForUpdates(!0),
					),
						f.$ZX.appendMenuItem(f.$XX.GlobalActivity, {
							group: "7_update",
							command: { id: "update.check", title: t.localize(11096, null) },
							when: e.$aYc.isEqualTo(u.StateType.Idle),
						}),
						b.$fk.registerCommand("update.checking", () => {}),
						f.$ZX.appendMenuItem(f.$XX.GlobalActivity, {
							group: "7_update",
							command: {
								id: "update.checking",
								title: t.localize(11097, null),
								precondition: o.$Kj.false(),
							},
							when: e.$aYc.isEqualTo(u.StateType.CheckingForUpdates),
						}),
						b.$fk.registerCommand("update.downloadNow", () =>
							this.n.downloadUpdate(),
						),
						f.$ZX.appendMenuItem(f.$XX.GlobalActivity, {
							group: "7_update",
							command: {
								id: "update.downloadNow",
								title: t.localize(11098, null),
							},
							when: e.$aYc.isEqualTo(u.StateType.AvailableForDownload),
						}),
						b.$fk.registerCommand("update.downloading", () => {}),
						f.$ZX.appendMenuItem(f.$XX.GlobalActivity, {
							group: "7_update",
							command: {
								id: "update.downloading",
								title: t.localize(11099, null),
								precondition: o.$Kj.false(),
							},
							when: e.$aYc.isEqualTo(u.StateType.Downloading),
						}),
						b.$fk.registerCommand("update.install", () => this.n.applyUpdate()),
						f.$ZX.appendMenuItem(f.$XX.GlobalActivity, {
							group: "7_update",
							command: { id: "update.install", title: t.localize(11100, null) },
							when: e.$aYc.isEqualTo(u.StateType.Downloaded),
						}),
						b.$fk.registerCommand("update.updating", () => {}),
						f.$ZX.appendMenuItem(f.$XX.GlobalActivity, {
							group: "7_update",
							command: {
								id: "update.updating",
								title: t.localize(11101, null),
								precondition: o.$Kj.false(),
							},
							when: e.$aYc.isEqualTo(u.StateType.Updating),
						}),
						this.s.quality === "stable" &&
							(b.$fk.registerCommand("update.showUpdateReleaseNotes", () => {
								if (this.n.state.type !== u.StateType.Ready) return;
								const z = this.n.state.update.productVersion;
								z && this.h.invokeFunction((F) => M(F, z));
							}),
							f.$ZX.appendMenuItem(f.$XX.GlobalActivity, {
								group: "7_update",
								order: 1,
								command: {
									id: "update.showUpdateReleaseNotes",
									title: t.localize(11102, null),
								},
								when: o.$Kj.and(e.$aYc.isEqualTo(u.StateType.Ready), e.$bYc),
							})),
						b.$fk.registerCommand("update.restart", () =>
							this.n.quitAndInstall(),
						),
						f.$ZX.appendMenuItem(f.$XX.GlobalActivity, {
							group: "7_update",
							order: 2,
							command: { id: "update.restart", title: t.localize(11103, null) },
							when: e.$aYc.isEqualTo(u.StateType.Ready),
						}),
						b.$fk.registerCommand("_update.state", () => this.a);
				}
			};
			(e.$gYc = O),
				(e.$gYc = O =
					Ne(
						[
							j(0, r.$lq),
							j(1, d.$Li),
							j(2, a.$4N),
							j(3, h.$GO),
							j(4, u.$_rb),
							j(5, C.$7qc),
							j(6, o.$6j),
							j(7, l.$Bk),
							j(8, m.$7rb),
							j(9, p.$gj),
							j(10, s.$asb),
						],
						O,
					));
			let B = class extends w.$1c {
				constructor(z, F) {
					super(), (this.a = z), (this.b = F), this.c();
				}
				c() {
					const z = this.a.quality,
						F = this.b.options?.productQualityChangeHandler;
					if (F && (z === "stable" || z === "insider")) {
						const x = z === "stable" ? "insider" : "stable",
							H = `update.switchQuality.${x}`,
							q = x === "insider";
						this.D(
							(0, f.$4X)(
								class extends f.$3X {
									constructor() {
										super({
											id: H,
											title: q
												? t.localize(11104, null)
												: t.localize(11105, null),
											precondition: $.$7Lb,
											menu: {
												id: f.$XX.GlobalActivity,
												when: $.$7Lb,
												group: "7_update",
											},
										});
									}
									async run(G) {
										const K = G.get(h.$GO),
											J = G.get(y.$4Rb),
											W = G.get(y.$SRb),
											X = G.get(r.$lq),
											Y = G.get(S.$Nxc),
											ie = G.get(y.$5Rb),
											ne = G.get(a.$4N);
										try {
											const ee =
													"switchQuality.selectSettingsSyncServiceDialogShown",
												_ = W.userDataSyncStore;
											let te;
											if (
												_ &&
												q &&
												J.isEnabled() &&
												!X.getBoolean(ee, r.StorageScope.APPLICATION, !1)
											) {
												if (((te = await this.a(K)), !te)) return;
												X.store(
													ee,
													!0,
													r.StorageScope.APPLICATION,
													r.StorageTarget.USER,
												),
													te === "stable" && (await W.switch(te));
											}
											if (
												(
													await K.confirm({
														type: "info",
														message: t.localize(11106, null),
														detail:
															x === "insider"
																? t.localize(11107, null)
																: t.localize(11108, null),
														primaryButton: t.localize(11109, null),
													})
												).confirmed
											) {
												const Z = [];
												ie.status === y.SyncStatus.Syncing &&
													Z.push(
														I.Event.toPromise(
															I.Event.filter(
																ie.onDidChangeStatus,
																(se) => se !== y.SyncStatus.Syncing,
															),
														),
													),
													q &&
														te &&
														Z.push(Y.synchroniseUserDataSyncStoreType()),
													await v.Promises.settled(Z),
													F(x);
											} else te && X.remove(ee, r.StorageScope.APPLICATION);
										} catch (ee) {
											ne.error(ee);
										}
									}
									async a(G) {
										const { result: K } = await G.prompt({
											type: a.Severity.Info,
											message: t.localize(11110, null),
											detail: t.localize(11111, null),
											buttons: [
												{
													label: t.localize(11112, null),
													run: () => "insiders",
												},
												{ label: t.localize(11113, null), run: () => "stable" },
											],
											cancelButton: !0,
										});
										return K;
									}
								},
							),
						);
					}
				}
			};
			(e.$hYc = B), (e.$hYc = B = Ne([j(0, l.$Bk), j(1, c.$5rb)], B));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	