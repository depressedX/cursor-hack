import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/charCode.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../common/services/unicodeTextModelHighlighter.js';
import '../../../common/services/editorWorker.js';
import '../../../common/languages/language.js';
import '../../../common/viewModel/viewModelDecorations.js';
import '../../hover/browser/hoverTypes.js';
import '../../hover/browser/markdownHoverParticipant.js';
import './bannerController.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../../css!vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js';
define(
			de[3221],
			he([
				1, 0, 15, 120, 14, 94, 3, 12, 37, 46, 38, 64, 122, 1630, 200, 61, 1631,
				368, 820, 2838, 4, 10, 5, 41, 63, 79, 174, 2325,
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
				I,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ikc =
						e.$Hkc =
						e.$Gkc =
						e.$Fkc =
						e.$Ekc =
						e.$Dkc =
						e.$Ckc =
						e.$Bkc =
						e.$Akc =
						e.$zkc =
							void 0),
					(d = mt(d)),
					(s = mt(s)),
					(e.$zkc = (0, S.$$O)(
						"extensions-warning-message",
						w.$ak.warning,
						s.localize(1553, null),
					));
				let T = class extends C.$1c {
					static {
						this.ID = "editor.contrib.unicodeHighlighter";
					}
					constructor(X, Y, ie, ne) {
						super(),
							(this.h = X),
							(this.j = Y),
							(this.m = ie),
							(this.a = null),
							(this.g = !1),
							(this.n = (ee) => {
								if (ee && ee.hasMore) {
									if (this.g) return;
									const _ = Math.max(
										ee.ambiguousCharacterCount,
										ee.nonBasicAsciiCharacterCount,
										ee.invisibleCharacterCount,
									);
									let te;
									if (ee.nonBasicAsciiCharacterCount >= _)
										te = { message: s.localize(1554, null), command: new q() };
									else if (ee.ambiguousCharacterCount >= _)
										te = { message: s.localize(1555, null), command: new x() };
									else if (ee.invisibleCharacterCount >= _)
										te = { message: s.localize(1556, null), command: new H() };
									else throw new Error("Unreachable");
									this.f.show({
										id: "unicodeHighlightBanner",
										message: te.message,
										icon: e.$zkc,
										actions: [
											{
												label: te.command.shortLabel,
												href: `command:${te.command.id}`,
											},
										],
										onClose: () => {
											this.g = !0;
										},
									});
								} else this.f.hide();
							}),
							(this.f = this.D(ne.createInstance(b.$ykc, X))),
							this.D(
								this.h.onDidChangeModel(() => {
									(this.g = !1), this.q();
								}),
							),
							(this.b = X.getOption(u.EditorOption.unicodeHighlighting)),
							this.D(
								ie.onDidChangeTrust((ee) => {
									this.q();
								}),
							),
							this.D(
								X.onDidChangeConfiguration((ee) => {
									ee.hasChanged(u.EditorOption.unicodeHighlighting) &&
										((this.b = X.getOption(u.EditorOption.unicodeHighlighting)),
										this.q());
								}),
							),
							this.q();
					}
					dispose() {
						this.a && (this.a.dispose(), (this.a = null)), super.dispose();
					}
					q() {
						if (
							(this.n(null),
							this.a && (this.a.dispose(), (this.a = null)),
							!this.h.hasModel())
						)
							return;
						const X = P(this.m.isWorkspaceTrusted(), this.b);
						if (
							[
								X.nonBasicASCII,
								X.ambiguousCharacters,
								X.invisibleCharacters,
							].every((ie) => ie === !1)
						)
							return;
						const Y = {
							nonBasicASCII: X.nonBasicASCII,
							ambiguousCharacters: X.ambiguousCharacters,
							invisibleCharacters: X.invisibleCharacters,
							includeComments: X.includeComments,
							includeStrings: X.includeStrings,
							allowedCodePoints: Object.keys(X.allowedCharacters).map((ie) =>
								ie.codePointAt(0),
							),
							allowedLocales: Object.keys(X.allowedLocales).map((ie) =>
								ie === "_os"
									? new Intl.NumberFormat().resolvedOptions().locale
									: ie === "_vscode"
										? d.$z
										: ie,
							),
						};
						this.j.canComputeUnicodeHighlights(this.h.getModel().uri)
							? (this.a = new k(this.h, Y, this.n, this.j))
							: (this.a = new L(this.h, Y, this.n));
					}
					getDecorationInfo(X) {
						return this.a ? this.a.getDecorationInfo(X) : null;
					}
				};
				(e.$Akc = T),
					(e.$Akc = T = Ne([j(1, n.$Cxb), j(2, I.$pO), j(3, y.$Li)], T));
				function P(W, X) {
					return {
						nonBasicASCII:
							X.nonBasicASCII === u.inUntrustedWorkspace ? !W : X.nonBasicASCII,
						ambiguousCharacters: X.ambiguousCharacters,
						invisibleCharacters: X.invisibleCharacters,
						includeComments:
							X.includeComments === u.inUntrustedWorkspace
								? !W
								: X.includeComments,
						includeStrings:
							X.includeStrings === u.inUntrustedWorkspace
								? !W
								: X.includeStrings,
						allowedCharacters: X.allowedCharacters,
						allowedLocales: X.allowedLocales,
					};
				}
				let k = class extends C.$1c {
					constructor(X, Y, ie, ne) {
						super(),
							(this.g = X),
							(this.h = Y),
							(this.j = ie),
							(this.m = ne),
							(this.a = this.g.getModel()),
							(this.f = this.g.createDecorationsCollection()),
							(this.b = this.D(new t.$Yh(() => this.n(), 250))),
							this.D(
								this.g.onDidChangeModelContent(() => {
									this.b.schedule();
								}),
							),
							this.b.schedule();
					}
					dispose() {
						this.f.clear(), super.dispose();
					}
					n() {
						if (this.a.isDisposed()) return;
						if (!this.a.mightContainNonBasicASCII()) {
							this.f.clear();
							return;
						}
						const X = this.a.getVersionId();
						this.m.computedUnicodeHighlights(this.a.uri, this.h).then((Y) => {
							if (this.a.isDisposed() || this.a.getVersionId() !== X) return;
							this.j(Y);
							const ie = [];
							if (!Y.hasMore)
								for (const ne of Y.ranges)
									ie.push({
										range: ne,
										options: U.instance.getDecorationFromOptions(this.h),
									});
							this.f.set(ie);
						});
					}
					getDecorationInfo(X) {
						if (!this.f.has(X)) return null;
						const Y = this.g.getModel();
						if (!(0, p.$mwb)(Y, X)) return null;
						const ie = Y.getValueInRange(X.range);
						return {
							reason: B(ie, this.h),
							inComment: (0, p.$nwb)(Y, X),
							inString: (0, p.$owb)(Y, X),
						};
					}
				};
				k = Ne([j(3, n.$Cxb)], k);
				class L extends C.$1c {
					constructor(X, Y, ie) {
						super(),
							(this.g = X),
							(this.h = Y),
							(this.j = ie),
							(this.a = this.g.getModel()),
							(this.f = this.g.createDecorationsCollection()),
							(this.b = this.D(new t.$Yh(() => this.m(), 250))),
							this.D(
								this.g.onDidLayoutChange(() => {
									this.b.schedule();
								}),
							),
							this.D(
								this.g.onDidScrollChange(() => {
									this.b.schedule();
								}),
							),
							this.D(
								this.g.onDidChangeHiddenAreas(() => {
									this.b.schedule();
								}),
							),
							this.D(
								this.g.onDidChangeModelContent(() => {
									this.b.schedule();
								}),
							),
							this.b.schedule();
					}
					dispose() {
						this.f.clear(), super.dispose();
					}
					m() {
						if (this.a.isDisposed()) return;
						if (!this.a.mightContainNonBasicASCII()) {
							this.f.clear();
							return;
						}
						const X = this.g.getVisibleRanges(),
							Y = [],
							ie = {
								ranges: [],
								ambiguousCharacterCount: 0,
								invisibleCharacterCount: 0,
								nonBasicAsciiCharacterCount: 0,
								hasMore: !1,
							};
						for (const ne of X) {
							const ee = c.$Ywb.computeUnicodeHighlights(this.a, this.h, ne);
							for (const _ of ee.ranges) ie.ranges.push(_);
							(ie.ambiguousCharacterCount += ie.ambiguousCharacterCount),
								(ie.invisibleCharacterCount += ie.invisibleCharacterCount),
								(ie.nonBasicAsciiCharacterCount +=
									ie.nonBasicAsciiCharacterCount),
								(ie.hasMore = ie.hasMore || ee.hasMore);
						}
						if (!ie.hasMore)
							for (const ne of ie.ranges)
								Y.push({
									range: ne,
									options: U.instance.getDecorationFromOptions(this.h),
								});
						this.j(ie), this.f.set(Y);
					}
					getDecorationInfo(X) {
						if (!this.f.has(X)) return null;
						const Y = this.g.getModel(),
							ie = Y.getValueInRange(X.range);
						return (0, p.$mwb)(Y, X)
							? {
									reason: B(ie, this.h),
									inComment: (0, p.$nwb)(Y, X),
									inString: (0, p.$owb)(Y, X),
								}
							: null;
					}
				}
				class D {
					constructor(X, Y, ie) {
						(this.owner = X), (this.range = Y), (this.decoration = ie);
					}
					isValidForHoverAnchor(X) {
						return (
							X.type === o.HoverAnchorType.Range &&
							this.range.startColumn <= X.range.startColumn &&
							this.range.endColumn >= X.range.endColumn
						);
					}
				}
				e.$Bkc = D;
				const M = s.localize(1557, null);
				let N = class {
					constructor(X, Y, ie) {
						(this.a = X), (this.b = Y), (this.f = ie), (this.hoverOrdinal = 5);
					}
					computeSync(X, Y) {
						if (!this.a.hasModel() || X.type !== o.HoverAnchorType.Range)
							return [];
						const ie = this.a.getModel(),
							ne = this.a.getContribution(T.ID);
						if (!ne) return [];
						const ee = [],
							_ = new Set();
						let te = 300;
						for (const Q of Y) {
							const Z = ne.getDecorationInfo(Q);
							if (!Z) continue;
							const re = ie.getValueInRange(Q.range).codePointAt(0),
								le = R(re);
							let oe;
							switch (Z.reason.kind) {
								case c.UnicodeHighlighterReasonKind.Ambiguous: {
									(0, m.$2f)(Z.reason.confusableWith)
										? (oe = s.localize(
												1558,
												null,
												le,
												R(Z.reason.confusableWith.codePointAt(0)),
											))
										: (oe = s.localize(
												1559,
												null,
												le,
												R(Z.reason.confusableWith.codePointAt(0)),
											));
									break;
								}
								case c.UnicodeHighlighterReasonKind.Invisible:
									oe = s.localize(1560, null, le);
									break;
								case c.UnicodeHighlighterReasonKind.NonBasicAscii:
									oe = s.localize(1561, null, le);
									break;
							}
							if (_.has(oe)) continue;
							_.add(oe);
							const ae = {
									codePoint: re,
									reason: Z.reason,
									inComment: Z.inComment,
									inString: Z.inString,
								},
								pe = s.localize(1562, null),
								$e = `command:${V.ID}?${encodeURIComponent(JSON.stringify(ae))}`,
								ye = new E.$cl("", !0)
									.appendMarkdown(oe)
									.appendText(" ")
									.appendLink($e, pe, M);
							ee.push(new f.$ghc(this, Q.range, [ye], !1, te++));
						}
						return ee;
					}
					renderHoverParts(X, Y) {
						return (0, f.$ihc)(X, Y, this.a, this.b, this.f);
					}
					getAccessibleContent(X) {
						return X.contents
							.map((Y) => Y.value)
							.join(`
`);
					}
				};
				(e.$Ckc = N), (e.$Ckc = N = Ne([j(1, g.$nM), j(2, $.$7rb)], N));
				function A(W) {
					return `U+${W.toString(16).padStart(4, "0")}`;
				}
				function R(W) {
					let X = `\`${A(W)}\``;
					return m.$kg.isInvisibleCharacter(W) || (X += ` "${`${O(W)}`}"`), X;
				}
				function O(W) {
					return W === i.CharCode.BackTick
						? "`` ` ``"
						: "`" + String.fromCodePoint(W) + "`";
				}
				function B(W, X) {
					return c.$Ywb.computeUnicodeHighlightReason(W, X);
				}
				class U {
					constructor() {
						this.a = new Map();
					}
					static {
						this.instance = new U();
					}
					getDecorationFromOptions(X) {
						return this.b(!X.includeComments, !X.includeStrings);
					}
					b(X, Y) {
						const ie = `${X}${Y}`;
						let ne = this.a.get(ie);
						return (
							ne ||
								((ne = h.$eY.createDynamic({
									description: "unicode-highlight",
									stickiness:
										a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									className: "unicode-highlight",
									showIfCollapsed: !0,
									overviewRuler: null,
									minimap: null,
									hideInCommentTokens: X,
									hideInStringTokens: Y,
								})),
								this.a.set(ie, ne)),
							ne
						);
					}
				}
				class z extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingInComments";
					}
					constructor() {
						super({
							id: x.ID,
							label: s.localize(1564, null),
							alias: "Disable highlighting of characters in comments",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1563, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.includeComments,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Dkc = z;
				class F extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingInStrings";
					}
					constructor() {
						super({
							id: x.ID,
							label: s.localize(1566, null),
							alias: "Disable highlighting of characters in strings",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1565, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.includeStrings,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Ekc = F;
				class x extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingOfAmbiguousCharacters";
					}
					constructor() {
						super({
							id: x.ID,
							label: s.localize(1568, null),
							alias: "Disable highlighting of ambiguous characters",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1567, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.ambiguousCharacters,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Fkc = x;
				class H extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingOfInvisibleCharacters";
					}
					constructor() {
						super({
							id: H.ID,
							label: s.localize(1570, null),
							alias: "Disable highlighting of invisible characters",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1569, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.invisibleCharacters,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Gkc = H;
				class q extends r.$itb {
					static {
						this.ID =
							"editor.action.unicodeHighlight.disableHighlightingOfNonBasicAsciiCharacters";
					}
					constructor() {
						super({
							id: q.ID,
							label: s.localize(1572, null),
							alias: "Disable highlighting of non basic ASCII characters",
							precondition: void 0,
						}),
							(this.shortLabel = s.localize(1571, null));
					}
					async run(X, Y, ie) {
						const ne = X?.get(l.$gj);
						ne && this.runAction(ne);
					}
					async runAction(X) {
						await X.updateValue(
							u.unicodeHighlightConfigKeys.nonBasicASCII,
							!1,
							l.ConfigurationTarget.USER,
						);
					}
				}
				e.$Hkc = q;
				class V extends r.$itb {
					static {
						this.ID = "editor.action.unicodeHighlight.showExcludeOptions";
					}
					constructor() {
						super({
							id: V.ID,
							label: s.localize(1573, null),
							alias: "Show Exclude Options",
							precondition: void 0,
						});
					}
					async run(X, Y, ie) {
						const {
								codePoint: ne,
								reason: ee,
								inString: _,
								inComment: te,
							} = ie,
							Q = String.fromCodePoint(ne),
							Z = X.get(v.$DJ),
							se = X.get(l.$gj);
						function re(ae) {
							return m.$kg.isInvisibleCharacter(ae)
								? s.localize(1574, null, A(ae))
								: s.localize(1575, null, `${A(ae)} "${Q}"`);
						}
						const le = [];
						if (ee.kind === c.UnicodeHighlighterReasonKind.Ambiguous)
							for (const ae of ee.notAmbiguousInLocales)
								le.push({
									label: s.localize(1576, null, ae),
									run: async () => {
										K(se, [ae]);
									},
								});
						if ((le.push({ label: re(ne), run: () => G(se, [ne]) }), te)) {
							const ae = new z();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						} else if (_) {
							const ae = new F();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						}
						if (ee.kind === c.UnicodeHighlighterReasonKind.Ambiguous) {
							const ae = new x();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						} else if (ee.kind === c.UnicodeHighlighterReasonKind.Invisible) {
							const ae = new H();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						} else if (
							ee.kind === c.UnicodeHighlighterReasonKind.NonBasicAscii
						) {
							const ae = new q();
							le.push({ label: ae.label, run: async () => ae.runAction(se) });
						} else J(ee);
						const oe = await Z.pick(le, { title: M });
						oe && (await oe.run());
					}
				}
				e.$Ikc = V;
				async function G(W, X) {
					const Y = W.getValue(u.unicodeHighlightConfigKeys.allowedCharacters);
					let ie;
					typeof Y == "object" && Y ? (ie = Y) : (ie = {});
					for (const ne of X) ie[String.fromCodePoint(ne)] = !0;
					await W.updateValue(
						u.unicodeHighlightConfigKeys.allowedCharacters,
						ie,
						l.ConfigurationTarget.USER,
					);
				}
				async function K(W, X) {
					const Y = W.inspect(u.unicodeHighlightConfigKeys.allowedLocales).user
						?.value;
					let ie;
					typeof Y == "object" && Y ? (ie = Object.assign({}, Y)) : (ie = {});
					for (const ne of X) ie[ne] = !0;
					await W.updateValue(
						u.unicodeHighlightConfigKeys.allowedLocales,
						ie,
						l.ConfigurationTarget.USER,
					);
				}
				function J(W) {
					throw new Error(`Unexpected value: ${W}`);
				}
				(0, r.$ntb)(x),
					(0, r.$ntb)(H),
					(0, r.$ntb)(q),
					(0, r.$ntb)(V),
					(0, r.$qtb)(
						T.ID,
						T,
						r.EditorContributionInstantiation.AfterFirstRender,
					),
					o.$5Bb.register(N);
			},
		),
		