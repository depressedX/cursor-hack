import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/filters.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/codicons.js';
import '../common/issue.js';
import '../../../../platform/product/common/productService.js';
define(
			de[3310],
			he([1, 0, 392, 8, 11, 132, 4, 31, 53, 26, 14, 376, 62]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bgd = void 0);
				let n = class extends t.$GLb {
					static {
						c = this;
					}
					static {
						this.PREFIX = "issue ";
					}
					constructor(p, o, f, b, s) {
						super(c.PREFIX, { canAcceptInBackground: !0 }),
							(this.h = p),
							(this.j = o),
							(this.m = f),
							(this.n = b),
							(this.q = s);
					}
					g(p) {
						const o = new Array(),
							f = new Array(),
							b = new Set(),
							s = this.q.nameLong,
							l = (0, C.localize)(7215, null),
							y = (0, E.$Zk)(p, s, !0),
							$ = (0, E.$Zk)(p, l, !0);
						return (
							y &&
								o.push({
									label: s,
									ariaLabel: s,
									highlights: { label: y },
									accept: () =>
										this.m.executeCommand(
											"workbench.action.openIssueReporter",
											{ issueSource: a.IssueSource.VSCode },
										),
								}),
							$ &&
								o.push({
									label: l,
									ariaLabel: l,
									highlights: { label: $ },
									accept: () =>
										this.m.executeCommand(
											"workbench.action.openIssueReporter",
											{ issueSource: a.IssueSource.Marketplace },
										),
								}),
							o.push({ type: "separator", label: (0, C.localize)(7216, null) }),
							this.h
								.getMenuActions(w.$XX.IssueReporter, this.j, {
									renderShortTitle: !0,
								})
								.flatMap((S) => S[1])
								.forEach((S) => {
									"source" in S.item &&
										S.item.source &&
										b.add(S.item.source.id);
									const I = this.s(p, S);
									I && f.push(I);
								}),
							this.n.extensions.forEach((S) => {
								if (!S.isBuiltin) {
									const I = this.s(p, void 0, S),
										T = S.identifier.value;
									I && !b.has(T) && f.push(I), b.add(T);
								}
							}),
							f.sort((S, I) => {
								const T = S.label ?? "",
									P = I.label ?? "";
								return T.localeCompare(P);
							}),
							[...o, ...f]
						);
					}
					s(p, o, f) {
						const b = [
							{
								iconClass: r.ThemeIcon.asClassName(u.$ak.info),
								tooltip: (0, C.localize)(7217, null),
							},
						];
						let s, l, y;
						if (o && "source" in o.item && o.item.source)
							(s = o.item.source?.title),
								(l = () => (
									"source" in o.item &&
										o.item.source &&
										this.m.executeCommand("extension.open", o.item.source.id),
									t.TriggerAction.CLOSE_PICKER
								)),
								(y = () => {
									o.run();
								});
						else if (f)
							(s = f.displayName ?? f.name),
								(l = () => (
									this.m.executeCommand("extension.open", f.identifier.value),
									t.TriggerAction.CLOSE_PICKER
								)),
								(y = () => {
									this.m.executeCommand(
										"workbench.action.openIssueReporter",
										f.identifier.value,
									);
								});
						else return;
						const $ = (0, E.$Zk)(p, s, !0);
						if ($)
							return {
								label: s,
								highlights: { label: $ },
								buttons: b,
								trigger: l,
								accept: y,
							};
					}
				};
				(e.$bgd = n),
					(e.$bgd =
						n =
						c =
							Ne(
								[
									j(0, w.$YX),
									j(1, i.$6j),
									j(2, d.$ek),
									j(3, m.$q2),
									j(4, h.$Bk),
								],
								n,
							));
			},
		),
		