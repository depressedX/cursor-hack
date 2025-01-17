import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../common/types.js';
import '../../../../nls.js';
import '../../../../platform/actionWidget/browser/actionList.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/browser/ui/codicons/codiconStyles.js';
import '../../symbolIcons/browser/symbolIcons.js';
define(
			de[2834],
			he([1, 0, 14, 291, 4, 1206, 318, 1135, 1205]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vBb = u);
				const d = "Fix with AI",
					m = Object.freeze({
						kind: C.$1L.Empty,
						title: (0, w.localize)(932, null),
					}),
					r = Object.freeze([
						{ kind: i.$GAb.QuickFix, title: (0, w.localize)(933, null) },
						{
							kind: i.$GAb.RefactorExtract,
							title: (0, w.localize)(934, null),
							icon: t.$ak.wrench,
						},
						{
							kind: i.$GAb.RefactorInline,
							title: (0, w.localize)(935, null),
							icon: t.$ak.wrench,
						},
						{
							kind: i.$GAb.RefactorRewrite,
							title: (0, w.localize)(936, null),
							icon: t.$ak.wrench,
						},
						{
							kind: i.$GAb.RefactorMove,
							title: (0, w.localize)(937, null),
							icon: t.$ak.wrench,
						},
						{
							kind: i.$GAb.SurroundWith,
							title: (0, w.localize)(938, null),
							icon: t.$ak.surroundWith,
						},
						{
							kind: i.$GAb.Source,
							title: (0, w.localize)(939, null),
							icon: t.$ak.symbolFile,
						},
						m,
					]);
				function u(a, h, c) {
					if (!h)
						return a.map((o) => ({
							kind: E.ActionListItemKind.Action,
							item: o,
							group: m,
							disabled: !!o.action.disabled,
							label: o.action.disabled || o.action.title,
							canPreview: !!o.action.edit?.edits.length,
						}));
					const n = r.map((o) => ({ group: o, actions: [] }));
					for (const o of a) {
						const f = o.action.kind ? new C.$1L(o.action.kind) : C.$1L.None;
						for (const b of n)
							if (b.group.kind.contains(f)) {
								b.actions.push(o);
								break;
							}
					}
					const g = n.find((o) => o.group.kind === i.$GAb.QuickFix);
					if (g !== void 0) {
						g.actions.sort((f, b) => {
							const s = [d],
								l = s.findIndex(($) => f.action.title.includes($)),
								y = s.findIndex(($) => b.action.title.includes($));
							return l === -1 && y === -1
								? 0
								: l !== -1 && y === -1
									? 1
									: l === -1 && y !== -1
										? -1
										: l - y;
						});
						const o = g.actions.findIndex((f) => f.action.title.trim() === d);
						g.actions = g.actions
							.filter((f, b, s) => f.action.title.trim() !== d || b === o)
							.filter((f) => !f.action.title.includes("using Copilot"));
					}
					const p = [];
					for (const o of n)
						if (o.actions.length) {
							p.push({ kind: E.ActionListItemKind.Header, group: o.group });
							for (const f of o.actions) {
								const b = o.group;
								p.push({
									kind: E.ActionListItemKind.Action,
									item: f,
									group:
										f.action.title.trim() === d
											? { ...o.group, icon: t.$ak.sparkle }
											: o.group,
									label: f.action.title,
									disabled: !!f.action.disabled,
									keybinding: c(f.action),
								});
							}
						}
					return p;
				}
			},
		),
		