import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/contrib/inlayHints/browser/inlayHints.js';
import '../../../../editor/contrib/inlayHints/browser/inlayHintsController.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/opener/browser/link.js';
define(
			de[3614],
			he([1, 0, 7, 33, 27, 3, 46, 71, 1177, 1316, 4, 11, 184, 8, 5, 43, 497]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Xc = void 0),
					(t = mt(t));
				let f = class {
					static {
						o = this;
					}
					static {
						this.IsReading = new c.$5j("isReadingLineWithInlayHints", !1, {
							type: "boolean",
							description: (0, u.localize)(7068, null),
						});
					}
					static {
						this.ID = "editor.contrib.InlayHintsAccessibility";
					}
					static get(s) {
						return s.getContribution(o.ID) ?? void 0;
					}
					constructor(s, l, y, $) {
						(this.d = s),
							(this.e = y),
							(this.f = $),
							(this.c = new E.$Zc()),
							(this.a = document.createElement("span")),
							(this.a.style.position = "fixed"),
							(this.a.className = "inlayhint-accessibility-element"),
							(this.a.tabIndex = 0),
							this.a.setAttribute(
								"aria-description",
								(0, u.localize)(7069, null),
							),
							(this.b = o.IsReading.bindTo(l));
					}
					dispose() {
						this.c.dispose(), this.b.reset(), this.a.remove();
					}
					g() {
						t.$9fb(this.a), this.c.clear(), this.b.reset();
					}
					async h(s, l) {
						if (
							(this.c.clear(),
							this.a.isConnected || this.d.getDomNode()?.appendChild(this.a),
							!this.d.hasModel() || !this.a.isConnected)
						) {
							this.b.set(!1);
							return;
						}
						const y = new i.$Ce();
						this.c.add(y);
						for (const T of l) await T.resolve(y.token);
						if (y.token.isCancellationRequested) return;
						const $ = this.d.getModel(),
							v = [];
						let S = 0,
							I = !1;
						for (const T of l) {
							const P = $.getValueInRange({
								startLineNumber: s,
								startColumn: S + 1,
								endLineNumber: s,
								endColumn: T.hint.position.column,
							});
							if (
								(P.length > 0 && (v.push(P), (S = T.hint.position.column - 1)),
								S > 750)
							) {
								v.push("\u2026"), (I = !0);
								break;
							}
							const k = document.createElement("em"),
								{ label: L } = T.hint;
							if (typeof L == "string") k.innerText = L;
							else
								for (const D of L)
									if (D.command) {
										const M = this.f.createInstance(
											p.Link,
											k,
											{
												href: (0, m.$nhc)(D.command),
												label: D.label,
												title: D.command.title,
											},
											void 0,
										);
										this.c.add(M);
									} else k.innerText += D.label;
							v.push(k);
						}
						I ||
							v.push(
								$.getValueInRange({
									startLineNumber: s,
									startColumn: S + 1,
									endLineNumber: s,
									endColumn: Number.MAX_SAFE_INTEGER,
								}),
							),
							t.$hhb(this.a, ...v),
							this.a.focus(),
							this.b.set(!0),
							this.c.add(
								t.$0fb(this.a, "focusout", () => {
									this.g();
								}),
							);
					}
					startInlayHintsReading() {
						if (!this.d.hasModel()) return;
						const s = this.d.getPosition().lineNumber,
							l = r.$rhc.get(this.d)?.getInlayHintsForLine(s);
						!l || l.length === 0
							? this.e.playSignal(h.$Twb.noInlayHints)
							: this.h(s, l);
					}
					stopInlayHintsReading() {
						this.g(), this.d.focus();
					}
				};
				(e.$9Xc = f),
					(e.$9Xc = f = o = Ne([j(1, c.$6j), j(2, h.$Owb), j(3, n.$Li)], f)),
					(0, a.$4X)(
						class extends C.$ktb {
							constructor() {
								super({
									id: "inlayHints.startReadingLineWithHint",
									title: (0, u.localize2)(7070, "Read Line With Inline Hints"),
									precondition: d.EditorContextKeys.hasInlayHintsProvider,
									f1: !0,
								});
							}
							runEditorCommand(s, l) {
								f.get(l)?.startInlayHintsReading();
							}
						},
					),
					(0, a.$4X)(
						class extends C.$ktb {
							constructor() {
								super({
									id: "inlayHints.stopReadingLineWithHint",
									title: (0, u.localize2)(7071, "Stop Inlay Hints Reading"),
									precondition: f.IsReading,
									f1: !0,
									keybinding: {
										weight: g.KeybindingWeight.EditorContrib,
										primary: w.KeyCode.Escape,
									},
								});
							}
							runEditorCommand(s, l) {
								f.get(l)?.stopInlayHintsReading();
							}
						},
					),
					(0, C.$qtb)(f.ID, f, C.EditorContributionInstantiation.Lazy);
			},
		),
		