import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lazy.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../search/browser/searchActionsFind.js';
import '../../../terminal/browser/terminal.js';
import '../../../terminal/browser/terminalActions.js';
import '../../../terminal/browser/terminalExtensions.js';
import '../../../terminal/common/terminalContextKey.js';
import './terminalFindWidget.js';
import '../common/terminal.find.js';
import '../../../../../css!vs/workbench/contrib/terminalContrib/find/browser/media/terminalFind.js';
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
		