import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/browser/editorBrowser.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../editor/common/config/editorOptions.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../editor/common/services/model.js';
import '../../../aiApplyToFileActionsService/browser/aiApplyToFileActionsService.js';
import '../../../../../base/common/path.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/partialApplyHover/partialApplyHoverWidget.js';
define(
			de[3987],
			he([1, 0, 7, 6, 3, 56, 31, 39, 45, 5, 38, 61, 67, 852, 54, 25, 2525]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*editorBrowser*/,
 C /*commands*/,
 d /*keybinding*/,
 m /*reactiveStorageService*/,
 r /*instantiation*/,
 u /*editorOptions*/,
 a /*language*/,
 h /*model*/,
 c /*aiApplyToFileActionsService*/,
 n /*path*/,
 g /*workspace*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J$b = void 0),
					(t = mt(t));
				var p;
				(function (s) {
					let l;
					(function ($) {
						($[($.Hidden = 0)] = "Hidden"), ($[($.Showing = 1)] = "Showing");
					})((l = s.Type || (s.Type = {}))),
						(s.Hidden = { type: l.Hidden });
					class y {
						constructor(v, S) {
							(this.editorPosition = v),
								(this.widgetPosition = S),
								(this.type = l.Showing);
						}
					}
					s.Showing = y;
				})(p || (p = {}));
				let o = class extends w.$1c {
					static {
						this.a = [E.ContentWidgetPositionPreference.ABOVE];
					}
					constructor(l, y, $, v, S, I, T, P, k) {
						super(),
							(this.r = l),
							(this.s = y),
							(this.t = $),
							(this.u = v),
							(this.w = S),
							(this.z = I),
							(this.C = T),
							(this.F = P),
							(this.G = k),
							(this.allowEditorOverflow = !0),
							(this.g = this.D(new i.$re())),
							(this.onClick = this.g.event),
							(this.h = p.Hidden),
							(this.isWordWrap = !1),
							(this.q = !1),
							(this.b = t.$("div.partialApplyHoverWidget")),
							(this.f = t.$fhb(this.b, t.$("div.partialApplyButtonContainer"))),
							(this.c = this.H(
								this.f,
								"placeholder.action.id",
								"Placeholder Button",
							)),
							this.D(
								t.$_fb(this.c, async (L) => {
									if ((L.stopPropagation(), !this.m || !this.n)) return;
									const D = this.r.getModel();
									if (!D) return;
									const M = this.r.getSelection();
									if (!M || M.isEmpty()) return;
									const N = {
											startLineNumber: M.startLineNumber,
											endLineNumber: M.endLineNumber,
											startColumn: 1,
											endColumn: D.getLineMaxColumn(M.endLineNumber),
										},
										A = D.getValueInRange(N),
										O = (
											await this.F.getApplyToFileMenuItems_MAY_RUN_LONG(
												this.m,
												A,
												"",
												{ ...this.n, clickedCodeBlockContents: A },
											)
										).find((B) => B.wholeFile);
									if (O) {
										const B = this.z.createById(D.getLanguageId()),
											U = this.C.createModel(A, B);
										O.callback(U), this.D(U);
										return;
									}
								}),
							),
							this.r.addContentWidget(this),
							(this.j = this.D(this.u.createScoped(this))),
							this.D(
								this.u.onChangeEffectManuallyDisposed({
									deps: [() => this.u.nonPersistentStorage.inlineDiffs],
									onChange: () => {
										const L = this.m;
										if (!L) {
											this.q = !1;
											return;
										}
										const D = this.u.nonPersistentStorage.inlineDiffs.some(
											(M) => M.uri.toString() === L.toString(),
										);
										this.q !== D &&
											((this.q = D), D ? this.hide() : this.update());
									},
								}),
							);
					}
					H(l, y, $) {
						const v = t.$fhb(l, t.$("button.partialApplyHoverButton")),
							S = t.$fhb(v, t.$("span"));
						S.textContent = $;
						const I = t.$fhb(v, t.$("span.partialApplyCommandHelpText")),
							P = this.s.lookupKeybinding(y)?.getLabel() || "";
						return (I.textContent = P), v;
					}
					dispose() {
						super.dispose(), this.r.removeContentWidget(this);
					}
					getId() {
						return "PartialApplyHoverWidget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.h.type === p.Type.Showing
							? this.h.widgetPosition
							: null;
					}
					update() {
						if (this.q) return this.hide();
						const l = this.r.getModel(),
							y = this.r.getSelection();
						if (
							!l ||
							!y ||
							y.isEmpty() ||
							(!this.r.hasTextFocus() && !this.r.hasWidgetFocus())
						)
							return this.hide();
						if (
							!(
								y.startLineNumber !== y.endLineNumber ||
								(y.startColumn <=
									l.getLineFirstNonWhitespaceColumn(y.startLineNumber) &&
									y.endColumn >=
										l.getLineLastNonWhitespaceColumn(y.endLineNumber))
							)
						)
							return this.hide();
						const v = y.endLineNumber,
							S = v + 1,
							I = l.getLineLength(v) === 0;
						(this.h = new p.Showing(
							{ lineNumber: v, column: 1 },
							{
								position: { lineNumber: I ? v : S, column: 1 },
								preference: [E.ContentWidgetPositionPreference.EXACT],
							},
						)),
							this.r.layoutContentWidget(this);
					}
					hide() {
						this.h !== p.Hidden &&
							((this.h = p.Hidden), this.r.layoutContentWidget(this));
					}
					updateSlashEditOptions(l) {
						(this.n = l), this.I();
					}
					updateUri(l) {
						(this.m = l), this.I();
					}
					I() {
						if (!this.m) {
							this.c.style.display = "none";
							return;
						}
						this.c.style.display = "block";
						const l = this.c.querySelector("span");
						if (l) {
							for (; l.firstChild; ) l.removeChild(l.firstChild);
							l.appendChild(
								document.createTextNode(
									`Apply to ${(0, n.$sc)(this.G.asRelativePath(this.m))}`,
								),
							);
						}
					}
				};
				(e.$J$b = o),
					(e.$J$b = o =
						Ne(
							[
								j(1, d.$uZ),
								j(2, C.$ek),
								j(3, m.$0zb),
								j(4, r.$Li),
								j(5, a.$nM),
								j(6, h.$QO),
								j(7, c.$R0b),
								j(8, g.$Vi),
							],
							o,
						));
				function f(s) {
					const l = b(s) - 80;
					let $ = s.getOption(u.EditorOption.fontInfo).spaceWidth;
					return Math.floor(l / $);
				}
				function b(s) {
					let l = s.getLayoutInfo(),
						y = l.width - 50,
						$ = l.decorationsWidth + l.verticalScrollbarWidth;
					return y - $;
				}
			},
		),
		