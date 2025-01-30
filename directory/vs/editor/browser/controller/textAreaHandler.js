import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/browser/browser.js';
import '../../../base/browser/fastDomNode.js';
import '../../../base/common/platform.js';
import '../../../base/common/strings.js';
import '../config/domFontInfo.js';
import './textAreaInput.js';
import './textAreaState.js';
import '../view/viewPart.js';
import '../viewParts/lineNumbers/lineNumbers.js';
import '../viewParts/margin/margin.js';
import '../../common/config/editorOptions.js';
import '../../common/core/wordCharacterClassifier.js';
import '../../common/core/position.js';
import '../../common/core/range.js';
import '../../common/core/selection.js';
import '../../common/editorCommon.js';
import '../../common/model.js';
import '../../common/viewEvents.js';
import '../../../platform/accessibility/common/accessibility.js';
import '../../../base/browser/ui/mouseCursor/mouseCursor.js';
import '../../common/languages.js';
import '../../common/encodedTokenAttributes.js';
import '../../../base/common/color.js';
import '../../../base/common/ime.js';
import '../../../platform/keybinding/common/keybinding.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../css!vs/editor/browser/controller/textAreaHandler.js';
define(
			de[2849],
			he([
				1, 0, 4, 139, 194, 12, 37, 321, 942, 1627, 303, 1664, 1605, 38, 747, 48,
				17, 104, 98, 64, 493, 91, 651, 74, 171, 97, 1502, 39, 5, 2260,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*browser*/,
				w /*fastDomNode*/,
				E /*platform*/,
				C /*strings*/,
				d /*domFontInfo*/,
				m /*textAreaInput*/,
				r /*textAreaState*/,
				u /*viewPart*/,
				a /*lineNumbers*/,
				h /*margin*/,
				c /*editorOptions*/,
				n /*wordCharacterClassifier*/,
				g /*position*/,
				p /*range*/,
				o /*selection*/,
				f /*editorCommon*/,
				b /*model*/,
				s /*viewEvents*/,
				l /*accessibility*/,
				y /*mouseCursor*/,
				$ /*languages*/,
				v /*encodedTokenAttributes*/,
				S /*color*/,
				I /*ime*/,
				T /*keybinding*/,
				P /*instantiation*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cvb = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E)),
					(C = mt(C)),
					(s = mt(s));
				class k {
					constructor(A, R, O, B, U) {
						(this.b = A),
							(this.modelLineNumber = R),
							(this.distanceToModelLineStart = O),
							(this.widthOfHiddenLineTextBefore = B),
							(this.distanceToModelLineEnd = U),
							(this._visibleTextAreaBrand = void 0),
							(this.startPosition = null),
							(this.endPosition = null),
							(this.visibleTextareaStart = null),
							(this.visibleTextareaEnd = null),
							(this.a = null);
					}
					prepareRender(A) {
						const R = new g.$hL(
								this.modelLineNumber,
								this.distanceToModelLineStart + 1,
							),
							O = new g.$hL(
								this.modelLineNumber,
								this.b.viewModel.model.getLineMaxColumn(this.modelLineNumber) -
									this.distanceToModelLineEnd,
							);
						(this.startPosition =
							this.b.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
								R,
							)),
							(this.endPosition =
								this.b.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
									O,
								)),
							this.startPosition.lineNumber === this.endPosition.lineNumber
								? ((this.visibleTextareaStart = A.visibleRangeForPosition(
										this.startPosition,
									)),
									(this.visibleTextareaEnd = A.visibleRangeForPosition(
										this.endPosition,
									)))
								: ((this.visibleTextareaStart = null),
									(this.visibleTextareaEnd = null));
					}
					definePresentation(A) {
						return (
							this.a ||
								(A
									? (this.a = A)
									: (this.a = {
											foreground: v.ColorId.DefaultForeground,
											italic: !1,
											bold: !1,
											underline: !1,
											strikethrough: !1,
										})),
							this.a
						);
					}
				}
				const L = i.$Ofb;
				let D = class extends u.$yub {
					constructor(A, R, O, B, U) {
						super(A),
							(this.L = B),
							(this.M = U),
							(this.U = new g.$hL(1, 1)),
							(this.W = null),
							(this.a = R),
							(this.b = O),
							(this.c = 0),
							(this.g = 0);
						const z = this._context.configuration.options,
							F = z.get(c.EditorOption.layoutInfo);
						this.R(z),
							(this.s = F.contentLeft),
							(this.t = F.contentWidth),
							(this.u = F.height),
							(this.w = z.get(c.EditorOption.fontInfo)),
							(this.y = z.get(c.EditorOption.lineHeight)),
							(this.z = z.get(c.EditorOption.emptySelectionClipboard)),
							(this.C = z.get(c.EditorOption.copyWithSyntaxHighlighting)),
							(this.F = null),
							(this.G = [new o.$kL(1, 1, 1, 1)]),
							(this.H = [new o.$kL(1, 1, 1, 1)]),
							(this.I = null),
							(this.textArea = (0, w.$Shb)(document.createElement("textarea"))),
							u.$zub.write(this.textArea, u.PartFingerprint.TextArea),
							this.textArea.setClassName(`inputarea ${y.$0ob}`),
							this.textArea.setAttribute(
								"wrap",
								this.n && !this.F ? "on" : "off",
							);
						const { tabSize: x } = this._context.viewModel.model.getOptions();
						(this.textArea.domNode.style.tabSize = `${x * this.w.spaceWidth}px`),
							this.textArea.setAttribute("autocorrect", "off"),
							this.textArea.setAttribute("autocapitalize", "off"),
							this.textArea.setAttribute("autocomplete", "off"),
							this.textArea.setAttribute("spellcheck", "false"),
							this.textArea.setAttribute("aria-label", this.Q(z)),
							this.textArea.setAttribute(
								"aria-required",
								z.get(c.EditorOption.ariaRequired) ? "true" : "false",
							),
							this.textArea.setAttribute(
								"tabindex",
								String(z.get(c.EditorOption.tabIndex)),
							),
							this.textArea.setAttribute("role", "textbox"),
							this.textArea.setAttribute(
								"aria-roledescription",
								t.localize(173, null),
							),
							this.textArea.setAttribute("aria-multiline", "true"),
							this.textArea.setAttribute(
								"aria-autocomplete",
								z.get(c.EditorOption.readOnly) ? "none" : "both",
							),
							this.S(),
							(this.textAreaCover = (0, w.$Shb)(document.createElement("div"))),
							this.textAreaCover.setPosition("absolute");
						const H = {
								getLineCount: () => this._context.viewModel.getLineCount(),
								getLineMaxColumn: (G) =>
									this._context.viewModel.getLineMaxColumn(G),
								getValueInRange: (G, K) =>
									this._context.viewModel.getValueInRange(G, K),
								getValueLengthInRange: (G, K) =>
									this._context.viewModel.getValueLengthInRange(G, K),
								modifyPosition: (G, K) =>
									this._context.viewModel.modifyPosition(G, K),
							},
							q = {
								getDataToCopy: () => {
									const G = this._context.viewModel.getPlainTextToCopy(
											this.H,
											this.z,
											E.$l,
										),
										K = this._context.viewModel.model.getEOL(),
										J = this.z && this.H.length === 1 && this.H[0].isEmpty(),
										W = Array.isArray(G) ? G : null,
										X = Array.isArray(G) ? G.join(K) : G;
									let Y,
										ie = null;
									if (
										m.$5ub.forceCopyWithSyntaxHighlighting ||
										(this.C && X.length < 65536)
									) {
										const ne = this._context.viewModel.getRichTextToCopy(
											this.H,
											this.z,
										);
										ne && ((Y = ne.html), (ie = ne.mode));
									}
									return {
										isFromEmptySelection: J,
										multicursorText: W,
										text: X,
										html: Y,
										mode: ie,
									};
								},
								getScreenReaderContent: () => {
									if (this.j === l.AccessibilitySupport.Disabled) {
										const G = this.G[0];
										if (E.$m && G.isEmpty()) {
											const J = G.getStartPosition();
											let W = this.O(J);
											if ((W.length === 0 && (W = this.P(J)), W.length > 0))
												return new r.$3ub(
													W,
													W.length,
													W.length,
													p.$iL.fromPositions(J),
													0,
												);
										}
										if (
											E.$m &&
											!G.isEmpty() &&
											H.getValueLengthInRange(
												G,
												b.EndOfLinePreference.TextDefined,
											) < 500
										) {
											const J = H.getValueInRange(
												G,
												b.EndOfLinePreference.TextDefined,
											);
											return new r.$3ub(J, 0, J.length, G, 0);
										}
										if (i.$Rfb && !G.isEmpty()) {
											const J = "vscode-placeholder";
											return new r.$3ub(J, 0, J.length, null, void 0);
										}
										return r.$3ub.EMPTY;
									}
									if (i.$Ufb) {
										const G = this.G[0];
										if (G.isEmpty()) {
											const K = G.getStartPosition(),
												[J, W] = this.N(K);
											if (J.length > 0)
												return new r.$3ub(J, W, W, p.$iL.fromPositions(K), 0);
										}
										return r.$3ub.EMPTY;
									}
									return r.$4ub.fromEditorSelection(
										H,
										this.G[0],
										this.m,
										this.j === l.AccessibilitySupport.Unknown,
									);
								},
								deduceModelPosition: (G, K, J) =>
									this._context.viewModel.deduceModelPositionRelativeToViewPosition(
										G,
										K,
										J,
									),
							},
							V = this.D(new m.$9ub(this.textArea.domNode));
						(this.J = this.D(
							this.M.createInstance(m.$7ub, q, V, E.OS, {
								isAndroid: i.$Ufb,
								isChrome: i.$Qfb,
								isFirefox: i.$Ofb,
								isSafari: i.$Rfb,
							}),
						)),
							this.D(
								this.J.onKeyDown((G) => {
									this.a.emitKeyDown(G);
								}),
							),
							this.D(
								this.J.onKeyUp((G) => {
									this.a.emitKeyUp(G);
								}),
							),
							this.D(
								this.J.onPaste((G) => {
									let K = !1,
										J = null,
										W = null;
									G.metadata &&
										((K = this.z && !!G.metadata.isFromEmptySelection),
										(J =
											typeof G.metadata.multicursorText < "u"
												? G.metadata.multicursorText
												: null),
										(W = G.metadata.mode)),
										this.a.paste(G.text, K, J, W);
								}),
							),
							this.D(
								this.J.onCut(() => {
									this.a.cut();
								}),
							),
							this.D(
								this.J.onType((G) => {
									G.replacePrevCharCnt ||
									G.replaceNextCharCnt ||
									G.positionDelta
										? (r.$2ub &&
												console.log(
													` => compositionType: <<${G.text}>>, ${G.replacePrevCharCnt}, ${G.replaceNextCharCnt}, ${G.positionDelta}`,
												),
											this.a.compositionType(
												G.text,
												G.replacePrevCharCnt,
												G.replaceNextCharCnt,
												G.positionDelta,
											))
										: (r.$2ub && console.log(` => type: <<${G.text}>>`),
											this.a.type(G.text));
								}),
							),
							this.D(
								this.J.onSelectionChangeRequest((G) => {
									this.a.setSelection(G);
								}),
							),
							this.D(
								this.J.onCompositionStart((G) => {
									const K = this.textArea.domNode,
										J = this.H[0],
										{
											distanceToModelLineStart: W,
											widthOfHiddenTextBefore: X,
										} = (() => {
											const ie = K.value.substring(
													0,
													Math.min(K.selectionStart, K.selectionEnd),
												),
												ne = ie.lastIndexOf(`
`),
												ee = ie.substring(ne + 1),
												_ = ee.lastIndexOf("	"),
												te = ee.length - _ - 1,
												Q = J.getStartPosition(),
												Z = Math.min(Q.column - 1, te),
												se = Q.column - 1 - Z,
												re = ee.substring(0, ee.length - Z),
												{ tabSize: le } =
													this._context.viewModel.model.getOptions(),
												oe = M(
													this.textArea.domNode.ownerDocument,
													re,
													this.w,
													le,
												);
											return {
												distanceToModelLineStart: se,
												widthOfHiddenTextBefore: oe,
											};
										})(),
										{ distanceToModelLineEnd: Y } = (() => {
											const ie = K.value.substring(
													Math.max(K.selectionStart, K.selectionEnd),
												),
												ne = ie.indexOf(`
`),
												ee = ne === -1 ? ie : ie.substring(0, ne),
												_ = ee.indexOf("	"),
												te = _ === -1 ? ee.length : ee.length - _ - 1,
												Q = J.getEndPosition(),
												Z = Math.min(
													this._context.viewModel.model.getLineMaxColumn(
														Q.lineNumber,
													) - Q.column,
													te,
												);
											return {
												distanceToModelLineEnd:
													this._context.viewModel.model.getLineMaxColumn(
														Q.lineNumber,
													) -
													Q.column -
													Z,
											};
										})();
									this._context.viewModel.revealRange(
										"keyboard",
										!0,
										p.$iL.fromPositions(this.G[0].getStartPosition()),
										s.VerticalRevealType.Simple,
										f.ScrollType.Immediate,
									),
										(this.F = new k(this._context, J.startLineNumber, W, X, Y)),
										this.textArea.setAttribute(
											"wrap",
											this.n && !this.F ? "on" : "off",
										),
										this.F.prepareRender(this.b),
										this.X(),
										this.textArea.setClassName(`inputarea ${y.$0ob} ime-input`),
										this.a.compositionStart(),
										this._context.viewModel.onCompositionStart();
								}),
							),
							this.D(
								this.J.onCompositionUpdate((G) => {
									this.F && (this.F.prepareRender(this.b), this.X());
								}),
							),
							this.D(
								this.J.onCompositionEnd(() => {
									(this.F = null),
										this.textArea.setAttribute(
											"wrap",
											this.n && !this.F ? "on" : "off",
										),
										this.X(),
										this.textArea.setClassName(`inputarea ${y.$0ob}`),
										this.a.compositionEnd(),
										this._context.viewModel.onCompositionEnd();
								}),
							),
							this.D(
								this.J.onFocus(() => {
									this._context.viewModel.setHasFocus(!0);
								}),
							),
							this.D(
								this.J.onBlur(() => {
									this._context.viewModel.setHasFocus(!1);
								}),
							),
							this.D(
								I.IME.onDidChange(() => {
									this.S();
								}),
							);
					}
					writeScreenReaderContent(A) {
						this.J.writeNativeTextAreaContent(A);
					}
					dispose() {
						super.dispose();
					}
					N(A) {
						const R = '`~!@#$%^&*()-=+[{]}\\|;:",.<>/?',
							O = this._context.viewModel.getLineContent(A.lineNumber),
							B = (0, n.$QL)(R, []);
						let U = !0,
							z = A.column,
							F = !0,
							x = A.column,
							H = 0;
						for (; H < 50 && (U || F); ) {
							if ((U && z <= 1 && (U = !1), U)) {
								const q = O.charCodeAt(z - 2);
								B.get(q) !== n.WordCharacterClass.Regular ? (U = !1) : z--;
							}
							if ((F && x > O.length && (F = !1), F)) {
								const q = O.charCodeAt(x - 1);
								B.get(q) !== n.WordCharacterClass.Regular ? (F = !1) : x++;
							}
							H++;
						}
						return [O.substring(z - 1, x - 1), A.column - z];
					}
					O(A) {
						const R = this._context.viewModel.getLineContent(A.lineNumber),
							O = (0, n.$QL)(
								this._context.configuration.options.get(
									c.EditorOption.wordSeparators,
								),
								[],
							);
						let B = A.column,
							U = 0;
						for (; B > 1; ) {
							const z = R.charCodeAt(B - 2);
							if (O.get(z) !== n.WordCharacterClass.Regular || U > 50)
								return R.substring(B - 1, A.column - 1);
							U++, B--;
						}
						return R.substring(0, A.column - 1);
					}
					P(A) {
						if (A.column > 1) {
							const O = this._context.viewModel
								.getLineContent(A.lineNumber)
								.charAt(A.column - 2);
							if (!C.$Qf(O.charCodeAt(0))) return O;
						}
						return "";
					}
					Q(A) {
						if (
							A.get(c.EditorOption.accessibilitySupport) ===
							l.AccessibilitySupport.Disabled
						) {
							const O = this.L.lookupKeybinding(
									"editor.action.toggleScreenReaderAccessibilityMode",
								)?.getAriaLabel(),
								B = this.L.lookupKeybinding(
									"workbench.action.showCommands",
								)?.getAriaLabel(),
								U = this.L.lookupKeybinding(
									"workbench.action.openGlobalKeybindings",
								)?.getAriaLabel(),
								z = t.localize(174, null);
							return O
								? t.localize(175, null, z, O)
								: B
									? t.localize(176, null, z, B)
									: U
										? t.localize(177, null, z, U)
										: z;
						}
						return A.get(c.EditorOption.ariaLabel);
					}
					R(A) {
						this.j = A.get(c.EditorOption.accessibilitySupport);
						const R = A.get(c.EditorOption.accessibilityPageSize);
						this.j === l.AccessibilitySupport.Enabled &&
						R === c.EditorOptions.accessibilityPageSize.defaultValue
							? (this.m = 500)
							: (this.m = R);
						const B = A.get(c.EditorOption.layoutInfo).wrappingColumn;
						if (B !== -1 && this.j !== l.AccessibilitySupport.Disabled) {
							const U = A.get(c.EditorOption.fontInfo);
							(this.n = !0),
								(this.q = Math.round(B * U.typicalHalfwidthCharacterWidth));
						} else (this.n = !1), (this.q = L ? 0 : 1);
					}
					onConfigurationChanged(A) {
						const R = this._context.configuration.options,
							O = R.get(c.EditorOption.layoutInfo);
						this.R(R),
							(this.s = O.contentLeft),
							(this.t = O.contentWidth),
							(this.u = O.height),
							(this.w = R.get(c.EditorOption.fontInfo)),
							(this.y = R.get(c.EditorOption.lineHeight)),
							(this.z = R.get(c.EditorOption.emptySelectionClipboard)),
							(this.C = R.get(c.EditorOption.copyWithSyntaxHighlighting)),
							this.textArea.setAttribute(
								"wrap",
								this.n && !this.F ? "on" : "off",
							);
						const { tabSize: B } = this._context.viewModel.model.getOptions();
						return (
							(this.textArea.domNode.style.tabSize = `${B * this.w.spaceWidth}px`),
							this.textArea.setAttribute("aria-label", this.Q(R)),
							this.textArea.setAttribute(
								"aria-required",
								R.get(c.EditorOption.ariaRequired) ? "true" : "false",
							),
							this.textArea.setAttribute(
								"tabindex",
								String(R.get(c.EditorOption.tabIndex)),
							),
							(A.hasChanged(c.EditorOption.domReadOnly) ||
								A.hasChanged(c.EditorOption.readOnly)) &&
								this.S(),
							A.hasChanged(c.EditorOption.accessibilitySupport) &&
								this.J.writeNativeTextAreaContent("strategy changed"),
							!0
						);
					}
					onCursorStateChanged(A) {
						return (
							(this.G = A.selections.slice(0)),
							(this.H = A.modelSelections.slice(0)),
							this.J.writeNativeTextAreaContent("selection changed"),
							!0
						);
					}
					onDecorationsChanged(A) {
						return !0;
					}
					onFlushed(A) {
						return !0;
					}
					onLinesChanged(A) {
						return !0;
					}
					onLinesDeleted(A) {
						return !0;
					}
					onLinesInserted(A) {
						return !0;
					}
					onScrollChanged(A) {
						return (this.c = A.scrollLeft), (this.g = A.scrollTop), !0;
					}
					onZonesChanged(A) {
						return !0;
					}
					isFocused() {
						return this.J.isFocused();
					}
					focusTextArea() {
						this.J.focusTextArea();
					}
					refreshFocusState() {
						this.J.refreshFocusState();
					}
					getLastRenderData() {
						return this.I;
					}
					setAriaOptions(A) {
						A.activeDescendant
							? (this.textArea.setAttribute("aria-haspopup", "true"),
								this.textArea.setAttribute("aria-autocomplete", "list"),
								this.textArea.setAttribute(
									"aria-activedescendant",
									A.activeDescendant,
								))
							: (this.textArea.setAttribute("aria-haspopup", "false"),
								this.textArea.setAttribute("aria-autocomplete", "both"),
								this.textArea.removeAttribute("aria-activedescendant")),
							A.role && this.textArea.setAttribute("role", A.role);
					}
					S() {
						const A = this._context.configuration.options;
						!I.IME.enabled ||
						(A.get(c.EditorOption.domReadOnly) &&
							A.get(c.EditorOption.readOnly))
							? this.textArea.setAttribute("readonly", "true")
							: this.textArea.removeAttribute("readonly");
					}
					prepareRender(A) {
						(this.U = new g.$hL(
							this.G[0].positionLineNumber,
							this.G[0].positionColumn,
						)),
							(this.W = A.visibleRangeForPosition(this.U)),
							this.F?.prepareRender(A);
					}
					render(A) {
						this.J.writeNativeTextAreaContent("render"), this.X();
					}
					X() {
						if (this.F) {
							const O = this.F.visibleTextareaStart,
								B = this.F.visibleTextareaEnd,
								U = this.F.startPosition,
								z = this.F.endPosition;
							if (
								U &&
								z &&
								O &&
								B &&
								B.left >= this.c &&
								O.left <= this.c + this.t
							) {
								const F =
										this._context.viewLayout.getVerticalOffsetForLineNumber(
											this.U.lineNumber,
										) - this.g,
									x = this.Y(
										this.textArea.domNode.value.substr(
											0,
											this.textArea.domNode.selectionStart,
										),
									);
								let H = this.F.widthOfHiddenLineTextBefore,
									q = this.s + O.left - this.c,
									V = B.left - O.left + 1;
								if (q < this.s) {
									const Y = this.s - q;
									(q += Y), (H += Y), (V -= Y);
								}
								V > this.t && (V = this.t);
								const G = this._context.viewModel.getViewLineData(U.lineNumber),
									K = G.tokens.findTokenIndexAtOffset(U.column - 1),
									J = G.tokens.findTokenIndexAtOffset(z.column - 1),
									W = K === J,
									X = this.F.definePresentation(
										W ? G.tokens.getPresentation(K) : null,
									);
								(this.textArea.domNode.scrollTop = x * this.y),
									(this.textArea.domNode.scrollLeft = H),
									this.$({
										lastRenderPosition: null,
										top: F,
										left: q,
										width: V,
										height: this.y,
										useCover: !1,
										color: ($.$lM.getColorMap() || [])[X.foreground],
										italic: X.italic,
										bold: X.bold,
										underline: X.underline,
										strikethrough: X.strikethrough,
									});
							}
							return;
						}
						if (!this.W) {
							this.Z();
							return;
						}
						const A = this.s + this.W.left - this.c;
						if (A < this.s || A > this.s + this.t) {
							this.Z();
							return;
						}
						const R =
							this._context.viewLayout.getVerticalOffsetForLineNumber(
								this.G[0].positionLineNumber,
							) - this.g;
						if (R < 0 || R > this.u) {
							this.Z();
							return;
						}
						if (E.$m || this.j === l.AccessibilitySupport.Enabled) {
							this.$({
								lastRenderPosition: this.U,
								top: R,
								left: this.n ? this.s : A,
								width: this.q,
								height: this.y,
								useCover: !1,
							}),
								(this.textArea.domNode.scrollLeft = this.W.left);
							const O =
								this.J.textAreaState.newlineCountBeforeSelection ??
								this.Y(
									this.textArea.domNode.value.substr(
										0,
										this.textArea.domNode.selectionStart,
									),
								);
							this.textArea.domNode.scrollTop = O * this.y;
							return;
						}
						this.$({
							lastRenderPosition: this.U,
							top: R,
							left: this.n ? this.s : A,
							width: this.q,
							height: L ? 0 : 1,
							useCover: !1,
						});
					}
					Y(A) {
						let R = 0,
							O = -1;
						do {
							if (
								((O = A.indexOf(
									`
`,
									O + 1,
								)),
								O === -1)
							)
								break;
							R++;
						} while (!0);
						return R;
					}
					Z() {
						this.$({
							lastRenderPosition: null,
							top: 0,
							left: 0,
							width: this.q,
							height: L ? 0 : 1,
							useCover: !0,
						});
					}
					$(A) {
						this.I = A.lastRenderPosition;
						const R = this.textArea,
							O = this.textAreaCover;
						(0, d.$jsb)(R, this.w),
							R.setTop(A.top),
							R.setLeft(A.left),
							R.setWidth(A.width),
							R.setHeight(A.height),
							R.setColor(A.color ? S.$UL.Format.CSS.formatHex(A.color) : ""),
							R.setFontStyle(A.italic ? "italic" : ""),
							A.bold && R.setFontWeight("bold"),
							R.setTextDecoration(
								`${A.underline ? " underline" : ""}${A.strikethrough ? " line-through" : ""}`,
							),
							O.setTop(A.useCover ? A.top : 0),
							O.setLeft(A.useCover ? A.left : 0),
							O.setWidth(A.useCover ? A.width : 0),
							O.setHeight(A.useCover ? A.height : 0);
						const B = this._context.configuration.options;
						B.get(c.EditorOption.glyphMargin)
							? O.setClassName(
									"monaco-editor-background textAreaCover " +
										h.$bvb.OUTER_CLASS_NAME,
								)
							: B.get(c.EditorOption.lineNumbers).renderType !==
									c.RenderLineNumbersType.Off
								? O.setClassName(
										"monaco-editor-background textAreaCover " +
											a.$avb.CLASS_NAME,
									)
								: O.setClassName("monaco-editor-background textAreaCover");
					}
				};
				(e.$cvb = D), (e.$cvb = D = Ne([j(3, T.$uZ), j(4, P.$Li)], D));
				function M(N, A, R, O) {
					if (A.length === 0) return 0;
					const B = N.createElement("div");
					(B.style.position = "absolute"),
						(B.style.top = "-50000px"),
						(B.style.width = "50000px");
					const U = N.createElement("span");
					(0, d.$jsb)(U, R),
						(U.style.whiteSpace = "pre"),
						(U.style.tabSize = `${O * R.spaceWidth}px`),
						U.append(A),
						B.appendChild(U),
						N.body.appendChild(B);
					const z = U.offsetWidth;
					return B.remove(), z;
				}
			},
		),
		