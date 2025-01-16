define(de[3126], he([1, 0, 6, 3, 37]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$duc = void 0);
			class E extends i.$1c {
				static {
					this.a =
						/\b\w{0,20}(?::\/\/)?(?:localhost|127\.0\.0\.1|0\.0\.0\.0|:\d{2,5})[\w\-\.\~:\/\?\#[\]\@!\$&\(\)\*\+\,\;\=]*/gim;
				}
				static {
					this.b = /(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d{1,5})/;
				}
				static {
					this.c = /HTTP\son\s(127\.0\.0\.1|0\.0\.0\.0)\sport\s(\d+)/;
				}
				static {
					this.f = ["Dev Containers"];
				}
				constructor(d, m) {
					super(),
						(this.g = new t.$re()),
						(this.onDidMatchLocalUrl = this.g.event),
						(this.h = new Map()),
						(this.m = new Map()),
						d.instances.forEach((r) => {
							this.j(r);
						}),
						this.D(
							d.onDidCreateInstance((r) => {
								this.j(r);
							}),
						),
						this.D(
							d.onDidDisposeInstance((r) => {
								this.h.get(r)?.dispose(), this.h.delete(r);
							}),
						),
						this.D(
							m.onDidNewSession((r) => {
								(!r.parentSession ||
									(r.parentSession && r.hasSeparateRepl())) &&
									this.h.set(
										r.getId(),
										r.onDidChangeReplElements(() => {
											this.n(r);
										}),
									);
							}),
						),
						this.D(
							m.onDidEndSession(({ session: r }) => {
								this.h.has(r.getId()) &&
									(this.h.get(r.getId())?.dispose(), this.h.delete(r.getId()));
							}),
						);
				}
				j(d) {
					E.f.includes(d.title) ||
						this.h.set(
							d,
							d.onData((m) => {
								this.q(m);
							}),
						);
				}
				n(d) {
					const m = this.m.get(d.getId()),
						r = d.getReplElements();
					if (
						(this.m.set(d.getId(), {
							position: r.length - 1,
							tail: r[r.length - 1],
						}),
						!m && r.length > 0)
					)
						r.forEach((u) => this.q(u.toString()));
					else if (m && r.length - 1 !== m.position)
						for (let u = r.length - 1; u >= 0; u--) {
							const a = r[u];
							if (a === m.tail) break;
							this.q(a.toString());
						}
				}
				dispose() {
					super.dispose();
					const d = this.h.values();
					for (const m of d) m.dispose();
				}
				q(d) {
					d = (0, w.$9f)(d);
					const m = d.match(E.a) || [];
					if (m && m.length > 0)
						m.forEach((r) => {
							let u;
							try {
								u = new URL(r);
							} catch {}
							if (u) {
								const a = r.match(E.b),
									h = parseFloat(u.port ? u.port : a ? a[2] : "NaN");
								if (!isNaN(h) && Number.isInteger(h) && h > 0 && h <= 65535) {
									let c = u.hostname;
									if (
										(c !== "0.0.0.0" && c !== "127.0.0.1" && (c = "localhost"),
										h !== 9229 && d.startsWith("Debugger listening on"))
									)
										return;
									this.g.fire({ port: h, host: c });
								}
							}
						});
					else {
						const r = d.match(E.c);
						r &&
							r.length === 3 &&
							this.g.fire({ host: r[1], port: Number(r[2]) });
					}
				}
			}
			e.$duc = E;
		}),
		define(
			de[3127],
			he([1, 0, 201, 277, 6, 3, 10, 180]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lPc = e.$kPc = e.$jPc = void 0),
					(e.$jPc = 1),
					(e.$kPc = 20);
				let m = class {
					constructor(u, a) {
						(this.b = u),
							(this.c = a),
							(this.a = new E.$Zc()),
							w.Event.filter(u.onDidChangeConfiguration, (n) =>
								n.affectsConfiguration("workbench.sash.size"),
							)(this.d, this, this.a),
							this.d(),
							w.Event.filter(u.onDidChangeConfiguration, (n) =>
								n.affectsConfiguration("workbench.sash.hoverDelay"),
							)(this.f, this, this.a),
							this.f();
					}
					d() {
						const u = this.b.getValue("workbench.sash.size"),
							a = (0, t.$Zm)(u, 4, 20),
							h = (0, t.$Zm)(u, 1, 8);
						this.c.mainContainer.style.setProperty(
							"--vscode-sash-size",
							a + "px",
						),
							this.c.mainContainer.style.setProperty(
								"--vscode-sash-hover-size",
								h + "px",
							),
							(0, i.$sob)(a);
					}
					f() {
						(0, i.$tob)(this.b.getValue("workbench.sash.hoverDelay"));
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$lPc = m), (e.$lPc = m = Ne([j(0, C.$gj), j(1, d.$jEb)], m));
			},
		),
		define(
			de[3128],
			he([1, 0, 4, 50, 49, 198, 106, 35, 255, 51]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0mc = e.$9mc = void 0),
					(t = mt(t));
				let u = class extends E.$ajb {
					constructor(c, n, g, p, o) {
						const f = n.map((S) => ({ provider: S, text: S }));
						let b = n.indexOf(g);
						b === -1 && (b = 0);
						const s = { ...C.$Fyb },
							l = o.getColorTheme(),
							y = l.getColor(r.$8P),
							v = l.getColor(m.$0Mb)?.makeOpaque(y) ?? y;
						(s.selectBackground = v.lighten(0.6).toString()),
							super(null, c, f, b, p, s, { ariaLabel: t.localize(8990, null) }),
							(this.a = f);
					}
					setSelection(c) {
						const n = this.a.findIndex((g) => g.provider === c);
						this.select(n);
					}
					r(c, n) {
						return this.a[n];
					}
					render(c) {
						super.render(c), this.setFocusable(!0);
					}
				};
				(e.$9mc = u), (e.$9mc = u = Ne([j(3, w.$Wxb), j(4, d.$iP)], u));
				class a extends i.$rj {
					static {
						this.ID = "quickDiff.base.switch";
					}
					static {
						this.LABEL = t.localize(8991, null);
					}
					constructor(c) {
						super(a.ID, a.LABEL, void 0, void 0), (this.a = c);
					}
					async run(c) {
						return this.a(c);
					}
				}
				e.$0mc = a;
			},
		),
		define(
			de[1747],
			he([1, 0, 4, 24, 82, 26, 51, 1658, 306, 201, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Pc =
						e.$4Pc =
						e.$3Pc =
						e.$2Pc =
						e.$1Pc =
						e.$ZPc =
						e.$YPc =
							void 0),
					(e.$6Pc = f),
					(e.$7Pc = b),
					(e.$8Pc = s),
					(e.$YPc = 22),
					(e.$ZPc = 11);
				const a = 4,
					h = 5;
				(e.$1Pc = (0, m.$wP)(
					"scmGraph.historyItemGroupLocal",
					d.$OR,
					(0, t.localize)(9062, null),
				)),
					(e.$2Pc = (0, m.$wP)(
						"scmGraph.historyItemGroupRemote",
						d.$SR,
						(0, t.localize)(9063, null),
					)),
					(e.$3Pc = (0, m.$wP)(
						"scmGraph.historyItemGroupBase",
						d.$QR,
						(0, t.localize)(9064, null),
					)),
					(e.$4Pc = (0, m.$wP)(
						"scmGraph.historyItemHoverLabelForeground",
						C.$cS,
						(0, t.localize)(9065, null),
					)),
					(e.$5Pc = [
						(0, m.$wP)(
							"scmGraph.foreground1",
							d.$RR,
							(0, t.localize)(9066, null),
						),
						(0, m.$wP)(
							"scmGraph.foreground2",
							d.$NR,
							(0, t.localize)(9067, null),
						),
						(0, m.$wP)(
							"scmGraph.foreground3",
							d.$PR,
							(0, t.localize)(9068, null),
						),
					]);
				function c(l, y) {
					for (const $ of l.labels ?? []) {
						const v = y.get($.title);
						if (v !== void 0) return v;
					}
				}
				function n(l) {
					const y = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"path",
					);
					return (
						y.setAttribute("fill", "none"),
						y.setAttribute("stroke-width", "1px"),
						y.setAttribute("stroke-linecap", "round"),
						(y.style.stroke = (0, m.$rP)(l)),
						y
					);
				}
				function g(l, y, $) {
					const v = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"circle",
					);
					return (
						v.setAttribute("cx", `${e.$ZPc * (l + 1)}`),
						v.setAttribute("cy", `${e.$ZPc}`),
						v.setAttribute("r", `${y}`),
						(v.style.fill = (0, m.$rP)($)),
						v
					);
				}
				function p(l, y, $, v) {
					const S = n(v);
					return S.setAttribute("d", `M ${l} ${y} V ${$}`), S;
				}
				function o(l, y) {
					for (let $ = l.length - 1; $ >= 0; $--) if (l[$].id === y) return $;
					return -1;
				}
				function f(l) {
					const y = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"svg",
					);
					y.classList.add("graph");
					const $ = l.historyItem,
						v = l.inputSwimlanes,
						S = l.outputSwimlanes,
						I = v.findIndex((L) => L.id === $.id),
						T = I !== -1 ? I : v.length,
						P = T < S.length ? S[T].color : T < v.length ? v[T].color : e.$1Pc;
					let k = 0;
					for (let L = 0; L < v.length; L++) {
						const D = v[L].color;
						if (v[L].id === $.id)
							if (L !== T) {
								const M = [],
									N = n(D);
								M.push(`M ${e.$ZPc * (L + 1)} 0`),
									M.push(`A ${e.$ZPc} ${e.$ZPc} 0 0 1 ${e.$ZPc * L} ${e.$ZPc}`),
									M.push(`H ${e.$ZPc * (T + 1)}`),
									N.setAttribute("d", M.join(" ")),
									y.append(N);
							} else k++;
						else if (k < S.length && v[L].id === S[k].id) {
							if (L === k) {
								const M = p(e.$ZPc * (L + 1), 0, e.$YPc, D);
								y.append(M);
							} else {
								const M = [],
									N = n(D);
								M.push(`M ${e.$ZPc * (L + 1)} 0`),
									M.push("V 6"),
									M.push(
										`A ${h} ${h} 0 0 1 ${e.$ZPc * (L + 1) - h} ${e.$YPc / 2}`,
									),
									M.push(`H ${e.$ZPc * (k + 1) + h}`),
									M.push(
										`A ${h} ${h} 0 0 0 ${e.$ZPc * (k + 1)} ${e.$YPc / 2 + h}`,
									),
									M.push(`V ${e.$YPc}`),
									N.setAttribute("d", M.join(" ")),
									y.append(N);
							}
							k++;
						}
					}
					for (let L = 1; L < $.parentIds.length; L++) {
						const D = o(S, $.parentIds[L]);
						if (D === -1) continue;
						const M = [],
							N = n(S[D].color);
						M.push(`M ${e.$ZPc * D} ${e.$YPc / 2}`),
							M.push(
								`A ${e.$ZPc} ${e.$ZPc} 0 0 1 ${e.$ZPc * (D + 1)} ${e.$YPc}`,
							),
							M.push(`M ${e.$ZPc * D} ${e.$YPc / 2}`),
							M.push(`H ${e.$ZPc * (T + 1)} `),
							N.setAttribute("d", M.join(" ")),
							y.append(N);
					}
					if (I !== -1) {
						const L = p(e.$ZPc * (T + 1), 0, e.$YPc / 2, v[I].color);
						y.append(L);
					}
					if ($.parentIds.length > 0) {
						const L = p(e.$ZPc * (T + 1), e.$YPc / 2, e.$YPc, P);
						y.append(L);
					}
					if ($.parentIds.length > 1) {
						const L = g(T, a + 1, P);
						y.append(L);
						const D = g(T, a - 1, P);
						y.append(D);
					} else {
						if (
							$.labels?.some(
								(D) =>
									E.ThemeIcon.isThemeIcon(D.icon) && D.icon.id === "target",
							)
						) {
							const D = g(T, a + 2, P);
							y.append(D);
						}
						const L = g(T, a, P);
						y.append(L);
					}
					return (
						(y.style.height = `${e.$YPc}px`),
						(y.style.width = `${e.$ZPc * (Math.max(v.length, S.length, 1) + 1)}px`),
						y
					);
				}
				function b(l) {
					const y = (0, u.$Jhb)("svg", {
						style: {
							height: `${e.$YPc}px`,
							width: `${e.$ZPc * (l.length + 1)}px`,
						},
					});
					for (let $ = 0; $ < l.length; $++) {
						const v = p(e.$ZPc * ($ + 1), 0, e.$YPc, l[$].color);
						y.root.append(v);
					}
					return y.root;
				}
				function s(l, y = new Map()) {
					let $ = -1;
					const v = [];
					for (let S = 0; S < l.length; S++) {
						const I = l[S],
							P = ((0, i.$Tb)(v)?.outputSwimlanes ?? []).map((D) =>
								(0, w.$vo)(D),
							),
							k = [];
						let L = !1;
						if (I.parentIds.length > 0)
							for (const D of P) {
								if (D.id === I.id) {
									L ||
										(k.push({ id: I.parentIds[0], color: c(I, y) ?? D.color }),
										(L = !0));
									continue;
								}
								k.push((0, w.$vo)(D));
							}
						for (let D = L ? 1 : 0; D < I.parentIds.length; D++) {
							let M;
							if (!L) M = c(I, y);
							else {
								const N = l.find((A) => A.id === I.parentIds[D]);
								M = N ? c(N, y) : void 0;
							}
							M || (($ = (0, r.rot)($ + 1, e.$5Pc.length)), (M = e.$5Pc[$])),
								k.push({ id: I.parentIds[D], color: M });
						}
						v.push({ historyItem: I, inputSwimlanes: P, outputSwimlanes: k });
					}
					return v;
				}
			},
		),
		define(
			de[614],
			he([1, 0, 54, 11, 50, 92, 24, 198, 182, 7, 1171]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FPc = void 0),
					(e.$mPc = a),
					(e.$nPc = h),
					(e.$oPc = c),
					(e.$pPc = n),
					(e.$qPc = g),
					(e.$rPc = p),
					(e.$sPc = o),
					(e.$tPc = f),
					(e.$uPc = b),
					(e.$vPc = s),
					(e.$wPc = l),
					(e.$xPc = y),
					(e.$yPc = $),
					(e.$zPc = v),
					(e.$APc = S),
					(e.$BPc = I),
					(e.$CPc = P),
					(e.$DPc = k),
					(e.$EPc = L),
					(e.$GPc = N),
					(e.$HPc = A),
					(e.$IPc = R),
					(t = mt(t));
				function a(O) {
					return Array.isArray(O) && O.every((B) => c(B));
				}
				function h(O) {
					return (
						Array.isArray(O.repositories) &&
						Array.isArray(O.visibleRepositories)
					);
				}
				function c(O) {
					return !!O.provider && !!O.input;
				}
				function n(O) {
					return !!O.validateInput && typeof O.value == "string";
				}
				function g(O) {
					return O.type === "actionButton";
				}
				function p(O) {
					return !!O.provider && !!O.resources;
				}
				function o(O) {
					return !!O.sourceUri && p(O.resourceGroup);
				}
				function f(O) {
					return u.$06.isResourceNode(O) && p(O.context);
				}
				function b(O) {
					return O.type === "historyItemGroup";
				}
				function s(O) {
					return O.type === "allChanges" || O.type === "historyItem";
				}
				function l(O) {
					return O.type === "historyItem2";
				}
				function y(O) {
					return O.type === "historyItemLoadMore";
				}
				function $(O) {
					return O.type === "historyItemChange";
				}
				function v(O) {
					return u.$06.isResourceNode(O) && s(O.context);
				}
				function S(O) {
					return O.type === "separator";
				}
				function I(O, B, U) {
					const z = t.$sc(O.fsPath),
						F = JSON.parse(B.query),
						x = JSON.parse(U.query),
						H = F.ref.substring(0, 8).concat(F.ref.endsWith("^") ? "^" : ""),
						q = x.ref.substring(0, 8).concat(x.ref.endsWith("^") ? "^" : "");
					return [B, U, `${z} (${H}) \u2194 ${z} (${q})`, null];
				}
				const T = (O, B) =>
					O instanceof i.$2X && B instanceof i.$2X
						? O.id === B.id &&
							O.enabled === B.enabled &&
							O.hideActions?.isHidden === B.hideActions?.isHidden
						: O.id === B.id && O.enabled === B.enabled;
				function P(O, B, U) {
					let z = [],
						F = [];
					const x = () => {
						const H = [],
							q = [];
						(0, E.$Kyb)(
							O,
							{ shouldForwardArgs: !0 },
							{ primary: H, secondary: q },
							U,
						),
							!((0, C.$yb)(z, H, T) && (0, C.$yb)(F, q, T)) &&
								((z = H), (F = q), B(H, q));
					};
					return x(), O.onDidChange(x);
				}
				function k(O, B) {
					return P(
						O,
						(U) => {
							B.clear(), B.push(U, { icon: !0, label: !1 });
						},
						"inline",
					);
				}
				function L(O) {
					const B = [],
						U = [];
					return (
						(0, E.$Jyb)(
							O,
							{ shouldForwardArgs: !0 },
							{ primary: B, secondary: U },
							"inline",
						),
						U
					);
				}
				class D extends w.$rj {
					constructor(B, U) {
						super(`statusbaraction{${B.id}}`, B.title, "", !0),
							(this.c = B),
							(this.f = U),
							(this.tooltip = B.tooltip || "");
					}
					run() {
						return this.f.executeCommand(
							this.c.id,
							...(this.c.arguments || []),
						);
					}
				}
				e.$FPc = D;
				class M extends d.$_ib {
					constructor(B, U) {
						super(null, B, { ...U, icon: !1, label: !0 });
					}
					u() {
						this.m.label &&
							this.I &&
							(0, r.$hhb)(this.I, ...(0, m.$Sib)(this.action.label));
					}
				}
				function N(O) {
					return (B, U) =>
						B instanceof D ? new M(B, U) : (0, E.$Pyb)(O, B, U);
				}
				function A(O) {
					return `${O.contextValue}:${O.label}${O.rootUri ? `:${O.rootUri.toString()}` : ""}`;
				}
				function R(O) {
					return O.groups.reduce((B, U) => B + U.resources.length, 0);
				}
			},
		),
		