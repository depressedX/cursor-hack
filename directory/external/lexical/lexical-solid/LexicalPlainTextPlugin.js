define(
			de[1160],
			he([1, 0, 2, 2, 181, 2156, 2607, 2158, 2613, 13]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.PlainTextPlugin = u),
					(e.Placeholder = a);
				function u(h) {
					const [c] = (0, w.useLexicalComposerContext)(),
						n = (0, d.useDecorators)(c, h.errorBoundary);
					return (
						(0, m.usePlainTextSetup)(c),
						[
							(0, i.memo)(() => h.contentEditable),
							(0, t.createComponent)(a, {
								get content() {
									return h.placeholder;
								},
							}),
							n,
						]
					);
				}
				function a(h) {
					const [c] = (0, w.useLexicalComposerContext)(),
						n = (0, C.useCanShowPlaceholder)(c),
						g = (0, E.useLexicalEditable)(),
						p = (0, r.createMemo)(() => h.content);
					return (0, t.createComponent)(r.Show, {
						get when() {
							return n();
						},
						get children() {
							return (0, t.createComponent)(r.Show, {
								get when() {
									return typeof p() == "function";
								},
								get fallback() {
									return p();
								},
								get children() {
									return (0, r.untrack)(() => p()(g()));
								},
							});
						},
					});
				}
			},
		),
		