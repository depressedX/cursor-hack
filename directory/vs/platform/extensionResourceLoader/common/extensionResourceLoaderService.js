import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/extensions.js';
import '../../files/common/files.js';
import '../../product/common/productService.js';
import '../../request/common/request.js';
import '../../storage/common/storage.js';
import '../../environment/common/environment.js';
import '../../configuration/common/configuration.js';
import '../../../base/common/cancellation.js';
import './extensionResourceLoader.js';
define(
			de[2898],
			he([1, 0, 20, 22, 62, 327, 21, 113, 10, 33, 546]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*files*/,
 w /*productService*/,
 E /*request*/,
 C /*storage*/,
 d /*environment*/,
 m /*configuration*/,
 r /*cancellation*/,
 u /*extensionResourceLoader*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ybd = void 0);
				let a = class extends u.$dYb {
					constructor(c, n, g, p, o, f) {
						super(c, n, g, p, o), (this.m = f);
					}
					async readExtensionResource(c) {
						if (this.isExtensionGalleryResource(c)) {
							const g = await this.h(),
								p = await this.m.request(
									{ url: c.toString(), headers: g },
									r.CancellationToken.None,
								);
							return (await (0, E.$Fq)(p)) || "";
						}
						return (await this.c.readFile(c)).value.toString();
					}
				};
				(e.$Ybd = a),
					(e.$Ybd = a =
						Ne(
							[
								j(0, i.$ll),
								j(1, C.$lq),
								j(2, w.$Bk),
								j(3, d.$Ti),
								j(4, m.$gj),
								j(5, E.$Aq),
							],
							a,
						)),
					(0, t.$lK)(u.$bYb, a, t.InstantiationType.Delayed);
			},
		)
