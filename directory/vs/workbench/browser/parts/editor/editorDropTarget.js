define(
			de[4008],
			he([
				1, 0, 323, 7, 595, 15, 3, 12, 28, 4, 10, 5, 30, 51, 35, 25, 347, 362,
				548, 44, 123, 66, 18, 764, 749, 45, 2338,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fuc = void 0);
				function T(D) {
					return D.getValue("editor.dropIntoEditor.enabled");
				}
				function P(D) {
					return D.shiftKey;
				}
				let k = class extends n.$pP {
					static {
						I = this;
					}
					static {
						this.a = "monaco-workbench-editor-drop-overlay";
					}
					get disposed() {
						return !!this.j;
					}
					constructor(M, N, A, R, O, B, U, z, F) {
						super(N),
							(this.y = M),
							(this.z = A),
							(this.C = R),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.I = z),
							(this.J = F),
							(this.r = p.$ozb.getInstance()),
							(this.s = p.$ozb.getInstance()),
							(this.t = p.$ozb.getInstance()),
							(this.m = this.D(new E.$Yh(() => this.dispose(), 300))),
							(this.u = T(this.z) && this.N()),
							this.L();
					}
					L() {
						const M = this.W(),
							N = (this.b = document.createElement("div"));
						(N.id = I.a),
							(N.style.top = `${M}px`),
							this.y.element.appendChild(N),
							this.y.element.classList.add("dragged-over"),
							this.D(
								(0, C.$Yc)(() => {
									N.remove(), this.y.element.classList.remove("dragged-over");
								}),
							),
							(this.c = document.createElement("div")),
							this.c.classList.add("editor-group-overlay-indicator"),
							N.appendChild(this.c),
							this.u &&
								((this.f = (0, w.$kib)(
									(0, r.localize)(3440, null, d.$m ? "\u21E7" : "Shift"),
									{},
								)),
								this.f.classList.add("editor-group-overlay-drop-into-prompt"),
								this.c.appendChild(this.f)),
							this.M(N),
							this.updateStyles();
					}
					updateStyles() {
						const M = (0, m.$wg)(this.c);
						M.style.backgroundColor = this.w(s.$kFb) || "";
						const N = this.w(c.$PP);
						if (
							((M.style.outlineColor = N || ""),
							(M.style.outlineOffset = N ? "-2px" : ""),
							(M.style.outlineStyle = N ? "dashed" : ""),
							(M.style.outlineWidth = N ? "2px" : ""),
							this.f)
						) {
							(this.f.style.backgroundColor = this.w(s.$mFb) ?? ""),
								(this.f.style.color = this.w(s.$lFb) ?? "");
							const A = this.w(s.$nFb);
							A
								? ((this.f.style.borderWidth = "1px"),
									(this.f.style.borderStyle = "solid"),
									(this.f.style.borderColor = A))
								: (this.f.style.borderWidth = "0");
						}
					}
					M(M) {
						this.D(
							new i.$Hhb(M, {
								onDragOver: (N) => {
									if (this.u && P(N)) {
										this.dispose();
										return;
									}
									const A = (0, i.$Ogb)().document.elementsFromPoint(
											N.clientX,
											N.clientY,
										),
										R = A.find((x) => x.classList.contains("full-input-box"));
									if (R && R.querySelector(".aislash-editor-input")) {
										const H = new DragEvent(N.type, N);
										R.dispatchEvent(H), this.X();
										return;
									}
									const O = A.find(
										(x) => x.className === "aislash-editor-input",
									);
									if (O) {
										const x = new DragEvent(N.type, N);
										O.dispatchEvent(x), this.X();
										return;
									}
									const B = this.s.hasData(o.$MSb.prototype),
										U = this.r.hasData(o.$LSb.prototype);
									!U &&
										!B &&
										N.dataTransfer &&
										(N.dataTransfer.dropEffect = "copy");
									let z = !0;
									if (B) z = this.Q(N);
									else if (U) {
										const x = this.r.getData(o.$LSb.prototype);
										Array.isArray(x) &&
											x.length > 0 &&
											(z = this.Q(N, x[0].identifier));
									}
									if (!z) {
										const x = this.O();
										if (x === this.y && (B || (U && x.count < 2))) {
											this.X();
											return;
										}
									}
									let F = !!this.G.partOptions.splitOnDragAndDrop;
									this.R(N) && (F = !F),
										this.S(N.offsetX, N.offsetY, B, F),
										this.J.setNonPersistentStorage(
											"reactiveDragTakeover",
											Date.now(),
										),
										this.m.isScheduled() && this.m.cancel();
								},
								onDragLeave: (N) => this.dispose(),
								onDragEnd: (N) => this.dispose(),
								onDrop: (N) => {
									const A = (0, i.$Ogb)().document.elementsFromPoint(
											N.clientX,
											N.clientY,
										),
										R = A.find((B) => B.classList.contains("full-input-box"));
									if (
										R &&
										(N.preventDefault(),
										R.querySelector(".aislash-editor-input"))
									) {
										const U = new DragEvent(N.type, N);
										R.dispatchEvent(U), this.X(), this.dispose();
										return;
									}
									const O = A.find(
										(B) => B.className === "aislash-editor-input",
									);
									if (O) {
										const B = new DragEvent(N.type, N);
										O.dispatchEvent(B), this.X(), this.dispose();
										return;
									}
									i.$ahb.stop(N, !0),
										this.dispose(),
										this.g && this.P(N, this.g.splitDirection);
								},
							}),
						),
							this.D(
								(0, i.$0fb)(M, i.$$gb.MOUSE_OVER, () => {
									this.m.isScheduled() || this.m.schedule();
								}),
							);
					}
					N() {
						return !!this.y.activeEditor?.hasCapability(
							b.EditorInputCapabilities.CanDropIntoEditor,
						);
					}
					O() {
						if (this.s.hasData(o.$MSb.prototype)) {
							const M = this.s.getData(o.$MSb.prototype);
							if (Array.isArray(M) && M.length > 0)
								return this.G.getGroup(M[0].identifier);
						} else if (this.r.hasData(o.$LSb.prototype)) {
							const M = this.r.getData(o.$LSb.prototype);
							if (Array.isArray(M) && M.length > 0)
								return this.G.getGroup(M[0].identifier.groupId);
						}
					}
					async P(M, N) {
						const A = () => {
							let R;
							return (
								typeof N == "number"
									? (R = this.G.addGroup(this.y, N))
									: (R = this.y),
								R
							);
						};
						if (this.s.hasData(o.$MSb.prototype)) {
							const R = this.s.getData(o.$MSb.prototype);
							if (Array.isArray(R) && R.length > 0) {
								const O = this.G.getGroup(R[0].identifier);
								if (O) {
									if (typeof N != "number" && O === this.y) return;
									let B;
									if (typeof N == "number")
										this.Q(M)
											? (B = this.G.copyGroup(O, this.y, N))
											: (B = this.G.moveGroup(O, this.y, N));
									else {
										let U;
										this.Q(M) && (U = { mode: l.MergeGroupMode.COPY_EDITORS }),
											this.G.mergeGroup(O, this.y, U);
									}
									B && this.G.activateGroup(B);
								}
								this.s.clearData(o.$MSb.prototype);
							}
						} else if (this.r.hasData(o.$LSb.prototype)) {
							const R = this.r.getData(o.$LSb.prototype);
							if (Array.isArray(R) && R.length > 0) {
								const O = R,
									B = R[0].identifier,
									U = this.G.getGroup(B.groupId);
								if (U) {
									const z = this.Q(M, B);
									let F;
									if (
										this.G.partOptions.closeEmptyGroups &&
										U.count === 1 &&
										typeof N == "number" &&
										!z
									)
										F = this.G.moveGroup(U, this.y, N);
									else {
										if (((F = A()), U === F)) return;
										const x = O.map((H) => ({
											editor: H.identifier.editor,
											options: (0, f.$IEb)(U, H.identifier.editor, {
												pinned: !0,
												sticky: U.isSticky(H.identifier.editor),
											}),
										}));
										z ? U.copyEditors(x, F) : U.moveEditors(x, F);
									}
									F.focus();
								}
								this.r.clearData(o.$LSb.prototype);
							}
						} else if (this.t.hasData(v.$b3b.prototype)) {
							const R = this.t.getData(v.$b3b.prototype);
							if (Array.isArray(R) && R.length > 0) {
								const O = [];
								for (const B of R) {
									const U = await this.H.removeDragOperationTransfer(
										B.identifier,
									);
									if (U) {
										const z = await (0, o.$NSb)(U);
										O.push(
											...z.map((F) => ({
												...F,
												options: { ...F.options, pinned: !0 },
											})),
										);
									}
								}
								O.length && this.F.openEditors(O, A(), { validateTrust: !0 });
							}
							this.t.clearData(v.$b3b.prototype);
						} else
							this.C.createInstance(o.$OSb, {
								allowWorkspaceOpen: !d.$r || (0, g.$bj)(this.I.getWorkspace()),
							}).handleDrop(
								M,
								(0, i.getWindow)(this.y.element),
								() => A(),
								(O) => O?.focus(),
							);
					}
					Q(M, N) {
						return N?.editor.hasCapability(b.EditorInputCapabilities.Singleton)
							? !1
							: (M.ctrlKey && !d.$m) || (M.altKey && d.$m);
					}
					R(M) {
						return (M.altKey && !d.$m) || (M.shiftKey && d.$m);
					}
					S(M, N, A, R) {
						const O = this.G.partOptions.openSideBySideDirection === "right",
							B = this.y.element.clientWidth,
							U = this.y.element.clientHeight - this.W();
						let z, F;
						R
							? (A ? (z = O ? 0.3 : 0.1) : (z = 0.1),
								A ? (F = O ? 0.1 : 0.3) : (F = 0.1))
							: ((z = 0), (F = 0));
						const x = B * z,
							H = U * F,
							q = B / 3,
							V = U / 3;
						let G;
						switch (
							(M > x && M < B - x && N > H && N < U - H
								? (G = void 0)
								: O
									? M < q
										? (G = l.GroupDirection.LEFT)
										: M > q * 2
											? (G = l.GroupDirection.RIGHT)
											: N < U / 2
												? (G = l.GroupDirection.UP)
												: (G = l.GroupDirection.DOWN)
									: N < V
										? (G = l.GroupDirection.UP)
										: N > V * 2
											? (G = l.GroupDirection.DOWN)
											: M < B / 2
												? (G = l.GroupDirection.LEFT)
												: (G = l.GroupDirection.RIGHT),
							G)
						) {
							case l.GroupDirection.UP:
								this.U({ top: "0", left: "0", width: "100%", height: "50%" }),
									this.Y(!1);
								break;
							case l.GroupDirection.DOWN:
								this.U({ top: "50%", left: "0", width: "100%", height: "50%" }),
									this.Y(!1);
								break;
							case l.GroupDirection.LEFT:
								this.U({ top: "0", left: "0", width: "50%", height: "100%" }),
									this.Y(!1);
								break;
							case l.GroupDirection.RIGHT:
								this.U({ top: "0", left: "50%", width: "50%", height: "100%" }),
									this.Y(!1);
								break;
							default:
								this.U({ top: "0", left: "0", width: "100%", height: "100%" }),
									this.Y(!0);
						}
						const K = (0, m.$wg)(this.c);
						(K.style.opacity = "1"),
							setTimeout(() => K.classList.add("overlay-move-transition"), 0),
							(this.g = { splitDirection: G });
					}
					U(M) {
						const [N, A] = (0, m.$xg)(this.b, this.c),
							R = this.W();
						R
							? (N.style.height = `calc(100% - ${R}px)`)
							: (N.style.height = "100%"),
							(A.style.top = M.top),
							(A.style.left = M.left),
							(A.style.width = M.width),
							(A.style.height = M.height);
					}
					W() {
						return !this.y.isEmpty && this.G.partOptions.showTabs === "multiple"
							? this.y.titleHeight.offset
							: 0;
					}
					X() {
						const M = (0, m.$wg)(this.c);
						this.U({ top: "0", left: "0", width: "100%", height: "100%" }),
							(M.style.opacity = "0"),
							M.classList.remove("overlay-move-transition"),
							(this.g = void 0);
					}
					Y(M) {
						this.f && (this.f.style.opacity = M ? "1" : "0");
					}
					contains(M) {
						return M === this.b || M === this.c;
					}
					dispose() {
						super.dispose(), (this.j = !0);
					}
				};
				k = I = Ne(
					[
						j(1, n.$iP),
						j(2, u.$gj),
						j(3, a.$Li),
						j(4, y.$IY),
						j(5, l.$EY),
						j(6, $.$c3b),
						j(7, g.$Vi),
						j(8, S.$0zb),
					],
					k,
				);
				let L = class extends n.$pP {
					constructor(M, N, A, R, O, B) {
						super(R),
							(this.g = M),
							(this.j = N),
							(this.m = A),
							(this.r = O),
							(this.s = B),
							(this.b = 0),
							(this.c = p.$ozb.getInstance()),
							(this.f = p.$ozb.getInstance()),
							this.u();
					}
					get t() {
						if (this.a && !this.a.disposed) return this.a;
					}
					u() {
						this.D((0, i.$0fb)(this.g, i.$$gb.DRAG_ENTER, (M) => this.y(M))),
							this.D((0, i.$0fb)(this.g, i.$$gb.DRAG_LEAVE, () => this.z()));
						for (const M of [this.g, (0, i.getWindow)(this.g)])
							this.D((0, i.$0fb)(M, i.$$gb.DRAG_END, () => this.C()));
					}
					y(M) {
						if (T(this.r) && P(M)) return;
						if (
							(this.b++,
							!this.c.hasData(o.$LSb.prototype) &&
								!this.f.hasData(o.$MSb.prototype) &&
								M.dataTransfer)
						) {
							const A = h.$Io.as(p.$nzb.DragAndDropContribution).getAll(),
								R = Array.from(A).map((O) => O.dataFormatKey);
							if (
								!(0, p.$mzb)(
									M,
									t.$Ohb.FILES,
									p.$hzb.FILES,
									t.$Ohb.RESOURCES,
									p.$hzb.EDITORS,
									...R,
								)
							) {
								M.dataTransfer.dropEffect = "none";
								return;
							}
						}
						this.G(!0);
						const N = M.target;
						if (N && (this.t && !this.t.contains(N) && this.H(), !this.t)) {
							const A = this.F(N);
							A && (this.a = this.s.createInstance(k, A));
						}
					}
					z() {
						this.b--, this.b === 0 && this.G(!1);
					}
					C() {
						(this.b = 0), this.G(!1), this.H();
					}
					F(M) {
						return this.m.groups.find(
							(A) => (0, i.$Bgb)(M, A.element) || this.j.containsGroup?.(A),
						);
					}
					G(M) {
						this.g.classList.toggle("dragged-over", M);
					}
					dispose() {
						super.dispose(), this.H();
					}
					H() {
						this.t && (this.t.dispose(), (this.a = void 0));
					}
				};
				(e.$Fuc = L),
					(e.$Fuc = L =
						Ne([j(2, l.$EY), j(3, n.$iP), j(4, u.$gj), j(5, a.$Li)], L));
			},
		),
		