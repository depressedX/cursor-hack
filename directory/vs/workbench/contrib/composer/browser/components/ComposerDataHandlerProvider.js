define(de[4147], he([1, 0, 2, 13, 36]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerDataHandlerProvider = void 0);
			const E = (C) => {
				const d = (0, w.$odc)(),
					[m, r] = (0, i.createSignal)(void 0);
				return (
					(0, i.createEffect)(() => {
						const u = C.composerId;
						let a = !1;
						const c = (async () => {
							const n = await d.composerDataService.getComposerHandleById(u);
							if (a) {
								n?.dispose();
								return;
							}
							return r(n), n;
						})();
						(0, i.onCleanup)(() => {
							(a = !0),
								r(void 0),
								c.then((n) => {
									n?.dispose();
								});
						});
					}),
					(0, t.createComponent)(i.Show, {
						get when() {
							return m();
						},
						children: (u) => C.children(u),
					})
				);
			};
			e.ComposerDataHandlerProvider = E;
		}),
		