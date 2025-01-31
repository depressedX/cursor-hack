import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observable.js';
import '../../../../../../editor/browser/editorExtensions.js';
import '../../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../../../editor/common/core/selection.js';
import '../../../../../../editor/contrib/codelens/browser/codelensController.js';
import '../../../../../../editor/contrib/folding/browser/folding.js';
import '../../../../../../platform/actions/browser/toolbar.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../browser/parts/editor/editor.js';
import '../../utils.js';
import '../../../../../../platform/observable/common/platformObservableUtils.js';
define(
			de[1252],
			he([1, 0, 7, 6, 3, 77, 46, 206, 104, 1686, 350, 173, 5, 548, 508, 326]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*observable*/,
 C /*editorExtensions*/,
 d /*codeEditorWidget*/,
 m /*selection*/,
 r /*codelensController*/,
 u /*folding*/,
 a /*toolbar*/,
 h /*instantiation*/,
 c /*editor*/,
 n /*utils*/,
 g /*platformObservableUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Zb = e.$4Zb = void 0),
					(e.$5Zb = o);
				class p extends w.$1c {
					updateOptions(s) {
						this.editor.updateOptions(s);
					}
					constructor(s, l, y) {
						super(),
							(this.q = s),
							(this.viewModel = l),
							(this.s = y),
							(this.model = this.viewModel.map(($) => $?.model)),
							(this.a = (0, t.h)("div.code-view", [
								(0, t.h)("div.header@header", [
									(0, t.h)("span.title@title"),
									(0, t.h)("span.description@description"),
									(0, t.h)("span.detail@detail"),
									(0, t.h)("span.toolbar@toolbar"),
								]),
								(0, t.h)("div.container", [
									(0, t.h)("div.gutter@gutterDiv"),
									(0, t.h)("div@editor"),
								]),
							])),
							(this.b = new i.$re()),
							(this.view = {
								element: this.a.root,
								minimumWidth: c.$DEb.width,
								maximumWidth: c.$EEb.width,
								minimumHeight: c.$DEb.height,
								maximumHeight: c.$EEb.height,
								onDidChange: this.b.event,
								layout: ($, v, S, I) => {
									(0, n.$fZb)(this.a.root, {
										width: $,
										height: v,
										top: S,
										left: I,
									}),
										this.editor.layout({
											width: $ - this.a.gutterDiv.clientWidth,
											height: v - this.a.header.clientHeight,
										});
								},
							}),
							(this.f = (0, g.$Mwb)("mergeEditor.showCheckboxes", !1, this.s)),
							(this.j = (0, g.$Mwb)(
								"mergeEditor.showDeletionMarkers",
								!0,
								this.s,
							)),
							(this.n = (0, g.$Mwb)(
								"mergeEditor.useSimplifiedDecorations",
								!1,
								this.s,
							)),
							(this.editor = this.q.createInstance(
								d.$rwb,
								this.a.editor,
								{},
								{ contributions: this.t() },
							)),
							(this.isFocused = (0, E.observableFromEvent)(
								this,
								i.Event.any(
									this.editor.onDidBlurEditorWidget,
									this.editor.onDidFocusEditorWidget,
								),
								() => this.editor.hasWidgetFocus(),
							)),
							(this.cursorPosition = (0, E.observableFromEvent)(
								this,
								this.editor.onDidChangeCursorPosition,
								() => this.editor.getPosition(),
							)),
							(this.selection = (0, E.observableFromEvent)(
								this,
								this.editor.onDidChangeCursorSelection,
								() => this.editor.getSelections(),
							)),
							(this.cursorLineNumber = this.cursorPosition.map(
								($) => $?.lineNumber,
							));
					}
					t() {
						return C.EditorExtensionsRegistry.getEditorContributions().filter(
							(s) => s.id !== u.$ZNb.ID && s.id !== r.$RBb.ID,
						);
					}
				}
				e.$4Zb = p;
				function o(b, s) {
					const l = (0, E.derived)((y) => {
						const $ = b.viewModel.read(y);
						if (!$) return [];
						const v = $.selectionInBase.read(y);
						return !v || v.sourceEditor === b
							? []
							: v.rangesInBase.map((S) => s(S, $));
					});
					return (0, E.autorun)((y) => {
						const $ = l.read(y);
						$.length !== 0 &&
							b.editor.setSelections(
								$.map(
									(v) =>
										new m.$kL(
											v.startLineNumber,
											v.startColumn,
											v.endLineNumber,
											v.endColumn,
										),
								),
							);
					});
				}
				let f = class extends w.$1c {
					constructor(s, l, y) {
						super();
						const $ = y.createInstance(a.$Tyb, l, s, {
							menuOptions: { renderShortTitle: !0 },
							toolbarOptions: { primaryGroup: (v) => v === "primary" },
						});
						this.B.add($);
					}
				};
				(e.$6Zb = f), (e.$6Zb = f = Ne([j(2, h.$Li)], f));
			},
		)
