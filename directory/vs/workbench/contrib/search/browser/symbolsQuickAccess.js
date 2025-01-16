define(
			de[827],
			he([
				1, 0, 4, 392, 15, 568, 74, 73, 23, 41, 18, 17, 10, 65, 618, 322, 14, 26,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ifc = void 0);
				let b = class extends i.$GLb {
					static {
						f = this;
					}
					static {
						this.PREFIX = "#";
					}
					static {
						this.a = 200;
					}
					static {
						this.b = new Set([
							C.SymbolKind.Class,
							C.SymbolKind.Enum,
							C.SymbolKind.File,
							C.SymbolKind.Interface,
							C.SymbolKind.Namespace,
							C.SymbolKind.Package,
							C.SymbolKind.Module,
						]);
					}
					get defaultFilterValue() {
						const l = this.r.getFocusedCodeEditor();
						if (l) return (0, n.$tfc)(l) ?? void 0;
					}
					constructor(l, y, $, v, S) {
						super(f.PREFIX, {
							canAcceptInBackground: !0,
							noResultsPick: { label: (0, t.localize)(9375, null) },
						}),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.r = S),
							(this.h = this.D(new w.$Kh(f.a)));
					}
					get s() {
						const l = this.q.getValue().workbench?.editor;
						return {
							openEditorPinned:
								!l?.enablePreviewFromQuickOpen || !l?.enablePreview,
							openSideBySideDirection: l?.openSideBySideDirection,
						};
					}
					g(l, y, $) {
						return this.getSymbolPicks(l, void 0, $);
					}
					async getSymbolPicks(l, y, $) {
						return this.h.trigger(
							async () =>
								$.isCancellationRequested ? [] : this.u((0, g.$hs)(l), y, $),
							y?.delay,
						);
					}
					async u(l, y, $) {
						let v, S;
						l.values && l.values.length > 1
							? ((v = (0, g.$is)(l.values[0])),
								(S = (0, g.$is)(l.values.slice(1))))
							: (v = l);
						const I = await (0, E.$O7)(v.original, $);
						if ($.isCancellationRequested) return [];
						const T = [],
							P = this.s.openSideBySideDirection;
						for (const { symbol: k, provider: L } of I) {
							if (y?.skipLocal && !f.b.has(k.kind) && k.containerName) continue;
							const D = k.name,
								M = `$(${C.SymbolKinds.toIcon(k.kind).id}) ${D}`,
								N = M.length - D.length;
							let A,
								R,
								O = !1;
							if (
								v.original.length > 0 &&
								(v !== l &&
									(([A, R] = (0, g.$es)(M, { ...l, values: void 0 }, 0, N)),
									typeof A == "number" && (O = !0)),
								typeof A != "number" &&
									(([A, R] = (0, g.$es)(M, v, 0, N)), typeof A != "number"))
							)
								continue;
							const B = k.location.uri;
							let U;
							if (B) {
								const H = this.j.getUriLabel(B, { relative: !0 });
								k.containerName
									? (U = `${k.containerName} \u2022 ${H}`)
									: (U = H);
							}
							let z, F;
							if (!O && S && S.original.length > 0) {
								if ((U && ([z, F] = (0, g.$es)(U, S)), typeof z != "number"))
									continue;
								typeof A == "number" && (A += z);
							}
							const x = k.tags
								? k.tags.indexOf(C.SymbolTag.Deprecated) >= 0
								: !1;
							T.push({
								symbol: k,
								resource: B,
								score: A,
								label: M,
								ariaLabel: D,
								highlights: x ? void 0 : { label: R, description: F },
								description: U,
								strikethrough: x,
								buttons: [
									{
										iconClass:
											P === "right"
												? o.ThemeIcon.asClassName(p.$ak.splitHorizontal)
												: o.ThemeIcon.asClassName(p.$ak.splitVertical),
										tooltip:
											P === "right"
												? (0, t.localize)(9376, null)
												: (0, t.localize)(9377, null),
									},
								],
								trigger: (H, q) => (
									this.w(L, k, $, { keyMods: q, forceOpenSideBySide: !0 }),
									i.TriggerAction.CLOSE_PICKER
								),
								accept: async (H, q) =>
									this.w(L, k, $, {
										keyMods: H,
										preserveFocus: q.inBackground,
										forcePinned: q.inBackground,
									}),
							});
						}
						return y?.skipSorting || T.sort((k, L) => this.y(k, L)), T;
					}
					async w(l, y, $, v) {
						let S = y;
						(typeof l.resolveWorkspaceSymbol == "function" &&
							((S = (await l.resolveWorkspaceSymbol(y, $)) || y),
							$.isCancellationRequested)) ||
							(S.location.uri.scheme === m.Schemas.http ||
							S.location.uri.scheme === m.Schemas.https
								? await this.m.open(S.location.uri, {
										fromUserGesture: !0,
										allowContributedOpeners: !0,
									})
								: await this.n.openEditor(
										{
											resource: S.location.uri,
											options: {
												preserveFocus: v?.preserveFocus,
												pinned:
													v.keyMods.ctrlCmd ||
													v.forcePinned ||
													this.s.openEditorPinned,
												selection: S.location.range
													? a.$iL.collapseToStart(S.location.range)
													: void 0,
											},
										},
										v.keyMods.alt ||
											(this.s.openEditorPinned && v.keyMods.ctrlCmd) ||
											v?.forceOpenSideBySide
											? u.$KY
											: u.$JY,
									));
					}
					y(l, y) {
						if (typeof l.score == "number" && typeof y.score == "number") {
							if (l.score > y.score) return -1;
							if (l.score < y.score) return 1;
						}
						if (l.symbol && y.symbol) {
							const $ = l.symbol.name.toLowerCase(),
								v = y.symbol.name.toLowerCase(),
								S = $.localeCompare(v);
							if (S !== 0) return S;
						}
						if (l.symbol && y.symbol) {
							const $ = C.SymbolKinds.toIcon(l.symbol.kind).id,
								v = C.SymbolKinds.toIcon(y.symbol.kind).id;
							return $.localeCompare(v);
						}
						return 0;
					}
				};
				(e.$Ifc = b),
					(e.$Ifc =
						b =
						f =
							Ne(
								[
									j(0, d.$3N),
									j(1, r.$7rb),
									j(2, u.$IY),
									j(3, h.$gj),
									j(4, c.$dtb),
								],
								b,
							));
			},
		),
		