import '../../../../require.js';
import '../../../../exports.js';
import '../../../../external/solid/web.js';
import '../../../../external/solid/web.js';
import './components/QuickInputPreviewBox.js';
import '../../../base/browser/window.js';
import '../../../base/browser/webConstants.js';
define(
			de[2751],
			he([1, 0, 2, 2, 2749, 75, 740]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*QuickInputPreviewBox*/,
 E /*window*/,
 C /*webConstants*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Jxc = d);
				function d(m, r, u) {
					const a = E.$Bfb.document.createElement("div");
					a.classList.add("quick-input-preview-box"), m.appendChild(a);
					const h = C.$ujb.get(E.$Bfb);
					return {
						dispose: (0, i.render)(
							() =>
								(0, t.createComponent)(i.Portal, {
									mount: h,
									get children() {
										return (0, t.createComponent)(w.$Ixc, {
											item: r,
											container: m,
											reactiveStorageService: u,
										});
									},
								}),
							a,
						),
					};
				}
			},
		),
		