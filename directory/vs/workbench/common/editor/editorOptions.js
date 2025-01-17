import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/editor/common/editor.js';
import '../editor.js';
define(de[549], he([1, 0, 116, 44]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.applyTextEditorOptions = w);
			function w(C, d, m) {
				let r = !1;
				const u = E(C);
				if (((0, i.$C1)(u) && (d.restoreViewState(u), (r = !0)), C.selection)) {
					const a = {
						startLineNumber: C.selection.startLineNumber,
						startColumn: C.selection.startColumn,
						endLineNumber:
							C.selection.endLineNumber ?? C.selection.startLineNumber,
						endColumn: C.selection.endColumn ?? C.selection.startColumn,
					};
					d.setSelection(
						a,
						C.selectionSource ?? t.TextEditorSelectionSource.NAVIGATION,
					),
						C.selectionRevealType === t.TextEditorSelectionRevealType.NearTop
							? d.revealRangeNearTop(a, m)
							: C.selectionRevealType ===
									t.TextEditorSelectionRevealType.NearTopIfOutsideViewport
								? d.revealRangeNearTopIfOutsideViewport(a, m)
								: C.selectionRevealType ===
										t.TextEditorSelectionRevealType.CenterIfOutsideViewport
									? d.revealRangeInCenterIfOutsideViewport(a, m)
									: d.revealRangeInCenter(a, m),
						(r = !0);
				}
				return r;
			}
			function E(C) {
				if (!C.selection || !C.viewState) return C.viewState;
				const d = C.viewState;
				if (d.modified) return (d.modified.cursorState = []), d;
				const m = C.viewState;
				return m.cursorState && (m.cursorState = []), m;
			}
		}),
		