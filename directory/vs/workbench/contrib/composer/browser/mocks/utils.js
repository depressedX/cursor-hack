define(de[795], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SPACE = e.createComposerFakeStreamer = void 0);
			const t = 1,
				i = 1,
				w = 3,
				E = 10,
				C = (d) => {
					const {
							content: m,
							minChunkCharCount: r,
							maxChunkCharCount: u,
							minDelayMs: a,
							maxDelayMs: h,
						} = d,
						c = r ?? t,
						n = u ?? i,
						g = a ?? w,
						p = h ?? E;
					return async function* () {
						let o = 0;
						for (; o < m.length; ) {
							const f = Math.floor(Math.random() * (n - c) + c),
								b = Math.floor(Math.random() * (p - g) + g);
							yield { text: m.slice(o, o + f) },
								await new Promise((s) => setTimeout(s, b)),
								(o += f);
						}
					};
				};
			(e.createComposerFakeStreamer = C), (e.SPACE = " ");
		}),
		