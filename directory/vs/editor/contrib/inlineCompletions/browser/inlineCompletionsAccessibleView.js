define(
			de[2930],
			he([1, 0, 6, 65, 765, 501, 178, 8, 3]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xhc = void 0);
				class r {
					constructor() {
						(this.type = C.AccessibleViewType.View),
							(this.priority = 95),
							(this.name = "inline-completions"),
							(this.when = d.$Kj.and(w.$_Cb.inlineSuggestionVisible));
					}
					getProvider(h) {
						const c = h.get(i.$dtb),
							n = c.getActiveCodeEditor() || c.getFocusedCodeEditor();
						if (!n) return;
						const g = E.$O1b.get(n)?.model.get();
						if (g?.state.get()) return new u(n, g);
					}
				}
				e.$Xhc = r;
				class u extends m.$1c {
					constructor(h, c) {
						super(),
							(this.b = h),
							(this.c = c),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeContent = this.a.event),
							(this.id = C.AccessibleViewProviderId.InlineCompletions),
							(this.verbositySettingKey =
								"accessibility.verbosity.inlineCompletions"),
							(this.options = {
								language: this.b.getModel()?.getLanguageId() ?? void 0,
								type: C.AccessibleViewType.View,
							});
					}
					provideContent() {
						const h = this.c.state.get();
						if (!h)
							throw new Error(
								"Inline completion is visible but state is not available",
							);
						const c = this.c.textModel.getLineContent(
								h.primaryGhostText.lineNumber,
							),
							n = h.primaryGhostText.renderForScreenReader(c);
						if (!n)
							throw new Error(
								"Inline completion is visible but ghost text is not available",
							);
						return c + n;
					}
					provideNextContent() {
						this.c.next().then(() => this.a.fire());
					}
					providePreviousContent() {
						this.c.previous().then(() => this.a.fire());
					}
					onClose() {
						this.c.stop(), this.b.focus();
					}
				}
			},
		),
		