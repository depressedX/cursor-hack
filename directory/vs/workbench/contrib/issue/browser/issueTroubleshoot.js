import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/product/common/productService.js';
import '../common/issue.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../services/extensionManagement/browser/extensionBisect.js';
import '../../../../platform/notification/common/notification.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/uri.js';
import '../../../common/contextkeys.js';
import '../../../../platform/contextkey/common/contextkeys.js';
define(
			de[3754],
			he([
				1, 0, 4, 119, 109, 62, 376, 3, 11, 133, 57, 1834, 40, 157, 87, 129, 5,
				99, 20, 8, 30, 55, 52, 21, 41, 9, 100, 179,
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
				var P, k;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const L = (0, p.$Mi)("ITroubleshootIssueService");
				var D;
				(function (R) {
					(R[(R.EXTENSIONS = 1)] = "EXTENSIONS"),
						(R[(R.WORKBENCH = 2)] = "WORKBENCH");
				})(D || (D = {}));
				class M {
					static fromJSON(O) {
						if (O)
							try {
								const B = JSON.parse(O);
								if (
									(B.stage === D.EXTENSIONS || B.stage === D.WORKBENCH) &&
									typeof B.profile == "string"
								)
									return new M(B.stage, B.profile);
							} catch {}
					}
					constructor(O, B) {
						(this.stage = O), (this.profile = B);
					}
				}
				let N = class extends d.$1c {
					static {
						P = this;
					}
					static {
						this.storageKey = "issueTroubleshootState";
					}
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X) {
						super(),
							(this.b = O),
							(this.f = B),
							(this.g = U),
							(this.h = z),
							(this.j = F),
							(this.m = x),
							(this.n = H),
							(this.q = q),
							(this.r = V),
							(this.s = G),
							(this.t = K),
							(this.u = J),
							(this.w = W),
							(this.y = X);
					}
					isActive() {
						return this.state !== void 0;
					}
					async start() {
						if (this.isActive()) throw new Error("invalid state");
						if (
							!(
								await this.j.confirm({
									message: (0, t.localize)(7249, null),
									detail: (0, t.localize)(7250, null, this.t.nameLong),
									primaryButton: (0, t.localize)(7251, null),
									custom: !0,
								})
							).confirmed
						)
							return;
						const B = this.b.currentProfile;
						await this.h.createTroubleshootProfile(),
							(this.state = new M(D.EXTENSIONS, B.id)),
							await this.resume();
					}
					async resume() {
						this.isActive() &&
							(this.state?.stage === D.EXTENSIONS &&
								!this.m.isActive &&
								(await this.z()),
							this.state?.stage === D.WORKBENCH && (await this.C()),
							await this.stop());
					}
					async stop() {
						if (!this.isActive()) return;
						this.a && (this.a.close(), (this.a = void 0)),
							this.m.isActive && (await this.m.reset());
						const O =
							this.f.profiles.find((B) => B.id === this.state?.profile) ??
							this.f.defaultProfile;
						(this.state = void 0), await this.g.switchProfile(O);
					}
					async z() {
						if (!(await this.q.getInstalled(w.ExtensionType.User)).length) {
							this.state = new M(D.WORKBENCH, this.state.profile);
							return;
						}
						const O = await this.G((0, t.localize)(7252, null));
						if (O === "good") {
							const B =
								this.f.profiles.find((U) => U.id === this.state.profile) ??
								this.f.defaultProfile;
							await this.F(B);
						}
						O === "bad" &&
							(this.state = new M(D.WORKBENCH, this.state.profile)),
							O === "stop" && (await this.stop());
					}
					async C() {
						await this.g.createAndEnterTransientProfile(), this.L(this.state);
						const O = await this.G((0, t.localize)(7253, null));
						O === "stop" && (await this.stop()),
							O === "good" && (await this.H((0, t.localize)(7254, null))),
							O === "bad" &&
								(await this.H((0, t.localize)(7255, null, this.t.nameLong)));
					}
					async F(O) {
						await this.g.switchProfile(O);
						const B = (await this.q.getInstalled(w.ExtensionType.User)).filter(
							(U) => this.r.isEnabled(U),
						);
						await this.m.start(B), await this.u.reload();
					}
					G(O) {
						return new Promise((B, U) => {
							const z = {
									label: (0, t.localize)(7256, null),
									run: () => B("good"),
								},
								F = { label: (0, t.localize)(7257, null), run: () => B("bad") },
								x = {
									label: (0, t.localize)(7258, null),
									run: () => B("stop"),
								};
							this.a = this.n.prompt(h.Severity.Info, O, [z, F, x], {
								sticky: !0,
								priority: h.NotificationPriority.URGENT,
							});
						});
					}
					async H(O) {
						let B = !1;
						if (this.t.quality === "stable") {
							const U = await this.I();
							if (U === "good") {
								await this.j.prompt({
									type: h.Severity.Info,
									message: (0, t.localize)(7259, null),
									detail: (0, t.localize)(7260, null, this.t.nameLong),
									custom: !0,
								});
								return;
							}
							if (U === "stop") {
								await this.stop();
								return;
							}
							U === "bad" && (B = !0);
						}
						await this.s.openReporter({
							issueBody: `> ${O} ${B ? `It is confirmed that the issue exists in ${this.t.nameLong} Insiders` : ""}`,
						});
					}
					async I() {
						return !(
							await this.j.confirm({
								type: "info",
								message: (0, t.localize)(7261, null),
								primaryButton: (0, t.localize)(7262, null, this.t.nameLong),
								cancelButton: (0, t.localize)(7263, null),
								detail: (0, t.localize)(7264, null, this.t.nameLong),
								custom: { disableCloseAction: !0 },
							})
						).confirmed ||
							!(await this.y.open(
								S.URI.parse("https://aka.ms/vscode-insiders"),
							))
							? void 0
							: (
									await this.j.prompt({
										type: "info",
										message: (0, t.localize)(7265, null),
										buttons: [
											{ label: (0, t.localize)(7266, null), run: () => "good" },
											{ label: (0, t.localize)(7267, null), run: () => "bad" },
										],
										cancelButton: {
											label: (0, t.localize)(7268, null),
											run: () => "stop",
										},
										detail: (0, t.localize)(7269, null, this.t.nameLong),
										custom: { disableCloseAction: !0 },
									})
								).result;
					}
					get state() {
						if (this.J === void 0) {
							const O = this.w.get(P.storageKey, $.StorageScope.PROFILE);
							this.J = M.fromJSON(O);
						}
						return this.J || void 0;
					}
					set state(O) {
						(this.J = O ?? null), this.L(O);
					}
					L(O) {
						O
							? this.w.store(
									P.storageKey,
									JSON.stringify(O),
									$.StorageScope.PROFILE,
									$.StorageTarget.MACHINE,
								)
							: this.w.remove(P.storageKey, $.StorageScope.PROFILE);
					}
				};
				N = P = Ne(
					[
						j(0, r.$P8),
						j(1, g.$Xl),
						j(2, r.$Q8),
						j(3, r.$W8),
						j(4, u.$GO),
						j(5, a.$xwc),
						j(6, h.$4N),
						j(7, i.$Hp),
						j(8, c.$IQb),
						j(9, C.$7Xb),
						j(10, E.$Bk),
						j(11, n.$asb),
						j(12, $.$lq),
						j(13, v.$7rb),
					],
					N,
				);
				let A = class extends d.$1c {
					static {
						k = this;
					}
					static {
						this.ctxIsTroubleshootActive = new b.$5j(
							"isIssueTroubleshootActive",
							!1,
						);
					}
					constructor(O, B, U) {
						super(),
							(this.a = O),
							(this.b = B),
							this.f(),
							B.isActive() && B.resume(),
							this.D(
								U.onDidChangeValue(
									$.StorageScope.PROFILE,
									N.storageKey,
									this.D(new d.$Zc()),
								)(() => {
									this.f();
								}),
							);
					}
					f() {
						k.ctxIsTroubleshootActive.bindTo(this.a).set(this.b.isActive());
					}
				};
				(A = k = Ne([j(0, b.$6j), j(1, L), j(2, $.$lq)], A)),
					s.$Io
						.as(l.Extensions.Workbench)
						.registerWorkbenchContribution(A, y.LifecyclePhase.Restored),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: "workbench.action.troubleshootIssue.start",
									title: (0, t.localize2)(7270, "Troubleshoot Issue..."),
									category: o.$ck.Help,
									f1: !0,
									precondition: b.$Kj.and(
										A.ctxIsTroubleshootActive.negate(),
										I.$CPb.isEqualTo(""),
										T.$7Lb.negate(),
									),
								});
							}
							run(O) {
								return O.get(L).start();
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: "workbench.action.troubleshootIssue.stop",
									title: (0, t.localize2)(7271, "Stop Troubleshoot Issue"),
									category: o.$ck.Help,
									f1: !0,
									precondition: A.ctxIsTroubleshootActive,
								});
							}
							async run(R) {
								return R.get(L).stop();
							}
						},
					),
					(0, f.$lK)(L, N, f.InstantiationType.Delayed);
			},
		),
		