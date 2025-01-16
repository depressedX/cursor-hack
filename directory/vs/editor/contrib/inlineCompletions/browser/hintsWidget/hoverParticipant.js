define(
			de[2929],
			he([
				1, 0, 7, 94, 3, 77, 56, 38, 17, 61, 368, 501, 1215, 251, 4, 91, 5, 41,
				32,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vhc = e.$Uhc = void 0),
					(t = mt(t)),
					(n = mt(n));
				class b {
					constructor(y, $, v) {
						(this.owner = y), (this.range = $), (this.controller = v);
					}
					isValidForHoverAnchor(y) {
						return (
							y.type === u.HoverAnchorType.Range &&
							this.range.startColumn <= y.range.startColumn &&
							this.range.endColumn >= y.range.endColumn
						);
					}
				}
				e.$Uhc = b;
				let s = class {
					constructor(y, $, v, S, I, T) {
						(this.a = y),
							(this.b = $),
							(this.c = v),
							(this.d = S),
							(this.e = I),
							(this.f = T),
							(this.hoverOrdinal = 4);
					}
					suggestHoverAnchor(y) {
						const $ = a.$O1b.get(this.a);
						if (!$) return null;
						const v = y.target;
						if (v.type === C.MouseTargetType.CONTENT_VIEW_ZONE) {
							const S = v.detail;
							if ($.shouldShowHoverAtViewZone(S.viewZoneId))
								return new u.$3Bb(
									1e3,
									this,
									m.$iL.fromPositions(
										this.a
											.getModel()
											.validatePosition(S.positionBefore || S.position),
									),
									y.event.posx,
									y.event.posy,
									!1,
								);
						}
						return v.type === C.MouseTargetType.CONTENT_EMPTY &&
							$.shouldShowHoverAt(v.range)
							? new u.$3Bb(1e3, this, v.range, y.event.posx, y.event.posy, !1)
							: v.type === C.MouseTargetType.CONTENT_TEXT &&
									v.detail.mightBeForeignElement &&
									$.shouldShowHoverAt(v.range)
								? new u.$3Bb(1e3, this, v.range, y.event.posx, y.event.posy, !1)
								: null;
					}
					computeSync(y, $) {
						if (
							this.a.getOption(d.EditorOption.inlineSuggest).showToolbar !==
							"onHover"
						)
							return [];
						const v = a.$O1b.get(this.a);
						return v && v.shouldShowHoverAt(y.range)
							? [new b(this, y.range, v)]
							: [];
					}
					renderHoverParts(y, $) {
						const v = new w.$Zc(),
							S = $[0];
						this.f.publicLog2("inlineCompletionHover.shown"),
							this.d.isScreenReaderOptimized() &&
								!this.a.getOption(
									d.EditorOption.screenReaderAnnounceInlineSuggestion,
								) &&
								v.add(this.g(y, S));
						const I = S.controller.model.get(),
							T = this.e.createInstance(
								h.$RDb,
								this.a,
								!1,
								(0, E.constObservable)(null),
								I.selectedInlineCompletionIndex,
								I.inlineCompletionsCount,
								I.activeCommands,
							),
							P = T.getDomNode();
						y.fragment.appendChild(P), I.triggerExplicitly(), v.add(T);
						const k = {
							hoverPart: S,
							hoverElement: P,
							dispose() {
								v.dispose();
							},
						};
						return new u.$4Bb([k]);
					}
					getAccessibleContent(y) {
						return n.localize(1253, null);
					}
					g(y, $) {
						const v = new w.$Zc(),
							S = t.$,
							I = S("div.hover-row.markdown-hover"),
							T = t.$fhb(
								I,
								S("div.hover-contents", { "aria-live": "assertive" }),
							),
							P = v.add(new c.$Qzb({ editor: this.a }, this.b, this.c)),
							k = (L) => {
								v.add(
									P.onDidRenderAsync(() => {
										(T.className = "hover-contents code-hover-contents"),
											y.onContentsChanged();
									}),
								);
								const D = n.localize(1254, null),
									M = v.add(
										P.render(
											new i.$cl().appendText(D).appendCodeblock("text", L),
										),
									);
								T.replaceChildren(M.element);
							};
						return (
							v.add(
								(0, E.autorun)((L) => {
									const D = $.controller.model
										.read(L)
										?.primaryGhostText.read(L);
									if (D) {
										const M = this.a.getModel().getLineContent(D.lineNumber);
										k(D.renderForScreenReader(M));
									} else t.$hhb(T);
								}),
							),
							y.fragment.appendChild(I),
							v
						);
					}
				};
				(e.$Vhc = s),
					(e.$Vhc = s =
						Ne(
							[
								j(1, r.$nM),
								j(2, o.$7rb),
								j(3, g.$XK),
								j(4, p.$Li),
								j(5, f.$km),
							],
							s,
						));
			},
		),
		