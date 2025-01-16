define(
			de[255],
			he([
				1, 0, 7, 105, 50, 14, 26, 97, 6, 82, 46, 65, 281, 38, 680, 4, 92, 8, 20,
				5, 51, 2316,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lNb =
						e.$kNb =
						e.$jNb =
						e.$iNb =
						e.$hNb =
						e.$gNb =
						e.$fNb =
						e.$eNb =
						e.$dNb =
						e.$cNb =
						e.$bNb =
						e.$aNb =
						e.$_Mb =
						e.$$Mb =
						e.$0Mb =
						e.$9Mb =
						e.PeekContext =
						e.$7Mb =
							void 0),
					(e.$8Mb = $),
					(t = mt(t)),
					(r = mt(r)),
					(g = mt(g)),
					(e.$7Mb = (0, b.$Mi)("IPeekViewService")),
					(0, f.$lK)(
						e.$7Mb,
						class {
							constructor() {
								this.a = new Map();
							}
							addExclusiveWidget(I, T) {
								const P = this.a.get(I);
								P && (P.listener.dispose(), P.widget.dispose());
								const k = () => {
									const L = this.a.get(I);
									L &&
										L.widget === T &&
										(L.listener.dispose(), this.a.delete(I));
								};
								this.a.set(I, { widget: T, listener: T.onDidClose(k) });
							}
						},
						f.InstantiationType.Delayed,
					);
				var l;
				(function (I) {
					(I.inPeekEditor = new o.$5j(
						"inReferenceSearchEditor",
						!0,
						g.localize(1343, null),
					)),
						(I.notInPeekEditor = I.inPeekEditor.toNegated());
				})(l || (e.PeekContext = l = {}));
				let y = class {
					static {
						this.ID = "editor.contrib.referenceController";
					}
					constructor(T, P) {
						T instanceof h.$wDb && l.inPeekEditor.bindTo(P);
					}
					dispose() {}
				};
				(y = Ne([j(1, o.$6j)], y)),
					(0, u.$qtb)(y.ID, y, u.EditorContributionInstantiation.Eager);
				function $(I) {
					const T = I.get(a.$dtb).getFocusedCodeEditor();
					return T instanceof h.$wDb ? T.getParentEditor() : T;
				}
				const v = {
					headerBackgroundColor: d.$UL.white,
					primaryHeadingColor: d.$UL.fromHex("#333333"),
					secondaryHeadingColor: d.$UL.fromHex("#6c6c6cb3"),
				};
				let S = class extends n.$FLb {
					constructor(T, P, k) {
						super(T, P),
							(this.M = k),
							(this.j = new m.$re()),
							(this.onDidClose = this.j.event),
							r.$yo(this.options, v, !1);
					}
					dispose() {
						this.k || ((this.k = !0), super.dispose(), this.j.fire(this));
					}
					style(T) {
						const P = this.options;
						T.headerBackgroundColor &&
							(P.headerBackgroundColor = T.headerBackgroundColor),
							T.primaryHeadingColor &&
								(P.primaryHeadingColor = T.primaryHeadingColor),
							T.secondaryHeadingColor &&
								(P.secondaryHeadingColor = T.secondaryHeadingColor),
							super.style(T);
					}
					q() {
						super.q();
						const T = this.options;
						this.p &&
							T.headerBackgroundColor &&
							(this.p.style.backgroundColor =
								T.headerBackgroundColor.toString()),
							this.H &&
								T.primaryHeadingColor &&
								(this.H.style.color = T.primaryHeadingColor.toString()),
							this.I &&
								T.secondaryHeadingColor &&
								(this.I.style.color = T.secondaryHeadingColor.toString()),
							this.L &&
								T.frameColor &&
								(this.L.style.borderColor = T.frameColor.toString());
					}
					C(T) {
						this.B("peekview-widget"),
							(this.p = t.$(".head")),
							(this.L = t.$(".body")),
							this.P(this.p),
							this.T(this.L),
							T.appendChild(this.p),
							T.appendChild(this.L);
					}
					P(T, P) {
						(this.s = t.$(".peekview-title")),
							this.options.supportOnTitleClick &&
								(this.s.classList.add("clickable"),
								t.$$fb(this.s, "click", (D) => this.S(D))),
							t.$fhb(this.p, this.s),
							this.Q(this.s),
							(this.H = t.$("span.filename")),
							(this.I = t.$("span.dirname")),
							(this.J = t.$("span.meta")),
							t.$fhb(this.s, this.H, this.I, this.J);
						const k = t.$(".peekview-actions");
						t.$fhb(this.p, k);
						const L = this.R();
						(this.K = new i.$eib(k, L)),
							this.o.add(this.K),
							P ||
								this.K.push(
									new w.$rj(
										"peekview.close",
										g.localize(1344, null),
										C.ThemeIcon.asClassName(E.$ak.close),
										!0,
										() => (this.dispose(), Promise.resolve()),
									),
									{ label: !1, icon: !0 },
								);
					}
					Q(T) {}
					R() {
						return {
							actionViewItemProvider: p.$Pyb.bind(void 0, this.M),
							orientation: i.ActionsOrientation.HORIZONTAL,
						};
					}
					S(T) {}
					setTitle(T, P) {
						this.H &&
							this.I &&
							((this.H.innerText = T),
							this.H.setAttribute("title", T),
							P ? (this.I.innerText = P) : t.$9fb(this.I));
					}
					setMetaTitle(T) {
						this.J &&
							(T ? ((this.J.innerText = T), t.show(this.J)) : t.hide(this.J));
					}
					E(T, P) {
						if (!this.x && T < 0) {
							this.dispose();
							return;
						}
						const k = Math.ceil(
								this.editor.getOption(c.EditorOption.lineHeight) * 1.2,
							),
							L = Math.round(T - (k + 2));
						this.V(k, P), this.W(L, P);
					}
					V(T, P) {
						this.p &&
							((this.p.style.height = `${T}px`),
							(this.p.style.lineHeight = this.p.style.height));
					}
					W(T, P) {
						this.L && (this.L.style.height = `${T}px`);
					}
				};
				(e.$9Mb = S),
					(e.$9Mb = S = Ne([j(2, b.$Li)], S)),
					(e.$0Mb = (0, s.$wP)(
						"peekViewTitle.background",
						{
							dark: "#252526",
							light: "#F3F3F3",
							hcDark: d.$UL.black,
							hcLight: d.$UL.white,
						},
						g.localize(1345, null),
					)),
					(e.$$Mb = (0, s.$wP)(
						"peekViewTitleLabel.foreground",
						{
							dark: d.$UL.white,
							light: d.$UL.black,
							hcDark: d.$UL.white,
							hcLight: s.$9P,
						},
						g.localize(1346, null),
					)),
					(e.$_Mb = (0, s.$wP)(
						"peekViewTitleDescription.foreground",
						{
							dark: "#ccccccb3",
							light: "#616161",
							hcDark: "#FFFFFF99",
							hcLight: "#292929",
						},
						g.localize(1347, null),
					)),
					(e.$aNb = (0, s.$wP)(
						"peekView.border",
						{ dark: s.$mQ, light: s.$mQ, hcDark: s.$OP, hcLight: s.$OP },
						g.localize(1348, null),
					)),
					(e.$bNb = (0, s.$wP)(
						"peekViewResult.background",
						{
							dark: "#252526",
							light: "#F3F3F3",
							hcDark: d.$UL.black,
							hcLight: d.$UL.white,
						},
						g.localize(1349, null),
					)),
					(e.$cNb = (0, s.$wP)(
						"peekViewResult.lineForeground",
						{
							dark: "#bbbbbb",
							light: "#646465",
							hcDark: d.$UL.white,
							hcLight: s.$9P,
						},
						g.localize(1350, null),
					)),
					(e.$dNb = (0, s.$wP)(
						"peekViewResult.fileForeground",
						{
							dark: d.$UL.white,
							light: "#1E1E1E",
							hcDark: d.$UL.white,
							hcLight: s.$9P,
						},
						g.localize(1351, null),
					)),
					(e.$eNb = (0, s.$wP)(
						"peekViewResult.selectionBackground",
						{
							dark: "#3399ff33",
							light: "#3399ff33",
							hcDark: null,
							hcLight: null,
						},
						g.localize(1352, null),
					)),
					(e.$fNb = (0, s.$wP)(
						"peekViewResult.selectionForeground",
						{
							dark: d.$UL.white,
							light: "#6C6C6C",
							hcDark: d.$UL.white,
							hcLight: s.$9P,
						},
						g.localize(1353, null),
					)),
					(e.$gNb = (0, s.$wP)(
						"peekViewEditor.background",
						{
							dark: "#001F33",
							light: "#F2F8FC",
							hcDark: d.$UL.black,
							hcLight: d.$UL.white,
						},
						g.localize(1354, null),
					)),
					(e.$hNb = (0, s.$wP)(
						"peekViewEditorGutter.background",
						e.$gNb,
						g.localize(1355, null),
					)),
					(e.$iNb = (0, s.$wP)(
						"peekViewEditorStickyScroll.background",
						e.$gNb,
						g.localize(1356, null),
					)),
					(e.$jNb = (0, s.$wP)(
						"peekViewResult.matchHighlightBackground",
						{
							dark: "#ea5c004d",
							light: "#ea5c004d",
							hcDark: null,
							hcLight: null,
						},
						g.localize(1357, null),
					)),
					(e.$kNb = (0, s.$wP)(
						"peekViewEditor.matchHighlightBackground",
						{
							dark: "#ff8f0099",
							light: "#f5d802de",
							hcDark: null,
							hcLight: null,
						},
						g.localize(1358, null),
					)),
					(e.$lNb = (0, s.$wP)(
						"peekViewEditor.matchHighlightBorder",
						{ dark: null, light: null, hcDark: s.$PP, hcLight: s.$PP },
						g.localize(1359, null),
					));
			},
		),
		