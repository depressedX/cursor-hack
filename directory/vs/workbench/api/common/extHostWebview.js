import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/objects.js';
import '../../../base/common/uri.js';
import '../../../platform/extensions/common/extensionValidator.js';
import './extHostWebviewMessaging.js';
import '../../contrib/webview/common/webview.js';
import './extHost.protocol.js';
define(
			Pe[145],
			Ne([1, 0, 4, 3, 16, 27, 2, 499, 552, 189, 6]),
			function (we, t, e, r, S, N, P, I, l, n, p) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$zhd = t.$xhd = void 0),
					(t.$yhd = d),
					(t.$Ahd = c),
					(t.$Bhd = h),
					(N = tt(N)),
					(p = tt(p));
				class y {
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
					constructor(u, s, f, o, w, m, E) {
						(this.#o = ""),
							(this.#c = !1),
							(this.#l = !1),
							(this._onMessageEmitter = new e.$re()),
							(this.onDidReceiveMessage = this._onMessageEmitter.event),
							(this.#d = new e.$re()),
							(this._onDidDispose = this.#d.event),
							(this.#e = u),
							(this.#t = s),
							(this.#a = f),
							(this.#i = o),
							(this.#r = w),
							(this.#s = m),
							(this.#u = d(m)),
							(this.#h = k(m)),
							(this.#n = E);
					}
					#d;
					dispose() {
						(this.#c = !0),
							this.#d.fire(),
							this.#d.dispose(),
							this._onMessageEmitter.dispose();
					}
					asWebviewUri(u) {
						return (this.#l = !0), (0, n.$V2b)(u, this.#i);
					}
					get cspSource() {
						const u = this.#s.extensionLocation;
						if (u.scheme === S.Schemas.https || u.scheme === S.Schemas.http) {
							let s = u.toString();
							return s.endsWith("/") || (s += "/"), s + " " + n.$U2b;
						}
						return n.$U2b;
					}
					get html() {
						return this.a(), this.#o;
					}
					set html(u) {
						this.a(),
							this.#o !== u &&
								((this.#o = u),
								this.#h &&
									!this.#l &&
									/(["'])vscode-resource:([^\s'"]+?)(["'])/i.test(u) &&
									((this.#l = !0),
									this.#n.report(
										"Webview vscode-resource: uris",
										this.#s,
										"Please migrate to use the 'webview.asWebviewUri' api instead: https://aka.ms/vscode-webview-use-aswebviewuri",
									)),
								this.#t.$setHtml(this.#e, this.b(u)));
					}
					get options() {
						return this.a(), this.#a;
					}
					set options(u) {
						this.a(),
							N.$zo(this.#a, u) ||
								this.#t.$setOptions(this.#e, h(this.#s, this.#r, u)),
							(this.#a = u);
					}
					async postMessage(u) {
						if (this.#c) return !1;
						const s = (0, l.$Jmc)(u, {
							serializeBuffersForPostMessage: this.#u,
						});
						return this.#t.$postMessage(this.#e, s.message, ...s.buffers);
					}
					a() {
						if (this.#c) throw new Error("Webview is disposed");
					}
					b(u) {
						if (!this.#h) return u;
						const s =
								this.#s.extensionLocation?.scheme === S.Schemas.vscodeRemote,
							f =
								this.#s.extensionLocation.scheme === S.Schemas.vscodeRemote
									? this.#s.extensionLocation.authority
									: void 0;
						return u
							.replace(
								/(["'])(?:vscode-resource):(\/\/([^\s\/'"]+?)(?=\/))?([^\s'"]+?)(["'])/gi,
								(o, w, m, E, R, C) => {
									const O = P.URI.from({
											scheme: E || "file",
											path: decodeURIComponent(R),
										}),
										A = (0, n.$V2b)(O, {
											isRemote: s,
											authority: f,
										}).toString();
									return `${w}${A}${C}`;
								},
							)
							.replace(
								/(["'])(?:vscode-webview-resource):(\/\/[^\s\/'"]+\/([^\s\/'"]+?)(?=\/))?([^\s'"]+?)(["'])/gi,
								(o, w, m, E, R, C) => {
									const O = P.URI.from({
											scheme: E || "file",
											path: decodeURIComponent(R),
										}),
										A = (0, n.$V2b)(O, {
											isRemote: s,
											authority: f,
										}).toString();
									return `${w}${A}${C}`;
								},
							);
					}
				}
				t.$xhd = y;
				function d(a) {
					try {
						const u = (0, I.$uq)((0, I.$tq)(a.engines.vscode));
						return !!u && u.majorBase >= 1 && u.minorBase >= 57;
					} catch {
						return !1;
					}
				}
				function k(a) {
					try {
						const u = (0, I.$uq)((0, I.$tq)(a.engines.vscode));
						return u
							? u.majorBase < 1 || (u.majorBase === 1 && u.minorBase < 60)
							: !1;
					} catch {
						return !1;
					}
				}
				class g extends r.$1c {
					constructor(u, s, f, o, w) {
						super(),
							(this.c = s),
							(this.f = f),
							(this.g = o),
							(this.h = w),
							(this.b = new Map()),
							(this.a = u.getProxy(p.$lbb.MainThreadWebviews));
					}
					dispose() {
						super.dispose();
						for (const u of this.b.values()) u.dispose();
						this.b.clear();
					}
					$onMessage(u, s, f) {
						const o = this.j(u);
						if (o) {
							const { message: w } = (0, l.$Kmc)(s, f.value);
							o._onMessageEmitter.fire(w);
						}
					}
					$onMissingCsp(u, s) {
						this.g.warn(
							`${s} created a webview without a content security policy: https://aka.ms/vscode-webview-missing-csp`,
						);
					}
					createNewWebview(u, s, f) {
						const o = new y(u, this.a, $(s), this.c, this.f, f, this.h);
						this.b.set(u, o);
						const w = o._onDidDispose(() => {
							w.dispose(), this.deleteWebview(u);
						});
						return o;
					}
					deleteWebview(u) {
						this.b.delete(u);
					}
					j(u) {
						return this.b.get(u);
					}
				}
				t.$zhd = g;
				function c(a) {
					return { id: a.identifier, location: a.extensionLocation };
				}
				function h(a, u, s) {
					return {
						enableCommandUris: s.enableCommandUris,
						enableScripts: s.enableScripts,
						enableForms: s.enableForms,
						portMapping: s.portMapping,
						localResourceRoots: s.localResourceRoots || T(a, u),
					};
				}
				function $(a) {
					return {
						enableCommandUris: a.enableCommandUris,
						enableScripts: a.enableScripts,
						enableForms: a.enableForms,
						portMapping: a.portMapping,
						localResourceRoots: a.localResourceRoots?.map((u) => P.URI.from(u)),
					};
				}
				function T(a, u) {
					return [
						...(u?.getWorkspaceFolders() || []).map((s) => s.uri),
						a.extensionLocation,
					];
				}
			},
		),
		