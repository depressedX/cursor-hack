import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor.js';
import '../../../common/editor/editorModel.js';
import '../../../common/editor/diffEditorInput.js';
import './notebookEditorInput.js';
import '../../../services/editor/common/editorService.js';
define(
			de[1305],
			he([1, 0, 44, 416, 296, 360, 18]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rEc = void 0);
				class m extends i.$PO {
					constructor(a, h) {
						super(), (this.original = a), (this.modified = h);
					}
				}
				let r = class extends w.$GVb {
					static {
						d = this;
					}
					static create(a, h, c, n, g, p) {
						const o = E.$TIb.getOrCreate(a, g, void 0, p),
							f = E.$TIb.getOrCreate(a, h, void 0, p);
						return a.createInstance(d, c, n, o, f, p);
					}
					static {
						this.ID = "workbench.input.diffNotebookInput";
					}
					get resource() {
						return this.modified.resource;
					}
					get editorId() {
						return this.viewType;
					}
					constructor(a, h, c, n, g, p) {
						super(a, h, c, n, void 0, p),
							(this.original = c),
							(this.modified = n),
							(this.viewType = g),
							(this.C = null),
							(this.F = null),
							(this.G = void 0);
					}
					get typeId() {
						return d.ID;
					}
					async resolve() {
						const [a, h] = await Promise.all([
							this.original.resolve(),
							this.modified.resolve(),
						]);
						if ((this.G?.dispose(), !h))
							throw new Error(
								`Fail to resolve modified editor model for resource ${this.modified.resource} with notebookType ${this.viewType}`,
							);
						if (!a)
							throw new Error(
								`Fail to resolve original editor model for resource ${this.original.resource} with notebookType ${this.viewType}`,
							);
						return (
							(this.F = a),
							(this.C = h),
							(this.G = new m(this.F, this.C)),
							this.G
						);
					}
					toUntyped() {
						const a = { resource: this.original.resource },
							h = { resource: this.resource };
						return {
							original: a,
							modified: h,
							primary: h,
							secondary: a,
							options: { override: this.viewType },
						};
					}
					matches(a) {
						return this === a
							? !0
							: a instanceof d
								? this.modified.matches(a.modified) &&
									this.original.matches(a.original) &&
									this.viewType === a.viewType
								: (0, t.$j1)(a)
									? this.modified.matches(a.modified) &&
										this.original.matches(a.original) &&
										this.editorId !== void 0 &&
										(this.editorId === a.options?.override ||
											a.options?.override === void 0)
									: !1;
					}
					dispose() {
						super.dispose(),
							this.G?.dispose(),
							(this.G = void 0),
							this.original.dispose(),
							this.modified.dispose(),
							(this.F = null),
							(this.C = null);
					}
				};
				(e.$rEc = r), (e.$rEc = r = d = Ne([j(5, C.$IY)], r));
			},
		),
		