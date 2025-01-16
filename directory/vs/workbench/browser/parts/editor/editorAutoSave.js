define(
			de[3859],
			he([1, 0, 3, 170, 87, 44, 18, 66, 227, 334, 34, 90, 59, 68]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wuc = void 0);
				let n = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.editorAutoSave";
					}
					constructor(p, o, f, b, s, l, y, $) {
						super(),
							(this.j = p),
							(this.m = o),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.s = l),
							(this.t = y),
							(this.u = $),
							(this.a = new Map()),
							(this.b = void 0),
							(this.c = void 0),
							(this.f = this.D(new t.$Zc())),
							(this.g = new h.$Gc((v) => this.u.extUri.getComparisonKey(v))),
							(this.h = new h.$Gc((v) => this.u.extUri.getComparisonKey(v)));
						for (const v of this.r.dirtyWorkingCopies) this.J(v);
						this.w();
					}
					w() {
						this.D(this.m.onDidChangeFocus((p) => this.z(p))),
							this.D(this.m.onDidChangeActiveWindow(() => this.C())),
							this.D(this.n.onDidActiveEditorChange(() => this.F())),
							this.D(this.j.onDidChangeAutoSaveConfiguration(() => this.H())),
							this.D(this.r.onDidRegister((p) => this.J(p))),
							this.D(this.r.onDidUnregister((p) => this.L(p))),
							this.D(this.r.onDidChangeDirty((p) => this.M(p))),
							this.D(this.r.onDidChangeContent((p) => this.N(p))),
							this.D(
								this.t.onMarkerChanged((p) =>
									this.y(p, i.AutoSaveDisabledReason.ERRORS),
								),
							),
							this.D(
								this.j.onDidChangeAutoSaveDisabled((p) =>
									this.y([p], i.AutoSaveDisabledReason.DISABLED),
								),
							);
					}
					y(p, o) {
						for (const f of p) {
							const b = this.g.get(f);
							if (b?.condition === o)
								b.workingCopy.isDirty() &&
									this.j.getAutoSaveMode(b.workingCopy.resource, b.reason)
										.mode !== i.AutoSaveMode.OFF &&
									(this.P(b.workingCopy),
									this.s.trace(
										"[editor auto save] running auto save from condition change event",
										b.workingCopy.resource.toString(),
										b.workingCopy.typeId,
									),
									b.workingCopy.save({ reason: b.reason }));
							else {
								const s = this.h.get(f);
								s?.condition === o &&
									!s.editor.editor.isDisposed() &&
									s.editor.editor.isDirty() &&
									this.j.getAutoSaveMode(s.editor.editor, s.reason).mode !==
										i.AutoSaveMode.OFF &&
									(this.h.delete(f),
									this.s.trace(
										`[editor auto save] running auto save from condition change event with reason ${s.reason}`,
									),
									this.n.save(s.editor, { reason: s.reason }));
							}
						}
					}
					z(p) {
						p || this.G(E.SaveReason.WINDOW_CHANGE);
					}
					C() {
						this.G(E.SaveReason.WINDOW_CHANGE);
					}
					F() {
						this.b &&
							typeof this.c == "number" &&
							this.G(E.SaveReason.FOCUS_CHANGE, {
								groupId: this.c,
								editor: this.b,
							});
						const p = this.q.activeGroup,
							o = (this.b = p.activeEditor ?? void 0);
						(this.c = p.id), this.f.clear();
						const f = this.n.activeEditorPane;
						o &&
							f &&
							this.f.add(
								f.onDidBlur(() => {
									this.G(E.SaveReason.FOCUS_CHANGE, {
										groupId: p.id,
										editor: o,
									});
								}),
							);
					}
					G(p, o) {
						if (o) {
							if (
								!o.editor.isDirty() ||
								o.editor.isReadonly() ||
								o.editor.hasCapability(E.EditorInputCapabilities.Untitled)
							)
								return;
							const f = this.j.getAutoSaveMode(o.editor, p);
							f.mode !== i.AutoSaveMode.OFF
								? ((p === E.SaveReason.WINDOW_CHANGE &&
										(f.mode === i.AutoSaveMode.ON_FOCUS_CHANGE ||
											f.mode === i.AutoSaveMode.ON_WINDOW_CHANGE)) ||
										(p === E.SaveReason.FOCUS_CHANGE &&
											f.mode === i.AutoSaveMode.ON_FOCUS_CHANGE)) &&
									(this.s.trace(
										`[editor auto save] triggering auto save with reason ${p}`,
									),
									this.n.save(o, { reason: p }))
								: o.editor.resource &&
									(f.reason === i.AutoSaveDisabledReason.ERRORS ||
										f.reason === i.AutoSaveDisabledReason.DISABLED) &&
									this.h.set(o.editor.resource, {
										editor: o,
										reason: p,
										condition: f.reason,
									});
						} else this.I(p);
					}
					H() {
						let p;
						switch (this.j.getAutoSaveMode(void 0).mode) {
							case i.AutoSaveMode.ON_FOCUS_CHANGE:
								p = E.SaveReason.FOCUS_CHANGE;
								break;
							case i.AutoSaveMode.ON_WINDOW_CHANGE:
								p = E.SaveReason.WINDOW_CHANGE;
								break;
							case i.AutoSaveMode.AFTER_SHORT_DELAY:
							case i.AutoSaveMode.AFTER_LONG_DELAY:
								p = E.SaveReason.AUTO;
								break;
						}
						p && this.I(p);
					}
					I(p) {
						for (const o of this.r.dirtyWorkingCopies) {
							if (o.capabilities & r.WorkingCopyCapabilities.Untitled) continue;
							const f = this.j.getAutoSaveMode(o.resource, p);
							f.mode !== i.AutoSaveMode.OFF
								? o.save({ reason: p })
								: (f.reason === i.AutoSaveDisabledReason.ERRORS ||
										f.reason === i.AutoSaveDisabledReason.DISABLED) &&
									this.g.set(o.resource, {
										workingCopy: o,
										reason: p,
										condition: f.reason,
									});
						}
					}
					J(p) {
						p.isDirty() && this.O(p);
					}
					L(p) {
						this.P(p);
					}
					M(p) {
						p.isDirty() ? this.O(p) : this.P(p);
					}
					N(p) {
						p.isDirty() && this.O(p);
					}
					O(p) {
						if (p.capabilities & r.WorkingCopyCapabilities.Untitled) return;
						const o = this.j.getAutoSaveConfiguration(p.resource).autoSaveDelay;
						if (typeof o != "number") return;
						this.P(p),
							this.s.trace(
								`[editor auto save] scheduling auto save after ${o}ms`,
								p.resource.toString(),
								p.typeId,
							);
						const f = setTimeout(() => {
							if ((this.P(p), p.isDirty())) {
								const b = E.SaveReason.AUTO,
									s = this.j.getAutoSaveMode(p.resource, b);
								s.mode !== i.AutoSaveMode.OFF
									? (this.s.trace(
											"[editor auto save] running auto save",
											p.resource.toString(),
											p.typeId,
										),
										p.save({ reason: b }))
									: (s.reason === i.AutoSaveDisabledReason.ERRORS ||
											s.reason === i.AutoSaveDisabledReason.DISABLED) &&
										this.g.set(p.resource, {
											workingCopy: p,
											reason: b,
											condition: s.reason,
										});
							}
						}, o);
						this.a.set(
							p,
							(0, t.$Yc)(() => {
								this.s.trace(
									"[editor auto save] clearing pending auto save",
									p.resource.toString(),
									p.typeId,
								),
									clearTimeout(f);
							}),
						);
					}
					P(p) {
						(0, t.$Vc)(this.a.get(p)),
							this.a.delete(p),
							this.g.delete(p.resource),
							this.h.delete(p.resource);
					}
				};
				(e.$wuc = n),
					(e.$wuc = n =
						Ne(
							[
								j(0, i.$_Y),
								j(1, w.$asb),
								j(2, C.$IY),
								j(3, d.$EY),
								j(4, m.$gY),
								j(5, u.$ik),
								j(6, a.$aM),
								j(7, c.$Vl),
							],
							n,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	