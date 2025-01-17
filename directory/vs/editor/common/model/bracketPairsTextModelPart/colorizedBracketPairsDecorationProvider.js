import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../core/range.js';
import '../../core/editorColorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
define(
			de[2854],
			he([1, 0, 6, 3, 17, 307, 35]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$uU = void 0);
				class d extends i.$1c {
					constructor(u) {
						super(),
							(this.g = u),
							(this.b = new m()),
							(this.f = new t.$re()),
							(this.onDidChange = this.f.event),
							(this.a = u.getOptions().bracketPairColorizationOptions),
							this.D(
								u.bracketPairs.onDidChange((a) => {
									this.f.fire();
								}),
							);
					}
					handleDidChangeOptions(u) {
						this.a = this.g.getOptions().bracketPairColorizationOptions;
					}
					getDecorationsInRange(u, a, h, c) {
						return c
							? []
							: a === void 0
								? []
								: this.a.enabled
									? this.g.bracketPairs
											.getBracketsInRange(u, !0)
											.map((g) => ({
												id: `bracket${g.range.toString()}-${g.nestingLevel}`,
												options: {
													description: "BracketPairColorization",
													inlineClassName: this.b.getInlineClassName(
														g,
														this.a.independentColorPoolPerBracketType,
													),
												},
												ownerId: 0,
												range: g.range,
											}))
											.toArray()
									: [];
					}
					getAllDecorations(u, a) {
						return u === void 0
							? []
							: this.a.enabled
								? this.getDecorationsInRange(
										new w.$iL(1, 1, this.g.getLineCount(), 1),
										u,
										a,
									)
								: [];
					}
				}
				e.$uU = d;
				class m {
					constructor() {
						this.unexpectedClosingBracketClassName =
							"unexpected-closing-bracket";
					}
					getInlineClassName(u, a) {
						return u.isInvalid
							? this.unexpectedClosingBracketClassName
							: this.getInlineClassNameOfLevel(
									a ? u.nestingLevelOfEqualBracketType : u.nestingLevel,
								);
					}
					getInlineClassNameOfLevel(u) {
						return `bracket-highlighting-${u % 30}`;
					}
				}
				(0, C.$oP)((r, u) => {
					const a = [E.$_T, E.$aU, E.$bU, E.$cU, E.$dU, E.$eU],
						h = new m();
					u.addRule(
						`.monaco-editor .${h.unexpectedClosingBracketClassName} { color: ${r.getColor(E.$fU)}; }`,
					);
					const c = a
						.map((n) => r.getColor(n))
						.filter((n) => !!n)
						.filter((n) => !n.isTransparent());
					for (let n = 0; n < 30; n++) {
						const g = c[n % c.length];
						u.addRule(
							`.monaco-editor .${h.getInlineClassNameOfLevel(n)} { color: ${g}; }`,
						);
					}
				});
			},
		),
		