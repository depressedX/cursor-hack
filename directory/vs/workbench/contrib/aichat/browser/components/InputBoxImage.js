import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import '../../../../../platform/theme/common/iconRegistry.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/network.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[1364],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 79, 14, 9, 23, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*solid*/,
 u /*themables*/,
 a /*iconRegistry*/,
 h /*codicons*/,
 c /*uri*/,
 n /*network*/,
 g /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fbc = void 0),
					(e.$Gbc = b);
				const p = (0, t.template)("<span>"),
					o = (0, t.template)(
						'<div><div><div></div></div><div class="input-box-code-selection"><div><img alt="Image not found">',
					);
				e.$Fbc = (0, a.$$O)(
					"chatinputbox-remove-selection",
					h.$ak.x,
					"Icon for removing a selection in the input box in AI chat.",
				);
				const f = 20;
				function b(s) {
					const l = (0, g.$odc)(),
						[y, $] = (0, r.createSignal)(!1),
						[v, S] = (0, r.createSignal)(!0);
					let I;
					(0, r.createEffect)(() => {
						if (!s.image) {
							S(!1);
							return;
						}
						(async () => {
							try {
								if (!s.image) {
									S(!1);
									return;
								}
								const k = c.URI.file(s.image.path),
									L = await l.fileService.exists(k);
								S(L);
							} catch {
								S(!1);
							}
						})();
					});
					const T = (0, r.createMemo)(() => {
						if (!s.image) return "";
						const P = c.URI.file(s.image.path);
						return n.$7g.uriToBrowserUri(P).toString();
					});
					return (0, m.createComponent)(r.Show, {
						get when() {
							return s.image;
						},
						children: (P) =>
							(() => {
								const k = o(),
									L = k.firstChild,
									D = L.firstChild,
									M = L.nextSibling,
									N = M.firstChild,
									A = N.firstChild;
								return (
									L.style.setProperty("display", "flex"),
									D.style.setProperty("flex-grow", "1"),
									M.addEventListener("mouseout", () => {
										I = setTimeout(() => {
											$(!1);
										}, f);
									}),
									M.addEventListener("mouseover", () => {
										I && (clearTimeout(I), (I = void 0)), $(!0);
									}),
									M.style.setProperty("position", "relative"),
									M.style.setProperty("border-radius", "4px"),
									M.style.setProperty("overflow", "hidden"),
									(0, E.insert)(
										M,
										(0, m.createComponent)(r.Show, {
											get when() {
												return y() && s.removeImage;
											},
											get children() {
												const R = p();
												return (
													R.addEventListener("click", (O) => {
														O.stopPropagation(), s.removeImage?.();
													}),
													R.style.setProperty("position", "absolute"),
													R.style.setProperty("top", "0.25rem"),
													R.style.setProperty("right", "0.25rem"),
													R.style.setProperty("font-size", "1em"),
													R.style.setProperty("z-index", "1"),
													R.style.setProperty(
														"background",
														"var(--vscode-editorWidget-border)",
													),
													R.style.setProperty("border-radius", "3px"),
													R.style.setProperty("cursor", "pointer"),
													(0, d.effect)(() =>
														(0, C.className)(
															R,
															u.ThemeIcon.asClassName(e.$Fbc),
														),
													),
													R
												);
											},
										}),
										N,
									),
									N.style.setProperty("width", "100%"),
									N.style.setProperty("height", "100%"),
									N.style.setProperty("display", "flex"),
									N.style.setProperty("align-items", "center"),
									A.style.setProperty("max-width", "100%"),
									A.style.setProperty("max-height", "200px"),
									(0, d.effect)(
										(R) => {
											const O = { margin: "0.5rem", ...s.style },
												B = v() ? `${T()}?t=${P().loadedAt}` : "";
											return (
												(R._v$ = (0, w.style)(k, O, R._v$)),
												B !== R._v$2 &&
													(0, i.setAttribute)(A, "src", (R._v$2 = B)),
												R
											);
										},
										{ _v$: void 0, _v$2: void 0 },
									),
									k
								);
							})(),
					});
				}
			},
		),
		