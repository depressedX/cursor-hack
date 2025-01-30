import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[2965],
			he([1, 0, 3, 56, 7, 35, 38, 10]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editorBrowser*/,
 w /*dom*/,
 E /*themeService*/,
 C /*editorOptions*/,
 d /*configuration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0ed = void 0),
					(w = mt(w));
				let m = class extends t.$1c {
					static {
						this.a = [i.ContentWidgetPositionPreference.EXACT];
					}
					constructor(u, a, h, c) {
						super(),
							(this.g = u),
							(this.h = a),
							(this.j = c),
							(this.f =
								"cursorPredictionHintLineWidget." +
								Math.random().toString(36).substring(2, 15)),
							(this.b = w.$("span.cursor-prediction-hint-line-widget")),
							(this.c = w.$("span", {}, "\u21E5 tab")),
							w.$fhb(this.b, this.c),
							this.b.classList.add("fancy"),
							(this.c.style.fontSize =
								this.g.getOption(C.EditorOption.fontSize) + "px"),
							this.D(
								this.j.onDidChangeConfiguration((n) => {
									n.affectsConfiguration("editor.fontSize") &&
										(this.c.style.fontSize =
											this.j.getValue("editor.fontSize") + "px");
								}),
							),
							this.g.addContentWidget(this);
					}
					dispose() {
						super.dispose(), this.g.removeContentWidget(this), this.b.remove();
					}
					hide() {
						this.g.removeContentWidget(this);
					}
					show() {
						this.g.addContentWidget(this);
					}
					getId() {
						return this.f;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						const u = this.g.getModel();
						if (u === null) return null;
						const a = u.getDecorationRange(this.h);
						return a === null
							? null
							: {
									position: {
										lineNumber: a.startLineNumber,
										column: a.endColumn,
									},
									preference: [i.ContentWidgetPositionPreference.EXACT],
								};
					}
					updateMarginLeft(u) {}
				};
				(e.$0ed = m), (e.$0ed = m = Ne([j(2, E.$iP), j(3, d.$gj)], m));
			},
		),
		