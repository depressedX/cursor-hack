import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../services/extensionRecommendations/common/extensionRecommendations.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../platform/environment/common/environment.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './exeBasedRecommendations.js';
import './workspaceRecommendations.js';
import './fileBasedRecommendations.js';
import './keymapRecommendations.js';
import './languageRecommendations.js';
import './configBasedRecommendations.js';
import '../../../../platform/extensionRecommendations/common/extensionRecommendations.js';
import '../../../../base/common/async.js';
import '../../../../base/common/uri.js';
import './webRecommendations.js';
import '../common/extensions.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import './remoteRecommendations.js';
import '../../../../platform/remote/common/remoteExtensionsScanner.js';
import '../../../services/userData/browser/userDataInit.js';
import '../../../../base/common/types.js';
define(
			de[3751],
			he([
				1, 0, 3, 119, 314, 5, 32, 24, 6, 113, 52, 3295, 3300, 3467, 3296, 3297,
				3294, 666, 15, 9, 3299, 141, 154, 3298, 951, 1041, 28,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*extensionManagement*/,
				w /*extensionRecommendations*/,
				E /*instantiation*/,
				C /*telemetry*/,
				d /*arrays*/,
				m /*event*/,
				r /*environment*/,
				u /*lifecycle*/,
				a /*exeBasedRecommendations*/,
				h /*workspaceRecommendations*/,
				c /*fileBasedRecommendations*/,
				n /*keymapRecommendations*/,
				g /*languageRecommendations*/,
				p /*configBasedRecommendations*/,
				o /*extensionRecommendations*/,
				f /*async*/,
				b /*uri*/,
				s /*webRecommendations*/,
				l /*extensions*/,
				y /*extensionManagementUtil*/,
				$ /*remoteRecommendations*/,
				v /*remoteExtensionsScanner*/,
				S /*userDataInit*/,
				I /*types*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OTc = void 0);
				let T = class extends t.$1c {
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						if (
							(super(),
							(this.r = L),
							(this.s = D),
							(this.t = M),
							(this.u = N),
							(this.w = A),
							(this.y = R),
							(this.z = O),
							(this.C = B),
							(this.F = U),
							(this.G = z),
							(this.q = this.D(new m.$re())),
							(this.onDidChangeRecommendations = this.q.event),
							(this.b = this.D(k.createInstance(h.$FTc))),
							(this.a = this.D(k.createInstance(c.$ITc))),
							(this.c = this.D(k.createInstance(p.$LTc))),
							(this.f = this.D(k.createInstance(a.$ETc))),
							(this.g = this.D(k.createInstance(n.$JTc))),
							(this.h = this.D(k.createInstance(s.$MTc))),
							(this.j = this.D(k.createInstance(g.$KTc))),
							(this.m = this.D(k.createInstance($.$NTc))),
							!this.I())
						) {
							(this.n = 0), (this.activationPromise = Promise.resolve());
							return;
						}
						(this.n = +new Date()),
							(this.activationPromise = this.H()),
							this.D(this.w.onDidInstallExtensions((F) => this.L(F)));
					}
					async H() {
						try {
							await Promise.allSettled([
								this.F.whenExtensionsReady(),
								this.G.whenInitializationFinished(),
								this.r.when(u.LifecyclePhase.Restored),
							]);
						} catch {}
						await Promise.all([
							this.b.activate(),
							this.c.activate(),
							this.a.activate(),
							this.g.activate(),
							this.j.activate(),
							this.h.activate(),
							this.m.activate(),
						]),
							this.D(
								m.Event.any(
									this.b.onDidChangeRecommendations,
									this.c.onDidChangeRecommendations,
									this.y.onDidChangeIgnoredRecommendations,
								)(() => this.q.fire()),
							),
							this.D(
								this.y.onDidChangeGlobalIgnoredRecommendation(
									({ extensionId: k, isRecommended: L }) => {
										if (!L) {
											const D = this.getAllRecommendationsWithReason()[k];
											D &&
												D.reasonId &&
												this.t.publicLog2(
													"extensionsRecommendations:ignoreRecommendation",
													{ extensionId: k, recommendationReason: D.reasonId },
												);
										}
									},
								),
							),
							this.O();
					}
					I() {
						return this.s.isEnabled() && !this.u.isExtensionDevelopment;
					}
					async J() {
						await Promise.all([this.f.activate(), this.c.activate()]);
					}
					getAllRecommendationsWithReason() {
						this.J();
						const k = Object.create(null),
							L = [
								...this.c.recommendations,
								...this.f.recommendations,
								...this.a.recommendations,
								...this.b.recommendations,
								...this.g.recommendations,
								...this.j.recommendations,
								...this.h.recommendations,
							];
						for (const { extension: D, reason: M } of L)
							(0, I.$lg)(D) && this.N(D) && (k[D.toLowerCase()] = M);
						return k;
					}
					async getConfigBasedRecommendations() {
						return (
							await this.c.activate(),
							{
								important: this.M(this.c.importantRecommendations),
								others: this.M(this.c.otherRecommendations),
							}
						);
					}
					async getOtherRecommendations() {
						await this.activationPromise, await this.J();
						const k = [
								...this.c.otherRecommendations,
								...this.f.otherRecommendations,
								...this.h.recommendations,
							],
							L = this.M(k);
						return (0, d.$1b)(L, this.n), L;
					}
					async getImportantRecommendations() {
						await this.J();
						const k = [
								...this.a.importantRecommendations,
								...this.c.importantRecommendations,
								...this.f.importantRecommendations,
							],
							L = this.M(k);
						return (0, d.$1b)(L, this.n), L;
					}
					getKeymapRecommendations() {
						return this.M(this.g.recommendations);
					}
					getLanguageRecommendations() {
						return this.M(this.j.recommendations);
					}
					getRemoteRecommendations() {
						return this.M(this.m.recommendations);
					}
					async getWorkspaceRecommendations() {
						if (!this.I()) return [];
						await this.b.activate();
						const k = [];
						for (const { extension: L } of this.b.recommendations)
							(0, I.$lg)(L)
								? !k.includes(L.toLowerCase()) &&
									this.N(L) &&
									k.push(L.toLowerCase())
								: k.push(L);
						return k;
					}
					async getExeBasedRecommendations(k) {
						await this.f.activate();
						const { important: L, others: D } = k
							? this.f.getRecommendations(k)
							: {
									important: this.f.importantRecommendations,
									others: this.f.otherRecommendations,
								};
						return { important: this.M(L), others: this.M(D) };
					}
					getFileBasedRecommendations() {
						return this.M(this.a.recommendations);
					}
					L(k) {
						for (const L of k)
							if (
								L.source &&
								!b.URI.isUri(L.source) &&
								L.operation === i.InstallOperation.Install
							) {
								const M = (this.getAllRecommendationsWithReason() || {})[
									L.source.identifier.id.toLowerCase()
								];
								M &&
									this.t.publicLog("extensionGallery:install:recommendations", {
										...L.source.telemetryData,
										recommendationReason: M.reasonId,
									});
							}
					}
					M(k) {
						const L = [];
						for (const { extension: D } of k)
							(0, I.$lg)(D) &&
								this.N(D) &&
								!L.includes(D.toLowerCase()) &&
								L.push(D.toLowerCase());
						return L;
					}
					N(k) {
						return !this.y.ignoredRecommendations.includes(k.toLowerCase());
					}
					async O() {
						const k = await this.C.queryLocal(),
							L = [
								...this.b.recommendations,
								...this.c.importantRecommendations.filter(
									(D) =>
										!D.whenNotInstalled ||
										D.whenNotInstalled.every((M) =>
											k.every((N) => !(0, y.$7p)(N.identifier, { id: M })),
										),
								),
							]
								.map(({ extension: D }) => D)
								.filter((D) => !(0, I.$lg)(D) || this.N(D));
						L.length &&
							(await this.P((0, f.$Nh)(5e3)),
							await this.z.promptWorkspaceRecommendations(L));
					}
					P(k) {
						return this.D((0, t.$Yc)(() => k.cancel())), k;
					}
				};
				(e.$OTc = T),
					(e.$OTc = T =
						Ne(
							[
								j(0, E.$Li),
								j(1, u.$n6),
								j(2, i.$Ep),
								j(3, C.$km),
								j(4, r.$Ti),
								j(5, i.$Hp),
								j(6, w.$0Qb),
								j(7, o.$HTc),
								j(8, l.$MQb),
								j(9, v.$bfb),
								j(10, S.$mwc),
							],
							T,
						));
			},
		),
		