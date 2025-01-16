define(de[483], he([1, 0, 7, 4, 405, 186]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$oOc = void 0),
				(e.$pOc = C),
				(e.$qOc = d),
				(e.$rOc = m),
				(e.$sOc = r),
				(e.$tOc = u),
				(e.$uOc = h),
				(t = mt(t)),
				(i = mt(i)),
				(e.$oOc = i.localize2(9226, "Search"));
			function C(n) {
				const g = m(n);
				return !!(g && t.$Lgb(g.getContainer()));
			}
			function d(n, g) {
				return c(n, g);
			}
			function m(n) {
				return n.getActiveViewWithId(E.$l7);
			}
			function r(n, g, p) {
				let o = n
					.getSelection()
					.filter((f) => f !== null)
					.sort((f, b) => (0, w.$PNc)(f, b, p.sortOrder));
				return g && !(o.length > 1 && o.includes(g)) && (o = [g]), o;
			}
			function u(n, g) {
				return g ? !g || n.includes(g) || a(n, g) : !1;
			}
			function a(n, g) {
				for (const p of n)
					if (
						(p instanceof w.$INc &&
							g instanceof w.$FNc &&
							p.matches().includes(g)) ||
						(p instanceof w.$JNc &&
							((g instanceof w.$INc && p.getDownstreamFileMatch(g.resource)) ||
								(g instanceof w.$FNc &&
									p.getDownstreamFileMatch(g.parent().resource))))
					)
						return !0;
				return !1;
			}
			function h(n, g) {
				return n.openView(E.$l7, g).then((p) => p ?? void 0);
			}
			function c(n, g) {
				return g ? n + " (" + g.getLabel() + ")" : n;
			}
		}),
		define(
			de[4165],
			he([1, 0, 4, 121, 73, 89, 377, 405, 11, 43, 27, 483, 12]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gPc = void 0),
					(t = mt(t)),
					(C = mt(C)),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CopyMatchCommandId,
									title: t.localize2(9227, "Copy"),
									category: a.$oOc,
									keybinding: {
										weight: r.KeybindingWeight.WorkbenchContrib,
										when: C.$ooc.FileMatchOrMatchFocusKey,
										primary: u.KeyMod.CtrlCmd | u.KeyCode.KeyC,
									},
									menu: [
										{
											id: m.$XX.SearchContext,
											when: C.$ooc.FileMatchOrMatchFocusKey,
											group: "search_2",
											order: 1,
										},
									],
								});
							}
							async run($, v) {
								await n($, v);
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CopyPathCommandId,
									title: t.localize2(9228, "Copy Path"),
									category: a.$oOc,
									keybinding: {
										weight: r.KeybindingWeight.WorkbenchContrib,
										when: C.$ooc.FileMatchOrFolderMatchWithResourceFocusKey,
										primary: u.KeyMod.CtrlCmd | u.KeyMod.Alt | u.KeyCode.KeyC,
										win: {
											primary: u.KeyMod.Shift | u.KeyMod.Alt | u.KeyCode.KeyC,
										},
									},
									menu: [
										{
											id: m.$XX.SearchContext,
											when: C.$ooc.FileMatchOrFolderMatchWithResourceFocusKey,
											group: "search_2",
											order: 2,
										},
									],
								});
							}
							async run($, v) {
								await c($, v);
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CopyAllCommandId,
									title: t.localize2(9229, "Copy All"),
									category: a.$oOc,
									menu: [
										{
											id: m.$XX.SearchContext,
											when: C.$ooc.HasSearchResults,
											group: "search_2",
											order: 3,
										},
									],
								});
							}
							async run($) {
								await g($);
							}
						},
					),
					(e.$gPc = h.$l
						? `\r
`
						: `
`);
				async function c(y, $) {
					if (!$) {
						const T = l(y);
						if (!(T instanceof d.$INc || T instanceof d.$KNc)) return;
						$ = T;
					}
					const v = y.get(i.$Vxb),
						I = y.get(w.$3N).getUriLabel($.resource, { noPrefix: !0 });
					await v.writeText(I);
				}
				async function n(y, $) {
					if (!$) {
						const T = l(y);
						if (!T) return;
						$ = T;
					}
					const v = y.get(i.$Vxb),
						S = y.get(w.$3N);
					let I;
					$ instanceof d.$FNc
						? (I = p($))
						: $ instanceof d.$INc
							? (I = f($, S).text)
							: $ instanceof d.$JNc && (I = b($, S).text),
						I && (await v.writeText(I));
				}
				async function g(y) {
					const $ = y.get(E.$HMb),
						v = y.get(i.$Vxb),
						S = y.get(w.$3N),
						I = (0, a.$rOc)($);
					if (I) {
						const T = I.searchResult,
							P = s(T.folderMatches(), S);
						await v.writeText(P);
					}
				}
				function p(y, $ = 0) {
					const v = () =>
							`${y.range().startLineNumber},${y.range().startColumn}`,
						S = (k) => y.range().startLineNumber + k + "",
						I = y.fullPreviewLines(),
						T = I.reduce((k, L, D) => {
							const M = D === 0 ? v().length : S(D).length;
							return Math.max(M, k);
						}, 0);
					return I.map((k, L) => {
						const D = L === 0 ? v() : S(L),
							M = " ".repeat(T - D.length);
						return `${" ".repeat($)}${D}: ${M}${k}`;
					}).join(`
`);
				}
				function o(y, $) {
					return y instanceof d.$INc ? f(y, $) : b(y, $);
				}
				function f(y, $) {
					const v = y
						.matches()
						.sort(d.$NNc)
						.map((I) => p(I, 2));
					return {
						text: `${$.getUriLabel(y.resource, { noPrefix: !0 })}${e.$gPc}${v.join(e.$gPc)}`,
						count: v.length,
					};
				}
				function b(y, $) {
					const v = [];
					let S = 0;
					return (
						y
							.matches()
							.sort(d.$NNc)
							.forEach((T) => {
								const P = o(T, $);
								(S += P.count), v.push(P.text);
							}),
						{ text: v.join(e.$gPc + e.$gPc), count: S }
					);
				}
				function s(y, $) {
					const v = [];
					y = y.sort(d.$NNc);
					for (let S = 0; S < y.length; S++) {
						const I = b(y[S], $);
						I.count && v.push(I.text);
					}
					return v.join(e.$gPc + e.$gPc);
				}
				function l(y) {
					const $ = y.get(E.$HMb);
					return (0, a.$rOc)($)?.getControl().getSelection()[0];
				}
			},
		),
		define(
			de[1970],
			he([
				1, 0, 19, 4, 31, 10, 93, 60, 89, 377, 615, 405, 8, 11, 43, 27, 361, 382,
				22, 25, 220, 142, 29, 483, 358, 245, 23, 66, 18,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Oc = M),
					(i = mt(i)),
					(r = mt(r)),
					(u = mt(u)),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.RestrictSearchToFolderId,
									title: i.localize2(9234, "Restrict Search to Folder"),
									category: $.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: h.$Kj.and(
											r.$ooc.SearchViewVisibleKey,
											r.$ooc.ResourceFolderFocusKey,
										),
										primary: g.KeyMod.Shift | g.KeyMod.Alt | g.KeyCode.KeyF,
									},
									menu: [
										{
											id: c.$XX.SearchContext,
											group: "search",
											order: 3,
											when: h.$Kj.and(r.$ooc.ResourceFolderFocusKey),
										},
									],
								});
							}
							async run(A, R) {
								await L(A, !1, !0, void 0, R);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.ExpandRecursivelyCommandId,
									title: i.localize(9230, null),
									category: $.$oOc,
									menu: [
										{
											id: c.$XX.SearchContext,
											when: h.$Kj.and(
												r.$ooc.FolderFocusKey,
												r.$ooc.HasSearchResults,
											),
											group: "search",
											order: 4,
										},
									],
								});
							}
							run(A) {
								k(A);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.ExcludeFolderFromSearchId,
									title: i.localize2(9235, "Exclude Folder from Search"),
									category: $.$oOc,
									menu: [
										{
											id: c.$XX.SearchContext,
											group: "search",
											order: 4,
											when: h.$Kj.and(r.$ooc.ResourceFolderFocusKey),
										},
									],
								});
							}
							async run(A, R) {
								await L(A, !1, !1, void 0, R);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.RevealInSideBarForSearchResults,
									title: i.localize2(9236, "Reveal in Explorer View"),
									category: $.$oOc,
									menu: [
										{
											id: c.$XX.SearchContext,
											when: h.$Kj.and(
												r.$ooc.FileFocusKey,
												r.$ooc.HasSearchResults,
											),
											group: "search_3",
											order: 1,
										},
									],
								});
							}
							async run(A, R) {
								const O = A.get(l.$6Sb),
									B = A.get(o.$LWb),
									U = A.get(b.$Vi),
									z = (0, $.$rOc)(A.get(m.$HMb));
								if (!z) return;
								let F;
								if (
									(R instanceof a.$INc || (R = z.getControl().getFocus()[0]),
									R instanceof a.$INc)
								)
									F = R;
								else return;
								O.openPaneComposite(
									s.$vUb,
									d.ViewContainerLocation.Sidebar,
									!1,
								).then((x) => {
									if (!x) return;
									const H = x.getViewPaneContainer(),
										q = F.resource;
									if (q && U.isInsideWorkspace(q)) {
										const V = H.getExplorerView();
										V.setExpanded(!0),
											B.select(q, !0).then(() => V.focus(), y.$4);
									}
								});
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.FindInFilesActionId,
									title: {
										...i.localize2(9237, "Find in Files"),
										mnemonicTitle: i.localize(9231, null),
									},
									metadata: {
										description: i.localize(9232, null),
										args: [
											{
												name: i.localize(9233, null),
												schema: {
													type: "object",
													properties: {
														query: { type: "string" },
														replace: { type: "string" },
														preserveCase: { type: "boolean" },
														triggerSearch: { type: "boolean" },
														filesToInclude: { type: "string" },
														filesToExclude: { type: "string" },
														isRegex: { type: "boolean" },
														isCaseSensitive: { type: "boolean" },
														matchWholeWord: { type: "boolean" },
														useExcludeSettingsAndIgnoreFiles: {
															type: "boolean",
														},
														onlyOpenEditors: { type: "boolean" },
														showIncludesExcludes: { type: "boolean" },
													},
												},
											},
										],
									},
									category: $.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										primary: g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.KeyF,
									},
									menu: [
										{
											id: c.$XX.MenubarEditMenu,
											group: "4_find_global",
											order: 1,
										},
									],
									f1: !0,
								});
							}
							async run(A, R = {}) {
								M(A, R);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.FindInFolderId,
									title: i.localize2(9238, "Find in Folder..."),
									category: $.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: h.$Kj.and(s.$NUb, s.$zUb),
										primary: g.KeyMod.Shift | g.KeyMod.Alt | g.KeyCode.KeyF,
									},
									menu: [
										{
											id: c.$XX.ExplorerContext,
											group: "4_search",
											order: 10,
											when: h.$Kj.and(s.$zUb),
										},
									],
								});
							}
							async run(A, R) {
								await L(A, !0, !0, R);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: r.SearchCommandIds.FindInWorkspaceId,
									title: i.localize2(9239, "Find in Workspace..."),
									category: $.$oOc,
									menu: [
										{
											id: c.$XX.ExplorerContext,
											group: "4_search",
											order: 10,
											when: h.$Kj.and(s.$DUb, s.$zUb.toNegated()),
										},
									],
								});
							}
							async run(A) {
								const O = A.get(E.$gj).getValue().search.mode;
								if (O === "view")
									(await (0, $.$uOc)(A.get(m.$HMb), !0))?.searchInFolders();
								else
									return A.get(w.$ek).executeCommand(u.$BOc, {
										location: O === "newEditor" ? "new" : "reuse",
										filesToInclude: "",
									});
							}
						},
					);
				function k(N) {
					const A = N.get(m.$HMb),
						R = (0, $.$rOc)(A);
					if (R) {
						const O = R.getControl(),
							B = O.getFocus()[0];
						O.expand(B, !0);
					}
				}
				async function L(N, A, R, O, B) {
					const U = N.get(f.$ll),
						z = N.get(m.$HMb),
						F = N.get(b.$Vi),
						x = N.get(w.$ek),
						H = N.get(E.$gj).getValue().search,
						q = H.mode;
					let V;
					if (A)
						V = (0, o.$NWb)(
							O,
							N.get(C.$fMb),
							N.get(P.$IY),
							N.get(T.$EY),
							N.get(o.$LWb),
						);
					else {
						const K = (0, $.$rOc)(z);
						if (!K) return;
						V = D(K.getControl(), B, H);
					}
					const G = U.resolveAll(V.map((K) => ({ resource: K }))).then((K) => {
						const J = [];
						return (
							K.forEach((W) => {
								W.success &&
									W.stat &&
									J.push(
										W.stat.isDirectory
											? W.stat.resource
											: (0, t.$mh)(W.stat.resource),
									);
							}),
							(0, p.$N8)(J, F)
						);
					});
					if (q === "view") {
						const K = await (0, $.$uOc)(z, !0);
						V &&
							V.length &&
							K &&
							(R
								? K.searchInFolders(await G)
								: K.searchOutsideOfFolders(await G));
						return;
					} else
						return R
							? x.executeCommand(u.$BOc, {
									filesToInclude: (await G).join(", "),
									showIncludesExcludes: !0,
									location: q === "newEditor" ? "new" : "reuse",
								})
							: x.executeCommand(u.$BOc, {
									filesToExclude: (await G).join(", "),
									showIncludesExcludes: !0,
									location: q === "newEditor" ? "new" : "reuse",
								});
				}
				function D(N, A, R) {
					return (0, $.$sOc)(N, A, R)
						.map((O) => (O instanceof a.$FNc ? null : O.resource))
						.filter((O) => O !== null);
				}
				async function M(N, A = {}) {
					const R = N.get(E.$gj).getValue().search,
						O = N.get(m.$HMb),
						B = N.get(w.$ek),
						U = {};
					if (Object.keys(A).length !== 0) {
						const F = N.get(v.$zeb),
							x = N.get(S.$Feb),
							H = N.get(b.$Vi),
							q = x.getLastActiveWorkspaceRoot(),
							V =
								q?.scheme === I.Schemas.file ||
								q?.scheme === I.Schemas.vscodeRemote
									? q
									: void 0,
							G = V ? (H.getWorkspaceFolder(V) ?? void 0) : void 0;
						for (const K of Object.entries(A)) {
							const J = K[0],
								W = K[1];
							W !== void 0 &&
								(U[J] = typeof W == "string" ? await F.resolveAsync(G, W) : W);
						}
					}
					const z = R.mode;
					if (z === "view")
						(0, $.$uOc)(O, !1).then((F) => {
							if (F) {
								F.searchAndReplaceWidget.toggleReplace(
									typeof U.replace == "string",
								);
								let H = !1;
								typeof U.query != "string" &&
									(H = F.updateTextFromFindWidgetOrSelection({
										allowUnselectedWord: typeof U.replace != "string",
									})),
									F.setSearchParameters(U),
									typeof U.showIncludesExcludes == "boolean" &&
										F.toggleQueryDetails(!1, U.showIncludesExcludes),
									F.searchAndReplaceWidget.focus(void 0, H, H);
							}
						});
					else {
						const F = (x) => ({
							location: z === "newEditor" ? "new" : "reuse",
							query: x.query,
							filesToInclude: x.filesToInclude,
							filesToExclude: x.filesToExclude,
							matchWholeWord: x.matchWholeWord,
							isCaseSensitive: x.isCaseSensitive,
							isRegexp: x.isRegex,
							useExcludeSettingsAndIgnoreFiles:
								x.useExcludeSettingsAndIgnoreFiles,
							onlyOpenEditors: x.onlyOpenEditors,
							showIncludesExcludes: !!(
								x.filesToExclude ||
								x.filesToExclude ||
								!x.useExcludeSettingsAndIgnoreFiles
							),
						});
						B.executeCommand(u.$BOc, F(U));
					}
				}
			},
		),
		define(
			de[4166],
			he([
				1, 0, 4, 10, 93, 89, 561, 377, 804, 405, 18, 68, 8, 11, 43, 27, 483, 24,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Oc = l),
					(e.$8Oc = y),
					(t = mt(t)),
					(d = mt(d)),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: d.SearchCommandIds.RemoveActionId,
									title: t.localize2(9257, "Dismiss"),
									category: p.$oOc,
									icon: C.$$Nc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: h.$Kj.and(
											d.$ooc.SearchViewVisibleKey,
											d.$ooc.FileMatchOrMatchFocusKey,
										),
										primary: g.KeyCode.Delete,
										mac: { primary: g.KeyMod.CtrlCmd | g.KeyCode.Backspace },
									},
									menu: [
										{ id: c.$XX.SearchContext, group: "search", order: 2 },
										{ id: c.$XX.SearchActionMenu, group: "inline", order: 2 },
									],
								});
							}
							run(v, S) {
								const I = v.get(E.$HMb),
									T = v.get(i.$gj),
									P = (0, p.$rOc)(I);
								if (!P) return;
								let k = S?.element,
									L = S?.viewer;
								L || (L = P.getControl()), k || (k = L.getFocus()[0] ?? void 0);
								const D = (0, p.$sOc)(L, k, T.getValue("search"));
								let M = L.getFocus()[0] ?? void 0;
								if (D.length === 0) return;
								(!M || M instanceof r.$QNc) && (M = k);
								let N;
								const A = (0, p.$tOc)(D, M);
								M && A && (N = l(L, M, D));
								const R = P.searchResult;
								R && R.batchRemove(D),
									M && A
										? (N || (N = y(L, M)),
											N &&
												!(0, r.$WNc)(N, D) &&
												(L.reveal(N),
												L.setFocus([N], (0, w.$BMb)()),
												L.setSelection([N], (0, w.$BMb)())))
										: (0, o.$yb)(L.getFocus(), L.getSelection()) ||
											L.setSelection(L.getFocus()),
									L.domFocus();
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: d.SearchCommandIds.ReplaceActionId,
									title: t.localize2(9258, "Replace"),
									category: p.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: h.$Kj.and(
											d.$ooc.SearchViewVisibleKey,
											d.$ooc.ReplaceActiveKey,
											d.$ooc.MatchFocusKey,
											d.$ooc.IsEditableItemKey,
										),
										primary:
											g.KeyMod.Shift | g.KeyMod.CtrlCmd | g.KeyCode.Digit1,
									},
									icon: C.$0Nc,
									menu: [
										{
											id: c.$XX.SearchContext,
											when: h.$Kj.and(
												d.$ooc.ReplaceActiveKey,
												d.$ooc.MatchFocusKey,
												d.$ooc.IsEditableItemKey,
											),
											group: "search",
											order: 1,
										},
										{
											id: c.$XX.SearchActionMenu,
											when: h.$Kj.and(
												d.$ooc.ReplaceActiveKey,
												d.$ooc.MatchFocusKey,
												d.$ooc.IsEditableItemKey,
											),
											group: "inline",
											order: 1,
										},
									],
								});
							}
							async run(v, S) {
								return f(v, S);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: d.SearchCommandIds.ReplaceAllInFileActionId,
									title: t.localize2(9259, "Replace All"),
									category: p.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: h.$Kj.and(
											d.$ooc.SearchViewVisibleKey,
											d.$ooc.ReplaceActiveKey,
											d.$ooc.FileFocusKey,
											d.$ooc.IsEditableItemKey,
										),
										primary:
											g.KeyMod.Shift | g.KeyMod.CtrlCmd | g.KeyCode.Digit1,
										secondary: [
											g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.Enter,
										],
									},
									icon: C.$0Nc,
									menu: [
										{
											id: c.$XX.SearchContext,
											when: h.$Kj.and(
												d.$ooc.ReplaceActiveKey,
												d.$ooc.FileFocusKey,
												d.$ooc.IsEditableItemKey,
											),
											group: "search",
											order: 1,
										},
										{
											id: c.$XX.SearchActionMenu,
											when: h.$Kj.and(
												d.$ooc.ReplaceActiveKey,
												d.$ooc.FileFocusKey,
												d.$ooc.IsEditableItemKey,
											),
											group: "inline",
											order: 1,
										},
									],
								});
							}
							async run(v, S) {
								return f(v, S);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: d.SearchCommandIds.ReplaceAllInFolderActionId,
									title: t.localize2(9260, "Replace All"),
									category: p.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: h.$Kj.and(
											d.$ooc.SearchViewVisibleKey,
											d.$ooc.ReplaceActiveKey,
											d.$ooc.FolderFocusKey,
											d.$ooc.IsEditableItemKey,
										),
										primary:
											g.KeyMod.Shift | g.KeyMod.CtrlCmd | g.KeyCode.Digit1,
										secondary: [
											g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.Enter,
										],
									},
									icon: C.$0Nc,
									menu: [
										{
											id: c.$XX.SearchContext,
											when: h.$Kj.and(
												d.$ooc.ReplaceActiveKey,
												d.$ooc.FolderFocusKey,
												d.$ooc.IsEditableItemKey,
											),
											group: "search",
											order: 1,
										},
										{
											id: c.$XX.SearchActionMenu,
											when: h.$Kj.and(
												d.$ooc.ReplaceActiveKey,
												d.$ooc.FolderFocusKey,
												d.$ooc.IsEditableItemKey,
											),
											group: "inline",
											order: 1,
										},
									],
								});
							}
							async run(v, S) {
								return f(v, S);
							}
						},
					);
				function f($, v) {
					const S = $.get(i.$gj),
						I = $.get(E.$HMb),
						T = (0, p.$rOc)(I),
						P = v?.viewer ?? T?.getControl();
					if (!P) return;
					const k = v?.element ?? P.getFocus()[0],
						L = (0, p.$sOc)(P, k ?? void 0, S.getValue("search"));
					let D = P.getFocus()[0];
					if (
						((!D || (D && !(0, r.$WNc)(D, L)) || D instanceof r.$QNc) &&
							(D = k),
						L.length === 0)
					)
						return;
					let M;
					D && (M = l(P, D, L));
					const N = T?.searchResult;
					N && N.batchReplace(L),
						D &&
							(M || (M = y(P, D)),
							M &&
								(P.reveal(M),
								P.setFocus([M], (0, w.$BMb)()),
								P.setSelection([M], (0, w.$BMb)()),
								M instanceof r.$FNc
									? !S.getValue().search.useReplacePreview ||
										b($, M) ||
										M instanceof r.$HNc
										? T?.open(M, !0)
										: $.get(m.$XNc).openReplacePreview(M, !0)
									: M instanceof r.$INc && T?.open(M, !0))),
						P.domFocus();
				}
				function b($, v) {
					if (!(v instanceof r.$FNc)) return !1;
					const I = $.get(u.$IY).activeEditor?.resource;
					return I ? $.get(a.$Vl).extUri.isEqual(I, v.parent().resource) : !1;
				}
				function s($, v) {
					return $ instanceof r.$FNc
						? v instanceof r.$FNc
							? 0
							: -1
						: $ instanceof r.$INc
							? v instanceof r.$FNc
								? 1
								: v instanceof r.$INc
									? 0
									: -1
							: v instanceof r.$JNc
								? 0
								: 1;
				}
				function l($, v, S) {
					const I = $.navigate(v);
					if (v instanceof r.$JNc)
						for (
							;
							I.next() &&
							(!(I.current() instanceof r.$JNc) || (0, r.$WNc)(I.current(), S));
						);
					else if (v instanceof r.$INc)
						for (
							;
							I.next() &&
							(!(I.current() instanceof r.$INc) || (0, r.$WNc)(I.current(), S));
						)
							$.expand(I.current());
					else
						for (
							;
							I.next() &&
							(!(I.current() instanceof r.$FNc) || (0, r.$WNc)(I.current(), S));
						)
							$.expand(I.current());
					return I.current();
				}
				function y($, v) {
					let S = $.lastVisibleElement ?? null;
					for (; S; ) {
						const I = s(v, S);
						if (I === -1) $.expand(S), (S = $.lastVisibleElement);
						else if (I === 1) S = $.getParentElement(S);
						else return S;
					}
				}
			},
		),
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
		define(
			de[4168],
			he([
				1, 0, 7, 495, 3, 54, 4, 10, 22, 73, 25, 405, 19, 11, 5, 173, 8, 128,
				106, 377, 95, 72,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				var y, $, v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aPc = e.$_Oc = e.$$Oc = e.$0Oc = e.$9Oc = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(C = mt(C));
				class S {
					static {
						this.ITEM_HEIGHT = 22;
					}
					getHeight(D) {
						return S.ITEM_HEIGHT;
					}
					getTemplateId(D) {
						if (D instanceof a.$JNc) return I.TEMPLATE_ID;
						if (D instanceof a.$INc) return T.TEMPLATE_ID;
						if (D instanceof a.$FNc) return P.TEMPLATE_ID;
						throw (
							(console.error("Invalid search tree element", D),
							new Error("Invalid search tree element"))
						);
					}
				}
				e.$9Oc = S;
				let I = class extends w.$1c {
					static {
						y = this;
					}
					static {
						this.TEMPLATE_ID = "folderMatch";
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.a = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.h = R),
							(this.j = O),
							(this.templateId = y.TEMPLATE_ID);
					}
					renderCompressedElements(D, M, N, A) {
						const R = D.element,
							O = R.elements[R.elements.length - 1],
							B = R.elements.map((U) => U.name());
						if (O.resource) {
							const U =
								O instanceof a.$LNc
									? m.FileKind.ROOT_FOLDER
									: m.FileKind.FOLDER;
							N.label.setResource(
								{ resource: O.resource, name: B },
								{
									fileKind: U,
									separator: this.f.getSeparator(O.resource.scheme),
								},
							);
						} else N.label.setLabel(C.localize(9297, null));
						this.m(O, N);
					}
					renderTemplate(D) {
						const M = new w.$Zc(),
							N = t.$fhb(D, t.$(".foldermatch")),
							A = this.b.create(N, {
								supportDescriptionHighlights: !0,
								supportHighlights: !0,
							});
						M.add(A);
						const R = new i.$Hob(t.$fhb(N, t.$(".badge")), {}, f.$zyb),
							O = t.$fhb(N, t.$(".actionBarContainer")),
							B = new w.$Zc();
						M.add(B);
						const U = M.add(this.j.createScoped(D));
						b.$ooc.MatchFocusKey.bindTo(U).set(!1),
							b.$ooc.FileFocusKey.bindTo(U).set(!1),
							b.$ooc.FolderFocusKey.bindTo(U).set(!0);
						const z = this.D(this.h.createChild(new o.$Ki([p.$6j, U]))),
							F = M.add(
								z.createInstance(g.$Tyb, O, c.$XX.SearchActionMenu, {
									menuOptions: { shouldForwardArgs: !0 },
									hiddenItemStrategy: g.HiddenItemStrategy.Ignore,
									toolbarOptions: { primaryGroup: (x) => /^inline/.test(x) },
								}),
							);
						return {
							label: A,
							badge: R,
							actions: F,
							disposables: M,
							elementDisposables: B,
							contextKeyService: U,
						};
					}
					renderElement(D, M, N) {
						const A = D.element;
						if (A.resource) {
							const R = this.c.getWorkspaceFolder(A.resource);
							R && (0, h.$gh)(R.uri, A.resource)
								? N.label.setFile(A.resource, {
										fileKind: m.FileKind.ROOT_FOLDER,
										hidePath: !0,
									})
								: N.label.setFile(A.resource, {
										fileKind: m.FileKind.FOLDER,
										hidePath: this.a.ud,
									});
						} else N.label.setLabel(C.localize(9298, null));
						b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
							!A.hasOnlyReadOnlyMatches(),
						),
							N.elementDisposables.add(
								A.onChange(() => {
									b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
										!A.hasOnlyReadOnlyMatches(),
									);
								}),
							),
							this.m(A, N);
					}
					disposeElement(D, M, N) {
						N.elementDisposables.clear();
					}
					disposeCompressedElements(D, M, N, A) {
						N.elementDisposables.clear();
					}
					disposeTemplate(D) {
						D.disposables.dispose();
					}
					m(D, M) {
						const N = D.recursiveMatchCount();
						M.badge.setCount(N),
							M.badge.setTitleFormat(
								N > 1 ? C.localize(9299, null, N) : C.localize(9300, null, N),
							),
							(M.actions.context = { viewer: this.a.getControl(), element: D });
					}
				};
				(e.$0Oc = I),
					(e.$0Oc =
						I =
						y =
							Ne([j(2, u.$Vi), j(3, r.$3N), j(4, n.$Li), j(5, p.$6j)], I));
				let T = class extends w.$1c {
					static {
						$ = this;
					}
					static {
						this.TEMPLATE_ID = "fileMatch";
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.a = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.h = R),
							(this.j = O),
							(this.templateId = $.TEMPLATE_ID);
					}
					renderCompressedElements(D, M, N, A) {
						throw new Error(
							"Should never happen since node is incompressible.",
						);
					}
					renderTemplate(D) {
						const M = new w.$Zc(),
							N = new w.$Zc();
						M.add(N);
						const A = t.$fhb(D, t.$(".filematch")),
							R = this.b.create(A);
						M.add(R);
						const O = new i.$Hob(t.$fhb(A, t.$(".badge")), {}, f.$zyb),
							B = t.$fhb(A, t.$(".actionBarContainer")),
							U = M.add(this.j.createScoped(D));
						b.$ooc.MatchFocusKey.bindTo(U).set(!1),
							b.$ooc.FileFocusKey.bindTo(U).set(!0),
							b.$ooc.FolderFocusKey.bindTo(U).set(!1);
						const z = this.D(this.h.createChild(new o.$Ki([p.$6j, U]))),
							F = M.add(
								z.createInstance(g.$Tyb, B, c.$XX.SearchActionMenu, {
									menuOptions: { shouldForwardArgs: !0 },
									hiddenItemStrategy: g.HiddenItemStrategy.Ignore,
									toolbarOptions: { primaryGroup: (x) => /^inline/.test(x) },
								}),
							);
						return {
							el: A,
							label: R,
							badge: O,
							actions: F,
							disposables: M,
							elementDisposables: N,
							contextKeyService: U,
						};
					}
					renderElement(D, M, N) {
						const A = D.element;
						N.el.setAttribute("data-resource", A.resource.toString());
						const R = this.f.getValue("search").decorations;
						N.label.setFile(A.resource, {
							hidePath: this.a.ud && !(A.parent() instanceof a.$MNc),
							hideIcon: !1,
							fileDecorations: { colors: R.colors, badges: R.badges },
						});
						const O = A.count();
						N.badge.setCount(O),
							N.badge.setTitleFormat(
								O > 1 ? C.localize(9301, null, O) : C.localize(9302, null, O),
							),
							(N.actions.context = { viewer: this.a.getControl(), element: A }),
							b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
								!A.hasOnlyReadOnlyMatches(),
							),
							N.elementDisposables.add(
								A.onChange(() => {
									b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
										!A.hasOnlyReadOnlyMatches(),
									);
								}),
							),
							N.el.parentElement?.parentElement
								?.querySelector(".monaco-tl-twistie")
								?.classList.add("force-twistie");
					}
					disposeElement(D, M, N) {
						N.elementDisposables.clear();
					}
					disposeTemplate(D) {
						D.disposables.dispose();
					}
				};
				(e.$$Oc = T),
					(e.$$Oc =
						T =
						$ =
							Ne([j(2, u.$Vi), j(3, d.$gj), j(4, n.$Li), j(5, p.$6j)], T));
				let P = class extends w.$1c {
					static {
						v = this;
					}
					static {
						this.TEMPLATE_ID = "match";
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.a = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.h = R),
							(this.j = O),
							(this.templateId = v.TEMPLATE_ID);
					}
					renderCompressedElements(D, M, N, A) {
						throw new Error(
							"Should never happen since node is incompressible.",
						);
					}
					renderTemplate(D) {
						D.classList.add("linematch");
						const M = t.$fhb(D, t.$("span.matchLineNum")),
							N = t.$fhb(D, t.$("a.plain.match")),
							A = t.$fhb(N, t.$("span")),
							R = t.$fhb(N, t.$("span.findInFileMatch")),
							O = t.$fhb(N, t.$("span.replaceMatch")),
							B = t.$fhb(N, t.$("span")),
							U = t.$fhb(D, t.$("span.actionBarContainer")),
							z = new w.$Zc(),
							F = z.add(this.h.createScoped(D));
						b.$ooc.MatchFocusKey.bindTo(F).set(!0),
							b.$ooc.FileFocusKey.bindTo(F).set(!1),
							b.$ooc.FolderFocusKey.bindTo(F).set(!1);
						const x = this.D(this.f.createChild(new o.$Ki([p.$6j, F]))),
							H = z.add(
								x.createInstance(g.$Tyb, U, c.$XX.SearchActionMenu, {
									menuOptions: { shouldForwardArgs: !0 },
									hiddenItemStrategy: g.HiddenItemStrategy.Ignore,
									toolbarOptions: { primaryGroup: (q) => /^inline/.test(q) },
								}),
							);
						return {
							parent: N,
							before: A,
							match: R,
							replace: O,
							after: B,
							lineNumber: M,
							actions: H,
							disposables: z,
							contextKeyService: F,
						};
					}
					renderElement(D, M, N) {
						const A = D.element,
							R = A.preview(),
							O =
								this.a.model.isReplaceActive() &&
								!!this.a.model.replaceString &&
								!(A instanceof a.$HNc && A.isReadonly());
						(N.before.textContent = R.before),
							(N.match.textContent = R.inside),
							N.match.classList.toggle("replace", O),
							(N.replace.textContent = O ? A.replaceString : ""),
							(N.after.textContent = R.after);
						const B = (
							R.fullBefore +
							(O ? A.replaceString : R.inside) +
							R.after
						)
							.trim()
							.substr(0, 999);
						N.disposables.add(
							this.j.setupManagedHover((0, s.$cib)("mouse"), N.parent, B),
						),
							b.$ooc.IsEditableItemKey.bindTo(N.contextKeyService).set(
								!(A instanceof a.$HNc && A.isReadonly()),
							);
						const U = A.range().endLineNumber - A.range().startLineNumber,
							z = U > 0 ? `+${U}` : "",
							F = this.c.getValue("search").showLineNumbers,
							x = F ? `${A.range().startLineNumber}:` : "";
						N.lineNumber.classList.toggle("show", U > 0 || F),
							(N.lineNumber.textContent = x + z),
							N.disposables.add(
								this.j.setupManagedHover(
									(0, s.$cib)("mouse"),
									N.lineNumber,
									this.m(A, F),
								),
							),
							(N.actions.context = { viewer: this.a.getControl(), element: A });
					}
					disposeTemplate(D) {
						D.disposables.dispose();
					}
					m(D, M) {
						const N = D.range().startLineNumber,
							A = D.range().endLineNumber - D.range().startLineNumber,
							R = M ? C.localize(9303, null, N, A) + " " : "",
							O = A > 0 ? "+ " + C.localize(9304, null, A) : "";
						return R + O;
					}
				};
				(e.$_Oc = P),
					(e.$_Oc =
						P =
						v =
							Ne(
								[
									j(1, u.$Vi),
									j(2, d.$gj),
									j(3, n.$Li),
									j(4, p.$6j),
									j(5, l.$Uyb),
								],
								P,
							));
				let k = class {
					constructor(D, M) {
						(this.a = D), (this.b = M);
					}
					getWidgetAriaLabel() {
						return C.localize(9305, null);
					}
					getAriaLabel(D) {
						if (D instanceof a.$JNc) {
							const M = D.allDownstreamFileMatches().reduce(
								(N, A) => N + A.count(),
								0,
							);
							return D.resource
								? C.localize(9306, null, M, D.name())
								: C.localize(9307, null, M);
						}
						if (D instanceof a.$INc) {
							const M =
								this.b.getUriLabel(D.resource, { relative: !0 }) ||
								D.resource.fsPath;
							return C.localize(9308, null, D.count(), D.name(), E.$rc(M));
						}
						if (D instanceof a.$FNc) {
							const M = D,
								N = this.a.model,
								A = N.isReplaceActive() && !!N.replaceString,
								R = M.getMatchString(),
								O = M.range(),
								B = M.text().substr(0, O.endColumn + 150);
							return A
								? C.localize(9309, null, B, O.startColumn, R, M.replaceString)
								: C.localize(9310, null, B, O.startColumn, R);
						}
						return null;
					}
				};
				(e.$aPc = k), (e.$aPc = k = Ne([j(1, r.$3N)], k));
			},
		),
		define(
			de[1367],
			he([
				1, 0, 4, 7, 105, 183, 292, 235, 50, 15, 6, 27, 547, 121, 10, 8, 49, 39,
				43, 26, 413, 483, 377, 91, 12, 268, 89, 561, 615, 664, 106, 1838, 5, 18,
				360, 44, 3506, 95, 3, 70,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
			) {
				"use strict";
				var F;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FOc = void 0),
					(e.$GOc = J),
					(t = mt(t)),
					(i = mt(i)),
					(y = mt(y));
				const x = 26;
				class H extends m.$rj {
					static {
						this.ID = "search.action.replaceAll";
					}
					constructor(X) {
						super(H.ID, "", b.ThemeIcon.asClassName(T.$9Nc), !1), (this.a = X);
					}
					set searchWidget(X) {
						this.a = X;
					}
					run() {
						return this.a ? this.a.triggerReplaceAll() : Promise.resolve(null);
					}
				}
				const q = v.$m ? a.KeyMod.WinCtrl : a.KeyMod.CtrlCmd;
				function V(W, X, Y) {
					const ie = !!X.match(/\n/);
					if (Y && (ie || Y.clientHeight > x) && Y.selectionStart > 0) {
						W.stopPropagation();
						return;
					}
				}
				function G(W, X, Y) {
					const ie = !!X.match(/\n/);
					if (
						Y &&
						(ie || Y.clientHeight > x) &&
						Y.selectionEnd < Y.value.length
					) {
						W.stopPropagation();
						return;
					}
				}
				let K = class extends d.$Uhb {
					static {
						F = this;
					}
					static {
						this.a = 134;
					}
					static {
						this.b = t.localize(9367, null);
					}
					static {
						this.c = (X) => {
							const Y = X.lookupKeybinding(H.ID);
							return (0, l.$qOc)(t.localize(9368, null), Y);
						};
					}
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						super(),
							(this.bb = ie),
							(this.cb = ne),
							(this.db = ee),
							(this.eb = _),
							(this.fb = te),
							(this.gb = Q),
							(this.hb = Z),
							(this.ib = se),
							(this.jb = re),
							(this.J = !1),
							(this.L = null),
							(this.M = this.D(new u.$re())),
							(this.onSearchSubmit = this.M.event),
							(this.N = this.D(new u.$re())),
							(this.onSearchCancel = this.N.event),
							(this.O = this.D(new u.$re())),
							(this.onReplaceToggled = this.O.event),
							(this.P = this.D(new u.$re())),
							(this.onReplaceStateChange = this.P.event),
							(this.Q = this.D(new u.$re())),
							(this.onPreserveCaseChange = this.Q.event),
							(this.R = this.D(new u.$re())),
							(this.onReplaceValueChanged = this.R.event),
							(this.S = this.D(new u.$re())),
							(this.onReplaceAll = this.S.event),
							(this.U = this.D(new u.$re())),
							(this.onBlur = this.U.event),
							(this.W = this.D(new u.$re())),
							(this.onDidHeightChange = this.W.event),
							(this.X = new u.$re()),
							(this.onDidToggleContext = this.X.event),
							(this.t = y.$ooc.ReplaceActiveKey.bindTo(this.cb)),
							(this.g = y.$ooc.SearchInputBoxFocusedKey.bindTo(this.cb)),
							(this.n = y.$ooc.ReplaceInputBoxFocusedKey.bindTo(this.cb));
						const le = Y.notebookOptions ?? {
							isInNotebookMarkdownInput: !0,
							isInNotebookMarkdownPreview: !0,
							isInNotebookCellInput: !0,
							isInNotebookCellOutput: !0,
						};
						(this.Z = this.D(
							new D.$m2b(
								le.isInNotebookMarkdownInput,
								le.isInNotebookMarkdownPreview,
								le.isInNotebookCellInput,
								le.isInNotebookCellOutput,
								{ findScopeType: z.NotebookFindScopeType.None },
							),
						)),
							this.D(
								this.Z.onDidChange(() => {
									this.searchInput && this.searchInput.updateFilterStyles();
								}),
							),
							this.D(
								this.jb.onDidEditorsChange((oe) => {
									this.searchInput &&
										oe.event.editor instanceof A.$TIb &&
										(oe.event.kind === R.GroupModelChangeKind.EDITOR_OPEN ||
											oe.event.kind === R.GroupModelChangeKind.EDITOR_CLOSE) &&
										(this.searchInput.filterVisible = this.lb());
								}),
							),
							(this.y = new r.$Jh(500)),
							(this.ab = this.D(new U.$2c())),
							this.mb(X, Y),
							this.D(
								this.fb.onDidChangeConfiguration((oe) => {
									oe.affectsConfiguration("editor.accessibilitySupport") &&
										this.nb();
								}),
							),
							this.D(this.gb.onDidChangeScreenReaderOptimized(() => this.nb())),
							this.nb();
					}
					lb() {
						return this.jb.editors.some((Y) => Y instanceof A.$TIb);
					}
					getNotebookFilters() {
						return this.Z;
					}
					focus(X = !0, Y = !1, ie = !1) {
						(this.J = ie),
							Y && this.isReplaceShown()
								? this.replaceInput &&
									(this.replaceInput.focus(), X && this.replaceInput.select())
								: this.searchInput &&
									(this.searchInput.focus(), X && this.searchInput.select());
					}
					setWidth(X) {
						this.searchInput?.inputBox.layout(),
							this.replaceInput &&
								((this.replaceInput.width = X - 28),
								this.replaceInput.inputBox.layout());
					}
					clear() {
						this.searchInput?.clear(),
							this.replaceInput?.setValue(""),
							this.setReplaceAllActionState(!1);
					}
					isReplaceShown() {
						return this.h ? !this.h.classList.contains("disabled") : !1;
					}
					isReplaceActive() {
						return !!this.t.get();
					}
					getReplaceValue() {
						return this.replaceInput?.getValue() ?? "";
					}
					toggleReplace(X) {
						(X === void 0 || X !== this.isReplaceShown()) && this.sb();
					}
					getSearchHistory() {
						return this.searchInput?.inputBox.getHistory() ?? [];
					}
					getReplaceHistory() {
						return this.replaceInput?.inputBox.getHistory() ?? [];
					}
					prependSearchHistory(X) {
						this.searchInput?.inputBox.prependHistory(X);
					}
					prependReplaceHistory(X) {
						this.replaceInput?.inputBox.prependHistory(X);
					}
					clearHistory() {
						this.searchInput?.inputBox.clearHistory(),
							this.replaceInput?.inputBox.clearHistory();
					}
					showNextSearchTerm() {
						this.searchInput?.inputBox.showNextValue();
					}
					showPreviousSearchTerm() {
						this.searchInput?.inputBox.showPreviousValue();
					}
					showNextReplaceTerm() {
						this.replaceInput?.inputBox.showNextValue();
					}
					showPreviousReplaceTerm() {
						this.replaceInput?.inputBox.showPreviousValue();
					}
					searchInputHasFocus() {
						return !!this.g.get();
					}
					replaceInputHasFocus() {
						return !!this.replaceInput?.inputBox.hasFocus();
					}
					focusReplaceAllAction() {
						this.w?.focus(!0);
					}
					focusRegexAction() {
						this.searchInput?.focusOnRegex();
					}
					set replaceButtonVisibility(X) {
						this.r && (this.r.element.style.display = X ? "" : "none");
					}
					mb(X, Y) {
						(this.domNode = i.$fhb(X, i.$(".search-widget"))),
							(this.domNode.style.position = "relative"),
							Y._hideReplaceToggle || this.ob(this.domNode),
							this.pb(this.domNode, Y),
							this.rb(this.domNode, Y);
					}
					nb() {
						this.searchInput?.setFocusInputOnOptionClick(
							!this.gb.isScreenReaderOptimized(),
						);
					}
					ob(X) {
						const Y = {
							buttonBackground: void 0,
							buttonBorder: void 0,
							buttonForeground: void 0,
							buttonHoverBackground: void 0,
							buttonSecondaryBackground: void 0,
							buttonSecondaryForeground: void 0,
							buttonSecondaryHoverBackground: void 0,
							buttonSeparator: void 0,
							title: t.localize(9369, null),
							hoverDelegate: (0, B.$cib)("element"),
						};
						(this.r = this.D(new E.$oob(X, Y))),
							this.r.element.setAttribute("aria-expanded", "false"),
							this.r.element.classList.add("toggle-replace-button"),
							(this.r.icon = T.$7Nc),
							(this.ab.value = this.r.onDidClick(() => this.sb()));
					}
					pb(X, Y) {
						const ie = {
								label: t.localize(9370, null),
								validation: (ee) => this.ub(ee),
								placeholder: t.localize(9371, null),
								appendCaseSensitiveLabel: (0, l.$qOc)(
									"",
									this.db.lookupKeybinding(
										y.SearchCommandIds.ToggleCaseSensitiveCommandId,
									),
								),
								appendWholeWordsLabel: (0, l.$qOc)(
									"",
									this.db.lookupKeybinding(
										y.SearchCommandIds.ToggleWholeWordCommandId,
									),
								),
								appendRegexLabel: (0, l.$qOc)(
									"",
									this.db.lookupKeybinding(
										y.SearchCommandIds.ToggleRegexCommandId,
									),
								),
								history: Y.searchHistory,
								showHistoryHint: () => (0, k.$NMb)(this.db),
								flexibleHeight: !0,
								flexibleMaxHeight: F.a,
								showCommonFindToggles: !0,
								inputBoxStyles: Y.inputBoxStyles,
								toggleStyles: Y.toggleStyles,
							},
							ne = i.$fhb(X, i.$(".search-container.input-box"));
						(this.searchInput = this.D(
							new O.$EOc(
								ne,
								this.bb,
								ie,
								this.cb,
								this.hb,
								this.ib,
								this.Z,
								Y.initialAIButtonVisibility ?? !1,
								this.lb(),
							),
						)),
							this.D(this.searchInput.onKeyDown((ee) => this.wb(ee))),
							this.searchInput.setValue(Y.value || ""),
							this.searchInput.setRegex(!!Y.isRegex),
							this.searchInput.setCaseSensitive(!!Y.isCaseSensitive),
							this.searchInput.setWholeWords(!!Y.isWholeWords),
							this.D(
								this.searchInput.onCaseSensitiveKeyDown((ee) => this.xb(ee)),
							),
							this.D(this.searchInput.onRegexKeyDown((ee) => this.yb(ee))),
							this.D(this.searchInput.inputBox.onDidChange(() => this.vb())),
							this.D(
								this.searchInput.inputBox.onDidHeightChange(() =>
									this.W.fire(),
								),
							),
							this.D(
								this.onReplaceValueChanged(() => {
									this.y.trigger(() =>
										this.replaceInput?.inputBox.addToHistory(),
									);
								}),
							),
							(this.searchInputFocusTracker = this.D(
								i.$dhb(this.searchInput.inputBox.inputElement),
							)),
							this.D(
								this.searchInputFocusTracker.onDidFocus(async () => {
									this.g.set(!0);
									const ee = this.Db.globalFindClipboard;
									if (!this.J && ee) {
										const _ = await this.eb.readFindText();
										_ &&
											this.L !== _ &&
											(this.searchInput?.inputBox.addToHistory(),
											this.searchInput?.setValue(_),
											this.searchInput?.select()),
											(this.L = _);
									}
									this.J = !1;
								}),
							),
							this.D(
								this.searchInputFocusTracker.onDidBlur(() => this.g.set(!1)),
							),
							(this.Y = new S.$8ib({
								isChecked: !1,
								title: (0, l.$qOc)(
									t.localize(9372, null),
									this.db.lookupKeybinding(P.$COc),
								),
								icon: T.$6Nc,
								hoverDelegate: (0, B.$cib)("element"),
								...L.$pyb,
							})),
							this.D(this.Y.onChange(() => this.qb())),
							Y.showContextToggle &&
								((this.contextLinesInput = new C.$Mob(ne, this.bb, {
									type: "number",
									inputBoxStyles: L.$wyb,
								})),
								this.contextLinesInput.element.classList.add(
									"context-lines-input",
								),
								(this.contextLinesInput.value =
									"" +
									(this.fb.getValue("search").searchEditor
										.defaultNumberOfContextLines ?? 1)),
								this.D(
									this.contextLinesInput.onDidChange((ee) => {
										ee !== "0" && (this.Y.checked = !0), this.qb();
									}),
								),
								i.$fhb(ne, this.Y.domNode));
					}
					qb() {
						this.X.fire(),
							this.contextLinesInput.value.includes("-") &&
								(this.contextLinesInput.value = "0"),
							this.X.fire();
					}
					setContextLines(X) {
						this.contextLinesInput &&
							(X === 0
								? (this.Y.checked = !1)
								: ((this.Y.checked = !0),
									(this.contextLinesInput.value = "" + X)));
					}
					rb(X, Y) {
						this.h = i.$fhb(X, i.$(".replace-container.disabled"));
						const ie = i.$fhb(this.h, i.$(".replace-input"));
						(this.replaceInput = this.D(
							new s.$XCb(
								ie,
								this.bb,
								{
									label: t.localize(9373, null),
									placeholder: t.localize(9374, null),
									appendPreserveCaseLabel: (0, l.$qOc)(
										"",
										this.db.lookupKeybinding(
											y.SearchCommandIds.TogglePreserveCaseId,
										),
									),
									history: Y.replaceHistory,
									showHistoryHint: () => (0, k.$NMb)(this.db),
									flexibleHeight: !0,
									flexibleMaxHeight: F.a,
									inputBoxStyles: Y.inputBoxStyles,
									toggleStyles: Y.toggleStyles,
								},
								this.cb,
								!0,
							),
						)),
							this.D(
								this.replaceInput.onDidOptionChange((ne) => {
									ne ||
										(this.replaceInput &&
											this.Q.fire(this.replaceInput.getPreserveCase()));
								}),
							),
							this.D(this.replaceInput.onKeyDown((ne) => this.Ab(ne))),
							this.replaceInput.setValue(Y.replaceValue || ""),
							this.D(
								this.replaceInput.inputBox.onDidChange(() => this.R.fire()),
							),
							this.D(
								this.replaceInput.inputBox.onDidHeightChange(() =>
									this.W.fire(),
								),
							),
							(this.s = new H(this)),
							(this.s.label = F.b),
							(this.w = this.D(new w.$eib(this.h))),
							this.w.push([this.s], { icon: !0, label: !1 }),
							this.u(this.w.domNode, (ne) => this.Bb(ne)),
							(this.replaceInputFocusTracker = this.D(
								i.$dhb(this.replaceInput.inputBox.inputElement),
							)),
							this.D(
								this.replaceInputFocusTracker.onDidFocus(() => this.n.set(!0)),
							),
							this.D(
								this.replaceInputFocusTracker.onDidBlur(() => this.n.set(!1)),
							),
							this.D(
								this.replaceInput.onPreserveCaseKeyDown((ne) => this.zb(ne)),
							);
					}
					triggerReplaceAll() {
						return this.S.fire(), Promise.resolve(null);
					}
					sb() {
						this.h?.classList.toggle("disabled"),
							this.isReplaceShown()
								? (this.r?.element.classList.remove(
										...b.ThemeIcon.asClassNameArray(T.$7Nc),
									),
									this.r?.element.classList.add(
										...b.ThemeIcon.asClassNameArray(T.$8Nc),
									))
								: (this.r?.element.classList.remove(
										...b.ThemeIcon.asClassNameArray(T.$8Nc),
									),
									this.r?.element.classList.add(
										...b.ThemeIcon.asClassNameArray(T.$7Nc),
									)),
							this.r?.element.setAttribute(
								"aria-expanded",
								this.isReplaceShown() ? "true" : "false",
							),
							this.tb(),
							this.O.fire();
					}
					setValue(X) {
						this.searchInput?.setValue(X);
					}
					setReplaceAllActionState(X) {
						this.s &&
							this.s.enabled !== X &&
							((this.s.enabled = X),
							(this.s.label = X ? F.c(this.db) : F.b),
							this.tb());
					}
					tb() {
						const X = this.isReplaceActive(),
							Y = this.isReplaceShown() && !!this.s?.enabled;
						X !== Y &&
							(this.t.set(Y),
							this.P.fire(Y),
							this.replaceInput?.inputBox.layout());
					}
					ub(X) {
						if (X.length === 0 || !this.searchInput?.getRegex()) return null;
						try {
							new RegExp(X, "u");
						} catch (Y) {
							return { content: Y.message };
						}
						return null;
					}
					vb() {
						if (
							(this.searchInput?.clearMessage(),
							this.setReplaceAllActionState(!1),
							this.Db.searchOnType)
						) {
							const X =
								this.searchInput && this.searchInput.isAIEnabled ? 5 : 1;
							if (this.searchInput?.getRegex())
								try {
									const Y = new RegExp(this.searchInput.getValue(), "ug"),
										ie =
											`
								~!@#$%^&*()_+
								\`1234567890-=
								qwertyuiop[]\\
								QWERTYUIOP{}|
								asdfghjkl;'
								ASDFGHJKL:"
								zxcvbnm,./
								ZXCVBNM<>? `.match(Y)?.length ?? 0,
										ne = ie < 50 ? 1 : ie < 100 ? 5 : 10;
									this.Cb(!0, this.Db.searchOnTypeDebouncePeriod * ne * X);
								} catch {}
							else this.Cb(!0, this.Db.searchOnTypeDebouncePeriod * X);
						}
					}
					wb(X) {
						if (
							(X.equals(q | a.KeyCode.Enter) &&
								(this.searchInput?.inputBox.insertAtCursor(`
`),
								X.preventDefault()),
							X.equals(a.KeyCode.Enter))
						)
							this.searchInput?.onSearchSubmit(), this.Cb(), X.preventDefault();
						else if (X.equals(a.KeyCode.Escape))
							this.N.fire({ focus: !0 }), X.preventDefault();
						else if (X.equals(a.KeyCode.Tab))
							this.isReplaceShown()
								? this.replaceInput?.focus()
								: this.searchInput?.focusOnCaseSensitive(),
								X.preventDefault();
						else if (X.equals(a.KeyCode.UpArrow))
							V(
								X,
								this.searchInput?.getValue() ?? "",
								this.searchInput?.domNode.querySelector("textarea") ?? null,
							);
						else if (X.equals(a.KeyCode.DownArrow))
							G(
								X,
								this.searchInput?.getValue() ?? "",
								this.searchInput?.domNode.querySelector("textarea") ?? null,
							);
						else if (X.equals(a.KeyCode.PageUp)) {
							const Y = this.searchInput?.inputBox.inputElement;
							Y && (Y.setSelectionRange(0, 0), Y.focus(), X.preventDefault());
						} else if (X.equals(a.KeyCode.PageDown)) {
							const Y = this.searchInput?.inputBox.inputElement;
							if (Y) {
								const ie = Y.value.length;
								Y.setSelectionRange(ie, ie), Y.focus(), X.preventDefault();
							}
						}
					}
					xb(X) {
						X.equals(a.KeyMod.Shift | a.KeyCode.Tab) &&
							this.isReplaceShown() &&
							(this.replaceInput?.focus(), X.preventDefault());
					}
					yb(X) {
						X.equals(a.KeyCode.Tab) &&
							this.isReplaceShown() &&
							(this.replaceInput?.focusOnPreserve(), X.preventDefault());
					}
					zb(X) {
						X.equals(a.KeyCode.Tab)
							? (this.isReplaceActive()
									? this.focusReplaceAllAction()
									: this.U.fire(),
								X.preventDefault())
							: X.equals(a.KeyMod.Shift | a.KeyCode.Tab) &&
								(this.focusRegexAction(), X.preventDefault());
					}
					Ab(X) {
						X.equals(q | a.KeyCode.Enter) &&
							(this.replaceInput?.inputBox.insertAtCursor(`
`),
							X.preventDefault()),
							X.equals(a.KeyCode.Enter)
								? (this.Cb(), X.preventDefault())
								: X.equals(a.KeyCode.Tab)
									? (this.searchInput?.focusOnCaseSensitive(),
										X.preventDefault())
									: X.equals(a.KeyMod.Shift | a.KeyCode.Tab)
										? (this.searchInput?.focus(), X.preventDefault())
										: X.equals(a.KeyCode.UpArrow)
											? V(
													X,
													this.replaceInput?.getValue() ?? "",
													this.replaceInput?.domNode.querySelector(
														"textarea",
													) ?? null,
												)
											: X.equals(a.KeyCode.DownArrow) &&
												G(
													X,
													this.replaceInput?.getValue() ?? "",
													this.replaceInput?.domNode.querySelector(
														"textarea",
													) ?? null,
												);
					}
					Bb(X) {
						X.equals(a.KeyMod.Shift | a.KeyCode.Tab) &&
							(this.focusRegexAction(), X.preventDefault());
					}
					async Cb(X = !1, Y = 0) {
						if (
							(this.searchInput?.validate(),
							!this.searchInput?.inputBox.isInputValid())
						)
							return;
						const ie = this.searchInput.getValue(),
							ne = this.Db.globalFindClipboard;
						ie && ne && (await this.eb.writeFindText(ie)),
							this.M.fire({ triggeredOnType: X, delay: Y });
					}
					getContextLines() {
						return this.Y.checked ? +this.contextLinesInput.value : 0;
					}
					modifyContextLines(X) {
						const ie = +this.contextLinesInput.value + (X ? 1 : -1);
						(this.Y.checked = ie !== 0),
							(this.contextLinesInput.value = "" + ie);
					}
					toggleContextLines() {
						(this.Y.checked = !this.Y.checked), this.qb();
					}
					dispose() {
						this.setReplaceAllActionState(!1), super.dispose();
					}
					get Db() {
						return this.fb.getValue("search");
					}
				};
				(e.$FOc = K),
					(e.$FOc =
						K =
						F =
							Ne(
								[
									j(2, p.$Wxb),
									j(3, g.$6j),
									j(4, o.$uZ),
									j(5, c.$Vxb),
									j(6, n.$gj),
									j(7, $.$XK),
									j(8, p.$Xxb),
									j(9, M.$Li),
									j(10, N.$IY),
								],
								K,
							));
				function J() {
					f.$TX.registerCommandAndKeybindingRule({
						id: H.ID,
						weight: f.KeybindingWeight.WorkbenchContrib,
						when: g.$Kj.and(
							y.$ooc.SearchViewVisibleKey,
							y.$ooc.ReplaceActiveKey,
							h.$a2b,
						),
						primary: a.KeyMod.Alt | a.KeyMod.CtrlCmd | a.KeyCode.Enter,
						handler: (W) => {
							const X = W.get(I.$HMb);
							if ((0, l.$pOc)(X)) {
								const Y = (0, l.$rOc)(X);
								Y && new H(Y.searchAndReplaceWidget).run();
							}
						},
					});
				}
			},
		),
		define(
			de[1067],
			he([1, 0, 24, 17, 4, 405, 85, 908]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NOc =
						e.$MOc =
						e.$LOc =
						e.$KOc =
						e.$JOc =
						e.$IOc =
						e.$HOc =
							void 0);
				const d = `
`,
					m = (y) => ($) =>
						new i.$iL(
							$.startLineNumber + y,
							$.startColumn,
							$.endLineNumber + y,
							$.endColumn,
						),
					r = (y, $) => {
						const v = (T) => `${y.range().startLineNumber + T}`,
							S = y.fullPreviewLines(),
							I = [];
						return (
							S.forEach((T, P) => {
								const k = v(P),
									D = `  ${" ".repeat($ - k.length)}${k}: `,
									M = D.length,
									N = D + (T.split(/\r?\n?$/, 1)[0] || ""),
									A = ({ start: U, end: z }) =>
										new i.$iL(1, (U ?? 1) + M, 1, (z ?? T.length + 1) + M),
									R = y.rangeInPreview(),
									O = R.startLineNumber === R.endLineNumber;
								let B;
								O
									? (B = A({ start: R.startColumn, end: R.endColumn }))
									: P === 0
										? (B = A({ start: R.startColumn }))
										: P === S.length - 1
											? (B = A({ end: R.endColumn }))
											: (B = A({})),
									I.push({ lineNumber: k, line: N, ranges: [B] });
							}),
							I
						);
					};
				function u(y, $) {
					const v =
							y.textMatches().length > 0
								? a(y.resource, y.textMatches().sort(E.$NNc), y.context, $)
								: void 0,
						S = y
							.cellMatches()
							.sort((I, T) => I.cellIndex - T.cellIndex)
							.sort()
							.filter((I) => I.contentMatches.length > 0)
							.map((I, T) => h(I, $, T === 0));
					return [v, ...S].filter((I) => !!I);
				}
				function a(y, $, v, S, I = !0) {
					const T = $[$.length - 1].range().endLineNumber.toString().length,
						P = I ? [`${S(y)}:`] : [],
						k = [],
						L = {},
						D = [];
					v.forEach((A, R) => D.push({ line: A, lineNumber: R })),
						D.sort((A, R) => A.lineNumber - R.lineNumber);
					let M;
					const N = new Set();
					for (
						$.forEach((A) => {
							r(A, T).forEach((R) => {
								if (!N.has(R.lineNumber)) {
									for (; D.length && D[0].lineNumber < +R.lineNumber; ) {
										const { line: O, lineNumber: B } = D.shift();
										M !== void 0 && B !== M + 1 && P.push(""),
											P.push(`  ${" ".repeat(T - `${B}`.length)}${B}  ${O}`),
											(M = B);
									}
									(L[R.lineNumber] = P.length),
										N.add(R.lineNumber),
										P.push(R.line),
										(M = +R.lineNumber);
								}
								k.push(...R.ranges.map(m(L[R.lineNumber])));
							});
						});
						D.length;
					) {
						const { line: A, lineNumber: R } = D.shift();
						P.push(`  ${R}  ${A}`);
					}
					return { text: P, matchRanges: k };
				}
				function h(y, $, v) {
					return a(
						y.cell?.uri ?? y.parent.resource,
						y.contentMatches.sort(E.$NNc),
						y.context,
						$,
						v,
					);
				}
				const c = (y, $, v, S) => ({
						query: y.contentPattern.pattern,
						isRegexp: !!y.contentPattern.isRegExp,
						isCaseSensitive: !!y.contentPattern.isCaseSensitive,
						matchWholeWord: !!y.contentPattern.isWordMatch,
						filesToExclude: v,
						filesToInclude: $,
						showIncludesExcludes: !!(
							$ ||
							v ||
							y?.userDisabledExcludesAndIgnoreFiles
						),
						useExcludeSettingsAndIgnoreFiles:
							y?.userDisabledExcludesAndIgnoreFiles === void 0
								? !0
								: !y.userDisabledExcludesAndIgnoreFiles,
						contextLines: S,
						onlyOpenEditors: !!y.onlyOpenEditors,
						notebookSearchConfig: {
							includeMarkupInput:
								!!y.contentPattern.notebookInfo?.isInNotebookMarkdownInput,
							includeMarkupPreview:
								!!y.contentPattern.notebookInfo?.isInNotebookMarkdownPreview,
							includeCodeInput:
								!!y.contentPattern.notebookInfo?.isInNotebookCellInput,
							includeOutput:
								!!y.contentPattern.notebookInfo?.isInNotebookCellOutput,
						},
					}),
					n = (y) =>
						((S) => S.filter((I) => I !== !1 && I !== null && I !== void 0))([
							`# Query: ${((S) => S.replace(/\\/g, "\\\\").replace(/\n/g, "\\n"))(y.query ?? "")}`,
							(y.isCaseSensitive ||
								y.matchWholeWord ||
								y.isRegexp ||
								y.useExcludeSettingsAndIgnoreFiles === !1) &&
								`# Flags: ${(0, t.$Lb)([y.isCaseSensitive && "CaseSensitive", y.matchWholeWord && "WordMatch", y.isRegexp && "RegExp", y.onlyOpenEditors && "OpenEditors", y.useExcludeSettingsAndIgnoreFiles === !1 && "IgnoreExcludeSettings"]).join(" ")}`,
							y.filesToInclude ? `# Including: ${y.filesToInclude}` : void 0,
							y.filesToExclude ? `# Excluding: ${y.filesToExclude}` : void 0,
							y.contextLines ? `# ContextLines: ${y.contextLines}` : void 0,
							"",
						]).join(d);
				e.$HOc = n;
				const g = (y) =>
					(0, e.$KOc)(y.getValueInRange(new i.$iL(1, 1, 6, 1)).split(d));
				e.$IOc = g;
				const p = () => ({
					query: "",
					filesToInclude: "",
					filesToExclude: "",
					isRegexp: !1,
					isCaseSensitive: !1,
					useExcludeSettingsAndIgnoreFiles: !0,
					matchWholeWord: !1,
					contextLines: 0,
					showIncludesExcludes: !1,
					onlyOpenEditors: !1,
					notebookSearchConfig: {
						includeMarkupInput: !0,
						includeMarkupPreview: !1,
						includeCodeInput: !0,
						includeOutput: !0,
					},
				});
				e.$JOc = p;
				const o = (y) => {
					const $ = (0, e.$JOc)(),
						v = (I) => {
							let T = "";
							for (let P = 0; P < I.length; P++)
								if (I[P] === "\\") {
									P++;
									const k = I[P];
									if (k === "n")
										T += `
`;
									else if (k === "\\") T += "\\";
									else throw Error((0, w.localize)(9411, null));
								} else T += I[P];
							return T;
						},
						S = /^# ([^:]*): (.*)$/;
					for (const I of y) {
						const T = S.exec(I);
						if (!T) continue;
						const [, P, k] = T;
						switch (P) {
							case "Query":
								$.query = v(k);
								break;
							case "Including":
								$.filesToInclude = k;
								break;
							case "Excluding":
								$.filesToExclude = k;
								break;
							case "ContextLines":
								$.contextLines = +k;
								break;
							case "Flags":
								($.isRegexp = k.indexOf("RegExp") !== -1),
									($.isCaseSensitive = k.indexOf("CaseSensitive") !== -1),
									($.useExcludeSettingsAndIgnoreFiles =
										k.indexOf("IgnoreExcludeSettings") === -1),
									($.matchWholeWord = k.indexOf("WordMatch") !== -1),
									($.onlyOpenEditors = k.indexOf("OpenEditors") !== -1);
						}
					}
					return (
						($.showIncludesExcludes = !!(
							$.filesToInclude ||
							$.filesToExclude ||
							!$.useExcludeSettingsAndIgnoreFiles
						)),
						$
					);
				};
				e.$KOc = o;
				const f = (y, $, v, S, I, T, P) => {
					if (!y.query) throw Error("Internal Error: Expected query, got null");
					const k = c(y.query, $, v, S),
						L =
							y.fileCount() > 1
								? (0, w.localize)(9412, null, y.fileCount())
								: (0, w.localize)(9413, null),
						D =
							y.count() > 1
								? (0, w.localize)(9414, null, y.count())
								: (0, w.localize)(9415, null),
						M = [y.count() ? `${D} - ${L}` : (0, w.localize)(9416, null)];
					P && M.push((0, w.localize)(9417, null)), M.push("");
					const N = (R, O) => (0, E.$NNc)(R, O, T),
						A = b(
							y
								.folderMatches()
								.sort(N)
								.map((R) =>
									R.allDownstreamFileMatches()
										.sort(N)
										.flatMap((O) => u(O, I)),
								)
								.flat(),
						);
					return {
						matchRanges: A.matchRanges.map(m(M.length)),
						text: M.concat(A.text).join(d),
						config: k,
					};
				};
				e.$LOc = f;
				const b = (y) => {
						const $ = [],
							v = [];
						return (
							y.forEach((S) => {
								S.matchRanges.map(m($.length)).forEach((I) => v.push(I)),
									S.text.forEach((I) => $.push(I)),
									$.push("");
							}),
							{ text: $, matchRanges: v }
						);
					},
					s = async (y, $) => {
						const S = (await y.get(C.$kZ).read($)).value;
						return (0, e.$NOc)(S);
					};
				e.$MOc = s;
				const l = (y) => {
					const $ = [],
						v = [];
					let S = !0;
					for (const I of y.split(/\r?\n/g))
						S ? ($.push(I), I === "" && (S = !1)) : v.push(I);
					return {
						config: (0, e.$KOc)($),
						text: v.join(`
`),
					};
				};
				e.$NOc = l;
			},
		),
		define(
			de[4169],
			he([
				1, 0, 7, 114, 127, 15, 27, 3, 28, 48, 17, 104, 67, 125, 840, 4, 31, 10,
				8, 49, 5, 128, 73, 84, 21, 32, 51, 35, 26, 25, 1337, 44, 1748, 1367,
				361, 568, 405, 615, 1067, 66, 18, 186, 561, 22, 41, 40, 1863, 46, 1647,
				106, 34, 377, 95, 72, 908,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
			) {
				"use strict";
				var _;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VOc = void 0),
					(t = mt(t));
				const te = /^(\s+)(\d+)(: |  )(\s*)(.*)$/,
					Q = /^(\S.*):$/;
				let Z = class extends L.$lec {
					static {
						_ = this;
					}
					static {
						this.ID = B.$zOc;
					}
					static {
						this.SEARCH_EDITOR_VIEW_STATE_PREFERENCE_KEY =
							"searchEditorViewState";
					}
					get Yb() {
						return this.a;
					}
					constructor(
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
					) {
						super(_.ID, ae, pe, ve, ye, Oe, $e, He, xe, Je),
							(this.pc = ue),
							(this.qc = fe),
							(this.rc = me),
							(this.sc = ge),
							(this.tc = be),
							(this.uc = Ce),
							(this.vc = Le),
							(this.wc = Ke),
							(this.xc = Te),
							(this.yc = Ee),
							(this.fc = new E.$Jh(0)),
							(this.gc = !1),
							(this.hc = !1),
							(this.nc = 0),
							(this.oc = !1),
							(this.lc = t.$(".search-editor")),
							(this.ic = this.D(new $.$aO(Fe))),
							this.D((this.kc = new d.$Zc())),
							(this.jc = new E.$Jh(2e3)),
							(this.mc = this.D(this.m.createInstance(O.$RNc)));
					}
					Y(ae) {
						t.$fhb(ae, this.lc),
							(this.Zb = t.$fhb(this.lc, t.$(".query-container")));
						const pe = t.$fhb(this.lc, t.$(".search-results"));
						super.Y(pe), this.Ec();
						const $e = (0, m.$wg)(this.scopedContextKeyService);
						B.$vOc.bindTo($e).set(!0),
							this.Ac(
								this.Zb,
								this.D(this.m.createChild(new l.$Ki([f.$6j, $e]))),
								ie.$ooc.InputBoxFocusedKey.bindTo($e),
							);
					}
					Ac(ae, pe, $e) {
						const ye = (0, X.$xyb)({ inputBorder: se });
						(this.Xb = this.D(
							pe.createInstance(N.$FOc, ae, {
								_hideReplaceToggle: !0,
								showContextToggle: !0,
								inputBoxStyles: ye,
								toggleStyles: X.$pyb,
							}),
						)),
							this.D(this.Xb.onReplaceToggled(() => this.Mc())),
							this.D(this.Xb.onDidHeightChange(() => this.Mc())),
							this.D(
								this.Xb.onSearchSubmit(({ delay: be }) =>
									this.triggerSearch({ delay: be }),
								),
							),
							this.Xb.searchInput
								? this.D(
										this.Xb.searchInput.onDidOptionChange(() =>
											this.triggerSearch({ resetCursor: !1 }),
										),
									)
								: this.xc.warn(
										"SearchEditor: SearchWidget.searchInput is undefined, cannot register onDidOptionChange listener",
									),
							this.D(
								this.Xb.onDidToggleContext(() =>
									this.triggerSearch({ resetCursor: !1 }),
								),
							),
							(this.cc = t.$fhb(ae, t.$(".includes-excludes")));
						const ue = (0, g.localize)(9398, null);
						(this.dc = t.$fhb(
							this.cc,
							t.$(".expand" + P.ThemeIcon.asCSSSelector(H.$4Nc), {
								tabindex: 0,
								role: "button",
								"aria-label": ue,
							}),
						)),
							this.D(
								this.yc.setupManagedHover((0, ne.$cib)("element"), this.dc, ue),
							),
							this.D(
								t.$0fb(this.dc, t.$$gb.CLICK, (be) => {
									t.$ahb.stop(be), this.Pc();
								}),
							),
							this.D(
								t.$0fb(this.dc, t.$$gb.KEY_UP, (be) => {
									const Ce = new i.$7fb(be);
									(Ce.equals(C.KeyCode.Enter) || Ce.equals(C.KeyCode.Space)) &&
										(t.$ahb.stop(be), this.Pc());
								}),
							),
							this.D(
								t.$0fb(this.dc, t.$$gb.KEY_DOWN, (be) => {
									new i.$7fb(be).equals(C.KeyMod.Shift | C.KeyCode.Tab) &&
										(this.Xb.isReplaceActive()
											? this.Xb.focusReplaceAllAction()
											: this.Xb.isReplaceShown()
												? this.Xb.replaceInput?.focusOnPreserve()
												: this.Xb.focusRegexAction(),
										t.$ahb.stop(be));
								}),
							);
						const fe = t.$fhb(this.cc, t.$(".file-types.includes")),
							me = (0, g.localize)(9399, null);
						t.$fhb(fe, t.$("h4", void 0, me)),
							(this.ac = this.D(
								pe.createInstance(M.$mOc, fe, this.sc, {
									ariaLabel: (0, g.localize)(9400, null),
									inputBoxStyles: ye,
								}),
							)),
							this.ac.onSubmit((be) =>
								this.triggerSearch({
									resetCursor: !1,
									delay: be ? this.Fc.searchOnTypeDebouncePeriod : 0,
								}),
							),
							this.D(
								this.ac.onChangeSearchInEditorsBox(() => this.triggerSearch()),
							);
						const ve = t.$fhb(this.cc, t.$(".file-types.excludes")),
							ge = (0, g.localize)(9401, null);
						t.$fhb(ve, t.$("h4", void 0, ge)),
							(this.bc = this.D(
								pe.createInstance(M.$nOc, ve, this.sc, {
									ariaLabel: (0, g.localize)(9402, null),
									inputBoxStyles: ye,
								}),
							)),
							this.bc.onSubmit((be) =>
								this.triggerSearch({
									resetCursor: !1,
									delay: be ? this.Fc.searchOnTypeDebouncePeriod : 0,
								}),
							),
							this.D(this.bc.onChangeIgnoreBox(() => this.triggerSearch())),
							(this.ec = t.$fhb(
								ae,
								t.$(".messages.text-search-provider-messages"),
							)),
							[
								this.Xb.searchInputFocusTracker,
								this.Xb.replaceInputFocusTracker,
								this.bc.inputFocusTracker,
								this.ac.inputFocusTracker,
							].forEach((be) => {
								be &&
									(this.D(be.onDidFocus(() => setTimeout(() => $e.set(!0), 0))),
									this.D(be.onDidBlur(() => $e.set(!1))));
							});
					}
					Bc(ae) {
						if ((t.$9fb(this.ec), this.kc.clear(), ae)) {
							const pe = t.$fhb(
								this.ec,
								t.$(
									"a.pointer.prominent.message",
									{},
									(0, g.localize)(9403, null),
								),
							);
							this.kc.add(
								t.$0fb(pe, t.$$gb.CLICK, async () => {
									await this.triggerSearch(), this.Yb.focus();
								}),
							);
						}
					}
					Cc() {
						const ae = [W.$Jkc.ID];
						return J.EditorExtensionsRegistry.getEditorContributions().filter(
							(pe) => ae.indexOf(pe.id) === -1,
						);
					}
					Sb() {
						return { contributions: this.Cc() };
					}
					Ec() {
						this.Yb.onMouseUp((ae) => {
							if (ae.event.detail === 1) {
								const pe = this.Fc.searchEditor.singleClickBehaviour,
									$e = ae.target.position;
								if ($e && pe === "peekDefinition") {
									const ye =
										this.Yb.getModel()?.getLineContent($e.lineNumber) ?? "";
									(ye.match(Q) || ye.match(te)) &&
										(this.Yb.setSelection(u.$iL.fromPositions($e)),
										this.tc.executeCommand("editor.action.peekDefinition"));
								}
							} else if (ae.event.detail === 2) {
								const pe = this.Fc.searchEditor.doubleClickBehaviour,
									$e = ae.target.position;
								if ($e && pe !== "selectWord") {
									const ye =
										this.Yb.getModel()?.getLineContent($e.lineNumber) ?? "";
									ye.match(te)
										? (this.Yb.setSelection(u.$iL.fromPositions($e)),
											this.tc.executeCommand(
												pe === "goToLocation"
													? "editor.action.goToDeclaration"
													: "editor.action.openDeclarationToTheSide",
											))
										: ye.match(Q) &&
											(this.Yb.setSelection(u.$iL.fromPositions($e)),
											this.tc.executeCommand("editor.action.peekDefinition"));
								}
							}
						}),
							this.D(
								this.Yb.onDidChangeModelContent(() => {
									this.oc || this.Nc()?.setDirty(!0);
								}),
							);
					}
					getControl() {
						return this.Yb;
					}
					focus() {
						super.focus();
						const ae = this.jb(this.Nc());
						ae && ae.focused === "editor" ? this.Yb.focus() : this.Xb.focus();
					}
					focusSearchInput() {
						this.Xb.searchInput?.focus();
					}
					focusFilesToIncludeInput() {
						this.hc || this.Pc(!0), this.ac.focus();
					}
					focusFilesToExcludeInput() {
						this.hc || this.Pc(!0), this.bc.focus();
					}
					focusNextInput() {
						this.Xb.searchInputHasFocus()
							? this.hc
								? this.ac.focus()
								: this.Yb.focus()
							: this.ac.inputHasFocus()
								? this.bc.focus()
								: this.bc.inputHasFocus()
									? this.Yb.focus()
									: this.Yb.hasWidgetFocus();
					}
					focusPrevInput() {
						this.Xb.searchInputHasFocus()
							? this.Yb.focus()
							: this.ac.inputHasFocus()
								? this.Xb.searchInput?.focus()
								: this.bc.inputHasFocus()
									? this.ac.focus()
									: this.Yb.hasWidgetFocus();
					}
					setQuery(ae) {
						this.Xb.searchInput?.setValue(ae);
					}
					selectQuery() {
						this.Xb.searchInput?.select();
					}
					toggleWholeWords() {
						this.Xb.searchInput?.setWholeWords(
							!this.Xb.searchInput.getWholeWords(),
						),
							this.triggerSearch({ resetCursor: !1 });
					}
					toggleRegex() {
						this.Xb.searchInput?.setRegex(!this.Xb.searchInput.getRegex()),
							this.triggerSearch({ resetCursor: !1 });
					}
					toggleCaseSensitive() {
						this.Xb.searchInput?.setCaseSensitive(
							!this.Xb.searchInput.getCaseSensitive(),
						),
							this.triggerSearch({ resetCursor: !1 });
					}
					toggleContextLines() {
						this.Xb.toggleContextLines();
					}
					modifyContextLines(ae) {
						this.Xb.modifyContextLines(ae);
					}
					toggleQueryDetails(ae) {
						this.Pc(ae);
					}
					deleteResultBlock() {
						const ae = new Set(),
							pe = this.Yb.getSelections(),
							$e = this.Yb.getModel();
						if (!(pe && $e)) return;
						const ye = $e.getLineCount(),
							ue = 1,
							fe = (be) => {
								for (let Ce = be; Ce >= ue; Ce--) {
									const Le = $e.getLineContent(Ce);
									if ((ae.add(Ce), Le[0] !== void 0 && Le[0] !== " ")) break;
								}
							},
							me = (be) => {
								ae.add(be);
								for (let Ce = be + 1; Ce <= ye; Ce++) {
									const Le = $e.getLineContent(Ce);
									if (Le[0] !== void 0 && Le[0] !== " ") return Ce;
									ae.add(Ce);
								}
							},
							ve = [];
						for (const be of pe) {
							const Ce = be.startLineNumber;
							ve.push(me(Ce)), fe(Ce);
							for (let Le = be.startLineNumber; Le <= be.endLineNumber; Le++)
								ae.add(Le);
						}
						ve.length === 0 && ve.push(1);
						const ge = (be) => be !== void 0;
						$e.pushEditOperations(
							this.Yb.getSelections(),
							[...ae].map((be) => ({
								range: new u.$iL(be, 1, be + 1, 1),
								text: "",
							})),
							() => ve.filter(ge).map((be) => new a.$kL(be, 1, be, 1)),
						);
					}
					cleanState() {
						this.Nc()?.setDirty(!1);
					}
					get Fc() {
						return this.wc.getValue("search");
					}
					Gc(ae) {
						const pe = this.Yb.getModel();
						if (!pe) return;
						const $e = pe.getLineCount() ?? 1,
							ye = pe.getLineLength($e),
							ue = ae ? new r.$hL($e, ye) : new r.$hL(1, 1),
							fe = this.Yb.getSelection()?.getStartPosition() ?? ue,
							me = this.Nc()?.getMatchRanges();
						if (!me) return;
						const ve = (ae ? le : re)(me, fe);
						this.Yb.setSelection(ve),
							this.Yb.revealLineInCenterIfOutsideViewport(ve.startLineNumber),
							this.Yb.focus();
						const ge = pe.getLineContent(ve.startLineNumber),
							be = pe.getValueInRange(ve);
						let Ce = "";
						for (let Le = ve.startLineNumber; Le >= 1; Le--)
							if (pe.getValueInRange(new u.$iL(Le, 1, Le, 2)) !== " ") {
								Ce = pe.getLineContent(Le);
								break;
							}
						(0, w.$oib)(
							(0, g.localize)(9404, null, be, ge, Ce.slice(0, Ce.length - 1)),
						);
					}
					focusNextResult() {
						this.Gc(!1);
					}
					focusPreviousResult() {
						this.Gc(!0);
					}
					focusAllResults() {
						this.Yb.setSelections(
							(this.Nc()?.getMatchRanges() ?? []).map(
								(ae) =>
									new a.$kL(
										ae.startLineNumber,
										ae.startColumn,
										ae.endLineNumber,
										ae.endColumn,
									),
							),
						),
							this.Yb.focus();
					}
					async triggerSearch(ae) {
						const pe = this.Fc.searchEditor.focusResultsOnSearch;
						ae === void 0
							? (ae = { focusResults: pe })
							: ae.focusResults === void 0 && (ae.focusResults = pe);
						const $e = { resetCursor: !0, delay: 0, ...ae };
						this.Xb.searchInput?.inputBox.isInputValid() &&
							(this.gc ||
								(await this.fc.trigger(async () => {
									this.Bc(!1),
										await this.Ic(),
										$e.resetCursor &&
											(this.Yb.setPosition(new r.$hL(1, 1)),
											this.Yb.setScrollPosition({
												scrollTop: 0,
												scrollLeft: 0,
											})),
										$e.focusResults && this.Yb.focus();
								}, $e.delay)));
					}
					Hc() {
						return {
							isCaseSensitive: this.Xb.searchInput?.getCaseSensitive() ?? !1,
							contextLines: this.Xb.getContextLines(),
							filesToExclude: this.bc.getValue(),
							filesToInclude: this.ac.getValue(),
							query: this.Xb.searchInput?.getValue() ?? "",
							isRegexp: this.Xb.searchInput?.getRegex() ?? !1,
							matchWholeWord: this.Xb.searchInput?.getWholeWords() ?? !1,
							useExcludeSettingsAndIgnoreFiles:
								this.bc.useExcludesAndIgnoreFiles(),
							onlyOpenEditors: this.ac.onlySearchInOpenEditors(),
							showIncludesExcludes: this.hc,
							notebookSearchConfig: {
								includeMarkupInput: this.Xb.getNotebookFilters().markupInput,
								includeMarkupPreview:
									this.Xb.getNotebookFilters().markupPreview,
								includeCodeInput: this.Xb.getNotebookFilters().codeInput,
								includeOutput: this.Xb.getNotebookFilters().codeOutput,
							},
						};
					}
					async Ic() {
						this.mc.cancelSearch(!0);
						const ae = this.Nc();
						if (!ae) return;
						this.jc.trigger(() => {
							this.Xb.searchInput?.onSearchSubmit(),
								this.bc.onSearchSubmit(),
								this.ac.onSearchSubmit();
						});
						const pe = this.Hc();
						if (!pe.query) return;
						const $e = {
								pattern: pe.query,
								isRegExp: pe.isRegexp,
								isCaseSensitive: pe.isCaseSensitive,
								isWordMatch: pe.matchWholeWord,
							},
							ye = {
								_reason: "searchEditor",
								extraFileResources: this.m.invokeFunction(R.$P7),
								maxResults: this.Fc.maxResults ?? void 0,
								disregardIgnoreFiles:
									!pe.useExcludeSettingsAndIgnoreFiles || void 0,
								disregardExcludeSettings:
									!pe.useExcludeSettingsAndIgnoreFiles || void 0,
								excludePattern: [{ pattern: pe.filesToExclude }],
								includePattern: pe.filesToInclude,
								onlyOpenEditors: pe.onlyOpenEditors,
								previewOptions: { matchLines: 1, charsPerLine: 1e3 },
								surroundingContext: pe.contextLines,
								isSmartCase: this.Fc.smartCase,
								expandPatterns: !0,
								notebookSearchConfig: {
									includeMarkupInput:
										pe.notebookSearchConfig.includeMarkupInput,
									includeMarkupPreview:
										pe.notebookSearchConfig.includeMarkupPreview,
									includeCodeInput: pe.notebookSearchConfig.includeCodeInput,
									includeOutput: pe.notebookSearchConfig.includeOutput,
								},
							},
							ue = this.qc.getWorkspace().folders;
						let fe;
						try {
							fe = this.m.createInstance(A.$M8).text(
								$e,
								ue.map((Ce) => Ce.uri),
								ye,
							);
						} catch {
							return;
						}
						this.ic.start(500), this.nc++;
						const { configurationModel: me } = await ae.resolveModels();
						me.updateConfig(pe);
						const ve = this.mc.search(fe);
						ae.ongoingSearchOperation = ve.asyncResults.finally(() => {
							this.nc--, this.nc === 0 && this.ic.stop();
						});
						const ge = await ae.ongoingSearchOperation;
						await this.Jc(ge, pe, ae);
					}
					async Jc(ae, pe, $e) {
						const ye = this.Nc();
						if (
							!ye ||
							ye !== $e ||
							JSON.stringify(pe) !== JSON.stringify(this.Hc())
						)
							return;
						ye.ongoingSearchOperation = void 0;
						const ue = this.Fc.sortOrder;
						ue === x.SearchSortOrder.Modified &&
							(await this.Lc(this.mc.searchResult)),
							n.$EOb.get(this.Yb)?.closeWidget(!1);
						const me = (be) => this.rc.getUriLabel(be, { relative: !0 }),
							ve = (0, U.$LOc)(
								this.mc.searchResult,
								pe.filesToInclude,
								pe.filesToExclude,
								pe.contextLines,
								me,
								ue,
								ae?.limitHit,
							),
							{ resultsModel: ge } = await ye.resolveModels();
						if (
							((this.oc = !0),
							this.pc.updateModel(ge, ve.text),
							(this.oc = !1),
							ae && ae.messages)
						)
							for (const be of ae.messages) this.Kc(be);
						this.Mc(),
							ye.setDirty(
								!ye.hasCapability(D.EditorInputCapabilities.Untitled),
							),
							ye.setMatchRanges(ve.matchRanges);
					}
					Kc(ae) {
						let pe;
						this.ec.firstChild
							? (pe = this.ec.firstChild)
							: (pe = t.$fhb(this.ec, t.$(".message"))),
							t.$fhb(
								pe,
								(0, K.$UOc)(
									ae,
									this.m,
									this.vc,
									this.uc,
									this.tc,
									this.kc,
									() => this.triggerSearch(),
								),
							);
					}
					async Lc(ae) {
						const pe = ae
							.matches()
							.filter(($e) => !$e.fileStat)
							.map(($e) => $e.resolveFileStat(this.xb));
						await Promise.all(pe);
					}
					layout(ae) {
						(this.$b = ae), this.Mc();
					}
					getSelected() {
						const ae = this.Yb.getSelection();
						return ae ? (this.Yb.getModel()?.getValueInRange(ae) ?? "") : "";
					}
					Mc() {
						this.$b &&
							(this.Xb.setWidth(this.$b.width - 28),
							this.Yb.layout({
								height: this.$b.height - t.$zgb(this.Zb),
								width: this.$b.width,
							}),
							this.bc.setWidth(this.$b.width - 28),
							this.ac.setWidth(this.$b.width - 28));
					}
					Nc() {
						return this.input;
					}
					setSearchConfig(ae) {
						(this.Oc = ae),
							ae.query !== void 0 && this.Xb.setValue(ae.query),
							ae.isCaseSensitive !== void 0 &&
								this.Xb.searchInput?.setCaseSensitive(ae.isCaseSensitive),
							ae.isRegexp !== void 0 &&
								this.Xb.searchInput?.setRegex(ae.isRegexp),
							ae.matchWholeWord !== void 0 &&
								this.Xb.searchInput?.setWholeWords(ae.matchWholeWord),
							ae.contextLines !== void 0 &&
								this.Xb.setContextLines(ae.contextLines),
							ae.filesToExclude !== void 0 &&
								this.bc.setValue(ae.filesToExclude),
							ae.filesToInclude !== void 0 &&
								this.ac.setValue(ae.filesToInclude),
							ae.onlyOpenEditors !== void 0 &&
								this.ac.setOnlySearchInOpenEditors(ae.onlyOpenEditors),
							ae.useExcludeSettingsAndIgnoreFiles !== void 0 &&
								this.bc.setUseExcludesAndIgnoreFiles(
									ae.useExcludeSettingsAndIgnoreFiles,
								),
							ae.showIncludesExcludes !== void 0 &&
								this.Pc(ae.showIncludesExcludes);
					}
					async setInput(ae, pe, $e, ye) {
						if (
							(await super.setInput(ae, pe, $e, ye), ye.isCancellationRequested)
						)
							return;
						const { configurationModel: ue, resultsModel: fe } =
							await ae.resolveModels();
						if (
							!ye.isCancellationRequested &&
							(this.Yb.setModel(fe),
							(this.gc = !0),
							this.Bc(
								!ae.ongoingSearchOperation &&
									fe.getLineCount() === 1 &&
									fe.getValueLength() === 0 &&
									ue.config.query !== "",
							),
							this.setSearchConfig(ue.config),
							this.D(
								ue.onConfigDidUpdate((me) => {
									me !== this.Oc &&
										((this.gc = !0), this.setSearchConfig(me), (this.gc = !1));
								}),
							),
							this.Tc($e),
							pe?.preserveFocus || this.focus(),
							(this.gc = !1),
							ae.ongoingSearchOperation)
						) {
							const me = this.Hc();
							ae.ongoingSearchOperation.then((ve) => {
								this.Jc(ve, me, ae);
							});
						}
					}
					Pc(ae) {
						const pe = "expanded";
						(ae ?? !this.cc.classList.contains(pe))
							? (this.dc.setAttribute("aria-expanded", "true"),
								this.cc.classList.add(pe))
							: (this.dc.setAttribute("aria-expanded", "false"),
								this.cc.classList.remove(pe)),
							(this.hc = this.cc.classList.contains(pe)),
							this.Mc();
					}
					pb(ae) {
						if (ae.typeId === B.$DOc) return ae.modelUri;
					}
					mb(ae) {
						const $e = this.getControl().saveViewState();
						if ($e && ae.toString() === this.Nc()?.modelUri.toString())
							return {
								...$e,
								focused: this.Yb.hasWidgetFocus() ? "editor" : "input",
							};
					}
					nb(ae) {
						return ae.typeId === B.$DOc;
					}
					Tc(ae) {
						const pe = this.jb(this.Nc(), ae);
						pe && this.Yb.restoreViewState(pe);
					}
					getAriaLabel() {
						return this.Nc()?.getName() ?? (0, g.localize)(9405, null);
					}
				};
				(e.$VOc = Z),
					(e.$VOc =
						Z =
						_ =
							Ne(
								[
									j(1, S.$km),
									j(2, T.$iP),
									j(3, v.$lq),
									j(4, h.$QO),
									j(5, k.$Vi),
									j(6, y.$3N),
									j(7, s.$Li),
									j(8, b.$Wxb),
									j(9, p.$ek),
									j(10, V.$7rb),
									j(11, G.$4N),
									j(12, $.$bO),
									j(13, c.$XO),
									j(14, z.$EY),
									j(15, F.$IY),
									j(16, o.$gj),
									j(17, q.$ll),
									j(18, Y.$ik),
									j(19, ee.$Uyb),
								],
								Z,
							));
				const se = (0, I.$wP)(
					"searchEditor.textInputBorder",
					I.$VR,
					(0, g.localize)(9406, null),
				);
				function re(oe, ae) {
					for (const pe of oe)
						if (r.$hL.isBefore(ae, pe.getStartPosition())) return pe;
					return oe[0];
				}
				function le(oe, ae) {
					for (let pe = oe.length - 1; pe >= 0; pe--) {
						const $e = oe[pe];
						if (r.$hL.isBefore($e.getStartPosition(), ae)) return $e;
					}
					return oe[oe.length - 1];
				}
			},
		),
		define(
			de[4170],
			he([1, 0, 67, 61, 5, 1067, 335, 28, 122, 615, 6, 59, 186]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QOc = e.$POc = e.$OOc = void 0);
				class c {
					constructor(o) {
						(this.config = o),
							(this.a = new u.$re()),
							(this.onConfigDidUpdate = this.a.event);
					}
					updateConfig(o) {
						(this.config = o), this.a.fire(o);
					}
				}
				e.$OOc = c;
				class n {
					constructor(o) {
						this.a = o;
					}
					async resolve() {
						return (0, d.$wg)(e.$QOc.models.get(this.a)).resolve();
					}
				}
				e.$POc = n;
				class g {
					constructor() {
						this.models = new a.$Gc();
					}
					initializeModelFromExistingModel(o, f, b) {
						if (this.models.has(f))
							throw Error(
								"Unable to contruct model for resource that already exists",
							);
						const s = o.get(i.$nM),
							l = o.get(t.$QO),
							y = o.get(w.$Li),
							$ = o.get(C.$WO);
						let v;
						this.models.set(f, {
							resolve: () => (
								v ||
									(v = (async () => {
										const S = await this.a(f, s, l, $, y);
										return (
											S ||
											Promise.resolve({
												resultsModel:
													l.getModel(f) ??
													l.createModel("", s.createById(h.$m7), f),
												configurationModel: new c(b),
											})
										);
									})()),
								v
							),
						});
					}
					initializeModelFromRawData(o, f, b, s) {
						if (this.models.has(f))
							throw Error(
								"Unable to contruct model for resource that already exists",
							);
						const l = o.get(i.$nM),
							y = o.get(t.$QO),
							$ = o.get(w.$Li),
							v = o.get(C.$WO);
						let S;
						this.models.set(f, {
							resolve: () => (
								S ||
									(S = (async () => {
										const I = await this.a(f, l, y, v, $);
										return (
											I ||
											Promise.resolve({
												resultsModel: y.createModel(
													s ?? "",
													l.createById(h.$m7),
													f,
												),
												configurationModel: new c(b),
											})
										);
									})()),
								S
							),
						});
					}
					initializeModelFromExistingFile(o, f, b) {
						if (this.models.has(f))
							throw Error(
								"Unable to contruct model for resource that already exists",
							);
						const s = o.get(i.$nM),
							l = o.get(t.$QO),
							y = o.get(w.$Li),
							$ = o.get(C.$WO);
						let v;
						this.models.set(f, {
							resolve: async () => (
								v ||
									(v = (async () => {
										const S = await this.a(f, s, l, $, y);
										if (S) return S;
										const { text: I, config: T } = await y.invokeFunction(
											E.$MOc,
											b,
										);
										return {
											resultsModel: l.createModel(
												I ?? "",
												s.createById(h.$m7),
												f,
											),
											configurationModel: new c(T),
										};
									})()),
								v
							),
						});
					}
					async a(o, f, b, s, l) {
						const y = await s.resolve({ resource: o, typeId: r.$xOc });
						let $ = b.getModel(o);
						if (!$ && y) {
							const v = await (0, m.$8X)(y.value);
							$ = b.createModel(v, f.createById(h.$m7), o);
						}
						if ($) {
							const v = $.getValue(),
								{ text: S, config: I } = (0, E.$NOc)(v);
							return (
								b.destroyModel(o),
								{
									resultsModel: b.createModel(S ?? "", f.createById(h.$m7), o),
									configurationModel: new c(I),
								}
							);
						} else return;
					}
				}
				e.$QOc = new g();
			},
		),
		define(
			de[1368],
			he([
				1, 0, 6, 54, 19, 9, 64, 67, 4, 57, 5, 21, 32, 44, 282, 615, 4170, 1067,
				165, 85, 227, 334, 10, 76, 223, 14, 79, 908,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TOc = e.$SOc = e.$ROc = void 0),
					(e.$ROc = ".code-search");
				const P = (0, I.$$O)(
					"search-editor-label-icon",
					S.$ak.search,
					(0, m.localize)(9407, null),
				);
				let k = class extends v.$LO {
					static {
						T = this;
					}
					static {
						this.ID = g.$DOc;
					}
					get typeId() {
						return T.ID;
					}
					get editorId() {
						return this.typeId;
					}
					getIcon() {
						return P;
					}
					get capabilities() {
						let M = c.EditorInputCapabilities.Singleton;
						return (
							this.backingUri || (M |= c.EditorInputCapabilities.Untitled), M
						);
					}
					get resource() {
						return this.backingUri || this.modelUri;
					}
					constructor(M, N, A, R, O, B, U, z, F, x) {
						if (
							(super(),
							(this.modelUri = M),
							(this.backingUri = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.z = U),
							(this.C = z),
							(this.F = F),
							(this.c = !1),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeContent = this.m.event),
							(this.n = this.D(new t.$re())),
							(this.onDidSave = this.n.event),
							(this.q = []),
							(this.model = B.createInstance(p.$POc, M)),
							this.modelUri.scheme !== g.$wOc)
						)
							throw Error(
								"SearchEditorInput must be invoked with a SearchEditorScheme uri",
							);
						(this.a = new n.$eEb(T.ID, x)),
							this.D(x.onWillSaveState(() => this.a.saveMemento()));
						const H = this,
							q = new (class {
								constructor() {
									(this.typeId = g.$xOc),
										(this.resource = H.modelUri),
										(this.capabilities = H.hasCapability(
											c.EditorInputCapabilities.Untitled,
										)
											? l.WorkingCopyCapabilities.Untitled
											: l.WorkingCopyCapabilities.None),
										(this.onDidChangeDirty = H.onDidChangeDirty),
										(this.onDidChangeContent = H.onDidChangeContent),
										(this.onDidSave = H.onDidSave);
								}
								get name() {
									return H.getName();
								}
								isDirty() {
									return H.isDirty();
								}
								isModified() {
									return H.isDirty();
								}
								backup(V) {
									return H.J(V);
								}
								save(V) {
									return H.save(0, V).then((G) => !!G);
								}
								revert(V) {
									return H.revert(0, V);
								}
							})();
						this.D(this.z.registerWorkingCopy(q));
					}
					async save(M, N) {
						if (!(await this.resolveModels()).resultsModel.isDisposed())
							return this.backingUri
								? (await this.u.write(this.backingUri, await this.G(), N),
									this.setDirty(!1),
									this.n.fire({ reason: N?.reason, source: N?.source }),
									this)
								: this.saveAs(M, N);
					}
					tryReadConfigSync() {
						return this.s?.config;
					}
					async G() {
						const { configurationModel: M, resultsModel: N } =
							await this.resolveModels();
						return (
							(0, o.$HOc)(M.config) +
							`
` +
							N.getValue()
						);
					}
					I(M) {
						this.H?.dispose(),
							this.isDisposed() ||
								((this.H = M.onConfigDidUpdate(() => {
									this.h !== this.getName() &&
										(this.f.fire(), (this.h = this.getName())),
										(this.a.getMemento(
											a.StorageScope.WORKSPACE,
											a.StorageTarget.MACHINE,
										).searchConfig = M.config);
								})),
								this.D(this.H));
					}
					async resolveModels() {
						return this.model
							.resolve()
							.then(
								(M) => (
									(this.r = M.resultsModel),
									(this.s = M.configurationModel),
									this.h !== this.getName() &&
										(this.f.fire(), (this.h = this.getName())),
									this.I(M.configurationModel),
									M
								),
							);
					}
					async saveAs(M, N) {
						const A = await this.w.pickFileToSave(
							await this.L(),
							N?.availableFileSystems,
						);
						if (A) {
							this.C.publicLog2("searchEditor/saveSearchResults");
							const R = await this.G();
							if (
								await this.u.create([
									{ resource: A, value: R, options: { overwrite: !0 } },
								])
							) {
								if ((this.setDirty(!1), !(0, w.$gh)(A, this.modelUri))) {
									const O = this.y.invokeFunction(e.$TOc, {
										fileUri: A,
										from: "existingFile",
									});
									return O.setMatchRanges(this.getMatchRanges()), O;
								}
								return this;
							}
						}
					}
					getName(M = 12) {
						const N = (R) => (R.length < M ? R : `${R.slice(0, M - 3)}...`);
						if (this.backingUri) {
							const R = c.$A1.getOriginalUri(this);
							return (0, m.localize)(
								9408,
								null,
								(0, i.$sc)((R ?? this.backingUri).path, e.$ROc),
							);
						}
						const A = this.s?.config?.query?.trim();
						return A
							? (0, m.localize)(9409, null, N(A))
							: (0, m.localize)(9410, null);
					}
					setDirty(M) {
						const N = this.c;
						(this.c = M), N !== M && this.b.fire();
					}
					isDirty() {
						return this.c;
					}
					async rename(M, N) {
						if ((0, w.$lh)(N) === e.$ROc)
							return {
								editor: this.y.invokeFunction(e.$TOc, {
									from: "existingFile",
									fileUri: N,
								}),
							};
					}
					dispose() {
						this.t.destroyModel(this.modelUri), super.dispose();
					}
					matches(M) {
						return super.matches(M)
							? !0
							: M instanceof T
								? !!(
										M.modelUri.fragment &&
										M.modelUri.fragment === this.modelUri.fragment
									) ||
									!!(M.backingUri && (0, w.$gh)(M.backingUri, this.backingUri))
								: !1;
					}
					getMatchRanges() {
						return (this.r?.getAllDecorations() ?? [])
							.filter((M) => M.options.className === g.$yOc)
							.filter(
								({ range: M }) => !(M.startColumn === 1 && M.endColumn === 1),
							)
							.map(({ range: M }) => M);
					}
					async setMatchRanges(M) {
						this.q = (await this.resolveModels()).resultsModel.deltaDecorations(
							this.q,
							M.map((N) => ({
								range: N,
								options: {
									description: "search-editor-find-match",
									className: g.$yOc,
									stickiness:
										C.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
							})),
						);
					}
					async revert(M, N) {
						if (N?.soft) {
							this.setDirty(!1);
							return;
						}
						if (this.backingUri) {
							const { config: A, text: R } = await this.y.invokeFunction(
									o.$MOc,
									this.backingUri,
								),
								{ resultsModel: O, configurationModel: B } =
									await this.resolveModels();
							O.setValue(R), B.updateConfig(A);
						} else (await this.resolveModels()).resultsModel.setValue("");
						super.revert(M, N), this.setDirty(!1);
					}
					async J(M) {
						const N = await this.G();
						return M.isCancellationRequested
							? {}
							: { content: (0, $.$5e)($.$Te.fromString(N)) };
					}
					async L() {
						const N =
							((
								await this.resolveModels()
							).configurationModel.config.query.replace(/[^\w \-_]+/g, "_") ||
								"Search") + e.$ROc;
						return (0, w.$nh)(
							await this.w.defaultFilePath(this.F.defaultUriScheme),
							N,
						);
					}
					toUntyped() {
						if (!this.hasCapability(c.EditorInputCapabilities.Untitled))
							return { resource: this.resource, options: { override: T.ID } };
					}
				};
				(e.$SOc = k),
					(e.$SOc =
						k =
						T =
							Ne(
								[
									j(2, d.$QO),
									j(3, b.$kZ),
									j(4, r.$IO),
									j(5, u.$Li),
									j(6, s.$gY),
									j(7, h.$km),
									j(8, f.$I8),
									j(9, a.$lq),
								],
								k,
							));
				const L = (D, M) => {
					const N = D.get(a.$lq),
						A = D.get(y.$gj),
						R = D.get(u.$Li),
						O =
							M.from === "model"
								? M.modelUri
								: E.URI.from({ scheme: g.$wOc, fragment: `${Math.random()}` });
					if (!p.$QOc.models.has(O))
						if (M.from === "existingFile")
							R.invokeFunction((B) =>
								p.$QOc.initializeModelFromExistingFile(B, O, M.fileUri),
							);
						else {
							const B = A.getValue("search").searchEditor,
								U = B.reusePriorSearchConfiguration,
								z = B.defaultNumberOfContextLines,
								F = U
									? new n.$eEb(k.ID, N).getMemento(
											a.StorageScope.WORKSPACE,
											a.StorageTarget.MACHINE,
										).searchConfig
									: {},
								H = { ...(0, o.$JOc)(), ...F, ...M.config };
							z != null && (H.contextLines = M?.config?.contextLines ?? z),
								M.from === "rawData"
									? (M.resultsContents && (H.contextLines = 0),
										R.invokeFunction((q) =>
											p.$QOc.initializeModelFromRawData(
												q,
												O,
												H,
												M.resultsContents,
											),
										))
									: R.invokeFunction((q) =>
											p.$QOc.initializeModelFromExistingModel(q, O, H),
										);
						}
					return R.createInstance(
						k,
						O,
						M.from === "existingFile"
							? M.fileUri
							: M.from === "model"
								? M.backupOf
								: void 0,
					);
				};
				e.$TOc = L;
			},
		),
		define(
			de[4171],
			he([
				1, 0, 12, 4, 10, 89, 377, 615, 405, 1368, 18, 8, 28, 11, 43, 27, 547,
				483, 91, 7,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(i = mt(i)),
					(C = mt(C)),
					(d = mt(d)),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleQueryDetailsActionId,
									title: i.localize2(9240, "Toggle Query Details"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.or(C.$ooc.SearchViewFocusedKey, d.$vOc),
										primary: g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.KeyJ,
									},
								});
							}
							run(k, ...L) {
								const D = k.get(a.$6j).getContext((0, b.$Jgb)());
								if (D.getValue(d.$vOc.serialize()))
									k.get(u.$IY).activeEditorPane.toggleQueryDetails(L[0]?.show);
								else if (D.getValue(C.$ooc.SearchViewFocusedKey.serialize())) {
									const M = (0, o.$rOc)(k.get(E.$HMb));
									(0, h.$wg)(M).toggleQueryDetails(void 0, L[0]?.show);
								}
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CloseReplaceWidgetActionId,
									title: i.localize2(9241, "Close Replace Widget"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											C.$ooc.ReplaceInputBoxFocusedKey,
										),
										primary: g.KeyCode.Escape,
									},
								});
							}
							run(k) {
								const L = (0, o.$rOc)(k.get(E.$HMb));
								return (
									L &&
										(L.searchAndReplaceWidget.toggleReplace(!1),
										L.searchAndReplaceWidget.focus()),
									Promise.resolve(null)
								);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleCaseSensitiveCommandId,
									title: i.localize2(9242, "Toggle Case Sensitive"),
									category: o.$oOc,
									keybinding: Object.assign(
										{
											weight: n.KeybindingWeight.WorkbenchContrib,
											when: t.$m
												? a.$Kj.and(
														C.$ooc.SearchViewFocusedKey,
														C.$ooc.FileMatchOrFolderMatchFocusKey.toNegated(),
													)
												: C.$ooc.SearchViewFocusedKey,
										},
										p.$d2b,
									),
								});
							}
							async run(k) {
								s(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleWholeWordCommandId,
									title: i.localize2(9243, "Toggle Whole Word"),
									keybinding: Object.assign(
										{
											weight: n.KeybindingWeight.WorkbenchContrib,
											when: C.$ooc.SearchViewFocusedKey,
										},
										p.$e2b,
									),
									category: o.$oOc,
								});
							}
							async run(k) {
								return l(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleRegexCommandId,
									title: i.localize2(9244, "Toggle Regex"),
									keybinding: Object.assign(
										{
											weight: n.KeybindingWeight.WorkbenchContrib,
											when: C.$ooc.SearchViewFocusedKey,
										},
										p.$f2b,
									),
									category: o.$oOc,
								});
							}
							async run(k) {
								return y(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.TogglePreserveCaseId,
									title: i.localize2(9245, "Toggle Preserve Case"),
									keybinding: Object.assign(
										{
											weight: n.KeybindingWeight.WorkbenchContrib,
											when: C.$ooc.SearchViewFocusedKey,
										},
										p.$h2b,
									),
									category: o.$oOc,
								});
							}
							async run(k) {
								return $(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.OpenMatch,
									title: i.localize2(9246, "Open Match"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											C.$ooc.FileMatchOrMatchFocusKey,
										),
										primary: g.KeyCode.Enter,
										mac: {
											primary: g.KeyCode.Enter,
											secondary: [g.KeyMod.CtrlCmd | g.KeyCode.DownArrow],
										},
									},
								});
							}
							run(k) {
								const L = (0, o.$rOc)(k.get(E.$HMb));
								if (L) {
									const D = L.getControl(),
										M = L.getControl(),
										N = D.getFocus()[0];
									N instanceof m.$JNc
										? M.toggleCollapsed(N)
										: L.open(D.getFocus()[0], !1, !1, !0);
								}
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.OpenMatchToSide,
									title: i.localize2(9247, "Open Match To Side"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											C.$ooc.FileMatchOrMatchFocusKey,
										),
										primary: g.KeyMod.CtrlCmd | g.KeyCode.Enter,
										mac: { primary: g.KeyMod.WinCtrl | g.KeyCode.Enter },
									},
								});
							}
							run(k) {
								const L = (0, o.$rOc)(k.get(E.$HMb));
								if (L) {
									const D = L.getControl();
									L.open(D.getFocus()[0], !1, !0, !0);
								}
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.AddCursorsAtSearchResults,
									title: i.localize2(9248, "Add Cursors at Search Results"),
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											C.$ooc.FileMatchOrMatchFocusKey,
										),
										primary: g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.KeyL,
									},
									category: o.$oOc,
								});
							}
							async run(k) {
								const L = (0, o.$rOc)(k.get(E.$HMb));
								if (L) {
									const D = L.getControl();
									L.openEditorWithMultiCursor(D.getFocus()[0]);
								}
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusNextInputActionId,
									title: i.localize2(9249, "Focus Next Input"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.or(
											a.$Kj.and(d.$vOc, C.$ooc.InputBoxFocusedKey),
											a.$Kj.and(
												C.$ooc.SearchViewVisibleKey,
												C.$ooc.InputBoxFocusedKey,
											),
										),
										primary: g.KeyMod.CtrlCmd | g.KeyCode.DownArrow,
									},
								});
							}
							async run(k) {
								const L = k.get(u.$IY);
								L.activeEditor instanceof r.$SOc &&
									L.activeEditorPane.focusNextInput(),
									(0, o.$rOc)(k.get(E.$HMb))?.focusNextInputBox();
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusPreviousInputActionId,
									title: i.localize2(9250, "Focus Previous Input"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.or(
											a.$Kj.and(d.$vOc, C.$ooc.InputBoxFocusedKey),
											a.$Kj.and(
												C.$ooc.SearchViewVisibleKey,
												C.$ooc.InputBoxFocusedKey,
												C.$ooc.SearchInputBoxFocusedKey.toNegated(),
											),
										),
										primary: g.KeyMod.CtrlCmd | g.KeyCode.UpArrow,
									},
								});
							}
							async run(k) {
								const L = k.get(u.$IY);
								L.activeEditor instanceof r.$SOc &&
									L.activeEditorPane.focusPrevInput(),
									(0, o.$rOc)(k.get(E.$HMb))?.focusPreviousInputBox();
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusSearchFromResults,
									title: i.localize2(9251, "Focus Search From Results"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											a.$Kj.or(C.$ooc.FirstMatchFocusKey, f.$YK),
										),
										primary: g.KeyMod.CtrlCmd | g.KeyCode.UpArrow,
									},
								});
							}
							run(k) {
								(0, o.$rOc)(k.get(E.$HMb))?.focusPreviousInputBox();
							}
						},
					),
					(0, c.$4X)(
						class ba extends c.$3X {
							static {
								this.a = "search.searchOnType";
							}
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleSearchOnTypeActionId,
									title: i.localize2(9252, "Toggle Search on Type"),
									category: o.$oOc,
								});
							}
							async run(k) {
								const L = k.get(w.$gj),
									D = L.getValue(ba.a);
								return L.updateValue(ba.a, !D);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusSearchListCommandID,
									title: i.localize2(9253, "Focus List"),
									category: o.$oOc,
									f1: !0,
								});
							}
							async run(k) {
								v(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusNextSearchResultActionId,
									title: i.localize2(9254, "Focus Next Search Result"),
									keybinding: [
										{
											primary: g.KeyCode.F4,
											weight: n.KeybindingWeight.WorkbenchContrib,
										},
									],
									category: o.$oOc,
									f1: !0,
									precondition: a.$Kj.or(C.$ooc.HasSearchResults, d.$vOc),
								});
							}
							async run(k) {
								return await S(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusPreviousSearchResultActionId,
									title: i.localize2(9255, "Focus Previous Search Result"),
									keybinding: [
										{
											primary: g.KeyMod.Shift | g.KeyCode.F4,
											weight: n.KeybindingWeight.WorkbenchContrib,
										},
									],
									category: o.$oOc,
									f1: !0,
									precondition: a.$Kj.or(C.$ooc.HasSearchResults, d.$vOc),
								});
							}
							async run(k) {
								return await I(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ReplaceInFilesActionId,
									title: i.localize2(9256, "Replace in Files"),
									keybinding: [
										{
											primary:
												g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.KeyH,
											weight: n.KeybindingWeight.WorkbenchContrib,
										},
									],
									category: o.$oOc,
									f1: !0,
									menu: [
										{
											id: c.$XX.MenubarEditMenu,
											group: "4_find_global",
											order: 2,
										},
									],
								});
							}
							async run(k) {
								return await T(k, !0);
							}
						},
					);
				function s(P) {
					(0, o.$rOc)(P.get(E.$HMb))?.toggleCaseSensitive();
				}
				function l(P) {
					(0, o.$rOc)(P.get(E.$HMb))?.toggleWholeWords();
				}
				function y(P) {
					(0, o.$rOc)(P.get(E.$HMb))?.toggleRegex();
				}
				function $(P) {
					(0, o.$rOc)(P.get(E.$HMb))?.togglePreserveCase();
				}
				const v = (P) => {
					const k = P.get(E.$HMb);
					(0, o.$uOc)(k).then((L) => {
						L?.moveFocusToResults();
					});
				};
				async function S(P) {
					const k = P.get(u.$IY);
					return k.activeEditor instanceof r.$SOc
						? k.activeEditorPane.focusNextResult()
						: (0, o.$uOc)(P.get(E.$HMb)).then((D) => {
								D?.selectNextMatch();
							});
				}
				async function I(P) {
					const k = P.get(u.$IY);
					return k.activeEditor instanceof r.$SOc
						? k.activeEditorPane.focusPreviousResult()
						: (0, o.$uOc)(P.get(E.$HMb)).then((D) => {
								D?.selectPreviousMatch();
							});
				}
				async function T(P, k) {
					return (0, o.$uOc)(P.get(E.$HMb), !1).then((L) => {
						if (L) {
							L.searchAndReplaceWidget.toggleReplace(k);
							const M = L.updateTextFromFindWidgetOrSelection({
								allowUnselectedWord: !k,
							});
							L.searchAndReplaceWidget.focus(void 0, M, M);
						}
					});
				}
			},
		),
		define(
			de[1971],
			he([
				1, 0, 23, 56, 10, 5, 73, 32, 25, 44, 89, 483, 1368, 1067, 358, 66, 18,
				245, 908,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Oc =
						e.$4Oc =
						e.$2Oc =
						e.$1Oc =
						e.$ZOc =
						e.$YOc =
						e.$XOc =
						e.$WOc =
							void 0),
					(e.$3Oc = v);
				const f = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc &&
						P.activeEditorPane.toggleCaseSensitive();
				};
				e.$WOc = f;
				const b = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc &&
						P.activeEditorPane.toggleWholeWords();
				};
				e.$XOc = b;
				const s = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc && P.activeEditorPane.toggleRegex();
				};
				e.$YOc = s;
				const l = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc &&
						P.activeEditorPane.toggleContextLines();
				};
				e.$ZOc = l;
				const y = (T, P) => {
					const k = T.get(p.$IY);
					k.activeEditor instanceof h.$SOc &&
						k.activeEditorPane.modifyContextLines(P);
				};
				e.$1Oc = y;
				const $ = (T) => {
					const P = T.get(p.$IY);
					P.activeEditor instanceof h.$SOc &&
						P.activeEditorPane.focusAllResults();
				};
				e.$2Oc = $;
				async function v(T) {
					const P = T.get(u.$HMb),
						k = T.get(E.$Li),
						L = (0, a.$rOc)(P);
					L
						? await k.invokeFunction(e.$4Oc, {
								filesToInclude: L.searchIncludePattern.getValue(),
								onlyOpenEditors:
									L.searchIncludePattern.onlySearchInOpenEditors(),
								filesToExclude: L.searchExcludePattern.getValue(),
								isRegexp: L.searchAndReplaceWidget.searchInput?.getRegex(),
								isCaseSensitive:
									L.searchAndReplaceWidget.searchInput?.getCaseSensitive(),
								matchWholeWord:
									L.searchAndReplaceWidget.searchInput?.getWholeWords(),
								useExcludeSettingsAndIgnoreFiles:
									L.searchExcludePattern.useExcludesAndIgnoreFiles(),
								showIncludesExcludes: !!(
									L.searchIncludePattern.getValue() ||
									L.searchExcludePattern.getValue() ||
									!L.searchExcludePattern.useExcludesAndIgnoreFiles()
								),
							})
						: await k.invokeFunction(e.$4Oc);
				}
				const S = async (T, P = {}, k = !1) => {
					const L = T.get(p.$IY),
						D = T.get(g.$EY),
						M = T.get(d.$km),
						N = T.get(E.$Li),
						A = T.get(w.$gj),
						R = T.get(n.$zeb),
						O = T.get(m.$Vi),
						U = T.get(o.$Feb).getLastActiveWorkspaceRoot(t.Schemas.file),
						z = U ? (O.getWorkspaceFolder(U) ?? void 0) : void 0,
						F = L.activeTextEditorControl;
					let x,
						H = "";
					if (F) {
						(0, i.$$sb)(F)
							? F.getOriginalEditor().hasTextFocus()
								? (x = F.getOriginalEditor())
								: (x = F.getModifiedEditor())
							: (x = F);
						const W = x?.getSelection();
						if (
							((H = (W && x?.getModel()?.getValueInRange(W)) ?? ""),
							W?.isEmpty() && A.getValue("search").seedWithNearestWord)
						) {
							const X = x.getModel()?.getWordAtPosition(W.getStartPosition());
							X && (H = X.word);
						}
					} else
						L.activeEditor instanceof h.$SOc &&
							(H = L.activeEditorPane.getSelected());
					M.publicLog2("searchEditor/openNewSearchEditor");
					const V = {
						query:
							P.location === "new" ||
							A.getValue("editor").find.seedSearchStringFromSelection
								? H
								: void 0,
					};
					for (const W of Object.entries(P)) {
						const X = W[0],
							Y = W[1];
						Y !== void 0 &&
							(V[X] = typeof Y == "string" ? await R.resolveAsync(z, Y) : Y);
					}
					const G = L.getEditors(r.EditorsOrder.MOST_RECENTLY_ACTIVE).find(
						(W) => W.editor.typeId === h.$SOc.ID,
					);
					let K;
					if (G && V.location === "reuse") {
						const W = D.getGroup(G.groupId);
						if (!W) throw new Error("Invalid group id for search editor");
						const X = G.editor;
						(K = await W.openEditor(X)),
							H ? K.setQuery(H) : K.selectQuery(),
							K.setSearchConfig(V);
					} else {
						const W = N.invokeFunction(h.$TOc, {
							config: V,
							resultsContents: "",
							from: "rawData",
						});
						K = await L.openEditor(W, { pinned: !0 }, k ? p.$KY : p.$JY);
					}
					const J = A.getValue("search").searchOnType;
					(V.triggerSearch === !0 ||
						(V.triggerSearch !== !1 && J && V.query)) &&
						K.triggerSearch({ focusResults: V.focusResults }),
						V.focusResults || K.focusSearchInput();
				};
				e.$4Oc = S;
				const I = async (T, P, k, L, D) => {
					if (!P.query) {
						console.error("Expected searchResult.query to be defined. Got", P);
						return;
					}
					const M = T.get(p.$IY),
						N = T.get(d.$km),
						A = T.get(E.$Li),
						R = T.get(C.$3N),
						O = T.get(w.$gj),
						B = O.getValue("search").sortOrder;
					N.publicLog2("searchEditor/createEditorFromSearchResult");
					const U = (q) => R.getUriLabel(q, { relative: !0 }),
						{
							text: z,
							matchRanges: F,
							config: x,
						} = (0, c.$LOc)(P, k, L, 0, U, B);
					x.onlyOpenEditors = D;
					const H =
						O.getValue("search").searchEditor.defaultNumberOfContextLines;
					if (P.isDirty || H === 0 || H === null) {
						const q = A.invokeFunction(h.$TOc, {
							resultsContents: z,
							config: x,
							from: "rawData",
						});
						await M.openEditor(q, { pinned: !0 }), q.setMatchRanges(F);
					} else {
						const q = A.invokeFunction(h.$TOc, {
							from: "rawData",
							resultsContents: "",
							config: { ...x, contextLines: H },
						});
						(await M.openEditor(q, { pinned: !0 })).triggerSearch();
					}
				};
				e.$5Oc = I;
			},
		),
		define(
			de[1068],
			he([
				1, 0, 7, 114, 127, 292, 264, 15, 29, 6, 103, 27, 3, 12, 37, 9, 23, 56,
				65, 281, 104, 618, 1788, 4, 91, 11, 31, 10, 8, 49, 57, 22, 5, 128, 39,
				93, 40, 41, 84, 21, 32, 106, 35, 26, 25, 853, 362, 233, 146, 282, 60,
				1360, 1748, 483, 561, 1863, 4168, 1367, 377, 804, 568, 1258, 405, 1971,
				18, 131, 361, 186, 85, 161, 34, 184, 95, 72, 219, 298, 191, 354, 118,
				356, 17, 42, 169, 2488,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
				fe,
				me,
				ve,
				ge,
				be,
				Ce,
				Le,
				Fe,
				Oe,
				xe,
				He,
				Ke,
				Je,
				Te,
				Ee,
				Ie,
			) {
				"use strict";
				var Be;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dPc = e.SearchViewPosition = void 0),
					(e.$ePc = De),
					(e.$fPc = Re),
					(t = mt(t)),
					(w = mt(w)),
					(m = mt(m)),
					(c = mt(c)),
					(n = mt(n)),
					(p = mt(p)),
					($ = mt($)),
					(se = mt(se));
				const Se = t.$;
				var ke;
				(function (je) {
					(je[(je.SideBar = 0)] = "SideBar"), (je[(je.Panel = 1)] = "Panel");
				})(ke || (e.SearchViewPosition = ke = {}));
				const Ue = $.localize(9311, null),
					qe = 75;
				let Ae = class extends W.$TMb {
					static {
						Be = this;
					}
					static {
						this.c = "actions-right";
					}
					constructor(
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
						xt,
						Vt,
						Bt,
						Gt,
						Mt,
						Ut,
						ei,
						mi,
						ii,
						Dt,
						Jt,
					) {
						super(Ve, It, ze, Rt, ti, ht, gt, xt, di, Vt, Bt),
							(this.Wc = Ze),
							(this.Xc = et),
							(this.Yc = rt),
							(this.Zc = ft),
							(this.$c = bt),
							(this.ad = nt),
							(this.bd = lt),
							(this.cd = ct),
							(this.dd = Nt),
							(this.ed = jt),
							(this.fd = kt),
							(this.gd = hi),
							(this.hd = Kt),
							(this.jd = Ye),
							(this.kd = Xe),
							(this.ld = Lt),
							(this.md = Gt),
							(this.nd = Mt),
							(this.od = Ut),
							(this.pd = ei),
							(this.qd = mi),
							(this.rd = ii),
							(this.sd = Dt),
							(this.td = Jt),
							(this.g = !1),
							(this.mc = "input"),
							(this.wc = new h.$Zc()),
							(this.Jc = Promise.resolve()),
							(this.Nc = !1),
							(this.Rc = 0),
							(this.Uc = void 0),
							(this.Vc = void 0),
							(this.h = t.$(".search-view")),
							(this.t = se.$ooc.SearchViewVisibleKey.bindTo(this.Bb)),
							(this.cc = se.$ooc.FirstMatchFocusKey.bindTo(this.Bb)),
							(this.dc = se.$ooc.FileMatchOrMatchFocusKey.bindTo(this.Bb)),
							(this.ec = se.$ooc.FileMatchOrFolderMatchFocusKey.bindTo(
								this.Bb,
							)),
							(this.fc =
								se.$ooc.FileMatchOrFolderMatchWithResourceFocusKey.bindTo(
									this.Bb,
								)),
							(this.gc = se.$ooc.FileFocusKey.bindTo(this.Bb)),
							(this.hc = se.$ooc.FolderFocusKey.bindTo(this.Bb)),
							(this.ic = se.$ooc.ResourceFolderFocusKey.bindTo(this.Bb)),
							(this.lc = se.$ooc.HasSearchResults.bindTo(this.Bb)),
							(this.jc = se.$ooc.MatchFocusKey.bindTo(this.Bb)),
							(this.nc = le.$R7.bindTo(this.Bb)),
							(this.oc = se.$ooc.ViewHasSearchPatternKey.bindTo(this.Bb)),
							(this.pc = se.$ooc.ViewHasReplacePatternKey.bindTo(this.Bb)),
							(this.qc = se.$ooc.ViewHasFilePatternKey.bindTo(this.Bb)),
							(this.rc = se.$ooc.ViewHasSomeCollapsibleKey.bindTo(this.Bb)),
							(this.Pc = se.$ooc.InTreeViewKey.bindTo(this.Bb)),
							(this.Qc = se.$ooc.AIResultsVisibleKey.bindTo(this.Bb)),
							this.D(
								this.Bb.onDidChangeContext((si) => {
									const Zt = se.$ooc.hasAIResultProvider.keys();
									si.affectsSome(new Set(Zt)) && this.xd();
								}),
							),
							(this.Bb = this.D(this.Bb.createScoped(this.h))),
							se.$ooc.SearchViewFocusedKey.bindTo(this.Bb).set(!0),
							(this.L = se.$ooc.InputBoxFocusedKey.bindTo(this.Bb)),
							(this.ab = se.$ooc.PatternIncludesFocusedKey.bindTo(this.Bb)),
							(this.sb = se.$ooc.PatternExcludesFocusedKey.bindTo(this.Bb)),
							(this.kc = se.$ooc.IsEditableItemKey.bindTo(this.Bb)),
							(this.Db = this.D(
								this.Db.createChild(new N.$Ki([P.$6j, this.Bb])),
							)),
							this.D(
								this.Ab.onDidChangeConfiguration((si) => {
									si.affectsConfiguration("search.sortOrder")
										? (this.Ce.sortOrder === fe.SearchSortOrder.Modified &&
												this.He(),
											this.refreshTree())
										: si.affectsConfiguration("search.aiResults") && this.xd();
								}),
							),
							(this.n = this.ed.searchModel),
							(this.j = this.Db.createInstance(ue.$M8)),
							(this.s = new X.$eEb(this.id, Lt)),
							(this.uc = this.s.getMemento(
								z.StorageScope.WORKSPACE,
								z.StorageTarget.MACHINE,
							)),
							(this.uc["query.queryDetailsExpanded"] =
								this.uc["query.queryDetailsExpanded"] ?? !0),
							this.D(this.Wc.onDidFilesChange((si) => this.Be(si))),
							this.D(
								this.gd.untitled.onWillDispose((si) => this.Ae(si.resource)),
							),
							this.D(this.dd.onDidChangeWorkbenchState(() => this.yd())),
							this.D(this.jd.onDidClearHistory(() => this.De())),
							this.D(this.Ab.onDidChangeConfiguration((si) => this.Fd(si))),
							(this.Gc = this.D(new d.$Jh(250))),
							(this.Kc = this.D(new d.$Jh(2e3))),
							(this.Lc = this.D(new d.$Jh(100))),
							(this.Mc = this.D(new d.$Jh(0))),
							(this.Oc = this.Db.createInstance(Q.$aPc, this)),
							(this.ud =
								this.uc["view.treeLayout"] ??
								this.Ce.defaultViewMode === fe.ViewMode.Tree),
							(this.Sc = this.D(new d.$Yh(this.ie.bind(this), 80))),
							this.D(
								this.ld.onWillSaveState(() => {
									this.Ee();
								}),
							),
							this.D(
								this.ld.onDidChangeValue(
									z.StorageScope.WORKSPACE,
									oe.$cPc.SEARCH_HISTORY_KEY,
									this.D(new h.$Zc()),
								)(() => {
									const si = this.jd.load();
									si.include && this.Dc.prependHistory(si.include),
										si.exclude && this.Cc.prependHistory(si.exclude),
										si.search && this.yc.prependSearchHistory(si.search),
										si.replace && this.yc.prependReplaceHistory(si.replace);
								}),
							),
							(this.Hc = this.hasSearchResults());
					}
					get ud() {
						return this.Pc.get() ?? !1;
					}
					set ud(Ve) {
						this.Pc.set(Ve);
					}
					get vd() {
						return this.Qc.get() ?? !1;
					}
					set vd(Ve) {
						this.Qc.set(Ve);
					}
					setTreeView(Ve) {
						Ve !== this.ud &&
							((this.ud = Ve),
							this.Bd(this.Fb.getFileIconTheme()),
							this.refreshTree());
					}
					async setAIResultsVisible(Ve) {
						Ve !== this.vd &&
							(Ve
								? ((this.Uc = this.de()),
									(this.Vc = this.yc.isReplaceShown()),
									this.yc.toggleReplace(!1),
									(this.Bc.style.display = "none"),
									(this.yc.replaceButtonVisibility = !1),
									this.toggleQueryDetails(void 0, !1))
								: ((this.Bc.style.display = ""),
									(this.yc.replaceButtonVisibility = !0),
									this.Vc && this.yc.toggleReplace(this.Vc),
									this.Uc && this.toggleQueryDetails(void 0, this.Uc)),
							(this.vd = Ve),
							!this.n.searchResult.isEmpty() &&
								(this.model.cancelAISearch(),
								Ve && (await this.model.addAIResults()),
								this.Hd(),
								this.je(
									() => {},
									void 0,
									void 0,
									this.n.searchResult.getCachedSearchComplete(Ve),
								)));
					}
					get wd() {
						return this.nc.get() ?? le.SearchUIState.Idle;
					}
					set wd(Ve) {
						this.nc.set(Ve);
					}
					getContainer() {
						return this.h;
					}
					get searchResult() {
						return this.n && this.n.searchResult;
					}
					get model() {
						return this.n;
					}
					xd() {
						const Ve = this.Ed();
						Ve &&
							this.yc.searchInput &&
							(this.yc.searchInput.sparkleVisible = Ve);
					}
					yd() {
						this.dd.getWorkbenchState() !== V.WorkbenchState.EMPTY &&
							this.Ic &&
							t.hide(this.Ic);
					}
					zd() {
						(this.Nc = !0),
							this.yc.setValue(
								this.n.searchResult.query?.contentPattern.pattern ?? "",
							),
							this.yc.setReplaceAllActionState(!1),
							this.yc.toggleReplace(!0),
							this.Dc.setOnlySearchInOpenEditors(
								this.n.searchResult.query?.onlyOpenEditors || !1,
							),
							this.Cc.setUseExcludesAndIgnoreFiles(
								!this.n.searchResult.query
									?.userDisabledExcludesAndIgnoreFiles || !0,
							),
							this.searchIncludePattern.setValue(""),
							this.searchExcludePattern.setValue(""),
							(this.Nc = !1);
					}
					async replaceSearchModel(Ve, Ze) {
						let et;
						this.Zc.withProgress(
							{ location: this.Yb(), delay: 0 },
							(bt) => new Promise((nt) => (et = nt)),
						);
						const rt = setTimeout(() => {
							this.wd = le.SearchUIState.SlowSearch;
						}, 2e3);
						if (
							(this.Sc.schedule(),
							(Ve.location = ae.SearchModelLocation.PANEL),
							(Ve.replaceActive = this.n.isReplaceActive()),
							(Ve.replaceString = this.yc.getReplaceValue()),
							this.Tc?.dispose(),
							(this.Tc = this.D(Ve.onSearchResultChanged((bt) => this.Hd(bt)))),
							(this.ed.searchModel = Ve),
							(this.n = Ve),
							this.Hd(),
							this.zd(),
							Ze.then(
								(bt) => {
									clearTimeout(rt), this.je(et, void 0, void 0, bt);
								},
								(bt) => {
									clearTimeout(rt), this.ke(bt, et, void 0, void 0);
								},
							),
							this.Ce.collapseResults !== "alwaysCollapse" &&
								this.n.searchResult.matches(this.vd).length === 1)
						) {
							const bt = this.n.searchResult.matches(this.vd)[0];
							bt.count() < 50 && this.sc.expand(bt);
						}
					}
					W(Ve) {
						super.W(Ve),
							(this.h = t.$fhb(Ve, t.$(".search-view"))),
							(this.xc = t.$fhb(this.h, Se(".search-widgets-container"))),
							this.Dd(this.xc),
							this.xd();
						const Ze = this.jd.load(),
							et = this.uc["query.filePatterns"] || "",
							rt = this.uc["query.folderExclusions"] || "",
							ft = Ze.exclude || [],
							bt = this.uc["query.folderIncludes"] || "",
							nt = Ze.include || [],
							lt = this.uc["query.onlyOpenEditors"] || !1,
							ct = this.uc["query.queryDetailsExpanded"] || "",
							gt =
								typeof this.uc["query.useExcludesAndIgnoreFiles"] == "boolean"
									? this.uc["query.useExcludesAndIgnoreFiles"]
									: !0;
						this.Ac = t.$fhb(this.xc, Se(".query-details"));
						const ht = $.localize(9312, null);
						(this.Bc = t.$fhb(
							this.Ac,
							Se(".more" + q.ThemeIcon.asCSSSelector(_.$4Nc), {
								tabindex: 0,
								role: "button",
								"aria-label": ht,
							}),
						)),
							this.D(
								this.Hb.setupManagedHover((0, Ce.$cib)("element"), this.Bc, ht),
							),
							this.D(
								t.$0fb(this.Bc, t.$$gb.CLICK, (Kt) => {
									t.$ahb.stop(Kt),
										this.toggleQueryDetails(!this.kd.isScreenReaderOptimized());
								}),
							),
							this.D(
								t.$0fb(this.Bc, t.$$gb.KEY_UP, (Kt) => {
									const di = new i.$7fb(Kt);
									(di.equals(a.KeyCode.Enter) || di.equals(a.KeyCode.Space)) &&
										(t.$ahb.stop(Kt), this.toggleQueryDetails(!1));
								}),
							),
							this.D(
								t.$0fb(this.Bc, t.$$gb.KEY_DOWN, (Kt) => {
									new i.$7fb(Kt).equals(a.KeyMod.Shift | a.KeyCode.Tab) &&
										(this.yc.isReplaceActive()
											? this.yc.focusReplaceAllAction()
											: this.yc.isReplaceShown()
												? this.yc.replaceInput?.focusOnPreserve()
												: this.yc.focusRegexAction(),
										t.$ahb.stop(Kt));
								}),
							);
						const Rt = t.$fhb(this.Ac, Se(".file-types.includes")),
							Nt = $.localize(9313, null);
						t.$fhb(Rt, Se("h4", void 0, Nt)),
							(this.Dc = this.D(
								this.Db.createInstance(ne.$mOc, Rt, this.cd, {
									ariaLabel: Nt,
									placeholder: $.localize(9314, null),
									showPlaceholderOnFocus: !0,
									history: nt,
									inputBoxStyles: x.$wyb,
								}),
							)),
							this.Dc.setValue(bt),
							this.Dc.setOnlySearchInOpenEditors(lt),
							this.D(this.Dc.onCancel(() => this.cancelSearch(!1))),
							this.D(
								this.Dc.onChangeSearchInEditorsBox(() =>
									this.triggerQueryChange(),
								),
							),
							this.Gd(this.Dc.inputFocusTracker, this.ab);
						const jt = t.$fhb(this.Ac, Se(".file-types.excludes")),
							ti = $.localize(9315, null);
						t.$fhb(jt, Se("h4", void 0, ti)),
							(this.Cc = this.D(
								this.Db.createInstance(ne.$nOc, jt, this.cd, {
									ariaLabel: ti,
									placeholder: $.localize(9316, null),
									showPlaceholderOnFocus: !0,
									history: ft,
									inputBoxStyles: x.$wyb,
								}),
							)),
							this.Cc.setValue(rt),
							this.Cc.setUseExcludesAndIgnoreFiles(gt),
							this.D(this.Cc.onCancel(() => this.cancelSearch(!1))),
							this.D(
								this.Cc.onChangeIgnoreBox(() => this.triggerQueryChange()),
							),
							this.Gd(this.Cc.inputFocusTracker, this.sb);
						const kt = () =>
							this.qc.set(
								this.Dc.getValue().length > 0 || this.Cc.getValue().length > 0,
							);
						kt();
						const hi = (Kt) => {
							this.triggerQueryChange({
								triggeredOnType: Kt,
								delay: this.Ce.searchOnTypeDebouncePeriod,
							}),
								Kt && kt();
						};
						this.D(this.Dc.onSubmit(hi)),
							this.D(this.Cc.onSubmit(hi)),
							(this.vc = t.$fhb(
								this.h,
								Se(".messages.text-search-provider-messages"),
							)),
							this.dd.getWorkbenchState() === V.WorkbenchState.EMPTY &&
								this.ve(),
							this.Rd(this.h),
							(et !== "" || rt !== "" || bt !== "" || ct !== "" || !gt) &&
								this.toggleQueryDetails(!0, !0, !0),
							(this.Tc = this.D(
								this.n.onSearchResultChanged((Kt) => this.Hd(Kt)),
							)),
							this.D(this.onDidChangeBodyVisibility((Kt) => this.Cd(Kt))),
							this.Bd(this.Fb.getFileIconTheme()),
							this.D(this.Fb.onDidFileIconThemeChange(this.Bd, this));
					}
					Bd(Ve) {
						this.Ec.classList.toggle(
							"hide-arrows",
							this.ud && Ve.hidesExplorerArrows,
						);
					}
					Cd(Ve) {
						this.t.set(Ve),
							Ve ? this.Hc && (this.Id(), (this.Hc = !1)) : (this.mc = "input"),
							this.n?.searchResult.toggleHighlights(Ve);
					}
					get searchAndReplaceWidget() {
						return this.yc;
					}
					get searchIncludePattern() {
						return this.Dc;
					}
					get searchExcludePattern() {
						return this.Cc;
					}
					Dd(Ve) {
						const Ze = this.uc["query.contentPattern"] || "",
							et = this.uc["query.replaceText"] || "",
							rt = this.uc["query.regex"] === !0,
							ft = this.uc["query.wholeWords"] === !0,
							bt = this.uc["query.caseSensitive"] === !0,
							nt = this.jd.load(),
							lt = nt.search || this.uc["query.searchHistory"] || [],
							ct = nt.replace || this.uc["query.replaceHistory"] || [],
							gt =
								typeof this.uc["view.showReplace"] == "boolean"
									? this.uc["view.showReplace"]
									: !0,
							ht = this.uc["query.preserveCase"] === !0,
							Rt = this.uc["query.isInNotebookMarkdownInput"] ?? !0,
							Nt = this.uc["query.isInNotebookMarkdownPreview"] ?? !0,
							jt = this.uc["query.isInNotebookCellInput"] ?? !0,
							ti = this.uc["query.isInNotebookCellOutput"] ?? !0;
						if (
							((this.yc = this.D(
								this.Db.createInstance(Z.$FOc, Ve, {
									value: Ze,
									replaceValue: et,
									isRegex: rt,
									isCaseSensitive: bt,
									isWholeWords: ft,
									searchHistory: lt,
									replaceHistory: ct,
									preserveCase: ht,
									inputBoxStyles: x.$wyb,
									toggleStyles: x.$pyb,
									notebookOptions: {
										isInNotebookMarkdownInput: Rt,
										isInNotebookMarkdownPreview: Nt,
										isInNotebookCellInput: jt,
										isInNotebookCellOutput: ti,
									},
									initialAIButtonVisibility: this.Ed(),
								}),
							)),
							!this.yc.searchInput || !this.yc.replaceInput)
						) {
							this.nd.warn(
								`Cannot fully create search widget. Search or replace input undefined. SearchInput: ${this.yc.searchInput}, ReplaceInput: ${this.yc.replaceInput}`,
							);
							return;
						}
						gt && this.yc.toggleReplace(!0),
							this.D(
								this.yc.onSearchSubmit((Kt) => this.triggerQueryChange(Kt)),
							),
							this.D(
								this.yc.onSearchCancel(({ focus: Kt }) =>
									this.cancelSearch(Kt),
								),
							),
							this.D(
								this.yc.searchInput.onDidOptionChange(() => {
									this.yc.searchInput &&
									this.yc.searchInput.isAIEnabled !== this.vd
										? this.setAIResultsVisible(this.yc.searchInput.isAIEnabled)
										: this.triggerQueryChange();
								}),
							),
							this.D(
								this.yc
									.getNotebookFilters()
									.onDidChange(() => this.triggerQueryChange()),
							);
						const kt = () =>
							this.oc.set(
								this.yc.searchInput
									? this.yc.searchInput.getValue().length > 0
									: !1,
							);
						kt(), this.D(this.yc.searchInput.onDidChange(() => kt()));
						const hi = () => this.pc.set(this.yc.getReplaceValue().length > 0);
						hi(),
							this.D(this.yc.replaceInput.inputBox.onDidChange(() => hi())),
							this.D(this.yc.onDidHeightChange(() => this.Zd())),
							this.D(this.yc.onReplaceToggled(() => this.Zd())),
							this.D(
								this.yc.onReplaceStateChange((Kt) => {
									(this.n.replaceActive = Kt), this.refreshTree();
								}),
							),
							this.D(
								this.yc.onPreserveCaseChange((Kt) => {
									(this.n.preserveCase = Kt), this.refreshTree();
								}),
							),
							this.D(
								this.yc.onReplaceValueChanged(() => {
									(this.n.replaceString = this.yc.getReplaceValue()),
										this.Gc.trigger(() => this.refreshTree());
								}),
							),
							this.D(
								this.yc.onBlur(() => {
									this.Bc.focus();
								}),
							),
							this.D(this.yc.onReplaceAll(() => this.Nd())),
							this.Gd(this.yc.searchInputFocusTracker),
							this.Gd(this.yc.replaceInputFocusTracker);
					}
					Ed() {
						const Ve = se.$ooc.hasAIResultProvider.getValue(this.Bb);
						return !!(this.Ab.getValue("search.aiResults") && Ve);
					}
					Fd(Ve) {
						Ve &&
							(Ve.affectsConfiguration("search.decorations.colors") ||
								Ve.affectsConfiguration("search.decorations.badges")) &&
							this.refreshTree();
					}
					Gd(Ve, Ze) {
						Ve &&
							(this.D(
								Ve.onDidFocus(() => {
									(this.mc = "input"), this.L.set(!0), Ze?.set(!0);
								}),
							),
							this.D(
								Ve.onDidBlur(() => {
									this.L.set(
										this.yc.searchInputHasFocus() ||
											this.yc.replaceInputHasFocus() ||
											this.Dc.inputHasFocus() ||
											this.Cc.inputHasFocus(),
									),
										Ze?.set(!1);
								}),
							));
					}
					Hd(Ve) {
						if (this.isVisible()) return this.Id(Ve);
						this.Hc = !0;
					}
					Id(Ve) {
						return (
							this.yc.setReplaceAllActionState(
								!this.n.searchResult.isEmpty(this.vd),
							),
							this.se(
								this.n.searchResult.query.userDisabledExcludesAndIgnoreFiles,
								this.n.searchResult.query?.onlyOpenEditors,
								Ve?.clearingAll,
							),
							this.refreshTree(Ve)
						);
					}
					refreshTree(Ve) {
						const Ze = this.Ce.collapseResults;
						!Ve || Ve.added || Ve.removed
							? this.Ce.sortOrder === fe.SearchSortOrder.Modified
								? this.Fe().then(() => this.sc.setChildren(null, this.Jd(Ze)))
								: this.sc.setChildren(null, this.Jd(Ze))
							: this.Ce.sortOrder === fe.SearchSortOrder.CountAscending ||
									this.Ce.sortOrder === fe.SearchSortOrder.CountDescending
								? this.sc.setChildren(null, this.Jd(Ze))
								: Ve.elements.forEach((et) => {
										this.sc.setChildren(et, this.Md(et, Ze)),
											this.sc.rerender(et);
									});
					}
					Jd(Ve) {
						const Ze = this.searchResult
							.folderMatches(this.vd)
							.filter((et) => !et.isEmpty())
							.sort(ae.$NNc);
						return Ze.length === 1
							? this.Kd(Ze[0], Ve, !0)
							: u.Iterable.map(Ze, (et) => {
									const rt = this.Kd(et, Ve, !0);
									return { element: et, children: rt, incompressible: !0 };
								});
					}
					Kd(Ve, Ze, et) {
						const rt = this.Ce.sortOrder,
							bt = (
								this.ud ? Ve.matches() : Ve.allDownstreamFileMatches()
							).sort((nt, lt) => (0, ae.$NNc)(nt, lt, rt));
						return u.Iterable.map(bt, (nt) => {
							let lt;
							nt instanceof ae.$INc
								? (lt = this.Ld(nt))
								: (lt = this.Kd(nt, Ze, !1));
							const ct =
								Ze === "alwaysCollapse" ||
								(nt.count() > 10 && Ze !== "alwaysExpand")
									? C.ObjectTreeElementCollapseState.PreserveOrCollapsed
									: C.ObjectTreeElementCollapseState.PreserveOrExpanded;
							return {
								element: nt,
								children: lt,
								collapsed: ct,
								incompressible: nt instanceof ae.$INc ? !0 : et,
							};
						});
					}
					Ld(Ve) {
						let Ze = Ve.matches().sort(ae.$NNc);
						return (
							this.vd || (Ze = Ze.filter((et) => !et.aiContributed)),
							u.Iterable.map(Ze, (et) => ({ element: et, incompressible: !0 }))
						);
					}
					Md(Ve, Ze) {
						return Ve instanceof ae.$QNc
							? this.Jd(Ze)
							: Ve instanceof ae.$JNc
								? this.Kd(Ve, Ze, !1)
								: this.Ld(Ve);
					}
					Nd() {
						if (this.n.searchResult.count() === 0) return;
						const Ve = this.n.searchResult.count(),
							Ze = this.n.searchResult.fileCount(),
							et = this.yc.getReplaceValue() || "",
							rt = this.Od(Ve, Ze, et);
						let ft, bt;
						this.Zc.withProgress(
							{ location: this.Yb(), delay: 100, total: Ve },
							(lt) => ((bt = lt), new Promise((ct) => (ft = ct))),
						);
						const nt = {
							title: $.localize(9317, null),
							message: this.Pd(Ve, Ze, et),
							primaryButton: $.localize(9318, null),
						};
						this.ad.confirm(nt).then((lt) => {
							lt.confirmed
								? (this.yc.setReplaceAllActionState(!1),
									this.n.searchResult.replaceAll(bt).then(
										() => {
											ft();
											const ct = this.Qd();
											t.$fhb(ct, rt), this.Zd();
										},
										(ct) => {
											ft(), m.$8(ct), this.$c.error(ct);
										},
									))
								: ft();
						});
					}
					Od(Ve, Ze, et) {
						return Ve === 1
							? Ze === 1
								? et
									? $.localize(9319, null, Ve, Ze, et)
									: $.localize(9320, null, Ve, Ze)
								: et
									? $.localize(9321, null, Ve, Ze, et)
									: $.localize(9322, null, Ve, Ze)
							: Ze === 1
								? et
									? $.localize(9323, null, Ve, Ze, et)
									: $.localize(9324, null, Ve, Ze)
								: et
									? $.localize(9325, null, Ve, Ze, et)
									: $.localize(9326, null, Ve, Ze);
					}
					Pd(Ve, Ze, et) {
						return Ve === 1
							? Ze === 1
								? et
									? $.localize(9327, null, Ve, Ze, et)
									: $.localize(9328, null, Ve, Ze)
								: et
									? $.localize(9329, null, Ve, Ze, et)
									: $.localize(9330, null, Ve, Ze)
							: Ze === 1
								? et
									? $.localize(9331, null, Ve, Ze, et)
									: $.localize(9332, null, Ve, Ze)
								: et
									? $.localize(9333, null, Ve, Ze, et)
									: $.localize(9334, null, Ve, Ze);
					}
					Qd() {
						this.Ic = void 0;
						const Ve = this.vc.style.display === "none";
						t.$9fb(this.vc), t.show(this.vc), this.wc.clear();
						const Ze = t.$fhb(this.vc, Se(".message"));
						return Ve && this.Zd(), Ze;
					}
					Rd(Ve) {
						this.Ec = t.$fhb(
							Ve,
							Se(".results.show-file-icons.file-icon-themable-tree"),
						);
						const Ze = this.Db.createInstance(Q.$9Oc),
							et = {
								getId(ft) {
									return ft.id();
								},
							};
						(this.tc = this.D(
							this.Db.createInstance(J.$uPb, {
								onDidChangeVisibility: this.onDidChangeBodyVisibility,
							}),
						)),
							(this.sc = this.D(
								this.Db.createInstance(
									R.$DMb,
									"SearchView",
									this.Ec,
									Ze,
									[
										this.D(this.Db.createInstance(Q.$0Oc, this, this.tc)),
										this.D(this.Db.createInstance(Q.$$Oc, this, this.tc)),
										this.D(this.Db.createInstance(Q.$_Oc, this)),
									],
									{
										identityProvider: et,
										accessibilityProvider: this.Oc,
										dnd: this.Db.createInstance(K.$VSb, (ft) =>
											ft instanceof ae.$INc
												? ft.resource
												: ft instanceof ae.$FNc
													? (0, B.$8rb)(ft.parent().resource, ft.range())
													: null,
										),
										multipleSelectionSupport: !0,
										selectionNavigation: !0,
										overrideStyles: this.Zb().listOverrideStyles,
										paddingBottom: Q.$9Oc.ITEM_HEIGHT,
									},
								),
							)),
							this.D(this.sc.onContextMenu((ft) => this.Sd(ft)));
						const rt = () => this.Lc.trigger(() => this.rc.set(this.Td()));
						rt(),
							this.D(this.sc.onDidChangeCollapseState(() => rt())),
							this.D(this.sc.onDidChangeModel(() => rt())),
							this.D(
								r.Event.debounce(
									this.sc.onDidOpen,
									(ft, bt) => bt,
									qe,
									!0,
								)((ft) => {
									if (ft.element instanceof ae.$FNc) {
										const bt = ft.element;
										this.Fc?.setSelectedMatch(null),
											(this.Fc = bt.parent()),
											this.Fc.setSelectedMatch(bt),
											this.ye(
												bt,
												ft.editorOptions.preserveFocus,
												ft.sideBySide,
												ft.editorOptions.pinned,
											);
									}
								}),
							),
							this.D(
								r.Event.debounce(
									this.sc.onDidChangeFocus,
									(ft, bt) => bt,
									qe,
									!0,
								)(() => {
									const ft = this.sc.getSelection(),
										bt = this.sc.getFocus()[0];
									ft.length > 1 && bt instanceof ae.$FNc && this.ye(bt, !0);
								}),
							),
							this.D(
								r.Event.any(
									this.sc.onDidFocus,
									this.sc.onDidChangeFocus,
								)(() => {
									const ft = this.sc.getFocus()[0];
									this.sc.isDOMFocused() &&
										(this.cc.set(this.sc.navigate().first() === ft),
										this.dc.set(!!ft),
										this.gc.set(ft instanceof ae.$INc),
										this.hc.set(ft instanceof ae.$JNc),
										this.jc.set(ft instanceof ae.$FNc),
										this.ec.set(ft instanceof ae.$INc || ft instanceof ae.$JNc),
										this.fc.set(ft instanceof ae.$INc || ft instanceof ae.$KNc),
										this.ic.set(ft instanceof ae.$KNc),
										(this.mc = "tree"));
									let bt = !1;
									ft instanceof ae.$FNc
										? (bt = ft instanceof ae.$HNc ? !ft.isReadonly() : !0)
										: (ft instanceof ae.$INc || ft instanceof ae.$JNc) &&
											(bt = !ft.hasOnlyReadOnlyMatches()),
										this.kc.set(bt);
								}),
							),
							this.D(
								this.sc.onDidBlur(() => {
									this.cc.reset(),
										this.dc.reset(),
										this.gc.reset(),
										this.hc.reset(),
										this.jc.reset(),
										this.ec.reset(),
										this.fc.reset(),
										this.ic.reset(),
										this.kc.reset();
								}),
							);
					}
					Sd(Ve) {
						Ve.browserEvent.preventDefault(),
							Ve.browserEvent.stopPropagation(),
							this.zb.showContextMenu({
								menuId: S.$XX.SearchContext,
								menuActionOptions: { shouldForwardArgs: !0 },
								contextKeyService: this.Bb,
								getAnchor: () => Ve.anchor,
								getActionsContext: () => Ve.element,
							});
					}
					Td() {
						const Ve = this.getControl(),
							Ze = Ve.navigate();
						let et = Ze.first();
						do if (!Ve.isCollapsed(et)) return !0;
						while ((et = Ze.next()));
						return !1;
					}
					selectNextMatch() {
						if (!this.hasSearchResults()) return;
						const [Ve] = this.sc.getSelection();
						Ve &&
							!(Ve instanceof ae.$FNc) &&
							this.sc.isCollapsed(Ve) &&
							this.sc.expand(Ve);
						const Ze = this.sc.navigate(Ve);
						let et = Ze.next();
						for (et || (et = Ze.first()); et && !(et instanceof ae.$FNc); )
							this.sc.isCollapsed(et) && this.sc.expand(et), (et = Ze.next());
						if (et) {
							et === Ve && this.sc.setFocus([]);
							const rt = (0, R.$BMb)(void 0, !1, !1);
							this.sc.setFocus([et], rt),
								this.sc.setSelection([et], rt),
								this.sc.reveal(et);
							const ft = this.Oc.getAriaLabel(et);
							ft && w.$pib(ft);
						}
					}
					selectPreviousMatch() {
						if (!this.hasSearchResults()) return;
						const [Ve] = this.sc.getSelection();
						let Ze = this.sc.navigate(Ve),
							et = Ze.previous();
						for (
							;
							!et || (!(et instanceof ae.$FNc) && !this.sc.isCollapsed(et));
						) {
							const rt = et ? Ze.previous() : Ze.last();
							if (!et && !rt) return;
							et = rt;
						}
						for (; !(et instanceof ae.$FNc); ) {
							const rt = Ze.next();
							this.sc.expand(et),
								(Ze = this.sc.navigate(rt)),
								(et = rt ? Ze.previous() : Ze.last());
						}
						if (et) {
							et === Ve && this.sc.setFocus([]);
							const rt = (0, R.$BMb)(void 0, !1, !1);
							this.sc.setFocus([et], rt),
								this.sc.setSelection([et], rt),
								this.sc.reveal(et);
							const ft = this.Oc.getAriaLabel(et);
							ft && w.$pib(ft);
						}
					}
					moveFocusToResults() {
						this.sc.domFocus();
					}
					focus() {
						if (
							(super.focus(), this.mc === "input" || !this.hasSearchResults())
						) {
							const Ve = this.Ce.seedOnFocus
								? this.Vd({ allowSearchOnType: !1 })
								: !1;
							this.yc.focus(void 0, void 0, Ve);
						} else this.sc.domFocus();
					}
					updateTextFromFindWidgetOrSelection({
						allowUnselectedWord: Ve = !0,
						allowSearchOnType: Ze = !0,
					}) {
						let et = this.Xc.activeTextEditorControl;
						if ((0, o.$0sb)(et) && !et?.hasTextFocus()) {
							const rt = l.$ufc.get(et);
							if (rt && rt.isFindInputFocused())
								return this.Ud(rt, { allowSearchOnType: Ze });
							et =
								this.Yc.listCodeEditors().find(
									(bt) =>
										bt instanceof b.$wDb &&
										bt.getParentEditor() === et &&
										bt.hasTextFocus(),
								) ?? et;
						}
						return this.Vd(
							{ allowUnselectedWord: Ve, allowSearchOnType: Ze },
							et,
						);
					}
					Ud(Ve, { allowSearchOnType: Ze = !0 }) {
						if (
							!this.Ce.seedWithNearestWord &&
							(t.$Ogb().getSelection()?.toString() ?? "") === ""
						)
							return !1;
						const et = Ve.getState().searchString;
						return et === ""
							? !1
							: (this.yc.searchInput?.setCaseSensitive(Ve.getState().matchCase),
								this.yc.searchInput?.setWholeWords(Ve.getState().wholeWord),
								this.yc.searchInput?.setRegex(Ve.getState().isRegex),
								this.Wd(et, Ze),
								!0);
					}
					Vd({ allowUnselectedWord: Ve = !0, allowSearchOnType: Ze = !0 }, et) {
						const rt =
							this.Ab.getValue("editor").find.seedSearchStringFromSelection;
						if (!rt || rt === "never") return !1;
						let ft = this.be(Ve, et);
						return ft === null
							? !1
							: (this.yc.searchInput?.getRegex() && (ft = n.$of(ft)),
								this.Wd(ft, Ze),
								!0);
					}
					Wd(Ve, Ze = !0) {
						Ze && !this.n.searchResult.isDirty
							? this.yc.setValue(Ve)
							: ((this.Nc = !0), this.yc.setValue(Ve), (this.Nc = !1));
					}
					focusNextInputBox() {
						if (this.yc.searchInputHasFocus()) {
							this.yc.isReplaceShown() ? this.yc.focus(!0, !0) : this.Xd();
							return;
						}
						if (this.yc.replaceInputHasFocus()) {
							this.Xd();
							return;
						}
						if (this.Dc.inputHasFocus()) {
							this.Cc.focus(), this.Cc.select();
							return;
						}
						if (this.Cc.inputHasFocus()) {
							this.ae();
							return;
						}
					}
					Xd() {
						this.ce() ? this.toggleQueryDetails(!0, this.ce()) : this.ae();
					}
					focusPreviousInputBox() {
						if (!this.yc.searchInputHasFocus()) {
							if (this.yc.replaceInputHasFocus()) {
								this.yc.focus(!0);
								return;
							}
							if (this.Dc.inputHasFocus()) {
								this.yc.focus(!0, !0);
								return;
							}
							if (this.Cc.inputHasFocus()) {
								this.Dc.focus(), this.Dc.select();
								return;
							}
							if (this.sc.isDOMFocused()) {
								this.Yd();
								return;
							}
						}
					}
					Yd() {
						this.ce()
							? this.toggleQueryDetails(!0, !0, !1, !0)
							: this.yc.focus(!0, !0);
					}
					Zd() {
						if (this.g || !this.zc) return;
						const Ve = this.Ce.actionsPosition;
						this.getContainer().classList.toggle(Be.c, Ve === "right"),
							this.yc.setWidth(this.zc.width - 28),
							this.Cc.setWidth(this.zc.width - 28),
							this.Dc.setWidth(this.zc.width - 28);
						const Ze = t.$zgb(this.xc),
							et = t.$zgb(this.vc);
						this.sc.layout(this.zc.height - Ze - et, this.zc.width - 28);
					}
					X(Ve, Ze) {
						super.X(Ve, Ze), (this.zc = new t.$pgb(Ze, Ve)), this.Zd();
					}
					getControl() {
						return this.sc;
					}
					allSearchFieldsClear() {
						return (
							this.yc.getReplaceValue() === "" &&
							(!this.yc.searchInput || this.yc.searchInput.getValue() === "")
						);
					}
					allFilePatternFieldsClear() {
						return (
							this.searchExcludePattern.getValue() === "" &&
							this.searchIncludePattern.getValue() === ""
						);
					}
					hasSearchResults() {
						return !this.n.searchResult.isEmpty(this.vd);
					}
					clearSearchResults(Ve = !0) {
						this.n.searchResult.clear(),
							this.we(!0),
							this.dd.getWorkbenchState() === V.WorkbenchState.EMPTY &&
								this.ve(),
							Ve &&
								(this.allSearchFieldsClear() && this.clearFilePatternFields(),
								this.yc.clear()),
							this.n.cancelSearch(),
							(this.sc.ariaLabel = $.localize(9335, null)),
							this.od.playSignal(be.$Twb.clear),
							this.Zd();
					}
					clearFilePatternFields() {
						this.searchExcludePattern.clear(),
							this.searchIncludePattern.clear();
					}
					cancelSearch(Ve = !0) {
						return this.n.cancelSearch() ? (Ve && this.yc.focus(), !0) : !1;
					}
					ae() {
						if (
							this.sc.getNode(null) &&
							(this.sc.domFocus(), this.sc.getSelection().length === 0)
						) {
							const Ze = (0, R.$BMb)();
							this.sc.focusNext(void 0, void 0, Ze),
								this.sc.setSelection(this.sc.getFocus(), Ze);
						}
					}
					be(Ve, Ze) {
						if (
							t.$Lgb(this.getContainer()) ||
							((Ze = Ze ?? this.Xc.activeTextEditorControl), !Ze)
						)
							return null;
						const et = this.Ce.seedWithNearestWord && Ve;
						return Re(et, Ze);
					}
					ce() {
						return this.Ac.classList.contains("more");
					}
					toggleCaseSensitive() {
						this.yc.searchInput?.setCaseSensitive(
							!this.yc.searchInput.getCaseSensitive(),
						),
							this.triggerQueryChange();
					}
					toggleWholeWords() {
						this.yc.searchInput?.setWholeWords(
							!this.yc.searchInput.getWholeWords(),
						),
							this.triggerQueryChange();
					}
					toggleRegex() {
						this.yc.searchInput?.setRegex(!this.yc.searchInput.getRegex()),
							this.triggerQueryChange();
					}
					togglePreserveCase() {
						this.yc.replaceInput?.setPreserveCase(
							!this.yc.replaceInput.getPreserveCase(),
						),
							this.triggerQueryChange();
					}
					setSearchParameters(Ve = {}) {
						typeof Ve.isCaseSensitive == "boolean" &&
							this.yc.searchInput?.setCaseSensitive(Ve.isCaseSensitive),
							typeof Ve.matchWholeWord == "boolean" &&
								this.yc.searchInput?.setWholeWords(Ve.matchWholeWord),
							typeof Ve.isRegex == "boolean" &&
								this.yc.searchInput?.setRegex(Ve.isRegex),
							typeof Ve.filesToInclude == "string" &&
								this.searchIncludePattern.setValue(String(Ve.filesToInclude)),
							typeof Ve.filesToExclude == "string" &&
								this.searchExcludePattern.setValue(String(Ve.filesToExclude)),
							typeof Ve.query == "string" &&
								this.yc.searchInput?.setValue(Ve.query),
							typeof Ve.replace == "string"
								? this.yc.replaceInput?.setValue(Ve.replace)
								: this.yc.replaceInput &&
									this.yc.replaceInput.getValue() !== "" &&
									this.yc.replaceInput.setValue(""),
							typeof Ve.triggerSearch == "boolean" &&
								Ve.triggerSearch &&
								this.triggerQueryChange(),
							typeof Ve.preserveCase == "boolean" &&
								this.yc.replaceInput?.setPreserveCase(Ve.preserveCase),
							typeof Ve.useExcludeSettingsAndIgnoreFiles == "boolean" &&
								this.Cc.setUseExcludesAndIgnoreFiles(
									Ve.useExcludeSettingsAndIgnoreFiles,
								),
							typeof Ve.onlyOpenEditors == "boolean" &&
								this.searchIncludePattern.setOnlySearchInOpenEditors(
									Ve.onlyOpenEditors,
								);
					}
					toggleQueryDetails(Ve = !0, Ze, et, rt) {
						const ft = "more";
						(Ze = typeof Ze > "u" ? !this.Ac.classList.contains(ft) : !!Ze),
							(this.uc["query.queryDetailsExpanded"] = Ze),
							(et = !!et),
							Ze
								? (this.Bc.setAttribute("aria-expanded", "true"),
									this.Ac.classList.add(ft),
									Ve &&
										(rt
											? (this.Cc.focus(), this.Cc.select())
											: (this.Dc.focus(), this.Dc.select())))
								: (this.Bc.setAttribute("aria-expanded", "false"),
									this.Ac.classList.remove(ft),
									Ve && this.yc.focus()),
							!et && this.zc && this.Zd();
					}
					de() {
						return this.Ac.classList.contains("more");
					}
					searchInFolders(Ve = []) {
						this.ee(!0, Ve);
					}
					searchOutsideOfFolders(Ve = []) {
						this.ee(!1, Ve);
					}
					ee(Ve, Ze) {
						if (!Ze.length || Ze.some((et) => et === ".")) {
							this.Dc.setValue(""), this.yc.focus();
							return;
						}
						this.ce() || this.toggleQueryDetails(!0, !0),
							(Ve ? this.Dc : this.Cc).setValue(Ze.join(", ")),
							this.yc.focus(!1);
					}
					triggerQueryChange(Ve) {
						const Ze = {
							preserveFocus: !0,
							triggeredOnType: !1,
							delay: 0,
							...Ve,
						};
						if (!(Ze.triggeredOnType && !this.Ce.searchOnType) && !this.Nc) {
							const et = Ze.triggeredOnType ? Ze.delay : 0;
							this.Mc.trigger(() => {
								this.fe(Ze.preserveFocus, Ze.triggeredOnType);
							}, et);
						}
					}
					fe(Ve, Ze = !1) {
						if (!this.yc.searchInput?.inputBox.isInputValid()) return;
						const et = this.yc.searchInput.getRegex(),
							rt = this.yc.getNotebookFilters().markupInput,
							ft = this.yc.getNotebookFilters().markupPreview,
							bt = this.yc.getNotebookFilters().codeInput,
							nt = this.yc.getNotebookFilters().codeOutput,
							lt = this.yc.searchInput.getWholeWords(),
							ct = this.yc.searchInput.getCaseSensitive(),
							gt = this.yc.searchInput.getValue(),
							ht = this.Cc.getValue().trim(),
							Rt = this.Dc.getValue().trim(),
							Nt = this.Cc.useExcludesAndIgnoreFiles(),
							jt = this.Dc.onlySearchInOpenEditors();
						if (gt.length === 0) {
							this.clearSearchResults(!1), this.Qd();
							return;
						}
						const ti = {
								pattern: gt,
								isRegExp: et,
								isCaseSensitive: ct,
								isWordMatch: lt,
								notebookInfo: {
									isInNotebookMarkdownInput: rt,
									isInNotebookMarkdownPreview: ft,
									isInNotebookCellInput: bt,
									isInNotebookCellOutput: nt,
								},
							},
							kt = [{ pattern: this.Cc.getValue() }],
							hi = this.Dc.getValue(),
							Kt = ti.isRegExp ? 1e4 : 1e3,
							di = {
								_reason: "searchView",
								extraFileResources: this.Db.invokeFunction(le.$P7),
								maxResults: this.Ce.maxResults ?? void 0,
								disregardIgnoreFiles: !Nt || void 0,
								disregardExcludeSettings: !Nt || void 0,
								onlyOpenEditors: jt,
								excludePattern: kt,
								includePattern: hi,
								previewOptions: { matchLines: 1, charsPerLine: Kt },
								isSmartCase: this.Ce.smartCase,
								expandPatterns: !0,
							},
							Ye = this.dd.getWorkspace().folders,
							ze = (It) => {
								this.yc.searchInput?.showMessage({
									content: It.message,
									type: E.MessageType.ERROR,
								}),
									this.n.searchResult.clear();
							};
						let Xe;
						try {
							Xe = this.j.text(
								ti,
								Ye.map((It) => It.uri),
								di,
							);
						} catch (It) {
							ze(It);
							return;
						}
						this.ge(Xe).then(() => {
							this.he(Xe, di, ht, Rt, Ze), Ve || this.yc.focus(!1, void 0, !0);
						}, ze);
					}
					ge(Ve) {
						const Ze = Ve.folderQueries.map((et) =>
							this.Wc.exists(et.folder).catch(() => !1),
						);
						return Promise.all(Ze).then((et) => {
							const rt = Ve.folderQueries.filter((ft, bt) => et[bt]);
							if (!Ve.folderQueries.length || rt.length) Ve.folderQueries = rt;
							else {
								const ft = Ve.folderQueries[0].folder.fsPath,
									bt = $.localize(9336, null, ft);
								return Promise.reject(new Error(bt));
							}
						});
					}
					he(Ve, Ze, et, rt, ft) {
						this.Kc.trigger(() => {
							this.yc.searchInput?.onSearchSubmit(),
								this.Cc.onSearchSubmit(),
								this.Dc.onSearchSubmit();
						}),
							this.n.cancelSearch(!0),
							this.n.cancelAISearch(!0),
							(this.Jc = this.Jc.then(() => this.le(Ve, et, rt, ft)).then(
								() => {},
								() => {},
							));
					}
					ie() {
						if (this.wd !== le.SearchUIState.Idle)
							try {
								const Ve = this.n.searchResult.fileCount(this.vd);
								this.Rc !== Ve && ((this.Rc = Ve), this.Id());
							} finally {
								this.Sc.schedule();
							}
					}
					je(Ve, Ze, et, rt) {
						if (
							((this.wd = le.SearchUIState.Idle),
							Ve(),
							this.Hd(),
							this.Ce.collapseResults !== "alwaysCollapse" &&
								this.n.searchResult.matches(this.vd).length === 1)
						) {
							const nt = this.n.searchResult.matches(this.vd)[0];
							nt.count() < 50 && this.sc.expand(nt);
						}
						const bt = !this.n.searchResult.isEmpty(this.vd);
						if (rt?.exit !== fe.SearchCompletionExitCode.NewSearchStarted) {
							if (bt)
								this.n.searchResult.toggleHighlights(this.isVisible()),
									w.$pib(
										$.localize(
											9349,
											null,
											this.n.searchResult.count(this.vd),
											this.n.searchResult.fileCount(),
										),
									);
							else {
								const nt = !!Ze,
									lt = !!et;
								let ct;
								rt
									? this.Dc.onlySearchInOpenEditors()
										? lt && nt
											? (ct = $.localize(9337, null, et, Ze))
											: lt
												? (ct = $.localize(9338, null, et))
												: nt
													? (ct = $.localize(9339, null, Ze))
													: (ct = $.localize(9340, null))
										: lt && nt
											? (ct = $.localize(9341, null, et, Ze))
											: lt
												? (ct = $.localize(9342, null, et))
												: nt
													? (ct = $.localize(9343, null, Ze))
													: (ct = $.localize(9344, null))
									: (ct = Ue),
									w.$pib(ct);
								const gt = this.Qd();
								if ((t.$fhb(gt, ct), rt))
									if (lt || nt) {
										const ht = this.wc.add(
											new Me(
												$.localize(9346, null),
												this.pe.bind(this),
												this.Hb,
											),
										);
										t.$fhb(gt, ht.element);
									} else {
										const ht = this.wc.add(
											new Me(
												$.localize(9347, null),
												this.me.bind(this),
												this.Hb,
											),
										);
										t.$fhb(gt, ht.element);
									}
								else {
									const ht = this.wc.add(
										new Me(
											$.localize(9345, null),
											() => this.triggerQueryChange({ preserveFocus: !1 }),
											this.Hb,
										),
									);
									t.$fhb(gt, ht.element);
								}
								if (rt) {
									t.$fhb(gt, Se("span", void 0, " - "));
									const ht = this.wc.add(
										new Me($.localize(9348, null), this.oe.bind(this), this.Hb),
									);
									t.$fhb(gt, ht.element);
								}
								this.dd.getWorkbenchState() === V.WorkbenchState.EMPTY &&
									this.ve(),
									this.Zd();
							}
							if (
								(rt &&
									rt.limitHit &&
									rt.messages.push({
										type: fe.TextSearchCompleteMessageType.Warning,
										text: $.localize(9350, null),
									}),
								rt && rt.messages)
							)
								for (const nt of rt.messages) this.te(nt);
							this.Zd();
						}
					}
					ke(Ve, Ze, et, rt, ft) {
						return (
							(this.wd = le.SearchUIState.Idle),
							m.$8(Ve)
								? this.je(Ze, et, rt, ft)
								: (Ze(),
									this.yc.searchInput?.showMessage({
										content: Ve.message,
										type: E.MessageType.ERROR,
									}),
									this.n.searchResult.clear(),
									Promise.resolve())
						);
					}
					le(Ve, Ze, et, rt) {
						let ft;
						this.Zc.withProgress(
							{ location: this.Yb(), delay: rt ? 300 : 0 },
							(lt) => new Promise((ct) => (ft = ct)),
						),
							this.yc.searchInput?.clearMessage(),
							(this.wd = le.SearchUIState.Searching),
							this.we();
						const bt = setTimeout(() => {
							this.wd = le.SearchUIState.SlowSearch;
						}, 2e3);
						(this.Rc = 0),
							this.Sc.schedule(),
							this.yc.setReplaceAllActionState(!1),
							this.sc.setSelection([]),
							this.sc.setFocus([]),
							(this.n.replaceString = this.yc.getReplaceValue());
						const nt = this.n.search(Ve);
						if (this.vd) {
							const lt = this.n.aiSearch({
								...Ve,
								contentPattern: Ve.contentPattern.pattern,
								type: fe.QueryType.aiText,
							});
							return nt.asyncResults.then(() =>
								lt.then(
									(ct) => {
										clearTimeout(bt), this.je(ft, Ze, et, ct);
									},
									(ct) => {
										clearTimeout(bt), this.ke(ct, ft, Ze, et);
									},
								),
							);
						}
						return nt.asyncResults.then(
							(lt) => {
								clearTimeout(bt), this.je(ft, Ze, et, lt);
							},
							(lt) => {
								clearTimeout(bt), this.ke(lt, ft, Ze, et);
							},
						);
					}
					me(Ve) {
						t.$ahb.stop(Ve, !1),
							this.ne(
								"@id:files.exclude,search.exclude,search.useParentIgnoreFiles,search.useGlobalIgnoreFiles,search.useIgnoreFiles",
							);
					}
					ne(Ve) {
						const Ze = { query: Ve };
						return this.dd.getWorkbenchState() !== V.WorkbenchState.EMPTY
							? this.hd.openWorkspaceSettings(Ze)
							: this.hd.openUserSettings(Ze);
					}
					oe() {
						this.Eb.open(
							g.URI.parse("https://go.microsoft.com/fwlink/?linkid=853977"),
						);
					}
					pe() {
						this.Cc.setValue(""),
							this.Dc.setValue(""),
							this.Dc.setOnlySearchInOpenEditors(!1),
							this.triggerQueryChange({ preserveFocus: !1 });
					}
					qe() {
						this.toggleQueryDetails(!1, !0),
							this.searchExcludePattern.setUseExcludesAndIgnoreFiles(!0);
					}
					re() {
						this.toggleQueryDetails(!1, !0),
							this.Dc.setOnlySearchInOpenEditors(!1);
					}
					se(Ve, Ze, et = !1) {
						const rt = this.n.searchResult.fileCount(this.vd),
							ft = this.n.searchResult.count(this.vd);
						this.lc.set(rt > 0);
						const bt = this.vc.style.display === "none",
							nt = this.Qd(),
							lt = et ? "" : this.ue(ft, rt);
						if (
							((this.sc.ariaLabel =
								lt +
								$.localize(
									9351,
									null,
									this.searchResult.query?.contentPattern.pattern ?? "",
								)),
							t.$fhb(nt, lt),
							rt > 0)
						) {
							if (Ve) {
								const jt = " - " + $.localize(9352, null) + " ",
									ti = this.wc.add(
										new Me(
											$.localize(9353, null),
											this.qe.bind(this),
											this.Hb,
											$.localize(9354, null),
										),
									);
								t.$fhb(nt, Se("span", void 0, jt, "(", ti.element, ")"));
							}
							if (Ze) {
								const jt = " - " + $.localize(9355, null) + " ",
									ti = this.wc.add(
										new Me(
											$.localize(9356, null),
											this.re.bind(this),
											this.Hb,
											$.localize(9357, null),
										),
									);
								t.$fhb(nt, Se("span", void 0, jt, "(", ti.element, ")"));
							}
							t.$fhb(nt, " - ");
							const ct = (0, ee.$qOc)(
									$.localize(9358, null),
									this.yb.lookupKeybinding(
										se.SearchCommandIds.OpenInEditorCommandId,
									),
								),
								gt = this.wc.add(
									new Me(
										$.localize(9359, null),
										() =>
											this.Db.invokeFunction(
												pe.$5Oc,
												this.searchResult,
												this.searchIncludePattern.getValue(),
												this.searchExcludePattern.getValue(),
												this.searchIncludePattern.onlySearchInOpenEditors(),
											),
										this.Hb,
										ct,
									),
								);
							t.$fhb(nt, gt.element);
							const ht = Se("span", void 0, " - ");
							t.$fhb(nt, ht);
							const Rt = this.wc.add(
								new Me(
									"",
									async () => {
										const jt = this.ze(),
											ti = (0, Oe.$2gc)();
										for (const kt of jt) {
											const hi = kt.resource;
											if ((0, xe.$n6b)(hi.scheme))
												for (const Kt of kt.matches) {
													let di;
													if (!kt.textModel)
														di = await (0, He.$Vfc)(
															this.td,
															this.sd,
															hi,
															Kt.range,
														);
													else {
														const Ye = new Te.$iL(
															Math.max(
																Kt.range.startLineNumber -
																	Ie.COMPOSER_CUBE_EXTENDED_LINE_RANGE,
																1,
															),
															Math.max(Kt.range.startColumn, 1),
															Math.min(
																Kt.range.endLineNumber +
																	Ie.COMPOSER_CUBE_EXTENDED_LINE_RANGE +
																	1,
																kt.textModel.getLineCount(),
															),
															Math.min(
																kt.textModel.getLineMaxColumn(
																	Math.min(
																		Kt.range.endLineNumber,
																		kt.textModel.getLineCount(),
																	) +
																		Ie.COMPOSER_CUBE_EXTENDED_LINE_RANGE +
																		1,
																),
																Kt.range.endColumn,
															),
														);
														di = await (0, He.$Wfc)({
															model: kt.textModel,
															dataScrubbingService: this.sd,
															inBoundsSelectionRange: Ye,
														});
													}
													di && ti.selections.push(di);
												}
										}
										this.pd.createComposer({
											partialState: { context: ti, hasChangedContext: !0 },
											dontRefreshReactiveContext: !0,
										});
									},
									this.Hb,
									$.localize(9360, null),
								),
							);
							Rt.element.classList.add(
								"codicon",
								"codicon-symbol-method",
								"search-composer-button",
							),
								(Rt.element.style.fontSize = "13px"),
								(Rt.element.style.verticalAlign = "middle"),
								(Rt.element.style.marginBottom = "2px"),
								(Rt.element.style.outline = "none"),
								t.$fhb(nt, Rt.element);
							const Nt = (jt) => {
								jt
									? ((ht.style.visibility = "visible"),
										(ht.style.pointerEvents = "auto"),
										(Rt.element.style.visibility = "visible"),
										(Rt.element.style.pointerEvents = "auto"))
									: ((ht.style.visibility = "hidden"),
										(ht.style.pointerEvents = "none"),
										(Rt.element.style.visibility = "hidden"),
										(Rt.element.style.pointerEvents = "none"));
							};
							Nt(this.pd.isComposerEnabled()),
								this.D(
									this.pd.onDidEnableDisableComposer(({ enabled: jt }) =>
										Nt(jt),
									),
								),
								this.Zd();
						} else bt || t.hide(this.vc);
					}
					te(Ve) {
						const Ze = this.vc.firstChild;
						Ze &&
							t.$fhb(
								Ze,
								(0, te.$UOc)(
									Ve,
									this.Db,
									this.$c,
									this.Eb,
									this.bd,
									this.wc,
									() => this.triggerQueryChange(),
								),
							);
					}
					ue(Ve, Ze) {
						return Ve === 1 && Ze === 1
							? $.localize(9361, null, Ve, Ze)
							: Ve === 1
								? $.localize(9362, null, Ve, Ze)
								: Ze === 1
									? $.localize(9363, null, Ve, Ze)
									: $.localize(9364, null, Ve, Ze);
					}
					ve() {
						this.Ic = this.Qd();
						const Ve = t.$fhb(this.Ic, Se("p", void 0, $.localize(9365, null))),
							Ze = this.wc.add(
								new Me(
									$.localize(9366, null),
									() => {
										this.bd
											.executeCommand(c.$m && c.$p ? G.$Jtc.ID : G.$Htc.ID)
											.catch((et) => m.$4(et));
									},
									this.Hb,
								),
							);
						t.$fhb(Ve, Ze.element);
					}
					we(Ve = !1) {
						((this.vc.firstChild?.textContent?.indexOf(Ue) ?? -1) > -1 ||
							Ve ||
							!this.Ab.getValue().search.searchOnType) &&
							t.hide(this.vc),
							t.show(this.Ec),
							(this.Fc = void 0);
					}
					xe(Ve, Ze) {
						return (
							Ve instanceof ae.$HNc ||
							(Ze.scheme !== p.Schemas.untitled &&
								this.md.getContributedNotebookTypes(Ze).length > 0)
						);
					}
					ye(Ve, Ze, et, rt) {
						const ft = this.Ab.getValue().search.useReplacePreview,
							bt = Ve instanceof ae.$FNc ? Ve.parent().resource : Ve.resource;
						return ft &&
							this.n.isReplaceActive() &&
							this.n.replaceString &&
							!this.xe(Ve, bt)
							? this.fd.openReplacePreview(Ve, Ze, et, rt)
							: this.open(Ve, Ze, et, rt, bt);
					}
					async open(Ve, Ze, et, rt, ft) {
						const bt = De(Ve, this.n),
							nt = Ve instanceof ae.$FNc ? Ve.parent().matches() : [],
							lt =
								ft ??
								(Ve instanceof ae.$FNc ? Ve.parent().resource : Ve.resource);
						let ct;
						const gt = {
							preserveFocus: Ze,
							pinned: rt,
							selection: bt,
							revealIfVisible: !0,
						};
						try {
							ct = await this.Xc.openEditor(
								{ resource: lt, options: gt },
								et ? $e.$KY : $e.$JY,
							);
							const ht = ct?.getControl();
							Ve instanceof ae.$FNc && Ze && (0, o.$0sb)(ht)
								? this.n.searchResult.rangeHighlightDecorations.highlightRange(
										ht.getModel(),
										Ve.range(),
									)
								: this.n.searchResult.rangeHighlightDecorations.removeHighlightRange();
						} catch (ht) {
							m.$4(ht);
							return;
						}
						if (ct instanceof ie.$B4b) {
							const ht = Ve.parent();
							if (Ve instanceof ae.$FNc)
								if (Ve instanceof ae.$HNc) Ve.parent().showMatch(Ve);
								else {
									const Rt = ct.getControl();
									if (Rt) {
										ht.bindNotebookEditorWidget(Rt),
											await ht.updateMatchesForEditorWidget();
										const Nt = nt.findIndex((kt) => kt.id() === Ve.id()),
											jt = ht.matches(),
											ti = Nt >= jt.length ? jt[jt.length - 1] : jt[Nt];
										ti instanceof ae.$HNc &&
											(ht.showMatch(ti),
											(!this.sc.getFocus().includes(ti) ||
												!this.sc.getSelection().includes(ti)) &&
												(this.sc.setSelection([ti], (0, R.$BMb)()),
												this.sc.setFocus([ti])));
									}
								}
						}
					}
					openEditorWithMultiCursor(Ve) {
						const Ze =
							Ve instanceof ae.$FNc ? Ve.parent().resource : Ve.resource;
						return this.Xc.openEditor({
							resource: Ze,
							options: { preserveFocus: !1, pinned: !0, revealIfVisible: !0 },
						}).then((et) => {
							if (et) {
								let rt = null;
								if (
									(Ve instanceof ae.$INc
										? (rt = Ve)
										: Ve instanceof ae.$FNc && (rt = Ve.parent()),
									rt)
								) {
									const ft = rt
											.matches()
											.map(
												(nt) =>
													new s.$kL(
														nt.range().startLineNumber,
														nt.range().startColumn,
														nt.range().endLineNumber,
														nt.range().endColumn,
													),
											),
										bt = (0, o.$btb)(et.getControl());
									bt && y.$njc.get(bt)?.selectAllUsingSelections(ft);
								}
							}
							this.n.searchResult.rangeHighlightDecorations.removeHighlightRange();
						}, m.$4);
					}
					ze() {
						return this.n.searchResult
							.matches(this.vd)
							.map((Ve) => ({
								resource: Ve.resource,
								textModel: Ve.getTextModel(),
								matches: Ve.matches().map((Ze) => ({
									lineNumber: Ze.range().startLineNumber,
									preview: Ze.text(),
									range: Ze.range(),
								})),
							}));
					}
					Ae(Ve) {
						if (!this.n) return;
						let Ze = this.n.searchResult.matches();
						for (let et = 0, rt = Ze.length; et < rt; et++)
							Ve.toString() === Ze[et].resource.toString() &&
								this.n.searchResult.remove(Ze[et]);
						Ze = this.n.searchResult.matches(!0);
						for (let et = 0, rt = Ze.length; et < rt; et++)
							Ve.toString() === Ze[et].resource.toString() &&
								this.n.searchResult.remove(Ze[et]);
					}
					Be(Ve) {
						if (
							!this.n ||
							(this.Ce.sortOrder !== fe.SearchSortOrder.Modified &&
								!Ve.gotDeleted())
						)
							return;
						const Ze = this.n.searchResult.matches();
						if (Ve.gotDeleted()) {
							const et = Ze.filter((rt) =>
								Ve.contains(rt.resource, D.FileChangeType.DELETED),
							);
							this.n.searchResult.remove(et);
						} else {
							const et = Ze.filter((rt) => Ve.contains(rt.resource));
							et.length &&
								this.Ce.sortOrder === fe.SearchSortOrder.Modified &&
								this.Ge(et).then(() => this.refreshTree());
						}
					}
					get Ce() {
						return this.Ab.getValue("search");
					}
					De() {
						this.yc.clearHistory(),
							this.Cc.clearHistory(),
							this.Dc.clearHistory();
					}
					saveState() {
						if (!this.yc) return;
						const Ve = this.Cc?.getValue().trim() ?? "",
							Ze = this.Dc?.getValue().trim() ?? "",
							et = this.Dc?.onlySearchInOpenEditors() ?? !1,
							rt = this.Cc?.useExcludesAndIgnoreFiles() ?? !0,
							ft = this.n.preserveCase;
						if (this.yc.searchInput) {
							const nt = this.yc.searchInput.getRegex(),
								lt = this.yc.searchInput.getWholeWords(),
								ct = this.yc.searchInput.getCaseSensitive(),
								gt = this.yc.searchInput.getValue(),
								ht = this.yc.getNotebookFilters().codeInput,
								Rt = this.yc.getNotebookFilters().codeOutput,
								Nt = this.yc.getNotebookFilters().markupInput,
								jt = this.yc.getNotebookFilters().markupPreview;
							(this.uc["query.contentPattern"] = gt),
								(this.uc["query.regex"] = nt),
								(this.uc["query.wholeWords"] = lt),
								(this.uc["query.caseSensitive"] = ct),
								(this.uc["query.isInNotebookMarkdownInput"] = Nt),
								(this.uc["query.isInNotebookMarkdownPreview"] = jt),
								(this.uc["query.isInNotebookCellInput"] = ht),
								(this.uc["query.isInNotebookCellOutput"] = Rt);
						}
						(this.uc["query.folderExclusions"] = Ve),
							(this.uc["query.folderIncludes"] = Ze),
							(this.uc["query.useExcludesAndIgnoreFiles"] = rt),
							(this.uc["query.preserveCase"] = ft),
							(this.uc["query.onlyOpenEditors"] = et);
						const bt = this.searchAndReplaceWidget.isReplaceShown();
						(this.uc["view.showReplace"] = bt),
							(this.uc["view.treeLayout"] = this.ud),
							(this.uc["query.replaceText"] = bt && this.yc.getReplaceValue()),
							this.Ee(),
							this.s.saveMemento(),
							super.saveState();
					}
					Ee() {
						if (this.yc === void 0) return;
						const Ve = Object.create(null),
							Ze = this.yc.getSearchHistory();
						Ze && Ze.length && (Ve.search = Ze);
						const et = this.yc.getReplaceHistory();
						et && et.length && (Ve.replace = et);
						const rt = this.Cc.getHistory();
						rt && rt.length && (Ve.exclude = rt);
						const ft = this.Dc.getHistory();
						ft && ft.length && (Ve.include = ft), this.jd.save(Ve);
					}
					async Fe() {
						const Ve = this.searchResult
							.matches(this.vd)
							.filter((Ze) => !Ze.fileStat)
							.map((Ze) => Ze.resolveFileStat(this.Wc));
						await Promise.all(Ve);
					}
					async Ge(Ve) {
						const Ze = Ve.map((et) => et.resolveFileStat(this.Wc));
						await Promise.all(Ze);
					}
					He() {
						for (const Ve of this.searchResult.matches()) Ve.fileStat = void 0;
						for (const Ve of this.searchResult.matches(!0))
							Ve.fileStat = void 0;
					}
					dispose() {
						(this.g = !0), this.saveState(), super.dispose();
					}
				};
				(e.$dPc = Ae),
					(e.$dPc =
						Ae =
						Be =
							Ne(
								[
									j(1, D.$ll),
									j(2, $e.$IY),
									j(3, f.$dtb),
									j(4, U.$8N),
									j(5, O.$4N),
									j(6, L.$GO),
									j(7, I.$ek),
									j(8, k.$Wxb),
									j(9, M.$Li),
									j(10, Y.$K1),
									j(11, T.$gj),
									j(12, V.$Vi),
									j(13, ae.$TNc),
									j(14, P.$6j),
									j(15, re.$XNc),
									j(16, me.$kZ),
									j(17, ye.$7Z),
									j(18, H.$iP),
									j(19, oe.$bPc),
									j(20, k.$Xxb),
									j(21, v.$XK),
									j(22, A.$uZ),
									j(23, z.$lq),
									j(24, B.$7rb),
									j(25, F.$km),
									j(26, Le.$Uyb),
									j(27, ve.$MIb),
									j(28, ge.$ik),
									j(29, be.$Owb),
									j(30, Fe.IComposerService),
									j(31, V.$Vi),
									j(32, Ke.$Nfc),
									j(33, Je.$zIb),
									j(34, Ee.$MO),
								],
								Ae,
							));
				class Me extends h.$1c {
					constructor(Ve, Ze, et, rt) {
						super(),
							(this.element = Se("a.pointer", { tabindex: 0 }, Ve)),
							this.D(
								et.setupManagedHover((0, Ce.$cib)("mouse"), this.element, rt),
							),
							this.c(Ze);
					}
					c(Ve) {
						const Ze = (et) => {
							t.$ahb.stop(et, !1), Ve(et);
						};
						this.D(t.$0fb(this.element, t.$$gb.CLICK, Ze)),
							this.D(
								t.$0fb(this.element, t.$$gb.KEY_DOWN, (et) => {
									const rt = new i.$7fb(et);
									(rt.equals(a.KeyCode.Space) || rt.equals(a.KeyCode.Enter)) &&
										(Ze(et), rt.preventDefault(), rt.stopPropagation());
								}),
							);
					}
				}
				function De(je, Ve) {
					let Ze = null;
					if (
						(je instanceof ae.$FNc && (Ze = je),
						je instanceof ae.$INc &&
							je.count() > 0 &&
							(Ze = je.matches()[je.matches().length - 1]),
						Ze)
					) {
						const et = Ze.range();
						if (Ve.isReplaceActive() && Ve.replaceString) {
							const rt = Ze.replaceString;
							return {
								startLineNumber: et.startLineNumber,
								startColumn: et.startColumn,
								endLineNumber: et.startLineNumber,
								endColumn: et.startColumn + rt.length,
							};
						}
						return et;
					}
				}
				function Re(je, Ve) {
					let Ze = Ve;
					if (
						((0, o.$$sb)(Ze) &&
							(Ze.getOriginalEditor().hasTextFocus()
								? (Ze = Ze.getOriginalEditor())
								: (Ze = Ze.getModifiedEditor())),
						!(0, o.$0sb)(Ze) || !Ze.hasModel())
					)
						return null;
					const et = Ze.getSelection();
					if (!et) return null;
					if (et.isEmpty())
						return je
							? (Ze.getModel().getWordAtPosition(et.getStartPosition())?.word ??
									null)
							: null;
					let rt = "";
					for (let ft = et.startLineNumber; ft <= et.endLineNumber; ft++) {
						let bt = Ze.getModel().getLineContent(ft);
						ft === et.endLineNumber && (bt = bt.substring(0, et.endColumn - 1)),
							ft === et.startLineNumber &&
								(bt = bt.substring(et.startColumn - 1)),
							ft !== et.startLineNumber &&
								(bt =
									`
` + bt),
							(rt += bt);
					}
					return rt;
				}
			},
		),
		define(
			de[1972],
			he([
				1, 0, 33, 3, 59, 19, 26, 4, 10, 5, 73, 93, 392, 348, 63, 25, 561, 405,
				1068, 568, 18, 361, 186, 6, 473, 89, 15, 14,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iPc = e.$hPc = void 0),
					(e.$hPc = "%");
				const P = {
						_reason: "quickAccessSearch",
						disregardIgnoreFiles: !1,
						disregardExcludeSettings: !1,
						onlyOpenEditors: !1,
						expandPatterns: !0,
					},
					k = 30,
					L = 10,
					D = 75;
				let M = class extends h.$GLb {
					r(A) {
						return {
							...P,
							extraFileResources: this.s.invokeFunction(b.$P7),
							maxResults: this.C.maxResults ?? void 0,
							isSmartCase: this.C.smartCase,
							previewOptions: { matchLines: 1, charsPerLine: A },
						};
					}
					constructor(A, R, O, B, U, z) {
						super(e.$hPc, {
							canAcceptInBackground: !0,
							shouldSkipTrimPickFilter: !0,
						}),
							(this.s = A),
							(this.t = R),
							(this.u = O),
							(this.w = B),
							(this.y = U),
							(this.z = z),
							(this.n = Promise.resolve({ results: [], messages: [] })),
							(this.j = this.s.createInstance(l.$M8)),
							(this.m = this.D(this.s.createInstance(o.$RNc))),
							(this.q = this.D(this.s.createInstance(v.$k9b))),
							(this.m.location = o.SearchModelLocation.QUICK_ACCESS),
							(this.h = new I.$Hh());
					}
					dispose() {
						this.m.dispose(), super.dispose();
					}
					provide(A, R, O) {
						const B = new i.$Zc();
						e.$hPc.length < A.value.length &&
							(A.valueSelection = [e.$hPc.length, A.value.length]),
							(A.buttons = [
								{
									location: n.QuickInputButtonLocation.Inline,
									iconClass: C.ThemeIcon.asClassName(T.$ak.goToSearch),
									tooltip: (0, d.localize)(9144, null),
								},
							]),
							this.q.reset(),
							B.add(
								A.onDidTriggerButton(() => {
									this.m.searchResult.count() > 0
										? this.G(void 0)
										: this.y.openView(y.$l7, !0),
										A.hide();
								}),
							);
						const U = () => {
							const [z] = A.activeItems;
							if (z?.match) {
								this.q.set();
								const F = z.match;
								this.h.queue(async () => {
									await this.q.openTransientEditor({
										resource: F.parent().resource,
										options: {
											preserveFocus: !0,
											revealIfOpened: !0,
											ignoreError: !0,
											selection: F.range(),
										},
									});
								});
							}
						};
						return (
							B.add(
								$.Event.debounce(A.onDidChangeActive, (z, F) => F, D, !0)(U),
							),
							B.add(
								$.Event.once(A.onWillHide)(({ reason: z }) => {
									z === n.QuickInputHideReason.Gesture && this.q.restore();
								}),
							),
							B.add(
								$.Event.once(A.onDidHide)(({ reason: z }) => {
									this.m.searchResult.toggleHighlights(!1);
								}),
							),
							B.add(super.provide(A, R, O)),
							B.add(
								A.onDidAccept(() => this.m.searchResult.toggleHighlights(!1)),
							),
							B
						);
					}
					get C() {
						const A = this.z.getValue().workbench?.editor,
							R = this.z.getValue().search;
						return {
							openEditorPinned:
								!A?.enablePreviewFromQuickOpen || !A?.enablePreview,
							preserveInput: R.quickAccess.preserveInput,
							maxResults: R.maxResults,
							smartCase: R.smartCase,
							sortOrder: R.sortOrder,
						};
					}
					get defaultFilterValue() {
						if (this.C.preserveInput)
							return c.DefaultQuickAccessFilterValue.LAST;
					}
					F(A, R) {
						if (A === "") return;
						const O = this.t.getWorkspace().folders,
							B = { pattern: A };
						this.m.searchResult.toggleHighlights(!1);
						const U = B.isRegExp ? 1e4 : 1e3,
							z = this.j.text(
								B,
								O.map((H) => H.uri),
								this.r(U),
							),
							F = this.m.search(z, void 0, R),
							x = async () => {
								(this.n = F.asyncResults), await F.asyncResults;
								const H = new w.$Hc(F.syncResults.map((q) => q.resource));
								return this.m.searchResult
									.matches()
									.filter((q) => !H.has(q.resource));
							};
						return {
							syncResults: this.m.searchResult.matches(),
							asyncResults: x(),
						};
					}
					G(A) {
						this.y.openView(y.$l7, !1);
						const R = this.y.getActiveViewWithId(y.$l7);
						R.replaceSearchModel(this.m, this.n),
							(this.m = this.s.createInstance(o.$RNc)),
							(this.m.location = o.SearchModelLocation.QUICK_ACCESS);
						const O = R?.getControl();
						A
							? (O.setFocus([A], (0, a.$BMb)()),
								O.setSelection([A], (0, a.$BMb)()),
								O.reveal(A))
							: R.searchAndReplaceWidget.focus();
					}
					H(A, R, O) {
						A = A.sort((z, F) => {
							if (O) {
								if (O === z.resource) return -1;
								if (O === F.resource) return 1;
							}
							return (0, o.$PNc)(z, F, this.C.sortOrder);
						});
						const B = A.length > R ? A.slice(0, R) : A,
							U = [];
						for (let z = 0; z < A.length; z++) {
							if (z === R) {
								U.push({ type: "separator" }),
									U.push({
										label: (0, d.localize)(9145, null),
										iconClass: C.ThemeIcon.asClassName(p.$4Nc),
										accept: async () => {
											this.G(A[R]);
										},
									});
								break;
							}
							const F = B[z],
								x = (0, E.$jh)(F.resource),
								H = this.w.getUriLabel((0, E.$mh)(F.resource), {
									relative: !0,
								});
							U.push({
								label: x,
								type: "separator",
								description: H,
								buttons: [
									{
										iconClass: C.ThemeIcon.asClassName(p.$iOc),
										tooltip: (0, d.localize)(9146, null),
									},
								],
								trigger: async () => (
									await this.I(F, {}), h.TriggerAction.CLOSE_PICKER
								),
							});
							const q = F.matches() ?? [];
							for (let V = 0; V < q.length; V++) {
								const G = q[V];
								if (V === L) {
									U.push({
										label: (0, d.localize)(9147, null),
										iconClass: C.ThemeIcon.asClassName(p.$4Nc),
										accept: async () => {
											this.G(G);
										},
									});
									break;
								}
								const K = G.preview(),
									J = (K.before + K.inside + K.after).trim().substring(0, 999),
									W = [
										{
											start: K.before.length,
											end: K.before.length + K.inside.length,
										},
									];
								U.push({
									label: `${J}`,
									highlights: { label: W },
									buttons: [
										{
											iconClass: C.ThemeIcon.asClassName(p.$5Nc),
											tooltip: (0, d.localize)(9148, null),
										},
									],
									ariaLabel: `Match at location ${G.range().startLineNumber}:${G.range().startColumn} - ${J}`,
									accept: async (X, Y) => {
										await this.I(F, {
											keyMods: X,
											selection: (0, f.$ePc)(G, this.m),
											preserveFocus: Y.inBackground,
											forcePinned: Y.inBackground,
										});
									},
									trigger: () => (this.G(G), h.TriggerAction.CLOSE_PICKER),
									match: G,
								});
							}
						}
						return U;
					}
					async I(A, R) {
						const O = {
								preserveFocus: R.preserveFocus,
								pinned:
									R.keyMods?.ctrlCmd ||
									R.forcePinned ||
									this.C.openEditorPinned,
								selection: R.selection,
							},
							B =
								R.keyMods?.alt ||
								(this.C.openEditorPinned && R.keyMods?.ctrlCmd) ||
								R.forceOpenSideBySide
									? s.$KY
									: s.$JY;
						await this.u.openEditor({ resource: A.resource, options: O }, B);
					}
					g(A, R, O) {
						const B = this.m;
						if (A === "")
							return (
								this.m.searchResult.clear(),
								[{ label: (0, d.localize)(9149, null) }]
							);
						const U = R.add(new t.$Ce());
						R.add(
							O.onCancellationRequested(() => {
								B.location === o.SearchModelLocation.QUICK_ACCESS && U.cancel();
							}),
						);
						const z = this.F(A, U.token);
						if (!z) return null;
						const F = z.syncResults,
							x = this.H(F, k, this.u.activeEditor?.resource);
						return (
							x.length > 0 && this.m.searchResult.toggleHighlights(!0),
							F.length >= k
								? x
								: {
										picks: x,
										additionalPicks: z.asyncResults
											.then((H) =>
												H.length + x.length === 0
													? [{ label: (0, d.localize)(9150, null) }]
													: this.H(H, k - F.length),
											)
											.then(
												(H) => (
													H.length > 0 &&
														this.m.searchResult.toggleHighlights(!0),
													H
												),
											),
									}
						);
					}
				};
				(e.$iPc = M),
					(e.$iPc = M =
						Ne(
							[
								j(0, r.$Li),
								j(1, g.$Vi),
								j(2, s.$IY),
								j(3, u.$3N),
								j(4, S.$HMb),
								j(5, m.$gj),
							],
							M,
						));
			},
		),
		define(
			de[4172],
			he([1, 0, 4, 377, 11, 483, 63, 1972, 18, 10, 1068]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(i = mt(i)),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: i.SearchCommandIds.QuickTextSearchActionId,
									title: t.localize2(9264, "Quick Search"),
									category: E.$oOc,
									f1: !0,
								});
							}
							async run(c, n) {
								const g = c.get(C.$DJ),
									p = a(c) ?? "";
								g.quickAccess.show(d.$hPc + p, { preserveValue: !!p });
							}
						},
					);
				function a(h) {
					const c = h.get(m.$IY),
						n = h.get(r.$gj),
						g = c.activeTextEditorControl;
					return !g ||
						!g.hasTextFocus() ||
						!n.getValue("editor.find.seedSearchStringFromSelection")
						? null
						: (0, u.$fPc)(!1, g);
				}
			},
		),
		define(
			de[4173],
			he([
				1, 0, 27, 12, 1666, 4, 81, 8, 102, 20, 348, 30, 239, 473, 60, 1313, 721,
				4164, 3597, 561, 1068, 1367, 827, 1258, 405, 186, 31, 28, 568, 377,
				1972, 224, 4165, 1970, 4171, 4166, 3134, 4167, 4172,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(i = mt(i)),
					(E = mt(E)),
					(k = mt(k)),
					(0, r.$lK)(v.$TNc, v.$SNc, r.InstantiationType.Delayed),
					(0, r.$lK)($.$bPc, $.$cPc, r.InstantiationType.Delayed),
					(0, o.$1Nc)(),
					(0, f.$3Nc)(),
					(0, l.$GOc)();
				const M = "search.mode",
					N = a.$Io
						.as(n.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: S.$j7,
								title: E.localize2(9224, "Search"),
								ctorDescriptor: new m.$Ji(h.$ZSb, [
									S.$j7,
									{ mergeViewWithContainerWhenSingleView: !0 },
								]),
								hideIfEmpty: !0,
								icon: b.$gOc,
								order: 1,
							},
							n.ViewContainerLocation.Sidebar,
							{ doNotRegisterOpenCommand: !0 },
						),
					A = {
						id: S.$l7,
						containerIcon: b.$gOc,
						name: E.localize2(9225, "Search"),
						ctorDescriptor: new m.$Ji(s.$dPc),
						canToggleVisibility: !1,
						canMoveView: !0,
						openCommandActionDescriptor: {
							id: N.id,
							mnemonicTitle: E.localize(9153, null),
							keybindings: {
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyF,
								when: d.$Kj.regex("neverMatch", /doesNotMatch/),
							},
							order: 1,
						},
					};
				a.$Io.as(n.Extensions.ViewsRegistry).registerViews([A], N);
				const R = a.$Io.as(u.$1r.Quickaccess);
				R.registerQuickAccessProvider({
					ctor: p.$S9b,
					prefix: p.$S9b.PREFIX,
					placeholder: E.localize(9154, null, w.$uNc.PREFIX, g.$n9b.PREFIX),
					contextKey: c.$h9b,
					helpEntries: [
						{
							description: E.localize(9155, null),
							commandId: "workbench.action.quickOpen",
							commandCenterOrder: 10,
						},
					],
				}),
					R.registerQuickAccessProvider({
						ctor: y.$Ifc,
						prefix: y.$Ifc.PREFIX,
						placeholder: E.localize(9156, null),
						contextKey: "inWorkspaceSymbolsPicker",
						helpEntries: [
							{
								description: E.localize(9157, null),
								commandId: k.SearchCommandIds.ShowAllSymbolsActionId,
							},
						],
					}),
					R.registerQuickAccessProvider({
						ctor: L.$iPc,
						prefix: L.$hPc,
						contextKey: "inTextSearchPicker",
						placeholder: E.localize(9158, null),
						helpEntries: [
							{
								description: E.localize(9159, null),
								commandId: k.SearchCommandIds.QuickTextSearchActionId,
								commandCenterOrder: 25,
							},
						],
					}),
					a.$Io.as(C.$No.Configuration).registerConfiguration({
						id: "search",
						order: 13,
						title: E.localize(9160, null),
						type: "object",
						properties: {
							[S.$n7]: {
								type: "object",
								markdownDescription: E.localize(9161, null),
								default: {
									"**/node_modules": !0,
									"**/bower_components": !0,
									"**/*.code-search": !0,
								},
								additionalProperties: {
									anyOf: [
										{ type: "boolean", description: E.localize(9162, null) },
										{
											type: "object",
											properties: {
												when: {
													type: "string",
													pattern: "\\w*\\$\\(basename\\)\\w*",
													default: "$(basename).ext",
													markdownDescription: E.localize(9163, null),
												},
											},
										},
									],
								},
								scope: C.ConfigurationScope.RESOURCE,
							},
							[M]: {
								type: "string",
								enum: ["view", "reuseEditor", "newEditor"],
								default: "view",
								markdownDescription: E.localize(9164, null),
								enumDescriptions: [
									E.localize(9165, null),
									E.localize(9166, null),
									E.localize(9167, null),
								],
							},
							"search.useRipgrep": {
								type: "boolean",
								description: E.localize(9168, null),
								deprecationMessage: E.localize(9169, null),
								default: !0,
							},
							"search.maintainFileSearchCache": {
								type: "boolean",
								deprecationMessage: E.localize(9170, null),
								description: E.localize(9171, null),
								default: !1,
							},
							"search.useIgnoreFiles": {
								type: "boolean",
								markdownDescription: E.localize(9172, null),
								default: !0,
								scope: C.ConfigurationScope.RESOURCE,
							},
							"search.useGlobalIgnoreFiles": {
								type: "boolean",
								markdownDescription: E.localize(
									9173,
									null,
									"`#search.useIgnoreFiles#`",
								),
								default: !1,
								scope: C.ConfigurationScope.RESOURCE,
							},
							"search.useParentIgnoreFiles": {
								type: "boolean",
								markdownDescription: E.localize(
									9174,
									null,
									"`#search.useIgnoreFiles#`",
								),
								default: !1,
								scope: C.ConfigurationScope.RESOURCE,
							},
							"search.quickOpen.includeSymbols": {
								type: "boolean",
								description: E.localize(9175, null),
								default: !1,
							},
							"search.ripgrep.maxThreads": {
								type: "number",
								description: E.localize(9176, null),
								default: 0,
							},
							"search.quickOpen.includeHistory": {
								type: "boolean",
								description: E.localize(9177, null),
								default: !0,
							},
							"search.quickOpen.history.filterSortOrder": {
								type: "string",
								enum: ["default", "recency"],
								default: "default",
								enumDescriptions: [
									E.localize(9178, null),
									E.localize(9179, null),
								],
								description: E.localize(9180, null),
							},
							"search.followSymlinks": {
								type: "boolean",
								description: E.localize(9181, null),
								default: !0,
							},
							"search.smartCase": {
								type: "boolean",
								description: E.localize(9182, null),
								default: !1,
							},
							"search.globalFindClipboard": {
								type: "boolean",
								default: !1,
								description: E.localize(9183, null),
								included: i.$m,
							},
							"search.location": {
								type: "string",
								enum: ["sidebar", "panel"],
								default: "sidebar",
								description: E.localize(9184, null),
								deprecationMessage: E.localize(9185, null),
							},
							"search.maxResults": {
								type: ["number", "null"],
								default: S.$o7,
								markdownDescription: E.localize(9186, null),
							},
							"search.collapseResults": {
								type: "string",
								enum: ["auto", "alwaysCollapse", "alwaysExpand"],
								enumDescriptions: [E.localize(9187, null), "", ""],
								default: "alwaysExpand",
								description: E.localize(9188, null),
							},
							"search.useReplacePreview": {
								type: "boolean",
								default: !0,
								description: E.localize(9189, null),
							},
							"search.showLineNumbers": {
								type: "boolean",
								default: !1,
								description: E.localize(9190, null),
							},
							"search.usePCRE2": {
								type: "boolean",
								default: !1,
								description: E.localize(9191, null),
								deprecationMessage: E.localize(9192, null),
							},
							"search.actionsPosition": {
								type: "string",
								enum: ["auto", "right"],
								enumDescriptions: [
									E.localize(9193, null),
									E.localize(9194, null),
								],
								default: "right",
								description: E.localize(9195, null),
							},
							"search.searchOnType": {
								type: "boolean",
								default: !0,
								description: E.localize(9196, null),
							},
							"search.seedWithNearestWord": {
								type: "boolean",
								default: !1,
								description: E.localize(9197, null),
							},
							"search.seedOnFocus": {
								type: "boolean",
								default: !1,
								markdownDescription: E.localize(9198, null),
							},
							"search.searchOnTypeDebouncePeriod": {
								type: "number",
								default: 300,
								markdownDescription: E.localize(
									9199,
									null,
									"`#search.searchOnType#`",
								),
							},
							"search.searchEditor.doubleClickBehaviour": {
								type: "string",
								enum: ["selectWord", "goToLocation", "openLocationToSide"],
								default: "goToLocation",
								enumDescriptions: [
									E.localize(9200, null),
									E.localize(9201, null),
									E.localize(9202, null),
								],
								markdownDescription: E.localize(9203, null),
							},
							"search.searchEditor.singleClickBehaviour": {
								type: "string",
								enum: ["default", "peekDefinition"],
								default: "default",
								enumDescriptions: [
									E.localize(9204, null),
									E.localize(9205, null),
								],
								markdownDescription: E.localize(9206, null),
							},
							"search.searchEditor.reusePriorSearchConfiguration": {
								type: "boolean",
								default: !1,
								markdownDescription: E.localize(9207, null),
							},
							"search.searchEditor.defaultNumberOfContextLines": {
								type: ["number", "null"],
								default: 1,
								markdownDescription: E.localize(9208, null),
							},
							"search.searchEditor.focusResultsOnSearch": {
								type: "boolean",
								default: !1,
								markdownDescription: E.localize(9209, null),
							},
							"search.sortOrder": {
								type: "string",
								enum: [
									S.SearchSortOrder.Default,
									S.SearchSortOrder.FileNames,
									S.SearchSortOrder.Type,
									S.SearchSortOrder.Modified,
									S.SearchSortOrder.CountDescending,
									S.SearchSortOrder.CountAscending,
								],
								default: S.SearchSortOrder.Default,
								enumDescriptions: [
									E.localize(9210, null),
									E.localize(9211, null),
									E.localize(9212, null),
									E.localize(9213, null),
									E.localize(9214, null),
									E.localize(9215, null),
								],
								description: E.localize(9216, null),
							},
							"search.decorations.colors": {
								type: "boolean",
								description: E.localize(9217, null),
								default: !0,
							},
							"search.decorations.badges": {
								type: "boolean",
								description: E.localize(9218, null),
								default: !0,
							},
							"search.defaultViewMode": {
								type: "string",
								enum: [S.ViewMode.Tree, S.ViewMode.List],
								default: S.ViewMode.List,
								enumDescriptions: [
									E.localize(9219, null),
									E.localize(9220, null),
								],
								description: E.localize(9221, null),
							},
							"search.quickAccess.preserveInput": {
								type: "boolean",
								description: E.localize(9222, null),
								default: !1,
							},
							"search.experimental.closedNotebookRichContentResults": {
								type: "boolean",
								description: E.localize(9223, null),
								default: !1,
							},
						},
					}),
					I.$fk.registerCommand(
						"_executeWorkspaceSymbolProvider",
						async function (B, ...U) {
							const [z] = U;
							return (
								(0, T.$vg)(typeof z == "string"),
								(await (0, P.$O7)(z)).map((x) => x.symbol)
							);
						},
					),
					a.$Io
						.as(D.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "search.experimental.quickAccess.preserveInput",
								migrateFn: (B, U) => [
									["search.quickAccess.preserveInput", { value: B }],
									[
										"search.experimental.quickAccess.preserveInput",
										{ value: void 0 },
									],
								],
							},
						]);
			},
		),
		define(
			de[4174],
			he([
				1, 0, 27, 19, 9, 547, 4, 11, 31, 8, 102, 5, 43, 30, 192, 55, 44, 100,
				89, 483, 561, 377, 615, 4169, 1971, 1368, 18, 186, 231, 403, 3, 7,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(l = mt(l)),
					(y = mt(y));
				const M = "search.action.openInEditor",
					N = "search.action.openNewEditorToSide",
					A = "search.action.focusQueryEditorWidget",
					R = "search.action.focusFilesToInclude",
					O = "search.action.focusFilesToExclude",
					B = "toggleSearchEditorCaseSensitive",
					U = "toggleSearchEditorWholeWord",
					z = "toggleSearchEditorRegex",
					F = "increaseSearchEditorContextLines",
					x = "decreaseSearchEditorContextLines",
					H = "rerunSearchEditorSearch",
					q = "cleanSearchEditorState",
					V = "selectAllSearchEditorMatches";
				c.$Io
					.as(p.$a1.EditorPane)
					.registerEditorPane(
						n.$vVb.create($.$VOc, $.$VOc.ID, (0, C.localize)(9378, null)),
						[new u.$Ji(S.$SOc)],
					);
				let G = class {
					static {
						this.ID = "workbench.contrib.searchEditor";
					}
					constructor(ne, ee) {
						ne.registerEditor(
							"*" + S.$ROc,
							{
								id: S.$SOc.ID,
								label: (0, C.localize)(9379, null),
								detail: p.$b1.providerDisplayName,
								priority: P.RegisteredEditorPriority.default,
							},
							{
								singlePerResource: !0,
								canSupportResource: (_) => (0, i.$lh)(_) === S.$ROc,
							},
							{
								createEditorInput: ({ resource: _ }) => ({
									editor: ee.invokeFunction(S.$TOc, {
										from: "existingFile",
										fileUri: _,
									}),
								}),
							},
						);
					}
				};
				(G = Ne([j(0, P.$E6), j(1, a.$Li)], G)),
					(0, g.$s6)(G.ID, G, g.WorkbenchPhase.BlockStartup);
				class K {
					canSerialize(ne) {
						return !!ne.tryReadConfigSync();
					}
					serialize(ne) {
						if (!this.canSerialize(ne)) return;
						if (ne.isDisposed())
							return JSON.stringify({
								modelUri: void 0,
								dirty: !1,
								config: ne.tryReadConfigSync(),
								name: ne.getName(),
								matchRanges: [],
								backingUri: ne.backingUri?.toString(),
							});
						let ee;
						(ne.modelUri.path || (ne.modelUri.fragment && ne.isDirty())) &&
							(ee = ne.modelUri.toString());
						const _ = ne.tryReadConfigSync(),
							te = ne.isDirty(),
							Q = te ? ne.getMatchRanges() : [],
							Z = ne.backingUri;
						return JSON.stringify({
							modelUri: ee,
							dirty: te,
							config: _,
							name: ne.getName(),
							matchRanges: Q,
							backingUri: Z?.toString(),
						});
					}
					deserialize(ne, ee) {
						const {
							modelUri: _,
							dirty: te,
							config: Q,
							matchRanges: Z,
							backingUri: se,
						} = JSON.parse(ee);
						if (Q && Q.query !== void 0)
							if (_) {
								const re = ne.invokeFunction(S.$TOc, {
									from: "model",
									modelUri: w.URI.parse(_),
									config: Q,
									backupOf: se ? w.URI.parse(se) : void 0,
								});
								return re.setDirty(te), re.setMatchRanges(Z), re;
							} else
								return se
									? ne.invokeFunction(S.$TOc, {
											from: "existingFile",
											fileUri: w.URI.parse(se),
										})
									: ne.invokeFunction(S.$TOc, {
											from: "rawData",
											resultsContents: "",
											config: Q,
										});
					}
				}
				c.$Io.as(p.$a1.EditorFactory).registerEditorSerializer(S.$SOc.ID, K),
					m.$fk.registerCommand(q, (ie) => {
						const ne = ie.get(I.$IY).activeEditorPane;
						ne instanceof $.$VOc && ne.cleanState();
					});
				const J = (0, C.localize2)(9381, "Search Editor"),
					W = (ie = {}) => {
						const ne = {},
							ee = {
								includes: "filesToInclude",
								excludes: "filesToExclude",
								wholeWord: "matchWholeWord",
								caseSensitive: "isCaseSensitive",
								regexp: "isRegexp",
								useIgnores: "useExcludeSettingsAndIgnoreFiles",
							};
						return (
							Object.entries(ie).forEach(([_, te]) => {
								ne[ee[_] ?? _] = te;
							}),
							ne
						);
					},
					X = {
						description:
							"Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.",
						args: [
							{
								name: "Open new Search Editor args",
								schema: {
									properties: {
										query: { type: "string" },
										filesToInclude: { type: "string" },
										filesToExclude: { type: "string" },
										contextLines: { type: "number" },
										matchWholeWord: { type: "boolean" },
										isCaseSensitive: { type: "boolean" },
										isRegexp: { type: "boolean" },
										useExcludeSettingsAndIgnoreFiles: { type: "boolean" },
										showIncludesExcludes: { type: "boolean" },
										triggerSearch: { type: "boolean" },
										focusResults: { type: "boolean" },
										onlyOpenEditors: { type: "boolean" },
									},
								},
							},
						],
					};
				(0, d.$4X)(
					class extends d.$3X {
						constructor() {
							super({
								id: "search.searchEditor.action.deleteFileResults",
								title: (0, C.localize2)(9382, "Delete File Results"),
								keybinding: {
									weight: h.KeybindingWeight.EditorContrib,
									primary:
										t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backspace,
								},
								precondition: y.$vOc,
								category: J,
								f1: !0,
							});
						}
						async run(ie) {
							ie
								.get(r.$6j)
								.getContext((0, D.$Jgb)())
								.getValue(y.$vOc.serialize()) &&
								ie.get(I.$IY).activeEditorPane.deleteResultBlock();
						}
					},
				),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: y.$AOc,
									title: (0, C.localize2)(9383, "New Search Editor"),
									category: J,
									f1: !0,
									metadata: X,
								});
							}
							async run(ie, ne) {
								await ie
									.get(a.$Li)
									.invokeFunction(v.$4Oc, W({ location: "new", ...ne }));
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: y.$BOc,
									title: (0, C.localize2)(9384, "Open Search Editor"),
									category: J,
									f1: !0,
									metadata: X,
								});
							}
							async run(ie, ne) {
								await ie
									.get(a.$Li)
									.invokeFunction(v.$4Oc, W({ location: "reuse", ...ne }));
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: N,
									title: (0, C.localize2)(
										9385,
										"Open New Search Editor to the Side",
									),
									category: J,
									f1: !0,
									metadata: X,
								});
							}
							async run(ie, ne) {
								await ie.get(a.$Li).invokeFunction(v.$4Oc, W(ne), !0);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: M,
									title: (0, C.localize2)(9386, "Open Results in Editor"),
									category: J,
									f1: !0,
									keybinding: {
										primary: t.KeyMod.Alt | t.KeyCode.Enter,
										when: r.$Kj.and(
											l.$ooc.HasSearchResults,
											l.$ooc.SearchViewFocusedKey,
										),
										weight: h.KeybindingWeight.WorkbenchContrib,
										mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Enter },
									},
								});
							}
							async run(ie) {
								const ne = ie.get(f.$HMb),
									ee = ie.get(a.$Li),
									_ = (0, b.$rOc)(ne);
								_ &&
									(await ee.invokeFunction(
										v.$5Oc,
										_.searchResult,
										_.searchIncludePattern.getValue(),
										_.searchExcludePattern.getValue(),
										_.searchIncludePattern.onlySearchInOpenEditors(),
									));
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: H,
									title: (0, C.localize2)(9387, "Search Again"),
									category: J,
									keybinding: {
										primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyR,
										when: y.$vOc,
										weight: h.KeybindingWeight.EditorContrib,
									},
									icon: s.$_Nc,
									menu: [
										{
											id: d.$XX.EditorTitle,
											group: "navigation",
											when: o.$TPb.isEqualTo(y.$zOc),
										},
										{
											id: d.$XX.CommandPalette,
											when: o.$TPb.isEqualTo(y.$zOc),
										},
									],
								});
							}
							async run(ie) {
								const ne = ie.get(I.$IY);
								ne.activeEditor instanceof S.$SOc &&
									ne.activeEditorPane.triggerSearch({ resetCursor: !1 });
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: A,
									title: (0, C.localize2)(9388, "Focus Search Editor Input"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										primary: t.KeyCode.Escape,
										weight: h.KeybindingWeight.EditorContrib,
									},
								});
							}
							async run(ie) {
								const ne = ie.get(I.$IY);
								ne.activeEditor instanceof S.$SOc &&
									ne.activeEditorPane.focusSearchInput();
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: R,
									title: (0, C.localize2)(
										9389,
										"Focus Search Editor Files to Include",
									),
									category: J,
									f1: !0,
									precondition: y.$vOc,
								});
							}
							async run(ie) {
								const ne = ie.get(I.$IY);
								ne.activeEditor instanceof S.$SOc &&
									ne.activeEditorPane.focusFilesToIncludeInput();
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: O,
									title: (0, C.localize2)(
										9390,
										"Focus Search Editor Files to Exclude",
									),
									category: J,
									f1: !0,
									precondition: y.$vOc,
								});
							}
							async run(ie) {
								const ne = ie.get(I.$IY);
								ne.activeEditor instanceof S.$SOc &&
									ne.activeEditorPane.focusFilesToExcludeInput();
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: B,
									title: (0, C.localize2)(9391, "Toggle Match Case"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: Object.assign(
										{
											weight: h.KeybindingWeight.WorkbenchContrib,
											when: l.$ooc.SearchInputBoxFocusedKey,
										},
										E.$d2b,
									),
								});
							}
							run(ie) {
								(0, v.$WOc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: U,
									title: (0, C.localize2)(9392, "Toggle Match Whole Word"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: Object.assign(
										{
											weight: h.KeybindingWeight.WorkbenchContrib,
											when: l.$ooc.SearchInputBoxFocusedKey,
										},
										E.$e2b,
									),
								});
							}
							run(ie) {
								(0, v.$XOc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: z,
									title: (0, C.localize2)(
										9393,
										"Toggle Use Regular Expression",
									),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: Object.assign(
										{
											weight: h.KeybindingWeight.WorkbenchContrib,
											when: l.$ooc.SearchInputBoxFocusedKey,
										},
										E.$f2b,
									),
								});
							}
							run(ie) {
								(0, v.$YOc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: y.$COc,
									title: (0, C.localize2)(9394, "Toggle Context Lines"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.Alt | t.KeyCode.KeyL,
										mac: {
											primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyL,
										},
									},
								});
							}
							run(ie) {
								(0, v.$ZOc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: F,
									title: (0, C.localize2)(9395, "Increase Context Lines"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.Alt | t.KeyCode.Equal,
									},
								});
							}
							run(ie) {
								(0, v.$1Oc)(ie, !0);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: x,
									title: (0, C.localize2)(9396, "Decrease Context Lines"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.Alt | t.KeyCode.Minus,
									},
								});
							}
							run(ie) {
								(0, v.$1Oc)(ie, !1);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: V,
									title: (0, C.localize2)(9397, "Select All Matches"),
									category: J,
									f1: !0,
									precondition: y.$vOc,
									keybinding: {
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyL,
									},
								});
							}
							run(ie) {
								(0, v.$2Oc)(ie);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "search.action.openNewEditorFromView",
									title: (0, C.localize)(9380, null),
									category: J,
									icon: s.$hOc,
									menu: [
										{
											id: d.$XX.ViewTitle,
											group: "navigation",
											order: 2,
											when: r.$Kj.equals("view", T.$l7),
										},
									],
								});
							}
							run(ne, ...ee) {
								return (0, v.$3Oc)(ne);
							}
						},
					);
				let Y = class extends L.$1c {
					static {
						this.ID = "workbench.contrib.searchEditorWorkingCopyEditorHandler";
					}
					constructor(ne, ee) {
						super(), (this.a = ne), this.D(ee.registerHandler(this));
					}
					handles(ne) {
						return ne.resource.scheme === y.$wOc;
					}
					isOpen(ne, ee) {
						return this.handles(ne)
							? ee instanceof S.$SOc && (0, i.$gh)(ne.resource, ee.modelUri)
							: !1;
					}
					createEditor(ne) {
						const ee = this.a.invokeFunction(S.$TOc, {
							from: "model",
							modelUri: ne.resource,
						});
						return ee.setDirty(!0), ee;
					}
				};
				(Y = Ne([j(0, a.$Li), j(1, k.$bZ)], Y)),
					(0, g.$s6)(Y.ID, Y, g.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[4175],
			he([1, 0, 3, 54, 12, 4, 119, 5, 40, 62, 404, 107]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zVc = void 0);
				let h = class extends t.$1c {
					static {
						this.ID = "terminalWslRecommendation";
					}
					constructor(n, g, p, o, f) {
						if ((super(), !w.$l)) return;
						const b = g.exeBasedExtensionTips;
						if (!b || !b.wsl) return;
						let s = f.onDidCreateInstance(async (l) => {
							async function y(v) {
								return (await o.getInstalled()).some(
									(I) => I.identifier.id === v,
								);
							}
							if (
								!l.shellLaunchConfig.executable ||
								(0, i.$sc)(l.shellLaunchConfig.executable).toLowerCase() !==
									"wsl.exe"
							)
								return;
							s?.dispose(), (s = void 0);
							const $ = Object.keys(b.wsl.recommendations).find(
								(v) => b.wsl.recommendations[v].important,
							);
							!$ ||
								(await y($)) ||
								p.prompt(
									m.Severity.Info,
									(0, E.localize)(10171, null, b.wsl.friendlyName),
									[
										{
											label: (0, E.localize)(10172, null),
											run: () => {
												n.createInstance(u.$KTb, $).run();
											},
										},
									],
									{
										sticky: !0,
										neverShowAgain: {
											id: "terminalConfigHelper/launchRecommendationsIgnore",
											scope: m.NeverShowAgainScope.APPLICATION,
										},
										onCancel: () => {},
									},
								);
						});
					}
				};
				(e.$zVc = h),
					(e.$zVc = h =
						Ne(
							[
								j(0, d.$Li),
								j(1, r.$Bk),
								j(2, m.$4N),
								j(3, C.$Hp),
								j(4, a.$iIb),
							],
							h,
						));
			},
		),
		define(
			de[4176],
			he([
				1, 0, 27, 149, 3, 4, 8, 5, 43, 1970, 107, 363, 378, 237, 3170, 1263,
				2498,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 });
				let o = class extends w.$1c {
					static {
						p = this;
					}
					static {
						this.ID = "terminal.find";
					}
					static get(b) {
						return b.getContribution(p.ID);
					}
					get findWidget() {
						return this.a.value;
					}
					constructor(b, s, l, y, $) {
						super(),
							(this.f = b),
							(this.a = new i.$Y(() => {
								const v = y.createInstance(n.$TVc, this.f);
								if (
									(v.focusTracker.onDidFocus(() => {
										(p.activeFindWidget = this),
											this.f.forceScrollbarVisibility(),
											(0, u.$nIb)(this.f) || $.setActiveInstance(this.f);
									}),
									v.focusTracker.onDidBlur(() => {
										(p.activeFindWidget = void 0),
											this.f.resetScrollbarVisibility();
									}),
									!this.f.domElement)
								)
									throw new Error(
										"FindWidget expected terminal DOM to be initialized",
									);
								return (
									this.f.domElement?.appendChild(v.getDomNode()),
									this.b && v.layout(this.b.width),
									v
								);
							}));
					}
					layout(b, s) {
						(this.b = s), this.a.rawValue?.layout(s.width);
					}
					xtermReady(b) {
						this.D(
							b.onDidChangeFindResults(() =>
								this.a.rawValue?.updateResultCount(),
							),
						);
					}
					dispose() {
						p.activeFindWidget === this && (p.activeFindWidget = void 0),
							super.dispose(),
							this.a.rawValue?.dispose();
					}
				};
				(o = p = Ne([j(3, d.$Li), j(4, u.$iIb)], o)),
					(0, h.$qLc)(o.ID, o, !0),
					(0, a.$HUc)({
						id: g.TerminalFindCommandId.FindFocus,
						title: (0, E.localize2)(10514, "Focus Find"),
						keybinding: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
							when: C.$Kj.or(
								c.TerminalContextKeys.findFocus,
								c.TerminalContextKeys.focusInAny,
							),
							weight: m.KeybindingWeight.WorkbenchContrib,
						},
						precondition: C.$Kj.or(
							c.TerminalContextKeys.processSupported,
							c.TerminalContextKeys.terminalHasBeenCreated,
						),
						run: (f, b, s) => {
							(o.activeFindWidget || o.get(s))?.findWidget.reveal();
						},
					}),
					(0, a.$HUc)({
						id: g.TerminalFindCommandId.FindHide,
						title: (0, E.localize2)(10515, "Hide Find"),
						keybinding: {
							primary: t.KeyCode.Escape,
							secondary: [t.KeyMod.Shift | t.KeyCode.Escape],
							when: C.$Kj.and(
								c.TerminalContextKeys.focusInAny,
								c.TerminalContextKeys.findVisible,
							),
							weight: m.KeybindingWeight.WorkbenchContrib,
						},
						precondition: C.$Kj.or(
							c.TerminalContextKeys.processSupported,
							c.TerminalContextKeys.terminalHasBeenCreated,
						),
						run: (f, b, s) => {
							(o.activeFindWidget || o.get(s))?.findWidget.hide();
						},
					}),
					(0, a.$HUc)({
						id: g.TerminalFindCommandId.ToggleFindRegex,
						title: (0, E.localize2)(10516, "Toggle Find Using Regex"),
						keybinding: {
							primary: t.KeyMod.Alt | t.KeyCode.KeyR,
							mac: {
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyR,
							},
							when: c.TerminalContextKeys.findVisible,
							weight: m.KeybindingWeight.WorkbenchContrib,
						},
						precondition: C.$Kj.or(
							c.TerminalContextKeys.processSupported,
							c.TerminalContextKeys.terminalHasBeenCreated,
						),
						run: (f, b, s) => {
							const y = (o.activeFindWidget || o.get(s))?.findWidget.state;
							y?.change({ isRegex: !y.isRegex }, !1);
						},
					}),
					(0, a.$HUc)({
						id: g.TerminalFindCommandId.ToggleFindWholeWord,
						title: (0, E.localize2)(10517, "Toggle Find Using Whole Word"),
						keybinding: {
							primary: t.KeyMod.Alt | t.KeyCode.KeyW,
							mac: {
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyW,
							},
							when: c.TerminalContextKeys.findVisible,
							weight: m.KeybindingWeight.WorkbenchContrib,
						},
						precondition: C.$Kj.or(
							c.TerminalContextKeys.processSupported,
							c.TerminalContextKeys.terminalHasBeenCreated,
						),
						run: (f, b, s) => {
							const y = (o.activeFindWidget || o.get(s))?.findWidget.state;
							y?.change({ wholeWord: !y.wholeWord }, !1);
						},
					}),
					(0, a.$HUc)({
						id: g.TerminalFindCommandId.ToggleFindCaseSensitive,
						title: (0, E.localize2)(10518, "Toggle Find Using Case Sensitive"),
						keybinding: {
							primary: t.KeyMod.Alt | t.KeyCode.KeyC,
							mac: {
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyC,
							},
							when: c.TerminalContextKeys.findVisible,
							weight: m.KeybindingWeight.WorkbenchContrib,
						},
						precondition: C.$Kj.or(
							c.TerminalContextKeys.processSupported,
							c.TerminalContextKeys.terminalHasBeenCreated,
						),
						run: (f, b, s) => {
							const y = (o.activeFindWidget || o.get(s))?.findWidget.state;
							y?.change({ matchCase: !y.matchCase }, !1);
						},
					}),
					(0, a.$HUc)({
						id: g.TerminalFindCommandId.FindNext,
						title: (0, E.localize2)(10519, "Find Next"),
						keybinding: [
							{
								primary: t.KeyCode.F3,
								mac: {
									primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyG,
									secondary: [t.KeyCode.F3],
								},
								when: C.$Kj.or(
									c.TerminalContextKeys.focusInAny,
									c.TerminalContextKeys.findFocus,
								),
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							{
								primary: t.KeyMod.Shift | t.KeyCode.Enter,
								when: c.TerminalContextKeys.findInputFocus,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
						],
						precondition: C.$Kj.or(
							c.TerminalContextKeys.processSupported,
							c.TerminalContextKeys.terminalHasBeenCreated,
						),
						run: (f, b, s) => {
							const y = (o.activeFindWidget || o.get(s))?.findWidget;
							y && (y.show(), y.find(!1));
						},
					}),
					(0, a.$HUc)({
						id: g.TerminalFindCommandId.FindPrevious,
						title: (0, E.localize2)(10520, "Find Previous"),
						keybinding: [
							{
								primary: t.KeyMod.Shift | t.KeyCode.F3,
								mac: {
									primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyG,
									secondary: [t.KeyMod.Shift | t.KeyCode.F3],
								},
								when: C.$Kj.or(
									c.TerminalContextKeys.focusInAny,
									c.TerminalContextKeys.findFocus,
								),
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							{
								primary: t.KeyCode.Enter,
								when: c.TerminalContextKeys.findInputFocus,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
						],
						precondition: C.$Kj.or(
							c.TerminalContextKeys.processSupported,
							c.TerminalContextKeys.terminalHasBeenCreated,
						),
						run: (f, b, s) => {
							const y = (o.activeFindWidget || o.get(s))?.findWidget;
							y && (y.show(), y.find(!0));
						},
					}),
					(0, a.$GUc)({
						id: g.TerminalFindCommandId.SearchWorkspace,
						title: (0, E.localize2)(10521, "Search Workspace"),
						keybinding: [
							{
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyF,
								when: C.$Kj.and(
									c.TerminalContextKeys.processSupported,
									c.TerminalContextKeys.focus,
									c.TerminalContextKeys.textSelected,
								),
								weight: m.KeybindingWeight.WorkbenchContrib + 50,
							},
						],
						run: (f, b, s) => (0, r.$6Oc)(s, { query: f.selection }),
					});
			},
		),
		define(
			de[1369],
			he([
				1, 0, 46, 65, 8, 5, 31, 56, 7, 6, 74, 69, 394, 375, 35, 40, 91, 152, 10,
				308, 609, 206, 956, 328, 254, 17, 1780, 47, 64, 3209, 373, 3189, 840,
				618, 857, 1037, 67,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gAc = e.$fAc = void 0),
					(m = mt(m)),
					(u = mt(u));
				class B {
					constructor(F, x, H, q, V = {}) {
						(this.label = F),
							(this.description = x),
							(this.callback = H),
							(this.definition = q),
							(this.isActionLabel = V.isActionLabel ?? !1);
					}
				}
				e.$fAc = B;
				let U = class extends l.$rwb {
					static {
						this.kb = new Map();
					}
					constructor(F, x, H, q = "", V, G, K, J, W, X, Y, ie, ne, ee, _, te) {
						const Q = {
							contributions:
								t.EditorExtensionsRegistry.getSomeEditorContributions([
									h.$_Xb.ID,
									c.$2Mb.ID,
									s.$zAb.ID,
									$.$KDb.ID,
									v.$aDb.ID,
									N.$ufc.ID,
									A.$7hc.ID,
									M.$EOb.ID,
									R.$YOb.ID,
									...(H.enableSemanticSyntaxHighlighting ? [y.$iPb.ID] : []),
									...(H.enableHover ? [D.$eAc.ID] : []),
									...(H.customContributions ?? []),
								]),
						};
						super(F, x, Q, V, G, K, J, W, X, Y, ie, ne, ee),
							(this.wc = q),
							(this.xc = _),
							(this.yc = te),
							(this.mc = []),
							(this.nc = new Map()),
							(this.oc = []),
							(this.pc = new Set()),
							(this.qc = null),
							(this.rc = null),
							(this.sc = null),
							(this.tc = new Map()),
							(this.vc = new r.$re()),
							(this.onDidRemoveDecoration = this.vc.event),
							(this.Ac = (Z, se) => {
								const re = this,
									le = (ae, pe, $e, ye) => {
										if (re.getModel()) {
											const fe = $e.startColumn,
												me = fe + ae.trim().length,
												ve = new S.$iL(pe.lineNumber, fe, pe.lineNumber, me);
											return this.addDecoration(ve, ye);
										}
										return null;
									};
								return this.oc.map((ae) => {
									const pe = `@${ae.label}`,
										$e = ae.isActionLabel ? "@" : `@${ae.label}`,
										ye = this.getModel();
									if (!ye) throw new Error("No model");
									const fe =
											ye
												.getLineContent(Z.lineNumber)
												.slice(0, Z.column)
												.lastIndexOf("@") + 1,
										me = new S.$iL(Z.lineNumber, fe, Z.lineNumber, Z.column);
									return {
										label: pe,
										kind: u.CompletionItemKind.Keyword,
										insertText: $e,
										range: me,
										command: {
											id: I.$8zc,
											title: "Accept Suggestion",
											arguments: [
												() => {
													let ve = null;
													ae.isActionLabel ||
														(ve = le($e, Z, me, ae.definition)),
														ae.callback(ve);
												},
											],
										},
										detail: ae.description,
										sortText: pe,
									};
								});
							}),
							this.D(
								this.onDidChangeModelContent((Z) => {
									this.Dc(Z);
								}),
							),
							(this.pc = new Set([(0, k.$_zc)(this.Ac, (0, T.$9g)())]));
						for (const Z of this.pc)
							this.D(
								ne.completionProvider.register(
									{ scheme: "aiEditorBox-anysphere" },
									Z,
								),
							);
						this.D(
							this.onDidChangeModel(() => {
								this.Hc();
							}),
						),
							this.Gc(),
							this.Ic(),
							(this.uc = H.disableGoToDefinition ?? !1),
							this.uc ||
								this.D(
									ne.definitionProvider.register(
										{ scheme: "aiEditorBox-anysphere" },
										{
											provideDefinition: (Z, se, re) => {
												const le = this.Jc(se);
												if (le) {
													const oe = this.tc.get(le);
													if (oe) return [oe];
												}
												return [];
											},
										},
									),
								);
					}
					zc() {
						return t.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(F) {
						return {
							wordWrap: "on",
							glyphMargin: !1,
							lineNumbers: "off",
							lineDecorationsWidth: 0,
							lineNumbersMinChars: 0,
							folding: !1,
							fontLigatures: F.getValue("editor.fontLigatures"),
							fontFamily: F.getValue("editor.fontFamily"),
							fontSize: F.getValue("editor.fontSize"),
							lineHeight: F.getValue("editor.lineHeight"),
							scrollBeyondLastLine: !1,
							scrollbar: {
								vertical: "auto",
								horizontal: "auto",
								handleMouseWheel: !0,
								alwaysConsumeMouseWheel: !1,
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
							},
							renderLineHighlight: "none",
							renderWhitespace: "none",
							minimap: { enabled: !1 },
							automaticLayout: !0,
							automaticLayoutIgnoreHeight: !0,
							guides: { indentation: !1 },
						};
					}
					isSuggestionMenuVisible() {
						return L.$YCb.Visible.getValue(this.contextKeyService) ?? !1;
					}
					updateSuggestions(F, x = !1) {
						(this.oc = F),
							this.oc.length > 0 &&
								(this.isSuggestionMenuVisible() || x) &&
								this.Bc();
					}
					removeDecorationByDecorationId(F, x = !1) {
						const H = this.getModel();
						if (H) {
							const q = H.getDecorationRange(F);
							q &&
								(x
									? this.removeDecorationPure(F)
									: this.removeDecorationContent(H, q, F));
						}
					}
					removeDecorationPure(F) {
						const x = this.getModel();
						x && x.deltaDecorations([F], []), this.pruneDecorationIdData(F);
					}
					removeDecorationContent(F, x, H) {
						F.pushEditOperations(null, [{ range: x, text: "" }], () => null),
							this.pruneDecorationIdData(H);
					}
					pruneDecorationIdData(F) {
						(this.mc = this.mc.filter((x) => x !== F)),
							this.nc.delete(F),
							this.tc.delete(F);
					}
					setDecorationDefinitions(F, x) {
						this.tc.set(F, x);
					}
					addDecoration(F, x) {
						const H = this.getModel();
						if (!H) return null;
						const q = [
								{
									range: F,
									options: {
										isWholeLine: !1,
										className: "suggestion-accepted-decoration",
										stickiness:
											P.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										description: "suggestion-accepted",
									},
								},
							],
							[V] = H.deltaDecorations([], q);
						this.nc.set(V, H.getValueInRange(F)), this.mc.push(V);
						const G = x ?? { uri: H.uri, range: F };
						return this.tc.set(V, G), V;
					}
					Bc() {
						this.Fc().triggerSuggest(new Set(this.pc));
					}
					Cc(F, x) {
						F.pushEditOperations(
							null,
							[
								{
									range: new S.$iL(
										x.lineNumber,
										x.column,
										x.lineNumber,
										x.column,
									),
									text: " ",
								},
							],
							() => null,
						);
					}
					Dc(F) {
						const x = this.getModel();
						if (!x) return;
						const H = [];
						this.mc.forEach((q) => {
							const V = x.getDecorationRange(q);
							if (!V) {
								H.push(q);
								return;
							}
							const G = this.nc.get(q),
								K = x.getValueInRange(V);
							G !== K && H.push(q);
						}),
							H.length > 0 && this.Ec(H);
					}
					Ec(F) {
						const x = this.getModel();
						x &&
							(F.forEach((H) => {
								const q = x.getDecorationRange(H);
								this.nc.delete(H);
								const V = this.mc.indexOf(H);
								V > -1 && this.mc.splice(V, 1),
									this.vc.fire(H),
									this.tc.delete(H),
									q && this.removeDecorationContent(x, q, H);
							}),
							x.deltaDecorations(F, []));
					}
					Fc() {
						return this.getContribution($.$KDb.ID);
					}
					Gc() {
						if (!this.wc) return;
						const F = m.$(".ai-editor-placeholder");
						(F.textContent = this.wc),
							(F.className = "ai-editor-placeholder"),
							(F.style.position = "absolute"),
							(F.style.pointerEvents = "none"),
							(F.style.overflow = "hidden"),
							(F.style.textOverflow = "ellipsis"),
							(F.style.whiteSpace = "nowrap"),
							(F.style.top = "0"),
							(F.style.left = "0"),
							(F.style.color = "var(--vscode-input-placeholderForeground)"),
							(F.style.fontFamily = this.xc.getValue("editor.fontFamily")),
							(F.style.fontSize = `${this.xc.getValue("editor.fontSize")}px`),
							(F.style.opacity = "0.5"),
							(this.qc = {
								getId: () => "ai.editor.placeholder",
								getDomNode: () => F,
								getPosition: () => ({
									position: { lineNumber: 1, column: 1 },
									preference: [d.ContentWidgetPositionPreference.EXACT],
								}),
							});
					}
					Hc() {
						this.sc && (this.sc.dispose(), (this.sc = null)),
							(this.rc = this.getModel()),
							this.rc &&
								((this.sc = this.rc.onDidChangeContent(() => {
									this.Ic();
								})),
								this.Ic());
					}
					Ic() {
						if (!this.qc) return;
						const F = this.getModel(),
							x = this.qc.getDomNode().style;
						F && F.getValueLength() === 0 && x.display !== "block"
							? (this.addContentWidget(this.qc),
								(this.qc.getDomNode().style.display = "block"))
							: F &&
								F.getValueLength() > 0 &&
								x.display === "block" &&
								(this.removeContentWidget(this.qc),
								(this.qc.getDomNode().style.display = "none"));
					}
					Jc(F) {
						const x = this.getModel();
						if (!x) return null;
						const H = x.getDecorationsInRange({
							startLineNumber: F.lineNumber,
							startColumn: F.column,
							endLineNumber: F.lineNumber,
							endColumn: F.column,
						});
						for (const q of H)
							if (q.options.className === "suggestion-accepted-decoration")
								return q.id;
						return null;
					}
					dispose() {
						this.qc && this.removeContentWidget(this.qc), super.dispose();
					}
					static getOrCreateModel(F, x, H, q, V, G) {
						if (this.kb.has(x)) return this.kb.get(x);
						const K = F.createModel(H, q, V, !1);
						return this.kb.set(x, K), G?.(K), K;
					}
					static disposeModel(F) {
						const x = this.kb.get(F);
						x && (x.dispose(), this.kb.delete(F));
					}
				};
				(e.$gAc = U),
					(e.$gAc = U =
						Ne(
							[
								j(4, E.$Li),
								j(5, i.$dtb),
								j(6, C.$ek),
								j(7, w.$6j),
								j(8, n.$iP),
								j(9, g.$4N),
								j(10, p.$XK),
								j(11, o.$aN),
								j(12, a.$k3),
								j(13, b.$5X),
								j(14, f.$gj),
								j(15, O.$QO),
							],
							U,
						));
			},
		),
		define(
			de[4177],
			he([
				1, 0, 9, 6, 21, 20, 3, 467, 1870, 271, 205, 18, 1744, 47, 118, 45, 126,
				140, 191, 148, 341, 28, 23, 1369, 8,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AAc = void 0);
				let S = class extends C.$1c {
					constructor(T, P, k, L, D, M, N) {
						super(),
							(this.j = T),
							(this.m = P),
							(this.n = k),
							(this.q = L),
							(this.r = D),
							(this.u = M),
							(this.w = N),
							(this.a = new u.$Zzb()),
							(this.c = this.D(new i.$re())),
							(this.onDidReset = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onDidOpenNotepad = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onContextRemoved = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDidDeleteNotepad = this.h.event),
							(this.Q = !0),
							(this.R = 0),
							(this.S = 0);
						const A = this.w.createKey("notepadIsEnabled", !1);
						this.D(
							this.u.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.u.applicationUserPersistentStorage.notepadState
											.isNotepadEnabled,
								],
								onChange: ({ deps: R }) => {
									const O = R[0];
									if ((O !== void 0 && A.set(O), !O))
										for (const B of Object.keys(this.m.notepadsData.notepads)) {
											const U = this.q.findEditors(
												t.URI.from({ scheme: y.Schemas.notepad, path: B }),
											);
											for (const z of U) this.q.closeEditor(z);
										}
								},
							}),
						),
							this.D(
								this.j.onWillSaveState(() => {
									this.z();
								}),
							),
							A.set(
								this.u.applicationUserPersistentStorage.notepadState
									.isNotepadEnabled ?? !1,
							);
					}
					get selectedNotepad() {
						return this.m.selectedNotepad;
					}
					get selectedNotepadId() {
						return this.m.selectedNotepadId;
					}
					updateSelectedNotepad(T) {
						this.m.updateSelectedNotepad(T);
					}
					get selectedTab() {
						return this.m.selectedTab;
					}
					get selectedTabId() {
						return this.m.selectedTabId;
					}
					updateSelectedTab(T) {
						this.m.updateSelectedTab(T);
					}
					y(T) {
						const P = this.m.notepadsData.notepads[T];
						if (!P) throw new Error("[notepad] Notepad not found");
						return P;
					}
					z() {
						const T = JSON.stringify(this.m.notepadsData);
						this.j.store(
							"notepadData",
							T,
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
					}
					C(T, P) {
						this.m.setNotepadsData("notepads", T, (k) => ({ ...k, ...P }));
					}
					F(T, P) {
						const k = this.m.getTabData(T, P);
						if (!k) throw new Error("[notepad] Tab not found");
						return k;
					}
					G(T, P, k) {
						const L = this.m.getBubbleData(T, P, k);
						if (!L) throw new Error("[notepad] Bubble not found");
						return L;
					}
					H(T, P, k) {
						this.m.updateTabData(T, P, k);
					}
					I(T, P, k, L) {
						this.m.updateBubbleData(T, P, k, L);
					}
					J(T) {
						const P = this.y(T);
						return (
							P.text.trim() === "" && P.tabs.every((k) => this.L(T, k.tabId))
						);
					}
					L(T, P) {
						const k = this.F(T, P);
						if (k.bubbles.length !== 1) return !1;
						const L = k.bubbles[0];
						return (
							L.type === o.BubbleType.USER_CHAT &&
							(L.text === void 0 || L.text.trim() === "")
						);
					}
					addContext(T, P, k, L, D) {
						this.n.addContext({
							contextType: P,
							value: k,
							setContext: (...M) => {
								this.m.setNotepadsData("notepads", T, "context", ...M);
							},
							getContext: () => {
								const M = this.y(T);
								if (!M) throw new Error("[notepad] Notepad not found");
								return M.context;
							},
							undoRedoUri: D ? this.getUndoRedoUri(T) : void 0,
							mention: L,
						});
					}
					removeContext(T, P, k, L) {
						const D = this.n.removeContext({
							contextType: P,
							setContext: (...M) => {
								this.m.setNotepadsData("notepads", T, "context", ...M);
							},
							getContext: () => {
								const M = this.y(T);
								if (!M) throw new Error("[notepad] Notepad not found");
								return M.context;
							},
							index: k,
							undoRedoUri: L ? this.getUndoRedoUri(T) : void 0,
						});
						this.g.fire({
							notepadId: T,
							contextType: P,
							removedMentionIds: D.map((M) => M.uuid),
						});
					}
					removeMention(T, P) {
						this.n.removeMention({
							uuid: P,
							setContext: (...k) => {
								this.m.setNotepadsData("notepads", T, "context", ...k);
							},
							getContext: () => {
								const k = this.y(T);
								if (!k) throw new Error("[notepad] Notepad not found");
								return k.context;
							},
							undoRedoUri: this.getUndoRedoUri(T),
						});
					}
					addBubbleContext(T, P, k, L, D, M, N) {
						this.n.addContext({
							contextType: L,
							value: D,
							setContext: (...A) => {
								this.m.setNotepadsData(
									"notepads",
									T,
									"tabs",
									(R) => R.tabId === P,
									"bubbles",
									(R) => R.id === k && R.type === "user",
									"context",
									...A,
								);
							},
							getContext: () => {
								const A = this.m.getBubbleData(T, P, k);
								if (!A || A.type !== "user")
									throw new Error("[notepad] Bubble not found");
								return A.context;
							},
							undoRedoUri: N ? this.getUndoRedoUri(T) : void 0,
							mention: M ? { uuid: M } : void 0,
						});
					}
					removeBubbleContext(T, P, k, L, D, M) {
						const N = this.n.removeContext({
							contextType: L,
							setContext: (...A) => {
								this.m.setNotepadsData(
									"notepads",
									T,
									"tabs",
									(R) => R.tabId === P,
									"bubbles",
									(R) => R.id === k && R.type === "user",
									"context",
									...A,
								);
							},
							getContext: () => {
								const A = this.m.getBubbleData(T, P, k);
								if (!A || A.type !== "user")
									throw new Error("[notepad] Bubble not found");
								return A.context;
							},
							index: D,
							undoRedoUri: M ? this.getUndoRedoUri(T) : void 0,
						});
						this.g.fire({
							notepadId: T,
							contextType: L,
							removedMentionIds: N.map((A) => A.uuid),
						});
					}
					removeBubbleMention(T, P, k, L) {
						this.n.removeMention({
							uuid: L,
							setContext: (...D) => {
								this.m.setNotepadsData(
									"notepads",
									T,
									"tabs",
									(M) => M.tabId === P,
									"bubbles",
									(M) => M.id === k && M.type === "user",
									"context",
									...D,
								);
							},
							getContext: () => {
								const D = this.m.getBubbleData(T, P, k);
								if (!D || D.type !== "user")
									throw new Error("[notepad] Bubble not found");
								return D.context;
							},
							undoRedoUri: this.getUndoRedoUri(T),
						});
					}
					getUndoRedoUri(T) {
						return t.URI.from({ scheme: "notepad", path: `${T}` });
					}
					async submitChat(T) {
						const { notepadId: P, tabId: k, bubbleId: L, extra: D } = T,
							N = this.F(P, k)?.bubbles.findIndex(
								(V) => V.id === L && V.type === "user",
							);
						if (this.G(P, k, L).type !== o.BubbleType.USER_CHAT)
							throw new Error("[notepad] User bubble not found");
						const R = await this.r.aiClient();
						this.N({ notepadId: P, tabId: k });
						const O = this.D(new i.$re());
						let B = (0, c.$9g)(),
							[U, z] = this.r.registerNewGeneration({
								generationUUID: B,
								metadata: void 0,
							});
						this.H(P, k, { chatGenerationUUID: B, lastUpdatedAt: Date.now() });
						const F = await this.O({ notepadId: P, tabId: k, bubbleId: L });
						if (F === null) return;
						const x = O.event(() => {
								const V = this.F(P, k);
								V &&
									V.bubbles.length > 2 &&
									(!V?.hasNamedTab || N === 0) &&
									(async () => {
										const K = await R.nameTab({
											messages: F.conversation ?? [],
										});
										if (K.name)
											this.m.setNotepadsData(
												"notepads",
												P,
												"tabs",
												(J, W) => J.tabId === k,
												"chatTitle",
												K.name,
											);
										else {
											const J = V.bubbles[0];
											J &&
												J.type === "user" &&
												this.m.setNotepadsData(
													"notepads",
													P,
													"tabs",
													(W, X) => W.tabId === k,
													"chatTitle",
													(J.richText ?? J.text)
														?.trim()
														.split(`
`)[0]
														.split(" ")
														.slice(0, 10)
														.join(" ") ?? "",
												);
										}
										this.m.setNotepadsData(
											"notepads",
											P,
											"tabs",
											(J, W) => J.tabId === k,
											"hasNamedTab",
											!0,
										);
									})(),
									x.dispose();
							}),
							H = (0, m.$s9b)(),
							q = (0, m.$t9b)();
						this.m.setNotepadsData(
							"notepads",
							P,
							"tabs",
							(V) => V.tabId === k,
							"bubbles",
							(V) => [...V, H, q],
						);
						try {
							const V = R.streamNotepadChat(F, {
									signal: z.signal,
									headers: (0, f.$m6b)(B),
								}),
								G = this.M({
									notepadId: P,
									tabId: k,
									bubbleId: H.id,
									internalStreamer: V,
									generationUUID: B,
								}),
								K = this.r.streamResponse({
									modelDetails: F.modelDetails,
									generationUUID: B,
									streamer: G,
									streamerURL:
										s.$q0.typeName + "/" + s.$q0.methods.streamNotepadChat.name,
									source: "other",
									failSilently: !0,
									rethrowCancellation: !0,
								});
							let J = H.text;
							for await (const W of K) {
								const { text: X } = W;
								if (!X) {
									W.isBigFile && this.H(P, k, { isReadingLongFile: !0 });
									continue;
								}
								this.F(P, k)?.isReadingLongFile &&
									this.H(P, k, { isReadingLongFile: !1 }),
									(J += X),
									this.m.setNotepadsData(
										"notepads",
										P,
										"tabs",
										(ie) => ie.tabId === k,
										"bubbles",
										(ie) => ie.id === H.id,
										"text",
										J,
									),
									(H.text = J);
							}
						} catch (V) {
							console.error("Error in chat submission:", V),
								this.m.setNotepadsData(
									"notepads",
									P,
									"tabs",
									(G) => G.tabId === k,
									"bubbles",
									(G) => G.filter((K) => K.id !== H.id),
								);
						} finally {
							try {
								O.fire();
							} finally {
								O.dispose();
							}
							D?.onFinish && D.onFinish(),
								this.H(P, k, { chatGenerationUUID: void 0 });
						}
					}
					async *M({
						notepadId: T,
						tabId: P,
						bubbleId: k,
						internalStreamer: L,
						generationUUID: D,
					}) {
						for await (const M of L) yield M;
					}
					N({ notepadId: T, tabId: P }) {
						const k = this.F(T, P);
						if (k?.chatGenerationUUID) {
							const L = k.chatGenerationUUID;
							this.H(T, P, { chatGenerationUUID: void 0 }), this.U(L);
						}
					}
					async O({ notepadId: T, tabId: P, bubbleId: k }) {
						const L = this.y(T),
							D = L?.tabs.find((z) => z.tabId === P),
							M = D?.bubbles.find((z) => z.id === k);
						if (!L || !D || !M || M.type !== o.BubbleType.USER_CHAT)
							return (
								console.error(
									`Notepad ${T}, tab ${P}, or user bubble ${k} does not exist`,
								),
								null
							);
						const N = await this.P(T, D),
							A = this.r.getModelDetails({
								specificModelField: "regular-chat",
							}),
							R = D.bubbles
								.filter((z) => z.type === o.BubbleType.USER_CHAT)
								.map((z) => z.context?.notepads?.map((F) => F.notepadId))
								.filter(l.$tg)
								.flat();
						new Set(R).add(T);
						const B = M.context;
						return new b.$bH({
							conversation: N,
							allowLongFileScan: !1,
							explicitContext: await this.r.getExplicitContext(),
							canHandleFilenamesAfterLanguageIds: !0,
							modelDetails: A,
							documentationIdentifiers:
								M.context.selectedDocs?.map((z) => z.docId) ?? [],
							useWeb: M.context.useWeb ? "full_search" : void 0,
							externalLinks: M.context.externalLinks ?? [],
						});
					}
					async P(T, P) {
						const k = [],
							L = P.bubbles[P.bubbles.length - 1].id;
						for (const D of P.bubbles) {
							const M = D.id;
							if (D.type === o.BubbleType.USER_CHAT) {
								const N = await this.n.getCodeChunks(D.context),
									A = await this.n.getCommitDetailsFromPartialCommits(
										D.context.selectedCommits ?? [],
									),
									R = await this.n.getPullRequestDetailsFromPartialPullRequests(
										D.context.selectedPullRequests ?? [],
									),
									O = await this.n.getDiffDetailsFromGitDiff({
										gitDiff: D.context.gitDiff,
										gitDiffFromBranchToMain: D.context.gitDiffFromBranchToMain,
									}),
									B = D.context.selectedImages
										? await this.n.getImagesFromImageSelection({
												setContext: (...H) => {
													this.m.setNotepadsData(
														"notepads",
														T,
														"tabs",
														(q) => q.tabId === P.tabId,
														"bubbles",
														(q) =>
															q.id === M && q.type === o.BubbleType.USER_CHAT,
														...H,
													);
												},
												getContext: () => this.G(T, P.tabId, M).context,
											})
										: [],
									z = (D.context.folderSelections ?? []).map(
										(H) => H.relativePath,
									),
									F = { ...D.context };
								if (M === L) {
									const H = [...(F.notepads ?? []), { notepadId: T }];
									F.notepads = H;
								}
								const x = await this.n.getNotepadsContext(F);
								k.push(
									new p.$SA({
										text: D.text ?? "",
										bubbleId: D.id,
										type: p.ConversationMessage_MessageType.HUMAN,
										attachedCodeChunks: N,
										attachedFolders: z,
										commits: A,
										pullRequests: R,
										gitDiffs: O,
										images: B,
										notepads: x,
									}),
								);
							} else
								D.type === o.BubbleType.AI_CHAT &&
									k.push(
										new p.$SA({
											text: D.text,
											bubbleId: D.id,
											type: p.ConversationMessage_MessageType.AI,
										}),
									);
						}
						return k;
					}
					async deleteNotepad(T) {
						this.m.setNotepadsData("notepads", T, void 0);
						const P = this.q.findEditors(
							t.URI.from({ scheme: y.Schemas.notepad, path: T }),
						);
						for (const k of P) this.q.closeEditor(k);
						$.$gAc.disposeModel(T), this.h.fire(T);
					}
					async openNotepad(T, P) {
						this.openNotepadAsEditor(T), this.f.fire();
					}
					createNotepad(T, P) {
						const k = (0, m.$u9b)(void 0, T);
						return (
							this.m.setNotepadsData("notepads", k.id, k),
							this.openNotepadAsEditor(k.id),
							k.id
						);
					}
					async openNotepadAsEditor(T) {
						const P = this.y(T);
						if (!P) throw new Error(`Notepad with id ${T} not found`);
						const k = h.$6zc.create(P);
						await this.q.openEditor(k, { pinned: !0 });
					}
					getInputDelegate() {
						return this.a;
					}
					isNotepadEnabled() {
						return this.Q;
					}
					setIsNotepadEnabled(T) {
						this.Q = T;
					}
					setHorizontalLinePosition(T) {
						this.R = T;
					}
					getHorizontalLinePosition() {
						return this.R;
					}
					setVerticalLinePosition(T) {
						this.S = T;
					}
					getVerticalLinePosition() {
						return this.S;
					}
					U(T) {
						this.r.streamingAbortControllers.get(T)?.abort(),
							this.r.streamingAbortControllers.delete(T);
					}
					resetTab(T, P) {
						this.N({ notepadId: T, tabId: P });
						const k = (0, m.$r9b)(P);
						this.H(T, P, k);
					}
					createTab(T) {
						const k = this.y(T).selectedTabId,
							L = this.F(T, k);
						if (this.L(T, k)) {
							this.resetTab(T, k);
							return;
						}
						const D = (0, m.$r9b)();
						this.m.setNotepadsData("notepads", T, "tabs", (M) => [D, ...M]),
							this.m.setNotepadsData("notepads", T, "selectedTabId", D.tabId);
					}
					deleteTab(T, P) {
						const k = this.y(T);
						if (!k) {
							console.error(`Notepad with id ${T} not found`);
							return;
						}
						if ((this.N({ notepadId: T, tabId: P }), k.tabs.length === 1)) {
							this.resetTab(T, P);
							return;
						}
						if (k.selectedTabId === P) {
							const L = k.tabs.filter((D) => D.tabId !== P);
							L.length > 0 &&
								this.m.setNotepadsData(
									"notepads",
									T,
									"selectedTabId",
									L[0].tabId,
								);
						}
						this.m.setNotepadsData("notepads", T, "tabs", (L) =>
							L.filter((D) => D.tabId !== P),
						);
					}
					selectPreviousTab(T) {
						const P = this.y(T),
							k = P.selectedTabId;
						let D = P.tabs.findIndex((M) => M.tabId === k) + 1;
						D === P.tabs.length && (D = 0),
							this.m.setNotepadsData(
								"notepads",
								T,
								"selectedTabId",
								P.tabs[D].tabId,
							);
					}
					selectNextTab(T) {
						const P = this.y(T),
							k = P.selectedTabId;
						let D = P.tabs.findIndex((M) => M.tabId === k) - 1;
						D === -1 && (D = P.tabs.length - 1),
							this.m.setNotepadsData(
								"notepads",
								T,
								"selectedTabId",
								P.tabs[D].tabId,
							);
					}
				};
				(e.$AAc = S),
					(e.$AAc = S =
						Ne(
							[
								j(0, w.$lq),
								j(1, d.$y9b),
								j(2, r.$Q9b),
								j(3, a.$IY),
								j(4, n.$Nfc),
								j(5, g.$0zb),
								j(6, v.$6j),
							],
							S,
						)),
					(0, E.$lK)(d.$z9b, S, E.InstantiationType.Delayed);
			},
		),
		define(
			de[4178],
			he([1, 0, 181, 158, 13, 76, 23, 19, 47, 36]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Aac = u),
					(e.$Bac = a);
				function u(h) {
					const [c] = (0, t.useLexicalComposerContext)(),
						n = (0, r.$odc)();
					return (
						(0, w.createEffect)(() => {
							if (h.addImage) {
								const g = c.registerCommand(
									i.PASTE_COMMAND,
									(p) => {
										if (p.clipboardData && p.clipboardData.items) {
											const o = p.clipboardData.items;
											for (let f = 0; f < o.length; f++)
												if (o[f].type.indexOf("image") !== -1) {
													const b = o[f].getAsFile();
													return b
														? ((async () => {
																const s = await b.arrayBuffer(),
																	l = new Uint8Array(s),
																	y = E.$Te.wrap(l),
																	$ = (0, d.$nh)(
																		n.environmentService.workspaceStorageHome,
																		"images",
																		`${Math.random()}-${b.name}`,
																	);
																await n.fileService.writeFile($, y);
																const v = new Image();
																(v.src = C.$7g.uriToBrowserUri($).toString()),
																	await new Promise(
																		(S) =>
																			(v.onload = () => {
																				const I = v.naturalWidth,
																					T = v.naturalHeight;
																				console.log({ width: I, height: T }),
																					h.addImage?.((0, m.$9g)(), {
																						path: $.fsPath,
																						dimension: { width: I, height: T },
																						loadedAt: Date.now(),
																					}),
																					S();
																			}),
																	),
																	v.remove();
															})(),
															!0)
														: !1;
												}
										}
										return !1;
									},
									i.COMMAND_PRIORITY_CRITICAL,
								);
								(0, w.onCleanup)(() => {
									g();
								});
							}
						}),
						null
					);
				}
				function a(h) {
					const [c] = (0, t.useLexicalComposerContext)();
					return (
						(0, w.createEffect)(() => {
							if (h.addImage) {
								const n = c.registerCommand(
										i.DROP_COMMAND,
										(p) => {
											const o = Array.from(p.dataTransfer?.files || [])[0];
											if (!o || !o?.type.startsWith("image")) return !1;
											p.preventDefault(),
												p.stopPropagation(),
												p.stopImmediatePropagation();
											const f = new Image();
											return (
												(f.src = URL.createObjectURL(o)),
												(f.onload = () => {
													const b = f.naturalWidth,
														s = f.naturalHeight;
													h.addImage?.((0, m.$9g)(), {
														path: o.path,
														dimension: { width: b, height: s },
														loadedAt: Date.now(),
													}),
														f.remove();
												}),
												!0
											);
										},
										i.COMMAND_PRIORITY_LOW,
									),
									g = c.registerCommand(
										i.DRAGOVER_COMMAND,
										(p) => (
											p.dataTransfer && (p.dataTransfer.dropEffect = "copy"), !0
										),
										i.COMMAND_PRIORITY_CRITICAL,
									);
								(0, w.onCleanup)(() => {
									n(), g();
								});
							}
						}),
						null
					);
				}
			},
		),
		define(
			de[1069],
			he([1, 0, 2, 2, 2, 2, 13, 2, 36]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q_b = u);
				const r = (0, t.template)(
					'<div class="typeahead-popover mentions-menu">',
				);
				function u(a) {
					const [h, c] = (0, C.createSignal)(1e3),
						[n, g] = (0, C.createSignal)(1e3),
						[p, o] = (0, C.createSignal)(1e3),
						f = (0, m.$pdc)();
					return (
						(0, C.createEffect)(() => {
							const b = a.anchorElementRef.current;
							b &&
								(c(f.window.innerWidth - b.getBoundingClientRect().left),
								g(f.window.innerHeight - b.getBoundingClientRect().top),
								o(b.getBoundingClientRect().top));
						}),
						(0, i.createComponent)(d.Show, {
							get when() {
								return (
									a.anchorElementRef.current !== null &&
									a.anchorElementRef.current !== void 0
								);
							},
							get children() {
								return (0, i.createComponent)(d.Portal, {
									get mount() {
										return a.anchorElementRef.current || void 0;
									},
									get children() {
										return (0, i.createComponent)(d.Show, {
											get when() {
												return a.show;
											},
											get children() {
												const b = r();
												return (
													b.style.setProperty(
														"background-color",
														"var(--vscode-editor-background)",
													),
													b.style.setProperty(
														"border",
														"1px solid var(--vscode-commandCenter-inactiveBorder)",
													),
													b.style.setProperty(
														"color",
														"var(--vscode-editor-foreground)",
													),
													b.style.setProperty("border-radius", "3px"),
													b.style.setProperty("max-height", "600px"),
													b.style.setProperty("position", "absolute"),
													(0, E.insert)(b, () => a.children),
													(0, w.effect)(
														(s) => {
															const l = a.width ? `${a.width}px` : "320px",
																y = a.top
																	? `${a.top}px`
																	: n() < 600 && p() > n()
																		? void 0
																		: "20px",
																$ = n() < 600 && p() > n() ? "20px" : void 0,
																v = a.left
																	? `${a.left}px`
																	: h() < 400
																		? `${-(400 - h() + 20)}px`
																		: "0px";
															return (
																l !== s._v$ &&
																	((s._v$ = l) != null
																		? b.style.setProperty("width", l)
																		: b.style.removeProperty("width")),
																y !== s._v$2 &&
																	((s._v$2 = y) != null
																		? b.style.setProperty("top", y)
																		: b.style.removeProperty("top")),
																$ !== s._v$3 &&
																	((s._v$3 = $) != null
																		? b.style.setProperty("bottom", $)
																		: b.style.removeProperty("bottom")),
																v !== s._v$4 &&
																	((s._v$4 = v) != null
																		? b.style.setProperty("left", v)
																		: b.style.removeProperty("left")),
																s
															);
														},
														{
															_v$: void 0,
															_v$2: void 0,
															_v$3: void 0,
															_v$4: void 0,
														},
													),
													b
												);
											},
										});
									},
								});
							},
						})
					);
				}
			},
		),
		define(
			de[4179],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 181, 164, 13, 756, 36, 817, 1069, 1005,
				1270, 3195, 2509,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = S);
				const s = (0, t.template)('<span class="secondary-text">'),
					l = (0, t.template)(
						'<li tabindex="-1" role="option"><span></span><span class="text">',
					),
					y = (0, t.template)("<ul>"),
					$ = (T) => {
						const P = (0, h.createMemo)(() =>
								T.isSelected ? "item selected" : "item",
							),
							L = (0, n.$odc)().themeService.getColorTheme(),
							D = L.getColor("menu.selectionBackground"),
							M = L.getColor("menu.selectionForeground"),
							N = L.getColor("menu.inactiveSelectionForeground"),
							A = L.getColor("editorOverviewRuler.bracketMatchForeground");
						return (() => {
							const R = l(),
								O = R.firstChild,
								B = O.nextSibling;
							R.addEventListener("click", () => {
								T.onClick();
							}),
								R.addEventListener("mouseenter", () => {
									T.onMouseEnter();
								});
							const U = T.option.setRefElement;
							return (
								typeof U == "function"
									? (0, r.use)(U, R)
									: (T.option.setRefElement = R),
								O.style.setProperty("display", "flex"),
								O.style.setProperty("margin-left", "0px"),
								(0, m.insert)(O, () => T.option.picture),
								(0, m.insert)(B, () => T.option.name),
								(0, m.insert)(
									R,
									(0, C.createComponent)(h.Show, {
										get when() {
											return T.option.secondaryText;
										},
										get children() {
											const z = s();
											return (
												(0, m.insert)(z, () => T.option.secondaryText),
												(0, d.effect)(() =>
													(T.isSelected
														? (N?.toString() ?? "")
														: (A?.toString() ?? "")) != null
														? z.style.setProperty(
																"color",
																T.isSelected
																	? (N?.toString() ?? "")
																	: (A?.toString() ?? ""),
															)
														: z.style.removeProperty("color"),
												),
												z
											);
										},
									}),
									null,
								),
								(0, d.effect)(
									(z) => {
										const F = P(),
											x = T.isSelected,
											H = "typeahead-item-" + T.index,
											q = {
												...(T.isSelected
													? {
															"background-color": D?.toString() ?? "",
															color: M?.toString() ?? "",
														}
													: {}),
												cursor:
													T.option.type.case === "staticheading"
														? "default"
														: "pointer",
											},
											V = T.isSelected
												? (N?.toString() ?? "")
												: (A?.toString() ?? "");
										return (
											F !== z._v$ && (0, E.className)(R, (z._v$ = F)),
											x !== z._v$2 &&
												(0, w.setAttribute)(R, "aria-selected", (z._v$2 = x)),
											H !== z._v$3 &&
												(0, w.setAttribute)(R, "id", (z._v$3 = H)),
											(z._v$4 = (0, i.style)(R, q, z._v$4)),
											V !== z._v$5 &&
												((z._v$5 = V) != null
													? O.style.setProperty("color", V)
													: O.style.removeProperty("color")),
											z
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
									},
								),
								R
							);
						})();
					};
				function v(T, P, k, L) {
					const D = T.selections.findIndex((R) => R.uuid === L),
						M = T.fileSelections.findIndex((R) => R.uuid === L),
						N = T.commits.findIndex((R) => R.uuid === L),
						A = T.pullRequests.findIndex((R) => R.uuid === L);
					L === T.gitDiffUuid
						? P.removeGitDiff()
						: L === T.diffToMainUuid
							? P.removeDiffToMain()
							: D !== -1
								? P.removeSelection(D)
								: M !== -1
									? P.removeFileSelection(M)
									: N !== -1
										? P.removeCommit(N)
										: A !== -1
											? P.removePullRequest(A)
											: k in T.lintKeys
												? P.removeLinterErrors()
												: k in T.currentFileKeys
													? P.removeCurrentFile()
													: k in T.codebaseKeys
														? P.removeCodebase()
														: P.removeDocs(k);
				}
				function S(T) {
					const P = (0, n.$odc)(),
						[k] = (0, u.useLexicalComposerContext)(),
						L = new Map(),
						D = k.registerMutationListener(f.$uac, (U) => {
							for (let [z, F] of U)
								F === "created"
									? k.update(() => {
											const x = (0, a.$getNodeByKey)(z);
											x && L.set(z, x);
										})
									: F === "destroyed" && L.get(z) && T.removeCommand();
						});
					(0, h.onCleanup)(() => {
						D();
					});
					const [M, N] = (0, h.createSignal)(null),
						A = (0, h.createMemo)(() =>
							o.$n_b
								.filter((z) => T.commands.includes(z))
								.map((z) => b.$yac[z].typeaheadOption),
						),
						R = (U) => {
							const z = (0, g.$jac)(U),
								F = (0, g.$mac)(U, k);
							return F && !z ? F : null;
						},
						O = (U, z, F) => {
							const x = (0, a.$createTextNode)("");
							z && (z.select(), z.replace(x)), F(), B(U);
						};
					(0, h.createEffect)(() => {
						if (T.delegate !== void 0) {
							const U = T.delegate.onFireEditNode((z) => {
								k.update(() => {
									const F = (0, f.$createSlashCommandNode)("edit"),
										x = (0, a.$createTextNode)(" " + z),
										H = (0, a.$createParagraphNode)(),
										q = (0, a.$getRoot)();
									for (const V of q.getChildren()) V.remove();
									H.append(F, x), q.append(H), T.setCommand("edit");
								});
							});
							(0, h.onCleanup)(U);
						}
					});
					const B = async (U) => {
						k.update(() => {
							if (U.type.case === "staticheading") return;
							const z = (0, f.$createSlashCommandNode)(U.type.command),
								F = (0, a.$createTextNode)(" ");
							(0, a.$getSelection)()?.insertNodes([z, F]),
								T.setCommand(U.type.command);
						});
					};
					return (0, C.createComponent)(c.LexicalTypeaheadMenuPlugin, {
						onQueryChange: N,
						onSelectOption: O,
						triggerFn: R,
						get options() {
							return [...A()].sort((U, z) => z.score - U.score);
						},
						anchorClassName: "lookahead-anchor-element",
						menuRenderFn: I,
						get attachToElement() {
							return P.portalElement;
						},
					});
				}
				const I = (T) => {
					const P = (0, n.$odc)();
					return (0, C.createComponent)(p.$q_b, {
						get show() {
							return T.options.length > 0;
						},
						get anchorElementRef() {
							return T.anchorElementRef;
						},
						get children() {
							const k = y();
							return (
								(0, m.insert)(
									k,
									(0, C.createComponent)(h.For, {
										get each() {
											return T.options;
										},
										children: (L, D) =>
											(0, C.createComponent)($, {
												get index() {
													return D();
												},
												get isSelected() {
													return T.selectedIndex === D();
												},
												onClick: () => {
													T.setHighlightedIndex(D()),
														T.selectOptionAndCleanUp(L);
												},
												onMouseEnter: () => {
													T.setHighlightedIndex(D());
												},
												option: L,
											}),
									}),
								),
								k
							);
						},
					});
				};
			},
		),
		define(
			de[4180],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 9, 309, 36, 27, 2513]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nzc = p);
				const c = (0, t.template)("<div>"),
					n = (0, t.template)('<div class="diff-code-render">');
				function g() {
					let o = "abcdefghijklmnopqrstuvwxyz",
						f = "";
					for (let b = 0; b < 10; b++)
						f += o.charAt(Math.floor(Math.random() * o.length));
					return f;
				}
				function p(o) {
					const f = (0, a.$odc)(),
						[b, s] = (0, m.createSignal)(null),
						[l, y] = (0, m.createSignal)(null),
						$ = (() => {
							const v = c();
							return (
								(0, d.use)(y, v),
								v.style.setProperty("width", "100%"),
								v.style.setProperty("height", "100%"),
								v.style.setProperty("box-sizing", "border-box"),
								v
							);
						})();
					return (
						(0, m.createEffect)(() => {
							if (!b() && l()) {
								const v = f.instantiationService.createInstance(
										u.$3yb,
										l(),
										{
											renderSideBySide: !1,
											readOnly: !0,
											stickyScroll: { enabled: !1 },
											renderIndicators: !1,
											renderMarginRevertIcon: !1,
											renderGutterMenu: !1,
											glyphMargin: !1,
											hideUnchangedRegions: { enabled: !0 },
											disableLayerHinting: !0,
											...o.diffEditorOptions,
											automaticLayout: !0,
											diffAlgorithm: "legacy",
											scrollbar: o.enableScrollOnFocus
												? {
														vertical: "hidden",
														horizontal: "hidden",
														handleMouseWheel: !1,
													}
												: void 0,
										},
										{
											originalEditor: { isSimpleWidget: !0, contributions: [] },
											modifiedEditor: { isSimpleWidget: !0, contributions: [] },
										},
									),
									S =
										f.languageService.createByLanguageNameOrFilepathOrFirstLine(
											o.language,
											null,
											void 0,
										),
									I = f.modelService.createModel(
										o.original,
										S,
										r.URI.parse(`diff-code-render-original-anysphere://${g()}`),
									),
									T = f.modelService.createModel(
										o.modified,
										S,
										r.URI.parse(`diff-code-render-modified-anysphere://${g()}`),
									);
								v.setModel({ original: I, modified: T }),
									o.enableScrollOnFocus &&
										(v.getModifiedEditor().onDidFocusEditorText(() => {
											v.updateOptions({
												scrollbar: {
													vertical: "visible",
													horizontal: "visible",
													handleMouseWheel: !0,
												},
											});
										}),
										v.getModifiedEditor().onDidBlurEditorText(() => {
											v.updateOptions({
												scrollbar: {
													vertical: "hidden",
													horizontal: "hidden",
													handleMouseWheel: !1,
												},
											});
										}),
										v.getModifiedEditor().onKeyDown((D) => {
											D.keyCode === h.KeyCode.Escape &&
												(l()?.focus(),
												v.updateOptions({
													scrollbar: {
														vertical: "hidden",
														horizontal: "hidden",
														handleMouseWheel: !1,
													},
												}));
										})),
									s(v);
								const P = o.startLine,
									k = o.endLine,
									L = o.shouldNotCollapse;
								v.waitForDiff().then(() => {
									L || v.collapseAllUnchangedRegions(),
										P
											? v.revealRangeAtTop({
													startLineNumber: P,
													endLineNumber: k ?? P,
													startColumn: 1,
													endColumn: 1,
												})
											: v.revealFirstDiff(),
										v.layout();
								}),
									o.editorCallback?.({
										editor: v,
										modifiedModel: T,
										originalModel: I,
									});
							} else if (b()) {
								const v = b(),
									S = v.getOriginalEditor().getModel(),
									I = v.getModifiedEditor().getModel();
								if (S && I) {
									S.setValue(o.original), I.setValue(o.modified);
									const T =
										f.languageService.createByLanguageNameOrFilepathOrFirstLine(
											o.language,
											null,
											void 0,
										);
									S.setLanguage(T), I.setLanguage(T);
									const P = o.shouldNotCollapse;
									v.waitForDiff().then(() => {
										P || v.collapseAllUnchangedRegions(), v.layout();
									});
								}
							}
						}),
						(0, m.onCleanup)(() => {
							const v = b();
							v &&
								(v.dispose(),
								v.getOriginalEditor().getModel()?.dispose(),
								v.getModifiedEditor().getModel()?.dispose());
						}),
						(() => {
							const v = n();
							return (
								(0, C.insert)(v, $),
								(0, E.effect)(
									(S) => {
										const I = o.style,
											T = o.enableScrollOnFocus ? 0 : void 0;
										return (
											(S._v$ = (0, w.style)(v, I, S._v$)),
											T !== S._v$2 &&
												(0, i.setAttribute)(v, "tabindex", (S._v$2 = T)),
											S
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								v
							);
						})()
					);
				}
			},
		),
		define(
			de[4181],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 9, 312, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hdc = f);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)("<span>"),
					p = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					o = (0, t.template)(
						'<div><div class="input-box-code-selection"><div>',
					);
				function f(b) {
					const s = (0, c.$odc)(),
						l = (0, m.createMemo)(() => b.collapsedLines ?? 12),
						y = (0, m.createMemo)(() => b.expandedLines ?? 24),
						[$, v] = (0, m.createSignal)(!0),
						[S, I] = (0, m.createSignal)(!1),
						[T, P] = (0, m.createSignal)(0),
						k = (() => {
							const D = n();
							return (
								D.style.setProperty("width", "100%"),
								D.style.setProperty("height", "100%"),
								D.style.setProperty("box-sizing", "border-box"),
								D
							);
						})(),
						L = s.instantiationService.createInstance(
							h.$X0b,
							k,
							h.$X0b.getEditorOptions(s.configurationService),
							{},
						);
					return (
						(0, m.createEffect)(() => {
							if (b.content.case === "model") {
								L.setModel(b.content.model),
									b.content.model.getLineCount() > y() && I(!0),
									P(b.content.model.getLineCount());
								return;
							} else if (b.content.case === "file") {
								const O = s.textModelService.createModelReference(
									b.content.uri,
								);
								O.then((B) => {
									L.setModel(B.object.textEditorModel),
										B.object.textEditorModel.getLineCount() > y() && I(!0),
										P(B.object.textEditorModel.getLineCount());
								}),
									(0, m.onCleanup)(() => {
										O.then((B) => {
											B.dispose();
										});
									});
								return;
							}
							const D = s.languageService.createByFilepathOrFirstLine(
								b.content.uri,
								b.content.value.split(`
`)[0],
							);
							function M() {
								let O = "abcdefghijklmnopqrstuvwxyz",
									B = "";
								for (let U = 0; U < 10; U++)
									B += O.charAt(Math.floor(Math.random() * O.length));
								return B;
							}
							let N = a.URI.parse(`aichat-code-block-anysphere://${M()}`);
							const A = b.content.value
								.split(`
`)
								.slice(1, -1);
							A.length > y() && I(!0), P(A.length);
							const R = s.modelService.createModel(
								A.join(`
`),
								D,
								N,
								!1,
							);
							L.setModel(R),
								(0, m.onCleanup)(() => {
									R.dispose();
								});
						}),
						(0, m.createEffect)(() => {
							$()
								? S() &&
									(L.updateOptions({
										scrollbar: {
											vertical: "hidden",
											verticalScrollbarSize: 0,
											horizontal: "hidden",
											handleMouseWheel: !1,
											alwaysConsumeMouseWheel: !1,
											horizontalScrollbarSize: 0,
										},
									}),
									L.setScrollTop(0),
									L.setScrollLeft(0))
								: L.updateOptions({
										scrollbar: {
											vertical: "auto",
											verticalScrollbarSize: 10,
											horizontal: "auto",
											handleMouseWheel: !0,
											alwaysConsumeMouseWheel: !0,
											horizontalScrollbarSize: 10,
										},
									});
						}),
						(0, m.onCleanup)(() => {
							L.dispose(), k.remove();
						}),
						(() => {
							const D = o(),
								M = D.firstChild,
								N = M.firstChild;
							return (
								D.style.setProperty("margin-bottom", "0.5rem"),
								N.style.setProperty("white-space", "pre"),
								N.style.setProperty("padding", "0.75rem"),
								(0, w.insert)(N, k, null),
								(0, w.insert)(
									N,
									(0, E.createComponent)(m.Show, {
										get when() {
											return S();
										},
										get children() {
											const A = p();
											return (
												A.addEventListener("click", () => {
													v(!$());
												}),
												(0, w.insert)(
													A,
													(0, E.createComponent)(m.Switch, {
														get children() {
															return [
																(0, E.createComponent)(m.Match, {
																	get when() {
																		return $();
																	},
																	get children() {
																		const R = g();
																		return (
																			(0, d.effect)(() =>
																				(0, C.className)(
																					R,
																					u.ThemeIcon.asClassName(
																						r.$ak.chevronDown,
																					),
																				),
																			),
																			R
																		);
																	},
																}),
																(0, E.createComponent)(m.Match, {
																	get when() {
																		return !$();
																	},
																	get children() {
																		const R = g();
																		return (
																			(0, d.effect)(() =>
																				(0, C.className)(
																					R,
																					u.ThemeIcon.asClassName(
																						r.$ak.chevronUp,
																					),
																				),
																			),
																			R
																		);
																	},
																}),
															];
														},
													}),
												),
												A
											);
										},
									}),
									null,
								),
								(0, d.effect)(
									(A) => {
										const R = {
												position: "relative",
												border: "1px solid var(--vscode-editorWidget-border)",
												overflow: "hidden",
												...b.style,
											},
											O = S()
												? $()
													? `${19 * l()}px`
													: `${19 * y()}px`
												: `${19 * T() + 10}px`,
											B = S() ? "1.5rem" : "0rem";
										return (
											(A._v$ = (0, i.style)(M, R, A._v$)),
											O !== A._v$2 &&
												((A._v$2 = O) != null
													? N.style.setProperty("height", O)
													: N.style.removeProperty("height")),
											B !== A._v$3 &&
												((A._v$3 = B) != null
													? N.style.setProperty("padding-bottom", B)
													: N.style.removeProperty("padding-bottom")),
											A
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								D
							);
						})()
					);
				}
			},
		),
		define(
			de[1070],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 19, 36, 156, 564, 818, 2515]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1cc = s);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)('<span class="context-list-item-lines">'),
					f = (0, t.template)('<span class="context-list-item-description">'),
					b = (0, t.template)(
						'<div class="context-list-item" role="button" tabindex="0"><div class="context-list-item-content"><span class="context-list-item-title"></span><span class="context-list-item-subtitle"><span>',
					);
				function s(l) {
					const y = (0, h.$odc)(),
						$ = (v) => (S) => {
							S.preventDefault(), v.onClick?.(v);
						};
					return (() => {
						const v = p(),
							S = l.setContainerRef;
						return (
							typeof S == "function"
								? (0, r.use)(S, v)
								: (l.setContainerRef = v),
							(0, d.insert)(
								v,
								(0, m.createComponent)(u.For, {
									get each() {
										return l.files;
									},
									children: (I) =>
										(() => {
											const T = b(),
												P = T.firstChild,
												k = P.firstChild,
												L = k.nextSibling,
												D = L.firstChild;
											return (
												(0, i.addEventListener)(T, "click", $(I)),
												(0, d.insert)(
													T,
													(0, m.createComponent)(c.$k$b, {
														get fileName() {
															return (0, a.$kh)(I.uri);
														},
														get fileKind() {
															return I.fileKind;
														},
														get workspaceContextService() {
															return y.workspaceContextService;
														},
														get modelService() {
															return y.modelService;
														},
														get languageService() {
															return y.languageService;
														},
														get height() {
															return l.variant === "compact" ? 14 : 16;
														},
													}),
													P,
												),
												k.style.setProperty("flex-shrink", "1"),
												(0, d.insert)(
													k,
													(0, m.createComponent)(g.$tbc, {
														get text() {
															return (0, a.$kh)(I.uri);
														},
														get highlights() {
															return I.titleMatches || [];
														},
													}),
												),
												L.style.setProperty("flex-basis", "0"),
												L.style.setProperty("flex-grow", "1"),
												D.style.setProperty("direction", "ltr"),
												D.style.setProperty("unicode-bidi", "embed"),
												(0, d.insert)(
													D,
													(0, m.createComponent)(u.Show, {
														get when() {
															return I.scope !== void 0;
														},
														get fallback() {
															return (0, m.createComponent)(g.$tbc, {
																get text() {
																	return y.workspaceContextService.asRelativePath(
																		(0, a.$mh)(I.uri),
																	);
																},
																get highlights() {
																	return I.subtitleMatches || [];
																},
															});
														},
														get children() {
															return (0, m.createComponent)(g.$tbc, {
																get text() {
																	return I.scope;
																},
																get highlights() {
																	return I.subtitleMatches || [];
																},
															});
														},
													}),
													null,
												),
												(0, d.insert)(
													D,
													(0, m.createComponent)(u.Show, {
														get when() {
															return I.selection;
														},
														get children() {
															const M = o();
															return (
																(0, d.insert)(
																	M,
																	() =>
																		`L${I.selection.startLineNumber}-${I.selection.endLineNumber}`,
																),
																M
															);
														},
													}),
													null,
												),
												(0, d.insert)(
													D,
													(0, m.createComponent)(u.Show, {
														get when() {
															return I.description;
														},
														get children() {
															const M = f();
															return (0, d.insert)(M, () => I.description), M;
														},
													}),
													null,
												),
												(0, d.insert)(
													P,
													(0, m.createComponent)(u.Show, {
														get when() {
															return I.badge || I.score !== void 0;
														},
														get children() {
															return (0, m.createComponent)(n.$nac, {
																get text() {
																	return I.badge || I.score.toFixed(2);
																},
																type: "subtle",
																size: "small",
																style: { "flex-shrink": 0 },
															});
														},
													}),
													null,
												),
												T
											);
										})(),
								}),
							),
							(0, C.effect)(
								(I) => {
									const T = `context-list ${l.variant === "compact" ? "context-list--compact" : ""}`,
										P = { "flex-shrink": 0, ...l.style };
									return (
										T !== I._v$ && (0, E.className)(v, (I._v$ = T)),
										(I._v$2 = (0, w.style)(v, P, I._v$2)),
										I
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							v
						);
					})();
				}
			},
		),
		