import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/editorCommon.js';
define(de[2557], he([1, 0, 6, 3, 98]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$2yb = void 0);
			class E extends i.$1c {
				constructor() {
					super(...arguments),
						(this.b = ++E.a),
						(this.f = this.D(new t.$re())),
						(this.onDidDispose = this.f.event);
				}
				static {
					this.a = 0;
				}
				getId() {
					return this.getEditorType() + ":v2:" + this.b;
				}
				getVisibleColumnFromPosition(d) {
					return this.g.getVisibleColumnFromPosition(d);
				}
				getStatusbarColumn(d) {
					return this.g.getStatusbarColumn(d);
				}
				getPosition() {
					return this.g.getPosition();
				}
				setPosition(d, m = "api") {
					this.g.setPosition(d, m);
				}
				revealLine(d, m = w.ScrollType.Smooth) {
					this.g.revealLine(d, m);
				}
				revealLineInCenter(d, m = w.ScrollType.Smooth) {
					this.g.revealLineInCenter(d, m);
				}
				revealLineInCenterIfOutsideViewport(d, m = w.ScrollType.Smooth) {
					this.g.revealLineInCenterIfOutsideViewport(d, m);
				}
				revealLineNearTop(d, m = w.ScrollType.Smooth) {
					this.g.revealLineNearTop(d, m);
				}
				revealPosition(d, m = w.ScrollType.Smooth) {
					this.g.revealPosition(d, m);
				}
				revealPositionInCenter(d, m = w.ScrollType.Smooth) {
					this.g.revealPositionInCenter(d, m);
				}
				revealPositionInCenterIfOutsideViewport(d, m = w.ScrollType.Smooth) {
					this.g.revealPositionInCenterIfOutsideViewport(d, m);
				}
				revealPositionNearTop(d, m = w.ScrollType.Smooth) {
					this.g.revealPositionNearTop(d, m);
				}
				getSelection() {
					return this.g.getSelection();
				}
				getSelections() {
					return this.g.getSelections();
				}
				setSelection(d, m = "api") {
					this.g.setSelection(d, m);
				}
				setSelections(d, m = "api") {
					this.g.setSelections(d, m);
				}
				revealLines(d, m, r = w.ScrollType.Smooth) {
					this.g.revealLines(d, m, r);
				}
				revealLinesInCenter(d, m, r = w.ScrollType.Smooth) {
					this.g.revealLinesInCenter(d, m, r);
				}
				revealLinesInCenterIfOutsideViewport(d, m, r = w.ScrollType.Smooth) {
					this.g.revealLinesInCenterIfOutsideViewport(d, m, r);
				}
				revealLinesNearTop(d, m, r = w.ScrollType.Smooth) {
					this.g.revealLinesNearTop(d, m, r);
				}
				revealRange(d, m = w.ScrollType.Smooth, r = !1, u = !0) {
					this.g.revealRange(d, m, r, u);
				}
				revealRangeInCenter(d, m = w.ScrollType.Smooth) {
					this.g.revealRangeInCenter(d, m);
				}
				revealRangeInCenterIfOutsideViewport(d, m = w.ScrollType.Smooth) {
					this.g.revealRangeInCenterIfOutsideViewport(d, m);
				}
				revealRangeNearTop(d, m = w.ScrollType.Smooth) {
					this.g.revealRangeNearTop(d, m);
				}
				revealRangeNearTopIfOutsideViewport(d, m = w.ScrollType.Smooth) {
					this.g.revealRangeNearTopIfOutsideViewport(d, m);
				}
				revealRangeAtTop(d, m = w.ScrollType.Smooth) {
					this.g.revealRangeAtTop(d, m);
				}
				getSupportedActions() {
					return this.g.getSupportedActions();
				}
				focus() {
					this.g.focus();
				}
				trigger(d, m, r) {
					this.g.trigger(d, m, r);
				}
				createDecorationsCollection(d) {
					return this.g.createDecorationsCollection(d);
				}
				changeDecorations(d) {
					return this.g.changeDecorations(d);
				}
			}
			e.$2yb = E;
		}),
		