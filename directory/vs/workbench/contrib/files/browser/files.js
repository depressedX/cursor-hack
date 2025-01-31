import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../platform/list/browser/listService.js';
import '../common/files.js';
import '../../../common/editor.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../common/explorerModel.js';
import '../../../../base/common/arrays.js';
import '../../../../base/browser/ui/tree/asyncDataTree.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/browser/dom.js';
define(
			de[382],
			he([1, 0, 9, 93, 220, 44, 278, 710, 24, 1170, 5, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*listService*/,
 w /*files*/,
 E /*editor*/,
 C /*listWidget*/,
 d /*explorerModel*/,
 m /*arrays*/,
 r /*asyncDataTree*/,
 u /*instantiation*/,
 a /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LWb = void 0),
					(e.$MWb = c),
					(e.$NWb = n),
					(e.$OWb = g),
					(e.$LWb = (0, u.$Mi)("explorerService"));
				function h(p) {
					const o = p.lastFocusedList,
						f = o?.getHTMLElement();
					if (f && (0, a.$Kgb)(f)) {
						let b;
						if (o instanceof C.List) {
							const s = o.getFocusedElements();
							s.length && (b = s[0]);
						} else if (o instanceof r.$Fpb) {
							const s = o.getFocus();
							s.length && (b = s[0]);
						}
						return b;
					}
				}
				function c(p, o, f) {
					if (t.URI.isUri(p)) return p;
					const b = h(f);
					return b instanceof d.$JWb
						? b.resource
						: b instanceof w.$UUb
							? b.getResource()
							: E.$A1.getOriginalUri(o.activeEditor, {
									supportSideBySide: E.SideBySideEditor.PRIMARY,
								});
				}
				function n(p, o, f, b, s) {
					const l = o.lastFocusedList,
						y = l?.getHTMLElement();
					if (y && (0, a.$Kgb)(y)) {
						if (
							l instanceof r.$Fpb &&
							l.getFocus().every((I) => I instanceof d.$JWb)
						) {
							const I = s.getContext(!0, !0);
							if (I.length) return I.map((T) => T.resource);
						}
						if (l instanceof C.List) {
							const I = (0, m.$Lb)(
									l
										.getSelectedElements()
										.filter((D) => D instanceof w.$UUb)
										.map((D) => D.getResource()),
								),
								T = l.getFocusedElements(),
								P = T.length ? T[0] : void 0;
							let k;
							if (t.URI.isUri(p)) k = p.toString();
							else if (P instanceof w.$UUb) {
								const D = P.getResource();
								k = D ? D.toString() : void 0;
							}
							const L = I.findIndex((D) => D.toString() === k);
							if (L !== -1) {
								const D = I[L];
								return I.splice(L, 1), I.unshift(D), I;
							}
						}
					}
					const v = b.activeGroup.selectedEditors;
					if (v.length > 1 && t.URI.isUri(p)) {
						const I = v.findIndex((T) => T.matches({ resource: p }));
						if (I !== -1) {
							const T = v[I];
							return (
								v.splice(I, 1),
								v.unshift(T),
								v.map((P) => E.$A1.getOriginalUri(P)).filter((P) => !!P)
							);
						}
					}
					const S = c(p, f, o);
					return S ? [S] : [];
				}
				function g(p) {
					const o = p.get(i.$fMb).lastFocusedList,
						f = o?.getHTMLElement();
					if (f && (0, a.$Kgb)(f) && o instanceof C.List) {
						const b = (0, m.$Lb)(
								o.getSelectedElements().filter(($) => $ instanceof w.$UUb),
							),
							s = o.getFocusedElements(),
							l = s.length ? s[0] : void 0;
						let y;
						return (
							l instanceof w.$UUb && (y = l),
							b.some(($) => $ === y) ? b : y ? [y] : void 0
						);
					}
				}
			},
		)
