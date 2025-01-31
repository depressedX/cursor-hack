import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/touch.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/stringBuilder.js';
import '../../../common/model.js';
import '../../../../nls.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/strings.js';
import '../../../common/tokens/lineTokens.js';
import '../../../common/viewLayout/viewLineRenderer.js';
import '../../../browser/config/domFontInfo.js';
import '../../../common/languages/language.js';
import '../../../../base/browser/trustedTypes.js';
import '../../../common/core/range.js';
import '../../../../base/common/cppUtils/utils.js';
import '../common/cppGhostTextUtils.js';
import '../../../../workbench/contrib/aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/uri.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/services/model.js';
import '../../../../workbench/services/ai/browser/aiMiscServices.js';
import '../../../../base/common/uuid.js';
import './cppDiffPeekView.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import './previewBox.js';
import './utils.js';
import '../../../browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../workbench/contrib/codeEditor/browser/menuPreventer.js';
import '../../../browser/editorExtensions.js';
import '../../../../css!vs/editor/contrib/cCppGhostText/browser/cppGhostTextWidget.js';
define(
			de[3936],
			he([
				1, 0, 7, 159, 6, 3, 56, 38, 48, 462, 64, 4, 45, 37, 388, 598, 321, 61,
				432, 17, 646, 1153, 287, 5, 9, 10, 67, 137, 47, 1799, 31, 134, 2697,
				1547, 206, 394, 46, 2286,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*touch*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*editorBrowser*/,
				d /*editorOptions*/,
				m /*position*/,
				r /*stringBuilder*/,
				u /*model*/,
				a /*nls*/,
				h /*reactiveStorageService*/,
				c /*strings*/,
				n /*lineTokens*/,
				g /*viewLineRenderer*/,
				p /*domFontInfo*/,
				o /*language*/,
				f /*trustedTypes*/,
				b /*range*/,
				s /*utils*/,
				l /*cppGhostTextUtils*/,
				y /*aiFeatureStatusService*/,
				$ /*instantiation*/,
				v /*uri*/,
				S /*configuration*/,
				I /*model*/,
				T /*aiMiscServices*/,
				P /*uuid*/,
				k /*cppDiffPeekView*/,
				L /*commands*/,
				D /*reactiveStorageTypes*/,
				M /*previewBox*/,
				N /*utils*/,
				A /*codeEditorWidget*/,
				R /*menuPreventer*/,
				O /*editorExtensions*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hlc = e.$Glc = void 0),
					(e.$Ilc = H),
					(t = mt(t)),
					(a = mt(a)),
					(c = mt(c)),
					(e.$Glc = "cpp-suggestion-red-background");
				function B() {
					let K = "abcdefghijklmnopqrstuvwxyz",
						J = "";
					for (let W = 0; W < 10; W++)
						J += K.charAt(Math.floor(Math.random() * K.length));
					return J;
				}
				const U = (0, f.$bjb)("editorCppGhostText", { createHTML: (K) => K });
				var z;
				(function (K) {
					let J;
					(function (X) {
						(X[(X.Hidden = 0)] = "Hidden"), (X[(X.Showing = 1)] = "Showing");
					})((J = K.Type || (K.Type = {}))),
						(K.Hidden = { type: J.Hidden });
					class W {
						constructor(Y, ie) {
							(this.editorPosition = Y),
								(this.widgetPosition = ie),
								(this.type = J.Showing);
						}
					}
					K.Showing = W;
				})(z || (z = {}));
				let F = class extends E.$1c {
					createActionButtons(J) {
						const W = t.$fhb(J, t.$("div"));
						(W.style.display = "flex"),
							(W.style.alignItems = "center"),
							(W.style.gap = "4px");
						const X = t.$fhb(W, t.$("button"));
						X.classList.add("cpp-suggestion-action-button"),
							(X.textContent = "View");
						const Y = t.$fhb(W, t.$("button"));
						Y.classList.add("cpp-suggestion-action-button"),
							(Y.textContent = "Accept");
						const ie = t.$fhb(Y, t.$("span"));
						(ie.textContent = "Tab"),
							ie.classList.add("cpp-suggestion-tab-button"),
							(ie.style.marginLeft = "4px"),
							this.D(
								t.$0fb(X, "mousedown", (ne) => {
									const ee = this.J.nonPersistentStorage.cppState?.suggestion;
									if (ee) {
										ne.stopPropagation();
										const {
												originalText: _,
												replaceText: te,
												decorationId: Q,
											} = ee,
											Z = this.I.getModel();
										if (Z) {
											const se = Z.getDecorationRange(Q);
											if (se) {
												const re = Z.getOffsetAt(se.getStartPosition()),
													le = Z.getOffsetAt(se.getEndPosition()),
													oe = Z.getValue(),
													ae = oe.substring(0, re) + te + oe.substring(le),
													pe = { ...ee },
													$e = Z.changeDecorations((ue) =>
														ue.addDecoration(se, {
															description: "duplicatedSuggestion",
														}),
													);
												$e && (pe.decorationId = $e),
													this.J.setNonPersistentStorage(
														"cppState",
														"peekViewSuggestion",
														pe,
													);
												const ye = (0, k.$Alc)(
													this.I,
													{
														lineNumber: se.endLineNumber - 1,
														column: se.endColumn,
													},
													{ original: oe, new: ae },
													pe,
													this.N,
												);
												this.R.executeCommand(
													"editor.action.setCppDiffPeekView",
													ye,
												);
											}
										}
									}
								}),
							),
							this.D(
								t.$0fb(Y, "mousedown", (ne) => {
									ne.stopPropagation(),
										console.log("acceptFullSuggestion"),
										this.Q.acceptFullSuggestion();
								}),
							);
					}
					constructor(J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(),
							(this.I = J),
							(this.J = W),
							(this.L = X),
							(this.M = Y),
							(this.N = ie),
							(this.O = ne),
							(this.P = ee),
							(this.Q = _),
							(this.R = te),
							(this.S = Q),
							(this.U = Z),
							(this.allowEditorOverflow = !0),
							(this.h = []),
							(this.ghostTextDecorations = []),
							(this.j = this.D(new w.$re())),
							(this.onClick = this.j.event),
							(this.q = v.URI.parse(
								`cpp-ghost-text-preview-widget-anysphere://${B()}`,
							)),
							(this.r = z.Hidden),
							(this.F = null),
							(this.G = null),
							(this.H = null),
							(this.lastSuggestion = void 0),
							(this.c = t.$("div.cursorGhostTextWidget")),
							this._updateFontStyles(),
							(this.uuid = (0, P.$9g)());
						const se = this.I.getOption(d.EditorOption.lineHeight);
						this.c.style.marginTop = -se + "px";
						const re = 2e11,
							le = t.$fhb(this.c, t.$("div.cppOuter"));
						(le.style.pointerEvents = "none"), (le.style.position = "relative");
						const oe = t.$fhb(le, t.$("div.cppInner"));
						(oe.style.position = "absolute"),
							(oe.style.width = "100000px"),
							(this.g = t.$fhb(oe, t.$("div.cppButtonContainer"))),
							(this.g.style.pointerEvents = "auto"),
							(this.g.style.zIndex = `${re + 1}`),
							(this.f = t.$fhb(this.g, t.$("div"))),
							(this.f.style.border =
								"1px solid var(--vscode-editorSuggestWidget-border)"),
							(this.f.style.backgroundColor =
								"var(--vscode-editorSuggestWidget-background)"),
							(this.f.style.borderRadius = "2px"),
							(this.f.style.pointerEvents = "auto"),
							(this.f.style.zIndex = `${re + 2}`),
							(this.m = t.$fhb(this.f, t.$("div"))),
							(this.m.style.position = "relative");
						let ae;
						this.D({
							dispose: () => {
								ae && ae.remove();
							},
						}),
							this.D(
								t.$0fb(this.f, "mousemove", () => {
									ae && ae.remove(),
										(ae = t.$fhb(this.f, t.$("div"))),
										(ae.style.display = "flex"),
										(ae.style.justifyContent = "space-between"),
										(ae.style.alignItems = "center"),
										(ae.style.borderTop =
											"1px solid var(--vscode-editorSuggestWidget-border)"),
										(ae.style.padding = "0px 4px"),
										(ae.style.fontSize = "10px"),
										(ae.style.gap = "8px"),
										this.createActionButtons(ae),
										this.f.appendChild(ae);
								}),
							),
							this.D(
								t.$0fb(this.f, "mouseleave", () => {
									ae && ae.remove();
								}),
							),
							this.D(i.$Qhb.ignoreTarget(this.c)),
							this.I.addContentWidget(this),
							this.D(
								this.I.onDidChangeModel(($e) => {
									const ye = this.I.getModel();
									ye !== null && this.Y(ye);
								}),
							),
							this.D(
								this.I.onDidChangeModelContent(($e) => {
									const ye = this.I.getModel();
									(this.db.type !== z.Type.Showing ||
										!ye ||
										this.db.editorPosition.lineNumber >= ye.getLineCount()) &&
										this.hideAllInEditor_doesntChangeModel();
								}),
							),
							this.D(
								t.$0fb(this.c, "mouseenter", ($e) => {
									($e.buttons & 1) === 1 &&
										this.hideAllInEditor_doesntChangeModel();
								}),
							),
							this.D(
								this.I.onDidBlurEditorText(() =>
									this.hideAllInEditor_doesntChangeModel(),
								),
							);
						const pe = {
							readOnly: !0,
							wordWrap: "off",
							wordWrapOverride1: "off",
							wordWrapOverride2: "off",
							glyphMargin: !1,
							lineDecorationsWidth: 0,
							lineNumbersMinChars: 0,
							lineNumbers: "off",
							folding: !1,
							scrollBeyondLastLine: !1,
							renderLineHighlight: "none",
							renderWhitespace: "none",
							minimap: { enabled: !1 },
							quickSuggestions: !1,
							automaticLayout: !1,
							automaticLayoutIgnoreHeight: !0,
							guides: { indentation: !1 },
							scrollbar: {
								horizontal: void 0,
								vertical: void 0,
								horizontalScrollbarSize: 0,
								verticalScrollbarSize: 0,
								arrowSize: 0,
								verticalSliderSize: 0,
								horizontalSliderSize: 0,
								ignoreVerticalScrolling: !0,
								useShadows: !1,
							},
							hover: { enabled: !1 },
						};
						(this.n = this.N.createInstance(
							A.$rwb,
							this.m,
							{ ...this.I.getRawOptions(), ...pe },
							{
								isSimpleWidget: !0,
								contributions:
									O.EditorExtensionsRegistry.getSomeEditorContributions([
										R.$_Xb.ID,
									]),
								cursorCodeBlockType: "cppPreviewBox",
							},
						)),
							this.D(
								this.I.onDidChangeConfiguration(() => {
									this.n.updateOptions({ ...this.I.getRawOptions(), ...pe });
								}),
							),
							this.D({
								dispose: () => {
									this.m.remove(),
										this.n.getModel()?.dispose(),
										this.n.dispose(),
										this.Z(),
										this.W(),
										this.w?.getModel()?.dispose(),
										this.w?.dispose(),
										this.ib();
								},
							}),
							(this.C = document.createElement("div")),
							(this.C.className = "cpp-ghost-text-view-zone-wrapper"),
							(this.w = this.N.createInstance(
								A.$rwb,
								this.C,
								{ ...this.I.getRawOptions(), ...pe },
								{
									isSimpleWidget: !0,
									contributions:
										O.EditorExtensionsRegistry.getSomeEditorContributions([
											R.$_Xb.ID,
										]),
									cursorCodeBlockType: "cppPreviewBox",
								},
							)),
							this.D({
								dispose: () => {
									this.w.getModel()?.dispose(), this.w.dispose(), this.ib();
								},
							});
					}
					W() {
						const J = this.I.getModel();
						J !== null &&
							(J.deltaDecorations(this.ghostTextDecorations, []),
							(this.ghostTextDecorations = []));
					}
					X() {
						const J = this.I.getModel();
						if (J === null) return;
						this.ghostTextDecorations.length > 0 &&
							(this.ghostTextDecorations = J.deltaDecorations(
								this.ghostTextDecorations,
								[],
							));
						const W = this.Q.getRedDecorationIds(J.id);
						W &&
							W.length > 0 &&
							(J.deltaDecorations(W, []),
							this.Q.setRedDecorationIds(J.id, (X) =>
								X.filter((Y) => !W.includes(Y)),
							));
					}
					Y(J) {
						const W = J.getAllDecorations().filter(
							(Y) => Y.options.className === "cpp-inline-suggestion",
						);
						W.length > 0 &&
							J.deltaDecorations(
								W.map((Y) => Y.id),
								[],
							);
						const X = this.Q.getRedDecorationIds(J.id);
						X &&
							X.length > 0 &&
							(J.deltaDecorations(X, []),
							this.Q.setRedDecorationIds(J.id, (Y) =>
								Y.filter((ie) => !X.includes(ie)),
							));
					}
					Z() {
						this.h.length > 0 &&
							this.I.changeViewZones((J) => {
								for (const W of this.h) J.removeZone(W);
								this.h = [];
							}),
							this.ib();
					}
					ab(J, W, X, Y, ie, ne = !1, ee = "view-line") {
						const _ = Y.get(d.EditorOption.disableMonospaceOptimizations),
							te = Y.get(d.EditorOption.stopRenderingLineAfter),
							Q = "none",
							Z = Y.get(d.EditorOption.renderControlCharacters),
							se = Y.get(d.EditorOption.fontLigatures),
							re = Y.get(d.EditorOption.fontInfo),
							le = Y.get(d.EditorOption.lineHeight),
							oe = new r.$KL(1e4);
						oe.appendString('<div class="suggest-preview-text">');
						for (let $e = 0, ye = X.length; $e < ye; $e++) {
							const ue = X[$e],
								fe = ue.content;
							if (ne && fe === "") {
								oe.appendString("<br>");
								continue;
							}
							oe.appendString('<div class="' + ee),
								oe.appendString('" style="top:'),
								oe.appendString(String($e * le)),
								ne
									? oe.appendString('px;">')
									: oe.appendString('px;width:1000000px;">');
							const me = c.$2f(fe),
								ve = c.$1f(fe),
								ge = n.$7L.createEmpty(fe, ie);
							(0, g.$Nub)(
								new g.$Jub(
									re.isMonospace && !_,
									re.canUseHalfwidthRightwardsArrow,
									fe,
									!1,
									me,
									ve,
									0,
									ge,
									ue.decorations,
									W,
									0,
									re.spaceWidth,
									re.middotWidth,
									re.wsmiddotWidth,
									te,
									Q,
									Z,
									se !== d.EditorFontLigatures.OFF,
									null,
								),
								oe,
							),
								oe.appendString("</div>");
						}
						oe.appendString("</div>"), (0, p.$jsb)(J, re);
						const ae = oe.build(),
							pe = U ? U.createHTML(ae) : ae;
						J.innerHTML = pe;
					}
					bb(J, W, X) {
						this.ib();
						const Y = this.I.getModel();
						if (!Y) return;
						const { tabSize: ie } = Y.getOptions();
						this.I.changeViewZones((ne) => {
							const ee = Math.max(W.length, X);
							if (ee > 0) {
								const _ = document.createElement("div");
								this.ab(_, ie, W, this.I.getOptions(), this.L.languageIdCodec),
									this.h.push(
										ne.addZone({
											afterLineNumber: J,
											heightInLines: ee,
											domNode: _,
											afterColumnAffinity: u.PositionAffinity.Left,
										}),
									);
							}
						});
					}
					dispose() {
						super.dispose(),
							this.I.removeContentWidget(this),
							this.ib(),
							this.w?.dispose();
					}
					getId() {
						return "GhostTextWidget" + this.uuid;
					}
					getDomNode() {
						return this.c;
					}
					getPosition() {
						return this.r.type === z.Type.Showing
							? this.r.widgetPosition
							: null;
					}
					_updateLineModificationDecorations(J) {
						const W = [];
						for (const Y of J)
							if (Y.newValue.startsWith(Y.oldValue))
								W.push({
									range: b.$iL.fromPositions(
										new m.$hL(Y.lineNumber, Y.startColumn),
									),
									options: {
										description: "ghost-text",
										after: {
											content: Y.newValue.slice(Y.oldValue.length),
											inlineClassName: "ghost-text-decoration",
											cursorStops: u.InjectedTextCursorStops.Left,
										},
										showIfCollapsed: !0,
										className: "cpp-inline-suggestion",
									},
								});
							else {
								const ne = Y.newValue.indexOf(Y.oldValue);
								W.push({
									range: b.$iL.fromPositions(
										new m.$hL(Y.lineNumber, Y.startColumn),
									),
									options: {
										description: "ghost-text",
										after: {
											content: ne !== -1 ? Y.newValue.slice(0, ne) : Y.newValue,
											inlineClassName: "ghost-text-decoration",
											cursorStops: u.InjectedTextCursorStops.Left,
										},
										showIfCollapsed: !0,
										className: "cpp-inline-suggestion",
									},
								});
							}
						const X = this.I.getModel();
						X !== null &&
							(this.ghostTextDecorations.length > 0 || W.length > 0) &&
							(this.ghostTextDecorations = X.deltaDecorations(
								this.ghostTextDecorations,
								W,
							));
					}
					updatePosition(J) {
						const W =
							this.r.type === z.Type.Showing
								? this.r.widgetPosition.position
								: null;
						if (J && W) {
							const X = this.I.getModel()?.getDecorationRange(J.decorationId);
							if (X) {
								const Y = { lineNumber: X.startLineNumber, column: W.column };
								this.r = new z.Showing(Y, {
									position: Y,
									preference: [C.ContentWidgetPositionPreference.BELOW],
								});
							}
						}
						this.I.layoutContentWidget(this);
					}
					showChangesOnTheRightAndMaybeShowReds(J, W, X, Y, ie) {
						const { greenRanges: ne } = (0, s.$Eqb)(
							J.map((ee) =>
								ee.removed
									? { value: ee.value, added: !0 }
									: ee.added
										? { value: ee.value, removed: !0 }
										: ee,
							),
							Y,
							"post-change",
						);
						if (ne.length > 0) {
							const ee = this.Q.getRedDecorationIds(W.id) ?? [],
								_ = W.deltaDecorations(
									ee,
									ne.map((te) => ({
										range: {
											startLineNumber: te.startLineNumber,
											startColumn: te.startColumn,
											endLineNumber: te.endLineNumber,
											endColumn: te.endColumn,
										},
										options: {
											description: "red",
											className: e.$Glc,
											stickiness:
												u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										},
									})),
								);
							this.Q.setRedDecorationIds(W.id, (te) => {
								const Q = te.filter((se) => !ee.includes(se)),
									Z = new Set([...Q, ..._]);
								return Array.from(Z);
							});
						}
						this.showChangesOnTheRight(J, W, X, Y, ie);
					}
					showChangesOnTheRight(J, W, X, Y, ie) {
						try {
							for (; this.f.firstChild; ) this.f.removeChild(this.f.firstChild);
							const ne = (0, M.$Flc)(J, W, X, Y);
							if (
								((0, N.$Clc)("[ian] changesOnTheRight", ne),
								!this.I.getPosition())
							)
								return;
							const _ = q(this.I),
								te = (ve, ge) => {
									let be = -1;
									for (let Ce = ve; Ce <= ge; Ce += 1) {
										const Le = W.getLineMaxColumn(Ce),
											Fe = this.I.getStatusbarColumn(new m.$hL(Ce, Le));
										Fe > be && (be = Fe);
									}
									return be;
								},
								Q = ne.changesRangeInBeforeFullModel;
							this.S.hideWidgetsIfConflictsWithCppSuggestion(this.I, {
								startLineNumber: Q.startLineNumber,
								endLineNumberExclusive: Q.endLineNumber + 1,
							}),
								this.J.applicationUserPersistentStorage.cppAutoImportEnabled &&
									this.U.hideWidgetsIfConflictsWithCppSuggestion(this.I, {
										startLineNumber: Q.startLineNumber,
										endLineNumberExclusive: Q.endLineNumber + 1,
									});
							let Z = Q.startLineNumber,
								se = Y.startLineNumber,
								re = 0,
								le = 0;
							for (const ve of J) {
								const ge = ve.value.split(X).length - 1,
									be = se + ge;
								if (
									(ve.removed && ge > 0 && be <= Z && (re += ge),
									ve.added &&
										ve.value ===
											`
` &&
										be > Z &&
										se <= Z &&
										(le += 1),
									be > Z)
								)
									break;
								se = be;
							}
							(Z = Z - re + le),
								(0, N.$Clc)("[ian] added ranges", ne.addedRangesInNewFullModel),
								(0, N.$Clc)("[ian] new changes range in old model", Q),
								(0, N.$Clc)("[ian] original changes range", Y),
								(0, N.$Clc)("[ian] total reduction", re),
								(0, N.$Clc)("[ian] total pure added lines", le);
							const oe = Q.startLineNumber - re,
								ae = this.I.getOption(d.EditorOption.fontInfo).spaceWidth;
							(0, N.$Clc)("[ian] line to render", oe);
							const pe = te(Q.startLineNumber, Q.endLineNumber);
							(0, N.$Clc)("[ian] maxColumn", pe),
								(0, N.$Clc)("[ian] editorWidthInColumns", _);
							const $e = W.getLineMaxColumn(oe),
								ue = 24 + Math.max(0, (pe - $e) * ae);
							this.g.style.marginLeft = `${ue}px`;
							const fe = { lineNumber: oe, column: Math.min(pe, _ - 2) },
								me = () => {
									(this.db = new z.Showing(fe, {
										position: fe,
										preference: [C.ContentWidgetPositionPreference.BELOW],
									})),
										(0, N.$Clc)("[ian] state", this.db);
								};
							if (
								((0, N.$Clc)("[ian] startLineInNewModel", Z),
								(0, N.$Clc)(
									`[ian] new value:
` + (0, N.$Elc)(ie.newValue, X),
								),
								(0, N.$Clc)("[ian] position", fe),
								(0, N.$Clc)("[ian] totalMarginLeft", ue),
								ne.deletion)
							) {
								if (
									((this.f.style.padding = "0px"), ne.deletedRanges.length > 1)
								)
									return;
								if (ne.deletedRanges.length === 0) return;
								const ve = ne.deletedRanges[0],
									ge = W.getValueInRange(ve);
								if (ge.trim() === "") return;
								const be = ne.changesRangeInBeforeFullModel,
									Ce = new b.$iL(
										be.startLineNumber,
										1,
										be.endLineNumber,
										W.getLineMaxColumn(be.endLineNumber),
									);
								if (W.getValueInRange(Ce).trim() !== ge.trim()) return;
								me();
								for (
									let Fe = be.startLineNumber;
									Fe <= be.endLineNumber;
									Fe++
								) {
									const Oe = W.getLineContent(Fe),
										xe = t.$fhb(this.f, t.$("div.cppCodeLine")),
										He = this.I.getOption(d.EditorOption.fontSize);
									(xe.style.fontSize = `${He}px`),
										(xe.style.height = `${He * 1.5}px`);
									const Ke = Oe.length - Oe.trimStart().length,
										Je = Oe.length - Oe.trimEnd().length,
										Te = Oe.trim();
									this.gb(xe, Ke, "ghost-text-decoration-remove"),
										Te &&
											(this.hb(xe, Te, "ghost-text-decoration-inline-remove"),
											this.gb(xe, Je, "ghost-text-decoration-inline-remove"));
								}
							} else {
								const ve = this.nb(ne, fe, ue);
								if (
									((0, N.$Clc)("[ian] isClipped", ve),
									ie.forceViewZones || N.$Blc || (this.mb() && ve))
								) {
									const ge = J[0] ?? { value: "", added: !1, removed: !1 },
										be =
											ge.value ===
												`
` &&
											!ge.added &&
											!ge.removed
												? ne
												: (0, M.$Flc)(J, W, X, Y, !0),
										Ce = be.changesRangeInBeforeFullModel.startLineNumber - re;
									(0, N.$Clc)("[ian] changesOnTheRightForViewZone", be),
										(0, N.$Clc)("[ian] startLineNumberForViewZone", Ce),
										this.jb(ie.newValue, be, Ce);
								} else {
									me(), this.f.appendChild(this.m), this.ib();
									const ge = this.n.getOption(d.EditorOption.lineHeight);
									let be = !1,
										Ce = this.n.getModel();
									if (Ce) {
										const Oe = W.getLanguageId();
										Ce.getLanguageId() !== Oe &&
											(Ce.setLanguage(Oe), (be = !0)),
											Ce.getValue() !== ie.newValue &&
												(Ce.setValue(ie.newValue), (be = !0)),
											ie.changesSinceLastUpdate && (be = !0);
									} else {
										const Oe = this.L.createById(W.getLanguageId());
										(Ce = this.P.createModel(ie.newValue, Oe, this.q, !1)),
											this.n.setModel(Ce),
											(be = !0);
									}
									if (((0, N.$Clc)("[ian] language", Ce.getLanguageId()), be)) {
										if (!Ce) {
											console.error("Failed to get cpp model");
											return;
										}
										Ce.changeDecorations((Ke) => {
											Ce &&
												(Ce.getAllDecorations()
													.map((Je) => Je.id)
													.forEach((Je) => Ke.removeDecoration(Je)),
												ne.addedRangesInNewFullModel.forEach((Je) => {
													Ke.addDecoration(b.$iL.lift(Je), {
														description: "ghost-text-decoration",
														className: "ghost-text-decoration-inline-add",
													});
												}));
										});
										let Oe = 0;
										const xe = Ce.getOptions().tabSize;
										Array.from(
											{ length: ne.lineCount },
											(Ke, Je) => Z + Je,
										).forEach((Ke) => {
											if (!Ce) return;
											const Je = Ce.getLineContent(Ke);
											let Te = 0;
											for (let Ee = 0; Ee < Je.length; Ee++)
												Je[Ee] === "	" ? (Te += xe) : (Te += 1);
											Oe = Math.max(Oe, Te);
										}),
											(this.m.style.width = `${Oe * ae}px`),
											(this.m.style.height = `${ge * ne.lineCount}px`);
									}
									const Le = this.I.getModel()?.uri,
										Fe = Le ? G(Le) : !1;
									if (((0, N.$Clc)("[ian] isIPyNotebook", Fe), Fe)) {
										const Oe = this.I.getTopForLineNumber(Z);
										this.n.setScrollTop(Oe);
									} else this.n.setScrollTop(Math.max(Z - 1, 1) * ge);
								}
							}
						} catch (ne) {
							console.error(ne);
						}
					}
					showChangesAutoCompleteInline(J, W, X, Y, ie) {
						const ne = (0, l.$ulc)(J, W, X, Y, ie),
							{
								success: ee,
								inlineModifications: _,
								fullLineModifications: te,
							} = ne;
						if (ee === !1) return { success: !1 };
						_ !== void 0 && this._updateLineModificationDecorations(_);
						const Q = {},
							Z = new Set();
						return (
							te !== void 0 &&
								te.forEach((re) => {
									Z.add(re.beforeLineNumber),
										Q[re.beforeLineNumber] === void 0 &&
											(Q[re.beforeLineNumber] = []),
										Q[re.beforeLineNumber].push({
											content: re.content,
											decorations: re.decorations,
											indexInMultilineAddition: re.indexInMultilineAddition,
										});
								}),
							Array.from(Z)
								.sort((re, le) => re - le)
								.forEach((re) => {
									const le = Q[re];
									le.sort(
										(oe, ae) =>
											oe.indexInMultilineAddition - ae.indexInMultilineAddition,
									),
										this.bb(
											re,
											le.map((oe) => ({
												content: oe.content,
												decorations: oe.decorations,
											})),
											0,
										);
								}),
							{ success: !0, inlineModifications: _, fullLineModifications: te }
						);
					}
					_updateFontStyles() {
						const W = this.I.getOptions().get(d.EditorOption.fontInfo);
						(this.c.style.fontFamily = W.fontFamily),
							(this.c.style.fontSize = W.fontSize + "px");
					}
					_updateTextContent(J, W) {
						this._updateFontStyles(),
							this.s?.abort(),
							(this.s = new AbortController());
						let X = !1;
						for (
							this.s.signal.addEventListener("abort", () => {
								X = !0;
							});
							this.f.firstChild;
						)
							this.f.removeChild(this.f.firstChild);
						const Y = this.I.getModel(),
							ie = J?.decorationId;
						if (Y === null || ie === void 0) return;
						const ne = Y.getEOL();
						let ee = Y.getDecorationRange(ie);
						if (ee === null) return;
						ee.endLineNumber === Y.getLineCount() &&
							ee.endColumn === Y.getLineMaxColumn(ee.endLineNumber) &&
							(ee = new b.$iL(
								ee.startLineNumber,
								ee.startColumn,
								ee.endLineNumber + 1,
								1,
							));
						let _ = Y.getValueInRange(ee),
							te = J?.replaceText ?? "";
						const Q = Y.getOffsetAt(ee.getStartPosition()),
							Z = Y.getOffsetAt(ee.getEndPosition()),
							se = Y.getValue(),
							re = se.substring(0, Q) + te + se.substring(Z),
							{
								singleLineCharChanges: le,
								charChanges: oe,
								wordChanges: ae,
								isOnlyAddingToEachChar: pe,
							} = H(_, te, ee.startLineNumber, ne),
							$e = le.every((ge) => ge.removed !== !0);
						if (X) {
							this.Z();
							return;
						}
						let ye = !1,
							ue = !1,
							fe = !1;
						for (let ge = 0; ge < le.length; ge++)
							if (
								(le[ge].added === !0 && le[ge].value === ne && (fe = !0),
								!le[ge].added && !le[ge].removed)
							)
								if (le[ge].value === ne) (ue = !1), (fe = !1);
								else {
									if (ue && fe) {
										ye = !0;
										break;
									}
									ue = !0;
								}
						const me = {
								newValue: re,
								changesSinceLastUpdate: W?.changesSinceLastUpdate ?? !1,
								source: J?.source ?? D.CppSource.Unknown,
								forceViewZones: W?.forceViewZones ?? !1,
							},
							ve = this.I.getPosition();
						if (
							ve &&
							$e &&
							pe &&
							!ye &&
							oe.length <= 20 &&
							ae.length <= 20 &&
							W?.forceDiffBox !== !0
						) {
							const {
								success: ge,
								inlineModifications: be,
								fullLineModifications: Ce,
							} = this.showChangesAutoCompleteInline(
								le,
								ee.startLineNumber,
								ve,
								Y.getValue(),
								ne,
							);
							if (!ge)
								this.showChangesOnTheRightAndMaybeShowReds(ae, Y, ne, ee, me),
									this.Q.setSuggestionType(ie, T.CppSuggestionType.PreviewBox);
							else {
								if (be) {
									let Le = {};
									for (const Fe of be)
										Le[Fe.lineNumber] = Math.max(
											Le[Fe.lineNumber] ?? 0,
											Fe.newValue.length - Fe.oldValue.length,
										);
									this.S.updateHintLineWidgetMarginLeft(Le);
								}
								((Ce && Ce.length > 0) || (be && be.length > 0)) &&
									this.Q.setSuggestionType(ie, T.CppSuggestionType.GhostText);
							}
						} else
							this.showChangesOnTheRightAndMaybeShowReds(ae, Y, ne, ee, me),
								this.Q.setSuggestionType(ie, T.CppSuggestionType.PreviewBox);
					}
					update(J, W) {
						W?.avoidEditorWideRemovals !== !0 &&
							this.removeAllInEditorNotModel();
						const X = this.I.getModel(),
							Y = J?.uri,
							ie = this.Q.isTextFocusedOrSimilarlyFocused(this.I);
						if (X === null || Y === void 0)
							return this.hideAllInEditor_doesntChangeModel();
						if (
							!(ie && X.uri.toString() === Y.toString()) &&
							W?.ignoreFocusCheck !== !0
						) {
							W?.avoidEditorWideRemovals !== !0 &&
								this.hideAllInEditor_doesntChangeModel();
							return;
						}
						if (
							(W?.avoidEditorWideRemovals !== !0 && this.Y(X),
							this.J.applicationUserPersistentStorage.cppConfig?.isGhostText !==
								!0 ||
								J === void 0 ||
								J.immediatelySeen === !0)
						) {
							W?.avoidEditorWideRemovals !== !0 &&
								this.hideAllInEditor_doesntChangeModel();
							return;
						}
						(this.f.style.opacity = "1"),
							this.cb(),
							this._updateTextContent(J, W),
							this.I.layoutContentWidget(this);
					}
					cb() {
						this.ib(), this.W(), this.Z();
					}
					removeAllInEditorNotModel() {
						this.X(), this.Z();
					}
					hideAllInEditor_doesntChangeModel() {
						for (; this.f.firstChild; ) this.f.removeChild(this.f.firstChild);
						(this.db = z.Hidden),
							this.I.layoutContentWidget(this),
							(this.f.style.opacity = "0");
					}
					get db() {
						return this.r;
					}
					set db(J) {
						(this.r = J), this.eb();
					}
					eb() {
						if (this.db.type === z.Type.Showing && this.t) {
							this.fb = a.localize(874, null, this.t);
							return;
						}
						this.u
							? (this.fb = a.localize(875, null, this.u))
							: (this.fb = a.localize(876, null));
					}
					set fb(J) {
						this.c.title = J;
					}
					gb(J, W, X = "ghost-text-decoration") {
						const Y = document.createElement("span"),
							ne = this.I.getOption(d.EditorOption.fontInfo).spaceWidth;
						(Y.className = X),
							(Y.textContent = " ".repeat(W)),
							(Y.style.width = `${ne * W}px`),
							(Y.style.display = "inline-block"),
							J.appendChild(Y);
					}
					hb(J, W, X) {
						const Y = document.createElement("span");
						(Y.className = X),
							(Y.textContent = W),
							(Y.style.whiteSpace = "nowrap");
						const ie = this.I.getOption(d.EditorOption.fontSize);
						(Y.style.fontSize = `${ie}px`),
							(Y.style.height = `${ie * 1.5}px`),
							(Y.style.display = "inline-flex"),
							(Y.style.alignItems = "center"),
							J.appendChild(Y);
					}
					ib() {
						if (this.z !== void 0) {
							const J = this.I.saveViewState();
							this.I.changeViewZones((W) => {
								W.removeZone(this.z), (this.z = void 0);
							}),
								J && this.I.restoreViewState(J);
						}
						this.F &&
							this.I.changeDecorations((J) => {
								J.removeDecoration(this.F), (this.F = null);
							});
					}
					jb(J, W, X) {
						const Y = W.lineCount * this.I.getOption(d.EditorOption.lineHeight);
						this.Z();
						const ie = this.I.getModel();
						if (!ie) return;
						const ne = this.L.createById(ie.getLanguageId());
						let ee = this.w.getModel();
						ee
							? (ee.getValue() !== J && ee.setValue(J),
								ee.getLanguageId() !== ne.languageId &&
									ee.setLanguage(ne.languageId))
							: ((ee = this.P.createModel(
									J,
									ne,
									v.URI.parse(`cpp-ghost-text-viewzone-anysphere://${B()}`),
								)),
								this.w.setModel(ee));
						const _ = this.w.getOption(d.EditorOption.lineHeight),
							te = Math.max(X - 1, 0);
						this.w.setScrollTop(te * _),
							ee.changeDecorations((Z) => {
								ee &&
									(ee
										.getAllDecorations()
										.map((se) => se.id)
										.forEach((se) => Z.removeDecoration(se)),
									W.addedRangesInNewFullModel.forEach((se) => {
										Z.addDecoration(b.$iL.lift(se), {
											description: "ghost-text-decoration",
											className: "ghost-text-decoration-inline-add",
										});
									}),
									(this.G = Z.addDecoration(
										new b.$iL(te + 1, 1, te + 1 + W.lineCount, 1),
										{
											className: "view-zone-in-view-zone-decoration",
											description: "decoration for view zone in view zone",
											isWholeLine: !0,
										},
									)));
							}),
							this.w.layout({
								width: this.w.getLayoutInfo().contentWidth,
								height: Y,
							}),
							(this.C.style.height = `${Y + 2}px`);
						const Q = this.I.saveViewState();
						this.I.changeViewZones((Z) => {
							this.z !== void 0 && Z.removeZone(this.z),
								this.kb(),
								(this.z = Z.addZone({
									afterLineNumber:
										W.changesRangeInBeforeFullModel.endLineNumber,
									heightInPx: Y,
									domNode: this.C,
									marginDomNode: this.H,
								}));
						}),
							Q && this.I.restoreViewState(Q),
							this.kb(),
							this.I.changeDecorations((Z) => {
								if (
									(this.F && (Z.removeDecoration(this.F), (this.F = null)),
									!this.I.getModel())
								)
									return;
								const re = W.changesRangeInBeforeFullModel.startLineNumber,
									le = W.changesRangeInBeforeFullModel.endLineNumber;
								this.F = Z.addDecoration(new b.$iL(re, 1, le, 1), {
									className: "view-zone-original-range-decoration",
									description: "decoration for view zone original range",
									isWholeLine: !0,
								});
							});
					}
					kb() {
						this.H || (this.H = this.lb()), (this.H.style.height = "100%");
					}
					lb() {
						const J = document.createElement("div");
						J.className = "cpp-ghost-text-view-zone-margin";
						const W = document.createElement("span");
						return (
							(W.className = "cpp-ghost-text-view-zone-text"),
							(W.textContent = "\u21E5"),
							(W.title = "Tab to accept suggestion"),
							J.appendChild(W),
							J
						);
					}
					mb() {
						return (
							this.J.applicationUserPersistentStorage
								.shouldShowViewZoneWhenPreviewBoxIsClipped4 ?? !0
						);
					}
					nb(J, W, X) {
						const Y = this.I.getDomNode();
						if (!Y) return !1;
						const ie = t.$Ogb().document;
						if (!ie) return !1;
						const ne = Y.getBoundingClientRect(),
							ee = this.I.getVisibleRanges();
						if (ee.length === 0) return !1;
						const _ = this.I.getOption(d.EditorOption.lineHeight),
							te = this.I.getOption(
								d.EditorOption.fontInfo,
							).typicalHalfwidthCharacterWidth,
							Q = ee[0].startLineNumber,
							Z = ne.left + (W.column - 1) * te + X,
							se = ne.top + (W.lineNumber - Q) * _,
							le =
								Math.max(
									...J.selectiveNewText
										.split(`
`)
										.map((ue) => ue.length),
								) * te,
							oe = J.lineCount * _,
							ae = Z + le > ie.documentElement.clientWidth,
							pe = se + oe > ie.documentElement.clientHeight,
							$e = se < 0,
							ye = ae || pe || $e;
						return (
							(0, N.$Clc)("[ian] isClippedRight", ae),
							(0, N.$Clc)("[ian] isClippedBottom", pe),
							(0, N.$Clc)("[ian] isClippedTop", $e),
							(0, N.$Clc)("[ian] isClippedOutsideViewport", ye),
							ye
						);
					}
					ob(J, W) {
						const X = q(this.I),
							Y = this.I.getModel() ?? this.w.getModel(),
							{ tabSize: ie } = Y ? Y.getOptions() : { tabSize: 4 },
							ne = V(J.selectiveNewText, ie);
						return W.column + ne > X;
					}
				};
				(e.$Hlc = F),
					(e.$Hlc = F =
						Ne(
							[
								j(1, h.$0zb),
								j(2, o.$nM),
								j(3, y.$H7b),
								j(4, $.$Li),
								j(5, S.$gj),
								j(6, I.$QO),
								j(7, T.$jfc),
								j(8, L.$ek),
								j(9, T.$kfc),
								j(10, T.$lfc),
							],
							F,
						));
				function x(K, J) {
					const W = K.map((X) => {
						const Y = X.value.split(J);
						return Y.map((ne, ee) =>
							ee < Y.length - 1
								? [
										{ value: ne, added: X.added, removed: X.removed },
										{ value: J, added: X.added, removed: X.removed },
									]
								: { value: ne, added: X.added, removed: X.removed },
						).flat();
					})
						.flat()
						.filter((X) => X.value !== "");
					for (let X = 0; X < W.length - 1; X++)
						W[X].removed &&
							W[X + 1].added &&
							W[X + 1].value.startsWith(W[X].value) &&
							((W[X].added = !0), (W[X].removed = !0));
					return W;
				}
				function H(K, J, W, X) {
					let { wordDiffs: Y, charDiffs: ie } = (0, l.$wlc)(K, J, X);
					const ne = x(Y, X);
					let ee = !0;
					for (let Q = 0; Q < ne.length; Q++)
						if (
							ne[Q].added !== !0 &&
							ne[Q].removed === !0 &&
							ne[Q].value !== X
						) {
							ee = !1;
							break;
						}
					const _ = x(ie, X);
					let te = !0;
					for (let Q = 0; Q < _.length; Q++)
						if (_[Q].added !== !0 && _[Q].removed === !0 && _[Q].value !== X) {
							te = !1;
							break;
						}
					return {
						singleLineCharChanges: _,
						singleLineWordChanges: ne,
						charChanges: ie,
						wordChanges: Y,
						isOnlyAddingToEachChar: te,
						isOnlyAddingToEachWord: ee,
					};
				}
				function q(K) {
					const J = K.getLayoutInfo(),
						W = K.getOption(
							d.EditorOption.fontInfo,
						).typicalHalfwidthCharacterWidth;
					return Math.floor(J.contentWidth / W);
				}
				function V(K, J) {
					const W = K.split(`
`);
					let X = 0;
					for (const Y of W) {
						let ie = 0;
						for (let ne = 0; ne < Y.length; ne++)
							Y[ne] === "	" ? (ie += J - (ie % J)) : (ie += 1);
						ie > X && (X = ie);
					}
					return X;
				}
				const G = (K) =>
					K.scheme === "vscode-notebook-cell" ||
					K.scheme === "ipynb" ||
					K.path.toLowerCase().endsWith(".ipynb");
			},
		)
