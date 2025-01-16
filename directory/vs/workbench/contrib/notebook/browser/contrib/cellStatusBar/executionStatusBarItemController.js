define(
			de[1062],
			he([1, 0, 15, 3, 12, 4, 5, 35, 26, 1742, 330, 856, 284, 70, 190, 161]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p, o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Fc = e.$5Fc = e.$4Fc = void 0),
					(e.$3Fc = f);
				function f(S, I = !0) {
					if (I && S < 1e3) return `${S}ms`;
					const T = Math.floor(S / 1e3 / 60),
						P = Math.floor(S / 1e3) % 60,
						k = Math.floor((S % 1e3) / 100);
					return T > 0 ? `${T}m ${P}.${k}s` : `${P}.${k}s`;
				}
				class b extends i.$1c {
					constructor(I, T) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.a = new Map()),
							(this.b = this.D(new r.$1Fc(this.c))),
							this.D(this.b.onDidChangeVisibleCells(this.h, this)),
							this.g();
					}
					g() {
						this.a.forEach(i.$Vc),
							this.a.clear(),
							this.h({ added: this.b.visibleCells, removed: [] });
					}
					h(I) {
						const T = this.c.getViewModel();
						if (T) {
							for (const P of I.removed)
								this.a.get(P.handle)?.dispose(), this.a.delete(P.handle);
							for (const P of I.added) this.a.set(P.handle, this.f(T, P));
						}
					}
					dispose() {
						super.dispose(), this.a.forEach(i.$Vc), this.a.clear();
					}
				}
				e.$4Fc = b;
				let s = class extends i.$1c {
					static {
						this.id = "workbench.notebook.statusBar.execState";
					}
					constructor(I, T) {
						super(), this.D(new b(I, (P, k) => T.createInstance(l, P, k)));
					}
				};
				(e.$5Fc = s), (e.$5Fc = s = Ne([j(1, C.$Li)], s)), (0, u.$PKb)(s.id, s);
				let l = class extends i.$1c {
					static {
						p = this;
					}
					static {
						this.a = 500;
					}
					constructor(I, T, P) {
						super(),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.b = []),
							(this.f = this.D(new i.$2c())),
							this.m(),
							this.D(
								this.j.onDidChangeExecution((k) => {
									k.type === n.NotebookExecutionType.cell &&
										k.affectsCell(this.h.uri) &&
										this.m();
								}),
							),
							this.D(this.h.model.onDidChangeInternalMetadata(() => this.m()));
					}
					async m() {
						const I = this.n();
						Array.isArray(I) &&
							(this.b = this.g.deltaCellStatusBarItems(this.b, [
								{ handle: this.h.handle, items: I },
							]));
					}
					n() {
						const I = this.j.getCellExecution(this.h.uri);
						if (
							I?.state === c.NotebookCellExecutionState.Executing &&
							typeof this.c != "number"
						)
							this.c = Date.now();
						else if (
							I?.state !== c.NotebookCellExecutionState.Executing &&
							typeof this.c == "number"
						) {
							const P = p.a - (Date.now() - this.c);
							if (P > 0) {
								this.f.value ||
									(this.f.value = (0, t.$Oh)(() => {
										(this.c = void 0), this.f.clear(), this.m();
									}, P));
								return;
							} else this.c = void 0;
						}
						return this.q(I, this.h.internalMetadata);
					}
					q(I, T) {
						const P = I?.state,
							{ lastRunSuccess: k } = T;
						return !P && k
							? [
									{
										text: `$(${h.$gOb.id})`,
										color: (0, d.$jP)(a.$54b),
										tooltip: (0, E.localize)(7725, null),
										alignment: c.CellStatusbarAlignment.Left,
										priority: Number.MAX_SAFE_INTEGER,
									},
								]
							: !P && k === !1
								? [
										{
											text: `$(${h.$hOb.id})`,
											color: (0, d.$jP)(a.$74b),
											tooltip: (0, E.localize)(7726, null),
											alignment: c.CellStatusbarAlignment.Left,
											priority: Number.MAX_SAFE_INTEGER,
										},
									]
								: P === c.NotebookCellExecutionState.Pending ||
										P === c.NotebookCellExecutionState.Unconfirmed
									? [
											{
												text: `$(${h.$iOb.id})`,
												tooltip: (0, E.localize)(7727, null),
												alignment: c.CellStatusbarAlignment.Left,
												priority: Number.MAX_SAFE_INTEGER,
											},
										]
									: P === c.NotebookCellExecutionState.Executing
										? [
												{
													text: `$(${(I?.didPause ? h.$jOb : m.ThemeIcon.modify(h.$jOb, "spin")).id})`,
													tooltip: (0, E.localize)(7728, null),
													alignment: c.CellStatusbarAlignment.Left,
													priority: Number.MAX_SAFE_INTEGER,
												},
											]
										: [];
					}
					dispose() {
						super.dispose(),
							this.g.deltaCellStatusBarItems(this.b, [
								{ handle: this.h.handle, items: [] },
							]);
					}
				};
				l = p = Ne([j(2, n.$d6)], l);
				let y = class extends i.$1c {
					static {
						this.id = "workbench.notebook.statusBar.execTimer";
					}
					constructor(I, T) {
						super(), this.D(new b(I, (P, k) => T.createInstance(v, P, k)));
					}
				};
				(e.$6Fc = y), (e.$6Fc = y = Ne([j(1, C.$Li)], y)), (0, u.$PKb)(y.id, y);
				const $ = 200;
				let v = class extends i.$1c {
					static {
						o = this;
					}
					static {
						this.a = 100;
					}
					constructor(I, T, P, k) {
						super(),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.b = []),
							(this.c = this.D(new t.$Yh(() => this.n(), o.a))),
							this.n(),
							this.D(this.h.model.onDidChangeInternalMetadata(() => this.n()));
					}
					async n() {
						let I;
						const T = this.j.getCellExecution(this.h.uri),
							P = T?.state,
							k = this.h.internalMetadata.runStartTime,
							L = this.h.internalMetadata.runStartTimeAdjustment ?? 0,
							D = this.h.internalMetadata.runEndTime;
						if (T?.didPause) I = void 0;
						else if (P === c.NotebookCellExecutionState.Executing)
							typeof k == "number" &&
								((I = this.q(k, Date.now(), L)), this.c.schedule());
						else if (!P && typeof k == "number" && typeof D == "number") {
							const N = Date.now() - k + L,
								A = D - k,
								R = this.h.internalMetadata.renderDuration ?? {};
							I = this.q(k, D, void 0, {
								timerDuration: N,
								executionDuration: A,
								renderDuration: R,
							});
						}
						const M = I ? [I] : [];
						!M.length && T
							? this.f ||
								(this.f = (0, t.$Oh)(() => {
									(this.f = void 0),
										(this.b = this.g.deltaCellStatusBarItems(this.b, [
											{ handle: this.h.handle, items: M },
										]));
								}, $))
							: (this.f?.dispose(),
								(this.f = void 0),
								(this.b = this.g.deltaCellStatusBarItems(this.b, [
									{ handle: this.h.handle, items: M },
								])));
					}
					q(I, T, P = 0, k) {
						const L = T - I + P;
						let D;
						if (k) {
							const M = new Date(T).toLocaleTimeString(w.$z),
								{
									renderDuration: N,
									executionDuration: A,
									timerDuration: R,
								} = k;
							let O = "";
							for (const B in N) {
								const U = this.m.getRendererInfo(B),
									z = encodeURIComponent(
										JSON.stringify({
											extensionId: U?.extensionId.value ?? "",
											issueBody: `Auto-generated text from notebook cell performance. The duration for the renderer, ${U?.displayName ?? B}, is slower than expected.
Execution Time: ${f(A)}
Renderer Duration: ${f(N[B])}
`,
										}),
									);
								O += `- [${U?.displayName ?? B}](command:workbench.action.openIssueReporter?${z}) ${f(N[B])}
`;
							}
							(O += `
*${(0, E.localize)(7729, null)}*
`),
								(D = {
									value: (0, E.localize)(7730, null, M, f(A), f(R - A), O),
									isTrusted: !0,
								});
						}
						return {
							text: f(L, !1),
							alignment: c.CellStatusbarAlignment.Left,
							priority: Number.MAX_SAFE_INTEGER - 5,
							tooltip: D,
						};
					}
					dispose() {
						super.dispose(),
							this.f?.dispose(),
							this.g.deltaCellStatusBarItems(this.b, [
								{ handle: this.h.handle, items: [] },
							]);
					}
				};
				v = o = Ne([j(2, n.$d6), j(3, g.$MIb)], v);
			},
		),
		