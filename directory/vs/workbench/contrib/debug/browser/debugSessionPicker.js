import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/lifecycle.js';
import '../common/debug.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../services/views/common/viewsService.js';
import '../../../../platform/commands/common/commands.js';
define(
			de[3817],
			he([1, 0, 4, 132, 3, 112, 63, 89, 31]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WGc = r),
					(t = mt(t));
				async function r(c, n) {
					const g = c.get(C.$DJ),
						p = c.get(E.$75),
						o = c.get(d.$HMb),
						f = c.get(m.$ek),
						b = new w.$Zc(),
						s = g.createQuickPick({ useSeparators: !0 });
					b.add(s),
						(s.matchOnLabel =
							s.matchOnDescription =
							s.matchOnDetail =
							s.sortByLabel =
								!1),
						(s.placeholder = t.localize(5632, null));
					const l = u(s.value, n, p, o, f);
					(s.items = l.picks),
						(s.activeItems = l.activeItems),
						b.add(
							s.onDidChangeValue(async () => {
								s.items = u(s.value, n, p, o, f).picks;
							}),
						),
						b.add(
							s.onDidAccept(() => {
								s.selectedItems[0].accept(), s.hide(), b.dispose();
							}),
						),
						s.show();
				}
				function u(c, n, g, p, o) {
					const f = [],
						b = [],
						s = g.getViewModel().focusedSession,
						l = g.getModel().getSessions(!1),
						y = [];
					l.forEach((v) => {
						v.compact && v.parentSession && b.push(v.parentSession);
					}),
						l.forEach((v) => {
							const S = b.includes(v);
							if (
								(v.parentSession ||
									f.push({ type: "separator", label: S ? v.name : void 0 }),
								!S)
							) {
								const I = h(v, c, g, p, o);
								I && (f.push(I), v.getId() === s?.getId() && y.push(I));
							}
						}),
						f.length && f.push({ type: "separator" });
					const $ = t.localize(5633, null);
					return (
						f.push({
							label: `$(plus) ${$}`,
							ariaLabel: $,
							accept: () => o.executeCommand(n),
						}),
						{ picks: f, activeItems: y }
					);
				}
				function a(c) {
					const n = c.configuration.name.length ? c.configuration.name : c.name,
						g = c.compact ? void 0 : c.parentSession?.configuration.name;
					let p = "",
						o = "";
					return (
						g && ((o = t.localize(5634, null, n, g)), (p = g)),
						{ label: n, description: p, ariaLabel: o }
					);
				}
				function h(c, n, g, p, o) {
					const f = a(c),
						b = (0, i.$Zk)(n, f.label, !0);
					if (b)
						return {
							label: f.label,
							description: f.description,
							ariaLabel: f.ariaLabel,
							highlights: { label: b },
							accept: () => {
								g.focusStackFrame(void 0, void 0, c, { explicit: !0 }),
									p.isViewVisible(E.$Y4) || p.openView(E.$Y4, !0);
							},
						};
				}
			},
		),
		