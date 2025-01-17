import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/browser.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/tunnel/common/tunnel.js';
import '../../../../platform/webview/common/webviewPortMapping.js';
import '../../../../base/browser/iframe.js';
import './resourceLoading.js';
import './webview.js';
import './webviewFindWidget.js';
import '../common/webview.js';
import '../../../services/environment/common/environmentService.js';
define(
			de[1805],
			he([
				1, 0, 139, 7, 15, 76, 33, 6, 3, 23, 9, 47, 4, 91, 11, 10, 49, 22, 5, 34,
				40, 211, 32, 374, 2889, 1126, 3211, 355, 3212, 1784, 78,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$f6c = void 0);
				var D;
				(function (A) {
					let R;
					(function (B) {
						(B[(B.Initializing = 0)] = "Initializing"),
							(B[(B.Ready = 1)] = "Ready");
					})((R = A.Type || (A.Type = {})));
					class O {
						constructor(U) {
							(this.pendingMessages = U), (this.type = R.Initializing);
						}
					}
					(A.Initializing = O), (A.Ready = { type: R.Ready });
				})(D || (D = {}));
				const M = "webviewId";
				let N = class extends m.$1c {
					get c() {
						return typeof this.b == "number"
							? (0, i.getWindowById)(this.b)?.window
							: void 0;
					}
					get h() {
						return "browser";
					}
					get n() {
						return this.m;
					}
					get isFocused() {
						return !(
							!this.q ||
							!this.c ||
							(this.c.document.activeElement &&
								this.c.document.activeElement !== this.n)
						);
					}
					constructor(R, O, B, U, z, F, x, H, q, V, G, K, J) {
						super(),
							(this.N = O),
							(this.O = F),
							(this.P = x),
							(this.Q = H),
							(this.R = q),
							(this.S = V),
							(this.U = G),
							(this.W = J),
							(this.a = (0, a.$9g)()),
							(this.b = void 0),
							(this.j = 4),
							(this.r = new D.Initializing([])),
							(this.u = this.D(new C.$Ce())),
							(this.C = this.D(new w.$Kh(50))),
							(this.F = this.D(new d.$re())),
							(this.G = this.F.event),
							(this.I = new Map()),
							(this.checkImeCompletionState = !0),
							(this.L = !1),
							(this.X = this.D(new d.$re())),
							(this.onMissingCsp = this.X.event),
							(this.Y = this.D(new d.$re())),
							(this.onDidClickLink = this.Y.event),
							(this.Z = this.D(new d.$re())),
							(this.onDidReload = this.Z.event),
							(this.$ = this.D(new d.$re())),
							(this.onMessage = this.$.event),
							(this.ab = this.D(new d.$re())),
							(this.onDidScroll = this.ab.event),
							(this.bb = this.D(new d.$re())),
							(this.onDidWheel = this.bb.event),
							(this.cb = this.D(new d.$re())),
							(this.onDidUpdateState = this.cb.event),
							(this.db = this.D(new d.$re())),
							(this.onDidFocus = this.db.event),
							(this.eb = this.D(new d.$re())),
							(this.onDidBlur = this.eb.event),
							(this.fb = this.D(new d.$re())),
							(this.onFatalError = this.fb.event),
							(this.gb = this.D(new d.$re())),
							(this.onDidDispose = this.gb.event),
							(this.rb = !1),
							(this.Db = this.D(new d.$re())),
							(this.hasFindResult = this.Db.event),
							(this.Eb = this.D(new d.$re())),
							(this.onDidStopFind = this.Eb.event),
							(this.providedViewType = R.providedViewType),
							(this.origin = R.origin ?? this.a),
							(this.M = R.options),
							(this.extension = R.extension),
							(this.s = {
								html: "",
								title: R.title,
								options: R.contentOptions,
								state: void 0,
							}),
							(this.t = this.D(
								new v.$YIb(
									() => this.extension?.location,
									() => this.s.options.portMapping || [],
									this.U,
								),
							)),
							(this.m = this.ib(R.options, R.contentOptions)),
							this.D(
								this.qb("no-csp-found", () => {
									this.sb();
								}),
							),
							this.D(
								this.qb("did-click-link", ({ uri: W }) => {
									this.Y.fire(W);
								}),
							),
							this.D(
								this.qb("onmessage", ({ message: W, transfer: X }) => {
									this.$.fire({ message: W, transfer: X });
								}),
							),
							this.D(
								this.qb("did-scroll", ({ scrollYPercentage: W }) => {
									this.ab.fire({ scrollYPercentage: W });
								}),
							),
							this.D(
								this.qb("do-reload", () => {
									this.reload();
								}),
							),
							this.D(
								this.qb("do-update-state", (W) => {
									(this.state = W), this.cb.fire(W);
								}),
							),
							this.D(
								this.qb("did-focus", () => {
									this.vb(!0);
								}),
							),
							this.D(
								this.qb("did-blur", () => {
									this.vb(!1);
								}),
							),
							this.D(
								this.qb("did-scroll-wheel", (W) => {
									this.bb.fire(W);
								}),
							),
							this.D(
								this.qb("did-find", ({ didFind: W }) => {
									this.Db.fire(W);
								}),
							),
							this.D(
								this.qb("fatal-error", (W) => {
									z.error((0, h.localize)(11368, null, W.message)),
										this.fb.fire({ message: W.message });
								}),
							),
							this.D(
								this.qb("did-keydown", (W) => {
									this.wb("keydown", W);
								}),
							),
							this.D(
								this.qb("did-keyup", (W) => {
									this.wb("keyup", W);
								}),
							),
							this.D(
								this.qb("did-context-menu", (W) => {
									if (!this.n || !this.w) return;
									const X = this.n.getBoundingClientRect(),
										Y = this.w.createOverlay([
											...Object.entries(W.context),
											[M, this.providedViewType],
										]);
									U.showContextMenu({
										menuId: n.$XX.WebviewContext,
										menuActionOptions: { shouldForwardArgs: !0 },
										contextKeyService: Y,
										getActionsContext: () => ({
											...W.context,
											webview: this.providedViewType,
										}),
										getAnchor: () => ({
											x: X.x + W.clientX,
											y: X.y + W.clientY,
										}),
									}),
										this.hb("set-context-menu-visible", { visible: !0 });
								}),
							),
							this.D(
								this.qb("load-resource", async (W) => {
									try {
										const X = (0, k.$W2b)(W.authority),
											Y = u.URI.from({
												scheme: W.scheme,
												authority: X,
												path: decodeURIComponent(W.path),
												query: W.query ? decodeURIComponent(W.query) : W.query,
											});
										this.zb(W.id, Y, W.ifNoneMatch);
									} catch {
										this.hb("did-load-resource", {
											id: W.id,
											status: 404,
											path: W.path,
										});
									}
								}),
							),
							this.D(
								this.qb("load-localhost", (W) => {
									this.Bb(W.id, W.origin);
								}),
							),
							this.D(
								d.Event.runAndSubscribe(O.onThemeDataChanged, () => this.ub()),
							),
							this.D(J.onDidChangeReducedMotion(() => this.ub())),
							this.D(J.onDidChangeScreenReaderOptimized(() => this.ub())),
							this.D(
								U.onDidHideContextMenu(() =>
									this.hb("set-context-menu-visible", { visible: !1 }),
								),
							),
							(this.z = B.getValue("window.confirmBeforeClose")),
							this.D(
								B.onDidChangeConfiguration((W) => {
									W.affectsConfiguration("window.confirmBeforeClose") &&
										((this.z = B.getValue("window.confirmBeforeClose")),
										this.hb("set-confirm-before-close", this.z));
								}),
							),
							this.D(
								this.qb("drag-start", () => {
									this.lb();
								}),
							),
							this.D(
								this.qb("drag", (W) => {
									this.xb("drag", W);
								}),
							),
							R.options.enableFindWidget &&
								(this.J = this.D(K.createInstance(P.$e6c, this)));
					}
					dispose() {
						if (
							((this.L = !0),
							this.n?.remove(),
							(this.m = void 0),
							(this.H = void 0),
							this.r.type === D.Type.Initializing)
						) {
							for (const R of this.r.pendingMessages) R.resolve(!1);
							this.r.pendingMessages = [];
						}
						this.gb.fire(), this.u.dispose(!0), super.dispose();
					}
					setContextKeyService(R) {
						this.w = R;
					}
					postMessage(R, O) {
						return this.hb("message", { message: R, transfer: O });
					}
					async hb(R, O, B = []) {
						if (this.r.type === D.Type.Initializing) {
							const { promise: U, resolve: z } = (0, w.$Fh)();
							return (
								this.r.pendingMessages.push({
									channel: R,
									data: O,
									transferable: B,
									resolve: z,
								}),
								U
							);
						} else return this.pb(R, O, B);
					}
					ib(R, O) {
						const B = document.createElement("iframe");
						(B.name = this.a),
							(B.className = `webview ${R.customClasses || ""}`),
							B.sandbox.add(
								"allow-scripts",
								"allow-same-origin",
								"allow-forms",
								"allow-pointer-lock",
								"allow-downloads",
							);
						const U = ["cross-origin-isolated", "autoplay"];
						return (
							t.$Ofb || U.push("clipboard-read", "clipboard-write"),
							B.setAttribute("allow", U.join("; ")),
							(B.style.border = "none"),
							(B.style.width = "100%"),
							(B.style.height = "100%"),
							(B.focus = () => {
								this.Cb();
							}),
							B
						);
					}
					jb(R, O, B, U) {
						const z = {
							id: this.a,
							origin: this.origin,
							swVersion: String(this.j),
							extensionId: O?.id.value ?? "",
							platform: this.h,
							"vscode-resource-base-authority": k.$T2b,
							parentOrigin: U.origin,
						};
						this.M.disableServiceWorker && (z.disableServiceWorker = "true"),
							this.O.remoteAuthority &&
								(z.remoteAuthority = this.O.remoteAuthority),
							B.purpose && (z.purpose = B.purpose),
							r.COI.addSearchParam(z, !0, !0);
						const F = new URLSearchParams(z).toString(),
							x = t.$Ofb ? "index-no-csp.html" : "index.html";
						this.n.setAttribute("src", `${this.nb(R)}/${x}?${F}`);
					}
					mountTo(R, O) {
						if (this.n) {
							(this.b = O.vscodeWindowId),
								(this.f = (0, S.$1fb)(O.origin, this.origin).then(
									(B) => (this.g = B),
								)),
								this.f.then((B) => {
									this.L || this.jb(B, this.extension, this.M, O);
								}),
								this.kb(O),
								this.J && R.appendChild(this.J.getDomNode());
							for (const B of [
								i.$$gb.MOUSE_DOWN,
								i.$$gb.MOUSE_MOVE,
								i.$$gb.DROP,
							])
								this.D(
									(0, i.$0fb)(R, B, () => {
										this.mb();
									}),
								);
							for (const B of [R, O])
								this.D(
									(0, i.$0fb)(B, i.$$gb.DRAG_END, () => {
										this.mb();
									}),
								);
							(R.id = this.a), R.appendChild(this.n);
						}
					}
					kb(R) {
						const O = this.D(
							(0, i.$0fb)(R, "message", (B) => {
								if (!(!this.g || B?.data?.target !== this.a)) {
									if (B.origin !== this.ob(this.g)) {
										console.log(
											`Skipped renderer receiving message due to mismatched origins: ${B.origin} ${this.ob}`,
										);
										return;
									}
									if (B.data.channel === "webview-ready") {
										if (this.H) return;
										this.Q.debug(`Webview(${this.a}): webview ready`),
											(this.H = B.ports[0]),
											(this.H.onmessage = (U) => {
												const z = this.I.get(U.data.channel);
												if (!z) {
													console.log(
														`No handlers found for '${U.data.channel}'`,
													);
													return;
												}
												z?.forEach((F) => F(U.data.data, U));
											}),
											this.n?.classList.add("ready"),
											this.r.type === D.Type.Initializing &&
												this.r.pendingMessages.forEach(
													({ channel: U, data: z, resolve: F }) =>
														F(this.pb(U, z)),
												),
											(this.r = D.Ready),
											O.dispose();
									}
								}
							}),
						);
					}
					lb() {
						this.n && (this.n.style.pointerEvents = "none");
					}
					mb() {
						this.n && (this.n.style.pointerEvents = "auto");
					}
					nb(R) {
						const O = this.O.webviewExternalEndpoint;
						if (!O)
							throw new Error(
								"'webviewExternalEndpoint' has not been configured. Webviews will not work!",
							);
						const B = O.replace("{{uuid}}", R);
						return B[B.length - 1] === "/" ? B.slice(0, B.length - 1) : B;
					}
					ob(R) {
						const O = u.URI.parse(this.nb(R));
						return O.scheme + "://" + O.authority.toLowerCase();
					}
					pb(R, O, B = []) {
						return this.n && this.H
							? (this.H.postMessage({ channel: R, args: O }, B), !0)
							: !1;
					}
					qb(R, O) {
						let B = this.I.get(R);
						return (
							B || ((B = new Set()), this.I.set(R, B)),
							B.add(O),
							(0, m.$Yc)(() => {
								this.I.get(R)?.delete(O);
							})
						);
					}
					sb() {
						if (!this.rb && ((this.rb = !0), this.extension?.id)) {
							this.O.isExtensionDevelopment && this.X.fire(this.extension.id);
							const R = { extension: this.extension.id.value };
							this.S.publicLog2("webviewMissingCsp", R);
						}
					}
					reload() {
						this.tb(this.s);
						const R = this.D(
							this.qb("did-load", () => {
								this.Z.fire(), R.dispose();
							}),
						);
					}
					setHtml(R) {
						this.tb({ ...this.s, html: R }), this.F.fire(R);
					}
					setTitle(R) {
						(this.s = { ...this.s, title: R }), this.hb("set-title", R);
					}
					set contentOptions(R) {
						if (
							(this.Q.debug(`Webview(${this.a}): will update content options`),
							(0, T.$4Ib)(R, this.s.options))
						) {
							this.Q.debug(
								`Webview(${this.a}): skipping content options update`,
							);
							return;
						}
						this.tb({ ...this.s, options: R });
					}
					set localResourcesRoot(R) {
						this.s = {
							...this.s,
							options: { ...this.s.options, localResourceRoots: R },
						};
					}
					set state(R) {
						this.s = { ...this.s, state: R };
					}
					set initialScrollProgress(R) {
						this.hb("initial-scroll-position", R);
					}
					tb(R) {
						this.Q.debug(`Webview(${this.a}): will update content`),
							(this.s = R);
						const O = !!this.s.options.allowScripts;
						this.hb("content", {
							contents: this.s.html,
							title: this.s.title,
							options: {
								allowMultipleAPIAcquire:
									!!this.s.options.allowMultipleAPIAcquire,
								allowScripts: O,
								allowForms: this.s.options.allowForms ?? O,
							},
							state: this.s.state,
							cspSource: k.$U2b,
							confirmBeforeClose: this.z,
						});
					}
					ub() {
						let {
							styles: R,
							activeTheme: O,
							themeLabel: B,
							themeId: U,
						} = this.N.getWebviewThemeData();
						this.M.transformCssVariables &&
							(R = this.M.transformCssVariables(R));
						const z = this.W.isMotionReduced(),
							F = this.W.isScreenReaderOptimized();
						this.hb("styles", {
							styles: R,
							activeTheme: O,
							themeId: U,
							themeLabel: B,
							reduceMotion: z,
							screenReader: F,
						});
					}
					vb(R) {
						(this.q = R), R ? this.db.fire() : this.eb.fire();
					}
					wb(R, O) {
						const B = new KeyboardEvent(R, O);
						Object.defineProperty(B, "target", { get: () => this.n }),
							this.c?.dispatchEvent(B);
					}
					xb(R, O) {
						const B = new DragEvent(R, O);
						Object.defineProperty(B, "target", { get: () => this.n }),
							this.c?.dispatchEvent(B);
					}
					windowDidDragStart() {
						this.lb();
					}
					windowDidDragEnd() {
						this.mb();
					}
					selectAll() {
						this.yb("selectAll");
					}
					copy() {
						this.yb("copy");
					}
					paste() {
						this.yb("paste");
					}
					cut() {
						this.yb("cut");
					}
					undo() {
						this.yb("undo");
					}
					redo() {
						this.yb("redo");
					}
					yb(R) {
						this.n && this.hb("execCommand", R);
					}
					async zb(R, O, B) {
						try {
							const U = await (0, I.$d6c)(
								O,
								{
									ifNoneMatch: B,
									roots: this.s.options.localResourceRoots || [],
								},
								this.P,
								this.Q,
								this.u.token,
							);
							switch (U.type) {
								case I.WebviewResourceResponse.Type.Success: {
									const z = await this.Ab(U.stream);
									return this.hb(
										"did-load-resource",
										{
											id: R,
											status: 200,
											path: O.path,
											mime: U.mimeType,
											data: z,
											etag: U.etag,
											mtime: U.mtime,
										},
										[z],
									);
								}
								case I.WebviewResourceResponse.Type.NotModified:
									return this.hb("did-load-resource", {
										id: R,
										status: 304,
										path: O.path,
										mime: U.mimeType,
										mtime: U.mtime,
									});
								case I.WebviewResourceResponse.Type.AccessDenied:
									return this.hb("did-load-resource", {
										id: R,
										status: 401,
										path: O.path,
									});
							}
						} catch {}
						return this.hb("did-load-resource", {
							id: R,
							status: 404,
							path: O.path,
						});
					}
					async Ab(R) {
						return (await (0, E.$6e)(R)).buffer.buffer;
					}
					async Bb(R, O) {
						const B = this.O.remoteAuthority,
							U = B ? await this.R.resolveAuthority(B) : void 0,
							z = U ? await this.t.getRedirect(U.authority, O) : void 0;
						return this.hb("did-load-localhost", {
							id: R,
							origin: O,
							location: z,
						});
					}
					focus() {
						this.Cb(), this.vb(!0);
					}
					Cb() {
						if (this.n) {
							try {
								this.n.contentWindow?.focus();
							} catch {}
							this.C.trigger(async () => {
								!this.isFocused ||
									!this.n ||
									(this.c?.document.activeElement &&
										this.c.document.activeElement !== this.n &&
										this.c.document.activeElement?.tagName !== "BODY") ||
									(this.c?.document.body?.focus(), this.hb("focus", void 0));
							});
						}
					}
					find(R, O) {
						this.n && this.hb("find", { value: R, previous: O });
					}
					updateFind(R) {
						!R || !this.n || this.hb("find", { value: R });
					}
					stopFind(R) {
						this.n &&
							(this.hb("find-stop", { clearSelection: !R }), this.Eb.fire());
					}
					showFind(R = !0) {
						this.J?.reveal(void 0, R);
					}
					hideFind(R = !0) {
						this.J?.hide(R);
					}
					runFindAction(R) {
						this.J?.find(R);
					}
				};
				(e.$f6c = N),
					(e.$f6c = N =
						Ne(
							[
								j(2, g.$gj),
								j(3, p.$Xxb),
								j(4, s.$4N),
								j(5, L.$r8),
								j(6, o.$ll),
								j(7, b.$ik),
								j(8, l.$3l),
								j(9, y.$km),
								j(10, $.$cO),
								j(11, f.$Li),
								j(12, c.$XK),
							],
							N,
						));
			},
		),
		