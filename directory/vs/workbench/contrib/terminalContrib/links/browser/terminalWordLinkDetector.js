import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/strings.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../base/common/network.js';
import '../../../../../platform/product/common/productService.js';
import '../../../../../platform/terminal/common/terminal.js';
import './links.js';
import './terminalLinkHelpers.js';
import '../../../terminal/common/terminal.js';
define(
			de[3171],
			he([1, 0, 3, 37, 9, 10, 23, 62, 117, 513, 562, 145]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*strings*/,
 w /*uri*/,
 E /*configuration*/,
 C /*network*/,
 d /*productService*/,
 m /*terminal*/,
 r /*links*/,
 u /*terminalLinkHelpers*/,
 a /*terminal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nWc = void 0);
				var h;
				(function (n) {
					n[(n.MaxLineLength = 2e3)] = "MaxLineLength";
				})(h || (h = {}));
				let c = class extends t.$1c {
					static {
						this.id = "word";
					}
					constructor(g, p, o) {
						super(),
							(this.xterm = g),
							(this.b = p),
							(this.c = o),
							(this.maxLinkLength = 100),
							this.g(),
							this.D(
								this.b.onDidChangeConfiguration((f) => {
									f.affectsConfiguration(m.TerminalSettingId.WordSeparators) &&
										this.g();
								}),
							);
					}
					detect(g, p, o) {
						const f = [],
							b = (0, u.$_Vc)(this.xterm.buffer.active, p, o, this.xterm.cols);
						if (b === "" || b.length > h.MaxLineLength) return [];
						const s = this.f(b);
						for (const l of s) {
							if (l.text === "") continue;
							l.text.length > 0 &&
								l.text.charAt(l.text.length - 1) === ":" &&
								((l.text = l.text.slice(0, -1)), l.endIndex--);
							const y = (0, u.$0Vc)(
								g,
								this.xterm.cols,
								{
									startColumn: l.startIndex + 1,
									startLineNumber: 1,
									endColumn: l.endIndex + 1,
									endLineNumber: 1,
								},
								p,
							);
							if ((0, C.$Vg)(l.text, this.c.urlProtocol)) {
								const $ = w.URI.parse(l.text);
								$ &&
									f.push({
										text: l.text,
										uri: $,
										bufferRange: y,
										type: r.TerminalBuiltinLinkType.Url,
									});
								continue;
							}
							f.push({
								text: l.text,
								bufferRange: y,
								type: r.TerminalBuiltinLinkType.Search,
								contextLine: b,
							});
						}
						return f;
					}
					f(g) {
						const p = [],
							o = g.split(this.a);
						let f = 0;
						for (let b = 0; b < o.length; b++)
							p.push({ text: o[b], startIndex: f, endIndex: f + o[b].length }),
								(f += o[b].length + 1);
						return p;
					}
					g() {
						const g = this.b.getValue(a.$ieb).wordSeparators;
						let p = "";
						for (let o = 57520; o <= 57535; o++) p += String.fromCharCode(o);
						this.a = new RegExp(`[${(0, i.$of)(g)}${p}]`, "g");
					}
				};
				(e.$nWc = c), (e.$nWc = c = Ne([j(1, E.$gj), j(2, d.$Bk)], c));
			},
		),
		