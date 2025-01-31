import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/htmlContent.js';
import '../../../../../base/common/lifecycle.js';
import '../../../editorState/browser/editorState.js';
import '../../../../browser/editorBrowser.js';
import '../../../../browser/editorExtensions.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/core/range.js';
import '../../../../common/languages/language.js';
import '../../../../common/services/resolverService.js';
import './clickLinkGesture.js';
import '../../../peekView/browser/peekView.js';
import '../../../../../nls.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../goToCommands.js';
import '../goToSymbol.js';
import '../../../../common/services/languageFeatures.js';
import '../../../../common/model/textModel.js';
import '../../../../../css!vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js';
define(
			de[1037],
			he([
				1, 0, 15, 29, 94, 3, 439, 56, 46, 38, 17, 61, 42, 766, 255, 4, 8, 1036,
				414, 69, 122, 2299,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*errors*/,
				w /*htmlContent*/,
				E /*lifecycle*/,
				C /*editorState*/,
				d /*editorBrowser*/,
				m /*editorExtensions*/,
				r /*editorOptions*/,
				u /*range*/,
				a /*language*/,
				h /*resolverService*/,
				c /*clickLinkGesture*/,
				n /*peekView*/,
				g /*nls*/,
				p /*contextkey*/,
				o /*goToCommands*/,
				f /*goToSymbol*/,
				b /*languageFeatures*/,
				s /*textModel*/,
) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YOb = void 0),
					(g = mt(g));
				let y = class {
					static {
						l = this;
					}
					static {
						this.ID = "editor.contrib.gotodefinitionatposition";
					}
					static {
						this.MAX_SOURCE_PREVIEW_LINES = 8;
					}
					constructor(v, S, I, T) {
						(this.h = S),
							(this.i = I),
							(this.j = T),
							(this.b = new E.$Zc()),
							(this.c = new E.$Zc()),
							(this.f = null),
							(this.g = null),
							(this.a = v),
							(this.d = this.a.createDecorationsCollection());
						const P = new c.$6Mb(v);
						this.b.add(P),
							this.b.add(
								P.onMouseMoveOrRelevantKeyDown(([k, L]) => {
									this.k(k, L ?? void 0);
								}),
							),
							this.b.add(
								P.onExecute((k) => {
									this.r(k) &&
										this.t(k.target.position, k.hasSideBySideModifier)
											.catch((L) => {
												(0, i.$4)(L);
											})
											.finally(() => {
												this.q();
											});
								}),
							),
							this.b.add(
								P.onCancel(() => {
									this.q(), (this.f = null);
								}),
							);
					}
					static get(v) {
						return v.getContribution(l.ID);
					}
					async startFindDefinitionFromCursor(v) {
						await this.l(v),
							this.c.add(
								this.a.onDidChangeCursorPosition(() => {
									(this.f = null), this.q(), this.c.clear();
								}),
							),
							this.c.add(
								this.a.onKeyDown((S) => {
									S && ((this.f = null), this.q(), this.c.clear());
								}),
							);
					}
					k(v, S) {
						if (
							v.target.type === d.MouseTargetType.CONTENT_WIDGET &&
							this.d.length > 0
						)
							return;
						if (!this.a.hasModel() || !this.r(v, S)) {
							(this.f = null), this.q();
							return;
						}
						const I = v.target.position;
						this.l(I);
					}
					async l(v) {
						this.c.clear();
						const S = v ? this.a.getModel()?.getWordAtPosition(v) : null;
						if (!S) {
							(this.f = null), this.q();
							return;
						}
						if (
							this.f &&
							this.f.startColumn === S.startColumn &&
							this.f.endColumn === S.endColumn &&
							this.f.word === S.word
						)
							return;
						this.f = S;
						const I = new C.$Mzb(
							this.a,
							C.CodeEditorStateFlag.Position |
								C.CodeEditorStateFlag.Value |
								C.CodeEditorStateFlag.Selection |
								C.CodeEditorStateFlag.Scroll,
						);
						this.g && (this.g.cancel(), (this.g = null)),
							(this.g = (0, t.$zh)((k) => this.s(v, k)));
						let T;
						try {
							T = await this.g;
						} catch (k) {
							(0, i.$4)(k);
							return;
						}
						if (!T || !T.length || !I.validate(this.a)) {
							this.q();
							return;
						}
						const P = T[0].originSelectionRange
							? u.$iL.lift(T[0].originSelectionRange)
							: new u.$iL(
									v.lineNumber,
									S.startColumn,
									v.lineNumber,
									S.endColumn,
								);
						if (T.length > 1) {
							let k = P;
							for (const { originSelectionRange: L } of T)
								L && (k = u.$iL.plusRange(k, L));
							this.p(
								k,
								new w.$cl().appendText(g.localize(1142, null, T.length)),
							);
						} else {
							const k = T[0];
							if (!k.uri) return;
							this.h.createModelReference(k.uri).then((L) => {
								if (!L.object || !L.object.textEditorModel) {
									L.dispose();
									return;
								}
								const {
										object: { textEditorModel: D },
									} = L,
									{ startLineNumber: M } = k.range;
								if (M < 1 || M > D.getLineCount()) {
									L.dispose();
									return;
								}
								const N = this.m(D, M, k),
									A = this.i.guessLanguageIdByFilepathOrFirstLine(D.uri);
								this.p(P, N ? new w.$cl().appendCodeblock(A || "", N) : void 0),
									L.dispose();
							});
						}
					}
					m(v, S, I) {
						let T = I.range;
						return (
							T.endLineNumber - T.startLineNumber >=
								l.MAX_SOURCE_PREVIEW_LINES && (T = this.o(v, S)),
							this.n(v, S, T)
						);
					}
					n(v, S, I) {
						let P = v.getLineFirstNonWhitespaceColumn(S);
						for (let L = S + 1; L < I.endLineNumber; L++) {
							const D = v.getLineFirstNonWhitespaceColumn(L);
							P = Math.min(P, D);
						}
						return v
							.getValueInRange(I)
							.replace(new RegExp(`^\\s{${P - 1}}`, "gm"), "")
							.trim();
					}
					o(v, S) {
						const I = v.getLineFirstNonWhitespaceColumn(S),
							T = Math.min(v.getLineCount(), S + l.MAX_SOURCE_PREVIEW_LINES);
						let P = S + 1;
						for (; P < T; P++) {
							const k = v.getLineFirstNonWhitespaceColumn(P);
							if (I === k) break;
						}
						return new u.$iL(S, 1, P + 1, 1);
					}
					p(v, S) {
						const I = {
							range: v,
							options: {
								description: "goto-definition-link",
								inlineClassName: "goto-definition-link",
								hoverMessage: S,
							},
						};
						this.d.set([I]);
					}
					q() {
						this.d.clear();
					}
					r(v, S) {
						return (
							this.a.hasModel() &&
							v.isLeftClick &&
							v.isNoneOrSingleMouseDown &&
							v.target.type === d.MouseTargetType.CONTENT_TEXT &&
							!(v.target.detail.injectedText?.options instanceof s.$dY) &&
							(v.hasTriggerModifier || (S ? S.keyCodeIsTriggerKey : !1)) &&
							this.j.definitionProvider.has(this.a.getModel())
						);
					}
					s(v, S) {
						const I = this.a.getModel();
						return I
							? (0, f.$POb)(this.j.definitionProvider, I, v, !1, S)
							: Promise.resolve(null);
					}
					t(v, S) {
						return (
							this.a.setPosition(v),
							this.a.invokeWithinContext((I) => {
								const T =
									!S &&
									this.a.getOption(r.EditorOption.definitionLinkOpensInPeek) &&
									!this.u(I);
								return new o.$XOb(
									{ openToSide: S, openInPeek: T, muteMessage: !0 },
									{
										title: { value: "", original: "" },
										id: "",
										precondition: void 0,
									},
								).run(I);
							})
						);
					}
					u(v) {
						const S = v.get(p.$6j);
						return n.PeekContext.inPeekEditor.getValue(S);
					}
					dispose() {
						this.b.dispose(), this.c.dispose();
					}
				};
				(e.$YOb = y),
					(e.$YOb = y = l = Ne([j(1, h.$MO), j(2, a.$nM), j(3, b.$k3)], y)),
					(0, m.$qtb)(
						y.ID,
						y,
						m.EditorContributionInstantiation.BeforeFirstInteraction,
					);
			},
		)
