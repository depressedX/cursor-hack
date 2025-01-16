define(
			de[3253],
			he([
				1, 0, 50, 7, 49, 32, 39, 139, 222, 40, 288, 2229, 253, 12, 10, 2896, 20,
				274, 24, 6, 276, 11, 8, 3,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Add = void 0),
					(i = mt(i));
				let v = class {
					get onDidShowContextMenu() {
						return this.a.onDidShowContextMenu;
					}
					get onDidHideContextMenu() {
						return this.a.onDidHideContextMenu;
					}
					constructor(T, P, k, L, D, M, N) {
						!c.$m && !(0, h.$yY)(L)
							? (this.a = new g.$Q5c(P, T, D, k, M, N))
							: (this.a = new S(T, P, k, M, N));
					}
					dispose() {
						this.a.dispose();
					}
					showContextMenu(T) {
						this.a.showContextMenu(T);
					}
				};
				(e.$Add = v),
					(e.$Add = v =
						Ne(
							[
								j(0, r.$4N),
								j(1, E.$km),
								j(2, C.$uZ),
								j(3, n.$gj),
								j(4, w.$Wxb),
								j(5, l.$YX),
								j(6, y.$6j),
							],
							v,
						));
				let S = class extends $.$1c {
					constructor(T, P, k, L, D) {
						super(),
							(this.c = T),
							(this.f = P),
							(this.g = k),
							(this.h = L),
							(this.j = D),
							(this.a = this.B.add(new b.$re())),
							(this.onDidShowContextMenu = this.a.event),
							(this.b = this.B.add(new b.$re())),
							(this.onDidHideContextMenu = this.b.event);
					}
					showContextMenu(T) {
						T = g.ContextMenuMenuDelegate.transform(T, this.h, this.j);
						const P = T.getActions();
						if (P.length) {
							const k = (0, u.$hb)(() => {
									T.onHide?.(!1),
										i.$Fhb.getInstance().resetKeyStatus(),
										this.b.fire();
								}),
								L = this.m(T, P, k),
								D = T.getAnchor();
							let M,
								N,
								A = (0, d.$Jfb)(i.$Ygb(D) ? i.getWindow(D) : i.$Ogb());
							if (i.$Ygb(D)) {
								const R = i.$tgb(D);
								(A *= i.$ugb(D)),
									T.anchorAxisAlignment === s.AnchorAxisAlignment.HORIZONTAL
										? (T.anchorAlignment === s.AnchorAlignment.LEFT
												? ((M = R.left), (N = R.top))
												: ((M = R.left + R.width), (N = R.top)),
											c.$m ||
												(i.getWindow(D).screen.height - N <
													P.length * (c.$l ? 45 : 32) &&
													(N += R.height)))
										: T.anchorAlignment === s.AnchorAlignment.LEFT
											? ((M = R.left), (N = R.top + R.height))
											: ((M = R.left + R.width), (N = R.top + R.height)),
									c.$m && (N += 4 / A);
							} else (0, s.$gib)(D) && ((M = D.x), (N = D.y));
							typeof M == "number" && (M = Math.floor(M * A)),
								typeof N == "number" && (N = Math.floor(N * A)),
								(0, a.$crb)(
									L,
									{
										x: M,
										y: N,
										positioningItem: T.autoSelectFirstItem ? 0 : void 0,
									},
									() => k(),
								),
								this.a.fire();
						}
					}
					m(T, P, k, L = new Set()) {
						const D = T.actionRunner || new t.$sj();
						return (0, f.$Lb)(P.map((M) => this.n(T, M, D, k, L)));
					}
					n(T, P, k, L, D) {
						if (P instanceof t.$tj) return { type: "separator" };
						if (P instanceof t.$uj) {
							if (D.has(P.id)) {
								console.warn(`Found submenu cycle: ${P.id}`);
								return;
							}
							return {
								label: (0, m.$EO)((0, o.$$k)(P.label)).trim(),
								submenu: this.m(T, P.actions, L, new Set([...D, P.id])),
							};
						} else {
							let M;
							P.checked &&
								(typeof T.getCheckedActionsRepresentation == "function"
									? (M = T.getCheckedActionsRepresentation(P))
									: (M = "checkbox"));
							const N = {
									label: (0, m.$EO)((0, o.$$k)(P.label)).trim(),
									checked: !!P.checked,
									type: M,
									enabled: !!P.enabled,
									click: (R) => {
										L(), this.q(k, P, T, R);
									},
								},
								A = T.getKeyBinding
									? T.getKeyBinding(P)
									: this.g.lookupKeybinding(P.id);
							if (A) {
								const R = A.getElectronAccelerator();
								if (R) N.accelerator = R;
								else {
									const O = A.getLabel();
									O && (N.label = `${N.label} [${O}]`);
								}
							}
							return N;
						}
					}
					async q(T, P, k, L) {
						k.skipTelemetry ||
							this.f.publicLog2("workbenchActionExecuted", {
								id: P.id,
								from: "contextMenu",
							});
						const D = k.getActionsContext ? k.getActionsContext(L) : void 0,
							M = T.run(P, D);
						try {
							await M;
						} catch (N) {
							this.c.error(N);
						}
					}
				};
				(S = Ne(
					[j(0, r.$4N), j(1, E.$km), j(2, C.$uZ), j(3, l.$YX), j(4, y.$6j)],
					S,
				)),
					(0, p.$lK)(w.$Xxb, v, p.InstantiationType.Delayed);
			},
		),
		