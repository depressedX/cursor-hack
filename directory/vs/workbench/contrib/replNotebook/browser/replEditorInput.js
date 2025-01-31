import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/label/common/label.js';
import '../../../common/editor.js';
import '../../interactive/browser/interactiveHistoryService.js';
import '../../notebook/common/notebookCommon.js';
import '../../notebook/common/notebookEditorInput.js';
import '../../notebook/common/notebookEditorModelResolverService.js';
import '../../notebook/common/notebookService.js';
import '../../../services/editor/common/customEditorLabelService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
define(
			de[1850],
			he([
				1, 0, 42, 125, 10, 57, 22, 73, 44, 987, 70, 360, 509, 161, 399, 18, 53,
				170,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*resolverService*/,
 i /*textResourceConfiguration*/,
 w /*configuration*/,
 E /*dialogs*/,
 C /*files*/,
 d /*label*/,
 m /*editor*/,
 r /*interactiveHistoryService*/,
 u /*notebookCommon*/,
 a /*notebookEditorInput*/,
 h /*notebookEditorModelResolverService*/,
 c /*notebookService*/,
 n /*customEditorLabelService*/,
 g /*editorService*/,
 p /*extensions*/,
 o /*filesConfigurationService*/) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wJc = void 0);
				let b = class extends a.$TIb {
					static {
						f = this;
					}
					static {
						this.ID = "workbench.editorinputs.replEditorInput";
					}
					constructor(l, y, $, v, S, I, T, P, k, L, D, M, N, A, R) {
						super(
							l,
							void 0,
							"jupyter-notebook",
							{},
							$,
							v,
							S,
							I,
							T,
							P,
							k,
							L,
							D,
							M,
						),
							(this.historyService = N),
							(this.bb = A),
							(this.ab = !1),
							(this.Z =
								l.scheme === "untitled" &&
								R.getValue(u.$56.InteractiveWindowPromptToSave) !== !0),
							(this.$ = y ?? this.cb(l));
					}
					cb(l) {
						if (!l) return "REPL";
						if (l.scheme === "untitled") {
							const $ = new RegExp("Untitled-(\\d+).").exec(l.path);
							if ($?.length === 2) return `REPL - ${$[1]}`;
						}
						const y = l.path.split("/").pop();
						return y ? `REPL - ${y}` : "REPL";
					}
					get typeId() {
						return f.ID;
					}
					get editorId() {
						return "repl";
					}
					getName() {
						return this.$;
					}
					get editorInputs() {
						return [this];
					}
					get capabilities() {
						const l = super.capabilities,
							y = this.Z ? m.EditorInputCapabilities.Scratchpad : 0;
						return l | m.EditorInputCapabilities.Readonly | y;
					}
					async resolve() {
						const l = await super.resolve();
						return l && (await this.db(l.notebook)), l;
					}
					async db(l) {
						const y = l.cells[l.cells.length - 1];
						(!y ||
							y.cellKind === u.CellKind.Markup ||
							y.outputs.length > 0 ||
							y.internalMetadata.executionOrder !== void 0) &&
							l.applyEdits(
								[
									{
										editType: u.CellEditType.Replace,
										index: l.cells.length,
										count: 0,
										cells: [
											{
												cellKind: u.CellKind.Code,
												language: "python",
												mime: void 0,
												outputs: [],
												source: "",
											},
										],
									},
								],
								!0,
								void 0,
								() => {},
								void 0,
								!1,
							);
					}
					async resolveInput(l) {
						if (this.Y) return this.Y.object.textEditorModel;
						const y = l.cells[l.cells.length - 1];
						if (!y)
							throw new Error(
								"The REPL editor requires at least one cell for the input box.",
							);
						return (
							(this.Y = await this.bb.createModelReference(y.uri)),
							this.Y.object.textEditorModel
						);
					}
					dispose() {
						this.ab ||
							((this.ab = !0),
							this.c?.object.revert({ soft: !0 }),
							this.Y?.dispose(),
							super.dispose());
					}
				};
				(e.$wJc = b),
					(e.$wJc =
						b =
						f =
							Ne(
								[
									j(2, c.$MIb),
									j(3, h.$OIb),
									j(4, E.$IO),
									j(5, d.$3N),
									j(6, C.$ll),
									j(7, o.$_Y),
									j(8, p.$q2),
									j(9, g.$IY),
									j(10, i.$XO),
									j(11, n.$QIb),
									j(12, r.$wnc),
									j(13, t.$MO),
									j(14, w.$gj),
								],
								b,
							));
			},
		)
