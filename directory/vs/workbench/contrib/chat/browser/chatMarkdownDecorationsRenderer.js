define(
			de[1354],
			he([
				1, 0, 7, 183, 95, 163, 149, 3, 197, 9, 31, 72, 5, 39, 73, 34, 306, 208,
				1353, 153, 980, 329, 218, 982, 503, 569,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qUb = void 0),
					(e.$oUb = k),
					(e.$pUb = L),
					(t = mt(t));
				const I = "http://_vscodedecoration_",
					T = "http://_chatagent_",
					P = "http://_chatslash_";
				function k(M, N, A) {
					const R = A.get(b.$f3),
						O = A.get(b.$c3),
						B = R.getAgentNameRestriction(M);
					let U = `${B ? M.name : ((0, b.$h3))(M)}`;
					B &&
						O.agentHasDupeName(M.id) &&
						(U += ` (${M.publisherDisplayName})`);
					const F = { agentId: M.id, name: U, isClickable: N };
					return `[${M.name}](${T}?${encodeURIComponent(JSON.stringify(F))})`;
				}
				function L(M, N) {
					const A = `${l.$R2}${N.name}`,
						R = { agentId: M.id, command: N.name };
					return `[${A}](${P}?${encodeURIComponent(JSON.stringify(R))})`;
				}
				let D = class {
					constructor(N, A, R, O, B, U, z, F, x, H, q) {
						(this.b = N),
							(this.d = A),
							(this.f = R),
							(this.g = O),
							(this.h = B),
							(this.i = U),
							(this.j = z),
							(this.k = F),
							(this.l = x),
							(this.m = H),
							(this.n = q);
					}
					convertParsedRequestToMarkdown(N) {
						let A = "";
						for (const R of N.parts)
							R instanceof l.$O2
								? (A += R.text)
								: R instanceof l.$U2
									? (A += this.h.invokeFunction((O) => k(R.agent, !1, O)))
									: (A += this.o(R));
						return A;
					}
					o(N) {
						const A =
								N instanceof l.$X2 && N.data instanceof r.URI ? N.data : void 0,
							O = {
								title: A
									? this.d.getUriLabel(A, { relative: !0 })
									: N instanceof l.$W2
										? N.slashCommand.detail
										: N instanceof l.$V2
											? N.command.description
											: N instanceof l.$S2
												? this.m.getVariable(N.variableName)?.description
												: N instanceof l.$T2
													? this.n.getTool(N.toolId)?.userDescription
													: "",
							};
						return `[${N.text}](${I}?${encodeURIComponent(JSON.stringify(O))})`;
					}
					walkTreeAndAnnotateReferenceLinks(N) {
						const A = new d.$Zc();
						return (
							N.querySelectorAll("a").forEach((R) => {
								const O = R.getAttribute("data-href");
								if (O)
									if (O.startsWith(T)) {
										let B;
										try {
											B = JSON.parse(decodeURIComponent(O.slice(T.length + 1)));
										} catch (U) {
											this.f.error(
												"Invalid chat widget render data JSON",
												(0, E.$xj)(U),
											);
										}
										B && R.parentElement.replaceChild(this.p(B, A), R);
									} else if (O.startsWith(P)) {
										let B;
										try {
											B = JSON.parse(decodeURIComponent(O.slice(T.length + 1)));
										} catch (U) {
											this.f.error(
												"Invalid chat slash command render data JSON",
												(0, E.$xj)(U),
											);
										}
										B &&
											R.parentElement.replaceChild(
												this.q(R.textContent, B, A),
												R,
											);
									} else if (O.startsWith(I)) {
										let B;
										try {
											B = JSON.parse(decodeURIComponent(O.slice(I.length + 1)));
										} catch {}
										R.parentElement.replaceChild(
											this.s(R.textContent, B, A),
											R,
										);
									} else
										O.startsWith($.$5Tb)
											? this.r(O, R)
											: O.startsWith("command:") && this.t(R, O, this.b);
							}),
							A
						);
					}
					p(N, A) {
						const R = `${l.$Q2}${N.name}`;
						let O;
						if (N.isClickable) {
							O = t.$("span.chat-agent-widget");
							const z = A.add(
								new i.$oob(O, {
									buttonBackground: (0, p.$rP)(s.$kUb),
									buttonForeground: (0, p.$rP)(s.$lUb),
									buttonHoverBackground: void 0,
								}),
							);
							(z.label = R),
								A.add(
									z.onDidClick(() => {
										const F = this.g.getAgent(N.agentId),
											x = this.k.lastFocusedWidget;
										!x ||
											!F ||
											this.j.sendRequest(
												x.viewModel.sessionId,
												F.metadata.sampleRequest ?? "",
												{ location: x.location, agentId: F.id },
											);
									}),
								);
						} else O = this.s(R, void 0, A);
						const B = this.g.getAgent(N.agentId),
							U = new C.$Y(() => A.add(this.h.createInstance(f.$2Tb)));
						return (
							A.add(
								this.i.setupManagedHover(
									(0, w.$cib)("element"),
									O,
									() => (U.value.setAgent(N.agentId), U.value.domNode),
									B && (0, f.$3Tb)(() => B, this.l),
								),
							),
							O
						);
					}
					q(N, A, R) {
						const O = t.$("span.chat-agent-widget.chat-command-widget"),
							B = this.g.getAgent(A.agentId),
							U = R.add(
								new i.$oob(O, {
									buttonBackground: (0, p.$rP)(s.$kUb),
									buttonForeground: (0, p.$rP)(s.$lUb),
									buttonHoverBackground: void 0,
								}),
							);
						return (
							(U.label = N),
							R.add(
								U.onDidClick(() => {
									const z = this.k.lastFocusedWidget;
									if (!z || !B) return;
									const F = B.slashCommands.find((x) => x.name === A.command);
									this.j.sendRequest(
										z.viewModel.sessionId,
										F?.sampleRequest ?? "",
										{
											location: z.location,
											agentId: B.id,
											slashCommand: A.command,
										},
									);
								}),
							),
							O
						);
					}
					r(N, A) {
						const R = r.URI.parse(N);
						let O;
						try {
							O = (0, m.$ji)(JSON.parse(R.fragment));
						} catch (z) {
							this.f.error(
								"Invalid chat widget render data JSON",
								(0, E.$xj)(z),
							);
							return;
						}
						if (!O.uri || !r.URI.isUri(O.uri)) {
							this.f.error(`Invalid chat widget render data: ${R.fragment}`);
							return;
						}
						const B = O.range
							? `${O.range.startLineNumber}-${O.range.endLineNumber}`
							: "";
						A.setAttribute("data-href", O.uri.with({ fragment: B }).toString());
						const U = this.d.getUriLabel(O.uri, { relative: !0 });
						A.title = O.range
							? `${U}#${O.range.startLineNumber}-${O.range.endLineNumber}`
							: U;
					}
					s(N, A, R) {
						const O = t.$("span.chat-resource-widget"),
							B = t.$("span", void 0, N);
						return (
							A?.title &&
								R.add(
									this.i.setupManagedHover((0, w.$cib)("element"), O, A.title),
								),
							O.appendChild(B),
							O
						);
					}
					t(N, A, R) {
						const O = A.match(/command:([^\)]+)/)?.[1];
						if (O) {
							const B = R.lookupKeybinding(O);
							if (B) {
								const U = B.getLabel();
								U && (N.textContent = `${N.textContent} (${U})`);
							}
						}
					}
				};
				(e.$qUb = D),
					(e.$qUb = D =
						Ne(
							[
								j(0, c.$uZ),
								j(1, n.$3N),
								j(2, g.$ik),
								j(3, b.$c3),
								j(4, h.$Li),
								j(5, a.$Uyb),
								j(6, y.$J2),
								j(7, o.$GYb),
								j(8, u.$ek),
								j(9, v.$D2),
								j(10, S.$E2),
							],
							D,
						));
			},
		),
		