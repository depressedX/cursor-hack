import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/platform.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/native/common/native.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/event.js';
define(
			de[3248],
			he([1, 0, 121, 9, 12, 20, 110, 76, 6]),
			function (ce /*require*/,
 e /*exports*/,
 t /*clipboardService*/,
 i /*uri*/,
 w /*platform*/,
 E /*extensions*/,
 C /*native*/,
 d /*buffer*/,
 m /*event*/) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zdd = void 0);
				let u = class {
					static {
						r = this;
					}
					static {
						this.a = "code/file-list";
					}
					constructor(h) {
						(this.c = h),
							(this.b = new m.$re()),
							(this.onDidChangeClipboard = this.b.event);
					}
					async writeText(h, c) {
						return this.b.fire(h), this.c.writeClipboardText(h, c);
					}
					async readText(h) {
						return this.c.readClipboardText(h);
					}
					async readFindText() {
						return w.$m ? this.c.readClipboardFindText() : "";
					}
					async writeFindText(h) {
						if (w.$m) return this.c.writeClipboardFindText(h);
					}
					async writeResources(h) {
						if (h.length) return this.c.writeClipboardBuffer(r.a, this.d(h));
					}
					async readResources() {
						return this.e(await this.c.readClipboardBuffer(r.a));
					}
					async hasResources() {
						return this.c.hasClipboard(r.a);
					}
					d(h) {
						return d.$Te.fromString(
							h
								.map((c) => c.toString())
								.join(`
`),
						);
					}
					e(h) {
						if (!h) return [];
						const c = h.toString();
						if (!c) return [];
						try {
							return c
								.split(`
`)
								.map((n) => i.URI.parse(n));
						} catch {
							return [];
						}
					}
				};
				(e.$zdd = u),
					(e.$zdd = u = r = Ne([j(0, C.$y7c)], u)),
					(0, E.$lK)(t.$Vxb, u, E.InstantiationType.Delayed);
			},
		)
