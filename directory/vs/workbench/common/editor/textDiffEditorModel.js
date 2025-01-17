import '../../../../require.js';
import '../../../../exports.js';
import './diffEditorModel.js';
define(de[1226], he([1, 0, 1699]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$FVb = void 0);
			class i extends t.$EVb {
				get originalModel() {
					return this.a;
				}
				get modifiedModel() {
					return this.b;
				}
				get textDiffEditorModel() {
					return this.j;
				}
				constructor(E, C) {
					super(E, C), (this.j = void 0), (this.a = E), (this.b = C), this.m();
				}
				async resolve() {
					await super.resolve(), this.m();
				}
				m() {
					this.originalModel?.isResolved() &&
						this.modifiedModel?.isResolved() &&
						(this.j
							? ((this.j.original = this.originalModel.textEditorModel),
								(this.j.modified = this.modifiedModel.textEditorModel))
							: (this.j = {
									original: this.originalModel.textEditorModel,
									modified: this.modifiedModel.textEditorModel,
								}));
				}
				isResolved() {
					return !!this.j;
				}
				isReadonly() {
					return !!this.modifiedModel && this.modifiedModel.isReadonly();
				}
				dispose() {
					(this.j = void 0), super.dispose();
				}
			}
			e.$FVb = i;
		}),
		