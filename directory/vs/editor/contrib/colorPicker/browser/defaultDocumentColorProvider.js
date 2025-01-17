import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/color.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/editorFeatures.js';
import '../../../common/services/editorWorker.js';
define(
		de[1599],
		he([1, 0, 97, 3, 69, 588, 200]),
		function (ce, e, t, i, w, E, C) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$UBb = void 0);
			let d = class {
				constructor(u) {
					this.a = u;
				}
				async provideDocumentColors(u, a) {
					return this.a.computeDefaultDocumentColors(u.uri);
				}
				provideColorPresentations(u, a, h) {
					const c = a.range,
						n = a.color,
						g = n.alpha,
						p = new t.$UL(
							new t.$RL(
								Math.round(255 * n.red),
								Math.round(255 * n.green),
								Math.round(255 * n.blue),
								g,
							),
						),
						o = g
							? t.$UL.Format.CSS.formatRGB(p)
							: t.$UL.Format.CSS.formatRGBA(p),
						f = g
							? t.$UL.Format.CSS.formatHSL(p)
							: t.$UL.Format.CSS.formatHSLA(p),
						b = g
							? t.$UL.Format.CSS.formatHex(p)
							: t.$UL.Format.CSS.formatHexA(p),
						s = [];
					return (
						s.push({ label: o, textEdit: { range: c, text: o } }),
						s.push({ label: f, textEdit: { range: c, text: f } }),
						s.push({ label: b, textEdit: { range: c, text: b } }),
						s
					);
				}
			};
			(e.$UBb = d), (e.$UBb = d = Ne([j(0, C.$Cxb)], d));
			let m = class extends i.$1c {
				constructor(u, a) {
					super(), this.D(u.colorProvider.register("*", new d(a)));
				}
			};
			(m = Ne([j(0, w.$k3), j(1, C.$Cxb)], m)), (0, E.$SBb)(m);
		},
	),
		