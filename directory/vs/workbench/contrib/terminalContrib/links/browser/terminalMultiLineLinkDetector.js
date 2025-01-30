import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../../platform/workspace/common/workspace.js';
import './links.js';
import './terminalLinkHelpers.js';
import '../../../../../platform/terminal/common/terminal.js';
define(
			de[3162],
			he([1, 0, 68, 25, 513, 562, 117]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uriIdentity*/,
 i /*workspace*/,
 w /*links*/,
 E /*terminalLinkHelpers*/,
 C /*terminal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pWc = void 0);
				var d;
				(function (a) {
					(a[(a.MaxLineLength = 2e3)] = "MaxLineLength"),
						(a[(a.MaxResolvedLinkLength = 1024)] = "MaxResolvedLinkLength");
				})(d || (d = {}));
				const m = [/^ *(?<link>(?<line>\d+):(?<col>\d+)?)/],
					r = [/^(?<link>@@ .+ \+(?<toFileLine>\d+),(?<toFileCount>\d+) @@)/];
				let u = class {
					static {
						this.id = "multiline";
					}
					constructor(h, c, n, g, p, o) {
						(this.xterm = h),
							(this.a = c),
							(this.b = n),
							(this.c = g),
							(this.d = p),
							(this.e = o),
							(this.maxLinkLength = 500);
					}
					async detect(h, c, n) {
						const g = [],
							p = (0, E.$_Vc)(this.xterm.buffer.active, c, n, this.xterm.cols);
						if (p === "" || p.length > d.MaxLineLength) return [];
						this.c.trace("terminalMultiLineLinkDetector#detect text", p);
						for (const o of m) {
							const b = p.match(o)?.groups;
							if (!b) continue;
							const s = b?.link,
								l = b?.line,
								y = b?.col;
							if (!s || l === void 0 || s.length > d.MaxResolvedLinkLength)
								continue;
							this.c.trace("terminalMultiLineLinkDetector#detect candidate", s);
							let $;
							for (let S = c - 1; S >= 0; S--) {
								if (this.xterm.buffer.active.getLine(S).isWrapped) continue;
								const I = (0, E.$_Vc)(
									this.xterm.buffer.active,
									S,
									S,
									this.xterm.cols,
								);
								if (!I.match(/^\s*\d/)) {
									$ = I;
									break;
								}
							}
							if (!$) continue;
							const v = await this.b.resolveLink(this.a, $);
							if (v) {
								let S;
								v.isDirectory
									? this.f(v.uri)
										? (S = w.TerminalBuiltinLinkType.LocalFolderInWorkspace)
										: (S =
												w.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace)
									: (S = w.TerminalBuiltinLinkType.LocalFile);
								const I = (0, E.$0Vc)(
										h,
										this.xterm.cols,
										{
											startColumn: 1,
											startLineNumber: 1,
											endColumn: 1 + p.length,
											endLineNumber: 1,
										},
										c,
									),
									T = {
										text: s,
										uri: v.uri,
										selection: {
											startLineNumber: parseInt(l),
											startColumn: y ? parseInt(y) : 1,
										},
										disableTrimColon: !0,
										bufferRange: I,
										type: S,
									};
								this.c.trace(
									"terminalMultiLineLinkDetector#detect verified link",
									T,
								),
									g.push(T);
								break;
							}
						}
						if (g.length === 0)
							for (const o of r) {
								const b = p.match(o)?.groups;
								if (!b) continue;
								const s = b?.link,
									l = b?.toFileLine,
									y = b?.toFileCount;
								if (!s || l === void 0 || s.length > d.MaxResolvedLinkLength)
									continue;
								this.c.trace(
									"terminalMultiLineLinkDetector#detect candidate",
									s,
								);
								let $;
								for (let S = c - 1; S >= 0; S--) {
									if (this.xterm.buffer.active.getLine(S).isWrapped) continue;
									const T = (0, E.$_Vc)(
										this.xterm.buffer.active,
										S,
										S,
										this.xterm.cols,
									).match(/\+\+\+ b\/(?<path>.+)/);
									if (T) {
										$ = T.groups?.path;
										break;
									}
								}
								if (!$) continue;
								const v = await this.b.resolveLink(this.a, $);
								if (v) {
									let S;
									v.isDirectory
										? this.f(v.uri)
											? (S = w.TerminalBuiltinLinkType.LocalFolderInWorkspace)
											: (S =
													w.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace)
										: (S = w.TerminalBuiltinLinkType.LocalFile);
									const I = (0, E.$0Vc)(
											h,
											this.xterm.cols,
											{
												startColumn: 1,
												startLineNumber: 1,
												endColumn: 1 + s.length,
												endLineNumber: 1,
											},
											c,
										),
										T = {
											text: s,
											uri: v.uri,
											selection: {
												startLineNumber: parseInt(l),
												startColumn: 1,
												endLineNumber: parseInt(l) + parseInt(y),
											},
											bufferRange: I,
											type: S,
										};
									this.c.trace(
										"terminalMultiLineLinkDetector#detect verified link",
										T,
									),
										g.push(T);
									break;
								}
							}
						return g;
					}
					f(h) {
						const c = this.e.getWorkspace().folders;
						for (let n = 0; n < c.length; n++)
							if (this.d.extUri.isEqualOrParent(h, c[n].uri)) return !0;
						return !1;
					}
				};
				(e.$pWc = u),
					(e.$pWc = u = Ne([j(3, C.$YJ), j(4, t.$Vl), j(5, i.$Vi)], u));
			},
		),
		