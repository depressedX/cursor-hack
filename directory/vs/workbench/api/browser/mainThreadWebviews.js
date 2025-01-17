import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/platform.js';
import '../../../base/common/strings.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../../platform/opener/common/opener.js';
import '../../../platform/product/common/productService.js';
import '../common/extHost.protocol.js';
import '../common/extHostWebviewMessaging.js';
import '../../services/extensions/common/proxyIdentifier.js';
define(
			de[831],
			he([1, 0, 3, 23, 12, 37, 9, 4, 41, 62, 88, 3374, 622]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lmc = void 0),
					(e.$Mmc = g),
					(e.$Nmc = p),
					(u = mt(u));
				let n = class extends t.$1c {
					static {
						c = this;
					}
					static {
						this.a = new Set([
							i.Schemas.http,
							i.Schemas.https,
							i.Schemas.mailto,
							i.Schemas.vscode,
							"vscode-insider",
						]);
					}
					constructor(f, b, s) {
						super(),
							(this.f = b),
							(this.g = s),
							(this.c = new Map()),
							(this.b = f.getProxy(u.$mbb.ExtHostWebviews));
					}
					addWebview(f, b, s) {
						if (this.c.has(f)) throw new Error("Webview already registered");
						this.c.set(f, b), this.h(f, b, s);
					}
					$setHtml(f, b) {
						this.n(f)?.setHtml(b);
					}
					$setOptions(f, b) {
						const s = this.n(f);
						s && (s.contentOptions = p(b));
					}
					async $postMessage(f, b, ...s) {
						const l = this.n(f);
						if (!l) return !1;
						const { message: y, arrayBuffers: $ } = (0, a.$Kmc)(b, s);
						return l.postMessage(y, $);
					}
					h(f, b, s) {
						const l = new t.$Zc();
						l.add(b.onDidClickLink((y) => this.j(f, y))),
							l.add(
								b.onMessage((y) => {
									const $ = (0, a.$Jmc)(y.message, s);
									this.b.$onMessage(f, $.message, new h.$uO($.buffers));
								}),
							),
							l.add(b.onMissingCsp((y) => this.b.$onMissingCsp(f, y.value))),
							l.add(
								b.onDidDispose(() => {
									l.dispose(), this.c.delete(f);
								}),
							);
					}
					j(f, b) {
						const s = this.q(f);
						this.m(s, C.URI.parse(b)) &&
							this.f.open(b, {
								fromUserGesture: !0,
								allowContributedOpeners: !0,
								allowCommands:
									Array.isArray(s.contentOptions.enableCommandUris) ||
									s.contentOptions.enableCommandUris === !0,
								fromWorkspace: !0,
							});
					}
					m(f, b) {
						return c.a.has(b.scheme) ||
							(!w.$r && this.g.urlProtocol === b.scheme)
							? !0
							: b.scheme === i.Schemas.command
								? Array.isArray(f.contentOptions.enableCommandUris)
									? f.contentOptions.enableCommandUris.includes(b.path)
									: f.contentOptions.enableCommandUris === !0
								: !1;
					}
					n(f) {
						return this.c.get(f);
					}
					q(f) {
						const b = this.n(f);
						if (!b) throw new Error(`Unknown webview handle:${f}`);
						return b;
					}
					getWebviewResolvedFailedContent(f) {
						return `<!DOCTYPE html>
		<html>
			<head>
				<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none';">
			</head>
			<body>${(0, d.localize)(2584, null, (0, E.$nf)(f))}</body>
		</html>`;
					}
				};
				(e.$Lmc = n), (e.$Lmc = n = c = Ne([j(1, m.$7rb), j(2, r.$Bk)], n));
				function g(o) {
					return { id: o.id, location: C.URI.revive(o.location) };
				}
				function p(o) {
					return {
						allowScripts: o.enableScripts,
						allowForms: o.enableForms,
						enableCommandUris: o.enableCommandUris,
						localResourceRoots: Array.isArray(o.localResourceRoots)
							? o.localResourceRoots.map((f) => C.URI.revive(f))
							: void 0,
						portMapping: o.portMapping,
					};
				}
			},
		),
		