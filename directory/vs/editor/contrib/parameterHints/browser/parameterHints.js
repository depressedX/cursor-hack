import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorExtensions.js';
import '../../../common/editorContextKeys.js';
import '../../../common/languages.js';
import '../../../common/services/languageFeatures.js';
import './parameterHintsModel.js';
import './provideSignatureHelp.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './parameterHintsWidget.js';
define(
			de[1207],
			he([1, 0, 27, 149, 3, 46, 71, 74, 69, 1608, 1182, 4, 8, 5, 43, 2837]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*lazy*/,
 w /*lifecycle*/,
 E /*editorExtensions*/,
 C /*editorContextKeys*/,
 d /*languages*/,
 m /*languageFeatures*/,
 r /*parameterHintsModel*/,
 u /*provideSignatureHelp*/,
 a /*nls*/,
 h /*contextkey*/,
 c /*instantiation*/,
 n /*keybindingsRegistry*/,
 g /*parameterHintsWidget*/) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0jc = e.$9jc = void 0),
					(d = mt(d)),
					(a = mt(a));
				let o = class extends w.$1c {
					static {
						p = this;
					}
					static {
						this.ID = "editor.controller.parameterHints";
					}
					static get(y) {
						return y.getContribution(p.ID);
					}
					constructor(y, $, v) {
						super(),
							(this.a = y),
							(this.b = this.D(new r.$7jc(y, v.signatureHelpProvider))),
							this.D(
								this.b.onChangedHints((S) => {
									S
										? (this.c.value.show(), this.c.value.render(S))
										: this.c.rawValue?.hide();
								}),
							),
							(this.c = new i.$Y(() =>
								this.D($.createInstance(g.$8jc, this.a, this.b)),
							));
					}
					cancel() {
						this.b.cancel();
					}
					previous() {
						this.c.rawValue?.previous();
					}
					next() {
						this.c.rawValue?.next();
					}
					trigger(y) {
						this.b.trigger(y, 0);
					}
				};
				(e.$9jc = o), (e.$9jc = o = p = Ne([j(1, c.$Li), j(2, m.$k3)], o));
				class f extends E.$itb {
					constructor() {
						super({
							id: "editor.action.triggerParameterHints",
							label: a.localize(1338, null),
							alias: "Trigger Parameter Hints",
							precondition: C.EditorContextKeys.hasSignatureHelpProvider,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Space,
								weight: n.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(y, $) {
						o.get($)?.trigger({
							triggerKind: d.SignatureHelpTriggerKind.Invoke,
						});
					}
				}
				(e.$0jc = f),
					(0, E.$qtb)(
						o.ID,
						o,
						E.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, E.$ntb)(f);
				const b = n.KeybindingWeight.EditorContrib + 75,
					s = E.$htb.bindToContribution(o.get);
				(0, E.$mtb)(
					new s({
						id: "closeParameterHints",
						precondition: u.$5jc.Visible,
						handler: (l) => l.cancel(),
						kbOpts: {
							weight: b,
							kbExpr: C.EditorContextKeys.focus,
							primary: t.KeyCode.Escape,
							secondary: [t.KeyMod.Shift | t.KeyCode.Escape],
						},
					}),
				),
					(0, E.$mtb)(
						new s({
							id: "showPrevParameterHint",
							precondition: h.$Kj.and(
								u.$5jc.Visible,
								u.$5jc.MultipleSignatures,
							),
							handler: (l) => l.previous(),
							kbOpts: {
								weight: b,
								kbExpr: C.EditorContextKeys.focus,
								primary: t.KeyCode.UpArrow,
								secondary: [t.KeyMod.Alt | t.KeyCode.UpArrow],
								mac: {
									primary: t.KeyCode.UpArrow,
									secondary: [
										t.KeyMod.Alt | t.KeyCode.UpArrow,
										t.KeyMod.WinCtrl | t.KeyCode.KeyP,
									],
								},
							},
						}),
					),
					(0, E.$mtb)(
						new s({
							id: "showNextParameterHint",
							precondition: h.$Kj.and(
								u.$5jc.Visible,
								u.$5jc.MultipleSignatures,
							),
							handler: (l) => l.next(),
							kbOpts: {
								weight: b,
								kbExpr: C.EditorContextKeys.focus,
								primary: t.KeyCode.DownArrow,
								secondary: [t.KeyMod.Alt | t.KeyCode.DownArrow],
								mac: {
									primary: t.KeyCode.DownArrow,
									secondary: [
										t.KeyMod.Alt | t.KeyCode.DownArrow,
										t.KeyMod.WinCtrl | t.KeyCode.KeyN,
									],
								},
							},
						}),
					);
			},
		)
