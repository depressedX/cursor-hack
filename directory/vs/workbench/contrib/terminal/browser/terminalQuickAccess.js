define(
			de[1802],
			he([1, 0, 4, 392, 132, 107, 31, 145, 35, 26, 689, 514, 469, 117, 18, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iUc = void 0);
				let o = [],
					f = class extends i.$GLb {
						static {
							p = this;
						}
						static {
							this.PREFIX = "term ";
						}
						constructor(s, l, y, $, v, S, I) {
							super(p.PREFIX, { canAcceptInBackground: !0 }),
								(this.a = s),
								(this.b = l),
								(this.h = y),
								(this.j = $),
								(this.m = v),
								(this.n = S),
								(this.q = I);
						}
						g(s) {
							(o = []), o.push({ type: "separator", label: "panel" });
							const l = this.j.groups;
							for (let S = 0; S < l.length; S++) {
								const I = l[S];
								for (let T = 0; T < I.terminalInstances.length; T++) {
									const P = I.terminalInstances[T],
										k = this.s(P, T, s, {
											groupIndex: S,
											groupSize: I.terminalInstances.length,
										});
									k && o.push(k);
								}
							}
							o.length > 0 && o.push({ type: "separator", label: "editor" });
							const y = this.h.instances;
							for (let S = 0; S < y.length; S++) {
								const I = y[S];
								I.target = c.TerminalLocation.Editor;
								const T = this.s(I, S, s);
								T && o.push(T);
							}
							o.length > 0 && o.push({ type: "separator" });
							const $ = (0, t.localize)(10139, null);
							o.push({
								label: `$(plus) ${$}`,
								ariaLabel: $,
								accept: () => this.m.executeCommand(d.TerminalCommandId.New),
							});
							const v = (0, t.localize)(10140, null);
							return (
								o.push({
									label: `$(plus) ${v}`,
									ariaLabel: v,
									accept: () =>
										this.m.executeCommand(d.TerminalCommandId.NewWithProfile),
								}),
								o
							);
						}
						s(s, l, y, $) {
							const v = this.q.invokeFunction(a.$Tnc, s),
								S = $
									? $.groupSize > 1
										? `${$.groupIndex + 1}.${l + 1}`
										: `${$.groupIndex + 1}`
									: `${l + 1}`,
								I = `$(${v}) ${S}: ${s.title}`,
								T = [],
								P = (0, a.$Onc)(s);
							P && T.push(P);
							const k = (0, a.$Snc)(s, this.n.getColorTheme().type);
							k && T.push(...k);
							const L = (0, w.$Zk)(y, I, !0);
							if (L)
								return {
									label: I,
									description: s.description,
									highlights: { label: L },
									buttons: [
										{
											iconClass: r.ThemeIcon.asClassName(u.$WHb),
											tooltip: (0, t.localize)(10141, null),
										},
										{
											iconClass: r.ThemeIcon.asClassName(u.$XHb),
											tooltip: h.$hUc.kill.value,
										},
									],
									iconClasses: T,
									trigger: (D) => {
										switch (D) {
											case 0:
												return (
													this.m.executeCommand(d.TerminalCommandId.Rename, s),
													i.TriggerAction.NO_ACTION
												);
											case 1:
												return (
													this.b.safeDisposeTerminal(s),
													i.TriggerAction.REMOVE_ITEM
												);
										}
										return i.TriggerAction.NO_ACTION;
									},
									accept: (D, M) => {
										if (s.target === c.TerminalLocation.Editor) {
											const N = this.a.findEditors(s.resource);
											this.h.openEditor(s, { viewColumn: N?.[0].groupId }),
												this.h.setActiveInstance(s);
										} else
											this.j.showPanel(!M.inBackground),
												this.j.setActiveInstance(s);
									},
								};
						}
					};
				(e.$iUc = f),
					(e.$iUc =
						f =
						p =
							Ne(
								[
									j(0, n.$IY),
									j(1, E.$iIb),
									j(2, E.$kIb),
									j(3, E.$lIb),
									j(4, C.$ek),
									j(5, m.$iP),
									j(6, g.$Li),
								],
								f,
							));
			},
		),
		