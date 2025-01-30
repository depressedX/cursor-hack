import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/extensionRecommendations/common/extensionRecommendations.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import './extensionsActions.js';
import '../common/extensions.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/extensionRecommendations/common/extensionRecommendations.js';
define(
			de[4076],
			he([
				1, 0, 24, 15, 33, 29, 6, 3, 28, 4, 10, 154, 666, 5, 40, 21, 32, 68, 150,
				404, 141, 78, 157, 314,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*async*/,
				w /*cancellation*/,
				E /*errors*/,
				C /*event*/,
				d /*lifecycle*/,
				m /*types*/,
				r /*nls*/,
				u /*configuration*/,
				a /*extensionManagementUtil*/,
				h /*extensionRecommendations*/,
				c /*instantiation*/,
				n /*notification*/,
				g /*storage*/,
				p /*telemetry*/,
				o /*uriIdentity*/,
				f /*userDataSync*/,
				b /*extensionsActions*/,
				s /*extensions*/,
				l /*environmentService*/,
				y /*extensionManagement*/,
				$ /*extensionRecommendations*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TTc = void 0);
				const v = "extensionsAssistant/importantRecommendationsIgnore",
					S = "extensionsAssistant/workspaceRecommendationsIgnore";
				class I extends d.$1c {
					constructor(k, L, D, M) {
						super(),
							(this.h = k),
							(this.j = L),
							(this.m = D),
							(this.n = M),
							(this.a = this.D(new C.$re())),
							(this.onDidClose = this.a.event),
							(this.b = this.D(new C.$re())),
							(this.onDidChangeVisibility = this.b.event),
							(this.g = !1),
							(this.q = this.D(new d.$2c())),
							(this.s = this.D(new d.$2c()));
					}
					show() {
						this.f ||
							this.t(
								this.n.prompt(this.h, this.j, this.m, {
									sticky: !0,
									onCancel: () => (this.g = !0),
								}),
							);
					}
					hide() {
						this.f &&
							(this.q.clear(),
							this.f.close(),
							(this.g = !1),
							this.t(
								this.n.prompt(this.h, this.j, this.m, {
									priority: n.NotificationPriority.SILENT,
									onCancel: () => (this.g = !0),
								}),
							));
					}
					isCancelled() {
						return this.g;
					}
					t(k) {
						this.q.clear(),
							this.s.clear(),
							(this.f = k),
							(this.q.value = this.f.onDidClose(() => {
								this.q.dispose(),
									this.s.dispose(),
									this.a.fire(),
									this.a.dispose(),
									this.b.dispose();
							})),
							(this.s.value = this.f.onDidChangeVisibility((L) =>
								this.b.fire(L),
							));
					}
				}
				let T = class extends d.$1c {
					get ignoredRecommendations() {
						return (0, t.$Qb)(
							[...JSON.parse(this.m.get(v, g.StorageScope.PROFILE, "[]"))].map(
								(k) => k.toLowerCase(),
							),
						);
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z, F) {
						super(),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.z = U),
							(this.C = z),
							(this.F = F),
							(this.a = []),
							(this.b = []),
							(this.h = []);
					}
					hasToIgnoreRecommendationNotifications() {
						const k = this.j.getValue("extensions");
						return (
							k.ignoreRecommendations || !!k.showRecommendationsOnlyOnDemand
						);
					}
					async promptImportantExtensionsInstallNotification(k) {
						const L = [
								...this.y.ignoredRecommendations,
								...this.ignoredRecommendations,
							],
							D = k.extensions.filter((M) => !L.includes(M));
						return D.length
							? this.G(
									{ ...k, extensions: D },
									{
										onDidInstallRecommendedExtensions: (M) =>
											M.forEach((N) =>
												this.q.publicLog2("extensionRecommendations:popup", {
													userReaction: "install",
													extensionId: N.identifier.id,
													source: (0, h.$GTc)(k.source),
												}),
											),
										onDidShowRecommendedExtensions: (M) =>
											M.forEach((N) =>
												this.q.publicLog2("extensionRecommendations:popup", {
													userReaction: "show",
													extensionId: N.identifier.id,
													source: (0, h.$GTc)(k.source),
												}),
											),
										onDidCancelRecommendedExtensions: (M) =>
											M.forEach((N) =>
												this.q.publicLog2("extensionRecommendations:popup", {
													userReaction: "cancelled",
													extensionId: N.identifier.id,
													source: (0, h.$GTc)(k.source),
												}),
											),
										onDidNeverShowRecommendedExtensionsAgain: (M) => {
											for (const N of M)
												this.R(N.identifier.id),
													this.q.publicLog2("extensionRecommendations:popup", {
														userReaction: "neverShowAgain",
														extensionId: N.identifier.id,
														source: (0, h.$GTc)(k.source),
													});
											this.n.prompt(
												n.Severity.Info,
												(0, r.localize)(6081, null),
												[
													{
														label: (0, r.localize)(6082, null),
														run: () => this.S(!0),
													},
													{
														label: (0, r.localize)(6083, null),
														run: () => this.S(!1),
													},
												],
											);
										},
									},
								)
							: h.RecommendationsNotificationResult.Ignored;
					}
					async promptWorkspaceRecommendations(k) {
						if (this.m.getBoolean(S, g.StorageScope.WORKSPACE, !1)) return;
						let L = await this.u.getInstalled();
						(L = L.filter(
							(D) =>
								this.w.getEnablementState(D) !==
								y.EnablementState.DisabledByExtensionKind,
						)),
							(k = k.filter((D) =>
								L.every((M) =>
									(0, m.$lg)(D)
										? !(0, a.$7p)({ id: D }, M.identifier)
										: !this.F.extUri.isEqual(D, M.location),
								),
							)),
							k.length &&
								(await this.G(
									{
										extensions: k,
										source: h.RecommendationSource.WORKSPACE,
										name: (0, r.localize)(6084, null),
									},
									{
										onDidInstallRecommendedExtensions: () =>
											this.q.publicLog2(
												"extensionWorkspaceRecommendations:popup",
												{ userReaction: "install" },
											),
										onDidShowRecommendedExtensions: () =>
											this.q.publicLog2(
												"extensionWorkspaceRecommendations:popup",
												{ userReaction: "show" },
											),
										onDidCancelRecommendedExtensions: () =>
											this.q.publicLog2(
												"extensionWorkspaceRecommendations:popup",
												{ userReaction: "cancelled" },
											),
										onDidNeverShowRecommendedExtensionsAgain: () => {
											this.q.publicLog2(
												"extensionWorkspaceRecommendations:popup",
												{ userReaction: "neverShowAgain" },
											),
												this.m.store(
													S,
													!0,
													g.StorageScope.WORKSPACE,
													g.StorageTarget.MACHINE,
												);
										},
									},
								));
					}
					async G({ extensions: k, source: L, name: D, searchValue: M }, N) {
						if (this.hasToIgnoreRecommendationNotifications())
							return h.RecommendationsNotificationResult.Ignored;
						if (L === h.RecommendationSource.EXE && this.C.remoteAuthority)
							return h.RecommendationsNotificationResult.IncompatibleWindow;
						if (
							L === h.RecommendationSource.EXE &&
							(this.b.includes(h.RecommendationSource.EXE) ||
								this.b.length >= 2)
						)
							return h.RecommendationsNotificationResult.TooMany;
						if (
							(this.b.push(L),
							L === h.RecommendationSource.EXE &&
								k.every((U) => (0, m.$lg)(U) && this.a.includes(U)))
						)
							return h.RecommendationsNotificationResult.Ignored;
						const A = await this.P(k);
						if (!A.length) return h.RecommendationsNotificationResult.Ignored;
						this.a = (0, t.$Qb)([...this.a, ...k.filter(m.$lg)]);
						let R = "";
						if (A.length === 1)
							R = (0, r.localize)(
								6085,
								null,
								A[0].displayName,
								A[0].publisherDisplayName,
							);
						else {
							const U = [
								...A.reduce((z, F) => z.add(F.publisherDisplayName), new Set()),
							];
							U.length > 2
								? (R = (0, r.localize)(6086, null, U[0], U[1]))
								: U.length === 2
									? (R = (0, r.localize)(6087, null, U[0], U[1]))
									: (R = (0, r.localize)(6088, null, U[0]));
						}
						let O = (0, r.localize)(6089, null, R, D);
						L === h.RecommendationSource.EXE &&
							(O = (0, r.localize)(6090, null, D, R)),
							M ||
								(M =
									L === h.RecommendationSource.WORKSPACE
										? "@recommended"
										: A.map((U) => `@id:${U.identifier.id}`).join(" "));
						const B =
							L === h.RecommendationSource.WORKSPACE
								? (0, r.localize)(6091, null)
								: A.length > 1
									? (0, r.localize)(6092, null)
									: (0, r.localize)(6093, null);
						return (0, i.$Ch)([
							this.U(this.H(A, O, M, B, L, N)),
							this.U(this.I(A)),
						]);
					}
					H(
						k,
						L,
						D,
						M,
						N,
						{
							onDidInstallRecommendedExtensions: A,
							onDidShowRecommendedExtensions: R,
							onDidCancelRecommendedExtensions: O,
							onDidNeverShowRecommendedExtensionsAgain: B,
						},
					) {
						return (0, i.$zh)(async (U) => {
							let z = !1;
							const F = [],
								x = async (H) => {
									this.Q(this.s.createInstance(b.$NTb, D)), A(k);
									const q = [],
										V = [];
									for (const G of k)
										G.gallery
											? q.push(G.gallery)
											: G.resourceExtension && V.push(G);
									await i.Promises.settled([
										i.Promises.settled(
											k.map((G) => this.t.open(G, { pinned: !0 })),
										),
										q.length
											? this.u.installGalleryExtensions(
													q.map((G) => ({
														extension: G,
														options: { isMachineScoped: H },
													})),
												)
											: Promise.resolve(),
										V.length
											? Promise.allSettled(V.map((G) => this.t.install(G)))
											: Promise.resolve(),
									]);
								};
							F.push({
								label: (0, r.localize)(6094, null),
								run: () => x(!1),
								menu:
									this.z.isEnabled() &&
									this.z.isResourceEnabled(f.SyncResource.Extensions)
										? [{ label: (0, r.localize)(6095, null), run: () => x(!0) }]
										: void 0,
							}),
								F.push(
									{
										label: (0, r.localize)(6096, null),
										run: async () => {
											R(k);
											for (const H of k) this.t.open(H, { pinned: !0 });
											this.Q(this.s.createInstance(b.$NTb, D));
										},
									},
									{
										label: M,
										isSecondary: !0,
										run: () => {
											B(k);
										},
									},
								);
							try {
								z = await this.J(n.Severity.Info, L, F, N, U);
							} catch (H) {
								if (!(0, E.$8)(H)) throw H;
							}
							return z
								? h.RecommendationsNotificationResult.Accepted
								: (O(k), h.RecommendationsNotificationResult.Cancelled);
						});
					}
					I(k) {
						const L = [],
							D = new d.$Zc();
						return (0, i.$zh)(
							async (M) => (
								D.add(M.onCancellationRequested((N) => D.dispose())),
								new Promise((N, A) => {
									D.add(
										this.u.onInstallExtension((R) => {
											L.push(R.identifier.id.toLowerCase()),
												k.every((O) =>
													L.includes(O.identifier.id.toLowerCase()),
												) && N(h.RecommendationsNotificationResult.Accepted);
										}),
									);
								})
							),
						);
					}
					async J(k, L, D, M, N) {
						const A = new d.$Zc();
						try {
							const R = A.add(new I(k, L, D, this.n));
							if (
								(A.add(
									C.Event.once(
										C.Event.filter(R.onDidChangeVisibility, (O) => !O),
									)(() => this.L()),
								),
								this.g)
							) {
								const O = this.h.length;
								A.add(N.onCancellationRequested(() => this.h.splice(O, 1))),
									this.h.push({
										recommendationsNotification: R,
										source: M,
										token: N,
									}),
									M !== h.RecommendationSource.EXE &&
										M <= this.g.source &&
										this.N(3e3);
							} else
								(this.g = {
									recommendationsNotification: R,
									source: M,
									from: Date.now(),
								}),
									R.show();
							return (
								await (0, i.$Ah)(
									new Promise((O) => A.add(C.Event.once(R.onDidClose)(O))),
									N,
								),
								!R.isCancelled()
							);
						} finally {
							A.dispose();
						}
					}
					L() {
						const k = this.M(),
							[L] = k > -1 ? this.h.splice(k, 1) : [];
						(0, i.$Nh)(L ? 500 : 0).then(() => {
							this.O(),
								L &&
									((this.g = {
										recommendationsNotification: L.recommendationsNotification,
										source: L.source,
										from: Date.now(),
									}),
									L.recommendationsNotification.show());
						});
					}
					M() {
						let k = this.h.length - 1;
						if (this.h.length)
							for (let L = 0; L < this.h.length; L++)
								this.h[L].source <= this.h[k].source && (k = L);
						return k;
					}
					N(k) {
						if (this.g && !this.f) {
							const L = this.g;
							(this.f = (0, i.$Nh)(Math.max(k - (Date.now() - L.from), 0))),
								this.f.then(() => L.recommendationsNotification.hide());
						}
					}
					O() {
						this.f?.cancel(), (this.f = void 0), (this.g = void 0);
					}
					async P(k) {
						const L = [];
						if (k.length) {
							const D = [],
								M = [];
							for (const N of k) typeof N == "string" ? D.push(N) : M.push(N);
							if (D.length) {
								const N = await this.t.getExtensions(
									D.map((A) => ({ id: A })),
									{ source: "install-recommendations" },
									w.CancellationToken.None,
								);
								for (const A of N)
									A.gallery &&
										(await this.u.canInstall(A.gallery)) &&
										L.push(A);
							}
							if (M.length) {
								const N = await this.t.getResourceExtensions(M, !0);
								for (const A of N) (await this.t.canInstall(A)) && L.push(A);
							}
						}
						return L;
					}
					async Q(k) {
						try {
							await k.run();
						} finally {
							(0, d.$Uc)(k) && k.dispose();
						}
					}
					R(k) {
						const L = [...this.ignoredRecommendations];
						L.includes(k.toLowerCase()) ||
							(L.push(k.toLowerCase()),
							this.m.store(
								v,
								JSON.stringify(L),
								g.StorageScope.PROFILE,
								g.StorageTarget.USER,
							));
					}
					S(k) {
						this.j.updateValue("extensions.ignoreRecommendations", k);
					}
					U(k) {
						return this.D((0, d.$Yc)(() => k.cancel())), k;
					}
				};
				(e.$TTc = T),
					(e.$TTc = T =
						Ne(
							[
								j(0, u.$gj),
								j(1, g.$lq),
								j(2, n.$4N),
								j(3, p.$km),
								j(4, c.$Li),
								j(5, s.$MQb),
								j(6, y.$GQb),
								j(7, y.$IQb),
								j(8, $.$0Qb),
								j(9, f.$4Rb),
								j(10, l.$r8),
								j(11, o.$Vl),
							],
							T,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	