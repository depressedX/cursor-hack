import '../../../require.js';
import '../../../exports.js';
import '../../base/browser/browser.js';
import '../../base/browser/dom.js';
import '../../base/browser/event.js';
import '../../base/browser/deviceAccess.js';
import '../../base/common/async.js';
import '../../base/common/event.js';
import '../../base/common/lifecycle.js';
import '../../base/common/network.js';
import '../../base/common/platform.js';
import '../../base/common/severity.js';
import '../../base/common/uri.js';
import '../../nls.js';
import '../../platform/commands/common/commands.js';
import '../../platform/dialogs/common/dialogs.js';
import '../../platform/instantiation/common/instantiation.js';
import '../../platform/label/common/label.js';
import '../../platform/opener/common/opener.js';
import '../../platform/product/common/productService.js';
import '../services/environment/browser/environmentService.js';
import '../services/layout/browser/layoutService.js';
import '../services/lifecycle/common/lifecycle.js';
import '../services/host/browser/host.js';
import '../services/driver/browser/driver.js';
import '../../base/browser/window.js';
import '../../base/common/functional.js';
import '../../platform/configuration/common/configuration.js';
import '../services/environment/common/environmentService.js';
define(
		de[1833],
		he([
			1, 0, 139, 7, 265, 2194, 15, 6, 3, 23, 12, 111, 9, 4, 31, 57, 5, 73, 41,
			62, 286, 96, 52, 87, 1832, 75, 288, 10, 78,
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
		) {
			"use strict";
			var k;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zEb = e.$yEb = void 0),
				(a = xi(a));
			let L = class extends m.$1c {
				static {
					k = this;
				}
				static {
					this.a = Number.MIN_SAFE_INTEGER;
				}
				static {
					this.b = new Map();
				}
				constructor(
					N,
					A = { getWindowsCount: i.getWindowsCount, getWindows: i.getWindows },
					R,
					O,
				) {
					super(),
						(this.c = R),
						(this.f = O),
						this.g(N),
						this.j(N, A),
						this.m(N.vscodeWindowId);
				}
				g(N) {
					const A = N.HTMLElement.prototype.focus,
						R = this;
					N.HTMLElement.prototype.focus = function (O) {
						R.h((0, i.getWindow)(this)), A.apply(this, [O]);
					};
				}
				h(N) {
					const A = (0, i.$Ogb)();
					A !== N &&
						A.document.hasFocus() &&
						(N.focus(),
						!this.f.extensionTestsLocationURI &&
							!N.document.hasFocus() &&
							this.c.focus(N));
				}
				j(
					N,
					A = { getWindowsCount: i.getWindowsCount, getWindows: i.getWindows },
				) {
					const R = N.setTimeout;
					Object.defineProperty(N, "vscodeOriginalSetTimeout", {
						get: () => R,
					});
					const O = N.clearTimeout;
					Object.defineProperty(N, "vscodeOriginalClearTimeout", {
						get: () => O,
					}),
						(N.setTimeout = function (B, U = 0, ...z) {
							if (A.getWindowsCount() === 1 || typeof B == "string" || U === 0)
								return R.apply(this, [B, U, ...z]);
							const F = new Set(),
								x = k.a++;
							k.b.set(x, F);
							const H = (0, I.$hb)(B, () => {
								(0, m.$Vc)(F), k.b.delete(x);
							});
							for (const { window: q, disposables: V } of A.getWindows()) {
								if ((0, S.$Dfb)(q) && q.document.visibilityState === "hidden")
									continue;
								let G = !1;
								const K = q.vscodeOriginalSetTimeout.apply(this, [
										(...W) => {
											G || H(...W);
										},
										U,
										...z,
									]),
									J = (0, m.$Yc)(() => {
										(G = !0), q.vscodeOriginalClearTimeout(K), F.delete(J);
									});
								V.add(J), F.add(J);
							}
							return x;
						}),
						(N.clearTimeout = function (B) {
							const U = typeof B == "number" ? k.b.get(B) : void 0;
							U ? ((0, m.$Vc)(U), k.b.delete(B)) : O.apply(this, [B]);
						});
				}
				m(N) {
					this.D(
						this.c.onDidChangeFullScreen(({ windowId: A, fullscreen: R }) => {
							if (A === N) {
								const O = (0, i.getWindowById)(N);
								O && (0, t.$Lfb)(R, O.window);
							}
						}),
					);
				}
				static async confirmOnShutdown(N, A) {
					const R = N.get(g.$GO),
						O = N.get(T.$gj),
						B =
							A === y.ShutdownReason.QUIT
								? u.$m
									? (0, c.localize)(3758, null)
									: (0, c.localize)(3759, null)
								: (0, c.localize)(3760, null),
						U =
							A === y.ShutdownReason.QUIT
								? u.$m
									? (0, c.localize)(3761, null)
									: (0, c.localize)(3762, null)
								: (0, c.localize)(3763, null),
						z = await R.confirm({
							message: B,
							primaryButton: U,
							checkbox: { label: (0, c.localize)(3764, null) },
						});
					return (
						z.confirmed &&
							z.checkboxChecked &&
							(await O.updateValue("window.confirmBeforeClose", "never")),
						z.confirmed
					);
				}
			};
			(e.$yEb = L), (e.$yEb = L = k = Ne([j(2, $.$asb), j(3, P.$r8)], L));
			let D = class extends L {
				constructor(N, A, R, O, B, U, z, F, x) {
					super(S.$Bfb, void 0, x, U),
						(this.n = N),
						(this.q = A),
						(this.r = R),
						(this.s = O),
						(this.t = B),
						(this.u = U),
						(this.w = z),
						(this.y = F),
						this.z(),
						this.F();
				}
				z() {
					this.D(this.q.onWillShutdown(() => this.C()));
					const N =
						u.$u && S.$Bfb.visualViewport ? S.$Bfb.visualViewport : S.$Bfb;
					this.D(
						(0, i.$0fb)(N, i.$$gb.RESIZE, () => {
							this.w.layout(), u.$u && S.$Bfb.scrollTo(0, 0);
						}),
					),
						this.D(
							(0, i.$0fb)(
								this.w.mainContainer,
								i.$$gb.WHEEL,
								(A) => A.preventDefault(),
								{ passive: !1 },
							),
						),
						this.D(
							(0, i.$0fb)(this.w.mainContainer, i.$$gb.CONTEXT_MENU, (A) =>
								i.$ahb.stop(A, !0),
							),
						),
						this.D(
							(0, i.$0fb)(this.w.mainContainer, i.$$gb.DROP, (A) =>
								i.$ahb.stop(A, !0),
							),
						);
				}
				C() {
					d.Event.toPromise(
						d.Event.any(
							d.Event.once(
								new w.$mib(S.$Bfb.document.body, i.$$gb.KEY_DOWN, !0).event,
							),
							d.Event.once(
								new w.$mib(S.$Bfb.document.body, i.$$gb.MOUSE_DOWN, !0).event,
							),
						),
					).then(async () => {
						await (0, C.$Nh)(3e3),
							await this.r.prompt({
								type: a.default.Error,
								message: (0, c.localize)(3765, null),
								detail: (0, c.localize)(3766, null),
								buttons: [
									{
										label: (0, c.localize)(3767, null),
										run: () => S.$Bfb.location.reload(),
									},
								],
							});
					});
				}
				F() {
					this.H(), this.I(), this.J(), this.G();
				}
				G() {
					this.f.enableSmokeTestDriver && (0, v.$xEb)(this.y);
				}
				H() {
					this.n.setDefaultExternalOpener({
						openExternal: async (N) => {
							let A = !1;
							if (this.u.options?.openerAllowedExternalUrlPrefixes) {
								for (const R of this.u.options.openerAllowedExternalUrlPrefixes)
									if (N.startsWith(R)) {
										A = !0;
										break;
									}
							}
							if (
								(0, r.$Vg)(N, r.Schemas.http) ||
								(0, r.$Vg)(N, r.Schemas.https)
							)
								t.$Rfb
									? (0, i.$thb)(N, !A) ||
										(await this.r.prompt({
											type: a.default.Warning,
											message: (0, c.localize)(3768, null),
											detail: N,
											buttons: [
												{
													label: (0, c.localize)(3769, null),
													run: () => (A ? (0, i.$shb)(N) : (0, i.$rhb)(N)),
												},
												{
													label: (0, c.localize)(3770, null),
													run: () =>
														this.n.open(
															h.URI.parse("https://aka.ms/allow-vscode-popup"),
														),
												},
											],
											cancelButton: !0,
										}))
									: A
										? (0, i.$shb)(N)
										: (0, i.$rhb)(N);
							else {
								const R = () => {
									this.q.withExpectedShutdown(
										{ disableShutdownHandling: !0 },
										() => (S.$Bfb.location.href = N),
									);
								};
								R();
								const O = async () => {
									const { downloadUrl: B } = this.t;
									let U;
									const z = [
										{ label: (0, c.localize)(3771, null), run: () => R() },
									];
									B !== void 0
										? ((U = (0, c.localize)(
												3772,
												null,
												this.t.nameLong,
												this.t.nameLong,
											)),
											z.push({
												label: (0, c.localize)(3773, null),
												run: async () => {
													await this.n.open(h.URI.parse(B)), O();
												},
											}))
										: (U = (0, c.localize)(
												3774,
												null,
												this.t.nameLong,
												this.t.nameLong,
											)),
										await this.c.withExpectedShutdown(() =>
											this.r.prompt({
												type: a.default.Info,
												message: (0, c.localize)(3775, null),
												detail: U,
												buttons: z,
												cancelButton: !0,
											}),
										);
								};
								(0, r.$Vg)(N, this.t.urlProtocol) && (await O());
							}
							return !0;
						},
					});
				}
				I() {
					this.D(
						this.s.registerFormatter({
							scheme: r.Schemas.vscodeUserData,
							priority: !0,
							formatting: { label: "(Settings) ${path}", separator: "/" },
						}),
					);
				}
				J() {
					n.$fk.registerCommand(
						"workbench.experimental.requestUsbDevice",
						async (N, A) => (0, E.$jjb)(A),
					),
						n.$fk.registerCommand(
							"workbench.experimental.requestSerialPort",
							async (N, A) => (0, E.$kjb)(A),
						),
						n.$fk.registerCommand(
							"workbench.experimental.requestHidDevice",
							async (N, A) => (0, E.$ljb)(A),
						);
				}
			};
			(e.$zEb = D),
				(e.$zEb = D =
					Ne(
						[
							j(0, f.$7rb),
							j(1, y.$n6),
							j(2, g.$GO),
							j(3, o.$3N),
							j(4, b.$Bk),
							j(5, s.$5rb),
							j(6, l.$mEb),
							j(7, p.$Li),
							j(8, $.$asb),
						],
						D,
					));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	