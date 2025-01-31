import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/encodedTokenAttributes.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/services/treeSitterParserService.js';
import '../../../../editor/contrib/inlineCompletions/browser/utils.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
define(
			de[3742],
			he([1, 0, 6, 3, 23, 171, 74, 763, 753, 10, 22, 20, 5, 35]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*network*/,
 E /*encodedTokenAttributes*/,
 C /*languages*/,
 d /*treeSitterParserService*/,
 m /*utils*/,
 r /*configuration*/,
 u /*files*/,
 a /*extensions*/,
 h /*instantiation*/,
 c /*themeService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NAc = void 0);
				const n = ["typescript"];
				e.$NAc = (0, h.$Mi)("treeSitterTokenizationFeature");
				let g = class extends i.$1c {
					constructor(f, b, s) {
						super(),
							(this.b = f),
							(this.c = b),
							(this.f = s),
							(this.a = new i.$0c()),
							this.h(),
							this.D(
								this.b.onDidChangeConfiguration((l) => {
									l.affectsConfiguration(d.$mV) && this.h();
								}),
							);
					}
					g() {
						return this.b.getValue(d.$mV) || [];
					}
					h() {
						const f = this.g();
						for (const b of f)
							if (n.includes(b) && !this.a.has(b)) {
								const s = new C.$kM(() => this.m(b)),
									l = new i.$Zc();
								l.add(s),
									l.add(C.$mM.registerFactory(b, s)),
									this.a.set(b, l),
									C.$mM.getOrCreate(b);
							}
					}
					async j(f) {
						const b = `vs/editor/common/languages/highlights/${f}.scm`;
						return (await this.f.readFile(w.$7g.asFileUri(b))).value.toString();
					}
					async m(f) {
						const b = await this.j(f);
						return this.c.createInstance(p, b, f);
					}
				};
				g = Ne([j(0, r.$gj), j(1, h.$Li), j(2, u.$ll)], g);
				let p = class extends i.$1c {
					constructor(f, b, s, l) {
						super(),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.b = new t.$re()),
							(this.onDidChangeTokens = this.b.event),
							this.D(
								t.Event.runAndSubscribe(this.m.onDidColorThemeChange, () =>
									this.r(),
								),
							);
					}
					n(f) {
						return this.j.getParseResult(f);
					}
					q() {
						if (!this.a) {
							const f = this.j.getOrInitLanguage(this.h);
							if (!f) {
								this.f ||
									(this.f = this.D(
										t.Event.onceIf(
											this.j.onDidAddLanguage,
											(b) => b.id === this.h,
										)((b) => {
											this.a = b.language.query(this.g);
										}),
									));
								return;
							}
							this.a = f.query(this.g);
						}
						return this.a;
					}
					r() {
						this.c = this.m.getColorTheme();
					}
					captureAtPosition(f, b, s) {
						return this.s(f, new m.$xCb(b, b), s);
					}
					s(f, b, s) {
						const l = this.n(s),
							y = this.q();
						return !l?.f || !y
							? []
							: y.captures(l.f.rootNode, {
									startPosition: { row: f - 1, column: b.startColumn - 1 },
									endPosition: { row: f - 1, column: b.endColumnExclusive },
								});
					}
					tokenizeEncoded(f, b) {
						const s = b.getLineMaxColumn(f),
							l = this.s(f, new m.$xCb(1, s), b);
						if (l.length === 0) return;
						let y = new Uint32Array(l.length * 2),
							$ = 0;
						const v = b.getOffsetAt({ lineNumber: f, column: 1 });
						for (let S = 0; S < l.length; S++) {
							const I = l[S],
								T = this.t(I.name),
								P = I.node.endIndex < v + s ? I.node.endIndex : v + s,
								k = I.node.startIndex < v ? v : I.node.startIndex,
								L = P - v;
							let D;
							const M = P - k;
							S > 0 ? (D = y[($ - 1) * 2]) : (D = k - v - 1);
							const N = L - M;
							if (D < N) {
								(y[$ * 2] = N), (y[$ * 2 + 1] = 0), $++;
								const A = new Uint32Array(y.length + 2);
								A.set(y), (y = A);
							}
							(y[$ * 2] = L), (y[$ * 2 + 1] = T), $++;
						}
						if (l[l.length - 1].node.endPosition.column + 1 < s) {
							const S = new Uint32Array(y.length + 2);
							S.set(y), (y = S), (y[$ * 2] = s), (y[$ * 2 + 1] = 0);
						}
						return y;
					}
					t(f) {
						const b = this.c.resolveScopes([[f]]);
						if (!b) return 0;
						let s = 0;
						if (typeof b.italic < "u") {
							const l = b.italic ? E.FontStyle.Italic : 0;
							s |= l | E.MetadataConsts.ITALIC_MASK;
						}
						if (typeof b.bold < "u") {
							const l = b.bold ? E.FontStyle.Bold : 0;
							s |= l | E.MetadataConsts.BOLD_MASK;
						}
						if (typeof b.underline < "u") {
							const l = b.underline ? E.FontStyle.Underline : 0;
							s |= l | E.MetadataConsts.UNDERLINE_MASK;
						}
						if (typeof b.strikethrough < "u") {
							const l = b.strikethrough ? E.FontStyle.Strikethrough : 0;
							s |= l | E.MetadataConsts.STRIKETHROUGH_MASK;
						}
						if (b.foreground) {
							const y =
								this.c.getTokenColorIndex().get(b?.foreground) <<
								E.MetadataConsts.FOREGROUND_OFFSET;
							s |= y;
						}
						return s;
					}
					dispose() {
						super.dispose(), this.a?.delete(), (this.a = void 0);
					}
				};
				(p = Ne([j(2, d.$nV), j(3, c.$iP)], p)),
					(0, a.$lK)(e.$NAc, g, a.InstantiationType.Eager);
			},
		)
