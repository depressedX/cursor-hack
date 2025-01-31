import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/resources.js';
import '../../../controlCommon/browser/solid.js';
import '../aiInput/plugins/mentions/pureIcon.js';
import '../badge/badge.js';
import '../highlightedLabel/HighlightedLabel.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/contextDisplay/listContextDisplay.js';
define(
			de[1070],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 19, 36, 156, 564, 818, 2515]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*web*/,
 u /*solid*/,
 a /*resources*/,
 h /*solid*/,
 c /*pureIcon*/,
 n /*badge*/,
 g /*HighlightedLabel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1cc = s);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)('<span class="context-list-item-lines">'),
					f = (0, t.template)('<span class="context-list-item-description">'),
					b = (0, t.template)(
						'<div class="context-list-item" role="button" tabindex="0"><div class="context-list-item-content"><span class="context-list-item-title"></span><span class="context-list-item-subtitle"><span>',
					);
				function s(l) {
					const y = (0, h.$odc)(),
						$ = (v) => (S) => {
							S.preventDefault(), v.onClick?.(v);
						};
					return (() => {
						const v = p(),
							S = l.setContainerRef;
						return (
							typeof S == "function"
								? (0, r.use)(S, v)
								: (l.setContainerRef = v),
							(0, d.insert)(
								v,
								(0, m.createComponent)(u.For, {
									get each() {
										return l.files;
									},
									children: (I) =>
										(() => {
											const T = b(),
												P = T.firstChild,
												k = P.firstChild,
												L = k.nextSibling,
												D = L.firstChild;
											return (
												(0, i.addEventListener)(T, "click", $(I)),
												(0, d.insert)(
													T,
													(0, m.createComponent)(c.$k$b, {
														get fileName() {
															return (0, a.$kh)(I.uri);
														},
														get fileKind() {
															return I.fileKind;
														},
														get workspaceContextService() {
															return y.workspaceContextService;
														},
														get modelService() {
															return y.modelService;
														},
														get languageService() {
															return y.languageService;
														},
														get height() {
															return l.variant === "compact" ? 14 : 16;
														},
													}),
													P,
												),
												k.style.setProperty("flex-shrink", "1"),
												(0, d.insert)(
													k,
													(0, m.createComponent)(g.$tbc, {
														get text() {
															return (0, a.$kh)(I.uri);
														},
														get highlights() {
															return I.titleMatches || [];
														},
													}),
												),
												L.style.setProperty("flex-basis", "0"),
												L.style.setProperty("flex-grow", "1"),
												D.style.setProperty("direction", "ltr"),
												D.style.setProperty("unicode-bidi", "embed"),
												(0, d.insert)(
													D,
													(0, m.createComponent)(u.Show, {
														get when() {
															return I.scope !== void 0;
														},
														get fallback() {
															return (0, m.createComponent)(g.$tbc, {
																get text() {
																	return y.workspaceContextService.asRelativePath(
																		(0, a.$mh)(I.uri),
																	);
																},
																get highlights() {
																	return I.subtitleMatches || [];
																},
															});
														},
														get children() {
															return (0, m.createComponent)(g.$tbc, {
																get text() {
																	return I.scope;
																},
																get highlights() {
																	return I.subtitleMatches || [];
																},
															});
														},
													}),
													null,
												),
												(0, d.insert)(
													D,
													(0, m.createComponent)(u.Show, {
														get when() {
															return I.selection;
														},
														get children() {
															const M = o();
															return (
																(0, d.insert)(
																	M,
																	() =>
																		`L${I.selection.startLineNumber}-${I.selection.endLineNumber}`,
																),
																M
															);
														},
													}),
													null,
												),
												(0, d.insert)(
													D,
													(0, m.createComponent)(u.Show, {
														get when() {
															return I.description;
														},
														get children() {
															const M = f();
															return (0, d.insert)(M, () => I.description), M;
														},
													}),
													null,
												),
												(0, d.insert)(
													P,
													(0, m.createComponent)(u.Show, {
														get when() {
															return I.badge || I.score !== void 0;
														},
														get children() {
															return (0, m.createComponent)(n.$nac, {
																get text() {
																	return I.badge || I.score.toFixed(2);
																},
																type: "subtle",
																size: "small",
																style: { "flex-shrink": 0 },
															});
														},
													}),
													null,
												),
												T
											);
										})(),
								}),
							),
							(0, C.effect)(
								(I) => {
									const T = `context-list ${l.variant === "compact" ? "context-list--compact" : ""}`,
										P = { "flex-shrink": 0, ...l.style };
									return (
										T !== I._v$ && (0, E.className)(v, (I._v$ = T)),
										(I._v$2 = (0, w.style)(v, P, I._v$2)),
										I
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							v
						);
					})();
				}
			},
		)
