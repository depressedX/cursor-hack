import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import './interactiveCommon.js';
define(
			de[1858],
			he([1, 0, 7, 127, 460, 6, 3, 12, 56, 38, 4, 10, 39, 130, 986]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*aria*/,
 w /*keybindingLabel*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*platform*/,
 m /*editorBrowser*/,
 r /*editorOptions*/,
 u /*nls*/,
 a /*configuration*/,
 h /*keybinding*/,
 c /*accessibilityConfiguration*/,
 n /*interactiveCommon*/) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sJc = void 0),
					(t = mt(t));
				let p = class extends C.$1c {
					static {
						g = this;
					}
					static {
						this.a = "replInput.widget.emptyHint";
					}
					constructor(f, b, s) {
						super(),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.c = ""),
							this.D(
								this.f.onDidChangeConfiguration((y) => {
									this.b &&
										y.hasChanged(r.EditorOption.fontInfo) &&
										this.f.applyFontInfo(this.b);
								}),
							);
						const l = E.Event.debounce(
							this.f.onDidFocusEditorText,
							() => {},
							500,
						);
						this.D(
							l(() => {
								this.f.hasTextFocus() &&
									this.c &&
									b.getValue(c.AccessibilityVerbositySettingId.ReplInputHint) &&
									(0, i.$pib)(this.c);
							}),
						),
							this.D(
								b.onDidChangeConfiguration((y) => {
									y.affectsConfiguration(n.$rJc.executeWithShiftEnter) &&
										this.j();
								}),
							),
							this.f.addContentWidget(this);
					}
					getId() {
						return g.a;
					}
					getPosition() {
						return {
							position: { lineNumber: 1, column: 1 },
							preference: [m.ContentWidgetPositionPreference.EXACT],
						};
					}
					getDomNode() {
						return (
							this.b ||
								((this.b = t.$(".empty-editor-hint")),
								(this.b.style.width = "max-content"),
								(this.b.style.paddingLeft = "4px"),
								this.j(),
								this.D(
									t.$0fb(this.b, "click", () => {
										this.f.focus();
									}),
								),
								this.f.applyFontInfo(this.b)),
							this.b
						);
					}
					j() {
						if (!this.b) return;
						for (; this.b.firstChild; ) this.b.removeChild(this.b.firstChild);
						const f = t.$("div.empty-hint-text");
						(f.style.cursor = "text"), (f.style.whiteSpace = "nowrap");
						const b = this.m(),
							s = b?.getLabel();
						if (b && s) {
							const l = (0, u.localize)(7170, null, s),
								[y, $] = l.split(s).map((S) => {
									const I = t.$("span", void 0, S);
									return (I.style.fontStyle = "italic"), I;
								});
							f.appendChild(y);
							const v = new w.$7ob(f, d.OS);
							v.set(b),
								(v.element.style.width = "min-content"),
								(v.element.style.display = "inline"),
								f.appendChild($),
								this.b.append(f),
								(this.c = l.concat(
									(0, u.localize)(
										7171,
										null,
										c.AccessibilityVerbositySettingId.ReplInputHint,
									),
								));
						}
					}
					m() {
						const f = this.h.lookupKeybindings("interactive.execute"),
							b = this.g.getValue(n.$rJc.executeWithShiftEnter),
							s = (l, y = "") => {
								const $ = l.getDispatchChords(),
									v = y + "Enter",
									S = y + "[Enter]";
								return $.length === 1 && ($[0] === v || $[0] === S);
							};
						if (b) {
							const l = f.find((y) => s(y, "shift+"));
							if (l) return l;
						} else {
							let l = f.find((y) => s(y));
							if (
								l ||
								((l = this.h
									.lookupKeybindings("python.execInREPLEnter")
									.find((y) => s(y))),
								l)
							)
								return l;
						}
						return f?.[0];
					}
					dispose() {
						super.dispose(), this.f.removeContentWidget(this);
					}
				};
				(e.$sJc = p), (e.$sJc = p = g = Ne([j(1, a.$gj), j(2, h.$uZ)], p));
			},
		),
		