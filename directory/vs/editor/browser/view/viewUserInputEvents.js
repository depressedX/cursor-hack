import '../../../../require.js';
import '../../../../exports.js';
import '../editorBrowser.js';
import '../../common/core/position.js';
define(de[1534], he([1, 0, 56, 48]), function (ce /*require*/,
 e /*exports*/,
 t /*editorBrowser*/,
 i /*position*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Yub = void 0);
			class w {
				constructor(C) {
					(this.onKeyDown = null),
						(this.onKeyUp = null),
						(this.onContextMenu = null),
						(this.onMouseMove = null),
						(this.onMouseLeave = null),
						(this.onMouseDown = null),
						(this.onMouseUp = null),
						(this.onMouseDrag = null),
						(this.onMouseDrop = null),
						(this.onMouseDropCanceled = null),
						(this.onMouseWheel = null),
						(this.a = C);
				}
				emitKeyDown(C) {
					this.onKeyDown?.(C);
				}
				emitKeyUp(C) {
					this.onKeyUp?.(C);
				}
				emitContextMenu(C) {
					this.onContextMenu?.(this.b(C));
				}
				emitMouseMove(C) {
					this.onMouseMove?.(this.b(C));
				}
				emitMouseLeave(C) {
					this.onMouseLeave?.(this.b(C));
				}
				emitMouseDown(C) {
					this.onMouseDown?.(this.b(C));
				}
				emitMouseUp(C) {
					this.onMouseUp?.(this.b(C));
				}
				emitMouseDrag(C) {
					this.onMouseDrag?.(this.b(C));
				}
				emitMouseDrop(C) {
					this.onMouseDrop?.(this.b(C));
				}
				emitMouseDropCanceled() {
					this.onMouseDropCanceled?.();
				}
				emitMouseWheel(C) {
					this.onMouseWheel?.(C);
				}
				b(C) {
					return C.target ? { event: C.event, target: this.c(C.target) } : C;
				}
				c(C) {
					return w.convertViewToModelMouseTarget(C, this.a);
				}
				static convertViewToModelMouseTarget(C, d) {
					const m = { ...C };
					return (
						m.position &&
							(m.position = d.convertViewPositionToModelPosition(m.position)),
						m.range && (m.range = d.convertViewRangeToModelRange(m.range)),
						(m.type === t.MouseTargetType.GUTTER_VIEW_ZONE ||
							m.type === t.MouseTargetType.CONTENT_VIEW_ZONE) &&
							(m.detail = this.d(m.detail, d)),
						m
					);
				}
				static d(C, d) {
					return {
						viewZoneId: C.viewZoneId,
						positionBefore: C.positionBefore
							? d.convertViewPositionToModelPosition(C.positionBefore)
							: C.positionBefore,
						positionAfter: C.positionAfter
							? d.convertViewPositionToModelPosition(C.positionAfter)
							: C.positionAfter,
						position: d.convertViewPositionToModelPosition(C.position),
						afterLineNumber: d.convertViewPositionToModelPosition(
							new i.$hL(C.afterLineNumber, 1),
						).lineNumber,
					};
				}
			}
			e.$Yub = w;
		}),
		