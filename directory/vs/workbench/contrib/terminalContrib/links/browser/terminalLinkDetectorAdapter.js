import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './links.js';
import './terminalLink.js';
define(
			de[3158],
			he([1, 0, 6, 3, 4, 5, 513, 3157]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*nls*/,
 E /*instantiation*/,
 C /*links*/,
 d /*terminalLink*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fWc = void 0);
				let m = class extends i.$1c {
					constructor(u, a) {
						super(),
							(this.f = u),
							(this.g = a),
							(this.b = this.D(new t.$re())),
							(this.onDidActivateLink = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onDidShowHover = this.c.event),
							(this.h = new Map());
					}
					async provideLinks(u, a) {
						let h = this.h.get(u);
						if (h) {
							await h, a(this.a);
							return;
						}
						if (this.a) for (const c of this.a) c.dispose();
						(h = this.j(u)),
							this.h.set(u, h),
							(this.a = await h),
							this.h.delete(u),
							a(this.a);
					}
					async j(u) {
						const a = [];
						let h = u - 1,
							c = h;
						const n = [this.f.xterm.buffer.active.getLine(h)],
							g = Math.max(this.f.maxLinkLength, this.f.xterm.cols),
							p = Math.ceil(g / this.f.xterm.cols),
							o = Math.max(h - p, 0),
							f = Math.min(c + p, this.f.xterm.buffer.active.length);
						for (; h >= o && this.f.xterm.buffer.active.getLine(h)?.isWrapped; )
							n.unshift(this.f.xterm.buffer.active.getLine(h - 1)), h--;
						for (
							;
							c < f && this.f.xterm.buffer.active.getLine(c + 1)?.isWrapped;
						)
							n.push(this.f.xterm.buffer.active.getLine(c + 1)), c++;
						const b = await this.f.detect(n, h, c);
						for (const s of b)
							a.push(
								this.m(s, async (l) => this.b.fire({ link: s, event: l })),
							);
						return a;
					}
					m(u, a) {
						return (
							!u.disableTrimColon &&
								u.text.length > 0 &&
								u.text.charAt(u.text.length - 1) === ":" &&
								((u.text = u.text.slice(0, -1)), u.bufferRange.end.x--),
							this.g.createInstance(
								d.$eWc,
								this.f.xterm,
								u.bufferRange,
								u.text,
								u.uri,
								u.parsedLink,
								u.actions,
								this.f.xterm.buffer.active.viewportY,
								a,
								(h, c, n, g) =>
									this.c.fire({
										link: h,
										viewportRange: c,
										modifierDownCallback: n,
										modifierUpCallback: g,
									}),
								u.type !== C.TerminalBuiltinLinkType.Search,
								u.label || this.n(u.type),
								u.type,
							)
						);
					}
					n(u) {
						switch (u) {
							case C.TerminalBuiltinLinkType.Search:
								return (0, w.localize)(10532, null);
							case C.TerminalBuiltinLinkType.LocalFile:
								return (0, w.localize)(10533, null);
							case C.TerminalBuiltinLinkType.LocalFolderInWorkspace:
								return (0, w.localize)(10534, null);
							case C.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace:
								return (0, w.localize)(10535, null);
							case C.TerminalBuiltinLinkType.Url:
							default:
								return (0, w.localize)(10536, null);
						}
					}
				};
				(e.$fWc = m), (e.$fWc = m = Ne([j(1, E.$Li)], m));
			},
		),
		