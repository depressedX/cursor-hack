define(
			de[4105],
			he([1, 0, 59, 856, 3, 66, 5, 360, 6, 44, 18, 8, 176, 128, 84]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pFc = void 0);
				let g = class {
					constructor(o, f, b, s) {
						(this.i = o),
							(this.j = s),
							(this.a = 1),
							(this.b = new w.$Zc()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new m.$re()),
							(this.g = new m.$re()),
							(this.onDidAddNotebookEditor = this.f.event),
							(this.onDidRemoveNotebookEditor = this.g.event),
							(this.h = new Map());
						const l = ($) => {
							const { id: v } = $,
								S = [];
							S.push(
								$.onDidCloseEditor((I) => {
									const T = this.h.get($.id);
									if (!T) return;
									(I.editor instanceof d.$TIb
										? [I.editor]
										: (0, d.$UIb)(I.editor)
											? I.editor.editorInputs
											: []
									).forEach((k) => {
										const L = T.get(k.resource),
											D = L?.findIndex((N) => N.editorType === k.typeId);
										if (!L || D === void 0 || D === -1) return;
										const M = L.splice(D, 1)[0];
										(M.token = void 0), this.k(M.widget), (M.widget = void 0);
									});
								}),
							),
								S.push(
									$.onWillMoveEditor((I) => {
										(0, d.$VIb)(I.editor) &&
											this.l(I.editor, I.groupId, I.target),
											(0, d.$UIb)(I.editor) &&
												I.editor.editorInputs.forEach((T) => {
													this.l(T, I.groupId, I.target);
												});
									}),
								),
								this.d.set(v, S);
						};
						this.b.add(o.onDidAddGroup(l)),
							o.whenReady.then(() => o.groups.forEach(l)),
							this.b.add(
								o.onDidRemoveGroup(($) => {
									const v = this.d.get($.id);
									v && (v.forEach((I) => I.dispose()), this.d.delete($.id));
									const S = this.h.get($.id);
									if ((this.h.delete($.id), S))
										for (const I of S.values())
											for (const T of I) (T.token = void 0), this.k(T.widget);
								}),
							);
						const y = h.$lJb.bindTo(b);
						this.b.add(
							f.onDidEditorsChange(($) => {
								$.event.kind === r.GroupModelChangeKind.EDITOR_OPEN && !y.get()
									? f.editors.find((v) => v.editorId === "interactive") &&
										y.set(!0)
									: $.event.kind === r.GroupModelChangeKind.EDITOR_CLOSE &&
										y.get() &&
										(f.editors.find((v) => v.editorId === "interactive") ||
											y.set(!1));
							}),
						);
					}
					dispose() {
						this.b.dispose(),
							this.f.dispose(),
							this.g.dispose(),
							this.d.forEach((o) => {
								o.forEach((f) => f.dispose());
							}),
							this.d.clear();
					}
					k(o) {
						o.onWillHide();
						const f = o.getDomNode();
						o.dispose(), f.remove();
					}
					l(o, f, b) {
						const s = this.i.getPart(f),
							l = this.i.getPart(b);
						if (s.windowId !== l.windowId) return;
						const y = this.h
							.get(b)
							?.get(o.resource)
							?.findIndex((T) => T.editorType === o.typeId);
						if (y !== void 0 && y !== -1) return;
						const $ = this.h
							.get(f)
							?.get(o.resource)
							?.find((T) => T.editorType === o.typeId);
						if (!$) throw new Error("no widget at source group");
						const v = this.h.get(f)?.get(o.resource);
						if (v) {
							const T = v.findIndex((P) => P.editorType === o.typeId);
							T !== -1 && v.splice(T, 1);
						}
						let S = this.h.get(b);
						S || ((S = new t.$Gc()), this.h.set(b, S));
						const I = S.get(o.resource) ?? [];
						I?.push($), S.set(o.resource, I);
					}
					retrieveExistingWidgetFromURI(o) {
						for (const f of this.h.values()) {
							const b = f.get(o);
							if (b && b.length > 0) return this.n(b[0].token, b[0]);
						}
					}
					retrieveAllExistingWidgets() {
						const o = [];
						for (const f of this.h.values())
							for (const b of f.values())
								for (const s of b) o.push(this.n(s.token, s));
						return o;
					}
					retrieveWidget(o, f, b, s, l, y) {
						let $ = this.h
							.get(f)
							?.get(b.resource)
							?.find((v) => v.editorType === b.typeId);
						if ($) $.token = this.a++;
						else {
							const v = o.get(a.$6j),
								S = o.get(n.$bO),
								I = this.m(v, S, s, y, l),
								T = this.a++;
							$ = { widget: I, editorType: b.typeId, token: T };
							let P = this.h.get(f);
							P || ((P = new t.$Gc()), this.h.set(f, P));
							const k = P.get(b.resource) ?? [];
							k.push($), P.set(b.resource, k);
						}
						return this.n($.token, $);
					}
					m(o, f, b, s, l) {
						const y = this.j.createChild(new c.$Ki([a.$6j, o], [n.$bO, f])),
							$ = b ?? (0, i.$14b)();
						return y.createInstance(
							i.$24b,
							{ ...$, codeWindow: s ?? $.codeWindow },
							l,
						);
					}
					n(o, f) {
						return {
							get value() {
								return f.token === o ? f.widget : void 0;
							},
						};
					}
					addNotebookEditor(o) {
						this.c.set(o.getId(), o), this.f.fire(o);
					}
					removeNotebookEditor(o) {
						this.c.has(o.getId()) && (this.c.delete(o.getId()), this.g.fire(o));
					}
					getNotebookEditor(o) {
						return this.c.get(o);
					}
					getNotebookEditorByCellEditorId(o) {
						for (const f of this.c.values())
							if (f.codeEditors.some((b) => b[1].getId() === o)) return f;
					}
					getCellEditorsBeforeCellEditorId(o) {
						for (const f of this.c.values())
							if (f.codeEditors.some((b) => b[1].getId() === o)) {
								const b = f.codeEditors.findIndex((l) => l[1].getId() === o),
									s = f.codeEditors[b][0];
								return f.codeEditors.slice(0, b).map((l) => l[1]);
							}
					}
					listNotebookEditors() {
						return [...this.c].map((o) => o[1]);
					}
				};
				(e.$pFc = g),
					(e.$pFc = g =
						Ne([j(0, E.$EY), j(1, u.$IY), j(2, a.$6j), j(3, C.$Li)], g));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	