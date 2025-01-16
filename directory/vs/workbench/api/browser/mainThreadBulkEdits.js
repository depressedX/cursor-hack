define(
			de[1303],
			he([1, 0, 76, 197, 199, 34, 68, 88, 572, 70, 137, 101]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wmc = void 0),
					(e.$xmc = c);
				let h = class {
					constructor(g, p, o, f, b) {
						(this.a = p), (this.b = o), (this.c = f), (this.d = b);
					}
					dispose() {}
					$tryApplyWorkspaceEdit(g, p, o) {
						const f = c(g.value, this.c);
						return this.d?.isEnabled() === !0 &&
							this.d.maybeInterceptBulkEdit(f)
							? Promise.resolve(!1)
							: this.a
									.apply(f, { undoRedoGroupId: p, respectAutoSaveConfig: o })
									.then(
										(b) => b.isApplied,
										(b) => (this.b.warn(`IGNORING workspace edit: ${b}`), !1),
									);
					}
				};
				(e.$wmc = h),
					(e.$wmc = h =
						Ne(
							[
								(0, a.$tmc)(d.$lbb.MainThreadBulkEdits),
								j(1, w.$rzb),
								j(2, E.$ik),
								j(3, C.$Vl),
								j(4, u.$lfc),
							],
							h,
						));
				function c(n, g, p) {
					if (!n || !n.edits) return n;
					const o = (0, i.$ji)(n);
					for (const f of o.edits) {
						if (
							(w.$tzb.is(f) && (f.resource = g.asCanonicalUri(f.resource)),
							w.$uzb.is(f))
						) {
							if (f.options) {
								const b = f.options?.contents;
								if (b)
									if (b.type === "base64")
										f.options.contents = Promise.resolve((0, t.$af)(b.value));
									else if (p) f.options.contents = p(b.id);
									else throw new Error("Could not revive data transfer file");
							}
							(f.newResource =
								f.newResource && g.asCanonicalUri(f.newResource)),
								(f.oldResource =
									f.oldResource && g.asCanonicalUri(f.oldResource));
						}
						if (m.$hJb.is(f)) {
							f.resource = g.asCanonicalUri(f.resource);
							const b = f.cellEdit;
							b.editType === r.CellEditType.Replace &&
								(f.cellEdit = {
									...b,
									cells: b.cells.map((s) => ({
										...s,
										outputs: s.outputs.map((l) => ({
											...l,
											outputs: l.items.map((y) => ({
												mime: y.mime,
												data: y.valueBytes,
											})),
										})),
									})),
								});
						}
					}
					return n;
				}
			},
		),
		