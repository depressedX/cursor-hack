import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/types.js';
import '../../../common/editor.js';
import '../../../common/editor/editorOptions.js';
import '../../../common/editor/textResourceEditorInput.js';
import '../../../common/editor/textEditorModel.js';
import '../../../services/untitled/common/untitledTextEditorInput.js';
import './textCodeEditor.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../editor/common/editorCommon.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/model.js';
import '../../../../platform/files/common/files.js';
define(
			de[1917],
			he([
				1, 0, 28, 44, 549, 478, 702, 628, 1337, 32, 21, 125, 5, 35, 98, 66, 18,
				67, 61, 172, 38, 64, 22,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*types*/,
				i /*editor*/,
				w /*editorOptions*/,
				E /*textResourceEditorInput*/,
				C /*textEditorModel*/,
				d /*untitledTextEditorInput*/,
				m /*textCodeEditor*/,
				r /*telemetry*/,
				u /*storage*/,
				a /*textResourceConfiguration*/,
				h /*instantiation*/,
				c /*themeService*/,
				n /*editorCommon*/,
				g /*editorGroupsService*/,
				p /*editorService*/,
				o /*model*/,
				f /*language*/,
				b /*modesRegistry*/,
				s /*editorOptions*/,
				l /*model*/,
				y /*files*/,
) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$luc = e.$kuc = void 0);
				let v = class extends m.$lec {
					constructor(T, P, k, L, D, M, N, A, R, O) {
						super(T, P, k, L, D, M, N, R, A, O);
					}
					async setInput(T, P, k, L) {
						await super.setInput(T, P, k, L);
						const D = await T.resolve();
						if (L.isCancellationRequested) return;
						if (!(D instanceof C.$VO))
							throw new Error("Unable to open file as text");
						const M = (0, t.$wg)(this.a),
							N = D.textEditorModel;
						if ((M.setModel(N), !(0, i.$C1)(P?.viewState))) {
							const A = this.jb(T, k);
							A &&
								(P?.selection && (A.cursorState = []), M.restoreViewState(A));
						}
						P && (0, w.applyTextEditorOptions)(P, M, n.ScrollType.Immediate),
							M.updateOptions(this.Gb(D.isReadonly()));
					}
					revealLastLine() {
						const T = this.a;
						if (!T) return;
						const P = T.getModel();
						if (P) {
							const k = P.getLineCount();
							T.revealPosition(
								{ lineNumber: k, column: P.getLineMaxColumn(k) },
								n.ScrollType.Smooth,
							);
						}
					}
					clearInput() {
						super.clearInput(), this.a?.setModel(null);
					}
					nb(T) {
						return T instanceof d.$T1b || T instanceof E.$S1b;
					}
				};
				(e.$kuc = v),
					(e.$kuc = v =
						Ne(
							[
								j(2, r.$km),
								j(3, h.$Li),
								j(4, u.$lq),
								j(5, a.$XO),
								j(6, c.$iP),
								j(7, g.$EY),
								j(8, p.$IY),
								j(9, y.$ll),
							],
							v,
						));
				let S = class extends v {
					static {
						$ = this;
					}
					static {
						this.ID = "workbench.editors.textResourceEditor";
					}
					constructor(T, P, k, L, D, M, N, A, R, O, B) {
						super($.ID, T, P, k, L, D, M, A, N, B), (this.$ = R), (this.Xb = O);
					}
					Lb(T, P) {
						super.Lb(T, P);
						const k = this.a;
						k && this.D(k.onDidPaste((L) => this.Zb(L, k)));
					}
					Zb(T, P) {
						if (
							(this.input instanceof d.$T1b &&
								this.input.hasLanguageSetExplicitly) ||
							T.range.startLineNumber !== 1 ||
							T.range.startColumn !== 1 ||
							P.getOption(s.EditorOption.readOnly)
						)
							return;
						const k = P.getModel();
						if (
							!k ||
							!(
								k.getLineCount() === T.range.endLineNumber &&
								k.getLineMaxColumn(T.range.endLineNumber) === T.range.endColumn
							) ||
							k.getLanguageId() !== b.$0M
						)
							return;
						let M;
						if (T.languageId) M = { id: T.languageId, source: "event" };
						else {
							const N =
								this.Xb.guessLanguageIdByFilepathOrFirstLine(
									k.uri,
									k
										.getLineContent(1)
										.substr(
											0,
											l.ModelConstants.FIRST_LINE_DETECTION_LENGTH_LIMIT,
										),
								) ?? void 0;
							N && (M = { id: N, source: "guess" });
						}
						if (M && M.id !== b.$0M) {
							this.input instanceof d.$T1b && M.source === "event"
								? this.input.setLanguageId(M.id)
								: k.setLanguage(this.Xb.createById(M.id));
							const N = this.$.getCreationOptions(
								k.getLanguageId(),
								k.uri,
								k.isForSimpleWidget,
							);
							k.detectIndentation(N.insertSpaces, N.tabSize);
						}
					}
				};
				(e.$luc = S),
					(e.$luc =
						S =
						$ =
							Ne(
								[
									j(1, r.$km),
									j(2, h.$Li),
									j(3, u.$lq),
									j(4, a.$XO),
									j(5, c.$iP),
									j(6, p.$IY),
									j(7, g.$EY),
									j(8, o.$QO),
									j(9, f.$nM),
									j(10, y.$ll),
								],
								S,
							));
			},
		),
		