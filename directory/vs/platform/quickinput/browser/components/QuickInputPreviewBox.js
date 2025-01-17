import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/uuid.js';
define(
			de[2749],
			he([1, 0, 2, 2, 2, 2, 13, 7, 47]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ixc = void 0);
				const r = (0, t.template)('<div class="quick-input-preview-box">'),
					u = (a) => {
						const h = (0, m.$9g)(),
							[c, n] = (0, C.createSignal)(null),
							g = (o) =>
								(0, d.$Ngb)()
									.querySelector(".quick-input-widget")
									?.getBoundingClientRect() ?? o.getBoundingClientRect();
						(0, C.createEffect)(() => {
							const o = a.container,
								f = (0, d.$Ogb)(),
								b = () => {
									n(g(o));
								};
							(0, C.onMount)(() => {
								n(g(o)), f.addEventListener("resize", b);
							}),
								(0, C.onCleanup)(() => {
									(0, d.$Ogb)().removeEventListener("resize", b);
								});
						});
						const p = (0, C.createMemo)(
							() => !!a.item && (a.item.semSearchData || a.item.cppReportEvent),
						);
						return (
							(0, C.createEffect)(() => {
								const o = a.reactiveStorageService,
									f = () => {
										o &&
											o.setNonPersistentStorage({
												quickInputPreviewBoxDomId: void 0,
												quickInputCurrentItem: void 0,
											});
									};
								if (!p()) {
									f();
									return;
								}
								const b = a.item;
								(0, C.onMount)(() => {
									o &&
										o.setNonPersistentStorage({
											quickInputPreviewBoxDomId: h,
											quickInputCurrentItem: b,
										});
								}),
									(0, C.onCleanup)(() => {
										f();
									});
							}),
							(0, E.createComponent)(C.Show, {
								get when() {
									return c();
								},
								children: (o) =>
									(() => {
										const f = r();
										return (
											(0, w.setAttribute)(f, "id", h),
											f.style.setProperty("position", "fixed"),
											f.style.setProperty("z-index", "1000"),
											(0, i.effect)(
												(b) => {
													const s = `${o().left}px`,
														l = `${o().bottom + 5}px`,
														y = `${o().width}px`;
													return (
														s !== b._v$ &&
															((b._v$ = s) != null
																? f.style.setProperty("left", s)
																: f.style.removeProperty("left")),
														l !== b._v$2 &&
															((b._v$2 = l) != null
																? f.style.setProperty("top", l)
																: f.style.removeProperty("top")),
														y !== b._v$3 &&
															((b._v$3 = y) != null
																? f.style.setProperty("width", y)
																: f.style.removeProperty("width")),
														b
													);
												},
												{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
											),
											f
										);
									})(),
							})
						);
					};
				e.$Ixc = u;
			},
		),
		