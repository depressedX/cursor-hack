import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/getIconClasses.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../ui/browser/widgets/codeBlock.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/selectedContext/browser/utils.js';
define(
			de[3615],
			he([
				1, 0, 7, 3, 9, 56, 38, 17, 61, 64, 252, 67, 42, 10, 22, 5, 312, 66, 18,
				299,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*editorBrowser*/,
 C /*editorOptions*/,
 d /*range*/,
 m /*language*/,
 r /*model*/,
 u /*getIconClasses*/,
 a /*model*/,
 h /*resolverService*/,
 c /*configuration*/,
 n /*files*/,
 g /*instantiation*/,
 p /*codeBlock*/,
 o /*editorGroupsService*/,
 f /*editorService*/,
 b /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ffd = void 0),
					(t = mt(t));
				let s = class extends i.$1c {
					constructor(y, $, v, S, I, T, P, k, L, D, M) {
						super(),
							(this.j = y),
							(this.m = S),
							(this.n = I),
							(this.q = T),
							(this.r = P),
							(this.s = k),
							(this.t = L),
							(this.u = D),
							(this.w = M),
							(this.f = !1),
							(this.allowEditorOverflow = !0),
							console.log(
								"[CURSOR PREDICTION] Creating non-visible editor indicator",
								$.toString(),
							),
							(this.g = $),
							(this.h = v),
							(this.a = t.$(".cursor-prediction-non-visible-editor-indicator")),
							(this.a.style.position = "absolute"),
							(this.a.style.right = "20px"),
							(this.a.style.bottom = "20px"),
							(this.a.style.zIndex = "1000"),
							(this.a.style.width = "400px"),
							(this.a.style.maxWidth = "40%"),
							(this.a.style.backgroundColor =
								"var(--vscode-editor-background)"),
							(this.a.style.border =
								"1px solid var(--vscode-editorWarning-foreground)"),
							(this.a.style.borderRadius = "4px"),
							(this.a.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)"),
							(this.a.style.overflow = "hidden"),
							(this.b = t.$fhb(this.a, t.$(".indicator"))),
							(this.b.style.display = "flex"),
							(this.b.style.alignItems = "center"),
							(this.b.style.padding = "2px 4px"),
							(this.b.style.borderBottom =
								"1px solid var(--vscode-editorWarning-foreground)"),
							(this.b.style.cursor = "pointer"),
							(this.b.style.minWidth = "0"),
							(this.b.style.flexShrink = "1"),
							(this.b.style.overflow = "hidden"),
							(this.b.style.textOverflow = "ellipsis"),
							(this.b.style.whiteSpace = "nowrap");
						const N = t.$fhb(this.b, t.$(".icon"));
						(N.textContent = "\u21E5"),
							(N.style.marginRight = "4px"),
							(N.style.fontSize = "16px");
						const A = t.$fhb(this.b, t.$(".text"));
						(A.style.fontSize = "12px"),
							(A.style.overflow = "hidden"),
							(A.style.textOverflow = "ellipsis"),
							(A.style.whiteSpace = "nowrap"),
							(A.style.minWidth = "0"),
							(A.style.flexGrow = "1"),
							(A.textContent = "Jump to prediction");
						const R = t.$fhb(this.a, t.$(".code-block-container"));
						(this.c = this.n.createInstance(
							p.$X0b,
							R,
							{ ...p.$X0b.getEditorOptions(this.m), disableLayerHinting: !0 },
							{ overwriteIsSimpleWidget: !0 },
						)),
							this.D(t.$0fb(this.b, "click", () => this.z())),
							this.j.addOverlayWidget(this),
							this.y();
					}
					updateContent(y, $) {
						(this.g = y), (this.h = $), this.y();
					}
					async y() {
						console.log(
							"[CURSOR PREDICTION] Updating code block",
							this.g.toString(),
						);
						const y = await this.t.createModelReference(this.g);
						try {
							const $ = y.object.textEditorModel;
							console.log(
								"[CURSOR PREDICTION] Model retrieved",
								$.uri.toString(),
							);
							const v = $.getValue(),
								S = this.u.createByFilepathOrFirstLine(this.g),
								I = w.URI.parse(`cursor-prediction-preview://${this.g.path}`);
							let T = this.w.getModel(I);
							T
								? (T.setValue(v), T.setLanguage(S.languageId))
								: (T = this.w.createModel(v, S, I, !1)),
								this.c.setModel(T),
								this.c.updateOptions({ readOnly: !0 });
							const P = this.c.getOption(C.EditorOption.lineHeight),
								L = P * 4,
								D = this.c.getDomNode();
							D && (D.style.height = `${L}px`);
							const M = Math.max(this.h - 2, 0) * P;
							this.c.setScrollTop(M);
							const N = [
								{
									range: new d.$iL(this.h, 1, this.h, 1),
									options: {
										isWholeLine: !0,
										className: "cursor-prediction-highlight-line",
										stickiness:
											r.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										description: "cursor-prediction-highlight",
									},
								},
							];
							this.c.deltaDecorations([], N), this.c.layout();
							const A = this.g.path.split("/").pop() || "",
								R = this.b.querySelector(".text");
							if (R) {
								for (; R.firstChild; ) R.removeChild(R.firstChild);
								R.appendChild(document.createTextNode("Tab to "));
								const O = document.createElement("div");
								(O.className = "show-file-icons"),
									(O.style.display = "inline-flex"),
									(O.style.alignItems = "center"),
									(O.style.justifyContent = "center"),
									(O.style.verticalAlign = "text-bottom"),
									(O.style.marginRight = "-2px"),
									(O.style.height = "16px");
								const B = document.createElement("div");
								(B.className = "monaco-icon-label"), (B.style.height = "100%");
								const U = () => {
									const F = (0, u.$BDb)(
										this.w,
										this.u,
										this.g,
										n.FileKind.FILE,
									);
									B.className = [
										"monaco-icon-label",
										"height-override-important",
									]
										.concat(F)
										.join(" ");
								};
								U();
								const z = setTimeout(() => {
									U();
								}, 3e3);
								this.D({ dispose: () => clearTimeout(z) }),
									O.appendChild(B),
									R.appendChild(O),
									R.appendChild(document.createTextNode(A));
							}
						} catch ($) {
							console.error(
								"[CURSOR PREDICTION] Error updating code block:",
								$,
							);
						} finally {
							y.dispose();
						}
					}
					async z() {
						await (0, b.$0gc)({
							uri: this.g,
							fileService: this.q,
							editorService: this.r,
							editorGroupsService: this.s,
						});
					}
					getId() {
						return "cursor-prediction-non-visible-editor-indicator";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return {
							preference: E.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER,
						};
					}
					dispose() {
						if (this.f) return;
						super.dispose(), this.j.removeOverlayWidget(this);
						const y = this.c.getModel();
						y && y.dispose(), this.c.dispose(), this.a.remove(), (this.f = !0);
					}
				};
				(e.$ffd = s),
					(e.$ffd = s =
						Ne(
							[
								j(3, c.$gj),
								j(4, g.$Li),
								j(5, n.$ll),
								j(6, f.$IY),
								j(7, o.$EY),
								j(8, h.$MO),
								j(9, m.$nM),
								j(10, a.$QO),
							],
							s,
						));
			},
		),
		