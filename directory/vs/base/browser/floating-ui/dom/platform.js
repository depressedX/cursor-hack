define(
			de[1576],
			he([1, 0, 2664, 2666, 662, 2659, 538, 2661, 2667, 929, 324]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lmb = void 0),
					(e.$Lmb = {
						getClippingRect: i.$Hmb,
						convertOffsetParentRelativeRectToViewportRelativeRect: t.$Dmb,
						isElement: u.$hmb,
						getDimensions: E.$Imb,
						getOffsetParent: d.$Jmb,
						getDocumentElement: C.$xmb,
						getScale: r.$umb,
						async getElementRects({ reference: a, floating: h, strategy: c }) {
							const n = this.getOffsetParent || d.$Jmb,
								g = this.getDimensions;
							return {
								reference: (0, m.$Kmb)(a, await n(h), c),
								floating: { x: 0, y: 0, ...(await g(h)) },
							};
						},
						getClientRects: (a) => Array.from(a.getClientRects()),
						isRTL: (a) => (0, w.$dmb)(a).direction === "rtl",
					});
			},
		),
		