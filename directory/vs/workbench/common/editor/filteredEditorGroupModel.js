import '../../../../require.js';
import '../../../../exports.js';
import '../editor.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
define(de[1700], he([1, 0, 44, 6, 3]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jtc = e.$itc = void 0);
			class E extends w.$1c {
				constructor(r) {
					super(),
						(this.b = r),
						(this.a = this.D(new i.$re())),
						(this.onDidModelChange = this.a.event),
						this.D(
							this.b.onDidModelChange((u) => {
								const a = u.editorIndex ?? u.editor;
								(a !== void 0 && !this.c(a)) || this.a.fire(u);
							}),
						);
				}
				get id() {
					return this.b.id;
				}
				get isLocked() {
					return this.b.isLocked;
				}
				get stickyCount() {
					return this.b.stickyCount;
				}
				get activeEditor() {
					return this.b.activeEditor && this.c(this.b.activeEditor)
						? this.b.activeEditor
						: null;
				}
				get previewEditor() {
					return this.b.previewEditor && this.c(this.b.previewEditor)
						? this.b.previewEditor
						: null;
				}
				get selectedEditors() {
					return this.b.selectedEditors.filter((r) => this.c(r));
				}
				isPinned(r) {
					return this.b.isPinned(r);
				}
				isTransient(r) {
					return this.b.isTransient(r);
				}
				isSticky(r) {
					return this.b.isSticky(r);
				}
				isActive(r) {
					return this.b.isActive(r);
				}
				isSelected(r) {
					return this.b.isSelected(r);
				}
				isFirst(r) {
					return this.b.isFirst(r, this.getEditors(t.EditorsOrder.SEQUENTIAL));
				}
				isLast(r) {
					return this.b.isLast(r, this.getEditors(t.EditorsOrder.SEQUENTIAL));
				}
				getEditors(r, u) {
					return this.b.getEditors(r, u).filter((h) => this.c(h));
				}
				findEditor(r, u) {
					const a = this.b.findEditor(r, u);
					if (a) return this.c(a[1]) ? a : void 0;
				}
			}
			class C extends E {
				get count() {
					return this.b.stickyCount;
				}
				getEditors(r, u) {
					return u?.excludeSticky
						? []
						: r === t.EditorsOrder.SEQUENTIAL
							? this.b
									.getEditors(t.EditorsOrder.SEQUENTIAL)
									.slice(0, this.b.stickyCount)
							: super.getEditors(r, u);
				}
				isSticky(r) {
					return !0;
				}
				getEditorByIndex(r) {
					return r < this.count ? this.b.getEditorByIndex(r) : void 0;
				}
				indexOf(r, u, a) {
					const h = this.b.indexOf(r, u, a);
					return h < 0 || h >= this.b.stickyCount ? -1 : h;
				}
				contains(r, u) {
					const a = this.b.indexOf(r, void 0, u);
					return a >= 0 && a < this.b.stickyCount;
				}
				c(r) {
					return this.b.isSticky(r);
				}
			}
			e.$itc = C;
			class d extends E {
				get count() {
					return this.b.count - this.b.stickyCount;
				}
				get stickyCount() {
					return 0;
				}
				isSticky(r) {
					return !1;
				}
				getEditors(r, u) {
					return r === t.EditorsOrder.SEQUENTIAL
						? this.b
								.getEditors(t.EditorsOrder.SEQUENTIAL)
								.slice(this.b.stickyCount)
						: super.getEditors(r, u);
				}
				getEditorByIndex(r) {
					return r >= 0
						? this.b.getEditorByIndex(r + this.b.stickyCount)
						: void 0;
				}
				indexOf(r, u, a) {
					const h = this.b.indexOf(r, u, a);
					return h < this.b.stickyCount || h >= this.b.count
						? -1
						: h - this.b.stickyCount;
				}
				contains(r, u) {
					const a = this.b.indexOf(r, void 0, u);
					return a >= this.b.stickyCount && a < this.b.count;
				}
				c(r) {
					return !this.b.isSticky(r);
				}
			}
			e.$jtc = d;
		}),
		