import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/keyCodes.js';
import '../../../base/common/platform.js';
import '../../../nls.js';
import '../../contextkey/common/contextkey.js';
import '../../contextkey/common/contextkeys.js';
import '../../keybinding/common/keybindingsRegistry.js';
import './quickInput.js';
import '../common/quickInput.js';
define(
			de[2781],
			he([1, 0, 27, 12, 4, 8, 179, 43, 1189, 63]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const u = {
					weight: d.KeybindingWeight.WorkbenchContrib,
					when: E.$Kj.and(
						E.$Kj.equals(m.$yxc, r.QuickInputType.QuickPick),
						m.$xxc,
					),
					metadata: { description: (0, w.localize)(2048, null) },
				};
				function a(o, f = {}) {
					d.$TX.registerCommandAndKeybindingRule({
						...u,
						...o,
						secondary: c(o.primary, o.secondary ?? [], f),
					});
				}
				const h = i.$m ? t.KeyMod.WinCtrl : t.KeyMod.CtrlCmd;
				function c(o, f, b = {}) {
					return (
						b.withAltMod && f.push(t.KeyMod.Alt + o),
						b.withCtrlMod &&
							(f.push(h + o), b.withAltMod && f.push(t.KeyMod.Alt + h + o)),
						b.withCmdMod &&
							i.$m &&
							(f.push(t.KeyMod.CtrlCmd + o),
							b.withCtrlMod && f.push(t.KeyMod.CtrlCmd + t.KeyMod.WinCtrl + o),
							b.withAltMod &&
								(f.push(t.KeyMod.CtrlCmd + t.KeyMod.Alt + o),
								b.withCtrlMod &&
									f.push(
										t.KeyMod.CtrlCmd + t.KeyMod.Alt + t.KeyMod.WinCtrl + o,
									))),
						f
					);
				}
				function n(o, f) {
					return (b) => {
						const s = b.get(r.$DJ).currentQuickInput;
						if (s) return f && s.quickNavigate ? s.focus(f) : s.focus(o);
					};
				}
				a(
					{
						id: "quickInput.pageNext",
						primary: t.KeyCode.PageDown,
						handler: n(r.QuickPickFocus.NextPage),
					},
					{ withAltMod: !0, withCtrlMod: !0, withCmdMod: !0 },
				),
					a(
						{
							id: "quickInput.pagePrevious",
							primary: t.KeyCode.PageUp,
							handler: n(r.QuickPickFocus.PreviousPage),
						},
						{ withAltMod: !0, withCtrlMod: !0, withCmdMod: !0 },
					),
					a(
						{
							id: "quickInput.first",
							primary: h + t.KeyCode.Home,
							handler: n(r.QuickPickFocus.First),
						},
						{ withAltMod: !0, withCmdMod: !0 },
					),
					a(
						{
							id: "quickInput.last",
							primary: h + t.KeyCode.End,
							handler: n(r.QuickPickFocus.Last),
						},
						{ withAltMod: !0, withCmdMod: !0 },
					),
					a(
						{
							id: "quickInput.next",
							primary: t.KeyCode.DownArrow,
							handler: n(r.QuickPickFocus.Next),
						},
						{ withCtrlMod: !0 },
					),
					a(
						{
							id: "quickInput.previous",
							primary: t.KeyCode.UpArrow,
							handler: n(r.QuickPickFocus.Previous),
						},
						{ withCtrlMod: !0 },
					);
				const g = (0, w.localize)(2049, null),
					p = (0, w.localize)(2050, null);
				i.$m
					? (a({
							id: "quickInput.nextSeparatorWithQuickAccessFallback",
							primary: t.KeyMod.CtrlCmd + t.KeyCode.DownArrow,
							handler: n(r.QuickPickFocus.NextSeparator, r.QuickPickFocus.Next),
							metadata: { description: g },
						}),
						a(
							{
								id: "quickInput.nextSeparator",
								primary: t.KeyMod.CtrlCmd + t.KeyMod.Alt + t.KeyCode.DownArrow,
								secondary: [
									t.KeyMod.CtrlCmd + t.KeyMod.WinCtrl + t.KeyCode.DownArrow,
								],
								handler: n(r.QuickPickFocus.NextSeparator),
							},
							{ withCtrlMod: !0 },
						),
						a({
							id: "quickInput.previousSeparatorWithQuickAccessFallback",
							primary: t.KeyMod.CtrlCmd + t.KeyCode.UpArrow,
							handler: n(
								r.QuickPickFocus.PreviousSeparator,
								r.QuickPickFocus.Previous,
							),
							metadata: { description: p },
						}),
						a(
							{
								id: "quickInput.previousSeparator",
								primary: t.KeyMod.CtrlCmd + t.KeyMod.Alt + t.KeyCode.UpArrow,
								secondary: [
									t.KeyMod.CtrlCmd + t.KeyMod.WinCtrl + t.KeyCode.UpArrow,
								],
								handler: n(r.QuickPickFocus.PreviousSeparator),
							},
							{ withCtrlMod: !0 },
						))
					: (a({
							id: "quickInput.nextSeparatorWithQuickAccessFallback",
							primary: t.KeyMod.Alt + t.KeyCode.DownArrow,
							handler: n(r.QuickPickFocus.NextSeparator, r.QuickPickFocus.Next),
							metadata: { description: g },
						}),
						a({
							id: "quickInput.nextSeparator",
							primary: t.KeyMod.CtrlCmd + t.KeyMod.Alt + t.KeyCode.DownArrow,
							handler: n(r.QuickPickFocus.NextSeparator),
						}),
						a({
							id: "quickInput.previousSeparatorWithQuickAccessFallback",
							primary: t.KeyMod.Alt + t.KeyCode.UpArrow,
							handler: n(
								r.QuickPickFocus.PreviousSeparator,
								r.QuickPickFocus.Previous,
							),
							metadata: { description: p },
						}),
						a({
							id: "quickInput.previousSeparator",
							primary: t.KeyMod.CtrlCmd + t.KeyMod.Alt + t.KeyCode.UpArrow,
							handler: n(r.QuickPickFocus.PreviousSeparator),
						})),
					a(
						{
							id: "quickInput.acceptInBackground",
							when: E.$Kj.and(u.when, E.$Kj.or(C.$bMb.negate(), m.$Cxc)),
							primary: t.KeyCode.RightArrow,
							weight: d.KeybindingWeight.WorkbenchContrib + 50,
							handler: (o) => {
								o.get(r.$DJ).currentQuickInput?.accept(!0);
							},
						},
						{ withAltMod: !0, withCtrlMod: !0, withCmdMod: !0 },
					);
			},
		),
		