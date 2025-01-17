import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/base.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../common/editorContextKeys.js';
import './consts.js';
import './inlineEditsController.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[2932],
			he([1, 0, 14, 27, 77, 407, 46, 281, 71, 1604, 1694, 4, 11, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4jc = e.$3jc = e.$2jc = e.$1jc = e.$Zjc = void 0),
					(a = mt(a));
				function n(s) {
					return { label: s.value, alias: s.original };
				}
				class g extends C.$itb {
					static {
						this.ID = r.$Rjc;
					}
					constructor() {
						super({
							id: g.ID,
							...n(a.localize2(1262, "Show Next Inline Edit")),
							precondition: c.$Kj.and(m.EditorContextKeys.writable, r.$Sjc),
							kbOpts: {
								weight: 100,
								primary: i.KeyMod.Alt | i.KeyCode.BracketRight,
							},
						});
					}
					async run(l, y) {
						u.$Yjc.get(y)?.model.get()?.next();
					}
				}
				e.$Zjc = g;
				class p extends C.$itb {
					static {
						this.ID = r.$Qjc;
					}
					constructor() {
						super({
							id: p.ID,
							...n(a.localize2(1263, "Show Previous Inline Edit")),
							precondition: c.$Kj.and(m.EditorContextKeys.writable, r.$Sjc),
							kbOpts: {
								weight: 100,
								primary: i.KeyMod.Alt | i.KeyCode.BracketLeft,
							},
						});
					}
					async run(l, y) {
						u.$Yjc.get(y)?.model.get()?.previous();
					}
				}
				e.$1jc = p;
				class o extends C.$itb {
					constructor() {
						super({
							id: "editor.action.inlineEdits.trigger",
							...n(a.localize2(1264, "Trigger Inline Edit")),
							precondition: m.EditorContextKeys.writable,
						});
					}
					async run(l, y) {
						const $ = u.$Yjc.get(y);
						await (0, E.$9d)(async (v) => {
							await $?.model.get()?.triggerExplicitly(v);
						});
					}
				}
				e.$2jc = o;
				class f extends C.$itb {
					constructor() {
						super({
							id: r.$Pjc,
							...n(a.localize2(1265, "Accept Inline Edit")),
							precondition: r.$Sjc,
							menuOpts: {
								menuId: h.$XX.InlineEditsActions,
								title: a.localize(1261, null),
								group: "primary",
								order: 1,
								icon: t.$ak.check,
							},
							kbOpts: {
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Space,
								weight: 2e4,
								kbExpr: r.$Sjc,
							},
						});
					}
					async run(l, y) {
						y instanceof d.$wDb && (y = y.getParentEditor());
						const $ = u.$Yjc.get(y);
						$ && ($.model.get()?.accept($.editor), $.editor.focus());
					}
				}
				e.$3jc = f;
				class b extends C.$itb {
					static {
						this.ID = "editor.action.inlineEdits.hide";
					}
					constructor() {
						super({
							id: b.ID,
							...n(a.localize2(1266, "Hide Inline Edit")),
							precondition: r.$Sjc,
							kbOpts: { weight: 100, primary: i.KeyCode.Escape },
						});
					}
					async run(l, y) {
						const $ = u.$Yjc.get(y);
						(0, w.transaction)((v) => {
							$?.model.get()?.stop(v);
						});
					}
				}
				e.$4jc = b;
			},
		),
		