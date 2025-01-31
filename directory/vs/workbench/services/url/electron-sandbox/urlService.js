import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/url/common/url.js';
import '../../../../base/common/uri.js';
import '../../../../platform/ipc/common/mainProcessService.js';
import '../../../../platform/url/common/urlIpc.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/network.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/parts/ipc/common/ipc.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/url/common/urlService.js';
import '../../../../platform/log/common/log.js';
define(
			de[3746],
			he([1, 0, 465, 9, 371, 2881, 41, 23, 62, 20, 305, 110, 2882, 34]),
			function (ce /*require*/,
 e /*exports*/,
 t /*url*/,
 i /*uri*/,
 w /*mainProcessService*/,
 E /*urlIpc*/,
 C /*opener*/,
 d /*network*/,
 m /*productService*/,
 r /*extensions*/,
 u /*ipc*/,
 a /*native*/,
 h /*urlService*/,
 c /*log*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rdd = void 0);
				let n = class extends h.$4rb {
					constructor(p, o, f, b, s) {
						super(b),
							(this.f = f),
							(this.g = s),
							(this.c = u.ProxyChannel.toService(p.getChannel("url"))),
							p.registerChannel("urlHandler", new E.$07c(this)),
							o.registerOpener(this);
					}
					create(p) {
						const o = super.create(p);
						let f = o.query;
						return (
							f
								? (f += `&windowId=${encodeURIComponent(this.f.windowId)}`)
								: (f = `windowId=${encodeURIComponent(this.f.windowId)}`),
							o.with({ query: f })
						);
					}
					async open(p, o) {
						return (0, d.$Vg)(p, this.b.urlProtocol)
							? (typeof p == "string" && (p = i.URI.parse(p)),
								await this.c.open(p, o))
							: !1;
					}
					async handleURL(p, o) {
						const f = await super.open(p, o);
						return (
							f
								? (this.g.trace(
										"URLService#handleURL(): handled",
										p.toString(!0),
									),
									await this.f.focusWindow({
										force: !0,
										targetWindowId: this.f.windowId,
									}))
								: this.g.trace(
										"URLService#handleURL(): not handled",
										p.toString(!0),
									),
							f
						);
					}
				};
				(e.$rdd = n),
					(e.$rdd = n =
						Ne(
							[
								j(0, w.$V8c),
								j(1, C.$7rb),
								j(2, a.$y7c),
								j(3, m.$Bk),
								j(4, c.$ik),
							],
							n,
						)),
					(0, r.$lK)(t.$2rb, n, r.InstantiationType.Eager);
			},
		)
