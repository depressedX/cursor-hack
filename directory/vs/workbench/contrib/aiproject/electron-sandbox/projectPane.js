define(
			de[4252],
			he([
				1, 0, 3, 8, 4251, 832, 1715, 3, 20, 445, 180, 151, 110, 5, 45, 118, 232,
				18, 65, 22, 25, 66, 96, 315, 477, 148, 75,
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
				I,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cfd = e.$Bfd = void 0),
					(e.$Bfd = new i.$5j("isProjectPaneOpen", !1));
				let T = class extends d.$1c {
					constructor(k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.h = L),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.y = F),
							(this.z = x),
							(this.C = H),
							(this.F = q),
							(this.G = V),
							(this.H = G),
							(this.a = new t.$Zc()),
							(this.f = new C.$sfd()),
							(this.g = new AbortController()),
							this.j.activate(),
							k.bufferChangeEvents(() => {
								this.c = e.$Bfd.bindTo(k);
							});
					}
					render(k) {
						this.C.setPartHidden(!0, y.Parts.AUXILIARYBAR_PART);
						let L = this.C.getContainer(I.$Bfb, y.Parts.EDITOR_PART);
						L &&
							((this.b = (0, w.$Afd)({
								container: L,
								isModalOpen: this.c,
								paneDelegate: this.f,
								instantiationService: this.q,
								reactiveStorageService: this.r,
								onClose: () => {
									this.r.setNonPersistentStorage({ aiProjectSteps: [] }),
										this.g.abort(),
										this.close();
								},
							})),
							this.runAI(k),
							this.f.onFocus());
					}
					async runAI(k) {
						let L = await this.s.getAuthenticationHeader();
						const D =
								this.r.applicationUserPersistentStorage.cursorCreds.backendUrl,
							M = await this.H.aiClient(),
							N = this.H.getModelDetails();
						async function* A() {
							for await (const { text: B } of M.aiProject(
								new S.$aF({ description: k, modelDetails: N }),
							))
								yield B;
							return "";
						}
						const R = A();
						let O;
						for (;;) {
							const { value: B, done: U } = await R.next();
							if (U) break;
							if ((console.log("GOT VALUE", B), B.startsWith("cursor-step"))) {
								const z = B.split("cursor-step")[1].trim();
								let F = [];
								const x = this.r.nonPersistentStorage.aiProjectSteps;
								for (
									this.r.setNonPersistentStorage({
										aiProjectSteps: [...x, { title: z, outputs: F }],
									});
									;
								) {
									const q = (await R.next()).value;
									if (q.startsWith("cursor-end")) break;
									const V = q.split(`
`);
									(F = [
										...F.slice(0, -1),
										(F.length > 0 ? F[F.length - 1] : "") + V[0],
										...V.slice(1),
									]),
										this.r.setNonPersistentStorage({
											aiProjectSteps: [...x, { title: z, outputs: F }],
										});
								}
							} else if (B.startsWith("cursor-create")) {
								const z = B.split("cursor-create")[1].trim(),
									F = this.y.resolveRelativePath(z);
								for (
									(await this.w.exists(F)) ||
										(this.w.createFile(F),
										await new Promise((x) => setTimeout(x, 1e3))),
										this.t.openEditor({ resource: F }),
										await new Promise((x) => setTimeout(x, 200)),
										O = this.u.getActiveCodeEditor() ?? void 0;
									!(await R.next()).value.startsWith("cursor-end");
								);
							} else if (B.startsWith("cursor-append")) {
								if (O === void 0) return;
								for (;;) {
									const F = (await R.next()).value;
									if (F.startsWith("cursor-end")) break;
									let x = O.getPosition();
									O.executeEdits("cursor", [
										{
											range: {
												startLineNumber: x.lineNumber,
												startColumn: x.column,
												endLineNumber: x.lineNumber,
												endColumn: x.column,
											},
											text: F,
										},
									]);
								}
							}
						}
					}
					dispose() {
						super.dispose(), this.a.dispose(), this.b?.dispose();
					}
					close() {
						this.b?.dispose();
					}
				};
				(e.$Cfd = T),
					(e.$Cfd = T =
						Ne(
							[
								j(0, i.$6j),
								j(1, u.$jEb),
								j(2, E.$u0b),
								j(3, a.$ucd),
								j(4, h.$y7c),
								j(5, c.$Li),
								j(6, n.$0zb),
								j(7, p.$x6b),
								j(8, o.$IY),
								j(9, f.$dtb),
								j(10, b.$ll),
								j(11, s.$Vi),
								j(12, l.$EY),
								j(13, y.$mEb),
								j(14, $.$S6b),
								j(15, v.$i6b),
								j(16, g.$Nfc),
							],
							T,
						)),
					(0, m.$lK)(r.$68b, T, m.InstantiationType.Delayed);
			},
		),
		