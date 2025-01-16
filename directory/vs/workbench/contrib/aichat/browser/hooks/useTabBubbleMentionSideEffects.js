define(de[4401], he([1, 0, 140, 1712, 2011]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$qbc = void 0);
			const E = (C, d, m) => {
				const r = (0, t.$zgc)(),
					u = (0, i.$abc)(C, d);
				return (0, w.$bbc)(
					(a, h, c, n) => {
						r.chatService.addContext({
							tabId: C(),
							bubbleId: d(),
							contextType: a,
							value: h,
							uuid: c,
							shouldShowPreview: void 0,
							addToUndoRedo: n,
						});
					},
					(a, h, c) => {
						r.chatService.removeContext({
							tabId: C(),
							bubbleId: d(),
							contextType: a,
							index: h,
							addToUndoRedo: c,
						});
					},
					(a) => {
						r.chatService.removeMention(C(), d(), a);
					},
					m,
					u,
				);
			};
			e.$qbc = E;
		}),
		