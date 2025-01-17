import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/htmlContent.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/uri.js';
import '../../../../../nls.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/tunnel/common/tunnel.js';
import './links.js';
import './terminalExternalLinkDetector.js';
import './terminalLinkDetectorAdapter.js';
import './terminalLinkOpeners.js';
import './terminalLocalLinkDetector.js';
import './terminalUriLinkDetector.js';
import './terminalWordLinkDetector.js';
import '../../../terminal/browser/terminal.js';
import '../../../terminal/browser/widgets/terminalHoverWidget.js';
import '../../../terminal/common/terminal.js';
import './terminalLinkHelpers.js';
import '../../../../../base/common/async.js';
import '../../../../../platform/terminal/common/terminal.js';
import './terminalMultiLineLinkDetector.js';
import '../../../../../platform/notification/common/notification.js';
define(
			de[3599],
			he([
				1, 0, 7, 94, 3, 12, 9, 4, 10, 5, 374, 513, 3156, 3158, 3598, 3161, 3163,
				3171, 107, 3146, 145, 562, 15, 117, 3162, 40,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qWc = void 0),
					(d = mt(d));
				let I = class extends w.$Zc {
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.m = P),
							(this.n = k),
							(this.q = D),
							(this.s = M),
							(this.t = N),
							(this.u = A),
							(this.w = R),
							(this.z = O),
							(this.B = B),
							(this.b = new Map()),
							(this.c = []),
							(this.h = []),
							(this.j = new Map());
						let U = !0;
						switch (this.s.getValue(s.$ieb).enableFileLinks) {
							case "off":
							case !1:
								U = !1;
								break;
							case "notRemote":
								U = !this.n.remoteAuthority;
								break;
						}
						U &&
							(this.C(
								v.$pWc.id,
								this.u.createInstance(v.$pWc, this.m, this.n, this.q),
							),
							this.C(
								g.$lWc.id,
								this.u.createInstance(g.$lWc, this.m, L, this.n, this.q),
							)),
							this.C(
								p.$mWc.id,
								this.u.createInstance(p.$mWc, this.m, this.n, this.q),
							),
							this.C(
								o.$nWc.id,
								this.add(this.u.createInstance(o.$nWc, this.m)),
							);
						const F = this.u.createInstance(n.$gWc),
							x = this.u.createInstance(n.$hWc);
						this.j.set(a.TerminalBuiltinLinkType.LocalFile, F),
							this.j.set(a.TerminalBuiltinLinkType.LocalFolderInWorkspace, x),
							this.j.set(
								a.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace,
								this.u.createInstance(n.$iWc),
							),
							this.j.set(
								a.TerminalBuiltinLinkType.Search,
								this.u.createInstance(
									n.$jWc,
									L,
									this.n.initialCwd,
									F,
									x,
									() => this.n.os || E.OS,
								),
							),
							this.j.set(
								a.TerminalBuiltinLinkType.Url,
								this.u.createInstance(n.$kWc, !!this.n.remoteAuthority),
							),
							this.L();
						let H, q;
						this.add(
							(0, w.$Yc)(() => {
								this.J(), (0, w.$Vc)(this.h), H?.dispose(), q?.dispose();
							}),
						),
							(this.m.options.linkHandler = {
								allowNonHttpProtocols: !0,
								activate: (V, G) => {
									if (!this.M(V)) return;
									const K = G.indexOf(":");
									if (K === -1)
										throw new Error(`Could not find scheme in link "${G}"`);
									const J = G.substring(0, K);
									this.t.config.allowedLinkSchemes.indexOf(J) === -1 &&
										this.w.prompt(
											S.Severity.Warning,
											d.localize(10537, null, J),
											[
												{
													label: d.localize(10538, null, J),
													run: () => {
														const W = [...this.t.config.allowedLinkSchemes, J];
														this.s.updateValue(
															"terminal.integrated.allowedLinkSchemes",
															W,
														);
													},
												},
											],
										),
										this.j
											.get(a.TerminalBuiltinLinkType.Url)
											?.open({
												type: a.TerminalBuiltinLinkType.Url,
												text: G,
												bufferRange: null,
												uri: C.URI.parse(G),
											});
								},
								hover: (V, G, K) => {
									H?.dispose(),
										(H = void 0),
										q?.dispose(),
										(q = new y.$Yh(() => {
											const J = this.m._core,
												W = {
													width: J._renderService.dimensions.css.cell.width,
													height: J._renderService.dimensions.css.cell.height,
												},
												X = { width: this.m.cols, height: this.m.rows };
											(H = this.I(
												{
													viewportRange: (0, l.$$Vc)(
														K,
														this.m.buffer.active.viewportY,
													),
													cellDimensions: W,
													terminalDimensions: X,
												},
												this.N(G, G),
												void 0,
												(Y) => this.m.options.linkHandler?.activate(V, Y, K),
											)),
												q?.dispose(),
												(q = void 0);
										}, this.s.getValue("workbench.hover.delay"))),
										q.schedule();
								},
							});
					}
					C(P, k, L = !1) {
						const D = this.add(this.u.createInstance(c.$fWc, k));
						return (
							this.add(
								D.onDidActivateLink((M) => {
									M.event?.preventDefault(),
										!(
											M.event &&
											!(M.event instanceof f.$oIb) &&
											!this.M(M.event)
										) &&
											(M.link.activate
												? M.link.activate(M.link.text)
												: this.D(M.link));
								}),
							),
							this.add(
								D.onDidShowHover((M) =>
									this.H(
										M.link,
										M.viewportRange,
										M.modifierDownCallback,
										M.modifierUpCallback,
									),
								),
							),
							L || this.b.set(P, D),
							D
						);
					}
					async D(P) {
						this.z.debug("Opening link", P);
						const k = this.j.get(P.type);
						if (!k)
							throw new Error(`No matching opener for link type "${P.type}"`);
						await k.open(P);
					}
					async openRecentLink(P) {
						let k,
							L = this.m.buffer.active.length;
						for (
							;
							(!k || k.length === 0) && L >= this.m.buffer.active.viewportY;
						)
							(k = await this.G(L, P)), L--;
						if (!k || k.length < 1) return;
						const D = new f.$oIb(t.$$gb.CLICK);
						return k[0].activate(D, k[0].text), k[0];
					}
					async getLinks() {
						const P = [];
						for (
							let A = this.m.buffer.active.viewportY + this.m.rows - 1;
							A >= this.m.buffer.active.viewportY;
							A--
						)
							P.push(this.F(A));
						const k = await Promise.all(P),
							L = {
								wordLinks: [],
								webLinks: [],
								fileLinks: [],
								folderLinks: [],
							};
						for (const A of k)
							if (A) {
								const {
									wordLinks: R,
									webLinks: O,
									fileLinks: B,
									folderLinks: U,
								} = A;
								R?.length && L.wordLinks.push(...R.reverse()),
									O?.length && L.webLinks.push(...O.reverse()),
									B?.length && L.fileLinks.push(...B.reverse()),
									U?.length && L.folderLinks.push(...U.reverse());
							}
						const D = [];
						for (let A = this.m.buffer.active.viewportY - 1; A >= 0; A--)
							D.push(this.F(A));
						const M = [];
						for (
							let A = this.m.buffer.active.length - 1;
							A >= this.m.buffer.active.viewportY + this.m.rows;
							A--
						)
							M.push(this.F(A));
						const N = Promise.all(D).then(async (A) => {
							const R = await Promise.all(M),
								O = {
									wordLinks: [...L.wordLinks],
									webLinks: [...L.webLinks],
									fileLinks: [...L.fileLinks],
									folderLinks: [...L.folderLinks],
								};
							for (const B of [...R, ...A])
								if (B) {
									const {
										wordLinks: U,
										webLinks: z,
										fileLinks: F,
										folderLinks: x,
									} = B;
									U?.length && O.wordLinks.push(...U.reverse()),
										z?.length && O.webLinks.push(...z.reverse()),
										F?.length && O.fileLinks.push(...F.reverse()),
										x?.length && O.folderLinks.push(...x.reverse());
								}
							return O;
						});
						return { viewport: L, all: N };
					}
					async F(P) {
						const k = await this.G(P, "word"),
							L = await this.G(P, "url"),
							D = await this.G(P, "localFile"),
							M = await this.G(P, "localFolder"),
							N = new Set();
						let A;
						if (k) {
							A = [];
							for (const R of k)
								!N.has(R.text) &&
									R.text.length > 1 &&
									(A.push(R), N.add(R.text));
						}
						return { wordLinks: A, webLinks: L, fileLinks: D, folderLinks: M };
					}
					async G(P, k) {
						switch (k) {
							case "word":
								return await new Promise((L) =>
									this.b.get(o.$nWc.id)?.provideLinks(P, L),
								);
							case "url":
								return await new Promise((L) =>
									this.b.get(p.$mWc.id)?.provideLinks(P, L),
								);
							case "localFile":
								return (
									await new Promise((D) =>
										this.b.get(g.$lWc.id)?.provideLinks(P, D),
									)
								)?.filter(
									(D) => D.type === a.TerminalBuiltinLinkType.LocalFile,
								);
							case "localFolder":
								return (
									await new Promise((D) =>
										this.b.get(g.$lWc.id)?.provideLinks(P, D),
									)
								)?.filter(
									(D) =>
										D.type === a.TerminalBuiltinLinkType.LocalFolderInWorkspace,
								);
						}
					}
					H(P, k, L, D) {
						if (!this.a) return;
						const M = this.m._core,
							N = {
								width: M._renderService.dimensions.css.cell.width,
								height: M._renderService.dimensions.css.cell.height,
							},
							A = { width: this.m.cols, height: this.m.rows };
						this.I(
							{
								viewportRange: k,
								cellDimensions: N,
								terminalDimensions: A,
								modifierDownCallback: L,
								modifierUpCallback: D,
							},
							this.N(P.text, P.label),
							P.actions,
							(R) => P.activate(void 0, R),
							P,
						);
					}
					I(P, k, L, D, M) {
						if (this.a) {
							const N = this.u.createInstance(b.$oWc, P, k, L, D),
								A = this.a.attachWidget(N);
							return A && M?.onInvalidated(() => A.dispose()), A;
						}
					}
					setWidgetManager(P) {
						this.a = P;
					}
					J() {
						(0, w.$Vc)(this.c), (this.c.length = 0);
					}
					L() {
						const P = async (D) => this.externalProvideLinksCb?.(D),
							k = `extension-${this.h.length}`,
							L = this.C(k, new h.$dWc(k, this.m, P), !0);
						this.c.push(this.m.registerLinkProvider(L));
						for (const D of this.b.values())
							this.c.push(this.m.registerLinkProvider(D));
					}
					M(P) {
						return this.s.getValue("editor").multiCursorModifier === "ctrlCmd"
							? !!P.altKey
							: E.$m
								? P.metaKey
								: P.ctrlKey;
					}
					N(P, k) {
						const L = this.s.getValue("editor");
						let D = "";
						L.multiCursorModifier === "ctrlCmd"
							? E.$m
								? (D = d.localize(10539, null))
								: (D = d.localize(10540, null))
							: E.$m
								? (D = d.localize(10541, null))
								: (D = d.localize(10542, null));
						let M = d.localize(10543, null);
						try {
							this.B.canTunnel(C.URI.parse(P)) && (M = d.localize(10544, null));
						} catch {}
						const N = new i.$cl("", !0);
						return (
							k && ((k = N.appendText(k).value), (N.value = "")),
							P && ((P = N.appendText(P).value), (N.value = "")),
							(k = k || M),
							(P = P || k),
							/(\s|&nbsp;)/.test(P) && (P = d.localize(10545, null)),
							N.appendLink(P, k).appendMarkdown(` (${D})`)
						);
					}
				};
				(e.$qWc = I),
					(e.$qWc = I =
						Ne(
							[
								j(4, m.$gj),
								j(5, f.$jIb),
								j(6, r.$Li),
								j(7, S.$4N),
								j(8, $.$YJ),
								j(9, u.$cO),
							],
							I,
						));
			},
		),
		