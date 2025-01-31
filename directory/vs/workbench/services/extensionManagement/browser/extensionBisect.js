import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/notification/common/notification.js';
import '../../host/browser/host.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/productService.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../common/extensionManagement.js';
define(
			de[1834],
			he([
				1, 0, 4, 119, 21, 109, 20, 40, 87, 5, 11, 8, 57, 52, 30, 55, 31, 34, 62,
				78, 154, 99, 157,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*extensionManagement*/,
				w /*storage*/,
				E /*extensions*/,
				C /*extensions*/,
				d /*notification*/,
				m /*host*/,
				r /*instantiation*/,
				u /*actions*/,
				a /*contextkey*/,
				h /*dialogs*/,
				c /*lifecycle*/,
				n /*platform*/,
				g /*contributions*/,
				p /*commands*/,
				o /*log*/,
				f /*productService*/,
				b /*environmentService*/,
				s /*extensionManagementUtil*/,
				l /*actionCommonCategories*/,
				y /*extensionManagement*/,
) {
				"use strict";
				var $, v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xwc = void 0),
					(e.$xwc = (0, r.$Mi)("IExtensionBisectService"));
				class S {
					static fromJSON(k) {
						if (k)
							try {
								const L = JSON.parse(k);
								return new S(L.extensions, L.low, L.high, L.mid);
							} catch {
								return;
							}
					}
					constructor(k, L, D, M = ((L + D) / 2) | 0) {
						(this.extensions = k),
							(this.low = L),
							(this.high = D),
							(this.mid = M);
					}
				}
				let I = class {
					static {
						$ = this;
					}
					static {
						this.a = "extensionBisectState";
					}
					constructor(k, L, D) {
						(this.d = L), (this.e = D), (this.c = new Map());
						const M = L.get($.a, w.StorageScope.APPLICATION);
						if (((this.b = S.fromJSON(M)), this.b)) {
							const { mid: N, high: A } = this.b;
							for (let R = 0; R < this.b.extensions.length; R++) {
								const O = R >= N && R < A;
								this.c.set(this.b.extensions[R], O);
							}
							k.warn("extension BISECT active", [...this.c]);
						}
					}
					get isActive() {
						return !!this.b;
					}
					get disabledCount() {
						return this.b ? this.b.high - this.b.mid : -1;
					}
					isDisabledByBisect(k) {
						return !this.b ||
							(0, E.$Mn)(k.manifest, this.e.remoteAuthority) ||
							this.f(k)
							? !1
							: (this.c.get(k.identifier.id) ?? !1);
					}
					f(k) {
						return (
							Array.isArray(this.e.enableExtensions) &&
							this.e.enableExtensions.some((L) =>
								(0, s.$7p)({ id: L }, k.identifier),
							)
						);
					}
					async start(k) {
						if (this.b) throw new Error("invalid state");
						const L = k.map((M) => M.identifier.id),
							D = new S(L, 0, L.length, 0);
						this.d.store(
							$.a,
							JSON.stringify(D),
							w.StorageScope.APPLICATION,
							w.StorageTarget.MACHINE,
						),
							await this.d.flush();
					}
					async next(k) {
						if (!this.b) throw new Error("invalid state");
						if (
							k &&
							this.b.mid === 0 &&
							this.b.high === this.b.extensions.length
						)
							return { bad: !0, id: "" };
						if (this.b.low === this.b.high - 1)
							return (
								await this.reset(),
								{ id: this.b.extensions[this.b.low], bad: k }
							);
						const L = new S(
							this.b.extensions,
							k ? this.b.low : this.b.mid,
							k ? this.b.mid : this.b.high,
						);
						this.d.store(
							$.a,
							JSON.stringify(L),
							w.StorageScope.APPLICATION,
							w.StorageTarget.MACHINE,
						),
							await this.d.flush();
					}
					async reset() {
						this.d.remove($.a, w.StorageScope.APPLICATION),
							await this.d.flush();
					}
				};
				(I = $ = Ne([j(0, o.$ik), j(1, w.$lq), j(2, b.$r8)], I)),
					(0, C.$lK)(e.$xwc, I, C.InstantiationType.Delayed);
				let T = class {
					static {
						v = this;
					}
					static {
						this.ctxIsBisectActive = new a.$5j("isExtensionBisectActive", !1);
					}
					constructor(k, L, D, M) {
						(this.a = L),
							(this.b = D),
							(this.c = M),
							L.isActive && (v.ctxIsBisectActive.bindTo(k).set(!0), this.d());
					}
					d() {
						const k = {
								label: (0, t.localize)(12249, null),
								run: () => this.c.executeCommand("extension.bisect.next", !1),
							},
							L = {
								label: (0, t.localize)(12250, null),
								run: () => this.c.executeCommand("extension.bisect.next", !0),
							},
							D = {
								label: "Stop Bisect",
								run: () => this.c.executeCommand("extension.bisect.stop"),
							},
							M =
								this.a.disabledCount === 1
									? (0, t.localize)(12251, null)
									: (0, t.localize)(12252, null, this.a.disabledCount);
						this.b.prompt(d.Severity.Info, M, [k, L, D], {
							sticky: !0,
							priority: d.NotificationPriority.URGENT,
						});
					}
				};
				(T = v = Ne([j(0, a.$6j), j(1, e.$xwc), j(2, d.$4N), j(3, p.$ek)], T)),
					n.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution(T, c.LifecyclePhase.Restored),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "extension.bisect.start",
									title: (0, t.localize2)(12269, "Start Extension Bisect"),
									category: l.$ck.Help,
									f1: !0,
									precondition: T.ctxIsBisectActive.negate(),
									menu: {
										id: u.$XX.ViewContainerTitle,
										when: a.$Kj.equals(
											"viewContainer",
											"workbench.view.extensions",
										),
										group: "2_enablement",
										order: 4,
									},
								});
							}
							async run(P) {
								const k = P.get(h.$GO),
									L = P.get(m.$asb),
									D = P.get(i.$Hp),
									M = P.get(y.$IQb),
									N = P.get(e.$xwc),
									A = (await D.getInstalled(E.ExtensionType.User)).filter((O) =>
										M.isEnabled(O),
									);
								(
									await k.confirm({
										message: (0, t.localize)(12253, null),
										detail: (0, t.localize)(
											12254,
											null,
											(2 + Math.log2(A.length)) | 0,
										),
										primaryButton: (0, t.localize)(12255, null),
									})
								).confirmed && (await N.start(A), L.reload());
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "extension.bisect.next",
									title: (0, t.localize2)(12270, "Continue Extension Bisect"),
									category: l.$ck.Help,
									f1: !0,
									precondition: T.ctxIsBisectActive,
								});
							}
							async run(P, k) {
								const L = P.get(h.$GO),
									D = P.get(m.$asb),
									M = P.get(e.$xwc),
									N = P.get(f.$Bk),
									A = P.get(i.$Kp),
									R = P.get(p.$ek);
								if (!M.isActive) return;
								if (k === void 0) {
									const B = await this.a(L, M);
									if (B === null) return;
									k = B;
								}
								if (k === void 0) {
									await M.reset(), D.reload();
									return;
								}
								const O = await M.next(k);
								if (!O) {
									D.reload();
									return;
								}
								if (O.bad)
									await L.info(
										(0, t.localize)(12256, null),
										(0, t.localize)(12257, null, N.nameShort),
									);
								else {
									const B = await L.confirm({
										type: d.Severity.Info,
										message: (0, t.localize)(12258, null),
										primaryButton: (0, t.localize)(12259, null),
										cancelButton: (0, t.localize)(12260, null),
										detail: (0, t.localize)(12261, null, O.id),
										checkbox: {
											label: (0, t.localize)(12262, null),
											checked: !0,
										},
									});
									B.checkboxChecked &&
										(await A.disableExtension({ id: O.id }, void 0)),
										B.confirmed &&
											(await R.executeCommand(
												"workbench.action.openIssueReporter",
												O.id,
											));
								}
								await M.reset(), D.reload();
							}
							async a(P, k) {
								const { result: L } = await P.prompt({
									type: d.Severity.Info,
									message: (0, t.localize)(12263, null),
									detail: (0, t.localize)(12264, null, k.disabledCount),
									buttons: [
										{ label: (0, t.localize)(12265, null), run: () => !1 },
										{ label: (0, t.localize)(12266, null), run: () => !0 },
										{ label: (0, t.localize)(12267, null), run: () => {} },
									],
									cancelButton: {
										label: (0, t.localize)(12268, null),
										run: () => null,
									},
								});
								return L;
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "extension.bisect.stop",
									title: (0, t.localize2)(12271, "Stop Extension Bisect"),
									category: l.$ck.Help,
									f1: !0,
									precondition: T.ctxIsBisectActive,
								});
							}
							async run(P) {
								const k = P.get(e.$xwc),
									L = P.get(m.$asb);
								await k.reset(), L.reload();
							}
						},
					);
			},
		)
