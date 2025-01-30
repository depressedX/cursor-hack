import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/opener/common/opener.js';
import '../../url/browser/trustedDomainService.js';
define(
			de[3277],
			he([1, 0, 95, 3, 251, 61, 72, 41, 1292]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hoverDelegateFactory*/,
 i /*lifecycle*/,
 w /*markdownRenderer*/,
 E /*language*/,
 C /*hover*/,
 d /*opener*/,
 m /*trustedDomainService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Xb = void 0);
				const r = [
					"b",
					"blockquote",
					"br",
					"code",
					"em",
					"h1",
					"h2",
					"h3",
					"h4",
					"h5",
					"h6",
					"hr",
					"i",
					"li",
					"ol",
					"p",
					"pre",
					"strong",
					"sub",
					"sup",
					"table",
					"tbody",
					"td",
					"th",
					"thead",
					"tr",
					"ul",
					"a",
					"img",
					"span",
					"div",
				];
				let u = class extends w.$Qzb {
					constructor(h, c, n, g, p) {
						super(h ?? {}, c, n), (this.g = g), (this.h = p);
					}
					render(h, c, n) {
						c = {
							...c,
							remoteImageIsAllowed: (o) => this.g.isValid(o),
							sanitizerOptions: { replaceWithPlaintext: !0, allowedTags: r },
						};
						const g =
								h && h.supportHtml
									? {
											...h,
											value: `<body>

${h.value}</body>`,
										}
									: h,
							p = super.render(g, c, n);
						return this.i(p);
					}
					i(h) {
						const c = new i.$Zc();
						return (
							h.element.querySelectorAll("a").forEach((n) => {
								if (n.title) {
									const g = n.title;
									(n.title = ""),
										c.add(
											this.h.setupManagedHover((0, t.$cib)("element"), n, g),
										);
								}
							}),
							{
								element: h.element,
								dispose: () => {
									h.dispose(), c.dispose();
								},
							}
						);
					}
				};
				(e.$3Xb = u),
					(e.$3Xb = u =
						Ne([j(1, E.$nM), j(2, d.$7rb), j(3, m.$ZXb), j(4, C.$Uyb)], u));
			},
		),
		