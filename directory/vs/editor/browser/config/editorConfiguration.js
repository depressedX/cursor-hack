import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/browser.js';
import '../../../base/common/arrays.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/objects.js';
import '../../../base/common/platform.js';
import './elementSizeObserver.js';
import './fontMeasurements.js';
import './migrateOptions.js';
import './tabFocus.js';
import '../../common/config/editorOptions.js';
import '../../common/config/editorZoom.js';
import '../../common/config/fontInfo.js';
import '../../../platform/accessibility/common/accessibility.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/pixelRatio.js';
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
		