import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/objects.js';
define(de[3105], he([1, 0, 6, 3, 82]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$q4b = void 0);
			class E extends i.$1c {
				static {
					this.a = {
						scrollBeyondLastLine: !1,
						scrollbar: {
							verticalScrollbarSize: 14,
							horizontal: "auto",
							useShadows: !0,
							verticalHasArrows: !1,
							horizontalHasArrows: !1,
							alwaysConsumeMouseWheel: !1,
						},
						renderLineHighlightOnlyWhenFocus: !0,
						overviewRulerLanes: 0,
						lineDecorationsWidth: 0,
						folding: !0,
						fixedOverflowWidgets: !0,
						minimap: { enabled: !1 },
						renderValidationDecorations: "on",
						lineNumbersMinChars: 3,
					};
				}
				get value() {
					return this.f;
				}
				constructor(d, m, r, u) {
					super(),
						(this.notebookEditor = d),
						(this.notebookOptions = m),
						(this.configurationService = r),
						(this.language = u),
						(this.b = this.D(new i.$Zc())),
						(this.c = this.D(new t.$re())),
						(this.onDidChange = this.c.event),
						this.D(
							r.onDidChangeConfiguration((a) => {
								(a.affectsConfiguration("editor") ||
									a.affectsConfiguration("notebook")) &&
									this.g();
							}),
						),
						this.D(
							m.onDidChangeOptions((a) => {
								(a.cellStatusBarVisibility ||
									a.editorTopPadding ||
									a.editorOptionsCustomizations) &&
									this.g();
							}),
						),
						this.D(
							this.notebookEditor.onDidChangeModel(() => {
								this.b.clear(),
									this.notebookEditor.hasModel() &&
										(this.b.add(
											this.notebookEditor.onDidChangeOptions(() => {
												this.g();
											}),
										),
										this.g());
							}),
						),
						this.notebookEditor.hasModel() &&
							this.b.add(
								this.notebookEditor.onDidChangeOptions(() => {
									this.g();
								}),
							),
						(this.f = this.h());
				}
				g() {
					(this.f = this.h()), this.c.fire();
				}
				h() {
					const d = (0, w.$vo)(
							this.configurationService.getValue("editor", {
								overrideIdentifier: this.language,
							}),
						),
						m =
							this.notebookOptions.getDisplayOptions()
								.editorOptionsCustomizations,
						r = {};
					if (m)
						for (const a in m)
							a.indexOf("editor.") === 0 && (r[a.substring(7)] = m[a]);
					return Object.freeze({
						...d,
						...E.a,
						...r,
						padding: { top: 12, bottom: 12 },
						readOnly: this.notebookEditor.isReadOnly,
					});
				}
			}
			e.$q4b = E;
		}),
		