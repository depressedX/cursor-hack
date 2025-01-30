import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../../external/solid/store.js';
import '../../../../base/browser/dom.js';
import '../../../services/search/common/search.js';
import '../../../../platform/storage/common/storage.js';
define(
			de[1035],
			he([1, 0, 2, 13, 193, 7, 186, 21]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*store*/,
 E /*dom*/,
 C /*search*/,
 d /*storage*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yuc = e.$Vuc = void 0),
					(e.$Wuc = c),
					(e.$Xuc = n),
					(e.$Zuc = o);
				const m = "workbench.view.explorer",
					r = "workbench.view.scm",
					u = "workbench.view.extensions";
				class a {
					constructor(b) {
						this.elements = b;
					}
				}
				e.$Vuc = a;
				const h = "sidebar2.sidebarData.memoized.v1";
				function c(f, b, s, l) {
					const y = f.get(h, d.StorageScope.APPLICATION),
						$ = {};
					if (y)
						try {
							const T = JSON.parse(y);
							T &&
								("pinnedViewContainerIDs" in T &&
									($.pinnedViewContainerIDs = T.pinnedViewContainerIDs),
								"viewContainerOrders" in T &&
									($.viewContainerOrders = T.viewContainerOrders));
						} catch (T) {
							console.error(T);
						}
					const v = {
							viewContainers: new a(b),
							dimensionOfEntireSidebar: new E.$pgb(0, 0),
							activeViewContainerID: s,
							pinnedViewContainerIDs: [m, C.$j7, r, u],
							viewContainerOrders: {},
							heightOfTitle: 35,
							activeComposite: void 0,
							showComposite: !0,
							theme: l,
							...$,
						},
						[S, I] = (0, w.createStore)(v);
					return [S, I];
				}
				function n(f, b) {
					const s = {
						pinnedViewContainerIDs: b.pinnedViewContainerIDs,
						viewContainerOrders: b.viewContainerOrders,
					};
					try {
						f.store(
							h,
							JSON.stringify(s),
							d.StorageScope.APPLICATION,
							d.StorageTarget.MACHINE,
						);
					} catch (l) {
						console.error(l);
					}
				}
				const g = (0, i.createContext)(),
					p = (f) =>
						(0, t.createComponent)(g.Provider, {
							value: f,
							get children() {
								return f.children;
							},
						});
				e.$Yuc = p;
				function o() {
					const f = (0, i.useContext)(g);
					if (!f) throw new Error("No SidebarContext found");
					return f;
				}
			},
		),
		