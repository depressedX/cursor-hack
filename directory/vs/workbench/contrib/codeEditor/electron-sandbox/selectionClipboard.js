import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/model.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../browser/selectionClipboard.js';
import '../../../common/contributions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/event.js';
import '../../../../base/browser/dom.js';
define(
			de[3418],
			he([
				1, 0, 4, 15, 3, 12, 46, 38, 17, 98, 64, 121, 504, 55, 10, 71, 75, 6, 7,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vfd = void 0),
					(t = mt(t)),
					(E = mt(E));
				let s = class extends w.$1c {
					static {
						b = this;
					}
					static {
						this.a = 65536;
					}
					constructor(v, S) {
						if ((super(), E.$n)) {
							let I = v.getOption(d.EditorOption.selectionClipboard);
							this.D(
								v.onDidChangeConfiguration((P) => {
									P.hasChanged(d.EditorOption.selectionClipboard) &&
										(I = v.getOption(d.EditorOption.selectionClipboard));
								}),
							);
							const T = this.D(
								new i.$Yh(() => {
									if (!v.hasModel()) return;
									const P = v.getModel();
									let k = v.getSelections();
									(k = k.slice(0)), k.sort(m.$iL.compareRangesUsingStarts);
									let L = 0;
									for (const N of k) {
										if (N.isEmpty()) return;
										L += P.getValueLengthInRange(N);
									}
									if (L > b.a) return;
									const D = [];
									for (const N of k)
										D.push(
											P.getValueInRange(N, u.EndOfLinePreference.TextDefined),
										);
									const M = D.join(P.getEOL());
									S.writeText(M, "selection");
								}, 100),
							);
							this.D(
								v.onDidChangeCursorSelection((P) => {
									I && P.source !== "restoreState" && T.schedule();
								}),
							);
						}
					}
					dispose() {
						super.dispose();
					}
				};
				(e.$Vfd = s), (e.$Vfd = s = b = Ne([j(1, a.$Vxb)], s));
				let l = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.linuxSelectionClipboardPastePreventer";
					}
					constructor(v) {
						super(),
							this.D(
								o.Event.runAndSubscribe(
									f.onDidRegisterWindow,
									({ window: S, disposables: I }) => {
										I.add(
											(0, f.$0fb)(S.document, "mouseup", (T) => {
												T.button === 1 &&
													(v.getValue("editor").selectionClipboard ||
														T.preventDefault());
											}),
										);
									},
									{ window: p.$Bfb, disposables: this.B },
								),
							);
					}
				};
				l = Ne([j(0, n.$gj)], l);
				class y extends C.$itb {
					constructor() {
						super({
							id: "editor.action.selectionClipboardPaste",
							label: t.localize(4983, null),
							alias: "Paste Selection Clipboard",
							precondition: g.EditorContextKeys.writable,
						});
					}
					async run(v, S, I) {
						const P = await v.get(a.$Vxb).readText("selection");
						S.trigger("keyboard", r.Handler.Paste, {
							text: P,
							pasteOnNewLine: !1,
							multicursorText: null,
						});
					}
				}
				(0, C.$qtb)(h.$aYb, s, C.EditorContributionInstantiation.Eager),
					E.$n &&
						((0, c.$s6)(l.ID, l, c.WorkbenchPhase.BlockRestore),
						(0, C.$ntb)(y));
			},
		),
		