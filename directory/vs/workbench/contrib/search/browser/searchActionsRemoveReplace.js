import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/list/browser/listService.js';
import '../../../services/views/common/viewsService.js';
import './searchIcons.js';
import '../common/constants.js';
import './replace.js';
import './searchModel.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import './searchActionsBase.js';
import '../../../../base/common/arrays.js';
define(
			de[4166],
			he([
				1, 0, 4, 10, 93, 89, 561, 377, 804, 405, 18, 68, 8, 11, 43, 27, 483, 24,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*configuration*/,
 w /*listService*/,
 E /*viewsService*/,
 C /*searchIcons*/,
 d /*constants*/,
 m /*replace*/,
 r /*searchModel*/,
 u /*editorService*/,
 a /*uriIdentity*/,
 h /*contextkey*/,
 c /*actions*/,
 n /*keybindingsRegistry*/,
 g /*keyCodes*/,
 p /*searchActionsBase*/,
 o /*arrays*/) {
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
		