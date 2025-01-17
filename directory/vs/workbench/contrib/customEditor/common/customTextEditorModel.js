import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../services/textfile/common/textfiles.js';
define(
			de[3680],
			he([1, 0, 6, 3, 19, 42, 85]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zoc = void 0);
				let m = (d = class extends i.$1c {
					static async create(u, a, h) {
						return u.invokeFunction(async (c) => {
							const g = await c.get(E.$MO).createModelReference(h);
							return u.createInstance(d, a, h, g);
						});
					}
					constructor(u, a, h, c) {
						super(),
							(this.viewType = u),
							(this.f = a),
							(this.g = h),
							(this.h = c),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeOrphaned = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeReadonly = this.c.event),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeDirty = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeContent = this.m.event),
							this.D(h),
							(this.a = this.h.files.get(a)),
							this.a &&
								(this.D(this.a.onDidChangeOrphaned(() => this.b.fire())),
								this.D(this.a.onDidChangeReadonly(() => this.c.fire()))),
							this.D(
								this.h.files.onDidChangeDirty((n) => {
									(0, w.$gh)(this.resource, n.resource) &&
										(this.j.fire(), this.m.fire());
								}),
							);
					}
					get resource() {
						return this.f;
					}
					isReadonly() {
						return this.g.object.isReadonly();
					}
					get backupId() {}
					get canHotExit() {
						return !0;
					}
					isDirty() {
						return this.h.isDirty(this.resource);
					}
					isOrphaned() {
						return !!this.a?.hasState(C.TextFileEditorModelState.ORPHAN);
					}
					async revert(u) {
						return this.h.revert(this.resource, u);
					}
					saveCustomEditor(u) {
						return this.h.save(this.resource, u);
					}
					async saveCustomEditorAs(u, a, h) {
						return !!(await this.h.saveAs(u, a, h));
					}
				});
				(e.$Zoc = m), (e.$Zoc = m = d = Ne([j(3, C.$kZ)], m));
			},
		),
		