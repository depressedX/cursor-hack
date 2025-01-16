define(
			de[3270],
			he([1, 0, 7, 6, 4, 63, 107, 3, 15, 473, 997, 513, 73, 19, 5, 178]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sWc = void 0);
				let p = class extends d.$Zc {
					constructor(f, b, s, l) {
						super(),
							(this.j = f),
							(this.m = b),
							(this.n = s),
							(this.a = new m.$Hh()),
							(this.h = this.add(new i.$re())),
							(this.onDidRequestMoreLinks = this.h.event),
							(this.u = !1),
							(this.b = this.add(l.createInstance(r.$k9b)));
					}
					async show(f, b) {
						this.c = f;
						const s = await Promise.race([b.all, (0, m.$Nh)(500)]),
							l = typeof s == "object",
							y = l ? s : b.viewport,
							$ = y.wordLinks ? await this.q(y.wordLinks) : void 0,
							v = y.fileLinks ? await this.q(y.fileLinks) : void 0,
							S = y.folderLinks ? await this.q(y.folderLinks) : void 0,
							I = y.webLinks ? await this.q(y.webLinks) : void 0,
							T = [];
						I &&
							(T.push({
								type: "separator",
								label: (0, w.localize)(10546, null),
							}),
							T.push(...I)),
							v &&
								(T.push({
									type: "separator",
									label: (0, w.localize)(10547, null),
								}),
								T.push(...v)),
							S &&
								(T.push({
									type: "separator",
									label: (0, w.localize)(10548, null),
								}),
								T.push(...S)),
							$ &&
								(T.push({
									type: "separator",
									label: (0, w.localize)(10549, null),
								}),
								T.push(...$));
						const P = this.m.createQuickPick({ useSeparators: !0 }),
							k = new d.$Zc();
						k.add(P),
							(P.items = T),
							(P.placeholder = (0, w.localize)(10550, null)),
							(P.sortByLabel = !1),
							P.show(),
							P.activeItems.length > 0 && this.s(P.activeItems[0]);
						let L = !1;
						return (
							l ||
								k.add(
									i.Event.once(P.onDidChangeValue)(async () => {
										const D = await b.all;
										if (L) return;
										const M = [
												...(D.fileLinks ?? []),
												...(D.folderLinks ?? []),
												...(D.webLinks ?? []),
											],
											N = D.wordLinks ? await this.q(D.wordLinks, M) : void 0,
											A = D.fileLinks ? await this.q(D.fileLinks) : void 0,
											R = D.folderLinks ? await this.q(D.folderLinks) : void 0,
											O = D.webLinks ? await this.q(D.webLinks) : void 0,
											B = [];
										O &&
											(B.push({
												type: "separator",
												label: (0, w.localize)(10551, null),
											}),
											B.push(...O)),
											A &&
												(B.push({
													type: "separator",
													label: (0, w.localize)(10552, null),
												}),
												B.push(...A)),
											R &&
												(B.push({
													type: "separator",
													label: (0, w.localize)(10553, null),
												}),
												B.push(...R)),
											N &&
												(B.push({
													type: "separator",
													label: (0, w.localize)(10554, null),
												}),
												B.push(...N)),
											(P.items = B);
									}),
								),
							k.add(
								P.onDidChangeActive(async () => {
									const [D] = P.activeItems;
									this.s(D);
								}),
							),
							new Promise((D) => {
								k.add(
									P.onDidHide(({ reason: M }) => {
										if (this.u) {
											const N = this.c?.xterm?.markTracker;
											N && (N.restoreScrollState(), N.clear(), (this.u = !1));
										}
										M === E.QuickInputHideReason.Gesture && this.b.restore(),
											k.dispose(),
											P.selectedItems.length === 0 &&
												this.n.showLastProvider(
													g.AccessibleViewProviderId.Terminal,
												),
											D();
									}),
								),
									k.add(
										i.Event.once(P.onDidAccept)(() => {
											if (this.u) {
												const A = this.c?.xterm?.markTracker;
												A && (A.restoreScrollState(), A.clear(), (this.u = !1));
											}
											L = !0;
											const M = new C.$oIb(t.$$gb.CLICK),
												N = P.activeItems?.[0];
											N && "link" in N && N.link.activate(M, N.label),
												k.dispose(),
												D();
										}),
									);
							})
						);
					}
					async q(f, b) {
						if (!f) return;
						const s = new Set(),
							l = new Set(),
							y = [];
						for (const $ of f) {
							let v = $.text;
							if (!s.has(v) && (!b || !b.some((S) => S.text === v))) {
								s.add(v);
								let S;
								if ("uri" in $ && $.uri) {
									if (
										(($.type === a.TerminalBuiltinLinkType.LocalFile ||
											$.type ===
												a.TerminalBuiltinLinkType.LocalFolderInWorkspace ||
											$.type ===
												a.TerminalBuiltinLinkType
													.LocalFolderOutsideWorkspace) &&
											((v = (0, c.$jh)($.uri)),
											(S = this.j.getUriLabel((0, c.$mh)($.uri), {
												relative: !0,
											}))),
										$.type === a.TerminalBuiltinLinkType.LocalFile &&
											$.parsedLink?.suffix?.row !== void 0 &&
											((v += `:${$.parsedLink.suffix.row}`),
											$.parsedLink?.suffix?.rowEnd !== void 0 &&
												(v += `-${$.parsedLink.suffix.rowEnd}`),
											$.parsedLink?.suffix?.col !== void 0 &&
												((v += `:${$.parsedLink.suffix.col}`),
												$.parsedLink?.suffix?.colEnd !== void 0 &&
													(v += `-${$.parsedLink.suffix.colEnd}`))),
										l.has(v + "|" + (S ?? "")))
									)
										continue;
									l.add(v + "|" + (S ?? ""));
								}
								y.push({ label: v, link: $, description: S });
							}
						}
						return y.length > 0 ? y : void 0;
					}
					s(f) {
						if (!f || !("link" in f) || !f.link) return;
						const b = f.link;
						this.w(b),
							!(!("uri" in b) || !b.uri) &&
								b.type === a.TerminalBuiltinLinkType.LocalFile &&
								this.t(b);
					}
					t(f) {
						const b = f.parsedLink ? f.parsedLink.suffix : (0, u.$zoc)(f.text),
							s =
								b?.row === void 0
									? void 0
									: {
											startLineNumber: b.row ?? 1,
											startColumn: b.col ?? 1,
											endLineNumber: b.rowEnd,
											endColumn: b.colEnd,
										};
						this.b.set(),
							this.a.queue(async () => {
								await this.b.openTransientEditor({
									resource: f.uri,
									options: {
										preserveFocus: !0,
										revealIfOpened: !0,
										ignoreError: !0,
										selection: s,
									},
								});
							});
					}
					w(f) {
						const b = this.c?.xterm;
						b &&
							(this.u || (b.markTracker.saveScrollState(), (this.u = !0)),
							b.markTracker.revealRange(f.range));
					}
				};
				(e.$sWc = p),
					(e.$sWc = p =
						Ne([j(0, h.$3N), j(1, E.$DJ), j(2, g.$HLb), j(3, n.$Li)], p));
			},
		),
		