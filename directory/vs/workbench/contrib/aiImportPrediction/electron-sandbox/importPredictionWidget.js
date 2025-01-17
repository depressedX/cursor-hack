import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[2973],
			he([1, 0, 3, 56, 7, 35, 51, 47, 10, 38, 45]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hfd = void 0),
					(w = mt(w));
				let h = class extends t.$1c {
					static {
						a = this;
					}
					static {
						this.a = [i.ContentWidgetPositionPreference.EXACT];
					}
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.n = o),
							(this.q = b),
							(this.r = s),
							(this.g = !1),
							(this.f = "importPredictionWidget." + (0, d.$9g)()),
							(this.b = w.$("div.importPredictionWidgetBackground")),
							(this.c = w.$("span", {}, "")),
							w.$fhb(this.b, this.c);
						const l = f.getColorTheme().getColor(C.$8P),
							y = ($) => {
								$ &&
									((this.b.style.backgroundColor = $.toString()),
									(this.b.style.zIndex = "1"),
									(this.b.style.width = "1000px"),
									(this.b.style.marginLeft = "0px"),
									(this.b.style.whiteSpace = "pre"),
									(this.b.style.fontFamily = "monospace"),
									(this.b.style.zIndex = "4"),
									(this.b.className = "import-prediction-widget"),
									this.s(),
									this.b.classList.add("fancy"));
							};
						this.D(
							f.onDidColorThemeChange(($) => {
								const v = $.getColor(C.$8P);
								y(v);
							}),
						),
							y(l),
							(this.c.style.fontSize =
								this.h.getOption(r.EditorOption.fontSize) + "px"),
							this.D(
								this.q.onDidChangeConfiguration(($) => {
									$.affectsConfiguration("editor.fontSize") &&
										(this.c.style.fontSize =
											this.q.getValue("editor.fontSize") + "px");
								}),
							),
							this.h.addContentWidget(this),
							this.D(this.h.onDidChangeModelContent(() => this.t())),
							this.D(this.h.onDidChangeCursorPosition(() => this.t())),
							this.b.addEventListener("mouseenter", () => {
								(this.g = !0), this.s();
							}),
							this.b.addEventListener("mouseleave", () => {
								(this.g = !1), this.s();
							});
					}
					s() {
						const n = this.m.match(
								/import from "([^"]*)"|"from ((?:\w|\.|:)+) import |"import ((?:\w|\.|:)+)"|"import ((?:\w|\.|:)+) as ((?:\w|\.|:)+)"/,
							),
							g = n ? (n[1] ?? n[2] ?? n[3] ?? n[4] ?? "") : "",
							p =
								this.r.applicationUserPersistentStorage
									.howManyTimesHasUserAcceptedImportPrediction ?? 0;
						this.g || p < 3
							? this.n
								? (this.c.textContent = `import ${this.n} (press TAB or ESC)`)
								: g.length > 0
									? (this.c.textContent = `import from "${g}" (press TAB or ESC)`)
									: (this.c.textContent = "import (press TAB or ESC)")
							: g.length > 0
								? (this.c.textContent = `\u2191 import from "${g}"`)
								: (this.c.textContent = "\u2191 import");
					}
					dispose() {
						super.dispose(), this.h.removeContentWidget(this), this.b.remove();
					}
					hide() {
						this.h.removeContentWidget(this);
					}
					show() {
						this.h.addContentWidget(this);
					}
					getId() {
						return this.f;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						const n = this.h.getModel();
						if (n === null) return null;
						const g = n.getDecorationRange(this.j);
						if (
							g === null ||
							(g.startLineNumber === g.endLineNumber &&
								g.startColumn === g.endColumn)
						)
							return this.hide(), null;
						const p = n.getLineMaxColumn(g.startLineNumber);
						return {
							position: { lineNumber: g.startLineNumber, column: p },
							preference: a.a,
						};
					}
					t() {
						this.getPosition() && this.h.layoutContentWidget(this);
					}
				};
				(e.$hfd = h),
					(e.$hfd = h = a = Ne([j(4, E.$iP), j(5, m.$gj), j(6, u.$0zb)], h));
			},
		),
		