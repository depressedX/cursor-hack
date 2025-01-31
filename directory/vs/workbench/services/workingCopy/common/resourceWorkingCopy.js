import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/files/common/files.js';
define(
			de[1910],
			he([1, 0, 15, 33, 6, 3, 22]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*cancellation*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*files*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$eZ = void 0);
				let d = class extends E.$1c {
					constructor(r, u) {
						super(),
							(this.resource = r),
							(this.a = u),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeOrphaned = this.b.event),
							(this.c = !1),
							(this.h = this.D(new w.$re())),
							(this.onWillDispose = this.h.event),
							this.D(this.a.onDidFilesChange((a) => this.f(a)));
					}
					isOrphaned() {
						return this.c;
					}
					async f(r) {
						let u = !1,
							a;
						if (
							(this.c
								? r.contains(this.resource, C.FileChangeType.ADDED) &&
									((a = !1), (u = !0))
								: r.contains(this.resource, C.FileChangeType.DELETED) &&
									((a = !0), (u = !0)),
							u && this.c !== a)
						) {
							let h = !1;
							a &&
								(await (0, t.$Nh)(100, i.CancellationToken.None),
								this.isDisposed()
									? (h = !0)
									: (h = !(await this.a.exists(this.resource)))),
								this.c !== h && !this.isDisposed() && this.g(h);
						}
					}
					g(r) {
						this.c !== r && ((this.c = r), this.b.fire());
					}
					isDisposed() {
						return this.B.isDisposed;
					}
					dispose() {
						(this.c = !1), this.h.fire(), super.dispose();
					}
					isModified() {
						return this.isDirty();
					}
				};
				(e.$eZ = d), (e.$eZ = d = Ne([j(1, C.$ll)], d));
			},
		)
