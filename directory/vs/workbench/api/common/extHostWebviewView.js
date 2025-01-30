import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import './extHostWebview.js';
import './extHostTypeConverters.js';
import './extHost.protocol.js';
import './extHostTypes.js';
define(
			Pe[591],
			Ne([1, 0, 4, 3, 145, 17, 6, 11]),
			function (we, t, e, r, S, N, P, I) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$ejd = void 0),
					(P = tt(P)),
					(I = tt(I));
				class l extends r.$1c {
					#e;
					#t;
					#n;
					#i;
					#r;
					#s;
					#o;
					#a;
					#c;
					constructor(y, d, k, g, c, h) {
						super(),
							(this.#r = !1),
							(this.#l = this.D(new e.$re())),
							(this.onDidChangeVisibility = this.#l.event),
							(this.#u = this.D(new e.$re())),
							(this.onDidDispose = this.#u.event),
							(this.#n = k),
							(this.#o = g),
							(this.#e = y),
							(this.#t = d),
							(this.#i = c),
							(this.#s = h);
					}
					dispose() {
						this.#r ||
							((this.#r = !0),
							this.#u.fire(),
							this.#i.dispose(),
							super.dispose());
					}
					#l;
					#u;
					get title() {
						return this.a(), this.#o;
					}
					set title(y) {
						this.a(),
							this.#o !== y &&
								((this.#o = y), this.#t.$setWebviewViewTitle(this.#e, y));
					}
					get description() {
						return this.a(), this.#a;
					}
					set description(y) {
						this.a(),
							this.#a !== y &&
								((this.#a = y), this.#t.$setWebviewViewDescription(this.#e, y));
					}
					get visible() {
						return this.#s;
					}
					get webview() {
						return this.#i;
					}
					get viewType() {
						return this.#n;
					}
					_setVisible(y) {
						y === this.#s || this.#r || ((this.#s = y), this.#l.fire());
					}
					get badge() {
						return this.a(), this.#c;
					}
					set badge(y) {
						this.a(),
							!(
								y?.value === this.#c?.value && y?.tooltip === this.#c?.tooltip
							) &&
								((this.#c = N.ViewBadge.from(y)),
								this.#t.$setWebviewViewBadge(this.#e, y));
					}
					show(y) {
						this.a(), this.#t.$show(this.#e, !!y);
					}
					a() {
						if (this.#r) throw new Error("Webview is disposed");
					}
				}
				class n {
					constructor(y, d) {
						(this.d = d),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.a = y.getProxy(P.$lbb.MainThreadWebviewViews));
					}
					registerWebviewViewProvider(y, d, k, g) {
						if (this.b.has(d))
							throw new Error(`View provider for '${d}' already registered`);
						return (
							this.b.set(d, { provider: k, extension: y }),
							this.a.$registerWebviewViewProvider((0, S.$Ahd)(y), d, {
								retainContextWhenHidden: g?.retainContextWhenHidden,
								serializeBuffersForPostMessage: (0, S.$yhd)(y),
							}),
							new I.$nbb(() => {
								this.b.delete(d), this.a.$unregisterWebviewViewProvider(d);
							})
						);
					}
					async $resolveWebviewView(y, d, k, g, c) {
						const h = this.b.get(d);
						if (!h) throw new Error(`No view provider found for '${d}'`);
						const { provider: $, extension: T } = h,
							a = this.d.createNewWebview(y, {}, T),
							u = new l(y, this.a, d, k, a, !0);
						this.c.set(y, u), await $.resolveWebviewView(u, { state: g }, c);
					}
					async $onDidChangeWebviewViewVisibility(y, d) {
						this.e(y)._setVisible(d);
					}
					async $disposeWebviewView(y) {
						const d = this.e(y);
						this.c.delete(y), d.dispose(), this.d.deleteWebview(y);
					}
					e(y) {
						const d = this.c.get(y);
						if (!d) throw new Error("No webview found");
						return d;
					}
				}
				t.$ejd = n;
			},
		),
		