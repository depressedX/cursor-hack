import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/keyCodes.js';
import '../../editorState/browser/editorState.js';
import '../../../browser/editorExtensions.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/editorContextKeys.js';
import '../../../common/model/textModel.js';
import '../../../common/services/editorWorker.js';
import '../../../../nls.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './inPlaceReplaceCommand.js';
import '../../../../css!vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js';
define(
			de[2913],
			he([1, 0, 15, 29, 27, 439, 46, 17, 104, 71, 122, 200, 4, 43, 2586, 2302]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }), (h = mt(h));
				let p = class {
					static {
						g = this;
					}
					static {
						this.ID = "editor.contrib.inPlaceReplaceController";
					}
					static get(s) {
						return s.getContribution(g.ID);
					}
					static {
						this.a = u.$eY.register({
							description: "in-place-replace",
							className: "valueSetReplacement",
						});
					}
					constructor(s, l) {
						(this.b = s),
							(this.c = l),
							(this.d = this.b.createDecorationsCollection());
					}
					dispose() {}
					run(s, l) {
						this.e?.cancel();
						const y = this.b.getSelection(),
							$ = this.b.getModel();
						if (!$ || !y) return;
						let v = y;
						if (v.startLineNumber !== v.endLineNumber) return;
						const S = new E.$Mzb(
								this.b,
								E.CodeEditorStateFlag.Value | E.CodeEditorStateFlag.Position,
							),
							I = $.uri;
						return this.c.canNavigateValueSet(I)
							? ((this.e = (0, t.$zh)((T) => this.c.navigateValueSet(I, v, l))),
								this.e
									.then((T) => {
										if (!T || !T.range || !T.value || !S.validate(this.b))
											return;
										const P = d.$iL.lift(T.range);
										let k = T.range;
										const L = T.value.length - (v.endColumn - v.startColumn);
										(k = {
											startLineNumber: k.startLineNumber,
											startColumn: k.startColumn,
											endLineNumber: k.endLineNumber,
											endColumn: k.startColumn + T.value.length,
										}),
											L > 1 &&
												(v = new m.$kL(
													v.startLineNumber,
													v.startColumn,
													v.endLineNumber,
													v.endColumn + L - 1,
												));
										const D = new n.$Nic(P, v, T.value);
										this.b.pushUndoStop(),
											this.b.executeCommand(s, D),
											this.b.pushUndoStop(),
											this.d.set([{ range: k, options: g.a }]),
											this.f?.cancel(),
											(this.f = (0, t.$Nh)(350)),
											this.f.then(() => this.d.clear()).catch(i.$4);
									})
									.catch(i.$4))
							: Promise.resolve(void 0);
					}
				};
				p = g = Ne([j(1, a.$Cxb)], p);
				class o extends C.$itb {
					constructor() {
						super({
							id: "editor.action.inPlaceReplace.up",
							label: h.localize(1269, null),
							alias: "Replace with Previous Value",
							precondition: r.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: r.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.Comma,
								weight: c.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(s, l) {
						const y = p.get(l);
						return y ? y.run(this.id, !1) : Promise.resolve(void 0);
					}
				}
				class f extends C.$itb {
					constructor() {
						super({
							id: "editor.action.inPlaceReplace.down",
							label: h.localize(1270, null),
							alias: "Replace with Next Value",
							precondition: r.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: r.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.Period,
								weight: c.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(s, l) {
						const y = p.get(l);
						return y ? y.run(this.id, !0) : Promise.resolve(void 0);
					}
				}
				(0, C.$qtb)(p.ID, p, C.EditorContributionInstantiation.Lazy),
					(0, C.$ntb)(o),
					(0, C.$ntb)(f);
			},
		),
		