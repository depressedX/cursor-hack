import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/constants.js';
import '../../aiConfig/browser/aiConfigHelper.js';
import '../../controlCommon/browser/solid.js';
import '../../aiCpp/browser/cppDebouncingService.js';
import './markdownData.js';
import './recognizers/bulletListRecognizer.js';
import './recognizers/orderedListRecognizer.js';
import './recognizers/bashResponseRecognizer.js';
import './recognizers/inlineCodeRecognizer.js';
import './recognizers/blockCodeRecognizer.js';
import './recognizers/boldTextRecognizer.js';
import './recognizers/italicsTextRecognizer.js';
import './recognizers/citationFootnoteRecognizer.js';
import './recognizers/trueCitationFootnoteRecognizer.js';
import './recognizers/citationLinkRecognizer.js';
import './recognizers/linkRecognizer.js';
import './recognizers/aiThoughtRecognizer.js';
import './recognizers/aiToolRecognizer.js';
import './recognizers/aiToolRawRecognizer.js';
import './recognizers/removeLineNumberInCodeBlockRecognizer.js';
import './recognizers/headerRecognizer.js';
import './recognizers/componentRecognizer.js';
import './recognizers/sectionRecognizer.js';
import './recognizers/inlineLatexRecognizer.js';
import './recognizers/blockLatexRecognizer.js';
import '../../../../css!vs/workbench/contrib/aiMarkdown/browser/katex.min.js';
import '../../../../css!vs/workbench/contrib/aiMarkdown/browser/markdown.js';
define(
			de[338],
			he([
				1, 0, 2, 2, 2, 2, 2, 13, 58, 270, 36, 551, 236, 2983, 2990, 3921, 3616,
				4233, 2982, 2988, 2984, 2992, 2985, 2989, 2977, 2979, 2978, 2991, 2986,
				4128, 4129, 2987, 2980, 1519, 1520,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*solid*/,
				m /*constants*/,
				r /*aiConfigHelper*/,
				u /*solid*/,
				a /*cppDebouncingService*/,
				h /*markdownData*/,
				c /*bulletListRecognizer*/,
				n /*orderedListRecognizer*/,
				g /*bashResponseRecognizer*/,
				p /*inlineCodeRecognizer*/,
				o /*blockCodeRecognizer*/,
				f /*boldTextRecognizer*/,
				b /*italicsTextRecognizer*/,
				s /*citationFootnoteRecognizer*/,
				l /*trueCitationFootnoteRecognizer*/,
				y /*citationLinkRecognizer*/,
				$ /*linkRecognizer*/,
				v /*aiThoughtRecognizer*/,
				S /*aiToolRecognizer*/,
				I /*aiToolRawRecognizer*/,
				T /*removeLineNumberInCodeBlockRecognizer*/,
				P /*headerRecognizer*/,
				k /*componentRecognizer*/,
				L /*sectionRecognizer*/,
				D /*inlineLatexRecognizer*/,
				M /*blockLatexRecognizer*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4$b = void 0);
				const N = (0, t.template)("<span>"),
					A = [
						c.$00b,
						n.$$0b,
						g.$_0b,
						p.$a$b,
						o.$L$b,
						f.$M$b,
						b.$N$b,
						s.$O$b,
						l.$P$b,
						y.$Q$b,
						$.$R$b,
						v.$S$b,
						S.$T$b,
						I.$U$b,
						T.$V$b,
						P.$W$b,
						k.$X$b,
						L.$1$b,
						D.$2$b,
						M.$3$b,
					],
					R = [P.$W$b, c.$00b, n.$$0b, v.$S$b, S.$T$b, I.$U$b, o.$L$b, M.$3$b],
					O = (U) => {
						const z = (0, u.$odc)(),
							F = [];
						let x = 0;
						const H = [],
							[q, V] = (0, d.createSignal)({}),
							[G, K] = (0, d.createSignal)(0);
						(0, d.createEffect)(() => {
							U.forTestsMostlyOnUsedLengthChanged?.(G());
						}),
							(0, d.onCleanup)(() => {
								F.forEach((ee) => ee.dispose()),
									(F.length = 0),
									H.forEach((ee) => {
										ee.ref.remove();
									});
							});
						const J = { isRendering: !1 },
							W = (0, d.createMemo)(() => [
								...A,
								...(U.customRecognizers ?? []),
							]),
							X = (0, d.createMemo)(() => [
								...(U.customRecognizers?.filter((ee) => ee.isSectionStarter) ??
									[]),
								...R,
							]);
						let Y = 0;
						const ie = new Map();
						W().forEach((ee) => {
							ie.set(ee.elementType, ee);
						});
						const ne = (0, a.$t6b)(() => {
							if (H.length === 0 || J.isRendering) return;
							(J.isRendering = !0),
								(async () => {
									try {
										let Q = function (re) {
												if (re === "") return;
												const le = H[H.length - 1];
												(0, h.$90b)(le, re);
											},
											Z = function () {
												let re = H.length - 1;
												for (
													;
													re > 1 &&
													H[re].type !== h.MarkdownElementType.SECTION;
												)
													re--;
												const le = H[re];
												if (le.type !== h.MarkdownElementType.SECTION) {
													console.log("SOMETHING WENT WRONG!!!!!", H);
													return;
												}
												const oe = U.rawText.slice(x, G());
												(x = G()), (le.rawText = oe);
											},
											_ = "",
											te = "",
											se = Date.now();
										for (; U.rawText.length > G(); ) {
											Date.now() - se > (U.frameCutoffTime ?? 100) &&
												((se = Date.now()),
												await new Promise((pe) => {
													z.window.requestAnimationFrame(pe);
												}));
											const re = U.rawText.slice(G());
											if (_.length > 0)
												if (_[0] === re[0]) {
													(_ = _.slice(1)), K(G() + 1);
													continue;
												} else _ = "";
											const le = W().flatMap((pe) => {
												const $e = pe.end(H, re, {
													markdownProps: U,
													usedLength: G(),
													sectionStarters: X(),
													currentNestLevel:
														pe.elementType === h.MarkdownElementType.BLOCK_CODE
															? Y
															: void 0,
												});
												if (H.at(-1)?.disallowAnyRecognitionInside === !0)
													return [$e];
												const ye = pe.start(H, re, G() === 0, {
													markdownProps: U,
													usedLength: G(),
													currentNestLevel:
														pe.elementType === h.MarkdownElementType.BLOCK_CODE
															? Y
															: void 0,
												});
												return (
													pe.elementType === h.MarkdownElementType.BLOCK_CODE &&
														($e.state === "intermediate"
															? (Y = $e.nestLevel ?? 0)
															: $e.state === "success" && (Y = 0)),
													[ye, $e]
												);
											});
											if (
												le.some((pe) => pe.state === "possible") &&
												!U.finished
											)
												break;
											const oe = le.filter((pe) => pe.state === "success");
											if (oe.length === 0) {
												K(G() + 1), (te += re[0]);
												continue;
											}
											Q(te), (te = "");
											const ae = oe.reduce((pe, $e) =>
												pe.length < $e.length ? $e : pe,
											);
											if (ae.startOrEnd === "end") {
												ae.elementType === h.MarkdownElementType.SECTION && Z();
												let pe = H.pop();
												for (
													pe.endElementHook && (_ = pe.endElementHook());
													pe.type !== ae.elementType;
												)
													(pe = H.pop()),
														pe.endElementHook && (_ += pe.endElementHook());
												K(G() + ae.length);
											} else if (ae.startOrEnd === "start") {
												const pe = re.slice(0, ae.length);
												ae.elementType &&
													H.length === 2 &&
													H[1].type === h.MarkdownElementType.SECTION &&
													X().find(($e) => $e.elementType === ae.elementType) &&
													H[H.length - 1].ref.innerHTML.trim().length > 0 &&
													(Z(),
													H.pop()?.endElementHook?.(),
													L.$1$b.createElement(H, "", F, z, U)),
													ie
														.get(ae.elementType)
														.createElement(H, pe, F, z, U, q, V),
													K(G() + pe.length);
											}
										}
										if ((te.length > 0 && Q(te), U.finished)) {
											for (; H.length > 1; ) {
												H.length === 2 && Z();
												const re = H.pop();
												re.endElementHook && re.endElementHook();
											}
											U.onFinish?.();
										}
									} finally {
										J.isRendering = !1;
									}
								})();
						}, 20);
						return (
							(0, d.createEffect)(
								(0, d.on)([() => U.rawText, () => U.finished], () => {
									ne();
								}),
							),
							(0, d.createEffect)(() => {
								U.codeBlockProps?.resetCodeBlockCount?.() &&
									(U.setCodeBlockCount(0),
									U.codeBlockProps?.setResetCodeBlockCount?.(!1));
							}),
							(() => {
								const ee = N();
								return (
									(0, C.use)((_) => {
										H.push({ ref: _, type: h.MarkdownElementType.ROOT });
									}, ee),
									ee.style.setProperty("user-select", "text"),
									(0, E.effect)(() =>
										(0, w.className)(
											ee,
											"anysphere-markdown-container-root" +
												(U.class ? ` ${U.class}` : ""),
										),
									),
									ee
								);
							})()
						);
					},
					B = (U) => {
						const [z, F] = (0, d.createSignal)(""),
							[x, H] = (0, d.createSignal)(!1),
							[q, V] = (0, d.createSignal)(1),
							G = (0, u.$odc)(),
							[K] = (0, r.$K0b)(m.$lW, G.configurationService, !1),
							[J, W] = (0, d.createSignal)(0);
						return (
							(0, d.createEffect)(() => {
								let X = !1;
								!U.finished && x() && (X = !0),
									U.rawText.startsWith(z()) || (X = !0),
									X && V(q() + 1),
									F(U.rawText),
									H(U.finished);
							}),
							(0, i.createComponent)(d.Show, {
								get when() {
									return q();
								},
								keyed: !0,
								children: (X) =>
									(0, i.createComponent)(O, {
										get rawText() {
											return U.rawText;
										},
										get codeBlockProps() {
											return U.codeBlockProps;
										},
										get finished() {
											return U.finished;
										},
										get components() {
											return U.components;
										},
										get chatExtras() {
											return U.chatExtras;
										},
										get composerExtras() {
											return U.composerExtras;
										},
										get canQuoteMessages() {
											return U.canQuoteMessages;
										},
										get showSectionToolbar() {
											return U.showSectionToolbar;
										},
										get symbolLinks() {
											return U.symbolLinks;
										},
										get fileLinks() {
											return U.fileLinks;
										},
										get class() {
											return U.class;
										},
										get shouldFade() {
											return U.shouldFade ?? K();
										},
										get frameCutoffTime() {
											return U.frameCutoffTime;
										},
										get customRecognizers() {
											return U.customRecognizers;
										},
										get allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN() {
											return U.allowCommandLinks_POTENTIALLY_UNSAFE_PLEASE_ONLY_USE_FOR_HANDWRITTEN_TRUSTED_MARKDOWN;
										},
										get onFinish() {
											return U.onFinish;
										},
										codeBlockCount: J,
										setCodeBlockCount: W,
									}),
							})
						);
					};
				e.$4$b = B;
			},
		),
		