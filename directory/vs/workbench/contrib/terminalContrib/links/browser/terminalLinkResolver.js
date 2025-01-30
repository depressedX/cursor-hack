import '../../../../../../require.js';
import '../../../../../../exports.js';
import './terminalLinkParsing.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/platform.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../base/common/path.js';
import '../../../../../base/browser/window.js';
define(
			de[3160],
			he([1, 0, 997, 9, 23, 12, 22, 54, 75]),
			function (ce /*require*/,
 e /*exports*/,
 t /*terminalLinkParsing*/,
 i /*uri*/,
 w /*network*/,
 E /*platform*/,
 C /*files*/,
 d /*path*/,
 m /*window*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tWc = void 0);
				let r = class {
					constructor(c) {
						(this.b = c), (this.a = new Map());
					}
					async resolveLink(c, n, g) {
						g &&
							g.scheme === w.Schemas.file &&
							c.remoteAuthority &&
							(g = g.with({
								scheme: w.Schemas.vscodeRemote,
								authority: c.remoteAuthority,
							}));
						let p = this.a.get(c.remoteAuthority ?? "");
						p || ((p = new a()), this.a.set(c.remoteAuthority ?? "", p));
						const o = p.get(g || n);
						if (o !== void 0) return o;
						if (g)
							try {
								const b = await this.b.stat(g),
									s = { uri: g, link: n, isDirectory: b.isDirectory };
								return p.set(g, s), s;
							} catch {
								return p.set(g, null), null;
							}
						let f = (0, t.$woc)(n);
						if (((f = (0, t.$xoc)(f)), f.length === 0))
							return p.set(n, null), null;
						if (E.$l && n.match(/^\/mnt\/[a-z]/i) && c.backend)
							f = await c.backend.getWslPath(f, "unix-to-win");
						else if (
							!(E.$l && n.match(/^(?:\/\/|\\\\)wsl(?:\$|\.localhost)(\/|\\)/))
						) {
							const b = this.c(f, c.initialCwd, c.os, c.userHome);
							if (!b) return p.set(n, null), null;
							f = b;
						}
						try {
							let b;
							c.remoteAuthority
								? (b = i.URI.from({
										scheme: w.Schemas.vscodeRemote,
										authority: c.remoteAuthority,
										path: f,
									}))
								: (b = i.URI.file(f));
							try {
								const s = await this.b.stat(b),
									l = { uri: b, link: n, isDirectory: s.isDirectory };
								return p.set(n, l), l;
							} catch {
								return p.set(n, null), null;
							}
						} catch {
							return p.set(n, null), null;
						}
					}
					c(c, n, g, p) {
						const o = this.d(g);
						if (c.charAt(0) === "~") {
							if (!p) return null;
							c = o.join(p, c.substring(1));
						} else if (c.charAt(0) !== "/" && c.charAt(0) !== "~")
							if (g === E.OperatingSystem.Windows)
								if (!c.match("^" + t.$Coc) && !c.startsWith("\\\\?\\")) {
									if (!n) return null;
									c = o.join(n, c);
								} else c = c.replace(/^\\\\\?\\/, "");
							else {
								if (!n) return null;
								c = o.join(n, c);
							}
						return (c = o.normalize(c)), c;
					}
					d(c) {
						return (c ?? E.OS) === E.OperatingSystem.Windows ? d.$kc : d.$lc;
					}
				};
				(e.$tWc = r), (e.$tWc = r = Ne([j(0, C.$ll)], r));
				var u;
				(function (h) {
					h[(h.TTL = 1e4)] = "TTL";
				})(u || (u = {}));
				class a {
					constructor() {
						(this.a = new Map()), (this.b = 0);
					}
					set(c, n) {
						this.b && m.$Bfb.clearTimeout(this.b),
							(this.b = m.$Bfb.setTimeout(() => this.a.clear(), u.TTL)),
							this.a.set(this.c(c), n);
					}
					get(c) {
						return this.a.get(this.c(c));
					}
					c(c) {
						return i.URI.isUri(c) ? c.toString() : c;
					}
				}
			},
		),
		