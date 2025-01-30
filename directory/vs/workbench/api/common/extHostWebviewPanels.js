import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../base/common/uuid.js';
import './extHostTypeConverters.js';
import './extHostWebview.js';
import './extHost.protocol.js';
import './extHostTypes.js';
define(
			Pe[590],
			Ne([1, 0, 4, 3, 2, 38, 17, 145, 6, 11]),
			function (we, t, e, r, S, N, P, I, l, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Chd = void 0),
					(P = tt(P)),
					(l = tt(l)),
					(n = tt(n));
				class p extends r.$1c {
					#e;
					#t;
					#n;
					#i;
					#r;
					#s;
					#o;
					#a;
					#c;
					#l;
					#u;
					#h;
					#d;
					constructor(g, c, h, $) {
						super(),
							(this.#a = void 0),
							(this.#c = !0),
							(this.#u = !1),
							(this.#h = this.D(new e.$re())),
							(this.onDidDispose = this.#h.event),
							(this.#d = this.D(new e.$re())),
							(this.onDidChangeViewState = this.#d.event),
							(this.#e = g),
							(this.#t = c),
							(this.#i = h),
							(this.#n = $.viewType),
							(this.#r = $.panelOptions),
							(this.#a = $.viewColumn),
							(this.#s = $.title),
							(this.#l = $.active);
					}
					dispose() {
						this.#u ||
							((this.#u = !0),
							this.#h.fire(),
							this.#t.$disposeWebview(this.#e),
							this.#i.dispose(),
							super.dispose());
					}
					get webview() {
						return this.c(), this.#i;
					}
					get viewType() {
						return this.c(), this.#n;
					}
					get title() {
						return this.c(), this.#s;
					}
					set title(g) {
						this.c(),
							this.#s !== g && ((this.#s = g), this.#t.$setTitle(this.#e, g));
					}
					get iconPath() {
						return this.c(), this.#o;
					}
					set iconPath(g) {
						this.c(),
							this.#o !== g &&
								((this.#o = g),
								this.#t.$setIconPath(
									this.#e,
									S.URI.isUri(g) ? { light: g, dark: g } : g,
								));
					}
					get options() {
						return this.#r;
					}
					get viewColumn() {
						if ((this.c(), !(typeof this.#a == "number" && this.#a < 0)))
							return this.#a;
					}
					get active() {
						return this.c(), this.#l;
					}
					get visible() {
						return this.c(), this.#c;
					}
					_updateViewState(g) {
						this.#u ||
							((this.active !== g.active ||
								this.visible !== g.visible ||
								this.viewColumn !== g.viewColumn) &&
								((this.#l = g.active),
								(this.#c = g.visible),
								(this.#a = g.viewColumn),
								this.#d.fire({ webviewPanel: this })));
					}
					reveal(g, c) {
						this.c(),
							this.#t.$reveal(this.#e, {
								viewColumn: typeof g > "u" ? void 0 : P.ViewColumn.from(g),
								preserveFocus: !!c,
							});
					}
					c() {
						if (this.#u) throw new Error("Webview is disposed");
					}
				}
				class y extends r.$1c {
					static c() {
						return (0, N.$9g)();
					}
					constructor(g, c, h) {
						super(),
							(this.j = c),
							(this.m = h),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.f = g.getProxy(l.$lbb.MainThreadWebviewPanels));
					}
					dispose() {
						super.dispose(), this.g.forEach((g) => g.dispose()), this.g.clear();
					}
					createWebviewPanel(g, c, h, $, T = {}) {
						const a = typeof $ == "object" ? $.viewColumn : $,
							u = {
								viewColumn: P.ViewColumn.from(a),
								preserveFocus: typeof $ == "object" && !!$.preserveFocus,
							},
							s = (0, I.$yhd)(g),
							f = y.c();
						this.f.$createWebviewPanel(
							(0, I.$Ahd)(g),
							f,
							c,
							{
								title: h,
								panelOptions: d(T),
								webviewOptions: (0, I.$Bhd)(g, this.m, T),
								serializeBuffersForPostMessage: s,
							},
							u,
						);
						const o = this.j.createNewWebview(f, T, g);
						return this.createNewWebviewPanel(f, c, h, a, T, o, !0);
					}
					$onDidChangeWebviewPanelViewStates(g) {
						const c = Object.keys(g);
						c.sort((h, $) => {
							const T = g[h],
								a = g[$];
							return T.active ? 1 : a.active ? -1 : +T.visible - +a.visible;
						});
						for (const h of c) {
							const $ = this.getWebviewPanel(h);
							if (!$) continue;
							const T = g[h];
							$._updateViewState({
								active: T.active,
								visible: T.visible,
								viewColumn: P.ViewColumn.to(T.position),
							});
						}
					}
					async $onDidDisposeWebviewPanel(g) {
						this.getWebviewPanel(g)?.dispose(),
							this.g.delete(g),
							this.j.deleteWebview(g);
					}
					registerWebviewPanelSerializer(g, c, h) {
						if (this.h.has(c))
							throw new Error(`Serializer for '${c}' already registered`);
						return (
							this.h.set(c, { serializer: h, extension: g }),
							this.f.$registerSerializer(c, {
								serializeBuffersForPostMessage: (0, I.$yhd)(g),
							}),
							new n.$nbb(() => {
								this.h.delete(c), this.f.$unregisterSerializer(c);
							})
						);
					}
					async $deserializeWebviewPanel(g, c, h, $) {
						const T = this.h.get(c);
						if (!T) throw new Error(`No serializer found for '${c}'`);
						const { serializer: a, extension: u } = T,
							s = this.j.createNewWebview(g, h.webviewOptions, u),
							f = this.createNewWebviewPanel(
								g,
								c,
								h.title,
								$,
								h.panelOptions,
								s,
								h.active,
							);
						await a.deserializeWebviewPanel(f, h.state);
					}
					createNewWebviewPanel(g, c, h, $, T, a, u) {
						const s = new p(g, this.f, a, {
							viewType: c,
							title: h,
							viewColumn: $,
							panelOptions: T,
							active: u,
						});
						return this.g.set(g, s), s;
					}
					getWebviewPanel(g) {
						return this.g.get(g);
					}
				}
				t.$Chd = y;
				function d(k) {
					return {
						enableFindWidget: k.enableFindWidget,
						retainContextWhenHidden: k.retainContextWhenHidden,
					};
				}
			},
		),
		