import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/languages/linkComputer.js';
import '../../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../../platform/workspace/common/workspace.js';
import './links.js';
import './terminalLinkHelpers.js';
import '../../../../../platform/terminal/common/terminal.js';
define(
			de[3163],
			he([1, 0, 23, 9, 1535, 68, 25, 513, 562, 117]),
			function (ce /*require*/,
 e /*exports*/,
 t /*network*/,
 i /*uri*/,
 w /*linkComputer*/,
 E /*uriIdentity*/,
 C /*workspace*/,
 d /*links*/,
 m /*terminalLinkHelpers*/,
 r /*terminal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mWc = void 0);
				var u;
				(function (c) {
					c[(c.MaxResolvedLinksInLine = 10)] = "MaxResolvedLinksInLine";
				})(u || (u = {}));
				let a = class {
					static {
						this.id = "uri";
					}
					constructor(n, g, p, o, f, b) {
						(this.xterm = n),
							(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.maxLinkLength = 2048);
					}
					async detect(n, g, p) {
						const o = [],
							f = new h(this.xterm, g, p),
							b = w.$1wb.computeLinks(f);
						let s = 0;
						this.c.trace("terminalUriLinkDetector#detect computedLinks", b);
						for (const l of b) {
							const y = (0, m.$0Vc)(n, this.xterm.cols, l.range, g),
								$ = l.url
									? typeof l.url == "string"
										? i.URI.parse(this.g(l.url))
										: l.url
									: void 0;
							if (!$) continue;
							const v = l.url?.toString() || "";
							if (v.length > this.maxLinkLength) continue;
							if ($.scheme !== t.Schemas.file) {
								o.push({
									text: v,
									uri: $,
									bufferRange: y,
									type: d.TerminalBuiltinLinkType.Url,
								});
								continue;
							}
							if ($.authority.length !== 2 && $.authority.endsWith(":"))
								continue;
							const S = [$];
							$.authority.length > 0 &&
								S.push(i.URI.from({ ...$, authority: void 0 })),
								this.c.trace("terminalUriLinkDetector#detect uriCandidates", S);
							for (const I of S) {
								const T = await this.b.resolveLink(this.a, v, I);
								if (T) {
									let P;
									T.isDirectory
										? this.f(I)
											? (P = d.TerminalBuiltinLinkType.LocalFolderInWorkspace)
											: (P =
													d.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace)
										: (P = d.TerminalBuiltinLinkType.LocalFile);
									const k = {
										text: typeof l.url == "string" ? l.url : T.link,
										uri: I,
										bufferRange: y,
										type: P,
									};
									this.c.trace(
										"terminalUriLinkDetector#detect verified link",
										k,
									),
										o.push(k),
										s++;
									break;
								}
							}
							if (++s >= u.MaxResolvedLinksInLine) break;
						}
						return o;
					}
					f(n) {
						const g = this.e.getWorkspace().folders;
						for (let p = 0; p < g.length; p++)
							if (this.d.extUri.isEqualOrParent(n, g[p].uri)) return !0;
						return !1;
					}
					g(n) {
						return n.replace(/:\d+(:\d+)?$/, "");
					}
				};
				(e.$mWc = a),
					(e.$mWc = a = Ne([j(3, r.$YJ), j(4, E.$Vl), j(5, C.$Vi)], a));
				class h {
					constructor(n, g, p) {
						(this.a = n), (this.b = g), (this.c = p);
					}
					getLineCount() {
						return 1;
					}
					getLineContent() {
						return (0, m.$_Vc)(
							this.a.buffer.active,
							this.b,
							this.c,
							this.a.cols,
						);
					}
				}
			},
		)
