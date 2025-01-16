define(
			de[1901],
			he([
				1, 0, 3, 65, 38, 761, 31, 8, 5, 39, 1032, 207, 1900, 505, 554, 178, 130,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JXc = void 0),
					(e.$KXc = b),
					(e.$LXc = s);
				class o extends t.$1c {
					constructor() {
						super(),
							this.D(
								u.$spc.addImplementation(90, "editor", async (y) => {
									const $ = y.get(i.$dtb),
										v = y.get(g.$HLb),
										S = y.get(m.$Li),
										I = y.get(C.$ek);
									let T = $.getActiveCodeEditor() || $.getFocusedCodeEditor();
									T ||
										(await I.executeCommand(n.$oVb),
										(T = $.getActiveCodeEditor())),
										v.show(S.createInstance(f, T));
								}),
							);
					}
				}
				e.$JXc = o;
				let f = class extends t.$1c {
					onClose() {
						this.a.focus();
					}
					constructor(y, $, v) {
						super(),
							(this.a = y),
							(this.b = $),
							(this.c = v),
							(this.id = g.AccessibleViewProviderId.Editor),
							(this.options = {
								type: g.AccessibleViewType.Help,
								readMoreUrl: "https://go.microsoft.com/fwlink/?linkid=851010",
							}),
							(this.verbositySettingKey =
								p.AccessibilityVerbositySettingId.Editor);
					}
					provideContent() {
						const y = this.a.getOptions(),
							$ = [];
						y.get(w.EditorOption.inDiffEditor)
							? y.get(w.EditorOption.readOnly)
								? $.push(E.AccessibilityHelpNLS.readonlyDiffEditor)
								: $.push(E.AccessibilityHelpNLS.editableDiffEditor)
							: y.get(w.EditorOption.readOnly)
								? $.push(E.AccessibilityHelpNLS.readonlyEditor)
								: $.push(E.AccessibilityHelpNLS.editableEditor),
							$.push(E.AccessibilityHelpNLS.listSignalSounds),
							$.push(E.AccessibilityHelpNLS.listAlerts);
						const v = s(this.b, this.c);
						v && $.push(v);
						const S = b(this.b, this.c, this.a);
						return (
							S && $.push(S),
							y.get(w.EditorOption.stickyScroll).enabled &&
								$.push(E.AccessibilityHelpNLS.stickScroll),
							y.get(w.EditorOption.tabFocusMode)
								? $.push(E.AccessibilityHelpNLS.tabFocusModeOnMsg)
								: $.push(E.AccessibilityHelpNLS.tabFocusModeOffMsg),
							$.push(E.AccessibilityHelpNLS.codeFolding),
							$.push(E.AccessibilityHelpNLS.intellisense),
							$.push(E.AccessibilityHelpNLS.showOrFocusHover),
							$.push(E.AccessibilityHelpNLS.goToSymbol),
							$.push(E.AccessibilityHelpNLS.startDebugging),
							$.push(E.AccessibilityHelpNLS.setBreakpoint),
							$.push(E.AccessibilityHelpNLS.debugExecuteSelection),
							$.push(E.AccessibilityHelpNLS.addToWatch),
							$.join(`
`)
						);
					}
				};
				f = Ne([j(1, r.$uZ), j(2, d.$6j)], f);
				function b(l, y, $) {
					if (
						y
							.getContext($.getDomNode())
							.getValue(c.CommentContextKeys.activeEditorHasCommentingRange.key)
					)
						return [
							h.CommentAccessibilityHelpNLS.intro,
							h.CommentAccessibilityHelpNLS.addComment,
							h.CommentAccessibilityHelpNLS.nextCommentThread,
							h.CommentAccessibilityHelpNLS.previousCommentThread,
							h.CommentAccessibilityHelpNLS.nextRange,
							h.CommentAccessibilityHelpNLS.previousRange,
						].join(`
`);
				}
				function s(l, y) {
					if (a.$51.getValue(y))
						return [
							E.AccessibilityHelpNLS.quickChat,
							E.AccessibilityHelpNLS.startInlineChat,
						].join(`
`);
				}
			},
		),
		