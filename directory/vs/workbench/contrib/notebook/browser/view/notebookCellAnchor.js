import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../notebookBrowser.js';
import '../../common/notebookCommon.js';
define(de[3501], he([1, 0, 108, 70]), function (ce /*require*/,
 e /*exports*/,
 t /*notebookBrowser*/,
 i /*notebookCommon*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$y2b = void 0);
			class w {
				constructor(C, d, m) {
					(this.d = C), (this.e = d), (this.f = m), (this.a = !1);
				}
				shouldAnchor(C, d, m, r) {
					if (C.element(d).focusMode === t.CellFocusMode.Editor) return !0;
					if (this.a) return !1;
					const u = C.elementTop(d) + C.elementHeight(d) + m,
						h = C.renderHeight + C.getScrollTop() > u,
						c = this.e.getValue(i.$56.scrollToRevealCell) !== "none",
						n = m > 0;
					return c && n && !h ? (this.watchAchorDuringExecution(r), !0) : !1;
				}
				watchAchorDuringExecution(C) {
					if (!this.b && C.cellKind === i.CellKind.Code) {
						const d = this.d.getCellExecution(C.uri);
						d &&
							d.state === i.NotebookCellExecutionState.Executing &&
							((this.b = C.onDidStopExecution(() => {
								this.b?.dispose(),
									(this.b = void 0),
									this.c?.dispose(),
									(this.a = !1);
							})),
							(this.c = this.f((m) => {
								m.scrollTop < m.oldScrollTop &&
									((this.a = !0), this.c?.dispose());
							})));
					}
				}
				dispose() {
					this.b?.dispose(), this.c?.dispose();
				}
			}
			e.$y2b = w;
		}),
		