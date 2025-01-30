import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/browser.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/performance.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/severity.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/browser/webConstants.js';
import '../../../../platform/window/common/window.js';
import '../../../browser/window.js';
import '../../environment/common/environmentService.js';
import '../../host/browser/host.js';
import '../../layout/browser/layoutService.js';
define(
		de[703],
		he([
			1, 0, 139, 7, 75, 24, 15, 29, 6, 3, 240, 12, 111, 4, 10, 57, 20, 5, 32,
			740, 253, 1833, 78, 87, 96,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*browser*/,
			i /*dom*/,
			w /*window*/,
			E /*arrays*/,
			C /*async*/,
			d /*errors*/,
			m /*event*/,
			r /*lifecycle*/,
			u /*performance*/,
			a /*platform*/,
			h /*severity*/,
			c /*nls*/,
			n /*configuration*/,
			g /*dialogs*/,
			p /*extensions*/,
			o /*instantiation*/,
			f /*telemetry*/,
			b /*webConstants*/,
			s /*window*/,
			l /*window*/,
			y /*environmentService*/,
			$ /*host*/,
			v /*layoutService*/,
) {
			"use strict";
			var S;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$CEb = e.$BEb = e.AuxiliaryWindowMode = e.$AEb = void 0),
				(h = xi(h)),
				(e.$AEb = (0, o.$Mi)("auxiliaryWindowService"));
			var I;
			(function (k) {
				(k[(k.Maximized = 0)] = "Maximized"),
					(k[(k.Normal = 1)] = "Normal"),
					(k[(k.Fullscreen = 2)] = "Fullscreen");
			})(I || (e.AuxiliaryWindowMode = I = {}));
			let T = class extends l.$yEb {
				constructor(L, D, M, N, A, R) {
					super(L, void 0, A, R),
						(this.window = L),
						(this.container = D),
						(this.u = N),
						(this.n = this.D(new m.$re())),
						(this.onWillLayout = this.n.event),
						(this.q = this.D(new m.$re())),
						(this.onDidLayout = this.q.event),
						(this.r = this.D(new m.$re())),
						(this.onBeforeUnload = this.r.event),
						(this.s = this.D(new m.$re())),
						(this.onUnload = this.s.event),
						(this.t = this.D(new m.$re())),
						(this.onWillDispose = this.t.event),
						(this.whenStylesHaveLoaded = M.wait().then(() => {})),
						(this.contentContainer =
							D.querySelector(".auxiliary-window-content") || D),
						this.w();
				}
				w() {
					this.D(
						(0, i.$0fb)(this.window, i.$$gb.BEFORE_UNLOAD, (L) => this.z(L)),
					),
						this.D((0, i.$0fb)(this.window, i.$$gb.UNLOAD, () => this.H())),
						this.D(
							(0, i.$0fb)(this.window, "unhandledrejection", (L) => {
								(0, d.$4)(L.reason), L.preventDefault();
							}),
						),
						this.D(
							(0, i.$0fb)(this.window, i.$$gb.RESIZE, () => this.layout()),
						),
						this.D(
							(0, i.$0fb)(
								this.container,
								i.$$gb.SCROLL,
								() => (this.container.scrollTop = 0),
							),
						),
						a.$r
							? (this.D(
									(0, i.$0fb)(this.container, i.$$gb.DROP, (L) =>
										i.$ahb.stop(L, !0),
									),
								),
								this.D(
									(0, i.$0fb)(
										this.container,
										i.$$gb.WHEEL,
										(L) => L.preventDefault(),
										{ passive: !1 },
									),
								),
								this.D(
									(0, i.$0fb)(this.container, i.$$gb.CONTEXT_MENU, (L) =>
										i.$ahb.stop(L, !0),
									),
								))
							: (this.D(
									(0, i.$0fb)(
										this.window.document.body,
										i.$$gb.DRAG_OVER,
										(L) => i.$ahb.stop(L),
									),
								),
								this.D(
									(0, i.$0fb)(this.window.document.body, i.$$gb.DROP, (L) =>
										i.$ahb.stop(L),
									),
								));
				}
				z(L) {
					let D;
					if (
						(this.r.fire({
							veto(A) {
								A && (D = A);
							},
						}),
						D)
					) {
						this.C(L, D);
						return;
					}
					const M = this.u.getValue("window.confirmBeforeClose");
					(M === "always" ||
						(M === "keyboardOnly" && i.$Fhb.getInstance().isModifierPressed)) &&
						this.G(L);
				}
				C(L, D) {
					this.F(L);
				}
				F(L) {
					L.preventDefault(), (L.returnValue = (0, c.localize)(12103, null));
				}
				G(L) {
					this.F(L);
				}
				H() {
					this.s.fire();
				}
				layout() {
					const L = (0, i.$ogb)(this.window.document.body, this.container);
					this.n.fire(L), this.q.fire(L);
				}
				createState() {
					return {
						bounds: {
							x: this.window.screenX,
							y: this.window.screenY,
							width: this.window.outerWidth,
							height: this.window.outerHeight,
						},
						zoomLevel: (0, t.$Hfb)(this.window),
					};
				}
				dispose() {
					this.B.isDisposed || (this.t.fire(), super.dispose());
				}
			};
			(e.$BEb = T),
				(e.$BEb = T = Ne([j(3, n.$gj), j(4, $.$asb), j(5, y.$r8)], T));
			let P = class extends r.$1c {
				static {
					S = this;
				}
				static {
					this.a = { width: 800, height: 600 };
				}
				static {
					this.b = (0, i.getWindowId)(w.$Bfb) + 1;
				}
				constructor(L, D, M, N, A, R) {
					super(),
						(this.g = L),
						(this.h = D),
						(this.j = M),
						(this.m = N),
						(this.n = A),
						(this.q = R),
						(this.c = this.D(new m.$re())),
						(this.onDidOpenAuxiliaryWindow = this.c.event),
						(this.f = new Map());
				}
				async open(L) {
					(0, u.mark)("code/auxiliaryWindow/willOpen");
					const D = await this.s(L);
					if (!D) throw new Error((0, c.localize)(12104, null));
					const M = await this.t(D);
					(0, w.$Cfb)(D, M);
					const N = new r.$Zc(),
						{ container: A, stylesLoaded: R } = this.u(D, N, L),
						O = (0, b.$vjb)();
					b.$ujb.set(D, O), A.appendChild(O);
					const B = this.r(D, A, R),
						U = new r.$Zc();
					this.f.set(D.vscodeWindowId, B),
						U.add((0, r.$Yc)(() => this.f.delete(D.vscodeWindowId)));
					const z = new r.$Zc();
					return (
						m.Event.once(B.onWillDispose)(() => {
							D.close(),
								N.dispose(),
								U.dispose(),
								z.dispose(),
								b.$ujb.delete(D);
						}),
						U.add((0, i.registerWindow)(D)),
						this.c.fire({ window: B, disposables: z }),
						(0, u.mark)("code/auxiliaryWindow/didOpen"),
						this.m.publicLog2("auxiliaryWindowOpen", { bounds: !!L?.bounds }),
						B
					);
				}
				r(L, D, M) {
					return new T(L, D, M, this.j, this.n, this.q);
				}
				async s(L) {
					const D = (0, i.$Ogb)(),
						M = {
							x: D.screenX,
							y: D.screenY,
							width: D.outerWidth,
							height: D.outerHeight,
						},
						N = Math.max(L?.bounds?.width ?? S.a.width, s.$rY.WIDTH),
						A = Math.max(L?.bounds?.height ?? S.a.height, s.$rY.HEIGHT);
					let R = {
						x: L?.bounds?.x ?? Math.max(M.x + M.width / 2 - N / 2, 0),
						y: L?.bounds?.y ?? Math.max(M.y + M.height / 2 - A / 2, 0),
						width: N,
						height: A,
					};
					!L?.bounds &&
						R.x === M.x &&
						R.y === M.y &&
						(R = { ...R, x: R.x + 30, y: R.y + 30 });
					const O = (0, E.$Lb)([
							"popup=yes",
							`left=${R.x}`,
							`top=${R.y}`,
							`width=${R.width}`,
							`height=${R.height}`,
							L?.nativeTitlebar ? "window-native-titlebar=yes" : void 0,
							L?.disableFullscreen ? "window-disable-fullscreen=yes" : void 0,
							L?.mode === I.Maximized ? "window-maximized=yes" : void 0,
							L?.mode === I.Fullscreen ? "window-fullscreen=yes" : void 0,
						]),
						B = w.$Bfb.open(a.$I ? "" : "about:blank", void 0, O.join(","));
					return !B && a.$r
						? (
								await this.h.prompt({
									type: h.default.Warning,
									message: (0, c.localize)(12105, null),
									detail: (0, c.localize)(12106, null),
									buttons: [
										{
											label: (0, c.localize)(12107, null),
											run: () => this.s(L),
										},
									],
									cancelButton: !0,
								})
							).result
						: B?.window;
				}
				async t(L) {
					return S.b++;
				}
				u(L, D, M) {
					(L.document.createElement = function () {
						throw new Error(
							'Not allowed to create elements in child window JavaScript context. Always use the main window so that "xyz instanceof HTMLElement" continues to work.',
						);
					}),
						this.w(L);
					const { stylesLoaded: N } = this.z(L, D),
						A = this.C(L, D);
					return { stylesLoaded: N, container: A };
				}
				w(L) {
					for (const M of [
						'meta[charset="utf-8"]',
						'meta[http-equiv="Content-Security-Policy"]',
						'meta[name="viewport"]',
						'meta[name="theme-color"]',
					]) {
						const N = w.$Bfb.document.querySelector(M);
						if (N) {
							const A = (0, i.$Ugb)(L.document.head);
							if (
								((0, i.$Khb)(N, A),
								M === 'meta[http-equiv="Content-Security-Policy"]')
							) {
								const R = A.getAttribute("content");
								R &&
									A.setAttribute(
										"content",
										R.replace(/(script-src[^\;]*)/, "script-src 'none'"),
									);
							}
						}
					}
					const D = w.$Bfb.document.querySelector('link[rel="icon"]');
					if (D) {
						const M = (0, i.$Vgb)(L.document.head);
						(0, i.$Khb)(D, M);
					}
				}
				z(L, D) {
					(0, u.mark)("code/auxiliaryWindow/willApplyCSS");
					const M = new Map(),
						N = new C.$Lh();
					N.wait().then(() =>
						(0, u.mark)("code/auxiliaryWindow/didLoadCSSStyles"),
					);
					const A = D.add(new r.$Zc());
					let R = 0;
					function O() {
						--R === 0 && (A.dispose(), N.open());
					}
					function B(U) {
						if ((0, i.$Pgb)(U)) return;
						const z = L.document.head.appendChild(U.cloneNode(!0));
						U.tagName.toLowerCase() === "link" &&
							(R++,
							A.add((0, i.$0fb)(z, "load", O)),
							A.add((0, i.$0fb)(z, "error", O))),
							M.set(U, z);
					}
					R++;
					try {
						for (const U of w.$Bfb.document.head.querySelectorAll(
							'link[rel="stylesheet"], style',
						))
							B(U);
					} finally {
						O();
					}
					return (
						D.add((0, i.$Sgb)(L)),
						D.add(
							i.$Tgb.observe(w.$Bfb.document.head, D, {
								childList: !0,
								subtree: !0,
							})((U) => {
								for (const z of U)
									if (
										!(
											z.type !== "childList" ||
											z.target.nodeName.toLowerCase() === "title" ||
											z.target.nodeName.toLowerCase() === "script" ||
											z.target.nodeName.toLowerCase() === "meta"
										)
									) {
										for (const F of z.addedNodes)
											if (
												(0, i.$Ygb)(F) &&
												(F.tagName.toLowerCase() === "style" ||
													F.tagName.toLowerCase() === "link")
											)
												B(F);
											else if (F.nodeType === Node.TEXT_NODE && F.parentNode) {
												const x = M.get(F.parentNode);
												x && (x.textContent = F.textContent);
											}
										for (const F of z.removedNodes) {
											const x = M.get(F);
											x && (x.parentNode?.removeChild(x), M.delete(F));
										}
									}
							}),
						),
						(0, u.mark)("code/auxiliaryWindow/didApplyCSS"),
						{ stylesLoaded: N }
					);
				}
				C(L, D) {
					(0, u.mark)("code/auxiliaryWindow/willApplyHTML");
					const M = document.createElement("div");
					return (
						M.setAttribute("role", "application"),
						(0, i.$sgb)(M, 0, 0, 0, 0, "relative"),
						(M.style.display = "flex"),
						(M.style.height = "100%"),
						(M.style.flexDirection = "column"),
						L.document.body.append(M),
						D.add(
							(0, i.$Lhb)(
								w.$Bfb.document.documentElement,
								L.document.documentElement,
							),
						),
						D.add((0, i.$Lhb)(w.$Bfb.document.body, L.document.body)),
						D.add((0, i.$Lhb)(this.g.mainContainer, M, ["class"])),
						(0, u.mark)("code/auxiliaryWindow/didApplyHTML"),
						M
					);
				}
				getWindow(L) {
					return this.f.get(L);
				}
			};
			(e.$CEb = P),
				(e.$CEb =
					P =
					S =
						Ne(
							[
								j(0, v.$mEb),
								j(1, g.$GO),
								j(2, n.$gj),
								j(3, f.$km),
								j(4, $.$asb),
								j(5, y.$r8),
							],
							P,
						)),
				(0, p.$lK)(e.$AEb, P, p.InstantiationType.Delayed);
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	