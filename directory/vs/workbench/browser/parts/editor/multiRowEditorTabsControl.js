import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './multiEditorTabsControl.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/editor/filteredEditorGroupModel.js';
define(
			de[4009],
			he([1, 0, 7, 5, 1935, 3, 1700]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*instantiation*/,
 w /*multiEditorTabsControl*/,
 E /*lifecycle*/,
 C /*filteredEditorGroupModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mtc = void 0);
				let d = class extends E.$1c {
					constructor(r, u, a, h, c, n) {
						super(),
							(this.f = r),
							(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.m = n);
						const g = this.D(new C.$itc(this.j)),
							p = this.D(new C.$jtc(this.j));
						(this.a = this.D(
							this.m.createInstance(w.$ktc, this.f, u, this.g, this.h, g),
						)),
							(this.b = this.D(
								this.m.createInstance(w.$ktc, this.f, u, this.g, this.h, p),
							)),
							this.n();
					}
					n() {
						(this.c = this.j.activeEditor
							? this.s(this.j.activeEditor)
							: void 0),
							this.q();
					}
					q() {
						if (this.h.count === 0) return;
						const r = this.f.classList.contains("two-tab-bars"),
							u = this.h.count !== this.h.stickyCount && this.h.stickyCount > 0;
						this.f.classList.toggle("two-tab-bars", u),
							r !== u && this.h.relayout();
					}
					r() {
						return (
							this.c !==
							(this.j.activeEditor ? this.s(this.j.activeEditor) : void 0)
						);
					}
					s(r) {
						return this.j.isSticky(r) ? this.a : this.b;
					}
					openEditor(r, u) {
						const a = this.r(),
							c = this.s(r).openEditor(r, u) || a;
						return c && this.t(), c;
					}
					openEditors(r) {
						const u = r.filter((p) => this.j.isSticky(p)),
							a = r.filter((p) => !this.j.isSticky(p)),
							h = this.r(),
							c = this.a.openEditors(u),
							n = this.b.openEditors(a),
							g = c || n || h;
						return g && this.t(), g;
					}
					t() {
						this.n();
					}
					beforeCloseEditor(r) {
						this.s(r).beforeCloseEditor(r);
					}
					closeEditor(r) {
						this.a.closeEditor(r), this.b.closeEditor(r), this.u();
					}
					closeEditors(r) {
						const u = r.filter((h) => this.j.isSticky(h)),
							a = r.filter((h) => !this.j.isSticky(h));
						this.a.closeEditors(u), this.b.closeEditors(a), this.u();
					}
					u() {
						this.n();
					}
					moveEditor(r, u, a, h) {
						h
							? (this.j.isSticky(r)
									? (this.a.openEditor(r), this.b.closeEditor(r))
									: (this.a.closeEditor(r), this.b.openEditor(r)),
								this.n())
							: this.j.isSticky(r)
								? this.a.moveEditor(r, u, a, h)
								: this.b.moveEditor(
										r,
										u - this.j.stickyCount,
										a - this.j.stickyCount,
										h,
									);
					}
					pinEditor(r) {
						this.s(r).pinEditor(r);
					}
					stickEditor(r) {
						this.b.closeEditor(r), this.a.openEditor(r), this.n();
					}
					unstickEditor(r) {
						this.a.closeEditor(r), this.b.openEditor(r), this.n();
					}
					setActive(r) {
						this.a.setActive(r), this.b.setActive(r);
					}
					updateEditorSelections() {
						this.a.updateEditorSelections(), this.b.updateEditorSelections();
					}
					updateEditorLabel(r) {
						this.s(r).updateEditorLabel(r);
					}
					updateEditorDirty(r) {
						this.s(r).updateEditorDirty(r);
					}
					updateOptions(r, u) {
						this.a.updateOptions(r, u), this.b.updateOptions(r, u);
					}
					layout(r) {
						const u = this.a.layout(r),
							a = {
								container: r.container,
								available: new t.$pgb(
									r.available.width,
									r.available.height - u.height,
								),
							},
							h = this.b.layout(a);
						return new t.$pgb(r.container.width, u.height + h.height);
					}
					getHeight() {
						return this.a.getHeight() + this.b.getHeight();
					}
					dispose() {
						this.f.classList.toggle("two-tab-bars", !1), super.dispose();
					}
				};
				(e.$mtc = d), (e.$mtc = d = Ne([j(5, i.$Li)], d));
			},
		),
		