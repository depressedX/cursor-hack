define(de[4010], he([1, 0, 1055, 7, 1515]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ntc = void 0);
			class w extends t.$qtc {
				constructor() {
					super(...arguments), (this.kb = null);
				}
				ib(C) {
					return { primary: [], secondary: [] };
				}
				openEditor(C) {
					return this.Ab();
				}
				openEditors(C) {
					return this.Ab();
				}
				Ab() {
					const C = this.Bb();
					return (this.kb = this.R.activeEditor), C;
				}
				Bb() {
					return !!(
						(!this.kb && this.R.activeEditor) ||
						(this.kb && !this.R.activeEditor) ||
						!this.kb ||
						!this.R.isActive(this.kb)
					);
				}
				beforeCloseEditor(C) {}
				closeEditor(C) {}
				closeEditors(C) {}
				moveEditor(C, d, m) {}
				pinEditor(C) {}
				stickEditor(C) {}
				unstickEditor(C) {}
				setActive(C) {}
				updateEditorSelections() {}
				updateEditorLabel(C) {}
				updateEditorDirty(C) {}
				getHeight() {
					return 0;
				}
				layout(C) {
					return new i.$pgb(C.container.width, this.getHeight());
				}
			}
			e.$ntc = w;
		}),
		