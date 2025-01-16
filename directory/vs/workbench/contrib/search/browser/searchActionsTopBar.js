define(
			de[4167],
			he([1, 0, 4, 93, 89, 561, 377, 1258, 405, 186, 8, 11, 43, 27, 568, 483]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(C = mt(C)),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ClearSearchHistoryCommandId,
									title: t.localize2(9265, "Clear Search History"),
									category: g.$oOc,
									f1: !0,
								});
							}
							async run($) {
								p($);
							}
						},
					),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CancelSearchActionId,
									title: t.localize2(9266, "Cancel Search"),
									icon: E.$fOc,
									category: g.$oOc,
									f1: !0,
									precondition: n.$R7.isEqualTo(n.SearchUIState.Idle).negate(),
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										when: u.$Kj.and(C.$ooc.SearchViewVisibleKey, i.$nMb),
										primary: c.KeyCode.Escape,
									},
									menu: [
										{
											id: a.$XX.ViewTitle,
											group: "navigation",
											order: 0,
											when: u.$Kj.and(
												u.$Kj.equals("view", r.$l7),
												n.$R7.isEqualTo(n.SearchUIState.SlowSearch),
											),
										},
									],
								});
							}
							run($) {
								return b($);
							}
						},
					),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.RefreshSearchResultsActionId,
									title: t.localize2(9267, "Refresh"),
									icon: E.$_Nc,
									precondition: C.$ooc.ViewHasSearchPatternKey,
									category: g.$oOc,
									f1: !0,
									menu: [
										{
											id: a.$XX.ViewTitle,
											group: "navigation",
											order: 0,
											when: u.$Kj.and(
												u.$Kj.equals("view", r.$l7),
												n.$R7.isEqualTo(n.SearchUIState.SlowSearch).negate(),
											),
										},
									],
								});
							}
							run($, ...v) {
								return s($);
							}
						},
					),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CollapseSearchResultsActionId,
									title: t.localize2(9268, "Collapse All"),
									category: g.$oOc,
									icon: E.$aOc,
									f1: !0,
									precondition: u.$Kj.and(
										C.$ooc.HasSearchResults,
										C.$ooc.ViewHasSomeCollapsibleKey,
									),
									menu: [
										{
											id: a.$XX.ViewTitle,
											group: "navigation",
											order: 4,
											when: u.$Kj.and(
												u.$Kj.equals("view", r.$l7),
												u.$Kj.or(
													C.$ooc.HasSearchResults.negate(),
													C.$ooc.ViewHasSomeCollapsibleKey,
												),
											),
										},
									],
								});
							}
							run($, ...v) {
								return l($);
							}
						},
					),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ExpandSearchResultsActionId,
									title: t.localize2(9269, "Expand All"),
									category: g.$oOc,
									icon: E.$bOc,
									f1: !0,
									precondition: u.$Kj.and(
										C.$ooc.HasSearchResults,
										C.$ooc.ViewHasSomeCollapsibleKey.toNegated(),
									),
									menu: [
										{
											id: a.$XX.ViewTitle,
											group: "navigation",
											order: 4,
											when: u.$Kj.and(
												u.$Kj.equals("view", r.$l7),
												C.$ooc.HasSearchResults,
												C.$ooc.ViewHasSomeCollapsibleKey.toNegated(),
											),
										},
									],
								});
							}
							run($, ...v) {
								return o($);
							}
						},
					),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ClearSearchResultsActionId,
									title: t.localize2(9270, "Clear Search Results"),
									category: g.$oOc,
									icon: E.$eOc,
									f1: !0,
									precondition: u.$Kj.or(
										C.$ooc.HasSearchResults,
										C.$ooc.ViewHasSearchPatternKey,
										C.$ooc.ViewHasReplacePatternKey,
										C.$ooc.ViewHasFilePatternKey,
									),
									menu: [
										{
											id: a.$XX.ViewTitle,
											group: "navigation",
											order: 1,
											when: u.$Kj.equals("view", r.$l7),
										},
									],
								});
							}
							run($, ...v) {
								return f($);
							}
						},
					),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ViewAsTreeActionId,
									title: t.localize2(9271, "View as Tree"),
									category: g.$oOc,
									icon: E.$dOc,
									f1: !0,
									precondition: u.$Kj.and(
										C.$ooc.HasSearchResults,
										C.$ooc.InTreeViewKey.toNegated(),
									),
									menu: [
										{
											id: a.$XX.ViewTitle,
											group: "navigation",
											order: 2,
											when: u.$Kj.and(
												u.$Kj.equals("view", r.$l7),
												C.$ooc.InTreeViewKey.toNegated(),
											),
										},
									],
								});
							}
							run($, ...v) {
								const S = (0, g.$rOc)($.get(w.$HMb));
								S && S.setTreeView(!0);
							}
						},
					),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ViewAsListActionId,
									title: t.localize2(9272, "View as List"),
									category: g.$oOc,
									icon: E.$cOc,
									f1: !0,
									precondition: u.$Kj.and(
										C.$ooc.HasSearchResults,
										C.$ooc.InTreeViewKey,
									),
									menu: [
										{
											id: a.$XX.ViewTitle,
											group: "navigation",
											order: 2,
											when: u.$Kj.and(
												u.$Kj.equals("view", r.$l7),
												C.$ooc.InTreeViewKey,
											),
										},
									],
								});
							}
							run($, ...v) {
								const S = (0, g.$rOc)($.get(w.$HMb));
								S && S.setTreeView(!1);
							}
						},
					);
				const p = (y) => {
					y.get(d.$bPc).clearHistory();
				};
				function o(y) {
					const $ = y.get(w.$HMb),
						v = (0, g.$rOc)($);
					v && v.getControl().expandAll();
				}
				function f(y) {
					const $ = y.get(w.$HMb);
					(0, g.$rOc)($)?.clearSearchResults();
				}
				function b(y) {
					const $ = y.get(w.$HMb);
					(0, g.$rOc)($)?.cancelSearch();
				}
				function s(y) {
					const $ = y.get(w.$HMb);
					(0, g.$rOc)($)?.triggerQueryChange({ preserveFocus: !1 });
				}
				function l(y) {
					const $ = y.get(w.$HMb),
						v = (0, g.$rOc)($);
					if (v) {
						const S = v.getControl(),
							I = S.navigate();
						let T = I.first(),
							P = !1,
							k = !1;
						if (T instanceof m.$LNc || v.ud)
							for (; (T = I.next()); ) {
								if (T instanceof m.$FNc) {
									P = !0;
									break;
								}
								if (v.ud && !k) {
									let D = T;
									if (T instanceof m.$JNc) {
										const N = S.getCompressedTreeNode(T).element?.elements[0];
										D = N && !(N instanceof m.$FNc) ? N : T;
									}
									const M = D.parent();
									M instanceof m.$LNc ||
										M instanceof m.$MNc ||
										M instanceof m.$QNc ||
										(k = !0);
								}
							}
						if (P) {
							T = I.first();
							do T instanceof m.$INc && S.collapse(T);
							while ((T = I.next()));
						} else if (k) {
							if (((T = I.first()), T))
								do {
									let D = T;
									if (T instanceof m.$JNc) {
										const N = S.getCompressedTreeNode(T).element?.elements[0];
										D = N && !(N instanceof m.$FNc) ? N : T;
									}
									const M = D.parent();
									(M instanceof m.$LNc || M instanceof m.$MNc) &&
										(S.hasElement(T) ? S.collapse(T, !0) : S.collapseAll());
								} while ((T = I.next()));
						} else S.collapseAll();
						const L = S.getFocus()[0]?.parent();
						L &&
							(L instanceof m.$JNc || L instanceof m.$INc) &&
							S.hasElement(L) &&
							S.isCollapsed(L) &&
							(S.domFocus(), S.focusFirst(), S.setSelection(S.getFocus()));
					}
				}
			},
		),
		