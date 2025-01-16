define(de[463], he([1, 0, 12, 38, 909]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$QK = e.$PK = e.$OK = void 0),
				(t = mt(t));
			const E = t.$m ? 1.5 : 1.35,
				C = 8;
			class d {
				static createFromValidatedSettings(u, a, h) {
					const c = u.get(i.EditorOption.fontFamily),
						n = u.get(i.EditorOption.fontWeight),
						g = u.get(i.EditorOption.fontSize),
						p = u.get(i.EditorOption.fontLigatures),
						o = u.get(i.EditorOption.fontVariations),
						f = u.get(i.EditorOption.lineHeight),
						b = u.get(i.EditorOption.letterSpacing);
					return d.a(c, n, g, p, o, f, b, a, h);
				}
				static createFromRawSettings(u, a, h = !1) {
					const c = i.EditorOptions.fontFamily.validate(u.fontFamily),
						n = i.EditorOptions.fontWeight.validate(u.fontWeight),
						g = i.EditorOptions.fontSize.validate(u.fontSize),
						p = i.EditorOptions.fontLigatures2.validate(u.fontLigatures),
						o = i.EditorOptions.fontVariations.validate(u.fontVariations),
						f = i.EditorOptions.lineHeight.validate(u.lineHeight),
						b = i.EditorOptions.letterSpacing.validate(u.letterSpacing);
					return d.a(c, n, g, p, o, f, b, a, h);
				}
				static a(u, a, h, c, n, g, p, o, f) {
					g === 0 ? (g = E * h) : g < C && (g = g * h),
						(g = Math.round(g)),
						g < C && (g = C);
					const b = 1 + (f ? 0 : w.EditorZoom.getZoomLevel() * 0.1);
					return (
						(h *= b),
						(g *= b),
						n === i.EditorFontVariations.TRANSLATE &&
							(a === "normal" || a === "bold"
								? (n = i.EditorFontVariations.OFF)
								: ((n = `'wght' ${parseInt(a, 10)}`), (a = "normal"))),
						new d({
							pixelRatio: o,
							fontFamily: u,
							fontWeight: a,
							fontSize: h,
							fontFeatureSettings: c,
							fontVariationSettings: n,
							lineHeight: g,
							letterSpacing: p,
						})
					);
				}
				constructor(u) {
					(this._bareFontInfoBrand = void 0),
						(this.pixelRatio = u.pixelRatio),
						(this.fontFamily = String(u.fontFamily)),
						(this.fontWeight = String(u.fontWeight)),
						(this.fontSize = u.fontSize),
						(this.fontFeatureSettings = u.fontFeatureSettings),
						(this.fontVariationSettings = u.fontVariationSettings),
						(this.lineHeight = u.lineHeight | 0),
						(this.letterSpacing = u.letterSpacing);
				}
				getId() {
					return `${this.pixelRatio}-${this.fontFamily}-${this.fontWeight}-${this.fontSize}-${this.fontFeatureSettings}-${this.fontVariationSettings}-${this.lineHeight}-${this.letterSpacing}`;
				}
				getMassagedFontFamily() {
					const u = i.EDITOR_FONT_DEFAULTS.fontFamily,
						a = d.b(this.fontFamily);
					return u && this.fontFamily !== u ? `${a}, ${u}` : a;
				}
				static b(u) {
					return /[,"']/.test(u) ? u : /[+ ]/.test(u) ? `"${u}"` : u;
				}
			}
			(e.$OK = d), (e.$PK = 2);
			class m extends d {
				constructor(u, a) {
					super(u),
						(this._editorStylingBrand = void 0),
						(this.version = e.$PK),
						(this.isTrusted = a),
						(this.isMonospace = u.isMonospace),
						(this.typicalHalfwidthCharacterWidth =
							u.typicalHalfwidthCharacterWidth),
						(this.typicalFullwidthCharacterWidth =
							u.typicalFullwidthCharacterWidth),
						(this.canUseHalfwidthRightwardsArrow =
							u.canUseHalfwidthRightwardsArrow),
						(this.spaceWidth = u.spaceWidth),
						(this.middotWidth = u.middotWidth),
						(this.wsmiddotWidth = u.wsmiddotWidth),
						(this.maxDigitWidth = u.maxDigitWidth);
				}
				equals(u) {
					return (
						this.fontFamily === u.fontFamily &&
						this.fontWeight === u.fontWeight &&
						this.fontSize === u.fontSize &&
						this.fontFeatureSettings === u.fontFeatureSettings &&
						this.fontVariationSettings === u.fontVariationSettings &&
						this.lineHeight === u.lineHeight &&
						this.letterSpacing === u.letterSpacing &&
						this.typicalHalfwidthCharacterWidth ===
							u.typicalHalfwidthCharacterWidth &&
						this.typicalFullwidthCharacterWidth ===
							u.typicalFullwidthCharacterWidth &&
						this.canUseHalfwidthRightwardsArrow ===
							u.canUseHalfwidthRightwardsArrow &&
						this.spaceWidth === u.spaceWidth &&
						this.middotWidth === u.middotWidth &&
						this.wsmiddotWidth === u.wsmiddotWidth &&
						this.maxDigitWidth === u.maxDigitWidth
					);
				}
			}
			e.$QK = m;
		}),
		define(
			de[600],
			he([1, 0, 7, 345, 6, 3, 2542, 38, 463]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$osb = e.$nsb = void 0);
				class r extends E.$1c {
					constructor() {
						super(...arguments),
							(this.a = new Map()),
							(this.b = -1),
							(this.c = this.D(new w.$re())),
							(this.onDidChange = this.c.event);
					}
					dispose() {
						this.b !== -1 && (clearTimeout(this.b), (this.b = -1)),
							super.dispose();
					}
					clearAllFontInfos() {
						this.a.clear(), this.c.fire();
					}
					f(h) {
						const c = (0, t.getWindowId)(h);
						let n = this.a.get(c);
						return n || ((n = new u()), this.a.set(c, n)), n;
					}
					g(h, c, n) {
						this.f(h).put(c, n),
							!n.isTrusted &&
								this.b === -1 &&
								(this.b = h.setTimeout(() => {
									(this.b = -1), this.h(h);
								}, 5e3));
					}
					h(h) {
						const c = this.f(h),
							n = c.getValues();
						let g = !1;
						for (const p of n) p.isTrusted || ((g = !0), c.remove(p));
						g && this.c.fire();
					}
					serializeFontInfo(h) {
						return this.f(h)
							.getValues()
							.filter((n) => n.isTrusted);
					}
					restoreFontInfo(h, c) {
						for (const n of c) {
							if (n.version !== m.$PK) continue;
							const g = new m.$QK(n, !1);
							this.g(h, g, g);
						}
					}
					readFontInfo(h, c) {
						const n = this.f(h);
						if (!n.has(c)) {
							let g = this.m(h, c);
							(g.typicalHalfwidthCharacterWidth <= 2 ||
								g.typicalFullwidthCharacterWidth <= 2 ||
								g.spaceWidth <= 2 ||
								g.maxDigitWidth <= 2) &&
								(g = new m.$QK(
									{
										pixelRatio: i.$sjb.getInstance(h).value,
										fontFamily: g.fontFamily,
										fontWeight: g.fontWeight,
										fontSize: g.fontSize,
										fontFeatureSettings: g.fontFeatureSettings,
										fontVariationSettings: g.fontVariationSettings,
										lineHeight: g.lineHeight,
										letterSpacing: g.letterSpacing,
										isMonospace: g.isMonospace,
										typicalHalfwidthCharacterWidth: Math.max(
											g.typicalHalfwidthCharacterWidth,
											5,
										),
										typicalFullwidthCharacterWidth: Math.max(
											g.typicalFullwidthCharacterWidth,
											5,
										),
										canUseHalfwidthRightwardsArrow:
											g.canUseHalfwidthRightwardsArrow,
										spaceWidth: Math.max(g.spaceWidth, 5),
										middotWidth: Math.max(g.middotWidth, 5),
										wsmiddotWidth: Math.max(g.wsmiddotWidth, 5),
										maxDigitWidth: Math.max(g.maxDigitWidth, 5),
									},
									!1,
								)),
								this.g(h, c, g);
						}
						return n.get(c);
					}
					j(h, c, n, g) {
						const p = new C.$lsb(h, c);
						return n.push(p), g?.push(p), p;
					}
					m(h, c) {
						const n = [],
							g = [],
							p = this.j("n", C.CharWidthRequestType.Regular, n, g),
							o = this.j("\uFF4D", C.CharWidthRequestType.Regular, n, null),
							f = this.j(" ", C.CharWidthRequestType.Regular, n, g),
							b = this.j("0", C.CharWidthRequestType.Regular, n, g),
							s = this.j("1", C.CharWidthRequestType.Regular, n, g),
							l = this.j("2", C.CharWidthRequestType.Regular, n, g),
							y = this.j("3", C.CharWidthRequestType.Regular, n, g),
							$ = this.j("4", C.CharWidthRequestType.Regular, n, g),
							v = this.j("5", C.CharWidthRequestType.Regular, n, g),
							S = this.j("6", C.CharWidthRequestType.Regular, n, g),
							I = this.j("7", C.CharWidthRequestType.Regular, n, g),
							T = this.j("8", C.CharWidthRequestType.Regular, n, g),
							P = this.j("9", C.CharWidthRequestType.Regular, n, g),
							k = this.j("\u2192", C.CharWidthRequestType.Regular, n, g),
							L = this.j("\uFFEB", C.CharWidthRequestType.Regular, n, null),
							D = this.j("\xB7", C.CharWidthRequestType.Regular, n, g),
							M = this.j("\u2E31", C.CharWidthRequestType.Regular, n, null),
							N = "|/-_ilm%";
						for (let U = 0, z = N.length; U < z; U++)
							this.j(N.charAt(U), C.CharWidthRequestType.Regular, n, g),
								this.j(N.charAt(U), C.CharWidthRequestType.Italic, n, g),
								this.j(N.charAt(U), C.CharWidthRequestType.Bold, n, g);
						(0, C.$msb)(h, c, n);
						const A = Math.max(
							b.width,
							s.width,
							l.width,
							y.width,
							$.width,
							v.width,
							S.width,
							I.width,
							T.width,
							P.width,
						);
						let R = c.fontFeatureSettings === d.EditorFontLigatures.OFF;
						const O = g[0].width;
						for (let U = 1, z = g.length; R && U < z; U++) {
							const F = O - g[U].width;
							if (F < -0.001 || F > 0.001) {
								R = !1;
								break;
							}
						}
						let B = !0;
						return (
							R && L.width !== O && (B = !1),
							L.width > k.width && (B = !1),
							new m.$QK(
								{
									pixelRatio: i.$sjb.getInstance(h).value,
									fontFamily: c.fontFamily,
									fontWeight: c.fontWeight,
									fontSize: c.fontSize,
									fontFeatureSettings: c.fontFeatureSettings,
									fontVariationSettings: c.fontVariationSettings,
									lineHeight: c.lineHeight,
									letterSpacing: c.letterSpacing,
									isMonospace: R,
									typicalHalfwidthCharacterWidth: p.width,
									typicalFullwidthCharacterWidth: o.width,
									canUseHalfwidthRightwardsArrow: B,
									spaceWidth: f.width,
									middotWidth: D.width,
									wsmiddotWidth: M.width,
									maxDigitWidth: A,
								},
								!0,
							)
						);
					}
				}
				e.$nsb = r;
				class u {
					constructor() {
						(this.a = Object.create(null)), (this.b = Object.create(null));
					}
					has(h) {
						const c = h.getId();
						return !!this.b[c];
					}
					get(h) {
						const c = h.getId();
						return this.b[c];
					}
					put(h, c) {
						const n = h.getId();
						(this.a[n] = h), (this.b[n] = c);
					}
					remove(h) {
						const c = h.getId();
						delete this.a[c], delete this.b[c];
					}
					getValues() {
						return Object.keys(this.a).map((h) => this.b[h]);
					}
				}
				e.$osb = new r();
			},
		),
		define(
			de[1607],
			he([
				1, 0, 139, 24, 6, 3, 82, 12, 1585, 600, 1524, 653, 38, 909, 463, 91, 7,
				345,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tsb = e.$ssb = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(C = mt(C)),
					(d = mt(d));
				let f = class extends E.$1c {
					constructor(I, T, P, k, L, D = !1, M = !1, N = void 0) {
						super(),
							(this.z = L),
							(this.c = this.D(new w.$re())),
							(this.onDidChange = this.c.event),
							(this.f = this.D(new w.$re())),
							(this.onDidChangeFast = this.f.event),
							(this.h = !1),
							(this.j = 1),
							(this.m = 1),
							(this.q = 0),
							(this.s = 1),
							(this.u = new h.ComputeOptionsMemory()),
							(this.isSimpleWidget = I),
							(this.isChatCodeblock = D),
							(this.isHallucinatedFunctionPreviewBox = M),
							(this.cursorCodeBlockType = N),
							(this.contextMenuId = T),
							(this.g = this.D(new m.$isb(k, P.dimension))),
							(this.t = (0, p.getWindow)(k).vscodeWindowId),
							(this.w = v(P)),
							(this.y = $.validateOptions(this.w)),
							(this.options = this.F()),
							(this.options.get(h.EditorOption.automaticLayout) ||
								this.options.get(h.EditorOption.automaticLayoutIgnoreHeight)) &&
								this.g.startObserving(
									this.options.get(h.EditorOption.automaticLayoutIgnoreHeight),
								),
							this.D(c.EditorZoom.onDidChangeZoomLevel(() => this.C())),
							this.D(a.$rsb.onDidChangeTabFocus(() => this.C())),
							this.D(this.g.onDidChange(() => this.C())),
							this.D(r.$osb.onDidChange(() => this.C())),
							this.D(
								o.$sjb
									.getInstance((0, p.getWindow)(k))
									.onDidChange(() => this.C()),
							),
							this.D(this.z.onDidChangeScreenReaderOptimized(() => this.C()));
					}
					C() {
						const I = this.F(),
							T = $.checkEquals(this.options, I);
						T !== null && ((this.options = I), this.f.fire(T), this.c.fire(T));
					}
					F() {
						const I = this.G(),
							T = n.$OK.createFromValidatedSettings(
								this.y,
								I.pixelRatio,
								this.isSimpleWidget &&
									this.cursorCodeBlockType !== "cppPreviewBox",
							),
							P = this.H(T),
							k = {
								memory: this.u,
								outerWidth: I.outerWidth,
								outerHeight: I.outerHeight - this.q,
								fontInfo: P,
								extraEditorClassName: I.extraEditorClassName,
								isDominatedByLongLines: this.h,
								viewLineCount: this.j,
								lineNumbersDigitCount: this.m,
								emptySelectionClipboard: I.emptySelectionClipboard,
								pixelRatio: I.pixelRatio,
								tabFocusMode: a.$rsb.getTabFocusMode(),
								accessibilitySupport: I.accessibilitySupport,
								glyphMarginDecorationLaneCount: this.s,
							};
						return $.computeOptions(this.y, k);
					}
					G() {
						return {
							extraEditorClassName: s(),
							outerWidth: this.g.getWidth(),
							outerHeight: this.g.getHeight(),
							emptySelectionClipboard: t.$Pfb || t.$Ofb,
							pixelRatio: o.$sjb.getInstance(
								(0, p.getWindowById)(this.t, !0).window,
							).value,
							accessibilitySupport: this.z.isScreenReaderOptimized()
								? g.AccessibilitySupport.Enabled
								: this.z.getAccessibilitySupport(),
						};
					}
					H(I) {
						return r.$osb.readFontInfo(
							(0, p.getWindowById)(this.t, !0).window,
							I,
						);
					}
					getRawOptions() {
						return this.w;
					}
					updateOptions(I) {
						const T = v(I);
						$.applyUpdate(this.w, T) &&
							((this.y = $.validateOptions(this.w)), this.C());
					}
					observeContainer(I) {
						this.g.observe(I);
					}
					setIsDominatedByLongLines(I) {
						this.h !== I && ((this.h = I), this.C());
					}
					setModelLineCount(I) {
						const T = b(I);
						this.m !== T && ((this.m = T), this.C());
					}
					setViewLineCount(I) {
						this.j !== I && ((this.j = I), this.C());
					}
					setReservedHeight(I) {
						this.q !== I && ((this.q = I), this.C());
					}
					setGlyphMarginDecorationLaneCount(I) {
						this.s !== I && ((this.s = I), this.C());
					}
				};
				(e.$ssb = f), (e.$ssb = f = Ne([j(4, g.$XK)], f));
				function b(S) {
					let I = 0;
					for (; S; ) (S = Math.floor(S / 10)), I++;
					return I || 1;
				}
				function s() {
					let S = "";
					return (
						!t.$Rfb && !t.$Sfb && (S += "no-user-select "),
						t.$Rfb &&
							((S += "no-minimap-shadow "), (S += "enable-user-select ")),
						d.$m && (S += "mac "),
						S
					);
				}
				class l {
					constructor() {
						this.c = [];
					}
					_read(I) {
						return this.c[I];
					}
					get(I) {
						return this.c[I];
					}
					_write(I, T) {
						this.c[I] = T;
					}
				}
				class y {
					constructor() {
						this.c = [];
					}
					_read(I) {
						if (I >= this.c.length)
							throw new Error("Cannot read uninitialized value");
						return this.c[I];
					}
					get(I) {
						return this._read(I);
					}
					_write(I, T) {
						this.c[I] = T;
					}
				}
				e.$tsb = y;
				class $ {
					static validateOptions(I) {
						const T = new l();
						for (const P of h.editorOptionsRegistry) {
							const k = P.name === "_never_" ? void 0 : I[P.name];
							T._write(P.id, P.validate(k));
						}
						return T;
					}
					static computeOptions(I, T) {
						const P = new y();
						for (const k of h.editorOptionsRegistry)
							P._write(k.id, k.compute(T, P, I._read(k.id)));
						return P;
					}
					static c(I, T) {
						if (typeof I != "object" || typeof T != "object" || !I || !T)
							return I === T;
						if (Array.isArray(I) || Array.isArray(T))
							return Array.isArray(I) && Array.isArray(T) ? i.$yb(I, T) : !1;
						if (Object.keys(I).length !== Object.keys(T).length) return !1;
						for (const P in I) if (!$.c(I[P], T[P])) return !1;
						return !0;
					}
					static checkEquals(I, T) {
						const P = [];
						let k = !1;
						for (const L of h.editorOptionsRegistry) {
							const D = !$.c(I._read(L.id), T._read(L.id));
							(P[L.id] = D), D && (k = !0);
						}
						return k ? new h.ConfigurationChangedEvent(P) : null;
					}
					static applyUpdate(I, T) {
						let P = !1;
						for (const k of h.editorOptionsRegistry)
							if (T.hasOwnProperty(k.name)) {
								const L = k.applyUpdate(I[k.name], T[k.name]);
								(I[k.name] = L.newValue), (P = P || L.didChange);
							}
						return P;
					}
				}
				function v(S) {
					const I = C.$vo(S);
					return (0, u.$qsb)(I), I;
				}
			},
		),
		define(
			de[346],
			he([1, 0, 38, 48, 17, 104, 748, 435, 1146]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Csb =
						e.$Bsb =
						e.SelectionStartKind =
						e.$Asb =
						e.$zsb =
						e.$ysb =
						e.$xsb =
						e.EditOperationType =
							void 0),
					(e.$Dsb = s);
				var r;
				(function (l) {
					(l[(l.Other = 0)] = "Other"),
						(l[(l.DeletingLeft = 2)] = "DeletingLeft"),
						(l[(l.DeletingRight = 3)] = "DeletingRight"),
						(l[(l.TypingOther = 4)] = "TypingOther"),
						(l[(l.TypingFirstSpace = 5)] = "TypingFirstSpace"),
						(l[(l.TypingConsecutiveSpace = 6)] = "TypingConsecutiveSpace");
				})(r || (e.EditOperationType = r = {}));
				const u = () => !0,
					a = () => !1,
					h = (l) => l === " " || l === "	";
				class c {
					static shouldRecreate(y) {
						return (
							y.hasChanged(t.EditorOption.layoutInfo) ||
							y.hasChanged(t.EditorOption.wordSeparators) ||
							y.hasChanged(t.EditorOption.emptySelectionClipboard) ||
							y.hasChanged(t.EditorOption.multiCursorMergeOverlapping) ||
							y.hasChanged(t.EditorOption.multiCursorPaste) ||
							y.hasChanged(t.EditorOption.multiCursorLimit) ||
							y.hasChanged(t.EditorOption.autoClosingBrackets) ||
							y.hasChanged(t.EditorOption.autoClosingComments) ||
							y.hasChanged(t.EditorOption.autoClosingQuotes) ||
							y.hasChanged(t.EditorOption.autoClosingDelete) ||
							y.hasChanged(t.EditorOption.autoClosingOvertype) ||
							y.hasChanged(t.EditorOption.autoSurround) ||
							y.hasChanged(t.EditorOption.useTabStops) ||
							y.hasChanged(t.EditorOption.fontInfo) ||
							y.hasChanged(t.EditorOption.readOnly) ||
							y.hasChanged(t.EditorOption.wordSegmenterLocales)
						);
					}
					constructor(y, $, v, S) {
						(this.languageConfigurationService = S),
							(this._cursorMoveConfigurationBrand = void 0),
							(this.a = y);
						const I = v.options,
							T = I.get(t.EditorOption.layoutInfo),
							P = I.get(t.EditorOption.fontInfo);
						(this.readOnly = I.get(t.EditorOption.readOnly)),
							(this.tabSize = $.tabSize),
							(this.indentSize = $.indentSize),
							(this.insertSpaces = $.insertSpaces),
							(this.stickyTabStops = I.get(t.EditorOption.stickyTabStops)),
							(this.lineHeight = P.lineHeight),
							(this.typicalHalfwidthCharacterWidth =
								P.typicalHalfwidthCharacterWidth),
							(this.pageSize = Math.max(
								1,
								Math.floor(T.height / this.lineHeight) - 2,
							)),
							(this.useTabStops = I.get(t.EditorOption.useTabStops)),
							(this.wordSeparators = I.get(t.EditorOption.wordSeparators)),
							(this.emptySelectionClipboard = I.get(
								t.EditorOption.emptySelectionClipboard,
							)),
							(this.copyWithSyntaxHighlighting = I.get(
								t.EditorOption.copyWithSyntaxHighlighting,
							)),
							(this.multiCursorMergeOverlapping = I.get(
								t.EditorOption.multiCursorMergeOverlapping,
							)),
							(this.multiCursorPaste = I.get(t.EditorOption.multiCursorPaste)),
							(this.multiCursorLimit = I.get(t.EditorOption.multiCursorLimit)),
							(this.autoClosingBrackets = I.get(
								t.EditorOption.autoClosingBrackets,
							)),
							(this.autoClosingComments = I.get(
								t.EditorOption.autoClosingComments,
							)),
							(this.autoClosingQuotes = I.get(
								t.EditorOption.autoClosingQuotes,
							)),
							(this.autoClosingDelete = I.get(
								t.EditorOption.autoClosingDelete,
							)),
							(this.autoClosingOvertype = I.get(
								t.EditorOption.autoClosingOvertype,
							)),
							(this.autoSurround = I.get(t.EditorOption.autoSurround)),
							(this.autoIndent = I.get(t.EditorOption.autoIndent)),
							(this.wordSegmenterLocales = I.get(
								t.EditorOption.wordSegmenterLocales,
							)),
							(this.surroundingPairs = {}),
							(this.b = null),
							(this.shouldAutoCloseBefore = {
								quote: this.d(y, this.autoClosingQuotes, !0),
								comment: this.d(y, this.autoClosingComments, !1),
								bracket: this.d(y, this.autoClosingBrackets, !1),
							}),
							(this.autoClosingPairs = this.languageConfigurationService
								.getLanguageConfiguration(y)
								.getAutoClosingPairs());
						const k = this.languageConfigurationService
							.getLanguageConfiguration(y)
							.getSurroundingPairs();
						if (k) for (const D of k) this.surroundingPairs[D.open] = D.close;
						const L =
							this.languageConfigurationService.getLanguageConfiguration(
								y,
							).comments;
						this.blockCommentStartToken = L?.blockCommentStartToken ?? null;
					}
					get electricChars() {
						if (!this.b) {
							this.b = {};
							const y = this.languageConfigurationService
								.getLanguageConfiguration(this.a)
								.electricCharacter?.getElectricCharacters();
							if (y) for (const $ of y) this.b[$] = !0;
						}
						return this.b;
					}
					onElectricCharacter(y, $, v) {
						const S = (0, C.$oM)($, v - 1),
							I = this.languageConfigurationService.getLanguageConfiguration(
								S.languageId,
							).electricCharacter;
						return I
							? I.onElectricCharacter(y, S, v - S.firstCharOffset)
							: null;
					}
					normalizeIndentation(y) {
						return (0, m.$ZO)(y, this.indentSize, this.insertSpaces);
					}
					d(y, $, v) {
						switch ($) {
							case "beforeWhitespace":
								return h;
							case "languageDefined":
								return this.f(y, v);
							case "always":
								return u;
							case "never":
								return a;
						}
					}
					f(y, $) {
						const v = this.languageConfigurationService
							.getLanguageConfiguration(y)
							.getAutoCloseBeforeSet($);
						return (S) => v.indexOf(S) !== -1;
					}
					visibleColumnFromColumn(y, $) {
						return d.$BM.visibleColumnFromColumn(
							y.getLineContent($.lineNumber),
							$.column,
							this.tabSize,
						);
					}
					columnFromVisibleColumn(y, $, v) {
						const S = d.$BM.columnFromVisibleColumn(
								y.getLineContent($),
								v,
								this.tabSize,
							),
							I = y.getLineMinColumn($);
						if (S < I) return I;
						const T = y.getLineMaxColumn($);
						return S > T ? T : S;
					}
				}
				e.$xsb = c;
				class n {
					static fromModelState(y) {
						return new g(y);
					}
					static fromViewState(y) {
						return new p(y);
					}
					static fromModelSelection(y) {
						const $ = E.$kL.liftSelection(y),
							v = new f(
								w.$iL.fromPositions($.getSelectionStart()),
								o.Simple,
								0,
								$.getPosition(),
								0,
							);
						return n.fromModelState(v);
					}
					static fromModelSelections(y) {
						const $ = [];
						for (let v = 0, S = y.length; v < S; v++)
							$[v] = this.fromModelSelection(y[v]);
						return $;
					}
					constructor(y, $) {
						(this._cursorStateBrand = void 0),
							(this.modelState = y),
							(this.viewState = $);
					}
					equals(y) {
						return (
							this.viewState.equals(y.viewState) &&
							this.modelState.equals(y.modelState)
						);
					}
				}
				e.$ysb = n;
				class g {
					constructor(y) {
						(this.modelState = y), (this.viewState = null);
					}
				}
				e.$zsb = g;
				class p {
					constructor(y) {
						(this.modelState = null), (this.viewState = y);
					}
				}
				e.$Asb = p;
				var o;
				(function (l) {
					(l[(l.Simple = 0)] = "Simple"),
						(l[(l.Word = 1)] = "Word"),
						(l[(l.Line = 2)] = "Line");
				})(o || (e.SelectionStartKind = o = {}));
				class f {
					constructor(y, $, v, S, I) {
						(this.selectionStart = y),
							(this.selectionStartKind = $),
							(this.selectionStartLeftoverVisibleColumns = v),
							(this.position = S),
							(this.leftoverVisibleColumns = I),
							(this._singleCursorStateBrand = void 0),
							(this.selection = f.a(this.selectionStart, this.position));
					}
					equals(y) {
						return (
							this.selectionStartLeftoverVisibleColumns ===
								y.selectionStartLeftoverVisibleColumns &&
							this.leftoverVisibleColumns === y.leftoverVisibleColumns &&
							this.selectionStartKind === y.selectionStartKind &&
							this.position.equals(y.position) &&
							this.selectionStart.equalsRange(y.selectionStart)
						);
					}
					hasSelection() {
						return !this.selection.isEmpty() || !this.selectionStart.isEmpty();
					}
					move(y, $, v, S) {
						return y
							? new f(
									this.selectionStart,
									this.selectionStartKind,
									this.selectionStartLeftoverVisibleColumns,
									new i.$hL($, v),
									S,
								)
							: new f(new w.$iL($, v, $, v), o.Simple, S, new i.$hL($, v), S);
					}
					static a(y, $) {
						return y.isEmpty() || !$.isBeforeOrEqual(y.getStartPosition())
							? E.$kL.fromPositions(y.getStartPosition(), $)
							: E.$kL.fromPositions(y.getEndPosition(), $);
					}
				}
				e.$Bsb = f;
				class b {
					constructor(y, $, v) {
						(this._editOperationResultBrand = void 0),
							(this.type = y),
							(this.commands = $),
							(this.shouldPushStackElementBefore =
								v.shouldPushStackElementBefore),
							(this.shouldPushStackElementAfter =
								v.shouldPushStackElementAfter);
					}
				}
				e.$Csb = b;
				function s(l) {
					return l === "'" || l === '"' || l === "`";
				}
			},
		),
		