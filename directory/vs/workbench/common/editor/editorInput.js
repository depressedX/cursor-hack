import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/arrays.js';
import '../editor.js';
import '../../../base/common/resources.js';
define(de[223], he([1, 0, 6, 24, 44, 19]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*arrays*/,
 w /*editor*/,
 E /*resources*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$LO = void 0);
			class C extends w.$q1 {
				constructor() {
					super(...arguments),
						(this.b = this.D(new t.$re())),
						(this.f = this.D(new t.$re())),
						(this.g = this.D(new t.$re())),
						(this.j = this.D(new t.$re())),
						(this.onDidChangeDirty = this.b.event),
						(this.onDidChangeLabel = this.f.event),
						(this.onDidChangeCapabilities = this.g.event),
						(this.onWillDispose = this.j.event);
				}
				get editorId() {}
				get capabilities() {
					return w.EditorInputCapabilities.Readonly;
				}
				hasCapability(m) {
					return m === w.EditorInputCapabilities.None
						? this.capabilities === w.EditorInputCapabilities.None
						: (this.capabilities & m) !== 0;
				}
				isReadonly() {
					return this.hasCapability(w.EditorInputCapabilities.Readonly);
				}
				getName() {
					return `Editor ${this.typeId}`;
				}
				getDescription(m) {}
				getTitle(m) {
					return this.getName();
				}
				getLabelExtraClasses() {
					return [];
				}
				getAriaLabel() {
					return this.getTitle(w.Verbosity.SHORT);
				}
				getIcon() {}
				getTelemetryDescriptor() {
					return { typeId: this.typeId };
				}
				isDirty() {
					return !1;
				}
				isModified() {
					return this.isDirty();
				}
				isSaving() {
					return !1;
				}
				async resolve() {
					return null;
				}
				async save(m, r) {
					return this;
				}
				async saveAs(m, r) {
					return this;
				}
				async revert(m, r) {}
				async rename(m, r) {}
				copy() {
					return this;
				}
				canMove(m, r) {
					return !0;
				}
				matches(m) {
					if ((0, w.$r1)(m)) return this === m;
					const r = m.options?.override;
					return this.editorId !== r && r !== void 0 && this.editorId !== void 0
						? !1
						: (0, E.$gh)(this.resource, w.$A1.getCanonicalUri(m));
				}
				prefersEditorPane(m) {
					return (0, i.$Sb)(m);
				}
				toUntyped(m) {}
				isDisposed() {
					return this.B.isDisposed;
				}
				dispose() {
					this.isDisposed() || this.j.fire(), super.dispose();
				}
			}
			e.$LO = C;
		})
